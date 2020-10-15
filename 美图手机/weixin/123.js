var hexcase = 0;
var chrsz   = 8
var pid = 0
var lat = 0
var lon = 0
var getdz = 0
var mnc = 0
var phone_num,mm,pid
var xmid
var sf
var url
var oId,YuE
var oId_temp
var sf_num
var pingtai,huanip,fz,zdhk,huakuai,ptxz,pyq,renwu
var A16_OBJ


runtime.loadDex("二维码识别.dex");

var sheng = [{"sfCode":"0","sfName":"未知省份"},
{"sfCode":"-1","sfName":"不填资料（港澳台，国外）"},
{"sfCode":"110000","sfName":"北京市"},
{"sfCode":"120000","sfName":"天津市"},
{"sfCode":"130000","sfName":"河北省"},
{"sfCode":"140000","sfName":"山西省"},
{"sfCode":"150000","sfName":"内蒙古"},
{"sfCode":"210000","sfName":"辽宁省"},
{"sfCode":"220000","sfName":"吉林省"},
{"sfCode":"230000","sfName":"黑龙江省"},
{"sfCode":"310000","sfName":"上海市"},
{"sfCode":"320000","sfName":"江苏省"},
{"sfCode":"330000","sfName":"浙江省"},
{"sfCode":"340000","sfName":"安徽省"},
{"sfCode":"350000","sfName":"福建省"},
{"sfCode":"360000","sfName":"江西省"},
{"sfCode":"370000","sfName":"山东省"},
{"sfCode":"410000","sfName":"河南省"},
{"sfCode":"420000","sfName":"湖北省"},
{"sfCode":"430000","sfName":"湖南省"},
{"sfCode":"440000","sfName":"广东省"},
{"sfCode":"450000","sfName":"广西"},
{"sfCode":"460000","sfName":"海南省"},
{"sfCode":"500000","sfName":"重庆市"},
{"sfCode":"510000","sfName":"四川省"},
{"sfCode":"520000","sfName":"贵州省"},
{"sfCode":"530000","sfName":"云南省"},
{"sfCode":"540000","sfName":"西藏"},
{"sfCode":"610000","sfName":"陕西省"},
{"sfCode":"620000","sfName":"甘肃省"},
{"sfCode":"630000","sfName":"青海省"},
{"sfCode":"640000","sfName":"宁夏"},
{"sfCode":"650000","sfName":"新疆"},
{"sfCode":"710000","sfName":"台湾省"},
{"sfCode":"810000","sfName":"香港"},
{"sfCode":"820000","sfName":"澳门"}]

function sfcode(sf){
    var ii = 0
    while (ii<sheng.length){
        print(sheng[ii]['sfName'])
        if (sheng[ii]['sfName'].lastIndexOf(sf) != -1){
           return  sheng[ii]['sfCode']
        }
        ii = ii +1
    }
    return 100
}

if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

function run(){
    renwu = dialogs.singleChoice("请选账号", ["明华", "华少"], 1);
    pingtai = dialogs.singleChoice("请选择接码平台", ["菜鸟平台", "海豚平台","奥迪平台","吉利平台"], 0);
    if (pingtai == 0 || pingtai == 2   || pingtai == 3  ){
        xmid = rawInput("请输入项目ID", "1000");
        toastLog("项目ID："+xmid)
    }
    
    if (pingtai == 2){
        buqiege = dialogs.singleChoice("是否切割", ["是", "否"], 1);
    }
    if (pingtai == 2){
        sssa = rawInput("请输入切割位数", "0");
        toastLog("切割位数"+sssa)
    }
        

    guojia = dialogs.singleChoice("选择国家", ["中国", "马来西亚","越南","喀麦隆","阿根廷","肯尼亚","香港","澳门","台湾"], 0);
    if (guojia == 0){
    }
    huanip = dialogs.singleChoice("请选择切换IP", ["VPN", "飞行"], 1);
    fz = dialogs.singleChoice("辅助功能", ["开", "关"], 0);
    if (fz == 0){
        zdhk = 0
    }
    ptxz = dialogs.singleChoice("选择辅助平台", ["明华", "帮众","原来"], 0);
    huakuai = dialogs.singleChoice("请选择滑块", ["老滑块", "新滑块","手动"], 1);
    pyq = dialogs.singleChoice("朋友圈", ["发", "不发"], 1);
    if (huakuai == 0){
    }
    // console.show();
    // console.setSize(device.width / 2, device.height / 2);
    while (1){

        toast("打开微信");
        if (pingtai == 0){
            if (renwu == 0){
                phone_num = caiNiaoPhone("")
            }
            else if (renwu == 1){
                phone_num =hscaiNiaoPhone("")
            }
        }
        else if (pingtai == 1){
            phone_num =getphone()
        }
        else if (pingtai == 2){
            phone_num = aodiPhone()
            if(buqiege == 0){
                //切割
                var ta= ""
                for (i = 0; i < phone_num.length; i++) {  // 奔驰返回的号码是10位
                    var danzimu = phone_num.substr(i,1)
                    log("单个数字"+danzimu)
                    if (i > sssa){
                        ta = ta + danzimu
                    }
                }
                phone_num = ta
            }
        }
        else if (pingtai == 3){
            phone_num =JLPhone("")
        }  
        //mm = pwd()
        // mm = "mymimais"
        mm = suijiname()
        print("密码是："+mm)
        toastLog("请手动打开微信")
        // if (fz == 0){
        openWX()
        // }
        main()
    }
}


function tkb(x,y){
    var nu = random(0, 25)
    click(x+nu,y+nu)
    sj(99,500)
}

function tkb1(x,y){
    var nu = random(-5, 5)
    click(x+nu,y+nu)
    sj(99,500)
}



function beifen(){
    log("备份")
    try {
        var r = http.get("http://127.0.0.1:1314/cmd?fun=backup_params&to_filename="+phone_num+".txt");
        log("code = " + r.statusCode);
        log("html = " + r.body.string());
       
    } catch(error) {
        print(error);
            sleep(2000)
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
            click(x,y)
            break
        }
    }
    //print(x)
}

function suijiname(){
    var zm=new Array("q","w","r","t","y","p","a","s","d","f","g","h","j","k","l","z","x","c","b","n","m")
    var name_sj = ""
    for (i = 0; i < 8; i++) { 
        var nu = random(0, 20)
        var temp = zm[nu]
        name_sj = temp + name_sj
    }
    print(name_sj)
    return name_sj
}

function haoma(xx){
    //间距X 243 y 181 初始坐标 301, 1322
    var x = 0
    var y = 0
    if(xx == 0){
        x = 550
        y =  1827
    }
    else if (xx<= 3){
        x = (xx-1)*243+301
        y = 1322
    }
    else if(xx >3 & xx<=6){
        x = (xx-4)*243+301
        y = 1488
    }
    else if(xx >6 & xx<=9){
        x = (xx-7)*243+301
        y = 1658
    }
    //log(x)
    click(x,y)
}

function pwd(){
    var zm=new Array("q","w","r","t","y","p","a","s","d","f","g","h","j","k","l","z","x","c","b","n","m")
    var pwd_sj = ""
    for (i = 0; i < 8; i++) { 
        var nu = random(0, 20)
        var temp = zm[nu]
        pwd_sj = temp + pwd_sj   
    }
    return pwd_sj
}


// var  guojia = 0

// var fz = 0

// var phone_num= "15007755543"

// var huakuai = 0




// main()


function main(){
    var temp = 0
    var temp1 = 0
    // var fuzhu = 0
    while (true){
        if(text("允许").exists()){
            sj(500,888)
            tkb(831, 1130)
            sj(500,888)
            temp = 1
        }
        if(text("注册").exists() & text("登录").exists() ){
            click("注册")
            // tkb(861, 1802)
            sj(500,2000)
        }
        if(id("com.tencent.mm:id/dd3").exists()){
            log("查找你的微信朋友")
            click(600,1100)  //好
            sj(500,1000)
        }
        if(id("com.tencent.mm:id/djr").exists()){
            log("权限申请--知道了")
            click(533,1272)
            sj(500,1000)
        }
        if (temp1 == 0){
            if(text("中国大陆（+86）").exists()){
                tkb(371,716)
                sj(800,1200)
                temp1 = 1
            }  
        } 
        if(text("选择国家和地区代码").exists()){
            sleep(1000)
            tkb1(1012,137)             //搜索框
            sj(1200,1500)
            if (guojia == 0){
                setText(0,"中国大陆")      //中国大陆
            }
            else if (guojia == 1){
                setText(0,"马来西亚")      //马来西亚
            }
            else if (guojia == 2){
                setText(0,"越南")      //越南
            }
            else if (guojia == 3){
                setText(0,"喀麦隆")      //喀麦隆
            }
            else if (guojia == 4){
                setText(0,"阿根廷")      //阿根廷
            }
            else if (guojia == 5){
                setText(0,"肯尼亚")      //肯尼亚
            }
            else if (guojia == 6){
                setText(0,"中国香港")      //中国香港
            }
            else if (guojia == 7){
                setText(0,"中国澳门")      //中国澳门
            }
            else if (guojia == 8){
                setText(0,"中国台湾")      //中国台湾
            }
            sj(1200,1500)
            tkb(175,385)
            sj(1200,1500)
        }  
        if(text("例如：陈晨").exists()){
            var name = suijiname()

            sj(800,1500)
            tkb(740, 585)       //点输入
            sj(500,800)
            tkb(740, 585)       //点输入
            sj(500,800)

            click(460, 1151)
            sleep(800)
            click(417, 1385)        //全键盘拼音
            sleep(1200)


            // for (i = 0; i < 2; i++) { 
            //     var danzimu = name.substr(i,1)
            //     zimu(danzimu)
            //     sj(200,500)
            // }
            // var xnu = random(50, 846)
            // tkb(xnu,1163)
            // sj(800,1200)
            name = suijiname()
            for (i = 0; i < 2; i++) { 
                var danzimu = name.substr(i,1)
                zimu(danzimu)
                sj(200,500)
            }
            var xnu = random(50, 846)
            tkb(xnu,1163)
            sj(500,800)

            tkb(865, 1831)             //变成英文
            sleep(500)
            
            var name2 = suijiname()
            name2 = suijiname()
            for (i = 0; i < 2; i++) { 
                var danzimu = name2.substr(i,1)
                zimu(danzimu)
                sj(200,500)
            }

            // click(66, 1311)            //q
            // sleep(50)
            // click(66, 1311)            //q
            // sleep(50)

            click(734, 1829)            //.
            sleep(50)

            var name3 = suijiname()
            name2 = suijiname()
            for (i = 0; i < 3; i++) { 
                var danzimu = name3.substr(i,1)
                zimu(danzimu)
                sj(200,500)
            }


            // click(435, 1658)            //c
            // sleep(50)
            // click(897, 1330)            //o
            // sleep(50)
            // click(857, 1654)            //m
            // sleep(50)

            tkb(1028, 1883)    //去键盘
            sj(800,1200)
        }    
        if(text("昵称").exists() & text("手机号").exists() & text("请填写手机号").exists() ){
            sleep(1200)
            tkb(932, 865)             //输入手机号
            sj(500,888)
            tkb(932, 865)
            sj(500,888)

            // var temp
            // var sz = ""
            // for (i = 0; i < 6; i++) {            //生成随机手机号
            //     temp = random(0, 9)
            //     sz = temp + sz
                //log(sz)
            // }
            // log(sz)
            //phone_num = "940"+sz
            // phone_num = "17727"+sz
            log(phone_num)

           // for (i = 0; i < 8; i++) { 
            for (i = 0; i < 11; i++) { 
                var danzimu = phone_num.substr(i,1)
                log("单个字母"+danzimu)
                haoma(danzimu)
                sj(200,500)
            }
        // } 
        // if(text("填写密码").exists()){

            sj(1200,1500)
            tkb(350,970)
            sj(1200,1500)
            tkb(350,970)
            sj(1200,1500)
            // sj(1000,1200)
            // tkb(940, 1037)             //输入密码
            // sj(1000,1200)
            // tkb(940, 1037)
            // sj(1000,1200)

            // var mm = "dntkblmm"
            for (i = 0; i < 8; i++) { 
                var danzimu = mm.substr(i,1)
                log("单个字母"+danzimu)
                zimu(danzimu)
                sj(200,500)
            }
            
            tkb(1013, 1841)             //去键盘
            sj(1200,1500)
            tkb(995, 1157)
            sj(1200,1500)
        }
        
        
        if(text("已阅读并同意").exists()){
            log("已阅读并同意")
            var img2 = captureScreen();
            sleep(200)
            tkb(213,1186)
            sj(500,1200)
            tkb1(539,1301)
            sj(1500,1800)
            if(images.detectsColor(img2, "#ededed", 183, 1175) & images.detectsColor(img2, "#07c160",185, 1296)){
                log("还没有点")
                tkb(167, 1182)
                sj(500,1200)
        
                // if(text("中国（+86）").exists()){
                //     click(471, 713)
                //     sj(800,1200)
                //     click(1050, 1583)           //X
                //     sj(800,1200)
                //     click(184, 380)             //香港
                //     sj(800,1200)
                // }
        
        
                tkb(545, 1294)
                sj(1800,2500)
            }
            //判断在该坐标的颜色是否为橙红色  188, 1171, 0x1aad19
            else if(images.detectsColor(img2, "#1aad19", 183, 1171)& images.detectsColor(img2, "#07c160",185, 1296)){
                log("已经同意")
        
                // if(text("中国（+86）").exists()){
                //     click(471, 713)
                //     sj(800,1200)
                //     click(1050, 1583)           //X
                //     sj(800,1200)
                //     click(184, 380)             //香港
                //     sj(800,1200)
                // }
                
                tkb(545, 1294)
                sj(1800,2500)
            }
        }
        
        //68,1600
        if(text("我已阅读并同意上述条款").exists()){
            tkb(44, 1714) 
            sj(800,1200)
            tkb(68,1600)
            sj(800,1200)
            tkb(538, 1771)
            sj(1500,2000)
        }
        if(text("安全验证").exists() & text("为了你的帐号安全，本次注册需要进行安全验证码校验").exists() & text("拖动下方滑块完成拼图").exists() == false ){
            log("开始安全验证")
            sj(1000,2000)
            tkb(532, 1059)
            sj(1000,1500)
            tkb(544,  729)
            sj(1000,1500)
            var num = 0
            while (true){
                sleep(100)
                num = num +1
                if(text("拖动下方滑块完成拼图").exists()){
                    break;
                }
                if (num > 120){
                    break;
                }
                if(text("让用户用微信扫描下面的二维码").exists()){
                    log("出现辅助")
                    break
                }
                if(text("不方便扫码").exists()){
                    break;
                }
            }
            log("加载滑块完成")
            //break
        }
        if(text("拖动下方滑块完成拼图").exists()){
            if(huakuai == 0){
                sleep(2000)
                hk()
                sleep(2000)
            }
            else if (huakuai == 1){
                sleep(2000)
                block()
                sleep(2000)
            }
            else if (huakuai == 2){
                sleep(2000)
                // block()
                sleep(2000)
            }
        } 
        if(text("网页无法打开").exists()){
            back()
            sleep(2000)
        } 
        if(text("请输入验证码").exists()){
            click("请输入验证码")
            sleep(1500)
            if (pingtai == 0){
                if (renwu == 0){
                    yzm = caiNiaoMS()
                }
                else if (renwu == 1){
                    yzm = hscaiNiaoMS()
                }
            }
            else if (pingtai == 1){
                yzm = getMS()
            }
            else if (pingtai == 2){
                yzm = aodiMS()
            }
            else if (pingtai == 3){
                yzm = JLMS()
            }
            if (yzm != -1){
                setText(yzm)
                sleep(800)
                tkb1(500,800)
                sleep(4000)
            }
            else{
                log("没短信")
                break;
            }
        } 
        if(text("发送短信").exists() || text("已发送短信，下一步").exists()){
            toastLog("已发送短信，下一步")
            sleep(2000)
            if(id("com.tencent.mm:id/ed1").exists()){
                try {
                    var tt = id("com.tencent.mm:id/ed1").findOnce().text();
                    tt = tt.split("zc")
                    if (tt.length >= 2 ){
                        log(tt[1])
                        if (pingtai == 0){
                            if (renwu == 0){
                                caiNiaoSendMS(tt[1])
                            }
                            else if (renwu == 1){
                                hscaiNiaoSendMS(tt[1])
                            }
                        }
                        else if (pingtai == 1){
                            if( sendMS(tt[1]) == false){
                                return false
                            }
                        }
                        sleep(10000)
                        click(566,1363)
                        sleep(4000)
                        temp = 2
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
        if(text("让用户用微信扫描下面的二维码").exists()){
            log("出现辅助")
            if (fz == 1){
                if (pingtai == 0){
                    if (renwu == 0){
                        caiNiaoLaHei()
                    }
                    else if (renwu == 1){
                        hscaiNiaoLaHei()
                    }
                }
                else if (pingtai == 1){
                    lahei()
                }
                else if (pingtai == 2){
                    aodiLaHei()
                }
                else if (pingtai == 3){
                    JLLaHei()
                }
                break
            }
            else{
                toastLog("开始辅助")
                sleep(2000)
                sf_num = sfcode(sf)
                url = jiexi()
                if (url == false){
                    toastLog("解析二维码失败")
                    back()
                    sleep(2000)
                }
                else{
                    if (ptxz == 0){
                        if (renwu == 0){
                            mhxiadan(url)
                        }
                        else if (renwu == 1){
                            hsxiadan(url)
                        }
                    }
                    else if (ptxz == 1){
                        zbxiadan(url)
                    }
                    else if (ptxz == 2){
                        xiadan(url)
                    }
                    
                    var timenum = 0
                    while(timenum < 301){
                        timenum = timenum+1
                        if(text("返回注册流程").exists()||text("验证成功").exists()){
                            if (ptxz == 0){
                                if (renwu == 0){
                                    mhfankuidingdan(1)
                                }
                                else if (renwu == 1){
                                    hsfankuidingdan(1)
                                }
                            }
                            else if (ptxz == 1){
                                zbfankuidingdan(3)
                            }
                            else if (ptxz == 2){
                                fankuidingdan("success")
                            }
                            tkb(515,915)
                            break
                        }
                        var img = captureScreen();
                        //判断在该坐标的颜色是否为橙红色   1016,973,0x1aad19  
                        if(images.detectsColor(img, "#1aad19",  1016,973) & images.detectsColor(img, "#000000", 637,711)  & images.detectsColor(img, "#f0f0f0", 517,499)){
                            log("返回注册流程2")
                            if (ptxz == 0){
                                if (renwu == 0){
                                    mhfankuidingdan(1)
                                }
                                else if (renwu == 1){
                                    hsfankuidingdan(1)
                                }
                            }
                            else if (ptxz == 1){
                                zbfankuidingdan(3)
                            }
                            else if (ptxz == 2){
                                fankuidingdan("success")
                            }
                            tkb(515,915)
                            break
                        }
                        sleep(2000)
                        toastLog(timenum)
                    }
                    if (timenum>=300){
                        toastLog("没有辅助成功")
                        oId_temp = oId
                        if (ptxz == 0){
                            if (renwu == 0){
                                mhfankuidingdan(2)
                            }
                            else if (renwu == 1){
                                hsfankuidingdan(2)
                            }
                        }
                        else if (ptxz == 1){
                            zbfankuidingdan(6)
                        }
                        else if (ptxz == 2){
                            fankuidingdan("fail")
                        }
                        // fuzhu = fuzhu + 1
                        // if (fuzhu >= 2){
                        //     break
                        // }
                        // if (fuzhu < 2){
                        //     back()
                        //     sleep(1000)
                        // } 
                        break
                    }
                }
            }
        }
        if(text("不是我的，继续注册").exists()){     //国外用的
            toastLog("不是我的，继续注册")
            tkb(523, 1017)
            sleep(2000)
        }
        
        if(id("com.tencent.mm:id/dd3").exists()){
            log("查找你的微信朋友")
            click(600,1100)
            sj(500,1000)
        }
        if(id("com.tencent.mm:id/cdb").exists()){
            log("尚未收到你的验证码")
            click(600,1100)
            sj(500,1000)
            if (pingtai == 0){
                if (renwu == 0){
                    phone_num = caiNiaoPhone(phone_num)
                }
                else if (renwu == 1){
                    phone_num =hscaiNiaoPhone(phone_num)
                }
            }
        }
        if(text("通讯录").exists() &&  text("发现").exists() ){
            toastLog("注册成功")
            sleep(5000)
            if (pyq == 0){
                pengyouquan()
            }
            if (pyq == 1){
                A16()
                var m = hex_md5(phone_num)
                if (renwu == 0){
                    upwx(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
                }
                else if (renwu == 1){
                    hsupwx(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
                }
            }
            sleep(2000)
            break
        }
        if(text("用短信验证码登录").exists() &&  text("找回密码").exists()  ){ 
            toastLog("用短信验证码登录")
            toastLog("封号")
            files.append("/sdcard/.crabextra/封号.txt",phone_num);
            break
        }
        if(text("确定").exists()){     //封号
            toastLog("疑似出现封号")
            if (textContains("当前手机号").exists()) {
                toastLog("当前手机号当天注册过")
                click("确定")
                sleep(2000)
                break
            }
            var img = captureScreen();
            //   563,1219,0x576b95 523,1022,0x757575 203,913,0x757575 --取色列表
            if(images.detectsColor(img, "#576b95", 563,1219) & images.detectsColor(img, "#757575",523,1022)  & images.detectsColor(img, "#757575",203,913)){
                toastLog("封号")
                files.append("/sdcard/.crabextra/封号.txt",phone_num);
                sleep(2000)
                break
            }
            else{
                click(534, 1156)   //点确定 
                sleep(2000)
            }
        }
    }
}

function hk(){
    while (true) {
        img = images.captureScreen();
        if (img) {
            log("截图成功。进行识别滑块！");
            break;
        } else {
            log('截图失败,重新截图');
        }
    }
    
    try {
        var p = images.findMultiColors(img, "#4b4a4e", [[-7, 0, "#e0e1e3"], [0, -14, "#eaebf0"], [0, 106, "#4b4c4e"], [-7, 106, "#e5e7e8"], [111, -8, "#4b4b4d"], [110,-14, "#ecedf1"], [120, -8, "#e2e3e3"]], {
            region: [504, 783, 980 - 504, 1189-783],
            threshold : 78
        });
        var ex = p.x +65
        log(p.x)
        randomSwipe(220,1385,ex,1385)
        return 1
    } catch (error) {
        //出错
        console.log("识别失败，错误原因：" + error);
        return -1;
    }

}

/**
 * 真人模拟滑动函数
 * 
 * 传入值：起点终点坐标
 * 效果：模拟真人滑动
 */
function randomSwipe(sx,sy,ex,ey){
    //设置随机滑动时长范围
    var timeMin=500
    var timeMax=1500
    //设置控制点极限距离
    var leaveHeightLength=500
    
    //根据偏差距离，应用不同的随机方式
    if(Math.abs(ex-sx)>Math.abs(ey-sy)){
        var my=(sy+ey)/2
        var y2=my+random(0,leaveHeightLength)
        var y3=my-random(0,leaveHeightLength)
    
        var lx=(sx-ex)/3
        if(lx<0){lx=-lx}
        var x2=sx+lx/2+random(0,lx)
        var x3=sx+lx+lx/2+random(0,lx)
    }else{
        var mx=(sx+ex)/2
        var y2=mx+random(0,leaveHeightLength)
        var y3=mx-random(0,leaveHeightLength)

        var ly=(sy-ey)/3
        if(ly<0){ly=-ly}
        var y2=sy+ly/2+random(0,ly)
        var y3=sy+ly+ly/2+random(0,ly)
    }

    //获取运行轨迹，及参数
    var time=[0,random(timeMin,timeMax)]
    var track=bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey)
    
    log("随机控制点A坐标："+x2+","+y2)
    log("随机控制点B坐标："+x3+","+y3)
    log("随机滑动时长："+time[1])
    
    //滑动
    gestures(time.concat(track))
    //console.hide()
}

function bezierCreate(x1,y1,x2,y2,x3,y3,x4,y4){
    //构建参数
    var h=100;
    var cp=[{x:x1,y:y1+h},{x:x2,y:y2+h},{x:x3,y:y3+h},{x:x4,y:y4+h}];
    var numberOfPoints = 100;
    var curve = [];
    var dt = 1.0 / (numberOfPoints - 1);
    
    //计算轨迹
    for (var i = 0; i < numberOfPoints; i++){
        var ax, bx, cx;
        var ay, by, cy;
        var tSquared, tCubed;
        var result_x, result_y;
    
        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;
        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;
    
        var t=dt*i
        tSquared = t * t;
        tCubed = tSquared * t;
        result_x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
        result_y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
        curve[i] = {
            x: result_x,
            y: result_y
        };
    }

    //轨迹转路数组
    var array=[];
    for (var i = 0;i<curve.length; i++) {
        try {
            var j = (i < 100) ? i : (199 - i);
            xx = parseInt(curve[j].x)
            yy = parseInt(Math.abs(100 - curve[j].y))
        } catch (e) {
            break
        }
        array.push([xx, yy])
    }
    
    return array
}


function vpn(){
    var intent = new Intent(); 
    //intent.setAction("android.net.vpn.SETTINGS");
    intent.setAction("android.settings.VPN_SETTINGS");
    app.startActivity(intent);
    var temp = 0
    while(1){
        
        if(text("尚未添加任何 VPN。").exists()){
            sleep(2000)
            back()
            sleep(1000)
            toastLog("没有VPN重新打开连接")
            vpn()
            return
        }

        if(text("VPN").exists()){
            if(text("正在连接...").exists() ){

            }
            else{
                click(776, 339)
                sleep(1000)
            }
        }
        
        if(text("断开连接").exists()){
            if (temp == 0){
                click(236, 1310)      //断开
                sleep(1000)
                temp = 1
            }
            else{
                click(878, 1316)      //取消
                sleep(1000)
                break
            }
        }
        if(text("连接").exists()){
            click(887, 970)
            sleep(1000)
            temp = 1
        }
    }
    
}


function feixing(){
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

function openWX(){
    home()
    sleep(1200)
    click(906, 574)    //知道了
    sleep(1000)

    click(542, 1798)    //菜单
    sleep(1500)

    click(854, 1822)
    sleep(500)
    click(923, 1824)   //Y
    sleep(1200)

    click(251, 1034)  //微信
    sleep(1000)
    launch("com.tencent.mm");
    sleep(2000)

    var tempnum = 0
    while(1){
        tempnum = tempnum +1
        sleep(1000)
        if (tempnum > 10){
            log("超时返回")
            back()
            sleep(2000)
            tempnum = 0
        }
        if(text("允许").exists()){
            log("允许")
            return
        }
        if(text("登录").exists() & text("注册").exists()  ){
            log("登录")
            return
        }
        if(id("com.tencent.mm:id/djr").exists()){
            log("权限")
            return
        }
        toastLog(10-tempnum+"秒后重新打开微信")
        if(text("下一页").exists()){
            log("下一页")
            openWX()
            return
        }
    }
}



function Trim(str, is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
    }
    return result;
}

function getlon() { //查询lon
    var url = "https://www.ipip.net/ip.html";
    log(url);
    while (true) {
        try {
            var res = http.get(url);
            if (res.statusCode != 200) {
                print("请求失败: " + res.statusCode + " " + res.statusMessage);
                if(huanip == 1){
                    feixing()
                }
            } else {
                var r = Trim(res.body.string(), "g");
                //print(r);
                var ip = r.match(/[0-9]+[.][0-9]+[.][0-9]+[.][0-9]+/);
                var m = r.match(/[0-9]+[.][0-9][0-9]+,[0-9]+[.][0-9][0-9]+/);
                var m = m[0].split(",");
                var mm = r.match(/<spanstyle="float:left;line-height:40px;display:inline-block;width:720px;">[\u4e00-\u9fa5]+/);
                if (mm == null) {
                    log("ip获取失败")
                } else {
                    var mm = mm[0].split('720px;">')
                }
                var mncs = r.match(/<spanstyle="display:inline-block;text-align:center;width:720px;float:left;line-height:46px;">[\u4e00-\u9fa5]+/);
                if (mncs == null) {
                    log("ip获取失败2")
                } else {
                    var mncs = mncs[0].split('46px;">')
                }
                print(mncs[1]);
                if (mncs[1] == "移动") {
                    mnc = 0
                } else if (mncs[1] == "联通") {
                    mnc = 1
                } else if (mncs[1] == "电信") {
                    mnc = 3
                }else{
                   mnc=1
                }
                ip2 = ip[0];
                log(ip2);
                lat = m[0];
                lon = m[1];
                getdz = mm[1];
                log(lat+","+lon+","+getdz);
                if (ipkg == 1) {
                    ips = listip([{
                        "ip": ip2,
                    }]);
                    if (ips == true) {
                        log("ip无重复");
                        ipadd();
                        break
                    } else {
                        log("ip重复");
                        if (vpn == 1) {
                            changefly();
                        } else if (vpn == 2) {
                            vpng();
                            vpnk();
                        }
                    }
                } else {
                    break;
                }
            }
        } catch(error) {
            print(error);
            sleep(2000)
            return false
        }
        sleep(3000);
    }
}

function getmac(lat, lon, macs) { //查询mac
    var url = "http://api.cellocation.com:81/rewifi/?lat=" + lat + "&lon=" + lon + "&n=" + Number(macs)+ "&mnc=" + Number(mnc);
    log(url);
    while (true) {
        try {
            var res = http.get(url);
            if (res.statusCode != 200) {
                print("请求失败: " + res.statusCode + " " + res.statusMessage);
                if(huanip == 1){
                    feixing()
                }
            } else {
                var r = res.body.json();
                //print(r);
                // log(r[0].mac+","+r[1].mac+","+r[2].mac+","+r[3].mac+","+r[4].mac+","+r[5].mac+","+r[0].location.lon+","+r[0].location.lat+","+r[1].location.lon+","+r[1].location.lat)  
                return r[0].mac + "," + r[1].mac + "," + r[2].mac + "," + r[3].mac + "," + r[4].mac + "," + r[5].mac + "," + r[0].location.lon + "," + r[0].location.lat
            }
        } catch(error) {
            print(error);
            sleep(2000)
            return false
        }
        sleep(3000);
    }
}

function getmnc(lat, lon, macs) { //查询mnc
    var url = "http://api.cellocation.com:81/recell/?lat=" + lat + "&lon=" + lon + "&n=" + Number(macs) + "&mnc=" + mnc;
    log(url)
    while (true) {
        try {
            var res = http.get(url);
            if (res.statusCode != 200) {
                print("请求失败: " + res.statusCode + " " + res.statusMessage);
                if(huanip == 1){
                    feixing()
                }
            } else {
                var r = res.body.json();
                print(r);
                if (r[0] == void 0 || r==null ) {
                // log(r[0].mnc+","+r[0].lac+","+r[0].ci)  
                log("获取lac失败")
                return false
            }else{
                return mnc + "," + r[0].lac + "," + r[0].ci
            }
        }
        } catch(error) {
            print(error);
            sleep(2000)
            return false
        }
        sleep(3000);
    }
}

function A16(){
    beifen()
    sleep(2000)
    var A16_JSON = (files.read("/sdcard/.crab/"+phone_num+".txt"));  //
    //log(A16_JSON)
    A16_OBJ =JSON.parse(A16_JSON);
    toastLog(A16_OBJ['code'])
    var d = new Date();
    var time1 = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    var wxd = phone_num+"----"+mm+"----"+A16_OBJ['a16']
    // upwx(wxd)
    toastLog(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
    files.append("/sdcard/.crabextra/"+time1+".txt",phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid']+"\n");
}

function A166(){
    //beifen()
    sleep(2000)
    var A16_JSON = (files.read("/sdcard/.crab/"+phone_num));  //+".txt"
    //log(A16_JSON)
    A16_OBJ =JSON.parse(A16_JSON);
    toastLog(A16_OBJ['code'])
    //toastLog(A16_OBJ['a16'])
    toastLog(A16_OBJ['wxid']+"----QW123456789----"+A16_OBJ['a16']+"----"+phone_num)
}

function getphone(){
    while (1){
        try {
            var r = http.get("http://api.haitunjiema.com:8888/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3&iid=2024&did=&operator=&provi=&city=&mobile=");
            if( r.statusCode == 200){
                var body =  r.body.string()
                toastLog("html = " +body);
                phone_num = body.split('|')[4];
                pid = body.split('|')[1];
                var sfcs = body.split('|')[6]
                sf = sfcs.slice(0,2)
                toastLog("手机号="+phone_num+"pid="+pid+"省分="+sf)
                return phone_num
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

function sendMS(nn){
    var tempnum = 0
    while(1){
        try {
            var r = http.get("http://api.haitunjiema.com:8888/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var te =  r.body.string()
                log("html = " +te);
                toastLog("发送成功")
                return true;
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function getMS(){                                 //获取短信回执30秒，失败会重新发送消息，发送三次还失败就换号。总共耗时90秒
    var tempnum = 0
    while(1){
        if (tempnum >10){
            return false
        }
        try {
            var r = http.get("http://api.haitunjiema.com:8888/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid);
            if( r.statusCode == 200){
                var te =  r.body.string()
                log("html = " +te);
                if(te.split('|')[0] == 1){
                    toastLog("发送成功2")
                    return true 
                }
                else{
                    toastLog("发送失败"+te)
                    sleep(3000)
                    tempnum = tempnum+1
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function lahei(nn){  
    while(1){
        try {
            var r = http.get("http://api.haitunjiema.com:8888/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&reason=usedc");
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

//奥迪平台
function aodiPhone(){
    toastLog("获取奥迪手机号")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3&iid="+xmid+"&did=&operator=&provi=&city=&mobile=");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    var sfcs = body.split('|')[6]
                    sf = sfcs.slice(0,2)
                    return body.split('|')[4]
                } 
                else{
                    toastLog("没有号码"+body)
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

function aodiMS(){
    toastLog("获取奥迪短信")
    var t1 =new Date().getTime()
    while(1){
        if(text("收不到验证码？").exists()|| text("No verification code received").exists()){
            click(679-20,650+20) 
            sleep(2000)   
            click(191+20,893+20)
            sleep(2000)
        }
        try {
            if ((new Date()).getTime() - t1 > 240*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
				t1 = (new Date()).getTime()
				aodiLaHei("无短信") //  手机号加入黑名单
				log("获取短信失败");
				return -1
			}
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    return body.split('|')[1]
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function aodiSendMS(nn){
    toastLog("奥迪发信息")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&receiver=0084869412006&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                break;
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function aodiLaHei(a){
    toastLog("奥迪拉黑")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&reason="+a);
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

//吉利平台          8105712b03ac566bcd09548813984fe3

function JLPhone(pp){
    log("获取吉利手机号")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3&iid="+pp+"&did=&operator=&provi=&city=&mobile=");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log(body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    var sfcs = body.split('|')[6]
                    sf = sfcs.slice(0,2)
                    return body.split('|')[4]
                } 
                else{
                    log("没有号码"+body)
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

function JLMS(){
    log("获取吉利短信")
    var t1 =new Date().getTime()
    while(1){
        if(text("收不到验证码？").exists()|| text("No verification code received").exists()){
            click(558,703) 
            sleep(2000)   
            // click(480,1521)
            click("Resend")
            sleep(2000)
        }
        try {
            if ((new Date()).getTime() - t1 > 240*1000) {   // 4分钟还没有拿到短信,说明该号有问题，将其拉黑
				t1 = (new Date()).getTime()
				aodiLaHei("无短信") //  手机号加入黑名单
				log("获取短信失败");
				return -1
			}
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                // log("html = " +body);
                if(body.split('|')[0] == 1){
                    return body.split('|')[1]
                } 
                else{
                    log("没有短信"+body)
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

function JLSendMS(nn){
    // log("吉利发信息")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&receiver=0084869412006&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                break;
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

function JLLaHei(a){
    log("吉利拉黑")
    while(1){
        try {
            var r = http.get("http://api5.caugu.com/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&reason="+a);
            if( r.statusCode == 200){
                log("拉黑成功")
                break
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
        break
    }
}

//8105712b03ac566bcd09548813984fe3_12786

//华少

function hscaiNiaoPhone(pp){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3_12786&iid="+xmid+"&did=&operator=&provi=&city=&seq=0&mobile=");
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3_12786&iid="+xmid+"&did=&operator=&provi=&city=&seq=0&mobile="+pp);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    var sfcs = body.split('|')[6]
                    sf = sfcs.slice(0,2)
                    return body.split('|')[4]
                } 
                else{
                    toastLog("没有号码"+body)
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

function hscaiNiaoMS(){
    toastLog("获取奥迪短信")
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
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid);
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3_12786&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    return body.split('|')[1]
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function hscaiNiaoSendMS(nn){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3_12786&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                break;
                // if(body.split('|')[0] == 1){
                //     toastLog("发送成功")
                //     break
                // } 
                // else{
                //     toastLog("没有发送短信"+body)
                //     sleep(3000)
                // }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function hscaiNiaoLaHei(){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&reason=fuzhu");
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3_12786&pid="+pid+"&reason=fuzhu");
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

//明华
function caiNiaoPhone(pp){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=getPhone&token=8105712b03ac566bcd09548813984fe3&iid="+xmid+"&did=&operator=&provi=&city=&seq=0&mobile=");
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=getPhone&token=96d34b4f1bfc5f4421e07dd0abb6e94c_19095&iid="+xmid+"&did=&operator=&provi=&city=&seq=0&mobile="+pp);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    pid =body.split('|')[1]
                    var sfcs = body.split('|')[6]
                    sf = sfcs.slice(0,2)
                    return body.split('|')[4]
                } 
                else{
                    toastLog("没有号码"+body)
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

function caiNiaoMS(){
    toastLog("获取奥迪短信")
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
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=getPhoneCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid);
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=getPhoneCode&token=96d34b4f1bfc5f4421e07dd0abb6e94c_19095&pid="+pid);
            if( r.statusCode == 200){
            
                var body =  r.body.string()
                log("html = " +body);
                if(body.split('|')[0] == 1){
                    return body.split('|')[1]
                } 
                else{
                    toastLog("没有短信"+body)
                    sleep(3000)
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }

    }
}

function caiNiaoSendMS(nn){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=sendCode&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=sendCode&token=96d34b4f1bfc5f4421e07dd0abb6e94c_19095&pid="+pid+"&receiver=106903290212367&smscontent=zc"+nn);
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                break;
                // if(body.split('|')[0] == 1){
                //     toastLog("发送成功")
                //     break
                // } 
                // else{
                //     toastLog("没有发送短信"+body)
                //     sleep(3000)
                // }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }    
    }
}

function caiNiaoLaHei(){
    while(1){
        try {
            // var r = http.get("http://s3.xun58.cn/yhapi.ashx?act=addBlack&token=8105712b03ac566bcd09548813984fe3&pid="+pid+"&reason=fuzhu");
            var r = http.get("http://s3.jydpt.com/yhapi.ashx?act=addBlack&token=96d34b4f1bfc5f4421e07dd0abb6e94c_19095&pid="+pid+"&reason=fuzhu");
            if( r.statusCode == 200){
                toastLog("拉黑成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

//帮众
function zbxiadan(url){
    meiwang = 0
    var urll = "http://ymka.ymassist.com/assist/api/order/submit";
    // var sf_num = 910000;
    var meiwang = 0
    while(1){
        try {
            var res = http.post(urll, {
                "userKey": "55344d0f13864e9ea9f0ab9779fc694c",      //張明華
                "phone": phone_num,
                // "provinceId":sf_num ,
                // "qrCodeImg":""
                "qrCodeUrl": url,
            });
            if( res.statusCode == 200){
                toastLog("下单子成功")
                var body =  res.body.string()
                print(body)
                var body_OBJ =JSON.parse(body);
                YuE = (body_OBJ['msg'])
                print(YuE)
                if (YuE == "账户余额不足"){
                    alert("别看了,你没钱辅助了")
                    // alert("快充值去")
                }
                oId = (body_OBJ['object']['orderId'])
                print(oId)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        } 
    }
}

function zbfankuidingdan(zt){
    meiwang = 0
    var urll = "http://ymka.ymassist.com/assist/api/order/mark";
    var meiwang = 1;
    while(1){
        try {
            var res = http.post(urll, {
                "userKey": "55344d0f13864e9ea9f0ab9779fc694c",        //明華
                "orderId": oId,
                "status": zt,
            });
            if( res.statusCode == 200){
                //toastLog("反馈成功")
                var body =  res.body.string()
                print("反馈结果"+body)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }
    }
}

//别人
function xiadan(url){
    while(1){
        try {
            var r = http.get("http://api.tvnxl.com/xd/tj?key=3c1e8b78-93d9-4c24-b295-b2faad3a71ee&url="+url+"&tel="+phone_num+"&sfCode="+sf_num);
            if( r.statusCode == 200){
                toastLog("下单子成功")
                var body =  r.body.string()
                print(body)
                var body_OBJ =JSON.parse(body);
                oId = (body_OBJ['data']['oId'])
                print(oId)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function fankuidingdan(zt){
    while(1){
        try {
            var r = http.get("http://api.tvnxl.com/xd/xg?key=3c1e8b78-93d9-4c24-b295-b2faad3a71ee&oId="+oId+"&url="+url+"&sts="+zt);
            if( r.statusCode == 200){
                var body =  r.body.string()
                toastLog("修改订单成功"+body)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }
    }

}

//明华
function mhxiadan(url){
    toastLog("明华下单")
    var urll = "https://core.nq165.cn/wapi/fuzhu/create/task";
    // var phone_num = 13097756223;
    var sf_num = 1;
    var meiwang = 0
    while(1){
        try {
            var res = http.post(urll, {
                "apikey": "oihmn4wntmtz9hks",
                "phone": phone_num,
                "province_id":sf_num ,
                "qr_url": url,
            });
            if( res.statusCode == 200){
                toastLog("下单子成功")
                var body =  res.body.string()
                print(body)
                var body_OBJ =JSON.parse(body);
                oId = (body_OBJ['obj']['tid'])
                print(oId)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function mhfankuidingdan(zt){
    toastLog("明华反馈")
    var urll = "https://core.nq165.cn/wapi/fuzhu/review/task";
    var meiwang = 1;
    while(1){
        try {
            var res = http.post(urll, {
                "apikey": "oihmn4wntmtz9hks",
                "tid": oId,
                "result": zt,
            });
            if( res.statusCode == 200){
                //toastLog("反馈成功")
                var body =  res.body.string()
                print("反馈结果"+body)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }
    }
}

//华少
function hsxiadan(url){
    toastLog("华少下单")
    var urll = "https://core.nq165.cn/wapi/fuzhu/create/task";
    // var phone_num = 13097756223;
    var sf_num = 1;
    var meiwang = 0
    while(1){
        try {
            var res = http.post(urll, {
                "apikey": "thng3xr7a3xhmlu8",
                "phone": phone_num,
                "province_id":sf_num ,
                "qr_url": url,
            });
            if( res.statusCode == 200){
                toastLog("下单子成功")
                var body =  res.body.string()
                print(body)
                var body_OBJ =JSON.parse(body);
                oId = (body_OBJ['obj']['tid'])
                print(oId)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function hsfankuidingdan(zt){
    toastLog("华少反馈")
    var urll = "https://core.nq165.cn/wapi/fuzhu/review/task";
    var meiwang = 1;
    while(1){
        try {
            var res = http.post(urll, {
                "apikey": "thng3xr7a3xhmlu8",
                "tid": oId,
                "result": zt,
            });
            if( res.statusCode == 200){
                //toastLog("反馈成功")
                var body =  res.body.string()
                print("反馈结果"+body)
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }
    }
}

function getdiqu(){
    while(1){
        try {
            var r = http.get("http://api.tvnxl.com/xd/sfList");
            if( r.statusCode == 200){
                toastLog("获取地址成功")
                var body =  r.body.json()
                print(body['data'][0]['sfCode']) 
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function hsupwx(wxdata){
    while(1){
        try {
            var r = http.get("http://119.23.250.50/wx/up.php?biao_name=data&ph="+wxdata);
            if( r.statusCode == 200){
                toastLog("获取地址成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function upwx(wxdata){
    while(1){
        try {
            var r = http.get("http://119.23.250.50/mh/up.php?biao_name=data&ph="+wxdata);
            if( r.statusCode == 200){
                toastLog("获取地址成功")
                break
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }   
    }
}

function uppp(pp){
    while(1){
        try {
            var r = http.get("http://120.79.199.143/weixin/upmd5.php?data="+pp);
            if( r.statusCode == 200){
                log("上传成功")
                toast("上传成功")
                break
            }
            else{
                toastLog("没网")
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
        images.save(imm, "/sdcard/clip.png")    //data:image/png;base64,
        sleep(1000)
        var imgPath = "/sdcard/clip.png";
        var pixels = images.readPixels(imgPath);
        var w = pixels.width;
        log(w)
        var h = pixels.height;
        log(h)
        var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
        var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
        log(binaryBitmap)
        basc = qrCodeResult.getText()
        print(basc)
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

function pengyouquan(){
    toastLog("发朋友圈")
    var name = suijiname()
    toastLog("随机内容："+name)
    var bz = 0
    while(1){
        if(id("com.tencent.mm:id/djr").exists()){
            log("权限申请--取消")
            click("取消")
            sj(500,1000)
        }
        if(id("com.tencent.mm:id/dd3").exists()){
            log("查找你的微信朋友")
            click(600,1100)  //好
            sj(500,1000)
        }
        if(text("允许").exists()){
            sj(500,888)
            click("允许")
            sj(500,888)
        }
        if (bz == 0){
            if(text("腾讯新闻").exists() || text("微信团队").exists()){
                toastLog("微信团队")
                sleep(2000)
                tkb(363,302)   //腾讯新闻
                sj(5000,7000)
                back()
                sleep(2000)
                tkb(295,491)   //腾讯新闻
                sj(5000,7000)
                back()
                sleep(2000)
                if(text("通讯录").exists() &&  text("发现").exists() ){
                    toastLog("点发现")
                    bz = 1
                }
            }
        }
        if (bz == 1){
            if(text("通讯录").exists() &&  text("发现").exists() ){
                toastLog("点发现")
                click(668, 1827)
                sleep(1200)
            }
            if(text("朋友圈").exists() &&  text("扫一扫").exists() ){
                toastLog("点朋友圈")
                click(749, 285)
                sleep(2200)
                longClick(1006, 138)
                sleep(2000)
            }
            if(text("我知道了").exists()){
                toastLog("我知道了")
                click(554, 1742)
                sleep(2000)
            }
            if(text("所在位置").exists() &&  text("提醒谁看").exists() ){
                toastLog("输入朋友圈内容")
                click(749, 271)
                sleep(1200)
                for (i = 0; i < 2; i++) { 
                    var danzimu = name.substr(i,1)
                    zimu(danzimu)
                    sj(200,500)
                }
                sj(1200,2000)
                click(955, 140)         //点发送
                sleep(3000)
                A16()
                var m = hex_md5(phone_num)
                if (renwu == 0){
                    upwx(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
                }
                else if (renwu == 1){
                    hsupwx(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
                }
                // upziji(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
                break;
            }
        }
        if(text("确定").exists()){     //封号
            var img = captureScreen();
            if(images.detectsColor(img, "#576b95", 563,1219) & images.detectsColor(img, "#757575",523,1022)  & images.detectsColor(img, "#757575",203,913)){
                // toastLog("封号")
                files.append("/sdcard/.crabextra/封号.txt",phone_num);
                break
            }
            else{
                click(534, 1156)   //点确定 
                sleep(2000)
            }
        }
        if(text("用短信验证码登录").exists() &&  text("找回密码").exists()  ){ 
            toastLog("用短信验证码登录")
            toastLog("封号")
            // upziji2(phone_num+"----"+mm+"----"+A16_OBJ['a16']+"----"+A16_OBJ['wxid'])
            files.append("/sdcard/.crabextra/封号.txt",phone_num);
            break
        }
    }
}

function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}
function core_md5(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;

  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);

}
function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}
function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}
function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}



//新的滑块


function discernSlidingblock(img, ratio) {
    var temp, temp2, x, y, num, color, p, temp3, arr1;
    if (ratio == 3) {
        var tb = [348, 253, 691, 638, 81]
    }else if (ratio == 4) {
        tb = [21,194,519,481, 50];
       
    } else if (ratio == 1) {
        tb = [460,740,1024,1297, 50];
       
    } 
    else if (ratio == 0) {
        tb = [460,258,690,643, 75];
       
    }else {
        return -2
    }
    num = Math.ceil(tb[4] / 3.3 - 4);

    for (var k = 29; k <= 40; k++) {
        temp2 = "";
        color = "#" + k + "" + k + "" + k + "";
        for (var i = 1; i <= num; i++) {
            temp2 = temp2 + "0|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|0|" + color + ",";
            temp2 = temp2 + "1|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|1|" + color + ",";
            temp2 = temp2 + "2|" + i + "|" + color + ",";
            temp2 = temp2 + i + "|2|" + color + ",";
        }
        x = 0;
        while (x > -2) {
            y = 0;
            while (y > -2) {
                temp = "";
                for (var i = 1; i <= num; i += 2) {
                    temp = temp + "0|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x) + "|" + i + "|" + color + ",";
                    temp = temp + (tb[4] + x) + "|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|0|" + color + ",";
                    temp = temp + i + "|" + (tb[4] + y) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|" + (tb[4] + y) + "|" + color + ",";
                    temp = temp + "1|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - 1) + "|" + i + "|" + color + ",";
                    temp = temp + (tb[4] + x - 1) + "|" + (tb[4] + y - i - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|1|" + color + ",";
                    temp = temp + i + "|" + (tb[4] + y - 1) + "|" + color + ",";
                    temp = temp + (tb[4] + x - i - 1) + "|" + (tb[4] + y - 1) + "|" + color + ",";
                }
                temp = temp + temp2 + "0|0|" + color;
                arr1 = temp.split(",");
                var arr2 = new Array();
                for (var i = 0; i < arr1.length - 1; i++) {
                    arr2[i] = new Array();
                    temp3 = arr1[i].split("|");
                    arr2[i] = [Number(temp3[0]), Number(temp3[1]), temp3[2]];
                }
                try {
                    p = images.findMultiColors(img, color, arr2, {
                        region: [tb[0], tb[1], tb[2] - tb[0], tb[3] - tb[1]],
                        threshold: (Math.floor(k / 10) * 16 + k % 10)
                    });
                    if (p) {
                        img.recycle();
                        return p.x
                    }
                } catch (error) {
                    console.log("识别失败，错误原因：" + error);
                    return -1;
                }
                y = --y;
            }
            x = --x;
        }
    }
    try {
        img.recycle();
    } catch (error) {
        console.log("识别失败，错误原因：" + error);
    }
    return -1;
}
function block() {
    var y = 1371, t = 130 //block内容
    auto.waitFor()
    while (true) {
        img = images.captureScreen(); 
        if (img) {
            log("截图成功。进行识别滑块！");
            break;
        } else {
            log('截图失败,重新截图');
        }
    }
    var x = discernSlidingblock(img, 1) 
log(x)
    if (x > -1) {
        randomSwipe1(190, y, x+10, y)
        sleep(3000)
    } else {
        console.log("识别有误，请确认是否在滑块界面");
    }
}
function randomSwipe1(sx,sy,ex,ey){
    //设置随机滑动时长范围
    var timeMin=1000
    var timeMax=3000
    //设置控制点极限距离
    var leaveHeightLength=500
    
    //根据偏差距离，应用不同的随机方式
    if(Math.abs(ex-sx)>Math.abs(ey-sy)){
        var my=(sy+ey)/2
        var y2=my+random(0,leaveHeightLength)
        var y3=my-random(0,leaveHeightLength)
    
        var lx=(sx-ex)/3
        if(lx<0){lx=-lx}
        var x2=sx+lx/2+random(0,lx)
        var x3=sx+lx+lx/2+random(0,lx)
    }else{
        var mx=(sx+ex)/2
        var y2=mx+random(0,leaveHeightLength)
        var y3=mx-random(0,leaveHeightLength)

        var ly=(sy-ey)/3
        if(ly<0){ly=-ly}
        var y2=sy+ly/2+random(0,ly)
        var y3=sy+ly+ly/2+random(0,ly)
    }

    //获取运行轨迹，及参数
    var time=[0,random(timeMin,timeMax)]
    var track=bezierCreate(sx,sy,x2,y2,x3,y3,ex,ey)
    
    log("随机控制点A坐标："+x2+","+y2)
    log("随机控制点B坐标："+x3+","+y3)
    log("随机滑动时长："+time[1])
    
    //滑动
    gestures(time.concat(track))
}

// phone_num = "16519037368"

// mm= "dntkblmm"


// A16()



run()

