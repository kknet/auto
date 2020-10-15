log('TKB')
var TKB = require('/sdcard/tkb2.js')
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var dqbaoming = "com.android.settings" //该项目包名
function xgxrf() {
    TKB.xgsrizhi('修改输入法')
    launch(dqbaoming)
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没注册成功')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        while (1) {
            try {
                if (text('设置').exists() && text('特色功能').exists() && text('更多设置').exists()) {
                    TKB.xgsrizhi('设置主页')
                    click('更多设置')
                    sleep(3000)
                } else if (!text('更多设置').exists()) {
                    TKB.xgsrizhi('下滑')
                    swipe(600, 1700, 500, 500, 1000)
                    random(1500, 3000)
                }
                if (text('更多设置').exists() && text('语言和输入法').exists()) {
                    TKB.xgsrizhi('语言和输入法')
                    click('语言和输入法')
                    sleep(3000)
                }
                if (text('当前输入法').exists() && text('语言和输入法').exists()) {
                    TKB.xgsrizhi('当前输入法')
                    if (text('中文（中国） - 讯飞输入法').exists()) {
                        TKB.xgsrizhi('已是讯飞输入法')
                        back()
                        sleep(500)
                        back()
                        sleep(500)
                        back()
                        sleep(500)
                        return true
                    } else {
                        TKB.xgsrizhi('不是讯飞')
                        click('当前输入法')
                        sleep(1000)
                        if (text('讯飞输入法').exists()) {
                            click('讯飞输入法')
                            sleep(1000)
                        } else {
                            TKB.xgsrizhi('没有讯飞输入法')
                            toastLog('没有讯飞输入法')
                            return false
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                toastLog('error')
            }
        }
    }
}
xgxrf()