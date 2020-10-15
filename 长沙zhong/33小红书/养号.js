var tabList = ['影视综艺', '运动健身', '摄影']
var taskList = ['看商城', '搜索关键词任务', '看直播']
var keyword;
var likeMin = 500;
var likePercent = 10;

//推荐任务
function browseRecommend() {
    var xs = action_args['param']
    var interestName;
    if (xs['兴趣'] == 0 || xs['兴趣'] == '0') {
        interestName = ['推荐'];
        TKB.xgsrizhi("未获取到兴趣")
    } else {
        interestName = xs['兴趣'].split('|');
        tabList = [];
        for (let i = 0; i < interestName.length - 1; i++) {
            if (random(0, 2) <= 1) {
                tabList.push(interestName[i]);
                TKB.xgsrizhi("获取到兴趣" + tabList[tabList.length - 1])
            }
        }
    }
    if (xs['点赞数量'] == '0' || xs['点赞数量'] == 0) {
        likeMin = 1000;
        TKB.xgsrizhi("未获取到点赞数量")
    } else {
        likeMin = xs['点赞数量'];
        TKB.xgsrizhi("获取到点赞数量" + likeMin)
    }
    if (xs['点赞百分比'] == 0 || xs['点赞百分比'] == '0') {
        likePercent = 10;
        TKB.xgsrizhi("未获取到点赞百分比")
    } else {
        likePercent = xs['点赞百分比'];
        TKB.xgsrizhi("获取到点赞百分比" + likePercent)
    }
    if (xs['关键词'] == 0 || xs['关键词'] == '0' || xs['关键词'] == undefined) {
        TKB.xgsrizhi("未获取关键词")
        taskList.splice(1, 1);
    } else {
        keyword = xs['关键词'];
        TKB.xgsrizhi("获取到的关键词为" + keyword);
    }
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var taskInterVal = random(5, 10);
    var tabInterval = random(5, 10);
    var taskStart = (new Date()).getTime();
    var browseTime = random(20, 40) * 60 * 1000;
    var tabTime = random(10, 20) * 60 * 1000;
    var ifClick = true;
    var tabName = "推荐"
    var ifRecommend = true;
    TKB.xgsrizhi("任务间隔为" + taskInterVal + "分钟");
    TKB.xgsrizhi("类目任务间隔为" + tabInterval + "分钟");
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > browseTime && ifRecommend) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            if ((new Date()).getTime() - startTime > tabTime && !ifRecommend) {
                TKB.xgsrizhi("时间够了退出类目词任务")
                back();
                ifClick = true;
                tabName = "推荐";
                ifRecommend = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime();
                back();
                sleep(2000);
                returnToHome();
            }
            //插入任务
            if ((new Date()).getTime() - taskStart > taskInterVal * 60 * 1000 &&
                taskList.length > 0 && ifRecommend) {
                browseTime -= ((new Date()).getTime() - startTime)
                var taski = random(0, taskList.length - 1);
                TKB.xgsrizhi("执行" + taskList[taski] + "任务");
                switch (taskList[taski]) {
                    case '看商城':
                        browseMall();
                        break;
                    case '搜索关键词任务':
                        searchItem();
                        break;
                    case '看直播':
                        browseLiveStream();
                        break;
                    default:
                        break;
                }
                taskList.splice(taski, 1);
                taskStart = (new Date()).getTime();
                taskInterVal = random(5, 10);
                ifClick = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime()
                continue;
            }
            //刷类目词任务
            if ((new Date()).getTime() - startTime > tabInterval * 60 * 1000 &&
                ifRecommend && tabList.length) {
                tabInterval = random(5, 10);
                browseTime -= ((new Date()).getTime() - startTime)
                startTime = (new Date()).getTime();
                TKB.xgsrizhi("类目词发生变化");
                ifClick = true;
                ifRecommend = false;
                var tabi = random(0, tabList.length - 1);
                tabName = tabList[tabi];
                TKB.xgsrizhi("类目词为" + tabName);
                tabList.splice(tabi, 1);
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(5000);
                    TKB.xgsrizhi("点击首页")
                }
                if (!ifRecommend) {
                    clickTabTitle(tabName)
                }
                ifClick = false;
                swipeCount = 0;
            }
            for (let i = 0; i < random(2, 3); i++) {
                swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                sleep(1500);
            }
            swipeCount++;
            var contents = id("com.xingin.xhs:id/v7").find().filter(function(w) {
                return w.bounds().left < w.bounds().right
            })
            if (contents.length > 0) {
                for (let index = 0; index < contents.length; index += random(2, 3)) {
                    var contentsText = contents[index].findOne(id("com.xingin.xhs:id/d66"));
                    if (contentsText) {
                        var contentsLike = contentsText.text();
                        if (contentsLike.indexOf('万') != -1) {
                            contentsLike = contentsLike.split("万");
                            contentsLike = Number(contentsLike[0]) * 10000;
                            TKB.xgsrizhi("点赞数量为" + contentsLike);
                        }
                        if (contentsLike <= likeMin) {
                            TKB.xgsrizhi("点赞有点低")
                            sleep(2000)
                            continue
                        }
                    }
                    contents[index].click();
                    TKB.xgsrizhi("点击图文");
                    sleep(6000)
                    sliding()
                    TKB.xgsrizhi("返回到首页")
                    back()
                    sleep(5000)
                }

            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(6000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(15000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//刷图文和视频
function sliding(counts, ifComment) {
    if (ifComment == undefined) {
        ifComment == false;
    }
    if (id("com.xingin.xhs:id/nickNameTV").exists()) {
        popUp()
        TKB.xgsrizhi("图文笔记")
        swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
        sleep(2000);
        if (id("com.xingin.xhs:id/aqq").exists()) {
            var pageContent = id("com.xingin.xhs:id/aqq").findOnce().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum - 1; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(10, 15)
        var pageStart = (new Date()).getTime()
        while (true) {
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                TKB.xgsrizhi("图文内容滑动")
                swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                sleep(2000)
            } else {
                break
            }
        }
        if (random(1, 100) <= likePercent) {
            if (id("com.xingin.xhs:id/bvs").exists()) {
                var bounds = id("com.xingin.xhs:id/bvs").findOnce().bounds();
                click(bounds.centerX(), bounds.centerY())
                TKB.xgsrizhi("点赞")
                TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                sleep(2000);
            }
        }
        if (random(1, 100) <= collectPercent) {
            if (id("com.xingin.xhs:id/but").exists()) {
                id("com.xingin.xhs:id/but").findOnce().click();
                TKB.xgsrizhi("点收藏")
                sleep(2000);
            }
        }
        if (ifComment) {
            if (id("com.xingin.xhs:id/buy").exists()) {
                id("com.xingin.xhs:id/buy").findOnce().click();
                TKB.xgsrizhi("评论")
                sleep(2000);
                setText(0, word)
                sleep(3000);
                if (text("发送").exists()) {
                    click("发送");
                    TKB.xgsrizhi("点击发送按钮")
                } else {
                    click(970, 890);
                    TKB.xgsrizhi("点击发送坐标")
                }
                TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                sleep(2000);
            }
        }
    }
    if (id("com.xingin.xhs:id/dc9").exists()) {
        popUp()
        if (counts == undefined) {
            counts = random(3, 6);
        }
        for (let i = 0; i < counts; i++) {
            TKB.xgsrizhi("刷第" + i + "个视频");
            var videoStart = (new Date()).getTime();
            var seekBar = id("com.xingin.xhs:id/dc9").find().filter(function(w) {
                return w.bounds().bottom < 1800 && w.bounds().bottom > 0;
            })[0];
            if (seekBar == undefined) {
                swipe(500, 1700, 500, 200, 700);
                sleep(2000);
                TKB.xgsrizhi("进度条不存在 下滑看新视频");
                continue;
            } else {
                click(seekBar.bounds().centerX(), seekBar.bounds().centerY())
                sleep(2000);
            }
            if (id("com.xingin.xhs:id/mediaPlayerTime").exists()) {
                var mediaText = id("com.xingin.xhs:id/mediaPlayerTime").findOnce().text().split(":");
                var mediaTime = Number(mediaText[mediaText.length - 1])
                TKB.xgsrizhi("视频时间为" + mediaTime);
                click(500, 500);
                sleep(2000)
            }
            if (id("com.xingin.xhs:id/likeLayout").exists() && id("com.xingin.xhs:id/likeTextView").exists()) {
                var likeCountsText = id("com.xingin.xhs:id/likeTextView").find().filter(function(w) {
                    return w.bounds().bottom > 0 && w.bounds().bottom < 1900;
                })[0];
                var likeCounts = likeCountsText.text();
                if (likeCounts.indexOf('万') != -1) {
                    likeCounts = likeCounts.split("万");
                    likeCounts = Number(likeCounts[0]) * 10000;
                }
                TKB.xgsrizhi("点赞数量为" + likeCounts);
                if (likeCounts < likeMin) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(1000);
                    continue;
                }
                if (random(1, 100) <= likePercent) {
                    var bounds = likeCountsText.bounds();
                    click(bounds.centerX(), bounds.centerY())
                    TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                    sleep(2000);
                    TKB.xgsrizhi("点赞");
                }
            }
            if (id("com.xingin.xhs:id/collectLayout").exists()) {
                if (random(1, 100) <= collectPercent) {
                    id("com.xingin.xhs:id/collectLayout").findOnce().click();
                    TKB.xgsrizhi("点收藏")
                    sleep(2000);
                }
            }
            if (ifComment) {
                if (id("com.xingin.xhs:id/commentLayout").exists()) {
                    id("com.xingin.xhs:id/commentLayout").findOnce().click()
                    TKB.xgsrizhi("写评论")
                    sleep(2000);
                    if (className("android.widget.EditText").exists()) {
                        className("android.widget.EditText").findOnce().click()
                        sleep(5000);
                    }
                    setText(0, word);
                    sleep(5000);
                    if (text("发送").exists()) {
                        click("发送");
                        TKB.xgsrizhi("点击发送按钮")
                    } else {
                        click(970, 890);
                        TKB.xgsrizhi("点击发送坐标")
                    }
                    TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                    sleep(5000);
                }
            }
            var sleepTime = random(10, 40);
            TKB.xgsrizhi("随机时间为" + sleepTime);
            if (mediaTime != undefined) {
                sleepTime = sleepTime > mediaTime ? mediaTime : sleepTime;
            }
            TKB.xgsrizhi("观看时间为" + sleepTime);
            sleep(1000);
            while (true) {
                if ((new Date()).getTime() - videoStart > sleepTime * 1000) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    TKB.xgsrizhi("下滑看新视频");
                    break;
                } else {
                    sleep(2000);
                }
            }
            sleep(2000);
        }
    }
}
//商城
function browseMall() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("商城任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(30, 90) * 1000) {
                TKB.xgsrizhi("时间够了退出")
                    // if (text("首页").exists()) {
                    //   click("首页");
                    // }
                return true
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as7").exists()) {
                    id("com.xingin.xhs:id/as7").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击商城")
                    swipe(random(500, 600), 1600, random(500, 600), 500, 1000)
                    sleep(2000)
                }
                if (id("com.xingin.xhs:id/dhc").exists()) {
                    var tabViews = id("com.xingin.xhs:id/dhc").findOnce().child(0).children();
                    tabViews[random(0, tabViews.size() - 1)].click();
                    TKB.xgsrizhi("随机点击商品分类")
                    sleep(4000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            var contents = id("com.xingin.xhs:id/v7").find().filter(function(w) {
                return w.bounds().left < w.bounds().right
            })
            if (contents.length > 0) {
                // for (let index = 0; index < contents.length; index += random(1, 2)) {
                //   contents[index].click();
                //   TKB.xgsrizhi("点击商品")
                //   sleep(4000);
                //   TKB.xgsrizhi("图文笔记")
                //   if (textStartsWith("1/").exists()) {
                //     var pageNum = textStartsWith("1/").findOnce().text().split("/")[1]
                //     pageNum = pageNum > 5 ? random(3, 5) : pageNum;
                //   }
                //   pageNum = pageNum ? pageNum : random(1, 2)
                //   for (let i = 1; i < pageNum; i++) {
                //     TKB.xgsrizhi("滑动商品图片")
                //     swipe(random(1000, 900), 820, random(300, 200), 750, 1000)
                //     sleep(2000)
                //   }
                //   var pageTime = random(10, 15)
                //   var pageStart = (new Date()).getTime()
                //   while (true) {
                //     if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                //       TKB.xgsrizhi("图文内容滑动")
                //       swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                //       sleep(2000)
                //     } else {
                //       break
                //     }
                //   }
                //   TKB.xgsrizhi("返回到商城页")
                //   back()
                //   sleep(5000)
                // }
                for (let i = 0; i < random(2, 3); i++) {
                    swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                    sleep(1500);
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }

    }
}
//搜索关键词
function searchItem() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("搜索关键词任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(10, 20) * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击首页")
                }
                if (id("com.xingin.xhs:id/ao7").exists()) {
                    TKB.xgsrizhi("点击搜索栏")
                    id("com.xingin.xhs:id/ao7").findOnce().click()
                    sleep(5000)
                    TKB.xgsrizhi("输入关键词")
                    setText(0, keyword)
                    sleep(5000)
                    TKB.xgsrizhi("点击搜索")
                    click("搜索")
                    sleep(5000)
                }
                ifClick = false;
                swipeCount = 0;
            }
            if (id("com.xingin.xhs:id/bh3").exists) {
                var contents = id("com.xingin.xhs:id/bh3").findOnce().children();
                if (contents.size() > 0) {
                    for (let index = 1; index < contents.size(); index += random(2, 3)) {
                        if (contents[index].className() != "android.widget.RelativeLayout") {
                            continue;
                        }
                        var contentsLike = contents[index].findOne(id("com.xingin.xhs:id/bfa")).text()
                        if (contentsLike.indexOf('万') != -1) {
                            contentsLike = contentsLike.split("万");
                            contentsLike = Number(contentsLike[0]) * 10000;
                        }
                        if (contentsLike <= likeMin) {
                            TKB.xgsrizhi("点赞有点低")
                            sleep(2000)
                            continue
                        }
                        contents[index].click();
                        TKB.xgsrizhi("点击文章")
                        sleep(6000)
                        sliding()
                        TKB.xgsrizhi("返回到搜索页")
                        back()
                        sleep(5000)
                    }
                    for (let i = 0; i < random(2, 3); i++) {
                        swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                        sleep(1500);
                    }
                    swipeCount++;
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }

            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
    back()
    sleep(2000);
    if (id("com.xingin.xhs:id/bhe").exists()) {
        id("com.xingin.xhs:id/bhe").click();
        sleep(2000);
        TKB.xgsrizhi("返回主页")
    }
}
//直播
function browseLiveStream() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("直播任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > 10 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                back();
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击首页")
                }
                returnToHome()
                click("直播");
                ifClick = false;
                swipeCount = 0;
            }
            var liveStreams = id("com.xingin.xhs:id/c8d").find();
            if (liveStreams.size() > 0) {
                liveStreams[random(0, liveStreams.size() - 1)].click();
                sleep(2000);
                if (text("直播已结束").exists()) {
                    back()
                    sleep(2000);
                    TKB.xgsrizhi("直播已结束 退出直播间");
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    continue;
                }
                var liveStart = (new Date()).getTime();
                var sleepTime = random(10, 20);
                TKB.xgsrizhi("观看直播时间为" + sleepTime);
                while (true) {
                    if ((new Date()).getTime() - liveStart > sleepTime * 1000) {
                        back();
                        sleep(2000);
                        popUp();
                        TKB.xgsrizhi("退出直播间");
                        break;
                    }
                }
                for (let i = 0; i < random(1, 2); i++) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                }
                sleep(2000);
            } else {
                TKB.xgsrizhi("找不到直播间第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
    return true

}
//点击类目
function clickTabTitle(name) {
    var lastView;
    sleep(3000);
    var startTime = (new Date()).getTime();
    while (!text(name).exists()) {
        try {
            if ((new Date()).getTime() - startTime > 60 * 1000) {
                TKB.xgsrizhi("找不到类目词,重启")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            swipe(900, 386, 100, 386, 2000);
            TKB.xgsrizhi("向右滑动寻找类目词" + name)
            popUp()
            sleep(2000);
            var tabViews = id("com.xingin.xhs:id/bii").find();
            if (lastView == undefined || lastView.text() != tabViews[tabViews.length - 1].text()) {
                lastView = tabViews[tabViews.length - 1]
            } else {
                break;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
    if (text(name).exists()) {
        click(name)
        TKB.xgsrizhi("点击" + name);
        sleep(2000);
    }

}
//类目词回到主页
function returnToHome() {
    back()
    sleep(3000);
    var startTime = (new Date()).getTime();
    while (!text("直播").exists()) {
        try {
            if ((new Date()).getTime() - startTime > 60 * 1000) {
                TKB.xgsrizhi("类目词回不到推荐")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            popUp()
            swipe(100, 386, 900, 386, 1000);
            sleep(2000);
            TKB.xgsrizhi("向左滑回到推荐")
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//点消息
function clickMessage() {
    if (id("com.xingin.xhs:id/as4").exists()) {
        popUp()
        var message = id("com.xingin.xhs:id/as4");
        if (message.findOnce().child(0).child(0).children().size() > 0) {
            TKB.xgsrizhi("有消息要点击")
            popUp()
            message.click();
            sleep(2000);
            TKB.xgsrizhi("点击消息");
            if (id("com.xingin.xhs:id/l2").exists()) {
                var messagelist = id("com.xingin.xhs:id/l2").find();
                var length = messagelist.size();
                for (let i = 0; i < length; i++) {
                    click(messagelist[i].bounds().centerX(), messagelist[i].bounds().centerY())
                    TKB.xgsrizhi("点击第" + i + "个消息");
                    sleep(3000);
                    back()
                    sleep(3000);
                    TKB.xgsrizhi("返回消息页面");
                }
            }
            if (id("com.xingin.xhs:id/b13").exists()) {
                click("赞和收藏")
                TKB.xgsrizhi("点击赞和收藏");
                sleep(10000);
                back();
                sleep(2000);
            }
            return true;
        } else {
            TKB.xgsrizhi("没有消息需要点击");
            return false;
        }
    }
}

browseRecommend()