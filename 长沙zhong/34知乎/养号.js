var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
//知乎养号
function zhyh() {
    TKB.set_log('知乎养号')
    launch('com.zhihu.android')
    sleep(5000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
        // var zt_percentage = 30// 赞同百分比
        // var pl_percentage = 10
        // var xh_percentage = 5// 喜欢百分比
        // var sc_percentage = 1// 收藏百分比
        // var zt_numx = 200 // 赞同数量
    var a = 0
    var tem = 0
    var tj_time = random(30, 40)
    var temx = 0
    var rb_time = random(10, 30)
    var xs = action_args['param']
    var xh = xs['喜欢百分比']
    var zt = xs['赞同百分比']
    var zt_num = xs['赞同数量']
    if (xh == 0 || xh == '0') {
        xh_percentage = 10
        TKB.set_log('喜欢百分比' + xh_percentage)
        toastLog('喜欢百分比' + xh_percentage)
    } else {
        xh_percentage = xh
        TKB.set_log('喜欢百分比' + xh_percentage)
        toastLog('喜欢百分比' + xh_percentage)
    }
    if (zt == 0 || zt == '0') {
        zt_percentage = 30
        TKB.set_log('赞同百分比' + zt_percentage)
        toastLog('赞同百分比' + zt_percentage)
    } else {
        zt_percentage = zt
        TKB.set_log('赞同百分比' + zt_percentage)
        toastLog('赞同百分比' + zt_percentage)
    }
    if (zt_num == 0 || zt_num == '0') {
        zt_numx = 200
        TKB.set_log('赞同数量' + zt_numx)
        toastLog('赞同数量' + zt_numx)
    } else {
        zt_numx = zt_num
        TKB.set_log('赞同数量' + zt_numx)
        toastLog('赞同数量' + zt_numx)
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log('时间够了退出')
            TKB.clear('com.zhihu.android')
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.set_log('超时没在首页')
            back()
            sleep(1000)
            TKB.clear('com.zhihu.android')
            sleep(3000)
            launch('com.zhihu.android')
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            var tj = (new Date()).getTime()
            while (1) {
                if ((new Date()).getTime() - tj > tj_time * 60 * 1000) {
                    TKB.set_log('去看热榜')
                    if (text('热榜').exists() && text('推荐').exists()) {
                        a = 1
                        break
                    } else {
                        back()
                        sleep(500)
                    }
                }
                if (tem == 0) {
                    click('推荐')
                    TKB.set_log('点击推荐')
                    sleep(3000)
                    tem = 1
                }
                if (desc('关注').exists() && desc('推荐').exists() && text('热榜').exists()) {
                    TKB.set_log("新闻界面")
                    try {
                        var ss = TKB.getAllTexts()
                        for (j = 0, len = ss.length; j < len; j++) {
                            if (ss[j].indexOf("赞同") != -1 &&  text(ss[j]).findOnce()  !=  null) {
                                if (ss[j].indexOf("万赞同") != -1) {
                                    var aa = text(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                        TKB.set_log('点赞量大于1万:' + ss[j])
                                        click(300, aa.centerY())
                                        sleep(3000)
                                    }
                                } else {
                                    var st = ss[j].split("赞")
                                    if (Number(st[0]) > zt_numx) {
                                        var aa = text(ss[j]).findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                            TKB.set_log('点赞量大于' + zt_numx + ':' + ss[j])
                                            click(300, aa.centerY())
                                            sleep(3000)
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        log(error);
                        sleep(2000)
                    }
                } else if (text("我的").exists() && text("首页").exists()) {
                    TKB.set_log("首页")
                    click('首页')
                    sleep(2000)
                }
                if (id('com.zhihu.android:id/barrage_switch').exists() && id('com.zhihu.android:id/barrage_expression_left').exists() && id('com.zhihu.android:id/barrage_expression_right').exists()) {
                    TKB.set_log("视频界面")
                    sleep(3000)
                    var sp_time = random(40, 60)
                    var spRT = (new Date()).getTime()
                    while (1) {
                        if ((new Date()).getTime() - spRT < sp_time * 1000) {
                            TKB.set_log("观看视频中")
                            toastLog("观看视频中")
                            sleep(4000)
                        } else {
                            TKB.set_log("视频观看完成...")
                            break
                        }
                    }
                    back()
                    sleep(1000)
                }
                if (desc('返回').exists() && id('com.zhihu.android:id/search_btn').exists() && id('com.zhihu.android:id/more').exists()) {
                    TKB.set_log("文章界面")
                    var dj = random(1, 100)
                    try {
                        sleep(8000)
                        for (var i = 0; i < random(4, 8); i++) {
                            TKB.set_log("浏览文章")
                            swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                            sleep(random(8000, 13000))
                            if (text("添加评论...").exists()) {
                                var aa = text("添加评论...").findOnce().bounds() 
                                if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                    TKB.set_log('到底了')
                                    sleep(1000)
                                    break
                                }
                            }
                        }
                        if (dj < zt_percentage) {
                            TKB.set_log("赞同")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf(" 赞同 ") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.set_log('赞同')
                                        click(300, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        if (dj < xh_percentage) {
                            TKB.set_log("喜欢")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("喜欢") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.set_log('喜欢')
                                        click(680, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        // if (dj < pl_percentage) {
                        //     var bq = [ '谢邀',  '赞同',  '爱',  '害羞',  '好奇',  '思考',  '酷',  '大笑',  '微笑',  '捂脸',  '捂嘴',  '飙泪笑',  '耶',  '可怜',  '惊喜',  '流泪',  '大哭',  '生气',  '惊讶',  '调皮',  '衰',  '发呆',  '机智',  '嘘',  '尴尬',  '小情绪',  '为难',  '吃瓜',  '语塞',  '看看你',  '撇嘴',  '魔性笑',  '潜水',  '口罩',  '开心',  '滑稽',  '笑哭',  '白眼',  '红心',  '柠檬',  '拜托',  '握手',  '赞',  '发火',  '不抬杠',  '种草' ]
                        //     TKB.set_log("评论")
                        //     var ss = TKB.getAllTexts()
                        //     for (j = 0, len = ss.length; j < len; j++) {
                        //         if (ss[j].indexOf("评论") != -1) {
                        //             var aa = desc(ss[j]).findOnce().bounds()
                        //             if (aa.centerY() > 300 && aa.centerY() < 1900) {
                        //                 TKB.set_log('评论')
                        //                 click(980, aa.centerY())
                        //                 sleep(3000)
                        //             }
                        //         }
                        //     }
                        //     if(desc('返回').exists() && id('com.zhihu.android:id/more').exists()){
                        //         TKB.set_log("评论")
                        //         click(300,1850)
                        //         sleep(2000)
                        //         setText("[" + bq[random(1, bq.length)] + "]")
                        //         sleep(1000)
                        //     }
                        // }
                        if (dj < sc_percentage) {
                            TKB.set_log("收藏")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("收藏") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.set_log('收藏')
                                        click(830, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        back()
                        sleep(1000)
                    } catch (error) {

                    }
                }
                swipe(random(400, 600), 1700, random(400, 600), 300, random(1200, 2000))
                sleep(3000)
            }
        }
        if (a == 1) {
            var rb = (new Date()).getTime()
            while (1) {
                try {
                    if ((new Date()).getTime() - rb > rb_time * 60 * 1000) {
                        TKB.set_log('看完了')
                        a = 1
                        break
                    }
                    if (temx == 0) {
                        if (text('热榜').exists() && text('推荐').exists()) {
                            click('热榜')
                            sleep(2000)
                        }
                        if (id('com.zhihu.android:id/sort_view').exists()) {
                            var aa = id('com.zhihu.android:id/sort_view').findOnce().bounds()
                            click(aa.centerX(), aa.centerY())
                            sleep(2000)
                        }
                        if (text('全部榜单').exists() && text('我的榜单').exists()) {
                            while (1) {
                                if (id('com.zhihu.android:id/tab_add_bg').exists()) {
                                    var zz = id('com.zhihu.android:id/tab_add_bg').findOnce().bounds()
                                    click(zz.centerX(), zz.centerY())
                                    sleep(1000)
                                } else if (text('更多领域榜单敬请期待').exists()) {
                                    break
                                }
                            }
                            var bd = ['全站', '科学', '数码', '体育', '时尚', '校园', '汽车', '时事', '数码', '国际']
                            var cy = bd[random(1, bd.length)]
                            TKB.set_log('点击' + cy)
                            click(cy)
                            sleep(4000)
                            temx = 1
                        }
                    }
                    if (id('com.zhihu.android:id/ranking_no').exists && text('推荐').exists() || id('com.zhihu.android:id/ranking_no_img').exists() && text('推荐').exists()) {
                        TKB.set_log("热榜界面")
                        for (var i = 0; i < random(0, 8); i++) {
                            swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                            sleep(random(800, 1300))
                            if (text('没有更多内容').exists()) {
                                var aa = text('没有更多内容').findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1750) {
                                    sleep(1000)
                                    break
                                }
                            }
                            if (text('没有更多了，去领域榜单看看吧').exists()) {
                                var aa = text('没有更多了，去领域榜单看看吧').findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1750) {
                                    sleep(1000)
                                    break
                                }
                            }
                        }
                        click(random(150, 600), random(550, 1650))
                        sleep(3000)
                    }
                    if (id('com.zhihu.android:id/search_btn').exists && id('com.zhihu.android:id/more').exists() && text('默认').exists()) {
                        try {
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("赞同") != -1) {
                                    if (ss[j].indexOf("万") != -1) {
                                        var aa = text(ss[j]).findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                            TKB.set_log('点赞量大于1万:' + ss[j])
                                            click(300, aa.centerY())
                                            sleep(3000)
                                        }
                                    } else {
                                        var st = ss[j].split("赞")
                                        if (Number(st[0]) > zt_numx) {
                                            var aa = text(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                                // (aa.centerX(), aa.centerY())
                                                TKB.set_log('点赞量大于' + zt_numx + ':' + ss[j])
                                                click(300, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (error) {
                            log(error);
                            sleep(2000)
                        }
                        if (id('com.zhihu.android:id/barrage_switch').exists() && id('com.zhihu.android:id/barrage_expression_left').exists() && id('com.zhihu.android:id/barrage_expression_right').exists()) {
                            TKB.set_log("视频界面")
                            sleep(3000)
                            var sp_time = random(40, 60)
                            var spRT = (new Date()).getTime()
                            while (1) {
                                if ((new Date()).getTime() - spRT < sp_time * 1000) {
                                    TKB.set_log("观看视频中")
                                    toastLog("观看视频中")
                                    sleep(4000)
                                } else {
                                    TKB.set_log("视频观看完成...")
                                    break
                                }
                            }
                            back()
                            sleep(1000)
                        }
                        if (desc('返回').exists() && id('com.zhihu.android:id/search').exists() && id('com.zhihu.android:id/more').exists()) {
                            TKB.set_log("文章界面")
                            var dj = random(1, 100)
                            try {
                                sleep(8000)
                                for (var i = 0; i < random(4, 8); i++) {
                                    TKB.set_log("浏览文章")
                                    swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                                    sleep(random(8000, 13000))
                                    if (text("添加评论...").exists()) {
                                        var aa = text("添加评论...").findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                            TKB.set_log('到底了')
                                            sleep(1000)
                                            break
                                        }
                                    }
                                }
                                if (dj < zt_percentage) {
                                    TKB.set_log("赞同")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf(" 赞同 ") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.set_log('赞同')
                                                click(300, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                if (dj < xh_percentage) {
                                    TKB.set_log("喜欢")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf("喜欢") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.set_log('喜欢')
                                                click(680, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                if (dj < sc_percentage) {
                                    TKB.set_log("收藏")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf("收藏") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.set_log('收藏')
                                                click(830, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                back()
                                sleep(1000)
                            } catch (error) {

                            }
                        }
                        swipe(random(400, 600), 1700, random(400, 600), 300, random(1200, 2000))
                        sleep(3000)
                    }
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }
    }
}
//所有判断和弹窗
function zonghe() {
    if (text('重新登录').exists() && text('去登录').exists()) {
        TKB.set_log('账号过期重新登录')
        click('去登录')
        sleep(1500)
        zhdl()
        sleep(1000)
    }
    if (text('需要身份验证').exists() && id('com.zhihu.android:id/captcha_image').exists()) {
        log('验证码')
        var z = picture_verify('com.zhihu.android:id/captcha_image')
        toastLog('验证码:' + z)
        setText(z)
        sleep(1000)
        click(530, 790)
        sleep(5000)
    }
    if (text("向你申请如下权限：").exists()) {
        TKB.set_log("点击同意并进入")
        click("同意并进入")
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.set_log("点击始终同意")
    }
    if (text("位置权限申请").exists() || id("com.zhihu.android:id/txt_title").exists()) {
        TKB.set_log("点击确认")
        click("确认");
        sleep(2000)
    }
    if (text("重新加载").exists()) {
        TKB.set_log("重新加载")
        click("重新加载")
        sleep(2000)
    }
    if (text("立刻领取").exists()) {
        TKB.set_log("点击关闭")
        id("com.zhihu.android:id/cancel_btn").findOnce().click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.set_log("我知道了")
        click('我知道了')
        sleep(2000)
    }
    if (desc("我知道了").exists()) {
        TKB.set_log("我知道了")
        desc('我知道了').findOnce().click()
        sleep(2000)
    }
    if (id('com.zhihu.android:id/approve_tip').exists()) {
        TKB.set_log("双击快速赞同")
        sleep(4000)
    }
    if (text("立刻领取").exists() && id('com.zhihu.android:id/cancel_btn').exists()) {
        TKB.set_log("关闭成就")
        click(970, 580)
        sleep(2000)
    }
    if (id('com.zhihu.android:id/close').exists()) {
        TKB.set_log("关闭")
        id('com.zhihu.android:id/close').click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.set_log("点击我知道了")
        sleep(2000);
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.set_log("点击以后再说")
        sleep(2000);
    }
    if (text("知道了").exists()) {
        click("知道了");
        TKB.set_log("点击知道了")
        sleep(2000);
    }
    if (text("开启位置信息开关").exists()) {
        click("取消");
        sleep(2000);
        TKB.set_log("点击取消位置信息开启");
    }
    if (text("欢迎加入知乎内测").exists()) {
        click("取消");
        sleep(2000);
        TKB.set_log("点击取消");
    }
    // if (text("写回答").exists()) {
    //     id("com.zhihu.android:id/close").findOnce().click()
    //     TKB.set_log("点击关闭");
    //     sleep(3000)
    // }
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
zhyh()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})
