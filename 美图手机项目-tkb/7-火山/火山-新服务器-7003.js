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
var dqbaoming = "com.ss.android.ugc.live"   //该项目包名
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
    if(text("立即下载").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播2")
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
    if(text("不感兴趣？长按试试").exists()){
         TKB.xgsrizhi("不感兴趣？长按试试")
        back()
        sleep(500)
        back()
        sleep(2000)
    }
}

//火山养号
function hsyh(){
     TKB.xgsrizhi("火山养号")
    launch("com.ss.android.ugc.live")
    var RT = (new Date()).getTime()
    var stt = random(30, 50)
    var TSD = (new Date()).getTime()
    var zbt = (new Date()).getTime()   //直播的时间
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
           TKB.qinglihh("com.ss.android.ugc.live")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
           TKB.qinglihh("com.ss.android.ugc.live")
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/ac1").exists() || id("com.ss.android.ugc.live:id/a4w").exists() && id("com.ss.android.ugc.live:id/djd").exists()){
             TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                 TKB.xgsrizhi("刷新首页")
                var asa = random(1, 10)
                if (asa > 8){
                     TKB.xgsrizhi("点击同城栏")
                    click(620, 130)
                    sleep(100)
                    click(622, 134)
                }else{
                    if (asa == 8){
                         TKB.xgsrizhi("点击直播栏")
                        click(780, 130)
                        sleep(100)
                        click(790, 134)
                    }else{
                         TKB.xgsrizhi("点击视频栏")
                        click(440, 130)
                        sleep(100)
                        click(450, 134)
                    }
                }
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
        if(text("关注").exists() && desc("粉丝").exists() && id("com.ss.android.ugc.live:id/b4k").exists() || id("com.ss.android.ugc.live:id/b4j").exists() && id("com.ss.android.ugc.live:id/b4k").exists()){
             TKB.xgsrizhi("个人详情界面")
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            back()
            sleep(1000)
        }
        if(id("com.ss.android.ugc.live:id/wb").exists() && id("com.ss.android.ugc.live:id/b9o").exists() && id("com.ss.android.ugc.live:id/wz").exists() || text("关注").exists() && desc("评论").exists() && id("com.ss.android.ugc.live:id/wb").exists()){
             TKB.xgsrizhi("播放视频界面")
            var aasr = random(20, 50)
            var ssd = (new Date()).getTime()
            while(1){
                if ((new Date()).getTime() -ssd >  aasr * 1000){
                     TKB.xgsrizhi("看完了")
                    break
                }else{
                    toastLog("观看视频中")
                    sleep(3000)
                }
            }
            if (aasr > 48){
                 TKB.xgsrizhi("观看评论")
                click(970, 1270)
                sleep(1000)
            }else{
                var ssx = random(1, 50)
                if (ssx == 49){
                    toastLog("点赞视频")
                    click(970, 1050)
                    sleep(1000)
                }
                back()
            }
        }
        if(id("com.ss.android.ugc.live:id/u2").exists() && id("com.ss.android.ugc.live:id/v9").exists() && id("com.ss.android.ugc.live:id/w6").exists() || text("发送").exists() && text("赞").exists() && desc("关闭").exists()){
             TKB.xgsrizhi("评论界面")
            var bb = random(1, 5)
            if (text("暂无评论").exists()){
                 TKB.xgsrizhi("暂无评论")
            }else{
                for(var i = 0;i< bb ;i++){
                    swipe(533,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                if (random(1, 40) == 30){
                     TKB.xgsrizhi("评论赞")
                    try{
                        if (id("com.ss.android.ugc.live:id/cp6").exists()){
                            var ss = id("com.ss.android.ugc.live:id/cp6").findOnce().bounds();
                             TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    }catch(error) {
                        sleep(1001)
                         TKB.xgsrizhi(error);
                    }
                }
            }
            back()
            sleep(1000)
            back()
            sleep(1000)
        }
        if(text("直播已结束").exists() && id("com.ss.android.ugc.live:id/hp").exists() || id("com.ss.android.ugc.live:id/d3c").exists() && id("com.ss.android.ugc.live:id/hp").exists()){
             TKB.xgsrizhi("直播已经结束")
            back()
            sleep(2000)
        }
        if(id("com.ss.android.ugc.live:id/ahe").exists() && id("com.ss.android.ugc.live:id/wz").exists() || id("com.ss.android.ugc.live:id/text").exists() && desc("分享").exists()){
             TKB.xgsrizhi("直播界面")
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
        if(text("退出直播间").exists() && text("退出").exists() || text("退出直播间").exists() && text("关注并退出").exists()){
             TKB.xgsrizhi("退出直播间")
            click("退出")
            sleep(1000)
        }

        zonghe()
    }
}

//火山登录
function hsdl(){
     TKB.xgsrizhi("火山登录")
    launch("com.ss.android.ugc.live")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var tem = 1   //判断是微信还是微博授权
    var cs = 0    //微信多次授权未成功
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
           TKB.qinglihh("com.ss.android.ugc.live")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
           TKB.qinglihh("com.ss.android.ugc.live")
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("注册/登录").exists() && id("com.ss.android.ugc.live:id/cax").exists() || id("com.ss.android.ugc.live:id/c6q").exists() && id("com.ss.android.ugc.live:id/title").exists()){
             TKB.xgsrizhi("首页点登录")
            hszc()
            launch("com.ss.android.ugc.live")
        }else{
            if(id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/ac1").exists() || id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/djd").exists()){
                 TKB.xgsrizhi("首页-登录成功")
               TKB.qinglihh("com.ss.android.ugc.live")
                return true
            }
        }
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            return false
        }
        if(id("com.ss.android.ugc.live:id/wb").exists() && id("com.ss.android.ugc.live:id/b9o").exists() && id("com.ss.android.ugc.live:id/wz").exists() || text("关注").exists() && desc("评论").exists() && id("com.ss.android.ugc.live:id/wb").exists()){
             TKB.xgsrizhi("播放视频界面")
            back()
            sleep(2000)
        }
        if(id("com.tencent.mm:id/djr").exists() && text("确定").exists()){
             TKB.xgsrizhi("登录失败")
            click("确定")
            sleep(1000)
        }
        if(text("手机号注册登录").exists() && text("取消").exists()){
             TKB.xgsrizhi("手机号注册登录")
            click("取消")
            sleep(1000)
        }

        if(text("切换账号").exists() && text("确定").exists() || text("微博").exists() && text("确定").exists()){
             TKB.xgsrizhi("确定微博登录")
            click("确定")
            sleep(1000)
        }
    
        if(desc("微信登录").exists() && text("其它登录方式").exists()){
             TKB.xgsrizhi("其它登录方式")
            try{
                if(id("com.ss.android.ugc.live:id/si").exists()){
                     TKB.xgsrizhi("阅读抖音协议")
                    var ss = id("com.ss.android.ugc.live:id/si").findOnce().checked();
                    if (ss == false){
                        var css = id("com.ss.android.ugc.live:id/si").findOnce().bounds()
                        click(css.centerX(), css.centerY());
                        sleep(2000)
                    }
                }
                if (tem == 1){
                     TKB.xgsrizhi("微信登录")
                    var ss = desc("微信登录").findOnce().bounds();
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    cs = cs + 1
                    if (cs > 4 ){
                        tem = 2
                    }
                }else{
                     TKB.xgsrizhi("微博登录")
                    var ss = desc("微博登录").findOnce().bounds();
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                    TKB.xgsrizhi(error);
            }

        }else{
            if(text("下一步").exists() && text("点击展开其它登录方式").exists() || id("com.ss.android.ugc.live:id/wz").exists() && id("com.ss.android.ugc.live:id/cot").exists()){
                 TKB.xgsrizhi("点击展开其它登录方式")
                try{
                var ss = text("点击展开其它登录方式").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
                }catch(error) {
                    sleep(1001)
                     TKB.xgsrizhi(error);
                }
            }
        }

        

        zonghe()
    }
}

//火山注册
function hszc(){
    log("火山注册")
    launch("com.ss.android.ugc.live") //启动
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
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
           TKB.qinglihh("com.ss.android.ugc.live")
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
                    log("我是token：" + token)
                    haoma = TKB.getxhhaoma(22, token)
                    if (haoma == false){
                        log("获取号码失败")
                        return false
                    }
                }else{
                    log("获取token失败")
                    return false
                }
            // }
            tem = 1
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
           TKB.qinglihh("com.ss.android.ugc.live")
            sleep(3000)
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("注册/登录").exists() && id("com.ss.android.ugc.live:id/cax").exists() || id("com.ss.android.ugc.live:id/c6q").exists() && id("com.ss.android.ugc.live:id/title").exists()){
            log("首页点登录")
            click(100, 140)
            sleep(2000)
        }else{
            if(id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/ac1").exists() || id("com.ss.android.ugc.live:id/ev").exists() && id("com.ss.android.ugc.live:id/djd").exists()){
                log("首页-登录成功")
               TKB.qinglihh("com.ss.android.ugc.live")
            //    TKB.upfwqhm(sbip, yhname , yhbh, haoma)
                TKB.laheixhpt(22, haoma, token)
                return true
            }
        }
        if(id("com.ss.android.ugc.live:id/wb").exists() && id("com.ss.android.ugc.live:id/b9o").exists() && id("com.ss.android.ugc.live:id/wz").exists() || text("关注").exists() && desc("评论").exists() && id("com.ss.android.ugc.live:id/wb").exists()){
            log("播放视频界面")
            back()
            sleep(2000)
        }
        if(id("com.tencent.mm:id/djr").exists() && text("确定").exists()){
            log("登录失败")
            click("确定")
            sleep(1000)
        }
        if(text("手机号注册登录").exists() && text("取消").exists()){
            log("手机号注册登录")
            click("取消")
            sleep(1000)
        }

        if(text("切换账号").exists() && text("确定").exists() || text("微博").exists() && text("确定").exists()){
            log("确定微博登录")
            click("确定")
            sleep(1000)
        }
        if(text("下一步").exists() && text("其他登录方式").exists() || text("下一步").exists() && text("点击展开其它登录方式").exists() || id("com.ss.android.ugc.live:id/wz").exists() && id("com.ss.android.ugc.live:id/cot").exists()){
            log("输入手机号码")
            if (bb == 0){
                log("先去获取号码")
                bb= 1
            }else{
                if(id("com.ss.android.ugc.live:id/si").exists()){
                    log("阅读抖音协议")
                    var ss = id("com.ss.android.ugc.live:id/si").findOnce().checked();
                    if (ss == false){
                        var css = id("com.ss.android.ugc.live:id/si").findOnce().bounds()
                        click(css.centerX(), css.centerY());
                        sleep(2000)
                    }
                }
                setText(haoma)
                click("下一步")
                sleep(3000)
            }
        }

        if(id("com.ss.android.ugc.live:id/alh").exists() && text("下一步").exists() && text("验证码").exists() || id("com.ss.android.ugc.live:id/bok").exists() && id("com.ss.android.ugc.live:id/bv9").exists() && text("下一步").exists() ){
            log("输入验证码界面")
            if(text("获取验证码").exists()){
                click("获取验证码")
                sleep(3000)
            }
            yzm = TKB.getxhyzm(22, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText(yzm)
                sleep(1000)
                click("下一步")
                sleep(5000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    TKB.laheixhpt(22, haoma, token)
                    log("四次了都没获取到验证码")
                    tem = 0
                    cs = 0
                    TKB.qinglihh("com.ss.android.ugc.live")
                    sleep(3000)
                    launch("com.ss.android.ugc.live")
                    sleep(2000)
                    return false
                }
            }
        }

        if(id("com.ss.android.ugc.live:id/wz").exists() && text("使用密码登录").exists()){
            log("输入验证码界面2")
            if(text("获取验证码").exists()){
                click("获取验证码")
                sleep(3000)
            }
            yzm = TKB.getxhyzm(22, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText(yzm)
                sleep(1000)
                click(500, 750)
                sleep(5000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    TKB.laheixhpt(22, haoma, token)
                    log("四次了都没获取到验证码重新拿号")
                    tem = 0
                    cs = 0
                   TKB.qinglihh("com.ss.android.ugc.live")
                    sleep(3000)
                    launch("com.ss.android.ugc.live")
                    sleep(2000)
                }
            }
        }
        if(desc("按住左边按钮拖动完成上方拼图").exists() || desc("请完成下列验证后继续").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(240,1300,600,1300, 1200);
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
            // TKB.laheixhpt(22, haoma, token)
            
        }
        if(text("跳过").exists()){
            log("跳过")
            click("跳过")
            sleep(1000)
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
                        TKB.xgsrizhi("继续火山任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有火山任务")
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
        TKB.xgsrizhi("执行火山")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("抖音火山版")
            if (baom == null){
                log("未安装抖音火山版")
                var bbd = TKB.wdjxiazai("抖音火山版", "8.4.3")
                if (bbd == false){
                    TKB.xgsrizhi("安装抖音火山版不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = hsdl()
            if (wb == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "huoshan")
                if (rw == "养号"){
                    hsyh()
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




//  TKB.xgsrizhi(getClip()+"**")







