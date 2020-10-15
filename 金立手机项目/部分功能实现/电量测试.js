log("tKB")
var TKB = require('/sdcard/tkb2.js');
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var yhbh = sbxx_table[2] //手机编号  weixinflag

function zonghe() {
    if (text("稍后").exists() && text("去打开").exists()) {
        click("稍后")
        sleep(2000)
    }
    if (text('打开看看').exists()) {
        click('打开看看')
        sleep(2000)
    }
    if (text("刷新").exists() && text("网络错误").exists()) {
        click("刷新")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        click("始终同意")
        sleep(2000)
    }
    if (text('允许访问你的"位置"？').exists() && text("以后再说").exists()) {
        click("以后再说")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        click("我知道了")
        sleep(2000)
    }
    if (text("下次再说").exists()) {
        click("下次再说")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        sleep(1200)
    }

    if (textContains("是否用流量观看").exists()) {
        click("确认");
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        try {
            var ss = text("以后再说").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
        }
    }
    if (desc("以后再说").exists()) {
        try {
            var ss = desc("以后再说").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
        }
    }

    if (text("继续观看").exists()) {
        try {
            var ss = text("继续观看").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
        }
    }
    if (desc("继续观看").exists()) {
        try {
            var ss = desc("继续观看").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
        }
    }
    if (text("跳过").exists()) {
        click("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
        }
    }
    if (text("立即赠送").exists()) {
        back()
        sleep(1000)
    }
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        sleep(200)
        back()
        sleep(3000)
    }
    if (text("允许").exists()) {
        click("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        click(910, 430)
        sleep(1200)
    }
}
// console.log(Math.round(new Date()))
// console.log(device.isCharging())
// console.log(device.getBattery())
function up_result(yhbh, dl_flag, dl) {
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 60 * 1000) {
                console.log("超时退出")
                return false
            }
            if (dl_flag == true) {
                var dl_flagx = 1
            } else {
                var dl_flagx = 0
            }
            var url = 'http://47.114.99.72/api.php/potal/auto/up_dianliang?user_id=9&der_id=' + yhbh + '&dl_flag=' + dl_flagx + '&dianliang=' + dl
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["code"] == "0") {
                    toastLog("上传结果成功")
                    return true
                } else {
                    console.log("失败:" + r_obj["msg"])
                    return false
                }
            } else {
                console.log("上传结果失败")
                sleep(3000)
            }
        } catch (error) {
            console.log(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传结果中...")
        sleep(random(100, 10000))
    }
}



_THREADSS = threads.start(function () {
    var rb = (new Date()).getTime()
    var Minutes = [0, 10, 20, 30, 40, 50]
    console.show()
    while (1) {
        if ((new Date()).getTime() - rb > 5000 * 60 * 1000) {
            console.log('全部执行完毕，退出')
            TKB.qinglihh()
        }
        var myDate = new Date();
        if ((myDate.getMinutes() == Minutes[0] || myDate.getMinutes() == Minutes[1] || myDate.getMinutes() == Minutes[2] || myDate.getMinutes() == Minutes[3] || myDate.getMinutes() == Minutes[4] || myDate.getMinutes() == Minutes[5]) && myDate.getSeconds() == 0) {
            var dl_flag = device.isCharging()
            var dl = device.getBattery()
            if (dl > 100) {
                dl_flag == true
                dl == 100
            }
            console.log('时间：'+myDate.getHours()+':'+myDate.getMinutes()+'充电状态' + dl_flag + '电量' + dl)
            toastLog('时间：'+myDate.getHours()+':'+myDate.getMinutes()+'充电状态' + dl_flag + '电量' + dl)
            TKB.xgsrizhi('时间：'+myDate.getHours()+':'+myDate.getMinutes()+'充电状态' + dl_flag + '电量' + dl)
            up_result(yhbh, dl_flag, dl)
            sleep(5000)
        }
    }
});

//新养号
function dyxyh() {
    TKB.qinglihh()
    sleep(6000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime() //看直播的时间
    var stt = 5000
    var TTguank = (new Date()).getTime()
    var dinz = random(20, 50)
    var zbt = random(20, 30) //视频观看时长
    var gzx = 0
    var dzx = 0
    var gjc = ''
    var a = 0
    var ssx = random(1, 3)
    // var xs = TKB.zhid(sbip, run_id)
    // var gz = xs['关注百分比']
    // var dz = xs['点赞百分比']
    // var cz = xs['是否垂直']
    var gz = 0
    var dz = 0
    if (gz == 0 || gz == '0') {
        gzx = 10
    } else {
        gzx = gz
    }
    if (dz == 0 || dz == '0') {
        dzx = 30
    } else {
        dzx = dz
    }
    var cz = '是'
    if (cz == '是') {
        // var gjc = xs['关键词']
        var gjc = '美女|腿|滤镜|颜|胸|女生|美人|最美|颜值|漂亮|闺蜜|惊艳|长腿|高颜|舞蹈|可爱|性感|姐姐|小姐姐|女友|火箭少女|创造营|换装|jk|jk'
        var ss = gjc.split("|")
    }
    sleep(3000)
    var dj = random(1, 100)
    var ll = 0 //直播
    var tem = 0
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - TSD > stt * 60 * 1000) {
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
                if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")) {
                    TSD = (new Date()).getTime()
                    if (!text("推荐").exists()) {
                        click("首页")
                        sleep(300)
                        click(100, 1830)
                        sleep(2000)
                    } else {
                        while (1) {
                            zonghe()
                            if (tem == 0) {
                                click("推荐")
                                sleep(random(3, 4) * 1000);
                                swipe(500, 1600, 600, 400, 1200);
                                tem = 1
                            } else {
                                if ((new Date()).getTime() - ssd > 5000 * 60 * 1000 && ll < 5) {
                                    click(330, 1830)
                                    sleep(2000)
                                    ll = ll + 1
                                    break
                                } else {
                                    var x = 0
                                    var y = 0
                                    var pp = 0
                                    var dzl = 0
                                    var nr = ''
                                    var dzs = ''
                                    if (cz == '是') {
                                        if (id('com.ss.android.ugc.aweme:id/aoa').exists()) {
                                            comment = id('com.ss.android.ugc.aweme:id/aoa').find()
                                            comment.forEach(item => {
                                                var a = item.text();
                                                x++
                                                if (Number(x) == 2) {
                                                    dzs = a
                                                }
                                            })
                                        }
                                        if (id('com.ss.android.ugc.aweme:id/a91').exists()) {
                                            comment = id('com.ss.android.ugc.aweme:id/a91').find()
                                            comment.forEach(item => {
                                                var b = item.text();
                                                y++
                                                if (Number(y) == 2) {
                                                    var nr = b
                                                }
                                            })
                                        }
                                        for (var o = 0; o < ss.length; o++) {
                                            var x = ss[o]
                                            if (nr.indexOf("#" + ss[o]) != -1) {
                                                pp == 1
                                            }
                                        }
                                        if (dzs.indexOf("w") != -1) {
                                            var st = dzs.split(".")
                                            if (Number(st[0]) > 0) {
                                                dzl = 1
                                            }
                                        }
                                        if (pp != 1 && dzs.indexOf("w") == -1 && dzl == 0 || pp != 1 && dzs == "赞") {
                                            swipe(500, 1600, 600, 400, 1200);
                                        }
                                        if (text('点击进入直播间').exists() || text('直播中').exists()) {
                                            swipe(500, 1600, 600, 400, 1200);
                                        }
                                    }
                                    if (pp == 1 || dzl == 1) {
                                        sleep(random(1, 2) * 1000);
                                        ssd = (new Date()).getTime() 
                                        dinz = random(20, 50)
                                        dj = random(1, 100)
                                        dzl = 0
                                        pp = 0
                                        var TTguank = (new Date()).getTime()
                                        while (1) {
                                            zonghe()
                                            if (text('点击进入直播间').exists() || text('直播中').exists()) {
                                                swipe(500, 1600, 600, 400, 1000)
                                                sleep(random(1, 2) * 1000)
                                                dinz = random(20, 50)
                                            }
                                            if ((new Date()).getTime() - TTguank < dinz * 1000) {
                                                sleep(3000)
                                            } else if ((new Date()).getTime() - TTguank > dinz * 1000) {
                                                dzl = 0
                                                if (id('com.ss.android.ugc.aweme:id/a9r').exists()) {
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                    back()
                                                    sleep(500)
                                                }
                                                swipe(500, 1600, 600, 400, 1200);
                                                sleep(random(1, 2) * 1000);
                                                dinz = random(20, 50)
                                                dj = 101
                                                break
                                            } else {
                                                if (dj < dzx) {
                                                    click(1000, 900)
                                                    sleep(1000)
                                                    swipe(500, 1600, 600, 400, 1200);
                                                    dinz = random(20, 50)
                                                    dj = 101
                                                    break
                                                } else {
                                                    if (dj < 5) {
                                                        click(980, 1110)
                                                        sleep(2000)
                                                        var sb = random(1, 5)
                                                        if (sb == 1) {
                                                            sleep(1000)
                                                            click(150, 1870)
                                                            sleep(2000)
                                                            setText("[" + bq[random(1, bq.length)] + "]")
                                                            sleep(1000)
                                                            if (id("com.ss.android.ugc.aweme:id/a__").exists()) {
                                                                var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
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
                                                        zonghe()
                                                        back()
                                                        sleep(2000)
                                                        dj = 101
                                                    } else {
                                                        if (dj < gzx) {
                                                            if (id('com.ss.android.ugc.aweme:id/bku').exists() && id('com.ss.android.ugc.aweme:id/bku').exists()) {
                                                                click(990, 630)
                                                                sleep(1000)
                                                            } else {
                                                                click(990, 750)
                                                                sleep(1000)
                                                            }
                                                            dj = 101
                                                            break
                                                        } else {
                                                            sleep(3000)
                                                            TSD = (new Date()).getTime()
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        dyxyh()
    } catch (error) {
        toastLog('执行遇到错误' + error);
    }
    sleep(3000)
    threads.shutDownAll();
}
main();