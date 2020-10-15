

auto.waitFor()
var phone,token,code;


var TKB = require('./tkb6.js')


if (!requestScreenCapture()) {      //截图权限申请
    alert("请求截图权限失败！");
    exit();
}


function zhuce(){   //注册今日头条
    var baoming 
    phone = getPhone()
    toastLog("开始注册今日头条极速版本"+phone)
    TKB.killapp("今日头条极速版")
    sleep(1200)
    var bz = 0
    while(true){
        baoming = currentPackage()
        if (baoming !="com.ss.android.article.news"){
            toastLog("打开今日头条")
            log(baoming)
            launch("com.ss.android.article.news")
            sleep(3999)
        }
        else{
            break
        }
    }
    var outtime = TKB.ostime()
    while(1){
        if(TKB.ostime() - outtime > 300 ){ 
            toastLog("重新来")
            TKB.killapp("今日头条")
            sleep(2000)
            launch("com.ss.android.article.news")
            sleep(3999)
            outtime = TKB.ostime()
        }
        if((text("首页").exists() && text("西瓜视频").exists() && text("我的").exists() ) ){
            log("首页-注册成功")
            break;
        }
        if((text("首页").exists() && text("西瓜视频").exists() && text("未登录").exists() ) ){
            log("首页点未登录")
            click("未登录")
            sleep(2000)
        }
        if(text("系统设置").exists() && text("消息通知").exists()){
           TKB.funcFingIdClick("com.ss.android.article.news:id/xq")
           sleep(1200)
        }
        if(text("免密登录").exists()){
            log("输入手机号")
            sleep(1200)
            setText([0],phone)  //输入手机号
            sleep(50)
            setText([0],phone)  //输入手机号
            sleep(1200)
            TKB.funcFingIdClick("com.ss.android.article.news:id/z_")
            sleep(1200)
        }
        
        if(text("输入验证码").exists()){
            log("请输入验证码")
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
                if(text("跳过").exists()){
                    log("跳过")
                    click("跳过")
                    sleep(1200)
                    break
                }
                if((text("首页").exists() && text("西瓜视频").exists() && text("我的").exists() ) ){
                    log("首页-注册成功")
                    break;
                }
                sleep(1000)
            }
        }
        if(text("使用").exists() && text("去修改").exists()){
            toastLog("使用和修改")
            click("使用")
            sleep(2000)
        }
    }
    return true
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
            var r = http.get("http://diandianguaji.xyz/getMsg?itemId=24&mobile="+ph+"&token=5eb8d0260117d65285adb0b1cba6b091");
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
    log("获取今日头条号")
    var url = "http://diandianguaji.xyz/getMobile?itemId=24&num=1&token=5eb8d0260117d65285adb0b1cba6b091"
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
            res = http.get("http://diandianguaji.xyz/addBlack?itemId=24&mobile="+phone+"&token=5eb8d0260117d65285adb0b1cba6b091");
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



zhuce()