log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
threads.start(function () {
    while (1) {
        clickable().text('允许').id('android:id/button1').findOnce() ? clickable().text('允许').id('android:id/button1').findOnce().click() : ''
        sleep(200)
        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
        sleep(200)
        text('保持本地').findOnce() ? click(100, 300) : ''
        sleep(200)
        text('每次切换时提醒').findOnce() ? clickable().text('不再提醒').findOnce().click() : ''
        sleep(200)
        text('保持禁止').findOnce() ? text('保持禁止').findOnce().click() : ''
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
        text('立刻升级').findOnce() ? clickable().text('以后再说').findOnce().click() : ''
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
var departure = 12;
var randomProbal = .4 //动作随机执行的概率（1-randomProbal）
var repeat = 0

var config = {
    bounds: {
        zan: [913, 838, 1063, 988],

        focus: [700, 480],

        comment: [928, 1068, 1048, 1188],

        forward: [928, 1277, 1048, 1397],

        music: [886, 1537, 1080, 1713],

        more: [980, 130]
    },
    control: {
        zan: 'com.ss.android.ugc.aweme:id/aqf',

        focus: 'com.ss.android.ugc.aweme:id/e7s',

        comment: 'com.ss.android.ugc.aweme:id/aac',

        forward: 'com.ss.android.ugc.aweme:id/dbz',

        music: 'com.ss.android.ugc.aweme:id/dr0',

        push: 'com.ss.android.ugc.aweme:id/ab1',

        more: 'com.ss.android.ugc.aweme:id/fsc',

        search: 'com.ss.android.ugc.aweme:id/bb_'

    }
}

//----------特有弹窗判断----------------
threads.start(function () {
    //收藏本地判断
    text('保持本地').findOnce() ? click(100, 300) : ''

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

        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
        sleep(200)
        clickable().id('android:id/button1').findOnce() ? clickable().id('android:id/button1').findOnce().click() : ''
        sleep(200)
        clickable().id('com.wandoujia.phoenix2:id/y8').findOnce() ? clickable().id('com.wandoujia.phoenix2:id/y8').findOnce().click() : ''
        sleep(200)
        textContains('允许访问你的"位置"').exists() ? text('允许').findOnce().click() : ''
        sleep(200)
        text('声明与条款').findOnce() ? clickable().text('同意并继续').findOnce().click() : ''
        sleep(200)
        clickable().text('点击继续').findOnce() ? clickable().text('点击继续').findOnce().click() : ''
        sleep(200)
        clickable().text('以后都允许').findOnce() ? clickable().text('以后都允许').findOnce().click() : ''
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
        text('欢迎来到豌豆荚').exists() ? clickable().text('同意并授权').findOnce().click() : ''
        sleep(200)
        text('好友推荐').findOnce() ? id('com.ss.android.ugc.aweme:id/xd').findOnce().click() : ''

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

        y1 = top + space;


        y2 = h - 0.5 * space;


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

/* 点赞操作
type  操作类型
config  手机配置文件
departure  最大偏差范围
*/
function likeCanclelike(type, config, departure) {
    if (!clickable().id(config.control.zan).exists()) {
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
            if (!isSmr && clickable().id(config.control.zan).findOnce()) {
                click(centerX, centerY);
                sleep(2000);
            } else {
                toast('已点击');
            }
            break;
        case "UNLIKE":
            if (isSmr && clickable().id(config.control.zan).findOnce()) {
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
    if (!clickable().id(config.control.focus).exists()) {
        log('当前页面没有关注按钮')
        return
    }
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

/* 收藏音乐操作
config  手机配置文件
departure  最大偏差范围
*/
function collectMusic(config) {
    if (!id(config.control.music).exists()) {
        log('当前页面没有音乐按钮')
        return
    }
    toastLog('-----开始收藏音乐-----');
    let centerX = (config.bounds.music[0] + config.bounds.music[2]) / 2;
    let centerY = (config.bounds.music[1] + config.bounds.music[3]) / 2;

    id(config.control.music).findOnce() ? click(centerX, centerY) : click(id(config.control.music).find()[1].bounds().centerX(), id(config.control.music).find()[1].bounds().centerY());
    // id(config.control.music).findOnce() ?  click(centerX, centerY) : click(id(config.control.music).find()[1].bounds().centerX(),id(config.control.music).find()[1].bounds().centerY() );
    toastLog('点击音乐封面');
    sleep(5000);
    // 判断当前视频页面有没有热点或者合集 如果有就不做收藏音乐任务
    if (text('收藏合集').exists()) {
        toastLog('当前页面在收藏合集页面,收藏音乐脚本停止执行')
        back()
        return
    }
    let markBtn = desc('拍同款，按钮').findOnce();
    if (markBtn) {
        toastLog('进入收藏音乐页面成功');
        sleep(1000);
        toastLog('点击收藏');
        let collectBtn = text('收藏').findOnce();
        if (collectBtn) {
            collectBtn.parent().click();
            sleep(3000);
        } else {
            toastLog('已收藏');
            sleep(1000);
        }
    } else {
        toastLog('进入收藏音乐页面失败');
        sleep(1000);
    }
    back();
    toastLog('-----结束收藏音乐-----');
};

/* 评论操作
config  手机配置文件
msg 内容
*/
function comment(config, msg) {
    if (!id(config.control.comment).exists()) {
        log('当前页面没有音乐按钮')
        return
    }
    toastLog('-----开始评论-----');
    var centerX = (config.bounds.comment[0] + config.bounds.comment[2]) / 2;
    var centerY = (config.bounds.comment[1] + config.bounds.comment[3]) / 2;
    toastLog('准备点击评论按钮' + ' ' + centerX + '*' + centerY)
    clickable().id(config.control.comment).findOnce() ? clickable().id(config.control.comment).findOnce().click() : click(centerX, centerY);

    sleep(3000);
    let edit = className("EditText").findOnce()
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

/* 转发操作
type  操作类型
config  手机配置文件
departure  最大偏差范围
*/
function transpond(config, msg) {
    if (!id(config.control.forward).exists()) {
        log('当前页面没有音乐按钮')
        return
    }
    toastLog('-----开始转发-----');
    let centerX = (config.bounds.forward[0] + config.bounds.forward[2]) / 2;
    let centerY = (config.bounds.forward[1] + config.bounds.forward[3]) / 2;
    clickable().id(config.control.forward).findOnce() ? clickable().id(config.control.forward).findOnce().click() : click(centerX, centerY);
    sleep(3000);
    toastLog('已点击转发按钮')

    log('转发按钮是否存在', text('转发').exists());
    if (text('转发').exists()) {
        log('点击转发 ')
        try {
            text('转发').findOnce().parent().click();
        } catch (error) {
            toastLog('转发按钮找不到,停止本次转发执行')
            sleep(2000)
            back()
            return
        }
        sleep(2000);

        className("EditText").findOnce().click();
        sleep(2000);

        setText(msg);
        sleep(2000);

        try {
            id(config.control.push).findOne(3000) ? id(config.control.push).findOne().click() : ''
        } catch (error) {
            let qx = text('取消').findOnce()
            if (qx) {
                qx.click();
            } else {
                back()
            }
        }

        if (textContains('评论').findOnce()) {
            back();
            sleep(2000);
        }
    }
    toastLog('-----结束转发-----');
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
    log(typeof comment + "内容" + comment)
    newcontent = parseJSON(content)
    // newcontent = content
    index = random(0, newcontent.length - 1)
    log(newcontent.length)
    return newcontent[index]
}


function iskeyopen(keylist) {
    sleep(1000)
    log('关键词判断')
    var res = false;
    //是否开启关键词检测

    //检测当前视频标题
    log(keylist)

    for (let i = 0; i < keylist.length; i++) {
        try{
            var vediotext = id('a93').className('android.widget.TextView').findOnce() ? id('a93').className('android.widget.TextView').find()[1].text() : '';
        }catch(e){
            log(e)
            continue;
        }
      
        // log('标题' + vediotext)
        if (vediotext.indexOf(keylist[i].replace(/[\r\n]/g, "")) != -1) {
            res = true;
            log('关键词' + keylist[i])
            log('关键词通过')
            log('内容' + vediotext)
        }

    }

    return res;
}

function getlist(value) {
    let code = value.split(",")
    return code;

}


function downjsrun() {
    toastLog("下载js")
    var TTR = (new Date()).getTime()
    while (1) {
        try {
            // if (files.exists("/sdcard/keeplight.js") == true) {
            //     engines.stopAll()
            //     break;
            // }

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
function doaction(package, parameter, randomProbal) {

    closeandopen(package, 10, 'single');

    toastLog('等待程序打开')
    sleep(10000)

    task = []
    parameter.action.indexOf('like') != -1 ? task[0] = true : task[0] = false
    parameter.action.indexOf('attention') != -1 ? task[1] = true : task[1] = false
    parameter.action.indexOf('comments') != -1 ? task[2] = true : task[2] = false
    parameter.action.indexOf('forwards') != -1 ? task[3] = true : task[3] = false
    parameter.action.indexOf('collect_music') != -1 ? task[4] = true : task[4] = false
    log(parameter.param['keywords'].length, 'aaa')


    if (parseJSON(parameter.param['keywords']) != null && parseJSON(parameter.param['keywords']) != '') {
        var iskey = true;
        var keywords = parseJSON(parseJSON(parameter.param['keywords']));
        log(keywords)
        files.remove('/sdcard/keyword.txt');

        let path = files.getSdcardPath() + '/keyword.txt';

        files.createWithDirs(path);
        // log("code = " + path);
        files.write(path, keywords)
        sleep(10000);
        // log("存入文件");
        toast('保存成功');

        keylist = getlist(files.read('/sdcard/keyword.txt'));
        log("读取数据" + keylist)
        autoSwipe_toTop(null)
    }


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

           
            if (currentPackage() != package) {
                sleep(5000)
                launch(package)
            }
            

            if (iskey) {
                if (!iskeyopen(keylist)) {
                    toastLog('不符关键词,跳过')
                    autoSwipe_toTop(null)
                    continue
                }
            }

            toastLog('当前正在播放第' + (i + 1) + '个视频')

            sleep(random(15000, 30000))
            if (i == (currVideoNum - 1)) {

                if (task[0] && random() > randomProbal) {
                    likeCanclelike('LIKE', config, departure)
                    sleep(2000)
                }
                if (task[1] && random() > randomProbal) {
                    autoSwipe_toLeft(null)
                    sleep(5000)
                    attentionCancleattention('ATTENTION', config, departure)
                    back()
                    sleep(2000)
                }
                if (task[2] && random() > randomProbal) {
                    comment(config, ranContent(parameter.param['comments']))
                    sleep(2000)
                }
                if (task[3] && random() > randomProbal) {
                    transpond(config, ranContent(parameter.param['forwards']))
                    sleep(2000)
                }
                if (task[4] && random() > randomProbal) {
                    collectMusic(config)
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
        log(res)
        doaction('com.ss.android.ugc.aweme', res, randomProbal);
    } catch (error) {
        toastLog('执行遇到错误' + error);
        repeat++
        if (repeat < 3) {
            main()
        } else {
            // TKB.wzaandhome()
        }
    }

    sleep(3000)
    threads.shutDownAll();
}

main();
downjsrun();