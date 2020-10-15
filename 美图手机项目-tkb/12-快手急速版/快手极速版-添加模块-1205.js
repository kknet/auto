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
var xmxh = "98"               //项目序号


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
    if(text("重试").exists() && text("取消").exists()){
        TKB.xgsrizhi("重试")
        click("重试")   
        sleep(1000)
    }
    if(text("同意并继续").exists() && text("不同意").exists()){
        TKB.xgsrizhi("同意并继续")
        click("同意并继续")   
        sleep(1000)
    }
    if(text("取消关注").exists() && text("取消").exists()){
        TKB.xgsrizhi("取消关注")
        click("取消")   
        sleep(1000)
    }
    if(text("立即领取").exists()){
        TKB.xgsrizhi("立即领取")
        back() 
        sleep(1000)
    }
    if(text("立即更新").exists()){
        TKB.xgsrizhi("立即更新")
        back()
        sleep(1000)
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
        if(text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
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
    var baom = getPackageName("快手极速版")
    var tem = 0  //判定有没有快手急速版
    if (baom == null){
        toastLog("没有快手极速版")
        baom = getPackageName("微信")
        if (baom == null){
            toastLog("没有微信")
            return false
        }else{
            toastLog("打开微信下载快手")
            var ssb = wxsm()
            if (ssb == false){
                log("没下载成功")
                return false
            }
        }
    }
    launch("com.kuaishou.nebula")
    sleep(2000)
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    while(1){
        sleep(200)
        if ((new Date()).getTime() - TC > 8*60*1000){
            TKB.xgsrizhi("超时没有登录成功")
            TKB.qinglihh("com.kuaishou.nebula")
            sleep(3000)
            launch("com.kuaishou.nebula")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 13*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.kuaishou.nebula")
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
                return true
            }
        }
        if(desc("发现").exists() && desc("同城").exists() || desc("发现").exists() && desc("关注").exists()){
            toastLog("登录成功")
            return true
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
       if(text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
        }


        zonghe()
    }








}

//快手养号
function kuaisyh(){
    log("快手养号")
    var aac = kuaisdl()
    if (aac == false){
        return false
    }
    TKB.xgsrizhi("快手养号")
    launch("com.kuaishou.nebula")
    sleep(2000)
    var stt = random(25, 35)
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
            var cssd = random(20, 40)
            while(1){
                if ((new Date()).getTime() - TTS > cssd*1000){
                    TKB.xgsrizhi("观看完视频超时")
                    break
                }else{
                    toastLog("观看视频中...")
                    sleep(4000)
                }
                if(text("拖动滑块").exists() ){
                    TKB.xgsrizhi("拖动滑块")
                    sleep(3000)
                    swipe(120,960,700,965, 1200);
                    sleep(3000)
                    back()
                    sleep(2000)
                }
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
        if(text("拖动滑块").exists() ){
            TKB.xgsrizhi("拖动滑块")
            sleep(3000)
            swipe(120,960,700,965, 1200);
            sleep(3000)
            back()
            sleep(2000)
        }

        if(text("继续看视频赚钱").exists() ){
            TKB.xgsrizhi("继续看视频赚钱")
            back()
            sleep(1000)
        }
       if(text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }

        if(desc("返回").exists() && text("重试").exists() || text("重试").exists() && text("请检查网络连接是否正常").exists()){
            toastLog("请检查网络连接是否正常")
            back()
            sleep(2000)
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
                // TKB.xgsrizhi("停止当前运行的脚本")
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
        var ssee = (new Date()).getTime() - 100*1000
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
                                TKB.xgsrizhi("继续快手任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh(dqbaoming)
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有快手任务")
                            TKB.qinglihh(dqbaoming)
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
    //         TKB.xgsrizhi("当前运行脚本个数：" + gs)   
    //         sleep(5000)
    //         if ((new Date()).getTime() -bst > 5*1000){
    //             if (gs > 1){
    //                 TKB.xgsrizhi("已经运行了两个脚本-退出")
    //                 files.write("/sdcard/meituconfig.txt", config_temp);
    //                 var dd = engines.myEngine()
    //                 dd.forceStop()
    //                 sleep(1000)
    //                 // exit()
    //             }else{
    //                 TKB.xgsrizhi("重新更新运行")
    //                 meitxx()
    //             }
    //         }
    //     } catch(error) {
    //         TKB.xgsrizhi(error);
    //         sleep(random(3000,8000))
    //     }
    // }
}

//*******************************************************新服务器*********************************************************************

//上传账号
function upzhanghao(zhanghao){
    TKB.xgsrizhi("上传账号数据..."+yhname+"--"+yhbh+"--"+zhanghao)
    var ts = (new Date()).getTime()  
    var sbb = "zhanghao_weishi"
    while(1){
        if (zhanghao == "1234"){
            TKB.xgsrizhi("没获取到账号")
            return false
        }
        try {
            if ((new Date()).getTime() - ts > 30*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/douyin.com/tp5/public/index/Myapi/addZhangHaonew/tableflag/"+sbb+"/usr/"+yhname+"/shebeihao/"+yhbh+"/zhanghao/"+zhanghao
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0 || r_obj["code"] == 1){
                    TKB.xgsrizhi("上传账号信息成功")
                    return true
                }else{
                    TKB.xgsrizhi("上传账号信息失败")
                    toast("上传账号信息失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
            sleep(random(10, 10000))
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
    }
}

//上传数据
//上传点赞、粉丝、关注总数  ziduan = guanzhushuliang //关注数量   name = "抖音账号"   ziduan =  fsshuliang//粉丝数量
//ziduan = 	jianjie //简介  ziduan = touxiang //头像   ziduan = shipin //视频 ziduan = zan //点赞数量
//ziduan = 	shipinbofangliang //视频播放量  ziduan = quanzhong //权重   ziduan = nickname //昵称  ziduan = sex //性别
function scshuju(name, ziduan, shuju){
    TKB.xgsrizhi("上传账号数据..."+yhname+"--"+yhbh)
    TKB.xgsrizhi(name + "----"+ziduan+"----"+shuju)
    var Tb = (new Date()).getTime()
    // var name = "888----008"   //账号名称
    // var ziduan = "sex"
    // var shuju = "1"
    var sbb = "zhanghao_weishi"
    while (1){
        if (shuju == "1234"){
            TKB.xgsrizhi("没获取到数据")
            return false
        }
        try {
            if ((new Date()).getTime() - Tb > 20*1000){
                TKB.xgsrizhi("超时退出")
                break
            }
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/gxzhanghaonew/tableflag/"+sbb+"/usr/"+yhname+"/count/"+name+"/ziduan/"+ziduan+"/val/"+shuju
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi("我是返回的信息"+ r_obj)
                TKB.xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0){
                    TKB.xgsrizhi("上传信息成功")
                    break
                }else{
                    TKB.xgsrizhi("上传信息成功失败")
                    toast("增上传信息成功失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}


//*******************************************************对接服务器*****************************************************************

//执行美图项目
function weishiz(){
    toastLog("执行快手极速版任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        TKB.qinglihh()
        // var rw =  TKB.hqrenwu(sbip, "weishiflag", yhname, yhbh)
        try{
            kuaisyh()
        }catch(error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
        // meitxx()
        TKB.xgsrizhi("执行完存停止数据")
        _THREADSS.interrupt()
        TKB.cunqusj("jiaoben","tingzhi")
        files.write("/sdcard/jiaoben.txt", "tingzhi")
        java.lang.System.exit(0);
        sleep(1000)
        _THREADSSxx.interrupt()
    });
    // exit()
}

try {
    bofangyy()
    weishiz()
} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}



// dlweishi()
// hqrenwu()


// var aa = "https://h5.weishi.qq.com/weishi/personal/1534912246005756/wspersonal?_wv=1&id=1534912246005756&spid=1577236699995158"
// tiaozhuangz(aa)



// images.captureScreen("/sdcard/1.png")
// bofangyy()
// wsyanghao()
// meitxx()
// exit()
// sleep(1000)




sleep(1000)
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






