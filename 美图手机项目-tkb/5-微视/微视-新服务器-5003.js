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
function dlweishi(){
    TKB.xgsrizhi("登录微视")
    launch("com.tencent.weishi")
    var dlfs = 2       // 1是qq登录
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
                        TKB.xgsrizhi("继续微视任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有微视任务")
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

//上传账号
function upzhanghao(zhanghao){
    return false
}

function scshuju(name, ziduan, shuju){
    return false
}
//*******************************************************对接服务器*****************************************************************

//执行美图项目
function weishiz(){
    try {
        bofangyy()
        toastLog("执行微视任务")
        _THREADSSxx = threads.start(function (){
            var baom = getPackageName("微视")
            if (baom == null){
                log("未安装微视")
                var bbd = TKB.wdjxiazai("微视", "6.5.1.588")
                if (bbd == false){
                    TKB.xgsrizhi("安装微视不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var ss = dlweishi()
            if (ss == true){
                var rw = TKB.huoqufzrw(sbip, yhname, yhbh, "weishi")
                if (rw == "养号"){
                    TKB.xgsrizhi("去养号")
                    wsyanghao()
                }else{
                    if (rw == "关注"){
                        TKB.xgsrizhi("去关注")
                        sousuo("zhanghao")
                    }
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






// TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()
sleep(1000)






