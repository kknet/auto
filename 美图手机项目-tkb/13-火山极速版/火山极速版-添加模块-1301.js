
log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()){
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.ss.android.ugc.livelite"   //该项目包名  版本 7.1.0
var xmxh = "7"               //项目序号




//********************************************************下载播放mp3***************************************************************




//*******************************************************火山养号 *****************************************************************

function zonghe(){
    if(text("知道了").exists()){
         TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if(text("以后再说").exists()){
        TKB.xgsrizhi("以后再说")
       click("以后再说")
       sleep(2000)
   }
   if(desc("以后再说").exists()){
        TKB.xgsrizhi("以后再说")
        try{
            if (desc("以后再说").exists()){
                var ss = desc("以后再说").findOnce().bounds();
                TKB.xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        }catch(error) {
            sleep(1001)
             TKB.xgsrizhi(error);
        }
    }
    if(text("我知道了").exists()){
         TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if(text("以后再说").exists()){
         TKB.xgsrizhi("以后再说")
        click("以后再说")
        sleep(2000)
    }
    if(text("允许").exists() && text("拒绝").exists()){
         TKB.xgsrizhi("允许")
        click("允许")
        sleep(2000)
    }
    if(id("com.ss.android.ugc.livelite:id/a2l").exists() && text("领取").exists()){
        TKB.xgsrizhi("领取")
        click("领取")
       sleep(2000)
   }
    if(text("立即下载").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
       back()
       sleep(2000)
   }

    if(text("点击查看").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
        back()
        sleep(2000)
        back()
        sleep(3000)
    }

    if(text("立即赠送").exists()){
         TKB.xgsrizhi("立即赠送")
        back()
        sleep(2000)
    }
    if(id("com.ss.android.ugc.livelite:id/a5v").exists()&&text("恭喜！你收到一个现金红包").exists()){
        log("恭喜！你收到一个现金红包")
        try {
            id("com.ss.android.ugc.livelite:id/a5v").findOnce().click()
            sleep(1000)
        } catch(error) {
            log(error);
            sleep(2000)
        }    
    }
    if(text("上滑查看下一视频").exists()){
        TKB.xgsrizhi("上滑查看下一视频")
        swipe(557,1630, 533,400, random(400, 1000))
       sleep(2000)
   }
    if(text("不感兴趣？长按试试").exists()){
         TKB.xgsrizhi("不感兴趣？长按试试")
        back()
        sleep(500)
        back()
        sleep(2000)
    }
}

//火山极速版养号
function hsjsbyh(){
    TKB.xgsrizhi("火山极速版养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.livelite")
    var RT = (new Date()).getTime()
    var stt = random(30, 50)
    var TSD = (new Date()).getTime()
    var zbt = random(25, 50)  //视频观看时长
    var ll = 0    //浏览次数
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
           TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("首页").exists() && text("我的").exists() && text("推荐").exists() || id("com.ss.android.ugc.livelite:id/ou").exists() && id("com.ss.android.ugc.livelite:id/o3").exists()){
            TKB.xgsrizhi("首页1")
            if (tem == 0){
                click(120, 1960)
                sleep(300)
                click(120, 1960)
                sleep(4000)
                tem = 1
            }
        }
        if(id("com.ss.android.ugc.livelite:id/hy").exists() && id("com.ss.android.ugc.livelite:id/gr").exists()){
            TKB.xgsrizhi("首页")
            if (tem == 0){
                TKB.xgsrizhi("刷新首页")
                click(420, 110)
                sleep(100)
                click(421, 111)
                sleep(5000)
                swipe(557,400, 533,1630, random(400, 1000))
                sleep(4000)
                tem = 1
            }else{
                TKB.xgsrizhi("进入观看视频")
                click(random(100, 800), random(400, 1600))
                sleep(3000)
            }
        }
        if(text("说点什么...").exists() && text("关注").exists() || id("com.ss.android.ugc.livelite:id/oc").exists() && id("com.ss.android.ugc.livelite:id/o9").exists()){
            log("观看视频界面")
            TSD = (new Date()).getTime()
            zbt = random(30, 50)
            TR = (new Date()).getTime()
            while(1){
                if ((new Date()).getTime() - TR > zbt*1000){
                    toastLog("观看视频时间到了")
                    break
                }else{
                    toastLog("观看视频中...")
                    sleep(3000)
                }
            }
            zbt = random(1, 50)
            if (zbt ==40){
                log("点赞")
                click(980, 1250)
                sleep(1000)
            }
            if (zbt > 47){
                log("去浏览评论点赞")
                click(980, 1480)
                sleep(2000)
            }
            swipe(533,1630, 557,400,random(400, 600))
            sleep(random(2000, 5000))
            ll = ll  + 1 
            if (ll > 15){
                TKB.xgsrizhi("浏览次数够了刷新首页")
                tem = 0
                ll = 0
            }
        }
        if(text("作品数").exists() && id("com.ss.android.ugc.livelite:id/a_5").exists() || text("粉丝").exists() && id("com.ss.android.ugc.livelite:id/mz").exists()){
            log("进到了个人界面")
            swipe(533,1660, 557,300,random(400, 600))
            sleep(random(2000, 5000))
            back()
        }

        if(desc("谢谢参与").exists() && desc("100金币").exists()){
            log("抽奖界面")
            click(500, 1400)
            sleep(10000)
            back()
            sleep(2000)
        }
        if(text("com.ss.android.ugc.livelite:id/pc").exists() && id("com.ss.android.ugc.livelite:id/ks").exists() || text("发送").exists() && id("com.ss.android.ugc.livelite:id/ku").exists()){
            toastLog("评论界面")
            var aa = random(1, 5)
            for(var i = 0;i< aa ;i++){
                swipe(533,1700, 557,400,random(400, 600))
                sleep(random(1000, 3000))
            }
            back()
            sleep(2000)
        }

        if(text("点击重播").exists() || text("查看详情").exists() && id("com.ss.android.ugc.livelite:id/qp").exists()){
            log("观看广告界面")
            zbt = random(25, 50)
            TR = (new Date()).getTime()
            while(1){
                if ((new Date()).getTime() - TR > zbt*1000){
                    toastLog("观看视频时间到了")
                    back()
                    sleep(2000)
                    break
                }else{
                    toastLog("观看广告中...")
                    sleep(3000)
                }
            }
        }

        zonghe()
    }
}

//火山极速版登录
function hsjsdl(){
     TKB.xgsrizhi("火山极速版登录")
    launch("com.ss.android.ugc.livelite")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.ss.android.ugc.livelite")
            if (tem == 1){
                return true
            }
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
           TKB.qinglihh("com.ss.android.ugc.livelite")
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(id("com.ss.android.ugc.livelite:id/oc").exists() && text("关注").exists() && id("com.ss.android.ugc.livelite:id/o9").exists() || id("com.ss.android.ugc.livelite:id/ou").exists() && id("com.ss.android.ugc.livelite:id/o3").exists()){
            TKB.xgsrizhi("首页")
            click(980, 1980)
            sleep(2000)
        }
        if(id("com.ss.android.ugc.livelite:id/qp").exists() && text("手机登录").exists() || text("其他登录方式").exists() && text("手机登录").exists()){
            TKB.xgsrizhi("手机登录")
            var baom = getPackageName("微信")
            if (baom == null){
                log("没有安装微信")
                return false
            }
            hsjszc()
            sleep(2000)
        }
        if(text("注册/登录").exists()){
            TKB.xgsrizhi("注册/登录")
            click("注册/登录")
            sleep(2000)
        }
        if (id("com.ss.android.ugc.livelite:id/a5o").exists()){
            try {
                log("输入邀请码提示")
                var node = id("com.ss.android.ugc.livelite:id/a5o").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }

        if(text("注册/登录").exists()){
            TKB.xgsrizhi("注册/登录")
            click("注册/登录")
            sleep(2000)
        }else{
            if(id("com.ss.android.ugc.livelite:id/hy").exists() && id("com.ss.android.ugc.livelite:id/gr").exists()){
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                click(980, 130)
                sleep(2000)
                tem = 1
            }
        }
        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            click(900, 300)
            sleep(3000)
        }
        if(text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            click(910, 220)
            sleep(300)
            click("去领钱")
            sleep(3000)
        }
        if(text("金币").exists() && text("兑换").exists() || desc("金币").exists() && desc("兑换").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("输入邀请码").exists()){
            TKB.xgsrizhi("金币金额界面")
            try {
                if (desc("输入邀请码").exists()){
                    log("输入邀请码")
                    var node = desc("输入邀请码").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                }else{
                    if (text("输入邀请码").exists()){
                        log("输入邀请码")
                        var node = text("输入邀请码").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(1200)
                    }else{
                        toastLog("登录成功")
                        return true
                    }
                }
                sleep(3000)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if (id("com.ss.android.ugc.livelite:id/a5o").exists()){
                try {
                    log("输入邀请码提示")
                    var node = id("com.ss.android.ugc.livelite:id/a5o").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }

        }
        if(text("温馨提示").exists() && text("马上提交").exists() || desc("温馨提示").exists() && desc("马上提交").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("马上提交").exists()){
            log("输入邀请码界面")
            setText("253730775")
            sleep(1000)
            click(500, 980)
            sleep(300)
            click("马上提交")
            sleep(5000)
            back()
            return true
        }
        if (desc("1元现金红包已入账").exists() && desc("马上邀请").exists()){
            log("邀请码填写成功")
            back()
            sleep(1000)
            TKB.qinglihh()
            launch("com.ss.android.ugc.livelite")
            return true
        }


        zonghe()
    }
}

//火山极速版注册
function hsjszc(){
    log("火山极速版注册")
    launch("com.ss.android.ugc.livelite") //启动
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 20)
    var TSD = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
           TKB.qinglihh("com.ss.android.ugc.livelite")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.livelite")
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if(id("com.ss.android.ugc.livelite:id/oc").exists() && text("关注").exists() && id("com.ss.android.ugc.livelite:id/o9").exists() || id("com.ss.android.ugc.livelite:id/ou").exists() && id("com.ss.android.ugc.livelite:id/o3").exists()){
            TKB.xgsrizhi("首页")
            click(980, 1980)
            sleep(2000)
        }
        if(id("com.ss.android.ugc.livelite:id/qp").exists() && text("手机登录").exists() || text("其他登录方式").exists() && text("手机登录").exists()){
            TKB.xgsrizhi("手机登录")
            click("微信登录")
            sleep(2000)
        }
        if(text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("注册/登录").exists()){
            TKB.xgsrizhi("注册/登录")
            click("注册/登录")
            sleep(2000)
        }else{
            if(id("com.ss.android.ugc.livelite:id/hy").exists() && id("com.ss.android.ugc.livelite:id/gr").exists()){
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                click(980, 130)
                sleep(2000)
            }
        }
        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            click(900, 300)
            sleep(3000)
        }
        if(text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            click(910, 220)
            sleep(300)
            click("去领钱")
            sleep(3000)
        }
        if(text("金币").exists() && text("兑换").exists() || desc("金币").exists() && desc("兑换").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("输入邀请码").exists()){
            TKB.xgsrizhi("金币金额界面")
            try {
                if (desc("输入邀请码").exists()){
                    log("输入邀请码")
                    var node = desc("输入邀请码").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                }else{
                    if (text("输入邀请码").exists()){
                        log("输入邀请码")
                        var node = text("输入邀请码").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(1200)
                    } 
                }
                sleep(3000)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }else{
            if (id("com.ss.android.ugc.livelite:id/a5o").exists()){
                try {
                    log("输入邀请码提示")
                    var node = id("com.ss.android.ugc.livelite:id/a5o").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }

        }
        if(text("温馨提示").exists() && text("马上提交").exists() || desc("温馨提示").exists() && desc("马上提交").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("马上提交").exists()){
            log("输入邀请码界面")
            setText("253730775")
            sleep(1000)
            click(500, 980)
            sleep(300)
            click("马上提交")
            sleep(5000)
            back()
            return true
        }
        if (desc("1元现金红包已入账").exists() && desc("马上邀请").exists()){
            log("邀请码填写成功")
            back()
            sleep(1000)
            TKB.qinglihh()
            launch("com.ss.android.ugc.livelite")
            return true
        }   
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh("com.tencent.weishi")
            return false
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
                //  TKB.xgsrizhi("停止当前运行的脚本")
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
        var ssee = (new Date()).getTime()- 100*1000
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
                                 TKB.xgsrizhi("继续火山极速版任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                     TKB.xgsrizhi("结束脚本")
                                   TKB.qinglihh("com.ss.android.ugc.live")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                             TKB.xgsrizhi("服务器上没有火山极速版任务")
                           TKB.qinglihh("com.ss.android.ugc.live")
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



//*******************************************************对接服务器*****************************************************************


function hszhixing(){
     TKB.xgsrizhi("执行火山极速版")

    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
       TKB.qinglihh()
        var wb = hsjsdl()
        if (wb == true){
            hsjsbyh()
        }
        // meitxx()
         TKB.xgsrizhi("执行完存停止数据")
         _THREADSS.interrupt()
        TKB.cunqusj("jiaoben","tingzhi")
        files.write("/sdcard/jiaoben.txt", "tingzhi")
        sleep(1000)
        java.lang.System.exit(0);
        _THREADSSxx.interrupt()
    });
    // exit()
}

try {

    bofangyy()
    var baom = getPackageName("火山极速版")
    if (baom == null){
        log("未安装火山极速版")
        var bbd = TKB.wdjxiazai("火山极速版", "7.1.0")
        if (bbd != false){
            hszhixing()
        }
    }else{
        hszhixing()
    }
    
} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}

// bofangyy()
// hsyh()
// meitxx()
// exit()













// ws()
// dlqq()
// var ss = getAllTexts()
//  TKB.xgsrizhi(ss)
// var baoming = currentPackage()
//  TKB.xgsrizhi(baoming)
// qqyanghao()
// xiugtx()
//  TKB.xgsrizhi(getClip()+"**")







