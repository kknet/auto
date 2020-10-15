log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
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
sleep(2000)
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
function live_clickxx(time) {
    /*
     * 弹窗 处理
     **/
    if (id("com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view").exists()) { // 本次未被抽中 叉掉
        id("com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view").findOne().click()
    }
    let currDurationTime = random(1 * 60, time * 60) * 1000;
    log('持续时间', currDurationTime);
    let startTime = new Date().getTime();
    let endTime = startTime + currDurationTime;
    toastLog('-----执行点红心任务----');
    for (let i = 0; i < 3000; i++) {
        if (device.height == 0 || device.width == 0) {
            click(500, 500)
            sleep(500);
        } else {
            click(device.width / 2, device.height / 2)
            log(device.width / 2 + '坐標位置' + device.height / 2)
            sleep(500);
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
function live_pl(msg, count) {

    toastLog('---开始执行评论任务---');
    for (let i = 0; i < count; i++) {
        log('正在执行第', i + 1, '个操作');

        sleep(random(3000, 6000));
        log('当前执行------------' + i)

        let commentClick = textContains('说点什么').id('azd').findOnce() ? textContains('说点什么').id('azd').findOnce().click() : false;
        sleep(2000);

        if (commentClick) {
            setText(msg);
            sleep(2000);

        } else {
            toastLog('找不到评论框');
        }

        if (id('f1t').findOnce()) {
            id('f1t').findOnce().click();
        } else if (id('com.ss.android.ugc.aweme:id/f1t').findOnce()) {
            id('com.ss.android.ugc.aweme:id/f1t').findOnce().click();
        } else if (device.model.replace(/\s/g, "") === 'OPPOR11') {
            click(device.width - 60, device.height - 60);
        } else if (device.model.replace(/\s/g, "") === 'Redmi6A') {
            click(device.width - 60, device.height - 180);
        }
        toastLog('点击发送按钮');
    }
    toastLog('---评论任务结束---');

}

/* 直播间关注榜
count 次数
*/
function live_gzb(count) {
    toastLog('---开始执行关注榜任务---');
    log('关注序数:1~', count);
    let focusListBtn = id('com.smile.gifmaker:id/live_audience_recycler_view').findOne().child(0)
    if (focusListBtn) {
        focusListBtn.click()
        console.log('/* 进入本场榜 */')
        sleep(3000);
        /* 开始关注 */
        let focusList = id('com.smile.gifmaker:id/live_top_user_list_item_content_layout').find()
        for (let i = 0; i < 3; i++) {

            log('正在关注本场榜第', i + 1, '位');
            focusList[i].click();
            sleep(3000);

            let focusBtn = text('关注').findOnce();
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
    let xxx = id("live_shop_bottom_bar_container").findOne().click()
    log("进入购物车")
    if (!(text('送出礼物').exists() || text('充值').exists())) {
        /* 获取商品总数 */
        let goodsNumWidget = 10; // 默认商品数量 1件
        console.log('goodsNumWidget', goodsNumWidget)
        if (goodsNumWidget) {
            let goodsNum = goodsNumWidget;
            log('商品总数-->', goodsNum);
            var lookgoodsnum = -1
            goodsNum < 4 ? lookgoodsnum = goodsNum : lookgoodsnum = 3
            var Currents = 0
            var CurrentsClick = ''
            var flag = true
            var kk = 0
            while (Currents < lookgoodsnum) {
                if (flag) {
                    CurrentsClick = text("去抢购").find()[Currents]
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
    sleep(2000)
    log('返回')
    back()
    toastLog('---查看购物车任务结束---');
    return
}

//-------------实际运行模块---------------
function doaction(package, parameter) {

    launch(package)

    toastLog('等待程序打开')
    sleep(10000)

    log(parameter);
    parameter.action.forEach((action, i) => {

        switch (action) {
            case 'love':
                live_clickxx(1);
                break;
            case 'attention':
                live_focus();
                break;
            case 'comments':
                live_pl(ranContent(parameter.param['comments']), parameter.param['comments_num']);
                break;
            case 'follow_list':
                live_gzb(parameter.param['attention_num'][1]);
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