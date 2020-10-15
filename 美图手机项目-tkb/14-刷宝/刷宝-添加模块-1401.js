
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
var dqbaoming = "com.jm.video"   //该项目包名  版本 2.100
var xmxh = "1"               //项目序号




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

//刷宝短视频养号
function sbyh(){
    TKB.xgsrizhi("刷宝短视频养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.jm.video")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
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
            launch("com.jm.video")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(id("com.jm.video:id/image_view").exists() && id("com.jm.video:id/layAvatar").exists() && text("关注").exists() || id("com.jm.video:id/share").exists() && id("com.jm.video:id/comment").exists()){
            TKB.xgsrizhi("首页")
            if (tem == 0){
                click(100, 1960)
                sleep(300)
                click(100, 1960)
                sleep(4000)
                tem = 1
            }else{
                TSD = (new Date()).getTime()
                zbt = random(25, 45)
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
                if (zbt == 40){
                    log("点赞")
                    click(980, 1000)
                    sleep(1000)
                }
                if (zbt > 47){
                    log("去浏览评论")
                    click(980, 1460)
                    sleep(3000)
                }
                swipe(533,1660, 557,300,random(400, 600))
                sleep(random(2000, 5000))
                ll = ll  + 1 
                if (ll > 15){
                    TKB.xgsrizhi("浏览次数够了刷新首页")
                    tem = 0
                    ll = 0
                }
            }
        }
        if(text("我也说几句").exists() && id("com.jm.video:id/imgClose").exists() || id("com.jm.video:id/editComment").exists() && id("com.jm.video:id/iv_prise_btn").exists()){
            TKB.xgsrizhi("评论界面")
            var aa = random(1, 5)
            for(var i = 0;i< aa ;i++){
                swipe(533,1700, 557,400,random(400, 600))
                sleep(random(1000, 3000))
            }
            back()
            sleep(2000)
        }



        zonghe()
    }
}

//刷宝短视频登录
function sbdl(){
    TKB.xgsrizhi("刷宝短视频登录")
    launch("com.jm.video")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
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
            launch("com.jm.video")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(id("com.jm.video:id/image_view").exists() && id("com.jm.video:id/layAvatar").exists() && text("关注").exists() || id("com.jm.video:id/share").exists() && id("com.jm.video:id/comment").exists()){
            TKB.xgsrizhi("首页")
            click(970, 1960)
            sleep(2000)
        }
        if(text("请输入手机号").exists() && text("微信账号登录").exists() || id("com.jm.video:id/layout_login_edit").exists() && text("微信账号登录").exists()){
            TKB.xgsrizhi("输入手机账号界面")
            click("微信账号登录")
            sleep(2000)
        }
        if(text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("我的钱包").exists() && id("com.jm.video:id/iv_setting").exists() || text("我的视频").exists() && id("com.jm.video:id/iv_head").exists()){
            TKB.xgsrizhi("登陆成功")
            toastLog("登陆成功")
            tem = 1
            if (text("补填邀请码").exists()){
                log("补填邀请码")
                click("补填邀请码")
                sleep(2000)
            }else{
                log("滑动")
                swipe(557,1630, 533,400, random(400, 1000))
                sleep(2000)
                cs = cs + 1
            }
            if (cs > 5){
                log("滑动次数够多了")
                return true
            }
        }
        if(desc("提交领奖励").exists() && text("邀请码").exists() || desc("提交领奖励").exists() && desc("温馨提示").exists()){
            TKB.xgsrizhi("提交领奖励")
            sleep(2000)
            setText("AF5P4AX")
            sleep(500)
            click(500, 1100)
            sleep(300)
            click("提交领奖励")
            sleep(2000)
            TKB.qinglihh()
            return true
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
     TKB.xgsrizhi("执行刷宝")

    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
       TKB.qinglihh()
        var wb = sbdl()
        if (wb == true){
            sbyh()
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
    var baom = getPackageName("刷宝短视频")
    if (baom == null){
        log("未安装刷宝短视频")
        var bbd = TKB.wdjxiazai("刷宝", "2.100")
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







