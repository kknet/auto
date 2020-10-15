log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)


var TKB = require('/sdcard/tkb2.js')

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
    // var phone_num = WZPhone()
    var tem = 0        //记录先去拿号状态
    var bb = 0         //记录先去拿号状态
    var oId  = ""      //辅助平台返回的标识
    killwx()
    runwx()
    phone_num = "13097756224"
    while (true){
        if(text("允许").exists()){
            TKB.xgsrizhi("允许")
            click("允许")
            sj(1590,1465)
        }
        if(id("com.tencent.mm:id/djr").exists()){
            TKB.xgsrizhi("权限申请--知道了")
            click("知道了")
            sj(800,1500)
        }
        if (buzou >= -1){
            if (tem == 0 && bb== 1){
                TKB.xgsrizhi("去拿号码")
                phone_num = WZPhone()
                getVpnUser()
                xitongVPN("开")
                killwx()
                runwx()
                tem = 1 
            }
            if(text("注册").exists() & text("登录").exists() ){
                TKB.xgsrizhi("注册")
                if (bb== 1){
                    tkb(694+50,1856+50)
                    sleep(1200)
                }else{
                    TKB.xgsrizhi("先去拿号码")
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
                TKB.xgsrizhi("例如：陈晨")
                if (bb== 1){
                    tkb(549, 565)       //点输入
                    sleep(100)
                    tkb(549, 565)       //点输入
                    var zm=new Array("q","w","e","r","t","y","u","i","o","p")
                    zimu(zm[random(0, 10)])
                    sj(800,1200)
                }else{
                    TKB.xgsrizhi("先去拿号码")
                    bb = 1
                }
            }   

            if(text("昵称").exists() & text("手机号").exists() & text("请填写手机号").exists() ){
                TKB.xgsrizhi("昵称")
                sleep(1200)
                tkb(861, 873)             //输入手机号
                sj(800,900)
                tkb(861, 873)
                TKB.xgsrizhi(phone_num)

                for (i = 0; i < phone_num.length; i++) { 
                    var danzimu = phone_num.substr(i,1)
                    TKB.xgsrizhi("单个字母"+danzimu)
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
                TKB.xgsrizhi("你输入的是一个无效的手机号码")
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
                    if(desc("微信是一款由我们提供服务的社交产品，为说明微信会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下：").exists()){
                        toastLog("下一步")
                        break
                    }
                    if(text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false  ){
                        buzou = 2
                        break
                    }
                    if(desc("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & desc("拖动下方滑块完成拼图").exists() == false  ){
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
            if(text("微信是一款由我们提供服务的社交产品，为说明微信会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下：").exists() || desc("微信是一款由我们提供服务的社交产品，为说明微信会如何收集、使用和存储你的个人信息及你享有何种权利，我们将通过本指引向你阐述相关事宜，其中要点如下：").exists()){
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
            if((text("安全验证").exists() & text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false) || (desc("安全验证").exists() & desc("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & desc("拖动下方滑块完成拼图").exists() == false) ){
                TKB.xgsrizhi("开始安全验证2") //toastLog("开始安全验证2");  
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
                TKB.xgsrizhi("看到滑块")
                buzou = 5
                sleep(2000)
                
                if (text("请控制拼图块对齐缺口").exists()){
                    click(869, 1561)
                    sleep(3000)
                }
                var jl = findhuakuai();
                TKB.xgsrizhi("xxxxx="+jl)
                if(jl != 0){
                    TKBhuakuai(jl)
                }
                else if(jl == 0){
                    click(869, 1561)
                    sleep(3000)
                }
             
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
                            TKB.xgsrizhi(tt[1])
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
                TKB.xgsrizhi("收不到第"+fasong+"次")
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
                TKB.xgsrizhi("有这个控件")
                if (bounds(915,371,1037,436).findOnce().desc() == "已开启"){
                    TKB.xgsrizhi("这个控件被选中了")
                    click(915+20,371+20)
                    break
                }
            }
        }
    }
}

function addHaoYou(){
    toastLog("添加好友")
    var haoyouphone = getHaoYou()
    TKB.xgsrizhi(haoyouphone)
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
            click(143,256+30)
            sleep(2000)
            setText(0,haoyouphone)
            sleep(1200)
            click(216,260)
            sleep(1200)
        }
        if(text("添加到通讯录").exists()){
            click("添加到通讯录")
            sleep(2000)
        }
        if(text("发送").exists()){
            click("发送")
            sleep(1200)
            break
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
                TKB.xgsrizhi("html = " +body);
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
            TKB.xgsrizhi(error)
            sleep(3000)
        }
    }
}

function WZSendMS(nn){
    TKB.xgsrizhi("温州发信息")
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
                TKB.xgsrizhi("html = " +body);
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
                // TKB.xgsrizhi("没网")
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
    TKB.xgsrizhi("短信状态")
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
                TKB.xgsrizhi("html = " +body);
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
    TKB.xgsrizhi("温州拉黑")
    while(1){
        try {
            var r = http.get("http://jm.pybycl.com/index/getrun?action=addBlacklist&token=2f0293d235edcdd5149621a72b8a6f8e8c43fc7703799eebf735db815242b96e&s_id=91&phone="+phone_num+"&desc="+a);
            if( r.statusCode == 200){
                var body =  r.body.string()
                TKB.xgsrizhi("html = " +body);
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

function getHaoYou(){
    toastLog("获取微信好友")
    while(1){
        try {
            var r = http.get("http://120.79.199.143/meitu/gethaoyou.php");
            if( r.statusCode == 200){
                var body =  r.body.string()
                TKB.xgsrizhi("html = " +body);
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
            TKB.xgsrizhi(error)
            sleep(3000)
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
                TKB.xgsrizhi(body)
                var body_OBJ =JSON.parse(body);
                var oId = (body_OBJ['obj']['orderId'])
                TKB.xgsrizhi(oId)
                return oId
            }
            else{
                toastLog("下单失败")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
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
                TKB.xgsrizhi(body)
                var body_OBJ =JSON.parse(body);
                var oId = (body_OBJ['obj']['orderId'])
                TKB.xgsrizhi(oId)
                return oId
            }
            else{
                toastLog("下单失败")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
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
        sleep(1001)
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
        TKB.xgsrizhi("有这个控件")
        if (bounds(914,466,1026,523).findOnce().checked() == true){
            TKB.xgsrizhi("这个控件被选中了")
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
    TKB.xgsrizhi("开关VPN")
	var TT = (new Date()).getTime()/1000
    var tem = 0
    var temp = 0 
	while(true){
        TKB.xgsrizhi("我是temp" +temp)
        sleep(1000)
        if ((new Date()).getTime()/1000 - TT > 120){
            TKB.xgsrizhi("超时没连接上")
            back()
            sleep(500)
            back()
            TT = (new Date()).getTime()/1000
            tem = 0
        }
        if (text("VPN").exists() && text("添加").exists()){
            TKB.xgsrizhi("开关vpn界面")
            if (aa == "关"){
                if (tem == 0 && text("已连接").exists()){
                    TKB.xgsrizhi("已连接--要去断开")
                    if (text("已连接").exists()){
                        TKB.xgsrizhi("已连接")
                        return true
                    }
                }else{
                    TKB.xgsrizhi("已经断开")
                    return true
                }
            }else if (tem == 0 || text("失败").exists()){
                if (text("Gn").exists()){
                    TKB.xgsrizhi("点击Gn")
                    click(797+30,225+30)
                    sleep(2000)
                    tem =1
                }
            }else if (tem == 1 || text("失败").exists()){
                if (text("Gn").exists()){
                    TKB.xgsrizhi("点击Gn")
                    click("Gn")
                    sleep(2000)
                }
            }
		}else{
            TKB.xgsrizhi("进入VPN界面")
            var intent = new Intent();
            intent.setAction("android.net.vpn.SETTINGS");
            app.startActivity(intent);
            sleep(2000)
        }
        if (text("连接").exists() && text("取消").exists() || text("CANCEL").exists() && text("CONNECT").exists()){
            TKB.xgsrizhi("连接VPN")
            click("连接")
            sleep(500)
            click("CONNECT")
            sleep(8000)
            tem = 2
        } 
        if (text("断开连接").exists() && text("取消").exists() || text("DISCONNECT").exists() && text("CANCEL").exists()){
            TKB.xgsrizhi("断开连接VPN")
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
            TKB.xgsrizhi("正在连接继续等待")
            sleep(8000)
        }
        if (aa != "关" && tem == 2 && text("已连接").exists() || tem == 2 && text("Connected").exists() && aa != "关" ){
            TKB.xgsrizhi("连接成功")
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
        sleep(1001)
        TKB.xgsrizhi(e)
    }
}


//TKB滑块
function findhuakuai(){
    var img = captureScreen();
    var hui_r = 120;
    var hui_g = 120;
    var bai_r = 200;
    var bai_g = 200;

    var hui2_r = 120;
    var hui2_g = 110;

    var hei = 110
    var cc = images.pixel(img,757, 1287);
    if (colors.toString(cc) == "#ffc3371f"){
        toastLog("海边屋子")
        return 0
    }
    
    cc = images.pixel(img,61, 1120);
    if (colors.toString(cc) == "#fff9ac02"){
        toastLog("公路")
        hui_g = 110
        hei = 50
    }
    for (let i = 850; i < 1163; i++){                                                   //左边滑块从上到下可能出现的范围
        var color = images.pixel(img,157,i);
        var str_color = colors.toString(color)
        var r = colors.red(str_color)
        var g = colors.green(str_color)
        var b = colors.blue(str_color)
		if (r < 250 && g < 250 && b < 250 &&  r > bai_r && g > hui_g && b > 170){           //确定白色
            //log(i)
            color = images.pixel(img,156,i);
            str_color = colors.toString(color)
            var r2 = colors.red(str_color)
            var g2 = colors.green(str_color)
            var b2 = colors.blue(str_color)
            if (r2 > hui_r && g2 > hui_g  && r2 < 230 && g2 < 230 ) {                       //确定灰色1
                //log(i)
                color = images.pixel(img,190,i-2);
                str_color = colors.toString(color)
                var r3 = colors.red(str_color)
                var g3 = colors.green(str_color)
                var b3 = colors.blue(str_color)
                if (r3 > hui2_r && g3 > hui2_g  && r3 < 230 && g3 < 230 ) {                   //确定灰色2
                    log(i)
			        var y1 = i
                    for (let ii = 960; ii > 500; ii=ii-2) {
                        color = images.pixel(img,ii,y1+10);
                        str_color = colors.toString(color)
                        r = colors.red(str_color)
                        g = colors.green(str_color)
                        b = colors.blue(str_color)
                        if (r < hei && g < 110 && b < 110 ){                            //确定黑色
                            color = images.pixel(img,ii-5,y1+20);
                            str_color = colors.toString(color)
                            r2 = colors.red(str_color)
                            g2 = colors.green(str_color)
                            b2 = colors.blue(str_color)

                            if (r2 < hei && g2 < 110  && b2 < 110 ) {                   //确定黑色
                                color = images.pixel(img,ii-100,y1+60);
                                str_color = colors.toString(color)
                                r3 = colors.red(str_color)
                                g3 = colors.green(str_color)
                                b3 = colors.blue(str_color)
								if (r3 < hei && g3 < 110  && b3 < 110 ) {               //确定黑色
									toast(ii,2)
									sleep(2000)
									//keepScreen(false) 
									return ii
								}
							} 
						} 
					}			
				}
             }
		} 
	}
	return 0
}

function TKBhuakuai(x){
    var array=[];
    var y_sjy  =1442                                        //滑块的Y坐标
    var x_offset = random(-10,10)
    var cur_x = parseInt(224 + parseInt(x_offset))          //滑块的X坐标
    log("X130:"+y_sjy)
    x = x-90                                                //黑色滑块的宽度
    var zd = ["2.1","2.2","2.3","2.4","2.5","2.6","2.7","2.8","2.9","3.1"]
    var qd = ["-1.1","-1.2","-1.3","-1.4","-1.5","-1.6","-1.7","-1.8","-1.9","-2.1"]
    var n1 = random(0,zd.length-1)
    var n2 =random(0,qd.length-1)
    var tar_hg = random(20,35)
    var tar_x  = x - cur_x + 37 + x_offset + tar_hg					    //一共移动滑动���距离   目标x - 按住的x     37不知道干嘛的不用修改
    var tar_time = 1100+random(20,30) 								    //一共移动1.5秒
    var f_x1 = parseFloat(qd[n1])                           //起始位置
    var f_x2 = parseFloat(zd[n1])                           //终止位置
    var move_step = random(150,200)

    var y_dis = 0
    var y_fin = 0
    for (var i = 1; i < move_step; i++) {
        y_dis = y_dis + random(0, 2)
        y_fin = y_sjy + y_dis
        var hx = Math.floor((Math.tanh(i / move_step * (f_x2 - f_x1) + f_x1) - Math.tanh(f_x1)) / (Math.tanh(f_x2) - Math.tanh(f_x1)) * tar_x) + cur_x;
        array.push([hx, y_fin])
    }
    var hzd = [ "2.1" , "2.2" , "2.3" , "2.4" , "2.5" , "2.6" , "2.7" , "2.8" , "2.9" , "3.1" ]
    var hqd = [ "-1.1" , "-1.2" , "-1.3" , "-1.4" , "-1.5" , "-1.6" , "-1.7" , "-1.8" , "-1.9" , "-1.1" ]
    var m1 = random(0, hzd.length-1)
    var m2 = random(0, hqd.length-1)
    var move_step2 = random(70, 90)
    var tar_time2 = 650 + random(20, 30)
    var f_x1_2 = parseFloat(hqd[m1])                 //起始位置
    var f_x2_2 = parseFloat(hzd[m1])                  //终止位置
    var cur_x2 = x + tar_hg + 37 + x_offset + random(-2, 0)
    for (var j = 0; j < move_step2; j++) {
        y_dis = y_dis + random(0, 2)
        y_fin = y_sjy + y_dis
        var hx = cur_x2 - Math.floor((Math.tanh(j / move_step * (f_x2_2 - f_x1_2) + f_x1_2) - Math.tanh(f_x1_2)) / (Math.tanh(f_x2_2) - Math.tanh(f_x1_2)) * tar_hg)
        array.push([hx, y_fin])
    }
    var time=[0,random(1000,3000)]
    gestures(time.concat(array))
}


//************************************************************************** */





//关闭应用
function guanbiyy(bb){
    TKB.xgsrizhi("关闭应用")               //www.feiyunjs.com
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
            TKB.xgsrizhi(packageName)
            app.openAppSetting(packageName);
            text(app.getAppName(packageName)).waitFor();  
            let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
            if (is_sure.enabled()) {
                textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                textMatches(/(.*确.*|.*定.*)/).findOne().click();
                TKB.xgsrizhi(app.getAppName(packageName) + "应用已被关闭");
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
            } else {
                TKB.xgsrizhi(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
                back();
                sleep()
                back();
            }
        }
    }catch(error) {
        sleep(1001)
        TKB.xgsrizhi(error);
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
                                TKB.xgsrizhi("继续微信任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh("com.tencent.mm")
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有微信任务")
                            TKB.qinglihh("com.tencent.mm")
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



function backzhu(){
    toastLog("返回微信主界面")
    while(1){
        if(text("通讯录").exists() &&  text("发现").exists() ){
            toastLog("返回成功")
            break
        }
        back()
        sleep(2000)
    }
}

function killwx(){
    openAppSetting(getPackageName("微信"));
    sleep(2000)
    var tt = 0
    while (true) {
        tt++;
        if (tt > 7){
            break
        }
        if(text("FORCE STOP").exists() || text("强行停止").exists() ){
            // TKB.xgsrizhi("看到停止按钮")
            click("FORCE STOP")
            click("强行停止")
            sleep(2000)
        }
        if(text("OK").exists() || text("确定").exists() ){
            // TKB.xgsrizhi("看到停止按钮")
            click("OK")
            click("确定")
            sleep(2000)
            
            break
        }
        sleep(1000)
    } 
    back()
}

//执行微信任务
function wxrw(){
    TKB.xgsrizhi("执行微信任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        for (let index = 0; index < 5; index++) {
            if( main()){
                pengyouquan()
                backzhu()
                yinsi()
                backzhu()
                addHaoYou()
                backzhu()
            }
        }
        xitongVPN("关")
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
    var baom = getPackageName("微信")
    if (baom == null){
        log("未安装微信")
        var bbd = TKB.wdjxiazai("微信", "7.0.10")
        if (bbd != false){
            wxrw()
        }
    }else{
        wxrw()
    }
} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}