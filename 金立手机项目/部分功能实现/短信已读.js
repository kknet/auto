log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
packageName = 'com.android.mms'
var TKB = require('/sdcard/tkb2.js')

function qlhc() {
    log('短信已读')
    launch(packageName)
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var a=0
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            log('时间够了退出')
            TKB.qinglihh(packageName)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log('超时没清理成功')
            back()
            sleep(1000)
            TKB.qinglihh(packageName)
            sleep(3000)
            launch(packageName)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('个人').exists() && text('服务').exists() && text('拦截').exists()) {
                log('主页界面')
                click(550,150)
                sleep(2000)
            }
            if (text('安全支付类短信').exists() && text('新信息').exists() && text('更多').exists()) {
                log('服务界面')
                click('更多')
                sleep(5000)
            }
            if (text('全部置为已读').exists() && text('新信息').exists() && text('关闭').exists()) {
                log('全部置为已读~~')
                click('全部置为已读')
                a++
                sleep(2000)
            }
            if (Number(a)>3){
                log('全部已读')
                toastLog('全部已读')
                return true
            }
        } catch (error) {
            sleep(1001)
            toastLog('error1001')
        }
    }
}
qlhc()



