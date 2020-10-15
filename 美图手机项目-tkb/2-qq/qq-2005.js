if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}






//********************************************************下载播放mp3***************************************************************

function dowmp3(){
    toastLog("下载mp3")
    while (1){
        try {
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
        } catch(error) {
            toastLog(error);
            sleep(random(3000,8000))
        }
    }
}

//写文本
function xieru(lujing, zhi){
	var aa = files.read(lujing)
	var file = open(lujing, "w");
	var zhanghao = aa.split("\n")
	for (var k in zhanghao){
		if (zhanghao[k] == ""){
			zhanghao.splice(k,k)
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
        //log(defaultSetting)
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
        log(error);
        return 1
    }
}

//关闭应用
function guanbiyy(bb){
    log("关闭应用")               //www.feiyunjs.com
    try{
        if (bb == 1){
            for(var i = 0; i < 10; i ++){
                sleep(500);
                back();
            }
        }else{
            // launch(bb);
            // sleep(2000);
            // let packageName = currentPackage();
            let packageName = bb
            log(packageName)
            app.openAppSetting(packageName);
            text(app.getAppName(packageName)).waitFor();  
            let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
            if (is_sure.enabled()) {
                textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                textMatches(/(.*确.*|.*定.*)/).findOne().click();
                log(app.getAppName(packageName) + "应用已被关闭");
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
            } else {
                log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
                back();
                sleep()
                back();
            }
        }
    }catch(error) {
        log(error);
    }
}

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
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", "," )
        var yy = getInsideString(ss[k], ",", ",0" )
        var ys = getInsideString(ss[k], "0x", ",80)" )
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#"+ys, xx, yy, 20)) {

        }else{
            imgss.recycle()
            return 0
        }
    }
    imgss.recycle()
    return 1
}

//清理缓存
function qinglihh(){
    var TB = (new Date()).getTime()
    back()
    sleep(500)
    home()
    sleep(1000)
	while(true){
		if ((new Date()).getTime() - TB > 20*1000){
            log("超时没完成")
            home()
            sleep(2000)
            back()
			break
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                log("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                break
            }else{
                home()
                sleep(2000)
                recents()
                sleep(3000)
            }
        }catch (error) {
            log(error);
        }
	}
}

//*******************************************************QQ项目 *****************************************************************

function zonghe(){
    
    if(text("允许").exists() ){
        log("允许")
        click("允许")  
        sleep(1000)
    }
    if(text("开启QQ之旅").exists() ){
        log("开启QQ之旅")
        back()
        sleep(2000)
    }
    if(text("绑定手机号码").exists() ){
        log("绑定手机号码")
        back()
        sleep(2000)
    }
    if(text("关闭应用").exists() && text("等待").exists()){
        log("等待")
        click("等待")   
        sleep(1000)
    }
    if(text("退出").exists() && text("我知道了").exists()){
        log("我知道了")
        click("我知道了")   
        sleep(1000)
    }
    if(text("稍后处理").exists() && text("立即升级").exists()){
        log("稍后处理")
        click("稍后处理")   
        sleep(1000)
    }
}

//打开指定游戏
function dakai(name){
    log("打开指定游戏")
    var tem = 1    //判断点击哪个页面
    var hd = 0     //滑动的次数
    var TC = (new Date()).getTime()
    var TB = (new Date()).getTime() - 100000
    while (1){
        if ((new Date()).getTime() - TB > 20*1000){
            baoming = currentPackage()
            baoming = baoming.split(":")
            if (baoming[0] != "com.tencent.mobileqq"){
                log("掉线启动1")
                log(baoming[0])
                launch("com.tencent.mobileqq")
                sleep(2222)
            }
            TB = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TC > 3*60*1000){
            log("超时未进入游戏")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            tem = 1
			TC = (new Date()).getTime()
        }
        if (desc("分享").exists() && id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() ||  id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() && id("com.tencent.mobileqq:id/ivTitleBtnRightImage").exists()){
            log("推荐界面点到游戏了")
            id("com.tencent.mobileqq:id/ivTitleBtnLeft").findOnce().click()
            sleep(500)
        }
        if(text("消息").exists() && desc("快捷入口").exists() || text("消息").exists() && text("联系人").exists()){
            log("qq首页")
            // click("动态")   //点击动态
            click(930, 2000)
            sleep(2000)
        }
        if(text("退出").exists() && text("重新登录").exists() || text("下线通知").exists() && text("重新登录").exists()){
            log("被别人挤下线")
            click("重新登录")  
            sleep(2000)
        }
        if(text("允许").exists()){
            log("允许")
            click("允许")  
            sleep(2000)
        }
        if(text("动态").exists() && text("玩一玩").exists() || text("玩一玩").exists() && text("好友动态").exists()){
            log("动态界面进入玩一玩")
            click("玩一玩")   //点击玩一玩
            sleep(2000)
        }
        if(text("推荐").exists() && text("我的").exists() || text("推荐").exists() && text("小程序").exists()){
            log("推荐界面")
            if (tem == 1){
                log("点击我的")
                click("我的")   
                sleep(3000)
            }else{
                if (text("搜索").exists()){
                    log("搜索界面")
                    if (text(name).exists()){
                        log("看到小程序了")
                        try {
                            var ws = text(name).boundsInside(0, 370, device.width, device.height).findOnce().bounds()
                            if (ws != null){
                                log(ws.centerX())
                                log(ws.centerY())
                                click(ws.centerX(), ws.centerY())
                                sleep(3000)
                                break
                            }
                        }catch(error) {
                            log(error);
                            sleep(2000)
                        }
                    }else{
                        log("输入名字")
                        setText(name)
                        sleep(2000)
                    }
                }else{
                    log("点击推荐")
                    click("小程序")   //点击小程序
                    sleep(2000)
                    if(text("工具").exists()){
                        try {
                            var ws = text("工具").findOnce().bounds()
                            if (ws != null){
                                log(ws.centerX())
                                log(ws.centerY())
                                click(ws.centerX(), ws.centerY() - 220)
                                sleep(4000)
                            }
                        }catch(error) {
                            log(error);
                            sleep(2000)
                        }
                    }else{
                        if(desc("工具").exists()){
                            try {
                                var ws = desc("工具").findOnce().bounds()
                                if (ws != null){
                                    log(ws.centerX())
                                    log(ws.centerY())
                                    click(ws.centerX(), ws.centerY() - 220)
                                    sleep(4000)
                                }
                            }catch(error) {
                                log(error);
                                sleep(2000)
                            }
                        }
                    }
                }
            }
        }
        if (text("搜索").exists() && text("取消").exists()){
            log("搜索界面2")
            if (text(name).exists()){
                log("看到小程序了2")
                try {
                    var ws = text(name).boundsInside(0, 400, device.width, device.height).findOnce().bounds()
                    if (ws != null){
                        log(ws.centerX())
                        log(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(3000)
                        break
                    }
                }catch(error) {
                    log(error);
                    sleep(2000)
                }
            }else{
                log("输入名字2")
                setText(name)
                sleep(2000)
            }
        }
        if(text("最近使用").exists() && text("我的").exists() || text("最近使用").exists() && text("小程序").exists()){
            log("最近使用界面")
            if (text(name).exists()){
                log("找到小程序")
                // click(name)
                try {
                    var ws = text(name).findOnce().bounds()
                    if (ws != null){
                        log(ws.centerX())
                        log(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(4000)
                        click(name)
                        break
                    }
                }catch(error) {
                    log(error);
                    sleep(2000)
                }
                sleep(3000)
            }else{
                if (hd < 2){
                    log("没找到")
                    swipe(438,533, 349,1481,500)
                    sleep(2000)
                    hd = hd + 1
                }else{
                    log("找了几次没找到")
                    // click(673,1831)   //点击小程序
                    click("小程序")
                    sleep(2000)
                    tem = 2
                }
            }
        }
    }
}

//喵喵水族馆
function shuizuguan(){
    log("喵喵水族馆")
    dakai("喵喵水族箱")
    var TC = (new Date()).getTime() - 150*1000
    var TS = (new Date()).getTime()
    var TE = (new Date()).getTime()
    var set = random(30, 40)   //玩游戏的时间
    var gcs = random(9, 16)   //观看广告的次数
    var tem = 0

    while(1){
        if ((new Date()).getTime() - TE > set*60*1000 || gcs < 1 ){
            log("超时退出" + gcs)
            qinglihh()
            break
        }
        if ((new Date()).getTime() - TS > 5*60*1000){
            log("超时没看广告")
            qinglihh()
            dakai("喵喵水族箱")
            TS = (new Date()).getTime()
        }
        if (zhaose("if isColor(358,1562,0x3d1e0d,80) and isColor(704,1554,0xffffff,80) and isColor(574,1540,0x3d1e0d,80) and isColor(770,1575,0xffffff,80) and isColor(431,1598,0xfffa62,80) then") || zhaose("if isColor(285,1625,0x3eb8fe,80) and isColor(290,1547,0x3d1e0d,80) and isColor(434,1596,0xfffa62,80) and isColor(773,1563,0x3d1e0d,80) and isColor(610,1486,0x40bbfe,80) and isColor(788,1565,0x3d1e0d,80) then")){
            log("首页")
            tem = 0
            var ss = random(1, 10)
            if (ss == 1){
                log("升级鱼钩")
                click(220,366)
            }else{
                if (ss == 2){
                    log("升级鱼线")
                    click(542,362)
                }else{
                    if (ss == 3){
                        log("斗鱼")
                        click(93,791)
                    }else{
                        if (ss == 4){
                            log("鱼池")
                            click(866,362)
                        }else{
                            var img = captureScreen()
                            var fs = findColor(img, "#f4911a", {
                                region: [384,596, 420,170],
                                threshold: 5
                            });
                            if(fs){
                                log("有鸽子")
                                toast("有鸽子")
                                click(438,786)
                                sleep(100)
                                click(564,785)
                                sleep(100)
                                click(728,799)
                                sleep(100)
                            }
                            log("钓鱼")
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
            log("普通领取--点播放广告")
            var bb = random(1, 5)
            if (bb < 4){
                click(544,1375)
                sleep(1000)
            }else{
                log("点击普通领取")
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
                    log("关闭广告")
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
            log("继续观看")
            click(800,1200)
            sleep(500)
            click("继续观看")
            sleep(1000)
        }
        if( text("取消").exists() && text("设置").exists()){
            log("取消")
            click("取消")
            sleep(500)
            back()
            sleep(1000)
        }
        if( text("发送给").exists() && text("取消").exists()){
            log("发送给")
            back()
            sleep(1000)
        }

        if ((new Date()).getTime() - TC > 5*1000){
            if (zhaose("if isColor(662,1179,0x419ffd,80) and isColor(576,1206,0xffffff,80) and isColor(672,1224,0x3d1e0d,80) and isColor(463,1313,0x000000,80) and isColor(697,1292,0x000000,80) and isColor(631,1353,0xffffff,80) then")){
                log("按住屏幕左右滑动")
                var as = random(2, 4)
                for(var i = 0; i < as; i++){
                    swipe(random(700, 800),932, 238,998, random(300, 500))
                    sleep(200)
                    swipe(random(200, 300),998, random(400, 800),932, random(300, 500))
                }
            }
            if (zhaose("if isColor(421,1621,0xffffff,80) and isColor(659,1588,0xffffff,80) and isColor(323,1673,0xb35027,80) and isColor(725,1673,0xb35027,80) and isColor(586,1527,0x3d1e0d,80) and isColor(658,1571,0xffffff,80) then")){
                log("领取奖励")
                click(536,1595)
                sleep(1000)
            }
            if (zhaose("if isColor(118,344,0xffd3ce,80) and isColor(265,457,0xffffff,80) and isColor(235,565,0x000000,80) and isColor(264,658,0xffffff,80) and isColor(384,550,0x000000,80) and isColor(513,568,0x000000,80) then")){
                log("升级鱼钩提示")
                click(212,415)
                sleep(1000)
            }
            if (zhaose("if isColor(643,350,0xffd3ce,80) and isColor(554,437,0xffffff,80) and isColor(376,533,0xffffff,80) and isColor(427,570,0x000000,80) and isColor(594,641,0x000000,80) and isColor(646,624,0xffffff,80) then")){
                log("升级鱼线提示")
                click(553,399)
                sleep(1000)
            }
            if (zhaose("if isColor(370,1427,0xfe895a,80) and isColor(397,1419,0xffffff,80) and isColor(827,1024,0xf45f61,80) and isColor(326,784,0xfff1cc,80) and isColor(554,606,0xce3f41,80) then")){
                log("免费存入钱包")
                var as = random(1, 5)
                if (as < 4){
                    click(531,1433)
                    sleep(1000)
                }else{
                    log("关闭")
                    click(889,548)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(719,1469,0xffffff,80) and isColor(562,1512,0x66ff00,80) and isColor(479,1515,0x65fe00,80) and isColor(668,1510,0x5fec06,80) and isColor(586,1431,0xd99761,80) then")){
                log("连续点击吊起")
                var as = random(5, 10)
                for(var i = 0; i < as; i++){
                    click(646,1403)
                    sleep(random(50, 90))
                    click(608,1422)
                    sleep(random(50, 100))
                }
            }
            if (zhaose("if isColor(715,1469,0xffffff,80) and isColor(624,1518,0x5bdf0a,80) and isColor(596,1530,0x60ed06,80) and isColor(516,1516,0x60eb06,80) and isColor(479,1508,0x66fe00,80) then")){
                log("连续点击吊起2")
                var as = random(5, 10)
                for(var i = 0; i < as; i++){
                    click(676,1407)
                    sleep(random(50, 90))
                    click(608,1422)
                    sleep(random(50, 100))
                }
            }
            if (zhaose("if isColor(893,696,0xffffff,80) and isColor(701,1077,0xfe895a,80) and isColor(696,1127,0xb35027,80) and isColor(465,1090,0xffffff,80) and isColor(403,1080,0xfe895a,80) and isColor(452,1056,0xffffff,80) and isColor(410,1068,0xfe895a,80) and isColor(910,920,0x3d1e0d,80) then")){
                log("解锁新海域")
                click(891,694)
                sleep(1000)
            }
            if(zhaose("if isColor(473,687,0xffe67b,80) and isColor(966,395,0xffffff,80) and isColor(963,892,0x3d1e0d,80) and isColor(380,1325,0xfe895a,80) and isColor(424,1299,0xffe05e,80) and isColor(737,1325,0xfe895a,80) and isColor(684,1297,0xffffff,80) then")){
                log("分享领取")
                click(965,398)
                sleep(1000)
            }
            if (zhaose("if isColor(430,1334,0xffffff,80) and isColor(476,1330,0xfe895a,80) and isColor(510,1332,0xffffff,80) and isColor(348,1432,0xb35027,80) and isColor(685,1297,0xffffff,80) and isColor(729,1337,0xfe895a,80) then")){
                log("领取")
                click(572,1330)
                sleep(1000)
            }
            if (zhaose("if isColor(810,1038,0xf45f61,80) and isColor(561,605,0xce3f41,80) and isColor(505,987,0xfadd4c,80) and isColor(435,1431,0xffffff,80) and isColor(692,1431,0xfe895a,80) and isColor(674,1420,0xffffff,80) then")){
                log("存入钱包")
                var as = random(1, 5)
                if (as < 4){
                    click(563,1432)
                    sleep(1000)
                }else{
                    log("关闭")
                    click(889,548)
                    sleep(1000)
                }
                
            }
            if (zhaose("if isColor(969,721,0xffffff,80) and isColor(701,1214,0xffffff,80) and isColor(678,1211,0x321209,80) and isColor(615,1239,0xffffff,80) and isColor(308,1211,0xfe895a,80) and isColor(417,1302,0xb35027,80) and isColor(453,1241,0xffffff,80) then")){
                log("黄金鱼钩--立即激活")
                click(535,1212)
                sleep(1000)
            }
            if (zhaose("if isColor(328,454,0x4d493e,80) and isColor(1008,412,0xffffff,80) and isColor(530,1638,0x4d493e,80) and isColor(938,1273,0x4c3b2b,80) and isColor(718,163,0x26241f,80) and isColor(934,444,0xfff1cc,80) then")){
                log("怎么玩提示--斗鱼")
                click(1005,415)
                sleep(1000)
            }
            if (zhaose("if isColor(206,1703,0xffffff,80) and isColor(506,1735,0x4d493e,80) and isColor(429,1406,0x4d493e,80) and isColor(887,620,0x19354c,80) and isColor(502,443,0x2b4125,80) and isColor(746,163,0x4d493e,80) then")){
                log("斗鱼提示 -- 初级斗场")
                click(153,1636)
                sleep(1000)
            }
            if (zhaose("if isColor(102,1643,0x4f0800,80) and isColor(152,1759,0xffffff,80) and isColor(213,1651,0x4f0800,80) and isColor(671,1749,0x90d87b,80) and isColor(1042,1751,0x3d1e0d,80) and isColor(792,1767,0x90d87b,80) and isColor(813,1775,0x3d1e0d,80) then")){
                log("水族箱")
                var sz = random(1, 3)
                if (sz == 1){
                    log("点击升级")  
                    click(965,1756)
                    sleep(1000)
                }else{
                    log("点击区钓鱼")
                    click(162,1748)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(448,975,0x3d1e0d,80) and isColor(470,1028,0xffffff,80) and isColor(467,754,0x4acbff,80) and isColor(304,796,0x3d1e0d,80) and isColor(521,809,0x4f0800,80) and isColor(379,1394,0x3d1e0d,80) then")){
                log("升级鱼池界面")
                var sz = random(1, 5)
                if (sz == 1){
                    log("点击升级鱼池")  
                    click(876,1107)
                    sleep(1000)
                }else{
                    if (sz == 2){
                        log("点击升级过滤器")
                        click(878,1336)
                        sleep(1000)
                    }else{
                        log("关闭升级界面")
                        click(1001,862)
                        sleep(1000)
                    }
                }
            }
            if (zhaose("if isColor(43,134,0xfc2f1f,80) and isColor(510,365,0xff0029,80) and isColor(473,432,0x3d1e0d,80) and isColor(990,412,0x3d1e0d,80) and isColor(1036,357,0xfff1cc,80) then") || zhaose("if isColor(51,138,0xfc2f1f,80) and isColor(474,342,0x3d1e0d,80) and isColor(624,362,0x3d1e0d,80) and isColor(542,374,0xff0029,80) and isColor(120,2063,0xfff1cc,80) then")){
                log("斗鱼PK界面 -- 退出")
                click(56,137)
                sleep(1000)
            }

            if (zhaose("if isColor(441,644,0xfe7a38,80) and isColor(507,658,0xfe7a38,80) and isColor(640,644,0xfe7a38,80) and isColor(952,552,0xffffff,80) and isColor(337,1528,0xfe895a,80) and isColor(449,1628,0xb35027,80) and isColor(441,1559,0xffffff,80) then")){
                log("金币不足")
                click(551,1562)
                sleep(1000)
            }
            if (zhaose("if isColor(502,540,0x3d1e0d,80) and isColor(441,634,0xfe7a38,80) and isColor(488,636,0xfe7a38,80) and isColor(574,658,0xfe7b38,80) and isColor(660,623,0xfe7a38,80) and isColor(952,558,0xffffff,80) and isColor(972,699,0x3d1e0d,80) and isColor(966,735,0xfec9b2,80) then")){
                log("金币不足--升级鱼钩")
                var sz = random(1, 5)
                if (sz < 4){
                    log("视频获得")
                    click(582,1558)
                    sleep(1000)
                }else{
                    log("关闭")
                    click(952,554)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(452,689,0xfe5538,80) and isColor(563,701,0xfe5538,80) and isColor(640,673,0xfe5538,80) and isColor(759,891,0xffffff,80) and isColor(251,936,0x3d1e0d,80) and isColor(411,1195,0xfe895a,80) and isColor(897,603,0xffffff,80) then")){
                log("获得荣誉")
                click(545,1209)
                sleep(1000)
            }
            if (zhaose("if isColor(252,876,0x3d1e0d,80) and isColor(777,812,0xffffff,80) and isColor(904,804,0x3d1e0d,80) and isColor(897,600,0xffffff,80) and isColor(513,690,0xfe5538,80) and isColor(563,706,0xfe5538,80) then")){
                log("获得荣誉2")
                var sz = random(1, 5)
                if (sz < 4){
                    log("获得荣誉")
                    click(540,1216)
                    sleep(1000)
                }else{
                    log("关闭")
                    click(894,602)
                    sleep(1000)
                }
            }
            if (zhaose("if isColor(175,1150,0xfec9b2,80) and isColor(169,1153,0x3d1e0d,80) and isColor(324,1306,0x3d1e0d,80) and isColor(330,1305,0xffffff,80) and isColor(398,1307,0xfe895a,80) and isColor(585,1299,0xffffff,80) and isColor(583,1335,0xffffff,80) then")){
                log("鱼线长度确定-要继续新海域")
                click(539,1313)
                sleep(1000)
            }
            if (zhaose("if isColor(722,1097,0xffe45f,80) and isColor(719,1040,0xffe45f,80) and isColor(892,697,0xffffff,80) and isColor(431,1129,0xb35027,80) and isColor(457,1065,0xfe895a,80) and isColor(584,1055,0xffffff,80) and isColor(672,1070,0xfe895a,80) then")){
                log("分享获得")
                click(892,693)
                sleep(1000)
            }
            if (zhaose("if isColor(445,687,0xfe7938,80) and isColor(524,694,0xfe7938,80) and isColor(640,657,0xfe7938,80) and isColor(902,613,0xffffff,80) and isColor(829,1043,0x3d1e0d,80) and isColor(360,1296,0xfe895a,80) and isColor(445,1293,0xffffff,80) then")){
                log("锦鲤送宝")
                click(568,1290)
                sleep(1000)
            }
            if (zhaose("if isColor(88,641,0xfff2cc,80) and isColor(188,433,0xffffff,80) and isColor(342,431,0xeb4b94,80) and isColor(420,424,0xeb4b94,80) and isColor(958,447,0xfff2cc,80) and isColor(990,381,0xffffff,80) then")){
                log("每日登陆奖励")
                click(539,1649)
                sleep(1000)
                click(990,380)
                sleep(1000)
            }
            if(zhaose("if isColor(383,1104,0xfe895a,80) and isColor(466,1069,0xffffff,80) and isColor(634,1062,0xffffff,80) and isColor(651,1085,0xfe895a,80) and isColor(528,1143,0xb35027,80) and isColor(481,560,0xfe7938,80) and isColor(550,572,0xfe7938,80) then")){
                log("解锁新鱼种")
                click(908,461)
                sleep(1000)
            }
            if(zhaose("if isColor(374,759,0x000000,80) and isColor(687,833,0x080706,80) and isColor(264,1325,0xfe895a,80) and isColor(343,1362,0xb35027,80) and isColor(221,1266,0x3d1e0d,80) then")){
                log("离线收益")
                click(543,1267)
                sleep(1000)
            }
            if(zhaose("if isColor(907,612,0xffffff,80) and isColor(909,840,0x3d1e0d,80) and isColor(504,1044,0x43a6ff,80) and isColor(486,1070,0x5d3b3c,80) and isColor(473,1273,0xfe895a,80) and isColor(434,1281,0xffffff,80) then")){
                log("获取战斗次数")
                click(554,1281)
                sleep(1000)
            }
            if (zhaose("if isColor(508,451,0x90d87b,80) and isColor(440,302,0x3d1e0d,80) and isColor(961,642,0x52aefb,80) and isColor(574,247,0xffffff,80) and isColor(480,339,0xfbc48d,80) and isColor(45,139,0xfc2f1f,80) then")){
                log("斗鱼主界面")
                var bs = random(1, 5)
                if (bs == 1){
                    log("点击升级")
                    click(594,454)
                    sleep(1000)
                }else{
                    if (bs == 2){
                        log("点击金币")
                        click(886,451)
                        sleep(1000)
                    }else{
                        if (bs == 3){
                            log("点击获得荣耀")
                            click(915,1552)
                            sleep(1000)
                        }else{
                            log("退出")
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
    log("疯狂农场")
    dakai("疯狂农场")
    var TC = (new Date()).getTime() - 150*1000
    var TS = (new Date()).getTime()
    var TE = (new Date()).getTime()
    var set = random(30, 40)   //玩游戏的时间
    var gcs = random(9, 16)   //观看广告的次数
    var tem = 0
    while(1){
        if ((new Date()).getTime() - TE > set*60*1000 || gcs < 1 ){
            log("超时退出" + gcs)
            qinglihh()
            break
        }
        if ((new Date()).getTime() - TS > 5*60*1000){
            log("超时没看广告")
            qinglihh()
            dakai("疯狂农场")
            TS = (new Date()).getTime()
        }
        if (zhaose("if isColor(268,181,0xb4d2ec,80) and isColor(266,172,0x5288c0,80) and isColor(317,173,0xfdf42d,80) and isColor(280,1799,0xfccc60,80) and isColor(540,1799,0xfefb2a,80) and isColor(826,1866,0xff8179,80) then")){
            log("首页")
            tem = 0
            var bb = random(1, 12)
            if (bb == 1){
                log("点击商店")
                click(281,1892)  
                sleep(1000)
            }else{
                if (bb == 2){
                    log("点击升级")
                    click(545,1864)  
                    sleep(1000)
                }else{
                    if (bb == 3){
                        log("点击宝箱")
                        click(816,1895)  
                        sleep(1000)
                    }else{
                        if (bb == 4){
                            log("点击浇水")
                            click(518,583)  
                            sleep(1000)
                        }else{
                            if (bb == 5){
                                log("点击任务奖励")
                                click(1018,1667)  
                                sleep(1000)
                            }else{
                                if (bb == 6){
                                    log("点击地鼠")
                                    click(921,918)  
                                    sleep(1000)
                                }else{
                                    if (bb == 7){
                                        log("农场改造")
                                        click(91,473)  
                                        sleep(1000)
                                    }else{
                                        
                                        var aa = random(5, 10)
                                        for (var i=0 ;i < aa;i++){
                                            try{
                                                var point = findColor(captureScreen(), "#f9c843", {
                                                    region: [112,835, 770,650],
                                                    threshold: 6
                                                })
                                                if (point){
                                                    log("点击金币")
                                                    click(point.x, point.y)
                                                }
                                            }catch(error) {
                                                log(error);
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
                    log("关闭广告")
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
            log("取消")
            click("取消")
            sleep(500)
            back()
            sleep(1000)
        }
        if( text("发送给").exists() && text("取消").exists()){
            log("发送给")
            back()
            sleep(1000)
        }
        if ((new Date()).getTime() - TC > 5*1000){
            if (zhaose("if isColor(975,553,0xb05c0f,80) and isColor(536,619,0xb77242,80) and isColor(521,583,0xfee49f,80) and isColor(386,601,0xfee49f,80) and isColor(547,1254,0x35e0f3,80) and isColor(491,1366,0x1a618f,80) and isColor(465,1329,0xffffff,80) and isColor(681,1256,0x35e0f3,80) then")){
                log("立即改造")
                click(541,1309)  
                sleep(1000)
            }
            if (zhaose("if isColor(522,366,0xfff4cc,80) and isColor(635,387,0xfff4cc,80) and isColor(704,426,0xb65c39,80) and isColor(466,334,0xfff4cc,80) and isColor(81,1627,0xffc418,80) and isColor(987,1748,0x963908,80) and isColor(379,606,0xffa960,80) then")){
                log("商店界面")
                var aa = random(1, 4)
                if (aa == 1){
                    log("第一个")
                    click(339,1148)
                }else{
                    if (aa == 2){
                        log("打开")
                        click(744,1155)
                    }else{
                        log("返回主界面")
                        click(986,1749)  
                    }
                }
                sleep(1000)
            }
            if (zhaose("if isColor(556,577,0xfee49f,80) and isColor(655,579,0xfee49f,80) and isColor(77,800,0xedb361,80) and isColor(728,636,0xa16135,80) and isColor(819,1321,0xedb361,80) and isColor(516,1254,0x98f335,80) and isColor(470,1306,0xffffff,80) and isColor(467,1366,0x348f1a,80) then")){
                log("农场改造--开始改造")
                click(543,1307)  
                sleep(1000)
            }
            if (zhaose("if isColor(602,1253,0x98f335,80) and isColor(630,1300,0xffffff,80) and isColor(512,1326,0xffffff,80) and isColor(696,1285,0x4e982d,80) and isColor(488,636,0xa16135,80) and isColor(85,1049,0xedb361,80) then")){
                log("农场改造--开始改造-2")
                click(543,1307)  
                sleep(1000)
            }
            if (zhaose("if isColor(987,717,0xb05c0f,80) and isColor(1010,944,0xedb361,80) and isColor(118,1212,0xfff6d9,80) and isColor(452,1310,0xfffdf9,80) and isColor(591,1332,0xfffdf9,80) and isColor(704,1242,0x98f33b,80) and isColor(419,1242,0x98f33b,80) then")){
                log("金币等着你--去收集")
                click(540,1314)  
                sleep(1000)
            }
            if (zhaose("if isColor(650,1461,0xffffff,80) and isColor(476,1401,0x98f33b,80) and isColor(294,740,0x5d3a21,80) and isColor(108,761,0x5c3a21,80) and isColor(386,750,0x7f7250,80) and isColor(60,1063,0xfa0a09,80) and isColor(523,879,0x3e69a4,80) then")){
                log("第一次灌溉提示--下雨")  
                click(547,1461)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1062,0xfa0a09,80) and isColor(503,919,0xd46b37,80) and isColor(543,922,0xd46c39,80) and isColor(356,883,0x3e6aa4,80) and isColor(603,617,0xffffff,80) and isColor(513,573,0x52d5ff,80) then")){
                log("对农场进行一次灌溉")
                click(532,579)  
                sleep(1000)
            }
            if (zhaose("if isColor(387,732,0xfee4a1,80) and isColor(661,752,0xfee4a1,80) and isColor(999,725,0xb05c0f,80) and isColor(485,1402,0x98f33b,80) and isColor(492,1460,0xfffdf9,80) and isColor(696,1455,0xfffdf9,80) and isColor(71,1027,0xedb361,80) then")){
                log("灌溉 --下雨")
                click(555,1470)  
                sleep(1000)
            }
            if (zhaose("if isColor(541,1798,0xfefb2a,80) and isColor(582,1968,0xfef4d1,80) and isColor(573,1764,0xfccc60,80) and isColor(377,1613,0x710d0b,80) and isColor(513,1709,0x710d0b,80) and isColor(729,1708,0x710d0b,80) then")){
                log("升级界面")
                var aa = random(5, 10)
                for (var i=0 ;i < aa;i++){
                    click(random(185, 856), random(830, 1326))
                    sleep(500)
                }
                click(537,1881)
                sleep(1000)
            }
            if (zhaose("if isColor(533,1763,0xfccc60,80) and isColor(580,1802,0xfefb2a,80) and isColor(472,1963,0xf9edc9,80) and isColor(530,1967,0xfff5d2,80) and isColor(581,1960,0xfff5d2,80) and isColor(634,1877,0xde8e49,80) then")){
                log("升级界面2")
                var aa = random(5, 10)
                for (var i=0 ;i < aa;i++){
                    click(random(185, 856), random(830, 1326))
                    sleep(500)
                }
                click(537,1881)
                sleep(1000)
            }
            if (zhaose("if isColor(519,1374,0xbdf669,80) and isColor(438,1412,0xfefff0,80) and isColor(551,1430,0xfefff0,80) and isColor(682,1454,0xfefff0,80) and isColor(711,1354,0x086526,80) and isColor(280,1437,0x086526,80) then")){
                log("开始游戏")
                click(560,1442)  
                sleep(1000)
            }
            if (zhaose("if isColor(255,1506,0xedb361,80) and isColor(302,1491,0x936f3d,80) and isColor(561,1431,0x98f33b,80) and isColor(510,1480,0xfffdf9,80) and isColor(610,1491,0xfffdf9,80) and isColor(529,1570,0x348f1a,80) then")){
                log("继续--卡片升级")
                click(549,1500)  
                sleep(1000)
            }
            if(text("允许").exists() && text("取消").exists()){
                log("允许")
                click("允许")  
                sleep(2000)
            }
            if (zhaose("if isColor(549,1493,0xffffff,80) and isColor(59,1066,0xf70c0b,80) and isColor(758,922,0xd46c38,80) and isColor(389,924,0x3b67a3,80) and isColor(271,961,0xd46a36,80) then")){
                log("请解锁第一块田")
                click(500,1454)  
                sleep(1000)
            }
            if (zhaose("if isColor(633,1921,0xffffff,80) and isColor(271,932,0x4a71a6,80) and isColor(497,914,0xd36935,80) and isColor(60,1060,0xfa0a09,80) then")){
                log("将田升至五级")
                click(566,1873)  
                sleep(1000)
            }
            if (zhaose("if isColor(579,1391,0xffffff,80) and isColor(59,1063,0xf70c0b,80) and isColor(582,876,0x3b68a3,80) and isColor(494,1283,0x8e1814,80) and isColor(230,1022,0xfff0c9,80) then")){
                log("将田升至五级2")
                click(505,1347)  
                sleep(1000)
            }
            if (zhaose("if isColor(269,980,0xd6723f,80) and isColor(758,871,0x4a72a6,80) and isColor(507,879,0x416ca5,80) and isColor(346,959,0xd56e3b,80) and isColor(60,1060,0xfa0a09,80) and isColor(629,1917,0xffffff,80) then")){
                log("足够金币时请解锁第二块田")
                click(584,1881)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1064,0xfa0a09,80) and isColor(320,924,0x3f6ba4,80) and isColor(395,887,0x4871a6,80) and isColor(778,1362,0xffffff,80) and isColor(244,893,0x3b68a3,80) then")){
                log("请解锁第二块甜")
                click(740,1334)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1063,0xfa0a09,80) and isColor(691,922,0x3f6aa4,80) and isColor(278,883,0x416ca5,80) and isColor(314,912,0x426da5,80) and isColor(344,1945,0xffffff,80) and isColor(533,962,0xd36935,80) then")){
                log("自动生产番茄")
                click(308,1912)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1065,0xfa0a09,80) and isColor(256,1075,0xfff6e9,80) and isColor(430,1188,0xffffff,80) and isColor(330,1223,0xf4bc89,80) and isColor(448,885,0x406ba5,80) and isColor(677,922,0x3f6aa4,80) then")){
                log("商店自动生产番茄")
                click(373,1156)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1069,0xfa0a09,80) and isColor(271,877,0x5277a8,80) and isColor(420,880,0x3d69a4,80) and isColor(710,892,0x4971a6,80) and isColor(1011,1724,0xffffff,80) and isColor(899,1684,0x50ec38,80) then")){
                log("完成新手指导")
                click(967,1687)  
                sleep(1000)
            }
            if (zhaose("if isColor(60,1061,0xfa0a09,80) and isColor(355,893,0x3b68a3,80) and isColor(468,883,0x3e69a4,80) and isColor(371,1491,0xffffff,80) and isColor(228,1490,0x509713,80) then")){
                log("点击领取奖励")
                click(327,1460)  
                sleep(1000)
            }
            if (zhaose("if isColor(189,341,0xb97442,80) and isColor(395,293,0xfee4a1,80) and isColor(358,348,0xfee4a1,80) and isColor(613,337,0xfee4a1,80) and isColor(131,452,0xfee49f,80) and isColor(996,1745,0x963908,80) and isColor(708,346,0xfee4a1,80) then")){
                log("宝箱和卡片界面")
                var aa = random(1, 4)
                if (aa == 1){
                    log("打开")
                    click(775,641)
                }else{
                    if (aa == 2){
                        log("观看广告")
                        click(785,898)  
                    }else{
                        log("返回主界面")
                        click(993,1744)  
                    }
                }
                sleep(1000)
            }
            if (zhaose("if isColor(744,334,0x5d3a21,80) and isColor(708,341,0x7f7250,80) and isColor(277,694,0xeac467,80) and isColor(575,1172,0xfcd537,80) and isColor(500,1328,0xfffdf9,80) and isColor(585,1357,0xfffdf9,80) and isColor(552,1276,0x98f33b,80) then")){
                log("继续--打开宝箱")
                click(543,1345)  
                sleep(1000)
            }
            if (zhaose("if isColor(1012,945,0xffffff,80) and isColor(60,1062,0xfa0a09,80) and isColor(414,972,0xd36834,80) and isColor(527,873,0x3966a3,80) and isColor(539,926,0x4871a7,80) and isColor(421,928,0x5076a9,80) then")){
                log("抓住一只地鼠")
                click(959,911)  
                sleep(1000)
            }
            if (zhaose("if isColor(242,1353,0xfffdf9,80) and isColor(306,1381,0xfffdf9,80) and isColor(854,1381,0xfffdf9,80) and isColor(705,1415,0x166c94,80) and isColor(289,1415,0x35751f,80) and isColor(274,1314,0x82c33c,80) then")){
                log("奖励翻倍--地鼠")
                click(707,1364)  
                sleep(1000)
            }
            if (zhaose("if isColor(264,1452,0xfffdf9,80) and isColor(300,1482,0xfffdf9,80) and isColor(318,1413,0x82c33c,80) and isColor(669,1511,0x166c94,80) and isColor(575,1512,0x166c94,80) and isColor(324,1514,0x35751f,80) and isColor(860,1449,0xfffdf9,80) then")){
                log("奖励翻倍--任务获得")
                click(728,1461)  
                sleep(1000)
            }
            if (zhaose("if isColor(986,715,0xb05c0f,80) and isColor(972,702,0xb05c0f,80) and isColor(1008,1021,0xedb361,80) and isColor(519,1242,0x98f33b,80) and isColor(465,1327,0xfffdf9,80) and isColor(669,1335,0xfffdf9,80) and isColor(865,1319,0xedb361,80) and isColor(670,1297,0xfffdf9,80) then")){
                log("收益加倍")
                click(563,1313)  
                sleep(1000)
            }
            if (zhaose("if isColor(210,1126,0xfffbf0,80) and isColor(167,1071,0xf1c778,80) and isColor(351,1300,0xfffdf9,80) and isColor(359,1231,0x98f33b,80) and isColor(675,1231,0xff6b8e,80) and isColor(849,893,0xfffbf0,80) then")){
                log("改造后农田变成0级")
                click(374,1283)  
                sleep(1000)
            }
            if (zhaose("if isColor(366,734,0xfee4a1,80) and isColor(579,713,0xfee4a1,80) and isColor(686,712,0xfee4a1,80) and isColor(71,1228,0xedb361,80) and isColor(523,1337,0x348f1a,80) and isColor(492,1198,0x98f33b,80) and isColor(457,1270,0xfffdf9,80) and isColor(529,1395,0xda8460,80) then")){
                log("获得奖杯")
                click(413,1383)  //不勾选分享 
                sleep(1000)
                click(539,1265)  
                sleep(1000)
            }
            if (zhaose("if isColor(169,1020,0xf1c778,80) and isColor(172,1164,0xf1c778,80) and isColor(206,955,0xfffbf0,80) and isColor(357,1232,0x98f33b,80) and isColor(696,1231,0xff6b8e,80) and isColor(682,1293,0xfffdf9,80) and isColor(645,1332,0xaf130f,80) then")){
                log("小号50%以上奖杯")
                click(371,1280)  
                sleep(1000)
            }
            if (zhaose("if isColor(493,1365,0xfffdf9,80) and isColor(488,1379,0xfffdf9,80) and isColor(530,1312,0x82c33c,80) and isColor(600,1346,0xfffdf9,80) and isColor(563,1413,0x35751f,80) and isColor(445,1313,0x82c33c,80) then")){
                log("领取--地鼠奖励")
                click(537,1361)  
                sleep(1000)
            }
            if (zhaose("if isColor(934,490,0xb05c0f,80) and isColor(449,534,0xfde4a5,80) and isColor(601,486,0xfde4a5,80) and isColor(225,572,0xa16135,80) and isColor(847,572,0xa16135,80) and isColor(950,715,0xfff6d9,80) and isColor(975,647,0xedb361,80) and isColor(599,1657,0xedb361,80) then")){
                log("公告--关闭")
                click(934,489)  
                sleep(1000)
            }






            TC = (new Date()).getTime()
        }
    }
}


//qq养号
function qqyanghao(){
    log("qq养号")
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TS = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var tem = 1
    while(1){
        if ((new Date()).getTime() - TC > 4*60*1000){
            log("超市没有在首页")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
            tem = 1
        }
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.tencent.mobileqq")
            break
        }
        if(text("关注").exists() && text("推荐").exists()  && id("com.tencent.mobileqq:id/name").exists() || text("推荐").exists() && text("视频").exists() && id("com.tencent.mobileqq:id/name").exists()){
            log("看点界面")
            TC = (new Date()).getTime()
            if (random(1, 10) > 8 || tem == 1){
                log("点击推荐")
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
                log("有广告")
            }else{
                click(random(500, 600), random(800, 1500))
                sleep(3000)
            }
        }else{
            if(text("看点").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
                log("qq首页")
                click("看点")
                sleep(2000)
            }
        }
        if(desc("返回").exists() && text("关注").exists() && desc("小窗播放").exists() || desc("返回").exists() && desc("分享").exists() && text("关注").exists()){
            log("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("等待视频播放")
                sleep(random(3800, 4000))
            }
            back()
        }
        if(text("返回").exists() && text("收藏").exists() && text("写评论…").exists() || text("返回").exists() && text("已收藏").exists() && text("写评论…").exists()){
            log("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("浏览文章")
                swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                sleep(random(1000, 4000))
            }
            sb = random(1, 20)
            if (sb == 20){
                log("点击收藏")
                click("收藏")
                sleep(2000)
            }
            back()
        }else{
            if(id("com.tencent.mobileqq:id/ivTitleBtnLeft").exists() && desc("分享").exists()){
                log("打开到其他")
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
            log("设置")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
        }
        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************


function gengxin(user){
    log("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb){
                    log("已经是最新版本")
                }
                else{
                    log("版本更新")
                    sleep(3000)
                    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    dowscripte(body, user)
                }
                return body
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
}

function dowscripte(url, user){
    log("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // log("停止当前运行的脚本")
                // exit()
                sleep(2000)
                break
            } else {
                log("网络异常");
                sleep(2000)
            };
        } catch(error){
            log(error);
            sleep(2000)
        }
    }
    log("加载脚本完成")
}

//获取任务
function huoqurenwu(){
    log("获取任务")        // 1、抖音  2、qq  3、乐游  4、微信  5、微视  6、微博  7、火山  8、快手  9、陌陌
    var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3]        //ip
    var yhname = sbxx_table[1]    //用户名
    var yhbh = sbxx_table[2]      //编号  weixinflag
    var rs = {"douyinflag":1, "qqflag":2, "leyouflag":3, "weixinflag":4, "weishiflag":5, "weiboflag":6, "huoshanflag":7, "kuaishouflag":8, "momoflag":9}
    var mtrenwu = ""
    while (1){ 
        try {
            // var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwu/usr/"+yhname+"/shebeihao/"+yhbh
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwunew/usr/"+yhname+"/shebeihao/"+yhbh
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj)
                var renwu = r_obj["data"]
                log(renwu)
                return renwu
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}

function bofangyy(){
    _THREADSS = threads.start(function (){
        log("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime()
        if( files.exists("/sdcard/观沧海.mp3") == false){
            log("没有音乐文件去下载")
            dowmp3()
            sleep(5000)
        }
        // device.setNotificationVolume(0)
        while(1){
            media.playMusic("/sdcard/观沧海.mp3", 0.01);
            log("我还在播放音乐")
            sleep(media.getMusicDuration());
            if ((new Date()).getTime() - ssee > 60 *1000){
                var renwu = huoqurenwu()
                // var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu.length-1; i++){
                    if (renwu[i] == "2" ){
                        log("继续qq任务")
                        sstt = 1
                    }
                }
                if (sstt == 0){
                    log("服务器上没有qq任务")
                    guanbiyy("com.tencent.mobileqq")
                    sleep(2000)
                    meitxx()
                    exit()
                }
                ssee = (new Date()).getTime()
            }
        }
    });
}

//执行美图项目
function meitxx(){
    var tem = 0
    log("执行美图项目")
    // UI()
    var config_str =  files.read("/sdcard/meituconfig.txt")
    var config_table = config_str.split("-")
    var user =  config_table[0]
    var yhuser =  config_table[1]
    var bianhao =  config_table[2]
    var ips = config_table[3]
    var renwu = huoqurenwu()
    log(renwu.length)
    log("记录的任务：" +user)
    for(var i =0 ; i < renwu.length; i++){
        if (renwu[i] == user && tem == 0){
            if (i < renwu.length-1){
                user = renwu[i+1]
                tem = 1
            }
        }
    }
    if (tem == 0){
        log("已经做完一轮或者刚开始")
        user= renwu[0]
    }
    log("执行任务"+ user)
    var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips
    log("选择结果："+config_temp)
    files.write("/sdcard/meituconfig.txt", config_temp);
    var gg = gengxin(user)
    engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js");
}

//*******************************************************对接服务器*****************************************************************


bofangyy()
while(1){
    shuizuguan()
    noingchang()
}


// bofangyy()
// qqyanghao()
// meitxx()
// exit()






// ws()
// dlqq()
// var ss = getAllTexts()
// log(ss)
// var baoming = currentPackage()
// log(baoming)
log(getClip()+"**")
// qqyanghao()
// xiugtx()







