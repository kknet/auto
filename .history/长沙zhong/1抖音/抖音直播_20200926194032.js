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
    var huahsu = xs["话术"] //直播间话术
    var yanshi = xs["话术频率"] //直播间话术时间间隔
    var dzjg = xs["点赞频率"] //直播间点赞时间间隔
    var dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
    var gzs = xs["是否关注"] //直播间关注
    var fst = xs["是否加粉丝团"] //直播间关注
    var danmu = xs["是否发弹幕"] //判断是否发弹幕
    var dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
    var dssl = xs["电商刷屏数量"] //电商刷屏数量
    var dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
    var sfslw = xs["是否刷礼物"] //是否刷礼物
    var slwjg = xs["刷礼物间隔"] //刷礼物间隔
    var slwgs = xs["刷礼物数量"] //刷礼物数量
    var fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌

    var yu = (new Date()).getTime() //发话术时间
    var dz = (new Date()).getTime() //点赞时间
    var dssj = (new Date()).getTime() //电商刷屏时间
    var slwsj = (new Date()).getTime() //刷礼物时间
    var zhubx = (new Date()).getTime() //访问主播服务器的时间
    var ttn = 0 //判断有没有点关注
    var ftt = 0 //判断有没有点加粉丝团
    TKB.set_log("获取到的链接" + url)
    TKB.clear()
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.ss.android.ugc.aweme")
    sleep(10000)
    var cs = 0 //进入直播间的次数
    var jieshu = 0 //判断直播间结束
    var dsspsl = 0 //已做电商刷屏数量
    var yslw = 0 //已刷礼物的个数
    var fstdp = 0 //粉丝团灯牌
    var lpp = 0 //进入直播间反馈一次
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
        TKB.set_log(waitTime);
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
        if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
            TKB.set_log("直播界面")
            toastLog("直播界面")
            sleep(2000)
            if (lpp == 0) {
                // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                lpp = 1
            }
            // if ((new Date()).getTime() - zhubx > 10*1000){
            //     var ssxr = TKB.zbjzhid(sbip, run_id)
            //     if (ssxr != false){
            //         huahsu = xs["话术"]
            //         yanshi = xs["话术频率"]
            //     }
            //     zhubx = (new Date()).getTime()
            // }
            if (ttn == 0 && gzs == '是') {
                TKB.set_log("去关注")
                click(80, 60)
                sleep(2000)
            } else {
                if (fst == '是' && ftt == 0 && id("com.ss.android.ugc.aweme:id/d0z").exists()) {
                    TKB.set_log("加粉丝团")
                    try {
                        var ss = id("com.ss.android.ugc.aweme:id/d0z").findOnce().bounds();
                        TKB.set_log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    } catch (error) {
                        sleep(1001)
                        TKB.set_log(error);
                    }
                } else {
                    if ((new Date()).getTime() - dz > Number(dzjg) * 1000) {
                        for (j = 0, len = dzcs; j < len; j++) {
                            click(random(720, 800), random(1050, 1100))
                            sleep(random(100, 500))
                        }
                        dz = (new Date()).getTime()
                    }
                    if (Number(dsshuap) == 1 && Number(dsspsl) < Number(dssl) && (new Date()).getTime() - dssj > Number(dspl) * 1000) {
                        var kll = 0
                        var sop = (new Date()).getTime()
                        TKB.set_log("电商刷屏")
                        click(610, 1847) //点击购物
                        sleep(2000)
                        while (1) {
                            if ((new Date()).getTime() - sop > 90 * 1000) {
                                TKB.set_log("超时没浏览商品")
                                break
                            }
                            if (id('com.ss.android.ugc.aweme:id/b7m').exists() && id('com.ss.android.ugc.aweme:id/g9p').exists() || text('去购买').exists() && textContains("件商品").exists()) {
                                TKB.set_log("商品界面")
                                if (kll > 3) {
                                    TKB.set_log("退出商品界面2")
                                    back()
                                    sleep(2000)
                                    break
                                } else {
                                    swipe(500, 740, 500, 1800, 500)
                                    sleep(500)
                                    swipe(500, 740, 500, 1800, 500)
                                    sleep(500)
                                    click(150, 900) //点击第一个商品
                                    sleep(2000)
                                }
                            }
                            if (text('我知道了').exists()) {
                                TKB.set_log("我知道了")
                                click('我知道了')
                                sleep(2000)
                            }
                            if (text('立即购买').exists() && id('com.ss.android.ugc.aweme:id/a2e').exists() || text('加入购物车').exists() || text('立即购买').exists() && text("咨询").exists()) {
                                TKB.set_log("商品详情界面")
                                if (kll > 3) {
                                    TKB.set_log("退出商品界面")
                                    back()
                                    sleep(2000)
                                    dsspsl = dsspsl + 1
                                } else {
                                    TKB.set_log("下滑")
                                    swipe(500, 1700, 500, 500, 500)
                                    sleep(random(3000, 5000))
                                    kll = kll + 1
                                }
                            }
                            if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                TKB.set_log("直播界面ss")
                                if (kll > 3) {
                                    TKB.set_log("浏览商品结束")
                                    break
                                } else {
                                    TKB.set_log("点击购物")
                                    click(610, 1847) //点击购物
                                    sleep(2000)
                                }
                            }
                            if (textContains('送出礼物').exists() && text('取消').exists()) {
                                TKB.set_log("没点到购物车")
                                kll = kll + 1
                                back()
                                sleep(2000)
                            }
                            if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                TKB.set_log("没点到购物车4")
                                kll = kll + 1
                                back()
                                sleep(2000)
                            }
                            if (id('com.ss.android.ugc.aweme:id/gwv').exists()) {
                                TKB.set_log("直接点击直播间弹窗商品")
                                try {
                                    var ss = id("com.ss.android.ugc.aweme:id/gwv").findOnce().bounds();
                                    TKB.set_log(ss)
                                    click(ss.centerX(), ss.centerY());
                                    sleep(2000)
                                } catch (error) {
                                    sleep(1001)
                                    TKB.set_log(error);
                                }
                            }
                        }
                        dssj = (new Date()).getTime()
                    } else {
                        if (Number(sfslw) == '是' && Number(yslw) < Number(slwgs) && (new Date()).getTime() - slwsj > Number(slwjg) * 1000) {
                            TKB.set_log("直播间刷礼物")
                            var slti = (new Date()).getTime()
                            var lwys = 0
                            click(744, 1848) //点击礼物
                            sleep(2000)
                            while (1) {
                                if ((new Date()).getTime() - slti > 90 * 1000) {
                                    TKB.set_log("刷礼物超时")
                                    break
                                }
                                if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                    TKB.set_log("直播界面l2")
                                    if (lwys != 0) {
                                        TKB.set_log("送礼物结束")
                                        break
                                    } else {
                                        TKB.set_log("点击礼物")
                                        click(744, 1847) //点击礼物
                                        sleep(2000)
                                    }
                                }
                                if (text('查看特权').exists() && id('com.ss.android.ugc.aweme:id/e4z').exists() || id('com.ss.android.ugc.aweme:id/bcx').exists() && id('com.ss.android.ugc.aweme:id/bd4').exists() || id('com.ss.android.ugc.aweme:id/a7h').exists() && text('充值').exists()) {
                                    TKB.set_log("礼物界面")
                                    if (text('充值').exists()) {
                                        TKB.set_log("没抖币")
                                        toastLog("没抖币")
                                        back()
                                        sleep(2000)
                                        break
                                    } else {
                                        if (lwys == 0) {
                                            if (id('com.ss.android.ugc.aweme:id/e4z').exists()) {
                                                try {
                                                    var ss = id("com.ss.android.ugc.aweme:id/e4z").findOnce().text();
                                                    TKB.set_log(ss)
                                                    if (ss != "充值") {
                                                        click(92, 1831) //点击
                                                        sleep(2000)
                                                        click(92, 1831) //点击第一个礼物
                                                        sleep(200)
                                                        click(92, 1831) //点击第一个礼物
                                                        sleep(2000)
                                                        lwys = lwys + 1

                                                    } else {
                                                        toastLog("没有抖币")
                                                        back()
                                                        sleep(2000)
                                                        break
                                                    }
                                                } catch (error) {
                                                    sleep(1001)
                                                    TKB.set_log(error);
                                                }
                                            }
                                        } else {
                                            TKB.set_log("已送礼物")
                                            back()
                                            break
                                        }
                                    }
                                }
                                if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                    TKB.set_log("充值界面-没钱了")
                                    break
                                }
                                if (textContains('抖币').exists() && text('发送').exists() || textContains('至少画').exists() && text('发送').exists()) {
                                    TKB.set_log("连画界面")
                                    back()
                                    sleep(2000)
                                }
                            }
                            slwsj = (new Date()).getTime()
                        } else {
                            if (Number(fensitp) == 1 && Number(fstdp) == 0) {
                                TKB.set_log("粉丝团灯牌")
                                var slti = (new Date()).getTime()
                                click(744, 1848) //点击礼物
                                sleep(2000)
                                while (1) {
                                    if ((new Date()).getTime() - slti > 90 * 1000) {
                                        TKB.set_log("粉丝团灯牌超时")
                                        break
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                        TKB.set_log("直播界面33")
                                        if (fstdp != 0) {
                                            TKB.set_log("送礼物结束")
                                            break
                                        } else {
                                            TKB.set_log("点击礼物")
                                            click(744, 1847) //点击礼物
                                            sleep(2000)
                                        }
                                    }
                                    if (desc('加入粉丝团 1抖币').exists() && desc('专属勋章').exists() || desc('专属礼物').exists() && desc('专属进场').exists()) {
                                        TKB.set_log("还没加入粉丝团")
                                        back()
                                        sleep(2000)
                                        break
                                    }
                                    if (text('查看特权').exists() && id('com.ss.android.ugc.aweme:id/e4z').exists() || id('com.ss.android.ugc.aweme:id/bcx').exists() && id('com.ss.android.ugc.aweme:id/bd4').exists() || id('com.ss.android.ugc.aweme:id/a7h').exists() && text('充值').exists()) {
                                        TKB.set_log("礼物界面")
                                        if (text('充值').exists()) {
                                            TKB.set_log("没抖币")
                                            toastLog("没抖币")
                                            back()
                                            sleep(2000)
                                            break
                                        } else {
                                            if (fstdp == 0) {
                                                if (id('com.ss.android.ugc.aweme:id/e4z').exists()) {
                                                    try {
                                                        var ss = id("com.ss.android.ugc.aweme:id/e4z").findOnce().text();
                                                        TKB.set_log(ss)
                                                        if (ss != "充值") {
                                                            click(92, 1831) //点击礼物
                                                            sleep(500)
                                                            click(246, 1832) //点击粉丝团礼物
                                                            sleep(2000)
                                                            if (text('粉丝团灯牌').exists()) {
                                                                try {
                                                                    var ss = text("粉丝团灯牌").findOnce().bounds();
                                                                    TKB.set_log(ss)
                                                                    click(ss.centerX(), ss.centerY());
                                                                    sleep(400)
                                                                    click(ss.centerX(), ss.centerY());
                                                                    sleep(2000)
                                                                    fstdp = fstdp + 1
                                                                } catch (error) {
                                                                    sleep(1001)
                                                                    TKB.set_log(error);
                                                                }
                                                            }
                                                        } else {
                                                            toastLog("没有抖币")
                                                            fstdp = 1
                                                            back()
                                                            sleep(2000)
                                                            break
                                                        }
                                                    } catch (error) {
                                                        sleep(1001)
                                                        TKB.set_log(error);
                                                    }
                                                }
                                            } else {
                                                TKB.set_log("已送礼物")
                                                back()
                                                break
                                            }
                                        }
                                    }
                                    if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                        TKB.set_log("充值界面-没钱了")
                                        fstdp = 1
                                        break
                                    }
                                    if (textContains('抖币').exists() && text('发送').exists() || textContains('至少画').exists() && text('发送').exists()) {
                                        TKB.set_log("连画界面")
                                        back()
                                        sleep(2000)
                                    }
                                }
                            }
                            if (Number(danmu) == '是' && (new Date()).getTime() - yu > Number(yanshi) * 1000) {
                                TKB.set_log("发弹幕")
                                click(120, 1830)
                                sleep(1500)
                                var fas = huahsu.split("|")
                                setText(fas[random(0, fas.length - 1)])
                                sleep(500)
                                if (id("com.ss.android.ugc.aweme:id/eoc").exists()) {
                                    TKB.set_log("点击发送")
                                    try {
                                        var ss = id("com.ss.android.ugc.aweme:id/eoc").findOnce().bounds();
                                        TKB.set_log(ss)
                                        click(ss.centerX(), ss.centerY());
                                        sleep(2000)
                                    } catch (error) {
                                        sleep(1001)
                                        TKB.set_log(error);
                                    }
                                } else {
                                    click(1020, 1000)
                                    sleep(1000)
                                }
                                back()
                                sleep(1000)
                                yu = (new Date()).getTime()
                            }
                        }
                    }
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
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                danmu = xs["是否发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
                rq = (new Date()).getTime()
            }
            TSD = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - TSD > 90 * 1000) {
                TKB.set_log("超时从新打开")
                TSD = (new Date()).getTime()
                xs = action_args['param']
                url = xs["直播链接"]
                TKB.set_log("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                danmu = xs["是否发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
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
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                danmu = xs["是否发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
                TKB.clear()
                setClip(url)
                launch("com.ss.android.ugc.aweme")
            }
        }
        if (text("主页").exists() && text("举报").exists() || text("+关注").exists()) {
            TKB.set_log("关注界面")
            if (gzs == '是') {
                click("+关注")
                sleep(2000)
                ttn = 1
                back()
                sleep(2000)
            } else {
                back()
                sleep(2000)
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
        if (desc("专属勋章").exists() && desc("粉丝特权").exists() || desc("专属礼物").exists() && desc("专属进场").exists()) {
            TKB.set_log("加入粉丝团")
            if (fst == '是' && ftt == 0) {
                TKB.set_log("加入粉丝团2")
                click(500, 1810)
                sleep(2000)
            } else {
                back()
                sleep(3000)
            }
        }
        if (text("授权").exists()) {
            TKB.set_log("授权")
            back()
            sleep(2000)
        }
        if (desc("加入粉丝团 1抖币").exists()) {
            TKB.set_log("加入粉丝团 1抖币")
            if (fst == '是' && ftt == 0) {
                try {
                    var ss = desc("加入粉丝团 1抖币").findOnce().bounds();
                    TKB.set_log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    ftt = 1
                } catch (error) {
                    sleep(1001)
                    TKB.set_log(error);
                }
            } else {
                back()
                sleep(3000)
            }
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
        zonghe()
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