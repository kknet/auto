var xb_list = ['保密', '男', '女']
var xb = xb_list[random(0, xb_list.length-1)]
//匹配中英文
replace(/[^\u4E00-\u9FA5a-zA-Z]/g, '')
var name = 'ヅ少ηιàη按んàδ⑽abc'
var zz = name.replace(/^[\u4e00-\u9fa5a-zA-Z0-9]/,'')
var TKB = require('/sdcard/tkb2.js')
var biaohao = random(1, 504)
var lj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/qita/dytouxiang/1%20(" + biaohao + ").jpg"
var sp = TKB.xztp(lj)


//获取服务器的头像名字简介
function z_split(xx) {
    var zz = xx
    if (zz.length > 1) {
        zx = zz[1]
    } else {
        zx = zz[0]
    }
    return zx
}
var sbip = '47.114.99.72'
var user_id = '9'
var yhbh = '588'
var zz = TKB.get_name(sbip, user_id, yhbh)
if (zz == false) {
    alert('素材获取错误')
    return false
} else {
    //用分隔符隔开，获取后面的社交数据
    name = z_split(zz['nickname'].split('|||'))
    TKB.xgsrizhi(name)
    var img = z_split(zz['img'].split('|||'))
    TKB.xgsrizhi(img)
    jianjie = z_split(zz['jianjie'].split('|||'))
    TKB.xgsrizhi(jianjie)
    var sp = TKB.xztp(img)
    if (sp == false) {
        TKB.xgsrizhi("下载图片失败")
        return false
    }
}
//接口
// ftp
ftp://122.228.155.197:8898/
zjml_slide
P4Pp4FrX8fRwEwj6
// 滑动验证码
http://122.228.155.197:8803/captcha_slide
post/form-data
type [file, url , base64]
image[file, url , base64] 
mode [ks]
// 英数
http://122.228.155.197:8803/captcha
post/form-data
type [file, url , base64]
image[file, url , base64] 
mode [calc,regular,self]
// calc 计算题，regular常规, self 4位数自己产生

//上传文件到0ss
//oss需要设置文件读取权限
var Url = "https://liangcheng147.oss-cn-beijing.aliyuncs.com/"
var AccessKeyID = "LTAI4G9kaFAnG88QuRs7WkKm"
var AccessKeySecret = "VAcMf2U7A3aw4E2ZK6M1xj220BMFRZ"
var res = http.postMultipart(Url, {
    key : 'abc/' + '${filename}',
    AccessKeySecret :"VAcMf2U7A3aw4E2ZK6M1xj220BMFRZ",
    file: open("/sdcard/1433223.txt")
})
log(res.body.string())



//验证码截图
var TKB = require('/sdcard/tkb2.js')
// 小红书滑块
for(var i = 300; i < 600; i++){
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
    var clip = images.clip(src, 137,620, 805, 417)
    images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    log('第'+i+'张')
    click(877,680)
    sleep(5000)
}
//快手滑块
for(var i = 1; i < 300; i++){
    // var i = 1
    // desc('获取语音验证码').click()
    // sleep(2000)
    var img = "/sdcard/123/jietu/" + i + ".png"
    captureScreen(img)
    toast("截屏已完成")
    var src = images.read(img);
    var clip = images.clip(src, 47,257, 985, 574)
    images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    log('第'+i+'张')
    click(106,767)
    sleep(5000)
}
//知乎验证
var img_id = 'com.zhihu.android:id/captcha_image'
for (var i = 1; i < 1001; i++) {
    // var i = 1
    // desc('获取语音验证码').click()
    sleep(4000)
    var img = "/sdcard/123/jietu/" + i + ".png"
    captureScreen(img)
    toast("截屏已完成")
    var src = images.read(img);
    var verify_bounds = id(img_id).findOnce().bounds()
    var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
    images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    log('第' + i + '张')
    click(500, 970)
    // sleep(5000)
}

// 读取文件，替换指定
for(var x=1;x<597;x++){
    var vj = '/sdcard/123/111/'+x+'.json'
    open(vj)
    var z = files.read(vj,encoding = "UTF-8")
    // '\\\\192.168.8.61\\e\\小红书图片缺口标注\\图片\\小红书滑块\\雷强\\1.png'
    var i =0
    while(1){
        if (i == 0){
            var zz = z.replace('\\','')
            i = 1
        }
        if (zz.indexOf("\\") != -1){
            var zz = zz.replace('\\','')
        }else{
            break
        }
    }
    var zz = zz.replace('192.168.8.61','').replace('小红书图片缺口标注','').replace('图片','').replace('小红书滑块','').replace('雷强','').replace('李阅','').replace('向佳华','')
    var lj = '/sdcard/123/chuli/'+x+'.json'
    files.write(lj, zz)
}


//验证码截取
if (a == 1) {
    if (files.isDir("/sdcard/123/jietu/") == false){
        log('1')
        files.createWithDirs("/sdcard/123/jietu/")
    }
    if (files.isDir("/sdcard/123/chuli/") == false){
        log('2')
        files.createWithDirs("/sdcard/123/chuli/")
    }
    // var img_id = 'com.douban.frodo:id/image'
    for (var i = 1; i < 1001; i++) {
        // var i = 1
        // desc('获取语音验证码').click()
        sleep(4000)
        var img = "/sdcard/123/jietu/" + i + ".png"
        captureScreen(img)
        log("截屏已完成")
        var src = images.read(img);
        // var verify_bounds = id(img_id).findOnce().bounds()
        var clip = images.clip(src, 177, 564, 726, 363)
        // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        images.save(clip, "/sdcard/123/chuli/" + i + ".png");
        toast('第' + i + '张')
        log('第' + i + '张')
        click(870,670)
        // sleep(5000)
    }
    //知乎验证 
    // var img_id = 'com.zhihu.android:id/captcha_image'
    // for (var i = 2991; i < 4000; i++) {
    //     sleep(4000)
    //     var img = "/sdcard/123/jietu/" + i + ".png"
    //     captureScreen(img)
    //     log("截屏已完成")
    //     var src = images.read(img);
    //     var verify_bounds = id(img_id).findOnce().bounds()
    //     var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
    //     images.save(clip, "/sdcard/123/chuli/" + i + ".png");
    //     toast('第' + i + '张')
    //     log('第' + i + '张')
    //     sleep(100)
    //     click(500, 970)
    // }
}


