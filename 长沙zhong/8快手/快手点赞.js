var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败！");
    exit();
}

function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            TKB.set_log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            TKB.set_log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}

function toastAt0(msg, x, y) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
    toast.show();
}

function toastAt(msg, x, y) {
    ui.run(() => toastAt0(msg, x, y));
}

function zonghe() {
    findeclick("id", "com.smile.gifmaker:id/birthday_click_to_close'", 800) //关闭生日
    findeclick("id", "com.smile.gifmaker:id/close_btn", 800) //关闭活动红包关闭好友推荐
    text('好友推荐').exists() ? click(150, 400) : ''
    findeclick("id", "com.smile.gifmaker:id/icon_close", 800) //深色模式
    findeclick("id", "com.smile.gifmaker:id/iv_close", 800) //深色模式
    findeclick("id", "com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view", 800) //深色模式
    findeclick("text", "同意并继续", 800)
    findeclick("text", "跳过", 800)
    findeclick("text", "我知道了", 800)
    findeclick("text", "知道了", 800)
    findeclick("text", "点击重试", 800)
    findeclick("text", "稍后", 800)
    findeclick("text", "关注并退出", 800)
    findeclick("text", "允许", 800)
    findeclick("text", "一键开启", 800) //一键开启摄像
    if (text("激活帐号").exists() && desc("获取语音验证码").exists()) {
        toastLog("此账号需要激活")
        //账号被封提示弹窗
    }
    if (text('取消').exists() && text('去开启').exists()) {
        click('取消')
        sleep(1500)
    }
    if (desc("天气图标").exists() || desc("近日天气").exists() || desc("今天").exists()) {
        TKB.set_log("天气")
        back()
        sleep(1000)
    }
    if (text('邀请你体验快手新版大屏模式').exists() && text('取消')) {
        click('取消')
        sleep(1500)
    }
    if (text('送我一个小可爱吧').exists() || text('立即赠送').exists()) {
        back()
        sleep(500)
    }
    if (desc('您的帐号存在异常，请使用当前绑定的手机号激活。').exists() && desc('获取语音验证码后1分钟内，我们将以电话形式告知您验证码，请留意接听。').exists()) {
        sleep(2500)
        back()
    }
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.set_log("滑块验证码")
        var zz = get_verify()
        TKB.set_log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastAt("滑块验证码成功", 300, 300)
        } else {
            TKB.set_log("滑块验证码失败")
            toastAt("滑块验证码失败", 300, 300)
        }
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.set_log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.set_log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.set_log("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        TKB.set_log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.set_log("长按屏幕使用更多功能")
        sleep(1200)
    }
    if (text("网络连接错误").exists()) {
        click("重试")
        TKB.set_log("网络连接错误")
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认")
        TKB.set_log("确认")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542)
        TKB.set_log("同步到今日头条")
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.set_log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待")
        TKB.set_log("等待")
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消")
        TKB.set_log("取消")
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说")
        TKB.set_log("以后再说")
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.set_log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds()
            click(node.centerX(), node.centerY())
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error)
        }
    }
    if (text("立即赠送").exists()) {
        TKB.set_log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("滑动查看更多").exists()) {
        TKB.set_log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.set_log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (id("com.smile.gifmaker:id/xd").exists() && text("好友推荐").exists()) {
        TKB.set_log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//快手滑块
function get_verify() {
    try {
        // sleep(3000)
        // click(890, 621)
        sleep(5000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
        // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        var clip = images.clip(src, 47, 257, 985, 574)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "ks",
            image: open(imgFile),
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
            return '失败'
        }
    } catch (error) {
        TKB.set_log(error)
    }
}

var dqbaoming = "com.smile.gifmaker" //该项目包名
// 点赞 '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
function ksdz() {
    TKB.set_log('快手点赞')
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171547'
    var is_open = false
    var xs = action_args['param'],
        live_obj
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.set_log('未获取到作品链接')
        return false
    } else {
        live_obj = xs['作品链接']
        home()
        sleep(2000)
        setClip(live_obj)
        sleep(2000)
        launch(dqbaoming)
    }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.set_log('超时没在首页')
            TKB.clear()
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_open = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.set_log('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/title').exists() && id('com.smile.gifmaker:id/close').exists() && text('去看看').exists()) {
                TKB.set_log('检测到链接，立即打开')
                text('去看看').findOnce().click()
                is_open = true
                sleep(5000)
            }
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && is_open == true) {
                TKB.set_log('已打开链接，准备点赞')
                sleep(random(15000,20000))
                var x = random(250, 750)
                var y = random(600, 1200)
                var z = 10
                click(x, y)
                sleep(z)
                click(x, y)
                sleep(2000)
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}
_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    setInterval(() => {
        TKB.send_message({
            notice_name: "task_time_stamp",
            notice_content: (new Date()).getTime()
        })
    }, 15 * 1000)
})
var z = ksdz()
if (z == true) {
    var msg_num = 1
    var msg = '成功'
} else {
    var msg_num = 0
    var msg = '失败'
}
TKB.send_message({
    notice_name: 'stop',
    notice_content: [msg_num, msg]
})