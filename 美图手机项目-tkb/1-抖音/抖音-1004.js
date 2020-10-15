if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.ss.android.ugc.aweme"   //该项目包名
var xmxh = "1"               //项目序号






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


//******************************************************************抖音项目*****************************************************************

function zonghe(){
    if(text("稍后").exists() && text("去打开").exists()){
        log("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if(text("允许").exists() && text("拒绝").exists()){
        log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        log("我知道了")
        click("我知道了")
        sleep(2000)
    }

    if (text("网络连接错误").exists()) {
        click("重试");
        log("网络连接错误");
        sleep(1200)
    }
    
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        log("确认");
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        log("同步到今日头条");
        sleep(1200)
    }
    if(text("发现通讯录好友").exists()){
        log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        log("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        log("取消");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        log("以后再说");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            log(error);
        }
    }
    if(text("立即赠送").exists()){
        log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        log("允许");
        sleep(1200)
    }
    if (textContains("滑动查看更多").exists()) {
        log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
}

//抖音注册
function dyzhuce(){
    log("抖音注册")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zh = "18615236956"    //账号
    var yzm = "1234"     //验证码
    var bb = 0
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > 40*60*1000){
            log("超时还没注册成功")
            guanbiyy("com.ss.android.ugc.aweme")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没登录成功")
            back()
            sleep(1000)
            guanbiyy("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (bb == 1 && tem == 0){
            log("去拿号")

            tem = 1
        }
        if(text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() ||  desc("作者头像").exists() && desc("发现好友").exists() ){
            toastLog("登录成功")
            return false
        }else{
            if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
                log("首页")
                click(1020, 1950)
                sleep(2000)
            }
        }
        if(text("其他登录方式").exists() && text("密码登录").exists() || id("com.ss.android.ugc.aweme:id/e7a").exists() && id("com.ss.android.ugc.aweme:id/a2q").exists() && id("com.ss.android.ugc.aweme:id/ab_").exists()){
            log("登录界面")
            if (bb == 1){
                log("输入账号")
                setText([0], zh)
                sleep(1000)
                click(800, 800)
                sleep(2000)
                if (id("com.ss.android.ugc.aweme:id/d5o").exists()){
                    try{
                        var ss = id("com.ss.android.ugc.aweme:id/d5o").findOnce().text()
                        if (ss != "获取验证码"){
                            toastLog("去获取验证码")
                            setText([1], yzm)
                            sleep(1000)
                            click(500, 1200)
                            sleep(1000)
                            click(500, 1200)
                        }{
                            log("还没点击获取验证码")
                            sleep(1000)
                        }
                    } catch(error) {
                        log("异常了")
                    }  
                }
            }else{
                log("先去拿号")
                bb = 1
            }
        }
        









        zonghe()
    }
}


//抖音登录上传信息
function dydl(){
    log("抖音登录")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var dyzh = "1234"    //抖音账号
    var djsl = "1234"    //点赞数量
    var dygz = "1234"    //关注数量
    var dyfs = "1234"    //粉丝数量
    var dyqm = "1234"    //抖音签名
    var dybf = "1234"    //播放数量
    var dync = "1234"    //抖音昵称
    var dyxb = "1234"    //抖音性别
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            log("时间够了退出")
            guanbiyy("com.ss.android.ugc.aweme")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没登录成功")
            back()
            sleep(1000)
            guanbiyy("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("其他登录方式").exists() && text("密码登录").exists() || id("com.ss.android.ugc.aweme:id/e7a").exists() && id("com.ss.android.ugc.aweme:id/a2q").exists() && id("com.ss.android.ugc.aweme:id/ab_").exists()){
            toastLog("登录界面-还未注册账号")
            return false
        }

        if(text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() ||  desc("作者头像").exists() && desc("发现好友").exists() ){
            log("编辑资料界面")
            click(1020, 1950)
            sleep(2000)
            var ss = getAllTexts()
            log(ss)
            try{
                for(j = 0,len=ss.length; j < len; j++){
                    if (ss[j].indexOf("喜欢 ") != -1){
                        log(ss[j])
                        var st = ss[j].split("欢 ")
                        djsl = st[1]
                        log("点赞数量："+ djsl)
                    }
                    if (ss[j].indexOf("男") != -1){
                        log("性别男")
                        dyxb = "1"
                    }
                    if (ss[j].indexOf("女") != -1){
                        log("性别女")
                        dyxb = "2"
                    }
                    
                }
                if (id("com.ss.android.ugc.aweme:id/e_f").exists()){
                    var dd = id("com.ss.android.ugc.aweme:id/e_f").findOnce().text()
                    if (dd.indexOf("抖音号: ") != -1){
                        log(dd)
                        var st = dd.split(": ")
                        dyzh = st[1]
                        log("抖音账号："+ dyzh)
                    }
                }
                var ssr = upzhanghao(dyzh)
                if (ssr == true){
                    scshuju(dyzh, "zan", djsl)
                    scshuju(dyzh, "sex", dyxb)
                    if (id("com.ss.android.ugc.aweme:id/am1").exists()){
                        dygz = id("com.ss.android.ugc.aweme:id/am1").findOnce().text()
                        log("关注数量："+ dygz)
                        scshuju(dyzh, "guanzhushuliang", dygz)
                    }
                    if (id("com.ss.android.ugc.aweme:id/alx").exists()){
                        dyfs = id("com.ss.android.ugc.aweme:id/alx").findOnce().text()
                        log("粉丝数量："+ dyfs)
                        scshuju(dyzh, "fsshuliang", dyfs)
                    }
                    if (id("com.ss.android.ugc.aweme:id/ea8").exists()){
                        dyqm = id("com.ss.android.ugc.aweme:id/ea8").findOnce().text()
                        log("签名："+ dyqm)
                        scshuju(dyzh, "jianjie", dyqm)
                    }
                    if (id("com.ss.android.ugc.aweme:id/e0g").exists()){
                        dybf = id("com.ss.android.ugc.aweme:id/e0g").findOnce().text()
                        log("播放数量："+ dybf)
                        scshuju(dyzh, "shipinbofangliang", dybf)
                    }
                    if (id("com.ss.android.ugc.aweme:id/c0i").exists()){
                        dync = id("com.ss.android.ugc.aweme:id/c0i").findOnce().text()
                        log("抖音昵称："+ dync)
                        scshuju(dyzh, "nickname", dync)
                    }
                }
                toastLog("账号："+ dyzh + "--关注："+ dygz + "--粉丝："+ dyfs + "--签名："+ dyqm + "--点赞："+ djsl + "--播放数量："+ dybf)
            }catch(error) {
                log(error);
            }

            guanbiyy("com.ss.android.ugc.aweme")
            return true

        }else{
            if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
                log("首页")
                click(1020, 1950)
                sleep(2000)
            }
        }
        
        zonghe()
    }
}

//抖音养号
function dyyh(){
    log("抖音养号")
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑","大笑","哈欠","震惊","送心","困","what","泣不成声","小鼓掌","大金牙","偷笑","石化","思考","吐血","可怜","嘘","撇嘴","黑线","笑哭","雾霾","奸笑","得意","坏笑","抓狂","泪奔","钱","吻","恐惧","笑","快哭了","翻白眼","互粉","赞","鼓掌","祈祷","kiss","去污粉","666","玫瑰","胡瓜","啤酒","我想静静","委屈","舔屏","飞吻","再见","紫薇别走","听歌","求抱抱","绝望的凝视","不失礼貌的微笑","吐舌","呆无辜","看","白眼","熊吉","骷髅","黑脸","吃瓜群众","绿帽子","汗","摸头","皱眉","擦汗","红脸","尬笑","做鬼脸","强","如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime()    //看直播的时间
    var stt = random(30, 40)
    var TTguank = (new Date()).getTime()
    var dinz = random(30,60)
    var dj = random(1,100)
    var ll = 0    //直播
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.ss.android.ugc.aweme")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            guanbiyy("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            TSD = (new Date()).getTime()
            if(!text("推荐").exists()){
                log("点首页")
                click("首页")
                sleep(2000)
            }else{
                if(tem == 0){
                    log("推荐")
                    click("推荐")
                    sleep(random(10, 15) * 1000);
                    tem = 1
                }else{
                    if (dj > 98){
                        log("去评论、点赞、关注、看直播")
                        dj = random(1,100)
                        var nu = random(1,10)
                        if(nu == 1){
                            log("关注")
                            click(990, 870)
                            sleep(1000)
                            swipe(500, 1600, 600, 400, 1200);
                            sleep(random(1, 3) * 1000);
                        }else{
                            if(nu == 2){
                                log("浏览评论")
                                click(990, 1240)
                                sleep(2000)
                                var aa = random(1, 5)
                                for(var i = 0;i< aa ;i++){
                                    swipe(533,1700, 557,400,random(400, 600))
                                    sleep(random(1000, 3000))
                                }
                                back()
                                sleep(3000)
                                back()
                                sleep(500)
                            }else{
                                if(nu == 3){
                                    log("点赞")
                                    click(990, 1020)
                                    sleep(1000)
                                    swipe(500, 1600, 600, 400, 1200);
                                    sleep(random(1, 3) * 1000);
                                }else{
                                    log("去看直播")
                                    click(980, 130)
                                    sleep(1000)
                                    ssd = (new Date()).getTime() 
                                    ll = 1
                                }
                            }
                        }
                    }else{
                        if((new Date()).getTime() - TTguank > dinz*1000){    
                            toastLog(dinz+"秒，滑动")
                            swipe(500, 1600, 600, 400, 1200);
                            sleep(random(5, 10) * 1000);
                            dinz = random(30,60)
                            TTguank = (new Date()).getTime()
                            dj = random(1,100)
                        }else{
                            toastLog("观看视频")
                            sleep(3000)
                        }
                    }
                }
            }
        }
        if(text("直播广场").exists()){
            log("直播广场")
            if (ll == 1){
                var aa = random(1, 5)
                for(var i = 0;i< aa ;i++){
                    swipe(533,1700, 557,400,random(400, 600))
                    sleep(random(1000, 3000))
                }
                click(755, 1777)
                sleep(1000)
            }else{
                toastLog("不看直播")
                back()
                sleep(1000)
            }
        }
        if(text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()){
            toastLog("直播界面")
            TSD = (new Date()).getTime()
            if (ll == 1){
                if ((new Date()).getTime() - ssd > 6*60*1000){
                    log("看完直播了")
                    ll = 0
                }else{
                    toastLog("观看直播中")
                    sleep(4000)
                }
            }else{
                log("退出直播")
                back()
                sleep(3000)
            }

        }
        if( id("com.ss.android.ugc.aweme:id/xj").exists() && text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()){
            log("留下你的精彩评论吧")
            // var neir ="["+bq[random(0,bq.length - 1)]+"]"+"["+bq[random(0,bq.length - 1)]+"]"
            // setText(neir)
            back()
            sleep(3000)
        }

        if(text("点击重播").exists()){
            toastLog("点击重播，滑动")
            swipe(500, 1600, 600, 400, 1200);
            sleep(random(10, 20) * 1000);
            sleep(1000)
        }



        zonghe()
    }
}





//******************************************************************抖音项目*****************************************************************

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
                    if (renwu[i] == "1" ){
                        log("继续抖音任务")
                        sstt = 1
                    }else{
                        if (renwu[i] == "100" ){
                            log("结束脚本")
                            guanbiyy("com.ss.android.ugc.aweme")
                            exit()
                        }
                    }
                }
                if (sstt == 0){
                    log("服务器上没有抖音任务")
                    guanbiyy("com.ss.android.ugc.aweme")
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

//*******************************************************新服务器*********************************************************************

//获取任务
function hqrenwu(){
    log("获取任务")
    var xmmc = "douyinflag"          //项目名称
    while (1){ 
        try {
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/shebeixinxi/xiangmu/"+xmmc+"/usr/"+yhname+"/shebeihao/" + yhbh
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj)
                // var renwu = r_obj["data"]
                // log(renwu)
                // return renwu
                return r_obj["data"]
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}

//上传账号
function upzhanghao(zhanghao){
    log("上传账号数据..."+yhname+"--"+yhbh+"--"+zhanghao)
    var ts = (new Date()).getTime()  
    var sbb = "zhanghao_douyin"
    while(1){
        if (zhanghao == "1234"){
            log("没获取到账号")
            return false
        }
        try {
            if ((new Date()).getTime() - ts > 30*1000){
                log("超时退出")
                return false
            }
            var url = "http://" + sbip + "/douyin.com/tp5/public/index/Myapi/addZhangHaonew/tableflag/"+sbb+"/usr/"+yhname+"/shebeihao/"+yhbh+"/zhanghao/"+zhanghao
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj["code"])
                if (r_obj["code"] == 0 || r_obj["code"] == 1){
                    log("上传账号信息成功")
                    return true
                }else{
                    log("上传账号信息失败")
                    toast("上传账号信息失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                log("没网")
                sleep(3000)
            }
            sleep(random(10, 10000))
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
    }
}

//上传数据
//上传点赞、粉丝、关注总数  ziduan = guanzhushuliang //关注数量   name = "抖音账号"   ziduan =  fsshuliang//粉丝数量
//ziduan = 	jianjie //简介  ziduan = touxiang //头像   ziduan = shipin //视频 ziduan = zan //点赞数量
//ziduan = 	shipinbofangliang //视频播放量  ziduan = quanzhong //权重   ziduan = nickname //昵称  ziduan = sex //性别
function scshuju(name, ziduan, shuju){
    log("上传账号数据..."+yhname+"--"+yhbh)
    log(name + "----"+ziduan+"----"+shuju)
    var Tb = (new Date()).getTime()
    // var name = "888----008"   //账号名称
    // var ziduan = "sex"
    // var shuju = "1"
    var sbb = "zhanghao_douyin"
    while (1){
        if (shuju == "1234"){
            log("没获取到账号")
            return false
        }
        try {
            if ((new Date()).getTime() - Tb > 20*1000){
                log("超时退出")
                break
            }
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/gxzhanghaonew/tableflag/"+sbb+"/usr/"+yhname+"/count/"+name+"/ziduan/"+ziduan+"/val/"+shuju
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log("我是返回的信息"+ r_obj)
                log(r_obj["code"])
                if (r_obj["code"] == 0){
                    log("上传信息成功")
                    break
                }else{
                    log("上传信息成功失败")
                    toast("增上传信息成功失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}

//上传点赞数跟注册数 aa = dianzan //点赞+1   aa = zhuceshuliang //注册数量+1
// aa = qqguanggao //qq广告+1    aa =  youxiguanggao //游戏广告+1 
//aa = laqunshuliang //上传拉群数量   aa = qunliaoshuliang //上传群聊数量   
function xupdjshu(aa){
    log("上传点赞数跟注册数--"+yhname+"--"+yhbh)
    while (1){
        try {
            var r = http.get("http://" + fuwuip + "/douyin.com/tp5/public/index/Myapi/gxshebei/usr/"+user+"/shebeihao/"+bianhao+"/ziduan/"+aa+"/val/1");
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj["code"])
                if (r_obj["code"] == 0){
                    log("增加成功")
                    break
                }else{
                    log("增加数量失败")
                    toast("增加数量失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                log("没网")
                sleep(3000)
            }
            sleep(random(10, 10000))
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
    }
}




//*******************************************************对接服务器*****************************************************************


//执行美图项目
function dyzhixing(){
    toastLog("执行抖音任务")
    bofangyy()
    guanbiyy(dqbaoming)
    var rw = hqrenwu()
    try{
        var ss = dydl()
        if (ss == true){
            if (rw["douyinflag"] == 1){
                log("去养号")
                dyyh()
            }else{
                log("去关注")
            }
        }
    }catch(error) {
        log(error);
    }
    meitxx()
    exit()
}



dyzhixing()




// bofangyy()
// dyyh()
// meitxx()
// exit()




sleep(1000)

// ws()  抖音号: dytisi014o6k
// // dlqq()
// var ss = getAllTexts()
// log(ss)
// sleep(1000)

// var baoming = currentPackage()
// log(baoming)
log(getClip()+"**")
// qqyanghao()
// xiugtx()







