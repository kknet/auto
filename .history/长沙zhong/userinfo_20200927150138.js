toastLog('开始获取任务参数信息')
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

let taskId = files.read('/storage/emulated/0/taskId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';
var res = http.postJson(url, {
    "taskId": taskId
});

log("接口请求结果-->" + res.statusCode);

if (res.statusCode == 200) {
    var resdata = res.body.string();
    let taskParam = JSON.parse(resdata).data
    log("全部任务参数" + taskParam)

    let TotaskParam = parseJSON(taskParam)
    var paramMap = {};
    var needExecuteActions = TotaskParam.needAction.split(',');

    TotaskParam.paramvalue.forEach((paramObj, j) => {
        paramMap[paramObj.paramId] = paramObj.paramValue;
    });

    log('动作action', needExecuteActions)
    log("详细参数paramMap", paramMap);


}

function parseJSON(data, returnType) {
    let switchData = '';
    if (typeof data === "string") {
        try {
            switchData = JSON.parse(data);
        } catch (e) {
            switchData = new Function("return " + data)();
        }
    } else {
        switchData = data;
    }
    return switchData;
};

log("获取任务参数完成")
sleep(5000)

var intorgId = paramMap['intorgId'];
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
// var deviceId = '3';
var repeat = 0;

threads.start(function () {
    //在新线程执行的代码
    while (true) {

        let Pop_up = []
        // log('检测弹窗→→→→→→高配')
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
                    text(Pop_up[i].find).findOnce().click();
            }
        }
        //收藏本地判断
        text('保持本地').findOnce() ? click(100, 300) : ''
        text('好友推荐').findOnce() ? id('com.ss.android.ugc.aweme:id/xd').findOnce().click() : ''
        let end = new Date().getTime()
        let stult = end - start
        // log(stult + 'ms')
        // log('子线程')
    }
});

var homePage = {
    userName: 'com.ss.android.ugc.aweme:id/dkd', //   抖音昵称
    dyNo: 'com.ss.android.ugc.aweme:id/gy5', //      抖音号
    signature: 'com.ss.android.ugc.aweme:id/gz2', //  个人简介
    zanNum: 'com.ss.android.ugc.aweme:id/ap9', //     获赞数
    focusNum: 'com.ss.android.ugc.aweme:id/bc6', //   点赞数
    fansNum: 'com.ss.android.ugc.aweme:id/bc1', //    粉
    friend: 'com.ss.android.ugc.aweme:id/bfz'
}

function switchWUnit(value) {
    let newValue = value.indexOf('w') == -1 ? value : value.slice(0, -1) * 10000;
    return newValue;
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


function getUserInfoInHomepage(package) {


    closeandopen(package, 10, 'single');

    sleep(10000)

    text('我').findOnce() ? text('我').findOnce().parent().parent().parent().click() : ''

    let userInfo = {
        userName: 'nickname',
        dyNo: 'dyNo',
        signature: 'signature',
        sex: '其他',
        zanNum: '1',
        focusNum: '1',
        fansNum: '1',
        friendNum: '1',
        videoNum: '0',
        dynamicNum: '0',
        likeNum: '0',
        intorgId: intorgId,
        deviceId: deviceId
    };
    log('进入用户列表');
    toastLog("开始进行获取抖音信息")
    if (id(homePage.userName).exists()) {
        userInfo.userName = className('TextView').id(homePage.userName).findOnce().text();
    }
    if (id(homePage.dyNo).exists()) {
        userInfo.dyNo = className('TextView').id(homePage.dyNo).findOnce().text().slice(4).trim();
    }
    if (id(homePage.signature).exists()) {
        userInfo.signature = className('TextView').id(homePage.signature).findOnce().text();
    }
    if (id(homePage.zanNum).exists()) {
        let zanNum = className('TextView').id(homePage.zanNum).findOnce().text();
        userInfo.zanNum = switchWUnit(zanNum);
    }
    if (id(homePage.focusNum).exists()) {
        let focusNum = className('TextView').id(homePage.focusNum).findOnce().text();
        userInfo.focusNum = switchWUnit(focusNum);
    }
    if (id(homePage.fansNum).exists()) {
        let fansNum = className('TextView').id(homePage.fansNum).findOnce().text();
        userInfo.fansNum = switchWUnit(fansNum);
    }
    if (id(homePage.friend).exists()) {
        let friend = className('TextView').id(homePage.friend).findOnce().text();
        userInfo.friendNum = switchWUnit(friend);
    }

    let qiyeziliao = textContains('编辑企业资料').findOnce();
    if (qiyeziliao) {
        userInfo.videoNum = "0";
        userInfo.dynamicNum = "0";
        userInfo.likeNum = "0";
    } else {
        if (textContains("作品 ").findOnce()) {
            log('作品数-->', textContains("作品 ").findOnce().text().split(' ')[1]);
            let videoNum = textContains("作品 ").findOnce().text().split(' ')[1].trim();
            userInfo.videoNum = switchWUnit(videoNum);
        } else {
            toastLog('无法获取作品数');
        }
        if (textContains("动态 ").findOnce()) {
            log('动态数-->', textContains("动态 ").findOnce().text().split(' ')[1]);
            let dynamicNum = textContains("动态 ").findOnce().text().split(' ')[1].trim();
            userInfo.dynamicNum = switchWUnit(dynamicNum);
        } else {
            toastLog('无法获取动态数');
        }
        if (textContains("喜欢 ").findOnce()) {
            log('喜欢数-->', textContains("喜欢 ").findOnce().text().split(' ')[1]);
            let likeNum = textContains("喜欢 ").findOnce().text().split(' ')[1].trim();
            userInfo.likeNum = switchWUnit(likeNum);
        } else {
            toastLog('无法获取喜欢数');
        }
    }
    sleep(3000);

    let editMaterial = textContains('编辑资料').findOnce();
    if (editMaterial) {
        editMaterial.click();
        sleep(2000);

        if (text('名字').exists()) {
            click('名字')
            sleep(2000)
            if (className('EditText').findOnce().text().trim() != userInfo.userName) {
                userInfo.userName = className('EditText').findOnce().text().trim()
            }

            sleep(5000);
            back();
            sleep(3000);
            back();
        }
        sleep(2000)
        if (!text('点击设置').findOnce()) {
            userInfo.sex = text('性别').findOnce().parent().parent().child(1).child(0).text();
        }
    } else {
        let editBusiness = textContains('编辑企业资料').findOnce();
        editBusiness.click();
        sleep(2000);

        if (text('名字').exists()) {
            click('名字')
            sleep(2000)
            if (className('EditText').findOnce().text().trim() != userInfo.userName) {
                userInfo.userName = className('EditText').findOnce().text().trim()
            }

            sleep(5000);
            back();
            sleep(3000);
            back();
        }
        sleep(2000)

        if (!text('点击设置').findOnce()) {
            userInfo.sex = text('性别').findOnce().parent().parent().child(1).child(0).text();
        }
    }

    var phone = '未发生短信获取'
    if(files.exists('/storage/emulated/0/phone.txt')){
       phone = files.read('/storage/emulated/0/phone.txt');
    }
  

    log(userInfo);
    let userInfoStr = JSON.stringify(userInfo);
    let address = '/storage/emulated/0/userInfo.txt';
    if (files.exists(address)) {
        files.write(address, userInfoStr);
        log('用户信息写入');

        if (userInfo.dyNo == "dyNo") {
            toastLog('请检查抖音版本是否正确！')
            return
        }

        var url1 = 'http://121.196.126.46:9090/mqttcontrol/api/js/createDouyinhao';
        var res1 = http.postJson(url1, {
            "deviceId": deviceId,
            "phone": phone,
            "douyinId": userInfo.dyNo,
            "followCount": userInfo.focusNum,
            "followersCount": userInfo.fansNum,
            "friendsCount": userInfo.friendNum,
            "gender": userInfo.sex,
            "intorgId": intorgId,
            "likeCount": userInfo.likeNum,
            "nickname": userInfo.userName,
            "signature": userInfo.signature,
            "videoCount": userInfo.videoNum,
            "zanCount": userInfo.zanNum
        });

        log("接口请求结果-->" + res1.statusCode);

    } else {
        let isSuccess = files.createWithDirs(address);
        log('用户信息文件夹创建结果：' + isSuccess);
        files.append(address, userInfoStr);


        if (userInfo.dyNo == "dyNo") {
            toastLog('请检查抖音版本是否正确！')
            return
        }

        var url1 = 'http://121.196.126.46:9090/mqttcontrol/api/js/createDouyinhao';
        var res1 = http.postJson(url1, {
            "deviceId": deviceId,
            "phone": phone,
            "douyinId": userInfo.dyNo,
            "followCount": userInfo.focusNum,
            "followersCount": userInfo.fansNum,
            "friendsCount": userInfo.friendNum,
            "gender": userInfo.sex,
            "intorgId": intorgId,
            "likeCount": userInfo.likeNum,
            "nickname": userInfo.userName,
            "signature": userInfo.signature,
            "videoCount": userInfo.videoNum,
            "zanCount": userInfo.zanNum
        });

        log("接口请求结果-->" + res1.statusCode);

    }
};

function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        getUserInfoInHomepage('com.ss.android.ugc.aweme');
    } catch (error) {
        log('执行中遇到错误' + error);
        repeat++;
        if (repeat < 3) {
            main();
        } else {
            TKB.wzaandhome()
        }

    }

    sleep(3000)
    threads.shutDownAll();
}

main();