//包名：com.mubei.nn


//写日志


var temp = 0
var list = []
var runzt = 0     //如果这个状态是0 去执行打APK
var user = "0"   //执行第几个任务
var ips = "47.99.89.89"
var yhuser = "aaa"   // 用户名
var bianhao = "1"  //机器编号


function xgsrizhi(g){
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
}

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

function huoqurenwu(){
    xgsrizhi("获取任务")        // 1、抖音  2、qq  3、乐游  4、微信  5、微视  6、微博  7、火山  8、快手  9、陌陌
    var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3]        //ip
    var yhname = sbxx_table[1]    //用户名   weixinflag
    var yhbh = sbxx_table[2]      //编号
    while (1){ 
        try {
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

function gengxin(user){
    xgsrizhi("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu2/"+user+".txt");
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
                    // files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
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
                files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", url);
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

//下载模块
function xzmk(){
    xgsrizhi("检测更新模块")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu2/mokuai.txt");
            if( r.statusCode == 200){
                var url =  r.body.string()
                xgsrizhi("html = " +url);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt")
                if (url== bb){
                    xgsrizhi("已经是最新版本")
                }
                else{
                    xgsrizhi("模块更新")
                    sleep(3000)
                    // files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    xgsrizhi("加载模块")
                    var dirpath = "/sdcard/tkb2.js";
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
                                files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt", url);
                                return true
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
                return true
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



function UI(){
    var aa = 20
    files.createWithDirs("/sdcard/dyxgsrizhi.txt");
    files.remove("/sdcard/dyxgsrizhi.txt")       //先删除日志
    files.createWithDirs("/sdcard/dyxgsrizhi.txt");

    if(files.exists("/sdcard/meituconfig.txt")== false) {
        xgsrizhi("新建配置文本")
        files.write("/sdcard/meituconfig.txt", "0-1-1-1");
        aa = 60
    }
    var config_str =  files.read("/sdcard/meituconfig.txt")
    var config_table = config_str.split("-")
    user =  config_table[0]
    var config_user =  config_table[1]
    var config_bianhao =  config_table[2]

    var thread = threads.start(function(){
        // user = rawInput("请输入项目名称", config_dy);
        yhuser = rawInput("请输入用户名", config_user);
        bianhao = rawInput("请输入设备编号", config_bianhao);
    });
    //等待该线程完成
    thread.join(aa*1000);
    click("确定")
    sleep(2000)
    click("确定")
    sleep(1200)
    click("确定")
    sleep(1200)
    var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips
    xgsrizhi("选择结果："+config_temp)
    files.write("/sdcard/meituconfig.txt", config_temp);
}

//存取数据
function cunqusj(name, str){
    var storage = storages.create("lun");
    if (str == "qu"){
//         log("取出来的数据：" + storage.get(name));
        if (storage.get(name) == undefined){
            return -1
        }
        else{
            return storage.get(name)
        }
    }else{
        storage.put(name, str);
    }
}

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

//开启老弟无障碍
function kqwza(){
    log("开启老弟无障碍")
    var cc = (new Date()).getTime()
    var tem = 1
    while(1){
        try {
            if ((new Date()).getTime() - cc > 60*1000){
                log("超时退出")
                break
            }
            if(text("无障碍").exists() && text("laodi").exists()  && tem != 2){
                log("点击老弟")
                click("laodi")
                sleep(2000)
            }
            if(text("立即开始").exists() && text("取消").exists() ){
                log("立即开始")
                click(300, 1800)
                sleep(1000)
                if (id("com.android.systemui:id/remember").exists()){
                    var aa = id("com.android.systemui:id/remember").findOnce().checked();
                    if (aa == false){
                        var bb = id("com.android.systemui:id/remember").findOnce().bounds();
                        xgsrizhi(bb.centerX())
                        xgsrizhi(bb.centerY())
                        click(bb.centerX(), bb.centerY())
                        sleep(1000)
                    }
                }
                click(800, 1920)
                sleep(1000)
                click("立即开始")
                sleep(2000)
            }
            if(text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists() || text("关闭").exists() && text("laodi").exists() && id("com.android.settings:id/switch_text").exists()){
                log("开关界面")
                if (text("laodi").exists()){
                    var a = id("com.android.settings:id/switch_widget").findOnce()
                    if(a != null){
                        log(2222)
                        if (id("com.android.settings:id/switch_widget").findOnce().checked() == true && tem == 2){
                            log("退出")
                            break
                        }else{
                            log("点击开启")
                            a.click()                   //原来开着就先关了，原来关着就直接打开退出
                            sleep(2000)
                            click(800, 1920)
                            sleep(7000)
                            tem = 2
                        }
                    }else{
                        log(1111)
                        if (text("关闭").exists()){
                            log("开启无障碍")
                            click(500, 300)
                            sleep(500)
                            click("关闭")
                            sleep(2000)
                            click(800, 1920)
                            sleep(8000)
                            tem = 2
                        }
                    }
                }else{
                    back()
                    sleep(2000)
                }
            }
            if(text("确定").exists()){
                log("确定")
                click(800, 1920)
                sleep(1000)
                click("确定")
                sleep(2000)
            }

            if(text("夜间升级").exists()){
                log("夜间升级")
                click(300, 1920)
                sleep(1000)
                click("夜间升级")
                sleep(2000)
            }
        }catch(error) {
            log(error);
            sleep(random(3000,5000))
        }
    }
}

function killapp(app){
    openAppSetting(getPackageName(app));
    sleep(2000)
    var tt = 0
    while (true) {
        tt++;
        if (tt > 7){
            break
        }
        if(text("FORCE STOP").exists() || text("强行停止").exists() ){
            var w = text("强行停止").findOnce().enabled()
            if (w == false){
                toastLog("已经强行停止")
                break
            }
            else{
                click("FORCE STOP")
                click("强行停止")
                sleep(2000)
            }
            
        }
        if(text("OK").exists() || text("确定").exists() ){
            click("OK")
            click("确定")
            sleep(2000)
            
            break
        }
        sleep(1000)
    } 
    back()
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
			return false
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
                return true
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
        if(text("继续安装").exists() && text("取消").exists()){
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if(text("下一步").exists() && text("取消").exists()){
            log("下一步")
            click("下一步")
            sleep(2000)
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
                back()
                sleep(1000)
                TT = (new Date()).getTime() - 100*1000
                qinglihh()
            }
        }
    }
}


if( files.exists("/sdcard/观沧海.mp3") == false){
    dowmp3()
}
media.playMusic("/sdcard/观沧海.mp3",0.1,true);


function zhu(){
    UI()
    while(1){
        try{
            var waddj = getPackageName("laodi")
            if (waddj == null){
                m()
                anz()
            }else{
                log("已经安装成功")
                break
            }
        }catch(error){
            toastLog(error);
            sleep(random(1000,3000))
        }
    }
    cunqusj("jiaoben","tingzhi")
    xgsrizhi("开始执行TKB的框架")
    var TJH = (new Date()).getTime()
    var aa = cunqusj("jiaoben","qu")
    var bb = "10086"
    files.remove("/sdcard/dyrizhi.txt")
    files.write("/sdcard/jiaoben.txt", "tingzhi");
    try{
        device.setNotificationVolume(1)
        device.setMusicVolume(1)
    }catch(error){
        toastLog(error);
        sleep(random(1000,3000))
    }
    while(1){
        try{
            runzt = (files.read("/sdcard/jiaoben.txt"));
            log("当前读取的值"+runzt + "bb的值：" + bb)
            xgsrizhi("当前读取的值"+runzt)
            if ((new Date()).getTime() - TJH > 5*60*1000){
                TJH = (new Date()).getTime()
                if (runzt != bb){
                    xgsrizhi("runzt的值："+ runzt + "----" + "bbde值：" + bb)
                    bb = runzt
                }else{
                    log("长时间值没变")
                    runzt = "tingzhi"
                    cunqusj("jiaoben","tingzhi")
                    files.write("/sdcard/jiaoben.txt", "tingzhi");
                }
            }
            if (runzt == "tingzhi"){
                xzmk()
                var renwu = huoqurenwu()
                xgsrizhi(renwu.length)
                xgsrizhi("记录的任务：" +user)
                var tem = 0
                for(var i =0 ; i < renwu.length; i++){
                    if (renwu[i] == user && tem == 0){
                        if (i < renwu.length-1){
                            user = renwu[i+1]
                            tem = 1
                        }
                    }else{
                        if (renwu[i] == "100" ){
                            xgsrizhi("服务器选择了停止脚本--结束脚本")
                            exit()
                        }
                    }
                }
                if (tem == 0){
                    xgsrizhi("已经做完一轮或者刚开始")
                    user= renwu[0]
                }
                xgsrizhi("执行任务"+ user)
                var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips+"-0-0-0-0"
                xgsrizhi("选择结果："+config_temp)
                files.write("/sdcard/meituconfig.txt", config_temp);
                xgsrizhi("去加载更新脚本")
                gengxin(user)
                sleep(2000)
                killapp("laodi")
                sleep(2000)
                launch("com.xiaolaodi.nn")                   //打开APP
                xgsrizhi("执行成功APK")
                sleep(5000)
                bb = 10086
                runzt = cunqusj("jiaoben","123")
                list.splice(0,1);
                files.write("/sdcard/jiaoben.txt", "1");
                kqwza()
            }
            sleep(10000)
        }catch(error){
            toastLog(error);
            sleep(random(1000,3000))
        }
    }
    xgsrizhi("结束执行TKB的框架")
}

zhu()

//锁定老弟
function sdlaodi(){
    log("锁定老弟")
    var TB = (new Date()).getTime()
    while(1){

        if ((new Date()).getTime() - TB > 5*60*1000){
            xgsrizhi("超时没完成")
            toastLog("请手动锁定laodi")
            sleep(2000)
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                xgsrizhi("看到清理按钮")
                TC = (new Date()).getTime()
                while(1){
                    if((new Date()).getTime() - TC > 20*1000){
                        log("超时没看到laodi")
                        break
                    }
                    swipe(987,797, 91,780, 1000)
                    sleep(3000)
                    if (id("com.android.systemui:id/title").exists()){

                    
                        if (text("laodi").exists()){
                            log("看到老弟")
                            var bb = text("laodi").findOnce().bounds();
                            if (bb.centerX() > 400 && bb.centerX() < 900 && bb.centerY() < 400 && bb.centerY() > 300){
                                log("老弟的位置符合")
                                var w = className("TextView").boundsInside(0, 0, device.width, device.height / 2).findOne()
                            }
                        }
                    }
                }
            }else{
                back()
                sleep(500)
                home()
                sleep(2000)
                launch("com.xiaolaodi.nn")
                sleep(5000)
                recents()
                sleep(3000)
            }
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
}







