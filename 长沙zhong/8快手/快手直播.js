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
    if (text("立即开始").exists() && text("取消").exists()) {
        xgsrizhi("立即开始")
        click(300, 1800)
        sleep(1000)
        if (id("com.android.systemui:id/remember").exists()) {
            var aa = id("com.android.systemui:id/remember").findOnce().checked();
            if (aa == false) {
                var bb = id("com.android.systemui:id/remember").findOnce().bounds();
                xgsrizhi(bb.centerX())
                xgsrizhi(bb.centerY())
                click(bb.centerX(), bb.centerY())
                sleep(1000)
            }
        }
        click(800, 1850)
        sleep(1000)
        click("立即开始")
        sleep(2000)
    }
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
//快手直播2
function dyzhibo() {
    TKB.set_log("快手直播2")
    var TSD = (new Date()).getTime()
    var xs = action_args['param']
        // var url = "https://v.douyin.com/Jd2rLDf/"   //直播间连接
    var url = xs["直播链接"] //直播间连接
    var huahsu = xs["话术"] //直播间话术
    var yanshi = xs["话术频率"] //直播间话术时间间隔
    var gzs = xs["是否关注"] //直播间关注
    var ttn = 0 //判断有没有点关注
    var danmu = xs["是否发弹幕"] //判断是否发弹幕
    var yu = (new Date()).getTime() //发话术时间
    TKB.set_log("获取到的链接" + url)
    TKB.clear()
    var lpp = 0
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.smile.gifmaker")
    var cs = 0 //进入直播间的次数
    var jieshu = 0 //判断直播间结束
    var rq = (new Date()).getTime() //上传是否进入
    while (1) {
        if (text('去看看').exists()) {
            TKB.set_log("打开看看-进入直播")
            click('去看看')
            sleep(2000)
        }
        //直播间红包
        if (id('com.smile.gifmaker:id/open_icon_view').exists() && id('com.smile.gifmaker:id/background_view_normal').exists()) {
            TKB.set_log('点击红包')
            id('com.smile.gifmaker:id/background_view_normal').findOnce().click()
            sleep(2000)
        }
        if (id('com.smile.gifmaker:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
            TKB.set_log('开红包')
            id('com.smile.gifmaker:id/live_red_packet_pre_snatch_state_view').findOnce().click()
            sleep(5000)
        }
        if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
            TKB.set_log('红包抢完了')
            id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
            sleep(3000)
        }
        if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
            TKB.set_log('红包未开启')
            id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
            sleep(3000)
        }
        if (id('com.smile.gifmaker:id/close_view').exists()) {
            TKB.set_log('抢到了红包')
            id('com.smile.gifmaker:id/close_view').findOnce().click()
            sleep(2000)
        }
        if (textStartsWith('分享者').exists() && id('com.smile.gifmaker:id/close').exists()) {
            click(random(200, 700), random(1400, 1480))
            sleep(2000)
        } //直播间红包
        if (text("说点什么...").exists() && text("更多直播").exists() || id("com.smile.gifmaker:id/live_close_place_holder").exists() && id("com.smile.gifmaker:id/live_share").exists() || text("说点什么...").exists() && id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists()) {
            TKB.set_log("直播界面")
            toastLog("直播界面")
            if (lpp == 0) {
                // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                lpp = 1
            }
            sleep(2000)
            if (ttn == 0 && gzs == '是') {
                log("去关注")
                click(80, 60)
                sleep(2000)
            } else {
                var ff = random(1, 10)
                if (ff > 8) {
                    var djcs = random(4, 10)
                    for (j = 0, len = djcs; j < len; j++) {
                        click(random(800, 1000), random(450, 800))
                        sleep(random(100, 500))
                    }
                }
                if (danmu == '是' && (new Date()).getTime() - yu > Number(yanshi) * 1000) {
                    TKB.set_log("发弹幕")
                    click(120, 1830)
                    sleep(1500)
                    var fas = huahsu.split("|")
                    setText(fas[random(0, fas.length - 1)])
                    sleep(500)
                    if (desc("发送").exists()) {
                        TKB.set_log("点击发送")
                        try {
                            var ss = desc("发送").findOnce().bounds();
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
                    yu = (new Date()).getTime()
                }
            }
            if ((new Date()).getTime() - rq > 60 * 1000) {
                TKB.set_log("去上传人气")
                // TKB.uprenqi(sbip, user_id, yhbh, run_id, "1")
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                gzs = xs["关注"] //直播间关注
                danmu = xs["是否发弹幕"] //判断是否发弹幕
                rq = (new Date()).getTime()
            }
            TSD = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - TSD > 90 * 1000) {
                TKB.set_log("超时重新打开")
                TKB.clear()
                sleep(2000)
                setClip(url)
                sleep(1000)
                launch("com.smile.gifmaker")
                TSD = (new Date()).getTime()
                if (cs > 3) {
                    xs = action_args['param']
                    url = xs["直播链接"]
                    TKB.set_log("链接" + url)
                    huahsu = xs["话术"] //直播间话术
                    yanshi = xs["话术频率"] //直播间话术时间间隔
                    gzs = xs["关注"] //直播间关注
                    danmu = xs["是否发弹幕"] //判断是否发弹幕
                    setClip(url)
                    TKB.clear()
                    launch("com.smile.gifmaker")
                }
                cs = cs + 1
            }
        }
        if (text("直播已结束").exists() && text("观看人数").exists() || text("直播已结束").exists() && text("直播时长").exists()) {
            TKB.set_log("直播已经结束")
            jieshu = jieshu + 1
            if (jieshu > 3) {
                TKB.set_log("结束退出")
                return true
            } else {
                TKB.set_log("重新去拿连接")
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                gzs = xs["关注"] //直播间关注
                danmu = xs["是否发弹幕"] //判断是否发弹幕
                setClip(url)
                TKB.clear()
                launch("com.smile.gifmaker")
            }
        }
        if (text("关注").exists() && id("com.smile.gifmaker:id/live_profile_header_list_follow_container").exists() || text("粉丝").exists() && id("com.smile.gifmaker:id/live_profile_header_list_follow_container").exists()) {
            log("关注界面")
            if (gzs == '是') {
                try {
                    var ss = id("com.smile.gifmaker:id/live_profile_header_list_follow_container").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
                ttn = 1
                back()
                sleep(2000)
            } else {
                back()
                sleep(2000)
            }
        }
        if (text('不再提醒').exists() && text('去开启').exists()) {
            click('不再提醒')
            sleep(2000)
        }
        if (desc('立即购买').exists() && !desc('分享成功').exists()) {
            back()
            sleep(2000)
        }
        if (id("com.smile.gifmaker:id/editor").exists() && desc("发送").exists() || id("com.smile.gifmaker:id/emotion_button").exists() && desc("发送").exists()) {
            TKB.set_log("发消息界面")
            back()
            sleep(2000)
        }
        if (url == undefined) {
            TKB.set_log("获取不到链接")
            return false
        }
        if (text("入团特权").exists() && id("com.smile.gifmaker:id/live_fans_group_anchor_avatar").exists() || text("送礼并加入").exists()) {
            log("加入粉丝团")
            back()
            sleep(3000)
        }
        if (text("立即赠送").exists()) {
            log("立即赠送")
            back()
            sleep(3000)
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
var z = dyzhibo()
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