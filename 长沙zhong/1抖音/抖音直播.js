var TKB = require("/sdcard/Android/data/.haoareme/模块.js")

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

function zonghe() {
    findeclick("text", "稍后", 800)
    findeclick("text", "刷新", 800)
    findeclick("text", "好的", 800)
    findeclick("text", "始终同意", 800)
    findeclick("text", "以后再说", 800)
    findeclick("text", "我知道了", 800)
    findeclick("text", "知道了", 800)
    findeclick("text", "下次再说", 800)
    findeclick("text", "重试", 800)
    findeclick("text", "跳过", 800)
    findeclick("text", "确认", 800)
    findeclick("id", "com.ss.android.ugc.aweme:id/bn0", 800)
    if (text("添加头像").exists() && text("点击设置头像").exists()) {
        TKB.set_log("添加头像")
        back()
        sleep(1000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.set_log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        TKB.set_log("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        TKB.set_log("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.set_log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        TKB.set_log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.set_log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.set_log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.set_log("同步到今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.set_log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.set_log("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.set_log("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        TKB.set_log("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        TKB.set_log("以后再说2");
        try {
            var ss = text("以后再说").findOnce().bounds();
            TKB.set_log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (desc("以后再说").exists()) {
        TKB.set_log("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            TKB.set_log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (text("继续观看").exists()) {
        TKB.set_log("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            TKB.set_log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (desc("继续观看").exists()) {
        TKB.set_log("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            TKB.set_log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (text("继续播放").exists()) {
        TKB.set_log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (text("立即赠送").exists()) {
        TKB.set_log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        TKB.set_log("立即更新");
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.set_log("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.set_log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.set_log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        TKB.set_log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//抖音直播
function dyzhibo() {
    TKB.set_log("观看抖音直播")
    var TSD = (new Date()).getTime()
    var xs = action_args['param']
        // var url = "https://v.douyin.com/Jd2rLDf/"   //直播间连接
    TKB.set_log(xs)
    var url = xs["直播链接"] //直播间连接
    TKB.set_log("获取到的链接" + url)
    TKB.clear()
    sleep(1000)
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.ss.android.ugc.aweme")
    sleep(10000)
    var jieshu = 0 //判断直播间结束
    var redPacketm = 0
    var waitTime = 0
    var rq = (new Date()).getTime() //上传是否进入
    while (1) {
        if (text('打开看看').exists()) {
            TKB.set_log("打开看看-进入直播")
            click('打开看看')
            sleep(2000)
        }
        if (textContains('打开看看').exists()) {
            TKB.set_log("打开看看2")
            try {
                var ss = textContains("打开看看").findOnce().bounds();
                TKB.set_log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/fza").exists()) {
            if (redPacketm == 0) {
                var redPacket = id("com.ss.android.ugc.aweme:id/fza").findOnce().text().split(":");
                waitTime = Number(redPacket[0]) * 60 + Number(redPacket[1]);
            }
            redPacketm = 1
        }
        if (waitTime > 20) {
            TKB.set_log(waitTime - 20)
            sleep((waitTime - 20) * 1000)
        }
        if (id("com.ss.android.ugc.aweme:id/e7d").exists()) {
            TKB.set_log("点击红包");
            id("com.ss.android.ugc.aweme:id/e7d").findOnce().click()
        }

        if (id("com.ss.android.ugc.aweme:id/eep").exists()) {
            TKB.set_log("点击抢红包");
            id("com.ss.android.ugc.aweme:id/eep").findOnce().click()
            sleep(1000)
        }
        if (text("手慢了").exists()) {
            TKB.set_log("关闭抢红包");
            id("com.ss.android.ugc.aweme:id/gr8").findOnce().click()
            sleep(2000)
            redPacketm = 0
            TSD = (new Date()).getTime()
        }
        if (text('打开看看').exists()) {
            TKB.set_log("打开看看2")
            try {
                var ss = text("打开看看").findOnce().bounds();
                TKB.set_log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists() || id("com.ss.android.ugc.aweme:id/btm").exists() || id("com.ss.android.ugc.aweme:id/dhx").exists() && id("com.ss.android.ugc.aweme:id/eoc").exists()) {
            TKB.set_log("直播界面")
            toastLog("直播界面")
            sleep(2000)
            TKB.send_ready(device.getIMEI(), action_args['task_id'])
            if ((new Date()).getTime() - rq > 60 * 1000) {
                TKB.set_log("去上传人气")
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                rq = (new Date()).getTime()
            }
            TSD = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - TSD > 120 * 1000) {
                TKB.set_log("超时从新打开")
                TSD = (new Date()).getTime()
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                TKB.clear()
                sleep(2000)
                setClip(url)
                sleep(2000)
                launch("com.ss.android.ugc.aweme")
                sleep(6000)
            }
            if (text('打开看看').exists()) {
                TKB.set_log("打开看看-进入直播")
                click('打开看看')
                sleep(2000)
            }
            if (textContains('打开看看').exists()) {
                TKB.set_log("打开看看2")
                try {
                    var ss = textContains("打开看看").findOnce().bounds();
                    TKB.set_log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    TKB.set_log(error);
                }
                sleep(2000)
            }
        }
        if (text("直播已结束").exists() && id("com.ss.android.ugc.aweme:id/ff1").exists() || text("直播已结束").exists() && id("com.ss.android.ugc.aweme:id/pq").exists()) {
            TKB.set_log("直播已经结束")
            jieshu = jieshu + 1
            if (jieshu > 2) {
                TKB.set_log("结束退出")
                return true
            } else {
                TKB.set_log("重新去拿连接")
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                TKB.clear()
                setClip(url)
                launch("com.ss.android.ugc.aweme")
            }
        }
        if (id("com.ss.android.ugc.aweme:id/dhx").exists() || id("com.ss.android.ugc.aweme:id/eoc").exists()) {
            TKB.set_log("发消息界面")
            back()
            sleep(2000)
        }
        try {
            if (url == undefined) {
                TKB.set_log("获取不到链接")
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
        if (text("授权").exists()) {
            TKB.set_log("授权")
            back()
            sleep(2000)
        }
        if (textContains("余额不足").exists()) {
            TKB.set_log("余额不足，请充值")
            back()
            ftt = 1
            sleep(2000)
        }
        if (desc("我的粉丝团等级").exists() || desc("做任务得更多特权").exists()) {
            TKB.set_log("我的粉丝团等级-已经加了粉丝团")
            back()
            ftt = 1
            sleep(2000)
        }
        if (id('com.ss.android.ugc.aweme:id/b7m').exists() && id('com.ss.android.ugc.aweme:id/g9p').exists() || text('去购买').exists() && textContains("件商品").exists()) {
            TKB.set_log("商品界面ss")
            back()
            sleep(2000)
        }
        if (text('立即购买').exists() && id('com.ss.android.ugc.aweme:id/a2e').exists() || text('加入购物车').exists() || text('立即购买').exists() && text("咨询").exists()) {
            TKB.set_log("商品详情界面sx")
            back()
            sleep(2000)
        }
        if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
            TKB.set_log("没点到购物车3")
            back()
            sleep(2000)
        }
        if (textContains('送出礼物').exists() && text('取消').exists()) {
            TKB.set_log("没点到购物车2")
            back()
            sleep(2000)
        }
    }
}

_THREADSS = threads.start(function() {
    while (1) {
        zonghe()
    }
})

threads.start(function() {
    threads.start(function() {
        setInterval(() => {
            TKB.send_message({
                notice_name: "task_time_stamp",
                notice_content: (new Date()).getTime()
            })
        }, 15 * 1000)
    })
})

var z = dyzhibo();
var notice_name = 'stop'
if (z == true) {
    var msg_num = 1
    var msg = '成功'
} else {
    var msg_num = 0
    var msg = '失败'
}
TKB.send_message({
    notice_name: notice_name,
    notice_content: [msg_num, msg]
})