// 常量


// 弹窗及基础函数
threads.start(function () {
    log("子线程1");
    while (true) {
        sleep(200)
        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
        sleep(200)
        clickable().id('android:id/button1').findOnce() ? clickable().id('android:id/button1').findOnce().click() : ''
        sleep(200)
    }
})
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

function getAllTexts(setting) {
    try {
        var setting = setting || {}
        var defaultSetting = {
            getText: true,
            getDesc: true,
            getId: false,
            removeRepetitiveElements: true
        }
        Object.assign(defaultSetting, setting);
        //xgsrizhi(defaultSetting)
        var allStr = []
        var getDescAndTextAndIdOfNode = function (node) {
            if (node) {
                if (defaultSetting.getText) {
                    var text = node.text()
                    if (!!text) {
                        allStr.push(text)
                    }
                }
                if (defaultSetting.getDesc) {
                    var desc = node.desc()
                    if (!!desc) {
                        allStr.push(desc)
                    }
                }
                if (defaultSetting.getId) {
                    var id = node.id()
                    if (!!id) {
                        allStr.push(id)
                    }
                }
            }
            for (let i = 0; i < node.childCount(); i++) {
                getDescAndTextAndIdOfNode(node.child(i));
            }
        }
        var getFrameLayoutNode = function () {
            return className('FrameLayout').findOne(2000)
        }
        getDescAndTextAndIdOfNode(getFrameLayoutNode())

        function removeRepetitiveElements(arr) {
            var obj = {}
            for (let i = 0; i < arr.length; i++) {
                if (obj.hasOwnProperty(arr[i])) {} else {
                    obj[arr[i]] = true
                }
            }
            return Object.keys(obj)
        }
        if (defaultSetting.removeRepetitiveElements) {
            allStr = removeRepetitiveElements(allStr)
        }
        return allStr
    } catch (error) {
        sleep(1001)
        xgsrizhi(error);
        return 1
    }
}

function qinglihh() {
    log("清理缓存")
    var TB = (new Date()).getTime()
    sleep(2000)
    back()
    sleep(500)
    home()
    sleep(1000)
    while (true) {
        if ((new Date()).getTime() - TB > 30 * 1000) {
            log("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
            return false
        }
        try {

            if (id("com.coloros.recents:id/clear_button").exists()) {
                log("点击清理")
                var aa = id("com.coloros.recents:id/clear_button").findOnce().bounds();
                if (aa != null) {
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            } else {
                if (id("com.android.systemui:id/progress_circle_view").exists()) {
                    log("点击清理2")
                    var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                    if (aa != null) {
                        log(aa.centerX())
                        log(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                    }
                    sleep(2000)
                    home()
                    sleep(2000)
                    return true
                } else {
                    if (id("com.huawei.android.launcher:id/clear_all_recents_image_button").exists()) {
                        log("点击清理3")
                        var aa = id("com.huawei.android.launcher:id/clear_all_recents_image_button").findOnce().bounds();
                        if (aa != null) {
                            log(aa.centerX())
                            log(aa.centerY())
                            click(aa.centerX(), aa.centerY())
                        }
                        sleep(2000)
                        home()
                        sleep(2000)
                        return true
                    } else {
                        back()
                        sleep(500)
                        home()
                        sleep(2000)
                        recents()
                        sleep(3000)
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

// 下载工具类js

function downutilsjs() {
    toastLog("初始化工具js")
    var TTR = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TTR > 5 * 60 * 1000) {
                break;
            }
            let jsurl = 'https://mlziliao.oss-cn-hangzhou.aliyuncs.com/js/debug/Dmytkb.js';
            let res = http.get(jsurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/mytkb.js", res.body.bytes());
                toastLog("下载完成")
                break;
            } else {
                toastLog("网络请求失败，请检查网络连接情况");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }
    toastLog("初始化工具js完成")
}

// 获取手机号码并保存

function getPhone() {
    toastLog('获取手机账号')
    var TTR = (new Date()).getTime()
    while (1) {

        if ((new Date()).getTime() - TTR > 5 * 60 * 1000) {
            break;
        }

        if (files.exists("/sdcard/phone.txt") && files.read('/sdcard/phone.txt').length == 11) {
            break;
        }

        launchApp('信息')
        sleep(5000)

        try {
            var a = desc('新建信息').id('action_new').findOnce()
            click(a.bounds().centerX(), a.bounds().centerY())
            sleep(3000)

            if (desc('选择收信人').exists()) {
                click(230, 230)
                sleep(3000)
                setText(0, "10001")

            }

            if (text('短信').exists()) {
                click('短信')
                sleep(3000)
                setText(0, "504")
            }

            while (1) {
                if (desc('发送').id('send_button').exists()) {
                    id('send_button').findOnce().click()
                    break;
                }

            }
            sleep(60000)

            var ss = getAllTexts()
            for (j = 0, len = ss.length; j < len; j++) {
                log(ss[j])
                if (ss[j].indexOf("业务号码") != -1) {
                    telNumber = ss[j].split('业务号码:')
                    log(telNumber[1].slice(0, 11))
                    var phone = telNumber[1].slice(0, 11)
                    if (phone.length == 11) {
                        files.createWithDirs("/sdcard/phone.txt");
                        files.write('/sdcard/phone.txt', phone)
                        break;
                    }

                }
            }
        } catch (error) {
            log(error)
            qinglihh()
        }

    }
    toastLog('获取手机账号完成')
}

// 进入系统设置
// 调节媒体音量
// 关闭自动更新
// 关闭省电
// 关闭应用冻结

function closeSystem() {

    home()

    sleep(5000)

    duration = random(600, 1200);

    launch('com.android.settings')
    sleep(2000)

    sound_vibration = text("声音与振动").findOnce();
    if (sound_vibration != null) {
        sound_vibration.parent().parent().parent().click()
        sleep(2000)
        interval = [127, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 943]
        interval.forEach((val, index) => {
            swipe(interval[index], 1198, 127, 1198, duration)
            log(interval[index])
        });
    } else {
        // 错误处理
        toastLog('未找到声音与振动...')
    };
    sleep(10000)
    back()

    sleep(3000)
    swipe(162, 1713, 162, 500, 780);
    sleep(3000)

    all_text = getAllTexts();
    is_all = -1;
    all_text.forEach((val, index) => {

        if (all_text[index] == "电池") {
            app_dianchi()
            back()
        }

        sleep(5000)

        if (all_text[index] == "软件更新") {
            app_update()
            back()
        }


        // if (all_text.length - 1 == index) {
        //     is_all = 1;
        // }
    })

    // if (is_all == 1) {
    //     swipe(162, 1713, 162, 500, duration);
    //     sleep(10000)
    //     app_dianchi()
    //     app_update()
    // }

    function app_dianchi() {
        let update = text("电池").findOnce();
        if (update != null) {
            update.parent().parent().parent().click()
        } else {
            // 错误处理
            toastLog('未找到电池...')
        };
        sleep(5000);
        log(id('android:id/widget_frame').exists())
        if (id('android:id/widget_frame').exists()) {
            //截图
            var img = captureScreen();
            var color = images.pixel(img, 950, 1057);
            toastLog(colors.toString(color));
            sleep(2000)

            if (colors.toString(color) == '#ffffffff') {
                toastLog('省电已关闭...')
                sleep(2000)
            } else {
                click(950, 1057) 
                sleep(2000)
                toastLog('省电自动关闭...')

                dianchi_text = getAllTexts();
                dianchi_text.forEach((val, index) => {

                    if (val == "应用速冻") {
                        app_dongjie()
                        back()
                        sleep(1000)
                        back()
                        throw Error();
                    }


                })
                sleep(2000)
            }
          
        }

    }

    // 夜间软件更新 开启/关闭
    function app_update() {
        let update = text("软件更新").findOnce();
        if (update != null) {
            update.parent().parent().parent().click()
        } else {
            // 错误处理
            toastLog('未找到软件更新...')
        };
        sleep(5000);
        if (id('settings').exists()) {
            id('settings').findOne().click();
            sleep(2000);
        }
        if (id('at_night_action').exists()) {
            //截图
            var img = captureScreen();
            var color = images.pixel(img, 972, 471);
            toastLog(colors.toString(color));
            sleep(2000)

            if (colors.toString(color) == '#ffcbcbcb') {
                toastLog('夜间自动更新已关闭...')
                sleep(2000)
            } else {
                click(972, 471) // at_night_switch
                sleep(2000)
                id('at_night_action').findOne().click()
                toastLog('点击关闭夜间自动更新...')
                sleep(2000)
            }
            sleep(1000)
            home()
        }
    }


    function app_dongjie() {
        let update = text("应用速冻").findOnce();
        if (update != null) {
            update.parent().parent().parent().click()
        } else {
            // 错误处理
            toastLog('未找到应用速冻...')
        };
        sleep(5000);
        while (1) {
            swipe(162, 1713, 162, 500, 680);
            if (text('温州').exists()) {
                break;
            }
        }
        if (id('android:id/widget_frame').exists()) {

            log(text('温州').findOne().parent())
            var dian  = text('温州').findOne().parent().bounds()
            var y = dian.centerY()
            var img = captureScreen();
            var color = images.pixel(img, 965, y);
            toastLog(colors.toString(color));
            sleep(2000)
        
            if (colors.toString(color) == '#ffffffff') {
                toastLog('应用速冻已关闭...')
                sleep(2000)
            } else {
                click(965, y)
                sleep(2000)
                id('at_night_action').findOne().click()
                toastLog('点击关闭应用速冻...')
                sleep(2000)
            }
            sleep(1000)
            home()
        }

        
    }

}

// 手机管家
// 开启自启动

function setPhoneManagger(){
    sleep(3000)
    launch('com.coloros.phonemanager')

    sleep(4000)
    if(text('权限隐私').exists()){
        click('权限隐私')
    }

    sleep(4000)
    if(text('自启动管理').exists()){
      click('自启动管理')        
    }

    sleep(4000)
    while (1) {
        swipe(162, 1713, 162, 500, 680);
        if (text('温州').exists()) {
            break;
        }
    }
    if (id('android:id/widget_frame').exists()) {

        log(text('温州').findOne().parent())
        var dian  = text('温州').findOne().parent().bounds()
        var y = dian.centerY()
        var img = captureScreen();
        var color = images.pixel(img, 965, y);
        toastLog(colors.toString(color));
        sleep(2000)
        
        if (colors.toString(color) == '#ff2fc17b') {
            toastLog('自启动已开启...')
            sleep(2000)
        } else {
            click(965, y)
            sleep(2000)
            toastLog('点击开启自启动...')
            sleep(2000)
        }
        
        sleep(1000)
        home()
    }

}


// 应用长按
// 开启通知管理
// 开启悬浮窗
// 开启其他应用自动启动
function setApp(){

    app.openAppSetting('com.yyunkong.y');
    text(app.getAppName('com.yyunkong.y')).waitFor();

    sleep(4000)
    if(text('通知管理').exists()){
        click('通知管理')
    }

    if(text('允许通知').exists()){
        var dian = text('允许通知').findOnce().bounds()
        var y = dian.centerY()
        var img = captureScreen();
        var color = images.pixel(img, 965, y);
        toastLog(colors.toString(color));
        sleep(2000)
    
        if (colors.toString(color) == '#ffcbcbcb') {
            toastLog('通知权限已开启...')
            sleep(2000)
        } else {
            click(965, y)
            sleep(4000)
            toastLog('点击开启通知权限...')

            var dian2 = text('在锁屏上显示').findOnce()
            var y2 = dian2.centerY()
            var img = captureScreen();
            var color = images.pixel(img, 965, y2);
            toastLog(colors.toString(color));
            sleep(2000)
        
            if (colors.toString(color) == '#ffcbcbcb') {
                toastLog('在锁屏上显示已开启...')
                sleep(2000)
            } else {
                click(965, y2)
                sleep(2000)
                toastLog('点击开启在锁屏上显示...')
            }
            sleep(4000)

            var dian2 = text('在屏幕顶部显示').findOnce()
            var y2 = dian2.centerY()
            var img = captureScreen();
            var color = images.pixel(img, 965, y2);
            toastLog(colors.toString(color));
            sleep(2000)
        
            if (colors.toString(color) == '#ffcbcbcb') {
                toastLog('在屏幕顶部显示已开启...')
                sleep(2000)
            } else {
                click(965, y2)
                sleep(2000)
                toastLog('点击开启在屏幕顶部显示...')
            }
            sleep(4000)

            back()
        }

    }


    if (id('android:id/widget_frame').exists()) {

        // while (1) {
        //     swipe(162, 1713, 162, 500, 680);
        //     if (text('默认打开').exists()) {
        //         break;
        //     }
        // }
    

        log(text('允许其他应用自动启动').findOne())
        var dian  = text('允许其他应用自动启动').findOne().bounds()
        var y = dian.centerY()
        var img = captureScreen();
        var color = images.pixel(img, 965, y);
        toastLog(colors.toString(color));
        sleep(2000)
        
        if (colors.toString(color) == '#ff2fc17b') {
            toastLog('自启动已开启...')
            sleep(2000)
        } else {
            click(965, y)
            sleep(2000)
            toastLog('点击开启自启动...')
            sleep(2000)
        }
        sleep(1000)


        log(text('允许显示悬浮窗').findOne())
        var dian3  = text('允许显示悬浮窗').findOne().bounds()
        var y3 = dian3.centerY()
        var img = captureScreen();
        var color = images.pixel(img, 965, y3);
        toastLog(colors.toString(color));
        sleep(2000)
        
        if (colors.toString(color) == '#ff2fc17b') {
            toastLog('自启动已开启...')
            sleep(2000)
        } else {
            click(965, y3)
            sleep(2000)
            toastLog('点击开启自启动...')
            sleep(2000)
        }
        sleep(1000)
    }




}




function main(){

    downutilsjs()

    getPhone()

    closeSystem()

    setPhoneManagger()

    setApp()

    qinglihh()

    threads.shutDownAll()
}

main()
