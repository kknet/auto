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


//*******************************************************微视项目 *****************************************************************

function zonghe(){
    if(text("允许").exists()){
        log("允许")
        click("允许")   
        sleep(1000)
    }
    if(text("知道了").exists()){
        log("知道了")
        click("知道了")   
        sleep(1000)
    }
    if(text("我知道了").exists()){
        log("我知道了")
        click("我知道了")   
        sleep(1000)
    }
    if(text("安装").exists() && text("取消").exists()){
        log("取消")
        click("取消")   
        sleep(1000)
    }
    if(text("重试").exists() && text("取消").exists()){
        log("重试")
        click("重试")   
        sleep(1000)
    }
    if(text("取消关注").exists() && text("取消").exists()){
        log("取消关注")
        click("取消")   
        sleep(1000)
    }
    if(text("跳过").exists() && text("选择你想看的内容").exists()){
        log("跳过")
        click("跳过")   
        sleep(1000)
    }
    if(text("立即更新").exists()){
        log("立即更新")
        back()
        sleep(1000)
    }
    if(text("关闭应用").exists() && text("等待").exists()){
        log("等待")
        click("等待")   
        sleep(1000)
    }
    if(text("一键关注").exists() && id("com.tencent.weishi:id/close_btn").exists()){
        log("一键关注")
        try {
            var ss = id("com.tencent.weishi:id/close_btn").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
            sleep(1000)
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
}

//微视养号
function wsyanghao(){
    log("微视养号")
    launch("com.tencent.weishi")
    var TB = (new Date()).getTime()
    var TC = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    while(1){
        if ((new Date()).getTime() - TC > 3*60*1000){
            log("超时没在首页")
            guanbiyy("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }

        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.tencent.weishi")
            break
        }
        if((text("首页").exists() && text("消息").exists() && text("关注").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            log("首页")
            TC = (new Date()).getTime()
            var shij = random(20, 50)
            TB = (new Date()).getTime()
            if (shij < 23){
                var bb = random(1, 30)
                if (bb >29){
                    log("去点赞")
                    click(968,1756)
                    sleep(2500)
                }else{
                    log("看评论")
                    click(815,1747)
                    sleep(2000)
                }
            }else{
                while(1){
                    var point = findColor(captureScreen(), "#1aad19", {
                        region: [630,1730, 50,50],
                        threshold: 4
                    });
                    if(point){
                        log("看完了")
                        swipe(500,1810, 486,305, 500)
                        sleep(3000)
                        break
                    }
                    if ((new Date()).getTime() - TB > shij*1000){
                        swipe(500,1800, 486,300, 500)
                        sleep(3000)
                        break
                    }else{
                        toastLog("播放等待")
                        sleep(3000)
                    }
                }
            }
        }
        if(id("com.tencent.weishi:id/close_btn").exists() && id("com.tencent.weishi:id/comment_list_title").exists() || id("com.tencent.weishi:id/like_btn_white").exists() && id("com.tencent.weishi:id/avatar").exists()){
            log("评论界面")
            var cc = random(1, 5)
            for (let i = 0; i < cc; i++){
                sleep(1000)
                swipe(500,1700, 486,550, 1000)
                sleep(random(1000, 2000))
            }
            back()
            sleep(1000)
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
    log("获取任务")        // 1、抖音  2、qq  3、乐游  4、微视  5、微信  6、微博  7、火山  8、快手  9、陌陌
    var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3]        //ip
    var yhname = sbxx_table[1]    //用户名
    var yhbh = sbxx_table[2]      //编号
    var rs = {"douyinflag":1, "qqflag":2, "leyouflag":3, "weishiflag":4, "weixinflag":5, "weiboflag":6, "huoshanflag":7, "kuaishouflag":8, "momoflag":9}
    var mtrenwu = ""
    while (1){ 
        try {
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwu/usr/"+yhname+"/shebeihao/"+yhbh
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj)
                var renwu = r_obj["data"]
                log(renwu)
                for (var k in renwu){
                    if (renwu[k] == 1){
                        log(k)
                        mtrenwu = mtrenwu + rs[k]+ "-"
                    }
                }
                log(mtrenwu)
                return mtrenwu
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
                var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu_table.length-1; i++){
                    if (renwu_table[i] == "4" ){
                        log("继续微视任务")
                        sstt = 1
                    }
                }
                if (sstt == 0){
                    log("服务器上没有微视任务")
                    guanbiyy("com.tencent.weishi")
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
    var renwu_table = renwu.split("-")
    log(renwu_table.length-1)
    for(var i =0 ; i < renwu_table.length-1; i++){
        if (renwu_table[i] == user && tem == 0){
            if (i < renwu_table.length-2){
                user = renwu_table[i+1]
                tem = 1
            }
        }
    }
    if (tem == 0){
        log("已经做完一轮或者刚开始")
        user= renwu_table[0]
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
wsyanghao()
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







