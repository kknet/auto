log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.jifen.qukan" //该项目包名
var xmxh = "11" //项目序号 版本11.0.0


//******************************************************************今日头条项目*****************************************************************

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

//换绑
function binding() {
    TKB.xgsrizhi('抖音换绑')
    launch('com.ss.android.ugc.aweme')
    sleep(8000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.ss.android.ugc.aweme')
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.ss.android.ugc.aweme')
            sleep(3000)
            launch('com.ss.android.ugc.aweme')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
            click("我")
            TKB.xgsrizhi("点击我")
            sleep(3000)
        }
        if (textStartsWith("编辑资料").exists() && desc("更多").exists() && text("我").exists()) {
            id("com.ss.android.ugc.aweme:id/d6u").findOnce().click()
            TKB.xgsrizhi("点击更多")
            sleep(3000)
        }
        if (text("设置").exists() && text("更多功能").exists()) {
            id("com.ss.android.ugc.aweme:id/gnm").findOnce().click()
            TKB.xgsrizhi("点击设置")
            sleep(3000)
        }
        if (text("设置").exists() && text("帐号").exists() && text("通用").exists()) {
            swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
            sleep(3000)
            swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
            sleep(3000)
            if (text("退出登录").exists()) {
                id("com.ss.android.ugc.aweme:id/c13").findOnce().click()
                TKB.xgsrizhi("点击退出")
                sleep(3000)
            }
            if (text("退出").exists() && text("取消").exists()) {
                click("退出")
                TKB.xgsrizhi("点击退出")
                sleep(6000)
            }
        }
        if (text("其他方式登录").exists()) {
            click("其他方式登录")
            TKB.xgsrizhi("点击其他方式登录")
            sleep(3000)
        }
        if (desc("今日头条登录").exists()) {
            id("com.ss.android.ugc.aweme:id/brd").findOnce().click()
            TKB.xgsrizhi("点击今日头条登录")
            sleep(3000)
        }
        if (text("今日头条登录").exists()) {
            id("com.ss.android.ugc.aweme:id/g9t").findOnce().click()
            TKB.xgsrizhi("点击今日头条登录")
            sleep(3000)
        }
        if (text("授权并登录").exists() && text("取消").exists()) {
            click("授权并登录")
            TKB.xgsrizhi("点击其他方式登录")
            sleep(3000)
            return true
        }
        if (text("一键登录").exists() && textStartsWith("以其他帐号").exists()) {
            click(659, 1782)
            TKB.xgsrizhi("点击其他帐号登录")
            sleep(3000)
        }
        zonghe()
    }
}

//*********************************************************今日头条项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续今日头条任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                        // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000);
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************

function jrttzhixing() {
    try {
        toastLog("执行今日头条任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['今日头条', '7.7.3'],
                ['抖音短视频', '11.0.0']
            ]
            app_list.forEach(element => {
                var install_num = 10
                while (install_num) {
                    var baom = getPackageName(element[0])
                    if (baom != null && TKB.getVerName(element[0]) != element[1]) {
                        TKB.xiezai(dqbaoming)
                        install_num--
                    } else if (baom == null) {
                        var bbd = TKB.wdjxiazai(element[0], element[1])
                        if (bbd == false) {
                            TKB.xgsrizhi(element[0] + "安装失败")
                            _THREADSS.interrupt()
                            TKB.cunqusj("jiaoben", "tingzhi")
                            java.lang.System.exit(0);
                        }
                    } else {
                        break;
                    }
                }
            });
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = jrttzc()
            if (dl == true) {
                binding()
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
            // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        log(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}

jrttzhixing()
// binding()