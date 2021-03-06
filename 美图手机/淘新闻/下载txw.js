var TKB = require('/sdcard/tkb2.js')

//豌豆荚下载应用
function wdjxiazai(name, banebn) {
    log("豌豆荚下载应用" + name) //豌豆荚
    var waddj = getPackageName("豌豆荚")
    if (waddj == null) {
        var lujing = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/wandoujia.apk"
        log("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(5000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    while (1) {
        if (text("完成").exists() && text("打开").exists()) {
            log("完成")
            click("完成")
            back()
            sleep(500)
            back()
            sleep(1000)
            return true
        }
        var bmname = getPackageName(name)
        if (bmname != null) {
            toastLog("已经安装了该应用：" + bmname)
            sleep(2000)
            toastLog("版本号：" + getVerName(name))
            back()
            sleep(500)
            home()
            sleep(1000)
            return true
        }

        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log("时间够了退出")
            qinglihh("com.wandoujia.phoenix2")
            return false
        }
        if ((new Date()).getTime() - TSD > 6 * 60 * 1000) {
            log("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.wandoujia.phoenix2")
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if (text("跳过").exists()) {
            log("跳过")
            click("跳过")
            sleep(2000)
        }
        if (text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()) {
            log("首页点搜索")
            click(860, 160)
            sleep(2000)
        }
        if (id("com.wandoujia.phoenix2:id/a08").exists() && id("com.wandoujia.phoenix2:id/hl").exists() || id("com.wandoujia.phoenix2:id/c4").exists() && id("com.wandoujia.phoenix2:id/a7h").exists()) {
            log("搜索界面输入")
            setText(name)
            sleep(1000)
            click(1000, 160)
            sleep(2000)
        }

        if (text("立即安装").exists() && text("取消").exists()) {
            log("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if (text("提示").exists() && text("确定").exists() && text("取消").exists()) {
            log("提示")
            click("确定")
            sleep(2000)
        }

        if (text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists()) {
            log("搜索结果页面")
            sleep(1000)
            if (id("com.wandoujia.phoenix2:id/f0").exists()) {
                log("看到搜索结果")
                click(500, 360)
                sleep(4000)
            } else {
                log("没有搜索结果")
                setText(name)
                sleep(1000)
                click(1000, 160)
                sleep(4000)
            }
        }

        if (text("评价").exists() && id("com.wandoujia.phoenix2:id/b11").exists() || text("评价").exists() && id("com.wandoujia.phoenix2:id/zz").exists() || text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/ej").exists()) {
            log("搜索结果页面")
            if (text("历史版本").exists() && text("系统权限").exists()) {
                log("看到历史版本")
                // click("看到历史版本")
                // sleep(4000)
                var ss = text("历史版本").findOnce().bounds();
                log(ss.centerX())
                log(ss.centerY())
                if (ss.centerY() < 1880) {
                    click(ss.centerX(), ss.centerY());
                    sleep(3000)
                } else {
                    log("下滑2")
                    swipe(557, 1600, 533, 400, random(400, 1000))
                    sleep(1000)
                }
            } else {
                log("下滑")
                swipe(557, 1600, 533, 400, random(400, 1000))
                sleep(1000)
            }
        }

        if (text("历史版本").exists() && id("com.wandoujia.phoenix2:id/ano").exists() || id("com.wandoujia.phoenix2:id/g4").exists() && id("com.wandoujia.phoenix2:id/hr").exists() || text("历史版本").exists() && id("com.wandoujia.phoenix2:id/hr").exists()) {
            log("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()) {
                try {
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称：" + cc)
                    if (cc.indexOf(name) != -1) {
                        var ss = TKB.getAllTexts()
                        log(ss)
                        var cd = 0
                        for (j = 0, len = ss.length; j < len; j++) {
                            log("获取的值：" + ss[j])
                            if (ss[j].indexOf(banebn) != -1) {
                                log("找到该版本了" + ss[j])
                                cd = 1
                                var bb = text(ss[j]).findOnce().bounds();
                                log(bb.centerX())
                                log(bb.centerY())
                                if (bb.centerY() < 2030) {
                                    click(920, bb.centerY() - 53);
                                    sleep(10000)
                                } else {
                                    log("微调")
                                    swipe(557, 1500, 533, 800, random(400, 1000))
                                    sleep(1000)
                                }
                            }
                        }
                        if (cd == 0) {
                            log("没找到该版本")
                            swipe(557, 1600, 533, 500, random(400, 1000))
                            sleep(1000)
                        }
                        sleep(1500)
                    } else {
                        log("搜到的不是该应用")
                        back()
                        sleep(2000)
                        back()
                        sleep(3000)
                        back()
                        sleep(3000)
                    }
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                if (id("com.wandoujia.phoenix2:id/ano").exists()) {
                    try {
                        var cc = id("com.wandoujia.phoenix2:id/ano").findOnce().text()
                        log("应用名称2：" + cc)
                        if (cc.indexOf(name) != -1) {
                            var ss = getAllTexts()
                            log(ss)
                            var cd = 0
                            for (j = 0, len = ss.length; j < len; j++) {
                                log("获取的值2：" + ss[j])
                                if (ss[j].indexOf(banebn) != -1) {
                                    log("找到该版本了2" + ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030) {
                                        click(920, bb.centerY() - 53);
                                        sleep(10000)
                                    } else {
                                        log("微调2")
                                        swipe(557, 1500, 533, 800, random(400, 1000))
                                        sleep(1000)
                                    }
                                }
                            }
                            if (cd == 0) {
                                log("没找到该版本2")
                                swipe(557, 1600, 533, 500, random(400, 1000))
                                sleep(1000)
                            }
                            sleep(1500)
                        } else {
                            log("搜到的不是该应用2")
                            back()
                            sleep(2000)
                            back()
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                }
            }
        }

        if (text("设置").exists() && text("取消").exists()) {
            log("设置")
            click("设置")
            sleep(2000)
        }
        if (text("点击继续").exists() && text("稍后下载").exists()) {
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if (text("选好了，安装").exists()) {
            log("选好了，安装")
            click(80, 160)
            sleep(2000)
        }
        if (id("com.wandoujia.phoenix2:id/a7s").exists()) {
            log("选好了，安装2")
            var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
            log(bb.centerX())
            log(bb.centerY())
            click(bb.centerX(), bb.centerY());
            sleep(2000)
        }
        if (text("继续安装").exists() && text("取消").exists()) {
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if (text("下一步").exists() && text("取消").exists()) {
            log("下一步")
            click("下一步")
            sleep(2000)
        }
        if (text("安装未知应用").exists() && id("android:id/switch_widget").exists()) {
            log("安装未知应用")
            try {
                var ss = id("android:id/switch_widget").findOnce().checked();
                if (ss == false) {
                    var css = id("android:id/switch_widget").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                    back()
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("安装").exists() && text("取消").exists()) {
            log("安装")
            click("安装")
            sleep(15000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click("取消")
            sleep(1000)
        }
    }
}
// wdjxiazai('淘新闻', 'v4.4.5.1')
//淘新闻登录
function txwdenglu() {
    log('趣头条登录')
    launch("com.coohua.xinwenzhuan")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    var tem = 0
    var cs = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log('时间够了退出')
            TKB.qinglihh()
            if (tem == 1) {
                return true
            }
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.coohua.xinwenzhuan")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text('拒绝').exists() && text('允许').exists()) {
            log('定位')
            if (id('com.meitu.security:id/checkbox').checked(true).exists()) {
                click('拒绝')
            } else if (id('com.meitu.security:id/checkbox').checked(false).exists()) {
                id('com.meitu.security:id/checkbox').click()
                sleep(500)
                click('拒绝')
            }
            sleep(2000)
        }
        if (id('com.coohua.xinwenzhuan:id/wechat_login').exists() && text('微信登录领取18元红包').exists() && text('手机号登录').exists()) {
            log('个人隐私保护指引')
            id('com.coohua.xinwenzhuan:id/wechat_login').click()
            sleep(2000)
        }
        if (id('com.coohua.xinwenzhuan:id/wechat_login').exists() && text('其他方式登录').exists() && text('手机号登录').exists()) {
            log('个人隐私保护指引')
            id('com.coohua.xinwenzhuan:id/wechat_login').click()
            sleep(2000)
        }
        if (text('申请使用').exists() && text('新建头像昵称').exists()) {
            log('微信登录')
            click('同意')
            sleep(2000)
        }
        if (text('您的帐号已在其他设备登录!').exists() && text('重新登录').exists()) {
            log('您的帐号已在其他设备登录')
            click('重新登录')
            sleep(2000)
        }
        if (text('1元现金').exists() && text('立即提现').exists()) {
            log('登录成功点击红包')
            click('立即提现')
            sleep(2000)
            back()
            sleep(500)
        }
        if (id('com.coohua.xinwenzhuan:id/xlxl_alert_img').exists() && id('com.coohua.xinwenzhuan:id/xlxl_alert_negative').exists()) {
            log('关闭宝箱')
            id('com.coohua.xinwenzhuan:id/xlxl_alert_negative').click()
            sleep(2000)
        }
        if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
            log('登录成功点击我的钱包')
            click('我的钱包')
            sleep(2000)
        }
    }
}
//淘新闻养号
function txwyh() {
    log("淘新闻养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.jifen.qukan")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    var TSD = (new Date()).getTime()
    var zbt = random(25, 50) //视频观看时长
    var tem = 0
    var i = 0
    var cishu = random(5, 7)
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 20 * 60 * 1000) {
            log("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.jifen.qukan")
            sleep(4000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        try {
            if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists() ) {
                log('任务大厅')
                click('任务大厅')
                sleep(2000)
                if (text('签到奖励领取成功').exists() && text('看视频得额外奖励').exists() && id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').exists()) {
                    log('关闭签到奖励领取成功')
                    id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
                    sleep(1000)
                }
                click('新闻')
                sleep(1000)
            }
            
            if (id('com.coohua.xinwenzhuan:id/xlxl_alert_img').exists() && id('com.coohua.xinwenzhuan:id/xlxl_alert_negative').exists()) {
                log('关闭签到奖励领取成功')
                id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
                sleep(2000)
            }
            if (text('关注').exists() && text('推荐').exists() && text('视频').exists()) {
                if (text('广告').exists()) {
                    swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(500, 2000))
                    sleep(random(500, 2000))
                    i++
                } else {
                    var am = className('android.widget.RelativeLayout').depth('12').find()
                    am.forEach(child => {
                        child.click()
                        sleep(2000)
                        if (className('android.widget.FrameLayout').id('com.jifen.qukan:id/tx').exists() && className('android.view.ViewGroup').id('com.jifen.qukan:id/fu').exists()) {
                            log('观看视频(30-35S)')
                            sleep(random(30000, 50000))
                            if (id('com.jifen.qukan:id/aww').exists()) {
                                var x = id('com.jifen.qukan:id/aww').findOne().bounds()
                                click(x.centerX(), x.centerY());
                                sleep(2000)
                            }
                            if (text('恭喜获得').exists() && text('看视频再领20金币').exists()) {
                                log('获得阅读奖励')
                                id('com.jifen.qukan:id/vh').click()
                                sleep(1000)
                            }
                            sleep(2000)
                            if (text('阅读收益').exists()) {
                                back()
                                sleep(1000)
                            }
                            back()
                        } else if (className('android.view.ViewGroup').id('com.jifen.qukan:id/fu').exists()) {
                            log('浏览文章')
                            for (var ii = 0; ii < cishu; ii++) {
                                swipe(random(200, 300), random(1600, 1700), random(200, 300), random(1100, 1300), random(500, 2000))
                                sleep(random(2000, 3000))
                                if (id('com.jifen.qukan:id/aww').exists()) {
                                    var x = id('com.jifen.qukan:id/aww').findOne().bounds()
                                    click(x.centerX(), x.centerY());
                                    sleep(2000)
                                }
                                if (text('恭喜获得').exists() && text('看视频再领20金币').exists()) {
                                    log('获得阅读奖励')
                                    id('com.jifen.qukan:id/vh').click()
                                    sleep(1000)
                                }
                                if (text('阅读收益').exists()) {
                                    back()
                                    sleep(1000)
                                }
                            }
                            back()
                        }
                        sleep(2000)
                        swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(500, 2000))
                        sleep(random(500, 2000))
                        i++
                    })
                }
                if (i > random(10, 15)) {
                    i = 0
                    click('刷新')
                    sleep(random(100, 300))
                    click('刷新')
                    sleep(3000)
                }
            }
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

