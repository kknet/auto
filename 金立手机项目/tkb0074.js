//写文本
function xieru(lujing, zhi) {
    var aa = files.read(lujing)
    var file = open(lujing, "w");
    var zhanghao = aa.split("\n")
    for (var k in zhanghao) {
        if (zhanghao[k] == "") {
            zhanghao.splice(k, k)
        }
    }
    var geshu = zhanghao.push(zhi)
    file.writelines(zhanghao)
    file.close();
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
                if (obj.hasOwnProperty(arr[i])) {} else {
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

//清理缓存
function qinglihh() {
    xgsrizhi("清理缓存")
    var TB = (new Date()).getTime()
    sleep(random(1000, 3000))
    home()
    sleep(3000)
    back()
    sleep(1000)
    while (true) {
        if ((new Date()).getTime() - TB > 30 * 1000) {
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
            return false
        }
        try {

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
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
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

//写日志
function xgsrizhi(g) {
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
}

function dowmp3() {
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            let imgurl = 'https://mp3-10086.oss-cn-shenzhen.aliyuncs.com/%E8%A7%82%E6%B2%A7%E6%B5%B7.mp3';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/观沧海.mp3", res.body.bytes());
                toastLog("下载完成")
                return true
            } else {
                toastLog("没有mp3");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }
}

//存取数据
function cunqusj(name, str) {
    if (text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()) {
        xgsrizhi("登录x2")
        try {
            if (text("登录").exists()) {
                var ss = text("登录").findOnce().bounds();
                xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
        click("登录")
        sleep(2000)
    }
    if (str == "tingzhi" || str == "jiance") {
        var bb = (new Date()).getTime()
        if (files.exists("/sdcard/mbtztime.txt")) {
            xgsrizhi("文件存在")
            var cun = files.read("/sdcard/mbtztime.txt")
            if (bb - Number(cun) > 100 * 1000) {
                xgsrizhi("我是bb的值：" + bb)
                xgsrizhi("我是cun的值：" + cun)
                toastLog("墓碑停止已经运行了")
                dkmubei()
            }
            xgsrizhi(bb - Number(cun))
        }
        files.write("/sdcard/jiaoben.txt", str)
    } else {
        var bb = (new Date()).getTime()
        files.write("/sdcard/jiaoben.txt", bb);
    }
    var storage = storages.create("lun");
    if (str == "qu") {
        log("取出来的数据：" + storage.get(name));
        if (storage.get(name) == undefined) {
            return -1
        } else {
            return storage.get(name)
        }
    } else {
        storage.put(name, str);
        // if (str == "tingzhi"){
        // java.lang.System.exit(0);
        // }
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

//找色
function zhaose(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",80)")
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
}

//获取本机号码
function benjitel() {
    try {
        xgsrizhi("获取本机号码")
        runtime.requestPermissions(["READ_PHONE_STATE"]);
        telephonyManager = context.getSystemService(context.TELEPHONY_SERVICE);
        //deviceid = telephonyManager.getDeviceId();
        //simSerialNumber = telephonyManager.getSimSerialNumber();
        var tel = telephonyManager.getLine1Number();
        //imsi = telephonyManager.getSubscriberId();
        //log('deviceid = ' + deviceid)
        //log('simSerialNumber = ' + simSerialNumber)
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
        //log('imsi = ' + imsi)
    } catch (error) {
        log("错误2" + error);
        sleep(2000)
        return false
    }
}

//获取本机验证码
function huoquyzm(dxgj) {
    xgsrizhi("获取本机验证码")
    var TC = (new Date()).getTime()
    sleep(10000)
    var i = 0;
    var sms = [];
    while (1) {
        try {
            if ((new Date()).getTime() - TC > 2 * 60 * 1000) {
                xgsrizhi("获取短信超时")
                if (sms.length > 0) {
                    for (var i = 0; i < sms.length; i++) {
                        if (i > 1) {
                            xgsrizhi("最近两条都不是该应用的短信")
                            return false
                        }
                        var dxnr = sms[i]["body"] //短信内容
                        xgsrizhi(dxnr)
                        if (dxnr.indexOf(dxgj) != -1) {
                            xgsrizhi("获取到短信2" + dxnr)
                            var reg = '[0-9]{4,6}';
                            var table = dxnr.match(reg)
                            var yzm = table[0]
                            return yzm
                        }
                    }
                }
                return false
            }
        } catch (error) {
            log("错误2" + error);
            sleep(2000)
            return false
        }
        try {
            importClass(android.net.Uri);
            SMS_INBOX = Uri.parse("content://sms/");
            var cr = context.getContentResolver();
            var projection = [
                "_id",
                "address",
                "person",
                "body",
                "date",
                "type"
            ];
            var cur = cr.query(SMS_INBOX, projection, null, null, "date desc"); //此处报错是因为系统没允许autojs读取短信            
            if (null == cur) {
                log("************cur == null");
                return;
            }
            while (cur.moveToNext()) {
                sms[i] = {
                    number: cur.getString(cur.getColumnIndex("address")),
                    name: cur.getString(cur.getColumnIndex("person")),
                    body: cur.getString(cur.getColumnIndex("body")),
                }
                i++;
                //至此就获得了短信的相关的内容, 以下是把短信加入map中，构建listview,非必要。
            }
            // return sms;
            if (sms.length > 0) {
                xgsrizhi("手机中发现短信")
                var dxnr = sms[0]["body"] //短信内容
                if (dxnr.indexOf(dxgj) != -1) {
                    xgsrizhi("获取到短信" + dxnr)
                    var reg = '[0-9]{4,6}';
                    var table = dxnr.match(reg)
                    var yzm = table[0]
                    return yzm
                } else {
                    toastLog("获取验证码中...")
                    sleep(3000)
                }
            }
        } catch (error) {
            toastLog("请查看laodi是否开启读取短信权限")
            xgsrizhi("错误" + error);
            sleep(2000)
        }
    }
}

//开启墓碑无障碍
function kqwza(aa) {
    xgsrizhi("开启无障碍xxx")
    toastLog("xxxx")
    var cc = (new Date()).getTime()
    var tem = 1
    var bb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - cc > 60 * 1000) {
                xgsrizhi("超时退出")
                break
            }
            if (text("无障碍").exists() && text(aa).exists() && tem != 2) {
                xgsrizhi("点击" + aa)
                click(aa)
                sleep(2000)
            }
            if (text("无障碍").exists() && text("赋能助理").exists() && tem != 2) {
                xgsrizhi("点击" + "赋能助理")
                click("赋能助理")
                sleep(2000)
            }
            if (text("辅助功能").exists() && tem != 2) {
                if ((new Date()).getTime() - bb > 20 * 1000) {
                    log("滑动一下")
                    sleep(1000)
                    swipe(500, 1800, 500, 500, 1000)
                    sleep(1000)
                    bb = (new Date()).getTime()
                }
            }
            if (text("辅助功能").exists() && text(aa).exists() && tem != 2) {
                xgsrizhi("辅助功能")
                click(aa)
                sleep(2000)
            }
            if (text("立即开始").exists() && text("取消").exists()) {
                xgsrizhi("立即开始")
                click(300, 1800)
                sleep(1000)
                if (id("com.android.systemui:id/remember").exists()) {
                    var aa = id("com.android.systemui:id/remember").findOnce().checked();
                    if (aa == false) {
                        var bb = id("com.android.systemui:id/remember").findOnce().bounds();
                        xgsrizhi(bb.centerX())
                        xgsrizhi(bb.centerY())
                        click(bb.centerX(), bb.centerY())
                        sleep(1000)
                    }
                }
                click(800, 1850)
                sleep(1000)
                click("立即开始")
                sleep(2000)
            }

            if (textContains("关闭").exists() && text("开始运行").exists()) {
                xgsrizhi("关闭xx")
                try {
                    var ss = textContains("关闭").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                    sleep(1001)
                }
            }

            if (textContains("开启").exists() && textContains("自动装").exists() && id("com.android.settings:id/switch_widget").exists() || textContains("关闭").exists() && textContains("自动装").exists() && id("com.android.settings:id/switch_text").exists()) {
                xgsrizhi("自动装")
                back()
                sleep(3000)
            }
            if (textContains("开启").exists() && textContains("支付宝").exists() && id("com.android.settings:id/switch_widget").exists() || textContains("关闭").exists() && textContains("支付宝").exists() && id("com.android.settings:id/switch_text").exists()) {
                xgsrizhi("支付宝")
                back()
                sleep(3000)
            }
            if (text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists() || text("关闭").exists() && text(aa).exists() && id("com.android.settings:id/switch_text").exists() || text("关闭").exists() && text("赋能助理").exists() && id("com.android.settings:id/switch_text").exists()) {
                xgsrizhi("开关界面")
                if (text(aa).exists() || text("赋能助理").exists()) {
                    var a = id("com.android.settings:id/switch_widget").findOnce()
                    if (a != null) {
                        xgsrizhi(2222)
                        if (id("com.android.settings:id/switch_widget").findOnce().checked() == true && tem == 2) {
                            xgsrizhi("退出")
                            break
                        } else {
                            xgsrizhi("点击开启")
                            a.click() //原来开着就先关了，原来关着就直接打开退出
                            sleep(2000)
                            click(800, 1850)
                            sleep(1000)
                            var ssxx = (new Date()).getTime()
                            while(1){
                                if ((new Date()).getTime() - ssxx > 10*1000){
                                    break
                                }else{
                                    bidians() 
                                }
                            }
                            tem = 2
                        }
                    } else {
                        xgsrizhi(1111)
                        if (text("关闭").exists()) {
                            xgsrizhi("开启无障碍")
                            click(500, 300)
                            sleep(500)
                            click("关闭")
                            sleep(2000)
                            click(800, 1850)
                            sleep(8000)
                            tem = 2
                        }
                    }
                } else {
                    back()
                    sleep(2000)
                }
            }
            if (text("确定").exists()) {
                xgsrizhi("确定")
                click(800, 1850)
                sleep(1000)
                click("确定")
                sleep(2000)
            }
            if (text("夜间升级").exists()) {
                xgsrizhi("夜间升级")
                click(300, 1850)
                sleep(1000)
                click("夜间升级")
                sleep(2000)
            }
            bidians() 
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 5000))
        }
    }
}

//打开墓碑
function dkmubei() {
    xgsrizhi("运行墓碑")
    var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3] //服务器ip
    var yhname = sbxx_table[1] //服务器用户名
    var yhbh = sbxx_table[2] //手机编号  weixinflag
    var cc = (new Date()).getTime()
    var bb = (new Date()).getTime()
    qinglihh()
    sleep(1000)
    var tzname = getAppName("com.mubei.nn");
    killapp(tzname)
    sleep(2000)
    launch("com.mubei.nn")
    sleep(2000)
    files.write("/sdcard/mbtztime.txt", "123")
    var tem = 0
    var dkcs = 0
    while (1) {
        if ((new Date()).getTime() - cc > 4 * 60 * 1000) {
            xgsrizhi("超时没运行成功")
            qinglihh()
            killapp("墓碑")
            sleep(2000)
            launch("com.mubei.nn")
            sleep(2000)
            tem = 0
            if (dkcs >1){
                chongq()
            }else{
                dkcs = dkcs + 1
            }
            
            cc = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - bb > 10 * 1000) {
                bb = (new Date()).getTime()
                var cun = files.read("/sdcard/mbtztime.txt")
                xgsrizhi("我是BB" + bb)
                xgsrizhi("我是存的时间" + cun)
                if (bb - Number(cun) < 120 * 1000) {
                    toastLog("墓碑已经运行了")
                    xgsrizhi("墓碑已经运行了")
                    return true
                }
            }
        }
        if (text("输入测试项目名").exists() && text("确定").exists()) {
            xgsrizhi("输入测试项目名")
            sleep(1000)
            if (id("android:id/input").exists()) {
                try { // xmundefined123
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是项目名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined") {
                        xgsrizhi("项目名称错误")
                        setText("jinli")
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }

        if (text("请输入正确的手机号码").exists() && text("确定").exists()) {
            xgsrizhi("请输入正确的手机号码")
            sleep(1000)
            if (id("android:id/input").exists()) {
                try { // xmundefined123

                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是项目名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined") {
                        xgsrizhi("本机号码错误")
                        var ham = benjitel()
                        if (ham == false) {
                            xgsrizhi("获取不到本机号码")
                            ham = "11111111111"
                        }
                        setText(ham)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }
        if (text("请输入本机号码").exists() && text("确定").exists()) {
            xgsrizhi("请输入本机号码")
            sleep(1000)
            if (id("android:id/input").exists()) {
                try { // xmundefined123
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是项目名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined") {
                        xgsrizhi("本机号码错误")
                        var ham = benjitel()
                        if (ham == false) {
                            xgsrizhi("获取不到本机号码")
                            ham = "11111111111"
                        }
                        setText(ham)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch (error) {
                    xgsrizhi(error);
                    sleep(2000)
                }
            }
        }
        if (text("应用程序错误").exists() && text("关闭").exists()) {
            xgsrizhi("应用程序错误")
            click("关闭")
            sleep(2000)
            launch("com.mubei.nn")
            tem = 1
            sleep(1000)
        }
        if (text("请输入用户名").exists() && text("确定").exists()) {
            xgsrizhi("请输入用户名")
            sleep(1000)
            if (id("android:id/input").exists()) {
                try { // xmundefined123
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是用户名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined") {
                        xgsrizhi("用户名称错误")
                        setText(yhname)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch (error) {
                    xgsrizhi(error);
                    sleep(2000)
                }
            }
        }
        if (text("请输入设备编号").exists() && text("确定").exists()) {
            xgsrizhi("请输入设备编号")
            sleep(1000)
            if (id("android:id/input").exists()) {
                try {
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是编号" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined") {
                        xgsrizhi("手机编号错误")
                        setText(yhbh)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }
        
        if (text("辅助功能").exists() && desc("向上导航").exists() || text("辅助功能").exists() && text("墓碑").exists() || text("无障碍").exists() && text("墓碑").exists() || text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists() || text("关闭").exists() && text("墓碑").exists() && id("com.android.settings:id/switch_text").exists()) {
            xgsrizhi("墓碑开启无障碍")
            var mbbb = getVerName("墓碑")
            var namex = getAppName("com.mubei.nn")
            if (mbbb == "1.0.1 xgs"){
                kqwza("墓碑")
            }
            if (namex == "赋能助理"){
                kqwza("赋能助理")
            }
            if (tem == 0) {
                xgsrizhi("去开启无障碍")
                kqwza("墓碑")
                back()
                sleep(2000)
                launch("com.mubei.nn")
                sleep(3000)
                tem = 1
            }
        }
        if (text("无障碍服务 关闭").exists()) {
            xgsrizhi("无障碍服务")
            click("无障碍服务 关闭")
            sleep(2000)
        }
        if (text("开始运行").exists()) {
            xgsrizhi("开始运行")
            setText("jinli")
            sleep(1000)
            click(500, 1320)
            sleep(500)
            click("开始运行")
            sleep(2000)
        }
        if (desc("更多选项").exists() && text("墓碑").exists()) {
            xgsrizhi("打开了墓碑界面")
            if (tem == 1) {
                xgsrizhi("已经开启无障碍了")
                back()
                sleep(500)
                back()
                sleep(2000)
                launch("com.mubei.nn")
                sleep(4000)
                tem = 2
            }
        }
        sleep(500)
    }
}

//重启手机
function chongq(){
    xgsrizhi("重启手机")
    var ssd = (new Date()).getTime()
    launch("com.mubei.nn")
    sleep(2000)
    while(1){
        try {
            if ((new Date()).getTime() - ssd > 20*60*1000){
                xgsrizhi("超时未重启")
                return false
            }
            powerDialog()
            sleep(2000)
            if(text("重启").exists()){
                try{
                    var ss = text("重启").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY() - 200);
                    sleep(4000)
                }catch(error) {
                    sleep(1001)
                    log(error);
                    click(500, 340)
                    sleep(1001)
                }
            }
            sleep(5000)
            toastLog("重启手机中")
        } catch (error) {
            xgsrizhi("出错了")
            xgsrizhi(error)
            sleep(3000)
        }
    }
}

//获取通讯录
function huoqutxl(){
    try {
        log("获取通讯录")
        importClass(android.database.Cursor);
        var cursor = context.getContentResolver().query(android.provider.ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
        var zhs = {}
        var txl = 0
        while (cursor.moveToNext()) {
            //读取通讯录的姓名
            var name = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
            //读取通讯录的号码
            var number = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.NUMBER));
            log(name)
            log(number)
            if (name != number) {
                log("[名字]：" + name + " [号码]：" + number);
                zhs[name] = number
            } else {
                log("[号码]：" + number);
            }
            txl = txl + 1
        }
        if (txl == 0){
            return false
        }else{
            log(zhs)
            return txl
        }
    } catch (error) {
        log("获取通讯录报错")
        log(error)
        sleep(1000)
        return false
    }
}

//息屏
function xiping(){
    try {
        log("息屏")
        _THRHUXP = threads.start(function() {
            var w = floaty.rawWindow(
                <frame gravity="center" bg="#000000"/>
            );
            w.setSize(-1, -1);
            w.setTouchable(false);
            sleep(10000)
        });;
    } catch (error) {
        log("息屏报错")
        log(error)
        sleep(2000)
    }
}

//必点的提示
function bidians() {
    if (text("不再显示").exists() && text("立即开始").exists()) {
        xgsrizhi("不再显示")
        click(173, 1020)
        sleep(500)
        click("立即开始")
        sleep(500)
        click(853, 1158)
        sleep(2000)
    }
    if (text("应用程序错误").exists() && text("关闭").exists()) {
        xgsrizhi("应用程序错误")
        click("关闭")
        sleep(1000)
    }
    if (text("等待").exists() && text("关闭应用").exists()) {
        xgsrizhi("关闭应用22")
        click("关闭应用")
        sleep(2000)
    }
    if (text("应用程序无响应").exists() && text("确定").exists()) {
        xgsrizhi("应用程序无响应")
        click("确定")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("删除安装包").exists() && text("取消").exists()) {
        xgsrizhi("删除安装包")
        click("取消")
        sleep(2000)
    }
    if (text("应用悬浮").exists() && desc("向上导航").exists()) {
        xgsrizhi("应用悬浮")
        click(950, 400)
        sleep(500)
        back()
        sleep(2000)
    }
    if (text("可修改系统设置").exists() && desc("向上导航").exists()) {
        xgsrizhi("可修改系统设置")
        click(950, 450)
        sleep(500)
        back()
        sleep(2000)
    }
    if(text("始终").exists() && text("仅此一次").exists()){
        xgsrizhi("仅此一次")
        click("仅此一次")
        sleep(2000)
    }
    if(text("始终").exists() && text("仅此一次").exists()){
        xgsrizhi("仅此一次")
        click(900, 1820)
        sleep(2000)
    }
    if(text("允许一次").exists() && text("取消安装").exists()){
        xgsrizhi("允许一次")
        click("允许一次")
        sleep(2000)
    }
    if (text("允许出现在其他应用上").exists() && desc("向上导航").exists() || text("可出现在其他应用上的应用").exists() && desc("向上导航").exists()) {
        xgsrizhi("允许出现在其他应用上")
        click(950, 450)
        sleep(500)
        back()
        sleep(2000)
    }
}

//*******************************************************对接服务器****************************** */


//剪辑视频第一步
function jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou){
    xgsrizhi("剪辑视频第一步")   //\\192.168.2.211 fenlei分类的名字  leixing素材的类型 piantou片头是否增加视频标题
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var bb = getVerName("剪映")
    if (bb != "3.8.1") {
        xgsrizhi("剪映的版本不对")
        xiezai("com.lemon.lv")
        var ddx = wdjxiazai("剪映", "3.8.1")
        if (ddx == false) {
            xgsrizhi("没有安装成功剪映")
            return false
        }
    }
    files.removeDir("/sdcard/DCIM/Camera/")   //删除文件夹
    qinglihh()
    var lianj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/xinban/apk/3d%20(9).mp4"    //视频链接
    var spds = 0    //需要的视频段数
    var sc = 0      //判断时长不够
    var pdgs = 0    //判断时长不够
    var biaoti = 0
    var mobanlj =  "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    var  tty = huoqumb(sbip, user_id, yhbh, fenlei)
    if (tty != false){
        mobanlj = tty[0].split("----")[0]
        biaoti = tty[1].split("----")[0]
        xgsrizhi("获取到模板链接" + mobanlj)
        xgsrizhi("获取到标题" + biaoti)
    }else{
        xgsrizhi("没有模板")
        return false
    }
    // mobanlj =  "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    setClip(mobanlj)
    sleep(1000)
    launch("com.lemon.lv")
    sleep(2000)
    while(1){
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            xgsrizhi("超时退出再进")
            qinglihh()
            tty = huoqumb(sbip, user_id, yhbh, fenlei)
            if (tty != false){
                mobanlj = tty[0].split("----")[0]
                biaoti = tty[1].split("----")[0]
                xgsrizhi("获取到模板链接" + mobanlj)
                xgsrizhi("获取到标题" + biaoti)
            }else{
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
            // click(940, 1860)
            sleep(2000)
        }
        if (desc("同款").exists() && desc("喜欢").exists() || text("编辑资料").exists() && desc("喜欢").exists() || id("com.lemon.lv:id/ivMore").exists() && desc("喜欢").exists()) {
            xgsrizhi("我的界面")
            sleep(2000)
            // try {
            //     var ss = desc("喜欢").findOnce().bounds();
            //     log(ss)
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
            //         log("没进入剪同款界面")
            //         click(100, 1000)
            //         sleep(2000)
            //     }
            // } catch (error) {
            //     sleep(1001)
            //     log(error);
            // }
        }

        if (text("剪同款").exists() && text("同款集").exists() || text("剪同款").exists() && id("com.lemon.lv:id/userAvatar").exists()) {
            xgsrizhi("剪同款")
            var ss = getAllTexts()
            log(ss)
            spds = 0
            try {
                for (j = 0, len = ss.length; j < len; j++){
                    if (ss[j].indexOf("片段 ") != -1 && ss[j].indexOf(" 使用量") != -1) {
                        var sxs = text(ss[j]).findOnce().bounds();
                        log(sxs.centerY())
                        log(ss[j])
                        if (sxs.centerY() > 1800 && sxs.centerY() < 1900){
                            spds = ss[j].split("片段 ")[1].split(" 使用量")[0]
                            if (!isNaN(spds)){
                                xgsrizhi("需要" + spds +"段视频")
                                break
                            }else{
                                xgsrizhi("不是数字" + spds)
                                spds = 0
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
            try {
                if (isNaN(spds) == false && spds > 0){
                    xgsrizhi("获取到段数"+spds)
                    var xiazsp = 0
                    if (leixing == 0 || leixing == "0"){
                        var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds- 1)
                        if (ssj == false){
                            xgsrizhi("视频数据有问题")
                            return false
                        }
                        while(1){
                            xiazsp = xiazsp + 1
                            if (xiazsp > spds || xiazsp > 20){
                                log("下载视频数量够了")
                                break
                            }else{
                                lianj = ssj[xiazsp - 1].split("----")[0]
                                xgsrizhi("下载的视频链接" + lianj)
                                xgsrizhi("下载第"+xiazsp+ "个视频")
                                var gh = xzsp(lianj, xiazsp)
                                if (gh == false){
                                    xgsrizhi("该链接下载视频失败" + lianj)
                                    return false
                                }
                            }
                        }
                    }else{
                        if (leixing == 1 || leixing == "1"){
                            var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds- 1)
                            if (ssj == false){
                                xgsrizhi("图片数据有问题")
                                return false
                            }
                            while(1){
                                xiazsp = xiazsp + 1
                                if (xiazsp > spds || xiazsp > 20){
                                    log("下载图片数量够了")
                                    break
                                }else{
                                    lianj = ssj[xiazsp - 1].split("----")[0]
                                    xgsrizhi("下载的图片链接" + lianj)
                                    xgsrizhi("下载第"+xiazsp+ "个图片")
                                    var gh = xztp(lianj, xiazsp)
                                    if (gh == false){
                                        xgsrizhi("该链接下载图片失败" + lianj)
                                        return false
                                    }
                                }
                            }
                        }else{
                            var ssj = huoquljx(sbip, user_id, yhbh, fenlei, "1", "1", "0")
                            var spj = huoquljx(sbip, user_id, yhbh, fenlei, "0", "0", spds- 1)
                            if (ssj == false || spj == false){
                                xgsrizhi("视频或图片数据有问题")
                                return false
                            }
                            lianj = ssj[0].split("----")[0]
                            var gh = xztp(lianj, "1")
                            if (gh == false){
                                xgsrizhi("该链接下载图片失败" + lianj)
                                return false
                            }
                            for (j = 0, len = spj.length; j < len; j++) {
                                lianj = spj[j].split("----")[0]
                                var spgh = xzsp(lianj, j)
                                if (spgh == false){
                                    xgsrizhi("该链接下载视频失败" + lianj)
                                    return false
                                }
                            }
                        }
                    }
                    sleep(3000)
                    click("剪同款")
                    sleep(2000)
                }
            } catch (error) {
                xgsrizhi("下载视频或图片中出现问题")
                sleep(1001)
                log(error);
            }
            TT = (new Date()).getTime()
        }
        if (text("拍摄").exists() && text("照片视频").exists() && text("下一步").exists() || text("照片").exists() && text("视频").exists() && text("下一步").exists()) {
            xgsrizhi("选择视频界面")
            var xuanqu = 1
            try {
                if (text("已导入").exists()){
                    log("已导入")
                    xuanqu = text("已导入").find().length + 1
                }
                if (pdgs == xuanqu){
                    sc = sc + 1
                }else{
                    sc = 0
                }
                pdgs = xuanqu
                if (sc > 2){
                    log("随机点一个视频")
                    click(random(50, 1050), random(350, 1300))
                    sleep(1000)
                    sc = 0
                }
                if (leixing == 0 || leixing == "0"){
                    xgsrizhi("点击视频")
                    click(400, 220)
                    sleep(1500)
                }else{
                    if (leixing == 1 || leixing == "1"){
                        xgsrizhi("点击图片")
                        click(660, 220)
                        sleep(1500)
                    }else{
                        if (xuanqu > spds - 1){
                            xgsrizhi("点击图片2")
                            click(660, 220)
                            sleep(2000) 
                            xuanqu = 1
                        }else{
                            xgsrizhi("点击视频2")
                            click(400, 220)
                            sleep(1000)
                        }
                    }
                }
                if (row((xuanqu-1)/3).drawingOrder(xuanqu).indexInParent(xuanqu-1).boundsInside(0, 300, 1080,1340).exists()){
                    xgsrizhi("点击第" + xuanqu + "个视频")
                    var ss = row((xuanqu-1)/3).drawingOrder(xuanqu).indexInParent(xuanqu-1).boundsInside(0, 300, 1080,1340).findOnce().bounds();
                    log(ss.centerX())
                    log(ss.centerY())
                    click(ss.centerX(), ss.centerY());
                    sleep(500)
                }
            } catch (error){
                sleep(1001)
                log(error);
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
        if (text("完成后自动转跳抖音").exists() || textContains("正在导出").exists()){
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
            if (biaoti != undefined &&  biaoti != "" && piantou == "是"){
                var gg = jianjicl(biaoti)
                return true
            }else{
                xgsrizhi("制作完成" + biaoti+ piantou)
                return true
            }
        }
        if (text("打开看看").exists()){
            log("打开看看")
            click("打开看看")
            sleep(2000)
        }
        if (text("我知道了").exists()){
            log("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("知道了").exists()){
            log("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()){
            log("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("同意").exists() && text("暂不使用").exists()){
            log("同意")
            click("同意")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()){
            log("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
        sleep(2000)
    }
}

//剪辑视频处理第二步
function jianjicl(huashu){
    xgsrizhi("剪辑视频处理第二步") 
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var cl = 0    //判断处理到第几步
    // var huashu = "愿意跟我一起组CP吗"
    xgsrizhi("话术：" + huashu)
    qinglihh()
    launch("com.lemon.lv")
    var sgg = 0
    while(1){
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
            if (sgg == 0){
                log("设置")
                click(1000, 160)
                sleep(2000)
                sgg = 1
            }else{
                log("开始创作")
                click(520, 420)
                sleep(2000)
            }
        }
        if (text("用户协议").exists() && text("意见反馈").exists() || text("自动添加片尾").exists() && text("版本号").exists()){
            xgsrizhi("关闭自动添加片尾")
            sgg = sgg + 1
            if (id("com.lemon.lv:id/epilogueSwitch").exists()){
                var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().checked();
                if (aa == false){
                    xgsrizhi("已经关闭了")
                    back()
                }else{
                    var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().bounds();
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
            }
            if (sgg > 5){
                xgsrizhi("次数过多")
                back()
                sleep(2000)
            }
        }
        if (text("照片视频").exists() && text("素材库").exists() || id("com.lemon.lv:id/iv_local_multi_media_select").exists() && text("照片").exists()) {
            xgsrizhi("添加素材界面")
            if (cl == 0){
                log("添加素材库的素材")
                click(700, 80)
                sleep(2000)
                if (text("黑白场").exists() || text("插入动画").exists()){
                    log("素材库")
                    click(700, 80)
                    sleep(1000)
                    click(610, 400)
                    sleep(2000)
                    click(900, 1810)
                    sleep(3000)
                }
            }else{
                log("添加自己的视频")
                click(280, 400)
                sleep(2000)
                click(900, 1800)
                sleep(3000)
            }
        }
        if (text("导出").exists() && text("剪辑").exists() && text("文字").exists() || text("特效").exists() && text("画中画").exists()) {
            xgsrizhi("视频编辑界面")
            if (cl == 0){
                log("添加文字语音")
                click("文字")
            }else{
                swipe(300, 1600, random(900, 1000), 1600, 1000)
                if (text("滤镜").exists()){
                    xgsrizhi("点击滤镜")
                    click("滤镜")
                }else{
                    log("没看到滤镜")
                    swipe(random(1001, 800), 1790, 300, 1790, 1000)
                    sleep(random(1000, 3000))
                }
            }
            sleep(2000)
        }

        if (text("滤镜").exists() && desc("panel_bottom_bar_complete").exists()) {
            xgsrizhi("选择滤镜")
            var dt = random(1,10)
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
            if (depth(11).boundsInside(0, 1330, 1080,1450).exists()) {
                log("滤镜范围")
                var ss = depth(11).boundsInside(0, 1330, 1080,1450).findOnce().bounds();
                var wzzb = ss.right
                log(wzzb)
                if (wzzb > 700){
                    log("挪一下2")
                    swipe(700, 1600, 300, 1600, 1000)
                    sleep(random(1000,2000))
                }else{
                    log("调节滤镜")
                    swipe(wzzb + 5, 1400, 1070, 1400, 3000)
                    sleep(random(1000,2000))
                    click("导出")
                    sleep(2000)
                }
            }
            sleep(2000)
        }
        if (text("新增滤镜").exists() && text("新增调节").exists()) {
            xgsrizhi("新增滤镜")
            if (depth(11).boundsInside(0, 1330, 1080,1450).exists()) {
                log("已经有滤镜了")
                click(600, 1400)
            }else{
                log("没有滤镜")
                back()
            }
            sleep(2000)
        }
        if (text("新建文本").exists() && text("识别字幕").exists() || text("识别歌词").exists()  && text("新建文本").exists()) {
            xgsrizhi("新建文本界面")
            if (cl == 0){
                log("新建文本")
                click("新建文本")
                sleep(2000)
            }else{
                if (cl == 1){
                    if (id("com.lemon.lv:id/ivTransition").exists()){
                        log("点击转场")
                        try {
                            var ss = id("com.lemon.lv:id/ivTransition").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            log(error);
                        }
                    }
                }else{
                    log("返回上一层")
                    back()
                    sleep(2000)
                }
            }
        }
        if (text("转场").exists() && text("应用到全部").exists()) {
            xgsrizhi("设置转场")
            var dt = random(1,5)
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

        if (text("花字").exists() && text("动画").exists() || text("样式").exists()  && text("气泡").exists()) {
            xgsrizhi("输入话术界面" + huashu)
            setText(huashu)
            sleep(2000)  
            if (id("com.lemon.lv:id/btnOk").exists()){
                try {
                    var ss = id("com.lemon.lv:id/btnOk").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            }else{
                log("直接点击勾勾")
                click(1000, 1000)
                sleep(2000)
            }
            cl = 1
        }
        if (text("文本朗读").exists() && text("复制").exists() || text("文本朗读").exists()  && text("删除").exists()) {
            xgsrizhi("文本朗读")
            if (id("com.lemon.lv:id/audioLine").exists()){
                try {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right    //文字朗读的坐标的坐标
                    if (wzzb > 540){
                        xgsrizhi("点击添加视频")
                        click(600, 1250)
                        sleep(2000)
                    }else{
                        xgsrizhi("点击文本朗读2")
                        click("文本朗读")
                    }
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            }else{
                log("点击文本朗读")
                click("文本朗读")
            }
            sleep(2000)
        }
        if (text("分割").exists() && text("动画").exists() || text("动画").exists()  && text("删除").exists() && text("编辑").exists()) {
            xgsrizhi("调整声音跟画面匹配")
            try {
                if (id("com.lemon.lv:id/framesLayout").exists() && id("com.lemon.lv:id/audioLine").exists()){
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right    //文字朗读的坐标
                    ss = id("com.lemon.lv:id/framesLayout").findOnce().bounds();
                    var spzb = ss.right    //视频的坐标
                    if (spzb > 950){
                        xgsrizhi("坐标太大了挪一下")
                        swipe(700, 1600, 500, 1600, 1000)
                        sleep(random(1000,2000))
                    }else{
                        xgsrizhi("能看到视频跟声音为位置了")
                        log(spzb)
                        log(wzzb)
                        if (spzb > wzzb || spzb == wzzb){
                            if (spzb - wzzb > 30){
                                xgsrizhi("视频的位置大于文字的位置")
                                swipe(spzb+4, 1250, wzzb - 5, 1250, 1000)
                                sleep(random(1000,2000))
                            }else{
                                log("位置合适了")
                                swipe(800, 1600, 300, 1600, 1000)
                                sleep(random(1000,2000))
                                click(1020, 1240)
                                sleep(3000)
                            }
                        }else{
                            if (spzb < wzzb ){
                                if (wzzb - spzb > 30){
                                    xgsrizhi("声音位置大于视频位置")
                                    swipe(spzb + 4, 1250, wzzb+ 6, 1250, 1000)
                                    sleep(random(1000,2000))
                                    click(1020, 1240)
                                    sleep(3000)
                                }else{
                                    xgsrizhi("位置合适了2")
                                    swipe(800, 1600, 300, 1600, 1000)
                                    sleep(random(1000,2000))
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
                log(error);
            }
        }
        if (text("导出").exists() && text("分辨率").exists() || text("导出").exists() && text("帧率").exists()){
            xgsrizhi("制作完成导出")
            swipe(880,979, 544,979, 1000)
            sleep(1000)
            click("导出")
            sleep(10000)

        }
        if (text("完成").exists() && text("已保存到相册和草稿").exists() || text("完成").exists() && text("分享视频到").exists()){
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
            log("点到视频全屏-返回")
            back()
            sleep(2000)
        }
        if (text("我知道了").exists()){
            log("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("残忍关闭").exists()){
            log("残忍关闭")
            click("残忍关闭")
            sleep(2000)
        }
        if (text("知道了").exists()){
            log("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()){
            log("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()){
            log("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
    }
}

//下载视频
function xzsp(lj, name) {
    xgsrizhi("下载视频")
    toastLog("下载视频")
    var dirpath = "/sdcard/DY/";
    if (name == undefined){
        log("名字为空")
        name = 1
    }
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
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

//下载图片
function xztp(lj,name) {
    xgsrizhi("下载图片")
    toastLog("下载图片")
    if (name == undefined){
        log("名字为空")
        name = 1
    }
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/3.png';
    var imgurl = lj
    xgsrizhi("拿图片的链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                log("访问次数够了退出")
                return false
            }
            var filePath = files.join(dirpath, name + '.png');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                log("下载图片完成")
                return true
            } else {
                log("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

//获取昵称
function hqnicheng() {
    xgsrizhi("获取昵称")
    var TS = (new Date()).getTime()
    var url = "http://jz.zhiyuanpingtai.com/index/getnameimg"
    xgsrizhi(url)
    files.removeDir("/sdcard/DCIM/Camera") //删除文件夹
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                // log(ss)
                xgsrizhi("获取到的名字：" + ss["name"])
                return ss["name"]
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}


//检测模块更新
function mkgx() {
    xgsrizhi("检测更新模块")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt");
    while (1) {
        try {
            // var r = http.get("http://120.79.199.143/mubei/jinli/mokuai.txt");
            var r = http.get("http://mtjl.oss-cn-shanghai.aliyuncs.com/jinligx/mokuai.txt");
            if (r.statusCode == 200) {
                var url = r.body.string()
                xgsrizhi("html = " + url)
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt")
                if (url == bb && files.exists("/sdcard/tkb2.js")) {
                    xgsrizhi("已经是最新版本33")
                } else {
                    xgsrizhi("模块更新")
                    sleep(3000)
                    // files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    xgsrizhi("加载模块")
                    var dirpath = "/sdcard/tkb2.js";
                    while (1) {
                        try {
                            let imgurl = url;
                            let res = http.get(imgurl);
                            if (res.statusCode == 200) {
                                files.writeBytes(dirpath, res.body.bytes());
                                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                                // xgsrizhi("停止当前运行的脚本")
                                // exit()
                                sleep(2000)
                                files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt", url);
                                return "gengxin"
                            } else {
                                xgsrizhi("网络异常");
                                sleep(2000)
                            };
                        } catch (error) {
                            xgsrizhi(error);
                            sleep(2000)
                        }
                    }
                    xgsrizhi("加载脚本完成")
                }
                return true
            } else {
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(2000)
        }
        sleep(random(100, 5000))
    }
}

function killapp(app) {
    try {
        openAppSetting(getPackageName(app));
        sleep(2000)
    } catch (error) {
        sleep(1001)
        xgsrizhi(error);
    }
    var tt = 0
    while (true) {
        try {
            tt++;
            if (tt > 7) {
                break
            }
            if (text("FORCE STOP").exists() || text("强行停止").exists()) {
                var w = text("强行停止").findOnce().enabled()
                if (w == false) {
                    toastLog("已经强行停止")
                    break
                } else {
                    click("FORCE STOP")
                    click("强行停止")
                    sleep(2000)
                }

            }
            if (text("OK").exists() || text("确定").exists()) {
                click("OK")
                click("确定")
                sleep(2000)

                break
            }
            sleep(1000)
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    back()
}

function funcFingIdClick(idd) { //发现ID并点击
    try {
        var a = id(idd).findOnce()
        if (a != null) {
            if (id(idd).findOnce().checked() == false) {
                a.click()
                return true
            }
        }
    } catch (e) {
        log(e)
    }
    return false
}

function ostime() {
    return Date.parse(new Date()) / 1000;
}

//下载应用
function xzm(aa) {
    //文件更新地址
    xgsrizhi("下载应用")
    while (1) {
        try {
            // var url = "https://meitus.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
            var url = aa
            // threads.start(function() {

            //发送get获取文件
            var data = http.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
                }
            }).body.bytes();
            files.writeBytes("/sdcard/xgs.apk", data);
            toast("更新成功,文件保存在/sdcard/zip签名.apk");
            //安装更新后的软件
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            // storage.clear();
            // });
            return true
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//安装应用
function anz(lujing) {
    xgsrizhi("安装")
    xzm(lujing)
    var TT = (new Date()).getTime() - 100 * 1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BB > 5 * 60 * 1000) {
            xgsrizhi("超时退出")
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60 * 1000) {
            xgsrizhi("超时清理一次换存")
            qinglihh()
            ts = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 20 * 1000) {
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            TT = (new Date()).getTime()
        }
        if (text("设置").exists() && text("取消").exists()) {
            xgsrizhi("设置")
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists()) {
            xgsrizhi("安装")
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists()) {
            xgsrizhi("已经安装成功")
            toastLog("已经安装完成")
            var gh = (new Date()).getTime()
            var ccd = 0
            while(1){
                if ((new Date()).getTime() - gh > 30 * 1000){
                    xgsrizhi("超时退出")
                    break
                }
                if(text("删除安装包").exists() && text("取消").exists()){
                    xgsrizhi("删除安装包")
                    click("取消")
                    sleep(2000)
                }
                if (text('关').exists()){
                    log('点击打开')
                    click('关')
                    sleep(2000)
                }
                if (id('amigo:id/amigo_switchWidget').exists() && ccd > 3){
                    log('查看是否打开')
                    try {
                        var bb = id("amigo:id/amigo_switchWidget").findOnce().text();
                        log(bb)
                        if (bb == "开"){
                            log("已经打开")
                            sleep(2000)
                            return true
                        }
                    } catch (error) {
                        log("检测出错")
                    }
                }
                ccd = ccd + 1 
            }
            // click("完成")
            // return true
        }
        if (id("android:id/switch_widget").exists() && desc("向上导航").exists()) {
            xgsrizhi("添加安装权限")
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false) {
                var aa = id("android:id/switch_widget").findOnce().bounds();
                xgsrizhi(aa.centerX())
                xgsrizhi(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100 * 1000
                qinglihh()
            }
            back()
            sleep(2000)
        }
        if(text("删除安装包").exists() && text("取消").exists()){
            xgsrizhi("删除安装包")
            click("取消")
            sleep(2000)
        }
    }
}

//查看应用版本
function getVerName(name) {
    try {
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name) {
                return pkgs[i].versionName;
            }
        }
        return false
    } catch (e) {
        log("出错" + e)
        sleep(3000);
        return false
    }
}

function xiezai(baoming) {
    xgsrizhi("卸载：" + baoming)
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载2")
            try {
                var bb = text("卸载").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(5000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            xgsrizhi("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            xgsrizhi("已经没有该应用了")
            return true
        }
    }
}

//判断版本卸载
function pdbb(names, banben) {
    xgsrizhi("判断版本是否对应" + names + banben)
    var baoming = getPackageName(names) //返回包名
    var xzbb = getVerName(names)
    if (xzbb != false) {
        if (banben == xzbb) {
            xgsrizhi("版本一致")
            return true
        }
        xgsrizhi("版本不一致" + xzbb)
    } else {
        xgsrizhi("获取不到版本")
        return true
    }
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            xgsrizhi("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            xgsrizhi("已经没有该应用了")
            return true
        }
    }
}

//豌豆荚下载应用
function wdjxiazai(name, banebn) {
    var baom = getPackageName(name)
    if (baom != null) {
        xgsrizhi("已经下载了该应用")
        device.keepScreenOn(240 * 60 * 60 * 1000)
        return true
    }

    xgsrizhi("豌豆荚下载应用" + name) //豌豆荚
    var waddj = getPackageName("豌豆荚")
    var wdbb = getVerName("豌豆荚") //豌豆荚版本
    if (wdbb != "6.15.21" && waddj != null) {
        xgsrizhi("豌豆荚版本不对")
        var ss = xiezai("com.wandoujia.phoenix2")
        if (ss == false) {
            return false
        }
        waddj = false
    }
    if (waddj == null || waddj == false) {
        var lujing = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/wandoujia.apk"
        xgsrizhi("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(5000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var azc = 0
    while (1) {
        if (text("完成").exists() && text("打开").exists() && azc == 1) {
            xgsrizhi("完成")
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
            xgsrizhi("时间够了退出")
            qinglihh("com.wandoujia.phoenix2")
            return false
        }
        if ((new Date()).getTime() - TSD > 6 * 60 * 1000) {
            xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.wandoujia.phoenix2")
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if (id('com.wandoujia.phoenix2:id/y8').exists() && id('com.wandoujia.phoenix2:id/acj').exists()) {
            id('com.wandoujia.phoenix2:id/y8').findOnce().click()
            sleep(2000)
        }
        if (text("跳过").exists()) {
            xgsrizhi("跳过")
            click("跳过")
            sleep(2000)
        }
        if (text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()) {
            xgsrizhi("首页点搜索")
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
            xgsrizhi("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if (text("提示").exists() && text("确定").exists() && text("取消").exists()) {
            xgsrizhi("提示")
            click("确定")
            sleep(2000)
        }

        if (text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists()) {
            xgsrizhi("搜索结果页面")
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
            xgsrizhi("搜索结果页面")
            if (text("历史版本").exists() && text("系统权限").exists()) {
                log("看到历史版本")
                // click("看到历史版本")
                // sleep(4000)
                var ss = text("历史版本").findOnce().bounds();
                log(ss.centerX())
                log(ss.centerY())
                if (ss.centerY() < 1730) {
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
            xgsrizhi("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()) {
                try {
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称：" + cc)
                    if (cc.indexOf(name) != -1) {
                        var ss = getAllTexts()
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
                        xgsrizhi("应用名称2：" + cc)
                        if (cc.indexOf(name) != -1) {
                            var ss = getAllTexts()
                            log(ss)
                            var cd = 0
                            for (j = 0, len = ss.length; j < len; j++) {
                                xgsrizhi("获取的值2：" + ss[j])
                                if (ss[j].indexOf(banebn) != -1) {
                                    log("找到该版本了2" + ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030) {
                                        click(920, bb.centerY() - 53);
                                        // sleep(10000)
                                        var hhe = (new Date()).getTime()
                                        while (1) {
                                            if ((new Date()).getTime() - hhe > 10 * 1000) {
                                                log("时间到了")
                                                break
                                            }
                                            if (text("点击继续").exists() && text("稍后下载").exists()) {
                                                log("点击继续")
                                                click("点击继续")
                                                sleep(20000)
                                            }
                                        }
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
        if (text("忽略").exists() && text("官方商店下载").exists()) {
            log("官方商店下载")
            click("忽略")
            sleep(2000)
        }
        if (text("点击继续").exists() && text("稍后下载").exists()) {
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if (text("选好了，安装").exists()) {
            log("选好了，安装")
            click(80, 110)
            sleep(2000)
        }
        if (text("允许一次").exists()) {
            log("允许一次")
            click("允许一次")
            sleep(2000)
        }
        if (text("你可能需要").exists() || id("com.wandoujia.phoenix2:id/a83").exists()) {
            log("你可能需要")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a83").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }

        if (id("com.wandoujia.phoenix2:id/a7s").exists() || text("你可能需要").exists()) {
            log("选好了，安装2")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
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
            azc = 1
            sleep(15000)
        }
        if (text("继续").exists() && text("退出").exists()) {
            log("继续")
            click("继续")
            sleep(2000)
        }
        if (text("继续").exists() && text("取消").exists()) {
            log("继续2")
            click("继续")
            sleep(2000)
        }
        if (text("同意并授权").exists()) {
            log("同意并授权")
            click("同意并授权")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click("取消")
            sleep(1000)
        }
    }
}

//获取指定参数
function canshu_server(ip, rwid){
    xgsrizhi("获取指定任务的参数")  // rwid任务id   fun_code
    var Tb = (new Date()).getTime()
    xgsrizhi(ip + "----" + rwid)
    var gf = {}
    while (1){
        try {
            var device_name = device.getIMEI()
            var url = "http://" + ip + "/yunkong/server/index?type=getScript&name=" + device_name + "&taskId=" + rwid
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var data = r.body.json()
                if (data["code"] == 1){
                    var canshu = data["data"]["script"]["param"]
                    log("获取到的参数"+ canshu)
                    var ds = JSON.parse(canshu);
                    log("获取到任务参数" + canshu)
                    for (i = 0; i < ds.length; i++) {
                        gf[ds[i]["key"]] = ds[i]["value"]
                    }
                    xgsrizhi(gf)
                    return gf
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务参数中...")
        sleep(random(100, 10000))
    }
}

//反馈任务状态
function fankui_server(ip, rwid, beizhu, zt){
    xgsrizhi("反馈任务状态")  // rwid任务id   fun_code
    var Tb = (new Date()).getTime()
    xgsrizhi(ip + "----" + rwid)
    while (1){
        try {
            var device_name = device.getIMEI()
            var url = "http://" + ip + "/yunkong/server/index?type=taskEnd&name=" + device_name + "&taskId=" + rwid + "&msg=" + beizhu + "&buff=" + zt
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var data = r.body.json()
                if (data["code"] == 1){
                    xgsrizhi("提交成功")
                }
                return true
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务参数中...")
        sleep(random(100, 10000))
    }
}

module.exports = {
    'dowmp3': dowmp3, //下载MP3
    'xgsrizhi': xgsrizhi, //写本地日志
    'riqis': riqis, //获取当前日期
    'qinglihh': qinglihh, //清理后台
    'getAllTexts': getAllTexts, //获取页面所有文字
    'xieru': xieru, //写入文档
    'cunqusj': cunqusj, //记录停止脚本
    'benjitel': benjitel, //获取本机号码
    'huoquyzm': huoquyzm, //获取本机验证码
    'killapp': killapp, //强制停止APP    
    'funcFingIdClick': funcFingIdClick, //找到ID并点击
    'getInsideString': getInsideString, //切割字符串，取中间部分 
    'ostime': ostime, //返回当前时间戳秒
    'anz': anz, //安装指定URL中的应用
    'getVerName': getVerName, //查看应用版本
    'xiezai': xiezai, //卸载指定应用
    'pdbb': pdbb, //判断版本不对就卸载
    'wdjxiazai': wdjxiazai, //豌豆荚下载安装指定版本应用
    'zhaose': zhaose, //找色  
    'dkmubei': dkmubei, //打开墓碑 
    'chongq': chongq, //重启手机   huoqutxl
    'huoqutxl': huoqutxl, //获取通讯录
    'xiping': xiping, //息屏遮挡屏幕
    'xztp': xztp, //下载图片
    'xzsp': xzsp, //下载视频 jianjisp
    'jianjisp': jianjisp, //剪辑剪辑视频
    'hqnicheng': hqnicheng, //获取昵称
    'mkgx': mkgx, //检测模块更新
    'canshu_server': canshu_server, //获取指定参数
    'fankui_server': fankui_server, //反馈任务状态
}














