
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}






//********************************************************下载播放mp3***************************************************************

function dowmp3(){
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - TTR > 3*60*1000){
                log("超时退出")
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


//*******************************************************火山养号 *****************************************************************

function zonghe(){
    if(text("知道了").exists()){
        log("知道了")
        click("知道了")
        sleep(2000)
    }
    if(text("我知道了").exists()){
        log("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if(text("以后再说").exists()){
        log("以后再说")
        click("以后再说")
        sleep(2000)
    }
    if(text("允许").exists() && text("拒绝").exists()){
        log("允许")
        click("允许")
        sleep(2000)
    }
    if(text("立即赠送").exists()){
        log("立即赠送")
        back()
        sleep(2000)
    }
    if(text("不感兴趣？长按试试").exists()){
        log("不感兴趣？长按试试")
        back()
        sleep(500)
        back()
        sleep(2000)
    }
}

//火山养号
function hsyh(){
    log("火山养号")
    launch("com.ss.android.ugc.live")
    var RT = (new Date()).getTime()
    var stt = random(30, 50)
    var TSD = (new Date()).getTime()
    var zbt = (new Date()).getTime()   //直播的时间
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.ss.android.ugc.live")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            guanbiyy("com.ss.android.ugc.live")
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/ac1").exists() || id("com.ss.android.ugc.live:id/a4w").exists() && id("com.ss.android.ugc.live:id/djd").exists()){
            log("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                log("刷新首页")
                var asa = random(1, 10)
                if (asa > 8){
                    log("点击同城栏")
                    click(620, 130)
                    sleep(100)
                    click(622, 134)
                }else{
                    if (asa == 8){
                        log("点击直播栏")
                        click(780, 130)
                        sleep(100)
                        click(790, 134)
                    }else{
                        log("点击视频栏")
                        click(440, 130)
                        sleep(100)
                        click(450, 134)
                    }
                }
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
        if(text("关注").exists() && desc("粉丝").exists() && id("com.ss.android.ugc.live:id/b4k").exists() || id("com.ss.android.ugc.live:id/b4j").exists() && id("com.ss.android.ugc.live:id/b4k").exists()){
            log("个人详情界面")
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            back()
            sleep(1000)
        }
        if(id("com.ss.android.ugc.live:id/wb").exists() && id("com.ss.android.ugc.live:id/b9o").exists() && id("com.ss.android.ugc.live:id/wz").exists() || text("关注").exists() && desc("评论").exists() && id("com.ss.android.ugc.live:id/wb").exists()){
            log("播放视频界面")
            var aasr = random(20, 50)
            var ssd = (new Date()).getTime()
            while(1){
                if ((new Date()).getTime() -ssd >  aasr * 1000){
                    log("看完了")
                    break
                }else{
                    toastLog("观看视频中")
                    sleep(3000)
                }
            }
            if (aasr > 48){
                log("观看评论")
                click(970, 1270)
                sleep(1000)
            }else{
                var ssx = random(1, 50)
                if (ssx == 49){
                    toastLog("点赞视频")
                    click(970, 1050)
                    sleep(1000)
                }
                back()
            }
        }
        if(id("com.ss.android.ugc.live:id/u2").exists() && id("com.ss.android.ugc.live:id/v9").exists() && id("com.ss.android.ugc.live:id/w6").exists() || text("发送").exists() && text("赞").exists() && desc("关闭").exists()){
            log("评论界面")
            var bb = random(1, 5)
            if (text("暂无评论").exists()){
                log("暂无评论")
            }else{
                for(var i = 0;i< bb ;i++){
                    swipe(533,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                if (random(1, 40) == 30){
                    log("评论赞")
                    try{
                        if (id("com.ss.android.ugc.live:id/cp6").exists()){
                            var ss = id("com.ss.android.ugc.live:id/cp6").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    }catch(error) {
                        log(error);
                    }
                }
            }
            back()
            sleep(1000)
            back()
            sleep(1000)
        }
        if(text("直播已结束").exists() && id("com.ss.android.ugc.live:id/hp").exists() || id("com.ss.android.ugc.live:id/d3c").exists() && id("com.ss.android.ugc.live:id/hp").exists()){
            log("直播已经结束")
            back()
            sleep(2000)
        }
        if(id("com.ss.android.ugc.live:id/ahe").exists() && id("com.ss.android.ugc.live:id/wz").exists() || id("com.ss.android.ugc.live:id/text").exists() && desc("分享").exists()){
            log("直播界面")
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
        if(text("退出直播间").exists() && text("退出").exists() || text("退出直播间").exists() && text("关注并退出").exists()){
            log("退出直播间")
            click("退出")
            sleep(1000)
        }

        zonghe()
    }
}

//火山登录
function hsdl(){
    log("火山登录")
    launch("com.ss.android.ugc.live")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var tem = 1   //判断是微信还是微博授权
    var cs = 0    //微信多次授权未成功
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.ss.android.ugc.live")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            guanbiyy("com.ss.android.ugc.live")
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("注册/登录").exists() && id("com.ss.android.ugc.live:id/cax").exists() || id("com.ss.android.ugc.live:id/c6q").exists() && id("com.ss.android.ugc.live:id/title").exists()){
            log("首页点登录")
            click(100, 140)
            sleep(2000)
            guanbiyy("com.ss.android.ugc.live")
            return false
        }else{
            if(id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/ac1").exists() || id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/djd").exists()){
                log("首页-登录成功")
                guanbiyy("com.ss.android.ugc.live")
                return true
            }
        }
        if(text("微信号/QQ/邮箱登录").exists()){
            toastLog("未登录微信")
            return false
        }
        if(id("com.ss.android.ugc.live:id/wb").exists() && id("com.ss.android.ugc.live:id/b9o").exists() && id("com.ss.android.ugc.live:id/wz").exists() || text("关注").exists() && desc("评论").exists() && id("com.ss.android.ugc.live:id/wb").exists()){
            log("播放视频界面")
            back()
            sleep(2000)
        }
        if(id("com.tencent.mm:id/djr").exists() && text("确定").exists()){
            log("登录失败")
            click("确定")
            sleep(1000)
        }
        if(text("手机号注册登录").exists() && text("取消").exists()){
            log("手机号注册登录")
            click("取消")
            sleep(1000)
        }

        if(text("切换账号").exists() && text("确定").exists() || text("微博").exists() && text("确定").exists()){
            log("确定微博登录")
            click("确定")
            sleep(1000)
        }
    
        if(desc("微信登录").exists() && text("其它登录方式").exists()){
            log("其它登录方式")
            try{
                if(id("com.ss.android.ugc.live:id/si").exists()){
                    log("阅读抖音协议")
                    var ss = id("com.ss.android.ugc.live:id/si").findOnce().checked();
                    if (ss == false){
                        var css = id("com.ss.android.ugc.live:id/si").findOnce().bounds()
                        click(css.centerX(), css.centerY());
                        sleep(2000)
                    }
                }
                if (tem == 1){
                    log("微信登录")
                    var ss = desc("微信登录").findOnce().bounds();
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    cs = cs + 1
                    if (cs > 4 ){
                        tem = 2
                    }
                }else{
                    log("微博登录")
                    var ss = desc("微博登录").findOnce().bounds();
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
                }catch(error) {
                    log(error);
                }

        }else{
            if(text("下一步").exists() && text("点击展开其它登录方式").exists() || id("com.ss.android.ugc.live:id/wz").exists() && id("com.ss.android.ugc.live:id/cot").exists()){
                log("点击展开其它登录方式")
                try{
                var ss = text("点击展开其它登录方式").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
                }catch(error) {
                    log(error);
                }
            }
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
            if ((new Date()).getTime() - ssee > 60 *1000){
                var renwu = huoqurenwu()
                sstt = 0
                // var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu.length; i++){
                    if (renwu[i] == "7" ){
                        log("继续火山任务")
                        sstt = 1
                    }else{
                        if (renwu[i] == "100" ){
                            log("结束脚本")
                            guanbiyy("com.ss.android.ugc.live")
                            exit()
                        }
                    }
                }
                if (sstt == 0){
                    log("服务器上没有火山任务")
                    guanbiyy("com.ss.android.ugc.live")
                    sleep(2000)
                    meitxx()
                    exit()
                }
                if( files.exists("/sdcard/观沧海.mp3") == false){
                    log("没有音乐文件去下载")
                    dowmp3()
                    sleep(5000)
                }
                ssee = (new Date()).getTime()
            }
            try{
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                log("我还在播放音乐")
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


function hszhixing(){
    log("执行火山")
    bofangyy()
    guanbiyy("com.ss.android.ugc.live")
    var wb = hsdl()
    if (wb == true){
        hsyh()
    }
    meitxx()
    exit()

}


hszhixing()


// bofangyy()
// hsyh()
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
log(getClip()+"**")







