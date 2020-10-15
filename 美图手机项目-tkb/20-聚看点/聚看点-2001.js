
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
var dqbaoming = "com.xiangzi.jukandian"   //该项目包名  版本 2.100
var xmxh = "20"               //项目序号


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
    if(text("立即领取").exists()){
        TKB.xgsrizhi("立即领取")
        back()
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
    if(text("输入邀请码").exists()){
        TKB.xgsrizhi("输入邀请码")
        back()
        sleep(2000)
    }
    if(text("签到").exists() && text("提醒").exists()){
        TKB.xgsrizhi("签到")
        back()
        sleep(2000)
    }
    if(text("恭喜您获得一个新人红包").exists()){
        TKB.xgsrizhi("恭喜您获得一个新人红包")
        back()
        sleep(2000)
    }
    if(text("奖励提醒").exists()){
        TKB.xgsrizhi("奖励提醒")
        click(400, 1320)
        sleep(2000)
    }
    if(text("这个圈圈转满一圈，就可以获得金币奖励哦").exists()){
        TKB.xgsrizhi("这个圈圈转满一圈，就可以获得金币奖励哦")
        click("这个圈圈转满一圈，就可以获得金币奖励哦")
        sleep(300)
        back()
        sleep(3000)
    }
    if(id("com.xiangzi.jukandian:id/mine_starlert_close").exists()){
        TKB.xgsrizhi("关闭提示")
        try{
            ss = id("com.xiangzi.jukandian:id/mine_starlert_close").findOnce().bounds()
            TKB.xgsrizhi(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if(text("忽略").exists() && text("查看详情").exists()){
        TKB.xgsrizhi("忽略")
        click("忽略")
        sleep(2000)
    }
}

//聚看点养号
function jkdyh(){
    TKB.xgsrizhi("聚看点养号")
    // TKB.qinglihh()
    sleep(2000)
    launch("com.xiangzi.jukandian")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    var TSD = (new Date()).getTime()
    var ll =  random(10, 20)  //浏览次数
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
            launch("com.xiangzi.jukandian")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("红包不要了").exists()){
            TKB.xgsrizhi("红包不要了")
            click("红包不要了")
            sleep(2000)
        }
        if(text("推荐").exists() && text("视频").exists() || text("任务中心").exists() && text("视频").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
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
            if (text("广告").exists() || text("查看详情").exists()){
                TKB.xgsrizhi("看到广告了")
                swipe(random(400, 600), random(1200, 1750), random(400, 600), random(300, 800), random(500, 2000))
                sleep(3000)
            }
            
            if(text("推荐").exists() || id("com.xiangzi.jukandian:id/item_artical_three_title_tv").exists()){
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
                                // click(300, aa.centerY())
                                click(ss[j])
                                sleep(3000)
                            }
                        }
                    }
                } catch(error) {
                    log(error);
                    sleep(2000)
                }
            }else{
                TKB.xgsrizhi("进到首页")
                click(100, 1960)
                sleep(3000)
            }
        }
        if(text("返回").exists() && id("com.xiangzi.jukandian:id/img_iszan").exists() || id("com.xiangzi.jukandian:id/ll_web_bottom_back").exists() && id("com.xiangzi.jukandian:id/fl_comment_layout").exists()){
            TKB.xgsrizhi("浏览新闻界面")
            var dsv = random(10, 15)
            for(j = 0,len=dsv; j < len; j++){
                if(desc("查看全文，奖励更多").exists()){
                    TKB.xgsrizhi("查看全文，奖励更多")
                    try{
                        ss = desc("查看全文，奖励更多").findOnce().bounds()
                        TKB.xgsrizhi(ss.centerX())
                        TKB.xgsrizhi(ss.centerY())
                        if (ss.centerY() > 300 && ss.centerY() < 2000){
                            click(ss.centerX(), ss.centerY());
                        }
                        sleep(2000)
                    }catch(error) {
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }
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
        }
        zonghe()
    }
}

//聚看点登录
function jkddl(){
    TKB.xgsrizhi("聚看点登录")
    launch("com.xiangzi.jukandian")
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
            launch("com.xiangzi.jukandian")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if(text("推荐").exists() && text("视频").exists() || text("任务中心").exists() && text("视频").exists()){
            TKB.xgsrizhi("首页")
            click(970, 1960)
            sleep(2000)
        }
        if(text("微信登录").exists() && text("未登录").exists()){
            TKB.xgsrizhi("微信登录")
            click("微信登录")
            sleep(2000)
        }

        if(id("com.xiangzi.jukandian:id/userInfoName").exists() && text("我的邀请码").exists() || id("com.xiangzi.jukandian:id/userInfoHead").exists() && text("今日金币").exists()){
            TKB.xgsrizhi("登录成功")
            return true
        }
        if(text("手机号登录").exists() && text("立即开始").exists() || text("手机号登录").exists() && text("点击这里").exists()){
            TKB.xgsrizhi("立即开始")
            click(510, 1492)
            sleep(2000)
        }

        if(text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意登录")
            click("同意")
            sleep(5000)
        }
        if(text("绑定手机").exists() && text("返回").exists() || text("绑定手机").exists() && text("确认").exists()){
            TKB.xgsrizhi("绑定手机")
            return false
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
                        TKB.xgsrizhi("继续聚看点任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有聚看点任务")
                        TKB.qinglihh()
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

function jkdzhixing(){
    try {
        bofangyy()
        TKB.xgsrizhi("执行聚看点")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("聚看点")
            if (baom == null){
                log("未安装聚看点")
                var bbd = TKB.wdjxiazai("聚看点", "7.1.1")
                if (bbd == false){
                    TKB.xgsrizhi("安装聚看点不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = jkddl()
            if (wb == true){
                jkdyh()
                // var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "shuabao")
                // if (rw == "养号"){
                //     sbyh()
                // }
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


jkdzhixing()


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







