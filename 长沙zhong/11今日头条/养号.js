//今日头条养号
function jrttyh() {
    TKB.xgsrizhi('今日头条养号')
    launch('com.ss.android.article.news')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    var ll = random(10, 20) //浏览次数
    var tem = 0
    var num = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.ss.android.article.news')
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.ss.android.article.news')
            sleep(3000)
            launch('com.ss.android.article.news')
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (text('首页').exists() && text('放映厅').exists() && text('我的').exists()) {
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
            sleep(3000)
            if (text("小程序").exists() || text("精彩小视频").exists()) {
                TKB.xgsrizhi("看到小程序")
                swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
                sleep(3000)
            }
            if (desc('关注').exists() && desc('推荐').exists() && text('首页').exists() && text('我的').exists()) {
                log("新闻界面")
                try {
                    var ss = TKB.getAllTexts()
                    for (j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].length > 20 && !text("广告").exists()) {
                            TKB.xgsrizhi("标题长度够长:" + ss[j])
                            var aa = text(ss[j]).findOnce().bounds()
                            if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                log(aa.centerX(), aa.centerY())
                                num++
                                click(300, aa.centerY())
                                sleep(3000)
                            }
                        }
                    }
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }
        if (num > random(15, 20)) {
            TKB.xgsrizhi("点击新闻")
            click(100, 1840)
            sleep(3000)
        }
        if (text('收藏问题').exists() && id('com.ss.android.article.news:id/n5').exists()) {
            TKB.xgsrizhi("问题")
            back()
            sleep(1000)
        }
        if (id("com.ss.android.article.news:id/af1").exists() && id("com.ss.android.article.news:id/djr").exists() || id('com.ss.android.article.news:id/e6c').exists() && id("com.ss.android.article.news:id/djr").exists()) {
            TKB.xgsrizhi("浏览新闻界面")
            var dsv = random(10, 15)
            for (j = 0, len = dsv; j < len; j++) {
                if (text("继续观看").exists()) {
                    TKB.xgsrizhi("继续观看")
                    click("继续观看")
                    sleep(2000)
                }
                if (id('com.ss.android.article.news:id/dl5').exists()) {
                    TKB.xgsrizhi("划到底了")
                    break
                }
                swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
                sleep(3000, 5000)
            }
            back()
            sleep(3000)
            ll = ll - 1
        }
        if (id("com.ss.android.article.news:id/e6c").exists() && id("com.ss.android.article.news:id/aue").exists() && id("com.ss.android.article.news:id/ah7").exists()) {
            var zbt = random(40, 60) //视频观看时长
            var rdd = (new Date()).getTime()
            TKB.xgsrizhi("浏览视频界面")
            while (1) {
                zonghe()
                if (text("继续观看").exists()) {
                    TKB.xgsrizhi("继续观看")
                    click("继续观看")
                    sleep(2000)
                }
                if ((new Date()).getTime() - rdd > zbt * 1000) {
                    TKB.xgsrizhi("观看时间够了")
                    back()
                    sleep(1000)
                    break
                } else {
                    TKB.xgsrizhi("观看视频中...")
                    toastLog("观看视频中...")
                    sleep(4000)
                }
                if (text('点击重试').exists()) {
                    TKB.xgsrizhi("点击重试")
                    click('点击重试')
                }
            }
        }
        if (ll < 1) {
            TKB.xgsrizhi("重置")
            ll = random(10, 20) //浏览次数
            tem = 0
            bss = random(1, 2)
        }
        zonghe()
    }
}

jrttyh()