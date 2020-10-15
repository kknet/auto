
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
var dqbaoming = "com.immomo.momo"   //该项目包名
var xmxh = "9"               //项目序号


//********************************************************下载播放mp3***************************************************************

//*******************************************************默默养号 *****************************************************************

function zonghe(){
    if(text("忽略").exists() && text("立即开启").exists()){
        TKB.xgsrizhi("忽略")
        click("忽略")
        sleep(1000)
    }
    if(text("绑定手机").exists()){
        TKB.xgsrizhi("绑定手机")
        back()
        sleep(2000)
    }
    if(text("同意").exists() && text("不同意并退出").exists()){
        TKB.xgsrizhi("同意")
        click("同意")
        sleep(1000)
    }
    if(text("女生").exists() && text("男生").exists()){
        TKB.xgsrizhi("女生")
        click("女生")
        sleep(1000)
    }
    if(text("继续观看").exists() && text("退出").exists()){
        TKB.xgsrizhi("继续观看")
        back()
        sleep(2000)
        click("继续观看")
        sleep(1000)
    }
    if(text("了解更多").exists() && id("com.immomo.momo:id/btn_close").exists()){
        TKB.xgsrizhi("了解更多")
        back()
        sleep(2000)
    }
    if(text("应用详情").exists() && text("立即下载").exists() || text("应用详情").exists() && desc("立即下载").exists()){
        TKB.xgsrizhi("立即下载")
        back()
        sleep(2000)
    }

    if(text("提示").exists() && text("确认").exists() && text("取消").exists()){
        TKB.xgsrizhi("提示")
        click("取消")
        sleep(1000)
    }else{
        if (text("确认").exists() && text("取消").exists()){
            TKB.xgsrizhi("确认")
            click("取消")
            sleep(1000)
        }
    }
    if(text("提示").exists() && text("确定").exists()){
        TKB.xgsrizhi("提示")
        if(text("取消").exists()){
            click("取消")
        }else{
            click("确定")
        }
        sleep(1000)
    }

    if(text("提示").exists() && text("账号功能受限，无法观看直播").exists() || text("提示").exists() && id("com.immomo.momo:id/dialog_tv_message").exists()){
        TKB.xgsrizhi("账号功能受限，无法观看直播")
        click(500, 1200)
        sleep(1000)
    }
    if(text("暂不接受").exists()){
        TKB.xgsrizhi("暂不接受")
        click("暂不接受")
        sleep(1000)
    }
    if(id("com.immomo.momo:id/auth_module_diaTKB.xgsrizhi_iv_close").exists() && text("绑定手机").exists()){
        TKB.xgsrizhi("绑定手机")
        try {
            var ss = id("com.immomo.momo:id/auth_module_diaTKB.xgsrizhi_iv_close").findOnce().bounds();
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1000)
            TKB.xgsrizhi(error);
        }
    }

}

//默默养号
function mmyh(){
    TKB.xgsrizhi("默默养号")
    launch("com.immomo.momo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.immomo.momo")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.immomo.momo")
            sleep(3000)
            launch("com.immomo.momo")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(text("首页").exists() && id("com.immomo.momo:id/tab_title_scale_layout").exists() || text("直播").exists() && id("com.immomo.momo:id/feed_publish").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                TKB.xgsrizhi("刷新首页")
                var cc = random(1, 10)
                if (cc == 9){
                    TKB.xgsrizhi("点击同城")
                    click(640, 180)
                    sleep(2000)
                }else{
                    TKB.xgsrizhi("点击附近的人")
                    click(120, 180)
                    sleep(2000)
                }
                click(90, 1920)
                sleep(100)
                click(95, 1930)
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
        if(text("输入评论").exists() && id("com.immomo.momo:id/iv_feed_emote").exists() || text("打招呼").exists() && id("com.immomo.momo:id/feed_send_layout").exists()){
            TKB.xgsrizhi("浏览动态界面")
            sleep(3000)
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            if (id("com.immomo.momo:id/iv_comment_photo").exists()){
                try{
                    var bb = id("com.immomo.momo:id/iv_comment_photo").findOnce().bounds();
                    if (bb != null){
                        TKB.xgsrizhi(bb.centerX())
                        TKB.xgsrizhi(bb.centerY())
                        click(bb.centerX() +880, bb.centerY())
                        sleep(2000)
                    }
                }catch(error) {
                    sleep(1000)
                    TKB.xgsrizhi(error);
                }
            }
            back()
            sleep(1000)
        }

        if(text("转发").exists() && id("com.immomo.momo:id/btn_like").exists() && text("关注").exists() || id("com.immomo.momo:id/iv_back").exists() && id("com.immomo.momo:id/btn_comment").exists()){
            TKB.xgsrizhi("观看视频界面")
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
            back()
            sleep(1000)
        }
        if(text("打招呼").exists() && id("com.immomo.momo:id/include_feed_img_close").exists() || id("com.immomo.momo:id/include_feed_btn_send_msg").exists() && id("com.immomo.momo:id/include_feed_img_share").exists()){
            TKB.xgsrizhi("浏览图片界面")
            sleep(4000)
            back()
            sleep(1000)
        }
        if(text("关注").exists() && id("com.immomo.momo:id/phone_live_iv_quit").exists() || id("com.immomo.momo:id/phone_rank_item_iv_avatar").exists() && id("com.immomo.momo:id/quick_product_iv_product").exists()){
            TKB.xgsrizhi("直播界面")
            var cd = random(1, 40)
            if (cd > 38){
                back()
                sleep(1000)
                tem = 0
            }else{
                toastLog("观看直播中")
                sleep(5000)
            }
        }
        if(id("com.immomo.momo:id/mini_profile_layout_like").exists() && id("com.immomo.momo:id/mini_profile_layout_dislike").exists() || id("com.immomo.momo:id/mini_profile_super_lik").exists() && desc("更多").exists()){
            TKB.xgsrizhi("个人详情页")
            sleep(2000)
            back()
            sleep(1000)
        }
        if (text("创建房间").exists() && text("聊天室").exists() || text("签到任务").exists() && text("排行榜").exists()){
            TKB.xgsrizhi("聊天室")
            back()
            sleep(2000)
        } 
        if (text("直播结束").exists() && text("关注").exists() || text("直播结束").exists() && text("换一个").exists() || text("直播已结束").exists() && id("com.immomo.momo:id/phone_live_iv_quit").exists()){
            TKB.xgsrizhi("直播结束")
            back()
            sleep(500)
            back()
            sleep(2000)
        }   
        if (id("com.immomo.momo:id/mk_diaTKB.xgsrizhi_close_button").exists()){
            TKB.xgsrizhi("直播弹出的提示")
            try{
                var ss = id("com.immomo.momo:id/mk_diaTKB.xgsrizhi_close_button").findOnce().bounds();
                TKB.xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }catch(error) {
                sleep(1000)
                TKB.xgsrizhi(error);
            }
        }
        zonghe()

    }
}

//陌陌登录
function mmdl(){
    TKB.xgsrizhi("陌陌登录")
    launch("com.immomo.momo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.immomo.momo")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.immomo.momo")
            sleep(3000)
            launch("com.immomo.momo")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("微信号/QQ/邮箱登录").exists()){
            toastLog("未登录微信")
            back()
            sleep(2000)
            TKB.qinglihh("com.immomo.momo")
            return false
        }
        if(text("注册/登录").exists() && text("首页").exists() || text("首页").exists() && id("com.immomo.momo:id/btn_login").exists()){
            TKB.xgsrizhi("首页23")
            try {
                var ss = id("com.immomo.momo:id/btn_login").findOnce().bounds();
                TKB.xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1000)
                TKB.xgsrizhi(error);
            }
            momozc()
        }else{
            if(text("首页").exists() && id("com.immomo.momo:id/tab_title_scale_layout").exists() || text("直播").exists() && id("com.immomo.momo:id/feed_publish").exists()){
                TKB.xgsrizhi("首页 --点击我的")
                click(970, 1960)
                sleep(2000)
            }
        }
        if(text("粉丝").exists() && id("com.immomo.momo:id/simple_user_avatar").exists()){
            toastLog("登录成功")
            TKB.qinglihh("com.immomo.momo")
            return true
        }

        if(id("com.immomo.momo:id/img_wx").exists() && text("获取验证码").exists() || id("com.immomo.momo:id/img_wx").exists() && text("获取验证码").exists()){
            TKB.xgsrizhi("登录界面")
            momozc()
            // try {
            //     var ss = id("com.immomo.momo:id/img_wx").findOnce().bounds();
            //     TKB.xgsrizhi(ss)
            //     click(ss.centerX(), ss.centerY());
            //     sleep(2000)
            // } catch (error) {
            //     sleep(1000)
            //     TKB.xgsrizhi(error);
            // }
        }
        if(text("同意").exists() && text("拒绝").exists()){
            toastLog("同意")
            click("同意")
            sleep(2000)
        }
        if(text("女生").exists() && text("下一步").exists()){
            TKB.xgsrizhi("女生")
            click(950, 740)
            sleep(1000)
            click("女生")
            sleep(1000)
            click(835, 1430)
            sleep(1000)
            click("下一步")
            sleep(2000)
        }
        if(text("绑定手机").exists() && text("跳过").exists()){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(2000)
        }
        if(text("提示").exists() && text("确认").exists()){
            TKB.xgsrizhi("确认")
            click("确认")
            sleep(2000)
        }


        zonghe()
    }
}

//陌陌注册
function momozc(){
    log("陌陌注册")
    launch("com.immomo.momo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var haoma = "13177811743"
    var yzm = "1234"
    var haoma = false
    var tem = 0   //  判断去获取号码
    var bb = 0    //
    var cs = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.immomo.momo")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没登录成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.immomo.momo")
            sleep(3000)
            launch("com.immomo.momo")
            sleep(2000)
            TSD = (new Date()).getTime()
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
                haoma = TKB.getxhhaoma(25, token)
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
        
        if(text("输入6位验证码").exists() && id("com.immomo.momo:id/btn_resend_verify_code").exists() || id("com.immomo.momo:id/tv_title").exists() && id("com.immomo.momo:id/tv_phone").exists()){
            log("输入验证码界面")
            if(text("重新获取").exists()){
                log("重新获取")
                click("重新获取")
                sleep(2000)
            }
            yzm = TKB.getxhyzm(25, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText(yzm) 
                sleep(5000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    TKB.laheixhpt(25, haoma, token)
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
        if(text("注册/登录").exists() && text("首页").exists() || id("com.immomo.momo:id/btn_login").exists() && text("首页").exists()){
            log("首页点击登录")
            click(590, 1720)
            sleep(1000)
            click("注册/登录")
            sleep(2000)
        }else{
            if(text("首页").exists() && id("com.immomo.momo:id/tab_title_scale_layout").exists() || text("直播").exists() && id("com.immomo.momo:id/feed_publish").exists()){
                log("登陆成功")
                if (tem == 1){
                    TKB.laheixhpt(25, haoma, token)
                }
                return true
            }
        }
        if(text("手机号登录注册").exists() && text("账号密码登录").exists() || text("手机号登录注册").exists() && text("获取验证码").exists()){
            log("输入号码界面")

            if (bb == 0){
                log("先去拿号吗")
                bb = 1
            }else{
                
                setText([1], haoma) 
                sleep(1000)
                click(500, 820)
                sleep(1000)
                if(text("获取验证码").exists()){
                    log("获取验证码")
                    click("获取验证码")
                    sleep(2000)
                }
                sleep(3000)
            }
        }
        if (text("跳过").exists()){
            log("跳过")
            click("跳过")
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
                            if (renwu[i] == "9" ){
                                TKB.xgsrizhi("继续陌陌任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh("com.immomo.momo")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有陌陌任务")
                            TKB.qinglihh("com.immomo.momo")
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
                sleep(1001)
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

//陌陌任务
function mmrw(){
    TKB.xgsrizhi("陌陌任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        TKB.qinglihh("com.immomo.momo")
        var dd = mmdl()
        if (dd == true){
            mmyh()
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
    var baom = getPackageName("MOMO陌陌")
    if (baom == null){
        log("未安装MOMO陌陌")
        var bbd = TKB.wdjxiazai("MOMO陌陌", "8.22.5")
        if (bbd != false){
            mmrw()
        }
    }else{
        mmrw()
    }
    
} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}






// mmrw()
// bofangyy()
// mmyh()
// meitxx()
// exit()


// // ws()
// dlqq()
// var ss = getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(baoming)
log(getClip()+"**")
// qqyanghao()
// xiugtx()







