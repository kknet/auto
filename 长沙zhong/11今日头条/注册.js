function zonghe() {
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("上滑查看评论").exists() && id('com.ss.android.article.news:id/edg').exists()) {
        TKB.xgsrizhi("上滑查看评论")
        back()
        sleep(2000)
    }
    if (text("继续观看").exists()) {
        TKB.xgsrizhi("继续观看")
        click("继续观看")
        sleep(2000)
    }
    if (text("头条更新啦！").exists() && id('com.ss.android.article.news:id/e50').exists()) {
        TKB.xgsrizhi("头条更新")
        id('com.ss.android.article.news:id/e50').click()
        sleep(2000)
    }
    if (id("com.jifen.qukan:id/bbs").exists()) {
        TKB.xgsrizhi("知道了")
        id("com.jifen.qukan:id/bbs").click()
        sleep(1000)
    }
    if (id("com.jifen.qukan:id/vk").exists()) {
        id("com.jifen.qukan:id/vk").click()
        sleep(1000)
    }
    if (text('点击重试').exists()) {
        TKB.xgsrizhi("点击重试")
        click('点击重试')
    }
    if (id("com.jifen.qukan:id/u5").exists() && text("关闭广告").exists()) {
        TKB.xgsrizhi("关闭广告")
        id("com.jifen.qukan:id/u5").click()
        sleep(1000)
    }
    if (text("残忍离开").exists()) {
        TKB.xgsrizhi("残忍离开")
        click("残忍离开")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.xgsrizhi("确认");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (text("立即赠送").exists()) {
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("先去逛逛").exists()) {
        TKB.xgsrizhi("立即赠送")
        click('先去逛逛')
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }

    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("点击领钱").exists()) {
        click("点击领钱");
        TKB.xgsrizhi("点击领钱");
        sleep(1200)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        TKB.xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
    /*--------------------------------------抖音 */
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text('打开看看').exists()) {
        TKB.xgsrizhi("打开看看-进入直播")
        click('打开看看')
        sleep(2000)
    }
    if (text("刷新").exists() && text("网络错误").exists()) {
        TKB.xgsrizhi("网络错误")
        click("刷新")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        TKB.xgsrizhi("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        TKB.xgsrizhi("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.xgsrizhi("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.xgsrizhi("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text('允许访问你的"位置"？').exists() && text("以后再说").exists()) {
        TKB.xgsrizhi("位置,以后再说")
        click("以后再说")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下次再说").exists()) {
        TKB.xgsrizhi("下次再说")
        click("下次再说")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }

    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.xgsrizhi("确认");
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.xgsrizhi("同步到今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        TKB.xgsrizhi("以后再说2");
        try {
            var ss = text("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("以后再说").exists()) {
        TKB.xgsrizhi("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }

    if (text("继续观看").exists()) {
        TKB.xgsrizhi("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("继续观看").exists()) {
        TKB.xgsrizhi("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (text("立即赠送").exists()) {
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        TKB.xgsrizhi("立即更新");
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        TKB.xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}
//今日头条注册
function jrttzc() {
    TKB.xgsrizhi('今日头条注册')
    launch('com.ss.android.article.news')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var is_send = false
    var is_verify = 3
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.ss.android.article.news')
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没注册成功')
            back()
            sleep(1000)
            TKB.qinglihh('com.ss.android.article.news')
            sleep(3000)
            launch('com.ss.android.article.news')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (is_verify <= 0) {
            TKB.xgsrizhi("获取验证码次数过多")
            alert("获取验证码次数过多，请稍后重试");
            TKB.qinglihh();
            launch(dqbaoming);
            sleep(12000);
        }
        if (text('首页').exists() && text('未登录').exists()) {
            TKB.xgsrizhi('首页')
            click(970, 1840)
            sleep(2000)
        }
        if (text('登录').exists() && id('com.ss.android.article.news:id/yw').exists()) {
            TKB.xgsrizhi('登录')
            id('com.ss.android.article.news:id/yw').click()
            sleep(2000)
        }
        if (text("手机登录").exists() && id("com.ss.android.article.news:id/b9y").exists()) {
            TKB.xgsrizhi('手机登录')
            click('手机登录')
            sleep(5000)
        }
        if (text('隐私设置').exists() && text('抖音一键登录').exists() && text('遇到问题').exists()) {
            TKB.xgsrizhi('手机号登录')
            id('com.ss.android.article.news:id/aq').click()
            sleep(2000)
        }
        if (text('隐私设置').exists() && text('一键登录').exists() && text('遇到问题').exists()) {
            TKB.xgsrizhi('一键登录')
            click('一键登录')
            sleep(2000)
        }
        if (text('登录此帐号').exists() && text('登录其他帐号').exists()) {
            TKB.xgsrizhi('登录其他帐号')
            click('登录其他帐号')
            sleep(2000)
        }
        if (text("手机登录").exists() && text("获取短信验证码").exists()) {
            toast("手机号登录")
            TKB.xgsrizhi("去获取号码")
            zh = TKB.benjitel()
            if (zh == false) {
                TKB.xgsrizhi("没有获取到手机号")
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_verify--
                TSD = (new Date()).getTime()
                continue
            }
            // 上传该应用注册的手机号
            TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
            setText(zh)
            TKB.xgsrizhi("输入手机号码" + zh)
            sleep(3000)
            click('获取短信验证码')
            sleep(10000)
            is_send = true
        }
        if (textStartsWith("输入验证码").exists() && textStartsWith("重新获取").exists()) {
            if (text("重新获取").exists()) {
                click("重新获取")
                TKB.xgsrizhi("重新获取")
                is_verify--
                is_send = true
                sleep(random(10000, 15000))
            }
            TKB.xgsrizhi("获取验证码")
            sleep(random(10000, 15000))
            yzm = TKB.huoquyzm("今日头条")
            sleep(2000)
            if (yzm == false) {
                TKB.xgsrizhi("没有获取到验证码")
                TKB.qinglihh(dqbaoming)
                launch(dqbaoming)
                sleep(8000)
                is_verify--
                TKB.xgsrizhi("剩余次数" + is_verify);
                TSD = (new Date()).getTime()
                continue
            } else {
                if (is_send == true) {
                    for (var i = 0; i < 4; i++) {
                        var x = yzm.substr(i, 1);
                        setText(i, x)
                        sleep(200)
                        TKB.xgsrizhi('第' + (i + 1) + '次')
                    }
                }
                is_send = false;
            }
        }
        if (text('首页').exists() && text('我的').exists()) {
            TKB.xgsrizhi('登录成功')
            toastLog('登录成功')
            sleep(5000)
            TKB.qinglihh()
            return true
        }
        if (id('com.ss.android.article.news:id/dyt').exists() && id('com.ss.android.article.news:id/egd').exists() && text('钱包').exists()) {
            TKB.xgsrizhi('登录成功')
            toastLog('登录成功')
            sleep(5000)
            TKB.qinglihh()
            return true
        } else {
            if (text('首页').exists() && text('热榜').exists() && text('放映厅').exists()) {
                TKB.xgsrizhi('首页')
                click(970, 1840)
                sleep(2000)
            }
        }
        sleep(500)
        zonghe()
    }
}


jrttzc()