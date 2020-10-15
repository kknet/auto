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


//*******************************************************快手养号 *****************************************************************

function zonghe(){
    if(text("用户隐私政策").exists()){
        log("用户隐私政策")
        click(600, 1400)
        sleep(1000) 
    }
    if(text("同意并继续").exists()){
        log("同意并继续")
        click("同意并继续")
        sleep(1000)
    }
    if(text("刷新").exists()){
        log("刷新")
        click("刷新")
        sleep(1000)
    }
    
}

//快手养号
function ksyh(){
    log("快手养号")
    launch("com.smile.gifmaker")
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TSD = (new Date()).getTime()
    var zbt = (new Date()).getTime()   //直播的时间
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.smile.gifmaker")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            guanbiyy("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            log("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                log("刷新首页")
                click(500, 130)
                sleep(100)
                click(510, 150)
                sleep(2000)
                swipe(557,400, 533,1630, random(400, 1000))
                sleep(4000)
                tem = 1
            }else{
                log("进入观看视频")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(533,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
                ll = ll  + 1 
                if (ll > 15){
                    log("浏览次数够了刷新首页")
                    tem = 0
                    ll = 0
                }
            }
        }
        if(id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists() && id("com.smile.gifmaker:id/comment_record_button").exists() || id("com.smile.gifmaker:id/live_chat_apply").exists() && id("com.smile.gifmaker:id/live_clos").exists() || desc("分享成功").exists() && id("com.smile.gifmaker:id/live_clos").exists()){
            log("直播中")
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
            log("关注并退出")
            click("退出")
            sleep(1000) 
        }
        if(text("直播已结束").exists() && text("观看人数").exists()){
            log("直播已结束")
            back()
            sleep(1000) 
        }
        if(desc("返回").exists() && desc("喜欢").exists() || desc("举报").exists() && id("com.smile.gifmaker:id/player_message_layout").exists()){
            log("观看作品界面")
            var TD = (new Date()).getTime()
            var cd = random(20, 40)
            while(1){
                if ((new Date()).getTime() - TD > cd*1000){
                    log("观看完成")
                    break
                }else{
                    toastLog("观看作品中")
                    sleep(3000)
                }
            }
            var bb = random(1, 8)
            if (cd == 21 && bb >6){
                log("作品赞")
                click(200, 150)
                sleep(1000)    //com.smile.gifmaker:id/like_layout
            }
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            if (cd == 22 && bb >6 && id("com.smile.gifmaker:id/like_layout").exists() ){
                log("评论赞")
                try{
                    var ss = id("com.miui.home:id/label").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch(error) {
                    log("异常了")
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
            log("时间够了退出")
            guanbiyy("com.smile.gifmaker")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没注册成功")
            back()
            sleep(1000)
            guanbiyy("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("登录成功")
            return true
        }
        if(desc("快手").exists() && text("登录").exists()){
            log("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(desc("快手").exists() && text("登录").exists()){
            log("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(text("其他登录方式").exists() && text("微信登录").exists() || text("微信登录").exists() && text("手机号登录").exists() ){
            log("手机号登录")
            click("微信登录")
            sleep(2000)
        }
        if(text("关闭").exists() && text("确认登录").exists()){
            log("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("绑定手机号").exists() && text("跳过").exists()){
            log("绑定手机号")
            click("跳过")
            sleep(5000)
        }
        if(text("跳过").exists()){
            log("跳过")
            click("跳过")
            sleep(5000)
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
                for(var i =0 ; i < renwu.length; i++){
                    if (renwu[i] == "8" ){
                        log("继续快手任务")
                        sstt = 1
                    }else{
                        if (renwu[i] == "100" ){
                            log("结束脚本")
                            guanbiyy("com.smile.gifmaker")
                            exit()
                        }
                    }
                }
                if (sstt == 0){
                    log("服务器上没有快手任务")
                    guanbiyy("com.smile.gifmaker")
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

//快手任务
function ksrw(){
    log("执行快手任务")
    bofangyy()
    var dd = kszc()
    if (dd == true){
        ksyh()
    }
    meitxx()
    exit()
}




// bofangyy()
// ksyh()
// meitxx()
// exit()


// ws()
// dlqq()
// var ss = getAllTexts()
// log(ss)
// var baoming = currentPackage()
// log(baoming)
// qqyanghao()
// xiugtx()

// log(getClip()+"**")





