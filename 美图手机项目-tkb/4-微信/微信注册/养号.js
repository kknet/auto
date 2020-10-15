/*
@微信版本7.0.11
@作者：TKB
*/
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
// var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
// var sbxx_table = sbxx.split("-")
// var sbip = sbxx_table[3]        //服务器ip
// var yhname = sbxx_table[1]    //服务器用户名
// var yhbh = sbxx_table[2]      //手机编号  weixinflag
// var dqbaoming = "com.tencent.mm"   //该项目包名
// var xmxh = "4"               //项目序号



log(getClip())


function pengyouquan(){
    toastLog("开始发朋友圈")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            toastLog("点发现")
            click("发现")
            sleep(1200)
        }
        if(text("我知道了").exists()){
            toastLog("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if(text("朋友圈").exists()){
            toastLog("点朋友圈")
            click("朋友圈")
            sleep(1200)
        }
        if(id("com.tencent.mm:id/baj").exists()){
            toastLog("长按界面")
            longClick(929+30,75+30)
            sleep(2000)
        }
        if(text("发表文字").exists()){
            setText(0,"武汉加油！！")
            sleep(1200)
            click("发表")
            sleep(3000)
            break;
        }
    }
}

function yinsi(){
    toastLog("隐私设置")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            click("我")
            sleep(1200)
        }
        if(text("设置").exists()){
            click("设置")
            sleep(1200)
        }
        if(text("隐私").exists()){
            click("隐私")
            sleep(1200)
        }
        if(text("加我为朋友时需要验证").exists()){
            var tt = bounds(915,371,1037,436).findOnce()//checked()
            if (tt != null){
                xgsrizhi("有这个控件")
                if (bounds(915,371,1037,436).findOnce().desc() == "已开启"){
                    xgsrizhi("这个控件被选中了")
                    click(915+20,371+20)
                    break
                }
            }
        }
    }
}

function addHaoYou(){
    toastLog("添加好友")
    var haoyouphone = getHaoYou()
    xgsrizhi(haoyouphone)
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            click("通讯录")
            sleep(1200)
        }
        if(text("新的朋友").exists()){
            click("新的朋友")
            sleep(1200)
        }
        if(text("添加朋友").exists()){
            click("添加朋友")
            sleep(1200)
        }
        if(text("雷达加朋友").exists()){
            click(143,256+30)
            sleep(2000)
            setText(0,haoyouphone)
            sleep(1200)
            click(216,260)
            sleep(1200)
        }
        if(text("添加到通讯录").exists()){
            click("添加到通讯录")
            sleep(2000)
        }
        if(text("发送").exists()){
            click("发送")
            sleep(1200)
            break
        }
    }
}


function qunliao(){

}

function kanxinwen(){
    toastLog("看新闻")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            click(103,1981)
            sleep(1200)
        }
        if(text("腾讯新闻").exists()){
            click("腾讯新闻")
            sleep(5000)
            click(181,1618+30)
            sleep(3000)
        }
        if(text("隐私").exists()){
            click("隐私")
            sleep(1200)
        }
        if(text("加我为朋友时需要验证").exists()){
            var tt = bounds(915,371,1037,436).findOnce()//checked()
            if (tt != null){
                xgsrizhi("有这个控件")
                if (bounds(915,371,1037,436).findOnce().desc() == "已开启"){
                    xgsrizhi("这个控件被选中了")
                    click(915+20,371+20)
                    break
                }
            }
        }
    }
}

function runwx(){
    launch("com.tencent.mm");
    sleep(2000)
}

function sj(s,e){
    var temp 
    temp = random(s, e)
    sleep(temp)
}


function tkb(x,y){
    var nu = random(-5, 5)
    click(x+nu,y+nu)
    sj(99,500)
}


function getHaoYou(){
    toastLog("获取微信好友")
    while(1){
        try {
            var r = http.get("http://120.79.199.143/meitu/gethaoyou.php");
            if( r.statusCode == 200){
                var body =  r.body.string()
                xgsrizhi("html = " +body);
                var reg = '[0-9]{10,12}';
                var table = body.match(reg)
                if(table){
                    return table[0]
                } 
                else{
                    toastLog("没有号码"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("取号不通:"+r.statusCode)
                sleep(3000)
            }
        } catch(error) {
            print(error);
            xgsrizhi(error)
            sleep(3000)
        }
    }
}


//************************************************************************** */

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
                sstt = 0
                // var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu.length; i++){
                    if (renwu[i] == xmxh ){
                        log("继续微信任务")
                        sstt = 1
                    }else{
                        if (renwu[i] == "100" ){
                            log("结束脚本")
                            guanbiyy("com.tencent.mm")
                            exit()
                        }
                    }
                }
                if (sstt == 0){
                    log("服务器上没有微信任务")
                    guanbiyy("com.tencent.mm")
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
