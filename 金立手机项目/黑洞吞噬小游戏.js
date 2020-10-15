//广告跳过id com.tudou.heidong.yz:id/tt_splash_skip_btn
//弹窗广告id com.tudou.heidong.yz:id/tt_insert_express_dislike_icon_img
log("tKB")
waitFor()
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

//下载应用
function xzm(aa) {
    //文件更新地址
    log("下载应用")
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
    log("安装")
    xzm(lujing)
    var TT = (new Date()).getTime() - 100 * 1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BB > 5 * 60 * 1000) {
            log("超时退出")
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60 * 1000) {
            log("超时清理一次换存")
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
            log("设置")
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists()) {
            log("安装")
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists()) {
            log("已经安装成功")
            toastLog("已经安装完成")
            var gh = (new Date()).getTime()
            var ccd = 0
            while (1) {
                if ((new Date()).getTime() - gh > 30 * 1000) {
                    log("超时退出")
                    break
                }
                if (text("删除安装包").exists() && text("取消").exists()) {
                    log("删除安装包")
                    click("取消")
                    sleep(2000)
                }
                if (text('关').exists()) {
                    log('点击打开')
                    click('关')
                    sleep(2000)
                }
                if (id('amigo:id/amigo_switchWidget').exists() && ccd > 3) {
                    log('查看是否打开')
                    try {
                        var bb = id("amigo:id/amigo_switchWidget").findOnce().text();
                        log(bb)
                        if (bb == "开") {
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
            log("添加安装权限")
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false) {
                var aa = id("android:id/switch_widget").findOnce().bounds();
                log(aa.centerX())
                log(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100 * 1000
                qinglihh()
            }
            back()
            sleep(2000)
        }
        if (text("删除安装包").exists() && text("取消").exists()) {
            log("删除安装包")
            click("取消")
            sleep(2000)
        }
    }
}

function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;
    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;

    tSquared = t * t;
    tCubed = tSquared * t;
    result = {
        "x": 0,
        "y": 0
    }
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
    return result;
}

//仿真随机带曲线滑动
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
function sml_move(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    }

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    }
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    }
    var dx3 = {
        "x": zx,
        "y": zy
    }
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    }
    // log(point[3].x)
    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }
    // log(xxy);
    gesture.apply(null, xxy);
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
//找色
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

function BlackGame() {
    log('黑洞游戏启动')
    var a = 0
    launch('com.tudou.heidong.yz')
    sleep(2000)
    var start_time
    var st = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - st> 15*60 * 1000) {
                log('超时结束')
                break
            }
            findeclick('text', '始终同意', '800')
            findeclick('id', 'com.tudou.heidong.yz:id/tt_splash_skip_btn', '800') //打开app广告跳过
            findeclick('id', 'com.tudou.heidong.yz:id/tt_insert_express_dislike_icon_img', '800') //弹窗广告id
            if (zhaose("if isColor(299,382,0xffffff,70) and isColor(419,403,0x1a99cc,70) and isColor(544,338,0xffde03,70) and isColor(757,443,0xffffff,70) and isColor(319,1500,0x78c3de,70) and isColor(408,1522,0xfffefe,70) and isColor(722,1522,0xffffff,70) then")){
                 //每日签到
                 log('本日奖励')
                 click(random(375, 475), random(1500, 1550))
                 sleep(2000)
            }
            if (zhaose("if isColor(338,1230,0xffd13c,70) and isColor(460,1284,0xffffff,70) and isColor(778,1378,0xffd13c,70) and isColor(316,1374,0xffd13c,70) and isColor(781,1240,0xffd13c,70) then") && a == 0) {
                //开始游戏
                sleep(1000)
                log('开始游戏')
                click(random(450, 625), random(1270, 1360))
                sleep(2000)
                a = 1
            }
            if (zhaose("if isColor(50,1229,0x14b1f3,70) and isColor(311,1223,0xfcfcfc,70) and isColor(453,1225,0xffffff,70) and isColor(511,1227,0xffffff,70) and isColor(571,1232,0xffffff,70) and isColor(121,1353,0x14b1f3,70) and isColor(483,1369,0x14b1f3,70) then")) {
                //匹配中
                log('匹配中')
                sleep(2000)
            }
            if (zhaose("if isColor(77,58,0x20f800,70) and isColor(90,86,0x20f800,70) and isColor(73,101,0x20f800,70) and isColor(115,61,0x20f800,70) and isColor(151,82,0x20f800,70) and isColor(151,103,0x20f800,70) then")) {
                //左上角的时间颜色点
                start_time = (new Date()).getTime()
                var run_time = (new Date()).getTime()
                while (1) {
                    if ((new Date()).getTime() - start_time > 120 * 1000) {
                        log('这局游戏结束了')
                        break
                    }
                    if ((new Date()).getTime() - run_time > random(3, 5) * 1000) {
                        log('滑动一下')
                        click(460, 1366)
                        sml_move(414,1400, random(0,700), random(1100,1600), random(2000,5000))
                        run_time = (new Date()).getTime()
                    }
                }
            }
            if (zhaose("if isColor(259,281,0x6e35a8,70) and isColor(499,296,0xffffff,70) and isColor(372,1155,0xfdc109,70) and isColor(462,1189,0xffffff,70) and isColor(331,1425,0xf0f8ff,70) and isColor(796,301,0x6e35a8,70) then")) {
                log('游戏结束')
                click(random(400, 600), random(1160, 1220))
                sleep(2000)
            }
            if (zhaose("if isColor(303,291,0x6e35a8,70) and isColor(450,318,0xffffff,70) and isColor(596,332,0xffffff,70) and isColor(771,343,0x6e35a8,70) and isColor(357,1183,0x7855ed,70) and isColor(414,1187,0xffffff,70) and isColor(696,1220,0x7855ed,70) then")) {
                //立即使用使用皮肤的界面
                log('立即使用')
                click(472,1160)
                sleep(2000)
            }
            if (zhaose("if isColor(400,1627,0x88cd32,70) and isColor(415,1666,0x88cd32,70) and isColor(528,1613,0x88cd32,70) and isColor(500,1654,0xe6e581,70) and isColor(637,1644,0x88cd32,70) and isColor(642,1678,0x88cd32,70) then")) {
                log('继续')
                //游戏结束点击继续
                // click(random(465,605),random(1620,690))
                click(540, 1650)
                sleep(2000)
            }
            findeclick('text', '取消', '800') //取消安装
            findeclick('id', 'com.tudou.heidong.yz:id/tt_video_ad_close', '800') //关闭30秒的广告
            if (zhaose("if isColor(338,1230,0xffd13c,70) and isColor(460,1284,0xffffff,70) and isColor(778,1378,0xffd13c,70) and isColor(316,1374,0xffd13c,70) and isColor(781,1240,0xffd13c,70) then") && a == 1) {
                //第二次找到开始按钮，一轮结束了
                return true
            }
        } catch (error) {
            log(error)
            sleep(2000)
        }
    }
}
var i = 0
function main(){
    // xzm(aa)
    // anz(path)
    while(1){
        i++
        log('第'+i+'次')
        BlackGame()
    }
}

main()
