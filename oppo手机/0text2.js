log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

