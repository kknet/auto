var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败！");
    exit();
}
var dqbaoming = "com.smile.gifmaker" //该项目包名
function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}

function zonghe() {
    findeclick("id", "com.smile.gifmaker:id/birthday_click_to_close'", 800) //关闭生日
    findeclick("id", "com.smile.gifmaker:id/close_btn", 800) //关闭活动红包关闭好友推荐
    text('好友推荐').exists()?click(150,400):''
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
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.set_log("滑块验证码失败")
            toastLog("滑块验证码失败")
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
        log("五星好评")
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

/**快手注册
 * e_num{number} 注册获取验证码最大次数
 */
function kszc() {
    TKB.set_log("快手注册")
    var bb = TKB.getVerName("快手")
    if (bb != "7.4.20.13991" && bb != false) {
        log("抖音的版本不对")
        TKB.xiezai(dqbaoming)
    }
    var baom = getPackageName("快手")
    if (baom == null) {
        var bbd = TKB.wdjxiazai("快手", "7.4.20.13991")
        if (bbd == false) {
            log("没安装成功快手")
            return false
        }
    }
    launch(dqbaoming)
    sleep(6000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zh = ""
    var yzm = ""
    var is_click = false
    var tem = 0,
        e_num = 2
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.set_log("时间够了退出")
            TKB.clear(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没注册成功")
            TKB.clear(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
            TKB.set_log('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.set_log('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.set_log('登录成功1')
                return true
            }
        }
        if (text('登录').exists()) {
            click('登录')
            TKB.set_log("开始点击登录按钮")
            TSD = (new Date()).getTime()
            sleep(1500)
        }
        if (text('本机一键登录').exists()) {
            click('本机一键登录')
            toastLog('本机一键登录')
            TKB.set_log("本机一键登录")
            sleep(1500)
        }
        if (text('其他方式登录').exists()) {
            click('其他方式登录')
            toastLog('其他方式登录')
            TKB.set_log("其他方式登录")
            sleep(1500)
                // 获取账号
            if (tem == 0) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                sleep(5000)
                if (zh == false) {
                    TKB.set_log("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
        }
        if (text('快速登录观看更多好玩的视频').exists() && text('手机号登录').exists()) {
            var x = text('手机号登录').findOnce().bounds().centerX()
            var y = text('手机号登录').findOnce().bounds().centerY()
            click(x, y)
            sleep(1500)
            TKB.set_log('点击手机号登录')
        }
        if (text('下一步').exists() && text('下一步').findOnce().enabled() == true && text('手机号登录').exists()) {
            text('下一步').findOnce().click()
            sleep(1500)
        }
        if (e_num <= 0) {
            TKB.set_log("获取验证码频繁")
            TKB.clear(dqbaoming)
            sleep(2000)
            return false
        }
        if (text('手机号登录').exists() && (text('+86').exists() || text('密码登录').exists())) {
            TKB.set_log('手机号登录')
            if (tem == 0) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                sleep(5000)
                if (zh == false) {
                    TKB.set_log("获取不到号码")
                    toastLog("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
            setText(0, zh)
            sleep(2000)
            click('获取验证码')
            sleep(15000)
            yzm = TKB.huoquyzm("快手科技")
            e_num--
            sleep(2000)
            if (yzm == false) {
                TKB.set_log("没有获取到验证码")
                TKB.clear(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_click = false
                continue
            } else {
                TKB.set_log("输入验证码" + yzm)
                setText(1, yzm)
                sleep(1500)
            }
        }
        if (text('确定').exists() && text('确定').findOnce().enabled() == true && is_click == false) {
            text('确定').findOnce().click()
            sleep(5000)
            is_click = true
        }
        if (text('完成').exists() && text('跳过').exists()) {
            text('跳过').findOnce().click()
            sleep(1500)
        }
        if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
            TKB.set_log('登录成功')
            toastLog('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.set_log('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.set_log('登录成功1')
                toastLog('登录成功1')
                return true
            }
        }
    }
}

_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
var dl = kszc()
if (dl == true) {
    var msg_num = 1
    var msg = '成功'
    var notice_name = 'after_script'
} else {
    var msg_num = 0
    var msg = '失败'
    var notice_name = 'stop'
}
TKB.send_message({notice_name: notice_name,notice_content: [msg_num, msg]})

