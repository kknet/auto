log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

function qlhc() {
    TKB.xgsrizhi('清理缓存')
    launch('com.gionee.softmanager')
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.gionee.softmanager')
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没清理成功')
            back()
            sleep(1000)
            TKB.qinglihh('com.gionee.softmanager')
            sleep(3000)
            launch('com.gionee.softmanager')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('欢迎使用系统管家').exists() && text('退出').exists() && text('继续').exists()) {
                TKB.xgsrizhi('欢迎使用系统管家')
                click('继续')
                sleep(2000)
            }
            if (id('amigo:id/amigo_action_bar_title').exists() && text('垃圾清理').exists() && text('病毒查杀').exists() && text('应用管理').exists()) {
                TKB.xgsrizhi('主页')
                click('垃圾清理')
                sleep(5000)
            }
            if (id('com.gionee.systemmanager:id/rubbish_cleaner_item_title').exists() && text('垃圾清理').exists() && text('停止扫描').exists()) {
                TKB.xgsrizhi('扫描中~~')
                sleep(2000)
            }
            if (text('已选择0 B垃圾，可放心清理').exists()){
                TKB.xgsrizhi('没有垃圾可以清理')
                sleep(2000)
                back()
                return true
            }
            if (id('com.gionee.systemmanager:id/rubbish_cleaner_item_title').exists() && text('垃圾清理').exists() && text('一键清理').exists()) {
                TKB.xgsrizhi('一键清理')
                click('一键清理')
                sleep(3000)
            }
            if (text('垃圾清理').exists() && text('卸载不常用软件').exists() && text('返回首页').exists()) {
                TKB.xgsrizhi('清理完成')
                click('返回首页')
                sleep(2000)
                return true
            }
        } catch (error) {
            sleep(1001)
            toastLog('error1001')
        }
    }
}

qlhc()