var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
var dqbaoming = "com.ss.android.article.video" //该项目包名
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
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
function zhaose(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
        // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = TKB.getInsideString(ss[k], "(", ",")
        var yy = TKB.getInsideString(ss[k], ",", ",0")
        var ys = TKB.getInsideString(ss[k], "0x", ",70)")
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

function zonghe() {
    if (text("我知道了").exists()) {
        TKB.set_log("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下一步").exists()) {
        TKB.set_log("下一步")
        click("下一步")
        sleep(2000)
    }
    if (text("继续").exists()) {
        TKB.set_log("继续")
        click("继续")
        sleep(1000)
    }
    if (text("始终同意").exists()) {
        TKB.set_log("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (zhaose("if isColor(225,654,0xffffff,70) and isColor(424,926,0x000000,70) and isColor(562,1002,0x757575,70) and isColor(295,1275,0xff0000,70) and isColor(426,1300,0xff0000,70) and isColor(447,1287,0xffffff,70) and isColor(635,1299,0xffffff,70) and isColor(661,1301,0xff0000,70) then")) {
        TKB.set_log("关闭更新")
        click(900, 630)
        sleep(2000)
    }
    if (zhaose("if isColor(367,699,0x000000,70) and isColor(430,697,0x000000,70) and isColor(372,1077,0xff0000,70) and isColor(494,1096,0xff0000,70) and isColor(312,1262,0xff0000,70) and isColor(518,1262,0xffffff,70) and isColor(616,1284,0xffffff,70) then")) {
        TKB.set_log("青少年模式")
        click(510, 1270)
        sleep(2000)
    }
    if (zhaose("if isColor(425,924,0x000000,70) and isColor(492,916,0x000000,70) and isColor(443,999,0x757575,70) and isColor(551,1005,0x757575,70) and isColor(367,1265,0xff0000,70) and isColor(507,1307,0xffffff,70) and isColor(607,1313,0xffffff,70) then") || zhaose("if isColor(450,918,0x000000,70) and isColor(468,918,0x000000,70) and isColor(554,935,0x000000,70) and isColor(603,932,0x000000,70) and isColor(635,935,0x000000,70) and isColor(716,962,0xffffff,70) and isColor(308,1257,0xff0000,70) and isColor(556,1299,0xffffff,70) and isColor(618,1296,0xffffff,70) and isColor(700,1298,0xff0000,70) then")) {
        TKB.set_log("版本更新")
        click(900, 630)
        sleep(2000)
    }
    if (zhaose("if isColor(362,780,0x000000,70) and isColor(418,781,0x000000,70) and isColor(701,786,0x000000,70) and isColor(705,819,0x000000,70) and isColor(899,758,0x9e9e9e,70) and isColor(403,1037,0xebebeb,70) and isColor(489,1198,0xbdbdbd,70) and isColor(526,1215,0xbdbdbd,70) then")) {
        TKB.set_log("西瓜好评")
        click(900, 760)
        sleep(3000)
    }
}

function input_yzm(text, position) {
    try {
        click(position[0], position[1])
        sleep(5000)
        if (zhaose("if isColor(111,1218,0xffffff,70) and isColor(782,1159,0xffffff,70) and isColor(43,1442,0xffffff,70) and isColor(911,1469,0xdde4ec,70) and isColor(915,1658,0xdde4ec,70) and isColor(320,1809,0xffffff,70) and isColor(799,1809,0xffffff,70) and isColor(864,1839,0xffffff,70) then")) {
            TKB.set_log("数字键盘")
            var aa = { '0': [556, 1835], '1': [315, 1335], '2': [550, 1330], '3': [770, 1320], '4': [310, 1490], '5': [540, 1500], '6': [720, 1490], '7': [310, 1490], '8': [535, 1660], '9': [770, 1660] }
            for (let i = 0; i < text.length; i++) {
                click(aa[text[i]][0], aa[text[i]][1])
                sleep(1000)
            }
        } else {
            TKB.set_log("输入异常，请检查输入法")
        }
    } catch (error) {
        TKB.set_log(error)
    }
}
// 西瓜视频  (v4.5.6)
function xgzc() {
    TKB.set_log('西瓜视频注册')
    var bb = TKB.getVerName("西瓜视频")
    if (bb != "4.5.6" && bb != false) {
        log("西瓜视频的版本不对")
        TKB.xiezai(dqbaoming)
    }
    var baom = getPackageName("西瓜视频")
    if (baom == null) {
        var bbd = TKB.wdjxiazai("西瓜视频", "4.5.6")
        if (bbd == false) {
            log("没安装成功西瓜视频")
            return false
        }
    }
    launch(dqbaoming)
    sleep(15000)
    var bb = 0
    var cs = 0
    var a = 0
    var tem = 0
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 40 * 60 * 1000) {
            TKB.set_log('时间够了退出')
            TKB.clear(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log('超时没注册成功')
            back()
            sleep(1000)
            TKB.clear(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (a == 0) {
                TKB.set_log("点击我")
                click(970, 1840)
                sleep(2000)
                a == 1
            }
            if (bb == 1 && tem == 0) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.set_log("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
            if (zhaose("if isColor(545,225,0x25f4ee,70) and isColor(564,281,0xfe2c55,70) and isColor(191,551,0xe8e8e9,70) and isColor(260,1152,0xc5c5c8,70) and isColor(535,1328,0x8a8b91,70) and isColor(540,1810,0xface15,70) and isColor(747,1808,0xface15,70) then")) {
                TKB.set_log("抖音手机号登录")
                if (bb == 0) {
                    TKB.set_log("先去获取号码")
                    bb = 1
                } else if (bb == 1) {
                    if (zh == false) {
                        TKB.set_log("没有获取到手机号")
                        return false
                    }
                    TKB.set_log("输入账号" + zh)
                    click(300, 550)
                    sleep(2000)
                    input_yzm(zh, [300, 550])
                    sleep(2000)
                    click(870, 700)
                    sleep(10000)
                }
                if (bb == 1) {
                    TKB.set_log("输入验证码")
                    yzm = TKB.huoquyzm("抖音")
                    if (cs > 2) {
                        TKB.set_log("不继续注册了")
                        return false
                    }
                    if (yzm == false) {
                        back()
                        sleep(100)
                        back()
                        sleep(2000)
                    } else {
                        TKB.set_log("输入验证码" + yzm)
                        click(400, 700)
                        sleep(500)
                        input_yzm(yzm, [400, 700])
                        sleep(3000)
                        click(540, 960)
                        sleep(5000)
                    }
                    cs = cs + 1
                }
            }
            if(zhaose("if isColor(192,829,0x212121,70) and isColor(185,848,0x212121,70) and isColor(210,828,0x212121,70) and isColor(307,830,0x212121,70) and isColor(431,830,0x212121,70) and isColor(474,1134,0x2a90d7,70) and isColor(742,1136,0x2a90d7,70) and isColor(840,1140,0x2a90d7,70) then")){
                TKB.set_log("绑定冲突")
                click(800, 1150)
                sleep(5000)
            }
            if(zhaose("if isColor(97,722,0xff0000,70) and isColor(185,744,0xff0000,70) and isColor(298,763,0xff0000,70) and isColor(407,773,0xff0000,70) and isColor(466,739,0xffffff,70) and isColor(534,752,0xffffff,70) and isColor(576,765,0xffffff,70) and isColor(614,772,0xffffff,70) and isColor(471,1091,0x222222,70) then")){
                TKB.set_log("立即登录")
                click(540, 760)
                sleep(5000)
            }
            if (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then")) {
                TKB.set_log("主页")
                click(970, 1840)
                sleep(2000)
            }
            if (zhaose("if isColor(681,131,0x000000,70) and isColor(708,141,0x000000,70) and isColor(733,139,0x000000,70) and isColor(780,138,0x030303,70) and isColor(821,140,0x030303,70) and isColor(898,145,0x000000,70) and isColor(937,144,0x000000,70)and isColor(1039,147,0x030303,70)  then")) {
                TKB.set_log("个人页面")
                swipe(600, 400, 600, 1700, 1000)
                sleep(2000)
            }
            if (zhaose("if isColor(263,277,0x000000,70) and isColor(297,278,0x000000,70) and isColor(385,287,0x000000,70) and isColor(405,279,0x000000,70) and isColor(459,279,0x000000,70) and isColor(872,330,0x6e6e6e,70) and isColor(910,332,0x6e6e6e,70) then")) {
                TKB.set_log("点击登录")
                click(130, 350)
                sleep(3000)
            }
            if (zhaose("if isColor(84,172,0x171723,70) and isColor(926,156,0x161823,70) and isColor(989,192,0x161823,70) and isColor(357,1157,0xfe2c55,70) and isColor(553,1153,0xffffff,70) and isColor(503,1299,0x04498d,70) and isColor(614,1773,0x04498d,70) and isColor(676,1795,0x04498d,70) then")) {
                TKB.set_log("跳转登录")
                click(550, 1150)
                sleep(2000)
            }
            if (zhaose("if isColor(133,284,0x212121,70) and isColor(174,283,0x212121,70) and isColor(218,285,0x212121,70) and isColor(294,287,0x212121,70) and isColor(392,282,0x212121,70) and isColor(424,282,0x212121,70) and isColor(504,281,0x212121,70) and isColor(1001,155,0x212121,70) then")) {
                TKB.set_log("登录界面")
                click(220, 1770)
                sleep(2000)
            }
            if (zhaose("if isColor(468,583,0x1b0c1b,70) and isColor(545,579,0x25f4ee,70) and isColor(553,601,0xefefef,70) and isColor(351,1009,0xff0000,70) and isColor(505,1021,0xffffff,70) and isColor(565,710,0xfe2c55,70) then")) {
                TKB.set_log("其他登录方式")
                click(530, 1020)
                sleep(2000)
            } else if (zhaose("if isColor(140,283,0x212121,70) and isColor(217,572,0x757575,70) and isColor(195,1035,0xff0000,70) and isColor(454,1039,0xffffff,70) and isColor(1003,154,0x212121,70) and isColor(515,1398,0x000000,70) then") || zhaose("if isColor(417,1383,0x000000,70) and isColor(443,1384,0x000000,70) and isColor(463,1379,0x000000,70) and isColor(500,1380,0x000000,70) and isColor(553,1379,0xffffff,70) and isColor(607,1379,0x000000,70) and isColor(657,1379,0x000000,70) and isColor(671,1409,0x000000,70) then")) {
                TKB.set_log("其他登录方式1")
                click(520, 1400)
                sleep(2000)
            }
            if (zhaose("if isColor(409,1305,0xc0c0c0,70) and isColor(417,1306,0x000000,70) and isColor(462,1302,0x000000,70) and isColor(500,1302,0x202020,70) and isColor(548,1324,0x000000,70) and isColor(607,1301,0x000000,70) and isColor(589,1339,0x000000,70) and isColor(658,1302,0x060606,70) and isColor(671,1332,0x000000,70) then")) {
                TKB.set_log("其他登录方式2")
                    //抖音登录主界面
                click(520, 1320)
                sleep(2000)
            }
            if (zhaose("if isColor(468,282,0xffffff,70) and isColor(495,309,0xfe1247,70) and isColor(585,509,0xe8e8e9,70) and isColor(724,1490,0xfe2c55,70) and isColor(714,1814,0xface15,70) then") || text('抖音短视频授权登录').exists() && text('授权并登录').exists() || zhaose("if isColor(466,270,0xffffff,70) and isColor(530,353,0xffffff,70) and isColor(178,1340,0x161823,70) and isColor(171,1492,0xfe2c55,70) and isColor(549,1500,0xffffff,70) and isColor(642,1510,0xffffff,70) and isColor(685,1510,0xfe2c55,70) and isColor(914,1528,0xfe2c55,70) then")) {
                TKB.set_log("抖音登录")
                click(540,1510)
                sleep(2000)
            }
            if (zhaose("if isColor(399,918,0xcfdde5,70) and isColor(455,946,0xcddbe4,70) and isColor(700,953,0xf5505b,70) and isColor(702,987,0x464665,70) and isColor(446,1215,0xefefef,70) and isColor(492,1227,0x000000,70) and isColor(521,1229,0x000000,70) and isColor(572,1228,0x000000,70) then")) {
                TKB.set_log("没网")
                click(530, 1230)
                sleep(2000)
            }
            if (zhaose("if isColor(70,152,0x000000,70) and isColor(1001,156,0x212121,70) and isColor(465,735,0xbdbdbd,70) and isColor(500,751,0xffffff,70) and isColor(564,705,0xbdbdbd,70) and isColor(558,944,0x9e9e9e,70) and isColor(371,1357,0xff0000,70) and isColor(514,1392,0xffffff,70) and isColor(218,316,0x212121,70) then") || zhaose("if isColor(104,241,0xffffff,70) and isColor(533,699,0xbdbdbd,70) and isColor(499,749,0xffffff,70) and isColor(543,795,0xffffff,70) and isColor(1001,154,0x212121,70) and isColor(328,1365,0xff0000,70) and isColor(508,1367,0xffffff,70) and isColor(703,1388,0xff0000,70) then")) {
                TKB.set_log("完善信息")
                click(540, 1400)
                sleep(2000)
            }
            if (zhaose("if isColor(190,893,0x212121,70) and isColor(259,894,0x212121,70) and isColor(712,900,0x212121,70) and isColor(720,900,0x212121,70) and isColor(800,897,0x212121,70) and isColor(436,1057,0xffffff,70) and isColor(655,1074,0x2a90d7,70) and isColor(787,1074,0x2a90d7,70) then")){
                TKB.set_log("使用这个名字")
                click(640, 1080)
                sleep(2000)
            }
            if (zhaose("if isColor(73,121,0x000000,70) and isColor(715,123,0x000000,70) and isColor(912,119,0x000000,70) and isColor(179,528,0x000000,70) and isColor(264,531,0x000000,70) and isColor(540,536,0xebebeb,70) and isColor(706,528,0x000000,70) and isColor(865,335,0x6e6e6e,70) and isColor(1032,339,0x9b9b9b,70) then")) {
                TKB.set_log("登录成功1")
                sleep(2000)
                return true
            }
            if (zhaose("if isColor(375,119,0x000000,70) and isColor(431,115,0x000000,70) and isColor(849,115,0x222222,70) and isColor(461,336,0xb1b1b1,70) and isColor(676,330,0x9e9e9e,70) and isColor(752,438,0x9e9e9e,70) then") || zhaose("if isColor(61,138,0x000000,70) and isColor(834,122,0x222222,70) and isColor(830,137,0x222222,70) and isColor(873,155,0x222222,70) and isColor(983,122,0x212121,70) and isColor(984,153,0x212121,70) and isColor(613,432,0x9e9e9e,70) and isColor(682,437,0x9e9e9e,70) and isColor(751,440,0x9e9e9e,70) then")) {
                TKB.set_log("登录成功")
                back()
                sleep(1000)
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.set_log(error)
        }
    }
}

_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
var dl = xgzc()
if (dl == true) {
    var msg_num = 1
    var msg = '成功'
    var notice_name = 'after_script'
} else {
    var msg_num = 0
    var msg = '失败'
    var notice_name = 'stop'
}
TKB.send_message({notice_name: notice_name,notice_content: [msg_num, msg]})
