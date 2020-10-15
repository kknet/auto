﻿﻿﻿log("tKB")
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

function zonghe() {
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
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
    var zh = "18632698565"
    var yzm = "1234"
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
            fs = 0
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
                        fs = 0
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
                sleep(2000)
            } else {
                click("我已完成短信发送")
                sleep(4000)
                fs = 0
            }
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
            yzm = TKB.huoquyzm("抖音")
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
            var ss = TKB.getAllTexts()
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
                    swipe(500, 1800, 500, 900, 500)
                    sleep(1000)
                    if (id("com.ss.android.ugc.aweme:id/g8z").exists()) {
                        dybf = id("com.ss.android.ugc.aweme:id/g8z").findOnce().text()
                        TKB.xgsrizhi("播放数量：" + dybf)
                        if (dybf.indexOf("w") != -1) {
                            var st = dybf.split("w")
                            dybf = Number(st[0]) * 10000
                            TKB.xgsrizhi("实际播放数量：" + dybf)
                        }
                        TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
                    }
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
        zonghe()
    }
}

//抖音平台任务
function dyptrenwu(){
    TKB.xgsrizhi("抖音平台任务")
    var TSD = (new Date()).getTime()
    var TA = (new Date()).getTime()
    var fzan = 0          //服务器的全局变量-赞
    var fpinglun = 0      //服务器的全局变量-评论
    var fbofang = 0       //服务器的全局变量-播放
    var fguanzhu = 0      //服务器的全局变量-关注
    var fwqrw = hqqjbl(sbip, user_id, yhbh)
    if (fwqrw == false){
        TKB.xgsrizhi("服务器没任务或没开启")
        return false
    }else{
        fzan = fwqrw[0]
        fpinglun = fwqrw[1]
        fbofang = fwqrw[2]
        fguanzhu = fwqrw[3]
    }
    var huashu = "123"         //评论话术
    var rwlx = 1      //1 播放 3 点赞  4 关注  5 评论
    var tem = 0       //判断去拿平台任务
    var ptid = 0      //平台任务id
    var jcs = 0       //判断打开次数
    var rwurl = "https://v.douyin.com/Jd2rLDf/"   //平台任务链接
    var taskCat = 0       //平台任务taskCat
    while(1){
        if ((new Date()).getTime() - TSD > 2*60*60*1000){
            TKB.xgsrizhi("超时退出该任务")
            return false
        }
        if (tem == 0){
            TKB.xgsrizhi("获取已经做了多少任务")
            var dse = hqrwsl(sbip, user_id, yhbh)
            var yzan = dse[0]              //已做数量-赞
            var ypinglun = dse[2]      //已做数量-评论
            var ybofang = dse[3]        //已做数量-播放
            var yguanzhu = dse[1]      //已做数量-关注
            if (rwlx == 1){
                log("我是播放" + ybofang +"我是服务器" +fbofang)
                if (Number(ybofang) < Number(fbofang)){
                    TKB.xgsrizhi("去拿播放的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有播放任务了")
                        rwlx = 3
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("播放任务已经做完了")
                    rwlx = 3
                }
            }
            if (rwlx == 3){
                if (Number(yzan) < Number(fzan)){
                    TKB.xgsrizhi("去拿点赞的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有点赞任务了")
                        rwlx = 4
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    rwlx = 4
                }
            }
            if (rwlx == 4){
                if (Number(yguanzhu) < Number(fguanzhu)){
                    TKB.xgsrizhi("去拿关注的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有关注任务了")
                        rwlx = 5
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    rwlx = 5
                }
            }
            if (rwlx == 5){
                return true
                if (Number(ypinglun) < Number(fpinglun)){
                    TKB.xgsrizhi("去拿评论的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有评论任务了")
                        return true
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("评论任务已经做完了")
                    return true
                }
            }
            TKB.xgsrizhi("获取到的链接" + rwurl)
            TKB.qinglihh()
            setClip(rwurl)      //写连接进入粘贴板     
            sleep(1000)
            launch("com.ss.android.ugc.aweme")
            tem = 1
            TA = (new Date()).getTime()
        }
        if (text('前往').exists()){
            TKB.xgsrizhi('前往')
            try {
                var ss = text("前往").findOnce().bounds()
                TKB.xgsrizhi(ss.centerY())
                click(ss.centerX(), ss.centerY());
                sleep(4000)
                var TR = (new Date()).getTime()
                var dll = 0
                var renwuwc = 0
                while(1){
                    if ((new Date()).getTime() - TR > 2*60*1000){
                        TKB.xgsrizhi('超时退出')
                        break
                    }
                    if (rwlx == 4 && text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || rwlx == 4 && id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || rwlx == 4 && text('粉丝').exists() && desc('更多').exists()){
                        TKB.xgsrizhi("个人界面333")
                        if (text('取消关注').exists()){
                            TKB.xgsrizhi("已经关注过了2")
                            break
                        }else{
                            if (id('com.ss.android.ugc.aweme:id/dyl').exists()){
                                try {
                                    var ss = id("com.ss.android.ugc.aweme:id/dyl").findOnce().bounds();
                                    log(ss)
                                    click(ss.centerX(), ss.centerY());
                                    sleep(2000)
                                    renwuwc = 1
                                    break
                                } catch (error) {
                                    sleep(1001)
                                    log(error);
                                }
                            }
                        }
                    }else{
                        if (text('留下你的精彩评论吧').exists() && text('评论并转发').exists() || text('留下你的精彩评论吧').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists() || id('com.ss.android.ugc.aweme:id/a__').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists()){
                            TKB.xgsrizhi('评论界面')
                            dll = 1
                            if (rwlx == 5){
                                TKB.xgsrizhi('输入话术')
                                input(huashu)
                                sleep(500)
                                if (id('com.ss.android.ugc.aweme:id/a__').exists()){
                                    log("发送")
                                    try {
                                        var ss = text("前往").findOnce().bounds()
                                        TKB.xgsrizhi(ss.centerY())
                                        click(ss.centerX(), ss.centerY());
                                        sleep(1000)
                                    } catch (error) {
                                        sleep(1001)
                                        TKB.xgsrizhi(error);
                                    }
                                }else{
                                    TKB.xgsrizhi('直接点击发送')
                                    click(1000, 760)
                                    sleep(500)
                                }
                                renwuwc = 1
                                break
                            }else{
                                TKB.xgsrizhi('退出评论界面')
                                back()
                                sleep(random(15000, 25000))
                            }
                        }else{
                            if (dll == 0 || rwlx == 5){
                                TKB.xgsrizhi('点击评论')
                                click(500, 1850)
                                sleep(2000)
                            }else{
                                if (rwlx == 1){
                                    TKB.xgsrizhi('观看视频')
                                    toastLog("观看视频中...")
                                    var so = random(20, 40)
                                    if ((new Date()).getTime() - TR > so*1000){
                                        TKB.xgsrizhi('观看视频完成')
                                        renwuwc = 1
                                        break
                                    }
                                }else{
                                    if (rwlx == 3){
                                        TKB.xgsrizhi('点赞')
                                        var jt = captureScreen()
                                        var point = findColor(jt, "#fb446f", {
                                            region: [947,868, 50, 50],
                                            threshold: 6
                                        });
                                        if (point){  //判断红色
                                            TKB.xgsrizhi("已经点过赞了")
                                            break
                                        }
                                        point = findColor(jt, "#f2efec", {
                                            region: [947,868, 50, 50],
                                            threshold: 6
                                        });
                                        if (point){  //判断白色
                                            TKB.xgsrizhi("还没点赞")
                                            click(990,901)   //点赞
                                            sleep(2000)
                                            jt = captureScreen()
                                            point = findColor(jt, "#fb446f", {
                                                region: [947,868, 50, 50],
                                                threshold: 6
                                            });
                                            if (point){  //判断红色
                                                TKB.xgsrizhi("点赞成功")
                                                renwuwc = 1
                                                break
                                            }
                                        }
                                        break
                                    }else{
                                        if (rwlx == 4){
                                            if (text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || text('粉丝').exists() && desc('更多').exists()){
                                                TKB.xgsrizhi("个人界面")
                                                if (text('取消关注').exists()){
                                                    TKB.xgsrizhi("已经关注过了")
                                                    break
                                                }else{
                                                    if (id('com.ss.android.ugc.aweme:id/dyl').exists()){
                                                        try {
                                                            var ss = id("com.ss.android.ugc.aweme:id/dyl").findOnce().bounds();
                                                            log(ss)
                                                            click(ss.centerX(), ss.centerY());
                                                            sleep(2000)
                                                            renwuwc = 1
                                                            break
                                                        } catch (error) {
                                                            sleep(1001)
                                                            log(error);
                                                        }
                                                    }
                                                }
                                            }else{
                                                TKB.xgsrizhi("点击头像")
                                                click(986,678)   //点击头像
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (renwuwc == 1){
                    TKB.xgsrizhi("当前任务完成")
                    upptrw(ptid, rwlx, taskCat)
                    gxfuwuqi(sbip, rwlx, user_id, yhbh, app_id)
                }
                tem = 0
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if ((new Date()).getTime() - TA > 60*1000){
                TKB.xgsrizhi("超时没进入")
                if (jcs > 1){
                    TKB.xgsrizhi("不做该任务重新拿任务")
                    jcs = 0
                    tem = 0
                }else{
                    TKB.xgsrizhi("获取到的链接" + rwurl)
                    TKB.qinglihh()
                    setClip(rwurl)      //写连接进入粘贴板     
                    sleep(1000)
                    launch("com.ss.android.ugc.aweme")
                    jcs = jcs + 1
                }
                TA = (new Date()).getTime()
            }
        }
        zonghe()
    }
}

//检测是否关注
function jiancerw(lj, lx){
    TKB.xgsrizhi("检测任务")
    var lianjie = lj
    var rwlx = lx
    TKB.xgsrizhi("连接" + lianjie + "类型" + rwlx)
    TKB.qinglihh()
    setClip(lianjie)      //写连接进入粘贴板     
    sleep(1000)
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var TR = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - TSD > 10*60*1000){
            TKB.xgsrizhi("超时不检测了")
            return false
        }
        if (text('前往').exists()){
            TKB.xgsrizhi('前往')
            try {
                var ss = text("前往").findOnce().bounds()
                TKB.xgsrizhi(ss.centerY())
                click(ss.centerX(), ss.centerY());
                sleep(4000)
                var TR = (new Date()).getTime()
                var dll = 0
                var renwuwc = 0
                while(1){
                    if ((new Date()).getTime() - TR > 2*60*1000){
                        TKB.xgsrizhi('超时退出')
                        break
                    }
                    if (rwlx == 4 && text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || rwlx == 4 && id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || rwlx == 4 && text('粉丝').exists() && desc('更多').exists()){
                        TKB.xgsrizhi("个人界面444")
                        if (text('取消关注').exists()){
                            TKB.xgsrizhi("已经关注上了")
                            return true
                        }else{
                            if (text('#  关注').exists()){
                                TKB.xgsrizhi("还未关注")
                                return false
                            }
                        }
                    }else{
                        if (text('留下你的精彩评论吧').exists() && text('评论并转发').exists() || text('留下你的精彩评论吧').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists() || id('com.ss.android.ugc.aweme:id/a__').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists()){
                            TKB.xgsrizhi('评论界面')
                            dll = 1
                            back()
                            sleep(4000)
                        }else{
                            if (dll == 0){
                                TKB.xgsrizhi('点击评论')
                                click(500, 1850)
                                sleep(2000)
                            }else{
                                if (rwlx == 3){
                                    TKB.xgsrizhi('判断点赞')
                                    var jt = captureScreen()
                                    var point = findColor(jt, "#fb446f", {
                                        region: [947,868, 50, 50],
                                        threshold: 6
                                    });
                                    if (point){  //判断红色
                                        TKB.xgsrizhi("已经点过赞了")
                                        return true
                                    }else{
                                        TKB.xgsrizhi("还没点赞")
                                        return false
                                    }
                                }else{
                                    if (rwlx == 4){
                                        if (text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || text('粉丝').exists() && desc('更多').exists()){
                                            TKB.xgsrizhi("个人界面")
                                            if (text('取消关注').exists()){
                                                TKB.xgsrizhi("已经关注过了")
                                                return true
                                            }else{
                                                if (text('#  关注').exists()){
                                                    TKB.xgsrizhi("还未关注")
                                                    return false
                                                }
                                            }
                                        }else{
                                            TKB.xgsrizhi("点击头像")
                                            click(986,678)   //点击头像
                                            sleep(4000)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if ((new Date()).getTime() - TR > 60*1000){
                TKB.xgsrizhi("超时没进入")
                TKB.qinglihh()
                setClip(lianjie)      //写连接进入粘贴板     
                sleep(1000)
                launch("com.ss.android.ugc.aweme")
                TR = (new Date()).getTime()
            }
        }
    }
}

//抖音点赞任务
function dydjrenwux(){
    TKB.xgsrizhi("抖音点赞任务")
    var TSD = (new Date()).getTime()
    var TA = (new Date()).getTime()
    var fzan = 0          //服务器的全局变量-赞
    var fpinglun = 0      //服务器的全局变量-评论
    var fbofang = 0       //服务器的全局变量-播放
    var fguanzhu = 0      //服务器的全局变量-关注
    var fwqrw = hqqjbl(sbip, user_id, yhbh)
    if (fwqrw == false){
        TKB.xgsrizhi("服务器没任务或没开启")
        return false
    }else{
        fzan = fwqrw[0]
        fpinglun = fwqrw[1]
        fbofang = fwqrw[2]
        fguanzhu = fwqrw[3]
    }
    var huashu = "123"         //评论话术
    var rwlx = 1      //1 播放 3 点赞  4 关注  5 评论
    var tem = 0       //判断去拿平台任务
    var ptid = 0      //平台任务id
    var jcs = 0       //判断打开次数
    var rwurl = "https://v.douyin.com/JFCqHgN/"   //平台任务链接
    var taskCat = 0       //平台任务taskCat
    var cb = TKB.zhid(sbip, run_id)
    if (cb == false){
        TKB.xgsrizhi("获取不到链接")
        return false
    }else{
        rwurl = cb["作品链接"]
    }
    rwlx = 3
    while(1){
        if ((new Date()).getTime() - TSD > 2*60*60*1000){
            TKB.xgsrizhi("超时退出该任务")
            return false
        }
        if (tem == 0){
            TKB.xgsrizhi("获取已经做了多少任务")
            var dse = hqrwsl(sbip, user_id, yhbh)
            var yzan = dse[0]              //已做数量-赞
            var ypinglun = dse[2]      //已做数量-评论
            var ybofang = dse[3]        //已做数量-播放
            var yguanzhu = dse[1]      //已做数量-关注
            if (rwlx == 1){
                log("我是播放" + ybofang +"我是服务器" +fbofang)
                if (Number(ybofang) < Number(fbofang)){
                    TKB.xgsrizhi("去拿播放的单子")
                }else{
                    TKB.xgsrizhi("播放任务已经做完了")
                    return false
                }
            }
            if (rwlx == 3){
                if (Number(yzan) < Number(fzan)){
                    TKB.xgsrizhi("去拿点赞的单子")
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    return false
                }
            }
            if (rwlx == 4){
                if (Number(yguanzhu) < Number(fguanzhu)){
                    TKB.xgsrizhi("去拿关注的单子")
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    return false
                }
            }
            if (rwlx == 5){
                return true
                if (Number(ypinglun) < Number(fpinglun)){
                    TKB.xgsrizhi("去拿评论的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有评论任务了")
                        return true
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("评论任务已经做完了")
                    return true
                }
            }
            TKB.xgsrizhi("获取到的链接" + rwurl)
            TKB.qinglihh()
            setClip(rwurl)      //写连接进入粘贴板     
            sleep(1000)
            launch("com.ss.android.ugc.aweme")
            tem = 1
            TA = (new Date()).getTime()
        }
        if (text('前往').exists()){
            TKB.xgsrizhi('前往')
            try {
                var ss = text("前往").findOnce().bounds()
                TKB.xgsrizhi(ss.centerY())
                click(ss.centerX(), ss.centerY());
                sleep(4000)
                var TR = (new Date()).getTime()
                var dll = 0
                var renwuwc = 0
                while(1){
                    if ((new Date()).getTime() - TR > 2*60*1000){
                        TKB.xgsrizhi('超时退出')
                        break
                    }
                    if (rwlx == 4 && text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || rwlx == 4 && id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || rwlx == 4 && text('粉丝').exists() && desc('更多').exists()){
                        TKB.xgsrizhi("个人界面55555")
                        if (text('取消关注').exists()){
                            TKB.xgsrizhi("已经关注过了2")
                            return false
                        }else{
                            if (id('com.ss.android.ugc.aweme:id/dyl').exists()){
                                try {
                                    var ss = id("com.ss.android.ugc.aweme:id/dyl").findOnce().bounds();
                                    log(ss)
                                    click(ss.centerX(), ss.centerY());
                                    sleep(2000)
                                    renwuwc = 1
                                    return true
                                } catch (error) {
                                    sleep(1001)
                                    log(error);
                                }
                            }
                        }
                    }else{
                        if (text('留下你的精彩评论吧').exists() && text('评论并转发').exists() || text('留下你的精彩评论吧').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists() || id('com.ss.android.ugc.aweme:id/a__').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists()){
                            TKB.xgsrizhi('评论界面')
                            dll = 1
                            if (rwlx == 5){
                                TKB.xgsrizhi('输入话术')
                                input(huashu)
                                sleep(500)
                                if (id('com.ss.android.ugc.aweme:id/a__').exists()){
                                    log("发送")
                                    try {
                                        var ss = text("前往").findOnce().bounds()
                                        TKB.xgsrizhi(ss.centerY())
                                        click(ss.centerX(), ss.centerY());
                                        sleep(1000)
                                    } catch (error) {
                                        sleep(1001)
                                        TKB.xgsrizhi(error);
                                    }
                                }else{
                                    TKB.xgsrizhi('直接点击发送')
                                    click(1000, 760)
                                    sleep(500)
                                }
                                renwuwc = 1
                                return true
                            }else{
                                TKB.xgsrizhi('退出评论界面')
                                back()
                                sleep(random(15000, 25000))
                            }
                        }else{
                            if (dll == 0 || rwlx == 5){
                                TKB.xgsrizhi('点击评论')
                                click(500, 1850)
                                sleep(2000)
                            }else{
                                if (rwlx == 1){
                                    TKB.xgsrizhi('观看视频')
                                    toastLog("观看视频中...")
                                    var so = random(20, 40)
                                    if ((new Date()).getTime() - TR > so*1000){
                                        TKB.xgsrizhi('观看视频完成')
                                        renwuwc = 1
                                        return true
                                    }
                                }else{
                                    if (rwlx == 3){
                                        TKB.xgsrizhi('点赞')
                                        var jt = captureScreen()
                                        var point = findColor(jt, "#fb446f", {
                                            region: [947,868, 50, 50],
                                            threshold: 6
                                        });
                                        if (point){  //判断红色
                                            TKB.xgsrizhi("已经点过赞了")
                                            return false
                                        }
                                        point = findColor(jt, "#f2efec", {
                                            region: [947,868, 50, 50],
                                            threshold: 6
                                        });
                                        if (point){  //判断白色
                                            TKB.xgsrizhi("还没点赞")
                                            click(990,901)   //点赞
                                            sleep(2000)
                                            jt = captureScreen()
                                            point = findColor(jt, "#fb446f", {
                                                region: [947,868, 50, 50],
                                                threshold: 6
                                            });
                                            if (point){  //判断红色
                                                TKB.xgsrizhi("点赞成功")
                                                renwuwc = 1
                                                gxfuwuqi(sbip, rwlx, user_id, yhbh, app_id)
                                                return true
                                            }
                                        }
                                        return false
                                    }else{
                                        if (rwlx == 4){
                                            if (text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || text('粉丝').exists() && desc('更多').exists()){
                                                TKB.xgsrizhi("个人界面")
                                                if (text('取消关注').exists()){
                                                    TKB.xgsrizhi("已经关注过了")
                                                    return false
                                                }else{
                                                    if (id('com.ss.android.ugc.aweme:id/dyl').exists()){
                                                        try {
                                                            var ss = id("com.ss.android.ugc.aweme:id/dyl").findOnce().bounds();
                                                            log(ss)
                                                            click(ss.centerX(), ss.centerY());
                                                            sleep(2000)
                                                            renwuwc = 1
                                                            return true
                                                        } catch (error) {
                                                            sleep(1001)
                                                            log(error);
                                                        }
                                                    }
                                                }
                                            }else{
                                                TKB.xgsrizhi("点击头像")
                                                click(986,678)   //点击头像
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if ((new Date()).getTime() - TA > 60*1000){
                TKB.xgsrizhi("超时没进入")
                if (jcs > 1){
                    TKB.xgsrizhi("不做该任务重新拿任务")
                    jcs = 0
                    tem = 0
                }else{
                    TKB.xgsrizhi("获取到的链接" + rwurl)
                    TKB.qinglihh()
                    setClip(rwurl)      //写连接进入粘贴板     
                    sleep(1000)
                    launch("com.ss.android.ugc.aweme")
                    jcs = jcs + 1
                }
                TA = (new Date()).getTime()
            }
        }
        zonghe()
    }
}

//抖音关注任务
function dygzrenwux(){
    TKB.xgsrizhi("抖音关注任务")
    var TSD = (new Date()).getTime()
    var TA = (new Date()).getTime()
    var fzan = 0          //服务器的全局变量-赞
    var fpinglun = 0      //服务器的全局变量-评论
    var fbofang = 0       //服务器的全局变量-播放
    var fguanzhu = 0      //服务器的全局变量-关注
    var fwqrw = hqqjbl(sbip, user_id, yhbh)
    if (fwqrw == false){
        TKB.xgsrizhi("服务器没任务或没开启")
        return false
    }else{
        fzan = fwqrw[0]
        fpinglun = fwqrw[1]
        fbofang = fwqrw[2]
        fguanzhu = fwqrw[3]
    }
    var huashu = "123"         //评论话术
    var rwlx = 1      //1 播放 3 点赞  4 关注  5 评论
    var tem = 0       //判断去拿平台任务
    var ptid = 0      //平台任务id
    var jcs = 0       //判断打开次数
    var rwurl = "https://v.douyin.com/JFCqHgN/"   //平台任务链接
    var gzlx = 3   //关注的方式类型      1、个人界面关注  2、 关注列表   3、视频界面关注
    var gzdj = 1   //关注列表的第几个        
    var taskCat = 0       //平台任务taskCat
    var cb = TKB.zhid(sbip, run_id)
    if (cb == false){
        TKB.xgsrizhi("获取不到链接")
        return false
    }else{
        rwurl = cb["作品链接"]
        gzlx = Number(cb["关注类型"])
    }
    rwlx = 4
    while(1){
        if ((new Date()).getTime() - TSD > 2*60*60*1000){
            TKB.xgsrizhi("超时退出该任务")
            return false
        }
        if (tem == 0){
            TKB.xgsrizhi("获取已经做了多少任务")
            var dse = hqrwsl(sbip, user_id, yhbh)
            var yzan = dse[0]              //已做数量-赞
            var ypinglun = dse[2]      //已做数量-评论
            var ybofang = dse[3]        //已做数量-播放
            var yguanzhu = dse[1]      //已做数量-关注
            if (rwlx == 1){
                log("我是播放" + ybofang +"我是服务器" +fbofang)
                if (Number(ybofang) < Number(fbofang)){
                    TKB.xgsrizhi("去拿播放的单子")
                }else{
                    TKB.xgsrizhi("播放任务已经做完了")
                    return false
                }
            }
            if (rwlx == 3){
                if (Number(yzan) < Number(fzan)){
                    TKB.xgsrizhi("去拿点赞的单子")
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    return false
                }
            }
            if (rwlx == 4){
                if (Number(yguanzhu) < Number(fguanzhu)){
                    TKB.xgsrizhi("去拿关注的单子")
                }else{
                    TKB.xgsrizhi("点赞任务已经做完了")
                    return false
                }
            }
            if (rwlx == 5){
                return true
                if (Number(ypinglun) < Number(fpinglun)){
                    TKB.xgsrizhi("去拿评论的单子")
                    var trw = getdyrw(rwlx)
                    if (trw == false){
                        TKB.xgsrizhi("没有评论任务了")
                        return true
                    }else{
                        ptid = trw[0]
                        rwurl = trw[1]
                        taskCat = trw[2]
                    }
                }else{
                    TKB.xgsrizhi("评论任务已经做完了")
                    return true
                }
            }
            TKB.xgsrizhi("获取到的链接" + rwurl)
            TKB.qinglihh()
            setClip(rwurl)      //写连接进入粘贴板     
            sleep(1000)
            launch("com.ss.android.ugc.aweme")
            tem = 1
            TA = (new Date()).getTime()
        }
        if (text('前往').exists()){
            TKB.xgsrizhi('前往')
            try {
                var ss = text("前往").findOnce().bounds()
                TKB.xgsrizhi(ss.centerY())
                click(ss.centerX(), ss.centerY());
                sleep(4000)
                var TR = (new Date()).getTime()
                var dll = 0
                var renwuwc = 0
                while(1){
                    if ((new Date()).getTime() - TR > 2*60*1000){
                        TKB.xgsrizhi('超时退出')
                        break
                    }
                    if (gzlx == 2 && id('com.ss.android.ugc.aweme:id/gh8').exists() && id('com.ss.android.ugc.aweme:id/bzq').exists() || gzlx == 2 && text('推荐关注').exists() && id('com.ss.android.ugc.aweme:id/bzq').exists()){
                        TKB.xgsrizhi("关注列表界面")
                        if (id('com.ss.android.ugc.aweme:id/gh8').exists()){
                            TKB.xgsrizhi("点关注")
                            try {
                                var ss = id("com.ss.android.ugc.aweme:id/gh8").findOnce().bounds();
                                log(ss)
                                click(ss.centerX(), ss.centerY());
                                sleep(2000)
                                return true
                            } catch (error) {
                                sleep(1001)
                                log(error);
                            }
                        }else{
                            var jt = captureScreen()
                            var point = findColor(jt, "#fe2c55", {
                                region: [785,410, 50, 50],
                                threshold: 6
                            });
                            if (point){  //判断红色
                                TKB.xgsrizhi("点击第一个")
                                click(850, 450)
                                sleep(1000)
                            }else{
                                TKB.xgsrizhi("第一个不是红色关注")
                            }
                            return true
                        }
                    }else{
                        if (rwlx == 4 && text('获赞').exists() && text('粉丝').exists() && text('关注').exists() || rwlx == 4 && id('com.ss.android.ugc.aweme:id/bj0').exists() && text('关注').exists() || rwlx == 4 && text('粉丝').exists() && desc('更多').exists()){
                            TKB.xgsrizhi("个人界面45")
                            if (gzlx == 1){
                                if (text('取消关注').exists()){
                                    TKB.xgsrizhi("已经关注过了2")
                                    return false
                                }else{
                                    TKB.xgsrizhi("关注")
                                    if (id('com.ss.android.ugc.aweme:id/dyl').exists()){
                                        try {
                                            var ss = id("com.ss.android.ugc.aweme:id/dyl").findOnce().bounds();
                                            log(ss)
                                            click(ss.centerX(), ss.centerY());
                                            sleep(2000)
                                            renwuwc = 1
                                            gxfuwuqi(sbip, rwlx, user_id, yhbh, app_id)
                                            return true
                                        } catch (error) {
                                            sleep(1001)
                                            log(error);
                                        }
                                    }
                                }
                            }else{
                                if (gzlx == 2){
                                    if (text('关注').depth(17).exists()){
                                        TKB.xgsrizhi("进入关注列表")
                                        try {
                                            var ss = text('关注').depth(17).findOnce().bounds();
                                            log(ss)
                                            click(ss.centerX(), ss.centerY());
                                            sleep(2000)
                                        } catch (error) {
                                            sleep(1001)
                                            log(error);
                                        }
                                    }
                                }else{
                                    TKB.xgsrizhi("点击作品")
                                    var ss = TKB.getAllTexts()
                                    TKB.xgsrizhi(ss)
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf("作品 ") != -1) {
                                            try {
                                                var ss = text(ss[j]).findOnce().bounds();
                                                log(ss)
                                                if (ss.centerY() < 1800){
                                                    click(ss.centerX(), ss.centerY() + 100);
                                                    sleep(2000)
                                                }else{
                                                    TKB.xgsrizhi("下滑")
                                                    swipe(500, 1800, 500, 600, 500)
                                                    sleep(2000)
                                                }
                                            } catch (error) {
                                                sleep(1001)
                                                log(error);
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                        }else{
                            if (text('留下你的精彩评论吧').exists() && text('评论并转发').exists() || text('留下你的精彩评论吧').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists() || id('com.ss.android.ugc.aweme:id/a__').exists() && id('com.ss.android.ugc.aweme:id/c3l').exists()){
                                TKB.xgsrizhi('评论界面')
                                dll = 1
                                if (rwlx == 5){
                                    TKB.xgsrizhi('输入话术')
                                    input(huashu)
                                    sleep(500)
                                    if (id('com.ss.android.ugc.aweme:id/a__').exists()){
                                        log("发送")
                                        try {
                                            var ss = text("前往").findOnce().bounds()
                                            TKB.xgsrizhi(ss.centerY())
                                            click(ss.centerX(), ss.centerY());
                                            sleep(1000)
                                        } catch (error) {
                                            sleep(1001)
                                            TKB.xgsrizhi(error);
                                        }
                                    }else{
                                        TKB.xgsrizhi('直接点击发送')
                                        click(1000, 760)
                                        sleep(500)
                                    }
                                    renwuwc = 1
                                    return true
                                }else{
                                    TKB.xgsrizhi('退出评论界面')
                                    back()
                                    sleep(random(15000, 25000))
                                }
                            }else{
                                if (dll == 0 || rwlx == 5){
                                    TKB.xgsrizhi('点击评论')
                                    click(500, 1850)
                                    sleep(2000)
                                }else{
                                    if (rwlx == 1){
                                        TKB.xgsrizhi('观看视频')
                                        toastLog("观看视频中...")
                                        var so = random(20, 40)
                                        if ((new Date()).getTime() - TR > so*1000){
                                            TKB.xgsrizhi('观看视频完成')
                                            renwuwc = 1
                                            return true
                                        }
                                    }else{
                                        if (rwlx == 3){
                                            TKB.xgsrizhi('点赞')
                                            var jt = captureScreen()
                                            var point = findColor(jt, "#fb446f", {
                                                region: [947,868, 50, 50],
                                                threshold: 6
                                            });
                                            if (point){  //判断红色
                                                TKB.xgsrizhi("已经点过赞了")
                                                return false
                                            }
                                            point = findColor(jt, "#f2efec", {
                                                region: [947,868, 50, 50],
                                                threshold: 6
                                            });
                                            if (point){  //判断白色
                                                TKB.xgsrizhi("还没点赞")
                                                click(990,901)   //点赞
                                                sleep(2000)
                                                jt = captureScreen()
                                                point = findColor(jt, "#fb446f", {
                                                    region: [947,868, 50, 50],
                                                    threshold: 6
                                                });
                                                if (point){  //判断红色
                                                    TKB.xgsrizhi("点赞成功")
                                                    renwuwc = 1
                                                    return true
                                                }
                                            }
                                            return false
                                        }else{
                                            if (rwlx == 4){
                                                if (gzlx == 1 || gzlx == 2){
                                                    TKB.xgsrizhi("点击头像")
                                                    click(986,678)   //点击头像
                                                    sleep(3000)
                                                }else{
                                                    TKB.xgsrizhi("直接点击关注")
                                                    click(988,745)
                                                    sleep(2000)
                                                    gxfuwuqi(sbip, rwlx, user_id, yhbh, app_id)
                                                    return true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if ((new Date()).getTime() - TA > 60*1000){
                TKB.xgsrizhi("超时没进入")
                if (jcs > 1){
                    TKB.xgsrizhi("不做该任务重新拿任务")
                    jcs = 0
                    tem = 0
                }else{
                    TKB.xgsrizhi("获取到的链接" + rwurl)
                    TKB.qinglihh()
                    setClip(rwurl)      //写连接进入粘贴板     
                    sleep(1000)
                    launch("com.ss.android.ugc.aweme")
                    jcs = jcs + 1
                }
                TA = (new Date()).getTime()
            }
        }
        zonghe()
    }
}

//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

//获取做了多少任务
function hqrwsl(sbip, user_id, yhbh){
    TKB.xgsrizhi("获取做了多少任务") 
    var Tb = (new Date()).getTime()
    // var jiqima = device.getIMEI()
    TKB.xgsrizhi(sbip)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 5*60*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://"+sbip+"/api.php/potal/meitu/getaccountmes?user_id="+user_id+"&der_id="+yhbh+"&account=0"
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                TKB.xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok"){
                    TKB.xgsrizhi("获取完成任务数量成功")
                    var zan = r_obj["data"]["zan"]
                    var guanzhu = r_obj["data"]["guanzhu_tody"]
                    var pinglun = r_obj["data"]["pinglun"]
                    var bofang = r_obj["data"]["bofang_tody"]
                    TKB.xgsrizhi("赞" + zan +"关注" +guanzhu +"评论" + pinglun +"播放" + bofang)
                    return [zan, guanzhu, pinglun, bofang]
                } 
            }else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取做了多少任务...")
        sleep(random(1000, 10000))
    }
}

//获取全局变量
function hqqjbl(sbip, user_id, yhbh){
    TKB.xgsrizhi("获取全局变量") 
    var Tb = (new Date()).getTime()     //1 播放 3 点赞  4 关注  5 评论
    TKB.xgsrizhi(sbip)
    var renwu = 0
    var zan = 0
    var pinglun = 0
    var bofnag = 0
    var guanzhu = 0
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 5*60*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://"+sbip+"/api.php/potal/meitu/getshebeiconfig?user_id="+user_id+"&der_id="+yhbh
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                TKB.xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok"){
                    TKB.xgsrizhi("获取任务成功")
                    if (r_obj["data"].hasOwnProperty("dy_zan_yw")){
                        renwu = r_obj["data"]["dy_zan_yw"]
                    }
                    if (r_obj["data"].hasOwnProperty("dyzbj_zan_num")){
                        zan = r_obj["data"]["dyzbj_zan_num"]
                    }
                    if (r_obj["data"].hasOwnProperty("dyzbj_pl_num")){
                        pinglun = r_obj["data"]["dyzbj_pl_num"]
                    }
                    if (r_obj["data"].hasOwnProperty("dyzbj_sp_num")){
                        bofnag = r_obj["data"]["dyzbj_sp_num"]
                    }
                    if (r_obj["data"].hasOwnProperty("dyzbj_gz_num")){
                        guanzhu = r_obj["data"]["dyzbj_gz_num"]
                    }
                    if (renwu != 0){
                        TKB.xgsrizhi("点赞" + zan + "评论" + pinglun + "播放" + bofnag  + "关注" + guanzhu)
                        return [zan, pinglun, bofnag, guanzhu]
                    }else{
                        TKB.xgsrizhi("服务器没选择执行该任务")
                        return false
                    }

                } 
            }else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取全局变量中...")
        sleep(random(1000, 10000))
    }
}

//更新服务器
function gxfuwuqi(sbip, lx, user_id, yhbh, app_id){
    TKB.xgsrizhi("更新服务器")   //点赞次数zan（累加)  当天关注 guanzhu_tody（累加） 当天评论 pinglun （累加）当天播放量 bofang_tody（累加）
    // //1 播放 3 点赞  4 关注  5 评论
    var leix = lx
    if (leix == 1){
        leix = "bofang_tody"
    }else{
        if (leix == 3){
            leix = "zan"
        }else{
            if (leix == 4){
                leix = "guanzhu_tody"
            }else{
                leix = "pinglun"
            }
        }
    }
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    TKB.xgsrizhi(sbip)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 60*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://"+sbip+"/api.php/potal/meitu/uprecord?type="+ leix +"&user_id="+user_id+"&der_id="+yhbh+"&app_id="+app_id+"&content=1"
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                TKB.xgsrizhi(r_obj)
                if (r_obj["code"] == "0"){
                    TKB.xgsrizhi("上传成功")
                    toastLog("更新服务器成功")
                    return true
                }
            }else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("上传服务器中...")
        sleep(random(1000, 10000))
    }
}

//获取抖音平台任务
function getdyrw(lx){
    TKB.xgsrizhi("获取抖音平台任务")     //1 播放 3 点赞  4 关注  5 评论
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    TKB.xgsrizhi(sbip)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 5*60*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://47.103.103.138:8080/task/getTaskByType?douyinId=" + jiqima + "&taskType="+ lx
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                TKB.xgsrizhi(r_obj)
                if (r_obj["success"] == true){
                    TKB.xgsrizhi("获取到任务" + lx)
                    var id = r_obj["retinfo"]["id"]
                    var lianjie = r_obj["retinfo"]["taskObjectLink"]
                    var taskCat = r_obj["retinfo"]["taskCat"]
                    TKB.xgsrizhi("获取到id" + id + "链接" +lianjie)
                    return [id, lianjie, taskCat]
                }else{
                    if (r_obj["success"] == false){
                        TKB.xgsrizhi("没有任务")
                        return false
                    }
                }
            }else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取抖音平台任务中...")
        sleep(random(1000, 10000))
    }
}

//上传平台完成任务
function upptrw(id, lx, taskCat){
    TKB.xgsrizhi("完成任务上传平台")     //1 播放 3 点赞  4 关注  5 评论
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    TKB.xgsrizhi(sbip)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 5*60*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://47.103.103.138:8080/task/taskCallback?taskId="+id+"&taskCat="+taskCat+"&taskType="+lx+"&douyinId=" + jiqima + "&success=true"
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                TKB.xgsrizhi(r_obj)
                if (r_obj["success"] == true){
                    TKB.xgsrizhi("上传任务成功")
                    toastLog("更新平台成功")
                    return true
                    
                }else{
                    if (r_obj["success"] == false){
                        TKB.xgsrizhi(r_obj["msg"])
                        return false
                    }
                }
            }else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("完成抖音任务中...")
        sleep(random(1000, 10000))
    }
}

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
            var dl = dydl()
            if (dl == true) {
                if (fun == "抖音平台任务"){
                    dyptrenwu()
                }else{
                    if (fun == "关注"){
                        dygzrenwux()
                    }else{
                        if (fun == "点赞"){
                            dydjrenwux()
                        }
                    }
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


