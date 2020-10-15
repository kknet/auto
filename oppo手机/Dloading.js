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
        textContains('声明与条款').findOnce() ? click("同意并继续") : ''
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
var repeat = 0


var mheight = device.height
var mwidth = device.width / 2
var getCode = 'com.ss.android.ugc.aweme:id/bfl' //获取验证码
var agree1 = 'com.ss.android.ugc.aweme:id/e6o' //同意协议单选
var agree2 = 'com.ss.android.ugc.aweme:id/e6e'
var messages = 'subject' //所有短信列表

//----------特有弹窗判断----------------

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

function watching(time) {
    var randomtime = random(Number(time[0]), Number(time[1]))
    log('看' + randomtime + '分钟的视频')
    var timeEnd = randomtime * 60 + Number(String(Date.parse(new Date())).substring(0, 10))
    do {
        sleep(random(10, 15) * 1000)
        log('下一个')
        swipe(mwidth, mheight - 350, mwidth, 300, 300)
        sleep(1000)
    }
    while (String(Date.parse(new Date())).substring(0, 10) < timeEnd)
    log('看完了')
}


//-------------实际运行模块---------------
function loading(package, modules, telNumber) {

    closeandopen(package, 10, 'single');

    var time = [10, 10] //总观看时间范围
    log(telNumber)
    log('加载完毕')
    sleep(2000)


    swipe(mwidth, mheight - 300, mwidth, 300, 300)
    watching(time)
    sleep(2000)
    modules == 'meitu' ? click(970, 1950) : log(text('我').findOnce().parent().click()) ? '' : click(970, 1829) //点击'我'
    sleep(2000)

    // if (text('以其他帐号 登录').findOne(2000)) {
    //     var a = text('以其他帐号 登录').findOnce().bounds()
    //     click(a.centerX() + 200, a.centerY())
    //     sleep(4000)
    // }
    // text('其他手机号码登录').findOne(2000) ? text('其他手机号码登录').findOnce().parent().click() : ''
    // sleep(2000)

    if (text('本机号码一键登录').exists()) {
        id(agree1).findOnce() ? id(agree1).findOnce().click() : ''
        sleep(2000)
        id(agree2).findOnce() ? id(agree2).findOnce().click() : ''
        sleep(2000)
        text('本机号码一键登录').findOnce().parent().parent().click()
        sleep(3000)
    } else if (text('一键登录').exists()) {
        text('一键登录').findOnce().parent().parent().click()
        sleep(3000)
        id(agree1).findOnce() ? id(agree1).findOnce().click() : ''
        sleep(2000)
        id(agree2).findOnce() ? id(agree2).findOnce().click() : ''
        sleep(2000)
        text('本机号码一键登录').findOnce().parent().parent().click()
        sleep(3000)
    } else {
        sleep(5000)
        var a = text('请输入手机号').find()
        while (a.length == 0) {
            sleep(1000)
        }
        log(a)
        setText(telNumber)
        sleep(4000)
        id(getCode).findOnce().click()
        sleep(1000)
        text('请输入验证码').findOne()
        id(agree1).findOne(5000) ? id(agree1).findOnce().click() : ''
        id(agree2).findOne(5000) ? id(agree2).findOnce().click() : ''
        sleep(2000)
        var code = getMes()
        setText(code)
        sleep(2000)

    }

    sleep(5000)
    while (text('跳过').findOnce()) {
        text('跳过').findOnce().click()
        sleep(2000)
    }

    sleep(3000)

    modules == 'meitu' ? click(970, 1950) : click(970, 1825) //点击'我'
    sleep(3000)
    text('添加头像').findOnce() ? back() : ''
    sleep(2000)
    click(mwidth, 600)
    sleep(2000)
    text('填写昵称').findOnce() ? back() : ''




    function getMes() {
        launchApp('信息')
        sleep(10000)
        text('通知信息').findOnce() ? click(text('通知信息').findOnce().bounds().centerX(), text('通知信息').findOnce().bounds().centerY()) : ''
        sleep(1000)
        // modules=='meitu' ? id('meitu_unread').findOne() : id('unread').findOne()
        var mesDate = id(messages).find()
        mesDate = mesDate.filter(index => {
            return index.text().indexOf('抖音') != -1
        })
        var code = mesDate[0].text().split('验证码')
        log(code[1].slice(0, 4))
        launchApp('抖音短视频')
        sleep(3000)
        return code[1].slice(0, 4)
    }

}

function loadingks(package,telNumber){




function ksyzm() {
    try {
        launchApp('信息')
        sleep(10000)
        text('通知信息').findOnce() ? click(text('通知信息').findOnce().bounds().centerX(), text('通知信息').findOnce().bounds().centerY()) : ''
        sleep(1000)
        // modules=='meitu' ? id('meitu_unread').findOne() : id('unread').findOne()
        var mesDate = id('subject').find()
        mesDate = mesDate.filter(index => {
            return index.text().indexOf('快手') != -1
        })
        var code = mesDate[0].text().split('验证码')
        var reg = '[0-9]{4,6}';
        log(code[0])
        var table = code[0].match(reg)
        var yzm = table[0]

        launchApp('快手')
        sleep(3000)

        log(yzm)
        return yzm

    } catch (error) {
        toastLog("错误" + error);
        sleep(2000)
    }
}
    

    function get_verify() {
        try {
            sleep(2000)
            //验证码截图
            img = "/sdcard/0234.jpg"
            captureScreen(img)
            toast("截屏已完成")
            var src = images.read(img)
            // var verify_bounds = id(img_id).findOnce().bounds()
            var url = 'http://122.228.155.197:8803/captcha_slide'
            // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
            // 小红书的验证
            // var clip = images.clip(src, 137, 620, 805, 417)
            var clip = images.clip(src, 47, 257, 985, 574) //快手的验证
            imgFile = "/sdcard/clip.png"
            images.save(clip, imgFile)
            // mode: "xhs"小红书滑块
            // mode: "ks"快手滑块
            var res = http.postMultipart(url, {
                mode: "ks",
                image: open(imgFile),
                type: imgFile
            });
            var html = res.body.json()
            if (html["result"] != 'no find') {
                log('成功')
                var centerY = html['result']['center']
                return centerY
                //返回缺口的中心的的坐标
            } else {
                sleep(1000)
                log('失败')
            }
        } catch (error) {
            log(error)
        }
    }


  

    // var time = [10, 10] //总观看时间范围
    // log(telNumber)
    // log('加载完毕')
    // swipe(mwidth, mheight - 300, mwidth, 300, 300)
    // watching(time)
    // sleep(2000)

    // closeandopen(package, 10, 'single');
    launch(package);
    sleep(10000)

    while (1) {


        if (text('登录').exists() && ( text('快手').exists()  || text('消息').exists() || text('美食').exists())) {
            click('登录')
        }
        sleep(2000)

        if(text('本地一键登录').exists()){
            click('本地一键登录')
        }
    
        if (text('验证码登录').exists()) {
            click('验证码登录')
        }
    
        if (text('手机号登录').exists()) {
            var sjh = text('手机号登录').findOnce().bounds()
            log(sjh.centerX())
            log(sjh.centerY())
            click(sjh.centerX(), sjh.centerY())
        }
        sleep(2000)
    
        if (text('手机号登录').exists() && text('请输入手机号').exists()) {
            zh = telNumber
            setText(0, zh)
        }
        sleep(8000)
    
        if ((id('fetch_code_tv').exists() || text('获取验证码').exists() ) && !textContains('重新发送').exists()) {
            text('获取验证码').findOnce().click()
        }
        sleep(1000)
    
        if (text('请输入验证码').exists()) {
            id('capcha_code_et').findOne(5000) ? id('capcha_code_et').findOnce().click() : ''
            id('capcha_code_et').findOne(5000) ? id('capcha_code_et').findOnce().click() : ''
            sleep(2000)
    
            var yzm = ksyzm();
            if (yzm == false || yzm == undefined) {
                TKB.qinglihh(package);
                sleep(5000);
                launch(package);
                continue;
            } else {
                setText(1, yzm)
            }
        }

        sleep(3000)
        if (text('登录').exists() && text('帮助').exists()) {
            click('登录')
        }
        sleep(2000)


        if(text('拖动滑块').exists()){
            var dian = get_verify();
            log(dian)

        }

        if(text('设置新密码').exists())
        {
            break;
        }
    }


    while (text('跳过').findOnce()) {
        text('跳过').findOnce().click()
        sleep(2000)
    }
}
//------------------------------------------main函数--------------------------------------------------------------
function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)

        var res = getTaskInfo(taskId, url)
        log(res)

        var telNumber = ''
        if (files.exists("/sdcard/phone.txt")) {
            telNumber = files.read('/sdcard/phone.txt')
            if (!telNumber) {
                sleep(2000)
                console.show();
                console.setSize(500, 500);
    
                telNumber = console.rawInput('请输入');
                log(telNumber)
                console.hide()
                files.write('/sdcard/phone.txt', telNumber)
                sleep(2000)
            }
            telNumber = files.read('/sdcard/phone.txt')

        }else{
            files.createWithDirs("/sdcard/phone.txt");
            sleep(1000)
            telNumber = files.read('/sdcard/phone.txt')
            if (!telNumber) {
                sleep(2000)
                console.show();
                console.setSize(500, 500);
    
                telNumber = console.rawInput('请输入');
                log(telNumber)
                console.hide()
                files.write('/sdcard/phone.txt', telNumber)
                sleep(2000)
            }
            telNumber = files.read('/sdcard/phone.txt')
        }
       
        log(telNumber)
        log(res.param['app_format'])

        if(res.param['app_format'] == 1){
            loading('com.ss.android.ugc.aweme', 'oppo', telNumber)
        }else{
            loadingks('com.smile.gifmaker',telNumber)
        }


    } catch (error) {
        toastLog('执行遇到错误' + error);
        repeat++
        if (repeat < 5) {
            main()
        }else{
            TKB.wzaandhome()
        }
     
    }

    sleep(3000)
    threads.shutDownAll();
    downjsrun()
}

main();



 