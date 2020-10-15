var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var dqbaoming = "com.coohua.xinwenzhuan" //该项目包名  版本 v4.4.5.1
var xmxh = "18" //项目序号


//关闭奖励  
function gbgg() {
    if (id('com.coohua.xinwenzhuan:id/tt_splash_skip_btn').exists()) {
        TKB.xgsrizhi('跳过广告')
        id('com.coohua.xinwenzhuan:id/tt_splash_skip_btn').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/splash_time').exists()) {
        TKB.xgsrizhi('跳过广告1')
        id('com.coohua.xinwenzhuan:id/splash_time').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').exists()) {
        TKB.xgsrizhi('关闭奖励')
        id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
        sleep(2000)
    }
    if (text('隐藏奖励').exists() && text('残忍退出').exists()) {
        TKB.xgsrizhi('退出隐藏奖励')
        id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
        sleep(2000)
    }
    if (text('忽略').exists() && text('查看').exists()) {
        TKB.xgsrizhi('忽略')
        click('忽略')
        sleep(2000)
    }
    if (text('取消').exists()) {
        TKB.xgsrizhi('取消')
        click('取消')
        sleep(2000)
    }
    if (text('关闭').exists()) {
        TKB.xgsrizhi('关闭')
        click('关闭')
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/close').exists()) {
        TKB.xgsrizhi('忽略')
        id('com.coohua.xinwenzhuan:id/close').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/tt_video_ad_close').exists()) {
        id('com.coohua.xinwenzhuan:id/tt_video_ad_close').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/xlxl_alert_negative').exists()) {
        TKB.xgsrizhi('关闭树')
        id('com.coohua.xinwenzhuan:id/xlxl_alert_negative').click()
        sleep(2000)
    }
    if (text('跳过').exists()) {
        TKB.xgsrizhi('跳过')
        click('跳过')
        sleep(2000)
    }
    if (text('放弃机会').exists() && text('分享赚钱').exists()) {
        TKB.xgsrizhi('放弃机会')
        click('放弃机会')
        sleep(2000)
    }
    if (text('领取并继续抽奖').exists() && text('关闭自动抽奖').exists()) {
        TKB.xgsrizhi('关闭自动抽奖')
        click('关闭自动抽奖')
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/overlay_first_read_task_gold_ad_container').exists() && text('恭喜获得').exists()) {
        TKB.xgsrizhi('获得奖励')
        id('com.coohua.xinwenzhuan:id/overlay_first_read_task_gold_ad_iv_close').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/tt_video_ad_close_layout').exists()) {
        TKB.xgsrizhi('忽略')
        id('com.coohua.xinwenzhuan:id/tt_video_ad_close_layout').click()
        sleep(2000)
    }

}
//淘新闻登录
function txwdenglu() {
    TKB.xgsrizhi('淘新闻登录')
    launch("com.coohua.xinwenzhuan")
    sleep(7000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh()
            if (tem == 1) {
                return true
            }
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.coohua.xinwenzhuan")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('拒绝').exists() && text('允许').exists()) {
                TKB.xgsrizhi('定位')
                if (id('com.meitu.security:id/checkbox').checked(true).exists()) {
                    click('拒绝')
                } else if (id('com.meitu.security:id/checkbox').checked(false).exists()) {
                    id('com.meitu.security:id/checkbox').click()
                    sleep(500)
                    click('拒绝')
                }
                sleep(2000)
            }
            if (text('微信登录领取18元红包').exists() && text('其他方式登录').exists() && text('手机号登录').exists()) {
                TKB.xgsrizhi('点击登录')
                click('微信登录领取18元红包')
                sleep(5000)
            }
            if (text('申请使用').exists() && text('新建头像昵称').exists()) {
                TKB.xgsrizhi('微信登录')
                click('同意')
                sleep(2000)
            }
            if (text('您的帐号已在其他设备登录!').exists() && text('重新登录').exists()) {
                TKB.xgsrizhi('您的帐号已在其他设备登录')
                click('重新登录')
                sleep(2000)
            }
            if (text('1元现金').exists() && text('立即提现').exists()) {
                TKB.xgsrizhi('登录成功点击红包')
                click('立即提现')
                sleep(2000)
                back()
                sleep(500)
            }
            if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
                TKB.xgsrizhi('登录成功点击任务大厅')
                click('任务大厅')
                sleep(1000)
                textContains("小说赚").waitFor()
                if (id('com.coohua.xinwenzhuan:id/title').exists() && text('恭喜获得300金币').exists()) {
                    sleep(5000)
                    id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
                    sleep(1000)
                }
                var z = text('天天领红包').findOne().parent().child(2).text()
                TKB.xgsrizhi('111' + z)
                if (z == '领取') {
                    TKB.xgsrizhi('领取新人7日福利')
                    click('领取')
                    gbgg()
                    back()
                    sleep(500)
                    back()
                }
                sleep(2000)
                gbgg()
                if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
                    TKB.xgsrizhi('登录成功点击我的钱包')
                    click('我的钱包')
                    sleep(1000)
                    if (id('com.coohua.xinwenzhuan:id/home_my_wallet_nickname').exists()) {
                        TKB.xgsrizhi('登录成功')
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
//淘新闻刷文章
function txwswz() {
    var i = 0
    while (1) {
        try {
            if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
                TKB.xgsrizhi('浏览新闻')
                click('新闻')
                sleep(3000)
            }
            if (id("com.coohua.xinwenzhuan:id/mini_video_detail_thumb_up").exists() && id("com.coohua.xinwenzhuan:id/mini_video_detail_comment").exists()) {
                click('新闻')
                sleep(2000)
            }
            gbgg()
            if (text('推荐').exists() && text('热文').exists() && text('小剧场').exists()) {
                sleep(1000)
                if (id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').depth('18').className('android.widget.ImageView').exists() || id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').depth('17').className('android.widget.ImageView').exists()) {
                    swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(500, 2000))
                    sleep(random(500, 2000))
                    TKB.xgsrizhi('此页有广告')
                    i++
                } else {
                    var am = className('android.widget.RelativeLayout').depth('16').longClickable(false).find()
                    am.forEach(child => {
                        var xx = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').className('android.widget.ImageView'))
                        var yy = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed__item_video_download').longClickable(true).className('android.widget.RelativeLayout'))
                        var zz = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed__item_img_multi').longClickable(true).className('android.widget.RelativeLayout'))
                        var aa = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed__item_img_large').longClickable(true).className('android.widget.RelativeLayout'))
                        var bb = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed_item_img_ad').className('android.widget.RelativeLayout'))
                        var cc = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed__item_video').longClickable(true).className('android.widget.RelativeLayout'))
                        //如果找到了就是有广告，为空是不是广告 aa无效
                        if (xx === null && yy === null && zz === null && aa === null && bb === null && cc === null) {
                            child.click()
                            sleep(4000)
                            gbgg()
                            sleep(1000)
                            if (className('android.view.View').bounds(888, 735, 1053, 810).depth('15').text('查看全部').exists() && id('com.coohua.xinwenzhuan:id/comment_edit').exists()) {
                                if (id('com.coohua.xinwenzhuan:id/iv_play').exists() && id('com.coohua.xinwenzhuan:id/message').exists()) {
                                    click(540, 350)
                                    sleep(1000)
                                } else if (id('com.coohua.xinwenzhuan:id/status_btn').exists() && id('com.coohua.xinwenzhuan:id/message').exists()) {
                                    click(570, 1070)
                                    sleep(1000)
                                } else {
                                    TKB.xgsrizhi('观看视频(30-40S)')
                                    sleep(random(30000, 40000))
                                    gbgg()
                                    back()
                                    TKB.xgsrizhi('返回主页')
                                    sleep(2000)
                                }
                            } else if (className('android.view.View').depth('14').exists() && id('com.coohua.xinwenzhuan:id/xlxl_actionbar_more').exists()) {
                                TKB.xgsrizhi('浏览文章')
                                for (var ii = 0; ii < random(8, 12); ii++) {
                                    swipe(random(400, 500), random(1600, 1700), random(400, 500), random(550, 650), random(2000, 4000))
                                    if (desc('展开全文 ').exists() || id('viewFullBtn').exists()) {
                                        TKB.xgsrizhi('展开全文')
                                        desc('展开全文 ').click()
                                        sleep(1000)
                                    }
                                    if (text('展开全文 ').exists()) {
                                        TKB.xgsrizhi('展开全文1')
                                        click('展开全文')
                                        sleep(1000)
                                    }
                                    gbgg()
                                    sleep(random(1000, 2000))
                                }
                                back()
                                TKB.xgsrizhi('返回主页')
                                sleep(2000)
                            }
                            sleep(2000)
                            i++
                        } else {
                            swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(2000, 3000))
                            sleep(random(2000, 3000))
                            TKB.xgsrizhi('此页有广告')
                            i++
                        }
                    })
                }
                if (text('上次您看到这里  点击刷新').exists()) {
                    TKB.xgsrizhi('点击刷新')
                    i = 0
                    click('上次您看到这里  点击刷新')
                    sleep(3000)
                }
                gbgg()
                if (i > random(5, 8)) {
                    i = 0
                    TKB.xgsrizhi('点击新闻刷新')
                    click('新闻')
                    sleep(random(100, 300))
                    click('新闻')
                    sleep(3000)
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
//淘新闻养号 
function txwyh() {
    TKB.xgsrizhi("淘新闻养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.coohua.xinwenzhuan")
    var RT = (new Date()).getTime()
    var stt = random(100, 200)
    var TSD = (new Date()).getTime()
    var sj = (new Date()).getTime() //视频总观看时长
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.coohua.xinwenzhuan")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        gbgg()
        sleep(1000)
        if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
            TKB.xgsrizhi('小视频')
            click('小视频')
            sleep(3000)
        }
        if (id("com.coohua.xinwenzhuan:id/mini_video_detail_thumb_up").exists() && id("com.coohua.xinwenzhuan:id/mini_video_detail_comment").exists()) {
            TKB.xgsrizhi("小视频页面")
            sleep(1000)
            if (id('com.coohua.xinwenzhuan:id/message').exists()) {
                click(570, 1070)
                sleep(1000)
            }
            if (tem == 0) {
                click(540, 1960)
                sleep(500)
                tem = 1
            } else {
                try {
                    TSD = (new Date()).getTime()
                    var zbt = random(25, 35)
                    TR = (new Date()).getTime()
                    while (1) {
                        if ((new Date()).getTime() - TR > zbt * 1000) {
                            toastLog("观看视频时间到了")
                            break
                        } else {
                            toastLog("观看视频中...")
                            sleep(3000)
                        }
                    }
                    gbgg()
                    if (id('com.coohua.xinwenzhuan:id/status_btn').exists() && id('com.coohua.xinwenzhuan:id/message').exists()) {
                        TKB.xgsrizhi("流量点击观看")
                        click(570, 1070)
                        sleep(1000)
                    }

                    var zbt = random(1, 50)
                    if (zbt == 40) {
                        TKB.xgsrizhi("点赞")
                        click(940, 1125)
                        sleep(1000)
                    }
                    swipe(533, 1660, 557, 300, random(400, 600))
                    sleep(random(2000, 5000))
                    if (id('com.coohua.xinwenzhuan:id/ad_video_tv_status').text('立即下载').exists() && id('com.coohua.xinwenzhuan:id/ad_video_tv_left').exists() || id('com.coohua.xinwenzhuan:id/ad_video_tv_status').text('开始安装').exists()) {
                        TKB.xgsrizhi('划过广告')
                        swipe(533, 1660, 557, 300, random(400, 600))
                        sleep(random(2000, 5000))
                    }
                    if (id('com.coohua.xinwenzhuan:id/popup_ad_close').exists()) {
                        TKB.xgsrizhi('关闭小广告')
                        id('com.coohua.xinwenzhuan:id/popup_ad_close').click()
                        sleep(1000)
                    }
                    if ((new Date()).getTime() - sj > random(50, 70) * 60 * 1000) {
                        toastLog("观看视频总时间到了")
                        gbgg()
                        txwswz()
                    }
                } catch (error) {
                    sleep(1001);
                    TKB.xgsrizhi(error);
                }
            }
        }
    }
}




//*******************************************************对接服务器*****************************************************************


function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwu = TKB.huoqurenwu(sbip, yhname, yhbh, xmxh)
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        renwu = false
                    }
                    if (renwu == true) {
                        TKB.xgsrizhi("继续淘新闻任务")
                    } else {
                        TKB.xgsrizhi("服务器上没有淘新闻任务")
                        TKB.qinglihh("com.coohua.xinwenzhuan")
                        sleep(2000)
                        TKB.xgsrizhi("执行完存停止数据2")
                        TKB.cunqusj("jiaoben", "tingzhi")
                        java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        _THREADSS.interrupt()
                    }
                    if (files.exists("/sdcard/观沧海.mp3") == false) {
                        TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}


//*******************************************************对接服务器*****************************************************************

function hszhixing() {
    try {
        bofangyy()
        TKB.xgsrizhi("执行淘新闻")
        _THREADSSxx = threads.start(function () {
            var baom = getPackageName("淘新闻")
            if (baom == null) {
                TKB.xgsrizhi("未安装淘新闻")
                var bbd = TKB.wdjxiazai('淘新闻', 'v4.4.5.1')
                if (bbd == false) {
                    TKB.xgsrizhi("安装淘新闻不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var wb = txwdenglu()
            sleep(2000)
            if (wb == true) {
                txwyh()
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            TKB.cunqusj("jiaoben", "tingzhi")
            sleep(1000)
            java.lang.System.exit(0);
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        log(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}
hszhixing()