log("tKB")
var TKB = require('/sdcard/tkb2.js');
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
auto.waitFor()
sleep(1000)




var sbip = '47.114.99.72'
var user_id = '9'
var yhbh = '1'
var num = 5

var dqbaoming = 'com.android.contacts'

//db验证
function picture_verify(img_id) {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
            // toast("截屏已完成")
        var src = images.read(img)
        var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha'
        var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "db",
            image: open(imgFile),
            type: 'file'
        });
        var html = res.body.json()
        return html['code']
    } catch (error) {
        log(error)
        sleep(1100)
    }
}


for(var i = 100; i < 600; i++){
    // var i = 1
    // desc('获取语音验证码').click()
    // sleep(2000)
    var img = "/sdcard/123/jietu/" + i + ".png"
    captureScreen(img)
    toast("截屏已完成")
    var src = images.read(img);
    //快手滑块
    // var clip = images.clip(src, 177,257, 985, 574)
    var img_id = 'captchaClickImg'
    var verify_bounds = id(img_id).findOnce().bounds()
    var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
    var clip = images.clip(src, 137,620, 805, 417)
    images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    log('第'+i+'张')
    click(850,920)
    sleep(5000)
}