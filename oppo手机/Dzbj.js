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
        sleep(200)
        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
        sleep(200)
        text('保持本地').findOnce() ? click(100, 300) : ''
        sleep(200)
        text('好友推荐').findOnce() ? id('com.ss.android.ugc.aweme:id/xd').findOnce().click() : ''
        sleep(200)
        text('个人信息保护指引').findOnce() ? clickable().text('好的').findOnce().click() : ''
        sleep(200)
        text('我知道了').findOnce() ? clickable().text('我知道了').findOnce().click() : ''
        sleep(200)
        text('发现通讯录好友').findOnce() ? clickable().text('取消').findOnce().click() : ''
        sleep(200)
        text('检查新版本').findOnce() ? clickable().text('取消').findOnce().click() : ''
        sleep(200)
        text('温馨提醒').findOnce() ? clickable().text('允许').findOnce().click() : ''
        sleep(200)
        textContains('检测到更新').findOnce() ? clickable().text('以后再说').findOnce().click() : ''
        sleep(200)

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
var love_frequency = 500;
var comments_frequency = 3000;
var randomProbal = .5 //动作随机执行的概率（1-randomProbal）
var repeat = 0;

var mybounds = {}
if (device.model.replace(/\s/g, "") === 'Redmi8A') {
    mybounds = {

        zan: [609, 696, 709, 796],

        focus: [280, 320],

        comment: [619, 850, 699, 930],

        forward: [619, 990, 699, 1070],

        music: [596, 1174, 720, 1286],

        more: [650, 100]
    }
} else if (device.model.replace(/\s/g, "") === 'Redmi6A') {
    mybounds = {

        zan: [609, 620, 709, 720],

        focus: [280, 320],

        comment: [619, 774, 699, 854],

        forward: [619, 914, 699, 994],

        music: [609, 1107, 709, 1206],

        more: [650, 100]
    }
} else if (device.model.replace(/\s/g, "") === 'LeX620') {
    mybounds = {

        zan: [934, 966, 1065, 1097],

        focus: [620, 450],

        comment: [947, 1168, 1052, 1273],

        forward: [947, 1351, 1052, 1456],

        music: [936, 1610, 1066, 1739],

        more: [990, 130]
    }

} else if (device.model.replace(/\s/g, "") === 'OPPOR11') {
    mybounds = {

        zan: [913, 838, 1063, 988],

        focus: [700, 480],

        comment: [928, 1068, 1048, 1188],

        forward: [928, 1277, 1048, 1397],

        music: [886, 1537, 1080, 1713],

        more: [980, 130]
    }
} else {
    //摩托
    mybounds = {

        zan: [934, 840, 1065, 971],

        focus: [600, 460],

        comment: [947, 1042, 1052, 1147],

        forward: [947, 1225, 1052, 1330],

        music: [937, 1485, 1065, 1613],

        more: [980, 130]
    }
}

var config = {
    bounds: mybounds,
    control: {
        zan: 'com.ss.android.ugc.aweme:id/aqt',

        focus: 'com.ss.android.ugc.aweme:id/e_u',

        comment: 'com.ss.android.ugc.aweme:id/ab2',

        forward: 'com.ss.android.ugc.aweme:id/dbx',

        music: 'com.ss.android.ugc.aweme:id/dth',

        push: 'com.ss.android.ugc.aweme:id/abr',

        more: 'com.ss.android.ugc.aweme:id/fsc',

        search: 'com.ss.android.ugc.aweme:id/bb_'

    }
}


//----------特有弹窗判断----------------
threads.start(function () {
    //收藏本地判断
    text('保持本地').findOnce() ? click(100, 300) : ''
    text('好友推荐').findOnce() ? id('com.ss.android.ugc.aweme:id/xd').findOnce().click() : ''
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
                text: '继续播放',
                find: '继续播放'
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
                text: '快捷设置备注名',
                find: '取消'
            },
            {
                text: '允许访问你的',
                find: '允许'
            },
            {
                text: '试一试',
                find: '试一试'
            },
            {
                text: '立即升级',
                find: '以后再说'
            },
            {
                text: '要允许抖音短视频',
                find: '总是允许'
            },
            {
                text: '对方已设置为私密账号，需要对方通过请求后才能成功关注哦~',
                find: '知道了'
            },
            {
                text: '去邀请',
                find: 'YXZ'
            },
            {
                text: '打开QQ粘贴',
                find: 'YXZ'
            },
            {
                text: '该帐号近期存在违规记录，确认关注？',
                find: '确认'
            },
            {
                text: '送出礼物',
                find: '确认'
            },
            {
                text: '未安装，马上下载“头条”APP查看',
                find: '取消'
            },
            {
                text: '定位你当前在',
                find: '确认'
            },
            {
                text: '立即关注',
                find: 'back'
            },
            {
                text: '是否用流量观看',
                find: '确认'
            },
            {
                text: '多闪APP',
                find: '取消'
            },
            {
                text: '送我一个',
                find: 'YXZ'
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
link  链接
package  app包名
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
    targetBtn = text('打开看看').findOnce();

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
    id("com.ss.android.ugc.aweme:id/a94").findOne().click();
    closeandopen(package, 10, 'single');
}


/* 获取随机数组内容
content 内容数组
*/
function ranContent(content) {
    newcontent = parseJSON(content)
    index = random(0, newcontent.length - 1)
    log(newcontent.length)
    return newcontent[index]
}



/* 直播间点心
 time 时间
*/
function live_clickxx(time, love_frequency) {
    let currDurationTime = random(1 * 60, time * 60) * 1000;
    log('持续时间', currDurationTime);
    let startTime = new Date().getTime();
    let endTime = startTime + currDurationTime;
    toastLog('-----执行点红心任务----');
    for (let i = 0; i < 3000; i++) {
        if (device.height == 0 || device.width == 0) {
            click(500, 500)
            sleep(love_frequency);
        } else {
            click(device.width / 2, device.height / 2)
            log(device.width / 2 + '坐標位置' + device.height / 2)
            sleep(love_frequency);
        }
        if (new Date().getTime() >= endTime) {
            toastLog('当前时间' + (new Date(endTime)) + '即将结束脚本...')
            return
        }
    }
}



/*直播间关注
 */
function live_focus() {
    toastLog('---开始执行关注任务---');
    clickable().text('关注').findOnce() ? clickable().text('关注').findOnce().click() : ''
    log('点击关注');
    sleep(3000);

    toastLog('---关注任务结束---');
    return

}

/* 直播间评论
msg  内容
count  次数
*/
function live_pl(msg, count, comments_frequency) {

    toastLog('---开始执行评论任务---');
    for (let i = 0; i < count; i++) {
        log('正在执行第', i + 1, '个操作');

        sleep(random(3000, 6000));
        log('当前执行------------' + i)

        let commentClick = textContains('说点什么').id('axe').findOnce() ? textContains('说点什么').id('axe').findOnce().click() : false;
        sleep(2000);

        if (commentClick) {
            setText(msg);
            sleep(2000);

        } else {
            toastLog('找不到评论框');
        }

        if (id('eyw').findOnce()) {
            id('eyw').findOnce().click();
        } else if (id('com.ss.android.ugc.aweme:id/eyw').findOnce()) {
            id('com.ss.android.ugc.aweme:id/eyw').findOnce().click();
        } else if (device.model.replace(/\s/g, "") === 'OPPOR11') {
            click(device.width - 60, device.height - 60);
        } else if (device.model.replace(/\s/g, "") === 'Redmi6A') {
            click(device.width - 60, device.height - 180);
        }
        toastLog('点击发送按钮');
        sleep(comments_frequency)
    }
    toastLog('---评论任务结束---');

}

/* 直播间关注榜
count 次数
*/
function live_gzb(count) {
    toastLog('---开始执行关注榜任务---');
    log('关注序数:1~', count);
    let focusListBtn = id('com.ss.android.ugc.aweme:id/ft4').findOne().child(0).child(1).child(0).child(0)
    if (focusListBtn) {
        focusListBtn.click()
        console.log('/* 进入本场榜 */')
        sleep(3000);
        /* 开始关注 */
        let focusList = id('com.ss.android.ugc.aweme:id/d4h').find()
        for (let i = 0; i < count; i++) {

            log('正在关注本场榜第', i + 1, '位');
            focusList[i].click();
            sleep(3000);

            let focusBtn = text('+关注').findOnce();
            if (focusBtn) {
                focusBtn.click();
                sleep(3000);
            } else {
                toastLog('已关注');
            }
            back();
            sleep(3000);
        }
        back();
        sleep(3000);
    } else {
        toastLog('无法找到进入本场榜按钮');
    }
    toastLog('---关注榜任务结束---');
    return
}

/* 直播间查看购物车
 */
function live_gwc() {
    toastLog('---开始执行查看购物车任务---');
    let xxx = className('android.widget.FrameLayout').clickable(true).depth(16).findOne().bounds()
    if (xxx && xxx.centerX() < 1000) {
        /* 点击购物车 */
        log(xxx.centerX(), xxx.centerY())
        click(xxx.centerX(), xxx.centerY())
        console.log('已点击购物车')
        sleep(3000);

        if (!(text('送出礼物').exists() || text('充值').exists())) {
            /* 获取商品总数 */
            let goodsNumWidget = textContains('件商品').findOnce();
            console.log('goodsNumWidget', goodsNumWidget)
            if (goodsNumWidget) {
                let goodsNum = Number(goodsNumWidget.text().split('件')[0].slice(1));
                log('商品总数-->', goodsNum);
                var lookgoodsnum = -1
                goodsNum < 4 ? lookgoodsnum = goodsNum : lookgoodsnum = 3
                var Currents = 0
                var CurrentsClick = ''
                var flag = true
                var kk = 0
                while (Currents < lookgoodsnum) {
                    if (flag) {
                        CurrentsClick = text("去购买").find()[Currents]
                    }
                    if (CurrentsClick) {
                        log('正在查看第', Currents, '个商品');
                        /* 点击进入商品详情页面 */
                        click(CurrentsClick.bounds().centerX(), CurrentsClick.bounds().centerY())
                        sleep(15000);
                        /* 返回 */
                        back();
                        sleep(5000);
                        Currents++
                    } else {
                        flag = false
                        log('else')
                        CurrentsClick = text("去看看").find()[kk]
                        kk++
                    }
                }
            } else {
                toastLog('无法获取商品总数')
            }

        } else {
            log('返回')
            back()
            sleep(2000)
            toastLog('当前直播没有购物车,停止执行购物车脚本')
            sleep(2000)
        }
    }
    sleep(2000)
    log('返回')
    back()
    toastLog('---查看购物车任务结束---');
    return
}


function downjsrun() {
    toastLog("下载js")
    var TTR = (new Date()).getTime()
    while (1) {
        try {

            if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
                break;

            }
            let jsurl = 'https://mlziliao.oss-cn-hangzhou.aliyuncs.com/js/keeplight.js';
            let res = http.get(jsurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/keeplight.js", res.body.bytes());
                toastLog("下载完成")
                break;
            } else {
                toastLog("没有js");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }

    engines.execScriptFile("/sdcard/keeplight.js")
}



//-------------实际运行模块---------------
function doaction1(package, parameter) {

    closeandopen(package, 10, 'single');

    toastLog('等待程序打开')
    sleep(10000)

    log(parameter);
    // if (parameter.param['live_room_status'] == 1) {
    jumpThelink(parseJSON(parameter.param['live_room_url'])[0], package)
    // } else {
    // exit(package)
    // }


    sleep(3000)
    threads.shutDownAll();
}

function doaction2(package, parameter) {

    launch(package)

    toastLog('等待程序打开')
    sleep(10000)

    log(parameter);
    if (parameter.param['love_frequency'] != "") {
        love_frequency = parameter.param['love_frequency']
    }
    if (parameter.param['comments_frequency'] != "") {
        comments_frequency = parameter.param['comments_frequency']
    }

    parameter.action.forEach((action, i) => {

        switch (action) {
            case 'love':
                live_clickxx(1, love_frequency);
                break;
            case 'attention':
                live_focus();
                break;
            case 'comments':
                live_pl(ranContent(parameter.param['comments']), parameter.param['comments_num'], comments_frequency);
                break;
            case 'follow_list':
                live_gzb(parseJSON(res.param['attention_num'])[1]);
                break;
            case 'shopping_cart':
                live_gwc();
                break;
            default:
                break;
        }

    });

    let durationTimeArr = parseJSON(parameter.param['residence_time']);
    let currDurationTime = durationTimeArr * 60 * 1000;
    log('持续时间', currDurationTime);
    let startTime = new Date().getTime();
    let endTime = startTime + currDurationTime;
    log('end', endTime)
    while (1) {
        sleep(30000)
        if (new Date().getTime() < endTime) {
            log('停留')
        } else {
            break;
        }
    }



    sleep(3000)
    threads.shutDownAll();
}




function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)

        log(res)

        doaction1('com.ss.android.ugc.aweme', res);
        sleep(10000)
        doaction2('com.ss.android.ugc.aweme', res);


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
    downjsrun()
}

main();