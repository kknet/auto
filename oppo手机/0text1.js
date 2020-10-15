log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

//滑块
function get_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        var url = 'http://122.228.155.197:8803/captcha_slide'
        var clip = images.clip(src, 137, 610, 804, 416)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "xhs",
            image: open(imgFile),
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            log('失败')
        }
    } catch (error) {
        log(error)
    }
}

for(var i = 277; i < 500; i++){
    // var i = 1
    // desc('获取语音验证码').click()
    // sleep(2000)
    var img = "/sdcard/123/jietu/" + i + ".png"
    captureScreen(img)
    toast("截屏已完成")
    var src = images.read(img);
    //快手滑块
    // var clip = images.clip(src, 47,257, 985, 574)
    // var verify_bounds = id(img_id).findOnce().bounds()
    // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
    var clip = images.clip(src, 137,610, 805, 402)
    images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    log('第'+i+'张')
    click(877,680)
    sleep(5000)
}

