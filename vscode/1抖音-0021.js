1抖音-0021.js

本地显示

下载

分享

                
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
var user_id = sbxx_table[4]    //跟服务器对接用到的
var run_id = sbxx_table[5]     //任务对应的服务器上的id
var run_time = sbxx_table[6]    //该任务运行的时间
var fun = sbxx_table[7]         //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.ss.android.ugc.aweme"   //该项目包名
var xmxh = "1"               //项目序号 版本11.0.0



//******************************************************************抖音项目*****************************************************************

function zonghe(){
    if(text("稍后").exists() && text("去打开").exists()){
         TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if(text("刷新").exists() && text("网络错误").exists()){
        TKB.xgsrizhi("网络错误")
        click("刷新")
        sleep(2000)
    }
    if(text("立即登录").exists() && text("取消").exists()){
        TKB.xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
    }
    if(text("退出").exists() && text("发现更多主播").exists()){
        TKB.xgsrizhi("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if(text("确认更换").exists() || desc("确认更换").exists()){
        TKB.xgsrizhi("发现更多主播")
        click(940,502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if(text("确认").exists() && text("取消").exists()){
        TKB.xgsrizhi("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if(text("个人信息保护指引").exists() && text("好的").exists()){
        TKB.xgsrizhi("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if(text("始终同意").exists() && text("拒绝").exists()){
        TKB.xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if(text("五星好评").exists() && text("取消").exists()){
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
         TKB.xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if(text("允许").exists() && text("拒绝").exists()){
         TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
         TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下次再说").exists()) {
        TKB.xgsrizhi("下次再说")
        click("下次再说")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
         TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }
    
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.xgsrizhi("确认");
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.xgsrizhi("同步到今日头条");
        sleep(1200)
    }
    if(text("发现通讯录好友").exists()){
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        TKB.xgsrizhi("以后再说2");
        try{
            var ss = text("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error){
            sleep(1001)
            log(error);
        }
    }
    if (desc("以后再说").exists()) {
        TKB.xgsrizhi("以后再说3");
        try{
            var ss = desc("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error){
            sleep(1001)
            log(error);
        }
    }

    if (text("继续观看").exists()) {
        TKB.xgsrizhi("继续观看");
        try{
            var ss = text("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error){
            sleep(1001)
            log(error);
        }
    }
    if (desc("继续观看").exists()) {
        TKB.xgsrizhi("继续观看2");
        try{
            var ss = desc("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        }catch(error){
            sleep(1001)
            log(error);
        }
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if(text("立即赠送").exists()){
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()){
        TKB.xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//抖音注册
function dyzc(){
    TKB.xgsrizhi("抖音注册")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssr = (new Date()).getTime()
    var zh = "18632698565"
    var yzm = "1234"
    var dinz = random(20,50)  //观看视频时长
    var TTguank = (new Date()).getTime()  //看视频的时间
    var dij = 0   //点赞登录的次数
    var bb = 0
    var tem = 0
    var fs = 0  //判断发送短信
    while(1){
        if ((new Date()).getTime() - RT > 25*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没注册成功")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            fs = 0
            TSD = (new Date()).getTime()
        }
        if (bb == 1 && tem == 0){
            TKB.xgsrizhi("去获取号码")
            zh = TKB.benjitel()
            tem  = 1
        }
        if (text("本机号码一键登录").exists()){
            TKB.xgsrizhi("本机号码一键登录")
            if (id("com.ss.android.ugc.aweme:id/dxj").exists()){
                TKB.xgsrizhi("同意阅读")
                try {
                    var node = id("com.ss.android.ugc.aweme:id/dxj").findOnce().checked()
                    if (node == false){
                        node = id("com.ss.android.ugc.aweme:id/dxj").findOnce().bounds();
                        click(node.centerX(), node.centerY());
                        sleep(1200)
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
            click("本机号码一键登录")
            sleep(4000)
        }else{
            if (text("一键登录").exists()){
                TKB.xgsrizhi("一键登录")
                click("一键登录")
                sleep(4000)
            }else{
                if (text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()){
                    TKB.xgsrizhi("还未登录账号--先去登录")
                    if (bb == 0 ){
                        log("先去获取号码")
                        bb = 1
                    }else{
                        if (zh == false){
                            TKB.xgsrizhi("没有获取到手机号")
                            return false
                        }
                        TKB.xgsrizhi("输入账号" + zh)
                        setText(zh)
                        sleep(2000)
                        click(500, 860)
                        sleep(5000)
                        fs = 0
                    }
                }
            }
        }
        if (text("本机号码一键登录").exists()){
            TKB.xgsrizhi("本机号码一键登录2")
            click(200, 1020)
            sleep(1000)
            click(500, 730)
            sleep(5000)
        }
        if (text("登录验证").exists() && text("快速编辑").exists() || text("快速编辑").exists() && text("编辑短信").exists()){
            TKB.xgsrizhi("登录短信验证")
            if (fs == 0){
                click("快速编辑")
                sleep(2000)
            }else{
                click("我已完成短信发送")
                sleep(4000)
                fs = 0
            }
        }
        if (text("发送").exists() && id("com.android.mms:id/gn_ic_back_button").exists() || text("发送").exists() && id("com.android.mms:id/pick_contacts_area").exists()){
            TKB.xgsrizhi("发送短信")
            click(930, 1830)
            sleep(400)
            click("发送")
            sleep(2000)
            back()
            sleep(2000)
            fs = 1
        }

        if (text("请输入验证码").exists() && bb == 1){
            TKB.xgsrizhi("输入验证码界面")
            yzm = TKB.huoquyzm("抖音")
            if (yzm == false){
                back()
                sleep(100)
                back()
                sleep(2000)
            }else{
                TKB.xgsrizhi("输入验证码"+yzm)
                setText(yzm)
                sleep(1000)
                click(500, 860)
                sleep(5000)
            }
        }
        if (text("绑定手机号").exists()){
            TKB.xgsrizhi("绑定手机号")
            back()
            sleep(2000)
        }
        if(text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() ||  desc("作者头像").exists() && desc("发现好友").exists() ){
            TKB.xgsrizhi("编辑资料界面")
            shipinsc()
            tuichuzh()
            return true
        }else{
            if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")){
                TKB.xgsrizhi("首页")
                if ((new Date()).getTime() - ssr > 15*60*1000){
                    TKB.xgsrizhi("时间到了去注册")
                    if (dij < 4){
                        click(980, 900)   //点击点赞
                        sleep(2000)
                        dij = dij + 1
                    }else{
                        TKB.xgsrizhi("点击我的")
                        click(1020, 1890)
                        sleep(2000)
                    }
                }else{
                    TKB.xgsrizhi("先看视频")
                    toastLog("先看视频")
                    sleep(1000)
                    if((new Date()).getTime() - TTguank > dinz*1000){    
                        toastLog(dinz+"秒，滑动")
                        swipe(500, 1600, 600, 400, 1200);
                        sleep(1000);
                        dinz = random(20,50)
                        TTguank = (new Date()).getTime()
                    }else{
                        toastLog("观看视频")
                        sleep(3000)
                    }
                    TSD = (new Date()).getTime()
                }
            }
        }
        if(text("下线提醒").exists() && text("好").exists()){
            TKB.xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
        }
        if(text("返回").exists() && text("继续等待").exists()){
            TKB.xgsrizhi("继续等待")
            click("返回")
            sleep(500)
            back()
            sleep(2000)
        }
        sleep(500)
        zonghe()
    }
}

//抖音登录上传信息
function dydl(){
    TKB.xgsrizhi("抖音登录")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var dyzh = "1234"    //抖音账号
    var djsl = "1234"    //点赞数量
    var dygz = "1234"    //关注数量
    var dyfs = "1234"    //粉丝数量
    var dyqm = "1234"    //抖音签名
    var dybf = "1234"    //播放数量
    var dync = "1234"    //抖音昵称
    var dyxb = "1234"    //抖音性别
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.ss.android.ugc.aweme")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没登录成功")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.aweme")
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("一键登录").exists() || text("本机号码一键登录").exists() || text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()){
            TKB.xgsrizhi("还未登录账号--先去登录")
            var ss = dyzc()
            if (ss == false){
                return false
            }
        }
        if (text("绑定手机号").exists()){
            TKB.xgsrizhi("绑定手机号")
            back()
            sleep(2000)
        }
        if(text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() ||  desc("作者头像").exists() && desc("发现好友").exists() ){
             TKB.xgsrizhi("编辑资料界面")
            click(1020, 1950)
            sleep(2000)
            var ss =  TKB.getAllTexts()
             TKB.xgsrizhi(ss)
            try{
                for(j = 0,len=ss.length; j < len; j++){
                    if (ss[j].indexOf("喜欢 ") != -1){
                        TKB.xgsrizhi(ss[j])
                        var st = ss[j].split("欢 ")
                        djsl = st[1]
                        TKB.xgsrizhi("点赞数量："+ djsl)
                    }
                    if (ss[j].indexOf("男") != -1){
                        TKB.xgsrizhi("性别男")
                        dyxb = "1"
                    }
                    if (ss[j].indexOf("女") != -1){
                        TKB.xgsrizhi("性别女")
                        dyxb = "2"
                    }
                }
                if (id("com.ss.android.ugc.aweme:id/e_f").exists()){
                    var dd = id("com.ss.android.ugc.aweme:id/e_f").findOnce().text()
                    if (dd.indexOf("抖音号: ") != -1){
                         TKB.xgsrizhi(dd)
                        var st = dd.split(": ")
                        dyzh = st[1]
                         TKB.xgsrizhi("抖音账号："+ dyzh)
                    }
                }
                // var ssr = upzhanghao(dyzh)
                var ssr = true
                if (ssr == true){
                    // scshuju(dyzh, "zan", djsl)
                    // scshuju(dyzh, "sex", dyxb)
                    if (id("com.ss.android.ugc.aweme:id/b_0").exists()){
                        dygz = id("com.ss.android.ugc.aweme:id/b_0").findOnce().text()
                        TKB.xgsrizhi("关注数量："+ dygz)
                        // scshuju(dyzh, "guanzhushuliang", dygz)
                    }
                    if (id("com.ss.android.ugc.aweme:id/b9v").exists()){
                        dyfs = id("com.ss.android.ugc.aweme:id/b9v").findOnce().text()
                        TKB.xgsrizhi("粉丝数量："+ dyfs)
                        // scshuju(dyzh, "fsshuliang", dyfs)
                    }
                    if (id("com.ss.android.ugc.aweme:id/glp").exists()){
                        dyqm = id("com.ss.android.ugc.aweme:id/glp").findOnce().text()
                        TKB.xgsrizhi("签名："+ dyqm)
                        // scshuju(dyzh, "jianjie", dyqm)
                    }
                    if (id("com.ss.android.ugc.aweme:id/e0g").exists()){
                        dybf = id("com.ss.android.ugc.aweme:id/e0g").findOnce().text()
                        TKB.xgsrizhi("播放数量："+ dybf)
                        // scshuju(dyzh, "shipinbofangliang", dybf)
                    }
                    if (id("com.ss.android.ugc.aweme:id/dbt").exists()){
                        dync = id("com.ss.android.ugc.aweme:id/dbt").findOnce().text()
                        TKB.xgsrizhi("抖音昵称："+ dync)
                        // scshuju(dyzh, "nickname", dync)
                    }
                }
                toastLog("账号："+ dyzh + "--关注："+ dygz + "--粉丝："+ dyfs + "--签名："+ dyqm + "--点赞："+ djsl + "--播放数量："+ dybf)
            }catch(error) {
                sleep(1001)
                 TKB.xgsrizhi(error);
            }
            TKB.qinglihh("com.ss.android.ugc.aweme")
            return true

        }else{
            if(text("消息").exists() && text("我").exists() || (text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then")){
                TKB.xgsrizhi("首页")
                click(1020, 1890)
                sleep(2000)
            }
        }
        if(text("下线提醒").exists() && text("好").exists()){
            TKB.xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
        }
        if(text("确认").exists() && text("取消").exists()){
            TKB.xgsrizhi("取消未编辑的视频")
            click("取消")
            sleep(2000)
        }
        zonghe()
    }
}

//抖音养号
function dyyh(){
    TKB.xgsrizhi("抖音养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    var bq = ["微笑","大笑","哈欠","震惊","送心","困","what","泣不成声","小鼓掌","大金牙","偷笑","石化","思考","吐血","可怜","嘘","撇嘴","黑线","笑哭","雾霾","奸笑","得意","坏笑","抓狂","泪奔","钱","吻","恐惧","笑","快哭了","翻白眼","互粉","赞","鼓掌","祈祷","kiss","去污粉","666","玫瑰","胡瓜","啤酒","我想静静","委屈","舔屏","飞吻","再见","紫薇别走","听歌","求抱抱","绝望的凝视","不失礼貌的微笑","吐舌","呆无辜","看","白眼","熊吉","骷髅","黑脸","吃瓜群众","绿帽子","汗","摸头","皱眉","擦汗","红脸","尬笑","做鬼脸","强","如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var ssd = (new Date()).getTime()    //看直播的时间
    var stt = random(60, 120)
    var TTguank = (new Date()).getTime()
    var dinz = random(30,60)
    var dj = random(1,100)
    var ll = 0    //直播
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if(text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists() )||  (text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then") ){
             TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if(!text("推荐").exists()){
                TKB.xgsrizhi("点首页")
                click("首页")
                sleep(300)
                click(100, 1830)
                sleep(2000)
            }else{
                if(tem == 0){
                    TKB.xgsrizhi("推荐")
                    click("推荐")
                    sleep(random(10, 15) * 1000);
                    tem = 1
                }else{
                    if ((new Date()).getTime() - ssd > 15*60*1000 && ll < 5 ){
                        TKB.xgsrizhi("去看直播")
                        click(100, 130)
                        sleep(2000)
                        dinz = random(20,30)
                        ll = ll + 1 
                    }else{
                        if((new Date()).getTime() - TTguank > dinz*1000){    
                            toastLog(dinz+"秒，滑动")
                            dj = random(1,200)
                            if (dj == 2){
                                log("点赞")
                                click(1000, 900)
                                sleep(1000)
                            }else{
                                if (dj > 198){
                                    TKB.xgsrizhi("浏览评论")
                                    click(980, 1110)
                                    sleep(2000)
                                    var sb = random(1, 5)
                                    if (sb == 1){
                                        sleep(1000)
                                        TKB.xgsrizhi("评论")
                                        click(150, 1870)
                                        sleep(2000)
                                        setText("["+bq[random(1, bq.length)]+"]")
                                        sleep(1000)
                                        if(id("com.ss.android.ugc.aweme:id/a__").exists()){
                                            try{
                                                var ss = id("com.ss.android.ugc.aweme:id/a__").findOnce().bounds();
                                                log(ss)
                                                click(ss.centerX(), ss.centerY());
                                                sleep(2000)
                                            }catch(error){
                                                sleep(1001)
                                                log(error);
                                            }
                                        }
                                        back()
                                        sleep(3000)
                                    }else{
                                        for(j = 0,len=sb; j < len; j++){
                                            swipe(500, 1600, 600, 400, 1200)
                                            sleep(random(1000, 3000))
                                        }
                                    }
                                    back()
                                    sleep(2000)
                                }else{
                                    swipe(500, 1600, 600, 400, 1200);
                                    sleep(random(1, 2) * 1000);
                                    dinz = random(20,50)
                                }
                            }
                            TTguank = (new Date()).getTime()
                        }else{
                            toastLog("观看视频")
                            sleep(3000)
                        }
                    }
                }
            }
        }
        if(text("直播广场").exists()){
            TKB.xgsrizhi("直播广场")
            back()
            sleep(3000)
        }
        if( id("com.ss.android.ugc.aweme:id/xj").exists() && text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme:id/xj").exists() && id("com.ss.android.ugc.aweme:id/gt").exists()){
             TKB.xgsrizhi("留下你的精彩评论吧")
            // var neir ="["+bq[random(0,bq.length - 1)]+"]"+"["+bq[random(0,bq.length - 1)]+"]"
            // setText(neir)
            back()
            sleep(3000)
        }
        if(id("com.ss.android.ugc.aweme:id/a__").exists() && id("com.ss.android.ugc.aweme:id/c3l").exists()|| text("留下你的精彩评论吧").exists()  || desc("留下你的精彩评论吧").exists()){
            TKB.xgsrizhi("评论界面")
            back()
            sleep(3000)
        }
        if(text("说点什么...").exists() && text("更多直播").exists() || id("com.ss.android.ugc.aweme:id/a7f").exists() && id("com.ss.android.ugc.aweme:id/eo3").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/vb").exists() || text("说点什么...").exists() && id("com.ss.android.ugc.aweme:id/text").exists()){
            toastLog("直播界面")
            TSD = (new Date()).getTime()
            var ssi = random(1, 100)
            if  (ll < 10){
                ll = 10
                ssd = (new Date()).getTime()
                ssi = random(1, 3)
                for(j = 0,len=ssi; j < len; j++){
                    swipe(500, 1600, 600, 400, 500)
                    sleep(random(1000, 3000))
                }
            }
            if (ssi > 99){
                TKB.xgsrizhi("直播评论")
                click(200, 1830)
                sleep(2000)
                setText("["+bq[random(1, bq.length)]+"]")
                sleep(1000)
                if( id("com.ss.android.ugc.aweme:id/es6").exists()){
                    try{
                        var ss = id("com.ss.android.ugc.aweme:id/es6").findOnce().bounds();
                        log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }catch(error) {
                        sleep(1001)
                        log(error);
                    }
                }
                back()
                sleep(2000)
            }
            if ((new Date()).getTime() - ssd < dinz * 60*1000){
                toastLog("观看直播中")
                TKB.xgsrizhi("观看直播中")
                sleep(3000)
            }else{
                back()
                sleep(3000)
            }
        }
        if(text("点击重播").exists()){
            toastLog("点击重播，滑动")
            swipe(500, 1600, 600, 400, 1200);
            sleep(random(10, 20) * 1000);
            sleep(1000)
        }
        if(text("取消").exists() && text("热点榜").exists() && text("更多").exists()){
            TKB.xgsrizhi("搜索界面")
            back()
            sleep(3000)
        }
        if(text("下线提醒").exists() && text("好").exists()){
            TKB.xgsrizhi("下线提醒")
            click("好")
            sleep(2000)
            return false
        }
        if(id("com.ss.android.ugc.aweme:id/dl4").exists() && id("com.ss.android.ugc.aweme:id/es6").exists()){
            TKB.xgsrizhi("直播评论界面")
            back()
            sleep(3000)
        }


        zonghe()
    }
}

//改资料
function gaizl(){
    TKB.xgsrizhi("改资料")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0   //判断编辑资料界面该干啥
    var name = "0"
    var jianjie = "你们在干嘛呢"
    var xb = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists() )||  (text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then") ){
            TKB.xgsrizhi("首页")
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists()){
                TKB.xgsrizhi("编辑资料")
                click("编辑资料")
                sleep(2000)
            }
        }
        if(text("名字").exists() && text("抖音号").exists() || text("编辑个人资料").exists() && text("抖音号").exists() || text("编辑个人资料").exists() && text("名字").exists()){
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0){
                TKB.xgsrizhi("修改名字")
                name = TKB.hqnicheng()
                if (name == false){
                    tep = 1
                }else{
                    click("名字")
                    sleep(1500)
                }
            }else{
                if (tep == 1){
                    // TKB.xgsrizhi("修改简介")
                    // click("简介")
                    // sleep(1500)
                    tep = 2
                }else{
                    if (tep == 2){
                        // TKB.xgsrizhi("修改性别")
                        // click("性别")
                        // sleep(1500)
                        tep = 3
                    }else{
                        if (tep == 3){
                            var lj = TKB.hqtpsplj(sbip, user_id, yhbh, app_id, 1)
                            if (lj == false){
                                TKB.xgsrizhi("没有获取到图片链接")
                                return false
                            }
                            var sp = TKB.xztp(lj)
                            if (sp == false){
                                TKB.xgsrizhi("下载视频失败")
                                return false
                            }
                            TKB.xgsrizhi("更改头像")
                            click(540, 440)
                            sleep(500)
                            click("点击更换头像")
                            sleep(1500)
                        }else{
                            TKB.xgsrizhi("执行完了退出")
                            back()
                            sleep(2000)
                            return true
                        }
                    }
                }
            }
        }
        if(text("修改名字").exists() && text("我的名字").exists() || text("修改名字").exists() && text("保存").exists()){
            TKB.xgsrizhi("修改名字")
            if (id(name).exists()){
                TKB.xgsrizhi("已经是该名字了")
                click("保存")
                sleep(500)
                back()
                sleep(2000)
            }else{
                setText(name)
                click("保存")
                sleep(1000)
            }
            tep = 1
        }
        if(text("修改简介").exists() && text("个人简介").exists() || text("修改简介").exists() && text("保存").exists()){
            TKB.xgsrizhi("修改名字")
            if (id(jianjie).exists()){
                TKB.xgsrizhi("已经是该简介了")
                click("保存")
                sleep(500)
                back()
                sleep(2000)
            }else{
                setText(jianjie)
                click("保存")
                sleep(1000)
            }
            tep = 2
        }
        if(text("男").exists() && text("女").exists()){
            TKB.xgsrizhi("修改性别")
            if (xb == 0){
                click("男")
                sleep(1000)
            }else{
                click("女")
                sleep(1000)
            }
            tep = 3
        }
        if(text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()){
            TKB.xgsrizhi("相册选择")
            click("相册选择")
            sleep(1000)
        }
        if(text("从相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("从相册选择").exists()){
            TKB.xgsrizhi("从相册选择")
            click("从相册选择")
            sleep(1000)
        }
        if(text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.ss.android.ugc.aweme:id/e9r").exists()){
            TKB.xgsrizhi("选择照片")
            click(270, 320)   //选择第一张
            sleep(1000)
            click(950, 1820)   //确定
            sleep(2000)
        }
        if(text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()){
            TKB.xgsrizhi("裁剪")
            click(960, 1710)   //确定
            sleep(400)
            click("完成")
            sleep(1000)
            tep = 4
        }


        zonghe()
    }
}

//发布视频
function fabusp(){
    TKB.xgsrizhi("发布视频")
    launch("com.ss.android.ugc.aweme")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var biaoti = "o"   //视频标题
    var zpsl = 0    //现在的作品数量
    var ylsl = 0    //原来的作品数量
    var fb = 0      //判断发布成功
    var ssy = 0     //设置声音
    var lj = TKB.hqtpsplj(sbip, user_id, yhbh, app_id, 2)
    if (lj == false){
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false){
        TKB.xgsrizhi("下载视频失败")
        return false
    }
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0 ){
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 7*60*1000){
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.aweme")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.ss.android.ugc.aweme:id/e9r").exists() && text("推荐").exists() || (id("com.ss.android.ugc.aweme:id/e9r").exists() && id("com.ss.android.ugc.aweme:id/a7m").exists() )||  (text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists()) || TKB.zhaose("if isColor(481,1814,0x23f5e7,80) and isColor(481,1844,0x26f7eb,80) and isColor(599,1821,0xff2a4e,80) and isColor(599,1843,0xff2b50,80) and isColor(503,1814,0xffffff,80) then") ){
            TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            click(980, 1850)
            sleep(2000)
            if (text("编辑资料").exists()){
                TKB.xgsrizhi("编辑资料")
                var ss =  TKB.getAllTexts()
                try{
                    for(j = 0,len=ss.length; j < len; j++){
                        if (ss[j].indexOf("作品 ") != -1){
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.xgsrizhi("作品数量："+ zpsl)
                            if (fb == 0){
                                ylsl = zpsl
                                click(541, 1830)   //点击加号
                                sleep(2000)
                            }else{
                                TKB.xgsrizhi("点击首页")
                                click(100, 1850)
                                sleep(2000)
                            }
                            if (zpsl > ylsl){
                                TKB.xgsrizhi("现在的作品数量大于原来的")
                                return true
                            }
                        }
                    }
                }catch(error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
            }
        }
        if(text("上传").exists() && text("选择音乐").exists() || text("上传").exists() && text("滤镜").exists()){
            TKB.xgsrizhi("上传视频界面")
            click("上传")
            sleep(2000)
        }
        if(text("视频").exists() && text("下一步").exists() || text("视频").exists() && id("com.ss.android.ugc.aweme:id/jl").exists() || text("多段视频").exists() && text("视频").exists()){
            TKB.xgsrizhi("上传视频界面")
            try {
                node = text("视频").findOnce().bounds();
                click(node.centerX(), node.centerY());
                sleep(1200)
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            if (id("com.ss.android.ugc.aweme:id/but").exists() || id("com.ss.android.ugc.aweme:id/d3g").exists()){
                
            }else{
                toastLog("没有视频")
            }
            click(220, 420)    //点击第一个视频
            sleep(1000)
            click(910, 1820)    //点击第一个视频
            sleep(100)
            click("下一步")
            sleep(3000)
        }else{
            if (text("选配乐").exists() || text("配乐").exists() && text("音量").exists()){
                if (ssy != 0){
                    if(text("下一步").exists()){
                        TKB.xgsrizhi("下一步2")
                        click("下一步")
                        sleep(3000)
                    }else{
                        TKB.xgsrizhi("下一步返回")
                        back()
                        sleep(2000)
                    }
                }else{
                    if (text("配乐").exists() && text("音量").exists()){
                        TKB.xgsrizhi("配乐")
                        if (text("推荐").exists() || text("收藏").exists()){
                            TKB.xgsrizhi("点击第一个音乐")
                            click(400, 1500)
                            sleep(5000)
                            click(800, 1860)
                            sleep(2000)
                        }else{
                            if (text("原声").exists() || text("配乐").exists()){
                                TKB.xgsrizhi("设置声音")
                                swipe(600,1426, 235,1423, 500)   //调原声
                                var point = findColor(captureScreen(), "#face15", {
                                    region: [245,1619, 50,50],
                                    threshold: 5
                                });
                                if(point){
                                    TKB.xgsrizhi("已经设置好了声音")
                                    back()
                                    sleep(2000)
                                    ssy = 1
                                }else{
                                    TKB.xgsrizhi("点击配乐")
                                    click(267,1842)
                                    sleep(3000)
                                }
                            }
                        }
                    }else{
                        if (text("选配乐").exists()){
                            TKB.xgsrizhi("选配乐")
                            click("选配乐")
                            sleep(3000)
                        }
                    }
                }
            }else{
                if(text("下一步").exists()){
                    TKB.xgsrizhi("下一步")
                    click("下一步")
                    sleep(3000)
                }
            }
        }
        if(text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()){
            TKB.xgsrizhi("发布")
            setText(biaoti)
            sleep(500)
            click("发布")
            sleep(3000)
            fb = 1
        }
        if(text("同步到今日头条").exists()){
            TKB.xgsrizhi("同步到今日头条")
            if (fb != 0 ){
                TKB.xgsrizhi("发布成功")
                click("同步到今日头条")
                sleep(1000)
                // click(530, 1530)
                sleep(3000)
                return true
            }else{
                TKB.xgsrizhi("还没发布")
                click("同步到今日头条")
                // click(530, 1530)
                sleep(3000)
            }
        }
        if(id("com.ss.android.ugc.aweme:id/a91").exists() && fb != 0){
            TKB.xgsrizhi("对比标题")
            try{
                var dd = id("com.ss.android.ugc.aweme:id/a91").findOnce().text()
                if (dd == biaoti){
                    TKB.xgsrizhi("看到我发布视频的标题了")
                    return true
                }
            }catch(error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if(text("· 1秒前").exists() && fb != 0){
            TKB.xgsrizhi("一秒前的视频")
            return true
        }
        if(text("本地草稿箱").exists() && text("选择").exists()){
            TKB.xgsrizhi("本地草稿箱")
            click("选择")
            sleep(1000)
        }
        if(text("放弃").exists() && text("取消").exists()){
            TKB.xgsrizhi("放弃")
            back()
            sleep(2000)
        }
        if(id("com.ss.android.ugc.aweme:id/a1c").exists() && text("取消").exists()){
            TKB.xgsrizhi("删除本地草稿箱")
            try {
                var ss = id("com.ss.android.ugc.aweme:id/a1c").findOnce().checked();
                if (ss == false){
                    var node = id("com.ss.android.ugc.aweme:id/a1c").findOnce().bounds();
                    click(node.centerX(), node.centerY());
                    sleep(1200)
                    click(500, 1840)
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
            sleep(3000)
        }
        if(text("删除").exists() && text("取消").exists()){
            TKB.xgsrizhi("删除")
            click("删除")
            sleep(2000)
        }
        zonghe()
    }
}

//视频删除
function shipinsc() {
    TKB.xgsrizhi("视频删除")
    launch("com.ss.android.ugc.aweme")
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BD > 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.aweme")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi("超时退出")
            return false
        }
        try {
            var tss = 2
            if ((text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
                TKB.xgsrizhi("首页")
                click(970, 1840)
                sleep(2000)
            }
            if (text("编辑资料").exists() && text("获赞").exists() && text("关注").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
                TKB.xgsrizhi("我的界面")
                swipe(700, 1000, 700, 1300, 300)
                sleep(1000)
                var ss = TKB.getAllTexts()
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("作品 ") != -1) {
                        TKB.xgsrizhi(ss[j])
                        click(ss[j])
                        var st = ss[j].split("品 ")
                        var djsl = st[1]
                        TKB.xgsrizhi("作品数量：" + djsl)
                        if (djsl == 0 || djsl == "0") {
                            TKB.xgsrizhi("已经删除完了")
                            return true
                        } else {
                            try {
                                var fg = (new Date()).getTime()
                                while (1) {
                                    if (desc('视频1').exists()) {
                                        TKB.xgsrizhi("视频1")
                                        desc('视频1').click()
                                        sleep(4000)
                                        var tss = 0
                                    } else if (desc('图片1').exists()) {
                                        TKB.xgsrizhi("图片1")
                                        desc('图片1').click()
                                        sleep(4000)
                                        var tss = 1
                                    }
                                    if ((new Date()).getTime() - fg > 5 * 60 * 1000) {
                                        TKB.xgsrizhi("超时没删除完先退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/a9r").exists() && id("com.ss.android.ugc.aweme:id/djq").exists()) {
                                        TKB.xgsrizhi("评论界面1")
                                        back()
                                        sleep(500)
                                        back()
                                        sleep(500)
                                    }
                                    if (id("com.ss.android.ugc.aweme:id/a9r").exists() && !id("com.ss.android.ugc.aweme:id/djq").exists()) {
                                        TKB.xgsrizhi("评论界面")
                                        back()
                                        sleep(500)
                                    }
                                    if (id('com.ss.android.ugc.aweme:id/pc').exists() && tss == 0) {
                                        TKB.xgsrizhi("点击视频")
                                        click(994, 1408) //视频
                                        sleep(2000)
                                    } else if (id('com.ss.android.ugc.aweme:id/pc').exists() && tss == 1) {
                                        TKB.xgsrizhi("点击图片")
                                        click(994, 1562) //图片
                                        sleep(2000)
                                    }
                                    if (text("转发").exists() && text("朋友圈").exists() || text("分享到").exists()) {
                                        TKB.xgsrizhi("删除界面")
                                        swipe(900, 1600, 200, 1600, 500)
                                        sleep(1000)
                                        swipe(900, 1600, 200, 1600, 500)
                                        if (text("删除").exists()) {
                                            TKB.xgsrizhi("看到删除了")
                                            click("删除")
                                            sleep(2000)
                                        } else {
                                            TKB.xgsrizhi("找删除")
                                            swipe(900, 1600, 200, 1600, 500)
                                            sleep(2000)
                                        }
                                    }
                                    if (text('是否确认删除？').exists() && text("删除").exists() && text("取消").exists()) {
                                        TKB.xgsrizhi("确认删除")
                                        click("删除")
                                        sleep(2000)
                                        back()
                                        sleep(2000)
                                        djsl = Number(djsl) - 1
                                        toastLog("还剩余个数" + djsl)
                                    }
                                    if (djsl == 0 || djsl == "0") {
                                        TKB.xgsrizhi("已经删除完了")
                                        return true
                                    }
                                }
                            } catch (error) {
                                sleep(1001)
                                TKB.xgsrizhi(error);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
        zonghe()
    }
}

//退出账号
function tuichuzh() {
    TKB.xgsrizhi('退出账号')
    launch('com.ss.android.ugc.aweme')
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var zz = 0
    var yccs = 0
    while (1) {
        if ((new Date()).getTime() - BD > 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            killapp('抖音短视频')
            sleep(1000)
            launch('com.ss.android.ugc.aweme')
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (text('同城').exists() && text('消息').exists() && text('我').exists() || text('首页').exists() && text('消息').exists() && text('我').exists()) {
                TKB.xgsrizhi('首页')
                text('我').findOnce().parent().parent().parent().click()
                sleep(2000)
            }
            if (text('编辑资料').exists() && text('获赞').exists() && desc('更多').exists() || desc('作者头像').exists() && desc('发现好友').exists()) {
                TKB.xgsrizhi('我的界面')
                desc('更多').findOnce().parent().click()
                sleep(2000)
            }
            if (text('设置').exists() && text('我的二维码').exists() && text('钱包').exists()) {
                TKB.xgsrizhi('功能界面')
                click('设置')
                sleep(2000)
            }
            if (text('设置').exists() && text('帐号与安全').exists() && text('隐私设置').exists()) {
                TKB.xgsrizhi('设置界面')
                click('帐号与安全')
                sleep(2000)
            }
            if (text('帐号与安全').exists() && text('抖音号').exists() && text('手机绑定').exists()) {
                TKB.xgsrizhi('帐号与安全界面')
                if (text('登录设备管理').exists()) {
                    TKB.xgsrizhi('找到登录设备管理')
                    click('登录设备管理')
                    sleep(5000)
                } else {
                    swipe(500, 1650, 500, 1100, 1000)
                }
            }
            if (desc('登录设备管理').exists()) {
                TKB.xgsrizhi('登录设备管理界面')
                if (bounds(0, 675, 1080, 945).exists()) {
                    TKB.xgsrizhi('点击第二个')
                    click(400, 820)
                    sleep(2000)
                } else {
                    TKB.xgsrizhi('没有其他设备')
                    TKB.xgsrizhi('共移除' + yccs + '个账号')
                    return true
                }
                if (desc('设备详情').exists() && desc('立即下线').exists()) {
                    TKB.xgsrizhi('不是本机')
                    var zz = 0
                    desc('立即下线').click()
                    sleep(3000)
                } else if (desc('设备详情').exists() && !desc('立即下线').exists()) {
                    TKB.xgsrizhi('本机')
                    zz++
                    back()
                    sleep(2000)
                }
                if (desc('取消').exists() && desc('移除').exists()) {
                    TKB.xgsrizhi('移除')
                    desc('移除').click()
                    yccs++
                    sleep(3000)
                }
                if (zz > 3) {
                    TKB.xgsrizhi('没有其他账号了')
                    TKB.xgsrizhi('共移除' + yccs + '个账号')
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
        zonghe()
    }
}


//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50*1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime()    //运行的时间
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 3*55*1000){
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id)   //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time*60*1000){
                        TKB.xgsrizhi("继续抖音任务")
                    }else{
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                        // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1){
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" +renwux)
                        TKB.xgsrizhi("执行任务3"+ renwux[0])
                        var config_temp = renwux[0]+"-"+yhname+"-"+yhbh+"-"+sbip+"-"+user_id+"-"+renwux[1]+"-"+renwux[2]+"-"+renwux[3]+"-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben","jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+renwux[0]+".js")
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


//执行美图项目
function dyzhixing(){
    try {
        toastLog("执行抖音任务")
        bofangyy()
        _THREADSSxx = threads.start(function (){
            var bb = TKB.getVerName("抖音短视频")
            if (bb != "11.0.0" && bb != false){
                TKB.xgsrizhi("抖音的版本不对")
                TKB.xiezai("com.ss.android.ugc.aweme")
            }
            var baom = getPackageName("抖音短视频")
            if (baom == null){
                var bbd = TKB.wdjxiazai("抖音短视频", "11.0.0")
                if (bbd == false){
                    TKB.xgsrizhi("没安装成功抖音")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben","tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240*60*60*1000)
            TKB.qinglihh()
            var dl = dydl()
            if (dl == true){
                if (fun == "发布视频"){
                    TKB.xgsrizhi("发布视频")
                    fabusp()
                }else{
                    if (fun == "修改资料"){
                        gaizl()
                    }else{
                        if (fun == "删除作品"){
                            shipinsc()
                            tuichuzh()
                        }else{
                            dyyh()
                        }
                    }
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
            // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" +renwus)
            TKB.xgsrizhi("执行任务2"+ renwus[0])
            var config_temp = renwus[0]+"-"+yhname+"-"+yhbh+"-"+sbip+"-"+user_id+"-"+renwus[1]+"-"+renwus[2]+"-"+renwus[3]+"-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben","jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+renwus[0]+".js")
            _THREADSSxx.interrupt()
        });
    }catch(error){
        log(error);
        TKB.cunqusj("jiaoben","tingzhi")
        //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000,2000))
    }
}



dyzhixing()

// gaizl()

// fabusp()

//fabusp()


