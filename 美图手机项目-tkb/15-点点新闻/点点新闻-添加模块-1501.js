
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
var dqbaoming = "com.yingliang.clicknews"   //该项目包名  版本 1.1.3.6
var xmxh = "1"               //项目序号




//********************************************************下载播放mp3***************************************************************




//*******************************************************火山养号 *****************************************************************

function zonghe(){
    sleep(300)
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
    if(text("取消").exists() && text("设置").exists()){
        TKB.xgsrizhi("设置")
       click("取消")
       sleep(2000)
   }
    if(text("残忍拒绝").exists() && text("立即更新").exists()){
        TKB.xgsrizhi("残忍拒绝")
       click("残忍拒绝")
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
    if(id("com.jm.video:id/imgClose").exists()&&text("恭喜获得").exists() || id("com.jm.video:id/imgClose").exists()&&text("元").exists()){
        log("恭喜！你收到一个现金红包")
        try {
            id("com.jm.video:id/imgClose").findOnce().click()
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

//点点新闻养号
function ddyh(){
    TKB.xgsrizhi("点点新闻养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.yingliang.clicknews")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    var TSD = (new Date()).getTime()
    var ddn = (new Date()).getTime()
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
            launch("com.yingliang.clicknews")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("资讯").exists() && text("我的").exists() || text("推荐").exists() && text("我的").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                click(180, 1960)
                sleep(300)
                click(180, 1960)
                sleep(2000)
                tem = 1
            }else{
                log("浏览首页任务")
                bb = random(1, 5)
                for(var ii = 0; ii < bb; ii++){
                    swipe(533,1660, 557,300,random(400, 600))
                    sleep(random(2000, 5000))
                    toastLog("浏览首页内容")
                }
                click(random(200, 800), random(400, 1600))
                sleep(3000)
                ll = ll  + 1 
                if (ll > 15){
                    TKB.xgsrizhi("浏览次数够了刷新首页")
                    tem = 0
                    ll = 0
                }
            }
        }else{

            if(id("com.yingliang.clicknews:id/tv_share").exists() && id("com.yingliang.clicknews:id/back").exists() || id("com.yingliang.clicknews:id/imageView1").exists() && id("com.yingliang.clicknews:id/frameLayout1").exists()){
                TKB.xgsrizhi("浏览新闻")
                zbt = random(30, 50)
                var bbs = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - bbs > zbt*1000){
                        log("浏览时间够了")
                        back()
                        sleep(2500)
                        break
                    }else{
                        sleep(random(2000, 8000))
                        toastLog("浏览新闻内容")
                        swipe(533,1660, 557,300,random(400, 600))
                        sleep(random(2000, 5000))
                    }
                }
            }
        }
        if(id("com.yingliang.clicknews:id/tt_titlebar_close").exists() && text("立即下载").exists()){
            log("立即下载")
            sleep(3000)
            back()
            sleep(3000)
        }
        if ((new Date()).getTime() - ddn > 20*1000){
            if (TKB.zhaose(captureScreen(), "if isColor(430,797,0xffce6c,80) and isColor(653,804,0xffce6c,80) and isColor(431,896,0xffffff,80) and isColor(531,1123,0xe2ca89,80) and isColor(496,1237,0x473f2b,80) and isColor(590,1267,0x473f2b,80) then")){
                log("新手红包")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(400,928,0xfee1bf,80) and isColor(352,1253,0xff3b3b,80) and isColor(259,1196,0xffffff,80) and isColor(604,1208,0xffffff,80) and isColor(449,1111,0xff8768,80) and isColor(551,1255,0xff3b3b,80) then")){
                log("认证阅读获得奖励提示")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(319,1521,0xff3b3b,80) and isColor(551,1535,0xff3b3b,80) and isColor(763,1521,0xff3b3b,80) and isColor(703,1441,0xffffff,80) and isColor(540,1488,0xffffff,80) and isColor(477,1417,0xffffff,80) and isColor(547,1395,0xff8567,80) then")){
                log("上滑寻找提示")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(509,362,0xff3a3a,80) and isColor(946,358,0xff3a3a,80) and isColor(625,315,0xffffff,80) and isColor(478,261,0xffffff,80) and isColor(940,260,0xffffff,80) and isColor(1030,216,0xff785f,80) then")){
                log("每小时红包奖励提示")
                click(538,1232)
                sleep(2000)
            }

            if(text("新手红包").exists() && text("元").exists()  && text("已存入余额").exists() || text("立即阅读领奖励").exists() && text("初次见面，送您新手红包").exists()){
                TKB.xgsrizhi("新手红包2")
                back()
                sleep(2000)
            }
            ddn = (new Date()).getTime()
        }

        zonghe()
    }
}


//点点新闻登录登录
function dddl(){
    TKB.xgsrizhi("刷宝短视频登录")
    var baom = getPackageName("微信")
    if (baom == null){
        log("微信都没安装")
        return false
    }
    launch("com.yingliang.clicknews")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    var ddn = (new Date()).getTime()
    var tem = 0
    var cs = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            if (tem == 1){
                return true
            }
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.yingliang.clicknews")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if(text("跳过").exists() && text("暂不注册").exists() || text("跳过").exists() && text("注册/登录领1-200元现金").exists()){
            TKB.xgsrizhi("暂不注册")
            if (text("注册/登录领1-200元现金").exists()){
                click("注册/登录领1-200元现金")
            }else{
                click("跳过")
            }
            sleep(2000)
        }
        if(text("资讯").exists() && text("我的").exists() || text("推荐").exists() && text("我的").exists()){
            TKB.xgsrizhi("首页")
            if (tem == 0){
                click(900, 1960)
                sleep(2000)
            }else{
                log("点击任务")
                click(530, 1960)
                sleep(100)
                click("任务")
                sleep(2000)
            }
        }
        if(text("登录/注册").exists()){
            TKB.xgsrizhi("登录/注册")
            click("登录/注册")
            sleep(2000)
        }else{
            if(text("邀请赚钱").exists() && id("com.yingliang.clicknews:id/iv_avatar").exists() || id("com.yingliang.clicknews:id/fl_name").exists() && id("com.yingliang.clicknews:id/tv_id").exists()){
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                log("点击任务")
                click(530, 1960)
                sleep(100)
                click("任务")
                sleep(2000)
                tem = 1
            }
        }
        if(id("com.yingliang.clicknews:id/iv_login_wx").exists()){
            TKB.xgsrizhi("点击微信登录")
            try {
                var ss = id("com.yingliang.clicknews:id/iv_login_wx").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
                sleep(1000)
            } catch(error) {
                TKB.xgsrizhi(error);
                sleep(2000)
            }
        }

        if(text("微信一键登录").exists()){
            TKB.xgsrizhi("微信一键登录")
            click("微信一键登录")
            sleep(2000)
        }
        if ((new Date()).getTime() - ddn > 20*1000){
            if (TKB.zhaose(captureScreen(), "if isColor(430,797,0xffce6c,80) and isColor(653,804,0xffce6c,80) and isColor(431,896,0xffffff,80) and isColor(531,1123,0xe2ca89,80) and isColor(496,1237,0x473f2b,80) and isColor(590,1267,0x473f2b,80) then")){
                log("新手红包")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(400,928,0xfee1bf,80) and isColor(352,1253,0xff3b3b,80) and isColor(259,1196,0xffffff,80) and isColor(604,1208,0xffffff,80) and isColor(449,1111,0xff8768,80) and isColor(551,1255,0xff3b3b,80) then")){
                log("认证阅读获得奖励提示")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(319,1521,0xff3b3b,80) and isColor(551,1535,0xff3b3b,80) and isColor(763,1521,0xff3b3b,80) and isColor(703,1441,0xffffff,80) and isColor(540,1488,0xffffff,80) and isColor(477,1417,0xffffff,80) and isColor(547,1395,0xff8567,80) then")){
                log("上滑寻找提示")
                click(538,1232)
                sleep(2000)
            }
            if (TKB.zhaose(captureScreen(), "if isColor(509,362,0xff3a3a,80) and isColor(946,358,0xff3a3a,80) and isColor(625,315,0xffffff,80) and isColor(478,261,0xffffff,80) and isColor(940,260,0xffffff,80) and isColor(1030,216,0xff785f,80) then")){
                log("每小时红包奖励提示")
                click(538,1232)
                sleep(2000)
            }

            if(text("新手红包").exists() && text("元").exists()  && text("已存入余额").exists() || text("立即阅读领奖励").exists() && text("初次见面，送您新手红包").exists()){
                TKB.xgsrizhi("新手红包2")
                back()
                sleep(2000)
            }
            ddn = (new Date()).getTime()
        }

        if(text("赚钱任务").exists() && text("任务").exists() || text("日常任务").exists() && text("赚钱任务").exists()){
            TKB.xgsrizhi("任务界面")
            if (text("填入邀请码").exists()){
                log("填入邀请码")
                // click("填入邀请码")
                // sleep(2000)
                try {
                    var ss = text("填入邀请码").findOnce().bounds();
                    log(ss.centerX())
                    log(ss.centerY())
                    if (ss.centerY() > 1820){
                        log("不在屏幕内")
                        swipe(500,1810, 486,305, 500)
                        sleep(3000)
                    }else{
                        log("点击填入邀请码")
                        click(ss.centerX(), ss.centerY());
                        sleep(3000)
                        click(900, ss.centerY() + 170)
                        sleep(2000)
                    }
                    // click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    sleep(1000)
                } catch(error) {
                    TKB.xgsrizhi(error);
                    sleep(2000)
                }

            }else{
                log("下滑")
                swipe(500,1810, 486,305, 500)
                sleep(3000)
                cs = cs + 1
            }
            if (cs > 3){
                log("下滑次数够多了")
                TKB.qinglihh()
                sleep(1000)
                return true
            }
            sleep(1000)
        }
        if(text("请填入邀请码").exists() || text("  您还没有师傅，向您的好友/推荐人询问邀请码吧  ").exists()){
            TKB.xgsrizhi("请填入邀请码1")   //3103204
            setText("3103204")
            sleep(2000)
            click(548,862)
            sleep(2000)
            TKB.qinglihh()
            return true
        }

        if(text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }





        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }



        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************

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
    TKB.xgsrizhi("执行点点新闻")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
       TKB.qinglihh()
        var wb = dddl()
        if (wb == true){
            ddyh()
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
    var baom = getPackageName("点点新闻")
    if (baom == null){
        log("未安装点点新闻")
        var bbd = TKB.wdjxiazai("点点新闻", "1.1.3.6")
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







