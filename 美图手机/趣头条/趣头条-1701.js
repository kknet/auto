
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
var xmxh = "17"               //项目序号


//*******************************************************火山养号 *****************************************************************

function zonghe(){
    if(text("知道了").exists()){
         TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if(text("先去逛逛").exists()){
        TKB.xgsrizhi("先去逛逛")
        click("先去逛逛")
        sleep(2000)
    }
    if(text("以后再说").exists()){
        TKB.xgsrizhi("以后再说")
       click("以后再说")
       sleep(2000)
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
    if(text("恭喜获得").exists() && id("com.jifen.qukan:id/vh").exists()){
        TKB.xgsrizhi("恭喜获得")
        back()
        sleep(2000)
    }
    if(text("恭喜您获得一个新人红包！").exists() && text("点击领钱").exists()){
        TKB.xgsrizhi("点击领钱")
        click("点击领钱")
        sleep(2000)
    }
    if(text("立即下载").exists() && text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
       back()
       sleep(2000)
    }
    if(id("com.jifen.qukan:id/a16").exists()){
        TKB.xgsrizhi("知道了")
        try{
            ss = id("com.jifen.qukan:id/a16").findOnce().bounds()
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

//趣头条养号
function qttyh(){
    TKB.xgsrizhi("趣头条养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.jifen.qukan")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    var TSD = (new Date()).getTime()
    var ll =  random(10, 20)  //浏览次数
    var tem = 0
    var bss = random(1, 2)
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
            launch("com.jifen.qukan")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("任务").exists() && text("刷新").exists() && text("我的").exists() || text("视频").exists() && text("小视频").exists() && text("我的").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (bss == 1){
                log("去看新闻")
                if(tem == 0){
                    TKB.xgsrizhi("刷新")
                    click(100, 1960)
                    sleep(300)
                    click(100, 1960)
                    tem = 1
                }
                swipe(random(400, 600), random(1200, 1750), random(400, 600), random(300, 800), random(500, 2000))
                sleep(3000)
                if (text("广告").exists()){
                    TKB.xgsrizhi("看到广告了")
                    swipe(random(400, 600), random(1200, 1750), random(400, 600), random(300, 800), random(500, 2000))
                    sleep(3000)
                }
                if(text("推荐").exists() && id("com.jifen.qukan:id/air").exists() || id("com.jifen.qukan:id/bur").exists()){
                    log("新闻界面")
                    try{
                        if (text("领取").exists()){
                            TKB.xgsrizhi("领取")
                            click("领取")
                            sleep(3000)
                        }   
                        var ss = TKB.getAllTexts()
                        for(j = 0,len=ss.length; j < len; j++){
                            if (ss[j].length > 25){
                                TKB.xgsrizhi("标题长度够长" + ss[j])
                                var aa = text(ss[j]).findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1870){
                                    log(aa.centerX())
                                    log(aa.centerY())
                                    click(300, aa.centerY())
                                    sleep(3000)
                                }
                            }
                        }
                    } catch(error) {
                        log(error);
                        sleep(2000)
                    }
                }else{
                    TKB.xgsrizhi("点击头天新闻")
                    click(100, 1960)
                    sleep(3000)
                }
            }else{
                log("去小视频")
                if(tem == 0){
                    TKB.xgsrizhi("刷新2")
                    click(540, 1960)
                    sleep(300)
                    click(540, 1960)
                    tem = 1
                }
                if(id("com.jifen.qukan:id/qo").exists() && id("com.jifen.qukan:id/amf").exists() || id("com.jifen.qukan:id/am7").exists() && id("com.jifen.qukan:id/qj").exists()){
                    TKB.xgsrizhi("看小视频界面")
                    var zbt = random(25, 50)  //视频观看时长
                    var rdd = (new Date()).getTime()
                    while(1){
                        if (id("com.jifen.qukan:id/aww").exists()){
                            try{
                                ss = id("com.jifen.qukan:id/aww").findOnce().bounds()
                                TKB.xgsrizhi(ss)
                                click(ss.centerX(), ss.centerY());
                                sleep(2000)
                            }catch(error) {
                                sleep(1001)
                                TKB.xgsrizhi(error);
                            }
                        }
                        if(text("恭喜获得").exists() && id("com.jifen.qukan:id/vh").exists()){
                            TKB.xgsrizhi("恭喜获得")
                            back()
                            sleep(2000)
                        }
                        if ((new Date()).getTime() - rdd > zbt * 1000){
                            TKB.xgsrizhi("观看时间够了")
                            break
                        }else{
                            TKB.xgsrizhi("观看视频中...")
                            toastLog("观看视频中...")
                            sleep(4000)
                        }
                    }
                    swipe(random(400, 600), random(1600, 1750), random(400, 600), random(300, 500), random(500, 800))
                    sleep(2000)
                    ll = ll - 1
                }else{
                    TKB.xgsrizhi("点击小视频")
                    click(540, 1960)
                    sleep(3000)
                }
            }
        }
        if(id("com.jifen.qukan:id/i2").exists() && id("com.jifen.qukan:id/k5").exists() || id("com.jifen.qukan:id/bp_").exists() && id("com.jifen.qukan:id/bos").exists()){
            TKB.xgsrizhi("浏览新闻界面")
            var dsv = random(10, 15)
            if (id("com.jifen.qukan:id/aww").exists()){
                try{
                    ss = id("com.jifen.qukan:id/aww").findOnce().bounds()
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
            for(j = 0,len=dsv; j < len; j++){
                if(text("恭喜获得").exists() && id("com.jifen.qukan:id/vh").exists()){
                    TKB.xgsrizhi("恭喜获得")
                    back()
                    sleep(2000)
                }
                swipe(random(400, 600), random(1200, 1750), random(400, 600), random(300, 1200), random(500, 2000))
                sleep(3000, 5000)
            }
            back()
            sleep(3000)
            ll = ll - 1
        }
        if (ll < 1){
            TKB.xgsrizhi("重置")
            ll =  random(10, 20)  //浏览次数
            tem = 0
            bss = random(1, 2)
        }
        zonghe()
    }
}

//趣头条登录
function qttdl(){
    TKB.xgsrizhi("趣头条登录")
    launch("com.jifen.qukan")
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    var tem = 0
    var cs = 0
    var dds = 0
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
             TKB.xgsrizhi("超时没登录成功")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.jifen.qukan")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("任务").exists() && text("刷新").exists() && text("我的").exists() || text("视频").exists() && text("小视频").exists() && text("我的").exists()){
            TKB.xgsrizhi("首页")
            click(970, 1960)
            sleep(2000)
        }
        
        if(text("微信登录").exists() && text("微信一键登录").exists() || text("微信一键登录").exists() && text("其他方式登录").exists()){
            TKB.xgsrizhi("微信一键登录")
            click("微信一键登录")
            sleep(2000)
        }

        if(text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意登录")
            click("同意")
            sleep(5000)
        }
        if(id("com.jifen.qukan:id/asr").exists() && text("提现兑换").exists() || id("com.jifen.qukan:id/asq").exists() && text("我的金币").exists()){
            TKB.xgsrizhi("登录成功")
            return true
        }

        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        if(text("我知道了").exists() && text("仅浏览").exists()){
            TKB.xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
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
                        TKB.xgsrizhi("继续趣头条任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有趣头条任务")
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

function qttzhixing(){
    try {
        bofangyy()
        TKB.xgsrizhi("执行趣头条")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("趣头条")
            if (baom == null){
                log("未安装趣头条")
                var bbd = TKB.wdjxiazai("趣头条", "3.9.73.000.0415.1742")
                if (bbd == false){
                    TKB.xgsrizhi("安装趣头条不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = qttdl()
            if (wb == true){
                qttyh()
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            TKB.cunqusj("jiaoben","tingzhi")
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


qttzhixing()


// TKB.xgsrizhi(getClip()+"**")

// qttyh()
// bofangyy()
// hsyh()
// meitxx()
// exit()











// ws()
// dlqq()
// var ss = TKB.getAllTexts()
//  TKB.xgsrizhi(ss)
// var baoming = currentPackage()
//  TKB.xgsrizhi(baoming)
// qqyanghao()
// xiugtx()
// TKB.xgsrizhi(getClip()+"**")







