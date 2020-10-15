

auto.waitFor()
var phone,token,code;
var uu = [];
var zm=new Array("q","w","e","r","t","y","u","i","o","p")
var pass = zm[random(0, 9)]+zm[random(0, 9)]+String(random(123456, 654321))+random(2, 4)+zm[random(0, 9)]
log("当前的密码"+pass)
var TKB = require('./tkb2.js')


if (!requestScreenCapture()) {      //截图权限申请
    alert("请求截图权限失败！");
    exit();
}

run()
//gaimima()

function run(){
    toastLog("1.0.0")
    if(denglu(0,"0","0") == false){
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
                break
            }
        } 
        denglu(1,phone,pass)
        threads.shutDownAll()
    }
}

function denglu(aa,phone_num,password){       //aa=0时判断到登录就去注册极速抖音，aa=1时判断到登录就直接账号密码登录
    toastLog("开始登录")
    var timestamp = Date.parse(new Date())/1000;
    TKB.killapp("抖音短视频")
    sleep(2000)
    launch("com.ss.android.ugc.aweme")
    sleep(3999)
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
                            setText([1],password)      //输入手机号码
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
    phone = getPhone()
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
    return true
}

function gaimima(){
    toastLog("开始修改密码")
    var temp = 0
    while(1){
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
            setText(pass)
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
	while(true){  
        try{
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

