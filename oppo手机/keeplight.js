device.keepScreenOn(240 * 60 * 60 * 1000)
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt')
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/uploadDeviceStatus';
log(taskId)

function dowmp3() {
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            let imgurl = 'https://mp3-10086.oss-cn-shenzhen.aliyuncs.com/%E8%A7%82%E6%B2%A7%E6%B5%B7.mp3';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/观沧海.mp3", res.body.bytes());
                toastLog("下载完成")
                return true
            } else {
                toastLog("没有mp3");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }
}

while (1) {
    sleep(600000)
    toastLog('播放音乐并等待任务中')
    var newtaskId = files.read('/storage/emulated/0/taskId.txt');
    log(newtaskId)
    if (newtaskId != taskId) {
        break;
    }
    if (files.exists("/sdcard/观沧海.mp3") == false) {
        sleep(5000)
        dowmp3()
        toastLog('下载音乐')
    }
    ssee = (new Date()).getTime()
    media.playMusic("/sdcard/观沧海.mp3", 0.01);
    
   
    let res = http.postJson(url, {
        "deviceId":deviceId
    });
    if (res.statusCode == 200) {
        toastLog('我处于在线等待状态')
    }
}

