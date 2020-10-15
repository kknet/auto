//包名：com.mubei.nn


//写日志


var temp = 0
var list = []
var runzt = 0     //如果这个状态是0 去执行打APK
var user = "0"   //执行第几个任务
var ips = "47.114.99.72"
var yhuser = ""   // 用户名
var bianhao = ""  //机器编号
var user_id = "1"


function xgsrizhi(g){
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
    // scrz(g)
}

//上传日志
function scrz(ril){
    if (files.exists("/sdcard/scrizi.txt")){
    }else{
        if (files.exists("/sdcard/meituconfig.txt")){
            var xx =  files.read("/sdcard/meituconfig.txt")
            var ee = xx.split("-")
            var de = ee[1]+ "-"+ee[2]+"-0-0-0-0-0"
            files.write("/sdcard/scrizi.txt", de);
        }else{
            return false
        }
    }
    var xinxi =  files.read("/sdcard/scrizi.txt")
    var config_table = xinxi.split("-")
    var user_name = config_table[0]    //服务器用户名
    var yhid = config_table[1]      //手机编号  weixinflag
    // log("上传日志")
    try{
        if (isNaN(yhid)){
            log("不是数字")
            return false
        }
        if (Number(yhid) > 800 || user_id != "9"){
            log("编号太大")
            return false
        }
    }catch (e){
        log("出错"+ e)
        sleep(3000);
        return false
    }
    var TS = (new Date()).getTime()
    var url = "http://120.27.234.130/api.php/potal/meitu/upjaobenlog?user_name="+user_name+"&user_id=1&der_id="+yhid+"&run_id=1&fun_id=1&app_id=3&app_ac_id=1&type=1&message="+ril+"&remarks=1&status_info=99"
    log("上传日志" + user_name + "-" + yhid)
	while(true){
		try{
            if ((new Date()).getTime() - TS > 10*1000){
                log("超时不上传")
                return false
            }
			res = http.get(url); 
            if(res.statusCode == 200){
                // var ss = res.body.json();
                // if (ss["msg"] == "ok"){
                //    log("上传日志成功")
                //    return true
                // }
                return true
            }else{
                log("没网")
            }
            sleep(2000)
        }catch (e){
            log("出错"+ e)
            sleep(3000);
        }
	}
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

//获取任务
function huoqurenwu(sbip, yhbh){
    xgsrizhi("获取任务")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    while (1){ 
        try {
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/getrenwu?user="+yhname+"&shebeihao="+yhbh
            var url = "http://"+sbip+"/api.php/potal/meitu/getrun?user_id="+user_id+"&der_id="+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                // var body =  r.body.string()
                // xgsrizhi(r.body.string())
                // var r_obj = JSON.parse(body);
                var r_obj = r.body.json();
                // log(r_obj)
                log(typeof(r_obj))
                if (r_obj["msg"] == "ok"){
                    xgsrizhi("获取到的：" + r_obj)
                    var renwu = r_obj["data"]["app"]            //任务编号
                    if (renwu == 99 || renwu == "99"){
                        log("获取到了等待")
                        return [renwu, "99", "99", "99"]
                    }
                    var run_id = r_obj["data"]["run_id"]        //任务id
                    var run_time = r_obj["data"]["run_time"]    //时间
                    var fun = r_obj["data"]["fun"]              //子任务
                    var app_id = r_obj["data"]["app_id"]        //应用id
                    var zo = fun+"-"+app_id
                    xgsrizhi(renwu)
                    return [renwu, run_id, run_time, zo]
                }else{
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 5000))
    }
}

function gengxin(user){
    xgsrizhi("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            // var r = http.get("http://120.79.199.143/mubei/jinli/"+user+".txt");
            var r = http.get("http://mtjl.oss-cn-shanghai.aliyuncs.com/jinligx/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                xgsrizhi("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb && files.exists("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js")){
                    xgsrizhi("已经是最新版本22")
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
            sleep(random(2000, 5000))
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
            sleep(random(2000, 5000))
        } catch(error){
            xgsrizhi(error);
            sleep(2000)
        }
    }
    xgsrizhi("加载脚本完成")
}

function gengxinjl(user){
    toastLog("检测更新脚本金立")
    xgsrizhi("检测更新脚本金立")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    var dd = 0
    var ttr = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - ttr > 5*60*1000){
                toastLog("超时不更新")
                xgsrizhi("超时不更新")
                return false
            }
            // var r = http.get("http://120.79.199.143/mubei/jinli/"+user+".txt");
            var r = http.get("http://120.79.199.143/mubei/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                toastLog("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb && files.exists("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".js")){
                    toastLog("已经是最新版本22")
                    return dd
                }
                else{
                    toastLog("版本更新")
                    sleep(3000)
                    // files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    var dsx = dowscriptejl(body, user)
                    if (dsx == true){
                        dd = 1
                    }else{
                        toastLog("不更新了")
                        xgsrizhi("不更新了")
                        return false
                    }
                    if (files.exists("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".js")){
                        toastLog("执行更新文件")
                        xgsrizhi("执行更新文件")
                        // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".js");
                        var jiaoben = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".js") //读取设备信息
                        // eval(jiaoben)
                        execution = engines.execScript("Hello",  jiaoben);
                        return dd
                    }else{
                        toastLog("没有更新文件")
                        xgsrizhi("没有更新文件")
                        return 0
                    }
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
            sleep(random(2000, 5000))
        } catch(error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

function dowscriptejl(url, user){
    toastLog("加载脚本金立")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".js";
    var ttr = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - ttr > 5*60*1000){
                toastLog("超时不更新")
                xgsrizhi("超时不更新")
                return false
            }
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // toastLog("停止当前运行的脚本")
                // exit()
                sleep(2000)
                files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", url);
                return true
            } else {
                toastLog("网络异常");
                sleep(2000)
            };
            sleep(random(2000, 5000))
        } catch(error){
            toastLog(error);
            sleep(2000)
        }
    }
    toastLog("加载脚本完成")
}


//下载模块
function xzmk(){
    xgsrizhi("检测更新模块")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt");
    while (1){
        try {
            // var r = http.get("http://120.79.199.143/mubei/jinli/mokuai.txt");
            var r = http.get("http://mtjl.oss-cn-shanghai.aliyuncs.com/jinligx/mokuai.txt");
            if( r.statusCode == 200){
                var url =  r.body.string()
                xgsrizhi("html = " +url);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/mokuai.txt")
                if (url== bb && files.exists("/sdcard/tkb2.js")){
                    xgsrizhi("已经是最新版本11")
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
                        sleep(random(2000, 5000))
                    }
                    xgsrizhi("加载脚本完成")
                }
                return true
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
            sleep(random(2000, 5000))
        } catch(error) {
            xgsrizhi(error);
            sleep(2000)
        }
    }
}

function UI(){
    var aa = 100
    files.createWithDirs("/sdcard/dyrizhi.txt");
    // files.remove("/sdcard/dyrizhi.txt")       //先删除日志
    // files.createWithDirs("/sdcard/dyrizhi.txt");

    if(files.exists("/sdcard/meituconfig.txt")== false) {
        xgsrizhi("新建配置文本")
        files.write("/sdcard/meituconfig.txt", "0-1-1-1");
        aa = 100
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
    var rss = yhuser+"-"+bianhao+"-0-0-0-0"
    files.write("/sdcard/scrizi.txt", rss);
}

//上传手机号码
function upsjhm(sbip, user_id, yhbh, phone){
    log("上传手机号码"+phone)
    var Tb = (new Date()).getTime()
    log(sbip + "----" + user_id + "----" + yhbh)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 60*1000){
                log("超时更新完成")
                break
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/qidongjaoben?user="+yhname+"&der_id="+yhbh
            var url = "http://"+sbip+"/api.php/potal/meitu/upphone?user_id="+user_id+"&der_id="+yhbh+"&remarks=&phone="+phone
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0){
                    toastLog("上传手机号码成功")
                    return true
                }
            }else{
                log("没网")
                sleep(3000)
            }
        }catch(error){
            log(error);
            sleep(random(3000,8000))
        }
        toastLog("上传手机号中...")
        sleep(random(100, 10000))
    }
}

function HMUI(){
    var zh = "1008611"
    var tem = 0
    var bb = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - bb > 5*60*1000){
            log("时间到了退出")
            zh = "10086"
            return zh
        }
        try {
            if (files.exists("/sdcard/shoujihaoma.txt")){
                zh = files.read("/sdcard/shoujihaoma.txt")
                var reg = '[0-9]{1,12}';
                var table = zh.match(reg)
                zh = table[0]
                if (zh.length == 11){
                    toastLog("本机号码：" + zh)
                    files.write("/sdcard/shoujihaoma.txt", zh);
                    if (tem == 1){
                        upsjhm(ips, user_id, bianhao, zh)
                    }
                    if (zh == "11111111111" && tem == 0){
                        toastLog("账号异常请重新输入手机号码")
                    }else{
                        return zh
                    }
                }
            }
        }catch(error){
            log(error);
            sleep(random(500,1000))
            zh = 10086
        }
        var aa = 100
        var threadd = threads.start(function(){
            // user = rawInput("请输入项目名称", config_dy);
            if (tem > 0 ){
                zh = rawInput("请输入正确的手机号码", zh);
            }else{
                zh = rawInput("请输入本机号码", zh);
            }
        });
        //等待该线程完成
        threadd.join(aa*1000);
        sleep(500)
        click("确定")
        sleep(500)
        toastLog("本机号码是：" + zh)
        files.write("/sdcard/shoujihaoma.txt", zh);
        sleep(2000)
        tem = 1
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
    }
}

//下载mp3
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
    xgsrizhi("开启老弟无障碍")
    click(500, 570)
    sleep(2000)
    var cc = (new Date()).getTime()
    var bb = (new Date()).getTime()
    var ssd = (new Date()).getTime()
    var tem = 1
    var ss = 0 
    var sv = 0
    while(1){
        try {
            bidian()
            if ((new Date()).getTime() - cc > 70*1000){
                log("超时退出")
                break
            }
            if(text("无障碍").exists() && text("laodi").exists()  && tem != 2){
                log("点击老弟")
                click("laodi")
                sleep(2000)
            }
            if (text("辅助功能").exists() && tem != 2){
                if ((new Date()).getTime() - bb > 15*1000){
                    log("滑动一下")
                    sleep(1000)
                    swipe(500, 1800, 500, 500, 1000)
                    sleep(1000)
                    bb = (new Date()).getTime()
                }
            }
            if(text("辅助功能").exists() && text("laodi").exists() && tem != 2){
                xgsrizhi("辅助功能")
                click("laodi")
                sleep(2000)
            }
            if(text("应用程序错误").exists() && text("关闭").exists()){
                xgsrizhi("应用程序错误")
                click("关闭")
                sleep(1000)
            }
            if(text("无障碍服务 关闭").exists()){
                xgsrizhi("无障碍服务")
                click("无障碍服务 关闭")
                sleep(5000)
                ss = 1 
            }
            if(text("无障碍服务 关闭").exists()){
                xgsrizhi("无障碍服务2")
                try{
                    var ss = text("无障碍服务 关闭").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(4000)
                }catch(error) {
                    sleep(1001)
                    log(error);
                    click(500, 340)
                    sleep(1001)
                }
                ss = 1 
            }
            if (textContains("开启").exists() && textContains("自动装").exists() && id("com.android.settings:id/switch_widget").exists() || textContains("关闭").exists() && textContains("自动装").exists() && id("com.android.settings:id/switch_text").exists() ){
                xgsrizhi("自动装")
                back()
                sleep(3000)
            }
            if (textContains("开启").exists() && textContains("支付宝").exists() && id("com.android.settings:id/switch_widget").exists() || textContains("关闭").exists() && textContains("支付宝").exists() && id("com.android.settings:id/switch_text").exists()){
                xgsrizhi("支付宝")
                back()
                sleep(3000)
            }
            if (textContains("关闭").exists() && text("开始运行").exists()){
                xgsrizhi("关闭xx")
                try{
                    var ss = textContains("关闭").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }catch(error) {
                    sleep(1001)
                    log(error);
                    sleep(1001)
                }
                ss = 1 
            }
            if(text("开始运行").exists()){
                xgsrizhi("开始运行")
                sleep(1000)
                click("开始运行")
                sleep(3000)
                if (tem == 2){
                    sv = 1
                }
            }else{
                if (tem == 2 && sv == 0 && (new Date()).getTime() - ssd >15*1000){
                    log("打开了无障碍没点开始运行")
                    launch("com.xiaolaodi.nn")
                    sleep(3000)
                    ssd = (new Date()).getTime()
                }
            }
            if(text("不再显示").exists() && text("立即开始").exists()){
                log("不再显示")
                click(173,1020)
                sleep(500)
                click("立即开始")
                sleep(500)
                click(853,1158)
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
                click(800, 1850)
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
                            if (ss == 1){
                                launch("com.xiaolaodi.nn")
                                sleep(5000)
                            }else{
                                break
                            }
                        }else{
                            log("点击开启")
                            a.click()                   //原来开着就先关了，原来关着就直接打开退出
                            sleep(2000)
                            click(800, 1850)
                            if (ss == 1){
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                sleep(2000)
                                launch("com.xiaolaodi.nn")
                                sleep(7000)
                                if(text("开始运行").exists()){
                                    xgsrizhi("开始运行")
                                    sleep(1000)
                                    click("开始运行")
                                    sleep(2000)
                                }
                            }else{
                                sleep(7000)
                            }
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
                            var dds = (new Date()).getTime()
                            while(1){
                                if ((new Date()).getTime() - dds > 8*1000){
                                    log("时间到了")
                                    break
                                }else{
                                    bidian()
                                }
                            }
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
                click(800, 1850)
                sleep(1000)
                click("确定")
                sleep(2000)
            }

            if(text("夜间升级").exists()){
                log("夜间升级")
                click(300, 1850)
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

//关闭应用
function killapp(app){
    try {
        xgsrizhi("杀掉laodi");
        openAppSetting(getPackageName(app));
        xgsrizhi("杀掉laodix");
        sleep(3000)
    }catch (error) {
        sleep(1001)
        xgsrizhi(error);
    }
    var tt = 0
    while (true) {
        try {
            tt++;
            if (tt > 7){
                break
            }
            if(text("FORCE STOP").exists() || text("强行停止").exists() ){
                var w = text("强行停止").findOnce().enabled()
                if (w == false){
                    toastLog("已经强行停止")
                    break
                }else{
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
            try {
                xgsrizhi("杀掉1");
                openAppSetting(getPackageName(app));
                xgsrizhi("杀掉2");
                sleep(random(5000, 10000))
            }catch (error) {
                sleep(1001)
                xgsrizhi(error);
            }
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
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
		if ((new Date()).getTime() - TB > 30*1000){
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
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
                sleep(2000)
                return true
            }else{
                if (id("com.android.systemui:id/progress_circle_view").exists()){
                    xgsrizhi("点击清理2")
                    //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                    var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                    if (aa != null){
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                    }
                    sleep(2000)
                    home()
                    sleep(2000)
                    return true
                }else{
                    if (id("com.huawei.android.launcher:id/clear_all_recents_image_button").exists()){
                        xgsrizhi("点击清理3")
                        //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                        var aa = id("com.huawei.android.launcher:id/clear_all_recents_image_button").findOnce().bounds();
                        if (aa != null){
                            xgsrizhi(aa.centerX())
                            xgsrizhi(aa.centerY())
                            click(aa.centerX(), aa.centerY())
                        }
                        sleep(2000)
                        home()
                        sleep(2000)
                        return true
                    }else{
                        back()
                        sleep(500)
                        home()
                        sleep(2000)
                        recents()
                        sleep(3000)
                    }
                }
            }
            
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
	}
}

//下载应用
function m(){
    try {
        while(1){
            //文件更新地址
            // var url = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
            // var url = "https://abcxgs.oss-cn-hangzhou.aliyuncs.com/jinli/apk/laodi_v2.0.0.apk"
            var url = "http://mtjl.oss-cn-shanghai.aliyuncs.com/qita/yingyong/laodi_v1.0.2.apk"
            // threads.start(function() {

                //发送get获取文件
            var data = http.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
                }
            }).body.bytes();
            files.writeBytes("/sdcard/xgs.apk", data);
            toast("更新成功,文件保存在/sdcard/xgs.apk");
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
            return true
        }
    }catch (error) {
        sleep(1001)
        xgsrizhi(error);
    }
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
            TT = (new Date()).getTime()
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

//启动时间
function qdtime(sbip){
    xgsrizhi("启动时间")
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    var sp = 0
    xgsrizhi(sbip)
    while (1){
        try {
            // var url = http://47.114.99.72/api.php/potal/meitu/qidongjaoben2?jiqima=ccccz21&remarks=ccccz21&ip=192.168.0.1
            var url = "http://"+sbip+"/api.php/potal/meitu/qidongjaoben2?jiqima="+jiqima+"&remarks="+ yhuser+bianhao
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                if (r_obj["msg"] == "请输入备注"){
                    UI()
                    sp = 1
                }else{
                    if (r_obj["msg"] == "等待初始化"){
                        toastLog("请到服务器分配该机器码：" + jiqima)
                        sleep(6000)
                    }else{
                        if (r_obj["msg"] == "ok"){
                            bianhao = r_obj["data"]["der_id"]
                            user_id = r_obj["data"]["user_id"]
                            xgsrizhi("user_id为" + user_id + "该机器的编号为"+ bianhao)
                            toastLog("该机器的用户编号："+user_id+"手机编号:"+ bianhao)
                            sleep(2000)
                            toastLog("该机器的用户编号："+user_id+"手机编号:"+ bianhao)
                            var de = user_id+ "-"+bianhao+"-0-0-0-0-0"
                            files.write("/sdcard/scrizix.txt", de);
                            if (sp == 1){
                                xgsrizhi("弹一会机器码")
                                Tb = (new Date()).getTime()
                                while(1){
                                    if ((new Date()).getTime() - Tb > 90*1000){
                                        xgsrizhi("时间够了退出")
                                        break
                                    }
                                    toastLog("该机器的用户编号："+user_id+"手机编号:"+ bianhao)
                                    sleep(1000)
                                }
                            }
                            return user_id
                        }
                    }
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        }catch(error){
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("上传启动时间中...")
        sleep(random(100, 10000))
    }
}

//激活心跳
function xjihuoxt(sbip, yhbh){
    xgsrizhi("激活心跳")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhbh)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 15*1000){
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/jihuo?user="+yhname+"&shebeihao="+yhbh
            var url = "http://"+sbip+"/api.php/potal/meitu/jihuo?user_id="+user_id+"&der_id="+yhbh
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

//必点的提示
function bidian(){
    if(text("不再显示").exists() && text("立即开始").exists()){
        log("不再显示")
        click(173,1020)
        sleep(500)
        click("立即开始")
        sleep(500)
        click(853,1158)
        sleep(2000)
    }
    if(text("应用程序错误").exists() && text("关闭").exists()){
        xgsrizhi("应用程序错误")
        click("关闭")
        sleep(1000)
    }
    if(text("等待").exists() && text("关闭应用").exists()){
        xgsrizhi("关闭应用22")
        click("关闭应用")
        sleep(2000)
    }
    if(text("始终同意").exists() && text("拒绝").exists()){
        xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if(text("删除安装包").exists() && text("取消").exists()){
        xgsrizhi("删除安装包")
        click("取消")
        sleep(2000)
    }
    if(text("应用悬浮").exists() && desc("向上导航").exists()){
        xgsrizhi("应用悬浮")
        click(950, 400)
        sleep(500)
        back()
        sleep(2000)
    }
    if(text("可修改系统设置").exists() && desc("向上导航").exists()){
        xgsrizhi("可修改系统设置")
        click(950, 450)
        sleep(500)
        back()
        sleep(2000)
    }
    if(text("允许出现在其他应用上").exists() && desc("向上导航").exists() || text("可出现在其他应用上的应用").exists() && desc("向上导航").exists()){
        xgsrizhi("允许出现在其他应用上")
        click(950, 450)
        sleep(500)
        back()
        sleep(2000)
    }
    if(text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()){
        log("登录x1")
        try{
            if (text("登录").exists()){
                var ss = text("登录").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        }catch(error) {
            sleep(1001)
            log(error);
        }
        click("登录")
        sleep(2000)
    }
}

if( files.exists("/sdcard/观沧海.mp3") == false){
    dowmp3()
}
media.playMusic("/sdcard/观沧海.mp3",0.1,true);


//查看应用版本
function getVerName(name){
    try{
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name){
                return pkgs[i].versionName;
            }
        }
        return false
    }catch (e){
        log("出错"+ e)			
        sleep(3000);
        return false
    }
}

function xiezai(baoming){
    xgsrizhi("卸载：" + baoming)
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - TSD > 10*60*1000){
            xgsrizhi("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if(text("取消").exists() && text("卸载").exists()){
            xgsrizhi("卸载")
            click("卸载")
            sleep(5000)
        }
        if(text("取消").exists() && text("卸载").exists()){
            xgsrizhi("卸载2")
            try{
                var bb = text("卸载").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY()); 
                sleep(5000)
            }catch(error) {
                sleep(1001)
                log(error);
            }
        }
        if(text("确定").exists() && text("未找到应用").exists()){
            xgsrizhi("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null){
            xgsrizhi("已经没有该应用了")
            return true
        }
    }
}
  


function zhu(){
    // UI()
    try{
        user_id = qdtime(ips)
        HMUI()
        device.setNotificationVolume(1)
        device.setMusicVolume(1)
        sleep(3000)
    }catch(error){
        toastLog(error);
        sleep(random(1000,3000))
    }
    var TR = (new Date()).getTime()
    files.write("/sdcard/mbtztime.txt", TR)
    while(1){
        try{
            var waddj = getPackageName("laodi")
            var ldbb = getVerName("laodi")
            if (waddj == null || ldbb != "1.0.2"){
                if (waddj != null){
                    xiezai(waddj)
                }
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
    var bb = "10086"
    // files.remove("/sdcard/dyrizhi.txt")
    files.write("/sdcard/jiaoben.txt", "tingzhi");
    var cishu = 0
    var xzrw = 0
    var TPx = (new Date()).getTime()
    var gxrq = riqis(1)
    var ldcs = 0   //判断子脚本的次数
    while(1){
        try{
            bidian()
            // if ((new Date()).getTime() - TPx> 60*60*1000){
            //     var xzriqi = riqis(1)
            //     if (xzriqi != gxrq){
            //         gxrq = xzriqi
            //         var sso = gengxinjl("jinli")
            //         if (sso == 1){
            //             xgsrizhi("已经更新了")
            //             return true
            //         }
            //     }
            //     TPx = (new Date()).getTime()
            // }
            runzt = (files.read("/sdcard/jiaoben.txt"));
            log("当前读取的值"+runzt + "bb的值：" + bb)
            xgsrizhi("当前读取的值"+runzt)
            if ((new Date()).getTime() - TJH > 3*60*1000){
                TJH = (new Date()).getTime()
                if (runzt != bb && runzt != "tingzhi"){
                    xgsrizhi("runzt的值："+ runzt + "----" + "bbde值：" + bb)
                    bb = runzt
                    ldcs = 0 
                }else{
                    xgsrizhi("长时间值没变")
                    runzt = "tingzhi"
                    cunqusj("jiaoben","tingzhi")
                    files.write("/sdcard/jiaoben.txt", "tingzhi");
                    ldcs = ldcs + 1
                }
            }
            if((new Date()).getTime() - TR > 20*1000){
                xgsrizhi("写入时间")
                TR = (new Date()).getTime()
                files.write("/sdcard/mbtztime.txt", TR)
            }
            if (runzt == "tingzhi"){
                xzmk()
                xjihuoxt(ips, bianhao)
                var renwu = huoqurenwu(ips, bianhao)
                xgsrizhi("获取到的任务" +renwu)
                xgsrizhi("执行任务"+ renwu[0])
                if (renwu[0] == xzrw){
                    cishu = cishu + 1
                    if (cishu > 2){
                        xgsrizhi("执行多次相同的任务")
                        xzrw = "99"
                        cishu = 0
                    }
                }else{
                    xzrw = renwu[0]
                    cishu = 0
                }
                var config_temp = xzrw +"-"+yhuser+"-"+bianhao+"-"+ips+"-"+user_id+"-"+renwu[1]+"-"+renwu[2]+"-"+renwu[3]+"-0-0-0-0"
                xgsrizhi("选择结果："+config_temp)
                files.write("/sdcard/meituconfig.txt", config_temp);
                xgsrizhi("去加载更新脚本")
                gengxin(xzrw)
                sleep(2000)
                var _mubeixx = threads.start(function(){
                    bidian()
                });
                if (ldcs > 1){
                    killapp("laodi")
                    ldcs = 0
                }
                sleep(2000)
                launch("com.xiaolaodi.nn")                   //打开APP
                xgsrizhi("执行成功APK")
                sleep(5000)
                // bb = 10086
                runzt = cunqusj("jiaoben","123")
                // list.splice(0,1);
                files.write("/sdcard/jiaoben.txt", "1");
                kqwza()
                _mubeixx.interrupt()
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



