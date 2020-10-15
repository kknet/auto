
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
var dqbaoming = "com.yuncheapp.android.pearl"   //该项目包名  版本 2.1.0.261
var xmxh = "16"               //项目序号




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
    if(text("阅读推送任务示例").exists()){
        TKB.xgsrizhi("阅读推送任务示例")
       back()
       sleep(2000)
   }
    if(text("允许").exists() && text("拒绝").exists()){
         TKB.xgsrizhi("允许")
        click("允许")
        sleep(2000)
    }
    if(text("立即提现").exists() && text("恭喜获得新人红包").exists()){
        TKB.xgsrizhi("立即提现")
        click(520, 1680)
        sleep(2000)
    }
    if(text("提现到微信").exists() && id("com.yuncheapp.android.pearl:id/close_iv").exists()){
        TKB.xgsrizhi("提现到微信")
        click(920, 600)
        sleep(2000)
    }
    if(text("立即下载").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
       back()
       sleep(2000)
   }
    if(text("先去逛逛").exists() && text("新人福利到").exists()){
        TKB.xgsrizhi("新人福利到")
        click(500 , 850)
        sleep(1000)
        click("先去逛逛")
        sleep(2000)
    }
    if(text("先去逛逛").exists() && text("恭喜收到新人福利").exists()){
        TKB.xgsrizhi("恭喜收到新人福利")
        click(500 , 1200)
        sleep(1000)
        click("先去逛逛")
        sleep(2000)
    }

    if(text("点击查看").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
        back()
        sleep(2000)
        back()
        sleep(3000)
    }
    if(text("同意并继续").exists()){
        TKB.xgsrizhi("同意并继续")
       click("同意并继续")
       sleep(2000)
   }

}

//快看点养号
function kkdyh(){
    TKB.xgsrizhi("快看点养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.yuncheapp.android.pearl")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    var TSD = (new Date()).getTime()
    var ddn = (new Date()).getTime()
    var zbt = random(25, 50)  //视频观看时长
    var ll = 0    //浏览次数
    var tem = 0
    var dd = random(0, 1)   //判断是看小视频还是广告
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
            launch("com.yuncheapp.android.pearl")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("视频").exists() && text("首页").exists() || text("推荐").exists() && text("娱乐").exists() || text("小视频").exists() && text("任务").exists()){
            TKB.xgsrizhi("首页1")
            if (dd == 0){
                if (tem == 0){
                    click(110, 1960)
                    sleep(300)
                    click(110, 1960)
                    sleep(2000)
                    tem = 1
                }
                log("首页看广告")
                if (text("推荐").exists() && text("首页").exists() || text("推荐").exists() && id("com.yuncheapp.android.pearl:id/channel_manage_btn").exists()){
                    toastLog("在首页浏览新闻")
                    bb = random(1, 2)
                    for(var ii = 0; ii < bb; ii++){
                        sleep(random(2000, 5000))
                        swipe(533,random(1660, 1000), 557,random(800, 400),random(400, 600))
                        sleep(random(2000, 5000))
                        toastLog("浏览首页内容")
                    }
                    if (text("广告").exists() || id("com.yuncheapp.android.pearl:id/btn_download").exists()){
                        toastLog("该界面有广告跟下载")
                        sleep(1000)
                    }else{
                        click(random(200, 800), random(400, 1600))
                        sleep(3000)
                        ll = ll  + 1 
                        if (ll > 15){
                            TKB.xgsrizhi("浏览次数够了刷新首页")
                            tem = 0
                            ll = 0
                            dd = random(0, 1)
                        }
                    }
                }
            }else{
                log("去看小视频")
                click(530, 1960)
                sleep(2000)
            }
        }

        if(id("com.yuncheapp.android.pearl:id/more").exists() && id("com.yuncheapp.android.pearl:id/collect").exists() || id("com.yuncheapp.android.pearl:id/comment_loc").exists() && id("com.yuncheapp.android.pearl:id/comment_input").exists()){
            toastLog("浏览新闻界面")
            TSD = (new Date()).getTime()
            bb = random(3, 8)
            for(var ii = 0; ii < bb; ii++){
                sleep(random(2000, 5000))
                swipe(533,random(1660, 1000), 557,random(800, 400),random(400, 600))
                sleep(random(2000, 5000))
                toastLog("浏览新闻内容界面")
            }
            back()
            sleep(2000)
        }
        if(text("直播").exists() && id("com.yuncheapp.android.pearl:id/iv_app").exists() || id("com.yuncheapp.android.pearl:id/series_avatar").exists() && id("com.yuncheapp.android.pearl:id/comment_icon").exists() && id("com.yuncheapp.android.pearl:id/like_icon").exists() || id("com.yuncheapp.android.pearl:id/series_avatar").exists() && text("推荐").exists() && text("直播").exists() || id("com.yuncheapp.android.pearl:id/comment_icon").exists() && id("com.yuncheapp.android.pearl:id/like_icon").exists()  && text("推荐").exists()){
            TKB.xgsrizhi("看视频界面")
            TSD = (new Date()).getTime()
            if (dd == 0){
                log("去首页看新闻")
                click(110, 1960)
                sleep(2000)
            }else{
                if (tem == 0){
                    if (text("推荐").exists()){
                        log("推荐")
                        click(240, 150)
                        sleep(300)
                        click(240, 150)
                        sleep(2000)
                    }else{
                        click(530, 1940)
                        sleep(300)
                        click(530, 1940)
                        sleep(2000)
                    }
                    tem = 1
                }
                ddn = (new Date()).getTime()   // zbt
                while(1){
                    if ((new Date()).getTime() - ddn > zbt*1000){
                        log("时间够了")
                        break
                    }else{
                        toastLog("观看视频中")
                        sleep(4000)
                    } 
                }
                swipe(533,1660, 557,300,random(400, 600))
                sleep(random(2000, 5000))
                ll = ll  + 1 
                if (ll > 15){
                    TKB.xgsrizhi("观看视频个数够了")
                    tem = 0
                    ll = 0
                    dd = random(0, 1)
                }
            }
        }
        zonghe()
    }
}

//快看点登录
function kkddl(){
    TKB.xgsrizhi("快看点登录")
    var baom = getPackageName("微信")
    if (baom == null){
        log("微信都没安装")
        return false
    }
    launch("com.yuncheapp.android.pearl")
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
             TKB.xgsrizhi("超时没注册成功")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.yuncheapp.android.pearl")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if(text("登录领现金").exists() && text("登录后边看边赚领红包").exists() || text("登录领现金").exists() && text("提现秒到账").exists()){
            TKB.xgsrizhi("登录领现金")
            click("登录领现金")
            sleep(2000)
        }
        if(text("推荐").exists() && text("首页").exists() || text("首页").exists() && text("小视频").exists() && text("任务").exists()){
            TKB.xgsrizhi("首页")
            click(970, 1940)
            // sleep(1000)
            // click("任务")
            sleep(2000)
        }
        if(id("com.yuncheapp.android.pearl:id/settings").exists() && id("com.yuncheapp.android.pearl:id/icon").exists() && text("微信登录").exists() || id("com.yuncheapp.android.pearl:id/settings").exists() && id("com.yuncheapp.android.pearl:id/icon").exists() && text("任务").exists()){
            TKB.xgsrizhi("点击微信登录")
            try {
                var ss = id("com.yuncheapp.android.pearl:id/icon").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
                sleep(1000)
            } catch(error) {
                TKB.xgsrizhi(error);
                sleep(2000)
            }
        }else{
            
            if(tem == 1 && id("com.yuncheapp.android.pearl:id/rl_button").exists() && text("首页").exists() || tem == 1 && text("任务").exists() || id("com.yuncheapp.android.pearl:id/avatar").exists() && id("com.yuncheapp.android.pearl:id/invite_code").exists() || id("com.yuncheapp.android.pearl:id/name").exists() && text("我的金币").exists() ){
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                sleep(5000)
                tem = 1
                if (text("领取").exists() && cs == 0){
                    TKB.xgsrizhi("领取")
                    click("领取")
                    sleep(1000)
                }else{
                    if (id("com.yuncheapp.android.pearl:id/iv_reward").exists() && cs == 0){
                        try {
                            TKB.xgsrizhi("领取2")
                            var ss = id("com.yuncheapp.android.pearl:id/iv_reward").findOnce().bounds();
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                            sleep(1000)
                        }catch(error){
                            TKB.xgsrizhi(error);
                            sleep(2000)
                        }
                    }
                }
                if (text("填写邀请码").exists()){
                    toastLog("填写邀请码")
                    try {
                        var ss = text("填写邀请码").findOnce().bounds();
                        if (ss.centerY() < 1750){
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                            sleep(1000)
                        }else{
                            log("下滑2")
                            swipe(500,1800, 486,300, 500)
                            sleep(2000)
                            cs = cs + 1
                        }
                    }catch(error){
                        TKB.xgsrizhi(error);
                        sleep(2000)
                    }
                }else{
                    log("下滑")
                    swipe(500,1800, 486,300, 500)
                    sleep(2000)
                    cs = cs + 1
                }
                if(cs > 3){
                    log("下滑次数够了")
                    return true
                }
            }
        }
        if (id("com.yuncheapp.android.pearl:id/ksad_video_page_close").exists()){
            try {
                TKB.xgsrizhi("看完广告关闭")
                var ss = id("com.yuncheapp.android.pearl:id/ksad_video_page_close").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
                sleep(1000)
            }catch(error){
                TKB.xgsrizhi(error);
                sleep(2000)
            }
        }
        

        if(text("填写邀请码").exists() && text("我也要邀请").exists() || text("请输入好友提供的邀请码").exists()){
            TKB.xgsrizhi("填写邀请码")
            setText("FR6FXE")
            sleep(500)
            click(500, 850)
            sleep(2000)
            TKB.qinglihh()
            return true
        }


        if(text("微信一键登录").exists()){
            TKB.xgsrizhi("微信一键登录")
            click("微信一键登录")
            sleep(2000)
        }


        if(text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }





        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }



        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
         TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime()- 50*1000
        var TJH = (new Date()).getTime()
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 3*55*1000){
                    log("激活设备")
                    TKB.xjihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwu = TKB.huoqurenwu(sbip, yhname, yhbh, xmxh)
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        renwu = false
                    }
                    if (renwu == true){
                        TKB.xgsrizhi("继续快看点任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有快看点任务")
                        TKB.qinglihh("com.ss.android.ugc.live")
                        sleep(2000)
                        TKB.xgsrizhi("执行完存停止数据2")
                        TKB.cunqusj("jiaoben","tingzhi")
                        java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        _THREADSS.interrupt()
                        
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
    try {
        bofangyy()
        TKB.xgsrizhi("执行快看点")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("快看点")
            if (baom == null){
                log("未安装快看点")
                var bbd = TKB.wdjxiazai("快看点", "2.1.0.261")
                if (bbd == false){
                    TKB.xgsrizhi("安装快看点不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
    
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = kkddl()
            if (wb == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "kuaikandian")
                if (rw == "养号"){
                    kkdyh()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            TKB.cunqusj("jiaoben","tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi")
            sleep(1000)
            java.lang.System.exit(0);
            _THREADSSxx.interrupt()
        });
    } catch(error) {
        log(error);
        TKB.cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000,2000))
    }
}









hszhixing()






// TKB.xgsrizhi(getClip()+"**")







