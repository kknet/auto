var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
// auto("fast");
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
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

function iskeyopen(keylist) {
    try {
        TKB.set_log('关键词判断')
        var res = false;
        var a = id('com.ss.android.ugc.aweme:id/a91').find()
        // TKB.set_log(a.length)
        //通过a.length判断获取到几个视频标题，再通过视频标题坐标判断是否为正在看的视频的标题
        for (var ia = 0; ia < a.length; ia++) {
            var vediobounds = a[ia].bounds()
            if (vediobounds.centerY() > 300 && vediobounds.centerY() < 1800) {
                vediotext = a[ia].text()
            }
        }
        // if (a.length == 3) {
        //     vediotext = a[1].text()
        // } else if (a.length == 2) {
        //     var vediobounds0 = a[0].bounds()
        //     if (vediobounds0.centerY() > 300 && vediobounds0.centerY() < 1800) {
        //         vediotext = a[0].text()
        //     } else {
        //         var vediobounds1 = a[1].bounds()
        //         if (vediobounds1.centerY() > 300 && vediobounds1.centerY() < 1800) {
        //             vediotext = a[1].text()
        //         } else {
        //             return res
        //         }
        //     }
        // } else if (a.length == 1) {
        //     var vediobounds0 = a[0].bounds()
        //     if (vediobounds0.centerY() > 300 && vediobounds0.centerY() < 1800) {
        //         vediotext = a[0].text()
        //     } else {
        //         return res
        //     }
        // } else {
        //     return res
        // }
        log(vediotext)
        if (vediotext.indexOf('[t]') != -1) {
            log('有广告')
            res = false;
            return res
        } else {
            for (let i = 0; i < keylist.length; i++) {
                if (vediotext.indexOf(keylist[i]) != -1) {
                    res = true;
                    break
                }
            }
        }
        return res;
    } catch (error) {

    }
}
var zz = '美女|腿|滤镜|颜|jk|女生|美人|最美|颜值|漂亮|闺蜜|惊艳|长腿|高颜|舞蹈|可爱|性感|姐姐|女友|火箭少女'
//新养号
function dyxyh() {
    TKB.set_log("抖音新养号")
    TKB.clear()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime() //看直播的时间
    var stt = random(60, 120)
    var TTguank = (new Date()).getTime()
    var dinz = random(20, 40)
    var zbt = random(20, 30) //视频观看时长
    var gzx = 0
    var dzx = 0
    var gjc = ''
    var a = 0
    var z = ''
    var dj_num = random(1, 100)
    var pl_num = random(1, 100)
    var gz_num = random(1, 100)
    var ssx = random(1, 3)
    var xs = action_args['param']
    var gz = xs['关注百分比']
    var dz = xs['点赞百分比']
    // var gz = 0
    // var dz = 100
    if (gz == 0 || gz == '0') {
        gzx = 10
        TKB.set_log('关注百分比是' + gzx)
    } else {
        TKB.set_log('关注百分比是' + gz)
        gzx = gz
    }
    if (dz == 0 || dz == '0') {
        dzx = 30
        TKB.set_log('点赞百分比' + dzx)
    } else {
        TKB.set_log('点赞百分比' + dz)
        dzx = dz
    }
    var gjc = xs['关键词']
    // var gjc = zz
    var word = gjc.split("|")
    TKB.set_log('关键词' + word)
    sleep(3000)
    var ll = 0 //直播
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.clear()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            if (text("关注").exists() && text("推荐").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists())) {
                TKB.set_log("首页")
                if (tem == 0) {
                    TKB.set_log("推荐")
                    click("推荐")
                    sleep(random(3, 4) * 1000);
                    swipe(random(400,600), 1600, random(400,600), 400, random(500, 800));
                    sleep(1000)
                    swipe(random(400,600), 1600, random(400,600), 400, random(500, 800));
                    tem = 1
                }
                TSD = (new Date()).getTime()
                while (1) {
                    try {
                        if ((new Date()).getTime() - ssd > 40 * 60 * 1000 && ll < 5) {
                            TKB.set_log("去看直播")
                            click(330, 1830)
                            sleep(2000)
                            a = 1
                            ll = ll + 1
                            break
                        }
                        z = iskeyopen(word)
                        if (text('点击进入直播间').exists() || text('直播中').exists() || z == false) {
                            TKB.set_log('下滑')
                            swipe(random(400,600), 1600, random(400,600), 400, random(500, 800));
                            TSD = (new Date()).getTime()
                            z = ''
                        }
                        if (z == true) {
                            TKB.set_log('符合条件')
                            z = ''
                            sleep(random(1, 2) * 1000);
                            dinz = random(20, 40)
                            dj_num = random(1, 100)
                            pl_num = random(1, 100)
                            gz_num = random(1, 100)
                            var slip = 0
                            var slip_num = 0
                            var slip_stop
                            var TTguank = (new Date()).getTime()
                            while (1) {
                                try {
                                                                    //判断三次进度条为0则没有进度条浏览7-12秒下滑
                                //如果点赞少于500不进行任何操作
                                // 进度条>80 或者超时就下滑
                                if (slip_num < 3) {
                                    var slip = getdyslip("com.ss.android.ugc.aweme:id/us"); //进度条的那个控件
                                    toastLog("当前视频进度:" + slip + "%");
                                    // slip_stop = slip
                                    if (slip == 0) {
                                        slip_num++
                                        sleep(2000)
                                    } else {
                                        if (slip = slip_stop && slip != 0) {
                                            slip = 101
                                        }
                                        sleep(5000)
                                        slip_stop = slip
                                    }
                                } else if (slip_num == 3) {
                                    TKB.set_log("当前视频没有进度条");
                                    var TTguank = (new Date()).getTime()
                                    dinz = random(7, 12)
                                    slip_num++
                                }
                                if (slip != 0 && slip < 80 && slip_num < 3 || (new Date()).getTime() - TTguank < dinz * 1000 && slip_num > 3) {
                                    TKB.set_log("观看视频")
                                    toastLog("观看视频")
                                    sleep(5000)
                                    TSD = (new Date()).getTime()
                                } else if ((new Date()).getTime() - TTguank > dinz * 1000 || slip > 80) {
                                    var totalLikes = id("com.ss.android.ugc.aweme:id/aoa").find().filter(function (w) {
                                        return w.bounds().top < w.bounds().bottom
                                    })[0].text();
                                    if (totalLikes.indexOf('w') != -1) {
                                        totalLikes = totalLikes.split("w");
                                        totalLikes = Number(totalLikes[0]) * 10000;
                                    }
                                    TKB.set_log("点赞数量为" + totalLikes);
                                    sleep(2000)
                                    if (totalLikes < 500) {
                                        dj_num = 101
                                        pl_num = 101
                                        gz_num = 101
                                    }
                                    if (dj_num < dzx) {
                                        TKB.set_log("点赞")
                                        var x = random(150, 750)
                                        var y = random(600, 1200)
                                        var z = 100
                                        click(x, y)
                                        sleep(z)
                                        click(x, y)
                                        dj_num = 101
                                    } else {
                                        if (pl_num < 3) {
                                            TKB.set_log("浏览评论")
                                            click(980, 1110)
                                            sleep(2000)
                                            var sb = random(1, 5)
                                            if (sb == 1) {
                                                sleep(1000)
                                                TKB.set_log("评论")
                                                click(150, 1870)
                                                sleep(2000)
                                                setText("[" + bq[random(1, bq.length)] + "]")
                                                sleep(1000)
                                                if (id("com.ss.android.ugc.aweme:id/a__").exists()) {
                                                    var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
                                                    TKB.set_log(ss)
                                                    click(ss.centerX(), ss.centerY());
                                                    sleep(2000)
                                                }
                                                back()
                                                sleep(3000)
                                            } else {
                                                for (j = 0, len = sb; j < len; j++) {
                                                    swipe(random(400,600), 1600, random(400,600), 400, random(500, 800));
                                                    sleep(random(1000, 3000))
                                                }
                                            }
                                            back()
                                            pl_num = 101
                                        } else {
                                            if (gz_num < gzx) {
                                                if (id('com.ss.android.ugc.aweme:id/b9_').exists()) {
                                                    TKB.set_log('点击关注')
                                                    var z = id('com.ss.android.ugc.aweme:id/b9_').find()[1].bounds()
                                                    click(z.centerX(), z.centerY())
                                                }
                                                gz_num = 101
                                            } else {
                                                toastLog("看完滑动" + dinz)
                                                if (id('com.ss.android.ugc.aweme:id/a9r').exists()) {
                                                    TKB.set_log("评论界面返回")
                                                    toastLog("评论界面返回")
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                }
                                                swipe(random(400,600), 1600, random(400,600), 400, random(500, 800));
                                                dinz = random(20, 40)
                                                break
                                            }
                                        }
                                    }
                                }
                                } catch (error) {
                                    log(error)
                                    sleep(3000)
                                }
                            }
                        }
                    } catch (error) {
                        // toastLog(error)
                        TKB.set_log(error)
                        sleep(1000)
                    }
                }
            }
        }
        if (text("直播广场").exists()) {
            TKB.set_log("直播广场")
            back()
            sleep(3000)
        }
        if (a == 1) {
            if (text("同城").exists() || id("com.ss.android.ugc.aweme:id/dae").exists()) {
                toastLog("同城界面")
                TKB.set_log("同城界面")
                click(100, 1800)
                sleep(2000)
            }
            if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
                TKB.set_log("首页")
                click(100, 130)
                sleep(2000)
            }
            if (id("com.ss.android.ugc.aweme:id/xj").exists() || text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()) {
                TKB.set_log("留下你的精彩评论吧")
                // var neir ="["+bq[random(0,bq.length - 1)]+"]"+"["+bq[random(0,bq.length - 1)]+"]"
                // setText(neir)
                back()
                sleep(3000)
            }
            if (id("com.ss.android.ugc.aweme:id/a__").exists() && id("com.ss.android.ugc.aweme:id/c3l").exists() || text("留下你的精彩评论吧").exists() || desc("留下你的精彩评论吧").exists()) {
                TKB.set_log("评论界面")
                back()
                sleep(3000)
            }
            if (text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                toastLog("直播界面")
                TSD = (new Date()).getTime()
                var ssi = random(1, 100)
                if (ll < 10) {
                    ll = 10
                    ssd = (new Date()).getTime()
                    for (j = 0, len = ssx; j < len; j++) {
                        swipe(750, 1200, 500, 100, 500)
                        sleep(random(1000, 3000))
                    }
                }
                if (ssi > 99) {
                    TKB.set_log("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText("[" + bq[random(0, bq.length - 1)] + "]")
                    sleep(1000)
                    if (id("com.ss.android.ugc.aweme:id/eoc").exists()) {
                        try {
                            var ss = id("com.ss.android.ugc.aweme:id/eoc").findOnce().bounds();
                            TKB.set_log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            TKB.set_log(error);
                        }
                    }
                    back()
                    sleep(2000)
                }
                if ((new Date()).getTime() - ssd < zbt * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.set_log("观看直播中")
                    sleep(3000)
                } else {
                    toastLog("观看直播结束")
                    back()
                    sleep(3000)
                    TKB.clear()
                    return false
                }
            }
            if (text("点击重播").exists()) {
                toastLog("点击重播，滑动")
                swipe(750, 1200, 600, 100, 1200);
                sleep(random(10, 20) * 1000);
                sleep(1000)
            }
            if (text("直播已结束").exists()) {
                toastLog("直播已结束，滑动")
                swipe(750, 1200, 600, 100, 1200);
                sleep(random(10, 20) * 1000);
                sleep(1000)
            }
            if (text("取消").exists() && text("热点榜").exists() && text("更多").exists()) {
                TKB.set_log("搜索界面")
                back()
                sleep(3000)
            }
            if (text("下线提醒").exists() && text("好").exists()) {
                TKB.set_log("下线提醒")
                click("好")
                sleep(2000)
                TKB.clear()
                return false
            }
            if (id("com.ss.android.ugc.aweme:id/dl4").exists() && id("com.ss.android.ugc.aweme:id/es6").exists()) {
                TKB.set_log("直播评论界面")
                back()
                sleep(3000)
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
    setInterval(() => {
        TKB.send_message({notice_name: "task_time_stamp",notice_content: (new Date()).getTime()})
    }, 15 * 1000)
})
dyxyh()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})