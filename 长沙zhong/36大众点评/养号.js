//养号
function browseRecommend() {
    TKB.xgsrizhi('大众点评养号')
    launch("com.dianping.v1")
    sleep(13000)
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    var swipeCount = 0;
    var notInHome = 0;
    var homeTime = random(30, 40)
    var shopTime = random(10, 20)
    var communityTime = random(5, 10)
    var a = 0
    var ifClick = true;
    var temx = 0
    var tem = 0
    var tems = 0
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh("com.dianping.v1")
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                back()
                sleep(1000)
                TKB.qinglihh("com.dianping.v1")
                sleep(3000)
                launch("com.dianping.v1")
                sleep(2000)
                TSD = (new Date()).getTime()
                tem = 0
            }
            if (a == 0) {
                var HT = (new Date()).getTime();
                while (1) {
                    if ((new Date()).getTime() - HT > homeTime * 60 * 1000) {
                        TKB.xgsrizhi("时间够了刷商城")
                        a = 1
                        sleep(3000)
                        break;
                    }
                    allJudge();
                    if (temx == 0) {
                        if (swipeCount > 80 || ifClick) {
                            if (text("首页").exists()) {
                                TKB.xgsrizhi("点击首页")
                                click("首页");
                                sleep(2000);
                            }
                            TKB.xgsrizhi("首页滑动")
                            swipe(random(500, 600), 1700, random(500, 600), 300, 2000)
                            sleep(2000)
                            if (id("com.dianping.v1:id/tab_layout").exists()) {
                                var tabViews = id("com.dianping.v1:id/tab_layout").findOnce().child(0).children();
                                tabViews.splice(2, 1)
                                tabViews[random(0, tabViews.size() - 1)].click();
                                TKB.xgsrizhi("随即点击栏目")
                                sleep(4000);
                            }
                            ifClick = false;
                            swipeCount = 0;
                            temx = 1
                        }
                    }
                    for (let i = 0; i < random(3, 4); i++) {
                        TKB.xgsrizhi("点评列表滑动")
                        swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                        sleep(1500);
                    }
                    swipeCount++;
                    if (id("com.dianping.v1:id/recycler_view").exists()) {
                        var contents = id("com.dianping.v1:id/recycler_view").find().filter(function(w) {
                            return w.bounds().left < w.bounds().right
                        })[0].children();
                        for (let i = 0; i < contents.length; i += random(2, 3)) {
                            var adv = className("android.widget.ImageView").find().filter(function(w) {
                                return w.bounds().width() === 68 && w.bounds().height() === 34
                            });
                            if (adv != null && adv != '') {
                                TKB.xgsrizhi("有广告，跳过");
                                // swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                                continue;
                            }
                            if (contents[i].findOne(textEndsWith("评价榜"))) {
                                TKB.xgsrizhi("评价榜，跳过");
                                // swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                                continue
                            }
                            contents[i].click()
                            TKB.xgsrizhi("点击点评文章");
                            sleep(6000)
                            if (text("打卡").exists() && text("写点评").exists() && text("拍视频").exists()) {
                                TKB.xgsrizhi("进入了店铺，返回到首页");
                                back()
                                sleep(6000)
                            } else {
                                silding()
                                sleep(3000)
                            }
                        }
                    } else {
                        TKB.xgsrizhi("找不到文章第" + notInHome + "次");
                        notInHome++;
                        back();
                        sleep(2000);
                        ifClick = true;
                    }
                }
            }
            if (a == 1) {
                while (1) {
                    var SP = (new Date()).getTime();
                    while (true) {
                        try {
                            if ((new Date()).getTime() - SP > shopTime * 60 * 1000) {
                                TKB.xgsrizhi("时间够了逛社区")
                                a = 2
                                sleep(3000)
                                break;
                            }
                            allJudge()
                            if (tem == 0) {
                                if (text("好物").exists()) {
                                    TKB.xgsrizhi("点击好物")
                                    click("好物")
                                    sleep(3000)
                                }
                                tem = 1
                            }
                            for (let i = 0; i < random(2, 3); i++) {
                                TKB.xgsrizhi("点评列表滑动")
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(1500);
                            }
                            if (text("查看详情").exists()) {
                                TKB.xgsrizhi("点击查看详情")
                                click("查看详情")
                                sleep(3000)
                                silding()
                            }
                        } catch (error) {
                            TKB.xgsrizhi(error)
                            sleep(random(3000, 8000))
                        }
                    }
                }
            }
            if (a == 2) {
                var CT = (new Date()).getTime()
                while (1) {
                    try {
                        if ((new Date()).getTime() - CT > communityTime * 60 * 1000) {
                            TKB.xgsrizhi("时间够了退出")
                            TKB.qinglihh("com.dianping.v1")
                            return true
                        }
                        allJudge()
                        if (tems == 0) {
                            if (id("com.dianping.v1:id/home_tab_square").exists()) {
                                TKB.xgsrizhi("点击关注")
                                click("关注")
                                sleep(3000)
                            }
                            if (text("社区").exists() && text("关注").exists()) {
                                TKB.xgsrizhi("点击社区")
                                desc("社区").findOnce().click()
                                sleep(3000)
                            }
                            tems = 1
                        }
                        for (let i = 0; i < random(2, 3); i++) {
                            TKB.xgsrizhi("点评列表滑动")
                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                            sleep(1500);
                        }
                        var tribe = desc("点击帖子").find()
                        for (let i = 0; i < tribe.size(); i++) {
                            TKB.xgsrizhi("点击帖子")
                            click(tribe[i].bounds().centerX(), tribe[i].bounds().centerY())
                            sleep(6000)
                            silding()
                        }
                    } catch (error) {
                        TKB.xgsrizhi(error)
                        sleep(random(3000, 8000))
                    }
                }
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在大众点评页面3次 重新启动");
                TKB.qinglihh("com.dianping.v1");
                sleep(2000);
                launch("com.dianping.v1");
                sleep(8000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//滑动+点赞
function silding() {
    if (desc("关注").exists()) {
        allJudge()
        TKB.xgsrizhi("进入点评文章")
            // swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
        sleep(3000);
        if (textContains('/').exists()) {
            var pageContent = textContains('/').findOne().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(10, 15)
        var pageStart = (new Date()).getTime()
        while (true) {
            // if (textStartsWith("尚无评论").exists() || textEndsWith("回复").exists()) {
            //     TKB.xgsrizhi("没有评论返回")
            //     back()
            //     break
            // }
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                TKB.xgsrizhi("图文内容滑动")
                swipe(random(700, 800), 1200, random(700, 800), 400, 1000)
                sleep(2000)
            } else {
                break
            }
        }
        if (random(1, 50) == 1) {
            if (text("说点什么吧…").exists()) {
                click(660, 1860)
                TKB.xgsrizhi("点赞")
                sleep(2000);
            }
        }
        sleep(3000)
        TKB.xgsrizhi("返回到主页")
        back()
        sleep(3000)
    }
}

browseRecommend()