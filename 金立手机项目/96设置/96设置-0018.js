log("tKB")
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
var dqbaoming = "com.ziqun.story" //该项目包名
var xmxh = "97" //项目序号 版本11.0.0
var packageName = "com.android.mms"
var sx = TKB.zhid(sbip, run_id)

//******************************************************************抖音项目*****************************************************************

//http://47.114.99.72/api.php/potal/meitu/getrunbyrunid?&run_id=585


// var run_id = "62528"
//墓碑权限
function mbqx() {
    TKB.xgsrizhi('墓碑权限设置')
    openAppSetting(getPackageName("墓碑"))
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh("com.android.settings")
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时打开成功')
            back()
            sleep(1000)
            TKB.qinglihh("com.android.settings")
            sleep(3000)
            openAppSetting(getPackageName("墓碑"))
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        while (1) {
            try {
                if (text('应用信息').exists() && text('卸载').exists() && text('权限').exists()) {
                    TKB.xgsrizhi('点击权限')
                    click('权限')
                    sleep(3000)
                }
                if (text('发送').exists() && text('录音').exists()){
                    if (text('关').exists()){
                        log('点击打开')
                        click('关')
                        sleep(2000)
                    }else{
                        toastLog('全部打开')
                        sleep(2000)
                        return true
                    }
                }
            } catch (error) {
                sleep(1001)
                toastLog('error')
            }
        }
    }
}
//laodi开启权限
function ldqx() {
    TKB.xgsrizhi('laodi权限设置')
    openAppSetting(getPackageName("laodi"))
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh("com.android.settings")
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时打开成功')
            back()
            sleep(1000)
            TKB.qinglihh("com.android.settings")
            sleep(3000)
            openAppSetting(getPackageName("laodi"))
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        while (1) {
            try {
                openAppSetting(getPackageName("laodi"))
                if (text('应用信息').exists() && text('卸载').exists() && text('权限').exists()) {
                    TKB.xgsrizhi('点击权限')
                    click('权限')
                    sleep(3000)
                }
                if (text('发送短信').exists() && text('读取联系人').exists()){
                    if (text('关').exists()){
                        log('点击打开')
                        click('关')
                        sleep(2000)
                    }else{
                        log('下滑')
                        swipe(500,1700,500,400,800)
                        sleep(2000)
                    }
                }
                if (text('修改日历').exists() && text('录音').exists()){
                    if (text('关').exists()){
                        log('点击打开')
                        click('关')
                        sleep(2000)
                    }else{
                        toastLog('全部打开')
                        sleep(2000)
                        return true
                    }
                }
            } catch (error) {
                sleep(1001)
                toastLog('error')
            }
        }
    }
}
//设置
function shezhi() {
    TKB.xgsrizhi("设置")
    var ld = 40 //亮度
    var yl = 1 //音量
    var dx = 0
    var cs = 0
    var neirong = 0
    var qlhh = 0
    var RT = (new Date()).getTime()
    var dv = TKB.zhid(sbip, run_id)
    if (dv == false) {
        TKB.xgsrizhi("获取不到数据")
        return false
    }
    try {
        ld = dv["亮度"]
        yl = dv["音量"]
        dx = dv["删除短信"]
        neirong = dv["复制内容"]
        qlhh = dv["清理缓存"]
        TKB.xgsrizhi("设置")
        if (isNaN(yl) == false && isNaN(ld) == false) {
            TKB.xgsrizhi("都是数字")
        } else {
            TKB.xgsrizhi("不是数字")
            ld = 40 //亮度
            yl = 1 //音量
        }
        if (qlhh == 2 || qlhh == "2") {
            TKB.xgsrizhi("查看版本信息")
            azxbmb()
            var ldbb = TKB.getVerName("laodi")
            if (ldbb != "1.0.4"){
                TKB.dkmubei()
            }
            mbqx()
        }
    } catch (error) {
        sleep(1001)
        log(error)
        ld = 40 //亮度
        yl = 1 //音量
    }
    setClip(neirong)
    TKB.xgsrizhi("复制内容" + neirong)
    TKB.xgsrizhi("修改的音量为：" + yl)
    TKB.xgsrizhi("修改的亮度为：" + ld)
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间到了")
                if (dx == 1) {
                    scdx()
                }
                if (qlhh == 1) {
                    qlhc()
                }
                return false
            }
            if (text('允许修改系统设置').exists() && text('可修改系统设置').exists()) {
                TKB.xgsrizhi('允许修改系统设置')
                var point = findColor(captureScreen(), "#b9b9b9", {
                    region: [938, 425, 60, 60],
                    threshold: 6
                });
                if (point) {
                    TKB.xgsrizhi("还没打开")
                    click(950, 450)
                    sleep(1000)
                    back()
                    sleep(2000)
                }
            }
            sleep(2000)
            device.setBrightnessMode(0)
            device.setBrightness(ld)
            sleep(1000)
                // device.getMusicVolume()  // 返回媒体音量
                // device.getNotificationVolume()  //返回通知音量
            if (device.getBrightness() == ld) {
                toastLog("亮度设置成功" + ld)
                TKB.xgsrizhi("亮度设置成功" + ld)
                device.setMusicVolume(yl) //设置媒体音量
                device.setNotificationVolume(yl) //设置通知音量
                log(device.getMusicVolume())
                log(device.getNotificationVolume())
                cs = cs + 1
                if (device.getMusicVolume() == yl && device.getNotificationVolume() == yl || cs > 5) {
                    toastLog("音量设置成功" + cs)
                    TKB.xgsrizhi("音量设置成功" + cs)
                    if (dx == 1) {
                        scdx()
                    }
                    if (qlhh == 1) {
                        qlhc()
                    }
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            log(error)
        }

    }
}

//清理缓存
function qlhc() {
    TKB.xgsrizhi('清理缓存')
    var waddj = getPackageName("系统管家")
    if (waddj == null) {
        return false
    }
    launch('com.gionee.softmanager')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var su = 0
    while (1) {
        if ((new Date()).getTime() - RT > 10 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.gionee.softmanager')
            return false
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi('超时没清理成功')
            back()
            sleep(1000)
            TKB.qinglihh('com.gionee.softmanager')
            sleep(3000)
            launch('com.gionee.softmanager')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('垃圾清理').exists() && text('一键清理').exists()) {
                TKB.xgsrizhi('一键清理1')
                click('一键清理')
                sleep(2000)
                su = 1
            }
            if (text('垃圾清理').exists() && text('病毒查杀').exists()) {
                TKB.xgsrizhi('垃圾清理2')
                click('垃圾清理')
                sleep(2000)
            }
            if (text('欢迎使用系统管家').exists() && text('退出').exists() && text('继续').exists()) {
                TKB.xgsrizhi('欢迎使用系统管家')
                click('继续')
                sleep(2000)
            }
            if (id('amigo:id/amigo_action_bar_title').exists() && text('垃圾清理').exists() && text('病毒查杀').exists() && text('应用管理').exists()) {
                TKB.xgsrizhi('主页')
                click('垃圾清理')
                sleep(2000)
            }
            if (id('com.gionee.systemmanager:id/rubbish_cleaner_item_title').exists() && text('垃圾清理').exists() && text('停止扫描').exists()) {
                TKB.xgsrizhi('扫描中~~')
                sleep(2000)
            }
            if (text('已选择0 B垃圾，可放心清理').exists()) {
                TKB.xgsrizhi('没用垃圾可以清理')
                sleep(2000)
                back()
                return true
            }
            if (id('com.gionee.systemmanager:id/rubbish_cleaner_item_title').exists() && text('垃圾清理').exists() && text('一键清理').exists()) {
                TKB.xgsrizhi('一键清理')
                click('一键清理')
                sleep(2000)
                su = 1
            }
            if (text('垃圾清理').exists() && text('卸载不常用软件').exists() && text('返回首页').exists() || text('垃圾清理').exists() && su != 0 && text('返回首页').exists()) {
                TKB.xgsrizhi('清理完成')
                click('返回首页')
                sleep(2000)
                return true
            }
        } catch (error) {
            sleep(1001)
            toastLog('error1001')
        }
    }
}

//删除短信
function scdx() {
    TKB.xgsrizhi('删除短信')
    TKB.qinglihh()
    launch('com.android.mms')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var sc = 0
    while (1) {
        if ((new Date()).getTime() - RT > 5 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 2 * 60 * 1000) {
            TKB.xgsrizhi('超时没删除完成')
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch('com.android.mms')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text('新信息').exists() && text('更多').exists()) {
            TKB.xgsrizhi('短信界面')
            click(520, 150)
            sleep(3000)
            if (id('com.android.mms:id/unread_icon').exists() && id('com.android.mms:id/date').exists()) {
                TKB.xgsrizhi('还没删除完')
                sleep(500)
            } else {
                if (sc > 1) {
                    log("删除完了")
                    return true
                }
            }
            press(500, 670, 3000)
            sleep(2000)
            sc = sc + 1
        }
        if (text('全部选择').exists() && text('删除').exists() || text('全部选择').exists() && text('加密').exists()) {
            TKB.xgsrizhi('全部选择')
            click("全部选择")
            sleep(2000)
        }
        if (text('取消全选').exists() && text('删除').exists()) {
            TKB.xgsrizhi('取消全选')
            click("删除")
            sleep(2000)
        }
        if (text('取消').exists() && text('删除').exists()) {
            TKB.xgsrizhi('删除')
            click("删除")
            sleep(2000)
            sc = 1
        }
    }
}

function azxbmb() {
    TKB.xgsrizhi('安装新版墓碑')
    while (1) {
        var mbbb = TKB.getVerName("墓碑")
        if (mbbb != "1.0.1 xgs") {
            TKB.xgsrizhi('墓碑版本不对')
            TKB.xiezai("com.mubei.nn")
            TKB.anz("http://mtjl.oss-cn-shanghai.aliyuncs.com/xinban/apk/mubei_v1.0.1.apk")
            files.write("/sdcard/mbtztime.txt", "123")
            TKB.dkmubei()

        } else {
            TKB.xgsrizhi('版本对了')
                // exit()
            return true
        }
    }
}

//显示手机剩余流量
function flow() {
    launch(packageName)
    TKB.xgsrizhi("启动信息")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var TSD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时没在短信页面")
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("新信息").exists()) {
                click("新信息")
                TKB.xgsrizhi("点击新建信息")
                sleep(3000)
            }
            if (text("收件人").exists() && text("输入内容").exists()) {
                click(text("收件人").findOnce().bounds().centerX(), text("收件人").findOnce().bounds().centerY())
                TKB.xgsrizhi("点击收件人")
                sleep(3000)
                text("收件人").findOnce().setText(10001)
                sleep(3000)
                text("输入内容").findOnce().setText(108)
                sleep(3000)
                if (text("发送").exists()) {
                    id("com.android.mms:id/gn_send_msg_button").findOnce().click()
                    TKB.xgsrizhi("点击发送")
                    sleep(3000)
                }
            }
            sleep(35000)
            if (text("发送").exists() && text("输入内容").exists()) {
                var str = id("com.android.mms:id/tv_content_detail").findOnce().text();
                alert(str)
            }
            TKB.xgsrizhi("执行完毕退出")
            TKB.qinglihh()
            return true
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}
//查询流量详情
function details() {
    launch(packageName)
    TKB.xgsrizhi("启动信息")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var TSD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时没在短信页面")
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("新信息").exists()) {
                click("新信息")
                TKB.xgsrizhi("点击新建信息")
                sleep(3000)
            }
            if (text("收件人").exists() && text("输入内容").exists()) {
                click(text("收件人").findOnce().bounds().centerX(), text("收件人").findOnce().bounds().centerY())
                TKB.xgsrizhi("点击收件人")
                sleep(3000)
                text("收件人").findOnce().setText(10001)
                sleep(3000)
                text("输入内容").findOnce().setText("流量详情")
                sleep(3000)
                if (text("发送").exists()) {
                    id("com.android.mms:id/gn_send_msg_button").findOnce().click()
                    TKB.xgsrizhi("点击发送")
                    sleep(3000)
                }
            }
            sleep(40000)
            if (text("发送").exists() && text("输入内容").exists()) {
                if (textContains("用超流量").exists()) {
                    var str = id("com.android.mms:id/gn_text_view").find().filter(function(w) {
                        return w.text() !== '流量详情';
                    });
                    var y = str[0].text().match(/5、(\S*)/)[1]
                    alert(y)
                } else {
                    var str = id("com.android.mms:id/gn_text_view").find().filter(function(w) {
                        return w.text() !== '流量详情';
                    });
                    var y = str[0].text().match(/3、(\S*)/)[1]
                    alert(y)
                }
            }
            TKB.xgsrizhi("执行完毕退出")
            TKB.qinglihh()
            return true
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//获取上传本机号码
function phoneNumber() {
    launch(packageName)
    TKB.xgsrizhi("启动信息")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var TSD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时没在短信页面")
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("新信息").exists()) {
                click("新信息")
                TKB.xgsrizhi("点击新建信息")
                sleep(3000)
            }
            if (text("收件人").exists() && text("输入内容").exists()) {
                click(text("收件人").findOnce().bounds().centerX(), text("收件人").findOnce().bounds().centerY())
                TKB.xgsrizhi("点击收件人")
                sleep(3000)
                text("收件人").findOnce().setText(10001)
                sleep(3000)
                text("输入内容").findOnce().setText(504)
                sleep(3000)
                if (text("发送").exists()) {
                    id("com.android.mms:id/gn_send_msg_button").findOnce().click()
                    TKB.xgsrizhi("点击发送")
                    sleep(3000)
                }
            }
            sleep(35000)
            if (text("发送").exists() && text("输入内容").exists()) {
                var str = id("com.android.mms:id/gn_text_view").findOnce().text();
                var num = str.replace(/[^0-9]/ig, "");
                var phonenum = num.slice(0, 11)
                toast(phonenum)
                files.write("/sdcard/1.txt", phonenum)
                var phone = phonenum
                toast(phone)
                upsjhm(sbip, user_id, yhbh, phone)
            }
            TKB.xgsrizhi("执行完毕退出")
            TKB.qinglihh()
            return true
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}
//上传手机号码
function upsjhm(sbip, user_id, yhbh, phone) {
    log("上传手机号码" + phone)
    var Tb = (new Date()).getTime()
    log(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 60 * 1000) {
                log("超时更新完成")
                break
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/qidongjaoben?user="+yhname+"&der_id="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/upphone?user_id=" + user_id + "&der_id=" + yhbh + "&remarks=&phone=" + phone
            log("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0) {
                    toastLog("上传手机号码成功")
                    return true
                }
            } else {
                log("没网")
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传手机号中...")
        sleep(random(100, 10000))
    }
}

//关闭豌豆荚弹窗
function wdjtc() {
    TKB.qinglihh()
    sleep(2000)
    TKB.xgsrizhi('豌豆荚弹窗')
    launch('com.wandoujia.phoenix2')
    sleep(6000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.wandoujia.phoenix2')
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没清理成功')
            back()
            sleep(1000)
            TKB.qinglihh('com.wandoujia.phoenix2')
            sleep(3000)
            launch('com.wandoujia.phoenix2')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (tem == 0){
                click('我的')
                sleep(3000)
                tem = 1
            }
            if (text('取消').exists() && (text('更新').exists() || text('立即安装').exists() || text('安装').exists())) {
                TKB.xgsrizhi('更新')
                click('取消')
                sleep(2000)
            }
            if (text('应用管理').exists() && id('com.wandoujia.phoenix2:id/a9q').exists() && text('升级').exists()) {
                TKB.xgsrizhi('返回')
                //应用下载界面
                back()
                sleep(1000)
            }
            if (text('你下载了这些应用，不要忘了安装').exists() && id('com.wandoujia.phoenix2:id/agj').exists()) {
                TKB.xgsrizhi('关闭')
                id('com.wandoujia.phoenix2:id/agj').click()
                sleep(2000)
            }
            if (text('应用管理').exists() && text('垃圾清理').exists() && text('设置').exists()) {
                TKB.xgsrizhi('点击设置')
                click('设置')
                sleep(2000)
            }else if (text('应用管理').exists() && text('垃圾清理').exists() && !text('设置').exists()) {
                TKB.xgsrizhi('下滑')
                swipe(500,1600,500,800)
                sleep(2000)
            }else if (text('精选').exists() && text('游戏盒子').exists() && text('我的').exists()) {
                TKB.xgsrizhi('主页')
                click('我的')
                sleep(3000)
            }
            if (text('设置').exists() && text('悬浮窗').exists()) {
                var ss = text("悬浮窗").findOnce().bounds();
                if (ss.centerY()>300, ss.centerY()<1600){
                    TKB.xgsrizhi('点击悬浮窗')
                    swipe(1020,ss.centerY()+40,935,ss.centerY()+40,800)
                    toastLog('关闭成功')
                    sleep(2000)
                    TKB.qinglihh()
                    return true
                }else {
                    TKB.xgsrizhi('下滑1')
                    swipe(500,1600,500,400,1200)
                    sleep(2000)
                }
            }
        } catch (error) {
            sleep(1001)
            toastLog('error1001')
        }
    }
}

//初始化设置
function initialization() {
    TKB.xgsrizhi('修改')
    sleep(3000)
    var a = 0
    var tep = 0
    var tepx = 0
    var tepz = 0
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        while (1) {
            try {
                if (a == 0) {
                    if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                        TKB.xgsrizhi('超时')
                        back()
                        sleep(1000)
                        TKB.qinglihh()
                        sleep(3000)
                        launch('com.android.settings')
                        tep = 1
                        sleep(2000)
                        TSD = (new Date()).getTime()
                    }
                    if (tep == 0) {
                        tep = 1
                        launch('com.android.settings')
                        sleep(2000)
                    }
                    if (text('设置').exists() && text('特色功能').exists() && text('安全').exists()) {
                        TKB.xgsrizhi('设置主页')
                        var ss = text('安全').findOnce().bounds()
                        if (ss.centerY() < 1800 && ss.centerY() > 300) {
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    } else if (text('设置').exists() && !text('更多设置').exists()) {
                        TKB.xgsrizhi('下滑')
                        swipe(600, 1700, 500, 500, 1000)
                        random(1500, 3000)
                    }
                    if (text('安全').exists() && text('锁屏方式').exists() && text('无').exists()) {
                        TKB.xgsrizhi('锁屏设置完成')
                        toastLog('锁屏设置完成')
                        a = 1
                    } else if (text('安全').exists() && text('锁屏方式').exists() && !text('无').exists()) {
                        click('锁屏方式')
                        sleep(2000)
                    }
                    if (text('滑动').exists() && text('无').exists()) {
                        TKB.xgsrizhi('设置锁屏')
                        click(200, 650)
                        sleep(2000)
                    }
                    if (text('是，移除').exists()) {
                        click('是，移除')
                        sleep(2000)
                    }
                }
                if (a == 1) {
                    if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                        TKB.xgsrizhi('超时')
                        back()
                        sleep(1000)
                        TKB.qinglihh()
                        sleep(3000)
                        launch('com.gionee.softmanager')
                        sleep(2000)
                        tepx = 0
                        TSD = (new Date()).getTime()
                    }
                    if (tepx == 0) {
                        tepx = 1
                        launch('com.gionee.softmanager')
                        sleep(2000)
                    }
                    if (text('欢迎使用系统管家').exists() && text('退出').exists() && text('继续').exists()) {
                        TKB.xgsrizhi('欢迎使用系统管家')
                        click('继续')
                        sleep(2000)
                    }
                    if (id('amigo:id/amigo_action_bar_title').exists() && text('应用管理').exists() && text('病毒查杀').exists() && text('应用管理').exists()) {
                        TKB.xgsrizhi('主页')
                        click('应用管理')
                        sleep(5000)
                    }
                    if (text('应用自启').exists() && text('应用卸载').exists() && text('应用锁').exists()) {
                        TKB.xgsrizhi('应用自启')
                        click('应用自启')
                        sleep(2000)
                    }
                    if (!text('允许0个应用自启动').exists() && text('应用自启').exists()) {
                        TKB.xgsrizhi('关闭自启')
                        click('开启')
                        sleep(2000)
                        swipe(600, 1700, 500, 500, 800)
                        random(1500, 2000)
                    } else if (text('允许0个应用自启动').exists() && text('应用自启').exists()) {
                        log('没有自启的应用了')
                        if (tepz == 0) {
                            back()
                            sleep(1000)
                            tepz = 1
                        }
                        if (text('墓碑').exists()) {
                            var ss = text('墓碑').findOnce().bounds()
                            if (ss.centerY() < 1800 && ss.centerY() > 300) {
                                click(ss.centerX() + 450, ss.centerY() + 30);
                                sleep(2000)
                                TKB.qinglihh()
                                return true
                            }
                        } else {
                            TKB.xgsrizhi('下滑1')
                            swipe(600, 1700, 500, 500, 800)
                            random(1500, 2000)
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                toastLog('error')
            }
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
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续设置任务")
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

//*******************************************************新服务器*********************************************************************


//执行美图项目
function dyzhixing() {
    try {
        toastLog("执行设置任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            shezhi()
            if (sx["更改手机号码"] == "是") {
                phoneNumber()
            } else if (sx["获取剩余流量"] == "是") {
                flow()
            } else if (sx["获取流量详情"] == "是") {
                details()
            }else if (sx["豌豆荚弹窗设置"] == "是") {
                wdjtc()
            }else if (sx["laodi权限开启"] == "是") {
                ldqx()
            }else if (sx["是否初始化"] == "是") {
                initialization()
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


// log(TKB.getVerName("墓碑"))