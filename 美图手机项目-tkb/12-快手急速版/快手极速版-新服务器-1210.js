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
var dqbaoming = "com.kuaishou.nebula"   //该项目包名
var xmxh = "12"               //项目序号


//********************************************************下载播放mp3***************************************************************

//********************************************************微视项目333***************************************************************

function zonghe(){
    if(text("允许").exists()){
        TKB.xgsrizhi("允许")
        click("允许")   
        sleep(1000)
    }
    if(text("知道了").exists()){
        TKB.xgsrizhi("知道了")
        click("知道了")   
        sleep(1000)
    }
    if(text("我知道了").exists()){
        TKB.xgsrizhi("我知道了")
        click("我知道了")   
        sleep(1000)
    }
    if(text("点击重播").exists()){
        TKB.xgsrizhi("点击重播")
        click("点击重播")   
        sleep(2000)
    }
    if(text("重试").exists() && text("取消").exists()){
        TKB.xgsrizhi("重试")
        click("重试")   
        sleep(1000)
    }
    if(text("立即邀请").exists() && id("com.kuaishou.nebula:id/close").exists()){
        TKB.xgsrizhi("立即邀请")
        try{
            var css = id("com.kuaishou.nebula:id/close").findOnce().bounds()
            click(css.centerX(), css.centerY());
            sleep(2000)
        }catch(error){
            toastLog(error);
            sleep(random(1000,3000))
        }
    }
    if(text("同意并继续").exists() && text("不同意").exists()){
        TKB.xgsrizhi("同意并继续")
        click("同意并继续")   
        sleep(1000)
    }
    if(text("用户隐私政策").exists()){
        TKB.xgsrizhi("用户隐私政策")
        click(500, 1400)   
        sleep(2000)
    }
    if(text("取消关注").exists() && text("取消").exists()){
        TKB.xgsrizhi("取消关注")
        click("取消")   
        sleep(1000)
    }
    if(desc("立即签到").exists() && text("立即签到").exists()){
        TKB.xgsrizhi("立即签到")
        click(500, 1500)  
        sleep(500) 
        back()
        sleep(2500)
    }
    if(text("妥妥好评").exists() && text("我要吐槽").exists()){
        TKB.xgsrizhi("妥妥好评")
        back()
        sleep(2000)
    }
    if(desc("打开签到提醒+100金币").exists() && text("打开签到提醒+100金币").exists()){
        TKB.xgsrizhi("打开签到提醒+100金币")
        back()
        sleep(2000)
    }
    if(text("立即领取").exists()){
        TKB.xgsrizhi("立即领取")
        back() 
        sleep(1000)
    }
    if(text("哎呀，页面出错啦~").exists() && text("重试").exists()){
        log("重试")
        click("重试")
        sleep(3000)
    }
    if(text("立即更新").exists()){
        TKB.xgsrizhi("立即更新")
        back()
        sleep(1000)
    }
    if(text("继续看视频赚钱").exists()){
        TKB.xgsrizhi("继续看视频赚钱")
        back()
        sleep(2000)
    }
    if(text("关闭应用").exists() && text("等待").exists()){
        TKB.xgsrizhi("等待")
        click("等待")   
        sleep(1000)
    }
}

//下载图片
function dowtupian(){
    TKB.xgsrizhi("下载图片")
    var dirpath = "/sdcard/";
    files.ensureDir(dirpath);
    var tem = 0
    var Tb = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 5*60*1000){
                log("超时没下载完成")
                return false
            }
            var filePath = files.join(dirpath, '1.png');
            let imgurl = 'https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/erweima.jpg';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                return true
            } else {
                TKB.xgsrizhi("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
    }
    TKB.xgsrizhi("下载图片完成")
}

//微信扫码下载
function wxsm(){
    TKB.xgsrizhi("微信扫码下载")
    var baom = getPackageName("微信")
    var ccd = dowtupian()
    if (baom == null || ccd == false){
        TKB.xgsrizhi("还未安装微信或没下载完成图片")
        toastLog("还未安装微信")
        return false
    }
    launch("com.tencent.mm")
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    while(1){
        sleep(200)
        baom = getPackageName("快手极速版")
        if (baom != null){
            TKB.xgsrizhi("已经安装了快手极速版")
            log(baom)
            sleep(2000)
            TKB.qinglihh("com.tencent.mm")
            return true
        }
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时没有扫码下载完成")
            TKB.qinglihh("com.tencent.mm")
            sleep(3000)
            launch("com.tencent.mm")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 30*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.tencent.mm")
            return false
        }
        if(text("微信").exists() && text("通讯录").exists() && text("发现").exists() ){
            TKB.xgsrizhi("首页")
            click(670, 1970)  
            sleep(1000)
        }
        if(text("扫一扫").exists() && text("朋友圈").exists() && text("发现").exists() || text("扫一扫").exists() && text("通讯录").exists() && text("发现").exists() ){
            TKB.xgsrizhi("扫一扫")
            click("扫一扫")   
            sleep(1000)
        }

        if(text("轻触照亮").exists() && id("com.tencent.mm:id/gg2").exists() || id("com.tencent.mm:id/drq").exists() && id("com.tencent.mm:id/f2z").exists() || text("轻触照亮").exists() && id("com.tencent.mm:id/f2z").exists()){
            TKB.xgsrizhi("扫码界面33")
            click(930, 1700)
            sleep(2000)
        }
        if(text("二维码").exists() && text("封面").exists() && text("我的二维码").exists() || text("轻触照亮").exists() && text("翻译").exists() && id("com.tencent.mm:id/m1").exists() ){
            TKB.xgsrizhi("扫码界面2")
            click(1000, 125)   
            sleep(1000)
        }

        if(text("从相册选取二维码").exists() && text("取消").exists()){
            TKB.xgsrizhi("从相册选区二维码")
            click(670, 1630)  
            sleep(1000)
            click("从相册选取二维码")
            sleep(1000)
        }

        if(text("下载").exists() && text("取消").exists()){
            TKB.xgsrizhi("下载2")
            click("下载")
            sleep(2000)
        }

        if(text("所有图片").exists() && id("com.tencent.mm:id/dn").exists() || text("所有图片").exists() && id("com.tencent.mm:id/jg").exists()){
            TKB.xgsrizhi("选择照片界面")
            if (id("com.tencent.mm:id/evu").exists()  || id("com.tencent.mm:id/jg").exists() ){
                TKB.xgsrizhi("点击照片")
            }else{
                toastLog("可能没照片")
                sleep(2000)
            }
            click(350, 300)
            sleep(2000)
        }
        if(text("立即下载").exists() && text("快手极速版").exists() || id("com.tencent.mm:id/dn").exists() && text("立即下载").exists()){
            TKB.xgsrizhi("立即下载")
            click("立即下载")   
            sleep(1000)
        }
        if(text("普通下载").exists() && text("快手极速版").exists() || id("com.tencent.mm:id/dn").exists() && text("普通下载").exists()){
            TKB.xgsrizhi("普通下载")
            click("普通下载")   
            sleep(2000)
            try{
                var css = text("普通下载").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
            }catch(error){
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            sleep(1000)
        }

        if(text("下载提示").exists() && text("确定").exists() || text("确定").exists() && text("安全下载").exists()){
            TKB.xgsrizhi("下载提示")
            click("确定")   
            sleep(2000)
        }

        if(text("下载").exists() && text("快手极速版").exists()  && id("com.tencent.mm:id/bcd").exists() || text("下载").exists() && text("快手极速版").exists()  && id("com.tencent.mm:id/g7j").exists()){
            TKB.xgsrizhi("点击下载")
            click(500, 1000)   
            sleep(2000)
        }

        if(text("取消下载").exists() && text("快手极速版").exists()){
            TKB.xgsrizhi("取消下载")
            toastLog("正在下载中")
            sleep(5000)
        }

        if (text("设置").exists() && text("取消").exists() ){
            log("设置")   
            click("设置")
            sleep(2000)
        }
        if (text("去设置").exists() && text("取消").exists() ){
            log("去设置")   
            click("去设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists() ){
            log("安装")   
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists() ){
            log("已经安装成功")  
            click("完成") 
            sleep(1000)
            // return true
        }
        if(text("继续安装").exists() && text("取消").exists()){
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if(text("下一步").exists() && text("取消").exists()){
            log("下一步")
            click("下一步")
            sleep(2000)
        }

        if (id("android:id/switch_widget").exists() && desc("向上导航").exists() ){
            log("添加安装权限")   
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false){
                var aa = id("android:id/switch_widget").findOnce().bounds();
                log(aa.centerX())
                log(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
            }else{
                log("返回")
                back()
                sleep(1000)
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

//快手急速登录
function kuaisdl(){
    log("快手极速登录")
    TKB.xgsrizhi("快手极速登录")
    // var baom = getPackageName("快手极速版")
    var tem = 0  //判定有没有登录成功
    var ccs = 0
    var bbw = 0
    // if (baom == null){
        // toastLog("没有快手极速版")
    var baom = getPackageName("微信")
    if (baom == null){
        toastLog("没有微信")
        return false
        // }else{
        //     toastLog("打开微信下载快手")
        //     var ssb = wxsm()
        //     if (ssb == false){
        //         log("没下载成功")
        //         return false
        //     }
        // }
    }
    var hhk = 0
    launch("com.kuaishou.nebula")
    sleep(2000)
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    while(1){
        sleep(200)
        if ((new Date()).getTime() - TC > 8*60*1000){
            TKB.xgsrizhi("超时没有登录成功")
            TKB.qinglihh()
            sleep(3000)
            launch("com.kuaishou.nebula")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 13*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh()
            if (tem == 1){
                toastLog("已经登录")
                return true
            }
            return false
        }
        if(id("com.kuaishou.nebula:id/login_text").exists()){
            TKB.xgsrizhi("首页点登录")
            try{
                var css = id("com.kuaishou.nebula:id/login_text").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
            }catch(error){
                toastLog(error);
                sleep(random(1000,3000))
            }
        }else{
            if(id("com.kuaishou.nebula:id/action_right_frame").exists()){
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                sleep(2000)
                tem = 1
                if(id("com.kuaishou.nebula:id/red_packet").exists()){
                    log("红包")
                    try{
                        var ss = id("com.kuaishou.nebula:id/red_packet").findOnce().bounds();
                        TKB.xgsrizhi(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }catch(error) {
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }
                }else{
                    log("没看到红包")
                    return true
                }
                // return true
            }
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("登录成功")
            tem = 1
            sleep(2000)
            if(id("com.kuaishou.nebula:id/red_packet").exists()){
                log("红包")
                try{
                    var ss = id("com.kuaishou.nebula:id/red_packet").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }else{
                log("没看到红包")
                return true
            }

            // return true
        }
        if(text("其他登录方式").exists() && text("微信登录").exists() || text("手机号登录").exists() && text("微信登录").exists()){
            TKB.xgsrizhi("微信登录")
            click(190, 1990)
            sleep(1000)
            click("微信登录")
            sleep(2000)
       }
       if(desc("填写邀请码").exists() || desc("现金收益").exists()){
            TKB.xgsrizhi("金额界面")
            if (bbw < 2){
                sleep(4000)
                try{
                    var w = className("android.view.View").boundsInside(510, 200, 1030, 350).findOnce();
                    if (w.desc() != 0 && w.desc() != "0" && w.desc() != ""){
                        TKB.upjine(sbip, yhname, yhbh, "kuaishoujs", w.desc())
                        bbw = 10
                    }
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                bbw = bbw + 1
            }
            try{
                var ss = desc("填写邀请码").findOnce().bounds();
                TKB.xgsrizhi(ss)
                click(900, ss.centerY() + 30);
                sleep(2000)
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            ccs = ccs + 1
            if (ccs > 3 && tem == 1){
                log("已经邀请过了")
                return true
            }
        }
        if(desc("提交领现金").exists() || text("填邀请码领现金").exists()){
            TKB.xgsrizhi("提交领现金")
            // sleep(1000)
            // setText("26ygc4i")
            // sleep(500)
            // click(500, 1120)
            // sleep(2000)
            // back()
            return true
        }

        if(text("其他方式登录").exists() && text("一键登录").exists()){
            TKB.xgsrizhi("其他方式登录")
            click("其他方式登录")
            sleep(2000)
        }
        if(text("登录").exists() && desc("微信登录").exists()){
            TKB.xgsrizhi("微信登录2")
            try{
                var css = desc("微信登录").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
            }catch(error){
                toastLog(error);
                sleep(random(1000,3000))
            }
        }
        if(text("确认登录").exists() ){
            TKB.xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("拖动滑块").exists() ){
            TKB.xgsrizhi("拖动滑块")
            sleep(3000)
            swipe(120,960,680,965, 1200);
            sleep(3000)
            back()
            sleep(2000)
        }

        if(text("继续看视频赚钱").exists() ){
            TKB.xgsrizhi("继续看视频赚钱")
            back()
            sleep(1000)
        }
        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
        }


        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(150,540,600,540, 1200);
                sleep(2000)
                swipe(250,1300,600,1300, 1200);
                sleep(2000)
                hhk = 1
            }else{
                var ssrf = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - ssrf > 60*1000){
                        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                            log("还在滑块界面")
                            back()
                            return false
                        }
                        break
                    }
                    if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                        log("还在滑块界面2")
                        toastLog("请手动滑滑快。。。")
                        sleep(2000)
                    }else{
                        log("不在滑块界面了")
                        break
                    }
                    sleep(10000)
                }
            }
        }

        zonghe()
    }
}

//快手养号
function kuaisyh(){
    log("快手养号")
    TKB.xgsrizhi("快手养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.kuaishou.nebula")
    sleep(2000)
    var hhk = 0
    var stt = random(35, 50)
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    while(1){
        sleep(200)
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时没有登录成功")
            TKB.qinglihh("com.kuaishou.nebula")
            sleep(3000)
            launch("com.kuaishou.nebula")
            sleep(2000)
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > stt*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.kuaishou.nebula")
            return false
        }

        if(id("com.kuaishou.nebula:id/comment_count_view").exists() && id("com.kuaishou.nebula:id/like_count_view").exists() || id("com.kuaishou.nebula:id/action_right_frame").exists() && text("关注").exists()){
            TKB.xgsrizhi("首页")
            TC = (new Date()).getTime()
            var TTS = (new Date()).getTime()
            var cssd = random(15, 30)
            if (id("com.kuaishou.nebula:id/ad_download_progress").exists()){
                toastLog("广告看长点时间")
                cssd = random(25, 35)
            }
            while(1){
                if ((new Date()).getTime() - TTS > cssd*1000){
                    TKB.xgsrizhi("观看完视频超时")
                    break
                }else{
                    toastLog("观看视频中...")
                    sleep(4000)
                }
                if(text("拖动滑块").exists() || desc("拖动滑块").exists()){
                    TKB.xgsrizhi("拖动滑块")
                    sleep(3000)
                    swipe(120,960,700,965, 1200);
                    sleep(3000)
                    back()
                    sleep(2000)
                }
            }
            cssd = random(1, 120)
            if (cssd == 50){
                toastLog("点赞")
                click(990, 1470)
                sleep(1000)
            }
            cssd = random(1, 200)
            if (cssd == 50){
                toastLog("关注")
                click("关注")
                sleep(1000)
            }
            swipe(500,1720,680,400, 1200);
            sleep(2000)
        }
        if(text("其他登录方式").exists() && text("微信登录").exists() || text("手机号登录").exists() && text("微信登录").exists()){
            TKB.xgsrizhi("微信登录")
            click(190, 1990)
            sleep(1000)
            click("微信登录")
            sleep(2000)
       }
       if(text("其他方式登录").exists() && text("一键登录").exists()){
            TKB.xgsrizhi("其他方式登录")
            click("其他方式登录")
            sleep(2000)
        }
        if(text("登录").exists() && desc("微信登录").exists()){
            TKB.xgsrizhi("微信登录2")
            try{
                var css = desc("微信登录").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
            }catch(error){
                toastLog(error);
                sleep(random(1000,3000))
            }
        }
        if(text("确认登录").exists() ){
            TKB.xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("继续看视频赚钱").exists() ){
            TKB.xgsrizhi("继续看视频赚钱")
            back()
            sleep(1000)
        }
        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }

        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
        }
        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(150,540,600,540, 1200);
                sleep(2000)
                swipe(250,1300,600,1300, 1200);
                sleep(2000)
                hhk = 1
            }else{
                var ssrf = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - ssrf > 60*1000){
                        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                            log("还在滑块界面")
                            back()
                            return false
                        }
                        break
                    }
                    if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                        log("还在滑块界面2")
                        toastLog("请手动滑滑快。。。")
                        sleep(2000)
                    }else{
                        log("不在滑块界面了")
                        break
                    }
                    sleep(10000)
                }
            }
        }

        zonghe()
    }


}

//快手绑定
function kuaisbd(){
    log("快手绑定")
    TKB.xgsrizhi("快手绑定")
    TKB.qinglihh()
    sleep(2000)
    launch("com.kuaishou.nebula")
    sleep(2000)
    var hhk = 0
    var stt = random(35, 50)
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    var zh = "18615956932"
    var yzm = false
    var tem = 0
    var bb = 0
    while(1){
        sleep(200)
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时没有绑定成功")
            TKB.qinglihh("com.kuaishou.nebula")
            sleep(3000)
            launch("com.kuaishou.nebula")
            sleep(2000)
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > stt*60*1000){
            TKB.xgsrizhi("超时没有注册成功退出")
            TKB.qinglihh("com.kuaishou.nebula")
            return false
        }
        if (tem == 0 && bb == 1){
            TKB.xgsrizhi("去拿手机账号")

            tem = 1
        }
        if(id("com.kuaishou.nebula:id/comment_count_view").exists() && id("com.kuaishou.nebula:id/like_count_view").exists() || id("com.kuaishou.nebula:id/action_right_frame").exists() && text("关注").exists()){
            TKB.xgsrizhi("首页")
            click(60, 150)
            sleep(2000)
        }
        if(text("私信").exists() && text("设置").exists() && id("com.kuaishou.nebula:id/tab_avatar").exists() || id("com.kuaishou.nebula:id/tab_name").exists() && text("设置").exists() && text("动态").exists()){
            TKB.xgsrizhi("设置界面")
            click("设置")
            sleep(2000)
        }
        
        if(text("绑定手机号").exists() && text("帐号与安全").exists() && text("隐私设置").exists() || text("帐号").exists() && text("设置").exists() && text("清除缓存").exists()){
            TKB.xgsrizhi("设置绑定账号界面")
            if (text("绑定").exists()){
                TKB.xgsrizhi("还未绑定手机")
                click("绑定")
                sleep(2000)
            }else{
                try{
                    if (id("com.kuaishou.nebula:id/entry_sub_text").drawingOrder("4").exists()){
                        TKB.xgsrizhi(id("com.kuaishou.nebula:id/entry_sub_text").drawingOrder("4").findOnce().text())
                        TKB.xgsrizhi("已经绑定手机了")
                        toastLog("已经绑定手机了")
                        sleep(2000)
                        back()
                        return true
                    }
                }catch(error){
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
        }
        if(text("绑定手机号").exists() && text("下一步").exists() && id("com.kuaishou.nebula:id/country_code_tv").exists() || text("下一步").exists() && id("com.kuaishou.nebula:id/country_code_layout").exists()){
            TKB.xgsrizhi("输入手机号码")
            if (bb == 0){
                TKB.xgsrizhi("先去拿号")
                bb = 1
            }else{
                setText(zh)
                sleep(500)
                click(500, 550)
                sleep(500)
                click("下一步")
                sleep(3000)
            }
        }
        if(text("输入验证码").exists() && text("确定").exists() || text("请输入验证码").exists()){
            TKB.xgsrizhi("输入验证码界面")
            if (text("获取验证码").exists()){
                click("获取验证码")
                sleep(3000)
            }
            yzm = "523689"
            if (yzm != false){
                setText(yzm)
                sleep(500)
                click(500, 800)
                sleep(3000)
            }
        }

        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("继续看视频赚钱").exists() ){
            TKB.xgsrizhi("继续看视频赚钱")
            back()
            sleep(1000)
        }
        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }

        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
        }
        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(150,540,600,540, 1200);
                sleep(2000)
                swipe(250,1300,600,1300, 1200);
                sleep(2000)
                hhk = 1
            }else{
                var ssrf = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - ssrf > 60*1000){
                        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                            log("还在滑块界面")
                            back()
                            return false
                        }
                        break
                    }
                    if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                        log("还在滑块界面2")
                        toastLog("请手动滑滑快。。。")
                        sleep(2000)
                    }else{
                        log("不在滑块界面了")
                        break
                    }
                    sleep(10000)
                }
            }
        }

        zonghe()
    }
}

//快手急速提现
function kuaistx(){
    TKB.xgsrizhi("快手急速提现")
    // var baom = getPackageName("快手极速版")
    var tem = 0  //判定有没有登录成功
    var ccs = 0
    var bbw = 0
    var hhk = 0
    launch("com.kuaishou.nebula")
    sleep(2000)
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    while(1){
        sleep(200)
        if ((new Date()).getTime() - TC > 4*60*1000){
            TKB.xgsrizhi("超时没有登录成功")
            TKB.qinglihh()
            sleep(3000)
            launch("com.kuaishou.nebula")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 13*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh()
            return false
        }
        if(id("com.kuaishou.nebula:id/comment_count_view").exists() && id("com.kuaishou.nebula:id/like_count_view").exists() || id("com.kuaishou.nebula:id/action_right_frame").exists() && text("关注").exists()){
            TKB.xgsrizhi("首页")
            click(60, 150)
            sleep(2000)
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("首页")
            sleep(2000)
            if(id("com.kuaishou.nebula:id/red_packet").exists()){
                log("红包")
                try{
                    var ss = id("com.kuaishou.nebula:id/red_packet").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }else{
                log("没看到红包")
                click(70, 150);
                sleep(2000)
            }
        }
        if(text("去赚钱").exists() && text("动态").exists() || text("去赚钱").exists() && text("消息").exists()){
            log("去赚钱")
            click("去赚钱");
            sleep(2000)
        }
        if(desc("提交领现金").exists() || text("填邀请码领现金").exists()){
            TKB.xgsrizhi("提交领现金")
            // sleep(1000)
            // setText("26ygc4i")
            // sleep(500)
            // click(500, 1120)
            // sleep(2000)
            // back()
            return true
        }

        if(text("其他方式登录").exists() && text("一键登录").exists()){
            TKB.xgsrizhi("其他方式登录")
            click("其他方式登录")
            sleep(2000)
        }
        if(desc("现金收益").exists() && desc("金币收益").exists() || desc("现金收益").exists() && desc("新手任务").exists()){
            TKB.xgsrizhi("现金收益")
            if (desc("去提现").exists()){
                try{
                    var css = desc("去提现").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                }catch(error){
                    toastLog(error);
                    sleep(random(1000,3000))
                }
            }else{
                try{
                    var css = desc("现金收益").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                }catch(error){
                    toastLog(error);
                    sleep(random(1000,3000))
                }
            }
        }
        if(text("提现").exists() && desc("3元").exists() || desc("立即提现").exists() && desc("3元").exists()){
            TKB.xgsrizhi("提现界面")
            try{
                ccs = ccs + 1
                var css = desc("3元").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
                click(500, 1920);
                sleep(2000)
            }catch(error){
                toastLog(error);
                sleep(random(1000,3000))
            }
            if(ccs > 4){
                log("点击提现的次数够了")
                return false
            }

        }
        if(desc("支付宝").exists() && desc("微信").exists()){
            TKB.xgsrizhi("提取")
            click(500, 900);
            sleep(2000)
            ccs = ccs + 1
            if(ccs > 5){
                log("点击提现的次数够了")
                return false
            }
        }
        if(desc("您尚未绑定手机号，需要绑定手机号之后才能提现。").exists()){
            TKB.xgsrizhi("未绑定手机号")
            back()
            sleep(2000)
            return false
        }

        if(text("登录").exists() && desc("微信登录").exists()){
            TKB.xgsrizhi("微信登录2")
            try{
                var css = desc("微信登录").findOnce().bounds()
                click(css.centerX(), css.centerY());
                sleep(2000)
            }catch(error){
                toastLog(error);
                sleep(random(1000,3000))
            }
        }
        
        if(text("确认登录").exists()){
            TKB.xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("继续看视频赚钱").exists() ){
            TKB.xgsrizhi("继续看视频赚钱")
            back()
            sleep(1000)
        }
        if(text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
        }


        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
            log("滑块界面")
            if (hhk == 0){
                sleep(2000)
                swipe(150,540,600,540, 1200);
                sleep(2000)
                swipe(250,1300,600,1300, 1200);
                sleep(2000)
                hhk = 1
            }else{
                var ssrf = (new Date()).getTime()
                while(1){
                    if ((new Date()).getTime() - ssrf > 60*1000){
                        if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                            log("还在滑块界面")
                            back()
                            return false
                        }
                        break
                    }
                    if(desc("拖动滑块").exists() || text("拖动滑块").exists()){
                        log("还在滑块界面2")
                        toastLog("请手动滑滑快。。。")
                        sleep(2000)
                    }else{
                        log("不在滑块界面了")
                        break
                    }
                    sleep(10000)
                }
            }
        }

        zonghe()
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50*1000
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
                        TKB.xgsrizhi("继续快手任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有快手任务")
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

//*******************************************************新服务器*********************************************************************

//*******************************************************对接服务器*****************************************************************

//执行美图项目
function weishiz(){
    try {
        bofangyy()
        toastLog("执行快手极速版任务")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("快手极速版")
            if (baom == null){
                log("未安装快手极速版")
                var bbd = TKB.wdjxiazai("快手极速版", "2.3.0.231")
                if (bbd == false){
                    TKB.xgsrizhi("安装快手极速版不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var ks = kuaisdl()
            if (ks == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "kuaishoujs")
                if (rw == "养号"){
                    log("快手养号")
                    kuaisyh()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            TKB.cunqusj("jiaoben","tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi")
            java.lang.System.exit(0);
            sleep(1000)
            _THREADSSxx.interrupt()
        });
    } catch(error) {
        log(error);
        TKB.cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000,2000))
    }
}


weishiz()




// sleep(1000)
// ws()
// dlqq()
// var ss = TKB.getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(drawingOrder("25").findOnce().text())
// TKB.xgsrizhi(baoming)
// TKB.xgsrizhi(drawingOrder(9).findOnce().text())
TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()
sleep(1000)






