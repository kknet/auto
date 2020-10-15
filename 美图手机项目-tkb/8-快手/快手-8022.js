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
var dqbaoming = "com.smile.gifmaker"   //该项目包名
var xmxh = "8"               //项目序号



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
        xgsrizhi(error);
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
                sleep(1000)
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


//*******************************************************快手养号 *****************************************************************

function zonghe(){
    if(text("用户隐私政策").exists()){
        xgsrizhi("用户隐私政策")
        click(600, 1400)
        sleep(1000) 
    }
    if(text("同意并继续").exists()){
        xgsrizhi("同意并继续")
        click("同意并继续")
        sleep(1000)
    }
    if(text("取消").exists() && text("去开启").exists()){
        xgsrizhi("去开启")
        click("取消")
        sleep(1000)
    }
    if(text("刷新").exists()){
        xgsrizhi("刷新")
        click("刷新")
        sleep(1000)
    }
    if(text("我知道了").exists()){
        xgsrizhi("我知道了")
        click("我知道了")
        sleep(1000)
    }
    if(text("立即升级").exists() && id("com.smile.gifmaker:id/iv_close").exists()){
        xgsrizhi("立即升级")
        try{
            var ss = id("com.smile.gifmaker:id/iv_close").findOnce().bounds();
            xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
    if(text("立即赠送").exists()){
        xgsrizhi("立即赠送")
        back()
        sleep(2000)
    }
}

//快手养号
function ksyh(){
    xgsrizhi("快手养号")
    launch("com.smile.gifmaker")
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TSD = (new Date()).getTime()
    var zbt = (new Date()).getTime()   //直播的时间
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.smile.gifmaker")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                xgsrizhi("刷新首页")
                click(500, 130)
                sleep(100)
                click(510, 150)
                sleep(2000)
                swipe(557,400, 533,1630, random(400, 1000))
                sleep(4000)
                tem = 1
            }else{
                xgsrizhi("进入观看视频")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(533,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
                ll = ll  + 1 
                if (ll > 15){
                    xgsrizhi("浏览次数够了刷新首页")
                    tem = 0
                    ll = 0
                }
            }
        }
        if(id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists() && id("com.smile.gifmaker:id/comment_record_button").exists() || id("com.smile.gifmaker:id/live_chat_apply").exists() && id("com.smile.gifmaker:id/live_clos").exists() || desc("分享成功").exists() && id("com.smile.gifmaker:id/live_clos").exists()){
            xgsrizhi("直播中")
            if((new Date()).getTime() - zbt > 10*60*1000){
                back()
                sleep(1000)
            }else{
                toastLog("观看直播中")
                sleep(3000)
            }
            TSD = (new Date()).getTime()
            tem = 0
        }
        
        if(text("退出").exists() && text("关注并退出").exists()){
            xgsrizhi("关注并退出")
            click("退出")
            sleep(1000) 
        }
        if(text("直播已结束").exists() && text("观看人数").exists()){
            xgsrizhi("直播已结束")
            back()
            sleep(1000) 
        }
        if(desc("返回").exists() && desc("喜欢").exists() || desc("举报").exists() && id("com.smile.gifmaker:id/player_message_layout").exists()){
            xgsrizhi("观看作品界面")
            var TD = (new Date()).getTime()
            var cd = random(20, 40)
            while(1){
                if ((new Date()).getTime() - TD > cd*1000){
                    xgsrizhi("观看完成")
                    break
                }else{
                    toastLog("观看作品中")
                    sleep(3000)
                }
            }
            var bb = random(1, 8)
            if (cd == 21 && bb >6){
                xgsrizhi("作品赞")
                click(200, 150)
                sleep(1000)    //com.smile.gifmaker:id/like_layout
            }
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            if (cd == 22 && bb >6 && id("com.smile.gifmaker:id/like_layout").exists() ){
                xgsrizhi("评论赞")
                try{
                    var ss = id("com.miui.home:id/label").findOnce().bounds();
                    xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch(error) {
                    sleep(1001)
                    xgsrizhi("异常了")
                }
            }
            back()
            sleep(1000)
        }

        zonghe()
    }
}

//快手注册
function kszc(){
    launch("com.smile.gifmaker")
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var zh = "18619653240"   //手机号码
    var yzm = "1234"
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.smile.gifmaker")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            xgsrizhi("超时没注册成功")
            back()
            sleep(1000)
            qinglihh("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("登录成功")
            return true
        }
        if(text("微信号/QQ/邮箱登录").exists()){
            toastLog("未登录微信")
            back()
            sleep(2000)
            qinglihh("com.smile.gifmaker")
            return false
        }
        if(desc("快手").exists() && text("登录").exists()){
            xgsrizhi("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(desc("快手").exists() && text("登录").exists()){
            xgsrizhi("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(text("其他登录方式").exists() && text("微信登录").exists() || text("微信登录").exists() && text("手机号登录").exists() ){
            xgsrizhi("手机号登录")
            try{
                var ss = text("微信登录").findOnce().bounds();
                xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(1000)
            }catch(error) {
                sleep(1001)
                xgsrizhi(error);
            }
            click("微信登录")
            sleep(2000)
        }
        if(text("关闭").exists() && text("确认登录").exists()){
            xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("绑定手机号").exists() && text("跳过").exists()){
            xgsrizhi("绑定手机号")
            click("跳过")
            sleep(5000)
        }
        if(text("跳过").exists()){
            xgsrizhi("跳过")
            click("跳过")
            sleep(5000)
        }


        zonghe()
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
    files.write("/sdcard/jiaoben.txt",  str);
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
        var ssee = (new Date()).getTime() - 100*1000
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
                    if (renwu != false){
                        sstt = 0
                        // var renwu_table = renwu.split("-")
                        for(var i =0 ; i < renwu.length; i++){
                            if (renwu[i] == xmxh ){
                                xgsrizhi("继续快手任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    xgsrizhi("结束脚本")
                                    qinglihh("com.smile.gifmaker")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            xgsrizhi("服务器上没有快手任务")
                            qinglihh("com.smile.gifmaker")
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
    //         if ((new Date()).getTime() -bst > 5*1000){
    //             if (gs > 1){
    //                 xgsrizhi("已经运行了两个脚本-退出")
    //                 files.write("/sdcard/meituconfig.txt", config_temp);
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

//快手任务
function ksrw(){
    xgsrizhi("执行快手任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        qinglihh("com.smile.gifmaker")
        var dd = kszc()
        if (dd == true){
            ksyh()
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
    ksrw()
} catch(error) {
    log(error);
    cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}
// bofangyy()
// ksyh()
// meitxx()
// exit()


// ws()
// dlqq()
// var ss = getAllTexts()
// xgsrizhi(ss)
// var baoming = currentPackage()
// xgsrizhi(baoming)
// qqyanghao()
// xiugtx()

// xgsrizhi(getClip()+"**")





