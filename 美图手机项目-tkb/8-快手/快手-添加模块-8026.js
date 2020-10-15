log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.smile.gifmaker"   //该项目包名
var xmxh = "8"               //项目序号



//********************************************************下载播放mp3***************************************************************

//*******************************************************快手养号 *****************************************************************

function zonghe(){
    if(text("用户隐私政策").exists()){
        TKB.xgsrizhi("用户隐私政策")
        click(600, 1400)
        sleep(1000) 
    }
    if(text("同意并继续").exists()){
        TKB.xgsrizhi("同意并继续")
        click("同意并继续")
        sleep(1000)
    }
    if(text("取消").exists() && text("去开启").exists()){
        TKB.xgsrizhi("去开启")
        click("取消")
        sleep(1000)
    }
    if(text("刷新").exists()){
        TKB.xgsrizhi("刷新")
        click("刷新")
        sleep(1000)
    }
    if(text("我知道了").exists()){
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(1000)
    }
    if(text("立即升级").exists() && id("com.smile.gifmaker:id/iv_close").exists()){
        TKB.xgsrizhi("立即升级")
        try{
            var ss = id("com.smile.gifmaker:id/iv_close").findOnce().bounds();
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if(text("立即赠送").exists()){
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(2000)
    }
}

//快手养号
function ksyh(){
    TKB.xgsrizhi("快手养号")
    launch("com.smile.gifmaker")
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TSD = (new Date()).getTime()
    var zbt = (new Date()).getTime()   //直播的时间
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.smile.gifmaker")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                TKB.xgsrizhi("刷新首页")
                click(500, 130)
                sleep(100)
                click(510, 150)
                sleep(2000)
                swipe(557,400, 533,1630, random(400, 1000))
                sleep(4000)
                tem = 1
            }else{
                TKB.xgsrizhi("进入观看视频")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(533,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
                ll = ll  + 1 
                if (ll > 15){
                    TKB.xgsrizhi("浏览次数够了刷新首页")
                    tem = 0
                    ll = 0
                }
            }
        }
        if(id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists() && id("com.smile.gifmaker:id/comment_record_button").exists() || id("com.smile.gifmaker:id/live_chat_apply").exists() && id("com.smile.gifmaker:id/live_clos").exists() || desc("分享成功").exists() && id("com.smile.gifmaker:id/live_clos").exists()){
            TKB.xgsrizhi("直播中")
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
            TKB.xgsrizhi("关注并退出")
            click("退出")
            sleep(1000) 
        }
        if(text("直播已结束").exists() && text("观看人数").exists()){
            TKB.xgsrizhi("直播已结束")
            back()
            sleep(1000) 
        }
        if(desc("返回").exists() && desc("喜欢").exists() || desc("举报").exists() && id("com.smile.gifmaker:id/player_message_layout").exists()){
            TKB.xgsrizhi("观看作品界面")
            var TD = (new Date()).getTime()
            var cd = random(20, 40)
            while(1){
                if ((new Date()).getTime() - TD > cd*1000){
                    TKB.xgsrizhi("观看完成")
                    break
                }else{
                    toastLog("观看作品中")
                    sleep(3000)
                }
            }
            var bb = random(1, 8)
            if (cd == 21 && bb >6){
                TKB.xgsrizhi("作品赞")
                click(200, 150)
                sleep(1000)    //com.smile.gifmaker:id/like_layout
            }
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            if (cd == 22 && bb >6 && id("com.smile.gifmaker:id/like_layout").exists() ){
                TKB.xgsrizhi("评论赞")
                try{
                    var ss = id("com.miui.home:id/label").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi("异常了")
                }
            }
            back()
            sleep(1000)
        }

        zonghe()
    }
}

//快手登录
function ksdl(){
    log("快手登录")
    launch("com.smile.gifmaker")
    sleep(2000)
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var TSD = (new Date()).getTime()
    var zh = "18619653240"   //手机号码
    var yzm = "1234"
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.smile.gifmaker")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没注册成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("登录成功")
            return true
        }
        if(text("微信号/QQ/邮箱登录").exists()){
            toastLog("未登录微信")
            back()
            sleep(2000)
            TKB.qinglihh("com.smile.gifmaker")
            return false
        }
        if(desc("快手").exists() && text("登录").exists()){
            TKB.xgsrizhi("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(desc("快手").exists() && text("登录").exists()){
            TKB.xgsrizhi("未登录首页")
            click(60, 150)
            sleep(2000)
        }
        if(text("其他登录方式").exists() && text("微信登录").exists() || text("微信登录").exists() && text("手机号登录").exists()  || text("其他登录方式").exists() && text("手机号登录").exists()){
            TKB.xgsrizhi("手机号登录")
            kszc()
            launch("com.smile.gifmaker")
            // try{
            //     var ss = text("微信登录").findOnce().bounds();
            //     TKB.xgsrizhi(ss)
            //     click(ss.centerX(), ss.centerY());
            //     sleep(1000)
            // }catch(error) {
            //     sleep(1001)
            //     TKB.xgsrizhi(error);
            // }
            // click("微信登录")
            // sleep(2000)
        }
        if(text("关闭").exists() && text("确认登录").exists()){
            TKB.xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("绑定手机号").exists() && text("跳过").exists()){
            TKB.xgsrizhi("绑定手机号")
            click("跳过")
            sleep(5000)
        }
        if(text("跳过").exists()){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(5000)
        }


        zonghe()
    }
}

//快手注册
function kszc(){
    log("快手注册")
    launch("com.smile.gifmaker") //启动
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var TSD = (new Date()).getTime()
    var tem = 0   //  判断去获取号码
    var hhk = 0
    var bb = 0    //
    var token = ""
    var haoma = ""
    var yzm = "1234"
    var cs = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            TKB.qinglihh("com.smile.gifmaker")
            return false
        }
        if (tem == 0 && bb== 1 ){
            log("去获取号码")
            // haoma = TKB.getfwq(sbip, yhname , yhbh)
            token = TKB.dengluxhpt("a123", "123")
            if (token == false){
                log("获取不到token")
                return false
            }
            // if (haoma == false){
                if (token != false){
                    haoma = TKB.getxhhaoma(14, token)
                    if(haoma == false){
                        log("获取不到号码")
                        return false
                    }
                }else{
                    log("获取不到token")
                    return false
                }
            // }
            tem = 1
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.smile.gifmaker")
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("登录").exists() && id("com.smile.gifmaker:id/player_cover").exists()){
            log("首页点登录")
            click("登录")
            sleep(2000)
        }else{
            if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
                toastLog("登录成功")
                // TKB.upfwqhm(sbip, yhname , yhbh, haoma)
                TKB.laheixhpt(14, haoma, token)
                return true
            }
        }
        if(text("微信登录").exists() && text("其他登录方式").exists() || text("手机号登录").exists() && text("其他登录方式").exists()){
            log("其他登录方式")
            click("其他登录方式")
            sleep(1000)
        }
        if(text("帮助").exists() && text("手机号登录").exists() || id("com.smile.gifmaker:id/login_next_layout").exists() && id("com.smile.gifmaker:id/protocol_checkbox").exists()){
            log("输入手机号码")
            if (bb == 0){
                log("先去获取号码")
                bb= 1
            }else{
                try {
                    if(id("com.smile.gifmaker:id/protocol_checkbox").exists()){
                        log("阅读协议")
                        var css = id("com.smile.gifmaker:id/protocol_checkbox").findOnce().bounds()
                        click(css.centerX(), css.centerY());
                        sleep(2000)
                    }
                } catch(error) {
                    log(error);
                    sleep(1000)
                }
                setText(haoma)
                click(500, 750)
                sleep(3000)
            }
        }
        if(text("输入密码").exists() && id("com.smile.gifmaker:id/login_next_layout").exists()){
            log("点击忘记密码")
            click(850, 620)
            sleep(3000)
        }
        if(id("com.smile.gifmaker:id/user_avatar").exists() && text("重置密码").exists()){
            log("输入密码界面")
            setText("qw123456789")
            sleep(1000)
            click(500, 1100)
            sleep(3000)
        }
        if(text("手机重置").exists() && text("重置密码").exists()){
            log("输入验证码界面")
            if(text("获取验证码").exists()){
                click("获取验证码")
                sleep(3000)
            }
            if(text("再次获取").exists()){
                click("再次获取")
                sleep(3000)
            }
            yzm = TKB.getxhyzm(14, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText([1], yzm)
                sleep(1000)
                click(500, 900)
                sleep(5000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    TKB.laheixhpt(14, haoma, token)
                    log("四次了都没获取到验证码退出")
                    tem = 0
                    cs = 0
                    back()
                    sleep(1000)
                    TKB.qinglihh("com.smile.gifmaker")
                    sleep(3000)
                    launch("com.smile.gifmaker")
                    sleep(2000)
                    return false
                }
            }
        }
        if(text("验证码登录").exists() && text("确定").exists()  || text("输入验证码").exists() && text("确定").exists()  ||  id("com.smile.gifmaker:id/signup_captcha_tv").exists() && text("确定").exists() ){
            log("输入验证码界面")
            if(text("获取验证码").exists()){
                click("获取验证码")
                sleep(3000)
            }
            yzm = TKB.getxhyzm(14, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText(yzm)
                sleep(1000)
                click(500, 820)
                sleep(5000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    TKB.laheixhpt(14, haoma, token)
                    log("四次了都没获取到验证码重新拿号")
                    tem = 0
                    cs = 0
                    back()
                    sleep(1000)
                    TKB.qinglihh("com.smile.gifmaker")
                    sleep(3000)
                    launch("com.smile.gifmaker")
                    sleep(2000)
                    return false

                }
            }
        }
        if(desc("按住左边按钮拖动完成上方拼图").exists() || desc("请完成下列验证后继续").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(250,1300,600,1300, 1200);
                sleep(2000)
                hhk = 1
            }else{
                var ssrf = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - ssrf > 5*60*1000){
                        if(desc("按住左边按钮拖动完成上方拼图").exists() || desc("请完成下列验证后继续").exists()){
                            log("还在滑块界面")
                            back()
                            return false
                        }
                        break
                    }
                    if(desc("按住左边按钮拖动完成上方拼图").exists() || desc("请完成下列验证后继续").exists()){
                        log("还在滑块界面2")
                        toastLog("请手动滑滑快。。。")
                    }else{
                        log("不在滑块界面了")
                        break
                    }
                    sleep(10000)
                }
            }
            // TKB.laheixhpt(14, haoma, token)
            // return false
        }
        if(text("跳过").exists()){
            log("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("一键登录").exists() && text("其他方式登录").exists()){
            log("其他方式登录")
            click("其他方式登录")
            sleep(1000)
        }
        if(text("妥妥好评").exists()){
            log("妥妥好评")
            back()
            sleep(1000)
        }

        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************


function gengxin(user){
    TKB.xgsrizhi("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                TKB.xgsrizhi("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb){
                    TKB.xgsrizhi("已经是最新版本")
                }
                else{
                    TKB.xgsrizhi("版本更新")
                    sleep(3000)
                    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    dowscripte(body, user)
                }
                return body
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(2000)
        }
    }
}

function dowscripte(url, user){
    TKB.xgsrizhi("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // TKB.xgsrizhi("停止当前运行的脚本")
                // exit()
                sleep(2000)
                break
            } else {
                TKB.xgsrizhi("网络异常");
                sleep(2000)
            };
        } catch(error){
            TKB.xgsrizhi(error);
            sleep(2000)
        }
    }
    TKB.xgsrizhi("加载脚本完成")
}


//获取任务
function huoqurenwu(aa){
    TKB.xgsrizhi("获取任务")        // 1、抖音  2、qq  3、乐游  4、微信  5、微视  6、微博  7、火山  8、快手  9、陌陌
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
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi(r_obj)
                var renwu = r_obj["data"]
                TKB.xgsrizhi(renwu)
                return renwu
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}


function bofangyy(){
    _THREADSS = threads.start(function (){
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 100*1000
        var TJH = (new Date()).getTime()
        // device.setNotificationVolume(0)
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 5*55*1000){
                    log("激活设备")
                    TKB.jihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwu = huoqurenwu("xc")
                    if (renwu != false){
                        sstt = 0
                        // var renwu_table = renwu.split("-")
                        for(var i =0 ; i < renwu.length; i++){
                            if (renwu[i] == xmxh ){
                                TKB.xgsrizhi("继续快手任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh("com.smile.gifmaker")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有快手任务")
                            TKB.qinglihh("com.smile.gifmaker")
                            sleep(2000)
                            // meitxx()
                            TKB.xgsrizhi("执行完存停止数据2")
                            TKB.cunqusj("jiaoben","tingzhi")
                            java.lang.System.exit(0);
                            _THREADSSxx.interrupt()
                            _THREADSS.interrupt()
                            // exit()
                        }
                    }
                    if( files.exists("/sdcard/观沧海.mp3") == false){
                        TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
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
    TKB.xgsrizhi("执行美图项目")
    // UI()
    var config_str =  files.read("/sdcard/meituconfig.txt")
    var config_table = config_str.split("-")
    var user =  config_table[0]
    var yhuser =  config_table[1]
    var bianhao =  config_table[2]
    var ips = config_table[3]
    var renwu = huoqurenwu()
    TKB.xgsrizhi(renwu.length)
    TKB.xgsrizhi("记录的任务：" +user)
    for(var i =0 ; i < renwu.length; i++){
        if (renwu[i] == user && tem == 0){
            if (i < renwu.length-1){
                user = renwu[i+1]
                tem = 1
            }
        }
    }
    if (tem == 0){
        TKB.xgsrizhi("已经做完一轮或者刚开始")
        user= renwu[0]
    }
    TKB.xgsrizhi("执行任务"+ user)
    var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips
    TKB.xgsrizhi("选择结果："+config_temp)
    files.write("/sdcard/meituconfig.txt", config_temp);
    var gg = gengxin(user)
    engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js");
    sleep(1000)
    exit()
    // var bst = (new Date()).getTime()
    // while(1){
    //     try {
    //         var gs = engines.all().length
    //         TKB.xgsrizhi("当前运行脚本个数：" + gs)   
    //         sleep(5000)
    //         if ((new Date()).getTime() -bst > 5*1000){
    //             if (gs > 1){
    //                 TKB.xgsrizhi("已经运行了两个脚本-退出")
    //                 files.write("/sdcard/meituconfig.txt", config_temp);
    //                 var dd = engines.myEngine()
    //                 dd.forceStop()
    //                 sleep(1000)
    //                 // exit()
    //             }else{
    //                 TKB.xgsrizhi("重新更新运行")
    //                 meitxx()
    //             }
    //         }
    //     } catch(error) {
    //         TKB.xgsrizhi(error);
    //         sleep(random(3000,8000))
    //     }
    // }
}

//*******************************************************对接服务器*****************************************************************

//快手任务
function ksrw(){
    TKB.xgsrizhi("执行快手任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        TKB.qinglihh("com.smile.gifmaker")
        var dd = ksdl()
        if (dd == true){
            ksyh()
        }
        // meitxx()
        TKB.xgsrizhi("执行完存停止数据")
        _THREADSS.interrupt()
        TKB.cunqusj("jiaoben","tingzhi")
        files.write("/sdcard/jiaoben.txt", "tingzhi");
        sleep(1000)
        java.lang.System.exit(0);
        _THREADSSxx.interrupt()
    });
    // exit()
}




try {


    bofangyy()
    var baom = getPackageName("快手")
    if (baom == null){
        log("未安装快手")
        var bbd = TKB.wdjxiazai("快手", "7.0.0.12382")
        if (bbd != false){
            ksrw()
        }
    }else{
        ksrw()
    }

} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}
// bofangyy()
// ksyh()
// meitxx()
// exit()


// ws()
// dlqq()
// var ss = getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(baoming)
// qqyanghao()
// xiugtx()

// TKB.xgsrizhi(getClip()+"**")





