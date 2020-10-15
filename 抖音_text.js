log("tKB")
auto.waitFor()
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')


//******************************************************************抖音项目*****************************************************************

function zonghe() {
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

//抖音注册
function dyzc() {
    TKB.xgsrizhi("抖音注册")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssr = (new Date()).getTime()
    var zh = ""
    var yzm = ""
    var num = 5
    var is_verify = 3
    var dinz = random(20, 50) //观看视频时长
    var TTguank = (new Date()).getTime() //看视频的时间
    var dij = 0 //点赞登录的次数
    var bb = 0
    var tem = 0
    var fs = 0 //判断发送短信
    while (1) {
        if ((new Date()).getTime() - RT > 25 * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没注册成功")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (bb == 1 && tem == 0) {
            TKB.xgsrizhi("去获取号码")
            zh = TKB.benjitel()
            tem = 1
        }
        if (text("本机号码一键登录").exists()) {
            TKB.xgsrizhi("本机号码一键登录")
            if (id("com.ss.android.ugc.aweme:id/dxj").exists()) {
                TKB.xgsrizhi("同意阅读")
                try {
                    var node = id("com.ss.android.ugc.aweme:id/dxj").findOnce().checked()
                    if (node == false) {
                        node = id("com.ss.android.ugc.aweme:id/dxj").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(1200)
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
            click("本机号码一键登录")
            sleep(4000)
        } else {
            if (text("一键登录").exists()) {
                TKB.xgsrizhi("一键登录")
                click("一键登录")
                sleep(4000)
            } else {
                if (text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()) {
                    TKB.xgsrizhi("还未登录账号--先去登录")
                    if (bb == 0) {
                        log("先去获取号码")
                        bb = 1
                    } else {
                        if (zh == false) {
                            TKB.xgsrizhi("没有获取到手机号")
                            return false
                        }
                        TKB.xgsrizhi("输入账号" + zh)
                        setText(zh)
                        sleep(2000)
                        click(500, 860)
                        sleep(5000)
                    }
                }
            }
        }
        if (text("本机号码一键登录").exists()) {
            TKB.xgsrizhi("本机号码一键登录2")
            click(200, 1020)
            sleep(1000)
            click(500, 730)
            sleep(5000)
        }
        if (text("登录验证").exists() && text("快速编辑").exists() || text("快速编辑").exists() && text("编辑短信").exists()) {
            TKB.xgsrizhi("登录短信验证")
            if (fs == 0) {
                click("快速编辑")
                sleep(10000)
            } else {
                click("我已完成短信发送")
                sleep(4000)
                num--
            }
        }
        if (num <= 0) {
            TKB.xgsrizhi("短信发送次数过多")
            TKB.qinglihh()
            return false
        }
        if (text("发送").exists() && id("com.android.mms:id/gn_ic_back_button").exists() || text("发送").exists() && id("com.android.mms:id/pick_contacts_area").exists()) {
            TKB.xgsrizhi("发送短信")
            click(930, 1830)
            sleep(400)
            click("发送")
            sleep(2000)
            back()
            sleep(2000)
            fs = 1
        }

        if (text("请输入验证码").exists() && bb == 1) {
            TKB.xgsrizhi("输入验证码界面")
            if (text('重新发送').exists()) {
                TKB.xgsrizhi("重新发送")
                click('重新发送')
                sleep(random(10000, 15000))
            }
            yzm = TKB.huoquyzm("抖音")
            sleep(2000)
            if (yzm == false) {
                is_verify--
                back()
                sleep(100)
                back()
                sleep(2000)
            } else {
                TKB.xgsrizhi("输入验证码" + yzm)
                setText(yzm)
                sleep(1000)
                click(500, 860)
                sleep(5000)
            }
        }
        if (is_verify <= 0) {
            TKB.xgsrizhi("获取验证码次数过多")
            TKB.qinglihh()
            return false
        }
        if (text("绑定手机号").exists()) {
            TKB.xgsrizhi("绑定手机号")
            back()
            sleep(2000)
        }
        if (textContains("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() || text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            shipinsc()
            tuichuzh()
            return true
        } else {
            if ((text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                TKB.xgsrizhi("首页")
                if ((new Date()).getTime() - ssr > 15 * 60 * 1000) {
                    TKB.xgsrizhi("时间到了去注册")
                    if (dij < 4) {
                        click(980, 900) //点击点赞
                        sleep(2000)
                        dij = dij + 1
                    } else {
                        TKB.xgsrizhi("点击我的")
                        click(1020, 1890)
                        sleep(2000)
                    }
                } else {
                    TKB.xgsrizhi("先看视频")
                    toastLog("先看视频")
                    sleep(1000)
                    if ((new Date()).getTime() - TTguank > dinz * 1000) {
                        toastLog(dinz + "秒，滑动")
                        swipe(500, 1600, 600, 400, 1200);
                        sleep(1000);
                        dinz = random(20, 50)
                        TTguank = (new Date()).getTime()
                    } else {
                        toastLog("观看视频")
                        sleep(3000)
                    }
                    TSD = (new Date()).getTime()
                }
            }
        }
        if (text("下线提醒").exists() && text("好").exists()) {
            TKB.xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
        }
        if (text("返回").exists() && text("继续等待").exists()) {
            TKB.xgsrizhi("继续等待")
            click("返回")
            sleep(500)
            back()
            sleep(2000)
        }
        sleep(500)
        zonghe()
    }
}


//新养号
function dyxyh() {
    TKB.xgsrizhi("抖音新养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime() //看直播的时间
    var stt = random(60, 120)
    var TTguank = (new Date()).getTime()
    var dinz = random(20, 50)
    var zbt = random(20, 30) //视频观看时长
    var gzx = 0
    var dzx = 0
    var gjc = ''
    var a = 0
    var pp = 0
    var ssx = random(1, 3)
    var xs = TKB.zhid(sbip, run_id)
    var gz = xs['关注百分比']
    var dz = xs['点赞百分比']
    // var gz = 0
    // var dz = 0
    if (gz == 0 || gz == '0') {
        gzx = 10
        TKB.xgsrizhi('关注百分比是' + gzx)
    } else {
        TKB.xgsrizhi('关注百分比是' + gz)
        gzx = gz
    }
    if (dz == 0 || dz == '0') {
        dzx = 30
        TKB.xgsrizhi('点赞百分比' + dzx)
    } else {
        TKB.xgsrizhi('点赞百分比' + dz)
        dzx = dz
    }
    var gjc = xs['关键词']
    var ss = gjc.split("|")
    TKB.xgsrizhi('关键词' + ss)
    sleep(3000)
    var dj = random(1, 100)
    var ll = 0 //直播
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
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
            tem = 0
        }
        if (a == 0) {
            zonghe()
            if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                TKB.xgsrizhi("首页")
                TSD = (new Date()).getTime()
                if (!text("推荐").exists()) {
                    TKB.xgsrizhi("点首页")
                    click("首页")
                    sleep(300)
                    click(100, 1830)
                    sleep(2000)
                } else {
                    while (1) {
                        zonghe()
                        if (tem == 0) {
                            TKB.xgsrizhi("推荐")
                            click("推荐")
                            sleep(random(3, 4) * 1000);
                            swipe(500, 1600, 600, 400, 1200);
                            tem = 1
                        } else {
                            if ((new Date()).getTime() - ssd > 30 * 60 * 1000 && ll < 5) {
                                TKB.xgsrizhi("去看直播")
                                click(330, 1830)
                                sleep(2000)
                                a = 1
                                ll = ll + 1
                                break
                            } else {
                                try {
                                    var y = 0
                                    var nr = ''
                                    if (id('com.ss.android.ugc.aweme:id/a91').exists()) {
                                        comment = id('com.ss.android.ugc.aweme:id/a91').find()
                                        comment.forEach(item => {
                                            var b = item.text();
                                            y++
                                            if (Number(y) == 2) {
                                                nr = b
                                                TKB.xgsrizhi(nr)
                                                for (var o = 0; o < ss.length; o++) {
                                                    if (nr.indexOf("#" + ss[o]) != -1) {
                                                        TKB.xgsrizhi('有此关键词')
                                                        pp = 1
                                                        break
                                                    }
                                                }
                                                nr = ''
                                            }
                                        })
                                    }
                                    if (text('点击进入直播间').exists() || text('直播中').exists()) {
                                        TKB.xgsrizhi('直播间，下滑')
                                        swipe(500, 1600, 600, 400, 1200);
                                    }
                                    if (pp != 1) {
                                        TKB.xgsrizhi('下滑')
                                        swipe(500, 1600, 600, 400, 1200);
                                    } else if (pp == 1) {
                                        TKB.xgsrizhi('符合条件')
                                        sleep(random(1, 2) * 1000);
                                        dinz = random(20, 50)
                                        dj = random(1, 100)
                                        // dzl = 0
                                        pp = 0
                                        var TTguank = (new Date()).getTime()
                                        while (1) {
                                            zonghe()
                                            if (text('点击进入直播间').exists() || text('直播中').exists()) {
                                                TKB.xgsrizhi('直播间下滑')
                                                swipe(500, 1600, 600, 400, 1000)
                                                sleep(random(1, 2) * 1000)
                                                dinz = random(20, 50)
                                            }
                                            if ((new Date()).getTime() - TTguank < dinz * 1000) {
                                                toastLog("观看视频")
                                                sleep(3000)
                                            } else if ((new Date()).getTime() - TTguank > dinz * 1000) {
                                                toastLog(dinz + "秒，滑动")
                                                dzl = 0
                                                if (id('com.ss.android.ugc.aweme:id/a9r').exists()) {
                                                    TKB.xgsrizhi("评论界面返回")
                                                    toastLog("评论界面返回")
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                }
                                                swipe(500, 1600, 600, 400, 1200);
                                                sleep(random(1, 2) * 1000);
                                                dinz = random(20, 50)
                                                dj = 101
                                                break
                                            } else {
                                                if (dj < dzx) {
                                                    TKB.xgsrizhi("点赞")
                                                    click(1000, 900)
                                                    sleep(1000)
                                                    swipe(500, 1600, 600, 400, 1200);
                                                    dinz = random(20, 50)
                                                    dj = 101
                                                    break
                                                } else {
                                                    if (dj < 5) {
                                                        TKB.xgsrizhi("浏览评论")
                                                        click(980, 1110)
                                                        sleep(2000)
                                                        var sb = random(1, 5)
                                                        if (sb == 1) {
                                                            sleep(1000)
                                                            TKB.xgsrizhi("评论")
                                                            click(150, 1870)
                                                            sleep(2000)
                                                            setText("[" + bq[random(1, bq.length)] + "]")
                                                            sleep(1000)
                                                            if (id("com.ss.android.ugc.aweme:id/a__").exists()) {
                                                                var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
                                                                TKB.xgsrizhi(ss)
                                                                click(ss.centerX(), ss.centerY());
                                                                sleep(2000)
                                                            }
                                                            back()
                                                            sleep(3000)
                                                        } else {
                                                            for (j = 0, len = sb; j < len; j++) {
                                                                swipe(500, 1600, 600, 400, 1200)
                                                                sleep(random(1000, 3000))
                                                            }
                                                        }
                                                        zonghe()
                                                        back()
                                                        sleep(2000)
                                                        dj = 101
                                                    } else {
                                                        if (dj < gzx) {
                                                            if (id('com.ss.android.ugc.aweme:id/bku').exists() && id('com.ss.android.ugc.aweme:id/bku').exists()) {
                                                                TKB.xgsrizhi("关注")
                                                                click(990, 630)
                                                                sleep(1000)
                                                            } else {
                                                                TKB.xgsrizhi("关注1")
                                                                click(990, 750)
                                                                sleep(1000)
                                                            }
                                                            dj = 101
                                                            break
                                                        } else {
                                                            toastLog("观看视频")
                                                            sleep(3000)
                                                            TSD = (new Date()).getTime()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                } catch (error) {
                                    toastLog("error")
                                    sleep(1000)
                                }
                            }
                        }
                    }
                }
            }
        }
        if (text("直播广场").exists()) {
            TKB.xgsrizhi("直播广场")
            back()
            sleep(3000)
        }
        if (a == 1) {
            zonghe()
            if (text("同城").exists() || id("com.ss.android.ugc.aweme:id/dae").exists()) {
                toastLog("同城界面")
                TKB.xgsrizhi("同城界面")
                click(100, 1800)
                sleep(2000)
            }
            if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                TKB.xgsrizhi("首页")
                click(100, 130)
                sleep(2000)
            }
            if (id("com.ss.android.ugc.aweme:id/xj").exists() || text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()) {
                TKB.xgsrizhi("留下你的精彩评论吧")
                // var neir ="["+bq[random(0,bq.length - 1)]+"]"+"["+bq[random(0,bq.length - 1)]+"]"
                // setText(neir)
                back()
                sleep(3000)
            }
            if (id("com.ss.android.ugc.aweme:id/a__").exists() && id("com.ss.android.ugc.aweme:id/c3l").exists() || text("留下你的精彩评论吧").exists() || desc("留下你的精彩评论吧").exists()) {
                TKB.xgsrizhi("评论界面")
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
                    TKB.xgsrizhi("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText("[" + bq[random(0, bq.length - 1)] + "]")
                    sleep(1000)
                    if (id("com.ss.android.ugc.aweme:id/es6").exists()) {
                        try {
                            var ss = id("com.ss.android.ugc.aweme:id/es6").findOnce().bounds();
                            TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            TKB.xgsrizhi(error);
                        }
                    }
                    back()
                    sleep(2000)
                }
                if ((new Date()).getTime() - ssd < dinz * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.xgsrizhi("观看直播中")
                    sleep(3000)
                } else {
                    toastLog("观看直播结束")
                    back()
                    sleep(3000)
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
                TKB.xgsrizhi("搜索界面")
                back()
                sleep(3000)
            }
            if (text("下线提醒").exists() && text("好").exists()) {
                TKB.xgsrizhi("下线提醒")
                click("好")
                sleep(2000)
                return false
            }
            if (id("com.ss.android.ugc.aweme:id/dl4").exists() && id("com.ss.android.ugc.aweme:id/es6").exists()) {
                TKB.xgsrizhi("直播评论界面")
                back()
                sleep(3000)
            }
        }
        zonghe()
    }
}


//改资料
function gaizl() {
    TKB.xgsrizhi("改资料")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var name_result = false
    var img_result = false
    var jj_result = false
    var name_return = '抖音昵称不符合'
    var img_return = '抖音头像不符合'
    var jj_return = '抖音简介不符合'
    var status = 0
    var x = 'zzzzzz'
    var tep = 0 //判断编辑资料界面该干啥
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        toastLog('素材获取错误')
        TKB.xgsrizhi("素材获取错误")
        return false
    } else {
        var nickname = zz['nickname']
        var img = zz['img']
        var jianjie = zz['jianjie']
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    var name = nickname
    var jianjie = jianjie
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
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
        zonghe()
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.xgsrizhi("首页")
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists()) {
                TKB.xgsrizhi("编辑资料")
                click("编辑资料")
                sleep(2000)
            } else {
                var ss = TKB.getAllTexts()
                for (var i = 0; i < ss.length; i++) {
                    if (ss[i].indexOf("编辑资料") != -1) {
                        click(ss[i])
                        sleep(1000)
                        break
                    }
                }
            }
        }
        if (text("名字").exists() && text("抖音号").exists() || text("编辑资料").exists() && text("抖音号").exists() || text("编辑个人资料").exists() && text("名字").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                if (xs['是否修改名字'] == '是') {
                    // TKB.xgsrizhi("修改名字")
                    if (text(name).exists() && text('名字').exists()) {
                        TKB.xgsrizhi("已经是该名字了,名字修改完成")
                        toastLog("名字修改完成")
                        sleep(2000)
                        tep = 1
                        name_result = true
                        name_return = '抖音昵称符合'
                    } else {
                        click('名字')
                        sleep(2000)
                    }
                    if (text('修改名字').exists() && text('保存').exists()) {
                        setText(name)
                        sleep(500)
                        click("保存")
                        sleep(1000)
                    }
                } else {
                    tep = 1
                    TKB.xgsrizhi("昵称不修改")
                    name_return = '抖音昵称不修改'
                }
            }
            if (tep == 1) {
                if (xs['是否修改简介'] == '是') {
                    // TKB.xgsrizhi("修改简介")
                    if (text(jianjie).exists() && text('名字').exists()) {
                        TKB.xgsrizhi("已经是该简介了,简介修改完成")
                        toastLog("简介修改完成")
                        jj_return = '抖音简介符合'
                        jj_result = true
                        tep = 2
                    } else {
                        click('简介')
                        sleep(2000)
                    }
                    if (text('修改简介').exists() && text('保存').exists()) {
                        TKB.xgsrizhi("修改简介")
                        setText(jianjie)
                        sleep(500)
                        click("保存")
                        sleep(1000)
                    }
                } else {
                    tep = 2
                    TKB.xgsrizhi("简介不修改")
                    jj_return = '抖音简介不修改'
                }
            } else if (tep == 2) {
                if (xs['是否修改性别'] == '是') {
                    if (xs['性别'] == '男' || xs['性别'] == '女') {
                        if (text(xs['性别']).exists() && text("性别").exists()) {
                            toastLog("性别修改完成")
                            tep = 3
                        } else {
                            click('性别')
                            sleep(2000)
                            if (text("男").exists() && text("女").exists()) {
                                TKB.xgsrizhi("修改性别")
                                click(xs['性别'])
                                sleep(1000)
                                toastLog("性别修改完成")
                                tep = 3
                            }
                        }
                    }
                } else {
                    tep = 3
                    TKB.xgsrizhi("性别不修改")
                }
            } else if (tep == 3) {
                if (xs['是否修改头像'] == '是') {
                    TKB.xgsrizhi("更改头像")
                    click(540, 440)
                    sleep(500)
                    click("点击更换头像")
                    sleep(1500)
                    if (text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()) {
                        TKB.xgsrizhi("相册选择")
                        click("相册选择")
                        sleep(2000)
                    }
                    if (text("从相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("从相册选择").exists()) {
                        TKB.xgsrizhi("从相册选择")
                        click("从相册选择")
                        sleep(3000)
                    }
                    if (text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.ss.android.ugc.aweme:id/e9r").exists()) {
                        TKB.xgsrizhi("选择照片")
                        click(270, 320) //选择第一张
                        sleep(1000)
                        if (text("图片太小").exists() && text("知道了").exists()) {
                            TKB.xgsrizhi("图片太小")
                            toastLog('图片太小')
                            back()
                            sleep(500)
                            back()
                            sleep(2000)
                            tep = 4
                            img_result = false
                            img_return = '抖音头像不符合'
                        } else {
                            click(950, 1820) //确定
                            sleep(2000)
                        }
                    }
                    if (text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()) {
                        TKB.xgsrizhi("裁剪")
                        click(960, 1710) //确定
                        sleep(400)
                        click("完成")
                        sleep(1000)
                        toastLog("头像修改完成")
                        img_result = true
                        img_return = '抖音头像符合'
                        tep = 4
                    }
                } else {
                    tep = 4
                    TKB.xgsrizhi("头像不修改")
                    img_return = '抖音头像不修改'
                }
            } else if (tep == 4) {
                if (!bounds(792, 1435, 972, 1495).exists()) {
                    TKB.xgsrizhi('生日设置完成')
                    toastLog('生日设置完成')
                    tep = 5
                } else {
                    if (text('生日').exists() && text('点击设置').exists()) {
                        TKB.xgsrizhi('设置生日')
                        click('生日')
                        sleep(2000)
                    }
                    if (text('不展示 ON').exists()) {
                        click('不展示 ON')
                        sleep(1000)
                    } else if (text('不展示 OFF').exists() && text('确定').exists()) {
                        TKB.xgsrizhi('年')
                        for (var i = 0; i < random(0, 10); i++) {
                            swipe(215, 1635, 215, 1815, 800)
                            sleep(500)
                        }
                        TKB.xgsrizhi('月')
                        for (var i = 0; i < random(0, 11); i++) {
                            swipe(515, 1815, 515, 1635, 800)
                            sleep(500)
                        }
                        TKB.xgsrizhi('日')
                        for (var i = 0; i < random(0, 30); i++) {
                            swipe(815, 1815, 815, 1635, 800)
                            sleep(500)
                        }
                        sleep(3000)
                        click('确定')
                        sleep(1000)
                    }
                }
            } else if (tep == 5) {
                while (1) {
                    try {
                        var y = 0
                        if (!text('地区').exists() && !text('名字').exists()) {
                            var z = id('com.ss.android.ugc.aweme:id/gft').find()
                            for (var i = 0; i < z.length; i++) {
                                if (random(0, 6) == 5) {
                                    if (z[i].text() != '暂不设置') {
                                        click(z[i].text())
                                        x = z[i].text()
                                        sleep(3000)
                                        y = 1
                                        break
                                    }
                                }
                            }
                            if (y == 0) {
                                swipe(500, 1800, 500, 500, 800)
                                sleep(3000)
                            }
                        }
                        if (text('地区').exists() && text('名字').exists()) {
                            var xx = TKB.getAllTexts()
                            if (xx.indexOf(x) != -1 || textContains(x).findOnce()) {
                                toastLog('地区设置成功')
                                TKB.xgsrizhi('地区设置成功')
                                tep = 6
                                break
                            } else {
                                TKB.xgsrizhi('点击地区')
                                click('地区')
                                sleep(2000)
                            }
                        }
                    } catch (error) {
                        toastLog('error')
                        sleep(1000)
                    }
                }
            } else if (tep == 6) {
                if (name_result == true && img_result == true && jj_result == true) {
                    status = 1
                } else {
                    status = 2
                }
                info = name_return + ',' + img_return + ',' + jj_return
                TKB.xgsrizhi(info)
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                toastLog("执行完了退出")
                back()
                sleep(2000)
                return true
            }
        }
        zonghe()
    }
}




//******************************************************************抖音项目*****************************************************************

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
            dowmp3()
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
                        TKB.xgsrizhi("继续抖音任务")
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
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************


//执行美图项目
function dyzhixing() {
    try {
        toastLog("执行抖音任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var bb = TKB.getVerName("抖音短视频")
            if (bb != "11.0.0" && bb != false) {
                TKB.xgsrizhi("抖音的版本不对")
                TKB.xiezai("com.ss.android.ugc.aweme")
            }
            var baom = getPackageName("抖音短视频")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("抖音短视频", "11.0.0")
                if (bbd == false) {
                    TKB.xgsrizhi("没安装成功抖音")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = dyzc()
            if (dl == true) {
                if (fun == "修改资料") {
                    gaizl()
                } else if (fun == "新养号") {
                    dyxyh()
                }
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



// dyzhixing()
