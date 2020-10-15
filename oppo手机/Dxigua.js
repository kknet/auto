log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/Dmytkb.js')
sleep(2000)
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

var dqbaoming = "com.ss.android.article.video" //该项目包名
function zonghe() {}
//西瓜视频养号
function xgyh() {
    TKB.xgsrizhi('西瓜养号')
    // TKB.qinglihh()
    sleep(3000)
    launch(dqbaoming)
    TKB.xgsrizhi('打开西瓜')
    sleep(6000)
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
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh(dqbaoming)
                break
            }
            if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('观看视频中')
                TKB.xgsrizhi('观看视频中')
                sj = random(1, 100)
                sleep(10000)
            } else if ((new Date()).getTime() - TSD < sp_time * 1000 && is_live == true) {
                toastLog('下滑')
                swipe(1400, 900, 1400, 180, 1000)
                sleep(1000)
                device.setMusicVolume(0)
                sleep(3000)
                num++
                sp_time = random(150, 210)
                TKB.xgsrizhi('观看时间:' + sp_time)
                TSD = (new Date()).getTime()
            }
            if (tem == 0) {
                TKB.xgsrizhi("主页")
                click(100, 1840)
                sleep(5000)
                TSD = (new Date()).getTime()
                tem = 1
            }
            if (zhaose("if isColor(944,1877,0x4c4c4c,70) and isColor(952,1877,0x4c4c4c,70) and isColor(958,1876,0x4c4c4c,70) and isColor(979,1876,0x4c4c4c,70) and isColor(992,1876,0x4c4c4c,70) and isColor(946,1902,0x4c4c4c,70) and isColor(966,1902,0x4c4c4c,70) and isColor(994,1902,0x4c4c4c,70) then")) {
                TKB.xgsrizhi("还在主页")
                is_live = false
                sleep(2000)
            }
            if (is_live == false && zhaose("if isColor(165,563,0xffffff,70) and isColor(371,566,0xffffff,70) and isColor(553,572,0xffffff,70) and isColor(727,565,0xffffff,70) and isColor(913,571,0xffffff,70) and isColor(938,610,0xffba26,70) then")) {
                TKB.xgsrizhi("重新播放")
                click(85, 880) //点击重播
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == false && zhaose("if isColor(165,840,0xffffff,70) and isColor(366,842,0xffffff,70) and isColor(554,842,0xffffff,70) and isColor(730,839,0xffffff,70) and isColor(914,844,0xffffff,70) and isColor(938,881,0xffc02f,70) then")) {
                TKB.xgsrizhi("重新播放1")
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
                TKB.xgsrizhi("点击播放1")
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
                TKB.xgsrizhi("点击播放")
                click(540, 630)
                sleep(10000)
                click(800, 650)
                sleep(2000)
                click(1000, 880)
                sleep(2000)
                is_live = true
            }
            if (is_live == true && sj > 98) {
                TKB.xgsrizhi("随机下滑")
                swipe(1400, 900, 1400, 180, 1000)
                TSD = (new Date()).getTime()
                device.setMusicVolume(0)
                sleep(2000)
            }
            if (is_live == true && num > 10) {
                TKB.xgsrizhi("去刷新")
                back()
                sleep(3000)
                is_live == false
                tem = 0
                device.setMusicVolume(0)
                TSD = (new Date()).getTime()
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

xgyh()