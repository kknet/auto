log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.tencent.mobileqq"   //该项目包名
var xmxh = "2"               //项目序号




//********************************************************下载播放mp3***************************************************************


//截取字符串
function getInsideString(str, strStart, strEnd ) {
	if ( str.indexOf(strStart) < 0 ){
		return "";
	}
	if ( str.indexOf(strEnd) < 0 ){
		return "";
	}
	return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}

//找色
function zhaose(aa){
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    for (var k in ss){
        // TKB.xgsrizhi(ss[k])
        var xx = getInsideString(ss[k], "(", "," )
        var yy = getInsideString(ss[k], ",", ",0" )
        var ys = getInsideString(ss[k], "0x", ",80)" )
        // TKB.xgsrizhi(xx + ":" + yy)
        // TKB.xgsrizhi(ys)
        if (images.detectsColor(imgss, "#"+ys, xx, yy, 20)) {

        }else{
            imgss.recycle()
            return 0
        }
    }
    imgss.recycle()
    return 1
}


//*******************************************************QQ项目 *****************************************************************

function zonghe(){
    if(text("允许").exists() ){
         TKB.xgsrizhi("允许")
        click("允许")  
        sleep(1000)
    }
    if(text("开启QQ之旅").exists() ){
         TKB.xgsrizhi("开启QQ之旅")
        back()
        sleep(2000)
    }
    if(text("绑定手机号码").exists() ){
         TKB.xgsrizhi("绑定手机号码")
        back()
        sleep(2000)
    }
    if(text("关闭应用").exists() && text("等待").exists()){
         TKB.xgsrizhi("等待")
        click("等待")   
        sleep(1000)
    }
    if(text("退出").exists() && text("我知道了").exists()){
         TKB.xgsrizhi("我知道了")
        click("我知道了")   
        sleep(1000)
    }
    if(text("稍后处理").exists() && text("立即升级").exists()){
         TKB.xgsrizhi("稍后处理")
        click("稍后处理")   
        sleep(1000)
    }
}

//打开指定游戏
function dakai(name){
     TKB.xgsrizhi("打开指定游戏")
    var tem = 1    //判断点击哪个页面
    var hd = 0     //滑动的次数
    var TC = (new Date()).getTime()
    var TB = (new Date()).getTime() - 100000
    while (1){
        if ((new Date()).getTime() - TB > 20*1000){
            baoming = currentPackage()
            baoming = baoming.split(":")
            if (baoming[0] != "com.tencent.mobileqq"){
                 TKB.xgsrizhi("掉线启动1")
                 TKB.xgsrizhi(baoming[0])
                launch("com.tencent.mobileqq")
                sleep(2222)
            }
            TB = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TC > 3*60*1000){
             TKB.xgsrizhi("超时未进入游戏")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            tem = 1
			TC = (new Date()).getTime()
        }
        if (desc("分享").exists() && id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() ||  id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() && id("com.tencent.mobileqq:id/ivTitleBtnRightImage").exists()){
             TKB.xgsrizhi("推荐界面点到游戏了")
            id("com.tencent.mobileqq:id/ivTitleBtnLeft").findOnce().click()
            sleep(500)
        }
        if(text("消息").exists() && desc("快捷入口").exists() || text("消息").exists() && text("联系人").exists()){
             TKB.xgsrizhi("qq首页")
            // click("动态")   //点击动态
            click(930, 2000)
            sleep(2000)
        }
        if(text("退出").exists() && text("重新登录").exists() || text("下线通知").exists() && text("重新登录").exists()){
             TKB.xgsrizhi("被别人挤下线")
            click("重新登录")  
            sleep(2000)
        }
        if(text("允许").exists()){
             TKB.xgsrizhi("允许")
            click("允许")  
            sleep(2000)
        }
        if(text("动态").exists() && text("玩一玩").exists() || text("玩一玩").exists() && text("好友动态").exists()){
             TKB.xgsrizhi("动态界面进入玩一玩")
            click("玩一玩")   //点击玩一玩
            sleep(2000)
        }
        if(text("推荐").exists() && text("我的").exists() || text("推荐").exists() && text("小程序").exists()){
             TKB.xgsrizhi("推荐界面")
            if (tem == 1){
                 TKB.xgsrizhi("点击我的")
                click("我的")   
                sleep(3000)
            }else{
                if (text("搜索").exists()){
                     TKB.xgsrizhi("搜索界面")
                    if (text(name).exists()){
                         TKB.xgsrizhi("看到小程序了")
                        try {
                            var ws = text(name).boundsInside(0, 370, device.width, device.height).findOnce().bounds()
                            if (ws != null){
                                 TKB.xgsrizhi(ws.centerX())
                                 TKB.xgsrizhi(ws.centerY())
                                click(ws.centerX(), ws.centerY())
                                sleep(3000)
                                break
                            }
                        }catch(error) {
                             TKB.xgsrizhi(error);
                            sleep(2000)
                        }
                    }else{
                         TKB.xgsrizhi("输入名字")
                        setText(name)
                        sleep(2000)
                    }
                }else{
                     TKB.xgsrizhi("点击推荐")
                    click("小程序")   //点击小程序
                    sleep(2000)
                    if(text("工具").exists()){
                        try {
                            var ws = text("工具").findOnce().bounds()
                            if (ws != null){
                                 TKB.xgsrizhi(ws.centerX())
                                 TKB.xgsrizhi(ws.centerY())
                                click(ws.centerX(), ws.centerY() - 220)
                                sleep(4000)
                            }
                        }catch(error) {
                             TKB.xgsrizhi(error);
                            sleep(2000)
                        }
                    }else{
                        if(desc("工具").exists()){
                            try {
                                var ws = desc("工具").findOnce().bounds()
                                if (ws != null){
                                     TKB.xgsrizhi(ws.centerX())
                                     TKB.xgsrizhi(ws.centerY())
                                    click(ws.centerX(), ws.centerY() - 220)
                                    sleep(4000)
                                }
                            }catch(error) {
                                 TKB.xgsrizhi(error);
                                sleep(2000)
                            }
                        }
                    }
                }
            }
        }
        if (text("搜索").exists() && text("取消").exists()){
             TKB.xgsrizhi("搜索界面2")
            if (text(name).exists()){
                 TKB.xgsrizhi("看到小程序了2")
                try {
                    var ws = text(name).boundsInside(0, 400, device.width, device.height).findOnce().bounds()
                    if (ws != null){
                         TKB.xgsrizhi(ws.centerX())
                         TKB.xgsrizhi(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(3000)
                        break
                    }
                }catch(error) {
                     TKB.xgsrizhi(error);
                    sleep(2000)
                }
            }else{
                 TKB.xgsrizhi("输入名字2")
                setText(name)
                sleep(2000)
            }
        }
        if(text("最近使用").exists() && text("我的").exists() || text("最近使用").exists() && text("小程序").exists()){
             TKB.xgsrizhi("最近使用界面")
            if (text(name).exists()){
                 TKB.xgsrizhi("找到小程序")
                // click(name)
                try {
                    var ws = text(name).findOnce().bounds()
                    if (ws != null){
                         TKB.xgsrizhi(ws.centerX())
                         TKB.xgsrizhi(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(4000)
                        click(name)
                        break
                    }
                }catch(error) {
                     TKB.xgsrizhi(error);
                    sleep(2000)
                }
                sleep(3000)
            }else{
                if (hd < 2){
                     TKB.xgsrizhi("没找到")
                    swipe(438,533, 349,1481,500)
                    sleep(2000)
                    hd = hd + 1
                }else{
                     TKB.xgsrizhi("找了几次没找到")
                    // click(673,1831)   //点击小程序
                    click("小程序")
                    sleep(2000)
                    tem = 2
                }
            }
        }
        zonghe()
    }
}

//喵喵水族馆
function shuizuguan(){
     TKB.xgsrizhi("喵喵水族馆")
    dakai("喵喵水族箱")
    var TC = (new Date()).getTime() - 150*1000
    var TS = (new Date()).getTime()
    var TE = (new Date()).getTime()
    var set = random(30, 40)   //玩游戏的时间
    var gcs = random(9, 16)   //观看广告的次数
    var tem = 0

    while(1){
        if ((new Date()).getTime() - TE > set*60*1000 || gcs < 1 ){
             TKB.xgsrizhi("超时退出" + gcs)
             TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TS > 4*60*1000){
             TKB.xgsrizhi("超时没看广告")
             TKB.qinglihh()
            dakai("喵喵水族箱")
            TS = (new Date()).getTime()
        }
        if (zhaose("if isColor(358,1562,0x3d1e0d,80) and isColor(704,1554,0xffffff,80) and isColor(574,1540,0x3d1e0d,80) and isColor(770,1575,0xffffff,80) and isColor(431,1598,0xfffa62,80) then") || zhaose("if isColor(285,1625,0x3eb8fe,80) and isColor(290,1547,0x3d1e0d,80) and isColor(434,1596,0xfffa62,80) and isColor(773,1563,0x3d1e0d,80) and isColor(610,1486,0x40bbfe,80) and isColor(788,1565,0x3d1e0d,80) then")){
             TKB.xgsrizhi("首页")
            tem = 0
            var ss = random(1, 8)
            if (ss == 1){
                 TKB.xgsrizhi("升级鱼钩")
                click(220,366)
            }else{
                if (ss == 2){
                     TKB.xgsrizhi("升级鱼线")
                    click(542,362)
                }else{
                    if (ss == 3){
                         TKB.xgsrizhi("斗鱼")
                        click(93,791)
                    }else{
                        if (ss == 4){
                             TKB.xgsrizhi("鱼池")
                            click(866,362)
                        }else{
                            var img = captureScreen()
                            var fs = findColor(img, "#f4911a", {
                                region: [384,596, 420,170],
                                threshold: 5
                            });
                            if(fs){
                                 TKB.xgsrizhi("有鸽子")
                                toast("有鸽子")
                                click(438,786)
                                sleep(100)
                                click(564,785)
                                sleep(100)
                                click(728,799)
                                sleep(100)
                            }
                             TKB.xgsrizhi("钓鱼")
                            click(617,1556)
                            sleep(random(1000, 2000))
                            var as = random(3, 6)
                            for(var i = 0; i < as; i++){
                                swipe(random(700, 800),932, 238,998, random(300, 500))
                                sleep(200)
                                swipe(random(200, 300),998, random(400, 800),932, random(300, 500))
                            }
                        }
                    }
                }
            }
        }

        if (zhaose("if isColor(699,1606,0xfe895a,80) and isColor(636,1574,0xffffff,80) and isColor(419,1623,0xffffff,80) and isColor(536,1527,0x3d1e0d,80) and isColor(417,1673,0xb35027,80) and isColor(453,1683,0x3d1e0d,80) and isColor(530,1610,0xffffff,80) then")){
             TKB.xgsrizhi("普通领取--点播放广告")
            var bb = random(1, 5)
            if (bb < 4){
                click(544,1375)
                sleep(1000)
            }else{
                 TKB.xgsrizhi("点击普通领取")
                click(539,1604)
                sleep(1000)
            }
        }

        //马上打开  关闭广告
        if( text("关闭广告").exists() && text("马上打开").exists() || text("关闭广告").exists() && text("去看看").exists()){
            toastLog("观看广告中")
            TS = (new Date()).getTime()
            var Tss = (new Date()).getTime()
            var bb = random(20, 25)
            while(1){
                if ((new Date()).getTime() - Tss > bb*1000){
                     TKB.xgsrizhi("关闭广告")
                    click(920,130)
                    sleep(1000)
                    break
                }else{
                    toastLog("观看广告中...")
                    sleep(3000)
                }
            }
            if (tem == 0){
                gcs =gcs - 1
                toastLog("还需要观看" + gcs + "次广告")
                tem =1
            }
        }
        if( text("关闭广告").exists() && text("继续观看").exists()){
             TKB.xgsrizhi("继续观看")
            click(800,1200)
            sleep(500)
            click("继续观看")
            sleep(1000)
        }
        if( text("取消").exists() && text("设置").exists()){
             TKB.xgsrizhi("取消")
            // click("取消")
            back()
            sleep(500)
            back()
            sleep(1000)
        }
        if( text("发送给").exists() && text("取消").exists()){
             TKB.xgsrizhi("发送给")
            back()
            sleep(1000)
        }
        if( desc("分享").exists() && id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists()){
             TKB.xgsrizhi("分享")
            back()
            sleep(1000)
        }

        if ((new Date()).getTime() - TC > 5*1000){
            if (zhaose("if isColor(662,1179,0x419ffd,80) and isColor(576,1206,0xffffff,80) and isColor(672,1224,0x3d1e0d,80) and isColor(463,1313,0x000000,80) and isColor(697,1292,0x000000,80) and isColor(631,1353,0xffffff,80) then")){
                 TKB.xgsrizhi("按住屏幕左右滑动")
                var as = random(2, 4)
                for(var i = 0; i < as; i++){
                    swipe(random(700, 800),932, 238,998, random(300, 500))
                    sleep(200)
                    swipe(random(200, 300),998, random(400, 800),932, random(300, 500))
                }
            }
            if (zhaose("if isColor(421,1621,0xffffff,80) and isColor(659,1588,0xffffff,80) and isColor(323,1673,0xb35027,80) and isColor(725,1673,0xb35027,80) and isColor(586,1527,0x3d1e0d,80) and isColor(658,1571,0xffffff,80) then")){
                 TKB.xgsrizhi("领取奖励")
                click(536,1595)
                sleep(1000)
            }
            if (zhaose("if isColor(118,344,0xffd3ce,80) and isColor(265,457,0xffffff,80) and isColor(235,565,0x000000,80) and isColor(264,658,0xffffff,80) and isColor(384,550,0x000000,80) and isColor(513,568,0x000000,80) then")){
                 TKB.xgsrizhi("升级鱼钩提示")
                click(212,415)
                sleep(1000)
            }
            if (zhaose("if isColor(643,350,0xffd3ce,80) and isColor(554,437,0xffffff,80) and isColor(376,533,0xffffff,80) and isColor(427,570,0x000000,80) and isColor(594,641,0x000000,80) and isColor(646,624,0xffffff,80) then")){
                 TKB.xgsrizhi("升级鱼线提示")
                click(553,399)
                sleep(1000)
            }
            if (zhaose("if isColor(370,1427,0xfe895a,80) and isColor(397,1419,0xffffff,80) and isColor(827,1024,0xf45f61,80) and isColor(326,784,0xfff1cc,80) and isColor(554,606,0xce3f41,80) then")){
                 TKB.xgsrizhi("免费存入钱包")
                var as = random(1, 5)
                if (as < 4){
                    click(531,1433)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(889,548)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(719,1469,0xffffff,80) and isColor(562,1512,0x66ff00,80) and isColor(479,1515,0x65fe00,80) and isColor(668,1510,0x5fec06,80) and isColor(586,1431,0xd99761,80) then")){
                 TKB.xgsrizhi("连续点击吊起")
                var as = random(5, 10)
                for(var i = 0; i < as; i++){
                    click(646,1403)
                    sleep(random(50, 90))
                    click(608,1422)
                    sleep(random(50, 100))
                }
            }
            if (zhaose("if isColor(715,1469,0xffffff,80) and isColor(624,1518,0x5bdf0a,80) and isColor(596,1530,0x60ed06,80) and isColor(516,1516,0x60eb06,80) and isColor(479,1508,0x66fe00,80) then")){
                 TKB.xgsrizhi("连续点击吊起2")
                var as = random(5, 10)
                for(var i = 0; i < as; i++){
                    click(676,1407)
                    sleep(random(50, 90))
                    click(608,1422)
                    sleep(random(50, 100))
                }
            }
            if (zhaose("if isColor(893,696,0xffffff,80) and isColor(701,1077,0xfe895a,80) and isColor(696,1127,0xb35027,80) and isColor(465,1090,0xffffff,80) and isColor(403,1080,0xfe895a,80) and isColor(452,1056,0xffffff,80) and isColor(410,1068,0xfe895a,80) and isColor(910,920,0x3d1e0d,80) then")){
                 TKB.xgsrizhi("解锁新海域")
                click(891,694)
                sleep(1000)
            }
            if(zhaose("if isColor(473,687,0xffe67b,80) and isColor(966,395,0xffffff,80) and isColor(963,892,0x3d1e0d,80) and isColor(380,1325,0xfe895a,80) and isColor(424,1299,0xffe05e,80) and isColor(737,1325,0xfe895a,80) and isColor(684,1297,0xffffff,80) then")){
                 TKB.xgsrizhi("分享领取")
                click(965,398)
                sleep(1000)
            }
            if (zhaose("if isColor(430,1334,0xffffff,80) and isColor(476,1330,0xfe895a,80) and isColor(510,1332,0xffffff,80) and isColor(348,1432,0xb35027,80) and isColor(685,1297,0xffffff,80) and isColor(729,1337,0xfe895a,80) then")){
                 TKB.xgsrizhi("领取")
                click(572,1330)
                sleep(1000)
            }
            if (zhaose("if isColor(810,1038,0xf45f61,80) and isColor(561,605,0xce3f41,80) and isColor(505,987,0xfadd4c,80) and isColor(435,1431,0xffffff,80) and isColor(692,1431,0xfe895a,80) and isColor(674,1420,0xffffff,80) then")){
                 TKB.xgsrizhi("存入钱包")
                var as = random(1, 5)
                if (as < 4){
                    click(563,1432)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(889,548)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(969,721,0xffffff,80) and isColor(701,1214,0xffffff,80) and isColor(678,1211,0x321209,80) and isColor(615,1239,0xffffff,80) and isColor(308,1211,0xfe895a,80) and isColor(417,1302,0xb35027,80) and isColor(453,1241,0xffffff,80) then")){
                 TKB.xgsrizhi("黄金鱼钩--立即激活")
                click(535,1212)
                sleep(1000)
            }
            if (zhaose("if isColor(328,454,0x4d493e,80) and isColor(1008,412,0xffffff,80) and isColor(530,1638,0x4d493e,80) and isColor(938,1273,0x4c3b2b,80) and isColor(718,163,0x26241f,80) and isColor(934,444,0xfff1cc,80) then")){
                 TKB.xgsrizhi("怎么玩提示--斗鱼")
                click(1005,415)
                sleep(1000)
            }
            if (zhaose("if isColor(206,1703,0xffffff,80) and isColor(506,1735,0x4d493e,80) and isColor(429,1406,0x4d493e,80) and isColor(887,620,0x19354c,80) and isColor(502,443,0x2b4125,80) and isColor(746,163,0x4d493e,80) then")){
                 TKB.xgsrizhi("斗鱼提示 -- 初级斗场")
                click(153,1636)
                sleep(1000)
            }
            if (zhaose("if isColor(102,1643,0x4f0800,80) and isColor(152,1759,0xffffff,80) and isColor(213,1651,0x4f0800,80) and isColor(671,1749,0x90d87b,80) and isColor(1042,1751,0x3d1e0d,80) and isColor(792,1767,0x90d87b,80) and isColor(813,1775,0x3d1e0d,80) then")){
                 TKB.xgsrizhi("水族箱")
                var sz = random(1, 3)
                if (sz == 1){
                     TKB.xgsrizhi("点击升级")  
                    click(965,1756)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("点击区钓鱼")
                    click(162,1748)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(448,975,0x3d1e0d,80) and isColor(470,1028,0xffffff,80) and isColor(467,754,0x4acbff,80) and isColor(304,796,0x3d1e0d,80) and isColor(521,809,0x4f0800,80) and isColor(379,1394,0x3d1e0d,80) then")){
                 TKB.xgsrizhi("升级鱼池界面")
                var sz = random(1, 5)
                if (sz == 1){
                     TKB.xgsrizhi("点击升级鱼池")  
                    click(876,1107)
                    sleep(1000)
                }else{
                    if (sz == 2){
                         TKB.xgsrizhi("点击升级过滤器")
                        click(878,1336)
                        sleep(1000)
                    }else{
                         TKB.xgsrizhi("关闭升级界面")
                        click(1001,862)
                        sleep(1000)
                    }
                }
            }
            if (zhaose("if isColor(719,1196,0xb35027,80) and isColor(809,1127,0xffffff,80) and isColor(815,1127,0x3d1e0d,80) and isColor(949,342,0xffffff,80) and isColor(972,769,0x3d1e0d,80) and isColor(592,1076,0x3d1e0d,80) and isColor(596,1114,0xfe895a,80) then")){
                 TKB.xgsrizhi("看视频恢复体力")
                var sz = random(1, 5)
                if (sz < 4){
                     TKB.xgsrizhi("看视频")  
                    click(544,1143)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(948,341)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(43,134,0xfc2f1f,80) and isColor(510,365,0xff0029,80) and isColor(473,432,0x3d1e0d,80) and isColor(990,412,0x3d1e0d,80) and isColor(1036,357,0xfff1cc,80) then") || zhaose("if isColor(51,138,0xfc2f1f,80) and isColor(474,342,0x3d1e0d,80) and isColor(624,362,0x3d1e0d,80) and isColor(542,374,0xff0029,80) and isColor(120,2063,0xfff1cc,80) then")){
                 TKB.xgsrizhi("斗鱼PK界面 -- 退出")
                click(56,137)
                sleep(1000)
            }

            if (zhaose("if isColor(441,644,0xfe7a38,80) and isColor(507,658,0xfe7a38,80) and isColor(640,644,0xfe7a38,80) and isColor(952,552,0xffffff,80) and isColor(337,1528,0xfe895a,80) and isColor(449,1628,0xb35027,80) and isColor(441,1559,0xffffff,80) then")){
                 TKB.xgsrizhi("金币不足")
                click(551,1562)
                sleep(1000)
            }
            if (zhaose("if isColor(502,540,0x3d1e0d,80) and isColor(441,634,0xfe7a38,80) and isColor(488,636,0xfe7a38,80) and isColor(574,658,0xfe7b38,80) and isColor(660,623,0xfe7a38,80) and isColor(952,558,0xffffff,80) and isColor(972,699,0x3d1e0d,80) and isColor(966,735,0xfec9b2,80) then")){
                 TKB.xgsrizhi("金币不足--升级鱼钩")
                var sz = random(1, 5)
                if (sz < 4){
                     TKB.xgsrizhi("视频获得")
                    click(582,1558)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(952,554)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(452,689,0xfe5538,80) and isColor(563,701,0xfe5538,80) and isColor(640,673,0xfe5538,80) and isColor(759,891,0xffffff,80) and isColor(251,936,0x3d1e0d,80) and isColor(411,1195,0xfe895a,80) and isColor(897,603,0xffffff,80) then")){
                 TKB.xgsrizhi("获得荣誉")
                click(545,1209)
                sleep(1000)
            }
            if (zhaose("if isColor(252,876,0x3d1e0d,80) and isColor(777,812,0xffffff,80) and isColor(904,804,0x3d1e0d,80) and isColor(897,600,0xffffff,80) and isColor(513,690,0xfe5538,80) and isColor(563,706,0xfe5538,80) then")){
                 TKB.xgsrizhi("获得荣誉2")
                var sz = random(1, 5)
                if (sz < 4){
                     TKB.xgsrizhi("获得荣誉")
                    click(540,1216)
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(894,602)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(175,1150,0xfec9b2,80) and isColor(169,1153,0x3d1e0d,80) and isColor(324,1306,0x3d1e0d,80) and isColor(330,1305,0xffffff,80) and isColor(398,1307,0xfe895a,80) and isColor(585,1299,0xffffff,80) and isColor(583,1335,0xffffff,80) then")){
                 TKB.xgsrizhi("鱼线长度确定-要继续新海域")
                click(539,1313)
                sleep(1000)
            }
            if (zhaose("if isColor(722,1097,0xffe45f,80) and isColor(719,1040,0xffe45f,80) and isColor(892,697,0xffffff,80) and isColor(431,1129,0xb35027,80) and isColor(457,1065,0xfe895a,80) and isColor(584,1055,0xffffff,80) and isColor(672,1070,0xfe895a,80) then")){
                 TKB.xgsrizhi("分享获得")
                click(892,693)
                sleep(1000)
            }
            if (zhaose("if isColor(445,687,0xfe7938,80) and isColor(524,694,0xfe7938,80) and isColor(640,657,0xfe7938,80) and isColor(902,613,0xffffff,80) and isColor(829,1043,0x3d1e0d,80) and isColor(360,1296,0xfe895a,80) and isColor(445,1293,0xffffff,80) then")){
                 TKB.xgsrizhi("锦鲤送宝")
                click(568,1290)
                sleep(1000)
            }
            if (zhaose("if isColor(88,641,0xfff2cc,80) and isColor(188,433,0xffffff,80) and isColor(342,431,0xeb4b94,80) and isColor(420,424,0xeb4b94,80) and isColor(958,447,0xfff2cc,80) and isColor(990,381,0xffffff,80) then")){
                 TKB.xgsrizhi("每日登陆奖励")
                click(539,1649)
                sleep(1000)
                click(990,380)
                sleep(1000)
            }
            if(zhaose("if isColor(383,1104,0xfe895a,80) and isColor(466,1069,0xffffff,80) and isColor(634,1062,0xffffff,80) and isColor(651,1085,0xfe895a,80) and isColor(528,1143,0xb35027,80) and isColor(481,560,0xfe7938,80) and isColor(550,572,0xfe7938,80) then")){
                 TKB.xgsrizhi("解锁新鱼种")
                click(908,461)
                sleep(1000)
            }
            if(zhaose("if isColor(374,759,0x000000,80) and isColor(687,833,0x080706,80) and isColor(264,1325,0xfe895a,80) and isColor(343,1362,0xb35027,80) and isColor(221,1266,0x3d1e0d,80) then")){
                 TKB.xgsrizhi("离线收益")
                click(543,1267)
                sleep(1000)
            }
            if(zhaose("if isColor(907,612,0xffffff,80) and isColor(909,840,0x3d1e0d,80) and isColor(504,1044,0x43a6ff,80) and isColor(486,1070,0x5d3b3c,80) and isColor(473,1273,0xfe895a,80) and isColor(434,1281,0xffffff,80) then")){
                 TKB.xgsrizhi("获取战斗次数")
                click(554,1281)
                sleep(1000)
            }
            if (zhaose("if isColor(508,451,0x90d87b,80) and isColor(440,302,0x3d1e0d,80) and isColor(961,642,0x52aefb,80) and isColor(574,247,0xffffff,80) and isColor(480,339,0xfbc48d,80) and isColor(45,139,0xfc2f1f,80) then")){
                 TKB.xgsrizhi("斗鱼主界面")
                var bs = random(1, 5)
                if (bs == 1){
                     TKB.xgsrizhi("点击升级")
                    click(594,454)
                    sleep(1000)
                }else{
                    if (bs == 2){
                         TKB.xgsrizhi("点击金币")
                        click(886,451)
                        sleep(1000)
                    }else{
                        if (bs == 3){
                             TKB.xgsrizhi("点击获得荣耀")
                            click(915,1552)
                            sleep(1000)
                        }else{
                             TKB.xgsrizhi("退出")
                            click(62,141)
                            sleep(1000)
                        }
                    }
                }
            }


            TC = (new Date()).getTime()
        }
    }
}

//疯狂农场
function noingchang(){
     TKB.xgsrizhi("疯狂农场")
    dakai("疯狂农场")
    var TC = (new Date()).getTime() - 150*1000
    var TS = (new Date()).getTime()
    var TE = (new Date()).getTime()
    var set = random(30, 40)   //玩游戏的时间
    var gcs = random(9, 16)   //观看广告的次数
    var tem = 0
    while(1){
        if ((new Date()).getTime() - TE > set*60*1000 || gcs < 1 ){
             TKB.xgsrizhi("超时退出" + gcs)
             TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TS > 4*60*1000){
             TKB.xgsrizhi("超时没看广告")
             TKB.qinglihh()
            dakai("疯狂农场")
            TS = (new Date()).getTime()
        }
        if (zhaose("if isColor(268,181,0xb4d2ec,80) and isColor(266,172,0x5288c0,80) and isColor(317,173,0xfdf42d,80) and isColor(280,1799,0xfccc60,80) and isColor(540,1799,0xfefb2a,80) and isColor(826,1866,0xff8179,80) then")){
             TKB.xgsrizhi("首页")
            tem = 0
            var bb = random(1, 12)
            if (bb == 1){
                 TKB.xgsrizhi("点击商店")
                click(281,1892)  
                sleep(1000)
            }else{
                if (bb == 2){
                     TKB.xgsrizhi("点击升级")
                    click(545,1864)  
                    sleep(1000)
                }else{
                    if (bb == 3){
                         TKB.xgsrizhi("点击宝箱")
                        click(816,1895)  
                        sleep(1000)
                    }else{
                        if (bb == 4){
                             TKB.xgsrizhi("点击浇水")
                            click(518,583)  
                            sleep(1000)
                        }else{
                            if (bb == 5){
                                 TKB.xgsrizhi("点击任务奖励")
                                click(1018,1667)  
                                sleep(1000)
                            }else{
                                if (bb == 6){
                                     TKB.xgsrizhi("点击地鼠")
                                    click(921,918)  
                                    sleep(1000)
                                }else{
                                    if (bb == 7){
                                         TKB.xgsrizhi("农场改造")
                                        click(91,473)  
                                        sleep(1000)
                                    }else{
                                         TKB.xgsrizhi("收成金币")
                                        click(923,1226)
                                        sleep(500)
                                        var aa = random(5, 10)
                                        for (var i=0 ;i < aa;i++){
                                            try{
                                                var point = findColor(captureScreen(), "#f9c843", {
                                                    region: [112,835, 770,650],
                                                    threshold: 6
                                                })
                                                if (point){
                                                     TKB.xgsrizhi("点击金币")
                                                    click(point.x, point.y)
                                                }
                                            }catch(error) {
                                                sleep(1001)
                                                 TKB.xgsrizhi(error);
                                            }
                                            click(random(185, 856), random(830, 1326))
                                            sleep(500)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if( text("关闭广告").exists() && text("马上打开").exists() || text("关闭广告").exists() && text("去看看").exists()){
            toastLog("观看广告中")
            TS = (new Date()).getTime()
            var Tss = (new Date()).getTime()
            var bb = random(20, 25)
            while(1){
                if ((new Date()).getTime() - Tss > bb*1000){
                     TKB.xgsrizhi("关闭广告")
                    click(920,130)
                    sleep(1000)
                    break
                }else{
                    toastLog("观看广告中...")
                    sleep(3000)
                }
            }
            if (tem == 0){
                gcs =gcs - 1
                toastLog("还需要观看" + gcs + "次广告")
                tem =1
            }
        }

        if( text("取消").exists() && text("设置").exists()){
             TKB.xgsrizhi("取消")
            // click("取消")
            back()
            sleep(500)
            back()
            sleep(1000)
        }
        if( text("发送给").exists() && text("取消").exists()){
             TKB.xgsrizhi("发送给")
            back()
            sleep(1000)
        }
        if( desc("分享").exists() && id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists()){
             TKB.xgsrizhi("分享")
            back()
            sleep(1000)
        }
        if ((new Date()).getTime() - TC > 5*1000){
            if (zhaose("if isColor(975,553,0xb05c0f,80) and isColor(536,619,0xb77242,80) and isColor(521,583,0xfee49f,80) and isColor(386,601,0xfee49f,80) and isColor(547,1254,0x35e0f3,80) and isColor(491,1366,0x1a618f,80) and isColor(465,1329,0xffffff,80) and isColor(681,1256,0x35e0f3,80) then")){
                 TKB.xgsrizhi("立即改造")
                click(541,1309)  
                sleep(1000)
            }
            if (zhaose("if isColor(522,366,0xfff4cc,80) and isColor(635,387,0xfff4cc,80) and isColor(704,426,0xb65c39,80) and isColor(466,334,0xfff4cc,80) and isColor(81,1627,0xffc418,80) and isColor(987,1748,0x963908,80) and isColor(379,606,0xffa960,80) then")){
                 TKB.xgsrizhi("商店界面")
                var aa = random(1, 4)
                if (aa == 1){
                     TKB.xgsrizhi("第一个")
                    click(339,1148)
                }else{
                    if (aa == 2){
                         TKB.xgsrizhi("打开")
                        click(744,1155)
                    }else{
                         TKB.xgsrizhi("返回主界面")
                        click(986,1749)  
                    }
                }
                sleep(1000)
            }
            if (zhaose("if isColor(556,577,0xfee49f,80) and isColor(655,579,0xfee49f,80) and isColor(77,800,0xedb361,80) and isColor(728,636,0xa16135,80) and isColor(819,1321,0xedb361,80) and isColor(516,1254,0x98f335,80) and isColor(470,1306,0xffffff,80) and isColor(467,1366,0x348f1a,80) then")){
                 TKB.xgsrizhi("农场改造--开始改造")
                click(543,1307)  
                sleep(1000)
            }
            if (zhaose("if isColor(602,1253,0x98f335,80) and isColor(630,1300,0xffffff,80) and isColor(512,1326,0xffffff,80) and isColor(696,1285,0x4e982d,80) and isColor(488,636,0xa16135,80) and isColor(85,1049,0xedb361,80) then")){
                 TKB.xgsrizhi("农场改造--开始改造-2")
                click(543,1307)  
                sleep(1000)
            }
            if (zhaose("if isColor(987,717,0xb05c0f,80) and isColor(1010,944,0xedb361,80) and isColor(118,1212,0xfff6d9,80) and isColor(452,1310,0xfffdf9,80) and isColor(591,1332,0xfffdf9,80) and isColor(704,1242,0x98f33b,80) and isColor(419,1242,0x98f33b,80) then")){
                 TKB.xgsrizhi("金币等着你--去收集")
                click(540,1314)  
                sleep(1000)
            }
            if (zhaose("if isColor(650,1461,0xffffff,80) and isColor(476,1401,0x98f33b,80) and isColor(294,740,0x5d3a21,80) and isColor(108,761,0x5c3a21,80) and isColor(386,750,0x7f7250,80) and isColor(60,1063,0xfa0a09,80) and isColor(523,879,0x3e69a4,80) then")){
                 TKB.xgsrizhi("第一次灌溉提示--下雨")  
                click(547,1461)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1062,0xfa0a09,80) and isColor(503,919,0xd46b37,80) and isColor(543,922,0xd46c39,80) and isColor(356,883,0x3e6aa4,80) and isColor(603,617,0xffffff,80) and isColor(513,573,0x52d5ff,80) then")){
                 TKB.xgsrizhi("对农场进行一次灌溉")
                click(532,579)  
                sleep(1000)
            }
            if (zhaose("if isColor(387,732,0xfee4a1,80) and isColor(661,752,0xfee4a1,80) and isColor(999,725,0xb05c0f,80) and isColor(485,1402,0x98f33b,80) and isColor(492,1460,0xfffdf9,80) and isColor(696,1455,0xfffdf9,80) and isColor(71,1027,0xedb361,80) then")){
                 TKB.xgsrizhi("灌溉 --下雨")
                click(555,1470)  
                sleep(1000)
            }
            if (zhaose("if isColor(528,643,0xfde5a4,80) and isColor(569,691,0xfde5a4,80) and isColor(684,650,0xfde5a4,80) and isColor(972,646,0xb05c0f,80) and isColor(1016,891,0xedb361,80) and isColor(112,781,0xfee49f,80) then")){
                 TKB.xgsrizhi("宠物升级界面")
                var aa = random(1, 4)
                if (aa <3){
                     TKB.xgsrizhi("升级")
                    click(540,1368)  
                    sleep(1000)
                }else{
                    click(972,644)  
                    sleep(1000)
                }
                
            }
            if (zhaose("if isColor(541,1798,0xfefb2a,80) and isColor(582,1968,0xfef4d1,80) and isColor(573,1764,0xfccc60,80) and isColor(377,1613,0x710d0b,80) and isColor(513,1709,0x710d0b,80) and isColor(729,1708,0x710d0b,80) then")){
                 TKB.xgsrizhi("升级界面")
                var aa = random(5, 10)
                for (var i=0 ;i < aa;i++){
                    click(random(185, 856), random(830, 1326))
                    sleep(500)
                }
                click(537,1881)
                sleep(1000)
            }
            if (zhaose("if isColor(533,1763,0xfccc60,80) and isColor(580,1802,0xfefb2a,80) and isColor(472,1963,0xf9edc9,80) and isColor(530,1967,0xfff5d2,80) and isColor(581,1960,0xfff5d2,80) and isColor(634,1877,0xde8e49,80) then")){
                 TKB.xgsrizhi("升级界面2")
                var aa = random(5, 10)
                for (var i=0 ;i < aa;i++){
                    click(random(185, 856), random(830, 1326))
                    sleep(500)
                }
                click(537,1881)
                sleep(1000)
            }
            if (zhaose("if isColor(519,1374,0xbdf669,80) and isColor(438,1412,0xfefff0,80) and isColor(551,1430,0xfefff0,80) and isColor(682,1454,0xfefff0,80) and isColor(711,1354,0x086526,80) and isColor(280,1437,0x086526,80) then")){
                 TKB.xgsrizhi("开始游戏")
                click(560,1442)  
                sleep(1000)
            }
            if (zhaose("if isColor(255,1506,0xedb361,80) and isColor(302,1491,0x936f3d,80) and isColor(561,1431,0x98f33b,80) and isColor(510,1480,0xfffdf9,80) and isColor(610,1491,0xfffdf9,80) and isColor(529,1570,0x348f1a,80) then")){
                 TKB.xgsrizhi("继续--卡片升级")
                click(549,1500)  
                sleep(1000)
            }
            if(text("允许").exists() && text("取消").exists()){
                 TKB.xgsrizhi("允许")
                click("允许")  
                sleep(2000)
            }
            if (zhaose("if isColor(549,1493,0xffffff,80) and isColor(59,1066,0xf70c0b,80) and isColor(758,922,0xd46c38,80) and isColor(389,924,0x3b67a3,80) and isColor(271,961,0xd46a36,80) then")){
                 TKB.xgsrizhi("请解锁第一块田")
                click(500,1454)  
                sleep(1000)
            }
            if (zhaose("if isColor(633,1921,0xffffff,80) and isColor(271,932,0x4a71a6,80) and isColor(497,914,0xd36935,80) and isColor(60,1060,0xfa0a09,80) then")){
                 TKB.xgsrizhi("将田升至五级")
                click(566,1873)  
                sleep(1000)
            }
            if (zhaose("if isColor(579,1391,0xffffff,80) and isColor(59,1063,0xf70c0b,80) and isColor(582,876,0x3b68a3,80) and isColor(494,1283,0x8e1814,80) and isColor(230,1022,0xfff0c9,80) then")){
                 TKB.xgsrizhi("将田升至五级2")
                click(505,1347)  
                sleep(1000)
            }
            if (zhaose("if isColor(269,980,0xd6723f,80) and isColor(758,871,0x4a72a6,80) and isColor(507,879,0x416ca5,80) and isColor(346,959,0xd56e3b,80) and isColor(60,1060,0xfa0a09,80) and isColor(629,1917,0xffffff,80) then")){
                 TKB.xgsrizhi("足够金币时请解锁第二块田")
                click(584,1881)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1064,0xfa0a09,80) and isColor(320,924,0x3f6ba4,80) and isColor(395,887,0x4871a6,80) and isColor(778,1362,0xffffff,80) and isColor(244,893,0x3b68a3,80) then")){
                 TKB.xgsrizhi("请解锁第二块甜")
                click(740,1334)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1063,0xfa0a09,80) and isColor(691,922,0x3f6aa4,80) and isColor(278,883,0x416ca5,80) and isColor(314,912,0x426da5,80) and isColor(344,1945,0xffffff,80) and isColor(533,962,0xd36935,80) then")){
                 TKB.xgsrizhi("自动生产番茄")
                click(308,1912)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1065,0xfa0a09,80) and isColor(256,1075,0xfff6e9,80) and isColor(430,1188,0xffffff,80) and isColor(330,1223,0xf4bc89,80) and isColor(448,885,0x406ba5,80) and isColor(677,922,0x3f6aa4,80) then")){
                 TKB.xgsrizhi("商店自动生产番茄")
                click(373,1156)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1069,0xfa0a09,80) and isColor(271,877,0x5277a8,80) and isColor(420,880,0x3d69a4,80) and isColor(710,892,0x4971a6,80) and isColor(1011,1724,0xffffff,80) and isColor(899,1684,0x50ec38,80) then")){
                 TKB.xgsrizhi("完成新手指导")
                click(967,1687)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1061,0xfa0a09,80) and isColor(355,893,0x3b68a3,80) and isColor(468,883,0x3e69a4,80) and isColor(371,1491,0xffffff,80) and isColor(228,1490,0x509713,80) then")){
                 TKB.xgsrizhi("点击领取奖励")
                click(327,1460)  
                sleep(1000)
            }
            if (zhaose("if isColor(189,341,0xb97442,80) and isColor(395,293,0xfee4a1,80) and isColor(358,348,0xfee4a1,80) and isColor(613,337,0xfee4a1,80) and isColor(131,452,0xfee49f,80) and isColor(996,1745,0x963908,80) and isColor(708,346,0xfee4a1,80) then")){
                 TKB.xgsrizhi("宝箱和卡片界面")
                var aa = random(1, 4)
                if (aa == 1){
                     TKB.xgsrizhi("打开")
                    click(775,641)
                }else{
                    if (aa == 2){
                         TKB.xgsrizhi("观看广告")
                        click(785,898)  
                    }else{
                         TKB.xgsrizhi("返回主界面")
                        click(993,1744)  
                    }
                }
                sleep(1000)
            }
            if (zhaose("if isColor(744,334,0x5d3a21,80) and isColor(708,341,0x7f7250,80) and isColor(277,694,0xeac467,80) and isColor(575,1172,0xfcd537,80) and isColor(500,1328,0xfffdf9,80) and isColor(585,1357,0xfffdf9,80) and isColor(552,1276,0x98f33b,80) then")){
                 TKB.xgsrizhi("继续--打开宝箱")
                click(543,1345)  
                sleep(1000)
            }
            if (zhaose("if isColor(1012,945,0xffffff,80) and isColor(60,1062,0xfa0a09,80) and isColor(414,972,0xd36834,80) and isColor(527,873,0x3966a3,80) and isColor(539,926,0x4871a7,80) and isColor(421,928,0x5076a9,80) then")){
                 TKB.xgsrizhi("抓住一只地鼠")
                click(959,911)  
                sleep(1000)
            }
            if (zhaose("if isColor(242,1353,0xfffdf9,80) and isColor(306,1381,0xfffdf9,80) and isColor(854,1381,0xfffdf9,80) and isColor(705,1415,0x166c94,80) and isColor(289,1415,0x35751f,80) and isColor(274,1314,0x82c33c,80) then")){
                 TKB.xgsrizhi("奖励翻倍--地鼠")
                var aa = random(1, 4)
                if (aa < 4){
                     TKB.xgsrizhi("翻倍获得")
                    click(707,1364)  
                    sleep(1000)
                }else{
                    click(301,1365)  
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(264,1452,0xfffdf9,80) and isColor(300,1482,0xfffdf9,80) and isColor(318,1413,0x82c33c,80) and isColor(669,1511,0x166c94,80) and isColor(575,1512,0x166c94,80) and isColor(324,1514,0x35751f,80) and isColor(860,1449,0xfffdf9,80) then")){
                 TKB.xgsrizhi("奖励翻倍--任务获得")
                var aa = random(1, 4)
                if (aa < 4){
                     TKB.xgsrizhi("翻倍获得")
                    click(728,1461)  
                    sleep(1000)
                }else{
                    click(317,1468)  
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(986,715,0xb05c0f,80) and isColor(972,702,0xb05c0f,80) and isColor(1008,1021,0xedb361,80) and isColor(519,1242,0x98f33b,80) and isColor(465,1327,0xfffdf9,80) and isColor(669,1335,0xfffdf9,80) and isColor(865,1319,0xedb361,80) and isColor(670,1297,0xfffdf9,80) then")){
                 TKB.xgsrizhi("收益加倍")
                click(563,1313)  
                sleep(1000)
            }
            if (zhaose("if isColor(210,1126,0xfffbf0,80) and isColor(167,1071,0xf1c778,80) and isColor(351,1300,0xfffdf9,80) and isColor(359,1231,0x98f33b,80) and isColor(675,1231,0xff6b8e,80) and isColor(849,893,0xfffbf0,80) then")){
                 TKB.xgsrizhi("改造后农田变成0级")
                click(374,1283)  
                sleep(1000)
            }
            if (zhaose("if isColor(366,734,0xfee4a1,80) and isColor(579,713,0xfee4a1,80) and isColor(686,712,0xfee4a1,80) and isColor(71,1228,0xedb361,80) and isColor(523,1337,0x348f1a,80) and isColor(492,1198,0x98f33b,80) and isColor(457,1270,0xfffdf9,80) and isColor(529,1395,0xda8460,80) then")){
                 TKB.xgsrizhi("获得奖杯")
                click(413,1383)  //不勾选分享 
                sleep(1000)
                click(539,1265)  
                sleep(1000)
            }
            if (zhaose("if isColor(169,1020,0xf1c778,80) and isColor(172,1164,0xf1c778,80) and isColor(206,955,0xfffbf0,80) and isColor(357,1232,0x98f33b,80) and isColor(696,1231,0xff6b8e,80) and isColor(682,1293,0xfffdf9,80) and isColor(645,1332,0xaf130f,80) then")){
                 TKB.xgsrizhi("小号50%以上奖杯")
                click(371,1280)  
                sleep(1000)
            }
            if (zhaose("if isColor(493,1365,0xfffdf9,80) and isColor(488,1379,0xfffdf9,80) and isColor(530,1312,0x82c33c,80) and isColor(600,1346,0xfffdf9,80) and isColor(563,1413,0x35751f,80) and isColor(445,1313,0x82c33c,80) then")){
                 TKB.xgsrizhi("领取--地鼠奖励")
                click(537,1361)  
                sleep(1000)
            }
            if (zhaose("if isColor(934,490,0xb05c0f,80) and isColor(449,534,0xfde4a5,80) and isColor(601,486,0xfde4a5,80) and isColor(225,572,0xa16135,80) and isColor(847,572,0xa16135,80) and isColor(950,715,0xfff6d9,80) and isColor(975,647,0xedb361,80) and isColor(599,1657,0xedb361,80) then")){
                 TKB.xgsrizhi("公告--关闭")
                click(934,489)  
                sleep(1000)
            }
            if (zhaose("if isColor(903,816,0xb05c0f,80) and isColor(396,1028,0xfce2cb,80) and isColor(384,1005,0xfffe67,80) and isColor(396,788,0xfff434,80) and isColor(610,915,0xfffe67,80) then")){
                 TKB.xgsrizhi("显示活动")
                var aa = random(1, 4)
                if (aa < 4){
                     TKB.xgsrizhi("观看视频")
                    click(540,1397)  
                    sleep(1000)
                }else{
                     TKB.xgsrizhi("关闭")
                    click(901,813)  
                    sleep(1000)
                }
            }





            TC = (new Date()).getTime()
        }
    }
}

//下载图片
function dowtupian(){
    var pnum = random(1, 600)
     TKB.xgsrizhi("下载图片"+pnum)
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    while (1){
        try {
            if (tem > 10){
                 TKB.xgsrizhi("访问次数够了退出")
                return false
            }else{
                if (tem == 5){
                    pnum = random(1, 100) 
                }
            }
            var filePath = files.join(dirpath, '1.png');
            // let imgurl = 'https://png-1300551841.cos.ap-guangzhou.myqcloud.com/'+pnum+'.png';
            let imgurl = 'https://tupian-1300185247.cos.ap-chengdu.myqcloud.com/'+pnum+'.png';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                return true
            } else {
                 TKB.xgsrizhi("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch(error) {
             TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
    }
     TKB.xgsrizhi("下载图片完成")
}

//修改头像
function xiugtx(){
    dowtupian()
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TS = (new Date()).getTime()
     TKB.xgsrizhi("修改头像")
    toast("修改头像")
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
             TKB.xgsrizhi("超时没有登录成功")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TS > 10*60*1000){
             TKB.xgsrizhi("超时退出")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            break
        }
        if(text("消息").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
             TKB.xgsrizhi("首页")
            click(100, 150)
            sleep(2000)
        }
        if(text("设置").exists() && text("我的相册").exists() || text("设置").exists() && text("我的收藏").exists()){
             TKB.xgsrizhi("设置")
            click(120, 350)
            sleep(2000)
        }
        if(text("个性名片").exists() && text("编辑资料").exists() || text("编辑资料").exists() && text("我的资料").exists()){
             TKB.xgsrizhi("编辑资料")
            click("编辑资料")
            sleep(2000)
        }
        if(text("从相册选择图片").exists() && text("拍照").exists() || text("从相册选择图片").exists() && text("取消").exists()){
             TKB.xgsrizhi("从相册选择图片")
            click("从相册选择图片")
            sleep(2000)
        }
        if(text("编辑资料").exists() && text("头像").exists() || text("编辑资料").exists() && text("性别").exists()){
             TKB.xgsrizhi("编辑资料2")
            click("头像")
            sleep(2000)
        }
        if(text("最近照片").exists() && text("取消").exists()){
             TKB.xgsrizhi("选择照片")
            click(100, 400)
            sleep(2000)
        }
        if(text("移动和缩放").exists() && text("完成").exists()){
             TKB.xgsrizhi("移动和缩放")
            click("完成")
            sleep(3000)
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            break
        }

        if(text("开启QQ之旅").exists() ){
             TKB.xgsrizhi("开启QQ之旅")
            back()
            sleep(2000)
        }
        if(text("绑定手机号码").exists() ){
             TKB.xgsrizhi("绑定手机号码")
            back()
            sleep(2000)
        }
        if(text("跳过").exists() && text("取消").exists() ){
             TKB.xgsrizhi("跳过")
            click("跳过")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("继续绑定").exists() ){
             TKB.xgsrizhi("继续绑定")
            click("跳过")  
            sleep(1000)
        }
        if(text("返回").exists() && text("关注").exists()){
             TKB.xgsrizhi("返回")
            back()
            sleep(3000)
        }
        if(text("进入勋章墙").exists() ){
             TKB.xgsrizhi("进入勋章墙")
            back()
            sleep(3000)
        }
        if(text("关闭应用").exists() && text("等待").exists()){
             TKB.xgsrizhi("等待")
            click("等待")   
            sleep(1000)
        }
    }
}

//qq养号
function qqyanghao(){
     TKB.xgsrizhi("qq养号")
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TS = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var tem = 1
    while(1){
        if ((new Date()).getTime() - TC > 4*60*1000){
             TKB.xgsrizhi("超市没有在首页")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
            tem = 1
        }
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
             TKB.qinglihh("com.tencent.mobileqq")
            break
        }
        if(text("关注").exists() && text("推荐").exists()  && id("com.tencent.mobileqq:id/name").exists() || text("推荐").exists() && text("视频").exists() && id("com.tencent.mobileqq:id/name").exists()){
             TKB.xgsrizhi("看点界面")
            TC = (new Date()).getTime()
            if (random(1, 10) > 8 || tem == 1){
                 TKB.xgsrizhi("点击推荐")
                click("推荐")
                sleep(4000)
                tem = 2
            }
            var sb = random(2, 10)
            for(var i = 0;i< sb ;i++){
                swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                sleep(random(1000, 4000))
            }
            if (text("广告").exists() || text("立即下载").exists()){
                 TKB.xgsrizhi("有广告")
            }else{
                click(random(500, 600), random(800, 1500))
                sleep(3000)
            }
        }else{
            if(text("看点").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
                 TKB.xgsrizhi("qq首页")
                click("看点")
                sleep(2000)
            }
        }
        if(desc("返回").exists() && text("关注").exists() && desc("小窗播放").exists() || desc("返回").exists() && desc("分享").exists() && text("关注").exists()){
             TKB.xgsrizhi("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("等待视频播放")
                sleep(random(3800, 4000))
            }
            back()
        }
        if(text("返回").exists() && text("收藏").exists() && text("写评论…").exists() || text("返回").exists() && text("已收藏").exists() && text("写评论…").exists()){
             TKB.xgsrizhi("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("浏览文章")
                swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                sleep(random(1000, 4000))
            }
            sb = random(1, 20)
            if (sb == 20){
                 TKB.xgsrizhi("点击收藏")
                click("收藏")
                sleep(2000)
            }
            back()
        }else{
            if(id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() && desc("分享").exists()){
                 TKB.xgsrizhi("打开到其他")
                var sb = random(1, 3)
                for(var i = 0;i< sb ;i++){
                    swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                    sleep(random(1000, 4000))
                }
                back()
                sleep(2000)
            }
        }
        if(text("设置").exists() && text("取消").exists()){
             TKB.xgsrizhi("设置")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
        }
        zonghe()
    }
}

//登录QQ
function dlqq(){
     TKB.xgsrizhi("登录qq")
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TB = (new Date()).getTime()
    var hh = "1111"
    var tem = 0
    var bb = 0
    var zh = "2149292992"
    var mm = "S8CryRJJ"
    var zl = 0    //上传资料


    var qqzh = "1234"   //qq账号
    var qqxb = "1234"   //qq性别
    var qqnc = "1234"   //qq昵称
    var qqqm = "1234"   //qq签名
    while(1){
        if ((new Date()).getTime() - TB > 20*60*1000){
             TKB.xgsrizhi("超时退出")
             TKB.qinglihh("com.tencent.mobileqq")
            return false
        }
        if ((new Date()).getTime() - TC > 5*60*1000){
             TKB.xgsrizhi("超时没有登录成功")
             TKB.qinglihh("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
        }
        if (tem == 0 && bb == 1){
             TKB.xgsrizhi("去拿号")
            // hh = gethaoma("weishiqq")
            // var ss = hh.split("----")
            // zh = ss[0]
            // mm = ss[1]   2149292992----S8CryRJJ
             TKB.xgsrizhi("账号:"+ zh+"密码："+mm)
            tem = 1
        }
        if(text("用户注册").exists() && text("忘记密码").exists() ){
            toastLog("还未注册qq")
            return false
        }
        if(text("用户注册").exists() && text("忘记密码").exists() ){
             TKB.xgsrizhi("输入账号界面")
            if (bb == 1){
                setText([0],zh)
                sleep(500)
                setText([1],mm)
                sleep(1000)
                try{
                    if (id("com.tencent.mobileqq:id/ TKB.xgsrizhiin").exists()){
                         TKB.xgsrizhi("点击控件")
                        var ss = id("com.tencent.mobileqq:id/ TKB.xgsrizhiin").findOnce().bounds();
                         TKB.xgsrizhi(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }else{
                        click(500, 1200)  
                    }
                    sleep(3000)
                }catch(error) {
                    sleep(1001)
                     TKB.xgsrizhi(error);
                }
            }else{
                 TKB.xgsrizhi("先去拿号")
                bb = 1
            }
        }
        if(text("消息").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
             TKB.xgsrizhi("登录成功")
            toast("登录成功")
            if (zl == 0){
                 TKB.xgsrizhi("去上传资料")
                click(100, 150)
                sleep(2000)
            }else{
                 TKB.xgsrizhi("资料上传完成")
                 TKB.qinglihh("com.tencent.mobileqq")
                back()
                return true
            }
        }
        if(text("设置").exists() && text("我的相册").exists() || text("设置").exists() && text("我的收藏").exists()){
             TKB.xgsrizhi("设置")
            if (zl == 0){
                 TKB.xgsrizhi("去上传资料")
                click(120, 350)
                sleep(2000)
            }else{
                 TKB.xgsrizhi("返回")
                back()
                sleep(1000)
            }
        }
        if(text("个性名片").exists() && text("编辑资料").exists() || text("编辑资料").exists() && text("我的资料").exists()){
             TKB.xgsrizhi("编辑资料")
            
            if (zl == 0){
                try {
                    var ss =  TKB.getAllTexts()
                     TKB.xgsrizhi(ss)
                    for(j = 0,len=ss.length; j < len; j++){
                        if (ss[j].indexOf("QQ：") != -1){
                             TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("QQ：")
                            qqzh = st[1]
                             TKB.xgsrizhi("QQ号："+ qqzh)
                        }
                        if (ss[j].indexOf("男") != -1){
                             TKB.xgsrizhi(ss[j])
                            var st = ss[j].split(" ")
                            qqxb = 1
                             TKB.xgsrizhi("qq性别：男")
                        }
                        if (ss[j].indexOf("女") != -1){
                             TKB.xgsrizhi(ss[j])
                            var st = ss[j].split(" ")
                            qqxb = 2
                             TKB.xgsrizhi("qq性别：女")
                        }
                        if (ss[j].indexOf("昵称:") != -1){
                             TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("昵称:")
                            qqnc = st[1]
                             TKB.xgsrizhi("QQ昵称"+ qqzh)
                        }
                        var qqqm = "1234"   //qq签名
                    }
                    toastLog("QQ号："+ qqzh + "--性别："+ qqxb + "--昵称："+ qqnc)
                    upzhanghao(qqzh)
                    scshuju(qqzh, "nickname", qqnc)
                    if (qqxb != "1234"){
                        scshuju(qqzh, "sex", qqxb)
                    }
                    if(id("com.tencent.mobileqq:id/info").exists()){
                        qqqm = id("com.tencent.mobileqq:id/info").findOnce().text()
                         TKB.xgsrizhi("签名："+ qqqm)
                        scshuju(qqzh, "jianjie", qqqm)
                    }
                }catch(error){
                    sleep(1001)
                     TKB.xgsrizhi(error);
                }
                zl = 1
            }else{
                 TKB.xgsrizhi("返回2")
                back()
                sleep(1000)
            }
        }
        if(text("拖动下方滑块完成拼图").exists() || desc("拖动下方滑块完成拼图").exists()){
             TKB.xgsrizhi("滑块验证")
            toast("滑块验证")  
            var point = findColor(captureScreen(), "#007aff", {
                region: [75,621, 450,600],
                threshold: 4
            });
            if(point){
                 TKB.xgsrizhi("滑滑块"+point.x+":"+point.y)
                // click(point.x, point.y)
                swipe(point.x, point.y+50, random(600, 1000),point.y,random(800, 1500))
                sleep(2000)
            }
            // swipe(339,743, 739,744,random(800, 1500))
            // sleep(2000)
        }
        
        if(text("开始验证").exists() ){
             TKB.xgsrizhi("开始验证")
            click("开始验证")  
            sleep(2000)
        }
        if(text("资料辅助验证").exists() || desc("资料辅助验证").exists()){
             TKB.xgsrizhi("资料辅助验证")
            try{
                if (desc("资料辅助验证").exists()){
                     TKB.xgsrizhi("点击控件")
                    var ss = desc("资料辅助验证").findOnce().bounds();
                     TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                 TKB.xgsrizhi(error);
            }
            click("资料辅助验证")  
            sleep(2000)
        }
        if(text("以上都不是").exists() || desc("以上都不是").exists()){
             TKB.xgsrizhi("以上都不是")
            try{
                if (desc("以上都不是").exists()){
                     TKB.xgsrizhi("点击控件")
                    var ss = desc("以上都不是").findOnce().bounds();
                     TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    click(ss.centerX(), ss.centerY()+300);
                    sleep(2000)
                }else{
                    click("以上都不是")  
                    sleep(500)
                }
            }catch(error) {
                sleep(1001)
                 TKB.xgsrizhi(error);
            }
            click("下一步")  
            sleep(1000)
        }
        if(text("验证成功").exists() || desc("验证成功").exists()){
             TKB.xgsrizhi("验证成功")
            back()
            sleep(2000)
            back()
            sleep(2000)
        }
        if(text("登录失败").exists() && text("确定").exists() ){
             TKB.xgsrizhi("登录失败")
            click("确定")  
            sleep(1000)
        }
        if(text("新用户").exists() && text("登录").exists() ){
             TKB.xgsrizhi("新用户")
            click("登录")  
            sleep(1000)
        }
        if(text("暂不使用").exists() && text("同意").exists() ){
             TKB.xgsrizhi("暂不使用")
            click("同意")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("取消").exists() ){
             TKB.xgsrizhi("跳过")
            click("跳过")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("继续绑定").exists() ){
             TKB.xgsrizhi("继续绑定")
            click("跳过")  
            sleep(1000)
        }
        if(text("返回").exists() && text("关注").exists()){
             TKB.xgsrizhi("返回")
            back()
            sleep(3000)
        }
        if(text("解除保护").exists() && text("取消").exists() || text("资金管理").exists() && text("取消").exists()){
             TKB.xgsrizhi("封了")
            if (tem == 1){
                gxzhuangtai("weishiqq", zh ,"fengl")
            }
            click("取消")  
            tem = 0
            bb = 0
            sleep(3000)
        }
        if(text("允许").exists() ){
             TKB.xgsrizhi("允许")
            click("允许")  
            sleep(1000)
        }
        if(text("开启QQ之旅").exists() ){
             TKB.xgsrizhi("开启QQ之旅")
            back()
            sleep(2000)
        }
        if(text("绑定手机号码").exists() ){
             TKB.xgsrizhi("绑定手机号码")
            back()
            sleep(2000)
        }
        if(text("关闭应用").exists() && text("等待").exists()){
             TKB.xgsrizhi("等待")
            click("等待")   
            sleep(1000)
        }
        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
         TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 *1000
        var TJH = (new Date()).getTime()
        // device.setNotificationVolume(0)
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try {
                if ((new Date()).getTime() - TJH > 3*55*1000){
                    log("激活设备")
                    TKB.xjihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwu = TKB.huoqurenwu(sbip, yhname, yhbh, xmxh)
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        renwu = false
                    }
                    if (renwu == true){
                        TKB.xgsrizhi("继续qq任务")
                    }else{
                            TKB.xgsrizhi("服务器上没有qq任务")
                            TKB.qinglihh(dqbaoming)
                            sleep(2000)
                            TKB.xgsrizhi("执行完存停止数据2")
                            TKB.cunqusj("jiaoben","tingzhi")
                            java.lang.System.exit(0);
                            _THREADSSxx.interrupt()
                            _THREADSS.interrupt()
                    }
                    if( files.exists("/sdcard/观沧海.mp3") == false){
                         TKB.xgsrizhi("没有音乐文件去下载")
                         TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                 TKB.xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            } catch(error){
                toastLog(error);
                sleep(random(3000,8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************

//上传账号
function upzhanghao(zhanghao){
    return true
}

function scshuju(name, ziduan, shuju){
    return true
}



//*******************************************************对接服务器*****************************************************************

//执行QQ项目
function zhixingqq(){
    try {
        bofangyy()
        toastLog("执行QQ任务")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("QQ")
            if (baom == null){
                log("未安装QQ")
                var bbd = TKB.wdjxiazai("QQ", "8.1.5")
                if (bbd == false){
                    TKB.xgsrizhi("没安装成功QQ")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            TKB.xgsrizhi(rw)
            var ss = dlqq()
            if (ss == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "qq")
                if (rw== "养号"){
                    TKB.xgsrizhi("去养号")
                    qqyanghao()
                }else{
                    if (rw== "看广告"){
                        TKB.xgsrizhi("去看广告")
                        shuizuguan()
                        noingchang()
                    }
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            //files.write("/sdcard/jiaoben.txt", "tingzhi")
            TKB.cunqusj("jiaoben","tingzhi")
            sleep(1000)
            java.lang.System.exit(0);
            _THREADSSxx.interrupt()
        });
    } catch(error) {
        log(error);
        TKB.cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000,2000))
    }
}




zhixingqq()








// log(getClip()+"**")






