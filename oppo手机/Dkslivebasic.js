log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
//自动点击允许截图
threads.start(function () {
    while (1) {
        clickable().text('允许').id('android:id/button1').findOnce() ? clickable().text('允许').id('android:id/button1').findOnce().click() : ''
        text('保持本地').findOnce() ? click(100, 300) : ''
        text('好友推荐').findOnce() ? id('com.ss.android.ugc.aweme:id/xd').findOnce().click() : ''
        sleep(200)
        text('温馨提示').findOnce() ? text('同意并继续').findOnce().click() : ''
        sleep(200)
        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''

    }

})
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

// ----------常量----------
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';
// var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';
var departure = 12;
var randomProbal = .5 //动作随机执行的概率（1-randomProbal）
var repeat = 0;

var mybounds = {}
if (device.model.replace(/\s/g, "") === 'Redmi8A') {
    mybounds = {

        zan: [610, 964, 710, 1064],

        focus: [430, 405],

        comment: [610, 1110, 710, 1210]

    }
} else if (device.model.replace(/\s/g, "") === 'Redmi6A') {
    mybounds = {

        zan: [610, 884, 710, 984],

        focus: [430, 405],

        comment: [610, 1030, 710, 1130]

    }
} else if (device.model.replace(/\s/g, "") === 'LeX620') {
    mybounds = {

        zan: [934, 966, 1065, 1097],

        focus: [620, 450],

        comment: [947, 1168, 1052, 1273]

    }

} else if (device.model.replace(/\s/g, "") === 'OPPOR11') {
    mybounds = {

        zan: [870, 1230, 1080, 1419],

        focus: [650, 610],

        comment: [870, 1449, 1080, 1638]

    }
} else {
    //摩托
    mybounds = {

        zan: [935, 1191, 1066, 1332],

        focus: [700, 550],

        comment: [935, 1382, 1066, 1513]

    }
}

var config = {
    bounds: mybounds,
    control: {
        zan: 'com.smile.gifmaker:id/like_button',

        focus: 'com.smile.gifmaker:id/heaer_follow_button',

        comment: 'com.smile.gifmaker:id/comment_button',

        forward: 'com.smile.gifmaker:id/forward_button',

        push: 'com.smile.gifmaker:id/finish_button',

        search: 'com.smile.gifmaker:id'
    }
}


//----------特有弹窗判断----------------
threads.start(function () {
    //在新线程执行的代码
    while (true) {
        let Pop_up = []
        Pop_up = [{
                text: '同意授权',
                find: '下次再说'
            },
            {
                text: '检测到新版本',
                find: '以后再说'
            },
            {
                text: '检测到更新',
                find: '以后再说'
            },
            {
                text: '进入儿童/青少年模式',
                find: '我知道了'
            },
            {
                text: '发现通讯录好友',
                find: '取消'
            },
            {
                text: '允许访问你的',
                find: '允许'
            },
            {
                text: '立即升级',
                find: '以后再说'
            },
            {
                text: '该帐号近期存在违规记录，确认关注？',
                find: '确认'
            },
            {
                text: '是否用流量观看',
                find: '确认'
            },
            {
                text: '个人信息保护指引',
                find: '好的'
            }
        ]
        let start = new Date().getTime()
        for (i = 0, len = Pop_up.length; i < len; i++) {
            let boole = text(Pop_up[i].text).exists()
            if (!boole) continue;
            switch (Pop_up[i].find) {
                case 'YXZ':
                    // log('坐标点击')
                    sleep(2000)
                    click(50, 50)
                    break;
                case 'back':
                    // log('回退')
                    sleep(2000)
                    back()
                    break;
                default:
                    // log('抓取text')
                    sleep(2000)
                    clickable().text(Pop_up[i].find).findOnce() ? clickable().text(Pop_up[i].find).findOnce().click() : '';
            }
        }
        let end = new Date().getTime()
        let stult = end - start
        // log(stult + 'ms')
        // log('子线程')
    }
});

//-------------通用函数封装--------------
// 获取任务信息
function getTaskInfo(taskId, url) {
    toastLog('获取任务参数值开始')
    let res = http.postJson(url, {
        "taskId": taskId
    });
    if (res.statusCode == 200) {
        let resdata = res.body.string();
        let taskres = JSON.parse(resdata).data
        // log("全部任务信息" + taskres)

        let TotaskParam = parseJSON(taskres)
        //执行动作、任务值
        var needExecuteActions = TotaskParam.needAction.split(',');
        var paramMap = {};


        TotaskParam.paramvalue.forEach((paramObj, j) => {
            paramMap[paramObj.paramId] = paramObj.paramValue;
        });

        // log('动作action', needExecuteActions)
        // log("详细参数paramMap", paramMap);

        var taskInfo = {}
        taskInfo.action = needExecuteActions;
        taskInfo.param = paramMap;
        return taskInfo;
    }
    toastLog('获取任务参数值结束')
}

//数据转化为对应类型
function parseJSON(data) {
    let datejson = '';
    if (typeof data === "string") {
        try {
            datejson = JSON.parse(data);
        } catch (e) {
            datejson = new Function("return " + data)();
        }
    } else {
        datejson = data;
    }
    return datejson;
};

/**
 *
 * @param {boolean} isHorizontal  是否是横向滑动
 * @param {boolean} isSmallToLarge 滑动方向,是否从小到大
 * @param {float} percent 百分比小数点
 */
function autoSwipe(isHorizontal, isSmallToLarge, percent, bounds) {

    if (!(percent instanceof Number)) {
        percent = 0.7;
    }

    if (percent => 1.0) {
        percent = 0.7;
    }

    left = bounds ? bounds.left : 0;

    top = bounds ? bounds.top : 0;

    right = bounds ? bounds.right : device.width;

    bottom = bounds ? bounds.bottom : device.height;

    log(percent)
    log(left, top, right, bottom)

    w = right - left;
    h = bottom - top;


    duration = random(600, 1200);

    if (isHorizontal) {

        y1 = y2 = top + h / 2;

        space = w * (1.0 - percent);

        x1 = left + space;

        x2 = w - 0.05 * space;

        swipe((isSmallToLarge ? x1 : x2), y1, (isSmallToLarge ? x2 : x1), y2, duration);


    } else {

        x1 = x2 = left + w / 2;

        space = h * (1.0 - percent);

        y1 = top + space;
        if (device.model.replace(/\s/g, "") === 'Redmi6A' || device.model.replace(/\s/g, "") === 'XT1805') {
            y2 = h - space;
        } else {
            y2 = h - 0.5 * space;
        }

        swipe(x1, (isSmallToLarge ? y1 : y2), x2, (isSmallToLarge ? y2 : y1), duration);

    }

};
/**
 *
 * 从下到上
 *
 * @param {rect} bounds 边框范围，可以为 null，默认区屏幕区域
 */
function autoSwipe_toTop(bounds) {
    autoSwipe(false, false, null, bounds);
};
/**
 *
 * 从上到下
 *
 * @param {rect} bounds 边框范围，可以为 null，默认区屏幕区域
 */
function autoSwipe_toBottom(bounds) {
    autoSwipe(false, true, null, bounds);
};
/**
 *
 * 从左到右
 *
 * @param {rect} bounds 边框范围，可以为 null，默认区屏幕区域
 */
function autoSwipe_toRight(bounds) {
    autoSwipe(true, true, null, bounds);
};
/**
 *
 * 从右到左
 *
 * @param {rect} bounds 边框范围，可以为 null，默认区屏幕区域
 */
function autoSwipe_toLeft(bounds) {
    autoSwipe(true, false, null, bounds);
};

/* 杀进程操作
package  程序名
time 间隔时间
type  操作类型
config  手机配置文件
*/
function closeandopen(package, time, type, config) {
    if (type == 'single') {
        launch(package);
        sleep(time * 1000)
        let packageName = package;
        app.openAppSetting(packageName);
        text(app.getAppName(packageName)).waitFor();
        let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
        if (is_sure.enabled()) {
            textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
            id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOne() ? id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOnce().click() : log('按钮点击不到');
            log(app.getAppName(packageName) + "应用已被关闭");
            sleep(1000);
            back();
        } else {
            log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
            back();
        }
        sleep(time * 1000)
        launch(package);
    } else {
        launch(package);
        sleep(time * 1000)
        home()
        sleep(2000)
        recents()
        sleep(1000)
        log('点击清除后台任务按钮')
        id('clearAnimView').findOne(2000).click()
        sleep(time * 1000)
        launch(package);

    }

}


/* 打开链接
 *link  链接
 *package  app包名
 */
function jumpThelink(link, package) {
    sleep(3000);
    home();
    setClip(link.trim());
    sleep(5000);
    log(link);
    log("开始打开app");
    launch(package);
    sleep(10000);
    // targetBtn = text('看看TA的主页').findOnce();
    targetBtn = text('去看看').findOnce();

    if (targetBtn) {
        log("开始点击按钮");
        sleep(8000);
        click(targetBtn.bounds().centerX(), targetBtn.bounds().centerY());
        log("x" + targetBtn.bounds().centerX() + "y" + targetBtn.bounds().centerY());
        log("结束点击");
        sleep(3000);
    } else {
        toastLog('未找到链接地址');
    }
};

/* 推出直播间
package app包名
*/
function exit(package) {
    id("live_close").findOne().click();
    sleep(2000);
    if (id('exit_btn').exists()) {
        id('exit_btn').findOne().click();
    }
    closeandopen(package, 10, 'single');
}

/*
 * 切换大屏模式
 */
function switchStatus() {
    if (desc("菜单").exists()) {
        desc("菜单").click()
        sleep(2000);
        if (id('tab_browse_settings').exists()) {
            id('tab_browse_settings').click()
        }
        sleep(2000);
    }
}

//-------------实际运行模块---------------
function doaction(package, parameter) {

    closeandopen(package, 10, 'single');

    toastLog('等待程序打开')
    sleep(15000)

    switchStatus()

    log(parameter);
    if (parameter.param['live_room_status'] == 1) {
        jumpThelink(parseJSON(parameter.param['live_room_url'])[0], package)
    } else {
        exit(package)
    }

}



function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)
        doaction('com.smile.gifmaker', res, randomProbal);

    } catch (error) {
        toastLog(error + '错误');
        repeat++;
        if (repeat < 3) {
            main()
        } else {
            TKB.wzaandhome()
        }

    }

    sleep(3000)
    threads.shutDownAll();
}

main();