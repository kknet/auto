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
//发布视频
function fabusp() {
    TKB.set_log("发布视频")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    
    var zpsl = 0 //现在的作品数量
    var ylsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var ssy = 0 //设置声音
    var status = 0
    var xs = action_args['param']
    var category = xs['类型']
        // var category = '美女'
    var zz = TKB.get_video(sbip, user_id, yhbh, category)
    var shipin_id = zz['shipin_id']
    var lj = zz['text']
    if (lj == false) {
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false) {
        TKB.set_log("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            if (fb != 0) {
                status = 1
                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            }
            TKB.clear()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
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
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.set_log("首页")
            TSD = (new Date()).getTime()
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists() || textContains("编辑资料").exists() || desc("分享主页").exists() || textContains("分享主页").exists()) {
                TKB.set_log("编辑资料")
                var ss = TKB.getAllTexts()
                try {
                    for (j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            TKB.set_log(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.set_log("作品数量：" + zpsl)
                            if (fb == 0) {
                                ylsl = zpsl
                                click(541, 1830) //点击加号
                                sleep(2000)
                            } else {
                                TKB.set_log("点击首页")
                                click(100, 1850)
                                sleep(2000)
                            }
                            if (zpsl > ylsl) {
                                TKB.set_log("现在的作品数量大于原来的")
                                status = 1
                                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                        }
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.set_log(error);
                }
            }
        }
        if (text("上传").exists() && text("选择音乐").exists() || text("上传").exists() && text("滤镜").exists()) {
            TKB.set_log("上传视频界面")
            click("上传")
            sleep(2000)
        }
        if (text("视频").exists() && text("下一步").exists() || text("视频").exists() && id("com.ss.android.ugc.aweme:id/jl").exists() || text("多段视频").exists() && text("视频").exists()) {
            TKB.set_log("上传视频界面")
            try {
                node = text("视频").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
            if (id("com.ss.android.ugc.aweme:id/but").exists() || id("com.ss.android.ugc.aweme:id/d3g").exists()) {

            } else {
                toastLog("没有视频")
            }
            click(220, 420) //点击第一个视频
            sleep(1000)
            click(910, 1820) //点击第一个视频
            sleep(100)
            click("下一步")
            sleep(3000)
        } else {
            if (text("选配乐").exists() || text("配乐").exists() && text("音量").exists()) {
                if (ssy != 0) {
                    if (text("下一步").exists()) {
                        TKB.set_log("下一步2")
                        click("下一步")
                        sleep(3000)
                    } else {
                        TKB.set_log("下一步返回")
                        back()
                        sleep(2000)
                    }
                } else {
                    if (text("配乐").exists() && text("音量").exists()) {
                        TKB.set_log("配乐")
                        if (text("推荐").exists() || text("收藏").exists()) {
                            TKB.set_log("点击第一个音乐")
                            click(400, 1500)
                            sleep(5000)
                            click(800, 1860)
                            sleep(2000)
                        } else {
                            if (text("原声").exists() || text("配乐").exists()) {
                                TKB.set_log("设置声音")
                                swipe(600, 1426, 235, 1423, 500) //调原声
                                var point = findColor(captureScreen(), "#face15", {
                                    region: [245, 1619, 50, 50],
                                    threshold: 5
                                });
                                if (point) {
                                    TKB.set_log("已经设置好了声音")
                                    back()
                                    sleep(2000)
                                    ssy = 1
                                } else {
                                    TKB.set_log("点击配乐")
                                    click(267, 1842)
                                    sleep(3000)
                                }
                            }
                        }
                    } else {
                        if (text("选配乐").exists()) {
                            TKB.set_log("选配乐")
                            click("选配乐")
                            sleep(3000)
                        }
                    }
                }
            } else {
                if (text("下一步").exists()) {
                    TKB.set_log("下一步")
                    click("下一步")
                    sleep(3000)
                }
            }
        }
        if (text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()) {
            TKB.set_log("发布")
            setText(biaoti)
            sleep(500)
            click("发布")
            sleep(3000)
            fb = 1
        }
        if (text("同步到今日头条").exists()) {
            TKB.set_log("同步到今日头条")
            if (fb != 0) {
                TKB.set_log("发布成功")
                click("同步到今日头条")
                sleep(1000)
                    // click(530, 1530)
                sleep(3000)
                status = 1
                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            } else {
                TKB.set_log("还没发布")
                click("同步到今日头条")
                    // click(530, 1530)
                sleep(3000)
            }
        }
        if (id("com.ss.android.ugc.aweme:id/a91").exists() && fb != 0) {
            TKB.set_log("对比标题")
            try {
                var dd = id("com.ss.android.ugc.aweme:id/a91").findOnce().text()
                if (dd == biaoti) {
                    TKB.set_log("看到我发布视频的标题了")
                    status = 1
                    TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                    return true
                }
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            TKB.set_log("一秒前的视频")
            status = 1
            TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
            return true
        }
        if (text("本地草稿箱").exists() && text("选择").exists()) {
            TKB.set_log("本地草稿箱")
            click("选择")
            sleep(1000)
        }
        if (text("放弃").exists() && text("取消").exists()) {
            TKB.set_log("放弃")
            back()
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/a1c").exists() && text("取消").exists()) {
            TKB.set_log("删除本地草稿箱")
            try {
                var ss = id("com.ss.android.ugc.aweme:id/a1c").findOnce().checked();
                if (ss == false) {
                    var node = id("com.ss.android.ugc.aweme:id/a1c").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                    click(500, 1840)
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
            sleep(3000)
        }
        if (text("删除").exists() && text("取消").exists()) {
            TKB.set_log("删除")
            click("删除")
            sleep(2000)
        }
    }
}
//检测上抖加
function jiancedj() {
    TKB.set_log("检测抖加")
    TKB.clear()
    sleep(3000)
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var zpsl = 0 //现在的作品数量
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            TKB.clear()
            return false
        }
        if ((new Date()).getTime() - TSD > 4 * 60 * 1000) {
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
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.set_log("首页")
            TSD = (new Date()).getTime()
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists() || textContains("编辑资料").exists() || desc("分享主页").exists() || textContains("分享主页").exists()) {
                TKB.set_log("编辑资料")
                var ss = TKB.getAllTexts()
                try {
                    for (j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            TKB.set_log(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.set_log("作品数量：" + zpsl)
                            if (zpsl != 0 && zpsl != "0") {
                                try {
                                    var node = text(ss[j]).findOnce().bounds();
                                    if (node.centerY() < 1550) {
                                        TKB.set_log("点击第一个视频")
                                        click(120, node.centerY() + 100);
                                        sleep(2000)
                                        var dj = (new Date()).getTime()
                                        var skl = 0
                                        while (1) {
                                            if ((new Date()).getTime() - dj > 2 * 60 * 1000) {
                                                TKB.set_log("超时退出视频")
                                                back()
                                                sleep(3000)
                                                back()
                                                sleep(3000)
                                                break
                                            }
                                            if (text("留下你的精彩评论吧").exists() && id("com.ss.android.ugc.aweme:id/a__").exists() || id("com.ss.android.ugc.aweme:id/kr").exists()) {
                                                TKB.set_log("留下你的精彩评论吧")
                                                back()
                                                sleep(2000)
                                            }
                                            if (text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/a__").exists() || id("com.ss.android.ugc.aweme:id/kr").exists()) {
                                                TKB.set_log("留下你的精彩评论吧")
                                                back()
                                                sleep(2000)
                                            }
                                            if (text("保存本地").exists() && text("上热门").exists() || text("转发").exists() && text("上热门").exists()) {
                                                TKB.set_log("上热门")
                                                click("上热门")
                                                sleep(2000)
                                            } else {
                                                if (text("支付").exists() || desc("支付").exists() || desc("速推版").exists()) {
                                                    TKB.set_log("能上抖加")
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(2000)
                                                    TKB.xgzhzt(sbip, user_id, yhbh, app_id, "正常", "1")
                                                    return true
                                                } else {
                                                    if (text("选择其他视频上热门").exists() || textContains("该视频搬运").exists()) {
                                                        TKB.set_log("无法上热门")
                                                        back()
                                                        sleep(500)
                                                        back()
                                                        sleep(2000)
                                                        TKB.xgzhzt(sbip, user_id, yhbh, app_id, "无法上抖加", "1")
                                                        return false
                                                    } else {
                                                        if (skl == 0) {
                                                            TKB.set_log("点击视频点点点...")
                                                            click(985, 1365)
                                                            sleep(3000)
                                                            skl = 1
                                                        } else {
                                                            TKB.set_log("点击图片点点点...")
                                                            click(989, 1536)
                                                            sleep(3000)
                                                            skl = 0
                                                        }

                                                    }
                                                }
                                            }
                                            if (desc("知道了").exists()) {
                                                TKB.set_log("知道了")
                                                try {
                                                    var ss = desc("知道了").findOnce().bounds();
                                                    log(ss)
                                                    click(ss.centerX(), ss.centerY());
                                                    sleep(2000)
                                                } catch (error) {
                                                    sleep(1001)
                                                    log(error);
                                                }
                                            }
                                        }
                                    } else {
                                        TKB.set_log("下滑")
                                        swipe(500, 1600, 500, 800, 800)
                                        sleep(2000)
                                    }
                                } catch (error) {
                                    sleep(1001)
                                    log(error);
                                }
                            } else {
                                TKB.set_log("没有作品")
                                return false
                            }
                            break
                        }
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.set_log(error);
                }
            }
        }
        if (text("本地草稿箱").exists() && text("选择").exists()) {
            TKB.set_log("本地草稿箱")
            click("选择")
            sleep(1000)
        }
        if (text("放弃").exists() && text("取消").exists()) {
            TKB.set_log("放弃")
            back()
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/a1c").exists() && text("取消").exists()) {
            TKB.set_log("删除本地草稿箱")
            try {
                var ss = id("com.ss.android.ugc.aweme:id/a1c").findOnce().checked();
                if (ss == false) {
                    var node = id("com.ss.android.ugc.aweme:id/a1c").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                    click(500, 1840)
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                TKB.set_log(error);
            }
            sleep(3000)
        }
        if (text("删除").exists() && text("取消").exists()) {
            TKB.set_log("删除")
            click("删除")
            sleep(2000)
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