//296,285,532,521
log(getClip())
// zhimadaili()
// exit()
//console.show();

var baseurl = 'http://119.23.250.50/milu' //主api
var api = {
    momo: '821283872', //陌陌主号
    pwd: 'milu8888', //默认密码
    getPhone: 'http://106.54.66.160:6009/getphone&project=momo&user=milu123&pwd=milu123&token=UIdTIqUsHBLwpTdQ', //接码取号
    getCode: 'http://106.54.66.160:6009/getsms&project=momo&user=milu123&pwd=milu123&phone=', //接码取码,
    beifen: baseurl + '/api.php?action=setBeifen',
    quhao: baseurl + '/api.php?action=getBeifen&id=',
    getMGPhone: baseurl + '/api.php?action=getMGAPI',
    getMGZt: baseurl + '/api.php?action=gxMGAPI&ph=',
    gxBeifen: baseurl + '/api.php?action=gxBeifen',
}
api.kkapi = {
    getphoneurl: 'http://8.210.250.136:9008/servlet/UserServiceAPI?method=getMobile&username=wx588518&password=d3g1ODg1MTg=&projectId=mm_1150',
    getcodeurl: 'http://8.210.250.136:9008/servlet/UserServiceAPI?method=getMessage&username=wx588518&password=d3g1ODg1MTg=&projectId=mm_1150&mobile='
}

api.kkapi.getphone = function () {
    log("获取98K平台号码")
    while (true) {
        try {
            var res = http.get(api.kkapi.getphoneurl);
            if (res.statusCode == 200) {
                ss = res.body.string()
                // log(ss)
                if (ss[0] == "暂无号码" || ss.indexOf('failure;') > -1) {
                    log(ss)
                    toast("没有号码")
                    sleep(1000 * 10)
                } else {
                    var shortName = ss.substring(0, 11).substring(0, 2);
                    if (shortName == "14" || shortName == "16" || shortName == "17" || shortName == "19") {
                        toast("号码不能用")
                        sleep(2000)
                    } else {
                        let sssssssss = ss.substring(0, 11)
                        log(sssssssss)
                        toast(sssssssss)
                        phone = sssssssss
                        return phone
                    }
                }
            }
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

api.kkapi.getcode = function (mobile) {
    var TS = (new Date()).getTime()
    log("获取验证码")
    while (true) {
        try {
            sleep(6000)
            var res = http.get(api.kkapi.getcodeurl + mobile);
            if ((new Date()).getTime() - TS > 3 * 60 * 1000) {
                log("获取短信超时")
                return false
            }
            if (res.statusCode == 200) {
                ss = res.body.string()
                log(ss)
                //success;您的验证码为341422
                //ss=ss.replace('success;您的验证码为',ss)
                if (ss.indexOf('success') < 0) {
                    toast("暂无短信")
                    sleep(6000)
                    continue
                }
                ss = ss.replace(/[^0-9]/ig, "");
                // findeclick("text", "重新获取", 1200)
                if (check(ss) == "1") {
                    log("获取成功")
                    yzm = ss
                    return yzm
                } else {
                    toast("暂无短信")
                    sleep(6000)
                }
                if (text("注册成功后，性别不可以修改").exists() || text("下一步").exists()) {
                    return yzm
                }
            }
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

var zhanghao = ""
var mima = api.pwd
var idd = "0"
var xunhuan = "0"
var phone = ""
var lianjie = ""
var yzm = ""
var banben = ""
var sex = ""
var fbnum = 0
var sqnum = 0
var up = ' '
var launchnum = 0
var tongdaotext = ''
var kehu = '0'
var tongdaox = "通道3"
//备份次数，为1则运行一次
var beifencishu = dialogs.singleChoice("请选择是否备份", ["不备份", "备份"], 0);
var wangluo = dialogs.singleChoice("请选择网络", ["飞行", "VPN", "芝麻代理", "不变网络", "无极VPN"], 0);
var xiaomifeng = dialogs.singleChoice("请选择软件", ["小蜜蜂", "小霸王", "手机号注册", '谷歌98k'], 0);
var ttxx = dialogs.singleChoice("请选择网络", ["修改头像", "不修改头像"], 0);
if (xiaomifeng == 0) {
    var tongdao = dialogs.singleChoice("请选择小蜜蜂通道", ["通道1", "通道2", "通道3"], 0);
    if (tongdao == 0) {
        tongdaox = "通道1"
        tongdaotext = '蜜蜂授权D版'
    } else if (tongdao == 1) {
        tongdaox = "通道2"
        tongdaotext = 'D版通道2'
    } else if (tongdao == 2) {
        tongdaox = "通道3"
        tongdaotext = 'D版通道3'
    }
    var gongneng = dialogs.singleChoice("请选择工号", ["注册绑定", "登录", "登录绑定", "备份绑定", "注册", "备份"], 0);
} else if (xiaomifeng >= 2) { //手机号
    var gongneng = 6
    sex = dialogs.singleChoice("请选择姓别", ["女", "男"], 0)
} else {
    var gongneng = dialogs.singleChoice("请选择工号", ["注册绑定", "登录", "登录绑定", "备份绑定", "注册", "备份"], 0);
}
if (gongneng == 5 || gongneng == 3) {
    gonghao = dialogs.singleChoice("请选择工号", ["001", "002", "003", "004", "005", "006", "007", "008", "009"], 0);
    if (gonghao == 0) {
        gonghao = "001"
    } else if (gonghao == 1) {
        gonghao = "002"
    } else if (gonghao == 2) {
        gonghao = "003"
    } else if (gonghao == 3) {
        gonghao = "004"
    } else if (gonghao == 4) {
        gonghao = "005"
    } else if (gonghao == 5) {
        gonghao = "006"
    } else if (gonghao == 6) {
        gonghao = "007"
    } else if (gonghao == 7) {
        gonghao = "008"
    } else if (gonghao == 8) {
        gonghao = "009"
    }

    zhanghao = rawInput("请输入账号", "");
    mima = rawInput("请输入密码", api.pwd);
} else if (gongneng == 1 || gongneng == 2) {
    idd = rawInput("请输入指定还原id,不指定请输入0", "0");
}
log(gongneng)
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
                } else {
                    cu = cu + 1
                    if (cu >= 5) {
                        // vpng();
                        // vpnk();
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
            var res = http.post(api.beifen, {
                "phone": zhanghao,
                "pass": mima,
                "data": dd,
                "gh": gh,
                "bb": banben
            });
            if (res.statusCode == 200) {
                toastLog("上传upbeifen成功")
                // log(zhanghao,mima,banben)
                log("html = " + res.body.string());
                break
            } else {
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
                toastLog("上传upmybeifen成功")
                log("html = " + res.body.string());
                break
            } else {
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
                } else {
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
            var r = http.get(api.gxBeifen + idd);
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                r_list = r_str.split("|")
                if (r_list[0] == "OK") {
                    return [r_list[1], r_list[2], r_list[3]]
                } else {
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
            var r = http.get(api.getMGPhone);
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                r_list = r_str.split("|")
                if (r_list[0] == "OK") {
                    return [r_list[1], r_list[2]]
                } else {
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
            var r = http.get(api.getMGZt + phone + "&zt=" + zt);
            if (r.statusCode == 200) {
                var r_str = r.body.string()
                toastLog("更新成功" + r_str)
                break
            } else {
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
                } else {
                    toastLog("没有短信" + body)
                    sleep(random(3000, 5000))
                }
            } else {
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
            var res = http.post(api.gxBeifen, {
                "phone": zhanghao,
                "mgapi": ma,
            });
            if (res.statusCode == 200) {
                toastLog("上传美国连接成功")
                log("html = " + res.body.string());
                break
            } else {
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
    } else if (kj == "text") {
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
        log(error);
        return 1
    }
}

function denglu() {
    log("登录陌陌号")
    while (1) {
        if (packageName("com.immomo.momo").exists()) {

        } else if (findeclick("text", "允许", 800)) {

        } else {
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
            findeclick("text", "重新打开应用", 800) //崩溃重新打开
            if (text("查看或编辑个人资料").exists()) {
                scrollDown(0)
                sleep(1200)
            }
            //基因滑动
            if (findeclick("text", "社会基因全新上线", 800)) {
                swipe(900, 1100, 150, 1100, 800)

            }
            if (findeclick("text", "选择你的个性基因", 800)) {
                swipe(900, 1100, 150, 1100, 800)
            }
            findeclick("text", "合成我的基因", 800)
            findeclick("text", "更多", 500)
            findeclick('text', '好友', 1000)
            findeclick("id", "com.immomo.momo:id/toolbar_back", 800)
            findeclick("id", "com.immomo.momo:id/icon", 5000) //右上角通讯录
            findeclick("text", "查看通讯录好友", 3000)
            findeclick("text", "取消屏蔽", 800)
            findeclick("text", "是", 800)
            if (text('查看通讯录好友').exists()) {
                back()
                sleep(2000)
            }
            if (findeclick("text", "添加通讯录好友", 2000)) {
                back()
                sleep(500)
                back()
                sleep(1000)
                if (text('查看通讯录好友').exists()) {
                    back()
                    sleep(1000)
                }
                kee = 1
                if (beifencishu == 0){
                    return true
                }
            }
            findeclick("text", "知道了", 500)
            if (kee == 1 && beifencishu == 1) {
                findeclick("text", "更多", 500)
                findeclick("text", "点击按钮进行验证", 800)
                findeclick("text", "账号登录", 800)
                findeclick("id", "com.immomo.momo:id/setting_layout", 800)
                findeclick("text", "设置", 800)
                findeclick("text", "帐号与安全", 800)
                if (text("密码修改").exists() && text("帐号与安全").exists()) {
                    if (text("密码修改").exists() && text("设置密码").exists()) {
                        findeclick("text", "密码修改", 800)
                    } else if (text("密码修改").exists() && !text("设置密码").exists()) {
                        return false
                    }
                }
                if (text("修改").exists() && text("返回").exists()) {
                    if (text("忘记密码").exists()) {
                        back()
                    } else {
                        setText(0, mima)
                        sleep(80)
                        setText(1, mima)
                        sleep(800)
                        findeclick("text", "修改", 2000)
                        toastLog("修改密码流程完成")
                    }
                    up = 1
                }
                if ((findeclick("text", "帐号密码登录", 800) || findeclick("text", "账号密码登录", 800)) && up == 1) {
                    if (text("帐号登录").exists() || text("手机号验证码登录").exists()) {
                        zhanghao = getAllTexts()[0]
                        log('账号' + zhanghao)
                        toastLog("上传备份")
                        beifen()
                        var aa = (files.read("/sdcard/.crab/" + zhanghao + ".txt")); //
                        if (kehu == 0) {
                            upbeifen(aa, "脚本注册")
                            log('上传结束')
                        } else {
                            upmybeifen(aa)
                        }
                        sleep(5000)
                        return true
                    }
                }
            }
            findeclick("text", "允许", 500)
            findeclick("text", "开启", 500)
            findeclick("text", "确定", 500)
        } catch (error) {
            toastLog(error)
            sleep(1000)
        }
    }
}

function bangdingMG() {
    log("绑定美国账号")
    while (1) {
        findeclick("text", "重新打开应用", 800) //崩溃重新打开
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
        } else if (findeclick("text", "获取验证码", 3000)) {
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
            } else {
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
    sqnum = 0
    fbnum = 0
    sqnum = 0
    var qz = 0
    launchnum = 0
    log(name)
    toastLog("打开陌陌")
    launch("com.immomo.momo");
    sleep(4000)
    while (1) {
        try {
            findeclick("text", "重新打开应用", 800) //崩溃重新打开
            if (packageName("com.immomo.momo").exists() || packageName("com.tencent.mm").exists() || packageName("com.tencent.xiaobawang").exists()) {

            } else if (findeclick("text", "允许", 800)) {

            }
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
                if (desc('移除陌陌。').exists()) {
                    toastLog("移除陌陌。")
                    sleep(2000)
                    desc('移除陌陌。').findOnce().click()
                    sleep(2000)
                    if (desc('移除陌陌。').exists()) {
                        var a = desc('移除陌陌。').findOnce().bounds()
                        swipe(100, a.centerY(), 1050, a.centerY(), 1000)
                        sleep(2000)
                    }
                    back()
                    sleep(1000)
                    launch("com.immomo.momo");
                    sleep(5000)
                    launchnum = 1
                }
            } else if (text("微信号/QQ/邮箱登录").exists() && launchnum == 1 && xiaomifeng == 1) {
                home()
                sleep(1000)
                launch("com.tencent.xiaobawang");
                sleep(2000)
            } else if (text("微信号/QQ/邮箱登录").exists() && launchnum == 1 && xiaomifeng == 0) {
                home()
                sleep(1000)
                launch("com.mobile.mfsqd");
                sleep(2000)
            }
            findeclick("text", tongdaox, 1200)
            if ((text('MOMO陌陌').exists() || text('MOMO陌陌').exists()) && (text(tongdaotext).exists() || text('一键授权').exists() || text(tongdaox).exists()) && sqnum == 0) {
                if (text('授权中,请稍后').exists()) {
                    toastLog('再授权一次')
                    back()
                    sleep(1000)
                }
                toastLog('一键授权')
                click(900, 500)
                sleep(20000) //授权等待时间
                launch("com.immomo.momo");
                sleep(5000)
                sqnum = 1
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
            if (text("注册成功后，性别不可以修改").exists()) {
                //toastLog("填写资料界面")
                sleep(1200)
                if (findeclick("text", "选择生日", 800)) {
                    setText(name)
                    sleep(800)
                    var z = random(0, 1)
                    if (z == 0) {
                        for (let index = 0; index < random(1, 8); index++) { //年
                            click(294 + random(10, 30), 1053 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    } else {
                        for (let index = 0; index < random(1, 5); index++) { //年
                            click(294 + random(10, 30), 760 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    }
                    for (let index = 0; index < random(1, 12); index++) { //月
                        click(550 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    for (let index = 0; index < random(1, 12); index++) { //日
                        click(768 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    // findeclick("text","确定",800)
                    click(843 + random(1, 20), 1322 + random(1, 20))
                    sleep(1200)
                } else {
                    if (sex == 0) {
                        if (findeclick("text", "女生", 800)) {
                            findeclick("text", "下一步", 3000)
                            //break
                        }
                    } else if (sex == 1) {
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
            }
            if (text('消息').exists()) {
                sleep(2000)
                click('消息')
            }
            if (text('搜索').exists()) {
                click('搜索')
                sleep(800)
            }
            if (text("联系人").exists() && text("聊天记录").exists() && qz == 0) {
                setText(0, "50880100")
                sleep(1200)
            }
            if (findeclick("text", "搜索群组：50880100", 5000) && qz == 0) {
                findeclick("text", "加入群组", 10000)
                toastLog("加入群组")
                back()
                sleep(200)
                back()
                sleep(2000)
                if (text('搜索群组：50880100').exists()) {
                    back()
                    sleep(2000)
                }
                qz = 1
            }
            if (text("联系人").exists() && text("聊天记录").exists() && qz == 1) {
                setText(0, api.momo)
                sleep(1200)
            }
            if (findeclick("text", "搜索用户：" + api.momo, 5000) && qz == 1) {
                toastLog("搜索完成")
                back()
                sleep(500)
                back()
                sleep(2000)
                if (text('搜索用户：' + api.momo).exists()) {
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

function shoujihaozhuce() {
    toastLog("注册陌陌")
    var name = getRandomName()
    sqnum = 0
    fbnum = 0
    sqnum = 0
    var qz = 0
    launchnum = 0
    log(name)
    toastLog("打开陌陌")
    launch("com.immomo.momo");
    sleep(4000)
    // 98k98k
    phone = xiaomifeng == 2 ? getdapenghaoma() : api.kkapi.getphone()
    while (1) {
        try {
            findeclick("text", "重新打开应用", 800) //崩溃重新打开
            if (text("手机号登录注册").exists() && text("获取验证码").exists()) {
                log("输入手机号" + phone)
                setText(1, phone)
                sleep(1200)
                findeclick("text", "获取验证码", 2000)
            }
            if (text("输入6位验证码").exists() && text("获取语音验证码")) {
                // 98k98k
                yzm = xiaomifeng == 2 ? getyzm() : api.kkapi.getcode(phone)
                if (yzm.length == 6) {
                    setText(0, yzm)
                    sleep(3000)
                } else if (text("注册成功后，性别不可以修改").exists() || text("下一步").exists()) {
                    
                } else {
                    return false
                }
            }
            //直播间返回
            id('com.immomo.momo:id/popup_phone_live_gesture_guide_iv_gesture').exists() ? (back(), log('1')) : ''
            id('com.immomo.momo:id/mk_dialog_close_button').exists() ? (back(), log('2')) : ''
            id('com.immomo.momo:id/rightSvgaView').exists() ? (back(), log('3')) : ''
            id('com.immomo.momo:id/hani_pal_mask').exists() || id('com.immomo.momo:id/phone_live_layout_bottom').exists() ? (back(), log('4')) : ''
            // text('忽略').exists() || id('com.immomo.momo:id/dilaog_button3').exists() ? findeclick("text", "忽略", 800) : ''
            findeclick("text", "知道了", 800)
            if (text("手机号登录注册").exists() && (text("QQ登录").exists() || text("账号登录").exists() || text("帐号登录").exists())) {
                findeclick("text", "手机号登录注册", 1200)
            }
            findeclick("text", "同意", 1200)
            findeclick("text", "去开启", 1200)
            if (ttxx == 0){
                findeclick("text", "允许", 1200)
            }else{
                findeclick("text", "拒绝", 1200)
            }
            findeclick("text", "不是我的，注册新号", 1200)
            findeclick("text", "下次再说", 1200)
            if (findeclick("text", "开启定位", 1200)) {
                findeclick("text", "权限", 2000)
                if (findeclick("text", "位置信息", 1200)) {
                    back()
                    sleep(500)
                    launch("com.immomo.momo");
                    sleep(5000)
                }
            }
            id('com.immomo.momo:id/iv_close').exists() && text('你的性别是？').exists() ? findeclick("id", "com.immomo.momo:id/iv_close", 1200) : ''
            if (text("注册成功后，性别不可以修改").exists()) {
                //toastLog("填写资料界面")
                sleep(1200)
                if (findeclick("text", "选择生日", 800)) {
                    setText(name)
                    sleep(800)
                    var z = random(0, 1)
                    if (z == 0) {
                        for (let index = 0; index < random(1, 8); index++) { //年
                            click(294 + random(10, 30), 1053 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    } else {
                        for (let index = 0; index < random(1, 5); index++) { //年
                            click(294 + random(10, 30), 760 + random(10, 30))
                            sleep(random(300, 500))
                        }
                    }
                    for (let index = 0; index < random(1, 12); index++) { //月
                        click(550 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    for (let index = 0; index < random(1, 12); index++) { //日
                        click(768 + random(10, 30), 1053 + random(10, 30))
                        sleep(random(300, 500))
                    }
                    // findeclick("text","确定",800)
                    click(843 + random(1, 20), 1322 + random(1, 20))
                    sleep(1200)
                } else {
                    if (sex == 0) {
                        if (findeclick("text", "女生", 800)) {
                            findeclick("text", "下一步", 3000)
                            //break
                        }
                    } else if (sex == 1) {
                        if (findeclick("text", "男生", 800)) {
                            findeclick("text", "下一步", 3000)
                            //break
                        }
                    }
                }
            }
            if (text("上传本人真实照片").exists()) {
                if (ttxx == 0) {
                    gaitx() //修改头像
                } else {
                    bugaitx() //不修改
                }
            }
            if (text('操作时间太长，请退出重试').exists() && text('确定').exists()) {
                toastLog("头像设置超时")
                return false
            }
            text('开启附近功能').exists() && text('一键开启').exists() ? findeclick("text", "一键开启", 800) : ''
            if (id('com.immomo.momo:id/icon_first').exists() && id('com.immomo.momo:id/ic_match_list').exists() || id('com.immomo.momo:id/menu_my_slide_card_profile').exists() && id('com.immomo.momo:id/match_list_entry').exists()) {
                //点点界面
                log('点点')
                back()
                sleep(800)
            }
            //打卡
            if (text('立即打卡').exists() || text('打个卡，告诉大家我来了').exists()) {
                click(80, 500)
                sleep(800)
            }
            findeclick("text", "跳过", 1000)
            if (text('消息').exists()) {
                sleep(2000)
                click('消息')
            }
            if (text('搜索').exists()) {
                click('搜索')
                sleep(800)
            }
            if (text('全部通知').exists() && (desc('通知设置').exists() || id('com.immomo.momo:id/notice_category').exists())) {
                back()
                log('全部通知')
                sleep(800)
                findeclick("text", "更多", 500)
            }
            if (text('消息通知').exists() && desc('通知提醒设置').exists()) {
                log('消息通知')
                back()
                sleep(800)
            }
            if (text("联系人").exists() && text("聊天记录").exists()) {
                setText(0, api.momo)
                sleep(1200)
            }
            text('立即添加').exists() && text('下次再说').exists() ? findeclick("text", "下次再说", 800) :''
            if (findeclick("text", "搜索用户：" + api.momo, 5000)) {
                toastLog("搜索完成")
                back()
                sleep(500)
                back()
                sleep(2000)
                if (text('搜索用户：' + api.momo).exists()) {
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
            toastLog("下载图片中")
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
    var secondNames = new Array("碧凡", "夏菡", "曼香", "若烟", "半梦", "雅绿", "冰蓝", "灵槐", "平安", "书翠", "翠风", "香巧", "代云", "友巧", "听寒", "梦柏", "醉易", "访旋", "亦玉", "凌萱", "访卉", "怀亦", "笑蓝", "春翠", "靖柏", "书雪", "乐枫", "念薇", "靖雁", "寻春", "恨山", "从寒", "忆香", "觅波", "静曼", "凡旋", "新波", "代真", "新蕾", "雁玉", "冷卉", "紫山", "千琴", "恨天", "傲芙", "盼山", "怀蝶", "冰兰", "问旋", "从南", "白易", "问筠", "如霜", "半芹", "寒雁", "怜云", "寻文", "谷雪", "乐萱", "涵菡", "海莲", "傲蕾", "青槐", "冬儿", "易梦", "惜雪", "宛海", "之柔", "夏青", '浅笑ゞ', '北笙°', '追寻', '白骨.', '奶泡♂', '桃靥', '迁就', '等闲', '惊梦', '凉枍', '甜屁', '心累', '薄凉', '痞子', '余归', '兮子', '欠吻.', '摘月', '忘笙', '软糖', '酒儿', '安年', '青衿', '故梦', '厌己', '墨染', '未情', '轻浅', '落落', '余悸', '两清', '陌言', '喜旧', '陌ヅ路', '看客°', '傲鸠', '余罪', '笺言', '孤王°', '泅渡', '野浪', '唇钉', '殇璃', '人渣', '若羽', '离殇°', '旧寂', '桔梗', '七笙', '箜絔', '甜嗑', '泪点', '初遇', '匿名', '拒爱', '梨涡', '仙女', '千寻', '余温', '余悸.', '病娇', '奶猫', '心晴', '软肋', '稚初', '浅伤', '白芷', '晚风', '二逼°', '夏九', '慕言', '柠凉', '浪归', '北陌', '卷耳', '孤傲', '迷惘', '奶喵', '沙哑', '忘我', '素锦.', '过客', '寡欲', '决绝', '白云', '模糊', '扯淡', '夏时', '逆夏', '未知', '浅暖', '迷茫', '情绪', '溪涧', '光年', '宠物', '彩色', '星星', '森林', '童真', '时间', '遗忘', '碎花', '格子', '软刺', '怅惘', '迷乱', '延续', '难耐', '凝眸', '炙热', '灼伤', '画心', '着迷', '微仰', '阳光', '入眠', '承诺', '倾城', '搁浅', '初礼', '光线', '逾越', '掠过', '柔情', '旅途', '旅行', '转身', '离开', '回味', '折磨', '未来', '舍得', '错过', '牵手', '伤口', '心底', '陌路', '彩虹', '夏日', '纸鸳', '璐璐', '露露', '茜茜', '安妮', '安娜', '北城', '半夏', '思君', '朝暮', '清水', '岁月', '暖夏', '清风', '一江', '圆月', '草莓', '星野', '梧桐', '薄雾', '南音', '繁花', '落幕', '不渡', '明月', '西楼', '杏子', '远山', '孤鸿', '万世', '浮华', '浅墨', '惜晨', '千瑾', '绻影', '浮沉', '陌然', '星河', '海风', '北辰', '山河', '永慕', '半卷', '清词', '一世', '安稳', '星辉', '月光', '云清', '淡雅', '安屿', '花溪', '兮昕', '执傲', '俗人', '断桥', '晴云', '山川', '疲惫', '颓废', '小川', '胭脂', '世疏', '清引', '梦冥', '孤勇', '性许', '莣萳', '杏九', '冷枫', '悲歌', '鲸落', '夏凉', '星落', '懒川', '笙竺', '暖栀', '独寂', '心死', '归途', '安好', '隐疾', '浅蓝', '逆光', '无妄', '云雾', '花鸟', '借口', '柔侣', '只影', '落梦', '七凉', '独仙', '念归', '惜染', '孤陌', '善意', '欧霸', '青衫', '時窥', '默闻', '青烟', '南空', '白芷', '两仪', '猫九', '九玖', '千仐', '顾夕', '同尘', '酒妓', '青睐', '俗生', '喵呜', '孤臣', '知足', '残缺', '莫爱', '冷漠', '释怀', '忘记', '流浪', '琉璃', '烟火', '色调', '掺杂', '沉沦', '摆布', '沙砾', '搁浅', '梦碎', '腐朽', '路口', '旧店', '疯子', '指望', '浮夸', '笔调', '谅解', '体会', '心疼', '喧哗', '吵闹', '沦陷', '唯一', '灰烬', '感性', '回旋', '誓言', '流水', '已逝', '轻雾', '花落', '夏末', '淡色', '直觉', '牵强', '妖媚', '深浅', '迁就', '阴霾', '余温', '枷锁', '往事', '泛白', '记忆', '沉迷', '惨白', '声色', '回忆', '泛白', '着迷', '湛蓝', '木槿', '倘若', '距离', '空城', '蓝天', '青草眉妩', '城门挽鹿', '并安', '時窥', '青烟', '冧九', '青稚', '饮湿', '半枫', '稀香', '清引', '怀桔', '浮梦', '千城', '洒脱', '匆匆', '原来', '骤变', '迷失', '从容', '分心', '争辩', '宿命');
    var thirdNames = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9");
    var bq = ['🦀', '🦃', '🦄', '🦁', '🐿', '🐶', '🐯', '🐎', '🐮', '🐷', '🐭', '🐨', '🐔', '🐤', '🐸', '🐍', '🐳', '🐬', '🐠', '🐙', '🐛', '🐉', '🐧', '🐕', '🐺', '🐈', '🐆', '🐴', '🐂', '🐖', '🐗', '🐽', '🐑', '🐐', '🐪', '🐫', '🐘', '🐁', '🐹', '🐰', '🐻', '🐓', '🐦', '🐊', '🐲', '🐟', '🐡', '🐒', '🐩', '🐣', '🐥', '🐅', '🐃', '🐄', '🐏', '🐀', '🐇', '🐼', '🐢', '🐋', '🐌', '🐜', '🐝', '🐞', '☘', '🌹', '🌴', '🍀', '🌼', '💐', '🌸', '💮', '🌺', '🌻', '🌷', '🌵', '🌾', '🍁', '🍂', '🍃', '🌱', '🌿', '🌲', '🌳']
    var firstLength = firstNames.length;
    var secondLength = secondNames.length;
    var thirdLength = thirdNames.length;
    var i = parseInt(Math.random() * firstLength);
    var j = parseInt(Math.random() * secondLength);
    var k = parseInt(Math.random() * thirdLength);
    var x = random(0, 3)
    if (x == 0) {
        var name = firstNames[i] + secondNames[j] + bq[random(0, bq.length - 1)];
    } else if (x == 1) {
        var name = firstNames[i] + bq[random(0, bq.length - 1)];
    } else if (x == 2) {
        var name = secondNames[j] + bq[random(0, bq.length - 1)];
    } else {
        var name = firstNames[i] + secondNames[j]
    }
    return name;
};

function gaiziliao() {
    dowtupian()
    var kee = 0
    while (1) {
        findeclick("text", "重新打开应用", 800) //崩溃重新打开
        findeclick("text", "更多", 500)
        findeclick("text", "查看或编辑个人资料", 800)
        findeclick("text", "下次再说", 800)
        if (findeclick("id", "com.immomo.momo:id/menu_edit", 800)) { //修改浆糊
            if (kee == 1) {
                toastLog("修改成功")
                back()
                sleep(2000)
                if (text("消息").exists()) {

                } else {
                    back()
                    sleep(2000)
                }

                break;
            }
        }
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
        findeclick("id", "com.immomo.momo:id/v_item_shadow", 900) //选择第一个
        findeclick("text", "确认", 500)
        if (findeclick("text", "完成", 500)) {
            kee = 1
        }
    }
}

function gaitx() {
    dowtupian()
    while (1) {
        findeclick("id", "com.immomo.momo:id/img_photo", 500)
        if (id("com.immomo.momo:id/close_iv").exists()) {
            findeclick("text", "相册", 500)
        }
        findeclick("text", "开启", 500)
        text("确认").exists() && !text('操作时间太长，请退出重试').exists() ?findeclick("text", "确认", 500):''
        findeclick("text", "允许", 500)
        findeclick("text", "跳过", 500)
        if (text("相册").exists() && id("com.immomo.momo:id/item_layout")) {
            click(400, 400)
            sleep(1200)
        }
        if (text("完成").exists() && text("重选")) {
            findeclick("text", "完成", 500)
        }
        findeclick("text", "完成进入", 500)
        if (text("首页").exists() && text("消息").exists() || text("首页").exists() && text("更多").exists()) {
            log("完成修改头像")
            break
        }
    }
}

function bugaitx() {
    toast("不修改头像")
    while (1) {
        findeclick("id", "com.immomo.momo:id/img_photo", 800)
        if (text("形象示例").exists()) {
            findeclick("text", "相册", 500)
        }
        findeclick("text", "取消", 800)
        findeclick("text", "确认", 800)
        findeclick("text", "拒绝", 800)
        findeclick("text", "跳过", 800)
        if (text("首页").exists() && text("消息").exists() || text("首页").exists() && text("更多").exists()) {
            log("完成修改头像")
            break
        }
    }
}

function getdapenghaoma() {
    var TS = (new Date()).getTime()
    var url = api.getPhone;
    log("获取小号平台号码")
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 1 * 60 * 1000) {
                log("获取手机号码超时")
                return false
            }
            var res = http.get(url);
            if (res.statusCode == 200) {
                ss = res.body.string()
                // log(ss)
                if (ss[0] == "暂无号码") {
                    log("没有号码")
                    toast("没有号码")
                    sleep(2000)
                } else {
                    var shortName = ss.substring(0, 2);
                    if (shortName == "14" || shortName == "16" || shortName == "17" || shortName == "19") {
                        toast("号码不能用")
                        sleep(2000)
                    } else if (ss.length == 11) {
                        log(ss)
                        toast(ss)
                        phone = ss
                        return phone
                    }
                }
            }
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

function getyzm() {
    var TS = (new Date()).getTime()
    var url = api.getCode + phone;
    log("获取验证码")
    while (true) {
        try {
            var res = http.get(url);
            if ((new Date()).getTime() - TS > 1 * 90 * 1000) {
                log("获取短信超时")
                return false
            }
            if (res.statusCode == 200) {
                ss = res.body.string()
                log(ss)
                // findeclick("text", "重新获取", 1200)
                if (check(ss) == "1") {
                    log("获取成功")
                    yzm = ss
                    return yzm
                } else {
                    toast("暂无短信")
                    sleep(6000)
                }
            }

        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

function checkNumber(theObj) { //获取字符串是否有数字
    var alert = /^[0-9]*$/
    if (alert.test(theObj)) {
        return 1;
    } else {
        return 2;
    }
}

function check(str) { //判断是否有6个连续数字
    var pattern = /\d{6}/;
    if (pattern.test(str)) {
        return 1
    } else {
        return 2;
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
//无极VPN
function wjvpn() {
    launch('org.wuji')
    sleep(3000)
    while (1) {
        findeclick("text", "允许", 2000)
        findeclick("text", "立即使用", 2000)
        if (text("未连接").exists() && text("更换").exists()) {
            click('更换')
            sleep(5000)
            if (id('org.wuji:id/address').exists() && !text('获取服务失败，请重试').exists()) {
                toastLog('无极连接成功')
                break
            }
        }
        if (id('org.wuji:id/address').exists() && text("更换").exists()) {
            click('更换')
            sleep(5000)
            if (id('org.wuji:id/address').exists() && !text('获取服务失败，请重试').exists()) {
                toastLog('无极连接成功')
                break
            }
        }
        if (text("切换IP时间不能低于11秒").exists()) {
            sleep(11000)
            findeclick("text", "更换", 5000)
            if (id('org.wuji:id/address').exists() && !text('获取服务失败，请重试').exists()) {
                toastLog('无极连接成功')
                break
            }
        }
    }

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

            } else {
                click(776, 339)
                sleep(1000)
            }
        }

        if (text("断开连接").exists()) {
            if (temp == 0) {
                click(236, 1310) //断开
                sleep(3000)
                temp = 1
            } else {
                click(878, 1316) //取消
                sleep(1000)
                break
            }
        }
        findeclick("text", "确认", 2000)
        if (text("连接").exists()) {
            //click(887, 970)
            findeclick("text", "连接", 2000)
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
        } else {
            if (text("断开").exists()) {
                break;
            }
        }
    }
}

if (gongneng == 5) {
    beifen()
    var aa = (files.read("/sdcard/.crab/" + zhanghao + ".txt")); //
    upbeifen(aa, gonghao)
} else if (gongneng == 1) {
    hao_list = quhao()
    zhanghao = hao_list[0]
    pass = hao_list[1]
    var yjxx = hao_list[2]
    toastLog("账号：" + zhanghao)
    toastLog("密码：" + pass)
    files.write("/sdcard/.crab/" + zhanghao + ".txt", yjxx); //
    huanyuan()
    denglu()
} else if (gongneng == 2) {
    hao_list = quhao()
    zhanghao = hao_list[0]
    pass = hao_list[1]
    var yjxx = hao_list[2]
    toastLog("账号：" + zhanghao)
    toastLog("密码：" + pass)
    files.write("/sdcard/.crab/" + zhanghao + ".txt", yjxx); //
    huanyuan()
    denglu()
    var mg_list = getMgPhone()
    phone = mg_list[0]
    lianjie = mg_list[1]
    bangdingMG()
} else if (gongneng == 4) {
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
        } else if (wangluo == 1) {
            vpn()
        } else if (wangluo == 2) {
            zhimadaili()
        } else if (wangluo == 3) {

        } else if (wangluo == 4) {
            wjvpn()
        }
        xinji()
        zhuce()
        gaiziliao()
        shezhimima()
    }
} else if (gongneng == 0) {
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
        } else if (wangluo == 1) {
            vpn()
        } else if (wangluo == 2) {
            zhimadaili()
        } else if (wangluo == 3) {

        } else if (wangluo == 4) {
            wjvpn()
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
} else if (gongneng == 6) {
    log("手机号注册")
    //dowtupian()
    xunhuan = parseInt(xunhuan)
    var numm = 1
    while (1) {
        try {
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
            } else if (wangluo == 1) {
                vpn()
            } else if (wangluo == 2) {
                zhimadaili()
            } else if (wangluo == 3) {

            } else if (wangluo == 4) {
                wjvpn()
            }
            xinji()
            if (beifencishu == 0){
                if (shoujihaozhuce()) {
                    shezhimima()
                    toastLog('这次完成了~')
                    break
                }
            }else{
                if (shoujihaozhuce()) {
                    shezhimima()
                    upmgapi(phone)
                }
            }
        } catch (error) {
            log(error)
            sleep(3000)
        }
    }
}