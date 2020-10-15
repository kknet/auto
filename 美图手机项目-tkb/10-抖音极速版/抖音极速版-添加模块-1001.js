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
var dqbaoming = "com.ss.android.ugc.aweme.lite"   //该项目包名
var xmxh = "10"               //项目序号




//********************************************************tkb写的垃圾***************************************************************

var phone,token,code;
var uu = [];
var zm=new Array("q","w","e","r","t","y","u","i","o","p")
var pass = zm[random(0, 9)]+zm[random(0, 9)]+String(random(123456, 654321))+random(2, 4)+zm[random(0, 9)]
log("当前的密码"+pass)

function run(){
    toastLog("1.0.0")
    // if(denglu(0,"0","0") == false){
    var thread2 = threads.start(function(){
        while(1){
            sleep(500)
            if(text("以后再说").exists()){
                log("以后再说")
                click("以后再说")
                sleep(1000)
            }
            if(text("我知道了").exists()){
                log("我知道了")
                click("我知道了")
                sleep(1000)
            }
            if(text("五星好评").exists() && text("取消").exists()){
                log("五星好评")
                click("取消")
                sleep(1000)
            }
            if(text("允许").exists()){
                log("允许")
                click("允许")
                sleep(1000)
            }
            if(id("com.ss.android.ugc.aweme.lite:id/w7").exists()&&text("恭喜！你收到一个现金红包").exists()){
                log("恭喜！你收到一个现金红包")
                try {
                    id("com.ss.android.ugc.aweme.lite:id/w7").findOnce().click()
                    sleep(1000)
                } catch(error) {
                    print(error);
                    sleep(2000)
                }    
            }
        }
    });
    while(true){
        var zz = zhuce()
        if (zz== true){
            gaimima()
            // denglu(1,phone,pass)
            // return true
            break
        }
        break
    } 
    
    threads.shutDownAll()
    // }
}

function denglu(aa,phone_num,password){       //aa=0时判断到登录就去注册极速抖音，aa=1时判断到登录就直接账号密码登录
    toastLog("开始登录")
    var timestamp = Date.parse(new Date())/1000;
    TKB.killapp("抖音短视频")
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    sleep(3999)
    var mima = "a" + phone_num
    while(1){
        if (Date.parse(new Date())/1000 - timestamp > 180){
            toastLog("登录超时")
            return false
        }
       
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
            log("首页")
            click("我")
            sleep(1000)
        }
        if(text("手机号登录有助于您快速找到好友").exists()){
            if(aa == 1){
                if(text("密码登录").exists()){
                    log("密码登录")
                    click("密码登录")
                    sleep(1000)
                }else{
                    if(text("+86").exists()){
                        sleep(1200)
                        TKB.funcFingIdClick("com.ss.android.ugc.aweme:id/c85")
                        sleep(500)
                        if(text("输入手机号码").exists()){
                            log("输入手机号2")
                            setText([0],phone_num)      //输入手机号码
                            sleep(1000)
                            // setText([1],password)      //输入手机号码
                            setText([1],mima)      //输入手机号码
                            sleep(800)
                            click(472, 298)
                            sleep(800)
                            if(desc("未选中，我已阅读并同意 用户协议 和 隐私政策").exists()){
                                desc("未选中，我已阅读并同意 用户协议 和 隐私政策").findOnce().click();
                            }
                            sleep(800)
                            TKB.funcFingIdClick("com.ss.android.ugc.aweme:id/pj")
                            sleep(1000)
                        }
                    }
                }
            }
            else if(aa ==0){
                return false
            }
        }
        if(text("此账号已经被封禁").exists() ){
            log("此账号已经被封禁")
            return false
        }
        if(text("手机通讯录").exists() ){
            log("手机通讯录")
            back()
            sleep(1000)
        }
        if(text("帐号或者密码错误").exists() ){
            log("找回密码")
            return false
        }
        if(text("跳过").exists() ){
            log("跳过")
            click("跳过")
            sleep(1000)
        }
        if(text("编辑资料").exists() ){
            toastLog("登录成功")
            break;
        }
        if(text("重新打开应用").exists() ){
            click("重新打开应用")
            sleep(2000)
        }
        if(text("关闭应用").exists() ){
            click("关闭应用")
            sleep(2000)
            launch("com.ss.android.ugc.aweme")
        }
    }
    return true
}

function zhuce(){   //注册抖音
    var baoming 
    var TA = (new Date()).getTime()
    phone = TKB.getfwq(sbip, yhname , yhbh)
    if (phone == false){
        phone = getPhone()
        if (phone == false){
            log("没获取到号码")
            return false
        }
    }
    toastLog("开始注册抖音极速版本"+phone)
    TKB.killapp("抖音极速版")
    sleep(1200)
    var bz = 0
    while(true){
        baoming = currentPackage()
        if (baoming !="com.ss.android.ugc.aweme.lite"){
            toastLog("打开抖音")
            log(baoming)
            launch("com.ss.android.ugc.aweme.lite")
            sleep(3999)
        }
        else{
            break
        }
    }
    while(1){
        if((new Date()).getTime() - TA >3*60*1000 ){    //5分钟
            toastLog("超时退出")
            return false
        }
        
        if((text("关注").exists() && text("消息").exists() && text("我").exists() ) ){
            log("首页")
            if(!text("编辑资料").exists()){
                log("不是编辑资料，我")
                click("我")
            }
        }
        if(text("其他手机号码注册").exists()){
            click("其他手机号码注册")
            sleep(1200)
        }
        if(text("登录后即可展示自己").exists()){
            log("输入手机号")
            sleep(1200)
            // if(!text("+86").exists()){
            //     var a = id("com.ss.android.ugc.aweme.lite:id/b_0").findOnce()           //选择国家
            //     if(a != null){
            //         a.click()
            //         sleep(1000)
            //     }
            // }
            if(text("请输入手机号").exists()){
                setText([0],phone)  //输入手机号
                sleep(50)
                setText([0],phone)  //输入手机号
                sleep(1200)
                bz = 1
            }else if(id("com.ss.android.ugc.aweme.lite:id/a80").exists()){
                if (bz == 1){
                    id("com.ss.android.ugc.aweme.lite:id/a80").findOne().click()  //获取短信验证码
                    sleep(1000) 
                }
                else{
                    TKB.funcFingIdClick("com.ss.android.ugc.aweme.lite:id/b_1")     //删除原来填写的手机号
                }        
            }
        }
        
        if(text("请输入验证码").exists()){
            log("请输入验证码")
            try {
                var a = id("com.ss.android.ugc.aweme.lite:id/bgd").findOnce()
                if(a != null){
                    if (id("com.ss.android.ugc.aweme.lite:id/bgd").findOnce().checked() == false){
                        a.click()
                    }
                }else{
                    a = id("com.ss.android.ugc.aweme.lite:id/bgh").findOnce()
                    if(a != null){
                        if (id("com.ss.android.ugc.aweme.lite:id/bgh").findOnce().checked() == false){
                            a.click()
                        }
                    }
                }
            } catch(error) {
                print(error);
                sleep(2000)
            }
            sleep(2000)
            if(text("访问太频繁，请稍后再试").exists()){
                log("访问太频繁，请稍后再试")
                lahei("频繁")//反馈状态
                return false
            }

            code = MS(phone)

            if(code == "1"){
                lahei("无短信")//反馈状态
                return false
            }
            else if(code == "2"){
                lahei("封号")//反馈状态
                return false
            }
            else if(code == "3"){
                lahei("频繁")//反馈状态
                return false
            }
            setText([0],code)  //输入密码
            sleep(1000)
            var umm = 0
            while(umm<20){
                umm++;
                if(text("错误次数过多或验证码过期，请稍后重试").exists()){
                    toastLog("错误次数过多或验证码过期，请稍后重试")
                    break
                }
                if(text("跳过").exists()&&text("完善资料").exists()){
                    log("跳过")
                    break
                }
                if((text("关注").exists() && text("消息").exists() && text("我").exists() ) ){
                    log("首页")
                    break;
                }
                if(text("访问太频繁，请稍后再试").exists()){
                    log("访问太频繁，请稍后再试")
                    break;
                }
                if(text("验证码为空，请输入验证码").exists()){
                    log("验证码为空，请输入验证码")
                    lahei("打码")//反馈状态
                    return "3"
                }
                if (textContains("滑动查看更多").exists()) {
                    toastLog("滑动查看更多")
                    swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.2, 1200);
                    sleep(2000)
                    break
                }
                sleep(1000)
            }
        }
        if(text("验证码为空，请输入验证码").exists()){
            log("验证码为空，请输入验证码")
            lahei("打码")//反馈状态
            return "3"
        }
        if(text("错误次数过多或验证码过期，请稍后重试").exists()){
            toastLog("错误次数过多或验证码过期，请稍后重试")
            return false
        }
        if(text("跳过").exists()&&text("完善资料").exists()){
            log("跳过")
            click("跳过")
            sleep(1000)
            //lahei("跳过")//反馈状态
            break
        }
        if(text("分享主页").exists()  || text("编辑资料").exists()  ){
            log("分享主页")
            //lahei("完成")//反馈状态
            break
        }
        //关闭
        if(text("手机号登录有助于您快速找到好友").exists()){
            log("抖音登录界面错误")
            return false
        }
        if(text("访问太频繁，请稍后再试").exists()){
            log("访问太频繁，请稍后再试")
            lahei("频繁")//反馈状态
            return false
        }
        if(text("该账号已被封禁").exists()){
            log("该账号已被封禁")
            lahei("封号")//反馈状态
            return false
        }
        if(text("确定").exists()&&text("很抱歉，“抖音极速版”已停止运行。").exists()){
            log("访很抱歉，“抖音极速版”已停止运行。")
            click("确定")
            sleep(2000)
            baoming = currentPackage()
            if (baoming !="com.ss.android.ugc.aweme.lite"){
                log("打开抖音")
                log(baoming)
                launch("com.ss.android.ugc.aweme.lite")
                sleep(1000)
            }
        }
        if(id("com.ss.android.ugc.aweme.lite:id/i2").exists()&&text("搜索").exists()){
            log("搜索")
            id("com.ss.android.ugc.aweme.lite:id/i2").findOnce().click()
            sleep(1000)
        }
        if(text("个人信息保护指引").exists()){
            toastLog("个人信息")
            click("好的")
        }
    }

    // TKB.upfwqhm(sbip, yhname , yhbh, phone)
    // lahei("注册成功")
    return true
}

function gaimima(){
    toastLog("开始修改密码")
    var temp = 0
    var TSD = (new Date()).getTime()
    var bs = (new Date()).getTime()
    var mima = "a" + phone
    TKB.upfwqhm(sbip, yhname , yhbh, phone)
    lahei("注册成功")
    while(1){
        if ((new Date()).getTime() - TSD > 3*60*1000){
            log("超时关闭重启")
            TKB.killapp("抖音极速版")
            sleep(2000)
            launch("com.ss.android.ugc.aweme.lite")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - bs > 6*60*1000){
            log("超时退出")
            TKB.killapp("抖音极速版")
            sleep(1000)
            return false
        }

        if((text("关注").exists() && text("消息").exists() && text("我").exists() ) ){
            log("首页")
            if(!text("编辑资料").exists()){
                log("不是编辑资料，我")
                click("我")                          
                sleep(1200)
            }
        }
        if(text("编辑资料").exists()){
            log("编辑资料")
            var a = id("com.ss.android.ugc.aweme.lite:id/b0y").findOnce()
            if(a != null){
                if (id("com.ss.android.ugc.aweme.lite:id/b0y").findOnce().checked() == false){
                    a.click()
                }
            }        
        }
        if(text("设置").exists() && text("未成年保护工具").exists()){
            var a = id("com.ss.android.ugc.aweme.lite:id/ct3").findOnce()
            if(a != null){
                if (id("com.ss.android.ugc.aweme.lite:id/ct3").findOnce().checked() == false){
                    a.click()
                }
            }   
        }

        if(text("隐私设置").exists()){
            click("帐号与安全")
            sleep(1200)        
        }

        if(text("抖音密码").exists()){
            if (temp == 0){
                click("抖音密码")
                sleep(1200)
            }
            else{
                toastLog("修改密码成功")
                lahei("修改密码成功")
                return true
            }
        }

        if(text("设置新的登录密码").exists()){
            temp = 1
            // setText(pass)
            setText(mima)
            sleep(800)
            var a = id("com.ss.android.ugc.aweme.lite:id/l1").findOnce()
            if(a != null){
                if (id("com.ss.android.ugc.aweme.lite:id/l1").findOnce().checked() == false){
                    a.click()
                }
            }    
        }

        if(text("修改登录密码").exists()){
            sleep(5000)
            var code2 = MS(phone)
            if (code != "1" && code2 != code){
                setText(code2)
                sleep(800)
                var a = id("com.ss.android.ugc.aweme.lite:id/l1").findOnce()
                if(a != null){
                    if (id("com.ss.android.ugc.aweme.lite:id/l1").findOnce().checked() == false){
                        a.click()
                        sleep(4000)
                    }
                } 
                var out = (new Date()).getTime() 
                while(1){
                    if((new Date()).getTime() - out >30*1000 ){    //30
                        toastLog("超时退出")
                        break
                    }
                    if(text("抖音密码").exists()){
                        toastLog("修改密码成功")
                        lahei("完成")//反馈状态
                        return  true
                    }
                }
            }
        }
    }
}

function MS(ph){//获取短信
    toastLog("获取短信")
    var TB = (new Date()).getTime() 
    while(1){
        if((new Date()).getTime() - TB > 90*1000){  // 一分钟
            log("获取短信超时")
            return "1"
        }
        if(text("访问太频繁，请稍后再试").exists()){
            log("访问太频繁，请稍后再试")
            return "3"
        }
        if(text("该账号已被封禁").exists()){
            log("该账号已被封禁")
            return "2"
        }
        if(text("验证码为空，请输入验证码").exists()){
            log("验证码为空，请输入验证码")
            return "3"
        }
        if(text("重新发送").exists()){
            click("重新发送")
            sleep(3999)
        }
        try {
            var r = http.get("http://diandianguaji.xyz/getMsg?itemId=21&mobile="+ph+"&token=5eb8d0260117d65285adb0b1cba6b091");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var gg = TKB.getInsideString(body, "验证码","，用于" )
                if (gg != ""){
                    return gg
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                log("没网")
                sleep(3000)
            }
           
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function getPhone(){        //获取手机号
    log("获取抖音号")
    var url = "http://diandianguaji.xyz/getMobile?itemId=21&num=1&token=5eb8d0260117d65285adb0b1cba6b091"
    log(url)
    var TT = (new Date()).getTime()
	while(true){  
        try{
            if ((new Date()).getTime() - TT > 3*60*1000){
                log("超时退出")
                return false
            }
            var res = http.get(url);
            if(res.statusCode == 200 ){
                var ss = res.body.string()
                log(ss)
                var ss_table = JSON.parse(ss)
                if (ss_table['msg'] =="获取成功"){
                    return ss_table['mobile'][0]
                }else{
                    toastLog("无号码")
                    sleep(2000);
                }
            }
            else{
                log("没网")			
                sleep(3000);  
            }
        }catch (e) 
        {
            log(e)			
            sleep(3000);
        }
	}
}

function lahei(zz){  //改变状态
    log("拉黑"+zz)	
	var TT = (new Date()).getTime()
	while(true){  
        try{
            if ((new Date()).getTime() - TT > 20*1000){
                log("超时退出")
                return false
            }
            res = http.get("http://diandianguaji.xyz/addBlack?itemId=21&mobile="+phone+"&token=5eb8d0260117d65285adb0b1cba6b091");
            if(res.statusCode == 200 ){
                ss = res.body.string()
                log(ss)
                var ss_table = JSON.parse(ss)
                if (ss_table['code']== 0){
                    toastLog("拉黑成功")
                    break
                }else{
                    toastLog("拉黑失败")
                    sleep(4000);
                }
            }
		}catch (e) 
        {
            log("没网")			
            sleep(3000);
        }
	}
}





//******************************************************************抖音项目*****************************************************************

function zonghe(){
    if(text("稍后").exists() && text("去打开").exists()){
         TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if(text("五星好评").exists() && text("取消").exists()){
        log("五星好评")
        click("取消")
        sleep(1000)
    }

    if(id("com.ss.android.ugc.aweme.lite:id/w7").exists()&&text("恭喜！你收到一个现金红包").exists()){
        log("恭喜！你收到一个现金红包")
        try {
            id("com.ss.android.ugc.aweme.lite:id/w7").findOnce().click()
            sleep(1000)
        } catch(error) {
            print(error);
            sleep(2000)
        }    
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
    if (text("查看收益").exists()) {
        TKB.xgsrizhi("查看收益")
        back()
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
    if (text("以后再说").exists()) {
        click("以后再说");
         TKB.xgsrizhi("以后再说");
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
    if (text("好的").exists()) {
        click("好的");
         TKB.xgsrizhi("好的");
        sleep(1200)
    }
    if (textContains("滑动查看更多").exists()) {
         TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
}

//抖音极速版登录上传信息
function dydl(){
     TKB.xgsrizhi("抖音登录极速版")
    launch("com.ss.android.ugc.aweme.lite")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - RT > 12*60*1000){
             TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.ss.android.ugc.aweme.lite")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
             TKB.xgsrizhi("超时没登录成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.aweme.lite")
            sleep(3000)
            launch("com.ss.android.ugc.aweme.lite")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if(text("其他方式登录").exists() && text("密码登录").exists() ||  text("获取短信验证码").exists() && text("帮助").exists() ){
            TKB.xgsrizhi("还未注册登录")
            toastLog("还未注册登录")
            run()
       }

        if(text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() ||  desc("作者头像").exists() && desc("发现好友").exists() ){
             TKB.xgsrizhi("我的界面")
            toastLog("登录成功")
            sleep(2000)
            return true
        }else{
            if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
                 TKB.xgsrizhi("首页")
                click(1020, 1950)
                sleep(2000)
            }
        }
        
        zonghe()
    }
}

//抖音极速版养号
function dyyh(){
     TKB.xgsrizhi("抖音极速版养号")
    launch("com.ss.android.ugc.aweme.lite")
    var bq = ["微笑","大笑","哈欠","震惊","送心","困","what","泣不成声","小鼓掌","大金牙","偷笑","石化","思考","吐血","可怜","嘘","撇嘴","黑线","笑哭","雾霾","奸笑","得意","坏笑","抓狂","泪奔","钱","吻","恐惧","笑","快哭了","翻白眼","互粉","赞","鼓掌","祈祷","kiss","去污粉","666","玫瑰","胡瓜","啤酒","我想静静","委屈","舔屏","飞吻","再见","紫薇别走","听歌","求抱抱","绝望的凝视","不失礼貌的微笑","吐舌","呆无辜","看","白眼","熊吉","骷髅","黑脸","吃瓜群众","绿帽子","汗","摸头","皱眉","擦汗","红脸","尬笑","做鬼脸","强","如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TTguank = (new Date()).getTime()
    var dinz = random(30,60)
    var dj = random(1,100)
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
             TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.ss.android.ugc.aweme.lite") 
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
             TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh("com.ss.android.ugc.aweme.lite")
            sleep(3000)
            launch("com.ss.android.ugc.aweme.lite")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if((text("同城").exists() && text("消息").exists() && text("我").exists() )||  (text("首页").exists() && text("消息").exists() && text("我").exists())  ){
             TKB.xgsrizhi("首页")
            TSD = (new Date()).getTime()
            if(!text("推荐").exists()){
                 TKB.xgsrizhi("点首页")
                click("首页")
                sleep(2000)
            }else{
                if(tem == 0){
                     TKB.xgsrizhi("推荐")
                    click("推荐")
                    sleep(random(10, 15) * 1000);
                    tem = 1
                }else{
                    if (dj > 98){
                         TKB.xgsrizhi("去评论、点赞、关注、看直播")
                        dj = random(1,100)
                        var nu = random(1,10)
                        if(nu == 1){
                             TKB.xgsrizhi("关注")
                            click(990, 870)
                            sleep(1000)
                            swipe(500, 1600, 600, 400, 1200);
                            sleep(random(1, 3) * 1000);
                        }else{
                            if(nu == 2){
                                TKB.xgsrizhi("点赞")
                                click(990, 1020)
                                sleep(1000)
                                swipe(500, 1600, 600, 400, 1200);
                                sleep(random(1, 3) * 1000);
                            }else{
                                if(nu > 5){
                                    TKB.xgsrizhi("浏览评论")
                                    click(990, 1240)
                                    sleep(2000)
                                    var aa = random(1, 5)
                                    for(var i = 0;i< aa ;i++){
                                        swipe(533,1700, 557,400,random(400, 600))
                                        sleep(random(1000, 3000))
                                    }
                                    back()
                                    sleep(3000)
                                    back()
                                    sleep(500)
                                }
                            }
                        }
                    }else{
                        if((new Date()).getTime() - TTguank > dinz*1000){    
                            toastLog(dinz+"秒，滑动")
                            swipe(500, 1600, 600, 400, 1200);
                            sleep(random(5, 10) * 1000);
                            dinz = random(30,60)
                            TTguank = (new Date()).getTime()
                            dj = random(1,100)
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
            toastLog("不看直播")
            back()
            sleep(3000)
        }
        if(id("com.ss.android.ugc.aweme.lite:id/kl").exists() && text("留下你的精彩评论吧").exists() || id("com.ss.android.ugc.aweme.lite:id/aif").exists() && text("留下你的精彩评论吧").exists() ){
             TKB.xgsrizhi("留下你的精彩评论吧")
            back()
            sleep(3000)
        }
        if(id("com.ss.android.ugc.aweme.lite:id/kl").exists() && id("com.ss.android.ugc.aweme.lite:id/aif").exists()){
            TKB.xgsrizhi("留下你的精彩评论吧2")
           back()
           sleep(3000)
       }
        if(text("点击重播").exists()){
            toastLog("点击重播，滑动")
            swipe(500, 1600, 600, 400, 1200);
            sleep(random(10, 20) * 1000);
            sleep(1000)
        }
        zonghe()
    }
}



//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

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
                        log("获取到任务")
                        // var renwu_table = renwu.split("-")
                        sstt = 0
                        for(var i =0 ; i < renwu.length; i++){
                            if (renwu[i] == xmxh ){
                                 TKB.xgsrizhi("继续抖音极速版任务")
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
                             TKB.xgsrizhi("服务器上没有抖音极速版任务")
                            TKB.qinglihh(dqbaoming)
                            sleep(2000)
                            // meitxx()
                             TKB.xgsrizhi("执行完存停止数据2")
                            files.write("/sdcard/jiaoben.txt", "tingzhi")
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

//*******************************************************新服务器*********************************************************************




//*******************************************************对接服务器*****************************************************************


//执行美图项目
function dyzhixing(){
    toastLog("执行抖音极速版任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        TKB.qinglihh(dqbaoming)
        // var rw =  TKB.hqrenwu(sbip, "douyinflag", yhname, yhbh)
        try{
            var ddl = dydl()
            if (ddl != false){
                log("抖音极速版养号")
                dyyh()
            }
        }catch(error) {
            sleep(1001)
             TKB.xgsrizhi(error);
        }
        // meitxx(1)
         TKB.xgsrizhi("执行完存停止数据")
         _THREADSS.interrupt()
        files.write("/sdcard/jiaoben.txt", "tingzhi")
         TKB.cunqusj("jiaoben","tingzhi")
         sleep(1000)
        java.lang.System.exit(0);
        _THREADSSxx.interrupt()
    });
    // exit()
}

try {

    bofangyy()
    var baom = getPackageName("抖音极速版")
    if (baom == null){
        log("未安装抖音短视频")
        var bbd = TKB.wdjxiazai("抖音极速版", "9.3.0")
        if (bbd != false){
            dyzhixing()
        }
    }else{
        dyzhixing()
    }
} catch(error) {
    log(error);
     TKB.cunqusj("jiaoben","tingzhi")
    files.write("/sdcard/jiaoben.txt", "tingzhi");
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}




// ws()  抖音号: dytisi014o6k
// // dlqq()
// var ss =  TKB.getAllTexts()
//  TKB.xgsrizhi(ss)
// sleep(1000)

// var baoming = currentPackage()
//  TKB.xgsrizhi(baoming)
//  TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







