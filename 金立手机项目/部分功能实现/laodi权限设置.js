log("tKB")
var TKB = require('/sdcard/tkb2.js')
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

function ldqx() {
    TKB.xgsrizhi('laodi权限设置')
    openAppSetting(getPackageName("laodi"))
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh("com.android.settings")
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时打开成功')
            back()
            sleep(1000)
            TKB.qinglihh("com.android.settings")
            sleep(3000)
            openAppSetting(getPackageName("laodi"))
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        while (1) {
            try {
                openAppSetting(getPackageName("laodi"))
                if (text('应用信息').exists() && text('卸载').exists() && text('权限').exists()) {
                    TKB.xgsrizhi('点击权限')
                    click('权限')
                    sleep(3000)
                }
                if (text('发送短信').exists() && text('读取联系人').exists()){
                    if (text('关').exists()){
                        log('点击打开')
                        click('关')
                        sleep(2000)
                    }else{
                        log('下滑')
                        swipe(500,1700,500,400,800)
                        sleep(2000)
                    }
                }
                if (text('修改日历').exists() && text('录音').exists()){
                    if (text('关').exists()){
                        log('点击打开')
                        click('关')
                        sleep(2000)
                    }else{
                        toastLog('全部打开')
                        sleep(2000)
                        return true
                    }
                }
            } catch (error) {
                sleep(1001)
                toastLog('error')
            }
        }
    }
}
ldqx()