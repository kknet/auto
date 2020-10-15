﻿log("tKB")
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
var dqbaoming = "com.ss.android.ugc.aweme" //该项目包名
var xmxh = "1" //项目序号 版本11.0.0


//******************************************************************抖音项目*****************************************************************
function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            TKB.xgsrizhi("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.xgsrizhi(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            TKB.xgsrizhi("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.xgsrizhi(xx + "," + yy)
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
        TKB.xgsrizhi("添加头像")
        back()
        sleep(1000)
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
    if (text("五星好评").exists() && text("取消").exists()) {
        TKB.xgsrizhi("五星好评")
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
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (desc("以后再说").exists()) {
        TKB.xgsrizhi("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (text("继续观看").exists()) {
        TKB.xgsrizhi("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (desc("继续观看").exists()) {
        TKB.xgsrizhi("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
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
            TKB.xgzhzt(sbip, user_id, yhbh, app_id, "注册失败", "2")
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
                            TKB.xgzhzt(sbip, user_id, yhbh, app_id, "注册失败", "2")
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
                is_verify--
                sleep(random(10000, 15000))
            }
            yzm = TKB.huoquyzm("抖音")
            sleep(2000)
            if (yzm == false) {
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

//抖音登录上传信息
function dydl() {
    TKB.xgsrizhi("抖音登录")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var dyzh = "0" //抖音账号
    var djsl = "0" //点赞数量
    var dygz = "0" //关注数量
    var dyfs = "0" //粉丝数量
    var dyqm = "0" //抖音签名
    var dybf = "0" //播放数量
    var dync = "0" //抖音昵称
    var dyxb = "0" //抖音性别
    var dyhy = "0" //好友数量
    var dyhz = "0" //抖音获赞
    var zpsl = "0" //作品数量
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.ss.android.ugc.aweme")
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没登录成功")
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
        if (text("一键登录").exists() || text("本机号码一键登录").exists() || text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()) {
            TKB.xgsrizhi("还未登录账号--先去登录")
            var ss = dyzc()
            if (ss == false) {
                return false
            }
        }
        if (text("绑定手机号").exists()) {
            TKB.xgsrizhi("绑定手机号")
            back()
            sleep(2000)
        }
        if (desc("分享主页").exists() && text("获赞").exists() || textContains("分享主页").exists() && text("获赞").exists() || textContains("编辑资料").exists() && text("获赞").exists() || text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            click(1020, 1950)
            sleep(2000)
            TKB.xgzhzt(sbip, user_id, yhbh, app_id, "", "1")
            var ss = TKB.getAllTexts()
            var io = 0
            TKB.xgsrizhi(ss)
            try {
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("喜欢 ") != -1) {
                        TKB.xgsrizhi(ss[j])
                        var st = ss[j].split("欢 ")
                        djsl = st[1]
                        TKB.xgsrizhi("点赞数量：" + djsl)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "xihuan", djsl)
                    }
                    if (ss[j].indexOf("男") != -1) {
                        TKB.xgsrizhi("性别男")
                        dyxb = "1"
                    }
                    if (ss[j].indexOf("女") != -1) {
                        TKB.xgsrizhi("性别女")
                        dyxb = "2"
                    }
                    if (ss[j].indexOf("作品 ") != -1) {
                        TKB.xgsrizhi(ss[j])
                        var st = ss[j].split("品 ")
                        zpsl = st[1]
                        TKB.xgsrizhi("作品数量：" + zpsl)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipin", zpsl)
                    }
                    if (ss[j].indexOf("播放数") != -1 && io < 3) {
                        TKB.xgsrizhi(ss[j])
                        var st = ss[j].split("播放数")
                        var bfss = st[1]
                        TKB.xgsrizhi("点赞数量：" + bfss)
                        dybf = Number(dybf) + Number(bfss)
                        io = io + 1
                    }
                }
                if (dybf != 0) {
                    TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
                }
                if (id("com.ss.android.ugc.aweme:id/e_f").exists()) {
                    var dd = id("com.ss.android.ugc.aweme:id/e_f").findOnce().text()
                    if (dd.indexOf("抖音号: ") != -1) {
                        TKB.xgsrizhi(dd)
                        var st = dd.split(": ")
                        dyzh = st[1]
                        TKB.xgsrizhi("抖音账号：" + dyzh)
                    }
                }
                var ssr = true
                if (ssr == true) {
                    if (id("com.ss.android.ugc.aweme:id/b_0").exists()) {
                        dygz = id("com.ss.android.ugc.aweme:id/b_0").findOnce().text()
                        TKB.xgsrizhi("关注数量：" + dygz)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "guanzhu", dygz)
                    }
                    if (id("com.ss.android.ugc.aweme:id/b9v").exists()) {
                        dyfs = id("com.ss.android.ugc.aweme:id/b9v").findOnce().text()
                        TKB.xgsrizhi("粉丝数量：" + dyfs)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
                    }
                    if (id("com.ss.android.ugc.aweme:id/glp").exists()) {
                        dyqm = id("com.ss.android.ugc.aweme:id/glp").findOnce().text()
                        TKB.xgsrizhi("签名：" + dyqm)
                            // TKB.updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
                    }
                    if (id("com.ss.android.ugc.aweme:id/dbt").exists()) {
                        dync = id("com.ss.android.ugc.aweme:id/dbt").findOnce().text()
                        TKB.xgsrizhi("抖音昵称：" + dync)
                    }
                    if (id("com.ss.android.ugc.aweme:id/bar").exists()) {
                        dyhy = id("com.ss.android.ugc.aweme:id/bar").findOnce().text()
                        TKB.xgsrizhi("好友数量：" + dyhy)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "haoyou", dyhy)
                    }
                    if (id("com.ss.android.ugc.aweme:id/an4").exists()) {
                        dyhz = id("com.ss.android.ugc.aweme:id/an4").findOnce().text()
                        TKB.xgsrizhi("获赞数量：" + dyhz)
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "getzan", dyhz)
                    }
                    // swipe(500, 1800, 500, 900, 500)
                    // sleep(1000)
                    // if (id("com.ss.android.ugc.aweme:id/g8z").exists()) {
                    //     dybf = id("com.ss.android.ugc.aweme:id/g8z").findOnce().text()
                    //     TKB.xgsrizhi("播放数量：" + dybf)
                    //     if (dybf.indexOf("w") != -1) {
                    //         var st = dybf.split("w")
                    //         dybf = Number(st[0]) * 10000
                    //         TKB.xgsrizhi("实际播放数量：" + dybf)
                    //     }
                    //     TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
                    // }
                }
                toastLog("账号：" + dyzh + "--关注：" + dygz + "--粉丝：" + dyfs + "--签名：" + dyqm + "--点赞：" + djsl + "--播放数量：" + dybf)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            TKB.qinglihh("com.ss.android.ugc.aweme")
            return true

        } else {
            if (text("消息").exists() && text("我").exists() || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                TKB.xgsrizhi("首页")
                click(1020, 1890)
                sleep(2000)
            }
        }
        if (text("下线提醒").exists() && text("好").exists()) {
            TKB.xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
        }
        if (text("确认").exists() && text("取消").exists()) {
            TKB.xgsrizhi("取消未编辑的视频")
            click("取消")
            sleep(2000)
        }
        if (text("该帐号已被封禁").exists() || text("此账号已经被封禁").exists() || text("查看").exists() && text("取消").exists()) {
            TKB.xgsrizhi("此账号已经被封禁")
            var TYP = (new Date()).getTime()
            TKB.xgzhzt(sbip, user_id, yhbh, app_id, "封了", "2")
            while (1) {
                if ((new Date()).getTime() - TYP > 5 * 60 * 1000) {
                    log("时间到")
                    return false
                } else {
                    toastLog("此账号已经被封禁")
                    sleep(3000)
                }
                sleep(2000)
            }
        }

        zonghe()
    }
}

//抖音养号
function dyyh() {
    TKB.xgsrizhi("抖音养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime() //看直播的时间
    var stt = random(60, 120)
    var TTguank = (new Date()).getTime()
    var dinz = random(30, 60)
    var dj = random(1, 100)
    var ll = 0 //直播
    var tem = 0
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
            tem = 0
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (!text("推荐").exists()) {
                TKB.xgsrizhi("点首页")
                click("首页")
                sleep(300)
                click(100, 1830)
                sleep(2000)
            } else {
                if (tem == 0) {
                    TKB.xgsrizhi("推荐")
                    click("推荐")
                    sleep(random(10, 15) * 1000);
                    tem = 1
                } else {
                    if ((new Date()).getTime() - ssd > 15 * 60 * 1000 && ll < 5) {
                        TKB.xgsrizhi("去看直播")
                        click(100, 130)
                        sleep(2000)
                        dinz = random(20, 30)
                        ll = ll + 1
                    } else {
                        if ((new Date()).getTime() - TTguank > dinz * 1000) {
                            toastLog(dinz + "秒，滑动")
                            dj = random(1, 200)
                            if (dj < 4) {
                                log("点赞")
                                click(1000, 900)
                                sleep(1000)
                                swipe(500, 1600, 600, 400, 1200);
                                sleep(random(1, 2) * 1000);
                                dinz = random(20, 50)
                            } else {
                                if (dj > 196) {
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
                                            try {
                                                var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
                                                log(ss)
                                                click(ss.centerX(), ss.centerY());
                                                sleep(2000)
                                            } catch (error) {
                                                sleep(1001)
                                                log(error);
                                            }
                                        }
                                        back()
                                        sleep(3000)
                                    } else {
                                        for (j = 0, len = sb; j < len; j++) {
                                            swipe(500, 1600, 600, 400, 1200)
                                            sleep(random(1000, 3000))
                                        }
                                    }
                                    back()
                                    sleep(2000)
                                } else {
                                    swipe(500, 1600, 600, 400, 1200);
                                    sleep(random(1, 2) * 1000);
                                    dinz = random(20, 50)
                                }
                            }
                            TTguank = (new Date()).getTime()
                        } else {
                            toastLog("观看视频")
                            sleep(3000)
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
        if (id("com.ss.android.ugc.aweme:id/xj").exists() && text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()) {
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
                ssi = random(1, 3)
                for (j = 0, len = ssi; j < len; j++) {
                    swipe(500, 1600, 600, 400, 500)
                    sleep(random(1000, 3000))
                }
            }
            if (ssi > 99) {
                TKB.xgsrizhi("直播评论")
                click(200, 1830)
                sleep(2000)
                setText("[" + bq[random(1, bq.length)] + "]")
                sleep(1000)
                if (id("com.ss.android.ugc.aweme:id/es6").exists()) {
                    try {
                        var ss = id("com.ss.android.ugc.aweme:id/es6").findOnce().bounds();
                        log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    } catch (error) {
                        sleep(1001)
                        log(error);
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
                back()
                sleep(3000)
            }
        }
        if (text("点击重播").exists()) {
            toastLog("点击重播，滑动")
            swipe(500, 1600, 600, 400, 1200);
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


        zonghe()
    }
}

//检测上抖加
function jiancedj() {
    TKB.xgsrizhi("检测抖加")
    TKB.qinglihh()
    sleep(3000)
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var zpsl = 0 //现在的作品数量
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 4 * 60 * 1000) {
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
                            if (zpsl != 0 && zpsl != "0") {
                                try {
                                    var node = text(ss[j]).findOnce().bounds();
                                    if (node.centerY() < 1550) {
                                        TKB.xgsrizhi("点击第一个视频")
                                        click(120, node.centerY() + 100);
                                        sleep(2000)
                                        var dj = (new Date()).getTime()
                                        var skl = 0
                                        while (1) {
                                            if ((new Date()).getTime() - dj > 2 * 60 * 1000) {
                                                TKB.xgsrizhi("超时退出视频")
                                                back()
                                                sleep(3000)
                                                back()
                                                sleep(3000)
                                                break
                                            }
                                            if (text("留下你的精彩评论吧").exists() && id("com.ss.android.ugc.aweme:id/a__").exists() || id("com.ss.android.ugc.aweme:id/kr").exists()) {
                                                TKB.xgsrizhi("留下你的精彩评论吧")
                                                back()
                                                sleep(2000)
                                            }
                                            if (text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/a__").exists() || id("com.ss.android.ugc.aweme:id/kr").exists()) {
                                                TKB.xgsrizhi("留下你的精彩评论吧")
                                                back()
                                                sleep(2000)
                                            }
                                            if (text("保存本地").exists() && text("上热门").exists() || text("转发").exists() && text("上热门").exists()) {
                                                TKB.xgsrizhi("上热门")
                                                click("上热门")
                                                sleep(2000)
                                            } else {
                                                if (text("支付").exists() || desc("支付").exists() || desc("速推版").exists()) {
                                                    TKB.xgsrizhi("能上抖加")
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(2000)
                                                    TKB.xgzhzt(sbip, user_id, yhbh, app_id, "正常", "1")
                                                    return true
                                                } else {
                                                    if (text("选择其他视频上热门").exists() || textContains("该视频搬运").exists()) {
                                                        TKB.xgsrizhi("无法上热门")
                                                        back()
                                                        sleep(500)
                                                        back()
                                                        sleep(2000)
                                                        TKB.xgzhzt(sbip, user_id, yhbh, app_id, "无法上抖加", "1")
                                                        return false
                                                    } else {
                                                        if (skl == 0) {
                                                            TKB.xgsrizhi("点击视频点点点...")
                                                            click(985, 1365)
                                                            sleep(3000)
                                                            skl = 1
                                                        } else {
                                                            TKB.xgsrizhi("点击图片点点点...")
                                                            click(989, 1536)
                                                            sleep(3000)
                                                            skl = 0
                                                        }

                                                    }
                                                }
                                            }
                                            if (desc("知道了").exists()) {
                                                TKB.xgsrizhi("知道了")
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
                                        TKB.xgsrizhi("下滑")
                                        swipe(500, 1600, 500, 800, 800)
                                        sleep(2000)
                                    }
                                } catch (error) {
                                    sleep(1001)
                                    log(error);
                                }
                            } else {
                                TKB.xgsrizhi("没有作品")
                                return false
                            }
                            break
                        }
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
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

//抖音垂直养号
function dyczyh() {
    TKB.xgsrizhi("抖音垂直养号")
        // TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(60, 120)
    var biaoti = "特朗普"
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
        if (id("com.ss.android.ugc.aweme:id/ao_").exists() && id("com.ss.android.ugc.aweme:id/a9l").exists() || text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (!text("推荐").exists()) {
                TKB.xgsrizhi("点首页")
                click("首页")
                sleep(300)
                click(100, 1830)
                sleep(2000)
            } else {
                if (id("com.ss.android.ugc.aweme:id/c0p").exists()) {
                    TKB.xgsrizhi("搜索")
                    try {
                        var ss = id("com.ss.android.ugc.aweme:id/c0p").findOnce().bounds();
                        log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                } else {
                    if (desc("搜索").exists()) {
                        try {
                            var ss = desc("搜索").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            log(error);
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
        if (id("com.ss.android.ugc.aweme:id/xj").exists() && text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()) {
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
            back()
            sleep(2000)
        }
        if (text("点击重播").exists()) {
            toastLog("点击重播，滑动")
            swipe(500, 1600, 600, 400, 1200);
            sleep(random(10, 20) * 1000);
            sleep(1000)
        }
        if (text("取消").exists() && id("com.ss.android.ugc.aweme:id/aoh").exists() || text("取消").exists() && id("com.ss.android.ugc.aweme:id/pd").exists() || text("取消").exists() && text("热点榜").exists() && text("更多").exists()) {
            TKB.xgsrizhi("搜索界面")
            if (text("用户").exists() && text("视频").exists() || text("综合").exists() && text("视频").exists()) {
                TKB.xgsrizhi("搜索结果")
                    // click("视频")
                try {
                    var ss = text("视频").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(4000)
                } catch (error) {
                    sleep(1001)
                    click("视频")
                    log(error);
                }
                var dd = random(3, 10)
                for (j = 0, len = dd; j < len; j++) {
                    swipe(500, 1600, 600, 400, 1200)
                    sleep(random(1000, 3000))
                }
                click(300, 700) //点击第一个视频
                sleep(2000)
                var cz = (new Date()).getTime() // 判断是否在视频界面
                var sp = (new Date()).getTime() //观看视频时间
                var sg = (new Date()).getTime() //超时退出
                var mss = random(15, 40) //看视频秒数
                while (1) {
                    if ((new Date()).getTime() - cz > 30 * 1000) {
                        TKB.xgsrizhi("超时没在视频界面退出")
                        back()
                        sleep(1000)
                        back()
                        sleep(3000)
                        break
                    }
                    if ((new Date()).getTime() - sg > 30 * 60 * 1000) {
                        TKB.xgsrizhi("超时不看了")
                        back()
                        sleep(1000)
                        back()
                        sleep(3000)
                        break
                    }
                    if (id("com.ss.android.ugc.aweme:id/gpw").exists() || id("com.ss.android.ugc.aweme:id/pc").exists()) {
                        TKB.xgsrizhi("观看视频中...")
                        toastLog("观看视频中...")
                        sleep(4000)
                        cz = (new Date()).getTime()
                        if ((new Date()).getTime() - sp > mss * 1000) {
                            TKB.xgsrizhi("观看时间到了")
                            swipe(500, 1600, 600, 400, 1200)
                            sleep(random(1000, 3000))
                            mss = random(20, 50)
                            sp = (new Date()).getTime()
                        }
                    }
                    zonghe()
                }
            } else {
                if (id("com.ss.android.ugc.aweme:id/gd6").exists() || id("com.ss.android.ugc.aweme:id/c8q").exists()) {
                    TKB.xgsrizhi("看到搜索结果")
                    click(500, 300) //点击第一个
                    sleep(2000)
                } else {
                    TKB.xgsrizhi("输入标题" + biaoti)
                    setText(biaoti)
                    sleep(3000)
                }
            }
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
        zonghe()
    }
}

//改性别
function gaixb() {
    TKB.xgsrizhi("改性别")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var xs = TKB.zhid(sbip, run_id)
    var xb = xs['性别']
        // var xb = '0'
    if (xb == 0 || xb == '0') {
        var xbx = random(0, 1)
        if (xbx == 1) {
            xb = '男'
        } else {
            xb = '女'
        }
    }
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
            if ((text(xb).exists() && text("性别").exists())) {
                toastLog("性别修改完成")
                TKB.xgsrizhi("性别修改完成")
                return true
            } else {
                click('性别')
                sleep(2000)
                if (text('不显示').exists()) {
                    TKB.xgsrizhi("修改性别")
                    click(xb)
                    sleep(1000)
                }
            }
        }
        zonghe()
    }
}

var nc = ['Allen', 'Ava', 'Andy', 'Armstrong', 'Arnold', 'Anthony', 'Amos', 'Andrew', 'Archer', 'Augustine', 'Abbott', 'Abel', 'Abraham', 'Adair', 'Aldrich', 'Angel', 'Abernathy', 'Abrams', 'Acker', 'Ackerman', 'Adamson', 'Adcock', 'Adler', 'Alonso', 'Ali', 'Alonzo', 'Abra', 'Angle', 'Alger', 'Archibald', 'Armand', 'August', 'Abner', 'Adrian', 'Ahern', 'Alfred', 'Amy', 'Abbey', 'Abell', 'Abercrombie', 'Abernethy', 'Able', 'Abrahams', 'Abrahamson', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Abram', 'Abramson', 'Acheson', 'Acton', 'Acuff', 'Addington', 'Addy', 'Alfonso', 'Allan', 'Alton', 'Annabelle', 'Algernon', 'Alva', 'Alvin', 'Alvis', 'Andre', 'Angelo', 'Augus', 'Ansel', 'Antony', 'Antoine', 'Antonio', 'Aries', 'Arlen', 'Arno', 'Arvin', 'Asa', 'Ashbur', 'Atwood', 'Aaron', 'Adam', 'Adolph', 'Adonis', 'Alan', 'Abigail', 'Angela', 'Anna', 'Amanda', 'Ann', 'Alice', 'Andrea', 'Anne', 'Annie', 'Anita', 'Amber', 'April', 'Audrey', 'Annette', 'Ana', 'Alma', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Aloysius', 'Alpha', 'Alphonse', 'Alphonso', 'Alvah', 'Alvaro', 'Alvie', 'Alxis', 'Amadeo', 'Amado', 'Amador', 'Amario', 'Amarlai', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Ambrose', 'Americo', 'Amiel', 'Amil', 'Amit', 'Anakin', 'Anatoly', 'Anderson', 'Andra', 'Andreas', 'Andrey', 'Andrus', 'Anfernee', 'Angus', 'Anh', 'Anibal', 'Anirudh', 'Ankoma', 'Anselmo', 'Anson', 'Antonino', 'Antwan', 'Antwon', 'Anup', 'Anwar', 'Api', 'Apostolos', 'Aqib', 'Aramys', 'Arash', 'Arcadio', 'Archie', 'Archil', 'Aric', 'Arjun', 'Arkadiy', 'Arlan', 'Arley', 'Arlie', 'Arlis', 'Arlo', 'Armando', 'Armani', 'Armon', 'Armond', 'Arnab', 'Arnaldo', 'Arnie', 'Arnoldo', 'Arnulfo', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aron', 'Arron', 'Arsal', 'Arshad', 'Arther', 'Artie', 'Artis', 'Artur', 'Arturo', 'Arvel', 'Arvid', 'Arwin', 'Asbert', 'Aseem', 'Ashantio', 'Asher', 'Ashfaq', 'Ashton', 'Atlee', 'Atrayu', 'Atwoun', 'Audie', 'Augustus', 'Aurelio', 'Austen', 'Austin', 'Austyn', 'Avi', 'Avinav', 'Avram', 'Axel', 'Aydan', 'Ayden', 'Ayinde', 'Aylwin', 'Ayodeji', 'Ayrat', 'Ayrton', 'Abbyabbie', 'Ailsa', 'Aviva', 'Amei', 'Ahy', 'Ailing', 'Amarie', 'Ameiya', 'Aadilah', 'Aafke', 'Aaralyn', 'Aashka', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aastha', 'Abida', 'Adalyn', 'Adrianous', 'Aicha', 'Ailema', 'Aislinn', 'Aleasha', 'Alegria', 'Aleigha', 'Alethea', 'Alexiz', 'Alley', 'Alwyn', 'Amada', 'Amalie', 'Amberis', 'Anyea', 'Anadeli', 'Anaiah', 'Andee', 'Angeles', 'Angelika', 'Anneke', 'Annemarieke', 'Annemiek', 'Angelice', 'Annu', 'Aoife', 'Aoki', 'Arcelia', 'Areena', 'Ashaya', 'Ashunta', 'Aspasia', 'Assis', 'Asten', 'Audrea', 'Augustina', 'Avangaline', 'Aynur', 'Azia', 'Annzley', 'Aunjenae', 'Abeiku', 'Adin', 'Afonso', 'Afraz', 'Aidon', 'Ainsof', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Alejo', 'Alliance', 'Amadeus', 'Amine', 'Amr', 'Anastasios', 'Andijamo', 'Angoni', 'Antti', 'Arif', 'Artem', 'Asad', 'Ashwath', 'Aslan', 'Atik', 'Attah', 'Altair', 'Arnon', 'Adora', 'Aeola', 'Alleen', 'Althena', 'Amethyst', 'Albreto', 'Acher', 'Apona', 'Ardelle', 'Aura', 'Amity', 'Amon', 'Aristotle', 'Alesa', 'Alika', 'Alita', 'Akio', 'Alister', 'Almena', 'Annora', 'Alexandor', 'Aloha', 'Amina', 'Atman', 'Akako', 'Arnia', 'Arnice', 'Asisa', 'Aramis', 'Ayoka', 'Arabela', 'Atalanta', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Aletheia', 'Alethia', 'Alien', 'Amigo', 'Anglie', 'Apple', 'Auguste', 'Aabagael', 'Aachbo', 'Aadam', 'Aadan', 'Aadesh', 'Aahna', 'Aailyaa', 'Aanisah', 'AdaLynn', 'Adonia', 'Ariel', 'Aba', 'Abina', 'Adalia', 'Ailis', 'Akili', 'Alanni', 'Aure ', 'Azura', 'Andres', 'Al', 'Amelie', 'Autumn', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bennett', 'Bishop', 'Bradley', 'Baker', 'Bryant', 'Bryson', 'Baird', 'Baldwin', 'Barnett', 'Barry', 'Barton', 'Beck', 'Benjamin', 'Benson', 'Berg', 'Bernard', 'Bruce', 'Ballard', 'Bryan', 'Barlow', 'Baron', 'Bartley', 'Benedict', 'Brandon', 'Beverly', 'Bain', 'Bentley', 'Bancroft', 'Bart', 'Basil', 'Ben', 'Bertram', 'Bill', 'Brian', 'Billy', 'Baber', 'Bader', 'Baily', 'Bainbridge', 'Beenle', 'Barbie', 'Bubles', 'Bard', 'Barret', 'Bartholomew', 'Beacher', 'Beau', 'Berger', 'Bernie', 'Bert', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Berton', 'Bevis', 'Bing', 'Blair', 'Blithe', 'Bob', 'Booth', 'Borg', 'Boris', 'Bowen', 'Boyce', 'Boyd', 'Brady', 'Brook', 'Bruno', 'Buck', 'Burgess', 'Burke', 'Burnell', 'Burton', 'Byron', 'Barbara', 'Betty', 'Brenda', 'Bonnie', 'Beatrice', 'Bernice', 'Brittany', 'Beth', 'Bessie', 'Brandy', 'Billie', 'Becky', 'Bobbie', 'Belinda', 'Blanche', 'Beulah', 'Bridget', 'Blanca', 'Brooke', 'Bernadette', 'Betsy', 'Baal', 'Babbie', 'Babette', 'Babs', 'Babur', 'Bacchus', 'Bachelor', 'Bagot', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Baillie', 'Balaam', 'Baldie', 'Baldrick', 'Balfour', 'Babbette', 'Babsi', 'Bailee', 'Balbina', 'Baljinder', 'Balvina', 'Bambi', 'Barbaro', 'Barbra', 'Barra', 'Baseerat', 'Baylee', 'Beatriz', 'Beaulah', 'Bebe', 'Becca', 'Becci', 'Becka', 'Beena', 'Begona', 'Bekki', 'Bell', 'Bella', 'Bellamy', 'Belle', 'Belva', 'Benedicte', 'Benediz', 'Benita', 'Berenice', 'Berkeley', 'Bernadine', 'Bernardine', 'Berneice', 'Berniece', 'Bernita', 'Berta', 'Bertha', 'Bertie', 'Beryl', 'Beshaun', 'Bethel', 'Bettie', 'Bettina', 'Bettyann', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Bettye', 'Beverlee', 'Beyonce', 'Bianca', 'Bibi', 'Billye', 'Bilqis', 'Bindi', 'Birdie', 'Bitch', 'Blendena', 'Blossom', 'Blythe', 'Bobbye', 'Bogusia', 'Bonita', 'Bonny', 'Bowyer', 'Brailyn', 'Branca', 'Brandee', 'Brandice', 'Brandie', 'Brandis', 'Breana', 'Breann', 'Breanna', 'Breanne', 'Bree', 'Brejai', 'Brenna', 'Breonna', 'Briana', 'Brianna', 'Brianne', 'Bridgett', 'Bridgette', 'Bridie', 'Brielle', 'Brigette', 'Brigitte', 'Brisa', 'Britany', 'Brithney', 'Crispin', 'Crew', 'Cretcher', 'Creed', 'Creana', 'Cote', 'Cortez', 'Corjan', 'Cordell', 'Cooper', 'Conway', 'Conor', 'Conner', 'Colten', 'Colt', 'Colson', 'Colm', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cold', 'Codi', 'Cobby', 'Clio', 'Clifton', 'Claudio', 'Cisco', 'Chuckie', 'Chub', 'Christoper', 'Chokko', 'Chock', 'Chippy', 'Chico', 'Chesley', 'Chesdarith', 'Chechu', 'Chaz', 'Charalambos', 'Chandre', 'Chance', 'Chakiris', 'Chaim', 'Chadd', 'Cevin', 'Cesar', 'Cem', 'Celso', 'Cein', 'Cayden', 'Catlin', 'Cassio', 'Casper', 'Caspar', 'Carlyle', 'Carlton', 'Cantrell', 'Camron', 'Camren', 'Camden', 'Callum', 'Callan', 'Caleb', 'Cairns', 'CJ', 'Cyndy', 'Cyndi', 'Cristie', 'Cristiane', 'Cristal', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Crissy', 'Cosette', 'Corrie', 'Cornelia', 'Corliss', 'Corinne', 'Corinna', 'Corine', 'Corina', 'Corene', 'Cordie', 'Cordia', 'Cordelia', 'Corcoran', 'Coral', 'Consuelo', 'Conceicao', 'Collette', 'Coleen', 'Cloe', 'Cleta', 'Cleora', 'Clemmie', 'Clementine', 'Clementina', 'Clarissa', 'Clarine', 'Clarice', 'Claribel', 'Citlalli', 'Circe', 'Cinzia', 'Cindi', 'Cinda', 'Cierra', 'Ciera', 'Cielo', 'Ciarra', 'Ciara', 'Chyna', 'Chrystyna', 'Chrystal', 'Christiana', 'Christene', 'Christel', 'Christeen', 'Chrissy', 'Chiquita', 'Chiara', 'Chianti', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Cheyenne', 'Cheyanne', 'Cheryle', 'Cherri', 'Cherise', 'Cherie', 'Chenille', 'Chelsie', 'Chelsi', 'Chaya', 'Chastity', 'Chasity', 'Chasidy', 'Charolette', 'Charmaine', 'Charly', 'Charlize', 'Charline', 'Charleen', 'Charla', 'Charisse', 'Charissa', 'Chantelle', 'Chantel', 'Chante', 'Chantal', 'Chaney', 'Chandi', 'Chanda', 'Chana', 'Celine', 'Celinda', 'Celina', 'Celica', 'Celia', 'Celeste', 'Celena', 'Ceanna', 'Caylin', 'Cayla', 'Catrina', 'Catina', 'Catia', 'Cathryn', 'Cathrine', 'Cathleen', 'Cathie', 'Cathi', 'Cathey', 'Caterina', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Catarina', 'Catalina', 'Cassius', 'Cassie', 'Cassia', 'Casandra', 'Caryn', 'Caryl', 'Caron', 'Carolynn', 'Carolina', 'Carolee', 'Carolann', 'Carmella', 'Carmelita', 'Carmela', 'Carlyn', 'Carlye', 'Carly', 'Carlotta', 'Carlie', 'Carli', 'Carley', 'Carlene', 'Carleen', 'Carlee', 'Carissa', 'Carisa', 'Caris', 'Carina', 'Carie', 'Cari', 'Caren', 'Careen', 'Cara', 'Candis', 'Candida', 'Camila', 'Camellia', 'Callie', 'Calli', 'Calista', 'Caleigh', 'Caitlynn', 'Caitlyn', 'Caitlin', 'Cailyn', 'Cady', 'Candy', 'Cassiel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Clint', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Davis', 'Dick', 'Duncan', 'Dunn', 'Daniel', 'David', 'Dean', 'Dennis', 'Douglas', 'Duke', 'Dalton', 'Davidson', 'Dillon', 'Donovan', 'Dorsey', 'Doyle', 'Drake', 'Dudley', 'Duffy', 'Duran', 'Dyer', 'Dempsey', 'Derrick', 'Daly', 'Darby', 'Davies', 'Denny', 'Dewey', 'Doherty', 'Jeren', 'Jermey', 'Jeroen', 'Jeruh', 'Jessy', 'Jethro', 'Jett', 'Jevandyr', 'Jevon', 'Jianzhong', 'Jide', 'Jimi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jinks', 'Jjon', 'Josavion', 'Joachim', 'Joao', 'Joaquin', 'Jocke', 'Johansen', 'Johnathan', 'Johnathon', 'Johnno', 'Joker', 'Jomar', 'Jonathon', 'Jonny', 'Joost', 'Jorden', 'Jordy', 'Jorge', 'Jorgen', 'Joris', 'Jorne', 'Josue', 'Jothy', 'Joure', 'Jovan', 'Jovani', 'Jovanny', 'Jovany', 'Jovino', 'Jsonin', 'Judah', 'Juergen', 'Jujuan', 'Julien', 'Julio', 'Junior', 'Justus', 'Jyrikc', 'Jenny jennie', 'Jacky', 'Jabe', 'Jabriel', 'Jaiah', 'Jamahd', 'Jamo', 'Jamychal', 'Jarin', 'Jassir', 'Javarion', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Javu', 'Jawara', 'Jaxom', 'Jaymz', 'Jeandre', 'Jelani', 'Jelle', 'Jemario', 'Jenks', 'Jentrey', 'Jeordie', 'Jerold', 'Jeronimo', 'Jerrell', 'Jerrod', 'Jesper', 'Jestek', 'Jevaris', 'Jobon', 'Joelo', 'Johntify', 'Jono', 'Joop', 'Joran', 'Jorben', 'Joslain', 'Jostin', 'Josuan', 'Joven', 'Juca', 'Judd', 'Jbreauna', 'Jacarri', 'Jacinta', 'Jadi', 'Jadmalys', 'Jaduiga', 'Jahmilia', 'Jahnae', 'Jaialea', 'Jakerra', 'Jaleesa (jalisa)', 'Jamisen', 'Janai', 'Jandi', 'Janela', 'Janique', 'Janira', 'Jannemarij', 'Jannery', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Jarrisha', 'Jasmynne', 'Jaygee', 'Jaynie', 'Jazdia', 'Jeanique', 'Jemila', 'Jenae', 'Jenai', 'Jenan', 'Jenine', 'Jennine', 'Jeralyn', 'Jermeka', 'Jerzie', 'Jimmia', 'Jinette', 'Jitske', 'Joneshia', 'Jonlys', 'Jonneke', 'Jordanne', 'Jordi', 'Jovelynn', 'Jowanna', 'Jarda', 'Jerica', 'Juliane', 'Joycelyn', 'Joline', 'Jamila', 'Jonina', 'Jocasta', 'Jeanie', 'Jerod', 'Jammy', 'Jannet', 'Jessey', 'Jingle', 'Jiro', 'Jacko', 'Jyotsna', 'Jam Hsiao', 'Joliet', 'Jon', 'Jeremiah', 'Jerald', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'King', 'Kevin', 'Kelley', 'Knight', 'Khaleesi', 'Kent', 'Kerr', 'Kirk', 'Keith', 'Kane', 'Kemp', 'Key', 'Kirby', 'Klein', 'Knox', 'Kyle', 'Kay', 'Kearney', 'Keen', 'Kendrick', 'Kenney', 'Kenny', 'Kern', 'Kimbrough', 'Kincaid', 'Kinsey', 'Kirkland', 'Karl', 'Kaye', 'Ken', 'Kennedy', 'Kenneth', 'Kerwin', 'Karen', 'Kathleen', 'Katherine', 'Kathy', 'Kathryn', 'Katie', 'Kristen', 'Kristin', 'Kristina', 'Katrina', 'Kayla', 'Kristine', 'Kristy', 'Kelli', 'Kara', 'Krista', 'Kendra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Krystal', 'Kari', 'Kerry', 'Kate', 'Kellie', 'Kristie', 'Kaley', 'Karan', 'Karin', 'Karla', 'Karol', 'Katharine', 'Kathie', 'Katy', 'Keely', 'Kelvin', 'Kendal', 'Kenna', 'Kenton', 'Kenyatta', 'Kermit', 'Kimberley', 'Kimberly', 'Kirsten', 'Kit', 'Kittie', 'Kitty', 'Kennard', 'Kaitlyn', 'Kiara', 'Kaci', 'Kacie', 'Kaela', 'Kaelyn', 'Kaia', 'Kail', 'Kaila', 'Kailee', 'Kailey', 'Kailyn', 'Kaitlan', 'Kaitleen', 'Kaitlin', 'Kaitlynn', 'Kaiya', 'Kajal', 'Kala', 'Kaleigh', 'Kaliyah', 'Kallie', 'Kevin', 'Cary', 'Karwai', 'Karena', 'Kadeem', 'Kaedyn', 'Kalem', 'Karteous', 'Kavir', 'Kc', 'Kedren', 'Kees', 'Keifer', 'Kepuhi', 'Ketan', 'Khari', 'Kieron', 'Kimmo', 'Kio', 'Kiril', 'Kirsanoff', 'Kirt', 'Kitrick', 'Knud', 'Koen', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kosta', 'Kyren', 'Kimoni', 'Kaeley', 'Kaisha', 'Kajsa', 'Kameo', 'Kamla', 'Kanequa', 'Karenah', 'Karice', 'Karinda', 'Karine', 'Kariyah', 'Kariz', 'Karlyn', 'Karyssa', 'Katrianna', 'Kaula', 'Kawana', 'Kaylia', 'Kearen', 'Keilani', 'Keita', 'Kenlyn', 'Kennisis', 'Kersha', 'Khailene', 'Khloe', 'Kiany', 'Kilianne', 'Kimmy', 'Kinty', 'Kinza', 'Kirri', 'Kirstie', 'Kourtlyn', 'Kramie', 'Kristal', 'Kristiina', 'Krystani', 'Krysten', 'Kyanna', 'Kysharnie', 'Kadar', 'Kamea', 'Kimi', 'Kisa', 'Keli', 'Kayne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Kado', 'Kerk', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lewis', 'Lawrence', 'Lilith', 'Larissa', 'Lambert', 'Leonard', 'Lester', 'Lora', 'Lang', 'Lara', 'Larson', 'Leon', 'Lloyd', 'Lucas', 'Lance', 'Louis', 'Luther', 'Lyle', 'Lacey', 'Lacy', 'Ladd', 'Laird', 'Lange', 'Langston', 'Larkin', 'Latham', 'Lawler', 'Lay', 'Layne', 'Layton', 'Libby', 'Lilly', 'Lincoln', 'Linn', 'Landon', 'Liam', 'Lorenzo', 'Larry', 'Leo', 'Levi', 'Lucy', 'Lillie', 'Lamont', 'Laurence', 'Leland', 'Lenard', 'Leroy', 'Luis', 'Leif', 'Len', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennon', 'Leopold', 'Les', 'Lionel', 'Lucien', 'Lyndon', 'Linda', 'Lisa', 'Laura', 'Lori', 'Louise', 'Lois', 'Lillian', 'Lucille', 'Lauren', 'Lorraine', 'Loretta', 'Laurie', 'Lydia', 'Lena', 'Leah', 'Leona', 'Lindsey', 'Lindsay', 'Lynda', 'Luz', 'Lula', 'Lola', 'Latoya', 'Lynne', 'Leticia', 'Lynette', 'Laverne', 'Lorena', 'Lila', 'Lana', 'Lorene', 'Lucia', 'Lela', 'Lanny', 'Latonia', 'Laurel', 'Lauretta', 'Laurinda', 'Lavinia', 'Lean', 'Leda', 'Leila', 'Leilani', 'Lemuel', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lennie', 'Lenny', 'Lenora', 'Lenore', 'Leonie', 'Leonora', 'Leonore', 'Letitia', 'Lettie', 'Letty', 'Lili', 'Lily', 'Lina', 'Lindy', 'Linsey', 'Ladonna', 'Lashay', 'Lachelle', 'Lacie', 'Laila', 'Laine', 'Lainey', 'Lakeisha', 'LaKeydra', 'Lakita', 'Lal', 'Laney', 'Lanita', 'LaQuisha', 'Laquita', 'Larisa', 'Latifah', 'Latika', 'Latina', 'Latisha', 'Latricia', 'Lauran', 'Laureen', 'Lauryn', 'Lavina', 'Lavon', 'Lavonne', 'Lawanda', 'Layla', 'Layna', 'Leann', 'Leala', 'Leandra', 'Leanna', 'Leanne', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leeann', 'Leesa', 'Leia', 'Leisa', 'Leisha', 'Leota', 'Lesly', 'Lexi', 'Lexie', 'Lia', 'Lian', 'Liana', 'Liang', 'Lianne', 'Lida', 'Lidia', 'Liliana', 'Lilliana', 'Limei', 'Linaeve', 'Linnea', 'Linnie', 'Lisandra', 'Lisette', 'Lita', 'Litzy', 'Liz', 'Liza', 'Lizabeth', 'Lizbeth', 'Lizeth', 'Lizette', 'Lizzie', 'Lolita', 'Loma', 'Lona', 'Lorenza', 'Lorinda', 'Lorna', 'Lorrie', 'Lotte', 'Lottie', 'Louisa', 'Lourdes', 'Luana', 'Lucija', 'Lucinda', 'Ludmila', 'Lulu', 'Luna', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lupita', 'Lurdes', 'Lux', 'Lyna', 'Lyndi', 'Lynnette', 'Lynsey', 'Lacorey', 'Laithan', 'Lamar', 'Lampros', 'Lardy', 'Latrell', 'Lawther', 'Lequeint', 'Levone', 'Leandro', 'Lefteris', 'Legend', 'Lenual', 'Leonardo', 'Leonel', 'Liandre', 'Lidong', 'Liem', 'Lijun', 'Likiak', 'Limie', 'Lleyton', 'Lockie', 'Lorcan', 'Lorry', 'Lotkova', 'Lotta', 'Loudyn', 'Lova', 'Lucah', 'Luciano', 'Ludwig', 'Lukas', 'Luke', 'Lytle', 'Lareina', 'Lucine', 'Leehom', 'Lasse', 'Laval', 'Leighton', 'Leitham', 'Lemar', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Leyam', 'Liberio', 'Livio', 'Lohan', 'Lowell', 'Lafreeta', 'Lakida', 'Lakisha', 'Laniece', 'Laquinta', 'LaQunda', 'Lashanda', 'LaSondra', 'Laurabeth', 'Laurice', 'Leshawn', 'Leany', 'Leeandra', 'Lenaya', 'Lene', 'Lera', 'Lexy', 'Liat', 'Liesa', 'Ligia', 'Lindie', 'Linef', 'Lisanne', 'Loanda', 'Loann', 'Lonneke', 'Luisa', 'Luquasha', 'Luv', 'Luzia', 'Lynndette', 'Leyla', 'Lorada', 'Lyanna', 'Lykke', 'Lennor', 'Lynch', 'Luthur', 'Lala', 'Lamond', 'Lissa', 'Licia', 'Leor', 'Leron', 'Lukman', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Lyron', 'Limber', 'Levana', 'Lesa', 'Liliy', 'Loletta', 'Lassie', 'Loren', 'Lilia', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Martin', 'Moore', 'Mary', 'Marshall', 'Murphy', 'Murray', 'Mason', 'Mitchell', 'Morris', 'Moon', 'Marsh', 'Maxwell', 'Michael', 'Miles', 'Morton', 'Moses', 'May', 'MacDonald', 'Mack', 'Maddox', 'Mann', 'Mathews', 'Maynard', 'Magee', 'Malcolm', 'Marcus', 'Mark', 'Marvin', 'Matthew', 'Mahoney', 'Major', 'Mallory', 'Malloy', 'Maloney', 'Manley', 'Mansfield', 'Manuel', 'Marin', 'Marquis', 'Mayfield', 'Maria', 'Matt', 'Maurice', 'Max', 'Mike', 'Milo', 'Melinda', 'Mercedes', 'Macy', 'Malcom', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcellus', 'Marlin', 'Marvel', 'Mathew', 'Mya', 'Magical', 'Mandel', 'Marico', 'Marlon', 'Maximilian', 'Merlin', 'Michell', 'Mick', 'Montague', 'Mortimer', 'Myron', 'Madison', 'Michelle', 'Melissa', 'Martha', 'Marie', 'Mildred', 'Marilyn', 'Marjorie', 'Monica', 'Marion', 'Melanie', 'Maureen', 'Marcia', 'Minnie', 'Marlene', 'Marian', 'Maxine', 'Mabel', 'Marsha', 'Margie', 'Miriam', 'Misty', 'Mae', 'Margarita', 'Marguerite', 'Molly', 'Madeline', 'Monique', 'Maggie', 'Maryann', 'Melody', 'Mamie', 'Marianne', 'Myra', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Marcella', 'Mona', 'Meghan', 'Mindy', 'Mandy', 'Mirana', 'Marta', 'Mac', 'Madeleine', 'Madge', 'Madonna', 'Magda', 'Magdalen', 'Magnolia', 'Maisie', 'Malvina', 'Margaret', 'Marge', 'Margery', 'Margot', 'Mariana', 'Marietta', 'Marina', 'Marjory', 'Marnie', 'Mathilda', 'Matilda', 'Maud', 'Maude', 'Maura', 'Mavis', 'Michaela', 'Terrence', 'Tess', 'Tessa', 'Tessie', 'Thad', 'Thaddeus', 'Thalia', 'Thea', 'Theodora', 'Theresia', 'Thomasina', 'Tilda', 'Tillie', 'Torrie', 'Trevor', 'Tristan', 'Trudy', 'Tabatha', 'Tabea', 'Tahnee', 'Taina', 'Taisha', 'Taleen', 'Talia', 'Talina', 'Talisha', 'Talitha', 'Taliyah', 'Tallulah', 'Tamah', 'Tamatha', 'Tameka', 'Tamia', 'Tamika', 'Tamsen', 'Tamsin', 'Tamzin', 'Tana', 'Tangi', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tanisha', 'Taniya', 'Tanja', 'Taryn', 'Tatiana', 'Tatianna', 'Tatjana', 'Tatyana', 'Tawanna', 'Tawny', 'Taya', 'Tayla', 'Taysia', 'Tegan', 'Telma', 'Tennille', 'Tera', 'Teyana', 'Therese', 'Tia', 'Tiana', 'Tianna', 'Tiara', 'Tierney', 'Tierra', 'Tiffani', 'Tirzah', 'Tomara', 'Tonia', 'Tori', 'Toya', 'Tracie', 'Trang', 'Trina', 'Trish', 'Trixie', 'Tryna', 'Twila', 'Tyla', 'Tyra', 'Taber', 'Tad', 'Taj', 'Tajon', 'Tamaitikoha', 'Tamaris', 'Tambor', 'Tampe', 'Tapasvi', 'Tarek', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Tareo', 'Tarian', 'Tariku', 'Tariq', 'Tavis', 'Taylen', 'Tazel', 'Tehmasp', 'Teifion', 'Teno', 'Terrill', 'Teymur', 'Thales', 'Thao', 'Thayne', 'Thesshell', 'Thien', 'Thierry', 'Thinh', 'Tiago', 'Timmi', 'Timmy', 'Timofey', 'Tino', 'Tinon', 'Tion', 'Tishon', 'Tito', 'Tobyn', 'Toddy', 'Tonaka', 'Tonino', 'Tonio', 'Topacio', 'Torrey', 'Tosh', 'Traman', 'Travers', 'Travon', 'Trayden', 'Trayvon', 'Trenton', 'Trever', 'Trevion', 'Trevis', 'Trevoc', 'Trevon', 'Trey', 'Treyvon', 'Trianno', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Triano', 'Trijny', 'Tristian', 'Tristin', 'Triston', 'Tronne', 'Tullio', 'Tupac', 'Tureyuki', 'Tusitala', 'Twan', 'Twoee', 'Tylor', 'Tyquan', 'Tyrese', 'Tyshawn', 'Tyshon', 'Tavia', 'Taiva', 'Tamir', 'Tanyel', 'Tasos', 'Taven', 'Tazhon', 'Teikari', 'Teylor', 'Themis', 'Thobian', 'Thylin', 'Timmu', 'Tineke', 'Tj', 'Toyeeb', 'Trystan', 'Tuca', 'Tuwan', 'Twiggy', 'Tygo', 'Tyzhe', 'Timerante', 'Tylique', 'Tshima', 'Tabby', 'Taige', 'Taila', 'Terence', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Vance', 'Vera', 'Vernon', 'Vinson', 'Victor', 'Virgil', 'Victoria', 'Viola', 'Vicente', 'Van', 'Verne', 'Vic', 'Vito', 'Vivian', 'Virginia', 'Valerie', 'Veronica', 'Vanessa', 'Vicki', 'Vickie', 'Velma', 'Violet', 'Verna', 'Vicky', 'Valeria', 'Valery', 'Venus', 'Verena', 'Vesta', 'Vida', 'Valencia', 'Valentina', 'Valorie', 'Vanda', 'Vanesa', 'Vania', 'Varsha', 'Veena', 'Veer', 'Vena', 'Verity', 'Veronique', 'Vesna', 'Vien', 'Vijaya', 'Vikki', 'Vilma', 'Viorica', 'Viviana', 'Vadim', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy', 'Walker', 'Wilson', 'Ward', 'Webb', 'Warren', 'Washington', 'Watkins', 'West', 'Wheeler', 'Williamson', 'Willis', 'Wallace', 'Wade', 'Walter', 'Warner', 'Webster', 'William', 'Waller', 'Walton', 'Ware', 'Watts', 'Weber', 'Whitehead', 'Wilder', 'Wilkinson', 'Witt', 'Wolfe', 'Wilbur', 'Winston', 'Winifred', 'Waite', 'Walden', 'Waldron', 'Washburn', 'Watt', 'Webber', 'Weldon', 'Wesley', 'Westbrook', 'Weston', 'Whitfield', 'Whitlock', 'Whitmore', 'Whittaker', 'Willard', 'Willoughby', 'Winslow', 'Wayne', 'Wendell', 'Woodrow', 'Kevin', 'Cary', 'Carl', 'Zack', 'Warren', 'Lucas', 'Lance', 'Allen', 'Kane', 'Andy']

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
    var name_return = '抖音昵称'
    var img_return = '抖音头像'
    var jj_return = '抖音简介'
    var status = 0
    var x = 'zzzzzz'
    var tep = 0 //判断编辑资料界面该干啥
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        nickname = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie'].split('|||')[0]
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    var name = nickname
    var jianjie = jianjie
    while (1) {
        try {
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
                                tep = 1
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
                            tep = 1
                        }
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.xgsrizhi("资料审核中")
                            info = '抖音资料审核中,' + img_return + ',抖音资料审核中'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.xgsrizhi("今日修改上限")
                            info = '抖音今日修改上限,' + img_return + ',抖音今日修改上限'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 1
                        TKB.xgsrizhi("头像不修改")
                        img_return = '抖音头像不修改'
                    }
                }
                if (tep == 1) {
                    if (xs['是否修改名字'] == '是') {
                        // TKB.xgsrizhi("修改名字")
                        if (text(name).exists() && text('名字').exists()) {
                            TKB.xgsrizhi("已经是该名字了,名字修改完成")
                            toastLog("名字修改完成")
                            sleep(2000)
                            tep = 2
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
                        if (TKB.zhaose("if isColor(290,982,0xffffff,80) and isColor(334,981,0xffffff,80) and isColor(386,982,0xffffff,80) and isColor(528,1005,0xffffff,80) and isColor(605,988,0xffffff,80) and isColor(734,988,0xffffff,80) and isColor(782,987,0xffffff,80) and isColor(559,973,0x030405,80) and isColor(568,1037,0x030405,80) then")) {
                            TKB.xgsrizhi("昵称已被使用")
                            toastLog("头像修改完成")
                            var ncx = nc[random(0, nc.length - 1)]
                            name = name + ncx
                        }
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.xgsrizhi("资料审核中")
                            info = name_return + ',' + img_return + ',抖音今日修改上限'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.xgsrizhi("今日修改上限")
                            info = name_return + ',' + img_return + ',抖音今日修改上限'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 2
                        TKB.xgsrizhi("昵称不修改")
                        name_return = '抖音昵称不修改'
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
                    if (xs['是否修改简介'] == '是') {
                        // TKB.xgsrizhi("修改简介")
                        if (text(jianjie).exists() && text('名字').exists()) {
                            TKB.xgsrizhi("已经是该简介了,简介修改完成")
                            toastLog("简介修改完成")
                            jj_return = '抖音简介符合'
                            jj_result = true
                            tep = 4
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
                        if (TKB.zhaose("if isColor(284,978,0xffffff,80) and isColor(260,959,0x4f4f50,80) and isColor(328,979,0xffffff,80) and isColor(452,980,0xffffff,80) and isColor(527,1006,0xffffff,80) and isColor(623,978,0xffffff,80) and isColor(729,978,0xffffff,80) and isColor(778,985,0xffffff,80) and isColor(823,1022,0x4f4f50,80) then")) {
                            TKB.xgsrizhi("资料审核中")
                            info = name_return + ',' + img_return + ',抖音今日修改上限'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                        if (TKB.zhaose("if isColor(223,946,0x030405,80) and isColor(236,967,0xffffff,80) and isColor(390,968,0xffffff,80) and isColor(485,971,0xffffff,80) and isColor(705,982,0xffffff,80) and isColor(831,973,0xffffff,80) and isColor(509,1014,0xffffff,80) and isColor(567,1011,0xffffff,80) and isColor(677,1025,0x030405,80) then")) {
                            TKB.xgsrizhi("今日修改上限")
                            info = name_return + ',' + img_return + ',抖音今日修改上限'
                            TKB.xgsrizhi(info)
                            TKB.upinfo(sbip, user_id, yhbh, info, '2')
                            back()
                            sleep(2000)
                            return false
                        }
                    } else {
                        tep = 4
                        TKB.xgsrizhi("简介不修改")
                        jj_return = '抖音简介不修改'
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
                                if (id('com.ss.android.ugc.aweme:id/gft').exists()) {
                                    var z = id('com.ss.android.ugc.aweme:id/gft').find()
                                }
                                if (id('com.ss.android.ugc.aweme:id/hrg').exists()) {
                                    var z = id('com.ss.android.ugc.aweme:id/hrg').find()
                                }
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
                    if (!text("关注").exists() && !text("消息").exists() && !text("我").exists()) {
                        back()
                        TKB.xgsrizhi("返回首页")
                        sleep(3000)
                    }
                    if (xs['是否修改头像'] == '是') {
                        if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
                            if (desc("修改主页背景图").exists()) {
                                if (id('com.ss.android.ugc.aweme:id/bbo').exists()) {
                                    id('com.ss.android.ugc.aweme:id/bbo').findOnce().click()
                                }
                                if (id('com.ss.android.ugc.aweme:id/b1_').exists()) {
                                    id('com.ss.android.ugc.aweme:id/b1_').findOnce().click()
                                }
                                TKB.xgsrizhi("点击修改主页背景图")
                                sleep(3000)
                            }
                            if (text("更换").exists() && desc("下载").exists()) {
                                click("更换")
                                TKB.xgsrizhi("点击更换")
                                sleep(3000)
                            }
                            if (text("从相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("从相册选择").exists()) {
                                TKB.xgsrizhi("从相册选择")
                                click("从相册选择")
                                sleep(2000)
                            }
                            if (text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()) {
                                TKB.xgsrizhi("相册选择")
                                click("从相册选择")
                                sleep(2000)
                            }
                            if (text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.ss.android.ugc.aweme:id/e9r").exists()) {
                                TKB.xgsrizhi("选择照片")
                                click(270, 320) //选择第一张
                                sleep(1000)
                                if (text("图片太小").exists() && text("知道了").exists()) {
                                    TKB.xgsrizhi("图片太小")
                                    toastLog('图片太小')
                                    back()
                                    sleep(2000)
                                    back()
                                    sleep(2000)
                                } else {
                                    click(950, 1820) //确定
                                    sleep(2000)
                                }
                            }
                            if (text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()) {
                                TKB.xgsrizhi("裁剪")
                                click("完成")
                                sleep(1000)
                                toastLog("主页背景修改完成")
                                tep = 7
                            }
                        }
                    } else {
                        tep = 7
                        TKB.xgsrizhi("主页背景不修改")
                    }
                } else if (tep == 7) {
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
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(3000)
        }
    }
}

//发布视频
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
    var status = 0
    var xs = TKB.zhid(sbip, run_id)
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
        TKB.xgsrizhi("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                status = 1
                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
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
                                status = 1
                                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
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
                status = 1
                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
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
                    status = 1
                    TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                    return true
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            TKB.xgsrizhi("一秒前的视频")
            status = 1
            TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
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

//新发布视频
function xinfabsp() {
    TKB.xgsrizhi("新发布视频")
    var stt = random(10, 20)
    var biaoti = "o" //视频标题
    var zpsl = 0 //现在的作品数量
    var ylsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var szfm = 0 //设置封面
    var status = 0
    var fenlei = 0 //素材的分类
    var leixing = 0 //素材的类型
    var piantou = 0 //判断是否加片头
    var xs = TKB.zhid(sbip, run_id)
    if (xs != false) {
        fenlei = xs["素材库类"]
        leixing = xs["素材类型"]
        piantou = xs["是否添加视频文字"]
    }
    if (leixing.indexOf("----") != -1) {
        TKB.xgsrizhi("只制作视频")
        var std = leixing.split("----")
        leixing = std[0]
        var zzcs = std[1]
        TKB.xgsrizhi("类型" + leixing + "制作次数" + zzcs)
        if (isNaN(zzcs)) {
            TKB.xgsrizhi("传进来的不是数字")
            return false
        } else {
            zzcs = Number(zzcs)
        }
        for (j = 0, len = zzcs; j < len; j++) {
            var dff = TKB.jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou)
            if (dff == false) {
                TKB.xgsrizhi("视频制作失败")
                return false
            }
        }
        return true
    }
    var dff = TKB.jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou)
    if (dff == false) {
        TKB.xgsrizhi("视频制作失败")
        return false
    }
    TKB.qinglihh()
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                status = 1
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
                                status = 1
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
            if (text("下一步").exists()) {
                TKB.xgsrizhi("下一步")
                click("下一步")
                sleep(3000)
            }
        }
        if (text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()) {
            TKB.xgsrizhi("发布")
            if (szfm < 2) {
                TKB.xgsrizhi("先去设置封面")
                click("选封面")
                sleep(2000)
                szfm = szfm + 1
            } else {
                setText(biaoti)
                sleep(500)
                click("发布")
                sleep(3000)
                fb = 1
            }
        }
        if (text("选封面").exists() && id("com.ss.android.ugc.aweme:id/c_f").exists() || text("选封面").exists() && id("com.ss.android.ugc.aweme:id/fy2").exists()) {
            log("选择封面")
            click(950, 1750)
            sleep(2000)
            click(1000, 85)
            sleep(2000)
            szfm = 5
        }
        if (szfm != 0 && id("com.ss.android.ugc.aweme:id/ewg").exists() && id("android:id/content").exists()) {
            log("点到全屏观看")
            click(500, 500)
            sleep(2000)
        }
        if (text("同步到今日头条").exists()) {
            TKB.xgsrizhi("同步到今日头条")
            if (fb != 0) {
                TKB.xgsrizhi("发布成功")
                click("同步到今日头条")
                sleep(1000)
                    // click(530, 1530)
                sleep(3000)
                status = 1
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
                    status = 1
                    return true
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            TKB.xgsrizhi("一秒前的视频")
            status = 1
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

//带小程序发布视频
function xcxfabusp() {
    TKB.xgsrizhi("带小程序发布视频")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(15, 20)
    var biaoti = "o" //视频标题
    var zpsl = 0 //现在的作品数量
    var ylsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var ssy = 0 //设置声音
    var tplj = "https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/123.jpg"
    var lj = TKB.hqtpsplj(sbip, user_id, yhbh, app_id, 2)
        // lj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/qita/2.mp4"
        // lj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/qita/2.mp4"
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
            if (text("编辑资料").exists() || textContains("编辑资料").exists()) {
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
                                click("好友") //点击好友
                                sleep(2000)
                            } else {
                                TKB.xgsrizhi("点击首页")
                                click(100, 1850)
                                sleep(2000)
                            }
                            if (zpsl > ylsl) {
                                TKB.xgsrizhi("现在的作品数量大于原来的")
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
        if (text("发现好友").exists() && desc("返回").exists() || text("发现好友").exists() && text("好友列表").exists()) {
            TKB.xgsrizhi("准备进入扫一扫")
            if (fb == 0) {
                click("发现好友")
                sleep(1000)
                var sp = TKB.xztp(tplj)
                if (sp == false) {
                    TKB.xgsrizhi("下载图片失败")
                    return false
                }
                if (text("扫一扫加好友").exists()) {
                    click("扫一扫加好友")
                } else {
                    if (text("扫一扫").exists()) {
                        click("扫一扫")
                    }
                }
                sleep(2000)
            } else {
                back()
                sleep(2000)
            }
        }

        if (text("扫一扫").exists() && desc("相册").exists() || desc("返回").exists() && text("相册").exists()) {
            TKB.xgsrizhi("扫码界面")
            if (fb == 0) {
                click("相册")
                sleep(1000)
            } else {
                back()
                sleep(2000)
            }
        }

        if (text("确认").exists() && text("预览").exists()) {
            TKB.xgsrizhi("选择照片界面")
            click(270, 320)
            sleep(1000)
            click("确认")
            sleep(3000)
        }
        if (id("com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_back").exists() && id("com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_more").exists()) {
            TKB.xgsrizhi("小程序界面")
            if (fb == 0) {
                if (text("拍抖音").exists()) {
                    log("拍抖音")
                    try {
                        var node = text("拍抖音").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(500)
                        click("拍抖音")
                        sleep(1200)
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                } else {
                    try {
                        var node = id("com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_more").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(1200)
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                }
            } else {
                log("返回")
                back()
                sleep(2000)
            }
        }
        if (text("拍抖音").exists() && text("收藏").exists() || text("拍抖音").exists() && text("重启小程序").exists()) {
            TKB.xgsrizhi("拍抖音2")
            if (fb == 0) {
                try {
                    var node = text("拍抖音").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(500)
                    click("拍抖音")
                    sleep(1200)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                back()
                sleep(2000)
            }
        }
        if (text("所有照片").exists() && text("下一步").exists() || text("可同时选视频与图片").exists() && text("下一步").exists()) {
            TKB.xgsrizhi("选择视频")
            click(210, 260)
            sleep(1000)
            click("下一步")
            sleep(2000)
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
                    return true
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            TKB.xgsrizhi("一秒前的视频")
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

//视频删除
function shipinsc() {
    TKB.xgsrizhi("视频删除")
    launch("com.ss.android.ugc.aweme")
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.aweme")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi("超时退出")
            return false
        }
        try {
            var tss = 2
            if ((text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
                TKB.xgsrizhi("首页")
                click(970, 1840)
                sleep(2000)
            }
            if (textContains("编辑资料").exists() && text("获赞").exists() || text("编辑资料").exists() && text("获赞").exists() && text("关注").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
                TKB.xgsrizhi("我的界面")
                swipe(700, 1000, 700, 1300, 300)
                sleep(1000)
                var ss = TKB.getAllTexts()
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("作品 ") != -1) {
                        TKB.xgsrizhi(ss[j])
                        click(ss[j])
                        var st = ss[j].split("品 ")
                        var djsl = st[1]
                        TKB.xgsrizhi("作品数量：" + djsl)
                        if (text('草稿箱').exists()) {
                            TKB.xgsrizhi("草稿箱")
                            var zz = 1
                            for (x = 0, len = ss.length; x < len; x++) {
                                if (ss[x].indexOf("个作品") != -1) {
                                    TKB.xgsrizhi(ss[x])
                                    click(ss[x])
                                    var st = ss[x].split("个作品")
                                    var cgxsl = st[0]
                                    TKB.xgsrizhi("草稿箱数量：" + cgxsl)
                                }
                            }
                        }
                        if (djsl == 0 && !text('草稿箱').exists() || djsl == "0" && !text('草稿箱').exists()) {
                            TKB.xgsrizhi("已经删除完了")
                            return true
                        } else {
                            try {
                                var fg = (new Date()).getTime()
                                while (1) {
                                    if (desc('视频1').exists()) {
                                        TKB.xgsrizhi("视频1")
                                        desc('视频1').click()
                                        sleep(4000)
                                        var tss = 0
                                    } else if (desc('图片1').exists()) {
                                        TKB.xgsrizhi("图片1")
                                        desc('图片1').click()
                                        sleep(4000)
                                        var tss = 1
                                    }
                                    if ((new Date()).getTime() - fg > 5 * 60 * 1000) {
                                        TKB.xgsrizhi("超时没删除完先退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    //删除草稿箱
                                    if (zz == 1) {
                                        while (1) {
                                            if (text('本地草稿箱').exists() && text('选择').exists()) {
                                                TKB.xgsrizhi("本地草稿箱")
                                                click('选择')
                                                sleep(2000)
                                            }
                                            var i = id("com.ss.android.ugc.aweme:id/a1c").checked(false).find()
                                            TKB.xgsrizhi("选择数量" + i.length)
                                            i.some(e => {
                                                e.click()
                                                sleep(500)
                                            })
                                            if (id('com.ss.android.ugc.aweme:id/g00').exists()) {
                                                var cs = id('com.ss.android.ugc.aweme:id/g00').findOnce().text()
                                                var csx = cs[3]
                                                TKB.xgsrizhi(csx)
                                            }
                                            if (csx < cgxsl) {
                                                TKB.xgsrizhi("aaa")
                                                swipe(700, 1500, 700, 500, 300)
                                                sleep(1000)
                                            }
                                            if (csx == cgxsl) {
                                                TKB.xgsrizhi("bbb")
                                                id('com.ss.android.ugc.aweme:id/g00').click()
                                                sleep(2000)
                                            }
                                            if (text('删除选中的草稿？').exists() && text('删除').exists()) {
                                                TKB.xgsrizhi("删除草稿")
                                                click('删除')
                                                zz = 0
                                                sleep(2000)
                                                break
                                            }
                                        }
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/a9r").exists() && id("com.ss.android.ugc.aweme:id/djq").exists()) {
                                        TKB.xgsrizhi("评论界面1")
                                        back()
                                        sleep(500)
                                        back()
                                        sleep(500)
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/a9r").exists() && !id("com.ss.android.ugc.aweme:id/djq").exists()) {
                                        TKB.xgsrizhi("评论界面")
                                        back()
                                        sleep(500)
                                    }
                                    if (id('com.ss.android.ugc.aweme:id/pc').exists() && tss == 0) {
                                        TKB.xgsrizhi("点击视频")
                                        click(994, 1408) //视频
                                        sleep(2000)
                                    } else if (id('com.ss.android.ugc.aweme:id/pc').exists() && tss == 1) {
                                        TKB.xgsrizhi("点击图片")
                                        click(994, 1562) //图片
                                        sleep(2000)
                                    }
                                    if (text("转发").exists() && text("朋友圈").exists() || text("分享到").exists()) {
                                        TKB.xgsrizhi("删除界面")
                                        swipe(900, 1600, 200, 1600, 500)
                                        sleep(1000)
                                        swipe(900, 1600, 200, 1600, 500)
                                        sleep(1000)
                                        if (text("删除").exists()) {
                                            TKB.xgsrizhi("看到删除了")
                                            click("删除")
                                            sleep(2000)
                                        } else {
                                            TKB.xgsrizhi("找删除")
                                            swipe(900, 1600, 200, 1600, 500)
                                            sleep(2000)
                                        }
                                    }
                                    if (text('是否确认删除？').exists() && text("删除").exists() && text("取消").exists()) {
                                        TKB.xgsrizhi("确认删除")
                                        click("删除")
                                        sleep(2000)
                                        back()
                                        sleep(2000)
                                        djsl = Number(djsl) - 1
                                        toastLog("还剩余个数" + djsl)
                                    }
                                    if (djsl == 0 && !text('草稿箱').exists() || djsl == "0" && !text('草稿箱').exists()) {
                                        TKB.xgsrizhi("已经删除完了")
                                        return true
                                    }
                                }
                            } catch (error) {
                                sleep(1001)
                                TKB.xgsrizhi(error);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

//退出账号
function tuichuzh() {
    TKB.xgsrizhi('退出账号')
    launch('com.ss.android.ugc.aweme')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var zz = 0
    var yccs = 0
    while (1) {
        if ((new Date()).getTime() - BD > 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            killapp('抖音短视频')
            sleep(1000)
            launch('com.ss.android.ugc.aweme')
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                TKB.xgsrizhi('首页')
                text('我').findOnce().parent().parent().parent().click()
                sleep(2000)
            }
            if (text('编辑资料').exists() && text('获赞').exists() && desc('更多').exists() || desc('作者头像').exists() && desc('发现好友').exists()) {
                TKB.xgsrizhi('我的界面')
                desc('更多').findOnce().parent().click()
                sleep(2000)
            }
            if (text('设置').exists() && text('我的二维码').exists() && text('钱包').exists()) {
                TKB.xgsrizhi('功能界面')
                click('设置')
                sleep(2000)
            }
            if (text('设置').exists() && text('帐号与安全').exists() && text('隐私设置').exists()) {
                TKB.xgsrizhi('设置界面')
                click('帐号与安全')
                sleep(2000)
            }
            if (text('帐号与安全').exists() && text('抖音号').exists() && text('手机绑定').exists()) {
                TKB.xgsrizhi('帐号与安全界面')
                if (text('登录设备管理').exists()) {
                    TKB.xgsrizhi('找到登录设备管理')
                    click('登录设备管理')
                    sleep(5000)
                } else {
                    swipe(500, 1650, 500, 1100, 1000)
                }
            }
            if (desc('登录设备管理').exists()) {
                TKB.xgsrizhi('登录设备管理界面')
                if (bounds(0, 675, 1080, 945).exists()) {
                    TKB.xgsrizhi('点击第二个')
                    click(400, 820)
                    sleep(2000)
                } else {
                    TKB.xgsrizhi('没有其他设备')
                    TKB.xgsrizhi('共移除' + yccs + '个账号')
                    return true
                }
                if (desc('设备详情').exists() && desc('立即下线').exists()) {
                    TKB.xgsrizhi('不是本机')
                    var zz = 0
                    desc('立即下线').click()
                    sleep(3000)
                } else if (desc('设备详情').exists() && !desc('立即下线').exists()) {
                    TKB.xgsrizhi('本机')
                    zz++
                    back()
                    sleep(2000)
                }
                if (desc('取消').exists() && desc('移除').exists()) {
                    TKB.xgsrizhi('移除')
                    desc('移除').click()
                    yccs++
                    sleep(3000)
                }
                if (zz > 3) {
                    TKB.xgsrizhi('没有其他账号了')
                    TKB.xgsrizhi('共移除' + yccs + '个账号')
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
        zonghe()
    }
}

//抖音直播
function dyzhibo() {
    TKB.xgsrizhi("观看抖音直播")
    var TSD = (new Date()).getTime()
    var xs = TKB.zhid(sbip, run_id)
        // var url = "https://v.douyin.com/Jd2rLDf/"   //直播间连接
    log(xs)
    var url = xs["account"] //直播间连接
    var huahsu = xs["话术"] //直播间话术
    var yanshi = xs["话术频率"] //直播间话术时间间隔
    var dzjg = xs["点赞频率"] //直播间点赞时间间隔
    var dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
    var gzs = xs["关注"] //直播间关注
    var fst = xs["加粉丝团"] //直播间关注
    var tuichu = xs["退出"] //判断是否退出当前任务
    var danmu = xs["发弹幕"] //判断是否发弹幕
    var dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
    var dssl = xs["电商刷屏数量"] //电商刷屏数量
    var dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
    var sfslw = xs["是否刷礼物"] //是否刷礼物
    var slwjg = xs["刷礼物间隔"] //刷礼物间隔
    var slwgs = xs["刷礼物数量"] //刷礼物数量
    var fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
    var zhuantgai = xs["status"] //任务的状态


    var yu = (new Date()).getTime() //发话术时间
    var dz = (new Date()).getTime() //点赞时间
    var dssj = (new Date()).getTime() //电商刷屏时间
    var slwsj = (new Date()).getTime() //刷礼物时间
    var zhubx = (new Date()).getTime() //访问主播服务器的时间
    var ttn = 0 //判断有没有点关注
    var ftt = 0 //判断有没有点加粉丝团
    TKB.xgsrizhi("获取到的链接" + url)
    TKB.qinglihh()
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
            TKB.xgsrizhi("打开看看-进入直播")
            click('打开看看')
            sleep(2000)
        }
        if (textContains('打开看看').exists()) {
            TKB.xgsrizhi("打开看看2")
            try {
                var ss = textContains("打开看看").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
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
        log(waitTime);
        if (waitTime > 20) {
            log(waitTime - 20)
            sleep((waitTime - 20) * 1000)
        }
        if (id("com.ss.android.ugc.aweme:id/e7d").exists()) {
            log("点击红包");
            id("com.ss.android.ugc.aweme:id/e7d").findOnce().click()
        }

        if (id("com.ss.android.ugc.aweme:id/eep").exists()) {
            log("点击抢红包");
            id("com.ss.android.ugc.aweme:id/eep").findOnce().click()
            sleep(1000)
        }
        if (text("手慢了").exists()) {
            log("关闭抢红包");
            id("com.ss.android.ugc.aweme:id/gr8").findOnce().click()
            sleep(2000)
            redPacketm = 0
        }
        if (text('打开看看').exists()) {
            TKB.xgsrizhi("打开看看2")
            try {
                var ss = text("打开看看").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
            TKB.xgsrizhi("直播界面")
            toastLog("直播界面")
            sleep(2000)
            if (lpp == 0) {
                TKB.upkfrenw(sbip, user_id, yhbh, run_id)
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
            if (ttn == 0 && gzs == 1) {
                log("去关注")
                click(80, 60)
                sleep(2000)
            } else {
                if (fst == 1 && ftt == 0 && id("com.ss.android.ugc.aweme:id/d0z").exists()) {
                    TKB.xgsrizhi("加粉丝团")
                    try {
                        var ss = id("com.ss.android.ugc.aweme:id/d0z").findOnce().bounds();
                        log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    } catch (error) {
                        sleep(1001)
                        log(error);
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
                        TKB.xgsrizhi("电商刷屏")
                        click(610, 1847) //点击购物
                        sleep(2000)
                        while (1) {
                            if ((new Date()).getTime() - sop > 90 * 1000) {
                                TKB.xgsrizhi("超时没浏览商品")
                                break
                            }
                            if (id('com.ss.android.ugc.aweme:id/b7m').exists() && id('com.ss.android.ugc.aweme:id/g9p').exists() || text('去购买').exists() && textContains("件商品").exists()) {
                                TKB.xgsrizhi("商品界面")
                                if (kll > 3) {
                                    TKB.xgsrizhi("退出商品界面2")
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
                                TKB.xgsrizhi("我知道了")
                                click('我知道了')
                                sleep(2000)
                            }
                            if (text('立即购买').exists() && id('com.ss.android.ugc.aweme:id/a2e').exists() || text('加入购物车').exists() || text('立即购买').exists() && text("咨询").exists()) {
                                TKB.xgsrizhi("商品详情界面")
                                if (kll > 3) {
                                    log("退出商品界面")
                                    back()
                                    sleep(2000)
                                    dsspsl = dsspsl + 1
                                } else {
                                    TKB.xgsrizhi("下滑")
                                    swipe(500, 1700, 500, 500, 500)
                                    sleep(random(3000, 5000))
                                    kll = kll + 1
                                }
                            }
                            if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                TKB.xgsrizhi("直播界面ss")
                                if (kll > 3) {
                                    TKB.xgsrizhi("浏览商品结束")
                                    break
                                } else {
                                    TKB.xgsrizhi("点击购物")
                                    click(610, 1847) //点击购物
                                    sleep(2000)
                                }
                            }
                            if (textContains('送出礼物').exists() && text('取消').exists()) {
                                TKB.xgsrizhi("没点到购物车")
                                kll = kll + 1
                                back()
                                sleep(2000)
                            }
                            if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                TKB.xgsrizhi("没点到购物车4")
                                kll = kll + 1
                                back()
                                sleep(2000)
                            }
                            if (id('com.ss.android.ugc.aweme:id/gwv').exists()) {
                                TKB.xgsrizhi("直接点击直播间弹窗商品")
                                try {
                                    var ss = id("com.ss.android.ugc.aweme:id/gwv").findOnce().bounds();
                                    log(ss)
                                    click(ss.centerX(), ss.centerY());
                                    sleep(2000)
                                } catch (error) {
                                    sleep(1001)
                                    log(error);
                                }
                            }
                        }
                        dssj = (new Date()).getTime()
                    } else {
                        if (Number(sfslw) == 1 && Number(yslw) < Number(slwgs) && (new Date()).getTime() - slwsj > Number(slwjg) * 1000) {
                            TKB.xgsrizhi("直播间刷礼物")
                            var slti = (new Date()).getTime()
                            var lwys = 0
                            click(744, 1848) //点击礼物
                            sleep(2000)
                            while (1) {
                                if ((new Date()).getTime() - slti > 90 * 1000) {
                                    TKB.xgsrizhi("刷礼物超时")
                                    break
                                }
                                if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                    TKB.xgsrizhi("直播界面l2")
                                    if (lwys != 0) {
                                        TKB.xgsrizhi("送礼物结束")
                                        break
                                    } else {
                                        TKB.xgsrizhi("点击礼物")
                                        click(744, 1847) //点击礼物
                                        sleep(2000)
                                    }
                                }
                                if (text('查看特权').exists() && id('com.ss.android.ugc.aweme:id/e4z').exists() || id('com.ss.android.ugc.aweme:id/bcx').exists() && id('com.ss.android.ugc.aweme:id/bd4').exists() || id('com.ss.android.ugc.aweme:id/a7h').exists() && text('充值').exists()) {
                                    TKB.xgsrizhi("礼物界面")
                                    if (text('充值').exists()) {
                                        TKB.xgsrizhi("没抖币")
                                        toastLog("没抖币")
                                        back()
                                        sleep(2000)
                                        break
                                    } else {
                                        if (lwys == 0) {
                                            if (id('com.ss.android.ugc.aweme:id/e4z').exists()) {
                                                try {
                                                    var ss = id("com.ss.android.ugc.aweme:id/e4z").findOnce().text();
                                                    log(ss)
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
                                                    log(error);
                                                }
                                            }
                                        } else {
                                            TKB.xgsrizhi("已送礼物")
                                            back()
                                            break
                                        }
                                    }
                                }
                                if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                    TKB.xgsrizhi("充值界面-没钱了")
                                    break
                                }
                                if (textContains('抖币').exists() && text('发送').exists() || textContains('至少画').exists() && text('发送').exists()) {
                                    TKB.xgsrizhi("连画界面")
                                    back()
                                    sleep(2000)
                                }
                            }
                            slwsj = (new Date()).getTime()
                        } else {
                            if (Number(fensitp) == 1 && Number(fstdp) == 0) {
                                TKB.xgsrizhi("粉丝团灯牌")
                                var slti = (new Date()).getTime()
                                click(744, 1848) //点击礼物
                                sleep(2000)
                                while (1) {
                                    if ((new Date()).getTime() - slti > 90 * 1000) {
                                        TKB.xgsrizhi("粉丝团灯牌超时")
                                        break
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/gwv").exists() && id("com.ss.android.ugc.aweme:id/gk8").exists() || id("com.ss.android.ugc.aweme:id/dhn").exists() || id("com.ss.android.ugc.aweme:id/eo3").exists() && id("com.ss.android.ugc.aweme:id/bht").exists() || text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()) {
                                        TKB.xgsrizhi("直播界面33")
                                        if (fstdp != 0) {
                                            TKB.xgsrizhi("送礼物结束")
                                            break
                                        } else {
                                            TKB.xgsrizhi("点击礼物")
                                            click(744, 1847) //点击礼物
                                            sleep(2000)
                                        }
                                    }
                                    if (desc('加入粉丝团 1抖币').exists() && desc('专属勋章').exists() || desc('专属礼物').exists() && desc('专属进场').exists()) {
                                        TKB.xgsrizhi("还没加入粉丝团")
                                        back()
                                        sleep(2000)
                                        break
                                    }
                                    if (text('查看特权').exists() && id('com.ss.android.ugc.aweme:id/e4z').exists() || id('com.ss.android.ugc.aweme:id/bcx').exists() && id('com.ss.android.ugc.aweme:id/bd4').exists() || id('com.ss.android.ugc.aweme:id/a7h').exists() && text('充值').exists()) {
                                        TKB.xgsrizhi("礼物界面")
                                        if (text('充值').exists()) {
                                            TKB.xgsrizhi("没抖币")
                                            toastLog("没抖币")
                                            back()
                                            sleep(2000)
                                            break
                                        } else {
                                            if (fstdp == 0) {
                                                if (id('com.ss.android.ugc.aweme:id/e4z').exists()) {
                                                    try {
                                                        var ss = id("com.ss.android.ugc.aweme:id/e4z").findOnce().text();
                                                        log(ss)
                                                        if (ss != "充值") {
                                                            click(92, 1831) //点击礼物
                                                            sleep(500)
                                                            click(246, 1832) //点击粉丝团礼物
                                                            sleep(2000)
                                                            if (text('粉丝团灯牌').exists()) {
                                                                try {
                                                                    var ss = text("粉丝团灯牌").findOnce().bounds();
                                                                    log(ss)
                                                                    click(ss.centerX(), ss.centerY());
                                                                    sleep(400)
                                                                    click(ss.centerX(), ss.centerY());
                                                                    sleep(2000)
                                                                    fstdp = fstdp + 1
                                                                } catch (error) {
                                                                    sleep(1001)
                                                                    log(error);
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
                                                        log(error);
                                                    }
                                                }
                                            } else {
                                                TKB.xgsrizhi("已送礼物")
                                                back()
                                                break
                                            }
                                        }
                                    }
                                    if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
                                        TKB.xgsrizhi("充值界面-没钱了")
                                        fstdp = 1
                                        break
                                    }
                                    if (textContains('抖币').exists() && text('发送').exists() || textContains('至少画').exists() && text('发送').exists()) {
                                        TKB.xgsrizhi("连画界面")
                                        back()
                                        sleep(2000)
                                    }
                                }
                            }
                            if (Number(danmu) == 1 && (new Date()).getTime() - yu > Number(yanshi) * 1000) {
                                TKB.xgsrizhi("发弹幕")
                                click(120, 1830)
                                sleep(1500)
                                var fas = huahsu.split("|")
                                setText(fas[random(0, fas.length - 1)])
                                sleep(500)
                                if (id("com.ss.android.ugc.aweme:id/eoc").exists()) {
                                    TKB.xgsrizhi("点击发送")
                                    try {
                                        var ss = id("com.ss.android.ugc.aweme:id/eoc").findOnce().bounds();
                                        log(ss)
                                        click(ss.centerX(), ss.centerY());
                                        sleep(2000)
                                    } catch (error) {
                                        sleep(1001)
                                        log(error);
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
                TKB.xgsrizhi("去上传人气")
                TKB.uprenqi(sbip, user_id, yhbh, run_id, "1")
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.xgsrizhi("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
                zhuantgai = xs["status"] //任务的状态
                rq = (new Date()).getTime()
            }
            TSD = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - TSD > 90 * 1000) {
                TKB.xgsrizhi("超时从新打开")
                TSD = (new Date()).getTime()
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.xgsrizhi("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
                zhuantgai = xs["status"] //任务的状态
                TKB.qinglihh()
                sleep(2000)
                setClip(url)
                sleep(2000)
                launch("com.ss.android.ugc.aweme")
                sleep(6000)
            }
            if (text('打开看看').exists()) {
                TKB.xgsrizhi("打开看看-进入直播")
                click('打开看看')
                sleep(2000)
            }
            if (textContains('打开看看').exists()) {
                TKB.xgsrizhi("打开看看2")
                try {
                    var ss = textContains("打开看看").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
                sleep(2000)
            }
        }
        if (text("直播已结束").exists() && id("com.ss.android.ugc.aweme:id/ff1").exists() || text("直播已结束").exists() && id("com.ss.android.ugc.aweme:id/pq").exists()) {
            TKB.xgsrizhi("直播已经结束")
            jieshu = jieshu + 1
            if (jieshu > 2) {
                TKB.xgsrizhi("结束退出")
                return true
            } else {
                TKB.xgsrizhi("重新去拿连接")
                xs = TKB.zhid(sbipx, run_id)
                url = xs["account"]
                TKB.xgsrizhi("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                dzjg = xs["点赞频率"] //直播间点赞时间间隔
                dzcs = xs["每次点赞数量"] //直播间点赞每次点赞数量
                gzs = xs["关注"] //直播间关注
                fst = xs["加粉丝团"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                dsshuap = xs["是否开启电商刷屏"] //判断是否开启电商刷屏
                dssl = xs["电商刷屏数量"] //电商刷屏数量
                dspl = xs["电商刷屏间隔"] //电商刷屏时间频率
                sfslw = xs["是否刷礼物"] //是否刷礼物
                slwjg = xs["刷礼物间隔"] //刷礼物间隔
                slwgs = xs["刷礼物数量"] //刷礼物数量
                fensitp = xs["粉丝团灯牌"] //刷粉丝团灯牌
                zhuantgai = xs["status"] //任务的状态
                TKB.qinglihh()
                setClip(url)
                launch("com.ss.android.ugc.aweme")
            }
        }
        if (text("主页").exists() && text("举报").exists() || text("+关注").exists()) {
            TKB.xgsrizhi("关注界面")
            if (gzs == 1) {
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
            TKB.xgsrizhi("发消息界面")
            back()
            sleep(2000)
        }
        try {
            if (url == undefined || tuichu == 1 || Number(zhuantgai) != 1) {
                TKB.xgsrizhi("获取不到链接" + tuichu)
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
        if (desc("专属勋章").exists() && desc("粉丝特权").exists() || desc("专属礼物").exists() && desc("专属进场").exists()) {
            TKB.xgsrizhi("加入粉丝团")
            if (fst == 1 && ftt == 0) {
                TKB.xgsrizhi("加入粉丝团2")
                click(500, 1810)
                sleep(2000)
            } else {
                back()
                sleep(3000)
            }
        }
        if (text("授权").exists()) {
            log("授权")
            back()
            sleep(2000)
        }
        if (desc("加入粉丝团 1抖币").exists()) {
            log("加入粉丝团 1抖币")
            if (fst == 1 && ftt == 0) {
                try {
                    var ss = desc("加入粉丝团 1抖币").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    ftt = 1
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                back()
                sleep(3000)
            }
        }
        if (textContains("余额不足").exists()) {
            log("余额不足，请充值")
            back()
            ftt = 1
            sleep(2000)
        }
        if (desc("我的粉丝团等级").exists() || desc("做任务得更多特权").exists()) {
            TKB.xgsrizhi("我的粉丝团等级-已经加了粉丝团")
            back()
            ftt = 1
            sleep(2000)
        }
        if (id('com.ss.android.ugc.aweme:id/b7m').exists() && id('com.ss.android.ugc.aweme:id/g9p').exists() || text('去购买').exists() && textContains("件商品").exists()) {
            TKB.xgsrizhi("商品界面ss")
            back()
            sleep(2000)
        }
        if (text('立即购买').exists() && id('com.ss.android.ugc.aweme:id/a2e').exists() || text('加入购物车').exists() || text('立即购买').exists() && text("咨询").exists()) {
            TKB.xgsrizhi("商品详情界面sx")
            back()
            sleep(2000)
        }
        if (text('当前最多可换').exists() && text('充值').exists() || textContains('收入兑换').exists() && text('充值').exists()) {
            TKB.xgsrizhi("没点到购物车3")
            back()
            sleep(2000)
        }
        if (textContains('送出礼物').exists() && text('取消').exists()) {
            TKB.xgsrizhi("没点到购物车2")
            back()
            sleep(2000)
        }
        zonghe()
    }
}

// 关注
function follow() {
    TKB.xgsrizhi('关注用户')
    launch('com.ss.android.ugc.aweme')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171821'
    var xs = TKB.zhid(sbip, run_id),
        live_obj
        // var live_obj = 'https://v.douyin.com/JhphGwH/'
    var is_follow = false,
        follow_num = 2
    if (xs['抖音号/链接'] == undefined || xs['抖音号/链接'] == '') {
        TKB.xgsrizhi('未获取到关注用户所需的参数')
        return false
    } else {
        live_obj = xs['抖音号/链接']
        if (live_obj.indexOf('https://') != -1) {
            home()
            sleep(2000)
            setClip(live_obj)
            launch('com.ss.android.ugc.aweme')
        }
    }

    function backs() {
        if (live_obj.indexOf('https://') == -1) {
            for (var i = 0; i < 2; i++) {
                sleep(2000)
                back()
            }
        } else {
            sleep(2000)
            back()
        }
    }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.qinglihh("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch('com.ss.android.ugc.aweme')
            is_follow = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                TKB.xgsrizhi('首页')
                    // text('首页').findOnce().parent().parent().parent().click()
                click(122, 1829)
                sleep(2000)
            }
            if (desc('搜索').exists() && text('推荐').exists()) {
                TKB.xgsrizhi('搜索按钮')
                    // desc('搜索').findOnce().parent().parent().click()
                click(987, 135)
                sleep(2000)
            }
            if (id('com.ss.android.ugc.aweme:id/ai3').exists() && text('取消').exists() && !text('综合').exists()) {
                TKB.xgsrizhi('输入抖音ID_' + live_obj)
                id('com.ss.android.ugc.aweme:id/ai3').findOnce().click()
                sleep(2000)
                id('com.ss.android.ugc.aweme:id/ai3').findOnce().setText(live_obj)
                sleep(2000)
                id('com.ss.android.ugc.aweme:id/ai3').findOnce().click()
                sleep(2000)
                click(980, 1820)
                sleep(5000)
            }
            if (id('com.ss.android.ugc.aweme:id/gd6').exists() && id('com.ss.android.ugc.aweme:id/gd6').findOnce().text() == live_obj) {
                TKB.xgsrizhi('选择该用户')
                var er = id('com.ss.android.ugc.aweme:id/gd6').findOnce().bounds()
                click(er.centerX(), er.centerY())
                sleep(2000)
            }
            if (text('检测到链接，是否要打开').exists() && text('忽略').exists() && text('前往').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                text('前往').findOnce().click()
                BD = (new Date()).getTime()
                sleep(random(15000, 20000))
            }
            if (text('抖音号:' + live_obj).exists() && (text('关注').exists() || text('回关').exists())) {
                TKB.xgsrizhi('关注_' + live_obj)
                if (text('关注').exists()) {
                    text('关注').findOnce().click()
                    is_follow = true
                    sleep(2000)
                } else if (text('回关').exists()) {
                    text('回关').findOnce().click()
                    is_follow = true
                    sleep(2000)
                }
            }
            if (textStartsWith('抖音号：').exists() && (text('#  关注').exists() || text('#  回关').exists())) {
                TKB.xgsrizhi('关注_')
                if (text('#  关注').exists()) {
                    text('#  关注').findOnce().click()
                    is_follow = true
                    sleep(2000)
                } else if (text('#  回关').exists()) {
                    text('#  回关').findOnce().click()
                    is_follow = true
                    sleep(2000)
                }
            }
            if ((text('抖音号:' + live_obj).exists() && (text('已关注').exists() || text('互相关注').exists())) || text('取消关注').exists() || text('互相关注').exists()) {
                if (is_follow == false && follow_num == 2) {
                    TKB.xgsrizhi('你已经关注过此用户,关注失败')
                    toastLog("你已经关注过此用户,关注失败")
                    backs()
                    return false
                } else {
                    if (follow_num > 0) {
                        follow_num--
                        if (live_obj.indexOf('https://') == -1) {
                            sleep(2000)
                            back()
                        } else {
                            home()
                            sleep(1000)
                            setClip(live_obj)
                            sleep(3000)
                            launch('com.ss.android.ugc.aweme')
                        }
                        is_follow = false
                        continue
                    } else {
                        if (is_follow == false) {
                            TKB.xgsrizhi('关注成功')
                            toastLog("关注成功")
                            backs()
                            return true
                        } else {
                            TKB.xgsrizhi('关注失败')
                            toastLog("关注失败")
                            backs()
                            return false
                        }
                    }
                }
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

// 点赞
function like_works() {
    TKB.xgsrizhi('抖音点赞')
    launch('com.ss.android.ugc.aweme')
    sleep(8000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171547'
    var is_open = false
    var xs = TKB.zhid(sbip, run_id),
        live_obj
        // var live_obj = '#社会很冷酷，但有一些离开是为了走得更近！！ #男人  #暑期知识大作战  https://v.douyin.com/Jkuo7fY/ 复制此链接，打开【抖音短视频】，直接观看视频！'
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        live_obj = xs['作品链接']
    }
    if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
        click("我")
        TKB.xgsrizhi('点击我')
        sleep(5000)
    }
    if (textStartsWith("编辑资料").exists() && (text("朋友").exists() || text("好友").exists())) {
        var lickClick = textStartsWith("喜欢").findOnce().text()
        TKB.xgsrizhi(lickClick)
        sleep(3000)
        TKB.qinglihh()
        sleep(3000)
        setClip(live_obj)
        sleep(3000)
        launch('com.ss.android.ugc.aweme')
        sleep(6000)
    }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.qinglihh("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch('com.ss.android.ugc.aweme')
            is_open = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('检测到链接，是否要打开').exists() && textEndsWith('的作品').exists() && text('前往').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                text('前往').findOnce().click()
                is_open = true
                sleep(random(20000, 35000))
            }
            if (text('检测到链接，是否要打开').exists() && textEndsWith('的作品').exists() && text('打开看看').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                    // text('前往').findOnce().click()
                click("打开看看")
                is_open = true
                sleep(random(20000, 35000))
            }
            if (!id('com.ss.android.ugc.aweme:id/erg').exists() && id('com.ss.android.ugc.aweme:id/pc').exists() && is_open == true) {
                TKB.xgsrizhi('已打开链接，准备点赞')
                var x = random(150, 750)
                var y = random(600, 1200)
                sleep(2000)
                click(x, y)
                sleep(50)
                click(x, y)
                sleep(50)
                click(x, y)
                sleep(5000)
                TKB.qinglihh()
                sleep(3000)
                launch('com.ss.android.ugc.aweme')
                sleep(8000)
                if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                    click("我")
                    TKB.xgsrizhi('点击我')
                    sleep(6000)
                }
                if (textStartsWith("编辑资料").exists() && (text("朋友").exists() || text("好友").exists())) {
                    var lickClicks = textStartsWith("喜欢").findOnce().text()
                    TKB.xgsrizhi(lickClicks)
                    if (lickClick == lickClicks) {
                        toast("点赞失败")
                        TKB.xgsrizhi("点赞失败")
                        TKB.qinglihh()
                        return false
                    } else {
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        toast("点赞成功")
                        TKB.xgsrizhi("点赞成功")
                        TKB.qinglihh()
                        return true
                    }
                }
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

// 评论
function comment_works() {
    TKB.xgsrizhi('抖音评论')
    launch('com.ss.android.ugc.aweme')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        // run_id = '277444'
    var xs = TKB.zhid(sbip, run_id)
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        var live_obj = xs['作品链接']
        var hs = xs['话术']
        var ss = hs.split("|")
        var comment_text = ss[random(0, ss.length - 1)]
        home()
        sleep(2000)
        setClip(live_obj)
        launch('com.ss.android.ugc.aweme')
    }
    var is_open = false,
        send_comment = false
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch('com.ss.android.ugc.aweme')
            is_open = send_comment = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                TKB.xgsrizhi('首页')
                sleep(2000)
            }
            if (text('检测到链接，是否要打开').exists() && textEndsWith('的作品').exists() && text('前往').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                text('前往').findOnce().click()
                is_open = true
                sleep(random(15000, 25000))
            }
            if (!id('com.ss.android.ugc.aweme:id/erg').exists() && id('com.ss.android.ugc.aweme:id/pc').exists() && is_open == true) {
                TKB.xgsrizhi('已打开链接，准备评论')
                click(980, 1110)
                sleep(2000)
            }
            if (id('com.ss.android.ugc.aweme:id/a9r').exists() && is_open == true) {
                TKB.xgsrizhi('输入评论文本')
                id('com.ss.android.ugc.aweme:id/a9r').findOnce().click()
                sleep(2000)
                id('com.ss.android.ugc.aweme:id/a9r').findOnce().setText(comment_text)
                sleep(2000)
            }
            if (id('com.ss.android.ugc.aweme:id/a__').exists() && id('com.ss.android.ugc.aweme:id/a__').findOnce().enabled() == true) {
                TKB.xgsrizhi('发送')
                id('com.ss.android.ugc.aweme:id/a__').findOnce().click()
                send_comment = true
                sleep(2000)
            }
            if (!id('com.ss.android.ugc.aweme:id/a__').exists() && send_comment == true) {
                TKB.xgsrizhi('评论成功')
                back()
                return true
            }
            // zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
/**抖音作品浏览
 * 
 */
function dy_browse() {
    TKB.xgsrizhi('抖音作品浏览')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //   run_id = '412547'
    var is_open = false
    var xs = TKB.zhid(sbip, run_id);
    var live_obj = "";
    var times = 1;
    // var live_obj = "小短腿的世界处处被针对…  https://v.douyin.com/JkUDnL1/ 复制此链接，打开【抖音短视频】，直接观看视频！"
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        live_obj = xs['作品链接']
    }
    //获取浏览次数
    if (xs['浏览次数'] == undefined || xs['浏览次数'] == '') {
        TKB.xgsrizhi('未获取到浏览次数')
        return false
    } else {
        times = xs['浏览次数']
    }
    for (let i = 0; i < times; i++) {
        BD = (new Date()).getTime()
        home()
        sleep(2000)
        setClip(live_obj)
        launch('com.ss.android.ugc.aweme')
        while (1) {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.killapp("抖音短视频")
                sleep(1000)
                getClip() == live_obj ? '' : setClip(live_obj)
                sleep(3000)
                launch('com.ss.android.ugc.aweme')
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
                TKB.xgsrizhi('超时退出')
                return false
            }
            try {
                if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                    TKB.xgsrizhi('首页')
                    sleep(2000)
                }
                if (text('检测到链接，是否要打开').exists() && textEndsWith('的作品').exists() && text('前往').exists()) {
                    TKB.xgsrizhi('检测到链接，立即打开')
                    text('前往').findOnce().click()
                    is_open = true
                    sleep(3000)
                }
                if (is_open) {
                    BD = (new Date()).getTime()
                }
                if (!id('com.ss.android.ugc.aweme:id/erg').exists() && id('com.ss.android.ugc.aweme:id/pc').exists() && is_open == true) {
                    TKB.xgsrizhi('已打开链接，准备浏览')
                    var REZ = (new Date()).getTime()
                    while (1) {
                        if ((new Date()).getTime() - REZ > random(30, 45) * 1000) {
                            TKB.xgsrizhi('浏览结束')
                            TKB.qinglihh();
                            break;
                        } else {
                            TKB.xgsrizhi('观看视频中')
                            toastLog('观看视频中')
                            sleep(5000)
                        }
                    }
                    break;
                }
                zonghe()
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        toastLog("第" + (i + 1) + "遍完成浏览");
    }
}

// 回关
function each_other_follow() {
    TKB.xgsrizhi('抖音回关')
    launch('com.ss.android.ugc.aweme')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch('com.ss.android.ugc.aweme')
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                TKB.xgsrizhi('首页')
                text('消息').findOnce().parent().parent().parent().click()
                sleep(2000)
            }
            if (desc('粉丝').exists() && desc('赞').exists() && desc('@我的').exists()) {
                TKB.xgsrizhi('查看粉丝')
                desc('粉丝').findOnce().click()
                sleep(5000)
            }
            if (text('回关').exists() && text('关注了你').exists()) {
                TKB.xgsrizhi('有粉丝关注了你')
                var follow_list = text('回关').id('com.ss.android.ugc.aweme:id/b9_').find()
                follow_list.forEach(e => {
                    e.click()
                    sleep(2000)
                })
            }
            if (!text('回关').exists() && text('互相关注').exists()) {
                TKB.xgsrizhi('互关完成')
                back()
                sleep(2000)
                return true
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

// 姓名
function result_name() {
    xing = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
        '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
        '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
        '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
        '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
        '姚', '邵', '堪', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞',
        '熊', '纪', '舒', '屈', '项', '祝', '董', '梁'
    ]
    ming = ['的', '一', '是', '了', '我', '不', '人', '在', '他', '有', '这', '个', '上', '们', '来', '到', '时', '大', '地',
        '为', '子', '中', '你', '说', '生', '国', '年', '着', '就', '那', '和', '要', '她', '出', '也', '得', '里', '后', '自',
        '以', '会', '家', '可', '下', '而', '过', '天', '去', '能', '对', '小', '多', '然', '于', '心', '学', '么', '之', '都',
        '好', '看', '起', '发', '当', '没', '成', '只', '如', '事', '把', '还', '用', '第', '样', '道', '想', '作', '种', '开',
        '美', '总', '从', '无', '情', '己', '面', '最', '女', '但', '现', '前', '些', '所', '同', '日', '手', '又', '行', '意',
        '动', '方', '期', '它', '头', '经', '长', '儿', '回', '位', '分', '爱', '老', '因', '很', '给', '名', '法', '间', '斯',
        '知', '世', '什', '两', '次', '使', '身', '者', '被', '高', '已', '亲', '其', '进', '此', '话', '常', '与', '活', '正',
        '感', '见', '明', '问', '力', '理', '尔', '点', '文', '几', '定', '本', '公', '特', '做', '外', '孩', '相', '西', '果',
        '走', '将', '月', '十', '实', '向', '声', '车', '全', '信', '重', '三', '机', '工', '物', '气', '每', '并', '别', '真',
        '打', '太', '新', '比', '才', '便', '夫', '再', '书', '部', '水', '像', '眼', '等', '体', '却', '加', '电', '主', '界',
        '门', '利', '海', '受', '听', '表', '德', '少', '克', '代', '员', '许', '稜', '先', '口', '由', '死', '安', '写', '性',
        '马', '光', '白', '或', '住', '难', '望', '教', '命', '花', '结', '乐', '色', '更', '拉', '东', '神', '记', '处', '让',
        '母', '父', '应', '直', '字', '场', '平', '报', '友', '关', '放', '至', '张', '认', '接', '告', '入', '笑', '内', '英',
        '军', '候', '民', '岁', '往', '何', '度', '山', '觉', '路', '带', '万', '男', '边', '风', '解', '叫', '任', '金', '快',
        '原', '吃', '妈', '变', '通', '师', '立', '象', '数', '四', '失', '满', '战', '远', '格', '士', '音', '轻', '目', '条',
        '呢', '病', '始', '达', '深', '完', '今', '提', '求', '清', '王', '化', '空', '业', '思', '切', '怎', '非', '找', '片',
        '罗', '钱', '紶', '吗', '语', '元', '喜', '曾', '离', '飞', '科', '言', '干', '流', '欢', '约', '各', '即', '指', '合',
        '反', '题', '必', '该', '论', '交', '终', '林', '请', '医', '晚', '制', '球', '决', '窢', '传', '画', '保', '读', '运',
        '及', '则', '房', '早', '院', '量', '苦', '火', '布', '品', '近', '坐', '产', '答', '星', '精', '视', '五', '连', '司',
        '巴', '奇', '管', '类', '未', '朋', '且', '婚', '台', '夜', '青', '北', '队', '久', '乎', '越', '观', '落', '尽', '形',
        '影', '红', '爸', '百', '令', '周', '吧', '识', '步', '希', '亚', '术', '留', '市', '半', '热', '送', '兴', '造', '谈',
        '容', '极', '随', '演', '收', '首', '根', '讲', '整', '式', '取', '照', '办', '强', '石', '古', '华', '諣', '拿', '计',
        '您', '装', '似', '足', '双', '妻', '尼', '转', '诉', '米', '称', '丽', '客', '南', '领', '节', '衣', '站', '黑', '刻',
        '统', '断', '福', '城', '故', '历', '惊', '脸', '选', '包', '紧', '争', '另', '建', '维', '绝', '树', '系', '伤', '示',
        '愿', '持', '千', '史', '谁', '准', '联', '妇', '纪', '基', '买', '志', '静', '阿', '诗', '独', '复', '痛', '消', '社',
        '算', '义', '竟', '确', '酒', '需', '单', '治', '卡', '幸', '兰', '念', '举', '仅', '钟', '怕', '共', '毛', '句', '息',
        '功', '官', '待', '究', '跟', '穿', '室', '易', '游', '程', '号', '居', '考', '突', '皮', '哪', '费', '倒', '价', '图',
        '具', '刚', '脑', '永', '歌', '响', '商', '礼', '细', '专', '黄', '块', '脚', '味', '灵', '改', '据', '般', '破', '引',
        '食', '仍', '存', '众', '注', '笔', '甚', '某', '沉', '血', '备', '习', '校', '默', '务', '土', '微', '娘', '须', '试',
        '怀', '料', '调', '广', '蜖', '苏', '显', '赛', '查', '密', '议', '底', '列', '富', '梦', '错', '座', '参', '八', '除',
        '跑', '亮', '假', '印', '设', '线', '温', '虽', '掉', '京', '初', '养', '香', '停', '际', '致', '阳', '纸', '李', '纳',
        '验', '助', '激', '够', '严', '证', '帝', '饭', '忘', '趣', '支', '春', '集', '丈', '木', '研', '班', '普', '导', '顿',
        '睡', '展', '跳', '获', '艺', '六', '波', '察', '群', '皇', '段', '急', '庭', '创', '区', '奥', '器', '谢', '弟', '店',
        '否', '害', '草', '排', '背', '止', '组', '州', '朝', '封', '睛', '板', '角', '况', '曲', '馆', '育', '忙', '质', '河',
        '续', '哥', '呼', '若', '推', '境', '遇', '雨', '标', '姐', '充', '围', '案', '伦', '护', '冷', '警', '贝', '著', '雪',
        '索', '剧', '啊', '船', '险', '烟', '依', '斗', '值', '帮', '汉', '慢', '佛', '肯', '闻', '唱', '沙', '局', '伯', '族',
        '低', '玩', '资', '屋', '击', '速', '顾', '泪', '洲', '团', '圣', '旁', '堂', '兵', '七', '露', '园', '牛', '哭', '旅',
        '街', '劳', '型', '烈', '姑', '陈', '莫', '鱼', '异', '抱', '宝', '权', '鲁', '简', '态', '级', '票', '怪', '寻', '杀',
        '律', '胜', '份', '汽', '右', '洋', '范', '床', '舞', '秘', '午', '登', '楼', '贵', '吸', '责', '例', '追', '较', '职',
        '属', '渐', '左', '录', '丝', '牙', '党', '继', '托', '赶', '章', '智', '冲', '叶', '胡', '吉', '卖', '坚', '喝', '肉',
        '遗', '救', '修', '松', '临', '藏', '担', '戏', '善', '卫', '药', '悲', '敢', '靠', '伊', '村', '戴', '词', '森', '耳',
        '差', '短', '祖', '云', '规', '窗', '散', '迷', '油', '旧', '适', '乡', '架', '恩', '投', '弹', '铁', '博', '雷', '府',
        '压', '超', '负', '勒', '杂', '醒', '洗', '采', '毫', '嘴', '毕', '九', '冰', '既', '状', '乱', '景', '席', '珍', '童',
        '顶', '派', '素', '脱', '农', '疑', '练', '野', '按', '犯', '拍', '征', '坏', '骨', '余', '承', '置', '臓', '彩', '灯',
        '巨', '琴', '免', '环', '姆', '暗', '换', '技', '翻', '束', '增', '忍', '餐', '洛', '塞', '缺', '忆', '判', '欧', '层',
        '付', '阵', '玛', '批', '岛', '项', '狗', '休', '懂', '武', '革', '良', '恶', '恋', '委', '拥', '娜', '妙', '探', '呀',
        '营', '退', '摇', '弄', '桌', '熟', '诺', '宣', '银', '势', '奖', '宫', '忽', '套', '康', '供', '优', '课', '鸟', '喊',
        '降', '夏', '困', '刘', '罪', '亡', '鞋', '健', '模', '败', '伴', '守', '挥', '鲜', '财', '孤', '枪', '禁', '恐', '伙',
        '杰', '迹', '妹', '藸', '遍', '盖', '副', '坦', '牌', '江', '顺', '秋', '萨', '菜', '划', '授', '归', '浪', '听', '凡',
        '预', '奶', '雄', '升', '碃', '编', '典', '袋', '莱', '含', '盛', '济', '蒙', '棋', '端', '腿', '招', '释', '介', '烧', '误', '乾', '坤'
    ]
    var name = xing[Math.floor(Math.random() * xing.length)] + ming[Math.floor(Math.random() * ming.length)] + ming[Math.floor(Math.random() * ming.length)]
    return name
}

// 看广告
function see_advertisement() {
    TKB.xgsrizhi('看广告')
    launch('com.ss.android.ugc.aweme')
        // var sbip = '47.114.99.72',
        //     run_id = '183025'
    var xs = TKB.zhid(sbip, run_id),
        live_obj = []
        // var live_obj = ['醉；##0wYM9craS98##抖音','@孙先生*111发了一个抖音短视频，你尽管点开，不好看算我输！；##keuMLJJaS98##抖音']
        // var live_obj = ['@孙先生*111发了一个抖音短视频，你尽管点开，不好看算我输！；##keuMLJJaS98##抖音']
    if (xs.length <= 0) {
        TKB.xgsrizhi('未获取到所需的参数')
        return false
    } else {
        for (let key in xs) {
            if (xs.hasOwnProperty(key) && xs[key] != undefined && xs[key] != '') {
                live_obj.push(xs[key])
            }
        }
    }
    live_obj.forEach(element => {
        // if (element.indexOf('douyin.com') == -1) {
        //     TKB.xgsrizhi('链接异常')
        //     return false
        // }
        home()
        setClip(element)
        sleep(2000)
        launch('com.ss.android.ugc.aweme')
        var is_follow = false
        var BD = (new Date()).getTime()
        var RE = (new Date()).getTime()
        while (1) {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.killapp("抖音短视频")
                sleep(1000)
                setClip(element)
                sleep(3000)
                launch('com.ss.android.ugc.aweme')
                is_follow = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - RE > 10 * 60 * 1000) {
                TKB.xgsrizhi('超时退出')
                return false
            }
            try {
                if (id('com.ss.android.ugc.aweme:id/xd').exists() && id('com.ss.android.ugc.aweme:id/ddq').exists()) {
                    TKB.xgsrizhi('关闭小程序弹窗')
                    id('com.ss.android.ugc.aweme:id/xd').findOnce().click()
                    sleep(2000)
                }
                if (text('检测到链接，是否要打开').exists() && text('前往').exists()) {
                    TKB.xgsrizhi('检测到链接，立即打开')
                    text('前往').findOnce().click()
                    BD = (new Date()).getTime()
                    sleep(2000)
                }
                if (text('检测到口令，是否要打开').exists() && text('前往').exists()) {
                    TKB.xgsrizhi('检测到口令，立即打开')
                    text('前往').findOnce().click()
                    BD = (new Date()).getTime()
                    sleep(2000)
                }
                if (!id('com.ss.android.ugc.aweme:id/erg').exists() && id('com.ss.android.ugc.aweme:id/pc').exists()) {
                    TKB.xgsrizhi('已打开链接')
                    if (TKB.zhaose("if isColor(51,1480,0x09c7e0,80) and isColor(57,1500,0xffffff,80) and isColor(63,1492,0x09c7e0,80) and isColor(72,1486,0xffffff,80) and isColor(72,1502,0xffffff,80) and isColor(79,1510,0x09c7e0,80) and isColor(51,1525,0x09c7e0,80) and isColor(93,1483,0x09c7e0,80) and isColor(92,1516,0x09c7e0,80) then")) {
                        TKB.xgsrizhi("1")
                        sleep(2000)
                        click(300, 1500)
                        sleep(5000)
                    } else if (TKB.zhaose("if isColor(52,1386,0x09c7e0,80) and isColor(63,1401,0x09c7e0,80) and isColor(57,1407,0xffffff,80) and isColor(73,1392,0xffffff,80) and isColor(72,1409,0xffffff,80) and isColor(79,1416,0x09c7e0,80) and isColor(53,1432,0x09c7e0,80) and isColor(95,1383,0x09c7e0,80) and isColor(95,1429,0x09c7e0,80) then")) {
                        TKB.xgsrizhi("2")
                        sleep(2000)
                        click(300, 1400)
                        sleep(5000)
                    } else if (TKB.zhaose("if isColor(51,1324,0x09c7e0,80) and isColor(63,1339,0x09c7e0,80) and isColor(57,1345,0xffffff,80) and isColor(71,1332,0xffffff,80) and isColor(72,1344,0xffffff,80) and isColor(81,1355,0x09c7e0,80) and isColor(51,1370,0x09c7e0,80) and isColor(92,1324,0x09c7e0,80) and isColor(97,1371,0x09c7e0,80) then")) {
                        TKB.xgsrizhi("3")
                        sleep(2000)
                        click(300, 1350)
                        sleep(5000)
                    } else if (TKB.zhaose("if isColor(49,1264,0x09c7e0,80) and isColor(63,1275,0x09c7e0,80) and isColor(57,1283,0xffffff,80) and isColor(72,1269,0xffffff,80) and isColor(72,1284,0xffffff,80) and isColor(79,1293,0x09c7e0,80) and isColor(51,1307,0x09c7e0,80) and isColor(91,1261,0x09c7e0,80) and isColor(93,1306,0x09c7e0,80) then")) {
                        TKB.xgsrizhi("4")
                        sleep(2000)
                        click(300, 1300)
                        sleep(5000)
                    } else if (TKB.zhaose("if isColor(52,1201,0x09c7e0,80) and isColor(63,1215,0x09c7e0,80) and isColor(57,1221,0xffffff,80) and isColor(72,1207,0xffffff,80) and isColor(72,1223,0xffffff,80) and isColor(79,1231,0x09c7e0,80) and isColor(50,1246,0x09c7e0,80) and isColor(94,1201,0x09c7e0,80) and isColor(94,1244,0x09c7e0,80) then")) {
                        TKB.xgsrizhi("5")
                        sleep(2000)
                        click(300, 1220)
                        sleep(5000)
                    }
                }
                if (TKB.zhaose("if isColor(666,344,0xff6786,80) and isColor(705,344,0xffffff,80) and isColor(1210,350,0xffffff,80) and isColor(1249,344,0xff6685,80) and isColor(1021,574,0xffffff,80) and isColor(1023,672,0xffffff,80) and isColor(822,770,0xff6786,80) and isColor(1053,775,0xff6786,80) then")) {
                    TKB.xgsrizhi("前任复合界面")
                    sleep(3000)
                    click(565, 1020)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(550, 1180)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(550, 1370)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(667,575,0x3c6ded,80) and isColor(773,574,0x3c6ded,80) and isColor(773,599,0x3c6ded,80) and isColor(848,587,0xfbffff,80) and isColor(1139,583,0xffffff,80) and isColor(852,697,0x3c6ded,80) and isColor(1073,694,0x3c6ded,80) and isColor(696,834,0x3c6ded,80) then")) {
                    TKB.xgsrizhi("测试姓名界面")
                    sleep(3000)
                    click(570, 1020)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(530, 1240)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(667,571,0xf39359,80) and isColor(772,571,0xf39359,80) and isColor(775,599,0xf39359,80) and isColor(848,581,0xfffff8,80) and isColor(1144,585,0xffffff,80) and isColor(849,694,0xf39359,80) and isColor(1058,695,0xf39359,80) and isColor(718,823,0xf39359,80) then")) {
                    TKB.xgsrizhi("测试前世界面")
                    sleep(3000)
                    click(570, 1020)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(530, 1240)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(669,582,0xd43e3d,80) and isColor(776,584,0xd43e3d,80) and isColor(776,611,0xd43e3d,80) and isColor(848,599,0xfcffff,80) and isColor(1135,597,0xffffff,80) and isColor(833,714,0xd43e3d,80) and isColor(1080,712,0xd43e3d,80) and isColor(737,852,0xd43e3d,80) then")) {
                    TKB.xgsrizhi("经历恋情界面")
                    sleep(3000)
                    click(600, 1050)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(530, 1260)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(666,577,0x022275,80) and isColor(773,574,0x022275,80) and isColor(773,601,0x022275,80) and isColor(848,587,0xfffffb,80) and isColor(1141,582,0xffffff,80) and isColor(844,696,0x022275,80) and isColor(1061,697,0x022275,80) and isColor(733,836,0x022275,80) then")) {
                    TKB.xgsrizhi("重名查询界面")
                    sleep(3000)
                    click(600, 1050)
                    sleep(2000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(530, 1260)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(77,792,0x550331,80) and isColor(179,775,0xf0185a,80) and isColor(616,830,0xf0f2c1,80) and isColor(154,998,0x333333,80) and isColor(876,993,0x333333,80) and isColor(886,1034,0x333333,80) and isColor(989,1401,0x343434,80) and isColor(775,293,0xfff0e1,80) then")) {
                    TKB.xgsrizhi("上古守护神器查询界面")
                    sleep(3000)
                    if (random(0, 2) == 1) {
                        click(280, 1320)
                        sleep(500)
                    }
                    click(460, 1320)
                    sleep(1000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(540, 1520)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(31,741,0x2e1916,80) and isColor(41,765,0xe9bf0e,80) and isColor(56,776,0xfefffa,80) and isColor(89,780,0xc30900,80) and isColor(627,273,0xc9c5c4,80) and isColor(897,244,0x0a0a10,80) and isColor(826,838,0xe3e9e2,80) and isColor(874,821,0x99aeb1,80) and isColor(941,807,0x568194,80) then")) {
                    TKB.xgsrizhi("你的心里住着什么鬼？")
                    sleep(5000)
                    if (random(0, 2) == 1) {
                        click(280, 1280)
                        sleep(500)
                    }
                    click(460, 1280)
                    sleep(1000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(540, 1480)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(48,552,0xdbaa2e,80) and isColor(408,436,0xd6b96b,80) and isColor(440,500,0x282e34,80) and isColor(596,483,0xa19992,80) and isColor(705,569,0x4a426f,80) and isColor(765,648,0xb6c6bc,80) and isColor(926,573,0xcfc5eb,80) and isColor(796,798,0x8560a0,80) and isColor(101,946,0xffffff,80) then")) {
                    TKB.xgsrizhi("测测你是火影中的谁？")
                    sleep(5000)
                    if (random(0, 2) == 1) {
                        click(280, 1280)
                        sleep(500)
                    }
                    click(460, 1280)
                    sleep(1000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(540, 1480)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(159,321,0xdfb47f,80) and isColor(522,104,0xe8611f,80) and isColor(155,544,0xd05f02,80) and isColor(508,509,0x428eb5,80) and isColor(566,716,0xf0bca3,80) and isColor(694,533,0xe96625,80) and isColor(831,579,0x759e5b,80) and isColor(912,760,0xba7637,80) then")) {
                    TKB.xgsrizhi("你姓氏隐藏的远古血脉是什么？")
                    sleep(5000)
                    if (random(0, 2) == 1) {
                        click(280, 1230)
                        sleep(500)
                    }
                    click(460, 1230)
                    sleep(1000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(540, 1420)
                    sleep(2000)
                    is_follow = true
                }
                if (TKB.zhaose("if isColor(68,194,0x73c8c3,80) and isColor(441,250,0xf9dc37,80) and isColor(623,284,0xf9dc37,80) and isColor(444,390,0x7b3726,80) and isColor(529,576,0x1f858b,80) and isColor(465,641,0x9f3100,80) and isColor(680,715,0xffffff,80) and isColor(682,803,0x9f3100,80) and isColor(743,788,0x56d6ce,80) then")) {
                    TKB.xgsrizhi("从名字看你是哪个奥特曼？")
                    sleep(5000)
                    if (random(0, 2) == 1) {
                        click(280, 1230)
                        sleep(500)
                    }
                    click(460, 1230)
                    sleep(1000)
                    setText(result_name())
                    sleep(1000)
                    click(400, 300)
                    sleep(2000)
                    click(540, 1420)
                    sleep(2000)
                    is_follow = true
                }
                if (id('com.ss.android.ugc.aweme:id/b1x').exists() && !text('关闭广告').exists()) {
                    TKB.xgsrizhi("浏览广告")
                    toastLog("浏览广告")
                    is_follow = false
                    sleep(4000)
                } else if (text('关闭广告').exists()) {
                    TKB.xgsrizhi("关闭广告")
                    text('关闭广告').findOnce().click()
                    is_follow = true
                    sleep(5000)
                }
                if (id('com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_back').exists() && is_follow == true) {
                    sleep(8000)
                    id('com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_back').findOnce().click()
                    TKB.xgsrizhi('关闭小程序')
                    sleep(2000)
                    back()
                    sleep(2000)
                    break
                }
                if (id('com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_back').exists() && id('com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_more').exists() && is_follow == true) {
                    sleep(8000)
                    id('com.ss.android.ugc.aweme.miniapp:id/microapp_m_titlebar_capsule_back').findOnce().click()
                    TKB.xgsrizhi('关闭小程序1')
                    sleep(2000)
                    back()
                    sleep(2000)
                    break
                }
                zonghe()
            } catch (error) {
                TKB.xgsrizhi(error);
            }
        }
    })
    TKB.qinglihh()
}

function iskeyopen(keylist) {
    try {
        log('关键词判断')
        var res = false;
        var a = id('com.ss.android.ugc.aweme:id/a91').find()
        log(a.length)
        //通过a.length判断获取到几个视频标题，再通过视频标题坐标判断是否为正在看的视频的标题
        if (a.length == 3) {
            vediotext = a[1].text()
        } else if (a.length == 2) {
            var vediobounds0 = a[0].bounds()
            if (vediobounds0.centerY() > 300 && vediobounds0.centerY() < 1800) {
                vediotext = a[0].text()
            } else {
                var vediobounds1 = a[1].bounds()
                if (vediobounds1.centerY() > 300 && vediobounds1.centerY() < 1800) {
                    vediotext = a[1].text()
                } else {
                    return res
                }
            }
        } else if (a.length == 1) {
            var vediobounds0 = a[0].bounds()
            if (vediobounds0.centerY() > 300 && vediobounds0.centerY() < 1800) {
                vediotext = a[0].text()
            } else {
                return res
            }
        } else {
            return res
        }
        for (let i = 0; i < keylist.length; i++) {
            if (vediotext.indexOf(keylist[i]) != -1) {
                res = true;
                break
            }
        }
        return res;
    } catch (error) {

    }
}
//新养号
function dyxyh() {
    log("抖音新养号")
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
    var z = ''
    var dj_num = random(1, 100)
    var pl_num = random(1, 100)
    var gz_num = random(1, 100)
    var ssx = random(1, 3)
    var xs = TKB.zhid(sbip, run_id)
    var gz = xs['关注百分比']
    var dz = xs['点赞百分比']
    // var gz = 0
    // var dz = 0
    if (gz == 0 || gz == '0') {
      gzx = 10
      log('关注百分比是' + gzx)
    } else {
      log('关注百分比是' + gz)
      gzx = gz
    }
    if (dz == 0 || dz == '0') {
      dzx = 30
      log('点赞百分比' + dzx)
    } else {
      log('点赞百分比' + dz)
      dzx = dz
    }
    var gjc = xs['关键词']
    // var gjc = zz
    var word = gjc.split("|")
    log('关键词' + word)
    sleep(3000)
    var ll = 0 //直播
    var tem = 0
    while (1) {
      if ((new Date()).getTime() - RT > stt * 60 * 1000) {
        log("时间够了退出")
        TKB.qinglihh()
        break
      }
      if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
        log("超时没在首页")
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
        if (text("关注").exists() && text("推荐").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists())) {
          log("首页")
          if (tem == 0) {
            log("推荐")
            click("推荐")
            sleep(random(3, 4) * 1000);
            swipe(500, 1600, 600, 400, 1200);
            sleep(1000)
            swipe(500, 1600, 600, 400, 1200);
            tem = 1
          }
          TSD = (new Date()).getTime()
          while (1) {
            // zonghe()
            try {
              if ((new Date()).getTime() - ssd > 40 * 60 * 1000 && ll < 5) {
                log("去看直播")
                click(330, 1830)
                sleep(2000)
                a = 1
                ll = ll + 1
                break
              }
              z = iskeyopen(word)
              if (text('点击进入直播间').exists() || text('直播中').exists() || z == false) {
                log('下滑')
                swipe(500, 1600, 600, 400, random(500, 800));
                TSD = (new Date()).getTime()
                z = ''
              }
              if (z == true) {
                log('符合条件')
                z = ''
                sleep(random(1, 2) * 1000);
                dinz = random(30, 50)
                dj_num = random(1, 100)
                pl_num = random(1, 100)
                gz_num = random(1, 100)
                // dzl = 0
                var TTguank = (new Date()).getTime()
                while (1) {
                  zonghe()
                  if ((new Date()).getTime() - TTguank < dinz * 1000) {
                    log("观看视频")
                    toastLog("观看视频")
                    sleep(3000)
                    TSD = (new Date()).getTime()
                  } else {
                    if (dj_num < dzx) {
                      log("点赞")
                      var x = random(150, 750)
                      var y = random(600, 1200)
                      click(x, y)
                      sleep(20)
                      click(x, y)
                      sleep(20)
                      click(x, y)
                      dj_num = 101
                    } else {
                      if (pl_num < 3) {
                        log("浏览评论")
                        click(980, 1110)
                        sleep(2000)
                        var sb = random(1, 5)
                        if (sb == 1) {
                          sleep(1000)
                          log("评论")
                          click(150, 1870)
                          sleep(2000)
                          setText("[" + bq[random(1, bq.length)] + "]")
                          sleep(1000)
                          if (id("com.ss.android.ugc.aweme:id/a__").exists()) {
                            var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
                            log(ss)
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
                        // zonghe()
                        back()
                        pl_num = 101
                      } else {
                        if (gz_num < gzx) {
                          if (id('com.ss.android.ugc.aweme:id/bku').exists() && id('com.ss.android.ugc.aweme:id/bku').exists()) {
                            log("关注")
                            click(990, 630)
                            sleep(1000)
                          } else {
                            log("关注1")
                            click(990, 750)
                            sleep(1000)
                          }
                          gz_num = 101
                        } else {
                          if ((new Date()).getTime() - TTguank > dinz * 1000) {
                            toastLog(dinz + "秒，滑动")
                            dzl = 0
                            if (id('com.ss.android.ugc.aweme:id/a9r').exists()) {
                              log("评论界面返回")
                              toastLog("评论界面返回")
                              back()
                              sleep(500)
                              back()
                              sleep(500)
                              back()
                              sleep(500)
                            }
                            swipe(500, 1600, 600, 400, 1200);
                            dinz = random(20, 50)
                            break
                          }
                        }
                      }
                    }
                  }
                }
              }
            } catch (error) {
              // toastLog(error)
              log(error)
              sleep(1000)
            }
          }
        }
      }
      if (text("直播广场").exists()) {
        log("直播广场")
        back()
        sleep(3000)
      }
      if (a == 1) {
        zonghe()
        if (text("同城").exists() || id("com.ss.android.ugc.aweme:id/dae").exists()) {
          toastLog("同城界面")
          log("同城界面")
          click(100, 1800)
          sleep(2000)
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
          log("首页")
          click(100, 130)
          sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/xj").exists() || text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()) {
          log("留下你的精彩评论吧")
          // var neir ="["+bq[random(0,bq.length - 1)]+"]"+"["+bq[random(0,bq.length - 1)]+"]"
          // setText(neir)
          back()
          sleep(3000)
        }
        if (id("com.ss.android.ugc.aweme:id/a__").exists() && id("com.ss.android.ugc.aweme:id/c3l").exists() || text("留下你的精彩评论吧").exists() || desc("留下你的精彩评论吧").exists()) {
          log("评论界面")
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
            log("直播评论")
            click(200, 1830)
            sleep(2000)
            setText("[" + bq[random(0, bq.length - 1)] + "]")
            sleep(1000)
            if (id("com.ss.android.ugc.aweme:id/eoc").exists()) {
              try {
                var ss = id("com.ss.android.ugc.aweme:id/eoc").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
              } catch (error) {
                sleep(1001)
                log(error);
              }
            }
            back()
            sleep(2000)
          }
          if ((new Date()).getTime() - ssd < zbt * 60 * 1000) {
            toastLog("观看直播中")
            log("观看直播中")
            sleep(3000)
          } else {
            toastLog("观看直播结束")
            back()
            sleep(3000)
            TKB.qinglihh()
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
          log("搜索界面")
          back()
          sleep(3000)
        }
        if (text("下线提醒").exists() && text("好").exists()) {
          log("下线提醒")
          click("好")
          sleep(2000)
          return false
        }
        if (id("com.ss.android.ugc.aweme:id/dl4").exists() && id("com.ss.android.ugc.aweme:id/es6").exists()) {
          log("直播评论界面")
          back()
          sleep(3000)
        }
      }
    }
}

//上传链接
function uplianji(lj) {
    var TSD = (new Date()).getTime()
    var lianj = lj
    log("上传链接" + lianj)
    while (1) {
        try {
            if ((new Date()).getTime() - TSD > 20 * 1000) {
                toastLog("超时退出")
                return false
            }
            var url = "http://122.228.155.196:8088/add_info";
            r = http.postJson(url, {
                phone: lianj,
            });
            if (r.statusCode == 200) {
                var ss = r.body.json();
                if (ss["code"] == 1) {
                    toastLog("上传成功")
                    return true
                } else {
                    toastLog("上传链接中")
                    sleep(2000)
                }
            }
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//抖音端午
function dyduanwu() {
    TKB.xgsrizhi("抖音端午")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var BB = (new Date()).getTime()
        // var xs = TKB.zhid(sbip, run_id)
        // if (xs == false){
        //     TKB.xgsrizhi("获取不到参数")
        //     return false
        // }
    var url = "￥k9l3FqVIs98￥第10个手气最佳 DOU音" //直播间连接
        // log(xs)
        // var url = xs["链接"] //直播间连接
    TKB.xgsrizhi("获取到的链接" + url)
    TKB.qinglihh()
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.ss.android.ugc.aweme")
    var cs = 0 //领红包的次数
    var lq = 0
    while (1) {
        if ((new Date()).getTime() - TSD > 20 * 60 * 1000 || cs > 2) {
            TKB.xgsrizhi("超时退出" + cs)
            return false
        }
        if (text('前往').exists()) {
            TKB.xgsrizhi("前往-进入活动")
            click('前往')
            sleep(2000)
        }
        if (text('前往').exists()) {
            TKB.xgsrizhi("前往2")
            try {
                var ss = text("前往").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(2000)
        }
        if (desc('全部收下').exists()) {
            TKB.xgsrizhi("全部收下")
            try {
                var ss = desc("全部收下").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(2000)
        }

        if (desc('好的').exists()) {
            TKB.xgsrizhi("好的")
            click(500, 1320)
            sleep(1000)
            try {
                var ss = desc("好的").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(2000)
        }
        if (desc('开心收下').exists()) {
            TKB.xgsrizhi("开心收下")
            try {
                var ss = desc("开心收下").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(2000)
        }
        if (desc('送你的假日红包').exists()) {
            TKB.xgsrizhi("送你的假日红包")
            click(510, 1200)
            sleep(random(1000, 1500))
        }
        if (desc('规则').exists() && desc('我的领取记录').exists() || desc('规则').exists() && desc('端午假日红包').exists()) {
            TKB.xgsrizhi("活动界面")
            if (lq == 0) {
                toastLog("领取红包界面")
                lq = 1
                BB = (new Date()).getTime()
            }
            if ((new Date()).getTime() - BB > 20 * 1000) {
                TKB.xgsrizhi("领取成功退出")
                click(500, 1400)
                sleep(random(1000, 1500))
                return true
            }
            RT = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - RT > 90 * 1000) {
                TKB.xgsrizhi("超时没进入活动界面")
                xs = TKB.zhid(sbip, run_id)
                if (xs == false) {
                    TKB.xgsrizhi("获取不到参数")
                    return false
                }
                log(xs)
                url = xs["链接"] //直播间连接
                TKB.qinglihh()
                setClip(url) //写连接进入粘贴板
                sleep(1000)
                launch("com.ss.android.ugc.aweme")
                RT = (new Date()).getTime()
                cs = cs + 1
            }
        }
        if (desc('口令已复制').exists() && desc('qqshare').exists() || desc('口令已复制').exists() && desc('分享好友领红包！').exists()) {
            log("口令已经复制")
            var koul = getClip()
            if (url != koul) {
                // uplianji(koul)
                return true
            } else {
                toastLog("复制不到口令")
                click(880, 720);
                sleep(2000)
            }
        }
        zonghe()
    }
}

//隐私设置
function playamount() {
    TKB.xgsrizhi("设置隐私")
    launch("com.ss.android.ugc.aweme")
    sleep(10000)
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var a = 0
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            zonghe()
            if (a == 0) {
                if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                    text('我').findOnce().parent().parent().parent().click()
                    TKB.xgsrizhi('点击我')
                    sleep(5000)
                }
                if (text("获赞").exists() && text("粉丝").exists()) {
                    swipe(700, 1600, 600, 700, 2000)
                    TKB.xgsrizhi("滑动")
                    sleep(3000)
                }
                a = 1
            }
            var playamounts = id("com.ss.android.ugc.aweme:id/g8z").find().filter(function(w) {
                return w.text() < 100
            })
            playamounts.forEach(element => {
                click(element.bounds().centerX(), element.bounds().centerY())
                TKB.xgsrizhi("点击作品")
                sleep(3000)
                if (id("com.ss.android.ugc.aweme:id/pc").exists()) {
                    click(996, 1373)
                    TKB.xgsrizhi("点击分享按钮")
                    sleep(3000)
                    swipe(980, 1580, 120, 1580, 1580)
                    sleep(3000)
                }
                if (text("权限设置").exists()) {
                    click("权限设置")
                    TKB.xgsrizhi("点击权限设置")
                    sleep(3000)
                }
                if (text("隐私设置").exists() && id("com.ss.android.ugc.aweme:id/p7").exists()) {
                    id("com.ss.android.ugc.aweme:id/d_m").findOnce().click()
                    TKB.xgsrizhi("点击谁可以看")
                    sleep(3000)
                    if (text("谁可以看").exists() && text("公开").exists() && text("好友可见").exists()) {
                        id("com.ss.android.ugc.aweme:id/ci2").findOnce().click()
                        TKB.xgsrizhi("点击私密")
                        sleep(3000)
                        if (text("好").exists()) {
                            click("好")
                            TKB.xgsrizhi("点击好")
                            sleep(3000)
                        }
                    }
                    back()
                    sleep(3000)
                    back()
                    sleep(3000)
                }
            });
            if (playamounts.length == 0) {
                TKB.xgsrizhi("全部设置完毕")
                toast("隐私全部设置完毕")
                sleep(5000)
                TKB.qinglihh()
                return true
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//关键词搜索养号
function searchItem() {
    TKB.xgsrizhi("搜索关键词养号")
    launch(dqbaoming);
    sleep(8000);
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var notInHome = 0;
    var ifClick = true;
    var keyword, keywords, word, likeMin, likePercent
    var xs = TKB.zhid(sbip, run_id)
    keywords = xs['关键词'];
    word = keywords.split("|")
    keyword = word[random(0, word.length - 1)]
    if (xs['点赞数量'] == '0' || xs['点赞数量'] == 0) {
        likeMin = 1000;
        TKB.xgsrizhi("未获取到点赞数量")
    } else {
        likeMin = xs['点赞数量'];
        TKB.xgsrizhi("获取到点赞数量" + likeMin)
    }
    if (xs['点赞百分比'] == 0 || xs['点赞百分比'] == '0') {
        likePercent = 10;
        TKB.xgsrizhi("未获取到点赞百分比")
    } else {
        likePercent = xs['点赞百分比'];
        TKB.xgsrizhi("获取到点赞百分比" + likePercent)
    }
    TKB.xgsrizhi("获取到的关键词为" + keyword);
    TKB.xgsrizhi("搜索关键词任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            zonghe()
            if (ifClick == true) {
                if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
                    // id("com.ss.android.ugc.aweme:id/bjo").findOnce().click()
                    click(988, 137)
                    TKB.xgsrizhi("点击搜索")
                    sleep(3000)
                }
                if (id("com.ss.android.ugc.aweme:id/aoh").exists() && text("取消").exists()) {
                    setText(keyword)
                    TKB.xgsrizhi("输入关键词")
                    sleep(5000)
                    click(983, 1829)
                    TKB.xgsrizhi("点击搜索")
                    sleep(5000)
                }
                if (text("综合").exists() && text("话题").exists() && text(keyword).exists()) {
                    click("话题")
                    TKB.xgsrizhi("点击话题")
                    sleep(5000)
                    if (text("搜索结果为空").exists() && text("话题").exists() && text(keyword).exists()) {
                        TKB.xgsrizhi("未找到话题");
                        TKB.qinglihh(dqbaoming);
                        sleep(2000);
                        launch(dqbaoming);
                        sleep(10000);
                        ifClick = true;
                        notInHome = 0;
                    }
                    if (id("com.ss.android.ugc.aweme:id/cnz").find().filter((w) => w.bounds().right > 0).length > 0) {
                        var follows = id("com.ss.android.ugc.aweme:id/cnz").find().filter((w) => w.bounds().right > 0)[0].children();
                    }
                    if (id("com.ss.android.ugc.aweme:id/yg").exists()) {
                        var follows = id("com.ss.android.ugc.aweme:id/cnz").find().filter((w) => w.bounds().right > 0)[0].children();
                    }
                    sleep(2000)
                    follows[random(0, follows.length - 1)].click()
                    TKB.xgsrizhi("点击感兴趣的话题")
                    sleep(5000)
                    if (id("com.ss.android.ugc.aweme:id/b3f").exists()) {
                        let videos = id("com.ss.android.ugc.aweme:id/b3f").findOnce().children().filter((w) => w.bounds().bottom > w.bounds().top);
                        videos[random(0, videos.length - 1)].child(0).click();
                        sleep(3000);
                    }
                }

                ifClick = false;
            }
            if (id("com.ss.android.ugc.aweme:id/pc").exists()) {
                if (text("点击进入直播间").exists()) {
                    swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
                    TKB.xgsrizhi("直播间，跳过")
                    sleep(3000)
                }
                if (likePercent > 0) {
                    let likeOrNot = random(1, 5);
                    likeOrNot == 1 ? (click(980, 895), likePercent--, TKB.xgsrizhi("点赞")) : TKB.xgsrizhi("不点赞");
                    sleep(5000);
                }
                sleep(random(20, 45) * 1000);
                swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
                sleep(3000)
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                item = 0
                sleep(2000);
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在抖音页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}
//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
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
                zonghe()
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
                sleep(3000)
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
        _THREADSSxx = threads.start(function() {
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
            var dl = dydl()
            if (dl == true) {
                if (fun == "发布视频") {
                    TKB.xgsrizhi("发布视频")
                    fabusp()
                    jiancedj()
                } else if (fun == "修改资料") {
                    gaizl()
                } else if (fun == "修改性别") {
                    gaixb()
                } else if (fun == "删除作品") {
                    shipinsc()
                    tuichuzh()
                } else if (fun == "直播间") {
                    dyzhibo()
                } else if (fun == "视频带上小程序") {
                    xcxfabusp()
                } else if (fun == "养号") {
                    // var xs = TKB.zhid(sbip, run_id)
                    dyyh()
                } else if (fun == "关注") {
                    follow()
                } else if (fun == "点赞") {
                    like_works()
                } else if (fun == "浏览任务") {
                    dy_browse()
                } else if (fun == "评论") {
                    comment_works()
                } else if (fun == "回关") {
                    each_other_follow()
                } else if (fun == "小程序测试") {
                    see_advertisement()
                } else if (fun == "新养号") {
                    dyxyh()
                } else if (fun == "端午活动") {
                    dyduanwu()
                } else if (fun == "隐私设置") {
                    playamount()
                } else if (fun == "新发布视频") {
                    xinfabsp()
                } else if (fun == "关键词养号") {
                    searchItem()
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

dyzhixing()