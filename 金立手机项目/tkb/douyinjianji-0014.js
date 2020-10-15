xgsrizhi("tKB")



//启动时间

auto.waitFor()
申请权限()

function 申请权限() {
    threads.start(function () {
        var a = textMatches("允许|立即开始").findOne(5000)
        if (a != null) {
            tapobjrex(a)
            xgsrizhi("点击允许")
        } else {
            xgsrizhi("没找到允许")
        }
    });
    if (!requestScreenCapture()) {
        alert("请求截图权限失败！");
        exit();
    }
}

var sbxx //= files.read("/sdcard/meituconfig.txt") //读取设备信息
sbxx = "8--1-47.96.112.213-9-404930-60-新发布视频-"
var sbxx_table = sbxx.split("-")
var user_namex = "mubei" //服务器用户名
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var sbip = sbxx_table[3] //服务器ip
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.ss.android.ugc.aweme" //该项目包名
var xmxh = "1" //项目序号 版本11.0.0
var biaotis = "", biaotiz = ""
function tapobj(tz) {
    var obj, objs;
    obj = tz.findOnce();
    objs = obj;
    while (objs != null) {
        if (objs.clickable() == true) {
            objs.click();
            break;
        } else {
            objs = objs.parent();
        }
    }
    return obj;
};
function zonghe() {
    if (text("稍后").exists() && text("去打开").exists()) {
        xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("刷新").exists() && text("网络错误").exists()) {
        xgsrizhi("网络错误")
        click("刷新")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        xgsrizhi("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        xgsrizhi("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        xgsrizhi("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        xgsrizhi("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("始终允许").exists() && text("禁止").exists()) {
        xgsrizhi("始终允许")
        click("始终允许")
        sleep(2000)
    }
    if (text('允许访问你的"位置"？').exists() && text("以后再说").exists()) {
        xgsrizhi("位置,以后再说")
        click("以后再说")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        xgsrizhi("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下次再说").exists()) {
        xgsrizhi("下次再说")
        click("下次再说")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        xgsrizhi("网络连接错误");
        sleep(1200)
    }

    if (textContains("是否用流量观看").exists()) {
        click("确认");
        xgsrizhi("确认");
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        xgsrizhi("同步到今日头条");
        sleep(1200)
    }
    if (textContains("一键同步").exists()) {
        tapobjr(id("com.ss.android.ugc.aweme:id/eoa"))
        xgsrizhi("一键同步今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        xgsrizhi("以后再说2");
        try {
            var ss = text("以后再说").findOnce().bounds();
            xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    if (desc("以后再说").exists()) {
        xgsrizhi("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }

    if (text("继续观看").exists()) {
        xgsrizhi("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    if (desc("继续观看").exists()) {
        xgsrizhi("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    if (text("跳过").exists()) {
        click("跳过");
        xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    if (text("立即赠送").exists()) {
        xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        //click(939, 523);
        tapobjr(id('com.ss.android.ugc.aweme:id/hp'))
        tapobjr(id('com.ss.android.ugc.aweme:id/hp1'))
        xgsrizhi("立即更新");
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许"); 1
        xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

function benjitel() {
    try {
        xgsrizhi("获取本机号码")
        runtime.requestPermissions(["READ_PHONE_STATE"]);
        telephonyManager = context.getSystemService(context.TELEPHONY_SERVICE);
        //deviceid = telephonyManager.getDeviceId();
        //simSerialNumber = telephonyManager.getSimSerialNumber();
        var tel = telephonyManager.getLine1Number();
        //imsi = telephonyManager.getSubscriberId();
        //xgsrizhi('deviceid = ' + deviceid)
        //xgsrizhi('simSerialNumber = ' + simSerialNumber)
        xgsrizhi('tel=' + tel)
        if (tel != null) {
            if (tel.length > 10) {
                var ss = tel.split("+86")
                var phone = ss[1]
                return phone
            }
        }
        if (files.exists("/sdcard/shoujihaoma.txt")) {
            var zh = files.read("/sdcard/shoujihaoma.txt")
            if (zh.length == 11) {
                return zh
            }
        }
        return false
        //xgsrizhi('imsi = ' + imsi)
    } catch (error) {
        xgsrizhi("错误2" + error);
        sleep(2000)
        return false
    }
}
function dydl() {
    biaotis = ""
    biaotiz = ""
    xgsrizhi("抖音登录")
    setClip("")
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
            xgsrizhi("时间够了退出")
            qinglihh("com.ss.android.ugc.aweme")
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            xgsrizhi("超时没登录成功")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            qinglihh("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("一键登录").exists() || text("本机号码一键登录").exists() || text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()) {
            xgsrizhi("还未登录账号--先去登录")
            var ss = dyzc()
            if (ss == false) {
                return false
            }
        }
        if (text("绑定手机号").exists()) {
            xgsrizhi("绑定手机号")
            back()
            sleep(2000)
        }
        if (desc("分享主页").exists() && text("获赞").exists() || textContains("分享主页").exists() && text("获赞").exists() || textContains("编辑资料").exists() && text("获赞").exists() || text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
            xgsrizhi("编辑资料界面")
            click(1020, 1950)
            sleep(2000)
            //xgzhzt(sbip, user_id, yhbh, app_id, "", "1")
            var ss = getAllTexts()
            var io = 0
            xgsrizhi(ss)
            try {
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("喜欢 ") != -1) {
                        xgsrizhi(ss[j])
                        var st = ss[j].split("欢 ")
                        djsl = st[1]
                        xgsrizhi("点赞数量：" + djsl)
                        updyshuju(sbip, user_id, yhbh, app_id, "xihuan", djsl)
                    }
                    if (ss[j].indexOf("男") != -1) {
                        xgsrizhi("性别男")
                        dyxb = "1"
                    }
                    if (ss[j].indexOf("女") != -1) {
                        xgsrizhi("性别女")
                        dyxb = "2"
                    }
                    if (ss[j].indexOf("作品 ") != -1) {
                        xgsrizhi(ss[j])
                        var st = ss[j].split("品 ")
                        zpsl = st[1]
                        xgsrizhi("作品数量：" + zpsl)
                        updyshuju(sbip, user_id, yhbh, app_id, "shipin", zpsl)
                    }
                    if (ss[j].indexOf("播放数") != -1 && io < 3) {
                        xgsrizhi(ss[j])
                        var st = ss[j].split("播放数")
                        var bfss = st[1]
                        xgsrizhi("播放数" + bfss)
                        dybf = Number(dybf) + Number(bfss)
                        io = io + 1
                    }
                }
                if (dybf != 0) {
                    updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
                }
                if (id("com.ss.android.ugc.aweme:id/e_f").exists() || id("com.ss.android.ugc.aweme:id/hii").exists()) {
                    var dd = id("com.ss.android.ugc.aweme:id/e_f").findOnce()
                    if (dd == null) {
                        dd = id("com.ss.android.ugc.aweme:id/hii").findOnce().text()
                    } else {
                        dd = dd.text()
                    }
                    xgsrizhi(dd)
                    if (dd.indexOf("抖音号: ") != -1) {
                        xgsrizhi(dd)
                        var st = dd.split(": ")
                        dyzh = st[1]
                        xgsrizhi("抖音账号：" + dyzh)
                        //hii  
                    }
                }
                var ssr = true
                if (ssr == true) {
                    if (id("com.ss.android.ugc.aweme:id/b_0").exists() || id("com.ss.android.ugc.aweme:id/biv").exists()) {
                        dygz = id("com.ss.android.ugc.aweme:id/b_0").findOnce()
                        if (dygz == null) {
                            dygz = id("com.ss.android.ugc.aweme:id/biv").findOnce().text()
                        } else {
                            dygz = dygz.text()

                        }
                        xgsrizhi("关注数量：" + dygz)
                        updyshuju(sbip, user_id, yhbh, app_id, "guanzhu", dygz)

                        //biv 12.1.0
                    }
                    if (id("com.ss.android.ugc.aweme:id/b9v").exists() || id("com.ss.android.ugc.aweme:id/bip").exists()) {
                        dyfs = id("com.ss.android.ugc.aweme:id/b9v").findOnce()
                        if (dyfs == null) {
                            dyfs = id("com.ss.android.ugc.aweme:id/bip").findOnce().text()
                        } else {
                            dyfs = dyfs.text()
                        }
                        xgsrizhi("粉丝数量：" + dyfs)
                        updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
                        // bip 
                    }
                    if (id("com.ss.android.ugc.aweme:id/glp").exists() || id("com.ss.android.ugc.aweme:id/hje").exists()) {
                        dyqm = id("com.ss.android.ugc.aweme:id/glp").findOnce()
                        if (dyqm == null) {
                            dyqm = id("com.ss.android.ugc.aweme:id/hje").findOnce().text()
                        } else {
                            dyqm = dyqm.text()
                        }
                        xgsrizhi("签名：" + dyqm)
                        // updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
                        //hje 
                    }
                    if (id("com.ss.android.ugc.aweme:id/dbt").exists() || id("com.ss.android.ugc.aweme:id/dxz").exists()) {
                        dync = id("com.ss.android.ugc.aweme:id/dbt").findOnce()
                        if (dync == null) {
                            dync = id("com.ss.android.ugc.aweme:id/dxz").findOnce().text()
                        } else {
                            dync = dync.text()

                        }
                        xgsrizhi("抖音昵称：" + dync)
                        //dxz 
                    }
                    if (id("com.ss.android.ugc.aweme:id/bar").exists() || id("com.ss.android.ugc.aweme:id/bkl").exists()) {
                        dyhy = id("com.ss.android.ugc.aweme:id/bar").findOnce()
                        if (dyhy == null) {
                            dyhy = id("com.ss.android.ugc.aweme:id/bkl").findOnce().text()
                        } else {
                            dyhy = dyhy.text()
                        }
                        xgsrizhi("好友数量：" + dyhy)
                        updyshuju(sbip, user_id, yhbh, app_id, "haoyou", dyhy)
                        //bkl 
                    }
                    if (id("com.ss.android.ugc.aweme:id/an4").exists() || id("com.ss.android.ugc.aweme:id/art").exists()) {
                        dyhz = id("com.ss.android.ugc.aweme:id/an4").findOnce()
                        if (dyhz == null) {
                            dyhz = id("com.ss.android.ugc.aweme:id/art").findOnce().text()
                        } else {
                            dyhz = dyhz.text()
                        }
                        xgsrizhi("获赞数量：" + dyhz)
                        updyshuju(sbip, user_id, yhbh, app_id, "getzan", dyhz)
                        //art 
                    }

                }
                toastLog("账号：" + dyzh + "--关注：" + dygz + "--粉丝：" + dyfs + "--签名：" + dyqm + "--点赞：" + djsl + "--播放数量：" + dybf)
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
            qinglihh("com.ss.android.ugc.aweme")
            return true

        } else {
            if (text("消息").exists() && text("我").exists() || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                xgsrizhi("首页")
                click(1020, 1890)
                sleep(2000)
            }
        }
        if (text("下线提醒").exists() && text("好").exists()) {
            xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
        }
        if (text("确认").exists() && text("取消").exists()) {
            xgsrizhi("取消未编辑的视频")
            click("取消")
            sleep(2000)
        }
        if (text("该帐号已被封禁").exists() || text("此账号已经被封禁").exists() || text("查看").exists() && text("取消").exists()) {
            xgsrizhi("此账号已经被封禁")
            var TYP = (new Date()).getTime()
            xgzhzt(sbip, user_id, yhbh, app_id, "封了", "2")
            while (1) {
                if ((new Date()).getTime() - TYP > 5 * 60 * 1000) {
                    xgsrizhi("时间到")
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
//获取设备号跟user_id
function hqsbxx(sbip) {
    xgsrizhi("获取设备号跟user_id") //会重置启动时间
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    var rjs = random(1111, 999)
    xgsrizhi(sbip)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 60 * 1000) {
                jiqima = device.getIMEI()
                xgsrizhi("重新拿机器码" + jiqima)
                rjs = random(1111, 999)
                Tb = (new Date()).getTime()
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/qidongjaoben2?jiqima=" + jiqima + "&remarks=" + rjs
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["msg"] == "等待初始化") {
                    toastLog("请到服务器分配该机器码：" + jiqima)
                    sleep(6000)
                } else {
                    if (r_obj["msg"] == "ok") {
                        var bianhao = r_obj["data"]["der_id"]
                        var user_id = r_obj["data"]["user_id"]
                        xgsrizhi("user_id为" + user_id + "该机器的编号为" + bianhao)
                        toastLog("该机器的用户编号：" + user_id + "手机编号:" + bianhao)
                        return [user_id, bianhao]
                    }
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("获取设备信息中...")
        sleep(random(1000, 10000))
    }
}
//上传dy数据
function updyshuju(sbip, user_id, yhbh, app_id, lx, jine) {
    xgsrizhi("上传抖音数据") //关注guanzhu     粉丝fensi    视频shipin(作品数量)  视频shipinbofang(视频播放量)   喜欢 xihuan  好友数量 haoyou  获赞数量 getzan
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 20 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/uprecord?type=jine&user_id="+user_id+"&der_id="+yhbh+"&app_id="+app_id+"&content="+jine
            var url = "http://" + sbip + "/api.php/potal/meitu/uprecord?type=" + lx + "&user_id=" + user_id + "&der_id=" + yhbh + "&app_id=" + app_id + "&content=" + jine
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["code"] == "0") {
                    xgsrizhi("更新成功")
                    toastLog("更新成功")
                    return true
                } else {
                    if (r_obj["msg"] == "该账号不存在") {
                        xgsrizhi("该账号不存在")
                        var zh = benjitel()
                        if (zh == false) {
                            zh = "11111111"
                        }
                        upzczh(sbip, user_id, yhbh, app_id, zh)
                    }
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("抖音数据中...")
        sleep(random(100, 10000))
    }
}

function xinfabsp() {
    xgsrizhi("新发布视频")
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
    var xs = zhid(sbip, run_id)
    xgsrizhi(xs)
    if (xs != false) {
        fenlei = xs["素材库类"]
        leixing = xs["素材类型"]
        piantou = xs["是否添加视频文字"]
    }
    biaotis = "#" + fenlei + " "
    //var yu = huoquljx("47.96.112.213", "6", "5", "裙子", "0", "2", "2")
    //var yu = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds- 1)
    //剪映版本3.8.1
    //getAllTexts() 
    //var dff = jianjisp(sbip, "6", "5", "裙子", "0")
    var dff = jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou)

    if (dff == false) {
        xgsrizhi("视频制作失败")
        return false
    }

    qinglihh()
    sleep(3000)
    launch("com.ss.android.ugc.aweme")
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            xgsrizhi("时间够了退出")
            if (fb != 0) {
                status = 1
                return true
            }
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
            xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
            xgsrizhi("首页")
            TSD = (new Date()).getTime()
            //click(980, 1850)
            tapobjr(text("我"))
            if (text("编辑资料").exists() || textContains("编辑资料").exists() || desc("分享主页").exists() || textContains("分享主页").exists()) {
                xgsrizhi("编辑资料")
                var ss = getAllTexts()
                try {
                    for (j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            xgsrizhi(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            xgsrizhi("作品数量：" + zpsl)
                            if (fb == 0) {
                                ylsl = zpsl
                                click(541, 1830) //点击加号
                                sleep(2000)
                            } else {
                                xgsrizhi("点击首页")
                                // click(100, 1850)
                                tapobjr(text("我"))
                                sleep(2000)
                            }
                            if (zpsl > ylsl) {
                                xgsrizhi("现在的作品数量大于原来的")
                                status = 1
                                return true
                            }
                        }
                    }
                } catch (error) {
                    sleep(1001)
                    xgsrizhi(error);
                }
            }
        }
        /*   if (tapobjr(id("com.ss.android.ugc.aweme")) || tapobjr(text("相册"))) {
              xgsrizhi("点击拍照界面的相册按钮")
          } */

        if (text("上传").exists() && text("选择音乐").exists() || text("上传").exists() && text("滤镜").exists()) {
            xgsrizhi("上传视频界面")
            click("上传")
            sleep(2000)
        }
        if (text("保存").exists()) {
            xgsrizhi("保存")
            xgsrizhi("选择封面")
            sleep(5000)
            var a = id("com.ss.android.ugc.aweme:id/cnk").find()
            if (a) {
                tapobjrex(a[a.length - 1])
            }

            sleep(2000)
            szfm = 5
            click("保存")
            sleep(2000)
        }
        if (text("相册").exists() && text("选择音乐").exists() || text("相册").exists() && text("滤镜").exists()) {
            xgsrizhi("上传视频界面")
            click("相册")
            sleep(2000)
        }
        if (text("视频").exists() && text("下一步").exists() || text("视频").exists() && id("com.ss.android.ugc.aweme:id/jl").exists() || text("多段视频").exists() && text("视频").exists()) {
            xgsrizhi("上传视频界面")
            try {
                node = text("视频").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
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
                xgsrizhi("下一步")
                click("下一步")
                sleep(3000)
            }
        }

        if (text("作品已发布成功！").exists()) {
            xgsrizhi("作品已发布成功");
            back();
            sleep(3000);
        }
        if (text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()) {
            xgsrizhi("发布")
            if (szfm < 2) {
                xgsrizhi("先去设置封面")
                click("选封面")
                sleep(2000)
                szfm = szfm + 1
            } else {
               
                exit();

                xgsrizhi("点击发布");
                sleep(1500);
                setText(biaotis);
                sleep(1000);
                setClip(biaotiz);
                var et = className("EditText").findOnce();
                et.paste();
                sleep(1500)
                click("发布")
                sleep(3000)
                fb = 1
            }
        }
        if (text("选封面").exists() && id("com.ss.android.ugc.aweme:id/c_f").exists() || text("选封面").exists() && id("com.ss.android.ugc.aweme:id/fy2").exists()) {
            xgsrizhi("选择封面")
            sleep(5000)
            var a = id("com.ss.android.ugc.aweme:id/cnk").find()
            if (a) {
                tapobjrex(a[a.length - 1])
            }
            sleep(2000)
            click(1000, 85)
            sleep(2000)
            szfm = 5
        }
        if (szfm != 0 && id("com.ss.android.ugc.aweme:id/ewg").exists() && id("android:id/content").exists()) {
            xgsrizhi("点到全屏观看")
            click(500, 500)
            sleep(2000)
        }
        if (text("同步到今日头条").exists()) {
            xgsrizhi("同步到今日头条")
            if (fb != 0) {
                xgsrizhi("发布成功")
                click("同步到今日头条")
                sleep(1000)
                // click(530, 1530)
                sleep(3000)
                status = 1
                return true
            } else {
                xgsrizhi("还没发布")
                click("同步到今日头条")
                // click(530, 1530)
                sleep(3000)
            }
        }
        if (id("com.ss.android.ugc.aweme:id/a91").exists() && fb != 0 || id("com.ss.android.ugc.aweme:id/a92").exists() && fb != 0) {
            xgsrizhi("对比标题")
            try {
                var dd = id("com.ss.android.ugc.aweme:id/a91").findOnce()
                if (dd != null) {
                    dd = dd.text();
                } else {
                    dd = id("com.ss.android.ugc.aweme:id/a92").findOnce()
                    if (dd != null) {
                        dd = dd.text();
                    }
                }
                if (dd == biaotis + biaotiz) {
                    xgsrizhi("看到我发布视频的标题了");
                    status = 1;
                    return true;
                }
            } catch (error) {
                sleep(1001);
                xgsrizhi(error);
            }
        }
        if (text("· 1秒前").exists() && fb != 0) {
            xgsrizhi("一秒前的视频");
            status = 1;
            return true;
        }
        if (text("本地草稿箱").exists() && text("选择").exists()) {
            xgsrizhi("本地草稿箱")
            click("选择")
            sleep(1000)
        }
        if (text("放弃").exists() && text("取消").exists()) {
            xgsrizhi("放弃")
            back()
            sleep(2000)
        }
        if (id("com.ss.android.ugc.aweme:id/a1c").exists() && text("取消").exists()) {
            xgsrizhi("删除本地草稿箱")
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
                xgsrizhi(error);
            }
            sleep(3000)
        }
        if (text("删除").exists() && text("取消").exists()) {
            xgsrizhi("删除")
            click("删除")
            sleep(2000)
        }
        zonghe()
    }
}

function xzsp(lj, name) {
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
            var filePath = files.join(dirpath, name + '.mp4');
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
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
    } 1
}

//获取连接

function huoquljx(sbip, user_id, yhbh, fenlei, leixing, znum, fnum) {
    xgsrizhi("获取连接")   //fenlei 类名，leixing0是视频1是图片，znum主视频的个数，fnum副视频的个数
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    // upjiqima(sbip, user_id, yhbh)
    var io = []   //io.push(7)  添加元素
    var shul = Number(znum) + Number(fnum)
    var sjsl = 0
    xgsrizhi("视频数量" + shul)
    while (1) {
        try {
            if ((new Date()).getTime() - ttr > 5 * 60 * 1000) {
                xgsrizhi("超时退出")
                ttr = (new Date()).getTime()
                return false
            }
            // var url = "http://" + sbip + "/api.php/potal/meitu/getrun?user_id=" + user_id + "&der_id=" + yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/make_movie?user_id=" + user_id + "&der_id=" + yhbh + "&type=" + fenlei + "&mold=" + leixing + "&num_zhu=" + znum + "&num_fu=" + fnum
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok") {
                    io = []
                    xgsrizhi(r_obj)
                    if (r_obj["data"]["zhu"].length > 0) {
                        xgsrizhi("添加主连接" + r_obj["data"]["zhu"].length)
                        xgsrizhi(r_obj["data"]["zhu"])
                        for (j = 0, len = r_obj["data"]["zhu"].length; j < len; j++) {
                            if (r_obj["data"]["zhu"] != "") {
                                var lj = r_obj["data"]["zhu"][j]["text"] + "----" + r_obj["data"]["zhu"][j]["id"]
                                xgsrizhi("添加链接" + lj)
                                io.push(lj)
                                sjsl = sjsl + 1
                            }
                        }
                    }
                    //  getrunhot
                    if (r_obj["data"]["fu"].length > 0) {
                        xgsrizhi("添加副链接" + r_obj["data"]["fu"].length)
                        xgsrizhi(r_obj["data"]["fu"])
                        for (j = 0, len = r_obj["data"]["fu"].length; j < len; j++) {
                            if (r_obj["data"]["fu"] != "") {
                                var lj = r_obj["data"]["fu"][j]["text"] + "----" + r_obj["data"]["fu"][j]["id"]
                                xgsrizhi("添加链接" + lj)
                                io.push(lj)
                                sjsl = sjsl + 1
                            }
                        }
                    }
                    xgsrizhi("获取到链接")
                    xgsrizhi(io)
                    if (sjsl >= shul) {
                        xgsrizhi("获取数据正常")
                        return io
                    } else {
                        xgsrizhi("获取数据数量不够")
                        return false
                    }
                } else {
                    toastLog("获取不到服务器连接")
                    sleep(3000)
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 5000))
    }
}

//获取模板标题
function huoqumb(sbip, user_id, yhbh, fenlei) {
    xgsrizhi("获取模板")   //fenlei 类名，leixing0是视频1是图片，znum主视频的个数，fnum副视频的个数
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    var moban = ""
    var biaoti = ""
    while (1) {
        try {
            if ((new Date()).getTime() - ttr > 5 * 60 * 1000) {
                xgsrizhi("超时退出")
                ttr = (new Date()).getTime()
                return false
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/get_temp?user_id=" + user_id + "&der_id=" + yhbh + "&type=" + fenlei
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok") {
                    xgsrizhi(r_obj)
                    if (r_obj["data"]["temp"].length > 0) {
                        xgsrizhi(r_obj["data"]["temp"])
                        for (j = 0, len = r_obj["data"]["temp"].length; j < len; j++) {
                            if (r_obj["data"]["temp"] != "") {
                                moban = r_obj["data"]["temp"][j]["text"] + "----" + r_obj["data"]["temp"][j]["id"]
                                xgsrizhi("获取到的模板链接" + moban)
                            }
                        }
                    }
                    if (r_obj["data"]["title"].length > 0) {
                        xgsrizhi(r_obj["data"]["title"])
                        for (j = 0, len = r_obj["data"]["title"].length; j < len; j++) {
                            if (r_obj["data"]["title"] != "") {
                                biaoti = r_obj["data"]["title"][j]["text"] + "----" + r_obj["data"]["title"][j]["id"]
                                xgsrizhi("获取到的标题" + biaoti)
                            }
                        }
                    }
                    if (moban != "") {
                        xgsrizhi("获取到模板链接" + moban)
                        xgsrizhi("获取到标题" + biaoti)
                        return [moban, biaoti]
                    } else {
                        xgsrizhi("获取不到该类型的模板")
                        return false
                    }
                } else {
                    toastLog("获取不到模板信息")
                    sleep(3000)
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 5000))
    }
}
function xiaomiclear() {
    var i = 0
    sleep(3000)
    while (true) {
        i++
        // com.android.systemui:id/clearAnimView
        if (tapobjr(id("com.android.systemui:id/clearAnimView")) != null) {
            sleep(3000)
            xgsrizhi("点击了小米全部清除")
            return true
        }

        if (!text("全部清除").exists()) {
            swipe(100, 150, 980, 1800, 300)
            sleep(300)
        } else {
            text("全部清除").click()
            sleep(3000)
            return true
        }
        if (i > 5) {
            sleep(3000)
            return false
        }
    }
}
//清理缓存
function qinglihh() {
    xgsrizhi("清理缓存")
    var TB = (new Date()).getTime()
    sleep(2000)
    back()
    sleep(500)
    home()
    sleep(1000)
    while (true) {
        if ((new Date()).getTime() - TB > 30 * 1000) {
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
            return false1
        }
        xgsrizhi("判断机型为:", device.brand)
        if (device.brand == "Xiaomi") {
            //适配小米4c
            recents()
            sleep(1500)
            return xiaomiclear()
        }


        try {
            if (id("com.coloros.recents:id/clear_panel").exists()) {
                xgsrizhi("点击清理opp0r11")

                var aa = id("com.coloros.recents:id/clear_panel").findOnce().bounds();
                if (aa != null) {
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            }

            if (id("com.coloros.recents:id/clear_button").exists()) {
                xgsrizhi("点击清理opp0r11")

                var aa = id("com.coloros.recents:id/clear_button").findOnce().bounds();
                if (aa != null) {
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            }

            if (text("近期没有任何内容").exists()) {
                //适配小米4c
                home()
                sleep(2000)
                back()
                sleep(2000)
                xgsrizhi("无须清理")
                return true
            }
            if (id("com.android.systemui:id/progress_circle_view").exists()) {
                xgsrizhi("点击清理2")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                if (aa != null) {
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            } else {

                if (id("com.android.systemui:id/clear_recents").exists()) {
                    xgsrizhi("点击清理")
                    //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                    var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                    if (aa != null) {
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                    }
                    sleep(2000)
                    home()
                    sleep(2000)
                    return true
                } else {

                    if (id("com.android.systemui:id/progress_circle_view").exists()) {
                        xgsrizhi("点击清理2")
                        //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                        var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                        if (aa != null) {
                            xgsrizhi(aa.centerX())
                            xgsrizhi(aa.centerY())
                            click(aa.centerX(), aa.centerY())
                        }
                        sleep(2000)
                        home()
                        sleep(2000)
                        return true
                    } else {
                        if (id("com.huawei.android.launcher:id/clear_all_recents_image_button").exists()) {
                            xgsrizhi("点击清理3")
                            //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                            var aa = id("com.huawei.android.launcher:id/clear_all_recents_image_button").findOnce().bounds();
                            if (aa != null) {
                                xgsrizhi(aa.centerX())
                                xgsrizhi(aa.centerY())
                                click(aa.centerX(), aa.centerY())
                            }
                            sleep(2000)
                            home()
                            sleep(2000)
                            return true
                        } else {
                            home()
                            sleep(2000)
                            back()
                            sleep(1000)
                            recents()
                            sleep(4000)
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
}
function tapobjr(tz, ts) {
    if (ts == null) {
        ts = 100
    }
    obj = tz.findOne(ts);
    //xgsrizhi(obj) 
    if (obj != null) {
        obj = obj.bounds()
        xgsrizhi(obj.left, obj.right, obj.top, obj.bottom)
        press(random(obj.left, obj.right), random(obj.top, obj.bottom), random(50, 150))
        return true
    } else {
        return false
    }
}
//获取该页面文字
function getAllTexts(setting) {
    try {
        var setting = setting || {}
        var defaultSetting = {
            getText: true,
            getDesc: true,
            getId: false,
            removeRepetitiveElements: true
        }
        Object.assign(defaultSetting, setting);
        //xgsrizhi(defaultSetting)
        var allStr = []
        var getDescAndTextAndIdOfNode = function (node) {
            if (node) {
                if (defaultSetting.getText) {
                    var text = node.text()
                    if (!!text) {
                        allStr.push(text)
                    }
                }
                if (defaultSetting.getDesc) {
                    var desc = node.desc()
                    if (!!desc) {
                        allStr.push(desc)
                    }
                }
                if (defaultSetting.getId) {
                    var id = node.id()
                    if (!!id) {
                        allStr.push(id)
                    }
                }
            }
            for (let i = 0; i < node.childCount(); i++) {
                getDescAndTextAndIdOfNode(node.child(i));
            }
        }
        var getFrameLayoutNode = function () {
            return className('FrameLayout').findOne(2000)
        }
        getDescAndTextAndIdOfNode(getFrameLayoutNode())

        function removeRepetitiveElements(arr) {
            var obj = {}
            for (let i = 0; i < arr.length; i++) {
                if (obj.hasOwnProperty(arr[i])) { } else {
                    obj[arr[i]] = true
                }
            }
            return Object.keys(obj)
        }
        if (defaultSetting.removeRepetitiveElements) {
            allStr = removeRepetitiveElements(allStr)
        }
        return allStr
    } catch (error) {
        sleep(1001)
        xgsrizhi(error);
        return 1
    }
}


function jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou) {
    xgsrizhi("剪辑视频第一步")   //\\192.168.2.211 fenlei分类的名字  leixing素材的类型 piantou片头是否增加视频标题
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()

    files.removeDir("/sdcard/DCIM/Camera/")   //删除文件夹
    qinglihh()
    var lianj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/xinban/apk/3d%20(9).mp4"    //视频链接
    var spds = 0    //需要的视频段数
    var sc = 0      //判断时长不够
    var pdgs = 0    //判断时长不够
    var biaoti = 0
    var mobanlj = "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    var tty = huoqumb(sbip, user_id, yhbh, fenlei)
    if (tty != false) {
        mobanlj = tty[0].split("----")[0]
        biaoti = tty[1].split("----")[0]
        xgsrizhi("获取到模板链接" + mobanlj)
        xgsrizhi("获取到标题" + biaoti)
        biaotiz = biaoti

    } else {
        xgsrizhi("没有模板")
        return false
    }

    // mobanlj =  "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    setClip(mobanlj)
    sleep(1000)
    xgsrizhi("打开剪辑app")
    launch("com.lemon.lv")
    sleep(2000)
    while (1) {
        zonghe()
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            xgsrizhi("超时退出再进")
            qinglihh()
            tty = huoqumb(sbip, user_id, yhbh, fenlei)
            if (tty != false) {
                mobanlj = tty[0].split("----")[0]
                biaoti = tty[1].split("----")[0]
                xgsrizhi("获取到模板链接" + mobanlj)
                xgsrizhi("获取到标题" + biaoti)
                biaotiz = biaoti
            } else {
                xgsrizhi("没有模板")
                return false
            }
            setClip(mobanlj)
            sleep(1000)
            launch("com.lemon.lv")
            sleep(2000)
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            xgsrizhi("首页")
            click(940, 1860)
            sleep(2000)
        }
        if (desc("同款").exists() && desc("喜欢").exists() || text("编辑资料").exists() && desc("喜欢").exists() || id("com.lemon.lv:id/ivMore").exists() && desc("喜欢").exists()) {
            xgsrizhi("我的界面")
            sleep(2000)
            // try {
            //     var ss = desc("喜欢").findOnce().bounds();
            //     xgsrizhi(ss)
            //     click(ss.centerX(), ss.centerY());
            //     sleep(2000)
            //     var sjhd = random(1, 6)
            //     for (j = 0, len = sjhd; j < len; j++) {
            //         swipe(500, random(1500, 1600), 600, 400, 1000)
            //         sleep(random(1000, 3000))
            //     }
            //     click(random(100, 1000), random(1200, 1700))
            //     sleep(3000)
            //     if (id("com.lemon.lv:id/iv_cover").exists()){
            //         xgsrizhi("没进入剪同款界面")
            //         click(100, 1000)
            //         sleep(2000)
            //     }
            // } catch (error) {
            //     sleep(1001)
            //     xgsrizhi(error);
            // }
        }

        if (text("剪同款").exists() && text("同款集").exists() || text("剪同款").exists() && id("com.lemon.lv:id/userAvatar").exists()) {
            xgsrizhi("剪同款")
            var ss = getAllTexts()
            xgsrizhi(ss)
            spds = 0
            try {
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("片段 ") != -1 && ss[j].indexOf(" 使用量") != -1) {
                        var sxs = text(ss[j]).findOnce().bounds();
                        xgsrizhi(sxs.centerY())
                        xgsrizhi(ss[j])
                        if (sxs.centerY() > 1800 && sxs.centerY() < 1900) {
                            spds = ss[j].split("片段 ")[1].split(" 使用量")[0]
                            if (!isNaN(spds)) {
                                xgsrizhi("需要" + spds + "段视频")
                                break
                            } else {
                                xgsrizhi("不是数字" + spds)
                                spds = 0
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
            if (spds > 0) {
                xgsrizhi("获取到段数" + spds)
                var xiazsp = 0
                var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds - 1)
                if (ssj == false) {
                    xgsrizhi("视频链接数据")
                    return false
                }
                while (1) {
                    xiazsp = xiazsp + 1
                    if (xiazsp > spds || xiazsp > 20) {
                        xgsrizhi("下载视频数量够了")
                        break
                    } else {
                        lianj = ssj[xiazsp - 1].split("----")[0]
                        xgsrizhi("下载的视频链接")
                        xgsrizhi("下载第" + xiazsp + "个视频")
                        xzsp(lianj, xiazsp)
                    }
                }
                sleep(3000)
                click("剪同款")
                sleep(2000)
            }
            TT = (new Date()).getTime()
        }
        if (text("拍摄").exists() && text("照片视频").exists() && text("下一步").exists() || text("照片").exists() && text("视频").exists() && text("下一步").exists()) {
            xgsrizhi("选择视频界面")
            var xuanqu = 1
            try {
                if (text("已导入").exists()) {
                    xgsrizhi("已导入")

                    xuanqu = text("已导入").find().length + 1
                }
                if (pdgs == xuanqu) {
                    sc = sc + 1
                } else {
                    sc = 0
                }
                pdgs = xuanqu
                if (sc > 2) {
                    xgsrizhi("随机点一个视频")
                    click(random(50, 1050), random(350, 1300))
                    sleep(1000)
                    sc = 0
                }
                if (row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).exists()) {
                    xgsrizhi("点击第" + xuanqu + "个视频")
                    var ss = row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).findOnce().bounds();
                    xgsrizhi(ss.centerX())
                    xgsrizhi(ss.centerY())
                    click(ss.centerX(), ss.centerY());
                    sleep(500)
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
            sleep(1000)
            click("下一步")
            sleep(2000)
        }

        if (text("导出").exists() && text("编辑").exists() || text("导出").exists() && text("文本编辑").exists()) {
            xgsrizhi("导出")
            click("导出")
            sleep(2000)
        }
        if (text("导出选择").exists() && text("无水印保存并分享").exists() || text("无水印保存并分享").exists() && text("导出").exists()) {
            xgsrizhi("无水印保存并分享")
            click("无水印保存并分享")
            sleep(10000)
        }
        if (text("完成后自动转跳抖音").exists() || textContains("正在导出").exists()) {
            toastLog("正在导出")
            sleep(5000)
        }
        if (text("下一步").exists() && id("com.ss.android.ugc.aweme:id/by5").exists() || packageName("com.ss.android.ugc.aweme").exists() && text("下一步").exists()) {
            xgsrizhi("在抖音发布界面了")
            back()
            sleep(2000)
        }


        if (text("完成").exists() && text("抖音").exists() || text("微信").exists() && text("完成").exists()) {
            xgsrizhi("完成")
            click("完成")
            sleep(2000)
            back()
            sleep(2000)
            if (biaoti != undefined && biaoti != "" && piantou == "是") {
                var gg = jianjicl(biaoti)
                return true
            } else {
                xgsrizhi("制作完成" + biaoti + piantou)
                return true
            }

            return true
        }
        if (text("打开看看").exists()) {
            xgsrizhi("打开看看")
            click("打开看看")
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            xgsrizhi("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            xgsrizhi("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
        sleep(2000)
    }
}
/*
function jianjicl(huashu) {
    xgsrizhi("剪辑视频处理第二步")
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var cl = 0    //判断处理到第几步
    // var huashu = "愿意跟我一起组CP吗"
    xgsrizhi("话术：" + huashu)
    qinglihh()
    launch("com.lemon.lv")
    var sgg = 0
    while (1) {
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            xgsrizhi("超时退出再进")
            qinglihh()
            cl = 0
            launch("com.lemon.lv")
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            xgsrizhi("首页")
            click(120, 1860)
            sleep(2000)
        }

        if (text("剪辑草稿").exists() && text("模板草稿").exists() || text("管理").exists() && text("开始创作").exists()) {
            xgsrizhi("首页2")
            if (sgg == 0) {
                xgsrizhi("设置")
                click(1000, 160)
                sleep(2000)
                sgg = 1
            } else {
                xgsrizhi("开始创作")
                click(520, 420)
                sleep(2000)
            }
        }
        if (text("用户协议").exists() && text("意见反馈").exists() || text("自动添加片尾").exists() && text("版本号").exists()) {
            xgsrizhi("关闭自动添加片尾")
            sgg = sgg + 1
            if (id("com.lemon.lv:id/epilogueSwitch").exists()) {
                var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().checked();
                if (aa == false) {
                    xgsrizhi("已经关闭了")
                    back()
                } else {
                    var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().bounds();
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
            }
            if (sgg > 5) {
                xgsrizhi("次数过多")
                back()
                sleep(2000)
            }
        }
        if (text("照片视频").exists() && text("素材库").exists() || id("com.lemon.lv:id/iv_local_multi_media_select").exists() && text("照片").exists()) {
            xgsrizhi("添加素材界面")
            if (cl == 0) {
                xgsrizhi("添加素材库的素材")
                click(700, 80)
                sleep(2000)
                if (text("黑白场").exists() || text("插入动画").exists()) {
                    xgsrizhi("素材库")
                    click(700, 80)
                    sleep(1000)
                    click(610, 400)
                    sleep(2000)
                    click(900, 1810)
                    sleep(3000)
                }
            } else {
                xgsrizhi("添加自己的视频")
                click(280, 400)
                sleep(2000)
                click(900, 1800)
                sleep(3000)
            }
        }
        if (text("导出").exists() && text("剪辑").exists() && text("文字").exists() || text("特效").exists() && text("画中画").exists()) {
            xgsrizhi("视频编辑界面")
            if (cl == 0) {
                xgsrizhi("添加文字语音")
                click("文字")
            } else {
                swipe(300, 1600, random(900, 1000), 1600, 1000)
                if (text("滤镜").exists()) {
                    xgsrizhi("点击滤镜")
                    click("滤镜")
                } else {
                    xgsrizhi("没看到滤镜")
                    swipe(random(1001, 800), 1790, 300, 1790, 1000)
                    sleep(random(1000, 3000))
                }
            }
            sleep(2000)
        }

        if (text("滤镜").exists() && desc("panel_bottom_bar_complete").exists()) {
            xgsrizhi("选择滤镜")
            var dt = random(1, 10)
            for (j = 0, len = dt; j < len; j++) {
                swipe(random(1001, 800), 1680, 300, 1680, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1680)
            sleep(2000)
            click(random(390, 410), 1500)
            sleep(1000)
            click(1000, 1850)
            sleep(2000)
            cl = 3
        }
        if (text("滤镜").exists() && text("删除").exists()) {
            xgsrizhi("设置滤镜应用范围")
            if (depth(11).boundsInside(0, 1330, 1080, 1450).exists()) {
                xgsrizhi("滤镜范围")
                var ss = depth(11).boundsInside(0, 1330, 1080, 1450).findOnce().bounds();
                var wzzb = ss.right
                xgsrizhi(wzzb)
                if (wzzb > 700) {
                    xgsrizhi("挪一下2")
                    swipe(700, 1600, 300, 1600, 1000)
                    sleep(random(1000, 2000))
                } else {
                    xgsrizhi("调节滤镜")
                    swipe(wzzb + 5, 1400, 1070, 1400, 3000)
                    sleep(random(1000, 2000))
                    click("导出")
                    sleep(2000)
                }
            }
            sleep(2000)
        }
        if (text("新增滤镜").exists() && text("新增调节").exists()) {
            xgsrizhi("新增滤镜")
            if (depth(11).boundsInside(0, 1330, 1080, 1450).exists()) {
                xgsrizhi("已经有滤镜了")
                click(600, 1400)
            } else {
                xgsrizhi("没有滤镜")
                back()
            }
            sleep(2000)
        }
        if (text("新建文本").exists() && text("识别字幕").exists() || text("识别歌词").exists() && text("新建文本").exists()) {
            xgsrizhi("新建文本界面")
            if (cl == 0) {
                xgsrizhi("新建文本")
                //click("新建文本")
                tapobjr(text("新建文本"))
                sleep(2000)
            } else {
                if (cl == 1) {
                    if (id("com.lemon.lv:id/ivTransition").exists()) {
                        xgsrizhi("点击转场")
                        try {
                            var ss = id("com.lemon.lv:id/ivTransition").findOnce().bounds();
                            xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            xgsrizhi(error);
                        }
                    }
                } else {
                    xgsrizhi("返回上一层")
                    back()
                    sleep(2000)
                }
            }
        }
        if (text("转场").exists() && text("应用到全部").exists()) {
            xgsrizhi("设置转场")
            var dt = random(1, 5)
            click(random(100, 1000), 1210)
            sleep(1000)
            for (j = 0, len = dt; j < len; j++) {
                swipe(900, 1400, 300, 1400, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1400)
            sleep(1000)
            click(1000, 1850)
            sleep(2000)
            cl = 2
        }

        if (text("花字").exists() && text("动画").exists() || text("样式").exists() && text("气泡").exists()) {
            xgsrizhi("输入话术界面" + huashu)
            setText(huashu)
            sleep(2000)
            if (id("com.lemon.lv:id/btnOk").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/btnOk").findOnce().bounds();
                    xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    xgsrizhi(error);
                }
            } else {
                xgsrizhi("直接点击勾勾")
                click(1000, 1000)
                sleep(2000)
            }
            cl = 1
        }
        if (text("文本朗读").exists() && text("复制").exists() || text("文本朗读").exists() && text("删除").exists()) {
            xgsrizhi("文本朗读")
            if (id("com.lemon.lv:id/audioLine").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right    //文字朗读的坐标的坐标
                    if (wzzb > 540) {
                        xgsrizhi("点击添加视频")
                        click(600, 1250)
                        sleep(2000)
                    } else {
                        xgsrizhi("点击文本朗读2")
                        click("文本朗读")
                    }
                } catch (error) {
                    sleep(1001)
                    xgsrizhi(error);
                }
            } else {
                xgsrizhi("点击文本朗读")
                click("文本朗读")
            }
            sleep(2000)
        }
        if (text("分割").exists() && text("动画").exists() || text("动画").exists() && text("删除").exists() && text("编辑").exists()) {
            xgsrizhi("调整声音跟画面匹配")
            try {
                if (id("com.lemon.lv:id/framesLayout").exists() && id("com.lemon.lv:id/audioLine").exists()) {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right    //文字朗读的坐标
                    ss = id("com.lemon.lv:id/framesLayout").findOnce().bounds();
                    var spzb = ss.right    //视频的坐标
                    if (spzb > 950) {
                        xgsrizhi("坐标太大了挪一下")
                        swipe(700, 1600, 500, 1600, 1000)
                        sleep(random(1000, 2000))
                    } else {
                        xgsrizhi("能看到视频跟声音为位置了")
                        xgsrizhi(spzb)
                        xgsrizhi(wzzb)
                        if (spzb > wzzb || spzb == wzzb) {
                            if (spzb - wzzb > 30) {
                                xgsrizhi("视频的位置大于文字的位置")
                                swipe(spzb + 4, 1250, wzzb - 5, 1250, 1000)
                                sleep(random(1000, 2000))
                            } else {
                                xgsrizhi("位置合适了")
                                swipe(800, 1600, 300, 1600, 1000)
                                sleep(random(1000, 2000))
                                click(1020, 1240)
                                sleep(3000)
                            }
                        } else {
                            if (spzb < wzzb) {
                                if (wzzb - spzb > 30) {
                                    xgsrizhi("声音位置大于视频位置")
                                    swipe(spzb + 4, 1250, wzzb + 6, 1250, 1000)
                                    sleep(random(1000, 2000))
                                    click(1020, 1240)
                                    sleep(3000)
                                } else {
                                    xgsrizhi("位置合适了2")
                                    swipe(800, 1600, 300, 1600, 1000)
                                    sleep(random(1000, 2000))
                                    click(1020, 1240)
                                    sleep(3000)
                                }
                            }
                        }
                        sleep(2000)
                    }
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
        }
        if (text("导出").exists() && text("分辨率").exists() || text("导出").exists() && text("帧率").exists()) {
            xgsrizhi("制作完成导出")
            swipe(880, 979, 544, 979, 1000)
            sleep(1000)
            click("导出")
            sleep(10000)

        }
        if (text("完成").exists() && text("已保存到相册和草稿").exists() || text("完成").exists() && text("分享视频到").exists()) {
            xgsrizhi("完成")
            click("完成")
            sleep(2000)
            return true
        }

        if (text("音色选择").exists()) {
            xgsrizhi("音色选择")
            click(760, 1600)
            sleep(2000)
            click(990, 1840)
            sleep(3000)
        }

        if (id("com.lemon.lv:id/iv_preview_close").exists() && id("com.lemon.lv:id/tv_preview_select_index").exists()) {
            xgsrizhi("点到视频全屏-返回")
            back()
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("残忍关闭").exists()) {
            xgsrizhi("残忍关闭")
            click("残忍关闭")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            xgsrizhi("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            xgsrizhi("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
    }
}
 */

/* 
 function jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou) {
    xgsrizhi("剪辑视频第一步版本3.8.1")   //\\192.168.2.211 fenlei分类的名字  leixing素材的类型 piantou片头是否增加视频标题
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    files.removeDir("/sdcard/DCIM/Camera/")   //删除文件夹
    qinglihh()
    var lianj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/xinban/apk/3d%20(9).mp4"    //视频链接
    var spds = 0    //需要的视频段数
    var sc = 0      //判断时长不够
    var pdgs = 0    //判断时长不够
    var biaoti = 0
    var mobanlj = "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    var tty = huoqumb(sbip, user_id, yhbh, fenlei)
    if (tty != false) {
        mobanlj = tty[0]
        biaoti = tty[1]
        xgsrizhi("获取到模板链接" + mobanlj)
        xgsrizhi("获取到标题" + biaoti)
    } else {
        xgsrizhi("没有模板")
        return false
    }
    mobanlj = "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6840457616842362126"
    setClip(mobanlj)
    sleep(1000)
    app.launchPackage("com.lemon.lv")
    sleep(2000)
    while (1) {
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            xgsrizhi("超时退出再进")
            qinglihh()
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }

        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            xgsrizhi("首页")
            click(940, 1860)
            sleep(2000)
        }
        if (desc("同款").exists() && desc("喜欢").exists() || text("编辑资料").exists() && desc("喜欢").exists() || id("com.lemon.lv:id/ivMore").exists() && desc("喜欢").exists()) {
            xgsrizhi("我的界面")
            sleep(2000)
            // try {
            //     var ss = desc("喜欢").findOnce().bounds();
            //     xgsrizhi(ss)
            //     click(ss.centerX(), ss.centerY());
            //     sleep(2000)
            //     var sjhd = random(1, 6)
            //     for (j = 0, len = sjhd; j < len; j++) {
            //         swipe(500, random(1500, 1600), 600, 400, 1000)
            //         sleep(random(1000, 3000))
            //     }
            //     click(random(100, 1000), random(1200, 1700))
            //     sleep(3000)
            //     if (id("com.lemon.lv:id/iv_cover").exists()){
            //         xgsrizhi("没进入剪同款界面")
            //         click(100, 1000)
            //         sleep(2000)
            //     }
            // } catch (error) {
            //     sleep(1001)
            //     xgsrizhi(error);
            // }
        }

        if (text("剪同款").exists() && text("同款集").exists() || text("剪同款").exists() && id("com.lemon.lv:id/userAvatar").exists()) {
            xgsrizhi("剪同款")
            var ss = getAllTexts()
            xgsrizhi(ss)
            spds = 0
            try {
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("片段 ") != -1 && ss[j].indexOf(" 使用量") != -1) {
                        var sxs = text(ss[j]).findOnce().bounds();
                        xgsrizhi(sxs.centerY())
                        xgsrizhi(ss[j])
                        if (sxs.centerY() > 1800 && sxs.centerY() < 1900) {
                            spds = ss[j].split("片段 ")[1].split(" 使用量")[0]
                            if (!isNaN(spds)) {
                                xgsrizhi("需要" + spds + "段视频")
                                break
                            } else {
                                xgsrizhi("不是数字" + spds)
                                spds = 0
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
            if (spds > 0) {
                xgsrizhi("获取到段数" + spds)
                var xiazsp = 0
                var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds - 1)
                if (ssj == false) {
                    xgsrizhi("视频链接数据")
                    return false
                }
                while (1) {
                    xiazsp = xiazsp + 1
                    if (xiazsp > spds || xiazsp > 20) {
                        xgsrizhi("下载视频数量够了")
                        break
                    } else {
                        lianj = ssj[xiazsp - 1].split("----")[0]
                        xgsrizhi("下载的视频链接")
                        xgsrizhi("下载第" + xiazsp + "个视频")
                        xzsp(lianj, xiazsp)
                    }
                }
                sleep(3000)
                click("剪同款")
                sleep(2000)
            }
            TT = (new Date()).getTime()
        }
        if (text("拍摄").exists() && text("照片视频").exists() && text("下一步").exists() || text("照片").exists() && text("视频").exists() && text("下一步").exists()) {
            xgsrizhi("选择视频界面")
            var xuanqu = 1
            try {
                if (text("已导入").exists()) {
                    xgsrizhi("已导入")

                    xuanqu = text("已导入").find().length + 1
                }
                if (pdgs == xuanqu) {
                    sc = sc + 1
                } else {
                    sc = 0
                }
                pdgs = xuanqu
                if (sc > 2) {
                    xgsrizhi("随机点一个视频")
                    click(random(50, 1050), random(350, 1300))
                    sleep(1000)
                    sc = 0
                }
                if (row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).exists()) {
                    xgsrizhi("点击第" + xuanqu + "个视频")
                    var ss = row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).findOnce().bounds();
                    xgsrizhi(ss.centerX())
                    xgsrizhi(ss.centerY())
                    click(ss.centerX(), ss.centerY());
                    sleep(500)
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
            sleep(1000)
            click("下一步")
            sleep(2000)
        }

        if (text("导出").exists() && text("编辑").exists() || text("导出").exists() && text("文本编辑").exists()) {
            xgsrizhi("导出")
            click("导出")
            sleep(2000)
        }
        if (text("导出选择").exists() && text("无水印保存并分享").exists() || text("无水印保存并分享").exists() && text("导出").exists()) {
            xgsrizhi("无水印保存并分享")
            click("无水印保存并分享")
            sleep(10000)
        }
        if (text("完成后自动转跳抖音").exists() || textContains("正在导出").exists()) {
            toastLog("正在导出")
            sleep(5000)
        }
        if (text("下一步").exists() && id("com.ss.android.ugc.aweme:id/by5").exists() || packageName("com.ss.android.ugc.aweme").exists() && text("下一步").exists()) {
            xgsrizhi("在抖音发布界面了")
            back()
            sleep(2000)
        }


        if (text("完成").exists() && text("抖音").exists() || text("微信").exists() && text("完成").exists()) {
            xgsrizhi("完成")
            click("完成")
            sleep(2000)
            back()
            sleep(2000)
            if (biaoti != undefined && biaoti != "" && piantou == "是") {
                var gg = jianjicl(biaoti)
                return true
            } else {
                xgsrizhi("制作完成" + biaoti + piantou)
                return true
            }

            return true
        }
        if (text("打开看看").exists()) {
            xgsrizhi("打开看看")
            click("打开看看")
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            xgsrizhi("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            xgsrizhi("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
        sleep(2000)
    }

}

 */
function jianjicl(huashu) {
    xgsrizhi("剪辑视频处理第二步")
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var cl = 0    //判断处理到第几步
    var bl = 0  //0 需要去调节比例,1不需要
    // var huashu = "愿意跟我一起组CP吗"
    xgsrizhi("话术：" + huashu)
    qinglihh()
    sleep(3000)
    xgsrizhi("启动app")
    app.launchPackage("com.lemon.lv")
    var sgg = 0
    while (1) {
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            xgsrizhi("超时退出再进")
            qinglihh()
            cl = 0
            launch("com.lemon.lv")
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            xgsrizhi("首页")
            click(120, 1860)
            sleep(2000)

        }

        if (text("剪辑草稿").exists() && text("模板草稿").exists() || text("管理").exists() && text("开始创作").exists()) {
            xgsrizhi("首页2")
            if (sgg == 0) {

                xgsrizhi("设置")

                // click(1000, 160)

                tapobjr(id("com.lemon.lv:id/main_activity_header_setting"))

                sleep(2000)

                sgg = 1

            } else {

                //  click(520, 420)  

                tapobjr(text("开始创作"))

                sleep(2000)

            }
        }
        if (text("用户协议").exists() && text("意见反馈").exists() || text("自动添加片尾").exists() && text("版本号").exists()) {
            xgsrizhi("关闭自动添加片尾")
            sgg = sgg + 1
            if (id("com.lemon.lv:id/epilogueSwitch").exists()) {
                var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().checked();
                if (aa == false) {
                    xgsrizhi("已经关闭了")
                    back()
                } else {
                    var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().bounds();
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
            }
            if (sgg > 5) {
                xgsrizhi("次数过多")
                back()
                sleep(2000)
            }
        }
        if (text("照片视频").exists() && text("素材库").exists() || id("com.lemon.lv:id/iv_local_multi_media_select").exists() && text("照片").exists()) {
            xgsrizhi("添加素材界面")
            if (cl == 0) {
                xgsrizhi("添加素材库的素材")
                click(700, 80)
                sleep(2000)
                if (text("黑白场").exists() || text("插入动画").exists()) {
                    xgsrizhi("素材库")
                    click(700, 80)
                    sleep(1000)
                    click(610, 400)
                    sleep(2000)
                    click(900, 1810)
                    sleep(3000)
                }
            } else {
                xgsrizhi("添加自己的视频")
                click(280, 400)
                sleep(2000)
                click(900, 1800)
                sleep(3000)
            }
        }

        if (tapobj(text("9:16")) != null) {
            bl = 1
            back()
        }
        bj:
        if (text("导出").exists() && text("剪辑").exists() && text("文字").exists() || text("特效").exists() && text("画中画").exists()) {

            if (bl == 0) {
                var uc = text("比例").findOnce();
                if (uc != null) {
                    tapobjrex(uc)
                    xgsrizhi("点击比例按钮")
                } else {
                    scrollDown();
                    sleep(2000)
                    xgsrizhi("滑动控件,等待比例出现")
                }
                break bj;
            } else {
                scrollUp();
                sleep(2000)
            }

            xgsrizhi("视频编辑界面")
            if (cl == 0) {
                xgsrizhi("添加文字语音")
                click("文字")
            } else {
                swipe(300, 1600, random(900, 1000), 1600, 1000)
                if (text("滤镜").exists()) {
                    xgsrizhi("点击滤镜")
                    click("滤镜")
                } else {
                    xgsrizhi("没看到滤镜")
                    swipe(random(1001, 800), 1790, 300, 1790, 1000)
                    sleep(random(1000, 3000))
                }
            }
            sleep(2000)
        }

        if (text("滤镜").exists() && desc("panel_bottom_bar_complete").exists()) {
            xgsrizhi("选择滤镜")
            var dt = random(1, 10)
            for (j = 0, len = dt; j < len; j++) {
                swipe(random(1001, 800), 1680, 300, 1680, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1680)
            sleep(2000)
            click(random(390, 410), 1500)
            sleep(1000)
            click(1000, 1850)
            sleep(2000)
            cl = 3
        }
        if (text("滤镜").exists() && text("删除").exists()) {
            xgsrizhi("设置滤镜应用范围")

            //适配小米4
            if (depth(11).boundsInside(0, 1388, 1080, 1727).exists()) {
                xgsrizhi("滤镜范围")
                var ss = depth(11).boundsInside(0, 1388, 1080, 1727).findOnce().bounds();
                var wzzb = ss.right
                xgsrizhi(wzzb)
                if (wzzb > 700) {
                    xgsrizhi("挪一下2")
                    sleep(1000)
                    swipe(700, 1600, 300, 1600, 1000)
                    sleep(random(1000, 2000))
                } else {
                    xgsrizhi("调节滤镜")
                    sleep(1000)
                    swipe(wzzb + 10, 1420, 1078, 1420, 3000)
                    sleep(random(1000, 2000))
                    click("导出")
                    sleep(2000)
                }
            } else {
                if (depth(11).boundsInside(0, 1340, 1080, 1727).exists()) {
                    xgsrizhi("滤镜范围")
                    var ss = depth(11).boundsInside(0, 1340, 1080, 1727).findOnce().bounds();
                    var wzzb = ss.right
                    xgsrizhi(wzzb)
                    if (wzzb > 700) {
                        xgsrizhi("挪一下2")
                        sleep(1000)
                        swipe(700, 1600, 300, 1600, 1000)
                        sleep(random(1000, 2000))
                    } else {
                        xgsrizhi("调节滤镜")
                        sleep(1000)
                        swipe(wzzb + 10, 1420, 1078, 1420, 3000)
                        sleep(random(1000, 2000))
                        click("导出")
                        sleep(2000)
                    }
                }

            }
            sleep(2000)
        }
        if (text("新增滤镜").exists() && text("新增调节").exists()) {
            xgsrizhi("新增滤镜")
            if (depth(11).boundsInside(0, 1388, 1080, 1727).exists()) {
                xgsrizhi("已经有滤镜了")
                click(600, 1400)
            } else {
                xgsrizhi("没有滤镜")
                back()
            }
            sleep(2000)
        }
        if (text("新建文本").exists() && text("识别字幕").exists() || text("识别歌词").exists() && text("新建文本").exists()) {
            xgsrizhi("新建文本界面")
            if (cl == 0) {
                xgsrizhi("新建文本")
                //click("新建文本")

                tapobjr(text("新建文本"))

                sleep(2000)
            } else {
                if (cl == 1) {
                    if (id("com.lemon.lv:id/ivTransition").exists()) {
                        xgsrizhi("点击转场")
                        try {
                            var ss = id("com.lemon.lv:id/ivTransition").findOnce().bounds();
                            xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            xgsrizhi(error);
                        }
                    }

                    /*      if (id("com.lemon.lv:id/ivAdd").exists()) {
                             xgsrizhi("点击转场")
                             //fullId = com.lemon.lv:id/ivAdd
                             // 适配小米4c
                             try {
                                 var ss = id("com.lemon.lv:id/ivAdd").findOnce().bounds();
                                 xgsrizhi(ss)
                                 click(ss.centerX(), ss.centerY());
                                 sleep(2000)
                             } catch (error) {
                                 sleep(1001)
                                 xgsrizhi(error);
                             }
                         } */

                } else {
                    xgsrizhi("返回上一层")
                    back()
                    sleep(2000)
                }
            }
        }
        if (text("转场").exists() && text("应用到全部").exists()) {
            xgsrizhi("设置转场")
            var dt = random(1, 5)
            click(random(100, 1000), 1210)
            sleep(1000)
            for (j = 0, len = dt; j < len; j++) {
                swipe(900, 1400, 300, 1400, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1400)
            sleep(1000)
            click(1000, 1850)

            sleep(2000)
            cl = 2
        }

        if (text("花字").exists() && text("动画").exists() || text("样式").exists() && text("气泡").exists()) {
            xgsrizhi("输入话术界面")
            setText(huashu)
            sleep(2000)
            if (id("com.lemon.lv:id/btnOk").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/btnOk").findOnce().bounds();
                    xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    xgsrizhi(error);
                }
            } else {
                xgsrizhi("直接点击勾勾")
                click(1000, 1000)
                sleep(2000)
            }
            cl = 1
        }
        if (text("文本朗读").exists() && text("复制").exists() || text("文本朗读").exists() && text("删除").exists()) {
            xgsrizhi("文本朗读")
            if (id("com.lemon.lv:id/audioLine").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce()
                    if (ss != null) {

                        ss = ss.bounds();

                    }
                    var wzzb = ss.right    //文字朗读的坐标的坐标
                    if (wzzb > 540) {

                        xgsrizhi("点击添加视频")

                        click(600, 1250)

                        sleep(2000)

                    } else {
                        xgsrizhi("点击文本朗读2")
                        click("文本朗读")
                    }

                } catch (error) {
                    sleep(1001)
                    xgsrizhi(error);
                }
            } else {
                xgsrizhi("点击文本朗读")
                click("文本朗读")
            }
            sleep(2000)
        }
        if (text("分割").exists() && text("动画").exists() || text("动画").exists() && text("删除").exists() && text("编辑").exists()) {
            xgsrizhi("调整声音跟画面匹配")
            try {
                if (id("com.lemon.lv:id/framesLayout").exists() && id("com.lemon.lv:id/audioLine").exists()) {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce()
                    if (ss != null) {
                        ss = ss.bounds();
                    }
                    var wzzb = ss.right    //文字朗读的坐标
                    ss = id("com.lemon.lv:id/framesLayout").findOnce().bounds();
                    var spzb = ss.right    //视频的坐标
                    if (spzb > 950) {
                        xgsrizhi("坐标太大了挪一下")
                        swipe(700, 1600, 500, 1600, 1000)
                        sleep(random(1000, 2000))
                    } else {
                        1
                        xgsrizhi("能看到视频跟声音为位置了")
                        xgsrizhi(spzb)
                        xgsrizhi(wzzb)
                        if (spzb > wzzb || spzb == wzzb) {
                            if (spzb - wzzb > 30) {
                                xgsrizhi("视频的位置大于文字的位置")
                                swipe(spzb + 4, 1250, wzzb - 5, 1250, 1000)
                                sleep(random(1000, 2000))
                            } else {
                                xgsrizhi("位置合适了")
                                swipe(800, 1600, 300, 1600, 1000)
                                sleep(random(1000, 2000))
                                if (tapobj(id("com.lemon.lv:id/ivTransition")) == null) {
                                    click(1020, 1240) //添加视频 
                                }
                                sleep(3000)
                            }
                        } else {
                            if (spzb < wzzb) {
                                if (wzzb - spzb > 30) {
                                    xgsrizhi("声音位置大于视频位置")
                                    swipe(spzb + 4, 1250, wzzb + 6, 1250, 1000)
                                    sleep(random(1000, 2000))
                                    if (tapobj(id("com.lemon.lv:id/ivTransition")) == null) {
                                        click(1020, 1240) //添加视频 
                                    }
                                    sleep(3000)
                                } else {
                                    xgsrizhi("位置合适了2")
                                    swipe(800, 1600, 300, 1600, 1000)
                                    sleep(random(1000, 2000))

                                    if (tapobj(id("com.lemon.lv:id/ivTransition")) == null) {
                                        click(1020, 1240) //添加视频 
                                    }
                                    sleep(3000)
                                }
                            }
                        }
                        sleep(2000)
                    }
                } else {
                    back()
                }
            } catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
        }
        if (text("导出").exists() && text("分辨率").exists() || text("导出").exists() && text("帧率").exists()) {
            xgsrizhi("制作完成导出")
            //swipe(880, 979, 544, 979, 1000)

            sleep(1000)
            click("导出")
            sleep(10000)

        }
        if (text("完成").exists() && text("已保存到相册和草稿").exists() || text("完成").exists() && text("分享视频到").exists()) {
            xgsrizhi("完成")
            click("完成")
            sleep(2000)
            return true
        }

        if (text("音色选择").exists()) {
            xgsrizhi("音色选择")
            click(760, 1600)
            sleep(2000)
            click(990, 1840)
            sleep(3000)
        }

        if (id("com.lemon.lv:id/iv_preview_close").exists() && id("com.lemon.lv:id/tv_preview_select_index").exists()) {
            xgsrizhi("点到视频全屏-返回")
            back()
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("残忍关闭").exists()) {
            xgsrizhi("残忍关闭")
            click("残忍关闭")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            xgsrizhi("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            xgsrizhi("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
    }
}

//上传注册账号
function upzczh(sbip, user_id, yhbh, app_id, phone, mima) {
    xgsrizhi("上传注册账号")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/gxrun?user_id="+yhname+"&der_id="+yhbh+"&run_id="+run_id
            var url = "http://" + sbip + "/api.php/potal/meitu/upzhanghao?user_id=" + user_id + "&der_id=" + yhbh + "&app_id=" + app_id + "&account=" + phone + "&pass=" + mima + "&hardware_info=&status_info=正常&remarks=备注&character_id=1&status=1"
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["code"] == "0") {
                    toastLog("上传账号成功")
                    return true
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传注册账号中...")
        sleep(random(100, 10000))
    }
}
//修改任务状态
function renwuzt(sbip, yhname, yhbh, run_id) {
    xgsrizhi("修改任务状态")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 120 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/qidongjiaoben?user="+yhname+"&shebeihao="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/gxrun?user_id=" + yhname + "&der_id=" + yhbh + "&run_id=" + run_id
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["msg"] == "ok") {
                    toastLog("修改任务状态成功")
                    return true
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("修改任务状态中...")
        sleep(random(100, 10000))
    }
}
function huoqurw(sbip, user_id, yhbh) {
    xgsrizhi("获取任务")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    // upjiqima(sbip, user_id, yhbh)
    while (1) {
        try {
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/getrenwu?user="+yhname+"&shebeihao="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/getrun?user_id=" + user_id + "&der_id=" + yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok") {
                    xgsrizhi(r_obj)
                    var renwu = r_obj["data"]["app"] //任务编号
                    if (renwu == 99 || renwu == "99") {
                        xgsrizhi("获取到了等待")
                        return [renwu, "99", "99", "99"]
                    }
                    run_id = r_obj["data"]["run_id"] //任务id
                    run_time = r_obj["data"]["run_time"] //时间
                    fun = r_obj["data"]["fun"] //子任务
                    app_id = r_obj["data"]["app_id"] //应用id
                    var zo = fun + "-" + app_id
                    xgsrizhi(renwu)
                    return [renwu, run_id, run_time, zo]
                } else {
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 5000))
    }
}


function dyzhixing() {
    try {
        toastLog("执行抖音任务")
        _THREADSSxx = threads.start(function () {
            device.keepScreenOn(240 * 60 * 60 * 1000)
            qinglihh()
            qdtime(sbip)
            bofangyy()
            while (1) {
                var renwus = huoqurw(sbip, user_id, yhbh)
                xgsrizhi("获取到的任务2" + renwus)
                xgsrizhi("执行任务2" + renwus[0])
                if (renwus[0] == 1) {
                    var dl = dydl()
                    if (dl == true) {
                        if (fun == "新发布视频") {
                            xinfabsp();
                        }
                    }
                    xgsrizhi("执行完存停止数据")
                    renwuzt(sbip, user_id, yhbh, run_id)
                    sleep(1000)
                } else {
                    var TS = (new Date()).getTime()
                    while (1) {
                        if ((new Date()).getTime() - TS > 60 * 1000) {
                            xgsrizhi("时间到了继续获取任务")
                            break
                        } else {
                            toastLog("等待任务中")
                            sleep(3000)
                        }
                    }
                }
                if (!_THREADSS.isAlive()) {
                    xgsrizhi("子线程运行结束！");
                    bofangyy()
                }
            }
        });
    } catch (error) {
        xgsrizhi(error);
        cunqusj("jiaoben", "tingzhi")
        //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}
function qdtime(sbip) {
    xgsrizhi("启动时间")
    var Tb = (new Date()).getTime()
    var sp = 0
    var beizhu = ""
    var user_namex = "mubei"
    xgsrizhi(sbip)
    while (1) {
        try {
            var jiqima = device.getIMEI()
            var url = "http://" + sbip + "/api.php/potal/meitu/qidongjaoben3?jiqima=" + jiqima + "&remarks=" + "" + "&user_name=" + user_namex + "&code=" + ""
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            xgsrizhi("访问到这了")
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["msg"] == "请输入备注") {
                    xgsrizhi("输入备注")
                    sleep(2000)
                    // UI()
                    // beizhu = riqis(2)
                    sp = 1
                } else {
                    if (r_obj["msg"] == "等待初始化") {
                        toastLog("请到服务器分配该机器码：" + jiqima)
                        sleep(4000)
                        // if (beizhu != ""){
                        //     toastLog("备注是" + beizhu)
                        // }
                        sleep(3000)
                    } else {
                        if (r_obj["msg"] == "ok") {
                            bianhao = r_obj["data"]["der_id"]
                            user_id = r_obj["data"]["user_id"]
                            xgsrizhi("user_id为" + user_id + "该机器的编号为" + bianhao)
                            toastLog("该机器的用户编号：" + user_id + "手机编号:" + bianhao)
                            sleep(2000)
                            toastLog("该机器的用户编号：" + user_id + "手机编号:" + bianhao)
                            var de = user_id + "-" + bianhao + "-0-0-0-0-0"
                            files.write("/sdcard/scrizix.txt", de);
                            if (sp == 1) {
                                xgsrizhi("弹一会机器码")
                                Tb = (new Date()).getTime()
                                while (1) {
                                    if ((new Date()).getTime() - Tb > 90 * 1000) {
                                        xgsrizhi("时间够了退出")
                                        break
                                    }
                                    toastLog("该机器的用户编号：" + user_id + "手机编号:" + bianhao)
                                    sleep(1000)
                                }
                            }
                            return user_id
                        }
                    }
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传启动时间中...")
        sleep(random(100, 10000))
    }
}
function zhaose(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    // var imgss = kk
    for (var k in ss) {
        //xgsrizhi(ss[k])
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",80)")
        //xgsrizhi(xx + ":" + yy)
        //xgsrizhi(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
}
//写日志
function xgsrizhi(g) {
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
    // scrz(g)
}
//修改账号状态
function xgzhzt(sbip, user_id, yhbh, app_id, beizhu, zt) {
    xgsrizhi("修改账号状态")
    var xx = huoquzhxx(sbip, user_id, yhbh)
    if (xx == false) {
        xgsrizhi("获取不到账号信息")
        return false
    }
    var zh = xx["zh"]
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip)
    var gf = {}
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/gxzhstatus?user_id=" + user_id + "&der_id=" + yhbh + "&app_id=" + app_id + "&account=" + zh + "&status_info=" + beizhu + "&status=" + zt
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["code"] == "0" || r_obj["msg"] == "编辑成功") {
                    xgsrizhi("修改账号状态成" + beizhu)
                    return true
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("修改账号状态...")
        sleep(random(1000, 10000))
    }
}

//日期
function riqis(nn) {
    var tem = nn
    Date.prototype.format = function (fmt) {
        var year = this.getFullYear();
        var month = this.getMonth() + 1;
        var date = this.getDate();
        var hour = this.getHours();
        var minute = this.getMinutes();
        var second = this.getSeconds();
        fmt = fmt.replace("yyyy", year);
        fmt = fmt.replace("yy", year % 100);
        fmt = fmt.replace("MM", fix(month));
        fmt = fmt.replace("dd", fix(this.getDate()));
        fmt = fmt.replace("hh", fix(this.getHours()));
        fmt = fmt.replace("mm", fix(this.getMinutes()));
        fmt = fmt.replace("ss", fix(this.getSeconds()));
        return fmt;

        function fix(n) {
            return n < 10 ? "0" + n : n;
        }
    }
    var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    var time = new Date().format("dd")
    if (tem == 1) {
        return time
    } else {
        return times
    }
}
//获取抖音账号信息
function huoquzhxx(sbip, user_id, yhbh) {
    xgsrizhi("获取抖音账号信息")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip)
    var gf = {}
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/getaccountmes?user_id=" + user_id + "&der_id=" + yhbh + "&account=0"
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["msg"] == "ok") {
                    xgsrizhi("获取完成任务数量成功")
                    gf["zan"] = r_obj["data"]["zan"]
                    gf["guanzhu"] = r_obj["data"]["guanzhu_tody"]
                    gf["pinglun"] = r_obj["data"]["pinglun"]
                    gf["bofang"] = r_obj["data"]["bofang_tody"]
                    gf["zh"] = r_obj["data"]["account"]
                    xgsrizhi(gf)
                    return gf
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("获取抖音账号信息...")
        sleep(random(1000, 10000))
    }
}
function getInsideString(str, strStart, strEnd) {
    if (str.indexOf(strStart) < 0) {
        return "";
    }
    if (str.indexOf(strEnd) < 0) {
        return "";
    }
    return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}

//获取紧急任务
function huoqujjrw(sbip, user_id, yhbh, run_id) {
    xgsrizhi("获取紧急任务")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - ttr > 20 * 1000) {
                xgsrizhi("超时没获取到紧急任务")
                return false
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/getrun?user_id="+user_id+"&der_id="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/getrunhot?user_id=" + user_id + "&der_id=" + yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r.body)
                if (r_obj["msg"] == "ok") {
                    xgsrizhi(r_obj)
                    var renwu = r_obj["data"]["app"] //任务编号
                    if (renwu == 97 || renwu == "97") {
                        xgsrizhi("获取到了暂停")
                        return [renwu, "97", "97", "97"]
                    } else {
                        if (renwu == 99 || renwu == "99") {
                            xgsrizhi("获取到了等待")
                            return [renwu, "99", "99", "99"]
                        } else {
                            if (renwu == 0 || renwu == "0") {
                                xgsrizhi("现在没有紧急任务")
                                return false
                            } else {
                                var renwuid = r_obj["data"]["run_id"]
                                if (renwuid == run_id) {
                                    xgsrizhi("当前正在做该紧急任务")
                                    return false
                                }
                            }
                        }
                    }
                    var run_id = r_obj["data"]["run_id"] //任务id
                    var run_time = r_obj["data"]["run_time"] //时间
                    var fun = r_obj["data"]["fun"] //子任务
                    var app_id = r_obj["data"]["app_id"] //应用id
                    var zo = fun + "-" + app_id
                    xgsrizhi(renwu)
                    return [renwu, run_id, run_time, zo]
                } else {
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 5000))
    }
}
//获取指定任务的附加参数
function zhid(sbip, run_id) {
    xgsrizhi("获取指定任务的参数")
    var TS = (new Date()).getTime()
    var url = "http://" + sbip + "/api.php/potal/meitu/getrunbyrunid?&run_id=" + run_id
    xgsrizhi(url)
    var gf = {}
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                xgsrizhi(ss)
                if (ss["code"] == 0) {
                    var ds = ss["data"]["more"]
                    xgsrizhi("获取到的参数：" + ds)
                    ds = JSON.parse(ds);
                    for (i = 0; i < ds.length; i++) {
                        gf[ds[i]["title"]] = ds[i]["val"]
                    }
                    gf["status"] = ss["data"]["status"]
                    xgsrizhi(gf)
                    return gf
                }
            }
            sleep(2000)
        } catch (e) {
            xgsrizhi("出错" + e)
            sleep(3000);
        }
    }
}
function tapobjrex(obj) {
    if (obj != null) {
        try {
            obj = obj.bounds();
            press(random(obj.left, obj.right), random(obj.top, obj.bottom), random(50, 150));
            return true
        } catch (error) {
            xgsrizhi("点击控件范围随机坐标失败,报错信息:" + error)
            return false
        }
    }
}

function bofangyy() {
    _THREADSS = threads.start(function () {
        xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            xgsrizhi("没有音乐文件去下载")
            dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - ssee > 60 * 1000) {
                    aa = aa + 1
                    var renwux = huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    renwux = false
                    if (!_THREADSSxx.isAlive()) {
                        xgsrizhi("主线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        xgsrizhi("继续抖音任务")
                    } else {
                        xgsrizhi("运行时间到了或者有紧急任务了")
                        qinglihh()
                        sleep(2000)
                        // java.lang.System.exit(0);
                        try {
                            _THREADSSxx.interrupt()
                        } catch (error) {
                            xgsrizhi(error);
                        }
                        dyzhixing()
                    }
                    ssee = (new Date()).getTime()
                }
                xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}



dyzhixing()


