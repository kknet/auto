log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
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
var departure = 12;
var randomProbal = .2 //动作随机执行的概率（1-randomProbal）
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

    // log(percent)
    // log(left, top, right, bottom)

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

        y1 = top + 0.5 * space;

        if (device.model.replace(/\s/g, "") === 'Redmi6A' || device.model.replace(/\s/g, "") === 'XT1805') {
            y2 = h - space;
        } else {
            y2 = h - 0.5 * space;
        }

        swipe(x1, (isSmallToLarge ? y1 : y2), x2, (isSmallToLarge ? y2 : y1), duration);
        log((isSmallToLarge ? x1 : x2), y1, (isSmallToLarge ? x2 : x1), y2, duration)

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

/* 点赞操作
type  操作类型
config  手机配置文件
departure  最大偏差范围
*/
function likeCanclelike(type, config, departure) {
    if (!clickable().id(config.control.zan).findOne()) {
        log('当前页面没有点赞按钮')
        return
    }
    toastLog('-----开始点赞/取消点赞-----');
    let centerX = (config.bounds.zan[0] + config.bounds.zan[2]) / 2;
    let centerY = (config.bounds.zan[1] + config.bounds.zan[3]) / 2;
    let img = captureScreen();
    sleep(2000);
    let color = images.pixel(img, centerX, centerY);
    sleep(2000);
    let isSmr = colors.isSimilar(colors.toString(color), '#fff94e79', departure);
    sleep(2000);
    log('显示该颜色值', colors.toString(color));
    log('已点赞?', isSmr);
    switch (type) {
        case "LIKE":
            if (!isSmr && clickable().id(config.control.zan).findOne()) {
                click(centerX, centerY);
                sleep(2000);
            } else {
                toast('已点击');
            }
            break;
        case "UNLIKE":
            if (isSmr && clickable().id(config.control.zan).findOne()) {
                click(centerX, centerY);
                sleep(2000);
            } else {
                toast('已取消已点击');
            }
            break;
    }
    toastLog('-----结束点赞/取消点赞-----');
};

/* 关注操作
type  操作类型
config  手机配置文件
departure  最大偏差范围
*/
function attentionCancleattention(type, config, departure) {
    // if (!clickable().id(config.control.focus).findOne()) {
    //     log('当前页面没有关注按钮')
    //     return
    // }
    toastLog('-----开始关注/取消关注-----');
    let centerX = config.bounds.focus[0];
    let centerY = config.bounds.focus[1];
    let img = captureScreen();
    sleep(2000);
    let color = images.pixel(img, centerX, centerY);
    sleep(2000);
    let isSmr = colors.isSimilar(colors.toString(color), '#ff393a44', departure);
    sleep(2000);
    log('显示该颜色值', colors.toString(color));
    log('已关注?', isSmr);
    switch (type) {
        case "ATTENTION":
            if (!isSmr) {
                click(centerX, centerY);
                sleep(2000);
            } else {
                toast('已点击');
            }
            break;
        case "UNATTENTION":
            if (isSmr) {
                click(centerX, centerY);
                sleep(2000);
            } else {
                toast('已取消已点击');
            }
            break;
    }
    toastLog('-----结束关注/取消关注-----');
};


/* 评论操作
config  手机配置文件
msg 内容
*/
function comment(config, msg) {
    if (!id(config.control.comment).findOne()) {
        log('当前页面没有评论按钮')
        return
    }
    toastLog('-----开始评论-----');
    var centerX = (config.bounds.comment[0] + config.bounds.comment[2]) / 2;
    var centerY = (config.bounds.comment[1] + config.bounds.comment[3]) / 2;
    toastLog('准备点击评论按钮' + ' ' + centerX + '*' + centerY)
    click(centerX, centerY);

    sleep(3000);
    let edit = text('说点什么...').id('com.smile.gifmaker:id/comment_editor_holder_text').findOne()
    if (edit) {
        edit.click();
    } else {
        toastLog('找不到输入框,结束本次评论')
        sleep(2000)
        back()
        return
    }
    toastLog('已点击评论文本框')
    sleep(3000);
    setText(msg);
    sleep(3000);

    try {
        id(config.control.push).findOne(3000) ? id(config.control.push).findOne().click() : ''
    } catch (error) {
        toastLog('找不到评论按钮,结束本次评论')
        sleep(2000)
        back()
        return
    }

    toastLog('已点击发送评论按钮')
    sleep(2000);
    back();
    sleep(3000);
    toastLog('-----结束评论-----');
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

/* 获取执行时间
rumtime  执行时间数组
*/
function getCurrDurationTime(runtime) {
    let durationTimeArr = parseJSON(runtime);
    let currDurationTime = random(durationTimeArr[0] * 60, durationTimeArr[1] * 60) * 1000;
    log('持续时间', currDurationTime);
    let startTime = new Date().getTime();
    let endTime = startTime + currDurationTime;
    let time = {
        startTime: startTime,
        endTime: endTime
    };
    return time;
};

/* 获取随机数组内容
content 内容数组
*/
function ranContent(content) {
    newcontent = parseJSON(content)
    index = random(0, newcontent.length - 1)
    log(newcontent.length)
    return newcontent[index]
}

/* 进同城页面
 */
function totc() {
    if (className('android.view.View').exists()) {

        var a = id('left_btn').findOnce().bounds()
        click(a.centerX() + 50, a.centerY())

        // log(device.width/2+'111'+a.centerY())
    }

    // click(210, 130)
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
function doaction(package, parameter, randomProbal) {

    closeandopen(package, 10, 'single');

    toastLog('等待程序打开')
    sleep(15000)

    switchStatus()

    task = []
    parameter.action.indexOf('like') != -1 ? task[0] = true : task[0] = false
    parameter.action.indexOf('attention') != -1 ? task[1] = true : task[1] = false
    parameter.action.indexOf('comments') != -1 ? task[2] = true : task[2] = false

    log(task, 'aaa')


    totc()

    className('android.widget.RelativeLayout').id('container').findOne().click()
    sleep(4000)

    let time = getCurrDurationTime(parameter.param['running_time']);
    let startTime = time.startTime;
    let endTime = time.endTime;
    log('开始时间:' + startTime, '结束时间:' + endTime, '当前时间:' + new Date().getTime())
    while (new Date().getTime() < endTime) {
        log('是否结束任务', new Date().getTime(), endTime, new Date().getTime() < endTime);

        let currVideoNum = random(3, 8);

        log('当前视频数量', currVideoNum);

        for (let i = 0; i < currVideoNum; i++) {

            let start = new Date().getTime()
            if (new Date().getTime() > endTime) {
                break;
            }


            toastLog('当前正在播放第' + (i + 1) + '个视频')

            sleep(random(1000, 30000))
            if (i == (currVideoNum - 1)) {


                if (task[0] && random() > randomProbal) {
                    likeCanclelike('LIKE', config, departure)
                    sleep(2000)
                }
                if (task[1] && random() > randomProbal) {
                    autoSwipe_toLeft(null)
                    sleep(3000)
                    autoSwipe_toLeft(null)
                    sleep(3000)
                    attentionCancleattention('ATTENTION', config, departure)
                    if (desc('推荐好友').id('recommend_btn_img').findOnce()) {
                        desc('推荐好友').id('recommend_btn_img').findOnce().click()
                    }
                    sleep(3000)
                    autoSwipe_toRight(null)
                    sleep(3000)
                    autoSwipe_toRight(null)
                }
                if (task[2] && random() > randomProbal) {
                    comment(config, ranContent(parameter.param['comments']))
                    sleep(2000)
                }


                sleep(2000)

            }


            let end = new Date().getTime()
            let stult = end - start
            toastLog('当前视频总耗时' + stult / 1000 + '秒')
            sleep(1000)
            autoSwipe_toTop(null)
        }
    }

    log('任务结束时间=====>' + new Date(), '当前时间====>' + new Date());
    sleep(3000)
    threads.shutDownAll();
}

//------------------------------------------main函数--------------------------------------------------------------
function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)
        doaction('com.smile.gifmaker', res, randomProbal);

    } catch (error) {
        toastLog('执行遇到错误' + error);
        repeat++;
        if (repeat < 3) {
            main()
        } else {
            TKB.wzaandhome()
        }

    }
}

main();
