log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.tencent.mobileqq"   //该项目包名
var xmxh = "98"               //项目序号




//********************************************************下载播放mp3***************************************************************

function dowmp3(){
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - TTR > 3*60*1000){
                xgsrizhi("超时退出")
                return false
            }
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
        //xgsrizhi(defaultSetting)
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
        xgsrizhi(error+"错误");
        return 1
    }
}

//关闭应用
function guanbiyy(bb){
    xgsrizhi("关闭应用")               //www.feiyunjs.com
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
            xgsrizhi(packageName)
            app.openAppSetting(packageName);
            text(app.getAppName(packageName)).waitFor();  
            let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
            if (is_sure.enabled()) {
                textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                textMatches(/(.*确.*|.*定.*)/).findOne().click();
                xgsrizhi(app.getAppName(packageName) + "应用已被关闭");
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
            } else {
                xgsrizhi(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
                back();
                sleep()
                back();
            }
        }
    }catch(error) {
        sleep(1001)
        xgsrizhi(error);
    }
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
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
			break
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                xgsrizhi("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                break
            }else{
                back()
                sleep(500)
                home()
                sleep(2000)
                recents()
                sleep(3000)
            }
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
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
        //xgsrizhi(ss[k])
        var xx = getInsideString(ss[k], "(", "," )
        var yy = getInsideString(ss[k], ",", ",0" )
        var ys = getInsideString(ss[k], "0x", ",80)" )
        //xgsrizhi(xx + ":" + yy)
        //xgsrizhi(ys)
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
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
			break
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                xgsrizhi("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
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
            sleep(1001)
            xgsrizhi(error);
        }
	}
}

//日期
function riqis(nn){
    var tem = nn
	Date.prototype.format = function(fmt){
		var year = this.getFullYear();
		var month = this.getMonth()+1;
		var date = this.getDate();
		var hour = this.getHours();
		var minute = this.getMinutes();
		var second = this.getSeconds();
		fmt = fmt.replace("yyyy",year);
		fmt = fmt.replace("yy",year%100);
		fmt = fmt.replace("MM",fix(month));
		fmt = fmt.replace("dd",fix(this.getDate()));
		fmt = fmt.replace("hh",fix(this.getHours()));
		fmt = fmt.replace("mm",fix(this.getMinutes()));
		fmt = fmt.replace("ss",fix(this.getSeconds()));
		return fmt;
		function fix(n){
		return n<10?"0"+n:n;
		}
	}
	var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    var time = new Date().format("dd")
    if (tem == 1){
        return time
    }else{
        return times
    }
}

//写日志
function xgsrizhi(g){
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
}

//*******************************************************QQ项目 *****************************************************************

function zonghe(){
    if (text("允许").exists() && text("拒绝").exists()){
        log("允许")
        click("允许")
        sleep(1000)
    }
    if (text("继续").exists() && text("取消").exists()){
        log("继续")
        click("继续")
        sleep(1000)
    }
    if (text("忽略更新").exists() && text("同意").exists()){
        log("忽略更新")
        click("同意")
        sleep(1000)
    }
    if (text("我知道了").exists()){
        log("我知道了")
        click("我知道了")
        sleep(1000)
    }
}

//下载
function xiazai(bb){
    xgsrizhi("下载")
    var name = bb   //下载的应用名称
    launch("com.android.meitu.appstore")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.android.meitu.appstore")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            xgsrizhi("超时没下载成功")
            back()
            sleep(1000)
            qinglihh("com.android.meitu.appstore")
            sleep(3000)
            launch("com.android.meitu.appstore")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if((text("精品").exists() && text("游戏").exists() && text("排行榜").exists() )||  (id("com.android.meitu.appstore:id/img_icon_search").exists() && text("排行榜").exists())  ){
            xgsrizhi("首页")
            // setText(name)
            click(500, 120)
            sleep(1000)
        }
        if(id("com.android.meitu.appstore:id/first_jump_over_img").exists()){
            log("关闭一键安装")
            try {
                var aa = id("com.android.meitu.appstore:id/first_jump_over_img").findOnce().bounds();
                xgsrizhi(aa.centerX())
                xgsrizhi(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
            }catch(error) {
                xgsrizhi(error);
                sleep(2000)
            }
        }

        if(id("com.android.meitu.appstore:id/iv_back_arrow").exists() && text("搜索").exists()){
            xgsrizhi("搜索")
            if (text(name).exists()){
                xgsrizhi("看到小程序了")
                try {
                    var ws = text(name).boundsInside(0, 200, device.width, device.height).findOnce().bounds()
                    if (ws != null){
                        xgsrizhi(ws.centerX())
                        xgsrizhi(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(3000)
                    }else{
                        log("搜索2")
                        click(500, 120)
                        sleep(1000)
                        setText(name)
                        sleep(1000)
                        click(930, 130)
                        sleep(3000)
                    }
                }catch(error) {
                    xgsrizhi(error);
                    sleep(2000)
                }
            }else{
                log("搜索2")
                click(500, 120)
                sleep(1000)
                setText(name)
                sleep(1000)
                click(930, 130)
                sleep(3000)
            }
        }
            
        if(text(name).exists() && id("com.android.meitu.appstore:id/activity_detail_actionbar_backimgVi").exists() ||  id("com.android.meitu.appstore:id/activity_cproducts_detail_collect_iconImgVi").exists() && id("com.android.meitu.appstore:id/activity_cproducts_detail_share_iconImgVi").exists()){
            xgsrizhi("应用详情页")
            sleep(2000)
            if (zhaose("if isColor(255,1951,0xffffff,80) and isColor(365,1936,0xffffff,80) and isColor(719,1929,0xffffff,80) and isColor(817,1969,0xffffff,80) and isColor(552,1949,0x695afc,80) then")){
                log("已经下载了")
                qinglihh("com.android.meitu.appstore")
                return true
            }else{
                log("点击下载")
                click(500, 1940)
                sleep(1000)
                if (text("继续").exists() && text("取消").exists()){
                    log("继续")
                    click("继续")
                    sleep(1000)
                }
                sleep(5000)
            }
        }
        if (text("同意").exists() && text("取消").exists()){
            log("同意")
            click("同意")
            sleep(1000)
        }
        if (text("忽略更新").exists() && text("同意").exists()){
            log("忽略更新")
            click("同意")
            sleep(1000)
        }
        zonghe()
    }
}

//设置360
function shezhi(){
    log("设置360")
    launch("com.qihoo.cleandroid_cn")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var tem = 1
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.qihoo.cleandroid_cn")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            xgsrizhi("超时没设置成功")
            back()
            sleep(1000)
            qinglihh("com.qihoo.cleandroid_cn")
            sleep(3000)
            launch("com.qihoo.cleandroid_cn")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("清理").exists() && text("文件管理").exists() && text("我的").exists()){
            log("首页")
            click(900, 1950)
            sleep(2000)
            if (text("设置").exists()){
                log("进入设置")
                click("设置")
                sleep(2000)
            }
        }
        if (id("com.qihoo.cleandroid_cn:id/lw").exists() ){
            log("提升清理效果")
            var aa = id("com.qihoo.cleandroid_cn:id/lw").findOnce().bounds()
            xgsrizhi(aa.centerX())
            xgsrizhi(aa.centerY())
            click(aa.centerX(), aa.centerY())
        }

        if (text("充电保护").exists() && text("自动清理").exists() ||  text("自动清理").exists() && text("通用").exists()){
            log("进入自动清理")
            click("自动清理")
            sleep(2000)
        }

        if (id("com.qihoo.cleandroid_cn:id/gd").exists() && text("内存过高清理").exists() && text("定时清理内存").exists() ){
            log("设置自动清理")
            try {
                var ss = id("com.qihoo.cleandroid_cn:id/gd").findOnce().desc()
                if (ss != "已选中"){
                    log("还没选中")
                    var aa = id("com.qihoo.cleandroid_cn:id/gd").findOnce().bounds();
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
                if (tem == 1){
                    log("过高清理")
                    click("内存过高清理")
                    sleep(2000)
                }else{
                    if (tem == 2){
                        log("定时清理内存")
                        click("定时清理内存")
                        sleep(2000)
                    }else{
                        log("设置完成")
                        qinglihh("com.android.meitu.appstore")
                        return true
                    }
                }
            }catch (error) {
                sleep(1000)
                log(error);
            }
        }
        if (text("加速阈值设置").exists() && text("确定").exists()){
            log("设置过高清理")
            click(870, 790)
            sleep(2000)
            click("确定")
            sleep(2000)
            tem = 2
        }
        if (text("定时加速区间").exists() && text("确定").exists()){
            log("设置定时加速区间")
            click(870, 880)
            sleep(2000)
            click("确定")
            sleep(2000)
            tem = 3
        }
        if (text("立即使用").exists()){
            log("立即使用")
            click("立即使用")
            sleep(2000)
        }


        zonghe()
    }
}

//下载应用
function m(){
    //文件更新地址
    var url = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
    
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
}

//安装应用
function anz(){
    log("安装")
    var TT = (new Date()).getTime() - 100*1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - BB > 5*60*1000){
            log("超时退出")
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60*1000){
            log("超时清理一次换存")
            qinglihh()
            ts = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 20*1000){
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
        }
        if (text("设置").exists() && text("取消").exists() ){
            log("设置")   
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists() ){
            log("安装")   
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists() ){
            log("已经安装成功")  
            click("完成") 
            return true
        }

        if (id("android:id/switch_widget").exists() && desc("向上导航").exists() ){
            log("添加安装权限")   
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false){
                var aa = id("android:id/switch_widget").findOnce().bounds();
                log(aa.centerX())
                log(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100*1000
                qinglihh()
            }
        }
    }
}


//*******************************************************对接服务器*****************************************************************


function gengxin(user){
    xgsrizhi("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                xgsrizhi("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb){
                    xgsrizhi("已经是最新版本")
                }
                else{
                    xgsrizhi("版本更新")
                    sleep(3000)
                    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    dowscripte(body, user)
                }
                return body
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(2000)
        }
    }
}

function dowscripte(url, user){
    xgsrizhi("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // xgsrizhi("停止当前运行的脚本")
                // exit()
                sleep(2000)
                break
            } else {
                xgsrizhi("网络异常");
                sleep(2000)
            };
        } catch(error){
            xgsrizhi(error);
            sleep(2000)
        }
    }
    xgsrizhi("加载脚本完成")
}

//获取任务
function huoqurenwu(aa){
    xgsrizhi("获取任务")        // 1、抖音  2、qq  3、乐游  4、微信  5、微视  6、微博  7、火山  8、快手  9、陌陌
    var rs = {"douyinflag":1, "qqflag":2, "leyouflag":3, "weixinflag":4, "weishiflag":5, "weiboflag":6, "huoshanflag":7, "kuaishouflag":8, "momoflag":9}
    var mtrenwu = ""
    var ttr = (new Date()).getTime()
    while (1){ 
        try {
            if ((new Date()).getTime() - ttr > 10* 1000 && aa == "xc"){
                log("超时退出-网络不好获取不到")
                return false 
            }
            // var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwu/usr/"+yhname+"/shebeihao/"+yhbh
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwunew/usr/"+yhname+"/shebeihao/"+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                xgsrizhi(r_obj)
                var renwu = r_obj["data"]
                xgsrizhi(renwu)
                return renwu
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}

//存取数据
function cunqusj(name, str){
    var storage = storages.create("lun");
    if (str == "qu"){
        log("取出来的数据：" + storage.get(name));
        if (storage.get(name) == undefined){
            return -1
        }
        else{
            return storage.get(name)
        }
    }else{
        files.write("/sdcard/jiaoben.txt",  str);
        storage.put(name, str);
        if (str == "tingzhi"){
            java.lang.System.exit(0);
        }
    }
}

function bofangyy(){
    _THREADSS = threads.start(function (){
        xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 600 *10000
        var TJH = (new Date()).getTime()
        // device.setNotificationVolume(0)
        cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 5*55*1000){
                    log("激活设备")
                    jihuoxt()
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    cunqusj("jiaoben",aa)
                    var renwu = huoqurenwu("xc")
                    // var renwu_table = renwu.split("-")
                    if (renwu != false){
                        xgsrizhi(renwu.length)
                        sstt = 0
                        for(var i =0 ; i < renwu.length; i++){
                            if (renwu[i] == xmxh ){
                                xgsrizhi("继续待定任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    xgsrizhi("结束脚本")
                                    qinglihh(dqbaoming)
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            xgsrizhi("服务器上没有qq任务")
                            qinglihh(dqbaoming)
                            sleep(2000)
                            // meitxx()
                            xgsrizhi("执行完存停止数据2")
                            cunqusj("jiaoben","tingzhi")
                            java.lang.System.exit(0);
                            _THREADSSxx.interrupt()
                            _THREADSS.interrupt()
                            // exit()
                        }
                    }
                    if( files.exists("/sdcard/观沧海.mp3") == false){
                        xgsrizhi("没有音乐文件去下载")
                        dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
            
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            }catch(error) {
                toastLog(error);
                sleep(random(3000,8000))
            }
        }
    });
}

//执行美图项目
function meitxx(){
    var tem = 0
    xgsrizhi("执行美图项目")
    // UI()
    var config_str =  files.read("/sdcard/meituconfig.txt")
    var config_table = config_str.split("-")
    var user =  config_table[0]
    var yhuser =  config_table[1]
    var bianhao =  config_table[2]
    var ips = config_table[3]
    var renwu = huoqurenwu()
    xgsrizhi(renwu.length)
    xgsrizhi("记录的任务：" +user)
    for(var i =0 ; i < renwu.length; i++){
        if (renwu[i] == user && tem == 0){
            if (i < renwu.length-1){
                user = renwu[i+1]
                tem = 1
            }
        }
    }
    if (tem == 0){
        xgsrizhi("已经做完一轮或者刚开始")
        user= renwu[0]
    }
    xgsrizhi("执行任务"+ user)
    var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips
    xgsrizhi("选择结果："+config_temp)
    files.write("/sdcard/meituconfig.txt", config_temp);
    var gg = gengxin(user)
    engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js");
    sleep(1000)
    exit()
    // var bst = (new Date()).getTime()
    // while(1){
    //     try {
    //         var gs = engines.all().length
    //         xgsrizhi("当前运行脚本个数：" + gs)   
    //         sleep(5000)
    //         if ((new Date()).getTime() -bst > 10*1000){
    //             if (gs > 1){
    //                 xgsrizhi("已经运行了两个脚本-退出")
                    // files.write("/sdcard/meituconfig.txt", config_temp);
    //                 var dd = engines.myEngine()
    //                 dd.forceStop()
    //                 sleep(1000)
    //                 // exit()
    //             }else{
    //                 xgsrizhi("重新更新运行")
    //                 meitxx()
    //             }
    //         }
    //     } catch(error) {
    //         xgsrizhi(error);
    //         sleep(random(3000,8000))
    //     }
    // }
}


//*******************************************************新服务器*********************************************************************

//获取任务
function hqrenwu(){
    xgsrizhi("获取任务")
    var xmmc = "qqflag"          //项目名称
    while (1){ 
        try {
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/shebeixinxi/xiangmu/"+xmmc+"/usr/"+yhname+"/shebeihao/" + yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                xgsrizhi(r_obj)
                // var renwu = r_obj["data"]
                // xgsrizhi(renwu)
                // return renwu
                return r_obj["data"]
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}

//上传账号
function upzhanghao(zhanghao){
    xgsrizhi("上传账号数据..."+yhname+"--"+yhbh+"--"+zhanghao)
    var ts = (new Date()).getTime()  
    var sbb = "zhanghao_qq"
    while(1){
        try {
            if ((new Date()).getTime() - ts > 30*1000){
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/douyin.com/tp5/public/index/Myapi/addZhangHaonew/tableflag/"+sbb+"/usr/"+yhname+"/shebeihao/"+yhbh+"/zhanghao/"+zhanghao
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0 || r_obj["code"] == 1){
                    xgsrizhi("上传账号信息成功")
                    return true
                }else{
                    xgsrizhi("上传账号信息失败")
                    toast("上传账号信息失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
            sleep(random(10, 10000))
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
    }
}

//上传数据
//上传点赞、粉丝、关注总数  ziduan = guanzhushuliang //关注数量   name = "抖音账号"   ziduan =  fsshuliang//粉丝数量
//ziduan = 	jianjie //简介  ziduan = touxiang //头像   ziduan = shipin //视频 ziduan = zan //点赞数量
//ziduan = 	shipinbofangliang //视频播放量  ziduan = quanzhong //权重   ziduan = nickname //昵称  ziduan = sex //性别
function scshuju(name, ziduan, shuju){
    xgsrizhi("上传账号数据..."+yhname+"--"+yhbh)
    xgsrizhi(name + "----"+ziduan+"----"+shuju)
    var Tb = (new Date()).getTime()
    // var name = "888----008"   //账号名称
    // var ziduan = "sex"
    // var shuju = "1"
    var sbb = "zhanghao_qq"
    while (1){ 
        try {
            if ((new Date()).getTime() - Tb > 20*1000){
                xgsrizhi("超时退出")
                break
            }
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/gxzhanghaonew/tableflag/"+sbb+"/usr/"+yhname+"/count/"+name+"/ziduan/"+ziduan+"/val/"+shuju
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                xgsrizhi("我是返回的信息"+ r_obj)
                xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0){
                    xgsrizhi("上传信息成功")
                    break
                }else{
                    xgsrizhi("上传信息成功失败")
                    toast("增上传信息成功失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}


//激活心跳
function jihuoxt(){
    xgsrizhi("激活心跳")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 15*1000){
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/jihuo/usr/"+yhname+"/shebeihao/"+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                toastLog("激活成功")
                return true
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("激活中...")
        sleep(random(100, 10000))
    }
}



//*******************************************************对接服务器*****************************************************************




//执行QQ项目
function daiding(){
    toastLog("执行待定任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        // device.setNotificationVolume(1)
        // device.setMusicVolume(1)
        var ttr = (new Date()).getTime()
        // xiazai("360清理大师")
        // shezhi()
        // var aa = app.getPackageName("laodi")
        // if (aa == null){
            log("去下载")
            m()
            anz()
        // }
        files.write("/sdcard/configss.txt", "meitus");
        while(1){
            toastLog("待定项目")
            sleep(5000)
            if ((new Date()).getTime() - ttr > 3*60*1000){
                qinglihh()
                sleep(3000)
                ttr = (new Date()).getTime()
            }
        }
            // meitxx()
        xgsrizhi("执行完存停止数据")
        cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        _THREADSS.interrupt()
        _THREADSSxx.interrupt()
    });
    // exit()
}

try {
    bofangyy()
    daiding()
} catch(error) {
    log(error);
    cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}

sleep(1000)
// ws()
// dlqq()
// var ss = getAllTexts()
// xgsrizhi(ss)
// var baoming = currentPackage()
// xgsrizhi(baoming)
xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







