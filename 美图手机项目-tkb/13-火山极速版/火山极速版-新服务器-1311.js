
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
var xmxh = "13"               //项目序号


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
    if(text("加载失败，点击屏幕重新加载").exists()){
        TKB.xgsrizhi("加载失败，点击屏幕重新加载")
        click("加载失败，点击屏幕重新加载")
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
    if(id("com.ss.android.ugc.livelite:id/h_").exists() && desc("立即下载").exists()){
        TKB.xgsrizhi("进到广告下载")
        back()
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
            zbt = random(15, 30)
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
        if(id("com.ss.android.ugc.livelite:id/a2l").exists() && text("领取").exists()){
            TKB.xgsrizhi("领取")
            click("领取")
            sleep(2000)
        }
        if(id("com.ss.android.ugc.livelite:id/h_").exists() && id("com.ss.android.ugc.livelite:id/mz").exists() && id("com.ss.android.ugc.livelite:id/fc").exists()){
            TKB.xgsrizhi("进到广告详情界面了")
            back()
            sleep(3000)
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

        if(text("立即下载").exists() && id("com.ss.android.ugc.livelite:id/qp").exists() || text("点击重播").exists() || text("查看详情").exists() && id("com.ss.android.ugc.livelite:id/qp").exists()){
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
    var dd = 0
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    var tem = 0
    var ss = 0
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
                if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                    sleep(3000)
                    TKB.xgsrizhi("上传金额")
                    try {
                        var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                        if (node != "0" && node != "" && node != 0){
                            TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                            dd =  10
                        }
                    } catch (error) {
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }
                    dd = dd +1
                }
                click(980, 130)
                sleep(2000)
                tem = 1
            }
        }
        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                sleep(3000)
                TKB.xgsrizhi("上传金额")
                try {
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                        dd =  10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            }
            click(900, 300)
            sleep(3000)
        }
        if(text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                sleep(3000)
                TKB.xgsrizhi("上传金额")
                try {
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                        dd =  10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            }
            click(910, 220)
            sleep(300)
            click("去领钱")
            sleep(3000)
        }
        if(text("金币").exists() && text("兑换").exists() || desc("金币").exists() && desc("兑换").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("输入邀请码").exists()){
            TKB.xgsrizhi("金币金额界面")
            try {
                if (desc("领8元现金").exists()){
                    log("领8元现金")
                    var node = desc("领8元现金").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(2000)
                }
                if (desc("开宝箱得金币").exists() && ss == 0){
                    log("开宝箱得金币")
                    var node = desc("开宝箱得金币").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                    ss = 1
                }else{
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
                }
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
        if(desc("新用户金币大礼包").exists() || desc("领10000金币").exists()){
            TKB.xgsrizhi("新用户金币大礼包")
            try {
                var node = desc("领10000金币").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if(desc("看视频 领双倍金币").exists() || desc("sign_in_invite_29_4728d377d6df283649605ce5e0dc3895").exists()){
            log("看视频领双倍金币")
            click(1010, 300)
            sleep(3000)
        }
        if(desc("你的口令已生成").exists() && desc("去粘贴").exists()){
            log("去粘贴")
            click(900, 560)
            sleep(3000)
        }
        if(text("关闭广告").exists()){
            log("关闭广告")
            click("关闭广告")
            sleep(3000)
        }
        if(text("温馨提示").exists() && text("马上提交").exists() || desc("温馨提示").exists() && desc("马上提交").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("马上提交").exists()){
            log("输入邀请码界面")
            // setText("253730775")
            // sleep(1000)
            // click(500, 980)
            // sleep(300)
            // click("马上提交")
            // sleep(5000)
            // back()
            // sleep(1000)
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
    var ewx = 0
    var dd = 0
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
            ewx = ewx + 1
            if (text("微信登录").exists()){
                log("微信登录存在")
            }else{
                if(ewx > 5){
                    ewx = 0
                    log("微信登录不存在")
                    TKB.qinglihh()
                    sleep(3000)
                    launch("com.ss.android.ugc.livelite")
                }
            }
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
                if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                    sleep(3000)
                    TKB.xgsrizhi("上传金额")
                    try {
                        var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                        if (node != "0" && node != "" && node != 0){
                            TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                            dd =  10
                        }
                    } catch (error) {
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }
                    dd = dd + 1
                }
                click(980, 130)
                sleep(2000)
            }
        }
        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                sleep(3000)
                TKB.xgsrizhi("上传金额")
                try {
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                        dd =  10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            }
            click(900, 300)
            sleep(3000)
        }
        if(text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2){
                sleep(3000)
                TKB.xgsrizhi("上传金额")
                try {
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        TKB.upjine(sbip, yhname, yhbh, "huoshanjs", node)
                        dd =  10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            }
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
                }catch(error){
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
        }
        if(text("温馨提示").exists() && text("马上提交").exists() || desc("温馨提示").exists() && desc("马上提交").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("马上提交").exists()){
            log("输入邀请码界面")
            // setText("253730775")
            // sleep(1000)
            // click(500, 980)
            // sleep(300)
            // click("马上提交")
            // sleep(5000)
            // back()
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
        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        
        zonghe()
    }
}

//火山极速版绑定
function hsbd(){
    log("火山极速版绑定")
    launch("com.ss.android.ugc.livelite") //启动
    sleep(4000)
    var ewx = 0
    var RT = (new Date()).getTime()
    var stt = random(15, 20)
    var TSD = (new Date()).getTime()
    var zh = "18614256986"
    var yzm = false
    var tem = 0
    var bb = 0
    var ssd = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
        } 
        if (tem== 0 && bb == 1){
            TKB.xgsrizhi("去拿号")

            tem = 1
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
            ewx = ewx + 1
            if (text("微信登录").exists()){
                log("微信登录存在")
            }else{
                if(ewx > 5){
                    ewx = 0
                    log("微信登录不存在")
                    TKB.qinglihh()
                    sleep(3000)
                    launch("com.ss.android.ugc.livelite")
                }
            }
        }
        if(text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            if (text("设置").exists()){
                TKB.xgsrizhi("看到设置")
                click("设置")
                sleep(2000)
            }
        }
        if(text("我的消息").exists() && text("好友管理").exists() || text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            if (text("设置").exists()){
                TKB.xgsrizhi("看到设置")
                click("设置")
                sleep(2000)
            }else{
                TKB.xgsrizhi("下滑")
                swipe(557,1630, 533,400, random(400, 1000))
                sleep(1000)
            }
        }
        if(text("账号管理").exists() && text("清理缓存").exists() || text("关于火山").exists() && text("账号管理").exists()){
            TKB.xgsrizhi("账号管理")
            click("账号管理")
            sleep(2000)
        }
        if(text("账号管理").exists() && text("手机号").exists() || text("手机号").exists() && id("com.ss.android.ugc.livelite:id/h_").exists()){
            TKB.xgsrizhi("手机号绑定")
            if (text("修改密码").exists()){
                toastLog("已经绑定手机号")
                return true
            }else{
                if (ssd == 0){
                    TKB.xgsrizhi("去注册")
                    click("手机号")
                    sleep(2000)
                }else{
                    TKB.xgsrizhi("先返回一次")
                    sleep(4000)
                    back()
                    sleep(2000)
                }
            }
        }

        if(text("手机认证").exists() && text("手机号").exists() && text("提交").exists() || text("手机号").exists() && text("验证码").exists()){
            TKB.xgsrizhi("输入手机号界面")
            if(bb == 0){
                TKB.xgsrizhi("先去拿号")
                sleep(2000)
                bb = 1
            }else{
                TKB.xgsrizhi("输入手机号")
                setText([0], zh)
                sleep(1000)
                if(text("发送验证码").exists()){
                    TKB.xgsrizhi("发送验证码")
                    click("发送验证码")
                    sleep(2000)
                }
                yzm = "123456"
                if (yzm != false){
                    setText([1], yzm)
                    sleep(500)
                    click(500, 750)
                    sleep(5000)
                }
            }
        }

        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        
        zonghe()
    }
}

//火山极速版提现
function hsjstx(){
    log("火山极速版提现")
    launch("com.ss.android.ugc.livelite") //启动
    sleep(4000)
    var ewx = 0
    var dd = 0
    var RT = (new Date()).getTime()
    var stt = random(11, 15)
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
                if (text("提现兑换").exists()){
                    dd = dd + 1
                    sleep(4000)
                    TKB.xgsrizhi("提现兑换")
                    try{
                        var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                        if (node != "0" && node != "" && node != 0){
                            if (node > 15){
                                TKB.xgsrizhi("钱够了去提现")
                                var ss = text("提现兑换").findOnce().bounds();
                                TKB.xgsrizhi(ss)
                                click(ss.centerX(), ss.centerY());
                                sleep(2000)
                            }else{
                                TKB.xgsrizhi("钱不够" + node)
                                return false
                            }
                        }
                    }catch(error) {
                        sleep(1001)
                         TKB.xgsrizhi(error);
                    }
                    if (dd > 4 ){
                        log("识别金额次数够了")
                        return false
                    }
                }else{
                    TKB.xgsrizhi("进入个人界面")
                    var ss = id("com.ss.android.ugc.livelite:id/hy").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            }
        }

        if(text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()){
            TKB.xgsrizhi("我的资料界面")
            if (text("提现兑换").exists()){
                dd = dd + 1
                sleep(4000)
                TKB.xgsrizhi("提现兑换")
                try{
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        if (node > 15){
                            TKB.xgsrizhi("钱够了去提现")
                            var ss = text("提现兑换").findOnce().bounds();
                            TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }else{
                            TKB.xgsrizhi("钱不够" + node)
                            return false
                        }
                    }
                }catch(error) {
                    sleep(1001)
                     TKB.xgsrizhi(error);
                }
                if (dd > 4 ){
                    log("识别金额次数够了")
                    return false
                }
            }
        }
        if(desc("微信提现").exists() && desc("提现").exists() || desc("提现").exists() && desc("支付宝提现").exists()){
            TKB.xgsrizhi("提现界面")
            try{
                desc("15.00").findOnce(1).click()   //点击提现15块钱
                sleep(2000)
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if(desc("提现失败").exists() && desc("处理中").exists()){
            log("提现失败")
            back()
            sleep(2000)
            back()
            sleep(2000)
            return false
        }
        if(desc("提示").exists() && desc("知道了").exists()){
            TKB.xgsrizhi("知道了")
            try{
                desc("知道了").findOnce().click()
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            dd = dd + 1
            if(dd > 8){
                TKB.xgsrizhi("余额可能不足")
                return false
            }
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
        if(text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()){
            TKB.xgsrizhi("我的资料界面2")
            if (text("提现兑换").exists()){
                dd = dd + 1
                sleep(4000)
                TKB.xgsrizhi("提现兑换")
                try{
                    var node = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (node != "0" && node != "" && node != 0){
                        if (node > 15){
                            TKB.xgsrizhi("钱够了去提现")
                            var ss = text("提现兑换").findOnce().bounds();
                            TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }else{
                            TKB.xgsrizhi("钱不够" + node)
                            return false
                        }
                    }
                }catch(error) {
                    sleep(1001)
                     TKB.xgsrizhi(error);
                }
                if (dd > 4 ){
                    log("识别金额次数够了")
                    return false
                }
            }
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
                        TKB.xgsrizhi("继续火山极速版任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有火山极速版任务")
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
        TKB.xgsrizhi("执行火山极速版")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("火山极速版")
            if (baom == null){
                log("未安装火山极速版")
                var bbd = TKB.wdjxiazai("火山极速版", "7.1.0")
                if (bbd == false){
                    TKB.xgsrizhi("安装火山极速版不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var wb = hsjsdl()
            if (wb == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "huoshanjs")
                if (rw == "养号"){
                    hsjsbyh()
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










// xiugtx()
//  TKB.xgsrizhi(getClip()+"**")







