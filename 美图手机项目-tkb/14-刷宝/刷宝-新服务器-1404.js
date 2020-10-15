
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
var xmxh = "14"               //项目序号




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
                click(750, 1960)
                sleep(2000)
                // return true
            }
        }
        if (desc("当前余额").exists() && desc("我的元宝").exists() || desc("提现").exists() && desc("兑现").exists()){
            TKB.xgsrizhi("任务界面")
            try{
                if(desc("去邀请").exists() && desc("元").exists() || text("去邀请").exists() && text("恭喜获得").exists() ||  text("元").exists() && text("恭喜获得").exists()){
                    TKB.xgsrizhi("恭喜获得")
                    click(860, 610)
                    sleep(1000)
                    back()
                    sleep(3000)
                }
                back()
                if(desc("面对面邀请").exists() && desc("复制链接").exists() && desc("取消").exists()){
                    TKB.xgsrizhi("取消")
                    try{
                        if (desc("取消").exists()){
                            var ss = desc("取消").findOnce().bounds();
                            TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    }catch(error) {
                        sleep(1001)
                         TKB.xgsrizhi(error);
                    }
                }
                sleep(3000)
                if(desc("立即签到").exists()){
                    TKB.xgsrizhi("立即签到")
                    var ss = desc("立即签到").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
                if(desc("开箱领元宝").exists()){
                    TKB.xgsrizhi("开箱领元宝")
                    var ss = desc("开箱领元宝").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(950, ss.centerY());
                    sleep(2000)
                }
            }catch(error){
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            if (tem == 1){
                toastLog("登录成功退出")
                return true
            }
        }
        if(desc("去邀请").exists() && desc("元").exists() || text("去邀请").exists() && text("恭喜获得").exists() ||  text("元").exists() && text("恭喜获得").exists()){
            TKB.xgsrizhi("恭喜获得")
            back()
            sleep(3000)
        }
        if(desc("面对面邀请").exists() && desc("复制链接").exists() && desc("取消").exists()){
            TKB.xgsrizhi("取消")
            try{
                if (desc("取消").exists()){
                    var ss = desc("取消").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                 TKB.xgsrizhi(error);
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
                        TKB.xgsrizhi("继续刷宝任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有刷宝任务")
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
        TKB.xgsrizhi("执行刷宝")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("刷宝短视频")
            if (baom == null){
                log("未安装刷宝短视频")
                var bbd = TKB.wdjxiazai("刷宝", "2.100")
                if (bbd == false){
                    TKB.xgsrizhi("安装刷宝不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = sbdl()
            if (wb == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "shuabao")
                if (rw == "养号"){
                    sbyh()
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







