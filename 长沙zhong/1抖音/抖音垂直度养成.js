var TKB = require("/sdcard/Android/data/.haoareme/模块.js")

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
        log("添加头像")
        back()
        sleep(1000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        log("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        log("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        log("同步到今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        log("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        log("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        log("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        log("以后再说2");
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
        log("以后再说3");
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
        log("继续观看");
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
        log("继续观看2");
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
    if (text("继续播放").exists()) {
        log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (text("立即赠送").exists()) {
        log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        log("立即更新");
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许");
        log("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//改资料
var dqbaoming = 'com.ss.android.ugc.aweme'
function searchItem() {
    TKB.set_log("搜索关键词养号")
    launch('dqbaoming');
    sleep(8000);
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var notInHome = 0;
    var ifClick = true;
    var keyword, keywords, word, likePercent, followPercent
    var xs = action_args['param']
    keywords = xs['关键词'];
    word = keywords.split("|")
    keyword = word[random(0, word.length - 1)]
    if (xs['点赞百分比'] == 0 || xs['点赞百分比'] == '0') {
        likePercent = 10;
        TKB.set_log("未获取到点赞百分比")
    } else {
        likePercent = xs['点赞百分比'];
        TKB.set_log("获取到点赞百分比" + likePercent)
    }
    if (xs['关注百分比'] == 0 || xs['关注百分比'] == '0') {
        followPercent = 10;
        TKB.set_log("未获取到关注百分比")
    } else {
        followPercent = xs['关注百分比'];
        TKB.set_log("获取到关注百分比" + followPercent)
    }
    TKB.set_log("获取到的关键词为" + keyword);
    TKB.set_log("搜索关键词任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.set_log("时间够了退出")
                TKB.clear()
                break
            }
            if (ifClick == true) {
                if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
                    // id("com.ss.android.ugc.aweme:id/bjo").findOnce().click()
                    click(988, 137)
                    TKB.set_log("点击搜索")
                    sleep(3000)
                }
                if (id("com.ss.android.ugc.aweme:id/aoh").exists() && text("取消").exists()) {
                    setText(keyword)
                    TKB.set_log("输入关键词")
                    sleep(5000)
                    click(983, 1829)
                    TKB.set_log("点击搜索")
                    sleep(5000)
                }
                if (text("综合").exists() && text("话题").exists() && text(keyword).exists()) {
                    click("话题")
                    TKB.set_log("点击话题")
                    sleep(5000)
                    if (text("搜索结果为空").exists() && text("话题").exists() && text(keyword).exists()) {
                        TKB.set_log("未找到话题");
                        TKB.clear(dqbaoming);
                        sleep(2000);
                        launch(dqbaoming);
                        sleep(10000);
                        ifClick = true;
                        notInHome = 0;
                    }
                    if (text("使用").exists() && text("音乐").exists() && text(keyword).exists()) {
                        TKB.set_log("在音乐界面重启");
                        TKB.clear(dqbaoming);
                        sleep(2000);
                        launch(dqbaoming);
                        sleep(10000);
                        ifClick = true;
                        notInHome = 0;
                    }
                    var follows = id("com.ss.android.ugc.aweme:id/cnz").find().filter((w) => w.bounds().right > 0)[0].children();
                    sleep(2000)
                        // follows[random(0, follows.length - 1)].click()
                    follows[0].click()
                    TKB.set_log("点击感兴趣的话题")
                    sleep(5000)
                    if (id("com.ss.android.ugc.aweme:id/b3f").exists()) {
                        let videos = id("com.ss.android.ugc.aweme:id/b3f").findOnce().children().filter((w) => w.bounds().bottom > w.bounds().top);
                        videos[random(0, videos.length - 1)].child(0).click();
                        sleep(3000);
                    }
                }
                ifClick = false;
            }
            if (id("com.ss.android.ugc.aweme:id/pc").exists()) {
                if (text("点击进入直播间").exists()) {
                    swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
                    TKB.set_log("直播间，跳过")
                    sleep(3000)
                }
                if (likePercent > random(1, 100)) {
                    click(980, 895)
                    TKB.set_log("点赞")
                    sleep(5000);
                }
                if (followPercent > random(1, 100)) {
                    click(995, 753)
                    TKB.set_log("点关注")
                    sleep(5000);
                }
                sleep(random(20, 45) * 1000);
                swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
                sleep(3000)
            } else {
                TKB.set_log("找不到图文第" + notInHome + "次");
                notInHome++;
            }
            if (notInHome >= 3) {
                TKB.set_log("不在抖音页面3次 重新启动");
                TKB.clear(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.set_log(error);
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
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
searchItem()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})