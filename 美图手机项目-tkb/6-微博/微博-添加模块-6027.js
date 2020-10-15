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
var dqbaoming = "com.sina.weibo"   //该项目包名
var xmxh = "6"               //项目序号



//********************************************************下载播放mp3***************************************************************

//*******************************************************微博项目 *****************************************************************

function zonghe(){
    if(text("不了，谢谢").exists()){
        TKB.xgsrizhi("不了，谢谢")
        click("不了，谢谢")
        sleep(1000)
    }
    if(text("用户协议和隐私条款").exists()){
        TKB.xgsrizhi("用户协议和隐私条款")
        click(500, 1480)
        sleep(1000)
    }
    if(text("我知道了").exists()){
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(1000)
    }
    if(text("为你推荐以下博主").exists()){
        TKB.xgsrizhi("为你推荐以下博主")
        for(var i = 0;i< 5;i++){
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        click(500, 1920)
        sleep(1000)
    }
    if(text("选择你感兴趣的分类").exists()){
        TKB.xgsrizhi("选择你感兴趣的分类")
        for(var i = 0;i< 5;i++){
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        click(500, 1920)
        sleep(1000)
    }
    if(text("等待").exists() && text("关闭应用").exists()){
        TKB.xgsrizhi("关闭应用")
        click("等待")
        sleep(1000)
    }

    if(text("展开").exists() && id("com.sina.weibo:id/btn_show_more").exists()){
        TKB.xgsrizhi("图片展开")
        back()
        sleep(2000)
    }

    if(text("重播").exists() && text("转发").exists()){
        TKB.xgsrizhi("重播")
        back()
        sleep(2000)
    }
    if(text("提示").exists() && text("取消").exists() && text("确定").exists()){
        TKB.xgsrizhi("提示实名认证")
        click("取消")
        sleep(1000)
    }
    if(text("上滑观看更多内容").exists()){
        TKB.xgsrizhi("上滑观看更多内容")
        swipe(533,1630, 557,400,random(400, 600))
        sleep(1000)
    }

}

//微博养号
function wbyh(){
    TKB.xgsrizhi("微博养号")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.sina.weibo")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                TKB.xgsrizhi("刷新首页")
                try{
                    var aa = text("推荐").findOnce().bounds()
                    if (aa != null){
                        TKB.xgsrizhi(aa.centerX())
                        TKB.xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                        click(aa.centerX(), aa.centerY())
                        sleep(2000)
                        swipe(557,400,533,1630,random(400, 600))
                        sleep(4000)
                    }
                } catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi("异常了")
                } 
                tem = 1
            }else{
                TKB.xgsrizhi("浏览微博")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(200,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
            }
        }else{
            if(desc("微博").exists() && desc("消息").exists() || desc("微博").exists() && desc("我的资料").exists()){
                TKB.xgsrizhi("进入微博界面")
                click(100, 1950)
                sleep(1500)
            }
        }
        if(id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() && text("评论").exists() || text("转发").exists() && text("赞").exists()){
            TKB.xgsrizhi("评论界面")
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            var bs = random(1, 30)
            if (id("com.sina.weibo:id/iv_like_icon").exists() && bs == 29){
                TKB.xgsrizhi("点评论赞")
                try{
                    var aa = id("com.sina.weibo:id/iv_like_icon").findOnce().bounds()
                    if (aa != null){
                        TKB.xgsrizhi(aa.centerX())
                        TKB.xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                    }
                } catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi("异常了")
                } 
            }
            ll = ll  + 1 
            if (ll > 10){
                TKB.xgsrizhi("浏览评论的次数够了")
                tem = 0
                ll = 0
            }
        }
        if(id("com.sina.weibo:id/story_feed_comment").exists() && id("com.sina.weibo:id/story_close_zone").exists() || text("写评论").exists() && id("com.sina.weibo:id/story_feed_like").exists()){
            TKB.xgsrizhi("观看视频界面")
            var vb = (new Date()).getTime()
            var ss = random(15, 40)
            while(1){
                if ((new Date()).getTime() - vb > ss*1000){
                    TKB.xgsrizhi("观看时间到了")
                    break
                }else{
                    toastLog("观看视频中")
                    sleep(2000)
                }
            }
            if (ss == 39){
                TKB.xgsrizhi("点视频赞")
                click(800, 1950)
                sleep(1500)
            }
            if (ss > 35){
                TKB.xgsrizhi("滑至下一个视频")
                swipe(533,1630, 557,400,random(400, 600))
                sleep(2000)
            }else{
                TKB.xgsrizhi("退出视频播放")
                back()
                sleep(1500)
            }
        }
        if(desc("转发").exists() && desc("评论").exists() && id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() || desc("赞").exists() && id("com.sina.weibo:id/detail_activity_header_right_button_text").exists()){
            TKB.xgsrizhi("浏览文章")
            var bb = random(4, 8)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            back()
            sleep(1200)
        }
        if(text("设置").exists() && text("添加好友").exists() && id("com.sina.weibo:id/cabFan").exists() || text("设置").exists() && id("com.sina.weibo:id/tvNick").exists() && id("com.sina.weibo:id/ivPortrait").exists()){
            toastLog("我的界面")
            click(100, 1960)
            sleep(1000)
        }
        if(id("com.sina.weibo:id/nomarl_like_image").exists() && id("com.sina.weibo:id/btn_retweet").exists() || text("收起").exists() && id("com.sina.weibo:id/btn_show_more").exists()){
            TKB.xgsrizhi("观看图片界面")
            sleep(3000)
            var ss = random(1, 40) 
            if (ss > 38){
                TKB.xgsrizhi("点图片赞")
                click(892, 1970)
                sleep(1000)
            }
            back()
            sleep(1000)
        }
        zonghe()
    }
}

//微博登录
function wbdl(){
    TKB.xgsrizhi("微博登录")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.sina.weibo")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh("com.tencent.weishi")
            return false
        }
        if( text("登录微博").exists() && text("获取验证码").exists() || text("登录微博").exists() && id("com.sina.weibo:id/iv_weixin").exists() || text("获取验证码").exists() && id("com.sina.weibo:id/iv_weixin").exists() ){
            TKB.xgsrizhi("点击微信登录")
            // var aa = id("com.sina.weibo:id/iv_weixin").findOnce().bounds();
            // if (aa != null){
            //     TKB.xgsrizhi(aa.centerX())
            //     TKB.xgsrizhi(aa.centerY())
            //     click(aa.centerX(), aa.centerY())
            // }
            // sleep(4000)
            weibozc()
        }
        if(text("热门").exists() && desc("微博").exists() && text("登录").exists() || text("关注").exists() && text("登录").exists()){
            TKB.xgsrizhi("首页-未登录")
            click(952, 1960)
            sleep(2000)
        }else{
            if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
                TKB.xgsrizhi("首页")
                click(952, 1960)
                sleep(2000)
            }
        }
        if(desc("设置").exists() && desc("添加好友").exists() || text("设置").exists() && text("添加好友").exists() && id("com.sina.weibo:id/cabFan").exists() || text("设置").exists() && id("com.sina.weibo:id/tvNick").exists() && id("com.sina.weibo:id/ivPortrait").exists()){
            toastLog("登录成功")
            TKB.qinglihh("com.sina.weibo")
            return true
        }
        if(text("用帐号密码登录").exists() && text("微信").exists() || text("微信").exists() && text("其他登录方式").exists()){
            TKB.xgsrizhi("点击微信登录")
            click("微信")
            sleep(1000)
            click(380, 1880)
            sleep(2000)
        }
        if(text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("确定").exists() && text("特别提示").exists()){
            TKB.xgsrizhi("特别提示")
            click("确定")
            sleep(1000)
        }
        if(text("请先验证身份").exists() && desc("点击按钮进行验证").exists()){
            TKB.xgsrizhi("特别提示")
            click(600, 450)
            sleep(3000)
        }
        if(id("com.sina.weibo:id/iv_close").exists()){
            TKB.xgsrizhi("领福利叉叉")
            try{
                var ss = id("com.sina.weibo:id/iv_close").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if(text("我是男生").exists() && text("我是女生").exists() && text("跳过").exists()){
            TKB.xgsrizhi("选择女生")
            click(730, 420)
            sleep(1000)
            click("跳过")
            sleep(1000)
        }
        if(text("我选好了").exists() ){
            TKB.xgsrizhi("我选好了")
            click("我选好了")
            sleep(1000)
        }
        if(text("下一步").exists() ){
            TKB.xgsrizhi("下一步")
            click("下一步")
            sleep(1000)
        }
        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
            click("跳过")
            sleep(1000)
        }
        
        zonghe()
    }

}

//微博注册
function weibozc(){
    TKB.xgsrizhi("微博注册")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var haoma = "18614142569"
    var yzm = "1234"
    var bb = 0
    var tem = 0
    var cs = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.sina.weibo")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
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
                    haoma = TKB.getxhhaoma(26, token)
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
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh("com.tencent.weishi")
            return false
        }
        if(text("登录微博").exists() && text("获取验证码").exists() || text("登录微博").exists() && id("com.sina.weibo:id/iv_weixin").exists() || text("获取验证码").exists() && id("com.sina.weibo:id/iv_weixin").exists() ){
            TKB.xgsrizhi("输入号码界面")
            if (bb == 0 ){
                log("先去拿号")
                bb = 1
            }else{
                setText(haoma)
                sleep(1000)
                click(500, 1150)
                sleep(500)
                click("获取验证码")
                sleep(3000)
            }
        }      
        if(text("请输入验证码").exists() && id("com.sina.weibo:id/rl_verification_anchor_panel").exists() || id("com.sina.weibo:id/tv_verification_code_guide").exists() && id("com.sina.weibo:id/resent_verification_bt").exists()){
            TKB.xgsrizhi("输入验证码界面")
            if(text("重新获取验证码").exists()){
                log("重新获取验证码")
                click(900, 700)
                sleep(500)
                click("重新获取验证码")
                sleep(3000)
            }
            yzm = TKB.getxhyzm(26, haoma, token)
            if (yzm != false){
                var reg = '[0-9]{4,6}';
                var table = yzm.match(reg)
                yzm = table[0]
                setText(yzm)
                sleep(1000)
                click(500, 1150)
                sleep(3000)
            }else{
                cs = cs + 1
                if (cs > 3){
                    // TKB.laheixhpt(26, haoma, token)
                    log("四次了都没获取到验证码")
                    tem = 0
                    cs = 0
                    TKB.qinglihh("com.sina.weibo")
                    sleep(3000)
                    launch("com.sina.weibo")
                    sleep(2000)
                    return false
                }
            }
        }
        
        if(text("热门").exists() && desc("微博").exists() && text("登录").exists() || text("关注").exists() && text("登录").exists()){
            TKB.xgsrizhi("首页-未登录")
            click(952, 1960)
            sleep(2000)
        }else{
            if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
                TKB.xgsrizhi("首页")
                click(952, 1960)
                sleep(2000)
            }
        }
        if(desc("设置").exists() && desc("添加好友").exists() || text("设置").exists() && text("添加好友").exists() && id("com.sina.weibo:id/cabFan").exists() || text("设置").exists() && id("com.sina.weibo:id/tvNick").exists() && id("com.sina.weibo:id/ivPortrait").exists()){
            toastLog("登录成功")
            TKB.qinglihh("com.sina.weibo")
            TKB.laheixhpt(26, haoma, token)
            return true
        }
        if(text("用帐号密码登录").exists() && text("微信").exists() || text("微信").exists() && text("其他登录方式").exists()){
            TKB.xgsrizhi("点击微信登录")
            click("微信")
            sleep(1000)
            click(380, 1880)
            sleep(2000)
        }
        if(text("同意").exists() && text("拒绝").exists()){
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if(text("确定").exists() && text("特别提示").exists()){
            TKB.xgsrizhi("特别提示")
            click("确定")
            sleep(1000)
        }
        if(text("请先验证身份").exists() && desc("点击按钮进行验证").exists()){
            TKB.xgsrizhi("特别提示")
            click(600, 450)
            sleep(3000)
        }
        if(id("com.sina.weibo:id/iv_close").exists()){
            TKB.xgsrizhi("领福利叉叉")
            try{
                var ss = id("com.sina.weibo:id/iv_close").findOnce().bounds();
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if(text("我是男生").exists() && text("我是女生").exists() && text("跳过").exists()){
            TKB.xgsrizhi("选择女生")
            click(730, 420)
            sleep(1000)
            click("跳过")
            sleep(1000)
        }
        if(text("我选好了").exists() ){
            TKB.xgsrizhi("我选好了")
            click("我选好了")
            sleep(1000)
        }
        if(text("下一步").exists() ){
            TKB.xgsrizhi("下一步")
            click("下一步")
            sleep(1000)
        }
        if(text("跳过").exists() ){
            TKB.xgsrizhi("跳过")
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
                            if (renwu[i] == "6" ){
                                TKB.xgsrizhi("继续微博任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh("com.sina.weibo")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有微博任务")
                            TKB.qinglihh("com.sina.weibo")
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

//*******************************************************对接服务器*****************************************************************

//执行微博
function zxwb(){
    TKB.xgsrizhi("执行微博")
    TKB.qinglihh()
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        var wb = wbdl()
        if (wb == true){
            wbyh()
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
    var baom = getPackageName("微博")
    if (baom == null){
        log("未安装微博")
        var bbd = TKB.wdjxiazai("微博", "10.3.0")
        if (bbd != false){
            zxwb()
        }
    }else{
        zxwb()
    }
    

} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}


// bofangyy()
// wbyh()
// meitxx()
// exit()


// wbzc()



// ws()
// dlqq()
// var ss = getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(baoming)
TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







