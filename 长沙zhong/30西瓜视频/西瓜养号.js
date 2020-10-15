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
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",70)")
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

//西瓜视频养号
function xgyh() {
    TKB.set_log('西瓜养号')
    TKB.clear()
    sleep(3000)
    launch(dqbaoming)
    TKB.set_log('打开西瓜')
    sleep(15000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var sp_time = random(150, 210)
    var is_live = false
    var tem = 0
    var num = 0
    var sj = random(1, 100)
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000 && is_live == true) {
                TKB.set_log('时间够了退出')
                TKB.clear(dqbaoming)
                break
            }
            if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('观看视频中')
                sj = random(1, 500)
                sleep(10000)
            } else if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('下滑')
                swipe(1400, 900, 1400, 180, 1000)
                sleep(1000)
                device.setMusicVolume(0)
                sleep(3000)
                num++
                TSD = (new Date()).getTime()
            }
            if (tem == 0) {
                TKB.set_log("主页")
                click(100, 1840)
                sleep(5000)
                TSD = (new Date()).getTime()
                tem = 1
            }
            if (zhaose("if isColor(942,1877,0x4c4c4c,70) and isColor(954,1874,0x525252,70) and isColor(963,1875,0x4c4c4c,70) and isColor(980,1873,0x575757,70) and isColor(975,1902,0x4c4c4c,70) and isColor(992,1873,0x4d4d4d,70) and isColor(993,1890,0x4c4c4c,70) and isColor(993,1902,0x4c4c4c,70) then") || zhaose("if isColor(944,1884,0x757575,70) and isColor(954,1882,0x757575,70) and isColor(963,1882,0x777777,70) and isColor(979,1881,0x7c7c7c,70) and isColor(974,1907,0x757575,70) and isColor(990,1906,0x757575,70) and isColor(989,1881,0x757575,70) and isColor(990,1895,0x757575,70) then")) {
                TKB.set_log("还在主页")
                is_live = false
                sleep(2000)
            }
            if (is_live == false && zhaose("if isColor(165,563,0xffffff,70) and isColor(371,566,0xffffff,70) and isColor(553,572,0xffffff,70) and isColor(727,565,0xffffff,70) and isColor(913,571,0xffffff,70) and isColor(938,610,0xffba26,70) then")) {
                TKB.set_log("重新播放")
                click(85, 880) //点击重播
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == false && zhaose("if isColor(165,840,0xffffff,70) and isColor(366,842,0xffffff,70) and isColor(554,842,0xffffff,70) and isColor(730,839,0xffffff,70) and isColor(914,844,0xffffff,70) and isColor(938,881,0xffc02f,70) then")) {
                TKB.set_log("重新播放1")
                //关注的情况下
                click(85, 1150) //点击重播
                sleep(10000)
                click(800, 900)
                sleep(2000)
                click(1000, 1150)
                sleep(2000)
                is_live = true
            }
            if (tem == 1 && is_live == false && zhaose("if isColor(28,588,0xffffff,70) and isColor(208,593,0xffffff,70) and isColor(370,591,0xffffff,70) and isColor(549,590,0xffffff,70) and isColor(745,590,0xffffff,70) and isColor(919,586,0xffffff,70) and isColor(1049,590,0xffffff,70) then")) {
                TKB.set_log("点击播放1")
                //关注的情况下
                click(540, 900)
                sleep(10000)
                click(800, 900)
                sleep(2000)
                click(1000, 1150)
                sleep(2000)
                is_live = true
            }
            if (tem == 1 && is_live == false) {
                TKB.set_log("点击播放")
                click(540, 630)
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == true && sj > 495) {
                TKB.set_log("随机下滑")
                swipe(1400, 900, 1400, 180, 1000)
                TSD = (new Date()).getTime()
                device.setMusicVolume(0)
                sleep(2000)
            }
            if (is_live == true && num > 10) {
                TKB.set_log("去刷新")
                back()
                sleep(3000)
                is_live == false
                tem = 0
                device.setMusicVolume(0)
                TSD = (new Date()).getTime()
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
    setInterval(() => {
        TKB.send_message({notice_name: "task_time_stamp",notice_content: (new Date()).getTime()})
    }, 15 * 1000)
})
xgyh()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})
