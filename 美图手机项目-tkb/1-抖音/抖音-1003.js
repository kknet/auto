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


//******************************************************************抖音项目*****************************************************************
var HEIGHT = 2040
var WIDTH = 1080
//养号
function yanghaodouyin(){       //养号封装
    guanbiyy("com.ss.android.ugc.aweme")
    sleep(3000)
    launch("com.ss.android.ugc.aweme")
    quanxian()       //权限
    shuashipin()      //刷视频
    var a = random(1,2)     //随机进看直播
    if(a == 2){
        yanghaozhibo()        //看直播
    }
    //退出抖音
    backzhu() //返回首页
    back()
    sleep(200)
    back()
    sleep(100)
    sleep(100)
    back()
}

//权限
function quanxian(){        
    log("设置权限")
    backzhu() //返回首页
    var Time1 = (new Date()).getTime()
    while(1){
        if((new Date()).getTime() - Time1 > 3*60*1000){    //40分钟退出
            log("退出养号权限")
            break
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            if(text("编辑资料").exists()){
                log(" 我 界面")
                xgs(972, 1835)
                sleep(1000)
            }else{
                xgs(972, 1835)
                sleep(1000)
            }
        }
        if(text("个人名片").exists() && text("设置").exists()){
            log("点设置")
            xgs("设置")
            sleep(1000)
        }
        if(text("帐号与安全").exists() && text("隐私设置").exists()){
            log("点隐私设置")
            xgs("隐私设置")
            sleep(1000)
        }
        if(text("谁可以看我对作品的点赞").exists() && text("谁可以发消息给我").exists()){
            log("隐私设置界面")
            xgs("谁可以看我对作品的点赞")
            sleep(1000)
        }
        if(text("仅自己和作者").exists() && text("所有人").exists() && id("com.ss.android.ugc.aweme:id/e6e").exists()){
            log("仅自己和作者")
            xgs("仅自己和作者")
            sleep(1000)
            break
        }

        chuangkou()
    }
}

//刷视频
function shuashipin(){      
    log("刷视频")
    var Time1 = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var TTshouye = (new Date()).getTime()
    var TTguank = (new Date()).getTime()
    var tuijian = 0
    var dinz = random(30,60)
    var newRunTime = random(20,40)  //随机看视频时间
    var shuzu = new Array(10)
    for(var k = 0 ; k <10 ;k++){
        shuzu[k] = random(1,10)
    }
    // for(var k = 0 ; k <10 ;k++){
    //     log(shuzu[k])
    //     aaa = aaa +shuzu[k]
    // }
    // log("和="+aaa)
    

    var dianzhenshijian = random(5,(newRunTime-2)) //点赞时间
    var guanzhushijian = random(5,(newRunTime-2)) //关注时间
    var pinglunshijan = random(5,(newRunTime-2)) //关注时间

    log("点赞时间"+dianzhenshijian)
    log("关注时间"+guanzhushijian)
    log("关注时间"+pinglunshijan)
    
    // dianzhenshijian = 1
    // guanzhushijian = 2
    // pinglunshijan = 3

    var dianzhan = 0        //点赞控制
    var guanzhu = 0         //关注控制
    var pinglun = 0        //评论控制
    var dzlnum = 0
    backzhu() //返回首页
    while(1){
        if((new Date()).getTime() - Time1 > newRunTime*60*1000){    //40分钟退出
            log("退出养号刷视频")
            break
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页-")
            TTshouye = (new Date()).getTime()
            if(!text("推荐").exists()){
                log("点首页")
                xgs("首页")
                sleep(2000)
            }else{
                if(tuijian == 0){
                    log("推荐")
                    xgs("推荐")
                    sleep(random(10, 15) * 1000);
                    tuijian = 1
                }else{
                    if(zhaose("if isColor(986,1336,0x47d300,80) then")){
                        TTguank = (new Date()).getTime()
                        if((dianzhan == 0) && ((new Date()).getTime() - TT >= dianzhenshijian*60*1000 )){//到时间点赞
                            toastLog("点赞")
                            xgs(990, 913)
                            sleep(1000)
                            dianzhan = 1
                        }
                        if((guanzhu == 0) && ((new Date()).getTime() - TT >= guanzhushijian*60*1000 )){//到时间关注
                            log("关注")
                            if(zhaose("if isColor(974,745,0xfd2d57,80) and isColor(981,767,0xfc2d56,80) and isColor(999,765,0xfe2d52,80) and isColor(987,753,0xf8eded,80) and isColor(997,744,0xfe2d56,80) then")){
                                toastLog("可以关注")
                                xgs(989, 754)
                                sleep(1000)
                                guanzhu = 1
                            }else{
                                log("关注过来，下一个再关注")
                            }
                        }
                        if((pinglun == 0) && ((new Date()).getTime() - TT >= pinglunshijan*60*1000 )){//到时间评论
                            toastLog("评论")
                            pinglu()      //首页评论
                            sleep(1000)
                            back()
                            sleep(1000)
                            pinglun = 1
                        }
                        toastLog("滑动")
                        swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
                        sleep(random(10, 20) * 1000);
                        // dzlnum = dzlnum +1

                    }else{
                        if((new Date()).getTime() - TTguank > dinz*1000){    
                            toastLog(dinz+"秒，滑动")
                            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
                            sleep(random(10, 20) * 1000);
                            dinz = random(30,60)
                            TTguank = (new Date()).getTime()
                        }
                    }
                }
            }
            // if(text("查看详情").exists()||text("去逛逛").exists() ||id("com.ss.android.ugc.aweme:id/b60").exists()){   //广告加时
            //     log("广告加时")
            //     sleep(30 * 1000);
            // }
            // if(zhaose("if isColor(847,1835,0x8b8b91,80) and isColor(967,1847,0x8c8c94,80) and isColor(445,1843,0x8a8b91,80) and isColor(444,1844,0xefefef,80) and isColor(1063,1750,0xffffff,80) and isColor(1072,1093,0xffffff,80) then")){
            //     log("评论界面")
            //     back()
            //     sleep(1000)
            // }
            if(text("点击重播").exists()){
                toastLog("点击重播，滑动")
                swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
                sleep(random(10, 20) * 1000);
                sleep(1000)
            }
        }else{
            if((new Date()).getTime() - TTshouye > 2*60*1000){    //40分钟退出
                backzhu() //返回首页
                TTshouye = (new Date()).getTime()
            }
        }
        chuangkou()
    }
}

//看直播
function yanghaozhibo(){        
    log("看直播")
    var Time1 = (new Date()).getTime()
    var Time2 = (new Date()).getTime()
    var gkanshijai = random(1,5)
    var newRunTime = random(10,15)
    backzhu() //返回首页
    while(1){
        if((new Date()).getTime() - Time1 > newRunTime*60*1000){    //20分钟退出
            log("退出养号直播")
            break
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            xgs(997, 132) //LIVE
            sleep(1000)
        }
        if(text("直播广场").exists()){
            log("直播广场")
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(1000)
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(1000)
            xgs(755, 1777)
            sleep(1000)
        }
        if(text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/c57").exists()){
            toastLog("直播界面")
            sleep(20000)
            // if((new Date()).getTime() - Time2 > gkanshijai*60*1000 ){
            //     log("下一个直播")
            //     Time2 = (new Date()).getTime()


            //     swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            //     sleep(1000)
            //     gkanshijai = random(1,3)
            // }else{
            //     var shuz =gkanshijai - parseInt((Time2 - (new Date()).getTime())/60/1000)
            //     toast("还有观看："+shuz+" 分钟")
            //     sleep(10000)
            // }
            
        }
        if(text("立即赠送").exists()){
            log("立即赠送")
            back()
            sleep(1000)
        }
        if (textContains("直播已结束").exists()) {
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(1000);
        }
        chuangkou()
    }
}

//首页评论
function pinglu(){      
    var gerenhao = 0
    var shouyr = 0
    var numbq =  random(1,3)
    var Tt1 = (new Date()).getTime()
    while(1){
        if((new Date()).getTime() - Tt1 > 2*60*1000){    //20分钟退出
            log("超时退出评论")
            return false
        }
        if(text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/c57").exists()){
            log("直播界面")
            back()
            sleep(100)
            return false
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            //头像有关注的加号
            if(zhaose("if isColor(868,1852,0x8a8b8e,80) and isColor(854,1862,0x8a8a90,80) and isColor(994,1851,0x8a8c8e,80) and isColor(945,1853,0xffffff,80) and isColor(40,1886,0xffffff,80) and isColor(48,1786,0xffffff,80) and isColor(445,1840,0x8a8b91,80) and isColor(444,1840,0xececed,80) then")){
                log("评论界面")
                xgs(994, 1843)
                sleep(1000)
            }else{
                log("点评论")
                xgs(990, 1127)
                sleep(1000)
            }
        }
        if(desc("表情").exists() && text("留下你的精彩评论吧").exists() && id("com.ss.android.ugc.aweme:id/xj").exists()){
            desc("表情").findOnce().click();
            sleep(2000)
        }
        if(desc("文本").exists() && text("留下你的精彩评论吧").exists() && id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/ac2").exists()){
            log("发表情")
            for(var k = 0; k < numbq ; k++ ){
                shouyr = random(0,5)
                gerenhao = random(1,3)
                var yy = 1212
                if(gerenhao == 2){
                    yy = 1434
                }else{
                    if(gerenhao == 3){
                        yy = 1648
                    }
                }
                xgs((shouyr*150)+90, yy) //197, 1213
                sleep(1000)
            }
            id("com.ss.android.ugc.aweme:id/xj").findOnce().click();
            sleep(2000)
            return true
        }

        chuangkou()
    }
}

//关注
function gaunzhuyh(){       
    var uidnum = 0
    var uid = douyinid()  //获取uid
    while(1){
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            while(1){
                if (uidnum > 3){
                    uid = douyinid()  //获取uid
                    uidnum = 0
                }
                try{
                    uidnum = uidnum +1
                    app.startActivity({
                        action: "android.intent.action.VIEW", 
                        data: app.parseUri("snssdk1128://user/profile/"+uid), //douyin(uid)
                        flags : ["activity_brought_to_front"],
                    });
                } catch(error) {
                    log("异常了")
                }
                sleep(5000)
                // Image = captureScreen()
                var t = id("com.ss.android.ugc.aweme:id/ch1").findOnce()
                if(t != null){
                    t = t.bounds()
                    log("lai")
                    log("xy1="+t.centerX()+"--"+t.centerY())
                    if(t.centerX()>377&&t.centerX()<916&&t.centerY()>200&&t.centerY()<600){
                        log("进")
                        var se = colors.toString(images.pixel(captureScreen(),t.centerX()+153, t.centerY()))
                        log(se)
                        if(se == "#fffe2c55"){  //ffffced7
                            toastLog("用户界面00,退出循环")
                            break
                        }
                    }
                }
                else{
                    backzhu()
                }
            }
        }
        if(text("获赞").exists() && text("关注").exists() && text("粉丝").exists() ){
            sleep(2000)
            var t = id("com.ss.android.ugc.aweme:id/ch1").findOnce()
            if(t != null){
                t = t.bounds()
                log("xy="+t.centerX()+"--"+t.centerY())
                if(t.centerX()>377&&t.centerX()<916&&t.centerY()>397&&t.centerY()<540){
                    var se = colors.toString(images.pixel(captureScreen(),t.centerX()+153, t.centerY()))
                    log("颜色："+se)
                    if(se == "#fffe2c55"){
                        toastLog("关注")
                        click(t.centerX(),t.centerY())
                        sleep(1000)
                        backzhu() //返回首页
                        break
                    }else{
                        backzhu() //返回首页
                    }
                }
            }
        }
    }
}

function xgs(a, b){
    if (b == undefined){
        sleep(random(200, 500))
        click(a)
        sleep(random(200, 500))
    }else{
        var x = a*(WIDTH/1080)
        var y = b*(HEIGHT/1920)
        sleep(random(200, 500))
        click(x, y)
        sleep(random(200, 500))
    }
}
function backzhu(){                     //返回主界面
    log("返回主界面")
    var times = (new Date()).getTime()
    var nnn = 1
    sleep(2000)
    back()
    sleep(3000)
    while(1){
        if ((new Date()).getTime() - times > 2*60*1000){
            log("超时没返回")
            home()
            // runapp(nnn,1)
            guanbiyy("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            
            times = (new Date()).getTime()
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("返回成功")
            if(!text("推荐").exists()){
                xgs("首页")
                sleep(2000)
            }
            back()
            sleep(2000)
            break
        }
        back()
        sleep(2100)
        if(text("相机").exists() || desc("抖音短视频").exists()){
            if (nnn  == 1 || nnn == 3 ){
                xgs(154, 1769)                //打开第一个抖音
                sleep(2000)
            }
            else if (nnn == 2|| nnn == 4){
                xgs(409, 1769)                //打开第二个抖音
                sleep(2000)
            }
            sleep(2222)
        }  
        if(text("允许").exists() && text("拒绝").exists()){
            xgs("允许")
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            xgs("我知道了");
            log("我知道了");
            sleep(1200)
        }
        if (text("允许").exists()) {
            xgs("允许");
            log("允许");
            sleep(1200)
        }
        if (textContains("滑动查看更多").exists()) {
            log("滑动查看更多")
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(2000)
        }
        if (textContains("是否用流量观看").exists()) {
            xgs("确认");
            log("确认");
            sleep(1200)
        }
        if (text("确定").exists() && text("取消").exists()) {
            xgs("确定");
            log("确定");
            sleep(1200)
        }
		// if (text("放弃").exists()) {
        //     sleep(1000)
        //     xgs("放弃");
        //     log("放弃");
        //     sleep(1200)
        // }
        chuangkou()
    }
}

function chuangkou(){
    //log("进入窗口的时间"+(new Date()).getTime()/1000)
    if (1== random(1, 5)){
        //log("进来窗口了")
        if(text("稍后").exists() && text("去打开").exists()){
            log("稍后")
            xgs("稍后")
            sleep(2000)
        }
        if (text("长按屏幕使用更多功能").exists()) {
            back()
            log("长按屏幕使用更多功能");
            sleep(1200)
        }
        if(text("允许").exists() && text("拒绝").exists()){
            log("允许拒绝")
            xgs("允许")
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            log("我知道了")
            xgs("我知道了")
            sleep(2000)
        }
    
        if (text("网络连接错误").exists()) {
            xgs("重试");
            log("网络连接错误");
            sleep(1200)
        }
       
        if (textContains("是否用流量观看").exists()) {
            xgs("确认");
            log("确认");
            sleep(1200)
        }
        if (textContains("同步到今日头条").exists()) {
            xgs(543, 1542);
            log("同步到今日头条");
            sleep(1200)
        }
        if(text("发现通讯录好友").exists()){
            log("发现通讯录")
            xgs("取消")
            sleep(1200)
        }
        if (textContains("没有响应").exists()) {
            xgs("等待");
            log("等待");
            sleep(1200)
        }
        if (text("五星好评").exists()) {
            xgs("取消");
            log("取消");
            sleep(1200)
        }
        if (text("以后再说").exists()) {
            xgs("以后再说");
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
       
        if (text("允许").exists()) {
            xgs("允许");
            log("允许");
            sleep(1200)
        }
        if (textContains("滑动查看更多").exists()) {
            log("滑动查看更多")
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(2000)
        }
    }
    //log("出去窗口的时间"+(new Date()).getTime()/1000)
}

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
        if (images.detectsColor(imgss, "#"+ys, xx, yy)) {

        }else{
            imgss.recycle()
            return 0
        }
    }
    imgss.recycle()
    return 1
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
    log("获取任务")        // 1、抖音  2、qq  3、乐游  4、微视  5、微信  6、微博  7、火山  8、快手  9、陌陌
    var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3]        //ip
    var yhname = sbxx_table[1]    //用户名
    var yhbh = sbxx_table[2]      //编号
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
        device.setNotificationVolume(0)
        while(1){
            media.playMusic("/sdcard/观沧海.mp3", 0.01);
            log("我还在播放音乐")
            sleep(media.getMusicDuration());
            if ((new Date()).getTime() - ssee > 60 *1000){
                var renwu = huoqurenwu()
                // var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu.length-1; i++){
                    if (renwu[i] == "1" ){
                        log("继续抖音任务")
                        sstt = 1
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
            if (i < renwu.length){
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
    guanbiyy("com.ss.android.ugc.aweme")
    engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js");
}

//*******************************************************对接服务器*****************************************************************









bofangyy()
yanghaodouyin()
meitxx()
exit()






// ws()
// dlqq()
// var ss = getAllTexts()
// log(ss)
// var baoming = currentPackage()
// log(baoming)
log(getClip()+"**")
// qqyanghao()
// xiugtx()







