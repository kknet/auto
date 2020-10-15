toastLog("1.1.0") 
var hexcase = 0;
var chrsz   = 8
var pid = 0
var lat = 0
var lon = 0
var getdz = 0
var mnc = 0
var phone_num,mm,pid,phone_num222
var xmid
var sf
var url
var oId,YuE
var sf_num
var pingtai,huanip,fz,zdhk,ptxz,pyq,renwu,quhao,ipp
var A16
var address = -1
var port = -1
var mgbody
var mgming=""
var mgxing=""
var ccc
var quhao = "0086"
var myip
var huakuai 

//runtime.loadDex("二维码识别.dex");

if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

if( files.exists("/sdcard/观沧海.mp3") == false){
    dowmp3()
}

media.playMusic("/sdcard/观沧海.mp3",80,true);

function dowmp3(){
    toastLog("下载mp3")
    while (1){
        try {
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

function gengxin(){
    log("检测更新脚本2")
    files.createWithDirs("/sdcard/.crab/1-3.txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/1-3.txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var bb = files.read("/sdcard/.crab/1-3.txt")
                if (body== bb){
                    log("已经是最新版本2")
                }
                else{
                    log("版本更新2")
                    sleep(3000)
                    files.write("/sdcard/.crab/1-3.txt", body);
                    dowscripte(body)
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

function dowscripte(url){
    log("加载脚本2")
    var dirpath = "/sdcard/.crab/1-3.js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                engines.execScriptFile("/sdcard/.crab/1-3.js");
                log("停止当前运行的脚本2")
                exit()
            } else {
                log("网络异常2");
                sleep(2000)
            };
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
    log("加载脚本完成2")
}


function run(){ 
    pingtai = dialogs.singleChoice("请选择接码平台", ["奥迪平台","小太阳","李总的卡"], 2);
    huakuai = dialogs.singleChoice("滑块", ["手动","自动"], 0);
    huanip = dialogs.singleChoice("请选择切换IP", ["VPN", "飞行"], 0);
    while (1){
        //gengxin()
        toastLog("获取号码")
        if (pingtai == 0){
            phone_num =aodiPhone("")
        }
        else if (pingtai == 1){
            phone_num =XTYPhone("")
        }  
        else if (pingtai == 2){
            phone_num =WZPhone("")
        }  

        if (huanip == 0){
            xitongVPN("开")
        }
        else if(huanip == 1){
            feixing()
            sleep(3000);
        }
        
        launch("com.gjbridge")
        sleep(3000);
        xjlc()
        runwx()
        main()
        killwx()
        if (huanip == 0){
            xitongVPN("关")
        }
    }
}

function tkb(x,y){
    var nu = random(-5, 5)
    click(x+nu,y+nu)
    sj(99,500)
}

//沈新机流程
function xinji(ipp,ph){
    log("naningxinji")
    while(1){
        try {
            var r = http.get("http://localhost:8000/?cmd=newPhone&ipAddr="+ipp+"&phoneNumber0="+ph+"&mncKey=1&wifiKey=2");
            if( r.statusCode == 200){
                var body =  r.body.string()
                if (body == "ok"){
                    toastLog("新机成功")
                    log(body)
                    sj(4950,5050)
                    break
                }
                else{
                    log("新机失败")
                    sleep(2000)
                }
            }
            else{
                log("没网")
                sleep(2000)
            }
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

function killwx(){
    var r = http.get("http://localhost:8000/?cmd=forceStopApp&pkgName=com.tencent.mm");
    log("杀死微信返回结果"+ r.body.string())
}

function runwx(){
    var r = http.get("http://localhost:8000/?cmd=startApp&pkgName=com.tencent.mm");
    log( "运行微信返回结果" +r.body.string())
}

function clearwx(){
    var r = http.get("http://localhost:8000/?cmd=clearApp&pkgName=com.tencent.mm");
    log("清理微信返回结果"+ r.body.string())
}

function geta16(){
    var r = http.get("http://localhost:8000/?cmd=getA16");
    // log("取A16返回结果"+ r.body.string())
    var aa = r.body.string()
    log("A16:"+aa)
    return aa
}

//南宁新机
function xinjiliucheng(){
    launch("com.gjbridge")
    sleep(3000);
    killwx()
    sleep(2000)
    clearwx()
    sleep(2000)
    killwx()
    sleep(2000)
    // var result = shell("jcls -c rm -rf /sdcard/");
    // log(result);
    // var result = shell("rm -rf /sdcard/");
    // log(result);
    sleep(3000);
    xinji("180.137.15.53",phone_num)    //填写江苏IP 和要注册的号码
    sleep(2000)
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
            //log(z)
            if (z <=9){
                x = z*106+61
                y = 1326
            }
            else if(z >9 & z<=18){
                x = (z-10)*106+115
                y = 1500
            }
            else if(z >18 & z<=25){
                x = (z-19)*106+221
                y = 1670
            }
            longClick(x,y)
            break
        }
    }
    //print(x)
}

function haoma(xx){
    //间距X 243 y 181 初始坐标 301, 1322
    var x = 0
    var y = 0
    if(xx == 0){
        x = 395
        y =  1820
    }
    else if (xx<= 3){
        x = (xx-1)*280+114
        y = 1309
    }
    else if(xx >3 & xx<=6){
        x = (xx-4)*280+114
        y = 1488
    }
    else if(xx >6 & xx<=9){
        x = (xx-7)*280+114
        y = 1667
    }
    tkb(x,y)
}

function shuzi(xx){
    //间距X 110 y 166 初始坐标 55, 1330
    var zm=new Array("1","2","3","4","5","6","7","8","9","0")
    var z;
    var x = 0
    for (z in zm) {              //找到字母的位置
        if (zm[z]==xx){
            //log(z)
            if (z <=9){
                x = z*110+55
                y = 1330
            }
            
            click(x,y)
            break
        }
    }
    //print(x)
}

function huashus(){
    var huashu = ["赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈","褚","卫","蒋","沈","韩","杨","朱","秦","尤","许","何","吕","施","张","孔","曹","严","华","金","陶","姜","魏","谢","戚","邹","苏","彭","郎","常","柳","于","杜"]
    var nu = random(0, huashu.length-1)
    return huashu[nu]
}

function huashus2(){
    var huashu = ["石屹", "伟", "龙", "胜", "建国", "建伟", "冰", "兵", "汉", "杰","玉","梅","英","梦","琼","乐","源","辉","艳","燕","光","亮","良","嘉良","伟杰","达华","星驰","德华","德刚","文静","莲","毅","勇","坚","明","贤","春","东","双","宁","春丽","玉梅"]
    var nu = random(0, huashu.length-1)
    return huashu[nu]
}

function main(){
    var t1 =new Date().getTime()
    var t2 =new Date().getTime()                    //在出现辅助前超过10分钟跳出
    var huakuai_temp = 0
    var fankui = 0
    var buzou = -1          //步骤
    var erweima = 0
    var fasong = 0
    while (true){
        if(text("允许").exists()){
            log("允许")
            sj(1280,1590)
            click("允许")
            sj(1590,1465)
        }
        if(id("com.tencent.mm:id/djr").exists()){
            log("权限申请--知道了")
            sj(5000,5500)
            click(533,1272)
            sj(800,1500)
        }
        if (buzou >= -1){
            if(text("注册").exists() & text("登录").exists() ){
                log("注册")
                tkb(694+50,1736+50)
                sleep(1200)
                buzou = 0
            }
    
            if(text("例如：陈晨").exists()){
                log("例如：陈晨")
                tkb(740, 585)       //点输入
                sleep(100)
                tkb(740, 585)       //点输入


                var zm=new Array("q","w","e","r","t","y","u","i","o","p")
                zimu(zm[random(0, 10)])
                sj(800,1200)
            }   

            if(text("昵称").exists() & text("手机号").exists() & text("请填写手机号").exists() ){
                log("昵称")
                sleep(1200)
                tkb(915, 820)             //输入手机号
                sj(800,900)
                tkb(915, 820)
                //phone_num = "13097756223"
                log(phone_num)

                for (i = 0; i < phone_num.length; i++) { 
                    var danzimu = phone_num.substr(i,1)
                    log("单个字母"+danzimu)
                    haoma(danzimu)
                    sj(50,99)
                }
            
                sj(200,210)
                tkb(907, 971)
                sj(200,210)
                tkb(907, 971)
                sj(100,199)
                
                tkb(57, 1338)               //q
                sleep(90)
                tkb(162, 1330)              //w
                sj(200,210)

                click(86, 1826)             //切换数字
                sj(200,210)

                tkb(110, 1496)
                sj(200,210)

                tkb(52, 1330)      //1
                sj(200,210)
                tkb(170, 1330)
                sj(200,210)
                tkb(267, 1330)
                sj(200,210)
                tkb(380, 1330)     //4
                sj(200,210)
                tkb(484, 1330)
                sj(200,210)
                tkb(591, 1330)    //6
                sj(200,210)

                tkb(996, 1835)    //去键盘
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
                            click(190, 1127)
                            sj(1780,1970)
                        }
                    }
                    var uca = id("com.tencent.mm:id/doc").find();
                    for(var i = 0; i < uca.length; i++){
                        var tv = uca[i];
                        if(tv.checked() == false){
                            toastLog("没有勾选2")
                            click(209,1177)
                            sj(1780,1970)
                        }
                    }
                    var uca = id("com.tencent.mm:id/weuiAgree").find();
                    for(var i = 0; i < uca.length; i++){
                        var tv = uca[i];
                        if(tv.checked() == false){
                            toastLog("没有勾选3")
                            click(86,1682)
                            sj(1780,1970)
                        }
                    }
                } catch(error) {
                    print(error);
                    sj(1780,1970)
                } 
                
                tkb(533,1295) // 点击注册
                var tt = 0;
                while(1){
                    tt++
                    if (tt > 30){
                        toastLog("点注册30还卡，换VPN")
                        back()
                        if (huanip == 0){
                            xitongVPN("关")
                            xitongVPN("开")
                            launch("com.tencent.mm")
                            sleep(3000);
                        }
                        else if(huanip == 1){
                            feixing()
                            sleep(5000);
                            getIP2()
                        }
                        
                        runwx()
                        break
                    }
                    sleep(1000)
                    if(textContains("我已阅读并同意上述条款").exists()){
                        toastLog("我已阅读并同意上述条款")
                        break
                    }
                    if(textContains("我已阅读并同意上述条款").exists()){
                        toastLog("我已阅读并同意上述条款22")
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
            if(textContains("我已阅读并同意上述条款").exists()){
                toastLog("我已阅读并同意上述条款3")
                buzou = 2
                tkb(200,1590)
                sj(800,1200)
                tkb(532,1750)
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
                        if (huanip == 0){
                            xitongVPN("关")
                            xitongVPN("开")
                            launch("com.tencent.mm")
                            sleep(3000);
                        }
                        else if(huanip == 1){
                            feixing()
                            sleep(5000);
                            getIP2()
                        }
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
                tkb(537,1605)
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
                        if (huanip == 0){
                            xitongVPN("关")
                            xitongVPN("开")
                            launch("com.tencent.mm")
                            sleep(3000);
                        }
                        else if(huanip == 1){
                            feixing()
                            sleep(5000);
                            getIP2()
                        }
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
                // buzou = 5
                sleep(2000)
                if (huakuai == 0){
                    toast("请手动过滑块")
                }
                else if (huakuai == 1){
                    if (text("请控制拼图块对齐缺口").exists()){
                        click(833+10,1461+10)
                        sleep(3000)
                    }
                    var jl = findhuakuai();
                    log("xxxxx="+jl)
                    if(jl != 0){
                        TKBhuakuai(jl)
                    }
                    else if(jl == 0){
                        click(833+10,1461+10)
                        sleep(3000)
                    }
                }  
            } 
            if(text("让用户用微信扫描下面的二维码").exists()){
                toastLog("出现辅助2")
                buzou = 5
            }
            if(textContains("发送短信后请回到本界面继续下一步").exists()){
                toastLog("发短信界面")
                buzou = 5
            }
        }
        if (buzou >=5){
            if(text("让用户用微信扫描下面的二维码").exists()){
                toastLog("出现辅助2")
                buzou = 3 
                erweima = erweima + 1
                toastLog("第"+erweima+"次")
                if (erweima < 3 ){
                    back()
                    sleep(3000)
                }
                else if (erweima == 3 ){
                    if (huanip == 0){
                        xitongVPN("关")
                        xitongVPN("开")
                    }
                    else if(huanip == 1){
                        feixing()
                        sleep(5000);
                        getIP2()
                    }
                    sleep(2000)
                    launch("com.tencent.mm")
                    sleep(3000);
                    back()
                }  
                else if (erweima == 4 ){
                    back()
                }  
                else if (erweima > 4 ){
                    if (huanip == 0){
                        xitongVPN("关")
                    }
                    toastLog("二维码")
                    if (pingtai == 0){
                        aodiLaHei("二维码")
                    }
                    else if (pingtai == 1){
                        XTYLaHei("二维码")
                    }  
                    else if (pingtai == 2){
                        WZLaHei("二维码")
                    }  
                    break
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
                            if (pingtai == 0){
                                aodiSendMS(tt[1])   
                            }
                            else if (pingtai == 1){
                                XTYSendMS(tt[1])   
                            }  
                            else if (pingtai == 2){
                               if( WZSendMS(tt[1]) == false){
                                    toastLog("手机号不存在")
                                    return false
                               }
                            }  
                            sleep(10000)
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
            if(text("请输入验证码").exists()){
                log("请输入验证码")
                buzou = 6
                click(700, 539)
                sleep(1500)
                if (pingtai == 0){
                    yzm = aodiMS()
                }
                else if (pingtai == 1){
                    yzm = XTYMS()
                }  
                else if (pingtai == 2){
                    //yzm = LZMS()
                }  
                if (yzm != -1){
                    setText(yzm)
                    sleep(800)
                    click("下一步")
                    sleep(4000)
                }
                else{
                    toastLog("没短信")
                    if (pingtai == 2){
                        WZLaHei("二维码")
                    }  
                    break;
                }
            } 
        }
        if(text("通讯录").exists() &&  text("发现").exists() ){
            toastLog("注册成功")
            home()
            if (huanip == 0){
                xitongVPN("关")
            }
            A16 = geta16()
            updata(phone_num+"----qw@123456----"+A16)
            toastLog("上传完成")
            if (pingtai == 2){
                WZLaHei("注册成功")
            }
            break
        }
        if (buzou >=6){
            if (textContains("操作太频繁，请稍后再试").exists()) {
                toastLog("操作太频繁")
                if (pingtai == 0){
                    aodiLaHei("频繁")
                }
                else if (pingtai == 1){
                    XTYLaHei("频繁")
                }  
                else if (pingtai == 2){
                    WZLaHei("频繁")
                }  
                break
            }

            if (textContains("你已设置拒收微信登录、换绑、").exists()) {
                toastLog("出现KQ")
                if (pingtai == 0){
                    aodiLaHei("KQ")
                }
                else if (pingtai == 1){
                    XTYLaHei("KQ")
                }  
                else if (pingtai == 2){
                    WZLaHei("KQ")
                }  
                break
            }
            if(text("不是我的，继续注册").exists()){     //国外用的
                toastLog("不是我的，继续注册")
                sleep(800)
                tkb(523, 1017)
                click("不是我的，继续注册")
                sleep(2000)
            }

            if(text("用短信验证码登录").exists() &&  text("找回密码").exists()  ){ 
                toastLog("用短信验证码登录")
                toastLog("封号")
                A16()
                upshibaidata(phone_num+mm+A16)
                if (pingtai == 2){
                    WZLaHei("注册成功")
                }
                break
            }
        }
        if(text("确定").exists()){     //封号
            toastLog("疑似出现封号")
            if (textContains("当前手机号").exists()) {
                toastLog("当前手机号当天注册过")
                click("确定")
                sleep(2000)
                toastLog("当月注册")
                if (pingtai == 0){
                    aodiLaHei("当月注册")
                }
                else if (pingtai == 1){
                    XTYLaHei("当月注册")
                }  
                else if (pingtai == 2){
                    WZLaHei("当月注册")
                }  
                break
            }
            else if(textContains("操作太频繁").exists()){
                if (pingtai == 0){
                    aodiLaHei("频繁")
                }
                else if (pingtai == 1){
                    XTYLaHei("频繁")
                }  
                else if (pingtai == 2){
                    WZLaHei("频繁")
                }  
                break
            }
            else if(textContains("尚未收到你发送的短信").exists()){
                fasong = fasong + 1
                log("收不到第"+fasong+"次")
                sleep(1000)
                if (fasong > 3){
                    if (pingtai == 0){
                        aodiLaHei("注册失败")
                    }
                    else if (pingtai == 1){
                        XTYLaHei("注册失败")
                    }  
                    else if (pingtai == 2){
                        WZLaHei("注册失败")
                    }  
                    break
                }
                else {
                    if (huanip == 0){
                        xitongVPN("关")
                        xitongVPN("开")
                    }
                    else if(huanip == 1){
                        feixing()
                        sleep(5000);
                        getIP2()
                    }
                    sleep(2000)
                    launch("com.tencent.mm")
                    sleep(6000);
                    click(534, 1156)   //点确定 
                    sleep(2000)
                    buzou = 3
                }  
            }
            else{
                click(534, 1156)   //点确定 
                sleep(2000)
            }
        }
    }
}

function feixing(){
    log("开始飞行")
    var intent = new Intent(); 
    intent.setAction("android.settings.WIRELESS_SETTINGS");
    app.startActivity(intent);
    sleep(2000)
    while (1){
        if(text("飞行模式").exists()){
            break
        
        }
        toastLog("正在打开无线和网络")
        sleep(1000)
    }
    click(937, 328)
    sleep(6000)
    click(937, 328)
    sleep(6000)
}

function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}

function upshibaidata(bb){  
    var url = "http://120.79.199.143/xuguangsheng/up.php?biao_name=62BB&ph="+bb;
	log("秒死上传数据")	
	while(true){  
		while(true){  	
			try{
				res = http.get(url);  
				break
			}catch (e) 
			{
				log("没网")			
				sleep(3000);
			}
		}
		if(res.statusCode == 200){
			ss = res.body.string()
			log(ss)
			var ss = ss.split("|")
			if (ss[0]=="OK"){
				toastLog("上传成功")
				return
			}else{
				toastLog("上传失败")		
				sleep(4000);
			}
		}
	}
}

function updata(bb){  
    var url = "http://120.79.199.143/weixin/upss.php?data="+bb+"&biao=A16GN";
	log("上传数据")	
	while(true){  
		while(true){  	
			try{
				res = http.get(url);  
				break
			}catch (e) 
			{
				toastLog("上传A16没网")			
				sleep(3000);
			}
		}
		if(res.statusCode == 200){
			ss = res.body.string()
			log(ss)
			var ss = ss.split("|")
			if (ss[0]=="OK"){
				toastLog("上传A16成功")
				return
			}else{
				log("上传失败")		
				sleep(4000);
			}
		}
	}
}

//桔子平台
function aodiPhone(pp){
    toastLog("获取手机号")
    while(1){
        try {
            var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=getPhone&token=432bf3f9a60cfa7dea60818e27a1fa35&iid=1000&did=&operator=&provi=&city=&seq=0&mobile="+pp);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    return body.split('|')[4]
                } 
                else{
                    toastLog("没有号码"+body)
                    sleep(2000)
                }
            }
            else{
                log("获取号码失败")
                sleep(2000)
            }
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

function aodiMS(){
    toastLog("获取短信")
    var t1 =new Date().getTime()
    while(1){
        if(text("收不到验证码？").exists()|| text("No verification code received").exists()){
            click("收不到验证码？") 
            sleep(2000)
            click("重新获取验证码")
            sleep(2000)
        }
        try {
            if ((new Date()).getTime() - t1 > 240*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
				t1 = (new Date()).getTime()
				aodiLaHei("无短信") //  手机号加入黑名单
				log("获取短信失败");
				return -1
            }
            var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=getPhoneCode&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    if(body.split('|')[1] == -4 ){
                        log("号码已释放,重新取号:"+phone_num)
                        return -1
                    }
                    else{
                        return body.split('|')[1]
                    }
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("无短信")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function aodiSendMS(nn){
    toastLog("发信息")
    while(1){
        try {
            var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=sendCode&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    toastLog("发送成功")
                    break;
                }
                else{
                    toastLog("发送失败")
                    break
                }
            }
            else{
                toastLog("发送失败-没有网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function aodiLaHei(a){
    toastLog("拉黑")
    while(1){
        try {
            var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=addBlack&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid+"&reason="+a);
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("拉黑失败")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

function aodishifang(){
    toastLog("释放")
    while(1){
        try {
            var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=setRel&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid);
            if( r.statusCode == 200){
                toastLog("释放成功")
                break
            }
            else{
                toastLog("释放失败")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

//小太阳平台
function XTYPhone(pp){
    toastLog("获取手机号")
    while(1){
        try {
            //小太阳平台
            var r = http.get("http://www.44ss.cn:9005/yhapi.ashx?act=getPhone&token=cd89b49e1959f556f25ad050a9ecba06&iid=1003&did=&operator=&provi=&city=&mobile="+pp);
            //橘子平台
            // var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=getPhone&token=432bf3f9a60cfa7dea60818e27a1fa35&iid=1493&did=&operator=&provi=&city=&seq=0&mobile="+pp);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    return body.split('|')[4]
                } 
                else{
                    toastLog("没有号码"+body)
                    sleep(2000)
                }
            }
            else{
                log("获取号码失败")
                sleep(2000)
            }
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

function XTYMS(){
    toastLog("获取短信")
    var t1 =new Date().getTime()
    while(1){
        if(text("收不到验证码？").exists()|| text("No verification code received").exists()){
            click("收不到验证码？") 
            sleep(2000)
            click("重新获取验证码")
            sleep(2000)
        }
        try {
            if ((new Date()).getTime() - t1 > 240*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
				t1 = (new Date()).getTime()
				//aodiLaHei("无短信") //  手机号加入黑名单
				log("获取短信失败");
				return -1
            }
            //小太阳平台
            var r = http.get("http://www.44ss.cn:9005/yhapi.ashx?act=getPhoneCode&token=cd89b49e1959f556f25ad050a9ecba06&pid="+pid);
            //橘子平台
            // var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=getPhoneCode&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    if(body.split('|')[1] == -4 ){
                        log("号码已释放,重新取号:"+phone_num)
                        return -1
                    }
                    else{
                        return body.split('|')[1]
                    }
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("无短信")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function XTYSendMS(nn){
    toastLog("发信息")
    while(1){
        try {
            //小太阳平台
            var r = http.get("http://www.44ss.cn:9005/yhapi.ashx?act=sendCode&token=cd89b49e1959f556f25ad050a9ecba06&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            //橘子平台
            // var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=sendCode&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    toastLog("发送成功")
                    break;
                }
                else{
                    toastLog("发送失败")
                    sleep(3000)
                }
            }
            else{
                toastLog("发送失败-没有网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function XTYLaHei(a){
    toastLog("拉黑")
    while(1){
        try {
            var r = http.get("http://www.44ss.cn:9005/yhapi.ashx?act=addBlack&token=cd89b49e1959f556f25ad050a9ecba06&pid="+pid+"&reason="+a);
            
            // var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=addBlack&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid+"&reason="+a);
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("拉黑失败")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

function XTYshifang(){
    toastLog("释放")
    while(1){
        try {
            var r = http.get("http://www.44ss.cn:9005/yhapi.ashx?act=setRel&token=cd89b49e1959f556f25ad050a9ecba06&pid="+pid);
            // var r = http.get("http://47.75.63.118:9008/yhapi.ashx?act=setRel&token=432bf3f9a60cfa7dea60818e27a1fa35&pid="+pid);
            if( r.statusCode == 200){
                toastLog("释放成功")
                break
            }
            else{
                toastLog("释放失败")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

function WZPhone(){
    toastLog("获取锅内手机号")
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
        if ((new Date()).getTime() - t1 > 80*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
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
                    return false
                    // sleep(5000)
                }else {
                    log("发送失败:"+body)
                    toast("发送失败:"+body)
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
            xitongVPN("开")
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
                    if( mgbody2 == "已发送"  ){
                        toastLog("已发送")
                        return true
                    }
                    else {
                        toastLog("未发送成功")
                        sleep(5000)
                    }
                }
                else if( mgbody == "0"){
                    toastLog("重试")
                    var mgbody2 = mgbody.split('|')[1]
                    if (mgbody2 == "换手机号"){
                        return "-1"
                    }
                    else{
                        return false
                    }
                }else {
                    log("发送失败:"+body)
                    toast("发送失败:"+body)
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
                    // return false
                    sleep(5000)
                }else {
                    log("发送失败:"+body)
                    toast("发送失败:"+body)
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
        }   
        break
    }
}


function jiexi(){
    try {
        importPackage(com.google.zxing);
        importPackage(com.google.zxing.common);
        importPackage(com.google.zxing.client.j2se);
        var clip = captureScreen()
        //var clip = images.clip(imm, 50, 730, 1027, 1292);
        //log("对象1："+clip)
        images.save(clip, "/sdcard/clip.png")    //data:image/png;base64,
        sleep(1000)
        var imgPath = "/sdcard/clip.png";

        var pixels = images.readPixels(imgPath);
        log("对象2："+pixels)
        
        var w = pixels.width;
        log(w)
        var h = pixels.height;
        log(h)
        var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
        var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
        //log(binaryBitmap)
        basc = qrCodeResult.getText()
        print(basc)
        toast(basc)
        return basc
    } catch(error) {
        print(error);
            sleep(2000)
        return false
    }
}

Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "H+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function xitongVPN(aa){
    log("开关VPN")
	var TT = (new Date()).getTime()/1000
	var tem = 0
	while(true){
        if ((new Date()).getTime()/1000 - TT > 120){
            log("超时没连接上")
            back()
            sleep(500)
            back()
            TT = (new Date()).getTime()/1000
            tem = 0
        }
        if (text("VPN").exists() && id("com.android.settings:id/vpn_create").exists()){
            log("开关vpn界面")
            if (aa == "关"){
                if (tem == 0 && text("已连接").exists() || tem == 0 && text("Connected").exists()){
                    log("已连接--要去断开")
                    // if (text("Gn").exists()){
                    //     log("点击Gn")
                    //     click("Gn")
                    //     sleep(2000)
                    // }else{
                    //     log("点击第一个")
                    //     click(500, 300)
                    //     sleep(2000)
                    // }
                    if (text("已连接").exists()){
                        log("已连接")
                        click("已连接")
                        sleep(2000)
                    }else{
                        log("点击第一个")
                        click(500, 300)
                        sleep(2000)
                    }
                }else{
                    log("已经断开")
                    return true
                }
            }else{
                if (tem == 0 || text("失败").exists() || text("Unsuccessful").exists()){
                    if (text("Gn").exists()){
                        log("点击Gn")
                        click("Gn")
                        sleep(2000)
                    }else{
                        log("点击第一个")
                        click(500, 300)
                        sleep(2000)
                    }
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
            tem = 1
        } 
        if (text("断开连接").exists() && text("取消").exists() || text("DISCONNECT").exists() && text("CANCEL").exists()){
            log("断开连接VPN")
            click("断开连接")
            sleep(500)
            click("DISCONNECT")
            sleep(2000)
            tem = 0
        } 
        if (text("正在连接...").exists() || text("Connecting…").exists()){
            log("正在连接继续等待")
            sleep(8000)
        }
        if (aa != "关" && tem == 1 && text("已连接").exists() || tem == 1 && text("Connected").exists() && aa != "关" ){
            log("连接成功")
            return true
        }
	}
}

function SK5(boo){
    if (boo == "关"){
        openAppSetting(getPackageName("Postern"));
        sleep(2000)
        var tt = 0
        while (true) {
            tt++;
            if (tt > 7){
                break
            }
            if(text("FORCE STOP").exists() || text("强行停止").exists() ){
                // log("看到停止按钮")
                var w = text("强行停止").findOnce().enabled()
                if (w == false){
                    toastLog("已经强行停止")
                    break
                }
                else{
                    click("FORCE STOP")
                    click("强行停止")
                    sleep(2000)
                }
                
            }
            if(text("OK").exists() || text("确定").exists() ){
                // log("看到停止按钮")
                click("OK")
                click("确定")
                sleep(2000)
                
                break
            }
            sleep(1000)
        } 
    }
    if (boo == "开"){
        launchApp("Postern");
        sleep(3000)
        click(88,283+10)
        sleep(2000)
        if(id("com.tunnelworkshop.postern:id/address").exists() ){
            address = id("com.tunnelworkshop.postern:id/address").findOnce().text()
            port = id("com.tunnelworkshop.postern:id/port").findOnce().text()
        }
        
    }
    back()
}

function duiBiIP(ipp) {  
    var localip = ipp
	while(true){  
		while(true){  	
			try{
                var url="http://120.79.199.143/IP.php?ip="+localip;	
                toastLog("对比IP"+localip)	
				res = http.get(url);  
				break
			}catch (e) 
			{
				log("没网")
				sleep(3000);
			}
		}
		if(res.statusCode == 200){
			var s = res.body.string()
			toastLog(s)
			var ss = s.split("|")
			if (ss[0] == "OK") {
				break;
			}
			else{
                xitongVPN("开")
                localip = getIP(0)
			} 
		}
		else
		{
			toast("没网")
			sleep(3000);
		}
	}
}

function getIP(r) {  
	var url="http://myip.ipip.net";	
    log("获取外网IP")
    var jishu = 0
	while(true){
		while(true){
			try{
				res = http.get(url);  
				break
			}catch (e) 
			{
				log("没网")
                sleep(2000);
                jishu++;
            }
            if (jishu >= 1){
                toastLog("获取IP联网超时")
                jishu = 0
                if(huanip == 0){
                    xitongVPN("开")
                    if (r == 1){
                        launch("com.tencent.mm");
                        sleep(2000)
                    }
                }
                if (huanip == 1){
                    feixing()
                    sleep(3000)
                }
            }
		}
		if(res.statusCode == 200){
			var ipAddress = res.body.string()
			toastLog(ipAddress)
            var ip = "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}";
            var text = ipAddress.match(ip);  //ipAddress是包含ip的字符串
            return text[0]
		}
		else
		{
			toast("没网")
            sleep(2000);
            jishu++;
        }
        if (jishu >= 2){
            toastLog("获取IP联网超时")
            jishu = 0
            if(huanip == 0){
                xitongVPN("开")
                if (r == 1){
                    launch("com.tencent.mm");
                    sleep(2000)
                }
            }
            if (huanip == 1){
                feixing()
                sleep(3000)
            }
        }
	}
}

function getIP2(r) {  
    //var url="http://myip.ipip.net";
    var url="https://www.baidu.com";	
    log("获取外网IP")
    var jishu = 0
	while(true){
		while(true){
			try{
				res = http.get(url);  
				break
			}catch (e) 
			{
				log("没网")
                sleep(2000);
                jishu++;
            }
            if (jishu >= 1){
                toastLog("获取IP联网超时")
                jishu = 0
                if(huanip == 0){
                    xitongVPN("开")
                    if (r == 1){
                        launch("com.tencent.mm");
                        sleep(2000)
                    }
                }
                if (huanip == 1){
                    feixing()
                    sleep(3000)
                }
            }
		}
		if(res.statusCode == 200){
            // var ipAddress = res.body.string()
            // toastLog(ipAddress)
            // var ip = "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}";
            // var text = ipAddress.match(ip);  //ipAddress是包含ip的字符串
            // return text[0]
            return
		}
		else
		{
            ress = http.get("https://www.baidu.com");  
            if(ress.statusCode == 200){
                return
                
            }
            else
            {
                toast("没网")
                sleep(2000);
                jishu++;
            }
			
        }
        if (jishu >= 2){
            toastLog("获取IP联网超时")
            jishu = 0
            if(huanip == 0){
                xitongVPN("开")
                if (r == 1){
                    launch("com.tencent.mm");
                    sleep(2000)
                }
            }
            if (huanip == 1){
                feixing()
                sleep(3000)
            }
        }
        
	}
}


//TKB滑块
function findhuakuai(){
    //keepScreen(true)
    var img = captureScreen();
    for (let i = 786; i < 1100; i++){                                                   //左边滑块从上到下可能出现的范围
        //var r,g,b = getColorRGB(160,i);
        var color = images.pixel(img,160,i);
        var str_color = colors.toString(color)
        var r = colors.red(str_color)
        var g = colors.green(str_color)
        var b = colors.blue(str_color)
		if (r < 250 && g < 250 && b < 250 &&  r > 220 && g > 220 && b > 220){           //确定白色
            //log(i)
            color = images.pixel(img,159,i);
            str_color = colors.toString(color)
            var r2 = colors.red(str_color)
            var g2 = colors.green(str_color)
            var b2 = colors.blue(str_color)
            if (r2 > 120 && g2 > 120  && r2 < 230 && g2 < 230 ) {                       //确定灰色
                log(i)
                color = images.pixel(img,190,i-2);
                str_color = colors.toString(color)
                var r3 = colors.red(str_color)
                var g3 = colors.green(str_color)
                var b3 = colors.blue(str_color)
                if (r3 > 120 && g3 > 120  && r3 < 230 && g3 < 230 ) {                   //确定灰色
                    //log(i)
			        var y1 = i
                    for (let ii = 1000; ii > 500; ii=ii-2) {
                        color = images.pixel(img,ii,y1+10);
                        str_color = colors.toString(color)
                        r = colors.red(str_color)
                        g = colors.green(str_color)
                        b = colors.blue(str_color)
                        if (r < 110 && g < 110 && b < 110 ){                            //确定黑色
                            color = images.pixel(img,ii-5,y1+20);
                            str_color = colors.toString(color)
                            r2 = colors.red(str_color)
                            g2 = colors.green(str_color)
                            b2 = colors.blue(str_color)

                            if (r2 < 110 && g2 < 110  && b2 < 110 ) {                   //确定黑色
                                color = images.pixel(img,ii-100,y1+60);
                                str_color = colors.toString(color)
                                r3 = colors.red(str_color)
                                g3 = colors.green(str_color)
                                b3 = colors.blue(str_color)
								if (r3 < 110 && g3 < 110  && b3 < 110 ) {               //确定黑色
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
	//keepScreen(false)
	return 0
}

function TKBhuakuai(x){
    var array=[];
    var y_sjy  =1375                                        //滑块的Y坐标
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
    //log(array)
    var time=[0,random(1000,3000)]
    gestures(time.concat(array))
}

function TKBxintiao(sbh){
    toastLog("心跳")
    while(1){
        try {
            var r = http.get("http://120.79.199.143/tuantuanwx/cxweibo.php?usr=aaa&shebeihao="+sbh);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var s_json =  JSON.parse(body)
                pingtai = s_json["jiemapingtai"];
                xmid = s_json["xiangmuid"];
                guojia = s_json["guojia"];
                huanip = s_json["qiehuanip"];
                ptxz = s_json["fuzhupingtai"];
                fz = s_json["fuzhugongneng"];
                break;
            }
            else{
                log("获取号码失败")
                sleep(2000)
            }
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

function httpGet(uri) {
    var result = null;
    try {
        result = http.get(uri);
        if (result && result.statusCode == "200") {
            return result.body.string();
        }
    } catch (err) {
        toast("httpGet.error-->" + err);
    }
    return null;
}

function 新机(ip,phone) {
    while(true){
     var exeRet = httpGet("http://localhost:8000/?cmd=newPhone&ipAddr="+ip+"&phoneNumber0="+phone+"&mncKey=1&wifiKey=2") 
     log(exeRet)
        if (exeRet == "ok") {
         toast("新机成功："+exeRet)
         log("新机成功")
         return true   
        }
     toast(exeRet)
     sleep(5000) 
   }
}

function 启动() {
    while(true){
     var exeRet = httpGet("http://localhost:8000/?cmd=startApp&pkgName=com.tencent.mm") 
     log(exeRet)
        if (exeRet == "ok") {
         toast("启动成功："+exeRet)
         log("启动成功：")
         return true   
        }
     toast(exeRet)
     sleep(5000) 
   }
}

function 清理微信(AppName) {
    while(true){
    var exeRet = httpGet("http://localhost:8000/?cmd=clearApp&pkgName="+AppName) 
    log(exeRet)
        if (exeRet == "ok") {
         toast("清理成功："+exeRet)
         return true   
        }
     toast(exeRet)
     sleep(5000) 
    }
}

function 停止(AppName) {
    while(true){
    var exeRet = httpGet("http://localhost:8000/?cmd=forceStopApp&pkgName="+AppName)
    log(exeRet)
       if (exeRet == "ok") {
        toast("停止成功："+exeRet)
        return true   
       }
    toast(exeRet)
    sleep(5000) 
   }
}

function 清理全部文件(){
    while(true){
        var result = shell("jcls -c 'rm -rf /sdcard/'");
        log(result);
        if(result.code == 0){
            log("执行成功");
            toast("删除成功")
            sleep(2000)   
            return true     
        }
         toast("文件删除失败")
         sleep(2000)
         log("执行失败！请到控制台查看错误信息");        
    }
}

function clearDesk() {
    while(true){
     var exeRet =  httpGet("http://localhost:8000/?cmd=clearApp&pkgName=com.cyanogenmod.trebuchet") 
        log(exeRet)
        if (exeRet == "ok") {
         toast("清理成功："+exeRet)
         return true   
        }
     toast(exeRet)
     sleep(5000) 
    }
}

function xjlc(){
    停止("com.tencent.mm") 
    清理微信("com.tencent.mm")
    clearDesk()
    停止("com.tencent.mm")
    //清理全部文件()
    ipp = getIP(0)
    // 新机("69.246.165.138",phone_num)
    新机(ipp,"13097756223")
    sleep(2000)
    启动()
}




run()

// phone_num = "16533900868"

// A16 = geta16()
//                 updata(phone_num+"----qw@123456----"+A16)
//                 toastLog("上传完成")
//                 // if (pingtai == 2){
//                     WZLaHei("注册成功")
                // }


