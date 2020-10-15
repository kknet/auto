log("tKB")
// var TKB = require('/sdcard/tkb2.js')
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
var huahsu = '1|2'
log("发弹幕")
click(120, 1830)
sleep(1500)
var fas = huahsu.split("|")
setText(fas[random(0, fas.length - 1)])
sleep(500)
if (id("com.ss.android.ugc.aweme:id/eoc").exists()) {
    log("点击发送")
    try {
        var ss = id("com.ss.android.ugc.aweme:id/eoc").findOnce().bounds();
        log(ss)
        click(ss.centerX(), ss.centerY());
        sleep(2000)
    } catch (error) {
        sleep(1001)
        log(error);
    }
} else {
    click(1020, 1000)
    sleep(1000)
}
back()
sleep(1000)