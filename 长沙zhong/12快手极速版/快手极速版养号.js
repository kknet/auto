var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
//滑块
function get_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
        // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        var clip = images.clip(src, 47, 257, 985, 574)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "ks",
            image: open(imgFile),
            type: 'file'
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
        }
    } catch (error) {
        TKB.set_log(error)
    }
}


function zonghe() {
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.set_log("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.set_log("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    // if (desc("邀请好友赚36元").exists()) {
    //     TKB.set_log("签到成功")
    //     click(120,340)
    //     sleep(1000)
    // }
    if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
        click('同意并继续')
        sleep(2000)
    }
    if (text('禁止').exists() && text('始终允许').exists()) {
        click('始终允许')
        sleep(2000)
    }
    if (text('阅读完整版《隐私权保护政策》').exists() && text('用户隐私政策').exists()) {
        click('同意并继续')
        sleep(2000)
    }
    if (text('恭喜收到现金红包').exists() && text('当天可提现').exists()) {
        id('com.kuaishou.nebula:id/close').findOnce().click()
        sleep(2000)
    }
    if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
        click('同意并继续')
        sleep(2000)
    }

    if (text('完善资料').exists() && text('填写个人资料更容易获得关注').exists() && text('跳过').exists()) {
        click('跳过')
        sleep(1500)
    }
    if (text('通讯录').exists() && text('跳过').exists() && text('看看通讯录中谁在玩快手').exists()) {
        click('跳过')
        sleep(1500)
    }
    if (id('com.kuaishou.nebula:id/comment_header').exists() || id('com.kuaishou.nebula:id/panel_background').exists() || id('com.kuaishou.nebula:id/menu_layout_container').exists()) {
        click(980, 350)
        sleep(1000)
    }
    if (id('com.kuaishou.nebula:id/close').exists()) {
        TKB.set_log('关闭')
        id('com.kuaishou.nebula:id/close').findOnce().click()
        sleep(1000)
    }
    if (text('我知道了').exists()) {
        text('我知道了').findOnce().click()
    }
    if (text('网络连接失败，请稍后重试').exists()) {
        click('点击重试')
        toastLog('检查网络')
        sleep(3000)
    }
    if (text('快手用户调研').exists() && textContains('您对快手App是否满意').exists() && textContains('您会向亲友推荐快手App吗').exists()) {
        TKB.set_log("快手调研")
        click(130, 370);
        sleep(2000)
    }
    if (id('com.kuaishou.nebula:id/photo_ad_title').exists()) {
        back()
        sleep(2000)
    }
    if (text('设置青少年模式').exists() && text('为呵护未成年人健康成长，快手特别推出青少年模式，该模式下部分功能无法正常使用。请监护人主动选择，并设置监护密码。').exists() && text('我知道了').exists()) {
        text('我知道了').findOnce().click()
        sleep(4000)
    }

    if (text('现在就开始拍摄').exists() && text('开启以下权限，记录和分享美好生活').exists() && text('开启相机').exists() && text('开启录音').exists()) {
        back();
        sleep(4000)
    }
    if (desc('微信').exists() && desc('面对面邀请').exists() && desc('QQ') && desc("复制链接").exists()) {
        back();
        sleep(1500)
    }
    if (desc('166签到可领').exists() && desc('3662天').exists() && desc('6666天').exists()) {
        click(140, 340);
        sleep(1000);
    }
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.set_log("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.set_log("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        TKB.set_log("始终同意")
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
        TKB.set_log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.set_log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.set_log("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.set_log("网络连接错误");
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.set_log("确认");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.set_log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.set_log("同步到今日头条");
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
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.set_log("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.set_log("跳过");
        sleep(1200)
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

//快手新养号
function ksxyh() {
    TKB.xgsrizhi("快手新养号")
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
    //zbbpx 直播表情
    var zbbpx = ['😀', '😬', '😁', '😂', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '☺', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '☹', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']
    var live_time = random(20, 30)
    var start_time = (new Date()).getTime()
    var bq = ['必胜', '戴口罩', '勤洗手', '扎心', '666', '奸笑', '捂脸', '龇牙', '哼', '哦', '微笑', '老铁', '双鸡', '调皮', '呆住', '星星眼', '爱心', '疑问', '生气', '难过', '撇嘴', '惊讶', '羞涩', '色', '汗', '老司机', '头盔', '酷', '笑哭', '愉快', '委屈', '白眼', '安排', '点点关注', '小姐姐', '小哥哥', '鼓掌', '抱抱', '哈欠', '大哭', '闭嘴', '惊恐', '红脸蛋', '亲亲', '冷汗', '晕', '火', '坏笑', '爆炸', '可怜', '再见', '赞', '囧', '大哥', '玫瑰', '抓狂', '嘘', '快哭了', '偷笑', '落泪', '挑逗', '困', '睡觉', '打招呼', '流鼻血', '抱大腿', '偷瞄', '吃瓜', '旋转', '憨笑', '吐彩虹', '擦鼻涕', '拜托', '加油', '想吃', '打脸', '吐血', '大鼻孔', '天啊', '皱眉', '装傻', '酸了', '柴犬', '期待', '干杯', '祈祷', '爱你', '摸头', '欢迎', '比心']
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(60, 70)
    var a = 0
    var sp_num = 0
    var live_time = random(20, 30)
    var start_time = (new Date()).getTime()
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            if (tem == 0) {
                log('点击发现')
                click(580, 150)
                sleep(100)
                click(580, 150)
                sleep(3000)
                swipe(600, 1350, 500, 100, 800)
                sleep(random(1000, 3000))
            }
            if (id('com.kuaishou.nebula:id/like_button').exists() && id('com.kuaishou.nebula:id/comment_button').exists()) {
                log('视频界面')
                var zbtx = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    var x = 0
                    var dzl = 0
                    var dzs = ''
                    if ((new Date()).getTime() - rddx > zbtx * 60 * 1000) {
                        TKB.xgsrizhi("去看直播")
                        back()
                        sleep(1000)
                        var start_time = (new Date()).getTime()
                        a = 1
                        break
                    }
                    if (text('点击重播').exists()) {
                        TKB.xgsrizhi("广告重播")
                        click('点击重播')
                        sleep(2000)
                        swipe(600, 1350, 500, 100, 800)
                        sleep(2000)
                        break
                    }
                    if (id('com.kuaishou.nebula:id/like_count_view').exists()) {
                        comment = id('com.kuaishou.nebula:id/like_count_view').find()
                        comment.forEach(item => {
                            var a = item.text();
                            x++
                            if (Number(x) == 2) {
                                dzs = a
                                TKB.xgsrizhi(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            TKB.xgsrizhi('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        TKB.xgsrizhi("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        TKB.xgsrizhi('符合条件')
                        if (sp_num > 20) {
                            log('刷新')
                            click(570, 150)
                            sleep(100)
                            click(570, 150)
                            sleep(3000)
                            sp_num = 0
                        }
                        dzl = 0
                        var sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                TKB.xgsrizhi("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    TKB.xgsrizhi("评论")
                                    id('com.kuaishou.nebula:id/comment_button').click()
                                    sleep(1000)
                                    for (j = 0; j < random(2, 5); j++) {
                                        swipe(500, 1600, 600, 400, 1000)
                                        sleep(random(1000, 3000))
                                    }
                                    click(400, 1840)
                                    sleep(2000)
                                    setText("[" + bq[random(1, bq.length)] + "]")
                                    sleep(4000)
                                    if (text("发送").exists()) {
                                        TKB.xgsrizhi("发送")
                                        click('发送')
                                        sleep(2000)
                                    }
                                    back()
                                    sleep(1000)
                                    sj = 101
                                } else {
                                    if (sj < 5) {
                                        for (var j = 0; j < random(1, 3); j++) {
                                            swipe(600, 1600, 500, 300, 1000)
                                            sleep(random(1000, 2000))
                                            TKB.xgsrizhi("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            TKB.xgsrizhi("点赞")
                                            click(990, 1320)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.kuaishou.nebula:id/editor').exists() && id('com.kuaishou.nebula:id/at_button').exists()) {
                                                TKB.xgsrizhi("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    TKB.xgsrizhi("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        TKB.xgsrizhi("观看时间够了,滑动")
                                                        swipe(600, 1350, 500, 100, 800)
                                                        sleep(random(1000, 3000))
                                                        sleep(1000)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (a == 1) {
            if (text('立即赠送').exists() && text('送我一个棒棒糖吧').exists()) {
                TKB.xgsrizhi("送我一个棒棒糖吧")
                back()
                sleep(1000)
            }
            if (id('com.kuaishou.nebula:id/left_btn').exists()) {
                TKB.xgsrizhi("点击菜单")
                id('com.kuaishou.nebula:id/left_btn').click()
                sleep(5000)
            }
            if (text('动态').exists() && text('消息').exists() && text('设置').exists() && !text('直播广场').exists()) {
                TKB.xgsrizhi("下滑")
                swipe(300, 1580, 300, 900, 800)
                sleep(1000)
            } else if (text('直播广场').exists() && text('设置').exists()) {
                TKB.xgsrizhi("点击直播广场")
                click('直播广场')
                sleep(1000)
            }
            if (text('直播广场').exists() && text('设置').exists()) {
                TKB.xgsrizhi("点击直播广场")
                click('直播广场')
                sleep(1000)
            }
            if (text('直播广场').exists() && text('推荐').exists()) {
                TKB.xgsrizhi("直播广场界面")
                sleep(2000)
                for (var i = 0; i < random(2, 11); i++) {
                    swipe(500, 1800, 500, 200, 1200)
                    sleep(2000)
                }
                TKB.xgsrizhi("下滑次数:" + i)
                sleep(1000)
                click(random(200, 400), 1600)
                sleep(5000)
            }
            if (text('说点什么...').exists() && id('com.kuaishou.nebula:id/live_comment_container').exists() || id('com.kuaishou.nebula:id/live_share').exists() && text('com.kuaishou.nebula:id/live_nebula_bottom_bar_guide_gift_button').exists() || id('com.kuaishou.nebula:id/top_bar').exists() && text('com.kuaishou.nebula:id/live_close_place_holder').exists()) {
                toastLog("直播界面")
                TSD = (new Date()).getTime()
                var ssi = random(1, 100)
                // var ssi = 100
                if (ssi > 99) {
                    TKB.xgsrizhi("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText(zbbpx[random(1, zbbpx.length)])
                    sleep(1000)
                    if (text("发送").exists()) {
                        TKB.xgsrizhi("发送")
                        click('发送')
                        sleep(2000)
                    }
                }
                if ((new Date().getTime()) - start_time < live_time * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.xgsrizhi("观看直播中")
                    sleep(4000)
                } else if ((new Date().getTime()) - start_time > live_time * 60 * 1000) {
                    TKB.xgsrizhi("观看直播时间已到")
                    back()
                    sleep(1000)
                    if (text('关注并退出').exists()) {
                        TKB.xgsrizhi("退出")
                        click('退出')
                        sleep(2000)
                    }
                    back()
                    sleep(500)
                    return true
                }
            }
            if (text('直播已结束').exists()) {
                TKB.xgsrizhi("直播已结束")
                back()
                sleep(1000)
            }
            if (id('com.kuaishou.nebula:id/open_icon_view').exists() && id('com.kuaishou.nebula:id/background_view_normal').exists()) {
                TKB.xgsrizhi('点击红包')
                id('com.kuaishou.nebula:id/background_view_normal').click()
                sleep(500)
            }
            if (id('com.kuaishou.nebula:id/live_arrow_red_packet_float_view').exists() && text('抢红包').exists()) {
                TKB.xgsrizhi('点击红包1')
                click('抢红包')
                sleep(500)
            }
            if (id('com.kuaishou.nebula:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('开红包')
                id('com.kuaishou.nebula:id/live_red_packet_pre_snatch_state_view').click()
                sleep(5000)
            }
            if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('红包抢完了')
                id('com.kuaishou.nebula:id/live_red_packet_close_view').click()
                sleep(3000)
            }
            if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
                TKB.xgsrizhi('红包未开启')
                id('com.kuaishou.nebula:id/live_red_packet_close_view').click()
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
ksxyh()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})

