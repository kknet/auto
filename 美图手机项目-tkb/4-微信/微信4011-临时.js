

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "com.tencent.mm"   //该项目包名
var xmxh = "4"               //项目序号


/*

@微信版本7.0.11
@作者：TKB

*/


if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

if( files.exists("/sdcard/二维码识别.dex") == false){
    eweima()
}

runtime.loadDex("/sdcard/二维码识别.dex");
closeSouGou()     //关闭搜索输入法

var fuzhu = 0    //辅助注册开关


function main(){
    var t1 =new Date().getTime()
    var buzou = -1          //步骤
    var erweima = 0         //记录出现二维码次数
    var fasong = 0          //记录发送短信失败次数
    var phone_num = WZPhone()
    getVpnUser()
    xitongVPN("开")
    var tem = 0        //记录先去拿号状态
    var bb = 0         //记录先去拿号状态
    var oId  = ""      //辅助平台返回的标识
    qinglihh()
    runwx()
    while (true){
        if(text("允许").exists()){
            log("允许")
            click("允许")
            sj(1590,1465)
        }
        if(id("com.tencent.mm:id/djr").exists()){
            log("权限申请--知道了")
            click("知道了")
            sj(800,1500)
        }
        if (buzou >= -1){
            // if (tem == 0 && bb== 1){
            //     log("去拿号码")
            //     phone_num = WZPhone()
            //     tem = 1 
            // }
            if(text("注册").exists() & text("登录").exists() ){
                log("注册")
                if (bb== 1){
                    tkb(694+50,1856+50)
                    sleep(1200)
                }else{
                    log("先去拿号码")
                    bb = 1
                }
                
                buzou = 0
            }

            if(text("通讯录").exists() &&  text("发现").exists() ){
                toastLog("注册成功")
                home()
                return true
            }
            
            if(text("例如：陈晨").exists()){
                log("例如：陈晨")
                if (bb== 1){
                    tkb(549, 565)       //点输入
                    sleep(100)
                    tkb(549, 565)       //点输入
                    var zm=new Array("q","w","e","r","t","y","u","i","o","p")
                    zimu(zm[random(0, 10)])
                    sj(800,1200)
                }else{
                    log("先去拿号码")
                    bb = 1
                }
            }   

            if(text("昵称").exists() & text("手机号").exists() & text("请填写手机号").exists() ){
                log("昵称")
                sleep(1200)
                tkb(861, 873)             //输入手机号
                sj(800,900)
                tkb(861, 873)
                log(phone_num)

                for (i = 0; i < phone_num.length; i++) { 
                    var danzimu = phone_num.substr(i,1)
                    log("单个字母"+danzimu)
                    haoma(danzimu)
                    sj(50,99)
                }
            
                sj(200,210)
                tkb(959, 1019)
                sj(200,210)
                tkb(959, 1019)
                sj(100,199)
                
                setText(2,"asd123456")

                tkb(970, 1948)    //去键盘
                sleep(1200)
            }

            if(text("你输入的是一个无效的手机号码").exists()){
                log("你输入的是一个无效的手机号码")
                back()
                sj(1780,1970)
                back()
                sj(1780,1970)
            }
        }
        if (buzou >=0){
            if(text("已阅读并同意").exists()){
                toastLog("已阅读并同意")
                buzou = 1
                try{
                    var uc = id("com.tencent.mm:id/dhj").find();
                    for(var i = 0; i < uc.length; i++){
                        var tv = uc[i];
                        if(tv.checked() == false){
                            toastLog("没有勾选")
                            tv.click()
                        }
                    }
                    var uca = id("com.tencent.mm:id/doc").find();
                    for(var i = 0; i < uca.length; i++){
                        var tv = uca[i];
                        if(tv.checked() == false){
                            toastLog("没有勾选2")
                            tv.click()
                        }
                    }
                    var uca = id("com.tencent.mm:id/weuiAgree").find();
                    for(var i = 0; i < uca.length; i++){
                        var tv = uca[i];
                        if(tv.checked() == false){
                            toastLog("没有勾选3")
                            tv.click()
                        }
                    }
                } catch(error) {
                    print(error);
                    sj(1780,1970)
                } 
                
                tkb(355, 1304) // 点击注册
                var tt = 0;
                while(1){
                    tt++
                    if (tt > 30){
                        toastLog("点注册30还卡，换VPN")
                        back()
                        runwx()
                        break
                    }
                    sleep(1000)
                    if(text("我已阅读并同意上述条款").exists()){
                        toastLog("我已阅读并同意上述条款")
                        break
                    }
                    if(text("微信是一款由我们提供服务的社交产品，为说明微信会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下：").exists()){
                        toastLog("下一步")
                        break
                    }
                    if(text("安全验证").exists() & text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false  ){
                        buzou = 2
                        break
                    }
                    if(textContains("操作太频繁").exists()){
                        break
                    }
                    if(textContains("发送短信后请回到本界面继续下一步").exists()){
                        buzou = 3
                        break
                    }
                    if(text("让用户用微信扫描下面的二维码").exists()){
                        toastLog("出现辅助1")
                        buzou = 5
                        break
                    }
                }
            }
        }
        if (buzou >=1){
            if(text("微信是一款由我们提供服务的社交产品，为说明微信会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下：").exists()){
                toastLog("我已阅读并同意上述条款3")
                buzou = 2
                sleep(2000)
                tkb(61, 1730)
                sj(800,1200)
                tkb(348, 1900)
                var tnum = 0
                while(1){
                    tnum++
                    sleep(1000)
                    if(text("安全验证").exists() & text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false ){
                        toastLog("开始安全验证1")
                        break
                    }
                    if (tnum > 30){
                        toastLog("点协议30还卡，换sk5IP")
                        back()
                        
                        runwx()
                        break
                    }
                    if(textContains("操作太频繁").exists()){
                        break
                    }
                }
            }
        }
        if (buzou >=2){
            if(text("安全验证").exists() & text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false ){
                log("开始安全验证2") //toastLog("开始安全验证2");  
                buzou = 3
                sj(998,1890)
                tkb(264+50,1665)
                sj(4790,5480)
                var num = 0
                while (true){
                    sleep(1000)
                    num = num +1
                    if(text("拖动下方滑块完成拼图").exists()){
                        break;
                    }
                    if (num > 30){
                        toastLog("点安全验证30还卡，换sk5IP")
                        back()
                        runwx()
                        break;
                    }
                    if(text("让用户用微信扫描下面的二维码").exists()){
                        toastLog("出现辅助1")
                        buzou = 5
                        break
                    }
                    if(text("不方便扫码").exists()){
                        break;
                    }
                    if(text("请输入验证码").exists()){
                        break
                    }
                    if(textContains("操作太频繁").exists()){
                        break
                    }
                    if(textContains("发送短信后请回到本界面继续下一步").exists()){
                        break
                    }
                }
            }
        }
        if (buzou >=3){
            if(text("拖动下方滑块完成拼图").exists()){
                log("看到滑块")
                buzou = 5
                sleep(2000)
                // if (huakuai == 0){
                //     toast("请手动过滑块")
                // }
                // else if (huakuai == 1){
                //     if (text("请控制拼图块对齐缺口").exists()){
                //         click(833+10,1461+10)
                //         sleep(3000)
                //     }
                //     var jl = findhuakuai();
                //     log("xxxxx="+jl)
                //     if(jl != 0){
                //         TKBhuakuai(jl)
                //     }
                //     else if(jl == 0){
                //         click(833+10,1461+10)
                //         sleep(3000)
                //     }
                // }  
            } 
        }
        if (buzou >=5){
            if(text("让用户用微信扫描下面的二维码").exists()){
                toastLog("出现辅助2")
                buzou = 3 
                if (fuzhu == 0){
                    erweima = erweima + 1
                    toastLog("第"+erweima+"次")
                    back()
                    if (erweima > 4 ){
                        toastLog("二维码")
                        WZLaHei("二维码")
                        break
                    }  
                }
                else if(fuzhu == 1){
                    sleep(5000)
                    var url = jiexi()
                    if (url == false){
                        toastLog("解析二维码失败")
                        back()
                        sleep(2000)
                    }
                    else{
                       oId = malixiadan(url,phone_num)
                    }
                    var timenum = 0
                    while(timenum < 155){
                        timenum = timenum+1
                        if(text("返回注册流程").exists()||text("验证成功").exists()){
                            click("返回注册流程")
                            break
                        }
                        if (textContains("该好友本月/近三个月/今年辅助验证次数已超出限制，请邀请其他好友辅助验证").exists()) {
                            toastLog("该好友本月/近三个月/今年辅助验证次数已超数限制")
                            break
                        }
                        sleep(2000)
                        toastLog(timenum)
                    }
                    if (timenum>=154){
                        toastLog("没有辅助成功")
                        malifankuidingdan(oId,2)
                        break
                    }
                }
            }
        }
        if (buzou >=3){
            if(textContains("发送短信后请回到本界面继续下一步").exists()){
                buzou = 6
                toastLog("已发送短信，下一步")
                sj(450,560)
                if(id("com.tencent.mm:id/ed1").exists()){
                    try {
                        var tt = id("com.tencent.mm:id/ed1").findOnce().text();
                        tt = tt.split("zc")
                        if (tt.length >= 2 ){
                            log(tt[1])
                            WZSendMS(tt[1])
                            sleep(10000)
                            click("已发送短信，下一步")
                            sleep(6000)
                        }
                        else{
                            toastLog("没有识别到发短信的内容")
                        }
                    } catch(error) {
                        print(error);
                        sleep(2000)
                    }
                }
                else{
                    toString("找不到ID")
                }

            } 
            if(text("已发送短信，下一步").exists()){
                click("已发送短信，下一步")
                sleep(6000)
            }
        }
        if (buzou >=6){
            if (textContains("操作太频繁，请稍后再试").exists()) {
                toastLog("操作太频繁")
                WZLaHei("频繁")
                break
            }

            if (textContains("你已设置拒收微信登录、换绑、").exists()) {
                toastLog("出现KQ")
                WZLaHei("KQ")
                break
            }
            if(text("不是我的，继续注册").exists()){     //国外用的
                toastLog("不是我的，继续注册")
                sleep(800)
                tkb(523, 1017)
                click("不是我的，继续注册")
                sleep(2000)
            }
            
            if(text("通讯录").exists() &&  text("发现").exists() ){
                toastLog("注册成功")
                home()
                WZLaHei("注册成功")
                return true
            }
        }
        if(text("确定").exists()){     //封号
            toastLog("疑似出现封号")
            if (textContains("当前手机号").exists()) {
                WZLaHei("当月注册")
                break
            }
            else if(textContains("操作太频繁").exists()){
                
                WZLaHei("频繁")
            }
            else if(textContains("尚未收到你发送的短信").exists()){
                fasong = fasong + 1
                log("收不到第"+fasong+"次")
                sleep(1000)
                if (fasong > 3){
                    WZLaHei("注册失败")
                    break
                }
                else {
                    click("确定")   //点确定 
                    sleep(2000)
                    buzou = 3
                }  
            }
            else{
                click("确定")   //点确定 
                sleep(2000)
            }
        }
    }
    return false
}

function runwx(){
    launch("com.tencent.mm");
    sleep(2000)
}

function pengyouquan(){
    toastLog("开始发朋友圈")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            toastLog("点发现")
            click("发现")
            sleep(1200)
        }
        if(text("我知道了").exists()){
            toastLog("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if(text("朋友圈").exists()){
            toastLog("点朋友圈")
            click("朋友圈")
            sleep(1200)
        }
        if(id("com.tencent.mm:id/baj").exists()){
            toastLog("长按界面")
            longClick(929+30,75+30)
            sleep(2000)
        }
        if(text("发表文字").exists()){
            setText(0,"武汉加油！！")
            sleep(1200)
            click("发表")
            sleep(3000)
            break;
        }
    }
}

function yinsi(){
    toastLog("隐私设置")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            click("我")
            sleep(1200)
        }
        if(text("设置").exists()){
            click("设置")
            sleep(1200)
        }
        if(text("隐私").exists()){
            click("隐私")
            sleep(1200)
        }
        if(text("加我为朋友时需要验证").exists()){
            var tt = bounds(915,371,1037,436).findOnce()//checked()
            if (tt != null){
                log("有这个控件")
                if (bounds(915,371,1037,436).findOnce().desc() == "已开启"){
                    log("这个控件被选中了")
                    click(915+20,371+20)
                    break
                }
            }
        }
    }
}

function addHaoYou(){
    toastLog("添加好友")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            click("通讯录")
            sleep(1200)
        }
        if(text("新的朋友").exists()){
            click("新的朋友")
            sleep(1200)
        }
        if(text("添加朋友").exists()){
            click("添加朋友")
            sleep(1200)
        }
        if(text("雷达加朋友").exists()){
            
        }
    }
}

function WZPhone(){
    toastLog("获取温州手机号")
    while(1){
        try {
            var r = http.get("http://jm.pybycl.com/index/getrun?action=getPhone&token=2f0293d235edcdd5149621a72b8a6f8e8c43fc7703799eebf735db815242b96e&s_id=91");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var reg = '[0-9]{10,12}';
                var table = body.match(reg)
                if(table){
                    return table[0]
                } 
                else{
                    toastLog("没有号码"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("取号不通:"+r.statusCode)
                sleep(3000)
            }
        } catch(error) {
            print(error);
            log(error)
            sleep(3000)
        }
    }
}

function WZSendMS(nn){
    log("温州发信息")
    var t1 =new Date().getTime()
    while(1){
        if ((new Date()).getTime() - t1 > 60*1000) {
            t1 = (new Date()).getTime()
            toastLog("发送失败");
            return false
        }
        try {
            var r = http.get("http://jm.pybycl.com/index/getrun?action=setMessage&getphone="+phone_num+"&phone=106903290212367&s_id=91&token=2f0293d235edcdd5149621a72b8a6f8e8c43fc7703799eebf735db815242b96e&desc=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                mgbody = body.split('|')[0]
                if( mgbody == "1"  ){
                    toastLog("提交成功")
                    return true
                }
                else if( mgbody == "0"){
                    toastLog("重试")
                    return
                }else {
                    toastLog("发送失败:")
                    sleep(5000)
                } 
            }
            else{
                // log("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
            runwx()
        }    
    }
}

function WZZT(){
    log("短信状态")
    var t1 =new Date().getTime()
    while(1){
        if ((new Date()).getTime() - t1 > 60*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
            t1 = (new Date()).getTime()
            toastLog("发送失败");
            return false
        }
        try {
            var r = http.get("http://jm.pybycl.com/index/getrun?action=checkIsSend&token=2f0293d235edcdd5149621a72b8a6f8e8c43fc7703799eebf735db815242b96e&s_id=91&phone="+phone_num+"&getphone=10693290212367");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                mgbody = body.split('|')[0]
                if( mgbody == "1"  ){
                    var mgbody2 = mgbody.split('|')[1]
                    if( mgbody2 == "发送成功"  ){
                        toastLog("提交成功")
                        return true
                    }
                    else {
                        toastLog("未发送成功")
                        sleep(5000)
                    }
                }
                else if( mgbody == "0"){
                    toastLog("重试")
                    return false
                }else {
                    toastLog("发送失败:")
                    sleep(5000)
                } 
            }
            else{
                toastLog("网络异常")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function WZLaHei(a){
    log("温州拉黑")
    while(1){
        try {
            var r = http.get("http://jm.pybycl.com/index/getrun?action=addBlacklist&token=2f0293d235edcdd5149621a72b8a6f8e8c43fc7703799eebf735db815242b96e&s_id=91&phone="+phone_num+"&desc="+a);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                mgbody = body.split('|')[0]
                if( mgbody == "1"  ){
                    toastLog("操作成功")
                    return true
                }
                else if( mgbody == "0"){
                    toastLog("重试")
                    sleep(5000)
                }else {
                    toastLog("发送失败:")
                    sleep(5000)
                } 
            }
            else{
                toastLog("没网异常")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function sj(s,e){
    var temp 
    temp = random(s, e)
    sleep(temp)
}

function zimu(xx){
    //间距X 106 y 166 初始坐标 61, 1326
    var zm=new Array("q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m")
    var z;
    var x = 0
    for (z in zm) {              //找到字母的位置
        if (zm[z]==xx){
            if (z <=9){
                x = z*106+61
                y = 1451
            }
            longClick(x,y)
            break
        }
    }
}

function haoma(xx){
    //间距X 243 y 181 初始坐标 301, 1322
    var x = 0
    var y = 0
    if(xx == 0){
        x = 395
        y =  1944
    }
    else if (xx<= 3){
        x = (xx-1)*280+114
        y = 1458
    }
    else if(xx >3 & xx<=6){
        x = (xx-4)*280+114
        y = 1613
    }
    else if(xx >6 & xx<=9){
        x = (xx-7)*280+114
        y = 1780
    }
    tkb(x,y)
}

function tkb(x,y){
    var nu = random(-5, 5)
    click(x+nu,y+nu)
    sj(99,500)
}

function malixiadan(url,ph){
    toastLog("马力下单")
    while(1){
        try {
            var res = http.post("http://card-api.mali126.com/api/order/submit", {
                "userKey": "82E733CFF6FE1B8E7E695CF455CB23BE",
                "qrCodeUrl": url,
                "phone": ph,
                "provinceId": 1,
            });
            var state = res.statusCode
            if( state == 200){
                toastLog("下单子成功")
                var body =  res.body.string()
                log(body)
                var body_OBJ =JSON.parse(body);
                var oId = (body_OBJ['obj']['orderId'])
                log(oId)
                return oId
            }
            else{
                toastLog("下单失败")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            alert("可能没有钱了！！！")
            sleep(2000)
        }   
    }
}

function maLiPhoneXiadan(){
    toastLog("马力手机号下单")
    var urll = "http://card-api.mali126.com/api/order/telsubmit";
    while(1){
        try {
            var res = http.post(urll, {
                "userKey": "82E733CFF6FE1B8E7E695CF455CB23BE",
                "tel": phone_num,
            });
            var state = res.statusCode
            if( state == 200){
                toastLog("下单子成功")
                var body =  res.body.string()
                log(body)
                var body_OBJ =JSON.parse(body);
                var oId = (body_OBJ['obj']['orderId'])
                log(oId)
                return oId
            }
            else{
                toastLog("下单失败")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            alert("可能没有钱了！！！")
            sleep(2000)
        }   
    }
}

function malifankuidingdan(oi,zt){
    toastLog("马力反馈:"+oi)
    var urll = "http://card-api.mali126.com/api/order/mark";
    while(1){
        try {
            var res = http.post(urll, {
                "userKey": "82E733CFF6FE1B8E7E695CF455CB23BE",
                "orderId": oi,
                "status": zt,
            });
           
            if( res.statusCode == 200){
                var body =  res.body.json()
                toastLog(body)
                if (body["code"] == 100 ){
                    toastLog("反馈成功")
                    break
                }
                else if (body["code"] == 109 ){
                    toastLog("反馈成功")
                    break
                }
                else{
                    toastLog("反馈失败"+body["msg"])
                    sleep(3000)
                }
            }
            else{
                toastLog("反馈失败")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function jiexi(){
    try {
        importPackage(com.google.zxing);
        importPackage(com.google.zxing.common);
        importPackage(com.google.zxing.client.j2se);
        var imm = captureScreen()
        var clip = images.clip(imm, 143, 1046, 699-143, 1599-1046);
        images.save(clip, "/sdcard/clip.png")    //data:image/png;base64,
        var imgPath = "/sdcard/clip.png";
        var pixels = images.readPixels(imgPath);
        var w = pixels.width;
        var h = pixels.height;
        var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
        var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
        basc = qrCodeResult.getText()
        return basc
    } catch(error) {
        print(error);
        return false
    }
}

function closeSouGou(){
    toastLog("关闭搜狗输入法")
    var intent = new Intent();
    intent.setAction("android.settings.INPUT_METHOD_SETTINGS");
    app.startActivity(intent);
    sleep(2000)

    var tt = bounds(914,466,1026,523).findOnce()//checked()

    if (tt != null){
        log("有这个控件")
        if (bounds(914,466,1026,523).findOnce().checked() == true){
            log("这个控件被选中了")
            click(914+20,466+20)
        }
    }
}

function eweima(){
    toastLog("下载二维码解析文件")
    while (1){
        try {
            let imgurl = 'https://tkb520.oss-cn-shanghai.aliyuncs.com/%E4%BA%8C%E7%BB%B4%E7%A0%81%E8%AF%86%E5%88%AB.dex';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/二维码识别.dex", res.body.bytes());
                toastLog("下载完成")
                return true
            } else {
                toastLog("没有二维码识别");
                sleep(2000)
            };
        } catch(error) {
            toastLog(error);
            sleep(random(3000,8000))
        }
    }
}

function getVpnUser(){
    toastLog("获取VPN账号")
    while (1){
        try {
            var r = http.get("http://120.79.199.143/DY/getvpnuser.php");
            if( r.statusCode == 200){
                var body =  r.body.string()
                toastLog("html = " +body);
                var body_table = body.split('|');
                if (body_table[0]== "OK"){
                    vpnadd = body_table[1]
                    vpnuser = body_table[2]
                    vpnpass = body_table[3]
                    return true
                }
                else{
                    toastLog("没有VPN"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

function xitongVPN(aa){
    log("开关VPN")
	var TT = (new Date()).getTime()/1000
    var tem = 0
    var temp = 0 
	while(true){
        log("我是temp" +temp)
        sleep(1000)
        if ((new Date()).getTime()/1000 - TT > 120){
            log("超时没连接上")
            back()
            sleep(500)
            back()
            TT = (new Date()).getTime()/1000
            tem = 0
        }
        if (text("VPN").exists() && text("添加").exists()){
            log("开关vpn界面")
            if (aa == "关"){
                if (tem == 0 && text("已连接").exists()){
                    log("已连接--要去断开")
                    if (text("已连接").exists()){
                        log("已连接")
                        return true
                    }
                }else{
                    log("已经断开")
                    return true
                }
            }else if (tem == 0 || text("失败").exists()){
                if (text("Gn").exists()){
                    log("点击Gn")
                    click(797+30,225+30)
                    sleep(2000)
                    tem =1
                }
            }else if (tem == 1 || text("失败").exists()){
                if (text("Gn").exists()){
                    log("点击Gn")
                    click("Gn")
                    sleep(2000)
                }
            }
		}else{
            log("进入VPN界面")
            var intent = new Intent();
            intent.setAction("android.net.vpn.SETTINGS");
            app.startActivity(intent);
            sleep(2000)
        }
        if (text("连接").exists() && text("取消").exists() || text("CANCEL").exists() && text("CONNECT").exists()){
            log("连接VPN")
            click("连接")
            sleep(500)
            click("CONNECT")
            sleep(8000)
            tem = 2
        } 
        if (text("断开连接").exists() && text("取消").exists() || text("DISCONNECT").exists() && text("CANCEL").exists()){
            log("断开连接VPN")
            click("断开连接")
            sleep(500)
            click("DISCONNECT")
            sleep(2000)
            tem = 0
        } 
        if (text("取消保存").exists()){
            click("取消保存")
            sleep(2000)
        }

        if (text("确定").exists()){
            click("确定")
            sleep(2000)
        }
        if (text("设置密码").exists() && text("锁屏密码").exists()){
            click("设置密码")
            sleep(2000)
            temp = 1
        }
        if (text("没有VPN").exists()){
            temp = 1
        } 
        if (temp == 1){
            if (text("设置密码").exists()){
                click("设置密码")
                sleep(2000)
            }
            if (text("数字密码").exists()){
                click("数字密码")
                sleep(2000)
            }
            if (text("设置6位数字密码").exists()){
                for (let index = 0; index < 7; index++) {
                    click("0")
                    sleep(300)
                }
            }
            if (text("请再次输入密码").exists()){
                for (let index = 0; index < 7; index++) {
                    click("0")
                    sleep(300)
                }
            }
            if (text("必须少于七个字符").exists()){
                for (let index = 0; index < 7; index++) {
                    click("0")
                    sleep(300)
                }
            }
            if (text("添加").exists()){
                click("添加")
                sleep(2000)
            }

           if (text("编辑VPN配置文件").exists()){
                setText(0,"Gn")
                setText(1,vpnadd)
                setText(2,vpnuser)
                setText(3,vpnpass)
                funcFingIdClick("com.android.settings:id/mppe")
                sleep(1200)
                click("保存")
                sleep(3000)
                temp = 2
            }
        }
        if (text("正在连接...").exists() || text("Connecting…").exists()){
            log("正在连接继续等待")
            sleep(8000)
        }
        if (aa != "关" && tem == 2 && text("已连接").exists() || tem == 2 && text("Connected").exists() && aa != "关" ){
            log("连接成功")
            return true
        }
	}
}

function funcFingIdClick(idd){                                     //发现ID并点击
    try{
        var a = id(idd).findOnce()
        if(a != null){
            if (id(idd).findOnce().checked() == true){
                a.click()
            }
        }
    }catch (e) 
    {
        log(e)
    }
}

//************************************************************************** */

function dowmp3(){
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - TTR > 3*60*1000){
                log("超时退出")
                return false
            }
            let imgurl = 'https://mp3-10086.oss-cn-shenzhen.aliyuncs.com/%E8%A7%82%E6%B2%A7%E6%B5%B7.mp3';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/观沧海.mp3", res.body.bytes());
                toastLog("下载完成")
                return true
            } else {
                toastLog("没有mp3");
                sleep(2000)
            };
        } catch(error) {
            toastLog(error);
            sleep(random(3000,8000))
        }
    }
}

//写文本
function xieru(lujing, zhi){
	var aa = files.read(lujing)
	var file = open(lujing, "w");
	var zhanghao = aa.split("\n")
	for (var k in zhanghao){
		if (zhanghao[k] == ""){
			zhanghao.splice(k,k)
		}
	}  
	var geshu = zhanghao.push(zhi)
	file.writelines(zhanghao)
	file.close();
}

//获取该页面文字
function getAllTexts(setting) {
    try {
        var setting = setting || {}
        var defaultSetting = {
            getText: true,
            getDesc: true,
            getId: false,
            removeRepetitiveElements: true
        }
        Object.assign(defaultSetting, setting);
        //log(defaultSetting)
        var allStr = []
        var getDescAndTextAndIdOfNode = function (node) {
            if (node) {
                if (defaultSetting.getText) {
                    var text = node.text()
                    if (!!text) {
                        allStr.push(text)
                    }
                }
                if (defaultSetting.getDesc) {
                    var desc = node.desc()
                    if (!!desc) {
                        allStr.push(desc)
                    }
                }
                if (defaultSetting.getId) {
                    var id = node.id()
                    if (!!id) {
                        allStr.push(id)
                    }
                }
            }
            for (let i = 0; i < node.childCount(); i++) {
                getDescAndTextAndIdOfNode(node.child(i));
            }
        }
        var getFrameLayoutNode = function () {
            return className('FrameLayout').findOne(2000)
        }
        getDescAndTextAndIdOfNode(getFrameLayoutNode())

        function removeRepetitiveElements(arr) {
            var obj = {}
            for (let i = 0; i < arr.length; i++) {
                if (obj.hasOwnProperty(arr[i])) {} else {
                    obj[arr[i]] = true
                }
            }
            return Object.keys(obj)
        }
        if (defaultSetting.removeRepetitiveElements) {
        allStr = removeRepetitiveElements(allStr)
        }
        return allStr
    } catch (error) {
        log(error);
        return 1
    }
}

//关闭应用
function guanbiyy(bb){
    log("关闭应用")               //www.feiyunjs.com
    try{
        if (bb == 1){
            for(var i = 0; i < 10; i ++){
                sleep(500);
                back();
            }
        }else{
            // launch(bb);
            // sleep(2000);
            // let packageName = currentPackage();
            let packageName = bb
            log(packageName)
            app.openAppSetting(packageName);
            text(app.getAppName(packageName)).waitFor();  
            let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
            if (is_sure.enabled()) {
                textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                textMatches(/(.*确.*|.*定.*)/).findOne().click();
                log(app.getAppName(packageName) + "应用已被关闭");
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
            } else {
                log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
                back();
                sleep()
                back();
            }
        }
    }catch(error) {
        log(error);
    }
}

//清理缓存
function qinglihh(){
    var TB = (new Date()).getTime()
    back()
    sleep(500)
    home()
    sleep(1000)
	while(true){
		if ((new Date()).getTime() - TB > 20*1000){
            log("超时没完成")
            home()
            sleep(2000)
            back()
			break
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                log("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                break
            }else{
                back()
                sleep(500)
                home()
                sleep(2000)
                recents()
                sleep(3000)
            }
        }catch (error) {
            log(error);
        }
	}
}

//*******************************************************对接服务器*****************************************************************


function gengxin(user){
    log("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb){
                    log("已经是最新版本")
                }
                else{
                    log("版本更新")
                    sleep(3000)
                    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    dowscripte(body, user)
                }
                return body
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
}

function dowscripte(url, user){
    log("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // log("停止当前运行的脚本")
                // exit()
                sleep(2000)
                break
            } else {
                log("网络异常");
                sleep(2000)
            };
        } catch(error){
            log(error);
            sleep(2000)
        }
    }
    log("加载脚本完成")
}

//获取任务
function huoqurenwu(){
    log("获取任务")        // 1、抖音  2、qq  3、乐游  4、微信  5、微视  6、微博  7、火山  8、快手  9、陌陌
    var rs = {"douyinflag":1, "qqflag":2, "leyouflag":3, "weixinflag":4, "weishiflag":5, "weiboflag":6, "huoshanflag":7, "kuaishouflag":8, "momoflag":9}
    var mtrenwu = ""
    while (1){ 
        try {
            // var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwu/usr/"+yhname+"/shebeihao/"+yhbh
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwunew/usr/"+yhname+"/shebeihao/"+yhbh
            log("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                log(r_obj)
                var renwu = r_obj["data"]
                log(renwu)
                return renwu
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}

function bofangyy(){
    _THREADSS = threads.start(function (){
        log("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime()
        if( files.exists("/sdcard/观沧海.mp3") == false){
            log("没有音乐文件去下载")
            dowmp3()
            sleep(5000)
        }
        // device.setNotificationVolume(0)
        while(1){
            if ((new Date()).getTime() - ssee > 60 *1000){
                var renwu = huoqurenwu()
                sstt = 0
                // var renwu_table = renwu.split("-")
                for(var i =0 ; i < renwu.length; i++){
                    if (renwu[i] == xmxh ){
                        log("继续微信任务")
                        sstt = 1
                    }else{
                        if (renwu[i] == "100" ){
                            log("结束脚本")
                            qinglihh("com.tencent.mm")
                            exit()
                        }
                    }
                }
                if (sstt == 0){
                    log("服务器上没有微信任务")
                    qinglihh("com.tencent.mm")
                    sleep(2000)
                    meitxx()
                    exit()
                }
                if( files.exists("/sdcard/观沧海.mp3") == false){
                    log("没有音乐文件去下载")
                    dowmp3()
                    sleep(5000)
                }
                ssee = (new Date()).getTime()
            }
            try{
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                log("我还在播放音乐")
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
    log("执行美图项目")
    // UI()
    var config_str =  files.read("/sdcard/meituconfig.txt")
    var config_table = config_str.split("-")
    var user =  config_table[0]
    var yhuser =  config_table[1]
    var bianhao =  config_table[2]
    var ips = config_table[3]
    var renwu = huoqurenwu()
    log(renwu.length)
    log("记录的任务：" +user)
    for(var i =0 ; i < renwu.length; i++){
        if (renwu[i] == user && tem == 0){
            if (i < renwu.length-1){
                user = renwu[i+1]
                tem = 1
            }
        }
    }
    if (tem == 0){
        log("已经做完一轮或者刚开始")
        user= renwu[0]
    }
    log("执行任务"+ user)
    var config_temp = user+"-"+yhuser+"-"+bianhao+"-"+ips
    log("选择结果："+config_temp)
    files.write("/sdcard/meituconfig.txt", config_temp);
    var gg = gengxin(user)
    engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js");
}

//执行微信任务
function wxrw(){
    log("执行微信任务")
    device.keepScreenOn(240*60*60*1000)
    bofangyy()
    
    if( main()){
        pengyouquan()
        yinsi()
    }
    xitongVPN("关")
    //meitxx()
    exit()
}


wxrw()