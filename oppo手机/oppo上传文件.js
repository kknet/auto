log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

//  在手机里新建一个这样的路径，上传js文件
var path = '/sdcard/OppoFile'
if (!files.isEmptyDir(path)) {
    var jsFiles = files.listDir(path + '/', function (name) {
        return name.endsWith(".js")
    })
    jsFiles.forEach(element => {
        upload(element)
    })
} else {
    log("此文件夹为空")
}

function upload(file_name) {
    var upload_url = 'http://121.196.126.46:9090/mqttcontrol/api/admin/oss/uploadjs'
    try {
        log(path + "/" + file_name)
        var res = http.postMultipart(upload_url, {
            file: open(path + "/" + file_name)
        }).body.json()
        log('上传文件：' + res['message'])
    } catch (error) {
        log(error)
    }
}
upload('Dzh.js')