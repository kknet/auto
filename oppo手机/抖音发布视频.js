/**
 * 发布视频
 *  biaoti /视频标题
 *  ssy 设置声音
 * */

function fabusp() {
    TKB.xgsrizhi("发布视频")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var biaoti = "o" //视频标题
    var zpsl = 0 //现在的作品数量
    var ylsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var ssy = 0 //设置声音
    // var status = 0
    // var xs = TKB.zhid(sbip, run_id)
    // var category = xs['类型']
        // var category = '美女'
    // var zz = TKB.get_video(sbip, user_id, yhbh, category)
    // var shipin_id = zz['shipin_id']
    var lj = zz['text']
    if (lj == false) {
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false) {
        TKB.xgsrizhi("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                // status = 1
                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists() || textContains("编辑资料").exists() || desc("分享主页").exists() || textContains("分享主页").exists()) {
                TKB.xgsrizhi("编辑资料")
                var ss = TKB.getAllTexts()
                try {
                    for (j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.xgsrizhi("作品数量：" + zpsl)
                            if (fb == 0) {
                                ylsl = zpsl
                                click(541, 1830) //点击加号
                                sleep(2000)
                            } else {
                                TKB.xgsrizhi("点击首页")
                                click(100, 1850)
                                sleep(2000)
                            }
                            if (zpsl > ylsl) {
                                TKB.xgsrizhi("现在的作品数量大于原来的")
                                // status = 1
                                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                        }
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
        }
        if (text("上传").exists() && text("选择音乐").exists() || text("上传").exists() && text("滤镜").exists()) {
            TKB.xgsrizhi("上传视频界面")
            click("上传")
            sleep(2000)
        }
        if (text("视频").exists() && text("下一步").exists() || text("视频").exists() && id("com.ss.android.ugc.aweme:id/jl").exists() || text("多段视频").exists() && text("视频").exists()) {
            TKB.xgsrizhi("上传视频界面")
            try {
                node = text("视频").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
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
                        TKB.xgsrizhi("下一步2")
                        click("下一步")
                        sleep(3000)
                    } else {
                        TKB.xgsrizhi("下一步返回")
                        back()
                        sleep(2000)
                    }
                } else {
                    if (text("配乐").exists() && text("音量").exists()) {
                        TKB.xgsrizhi("配乐")
                        if (text("推荐").exists() || text("收藏").exists()) {
                            TKB.xgsrizhi("点击第一个音乐")
                            click(400, 1500)
                            sleep(5000)
                            click(800, 1860)
                            sleep(2000)
                        } else {
                            if (text("原声").exists() || text("配乐").exists()) {
                                TKB.xgsrizhi("设置声音")
                                swipe(600, 1426, 235, 1423, 500) //调原声
                                var point = findColor(captureScreen(), "#face15", {
                                    region: [245, 1619, 50, 50],
                                    threshold: 5
                                });
                                if (point) {
                                    TKB.xgsrizhi("已经设置好了声音")
                                    back()
                                    sleep(2000)
                                    ssy = 1
                                } else {
                                    TKB.xgsrizhi("点击配乐")
                                    click(267, 1842)
                                    sleep(3000)
                                }
                            }
                        }
                    } else {
                        if (text("选配乐").exists()) {
                            TKB.xgsrizhi("选配乐")
                            click("选配乐")
                            sleep(3000)
                        }
                    }
                }
            } else {
                if (text("下一步").exists()) {
                    TKB.xgsrizhi("下一步")
                    click("下一步")
                    sleep(3000)
                }
            }
        }
        if (text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()) {
            TKB.xgsrizhi("发布")
            setText(biaoti)
            sleep(500)
            click("发布")
            sleep(3000)
            fb = 1
        }
        if (text("同步到今日头条").exists()) {
            TKB.xgsrizhi("同步到今日头条")
            if (fb != 0) {
                TKB.xgsrizhi("发布成功")
                click("同步到今日头条")
                sleep(1000)
                    // click(530, 1530)
                sleep(3000)
                // status = 1
                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            } else {
                TKB.xgsrizhi("还没发布")
                click("同步到今日头条")
                    // click(530, 1530)
                sleep(3000)
            }
        }
        if (id("com.ss.android.ugc.aweme:id/a91").exists() && fb != 0) {
            TKB.xgsrizhi("对比标题")
            try {
                var dd = id("com.ss.android.ugc.aweme:id/a91").findOnce().text()
                if (dd == biaoti) {
                    TKB.xgsrizhi("看到我发布视频的标题了")
                    // status = 1
                    // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                    return true
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            TKB.xgsrizhi("一秒前的视频")
            // status = 1
            // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
            return true
        }
        if (text("本地草稿箱").exists() && text("选择").exists()) {
            TKB.xgsrizhi("本地草稿箱")
            click("选择")
            sleep(1000)
        }
        if (text("放弃").exists() && text("取消").exists()) {
            TKB.xgsrizhi("放弃")
            back()
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/a1c").exists() && text("取消").exists()) {
            TKB.xgsrizhi("删除本地草稿箱")
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
                TKB.xgsrizhi(error);
            }
            sleep(3000)
        }
        if (text("删除").exists() && text("取消").exists()) {
            TKB.xgsrizhi("删除")
            click("删除")
            sleep(2000)
        }
        zonghe()
    }
}

//下载视频
function xzsp(lj) {
    xgsrizhi("下载视频")
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/29.mp4';
    var imgurl = lj
    xgsrizhi("视频链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                xgsrizhi("下载不到视频头像")
                return false
            }
            var filePath = files.join(dirpath, '1.mp4');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                xgsrizhi("下载视频完成")
                return true
            } else {
                xgsrizhi("没有视频");
                sleep(3000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}