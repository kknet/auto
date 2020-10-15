//296,285,532,521
log(getClip())

// zhimadaili()

// exit()


var zhanghao = "123456"
var mima = "wx511311"
var idd = "0"
var xunhuan = "0"
var phone = "123456789"
var lianjie = ""
var yzm = "123456789"
var banben = ""
var sex = ""
var fbnum = 0
var sqnum = 0
var launchnum = 0

var wangluo = dialogs.singleChoice("请选择网络", ["飞行", "VPN", "芝麻代理", "不变网络"], 0);
var kehu = dialogs.singleChoice("请选择网络", ["华少用", "老弟用"], 0);
var gongjv = dialogs.singleChoice("请选择软件", ["小蜜蜂", "小霸王"], 0);
var gongneng = dialogs.singleChoice("请选择工号", ["备份", "登录", "登录绑定", "备份绑定", "注册", "注册绑定"], 0);
if (gongneng == 4 || gongneng == 5) {
    xunhuan = rawInput("请输入循环次数,无限循环请输入0", "0");
    sex = dialogs.singleChoice("请选择姓别", ["男", "女"], 0)
}
if (gongneng == 0 || gongneng == 3) {
    gonghao = dialogs.singleChoice("请选择工号", ["001", "002", "003", "004", "005", "006", "007", "008", "009"], 0);
    if (gonghao == 0) {
        gonghao = "001"
    }
    else if (gonghao == 1) {
        gonghao = "002"
    }
    else if (gonghao == 2) {
        gonghao = "003"
    }
    else if (gonghao == 3) {
        gonghao = "004"
    }
    else if (gonghao == 4) {
        gonghao = "005"
    }
    else if (gonghao == 5) {
        gonghao = "006"
    }
    else if (gonghao == 6) {
        gonghao = "007"
    }
    else if (gonghao == 7) {
        gonghao = "008"
    }
    else if (gonghao == 8) {
        gonghao = "009"
    }

    zhanghao = rawInput("请输入账号", "");
    mima = rawInput("请输入密码", "wx511311");
}
else if (gongneng == 1 || gongneng == 2) {
    idd = rawInput("请输入指定还原id,不指定请输入0", "0");
}

function xinji() {
    log("开始新机")
    var cu = 0
    while (1) {
        try {
            var r = http.get("http://127.0.0.1:1314/cmd?fun=new_device");
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                log("html = " + r_str);
                r_obj = JSON.parse(r_str);
                if (r_obj['code'] == 0) {
                    toastLog("新机成功")
                    sleep(5000)
                    break
                }
                else {
                    cu = cu + 1
                    if (cu >= 5) {
                        vpng();
                        vpnk();
                        cu = 0
                    }
                    toastLog("新机失败")
                    sleep(2000)
                }
            }
        } catch (error) {
            print(error);
            sleep(2000)
        }
    }
}

function beifen() {
    log("备份")
    try {
        var r = http.get("http://127.0.0.1:1314/cmd?fun=backup_params&to_filename=" + zhanghao + ".txt");
        log("code = " + r.statusCode);
        log("html = " + r.body.string());

    } catch (error) {
        print(error);
        sleep(2000)
    }
}

function upbeifen(dd, gh) {
    log("上传备份")
    while (1) {
        try {

            var res = http.post("http://119.23.250.50/momo/setBeifen.php", {
                "phone": zhanghao,
                "pass": mima,
                "data": dd,
                "gh": gh,
                "bb": banben,
            });
            if (res.statusCode == 200) {
                toastLog("上传成功")
                log("html = " + res.body.string());
                break
            }
            else {
                toastLog("没网")
                sleep(3000)
            }
        } catch (error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

function upmybeifen(dd) {
    toastLog("上传备份到我自己的平台")
    while (1) {
        try {
            var res = http.post("http://121.196.23.184/api.php/potal/dy/add", {
                "tbname": "momo",
                "phone": zhanghao,
                "pass": mima,
                "state6": dd,
            });
            if (res.statusCode == 200) {
                toastLog("上传成功")
                log("html = " + res.body.string());
                break
            }
            else {
                toastLog("没网")
                sleep(3000)
            }
        } catch (error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

function huanyuan() {
    log("还原参数")
    while (1) {
        try {
            var r = http.get("http://127.0.0.1:1314/cmd?fun=restore_params&from_filename=" + zhanghao + ".txt");
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                r_obj = JSON.parse(r_str);
                if (r_obj['code'] == 0) {
                    toastLog("还原参数成功")
                    break
                }
                else {
                    toastLog("还原参数失败")
                    sleep(2000)
                }
            }
        } catch (error) {
            print(error);
            sleep(2000)
        }
    }
}

function quhao() {
    log("取号还原")
    while (1) {
        try {
            var r = http.get("http://119.23.250.50/momo/getBeifen.php?id=" + idd);
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                r_list = r_str.split("|")
                if (r_list[0] == "OK") {
                    return [r_list[1], r_list[2], r_list[3]]
                }
                else {
                    toastLog("没号")
                    sleep(2000)
                }
            }
        } catch (error) {
            print(error);
            sleep(2000)
        }
    }
}

function getMgPhone() {
    log("取美国号")
    while (1) {
        try {
            var r = http.get("http://119.23.250.50/momo/getMGAPI.php");
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                r_list = r_str.split("|")
                if (r_list[0] == "OK") {
                    return [r_list[1], r_list[2]]
                }
                else {
                    toastLog("没号")
                    sleep(2000)
                }
            }
        } catch (error) {
            print(error);
            sleep(2000)
        }
    }
}

function gxMgPhone(zt) {
    toastLog("更新美国号状态")
    while (1) {
        try {
            var r = http.get("http://119.23.250.50/momo/gxMGAPI.php?ph=" + phone + "&zt=" + zt);
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                toastLog("更新成功" + r_str)
                break
            }
            else {
                toastLog("更新失败")
                sleep(random(3000, 5000))
            }
        } catch (error) {
            print(error);
            sleep(2000)
        }
    }
}

function ms(tt) {
    toastLog("获取美国短信")
    var t2 = new Date().getTime()
    while (1) {
        if ((new Date()).getTime() - t2 > 2 * 60 * 1000) {
            return "-1"
        }
        if (text("获取验证码").exists()) {
            click("获取验证码")
            sleep(2000)
        }
        try {
            var r = http.get(tt);
            if (r.statusCode == 200) {
                var body = r.body.string()
                log("html = " + body);
                var gg = getInsideString(body, "code: ", " Enter")
                if (gg != "") {
                    return gg
                }
                else {
                    toastLog("没有短信" + body)
                    sleep(random(3000, 5000))
                }
            }
            else {
                toastLog("网络异常无短信")
                sleep(3000)
            }
        } catch (e) {
            log("报错异常" + e)
            sleep(3000);
        }
    }
    return false
}

function upmgapi(ma) {
    log("上传绑定的美国连接")
    while (1) {
        try {
            var res = http.post("http://119.23.250.50/momo/gxBeifen.php", {
                "phone": zhanghao,
                "mgapi": ma,
            });
            if (res.statusCode == 200) {
                toastLog("上传成功")
                log("html = " + res.body.string());
                break
            }
            else {
                toastLog("没网")
                sleep(3000)
            }
        } catch (error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

function time() {
    return (new Date()).getTime() / 1000
}

function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
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
        log(error);
        return 1
    }
}

function denglu() {
    log("登录陌陌号")
    while (1) {
        if (packageName("com.immomo.momo").exists()) {

        }
        else if (findeclick("text", "允许", 800)) {

        }
        else {
            toastLog("打开陌陌")
            launch("com.immomo.momo");
            sleep(2000)
        }
        findeclick("text", "一键开启", 800)

        findeclick("text", "帐号密码登录", 800)
        if (text("帐号登录").exists()) {
            sleep(800)
            setText(0, zhanghao)
            sleep(80)
            setText(1, pass)
            sleep(800)
            findeclick("text", "登录", 3000)
        }
        if (findeclick("text", "更多", 500)) {
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
        }
        findeclick("text", "知道啦", 800)
        if (text("我的动态").exists()) {
            toastLog("登录成功")
            break
        }
    }
}

function shezhimima() {
    log("设置密码")
    var kee = 0
    while (1) {
        try {
            if (text("查看或编辑个人资料").exists()) {
                scrollDown(0)
                sleep(1200)
            }
            findeclick("id", "com.immomo.momo:id/setting_layout", 800)
            findeclick("text", "设置", 800)
            findeclick("text", "帐号与安全", 800)
            findeclick("text", "密码修改", 800)
            if (text("修改").exists() && text("返回").exists()) {
                setText(0, "wx511311")
                sleep(80)
                setText(1, "wx511311")
                sleep(800)
                findeclick("text", "修改", 2000)
            }
            // if (text("手机号登录注册").exists()){
            //     log("修改成功")
            //     break;
            // }
            findeclick("text", "帐号密码登录", 800)
            findeclick("text", "账号密码登录", 800)
            if (text("帐号登录").exists() || text("账号登录").exists()) {
                zhanghao = (getAllTexts({})[0])
                sleep(800)
                // setText(0,zhanghao)
                // sleep(80)
                setText(1, "wx511311")
                sleep(800)
                findeclick("text", "登录", 3000)
                kee = 1
            }
            if (findeclick("text", "更多", 500)) {
                if (kee == 1) {
                    if (findeclick("text", "消息", 2000)) {
                        if (findeclick("id", "com.immomo.momo:id/icon", 800)) {
    
                        }     //右上角通讯录
                        else {
                            toastLog("没有通讯录啦")
                            toastLog("修改密码流程完成")
                            beifen()
                            var aa = (files.read("/sdcard/.crab/" + zhanghao + ".txt"));  //
                            if (kehu == 0) {
                                upbeifen(aa, "脚本注册")
                            }
                            else {
                                upmybeifen(aa)
                            }
                            return true
                        }
                    }
    
                }
            }
            //基因滑动
            if (findeclick("text", "社会基因全新上线", 800)) {
                swipe(900, 1100, 150, 1100, 800)
    
            }
            if (findeclick("text", "选择你的个性基因", 800)) {
                swipe(900, 1100, 150, 1100, 800)
            }
            findeclick("text", "合成我的基因", 800)
            findeclick("id", "com.immomo.momo:id/toolbar_back", 800)
            findeclick("id", "com.immomo.momo:id/icon", 5000)     //右上角通讯录
            findeclick("text", "查看通讯录好友", 2000)
            if (findeclick("text", "添加通讯录好友", 2000)) {
                toastLog("修改密码流程完成")
                beifen()
                var aa = (files.read("/sdcard/.crab/" + zhanghao + ".txt"));  //
                if (kehu == 0) {
                    upbeifen(aa, "脚本注册")
                }
                else {
                    upmybeifen(aa)
                }
                back()
                sleep(500)
                back()
                sleep(2000)
                if (text('查看通讯录好友').exists()) {
                    back()
                    sleep(2000)
                }
                return true
            }
            findeclick("text", "允许", 500)
            findeclick("text", "开启", 500)
        } catch (error) {
            toastLog(error)
            sleep(1000)
        }
    }
}

function bangdingMG() {
    log("绑定美国账号")
    while (1) {
        if (findeclick("text", "更多", 500)) {
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
            click(942, 1850)
            sleep(500)
        }
        findeclick("id", "com.immomo.momo:id/setting_layout", 800)
        findeclick("text", "帐号与安全", 800)
        findeclick("text", "手机绑定", 800)
        findeclick("text", "绑定手机号", 800)
        findeclick("text", "+86", 800)
        if (text("选择国家/地区区号").exists()) {
            for (let index = 0; index < 15; index++) {
                if (findeclick("text", "加拿大(1)", 800)) {
                    break
                }
                scrollDown(0)
                sleep(1200)
            }
        }
        if (findeclick("text", "输入手机号码", 800)) {
            if (text("+1").exists()) {
                setText(0, phone)
                sleep(800)

            }
        }
        else if (findeclick("text", "获取验证码", 3000)) {
            yzm = ms(lianjie)
            if (yzm != "-1") {
                setText(1, yzm)
                sleep(800)
                findeclick("text", "提交", 3000)
            }
        }
        if (text("已绑定的手机号").exists()) {
            log("绑定成功")
            gxMgPhone("绑定成功")
            upmgapi(phone + "|" + lianjie)
            break
        }
    }
}

function qinglimomo() {
    while (1) {
        openAppSetting(getPackageName("MOMO陌陌"));
        var w = text("存储").findOne()
        if (w) {
            var banben_temp = id("com.android.settings:id/widget_text1").findOnce()
            if (banben_temp) {
                banben = banben_temp.text()
            }
            else {
                back()
                sleep(2000)
            }
            findeclick("text", "存储", 1200)
            if (findeclick("text", "清除数据", 1200)) {
                findeclick("text", "确定", 3000)
                break
            }
        }
    }
    findeclick("text", "确定", 3000)
}

function zhuce() {
    toastLog("注册陌陌")
    var name = getRandomName()
    log(name)
    while (1) {
        try {
            if (packageName("com.immomo.momo").exists() || packageName("com.tencent.mm").exists() || packageName("com.tencent.xiaobawang").exists()) {
            }
            else if (findeclick("text", "允许", 800)) {
            } 
            // else {
            //     toastLog("打开陌陌")
            //     launch("com.immomo.momo");
            //     sleep(4000)
                if (text('正在获取用户资料').exists()) {
                    toastLog("重新打开陌陌")
                    //清理陌陌然后重新打开
                    recents()
                    sleep(8000)
                    if (desc('移除MOMO陌陌。').exists()) {
                        toastLog("移除MOMO陌陌。")
                        sleep(2000)
                        desc('移除MOMO陌陌。').findOnce().click()
                        sleep(2000)
                        if (desc('移除MOMO陌陌。').exists()) {
                            var a = desc('移除MOMO陌陌。').findOnce().bounds()
                            swipe(100, a.centerY(), 1050, a.centerY(), 1000)
                            sleep(2000)
                        }
                        back()
                        sleep(1000)
                        launch("com.immomo.momo");
                        sleep(5000)
                    }
                }
            // }
            findeclick("text", "一键开启", 800)
            if (findeclick("text", "更多", 500)) {
                click(942, 1850)
                sleep(500)
                click(942, 1850)
                sleep(500)
                click(942, 1850)
                sleep(500)
                click(942, 1850)
                sleep(500)
            }
            findeclick("text", "知道啦", 800)
            findeclick("text", "微信登录", 800)
            findeclick("text", "去开启", 800)
            findeclick("id", "com.immomo.momo:id/img_wx", 2000)
            findeclick("id", "com.immomo.momo:id/weixin_view", 2000)
            if (text("微信号/QQ/邮箱登录").exists() && launchnum == 0) {
                toastLog("重新打开陌陌")
                //清理陌陌然后重新打开
                recents()
                sleep(8000)
                if (desc('移除MOMO陌陌。').exists()) {
                    toastLog("移除MOMO陌陌。")
                    sleep(2000)
                    desc('移除MOMO陌陌。').findOnce().click()
                    sleep(2000)
                    if (desc('移除MOMO陌陌。').exists()) {
                        var a = desc('移除MOMO陌陌。').findOnce().bounds()
                        swipe(100, a.centerY(), 1050, a.centerY(), 1000)
                        sleep(2000)
                    }
                    back()
                    sleep(1000)
                    launch("com.immomo.momo");
                    sleep(5000)
                }
                launchnum = 1
            } else if (text("微信号/QQ/邮箱登录").exists() && launchnum == 1 && gongjv == 1) {
                launch("com.tencent.xiaobawang");
                sleep(2000)
            } else if (text("微信号/QQ/邮箱登录").exists() && launchnum == 1 && gongjv == 0) {
                launch("com.mobile.mfsqd");
                sleep(2000)
            }
            findeclick("text", "通道3", 1200)
            if (text('陌陌').exists() && (text('D版通道3').exists() || text('一键授权').exists() || text('通道3').exists()) && sqnum == 0) {
                toastLog('一键授权')
                click(900, 500)
                sleep(20000)
                sqnum = 1
            }
            if (text('授权中,请稍后').exists()) {
                sleep(10000)
                launch("com.immomo.momo");
                sleep(1000)
            }
            findeclick("text", "授权", 1200)
            if (text("登录").exists() && text("注册").exists()) {
                findeclick("text", "登录", 1200)
            }
            findeclick("text", "用微信号/QQ号/邮箱登录", 1200)
            if (text("请输入项目名称").exists() && xiaomifeng == 1) {
                setText(0, "MOMO")
                sleep(1200)
            }
            if (text('发布').exists() && fbnum == 0) {
                toastLog('点击发布')
                click('发布')
                sleep(20000)
                launch("com.immomo.momo");
                fbnum = 1
            }
            if (text('确定').exists() && fbnum == 1) {
                toastLog('发布成功')
                click('确定')
                sleep(800)
                fbnum = 1
            }
            if (text("注册成功后，性别不可以修改").exists()) {
                //toastLog("填写资料界面")
                sleep(1200)
                if (findeclick("text", "选择生日", 800)) {
                    setText(name)
                    sleep(800)
                    var z = random(0, 1)
                    if (z == 0) {
                        for (let index = 0; index < random(1, 8); index++) {     //年
                            click(294 + random(10, 30), 1053 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    } else {
                        for (let index = 0; index < random(1, 5); index++) {     //年
                            click(294 + random(10, 30), 760 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    }
                    for (let index = 0; index < random(1, 12); index++) {     //月
                        click(550 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    for (let index = 0; index < random(1, 12); index++) {     //日
                        click(768 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    // findeclick("text","确定",800)
                    click(843 + random(1, 20), 1322 + random(1, 20))
                    sleep(1200)
                }
                else {
                    if (sex == 1) {
                        if (findeclick("text", "女生", 800)) {
                            findeclick("text", "下一步", 3000)
                            //break
                        }
                    }
                    else if (sex == 0) {
                        if (findeclick("text", "男生", 800)) {
                            findeclick("text", "下一步", 3000)
                            //break
                        }
                    }
                }
            }
            //打卡
            if (text('立即打卡').exists() || text('打个卡，告诉大家我来了').exists()) {
                click(80, 500)
                sleep(800)
            }
            findeclick("text", "跳过", 1000)
            findeclick("text", "同意", 1000)
            if (text("查看或编辑个人资料").exists()) {
                toastLog("登录成功")
                //return true
                if (findeclick("text", "消息", 500)) {
                    findeclick("text", "搜索", 500)
                }
            }
            if (text("联系人").exists() && text("聊天记录").exists()) {
                setText(0, "50880100")
                sleep(1200)
            }
            if (findeclick("text", "搜索群组：50880100", 5000)) {
                if (findeclick("text", "加入群组", 10000)) {
                    toastLog("加入群组")
                    // 判断申请之后下滑
                    swipe(500, 1500, 500, 500, 800)
                    sleep(1000)
                    findeclick("text", "群主", 5000)
                    findeclick("text", "关注", 2000)
                }
                toastLog("注册流程完成")
                sleep(5000)
                back()
                sleep(500)
                back()
                sleep(2000)
                if (text('搜索群组：50880100').exists()) {
                    back()
                    sleep(2000)
                }
                return true
            }
        } catch (error) {
            toastLog(error)
            sleep(2000)
        }
    }
}

function dowtupian() {
    var pnum = random(1, 603)
    toastLog("下载图片" + pnum)
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    while (1) {
        try {
            if (tem > 10) {
                log("访问次数够了退出")
                return false
            }
            var filePath = files.join(dirpath, '1.png');
            let imgurl = 'https://tupian-1300185247.cos.ap-chengdu.myqcloud.com/' + pnum + '.png';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                toastLog("下载图片成功")
                return true
            } else {
                toastLog("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
            toastLog("下载图片中")
            sleep(2000)
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }
    toastLog("下载图片完成")
}

function getRandomName() {
    var firstNames = new Array("赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许", "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章", "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳", "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常", "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹", "欧阳", "慕容"
    );
    var secondNames = new Array("碧凡", "夏菡", "曼香", "若烟", "半梦", "雅绿", "冰蓝", "灵槐", "平安", "书翠", "翠风", "香巧", "代云", "友巧", "听寒", "梦柏", "醉易", "访旋", "亦玉", "凌萱", "访卉", "怀亦", "笑蓝", "春翠", "靖柏", "书雪", "乐枫", "念薇", "靖雁", "寻春", "恨山", "从寒", "忆香", "觅波", "静曼", "凡旋", "新波", "代真", "新蕾", "雁玉", "冷卉", "紫山", "千琴", "恨天", "傲芙", "盼山", "怀蝶", "冰兰", "问旋", "从南", "白易", "问筠", "如霜", "半芹", "寒雁", "怜云", "寻文", "谷雪", "乐萱", "涵菡", "海莲", "傲蕾", "青槐", "冬儿", "易梦", "惜雪", "宛海", "之柔", "夏青");
    var thirdNames = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9");
    var bq = [ '🦀',  '🦃',  '🦄',  '🦁',  '🐿',  '🐶',  '🐯',  '🐎',  '🐮',  '🐷',  '🐭',  '🐨',  '🐔',  '🐤',  '🐸',  '🐍',  '🐳',  '🐬',  '🐠',  '🐙',  '🐛',  '🐉',  '🐧',  '🐕',  '🐺',  '🐈',  '🐆',  '🐴',  '🐂',  '🐖',  '🐗',  '🐽',  '🐑',  '🐐',  '🐪',  '🐫',  '🐘',  '🐁',  '🐹',  '🐰',  '🐻',  '🐓',  '🐦',  '🐊',  '🐲',  '🐟',  '🐡',  '🐒',  '🐩',  '🐣',  '🐥',  '🐅',  '🐃',  '🐄',  '🐏',  '🐀',  '🐇',  '🐼',  '🐢',  '🐋',  '🐌',  '🐜',  '🐝',  '🐞',  '☘',  '🌹',  '🌴',  '🍀',  '🌼',  '💐',  '🌸',  '💮',  '🌺',  '🌻',  '🌷',  '🌵',  '🌾',  '🍁',  '🍂',  '🍃',  '🌱',  '🌿',  '🌲',  '🌳' ]
    var firstLength = firstNames.length;
    var secondLength = secondNames.length;
    var thirdLength = thirdNames.length;
    var i = parseInt(Math.random() * firstLength);
    var j = parseInt(Math.random() * secondLength);
    var k = parseInt(Math.random() * thirdLength);
    var name = firstNames[i] + secondNames[j]+ bq[random(0, bq.length-1)];
    return name;
};

function gaiziliao() {
    dowtupian()
    var kee = 0
    while (1) {
        findeclick("text", "更多", 500)
        findeclick("text", "查看或编辑个人资料", 800)
        findeclick("text", "下次再说", 800)
        if (findeclick("id", "com.immomo.momo:id/menu_edit", 800)) {        //修改浆糊
            if (kee == 1) {
                toastLog("修改成功")
                back()
                sleep(2000)
                if (text("消息").exists()) {

                }
                else {
                    back()
                    sleep(2000)
                }

                break;
            }
        }
        // if (kee == 0){
        //     findeclick("id","com.immomo.momo:id/editephoto_layout_add",900)  //添加头像按钮  
        // }
        // var w = bounds(296,285,532,521).findOnce();
        // if(w){
        //     log("已经有两张图片了")
        //     click(45+random(10,30),285+random(10,30))
        //     sleep(800)
        // }
        if (kee == 0) {
            findeclick("id", "com.immomo.momo:id/avatar_imageview", 900)
        }
        if (kee == 1) {
            findeclick("text", "保存", 3000)
        }
        findeclick("id", "com.immomo.momo:id/iv_close", 3000)
        if (findeclick("text", "相册", 2000)) {
            click(369 + random(10, 40), 358 + random(10, 40))
            sleep(800)
        }
        findeclick("id", "com.immomo.momo:id/v_item_shadow", 900)  //选择第一个
        findeclick("text", "确认", 500)
        if (findeclick("text", "完成", 500)) {
            kee = 1
        }
    }
}

// function feixing() {
//     shell("jcls -c 'settings put global airplane_mode_on 1'")
//     shell("jcls -c 'am broadcast -a android.intent.action.AIRPLANE_MODE --ez state true'")
//     var intent = new Intent(); 
//     intent.setAction("android.settings.WIFI_SETTINGS");
//     app.startActivity(intent);
//     sleep(3000)
//     shell("jcls -c 'settings put global airplane_mode_on 0'")
//     shell("jcls -c 'am broadcast -a android.intent.action.AIRPLANE_MODE --ez state false'")
// }

function feixing() {
    var intent = new Intent();
    intent.setAction("android.settings.WIRELESS_SETTINGS");
    app.startActivity(intent);
    sleep(2000)
    while (1) {
        if (text("飞行模式").exists()) {
            break

        }
        toastLog("正在打开无线和网络")
        sleep(1000)
    }
    click(937, 328)
    sleep(6000)
    click(937, 328)
    sleep(6000)
}

function vpn() {
    var intent = new Intent();
    //intent.setAction("android.net.vpn.SETTINGS");
    intent.setAction("android.settings.VPN_SETTINGS");
    app.startActivity(intent);
    var temp = 0
    while (1) {

        if (text("尚未添加任何 VPN。").exists()) {
            sleep(2000)
            back()
            sleep(1000)
            toastLog("没有VPN重新打开连接")
            vpn()
            return
        }

        if (text("VPN").exists()) {
            if (text("正在连接...").exists()) {

            }
            else {
                click(776, 339)
                sleep(1000)
            }
        }

        if (text("断开连接").exists()) {
            if (temp == 0) {
                click(236, 1310)      //断开
                sleep(1000)
                temp = 1
            }
            else {
                click(878, 1316)      //取消
                sleep(1000)
                break
            }
        }
        if (text("连接").exists()) {
            //click(887, 970)
            findeclick("text", "连接", 1200)
            temp = 1
        }
    }

}

function zhimadaili() {
    toastLog("开始连接芝麻代理")
    launch("com.sesame.proxy");
    sleep(2000)
    var kee = 0
    while (1) {
        toastLog(kee)
        if (findeclick("text", "开启", 3000)) {
            kee = 1
        }
        if (kee == 0) {
            findeclick("text", "断开", 3000)
        }
        else {
            if (text("断开").exists()) {
                break;
            }
        }
    }
}

if (gongneng == 0) {
    beifen()
    var aa = (files.read("/sdcard/.crab/" + zhanghao + ".txt"));  //
    upbeifen(aa, gonghao)
}
else if (gongneng == 1) {
    hao_list = quhao()
    zhanghao = hao_list[0]
    pass = hao_list[1]
    var yjxx = hao_list[2]
    toastLog("账号：" + zhanghao)
    toastLog("密码：" + pass)
    files.write("/sdcard/.crab/" + zhanghao + ".txt", yjxx);  //
    huanyuan()
    denglu()
}
else if (gongneng == 2) {
    hao_list = quhao()
    zhanghao = hao_list[0]
    pass = hao_list[1]
    var yjxx = hao_list[2]
    toastLog("账号：" + zhanghao)
    toastLog("密码：" + pass)
    files.write("/sdcard/.crab/" + zhanghao + ".txt", yjxx);  //
    huanyuan()
    denglu()
    var mg_list = getMgPhone()
    phone = mg_list[0]
    lianjie = mg_list[1]
    bangdingMG()
}
else if (gongneng == 4) {
    //dowtupian()
    xunhuan = parseInt(xunhuan)
    var numm = 1
    while (1) {
        toastLog("执行第：" + numm + "次注册")
        if (xunhuan != 0) {
            if (numm > xunhuan) {
                break
            }
            numm++;
        }
        qinglimomo()
        if (wangluo == 0) {
            feixing()
        }
        else if (wangluo == 1) {
            vpn()
        }
        else if (wangluo == 2) {
            zhimadaili()
        }
        else if (wangluo == 3) {

        }
        xinji()
        zhuce()
        gaiziliao()
        shezhimima()
    }
}
else if (gongneng == 5) {
    //dowtupian()
    xunhuan = parseInt(xunhuan)
    var numm = 1
    while (1) {
        toastLog("执行第：" + numm + "次注册")
        if (xunhuan != 0) {
            if (numm > xunhuan) {
                break
            }
            numm++;
        }
        qinglimomo()
        if (wangluo == 0) {
            feixing()
        }
        else if (wangluo == 1) {
            vpn()
        }
        else if (wangluo == 2) {
            zhimadaili()
        }
        else if (wangluo == 3) {

        }
        xinji()
        zhuce()
        gaiziliao()
        shezhimima()
        var mg_list = getMgPhone()
        phone = mg_list[0]
        lianjie = mg_list[1]
        bangdingMG()
    }
}