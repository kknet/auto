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
    }else if (kj == "desc") {
        var w = desc(te).findOnce();
        if (w != null) {
            log("发现desc:" + te)
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
function shebei(){
    var start_time = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - start_time > 120 * 1000) {
            log("时间够了退出")
            // TKB.xgzhzt(sbip, user_id, yhbh, app_id, "注册失败", "2")
            return false
        }
        if (zhaose("if isColor(117,1743,0xeccb59,70) and isColor(228,1805,0xf8f9fb,70) and isColor(275,1834,0x9268cb,70) and isColor(271,1813,0xffffff,70) and isColor(304,1831,0x081d26,70) and isColor(307,1874,0x0c3b50,70) and isColor(360,1831,0x0c3a4f,70) then")){
            sleep(1000)
            //听诊器
            log('听诊器')
            // swipe(264, 1794, 930, 1546, 1000)//听诊器
            gesture(1200, [264, 1794], [930, 1546])
            sleep(8000)
        }
        if (zhaose("if isColor(394,1763,0xedcc5a,70) and isColor(476,1766,0x1b3a47,70) and isColor(498,1843,0xb9bebe,70) and isColor(521,1819,0xffffff,70) and isColor(579,1753,0x40b5ff,70) and isColor(582,1876,0x0c3a4f,70) and isColor(634,1831,0x0c3a4f,70) then")){
            sleep(1000)
            // click(543, 1794)
            log('温度计')
            // swipe(811, 1794, 872, 1638, 1000)//温度计
            gesture(1500, [543, 1794], [528, 1010])
            sleep(8000)
        }
        if (zhaose("if isColor(686,1779,0xecc159,70) and isColor(765,1813,0xdef4ff,70) and isColor(784,1822,0xed3661,70) and isColor(832,1794,0xb62e9e,70) and isColor(853,1803,0x926eff,70) and isColor(855,1873,0x0c3b50,70) and isColor(902,1831,0x0c3a4f,70) then")){
            sleep(1000)
            log('诊脉器')
            //诊脉器
            // swipe(811, 1794, 872, 1638, 1000)//诊脉器
            gesture(1200, [811, 1794], [872, 1638])
            sleep(8000)
        }
        if (zhaose("if isColor(420,1729,0xffa47f,70) and isColor(612,1741,0x3f63ee,70) and isColor(651,1717,0x84a2ff,70) and isColor(750,1739,0xd2e7f1,70) and isColor(781,1724,0xed3762,70) and isColor(839,1622,0xb930a1,70) and isColor(884,1587,0x926dff,70) then")){
            //诊脉器的点击
            log('诊脉器点击')
            click(650, 1710)
            sleep(2000)
            click(650, 1710)
            sleep(2000)
        }
        if (zhaose("if isColor(582,254,0xac813d,70) and isColor(655,251,0xfefefe,70) and isColor(696,256,0xde1674,70) and isColor(697,286,0x83cfff,70) and isColor(783,330,0xde1674,70) and isColor(896,305,0xde1674,70) and isColor(963,266,0x74abff,70) and isColor(1040,364,0xb3b3b3,70) and isColor(532,1085,0x982891,70) then")){
            //设备全部使用结束点击下一步
            log('下一步')
            click(730, 300)
            sleep(2000)
            break
        }
        if (zhaose("if isColor(49,308,0xde1674,70) and isColor(245,634,0xffb598,70) and isColor(236,1095,0x8d294c,70) and isColor(193,1445,0xff966b,70) and isColor(84,1801,0x236a89,70) and isColor(50,1726,0xeccb59,70) and isColor(1007,1801,0x236a89,70) then")) {
            var img = captureScreen();
            var point = findColor(img, "#2186fc");
            if (point) {
                log("坐标为(" + point.x + ", " + point.y + ")");
                click(point.x, point.y)
            } else {
                click(1006, 1802)
                sleep(100)
                click(1006, 1802)
                sleep(100)
                click(1006, 1802)
                sleep(100)
            }
        }
        if (depth(14).boundsInside(0, 0, 300,250).exists() || depth(12).boundsInside(0, 0, 300,250).exists()) {
            sleep(5000)
            log('看广告中')
            pdgg = 0 
            var TB = (new Date()).getTime()
        }
        findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_video_ad_close', '800') //关闭30秒的广告
        findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_splash_skip_btn', '800') //打开app广告跳过
        findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_video_ad_close_layout', '800') //关闭30秒的广告
        findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_insert_express_dislike_icon_img', '800') //弹窗广告id
    }
}
function tattooGame() {
    log('黑洞游戏启动')
    var a = 0
    launch('com.td.wzjy.qmfj.wsxjj.ky')
    sleep(2000)
    while (1) {
        try {
            if ((new Date()).getTime() - st> 15*60 * 1000) {
                log('超时结束')
                break
            }
            findeclick('text', '始终同意', '800')
            findeclick('desc', '跳过', '800')
            findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_video_ad_close', '800') //关闭30秒的广告
            findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_splash_skip_btn', '800') //打开app广告跳过
            findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_video_ad_close_layout', '800') //关闭30秒的广告
            findeclick('id', 'com.td.wzjy.qmfj.wsxjj.ky:id/tt_insert_express_dislike_icon_img', '800') //弹窗广告id
            if (zhaose("if isColor(119,1695,0xde1674,70) and isColor(121,1678,0xffffff,70) and isColor(230,1264,0x3f3f3f,70) and isColor(985,1208,0xf5fff9,70) and isColor(855,1590,0x060606,70) then")) {
                //开始游戏
                log('开始游戏')
                click(random(500, 600), random(1015, 1140))
                sleep(2000)
            }
            if (zhaose("if isColor(297,602,0xc75aff,70) and isColor(751,584,0xc75aff,70) and isColor(132,933,0x34505c,70) and isColor(241,1173,0x011c5a,70) and isColor(466,968,0xffbc9c,70) then")) {
                //第一个女性角色
                sleep(1000)
                log('选择第一个')
                click(random(480, 570), random(930, 980))
                sleep(2000)
            }
            if (zhaose("if isColor(720,285,0xb08747,70) and isColor(630,425,0x292929,70) and isColor(275,1051,0x303030,70) and isColor(95,1810,0xdaa13e,70) and isColor(223,1805,0xfbfcfd,70) and isColor(575,1752,0x40b5ff,70) and isColor(917,247,0xde1674,70) then")) {
                //女生设备使用的界面
                log('设备使用')
                shebei()
            }
            if (zhaose("if isColor(81,253,0xde1674,70) and isColor(687,494,0x0b2563,70) and isColor(263,921,0xe8e8e8,70) and isColor(314,917,0xa10025,70) and isColor(621,925,0xe1e1e1,70) and isColor(690,924,0xa10025,70) and isColor(779,919,0xa10025,70) then")) {
                //手臂后颈腰背界面
                log('立即使用')
                click(354, 743)
                sleep(2000)
                click(944, 307)
            }
            if (zhaose("if isColor(67,253,0xde1674,70) and isColor(277,803,0xffa783,70) and isColor(665,1073,0xffc5ae,70) and isColor(992,1157,0x02c9af,70) and isColor(45,1725,0xeccb59,70) and isColor(76,1810,0x236d8c,70) and isColor(1008,1801,0x236a89,70) then")) {
                log('继续')
                //游戏结束点击继续
                // click(random(465,605),random(1620,690))
                click(540, 1650)
                sleep(2000)
            }
            findeclick('text', '取消', '800') //取消安装
        } catch (error) {
            log(error)
            sleep(2000)
        }
    }
}
var i = 0

function main() {
    // xzm(aa)
    // anz(path)
    while (1) {
        i++
        log('第' + i + '次')
        BlackGame()
    }
}

main()