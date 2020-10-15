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
var dqbaoming = "com.tencent.weishi"   //该项目包名
var xmxh = "5"               //项目序号


//********************************************************下载播放mp3***************************************************************

//*******************************************************微视项目 *****************************************************************

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
    if(text("安装").exists() && text("取消").exists()){
        TKB.xgsrizhi("取消")
        click("取消")   
        sleep(1000)
    }
    if(text("微信领取").exists() && text("QQ领取").exists()){
        TKB.xgsrizhi("微信领取")
        back()   
        sleep(2000)
    }


    if(text("重试").exists() && text("取消").exists()){
        TKB.xgsrizhi("重试")
        click("重试")   
        sleep(1000)
    }
    if(text("取消关注").exists() && text("取消").exists()){
        TKB.xgsrizhi("取消关注")
        click("取消")   
        sleep(1000)
    }
    if(text("跳过").exists() && text("选择你想看的内容").exists()){
        TKB.xgsrizhi("跳过")
        click("跳过")   
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
    if(text("一键关注").exists() && id("com.tencent.weishi:id/close_btn").exists()){
        TKB.xgsrizhi("一键关注")
        try {
            var ss = id("com.tencent.weishi:id/close_btn").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
            sleep(1000)
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(2000)
        }
    }
}

//微视养号
function wsyanghao(){
    TKB.xgsrizhi("微视养号")
    launch("com.tencent.weishi")
    var TB = (new Date()).getTime()
    var TC = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    while(1){
        if ((new Date()).getTime() - TC > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            TKB.qinglihh("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }

        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.tencent.weishi")
            break
        }
        if((text("首页").exists() && text("消息").exists() && text("关注").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            TKB.xgsrizhi("首页")
            TC = (new Date()).getTime()
            var shij = random(20, 50)
            TB = (new Date()).getTime()
            if (shij < 23){
                var bb = random(1, 30)
                if (bb >29){
                    TKB.xgsrizhi("去点赞")
                    click(968,1756)
                    sleep(2500)
                }else{
                    TKB.xgsrizhi("看评论")
                    click(815,1747)
                    sleep(2000)
                }
            }else{
                while(1){
                    var point = findColor(captureScreen(), "#1aad19", {
                        region: [630,1730, 50,50],
                        threshold: 4
                    });
                    if(point){
                        TKB.xgsrizhi("看完了")
                        swipe(500,1810, 486,305, 500)
                        sleep(3000)
                        break
                    }
                    if ((new Date()).getTime() - TB > shij*1000){
                        swipe(500,1800, 486,300, 500)
                        sleep(3000)
                        break
                    }else{
                        toastLog("播放等待")
                        sleep(3000)
                    }
                }
            }
        }
        if(id("com.tencent.weishi:id/close_btn").exists() && id("com.tencent.weishi:id/comment_list_title").exists() || id("com.tencent.weishi:id/like_btn_white").exists() && id("com.tencent.weishi:id/avatar").exists()){
            TKB.xgsrizhi("评论界面")
            var cc = random(1, 5)
            for (let i = 0; i < cc; i++){
                sleep(1000)
                swipe(500,1700, 486,550, 1000)
                sleep(random(1000, 2000))
            }
            back()
            sleep(1000)
        }else{
            if(desc("表情").exists() && text("发送").exists()){
                TKB.xgsrizhi("没有评论")
                back()
                sleep(2000)
            }
        }
        zonghe()
    }
}

//微视搜索关注
function sousuo(aa){
    TKB.xgsrizhi("微视搜索关注")
    launch("com.tencent.weishi")
    var tem = 0  //判定在哪个页面
    // var yh = "ts11001"    //搜索的用户 ts11001   a133188
    var yh = aa
    var xh = 0   //下滑次数判断关注完
    var gs = 0   //关注个数
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    files.write("/sdcard/weishiname.txt", "10")   //记录微视名字的文本
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时没有关注")
            TKB.qinglihh("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 30*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.tencent.weishi")
            break
        }
        if((text("首页").exists() && text("消息").exists() && text("我").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            TKB.xgsrizhi("首页")
            click(990, 120)   //  点击搜索
            sleep(1000)
            tem = 0
        }

        if(id("com.tencent.weishi:id/search_icon").exists() && text("取消").exists() || text("用户").exists() && text("综合").exists() ){
            TKB.xgsrizhi("搜搜界面")
            tem = 0
            if(text("用户").exists() && text("综合").exists() && id("com.tencent.weishi:id/avatar").exists()||  text("用户").exists() && text("音乐").exists() && id("com.tencent.weishi:id/avatar").exists()){
                TKB.xgsrizhi("搜索结果")
                click("用户")   //  点击搜索
                sleep(2000)
                click(500, 500)    //点击第一个
                sleep(3000)
            }else{
                TKB.xgsrizhi("去搜索")
                click(500, 150)
                sleep(1000)
                setText(yh)
                sleep(1000)
                click(1030, 2000)   //搜索
                sleep(3000)
            }
        }
        if((id("com.tencent.weishi:id/iv_title_bar_back").exists() && text("粉丝").exists() && text("获赞").exists() )||  (text("关注").exists() && text("com.tencent.weishi:id/iv_title_bar_share").exists() && text("获赞").exists())){
            TKB.xgsrizhi("个人详情页")
            if (tem == 0){
                sleep(2000)
                if (text("微视号: "+yh).exists() || text(yh).exists()){
                    click("关注")   
                    sleep(1000)
                }else{
                    TKB.xgsrizhi("不是要搜索的人")
                    back()
                    sleep(2000)
                }
            }
        }
        if (id("com.tencent.weishi:id/user_list_follow_button").exists() && id("com.tencent.weishi:id/user_list_avatar").exists() ||  id("com.tencent.weishi:id/tab_text").exists() && text("com.tencent.weishi:id/user_list_follow_button").exists()){
            TKB.xgsrizhi("关注列表")
            var point = findColor(captureScreen(), "#7a46ff", {
                region: [864,394, 150,1500],
                threshold: 6
            });
            if(point){
                TKB.xgsrizhi("找到关注")
                click(point.x, point.y)
                TC = (new Date()).getTime()
                sleep(500)
                gs = gs + 1
                if (gs == 14){
                    TKB.xgsrizhi("关注数量够了")
                    toast("关注数量够了")
                    TKB.qinglihh("com.tencent.weishi")
                    break
                }
                xh = 0
            }else{
                TKB.xgsrizhi("下滑")
                swipe(574,1900, 500,430,random(1500, 2000))
                sleep(2000)
                xh = xh + 1
            }
            if (xh > 3){
                TKB.xgsrizhi("没有关注的人了")
                break
            }
            // tem = 1
        }
        zonghe()
    }
}

//跳转首页关注
function tiaozhuangz(aa){
    TKB.xgsrizhi("跳转首页关注")
    TKB.qinglihh("com.tencent.weishi")
    setClip(aa)
    launch("com.tencent.weishi")
    var tem = 0  //判定在哪个页面
    // var yh = "ts11001"    //搜索的用户 ts11001   a133188
    var yh = aa
    var xh = 0   //下滑次数判断关注完
    var gs = 0   //关注个数
    var TC = (new Date()).getTime()
    var Tb = (new Date()).getTime()
    files.write("/sdcard/weishiname.txt", "10")   //记录微视名字的文本
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时没有关注")
            TKB.qinglihh("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - Tb > 30*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.tencent.weishi")
            break
        }
        if((text("首页").exists() && text("消息").exists() && text("我").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            TKB.xgsrizhi("首页")
        }
        
        if((id("com.tencent.weishi:id/iv_title_bar_back").exists() && text("关注").exists() && text("获赞").exists() )||  (text("关注").exists() && text("com.tencent.weishi:id/iv_title_bar_share").exists() && text("获赞").exists())){
            TKB.xgsrizhi("个人详情页")
            if (text("私信").exists()){
                log("还未关注点击关注")
                var aa = text("私信").findOnce().bounds();
                if (aa != null){
                    TKB.xgsrizhi(aa.centerX())
                    TKB.xgsrizhi(aa.centerY())
                    click(aa.centerX()- 350, aa.centerY())
                    sleep(2000)
                }
            }else{
                log("已经关注了")
                
            }
        }

        if(text("查看主页").exists()){
            TKB.xgsrizhi("查看主页")
            click("查看主页")   
            sleep(2000)
        }








        zonghe()
    }
}


//登录微视
function dlweishi(aa){
    TKB.xgsrizhi("登录微视")
    launch("com.tencent.weishi")
    var dlfs = aa       // 1是qq登录
    var dl = 0
    var name = "1234"   //微视的名字
    var zh = "1234"    //微视账号
    var gz = "1234"       //微视关注
    var fs = "1234"       //微视粉丝
    var zp = "1234"       //作品数量
    var dj = "1234"       //点赞数量
    var qianm = "1234"     //微视签名
    var xingbie = "1234"   //微视性别
    var csc = 0  //点击授权的次数
    var Tb = (new Date()).getTime()
    var TC = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - Tb > 20*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.tencent.weishi")
            return false
        }
        if ((new Date()).getTime() - TC > 5*60*1000){
            TKB.xgsrizhi("超时退出")
            TKB.qinglihh("com.tencent.weishi")
            sleep(1000)
            launch("com.tencent.weishi")
            sleep(1000)
            TC = (new Date()).getTime()
        }
        if(text("微信号/QQ/邮箱登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()){
            toastLog("未登录微信")
            TKB.qinglihh("com.tencent.weishi")
            return false
        }
        if((text("首页").exists() && text("消息").exists() && text("我").exists() )||  (text("关注").exists() && text("推荐").exists())){
            TKB.xgsrizhi("首页")
            TC = (new Date()).getTime()
            if (dl == 0){
                click(970, 1950)  
                sleep(1000)
            }else{
                if (dl == 2){
                    TKB.xgsrizhi("登录成功")
                    TKB.qinglihh("com.tencent.weishi")
                    return true
                }
            }
        }
        if((text("编辑资料").exists() && id("com.tencent.weishi:id/iv_title_bar_share").exists())||  (text("编辑资料").exists() && text("关注").exists())){
            TKB.xgsrizhi("登录成功")
            toast("登录成功")
            if (dl == 0){
                if (text("微视号: 快来抢注唯一ID").exists()){
                    click("微视号: 快来抢注唯一ID")   
                    sleep(1000)
                }else{

                    dl = 1
                }
            }else{
                if (dl == 1){
                    TKB.xgsrizhi("点击首页")
                    try {
                        name = id("com.tencent.weishi:id/tv_title_bar_title").findOnce().text()
                        fs = drawingOrder("9").findOnce().text()
                        gz = drawingOrder("7").findOnce().text()
                        qianm = drawingOrder("25").findOnce().text()
                        var ss = TKB.getAllTexts()
                        TKB.xgsrizhi(ss)
                        for(j = 0,len=ss.length; j < len; j++){
                            if (ss[j].indexOf("微视号") != -1 && ss [j].indexOf("快来抢注") == -1){
                                TKB.xgsrizhi(ss[j])
                                var st = ss[j].split(": ")
                                zh = st[1]
                                TKB.xgsrizhi("微视号："+ zh)
                            }
                            if (ss[j].indexOf(" 作品") != -1){
                                TKB.xgsrizhi(ss[j])
                                var st = ss[j].split(" ")
                                zp = st[0]
                                TKB.xgsrizhi("作品数量："+ zp)
                            }
                            if (ss[j].indexOf(" 赞过") != -1){
                                TKB.xgsrizhi(ss[j])
                                var st = ss[j].split(" ")
                                dj = st[0]
                                TKB.xgsrizhi("点赞数量："+ dj)
                            }
                            if (ss[j].indexOf("女") != -1){
                                TKB.xgsrizhi(ss[j])
                                xingbie = 2   //2是女   1是男
                                TKB.xgsrizhi("性别：女")
                            }
                            if (ss[j].indexOf("男") != -1){
                                TKB.xgsrizhi(ss[j])
                                xingbie = 1   //2是女   1是男
                                TKB.xgsrizhi("性别：男")
                            }
                        }
                        toastLog("账号:" + zh + "--名字:" + name + "--粉丝：" +fs + "--关注：" +gz + "--签名：" +qianm + "--作品数量：" + zp  + "--点赞数量：" + dj  + "--性别：" + xingbie )
                        if (zh != "1234"){
                            var ssr = upzhanghao(zh)
                            if (ssr == true){
                                scshuju(zh, "nickname", name)
                                scshuju(zh, "fsshuliang", fs)
                                scshuju(zh, "guanzhushuliang", gz)
                                scshuju(zh, "jianjie", qianm)
                                scshuju(zh, "zan", dj)
                                if (xingbie != "1234"){
                                    scshuju(zh, "sex", xingbie)
                                }
                                if (id("com.tencent.weishi:id/playCnt").exists()){
                                    var ss = id("com.tencent.weishi:id/playCnt").findOnce().text()
                                    TKB.xgsrizhi("视频播放量："+ ss)
                                    scshuju(zh, "shipinbofangliang", ss)
                                }
                            }
                        }
                    }catch(error){
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }

                    sleep(1000)
                    click(100, 1950)
                    sleep(1000)
                    dl = 2
                }
            }
        }
        if (text("抢注微视号").exists() && id("com.tencent.weishi:id/btn_back").exists() || desc("抢注微视号").exists() && id("com.tencent.weishi:id/btn_back").exists()){
            TKB.xgsrizhi("抢注微视号")
            if (text("该微视号已成为你的专属ID").exists() || desc("该微视号已成为你的专属ID").exists()){
                TKB.xgsrizhi("已经抢注成功")
                try {
                    var ss = TKB.getAllTexts()
                    TKB.xgsrizhi(ss)
                    for(var ii = 0; ii < ss.length; ii++){
                        var reg = '[0-9]{6,20}';
                        var table = ss[ii].match(reg)
                        if (table){
                            zh = table[0]
                            TKB.xgsrizhi("我是账号：" + zh)
                        }
                    }
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                sleep(1000)
                back()
                sleep(1000)
                dl = 1
            }else{
                setText(random(11111111, 99999999))
                sleep(1000)
                click(500, 1500)
                sleep(1000)
                click("立即抢注")
                sleep(2000)
                click("确定")
            }
        } 
        if (text("取消").exists() && text("确定").exists()){
            TKB.xgsrizhi("确定抢注") 
            click("确定")
            sleep(1000)
        }
        if (desc("取消").exists() && desc("确定").exists()){
            TKB.xgsrizhi("确定抢注2") 
            click(700, 1250)
            sleep(2000)
        }
        if(text("微信登录").exists() && text("QQ登录").exists()){
            TKB.xgsrizhi("微信登录或QQ登录")
            if (dlfs== 1){
                TKB.xgsrizhi("QQ登录")
                click("QQ登录") 
                csc = csc + 1
            }else{
                TKB.xgsrizhi("微信登录")
                click("微信登录")  
                csc = csc + 1
            }
            if (csc > 10){
                log("多次未授权上")
                return false
            }
            sleep(3000)
        }
        if(text("QQ授权登录").exists()){
            TKB.xgsrizhi("QQ授权登录")
            click("QQ授权登录")
            sleep(3000)
        }
        if(text("确认登录").exists() ){
            TKB.xgsrizhi("确认登录")
            click("确认登录")
            sleep(5000)
        }
        if(text("完成QQ授权").exists() ){
            TKB.xgsrizhi("完成QQ授权")
            click("完成QQ授权")
            sleep(5000)
        }
        if(text("开始看视频").exists() && text("跳过").exists()){
            TKB.xgsrizhi("开始看视频")
            click("跳过")
            sleep(3000)
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
                                TKB.xgsrizhi("继续微视任务")
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
                            TKB.xgsrizhi("服务器上没有微视任务")
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

//上传点赞数跟注册数 aa = dianzan //点赞+1   aa = zhuceshuliang //注册数量+1
// aa = qqguanggao //qq广告+1    aa =  youxiguanggao //游戏广告+1 
//aa = laqunshuliang //上传拉群数量   aa = qunliaoshuliang //上传群聊数量   
function xupdjshu(aa){
    TKB.xgsrizhi("上传点赞数跟注册数--"+yhname+"--"+yhbh)
    while (1){
        try {
            var r = http.get("http://" + fuwuip + "/douyin.com/tp5/public/index/Myapi/gxshebei/usr/"+user+"/shebeihao/"+bianhao+"/ziduan/"+aa+"/val/1");
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0){
                    TKB.xgsrizhi("增加成功")
                    break
                }else{
                    TKB.xgsrizhi("增加数量失败")
                    toast("增加数量失败--检查账号信息")
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

//*******************************************************对接服务器*****************************************************************

//执行美图项目
function weishiz(){
    toastLog("执行微视任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        TKB.qinglihh("com.tencent.weishi")
        var rw =  TKB.hqrenwu(sbip, "weishiflag", yhname, yhbh)
        try{
            var ss = dlweishi(rw["denglu"])
            if (ss == true){
                if (rw["weishiflag"] == 1){
                    TKB.xgsrizhi("去养号")
                    wsyanghao()
                }else{
                    TKB.xgsrizhi("去关注")
                    sousuo(rw["guanzhuzhanghao"])
                }
            }
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
    var baom = getPackageName("微视")
    if (baom == null){
        log("未安装微视")
        var bbd = TKB.wdjxiazai("微视", "6.5.1.588")
        if (bbd != false){
            weishiz()
        }
    }else{
        weishiz()
    }
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






