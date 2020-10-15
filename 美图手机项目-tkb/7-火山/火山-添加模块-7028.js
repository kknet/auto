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
                                 TKB.xgsrizhi("继续火山任务")
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
                             TKB.xgsrizhi("服务器上没有火山任务")
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
    //          TKB.xgsrizhi("当前运行脚本个数：" + gs)   
    //         sleep(5000)
    //         if ((new Date()).getTime() -bst > 5*1000){
    //             if (gs > 1){
    //                  TKB.xgsrizhi("已经运行了两个脚本-退出")
    //                 files.write("/sdcard/meituconfig.txt", config_temp);
    //                 var dd = engines.myEngine()
    //                 dd.forceStop()
    //                 sleep(1000)
    //                 // exit()
    //             }else{
    //                  TKB.xgsrizhi("重新更新运行")
    //                 meitxx()
    //             }
    //         }
    //     } catch(error) {
    //          TKB.xgsrizhi(error);
    //         sleep(random(3000,8000))
    //     }
    // }
}

//*******************************************************对接服务器*****************************************************************


function hszhixing(){
     TKB.xgsrizhi("执行火山")

    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
       TKB.qinglihh("com.ss.android.ugc.live")
        var wb = hsdl()
        if (wb == true){
            hsyh()
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
    var baom = getPackageName("抖音火山版")
    if (baom == null){
        log("未安装抖音火山版")
        var bbd = TKB.wdjxiazai("抖音火山版", "8.4.3")
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







