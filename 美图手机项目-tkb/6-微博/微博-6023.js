if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.sina.weibo"   //该项目包名
var xmxh = "6"               //项目序号





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


//*******************************************************微博项目 *****************************************************************

function zonghe(){
    if(text("不了，谢谢").exists()){
        xgsrizhi("不了，谢谢")
        click("不了，谢谢")
        sleep(1000)
    }
    if(text("用户协议和隐私条款").exists()){
        xgsrizhi("用户协议和隐私条款")
        click(500, 1480)
        sleep(1000)
    }
    if(text("我知道了").exists()){
        xgsrizhi("我知道了")
        click("我知道了")
        sleep(1000)
    }
    if(text("为你推荐以下博主").exists()){
        xgsrizhi("为你推荐以下博主")
        for(var i = 0;i< 5;i++){
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        click(500, 1920)
        sleep(1000)
    }
    if(text("选择你感兴趣的分类").exists()){
        xgsrizhi("选择你感兴趣的分类")
        for(var i = 0;i< 5;i++){
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        click(500, 1920)
        sleep(1000)
    }
    if(text("等待").exists() && text("关闭应用").exists()){
        xgsrizhi("关闭应用")
        click("等待")
        sleep(1000)
    }
    if(text("上滑观看更多内容").exists()){
        xgsrizhi("上滑观看更多内容")
        swipe(533,1630, 557,400,random(400, 600))
        sleep(1000)
    }

}

//微博养号
function wbyh(){
    xgsrizhi("微博养号")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.sina.weibo")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
            xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                xgsrizhi("刷新首页")
                try{
                    var aa = text("推荐").findOnce().bounds()
                    if (aa != null){
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                        click(aa.centerX(), aa.centerY())
                        sleep(2000)
                        swipe(557,400,533,1630,random(400, 600))
                        sleep(4000)
                    }
                } catch(error) {
                    sleep(1001)
                    xgsrizhi("异常了")
                } 
                tem = 1
            }else{
                xgsrizhi("浏览微博")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(200,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
            }
        }else{
            if(desc("微博").exists() && desc("消息").exists() || desc("微博").exists() && desc("我的资料").exists()){
                xgsrizhi("进入微博界面")
                click(100, 1950)
                sleep(1500)
            }
        }
        if(id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() && text("评论").exists() || text("转发").exists() && text("赞").exists()){
            xgsrizhi("评论界面")
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            var bs = random(1, 30)
            if (id("com.sina.weibo:id/iv_like_icon").exists() && bs == 29){
                xgsrizhi("点评论赞")
                try{
                    var aa = id("com.sina.weibo:id/iv_like_icon").findOnce().bounds()
                    if (aa != null){
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                    }
                } catch(error) {
                    sleep(1001)
                    xgsrizhi("异常了")
                } 
            }
            ll = ll  + 1 
            if (ll > 10){
                xgsrizhi("浏览评论的次数够了")
                tem = 0
                ll = 0
            }
        }
        if(id("com.sina.weibo:id/story_feed_comment").exists() && id("com.sina.weibo:id/story_close_zone").exists() || text("写评论").exists() && id("com.sina.weibo:id/story_feed_like").exists()){
            xgsrizhi("观看视频界面")
            var vb = (new Date()).getTime()
            var ss = random(15, 40)
            while(1){
                if ((new Date()).getTime() - vb > ss*1000){
                    xgsrizhi("观看时间到了")
                    break
                }else{
                    toastLog("观看视频中")
                    sleep(2000)
                }
            }
            if (ss == 39){
                xgsrizhi("点视频赞")
                click(800, 1950)
                sleep(1500)
            }
            if (ss > 35){
                xgsrizhi("滑至下一个视频")
                swipe(533,1630, 557,400,random(400, 600))
                sleep(2000)
            }else{
                xgsrizhi("退出视频播放")
                back()
                sleep(1500)
            }
        }
        if(desc("转发").exists() && desc("评论").exists() && id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() || desc("赞").exists() && id("com.sina.weibo:id/detail_activity_header_right_button_text").exists()){
            xgsrizhi("浏览文章")
            var bb = random(4, 8)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            back()
            sleep(1200)
        }
        if(text("设置").exists() && text("添加好友").exists() && id("com.sina.weibo:id/cabFan").exists() || text("设置").exists() && id("com.sina.weibo:id/tvNick").exists() && id("com.sina.weibo:id/ivPortrait").exists()){
            toastLog("我的界面")
            click(100, 1960)
            sleep(1000)
        }
        if(id("com.sina.weibo:id/nomarl_like_image").exists() && id("com.sina.weibo:id/btn_retweet").exists() || text("收起").exists() && id("com.sina.weibo:id/btn_show_more").exists()){
            xgsrizhi("观看图片界面")
            sleep(3000)
            var ss = random(1, 40) 
            if (ss > 38){
                xgsrizhi("点图片赞")
                click(892, 1970)
                sleep(1000)
            }
            back()
            sleep(1000)
        }
        zonghe()
    }
}

//微博注册
function wbdl(){
    xgsrizhi("微博注册")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            xgsrizhi("时间够了退出")
            qinglihh("com.sina.weibo")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            qinglihh("com.tencent.weishi")
            return false
        }
        if(text("登录微博").exists() && id("com.sina.weibo:id/iv_weixin").exists() || text("获取验证码").exists() && id("com.sina.weibo:id/iv_weixin").exists() ){
            xgsrizhi("点击微信登录")
            var aa = id("com.sina.weibo:id/iv_weixin").findOnce().bounds();
            if (aa != null){
                xgsrizhi(aa.centerX())
                xgsrizhi(aa.centerY())
                click(aa.centerX(), aa.centerY())
            }
            sleep(4000)
        }
        if(text("热门").exists() && desc("微博").exists() && text("登录").exists() || text("关注").exists() && text("登录").exists()){
            xgsrizhi("首页-未登录")
            click(952, 1960)
            sleep(2000)
        }else{
            if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
                xgsrizhi("首页")
                click(952, 1960)
                sleep(2000)
            }
        }
        if(desc("设置").exists() && desc("添加好友").exists() || text("设置").exists() && text("添加好友").exists() && id("com.sina.weibo:id/cabFan").exists() || text("设置").exists() && id("com.sina.weibo:id/tvNick").exists() && id("com.sina.weibo:id/ivPortrait").exists()){
            toastLog("登录成功")
            qinglihh("com.sina.weibo")
            return true
        }
        if(text("用帐号密码登录").exists() && text("微信").exists() || text("微信").exists() && text("其他登录方式").exists()){
            xgsrizhi("点击微信登录")
            click("微信")
            sleep(1000)
            click(380, 1880)
            sleep(2000)
        }
        if(text("同意").exists() && text("拒绝").exists()){
            xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("确定").exists() && text("特别提示").exists()){
            xgsrizhi("特别提示")
            click("确定")
            sleep(1000)
        }
        if(text("请先验证身份").exists() && desc("点击按钮进行验证").exists()){
            xgsrizhi("特别提示")
            click(600, 450)
            sleep(3000)
        }
        if(id("com.sina.weibo:id/iv_close").exists()){
            xgsrizhi("领福利叉叉")
            try{
                var ss = id("com.sina.weibo:id/iv_close").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }catch(error) {
                sleep(1001)
                xgsrizhi(error);
            }
        }
        if(text("我是男生").exists() && text("我是女生").exists() && text("跳过").exists()){
            xgsrizhi("选择女生")
            click(730, 420)
            sleep(1000)
            click("跳过")
            sleep(1000)
        }
        if(text("我选好了").exists() ){
            xgsrizhi("我选好了")
            click("我选好了")
            sleep(1000)
        }
        if(text("下一步").exists() ){
            xgsrizhi("下一步")
            click("下一步")
            sleep(1000)
        }
        if(text("跳过").exists() ){
            xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
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
                            if (renwu[i] == "6" ){
                                xgsrizhi("继续微博任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    xgsrizhi("结束脚本")
                                    qinglihh("com.sina.weibo")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            xgsrizhi("服务器上没有微博任务")
                            qinglihh("com.sina.weibo")
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

//执行微博
function zxwb(){
    xgsrizhi("执行微博")
    qinglihh()
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        var wb = wbdl()
        if (wb == true){
            wbyh()
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
    zxwb()

} catch(error) {
    log(error);
    cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}


// bofangyy()
// wbyh()
// meitxx()
// exit()


// wbzc()



// ws()
// dlqq()
// var ss = getAllTexts()
// xgsrizhi(ss)
// var baoming = currentPackage()
// xgsrizhi(baoming)
xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







