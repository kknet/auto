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

function getrenwu(sb){
    while(1){
        var r = http.get("http://47.99.89.89/douyin.com/tp5/public/index/Myapi/getrenwunew/usr/"+yhuser+"/shebeihao/"+sb);
        if( r.statusCode == 200){
            var body =  r.body.json()
            if (body['code'] == 0){
                log("获取到的任务：" + body['data'])
                return (body['data'])
            }
            else{
                xgsrizhi("暂时没有任务")
                sleep(3000)
            }
        }
        else{
            xgsrizhi("访问网络失败")
            sleep(2000)
        }
    }
}

function gengxin(xmm){
    xgsrizhi("获取脚本代码"+xmm)
    var TB = (new Date()).getTime()
    while (1){
        try {
            var r = http.get("http://tankaibin.cn/mubei/meitu2/"+xmm+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                xgsrizhi("html = " +body);
                dowscripte(body)
                break
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

function dowscripte(url){
    xgsrizhi("加载脚本")
    var TB = (new Date()).getTime()
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1.js";
    files.ensureDir(dirpath)
    while (1){
        try {
            let res = http.get(url);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                xgsrizhi("加载完成")
				break
            } else {
                xgsrizhi("网络异常");
                sleep(2000)
            };
        } catch(error) {
            xgsrizhi(error);
            sleep(2000)
        }
    }
    xgsrizhi("加载脚本完成")
}

function killapp(){
    openAppSetting(getPackageName("laodi"));
    sleep(2000)
    var tt = 0
    while (true) {
        tt++;
        if (tt > 7){
            break
        }
        if(text("FORCE STOP").exists() || text("强行停止").exists() ){
            // log("看到停止按钮")
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
            // log("看到停止按钮")
            click("OK")
            click("确定")
            sleep(2000)
            
            break
        }
        sleep(1000)
    } 
    back()
}

function wuZhangAi(){
    var intent = new Intent(); 
    intent.setAction("android.settings.ACCESSIBILITY_SETTINGS");
    app.startActivity(intent);
    sleep(2000)
    var tem = 1
    var RT = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - RT > 40*1000){
                log("时间超时了退出")
                return false
            }
            var aa = cunqusj("jiaoben","qu")
            if (aa != "tingzhi"){
                log("已经不是停止状态")
            }
            if(text("无障碍").exists()){
                click("laodi")
                sleep(2000)
            }
            if(text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists()){
                log("开关界面")
                var a = id("com.android.settings:id/switch_widget").findOnce()
                if(a != null){
                    if (id("com.android.settings:id/switch_widget").findOnce().checked() == true && tem == 2){
                        log("退出")
                        break
                    }
                    else{
                        a.click()                   //原来开着就先关了，原来关着就直接打开退出
                        sleep(2000)
                        click(800, 1920)
                        sleep(1000)
                        tem = 2
                    }
                }
            }
            if(text("确定").exists()){
                log("确定")
                click(800, 1920)
                sleep(1000)
                click("确定")
                sleep(2000)
            }
        }catch(error) {
            log(error);
            sleep(random(3000,5000))
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
    
function aaaaaa(){
    importClass(android.content.Context);
    importClass(android.provider.Settings);
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        log('当前已启用的辅助服务\n', enabledServices);
        var Services = enabledServices + ":com.xiaolaodi.nn/com.stardust.autojs.core.accessibility.AccessibilityService";
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
        toastLog("成功开启AutoJS的辅助服务");
        } catch (error) {
        //授权方法：开启usb调试并使用adb工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
        // adb shell pm grant org.autojs.autojs android.permission.WRITE_SECURE_SETTINGS
        toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限\n\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
        setClip("adb shell pm grant org.autojs.autojs android.permission.WRITE_SECURE_SETTINGS");
    }
    auto.waitFor()
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


if( files.exists("/sdcard/观沧海.mp3") == false){
    dowmp3()
}
media.playMusic("/sdcard/观沧海.mp3",0.1,true);

UI()

cunqusj("jiaoben","tingzhi")
xgsrizhi("开始执行TKB的框架")
var TJH = (new Date()).getTime()
var aa = cunqusj("jiaoben","qu")
var bb = "10086"
files.remove("/sdcard/dyrizhi.txt")
files.write("/sdcard/jiaoben.txt", "tingzhi");
try {
    device.setNotificationVolume(1)
    device.setMusicVolume(1)
} catch(error){
    toastLog(error);
    sleep(random(1000,3000))
}
while(1){
    if (list.length == 0){
        xgsrizhi("去获取任务")
        list =  getrenwu(bianhao)
        xgsrizhi("结束获取任务")
    }
    else{
        // if ((new Date()).getTime() - TJH > 5*60*1000){
        //     aa = cunqusj("jiaoben","qu")
        //     TJH = (new Date()).getTime()
        //     if (aa != bb){
        //         xgsrizhi("aa的值："+ aa + "----" + "bbde值：" + bb)
        //         bb = aa
        //     }else{
        //         bb = 0
        //         cunqusj("jiaoben","tingzhi")
        //     }
        // }
        //runzt = cunqusj("jiaoben","qu")

        runzt = (files.read("/sdcard/jiaoben.txt"));
        log("当前读取的值"+runzt + "bb的值：" + bb)
        if (runzt == "tingzhi"){
            xgsrizhi("去加载脚本")
            //gengxin(list[0])
            xgsrizhi("结束加载脚本执行下一个任务")
            //执行APK
            xmm = list[0]
            gengxin(xmm)                                    //加载脚本
            // killapp()                                       //杀死APP
            sleep(2000)     
            launch("com.xiaolaodi.nn")                   //打开APP
            xgsrizhi("执行成功APK")
            sleep(5000)
            // wuZhangAi()
            bb = 10086
            runzt = cunqusj("jiaoben","123")
            list.splice(0,1);
            files.write("/sdcard/jiaoben.txt", "1");
        }
    }
    sleep(10000)
    //判断执行的脚本有没有停止

}
xgsrizhi("结束执行TKB的框架")