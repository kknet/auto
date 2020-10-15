
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
        //xgsrizhi(defaultSetting)
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
        sleep(1001)
        xgsrizhi(error);
        return 1
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
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
			return false
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                xgsrizhi("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                return true
            }else{
                back()
                sleep(500)
                home()
                sleep(2000)
                recents()
                sleep(3000)
            }
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
	}
}

//日期
function riqis(nn){
    var tem = nn
	Date.prototype.format = function(fmt){
		var year = this.getFullYear();
		var month = this.getMonth()+1;
		var date = this.getDate();
		var hour = this.getHours();
		var minute = this.getMinutes();
		var second = this.getSeconds();
		fmt = fmt.replace("yyyy",year);
		fmt = fmt.replace("yy",year%100);
		fmt = fmt.replace("MM",fix(month));
		fmt = fmt.replace("dd",fix(this.getDate()));
		fmt = fmt.replace("hh",fix(this.getHours()));
		fmt = fmt.replace("mm",fix(this.getMinutes()));
		fmt = fmt.replace("ss",fix(this.getSeconds()));
		return fmt;
		function fix(n){
		return n<10?"0"+n:n;
		}
	}
	var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    var time = new Date().format("dd")
    if (tem == 1){
        return time
    }else{
        return times
    }
}

//写日志
function xgsrizhi(g){
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
    if(text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()){
        log("登录x1")
        try{
            if (text("登录").exists()){
                var ss = text("登录").findOnce().bounds();
                log(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        }catch(error) {
            sleep(1001)
            log(error);
        }
        click("登录")
        sleep(2000)
    }
}

function dowmp3(){
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - TTR > 3*60*1000){
                xgsrizhi("超时退出")
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

//存取数据
function cunqusj(name, str){
    if(text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()){
        xgsrizhi("登录x2")
        try{
            if (text("登录").exists()){
                var ss = text("登录").findOnce().bounds();
                xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        }catch(error) {
            sleep(1001)
            xgsrizhi(error);
        }
        click("登录")
        sleep(2000)
    }
    if (str == "tingzhi"){
        var bb = (new Date()).getTime()
        if (files.exists("/sdcard/mbtztime.txt")){
            xgsrizhi("文件存在")
            var cun = files.read("/sdcard/mbtztime.txt")
            if (bb - Number(cun) > 100*1000){
                xgsrizhi("我是bb的值："+ bb)
                xgsrizhi("我是cun的值："+ cun)
                toastLog("墓碑已经运行了")
                dkmubei()
            }
            xgsrizhi(bb - Number(cun))
        }
        files.write("/sdcard/jiaoben.txt", str)
    }else{
        var bb = (new Date()).getTime()
        files.write("/sdcard/jiaoben.txt", bb);
    }
    var storage = storages.create("lun");
    if (str == "qu"){
        log("取出来的数据：" + storage.get(name));
        if (storage.get(name) == undefined){
            return -1
        }
        else{
            return storage.get(name)
        }
    }else{
        storage.put(name, str);
        // if (str == "tingzhi"){
            // java.lang.System.exit(0);
        // }
    }
}

function getInsideString(str, strStart, strEnd ) {
	if ( str.indexOf(strStart) < 0 ){
		return "";
	}
	if ( str.indexOf(strEnd) < 0 ){
		return "";
	}
	return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}
//找色
function zhaose(kk, aa){
    var ss = aa.split(" and ")
    // var imgss = captureScreen()
    var imgss = kk
    for (var k in ss){
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", "," )
        var yy = getInsideString(ss[k], ",", ",0" )
        var ys = getInsideString(ss[k], "0x", ",80)" )
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#"+ys, xx, yy)) {

        }else{
            imgss.recycle()
            return 0
        }
    }
    imgss.recycle()
    return 1
}

//开启墓碑无障碍
function kqwza(aa){
    xgsrizhi("开启无障碍")
    var cc = (new Date()).getTime()
    var tem = 1
    while(1){
        try {
            if ((new Date()).getTime() - cc > 60*1000){
                xgsrizhi("超时退出")
                break
            }
            if(text("无障碍").exists() && text(aa).exists()  && tem != 2){
                log("点击"+aa)
                click(aa)
                sleep(2000)
            }
            if(text("立即开始").exists() && text("取消").exists() ){
                log("立即开始")
                click(300, 1800)
                sleep(1000)
                if (id("com.android.systemui:id/remember").exists()){
                    var aa = id("com.android.systemui:id/remember").findOnce().checked();
                    if (aa == false){
                        var bb = id("com.android.systemui:id/remember").findOnce().bounds();
                        xgsrizhi(bb.centerX())
                        xgsrizhi(bb.centerY())
                        click(bb.centerX(), bb.centerY())
                        sleep(1000)
                    }
                }
                click(800, 1920)
                sleep(1000)
                click("立即开始")
                sleep(2000)
            }
            if(text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists() || text("关闭").exists() && text(aa).exists() && id("com.android.settings:id/switch_text").exists()){
                xgsrizhi("开关界面")
                if (text(aa).exists()){
                    var a = id("com.android.settings:id/switch_widget").findOnce()
                    if(a != null){
                        log(2222)
                        if (id("com.android.settings:id/switch_widget").findOnce().checked() == true && tem == 2){
                            xgsrizhi("退出")
                            break
                        }else{
                            xgsrizhi("点击开启")
                            a.click()                   //原来开着就先关了，原来关着就直接打开退出
                            sleep(2000)
                            click(800, 1920)
                            sleep(7000)
                            tem = 2
                        }
                    }else{
                        log(1111)
                        if (text("关闭").exists()){
                            log("开启无障碍")
                            click(500, 300)
                            sleep(500)
                            click("关闭")
                            sleep(2000)
                            click(800, 1920)
                            sleep(8000)
                            tem = 2
                        }
                    }
                }else{
                    back()
                    sleep(2000)
                }
            }
            if(text("确定").exists()){
                log("确定")
                click(800, 1920)
                sleep(1000)
                click("确定")
                sleep(2000)
            }
            if(text("夜间升级").exists()){
                log("夜间升级")
                click(300, 1920)
                sleep(1000)
                click("夜间升级")
                sleep(2000)
            }
        }catch(error) {
            log(error);
            sleep(random(3000,5000))
        }
    }
}

//打开墓碑
function dkmubei(){
    xgsrizhi("运行墓碑")
    var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
    var sbxx_table = sbxx.split("-")
    var sbip = sbxx_table[3]        //服务器ip
    var yhname = sbxx_table[1]    //服务器用户名
    var yhbh = sbxx_table[2]      //手机编号  weixinflag
    var cc = (new Date()).getTime()
    var bb = (new Date()).getTime()
    qinglihh()
    sleep(1000)
    killapp("墓碑")
    sleep(2000)
    launch("com.mubei.nn")
    sleep(2000)
    files.write("/sdcard/mbtztime.txt", "123")
    var tem = 0
    while(1){
        if ((new Date()).getTime() - cc > 4*60*1000){
            xgsrizhi("超时没运行成功")
            qinglihh()
            killapp("墓碑")
            sleep(2000)
            launch("com.mubei.nn")
            sleep(2000)
            tem = 0
            cc = (new Date()).getTime()
        }else{
            if ((new Date()).getTime() - bb > 10*1000){
                bb = (new Date()).getTime()
                var cun = files.read("/sdcard/mbtztime.txt")
                log("我是BB"+ bb)
                xgsrizhi("我是存的时间"+ cun)
                if (bb - Number(cun) < 120*1000){
                    toastLog("墓碑已经运行了")
                    return true
                }
            }
        }
        if(text("输入测试项目名").exists() && text("确定").exists()){
            xgsrizhi("输入测试项目名")
            sleep(1000)
            if (id("android:id/input").exists()){
                try {    // xmundefined123
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是项目名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined"){
                        log("项目名称错误")
                        setText("meitus")
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                }catch(error){
                    log(error);
                    sleep(2000)
                }
            }
        }
        if(text("请输入用户名").exists() && text("确定").exists()){
            xgsrizhi("请输入用户名")
            sleep(1000)
            if (id("android:id/input").exists()){
                try {    // xmundefined123
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是用户名称" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined"){
                        log("用户名称错误")
                        setText(yhname)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch(error){
                    log(error);
                    sleep(2000)
                }
            }
        }
        if(text("请输入设备编号").exists() && text("确定").exists()){
            xgsrizhi("请输入设备编号")
            sleep(1000)
            if (id("android:id/input").exists()){
                try {
                    var xm = id("android:id/input").findOnce().text()
                    xgsrizhi("我是编号" + xm)
                    if (xm == "null" || xm == undefined || xm == "" || xm == "undefined"){
                        log("手机编号错误")
                        setText(yhbh)
                        sleep(1000)
                    }
                    click("确定")
                    sleep(2000)
                } catch(error){
                    log(error);
                    sleep(2000)
                }
            }
        }
        if(text("无障碍").exists() && text("墓碑").exists() || text("使脚本自动操作(点击、长按、滑动等)所需，若关闭则只能执行不涉及自动操作的脚本。").exists() || text("关闭").exists() && text(aa).exists() && id("com.android.settings:id/switch_text").exists()){
            xgsrizhi("墓碑开启无障碍")
            if (tem == 0){
                xgsrizhi("去开启无障碍")
                kqwza("墓碑")
                back()
                sleep(2000)
                launch("com.mubei.nn")
                sleep(3000)
                tem = 1
            }
        }
        if(desc("更多选项").exists() && text("墓碑").exists()){
            log("打开了墓碑界面")
            if (tem == 1){
                xgsrizhi("已经开启无障碍了")
                back()
                sleep(500)
                back()
                sleep(2000)
                launch("com.mubei.nn")
                sleep(4000)
                tem = 2
            }
        }
        sleep(500)
    }
}

//*******************************************************对接服务器****************************** */

//激活心跳
function xjihuoxt(sbip, yhname, yhbh){
    xgsrizhi("激活心跳")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 15*1000){
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/jihuo/usr/"+yhname+"/shebeihao/"+yhbh
            var url = "http://"+sbip+"/deer/public/index.php/api/myapi/jihuo?user="+yhname+"&shebeihao="+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                toastLog("激活成功")
                return true
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("激活中...")
        sleep(random(100, 10000))
    }
}

//启动时间
function qdtime(sbip, yhname, yhbh){
    xgsrizhi("启动时间")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 30*1000){
                xgsrizhi("超时退出")
                return false
            }
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/jihuo?user="+yhname+"&shebeihao="+yhbh
            var url = "http://"+sbip+"/deer/public/index.php/api/myapi/qidongjiaoben?user="+yhname+"&shebeihao="+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                toastLog("激活成功")
                return true
            }
            else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("上传启动时间中...")
        sleep(random(100, 10000))
    }
}

//获取任务 aa是当前项目编号
function huoqurenwu(sbip, yhname, yhbh, aa){
    xgsrizhi("获取任务")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){ 
        try {
            
            if ((new Date()).getTime() - ttr > 15* 1000){
                log("超时没获取到该账号的任务--继续执行当前任务")
                return true 
            }
            try{
                if(text("等待").exists() && text("关闭应用").exists()){
                    xgsrizhi("关闭应用")
                    click("关闭应用")
                    sleep(2000)
                }
                if(text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()){
                    xgsrizhi("登录x")
                    if (text("登录").exists()){
                        var ss = text("登录").findOnce().bounds();
                        xgsrizhi(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }
                    click("登录")
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                xgsrizhi(error);
            }
            // var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/getrenwunew/usr/"+yhname+"/shebeihao/"+yhbh
            var url = "http://"+sbip+"/deer/public/index.php/api/myapi/getrenwu?user="+yhname+"&shebeihao="+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                // var body =  r.body.string()
                // var r_obj = JSON.parse(body);
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0){
                    xgsrizhi(r_obj)
                    var renwu = r_obj["data"]
                    xgsrizhi(renwu)
                    for(var i =0 ; i < renwu.length; i++){
                        if (renwu[i] == aa ){
                            xgsrizhi("继续当前任务" +aa)
                            return true
                        }else{
                            if (renwu[i] == "100" ){
                                log("结束脚本")
                                return false
                            }
                        }
                    }
                    return false
                }else{
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 5000))
    }
}

//获取分支任务 xm是项目名称
function huoqufzrw(sbip, yhname, yhbh, xm){
    xgsrizhi("获取分支任务")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){ 
        try {
            if ((new Date()).getTime() - ttr > 3*60* 1000){
                log("超时没获取到该任务的分支任务")
                return false 
            }
            // var url = " http://47.99.89.89/deer/public/index.php/api/myapi/getonefield?ziduan=renwu&xiangmu=weixin&user=cbs&shebeihao=3 "
            var url = "http://"+sbip+"/deer/public/index.php/api/myapi/getonefield?ziduan=renwu&xiangmu="+xm+"&user="+yhname+"&shebeihao="+yhbh
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0){
                    xgsrizhi(r_obj)
                    var renwu = r_obj["data"]
                    xgsrizhi(renwu)
                    return renwu
                }else{
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error){
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 5000))
    }
}

//上传金额
function upjine(sbip, yhname, yhbh, xm, jine){
    xgsrizhi("上传金额")
    var ttr = (new Date()).getTime()
    xgsrizhi(sbip + "----" + yhname + "----" + yhbh)
    while (1){ 
        try {
            if ((new Date()).getTime() - ttr > 30* 1000){
                log("超时没上传金额成功")
                return false 
            }
            // var url = "http://"+sbip+"/deer/public/index.php/api/myapi/getonefield?ziduan=renwu&xiangmu="+xm+"&user="+yhname+"&shebeihao="+yhbh
            var url = "http://"+sbip+"/deer/public/index.php/api/myapi/gxjine?xiangmu="+xm+"&user="+yhname+"&shebeihao="+yhbh+"&val="+ jine
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0){
                    xgsrizhi("上传金额成功" + r_obj)
                    toastLog("上传金额成功")
                    return true
                }else{
                    toastLog("上传金额成功失败")
                    sleep(3000)
                }
            }else{
                xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error){
            xgsrizhi(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 5000))
    }
}

//********************************************************对接小号平台*************************** */

//登录小号平台
function dengluxhpt(name, passw){  
    var TS = (new Date()).getTime()   //账号密码a123   +  123
	var url = "http://diandianguaji.xyz/login?username="+name+"&password="+ passw;	
	log("登录小号平台")	
	while(true){ 
        try{
            if ((new Date()).getTime() - TS > 5*60*1000){
                log("超时没获取到token退出")
                return false
            }   
            res = http.get(url); 
            if(res.statusCode == 200){
                var ss = res.body.json();
                // ss = res.body.string()
                // log(ss)
                // var ss = ss.split("|")
                // log(ss[0])
                if (ss["msg"]=="登录成功"){
                    log("获取到token："+ss["token"])
                    return ss["token"]
                }else{
                    log("登录失败")				
                    toast("登录失败")
                    sleep(4000);
                }
            }
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}

//获取小号平台号码
function getxhhaoma(id, token){  
    var TS = (new Date()).getTime()
	var url = "http://diandianguaji.xyz/getMobile?itemId="+id+"&num=1&token="+token;	
	log("获取小号平台号码")	
	while(true){   	
        try{
            if ((new Date()).getTime() - TS > 5*60*1000){
                log("超时没获取到号码退出")
                return false
            }   
            res = http.get(url); 
            if(res.statusCode == 200){
                var ss = res.body.json();
                // ss = res.body.string()
                // log(ss)
                // var ss = ss.split("|")
                // log(ss[0])
                if (ss["msg"]=="获取成功"){
                    log("获取到号码："+ss["mobile"]["0"])
                    return ss["mobile"]["0"]
                }else{
                    log("获取号码失败")				
                    toast("获取号码失败")
                    sleep(4000);
                }
            }
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
    }
}

//获取小号平台验证码
function getxhyzm(id, haoma, token){  
    var TS = (new Date()).getTime()
    var url = "http://diandianguaji.xyz/getMsg?itemId="+id+"&mobile="+haoma+"&token="+token;
	log("获取小号平台验证码")	
	while(true){  	
		try{
            if ((new Date()).getTime() - TS > 60*1000){
                log("超时没获取到验证码退出")
                return false
            }   
			res = http.get(url); 
            if(res.statusCode == 200){
                var ss = res.body.json();
                if (ss["msg"].length > 10){
                    log("获取到验证码："+ss["msg"])
                    return ss["msg"]
                }else{
                    log("获取验证码失败")				
                    toast("获取验证码失败")
                    sleep(4000);
                }
            }
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}

//释放小号平台号码
function shifangxhpt(id, haoma, token){  
    var TS = (new Date()).getTime()
    var url = "http://diandianguaji.xyz/release?itemId="+id+"&mobile="+haoma+"&token="+token;
	log("释放小号平台号码")	
	while(true){  	
		try{
            if ((new Date()).getTime() - TS > 15*1000){
                log("超时释放失败")
                return false
            }   
			res = http.get(url); 
            if(res.statusCode == 200){
                var ss = res.body.json();
                log(ss)
                if (ss["msg"] == "释放成功"){
                    log("释放号码成功")
                    return true
                }else{
                    log("释放号码失败")				
                    toast("释放号码失败")
                    sleep(4000);
                }
            }
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}

//拉黑小号平台号码
function laheixhpt(id, haoma, token){  
    var TS = (new Date()).getTime()
    var url = "http://diandianguaji.xyz/addBlack?itemId="+id+"&mobile="+haoma+"&token="+token;
	log("拉黑小号平台号码")	
	while(true){  	
		try{
            if ((new Date()).getTime() - TS > 15*1000){
                log("超时拉黑失败")
                return false
            }   
			res = http.get(url); 
            if(res.statusCode == 200){
                var ss = res.body.json();
                log(ss)
                if (ss["msg"] == "拉黑成功"){
                    log("拉黑号码成功")
                    return true
                }else{
                    log("拉黑失败")				
                    toast("拉黑失败")
                    sleep(4000);
                }
            }
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}

//*******************************************************对接小蜜蜂平台******************************************************** */

// 登录小蜜蜂平台
function xmfdenglu(){  
    var TS = (new Date()).getTime()
	var url = "http://118.107.42.60/yhapi.ashx?act=login&ApiName=xiaotan24&PassWord=xiaotan";	
	log("登录小蜜蜂平台")	
	while(true){   	
        try{
            if ((new Date()).getTime() - TS > 5*60*1000){
                log("超时没获取到token退出")
                return false
            }   
            res = http.get(url); 
            if(res.statusCode == 200){
                ss = res.body.string()
                var ss = ss.split("|")
                log(ss[0])
                if (ss[0]=="1"){
                    log("获取到token："+ss[1])
                    return ss[1]
                }else{
                    log("登录失败")				
                    toast("登录失败")
                    sleep(4000);
                }
            }else{
                toastLog("没网")
                sleep(3000)
            }
            toastLog("登录小蜜蜂平台")
            sleep(3000)
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
    }
}

// 获取小蜜蜂号码
function xmfhaoma(id, token){
    log("获取小蜜蜂手机号")
    var TS = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - TS > 5*60*1000){
                log("超时没获取到号码退出")
                return false
            }   
            var r = http.get("http://118.107.42.60/yhapi.ashx?act=getPhone&token="+token+"&iid="+id+"&did=&operator=&provi=&city=&seq=0&mobile=");
            if( r.statusCode == 200){
                var ss =  r.body.string() //1|100316533902297|2020-04-09T01:41:57|COM3|16533902297|朗玛信息|吉林松原
                var ss = ss.split("|")
                log(ss)
                if (ss[0]=="1"){
                    log("获取到的手机号码"+ ss[4])
                    log("获取到的pid" + ss[1])
                    return [ss[1], ss[4]]
                }else{
                    log("获取号码失败")				
                    toast("获取号码失败")
                    sleep(4000);
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
            toastLog("获取小蜜蜂手机号")
            sleep(3000)
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

// 获取小蜜蜂验证码
function xmfyzm(pid, token){
    log("获取小蜜蜂验证码")
    var TS = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - TS > 60*1000){
                log("超时没获取到验证码退出")
                return false
            }   
            var r = http.get("http://118.107.42.60/yhapi.ashx?act=getPhoneCode&token="+token+"&pid="+pid);
            if( r.statusCode == 200){
                var ss =  r.body.string()   //1|验证码数字|完整短信内容
                log(ss);
                var ss = ss.split("|")
                if (ss[0]=="1"){
                    log("获取到验证码："+ss[1])
                    return ss[1]
                }else{
                    log("获取验证码失败")				
                    toast("获取验证码失败")
                    sleep(4000);
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
            toastLog("获取小蜜蜂验证码中...")
            sleep(3000)
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

// 释放小蜜蜂号码
function shifangxmf(pid, token){
    log("释放小蜜蜂号码")
    var TS = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - TS > 20*1000){
                log("超时释放失败")
                return false
            } 
            var r = http.get("http://118.107.42.60/yhapi.ashx?act=setRel&token="+token+"&pid="+pid);
            if( r.statusCode == 200){
                var ss =  r.body.string()   
                var ss = ss.split("|")
                if (ss[0]=="1"){
                    toastLog("释放成功")
                    return true
                }else{
                    log("获取验证码失败")				
                    toast("获取验证码失败")
                    sleep(4000);
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
            toastLog("释放小蜜蜂号码")
            sleep(3000)
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

// 拉黑小蜜蜂号码
function lhxmf(pid, token, aa){
    log("拉黑小蜜蜂号码")
    var TS = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - TS > 15*1000){
                log("超时拉黑失败退出退出")
                return false
            } 
            var r = http.get("http://118.107.42.60/yhapi.ashx?act=addBlack&token="+token+"&pid="+pid+"&reason="+aa);
            if( r.statusCode == 200){
                var ss =  r.body.string()   //1|验证码数字|完整短信内容
                var ss = ss.split("|")
                if (ss[0]=="1"){
                    toastLog("拉黑成功")
                    return true
                }else{
                    log("获取验证码失败")				
                    toast("获取验证码失败")
                    sleep(4000);
                }
            }
            else{
                toastLog("没网")
                sleep(3000)
            }
            toastLog("拉黑小蜜蜂号码")
            sleep(3000)
        } catch(error) {
            print(error);
            sleep(3000)
        }
    }
}

//*******************************************************对接小蜜蜂平台******************************************************** */

function killapp(app){
    openAppSetting(getPackageName(app));
    sleep(2000)
    var tt = 0
    while (true) {
        tt++;
        if (tt > 7){
            break
        }
        if(text("FORCE STOP").exists() || text("强行停止").exists() ){
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
            click("OK")
            click("确定")
            sleep(2000)
            
            break
        }
        sleep(1000)
    } 
    back()
}

function funcFingIdClick(idd){                                     //发现ID并点击
    try{
        var a = id(idd).findOnce()
        if(a != null){
            if (id(idd).findOnce().checked() == false){
                a.click()
                return true
            }
        }
    }catch (e) 
    {
        log(e)			
    }
    return false
}

function getInsideString(str, strStart, strEnd ) {
	if ( str.indexOf(strStart) < 0 ){
		return "";
	}
	if ( str.indexOf(strEnd) < 0 ){
		return "";
	}
	return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}

function ostime(){
    return Date.parse(new Date())/1000;
}

//下载应用
function xzm(aa){
    //文件更新地址
    // var url = "https://meitus.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
    var url = aa
    // threads.start(function() {

        //发送get获取文件
    var data = http.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
        }
    }).body.bytes();
    files.writeBytes("/sdcard/xgs.apk", data);
    toast("更新成功,文件保存在/sdcard/zip签名.apk");
    //安装更新后的软件
    path = '/sdcard/xgs.apk'
    app.startActivity({
        data: "file://" + path,
        type: "application/vnd.android.package-archive",
        action: "VIEW",
        flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
    })
    // storage.clear();
    // });
}

//安装应用
function anz(lujing){
    log("安装")
    xzm(lujing)
    var TT = (new Date()).getTime() - 100*1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - BB > 5*60*1000){
            log("超时退出")
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60*1000){
            log("超时清理一次换存")
            qinglihh()
            ts = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 20*1000){
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            TT = (new Date()).getTime()
        }
        if (text("设置").exists() && text("取消").exists() ){
            log("设置")   
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists() ){
            log("安装")   
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists() ){
            log("已经安装成功")  
            click("完成") 
            return true
        }

        if (id("android:id/switch_widget").exists() && desc("向上导航").exists() ){
            log("添加安装权限")   
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false){
                var aa = id("android:id/switch_widget").findOnce().bounds();
                log(aa.centerX())
                log(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100*1000
                qinglihh()
            }
            back()
            sleep(2000)
        }
    }
}

//查看应用版本
function getVerName(name){
    try{
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name){
                return pkgs[i].versionName;
            }
        }
        return false
    }catch (e){
        log("出错"+ e)			
        sleep(3000);
        return false
    }
}

//豌豆荚下载应用
function wdjxiazai(name, banebn){
    log("豌豆荚下载应用"+ name)   //豌豆荚
    var waddj = getPackageName("豌豆荚")
    if (waddj == null){
        var lujing  = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/wandoujia.apk"
        log("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(5000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    while(1){
        if(text("完成").exists() && text("打开").exists()){
            log("完成")
            click("完成")
            back()
            sleep(500)
            back()
            sleep(1000)
            return true
        }
        var bmname = getPackageName(name)
        if (bmname != null){
            toastLog("已经安装了该应用："+bmname)
            sleep(2000)
            toastLog("版本号："+ getVerName(name))
            back()
            sleep(500)
            home()
            sleep(1000)
            return true
        }

        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            qinglihh("com.wandoujia.phoenix2")
            return false
        }
        if ((new Date()).getTime() - TSD > 6*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.wandoujia.phoenix2")
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if(text("跳过").exists()){
            log("跳过")
            click("跳过")
            sleep(2000)
        }
        if(text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()){
            log("首页点搜索")
            click(860, 160)
            sleep(2000)
        }
        if(id("com.wandoujia.phoenix2:id/a08").exists() && id("com.wandoujia.phoenix2:id/hl").exists() || id("com.wandoujia.phoenix2:id/c4").exists() && id("com.wandoujia.phoenix2:id/a7h").exists()){
            log("搜索界面输入")
            setText(name)
            sleep(1000)
            click(1000, 160)
            sleep(2000)
        }

        if(text("立即安装").exists() && text("取消").exists()){
            log("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if(text("提示").exists() && text("确定").exists() && text("取消").exists()){
            log("提示")
            click("确定")
            sleep(2000)
        }

        if(text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists() ){
            log("搜索结果页面")
            sleep(1000)
            if (id("com.wandoujia.phoenix2:id/f0").exists()){
                log("看到搜索结果")
                click(500, 360)
                sleep(4000)
            }else{
                log("没有搜索结果")
                setText(name)
                sleep(1000)
                click(1000, 160)
                sleep(4000)
            }
        }

        if(text("评价").exists() && id("com.wandoujia.phoenix2:id/b11").exists() || text("评价").exists() && id("com.wandoujia.phoenix2:id/zz").exists() || text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/ej").exists() ){
            log("搜索结果页面")
            if(text("历史版本").exists() && text("系统权限").exists()){
                log("看到历史版本")
                // click("看到历史版本")
                // sleep(4000)
                var ss = text("历史版本").findOnce().bounds();
                log(ss.centerX())
                log(ss.centerY())
                if (ss.centerY() < 1880){
                    click(ss.centerX(), ss.centerY());
                    sleep(3000)
                }else{
                    log("下滑2")
                    swipe(557,1600, 533,400, random(400, 1000))
                    sleep(1000)
                }
            }else{
                log("下滑")
                swipe(557,1600, 533,400, random(400, 1000))
                sleep(1000)
            }
        }

        if(text("历史版本").exists() && id("com.wandoujia.phoenix2:id/ano").exists() || id("com.wandoujia.phoenix2:id/g4").exists() && id("com.wandoujia.phoenix2:id/hr").exists() || text("历史版本").exists() && id("com.wandoujia.phoenix2:id/hr").exists()){
            log("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()){
                try{
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称："+cc)
                    if (cc.indexOf(name) != -1 ){
                        var ss = getAllTexts()
                        log(ss)
                        var cd = 0
                        for(j = 0,len=ss.length; j < len; j++){
                            log("获取的值："+ ss[j])
                            if (ss[j].indexOf(banebn) != -1){
                                log("找到该版本了"+ ss[j])
                                cd = 1
                                var bb = text(ss[j]).findOnce().bounds();
                                log(bb.centerX())
                                log(bb.centerY())
                                if (bb.centerY() < 2030){
                                    click(920, bb.centerY()-53); 
                                    sleep(10000)
                                }else{
                                    log("微调")
                                    swipe(557,1500, 533,800, random(400, 1000))
                                    sleep(1000)
                                }
                            }
                        }
                        if (cd == 0 ){
                            log("没找到该版本")
                            swipe(557,1600, 533,500, random(400, 1000))
                            sleep(1000)
                        }
                        sleep(1500)
                    }else{
                        log("搜到的不是该应用")
                        back()
                        sleep(2000)
                        back()
                        sleep(3000)
                        back()
                        sleep(3000)
                    }
                }catch(error) {
                    sleep(1001)
                    log(error);
                }
            }else{
                if (id("com.wandoujia.phoenix2:id/ano").exists()){
                    try{
                        var cc = id("com.wandoujia.phoenix2:id/ano").findOnce().text()
                        log("应用名称2："+cc)
                        if (cc.indexOf(name) != -1 ){
                            var ss = getAllTexts()
                            log(ss)
                            var cd = 0
                            for(j = 0,len=ss.length; j < len; j++){
                                log("获取的值2："+ ss[j])
                                if (ss[j].indexOf(banebn) != -1){
                                    log("找到该版本了2"+ ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030){
                                        click(920, bb.centerY()-53); 
                                        sleep(10000)
                                    }else{
                                        log("微调2")
                                        swipe(557,1500, 533,800, random(400, 1000))
                                        sleep(1000)
                                    }
                                }
                            }
                            if (cd == 0 ){
                                log("没找到该版本2")
                                swipe(557,1600, 533,500, random(400, 1000))
                                sleep(1000)
                            }
                            sleep(1500)
                        }else{
                            log("搜到的不是该应用2")
                            back()
                            sleep(2000)
                            back()
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    }catch(error) {
                        sleep(1001)
                        log(error);
                    }
                }
            }
        }
        
        if(text("设置").exists() && text("取消").exists()){
            log("设置")
            click("设置")
            sleep(2000)
        }
        if(text("点击继续").exists() && text("稍后下载").exists()){
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if(text("选好了，安装").exists()){
            log("选好了，安装")
            click(80, 160)
            sleep(2000)
        }
        if(id("com.wandoujia.phoenix2:id/a7s").exists()){
            log("选好了，安装2")
            var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
            log(bb.centerX())
            log(bb.centerY())
            click(bb.centerX(), bb.centerY()); 
            sleep(2000)
        }
        if(text("继续安装").exists() && text("取消").exists()){
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if(text("下一步").exists() && text("取消").exists()){
            log("下一步")
            click("下一步")
            sleep(2000)
        }
        if(text("安装未知应用").exists() && id("android:id/switch_widget").exists()){
            log("安装未知应用")
            try{
                var ss = id("android:id/switch_widget").findOnce().checked();
                if (ss == false){
                    var css = id("android:id/switch_widget").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                    back()
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                log(error);
            }
        }
        if(text("安装").exists() && text("取消").exists()){
            log("安装")
            click("安装")
            sleep(15000)
        }
        if(text("更新").exists() && text("取消").exists()){
            log("更新")
            click("取消")
            sleep(1000)
        }
    }
}

//获取服务器号码
function getfwq(ips, user , biaohao){  
    var TS = (new Date()).getTime()   //47.99.89.89
    var url = "http://"+ips+"/deer/public/index.php/admin/myapi/getzh_shebei?tbflag=douyin&user="+user+"&shebeihao=" + biaohao
	log("获取服务器号码")	
	while(true){ 
        try{
            if ((new Date()).getTime() - TS > 5*60*1000){
                log("超时没获取到号码退出")
                return false
            }   
            res = http.get(url);
            log(url) 
            if(res.statusCode == 200){
                var ss = res.body.json();
                // ss = res.body.string()
                // log(ss)
                // var ss = ss.split("|")
                // log(ss[0])
                if (ss["msg"]=="ok"){
                    log(ss)
                    log("获取到的值："+ss["data"])
                    log("我是键值："+ ss["data"].hasOwnProperty("douyin"))
                    if (ss["data"].hasOwnProperty("douyin") == true){
                        var hm = ss["data"]["douyin"]
                        log("获取到服务器号码：" + hm)
                        if (hm.length > 10){
                            return hm
                        }else{
                            log("获取到的不是号码")
                            return false
                        }
                    }else{
                        log("服务器没有号码")
                        return false
                    }
                }else{
                    log("获取号码失败")				
                    toast("获取号码失败")
                    sleep(4000);
                }
            }else{
                log("没网")				
                toast("没网")
                sleep(4000);
            }
            sleep(2000)
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}

//上传服务器号码
function upfwqhm(ips, user , biaohao, zh){
    var TS = (new Date()).getTime()   //47.99.89.89
    var url = "http://"+ips+"/deer/public/index.php/admin/myapi/addzh_shebei?tbflag=douyin&user="+user+"&shebeihao="+biaohao+"&zhanghao="+ zh
	log("上传服务器")	
	while(true){ 
        try{
            if ((new Date()).getTime() - TS > 2*60*1000){
                log("超时没上传号码退出")
                return false
            }   
            res = http.get(url);
            log(url) 
            if(res.statusCode == 200){
                var ss = res.body.json();
                log(ss)
                if (ss["msg"]=="更新账号成功" || ss["msg"]=="添加账号成功"){
                    log("上传账号成功："+ zh)
                    return true
                }else{
                    if (ss["msg"]=="该账号已经存在了"){
                        log(ss)
                        log("该账号已经存在了："+ zh)
                        return true
                    }else{
                        log("上传失败")				
                        toast("上传失败")
                        sleep(4000);
                    }
                }
            }else{
                log("没网")				
                toast("没网")
                sleep(4000);
            }
            sleep(4000)
        }catch (e){
            log("出错"+ e)			
            sleep(3000);
        }
	}
}


module.exports = {
    'dowmp3':dowmp3,                                //下载MP3
    'xgsrizhi': xgsrizhi,                           //写本地日志
    'riqis':riqis,                                  //获取当前日期
    'qinglihh':qinglihh,                            //清理后台
    'getAllTexts':getAllTexts,                      //获取页面所有文字
    'xieru':xieru,                                  //写入文档
    'cunqusj':cunqusj,                              //记录停止脚本
    //小号平台
    'dengluxhpt':dengluxhpt,                        //获取token    
    'getxhhaoma':getxhhaoma,                        //获取手机号    
    'getxhyzm':getxhyzm,                            //获取验证码
    'shifangxhpt':shifangxhpt,                      //释放小号平台
    'laheixhpt':laheixhpt,                          //拉黑小号平台
    //小号平台
    'killapp':killapp,                              //强制停止APP    
    'funcFingIdClick':funcFingIdClick,              //找到ID并点击
    'getInsideString':getInsideString,              //切割字符串，取中间部分 
    'ostime':ostime,                                //返回当前时间戳秒
    'anz':anz,                                      //安装指定URL中的应用
    'getVerName':getVerName,                        //查看应用版本
    'wdjxiazai':wdjxiazai,                          //豌豆荚下载安装指定版本应用
    'getfwq':getfwq,                                //获取服务器上的号码
    'upfwqhm':upfwqhm,                              //上传号码
    'zhaose':zhaose,                                //找色
    //新服务器
    'xjihuoxt':xjihuoxt,                            //服务器心跳
    'qdtime':qdtime,                                //脚本启动时间
    'huoqurenwu':huoqurenwu,                        //判断是否存在该项目
    'huoqufzrw':huoqufzrw,                          //获取项目的分支项目
    'upjine':upjine,                                 //上传金额
    //新服务器
    //对接小蜜蜂平台
    'xmfdenglu':xmfdenglu,                           //登录小蜜蜂
    'xmfhaoma':xmfhaoma,                             //获取小蜜蜂号码
    'xmfyzm':xmfyzm,                                 //获取小蜜蜂验证码
    'shifangxmf':shifangxmf,                         //释放小蜜蜂号码
    'lhxmf':lhxmf,                                   //拉黑小蜜蜂号码
    //对接小蜜蜂平台  
}






