if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}






//********************************************************下载播放mp3***************************************************************

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

function bofangyy(){
    _THREADSS = threads.start(function (){
        log("去播放音乐")
        if( files.exists("/sdcard/观沧海.mp3") == false){
            log("没有音乐文件去下载")
            dowmp3()
            sleep(5000)
        }
        while(1){
            media.playMusic("/sdcard/观沧海.mp3",80);
            sleep(media.getMusicDuration());
            log("我还在播放音乐")
        }
    });
}


//*****************************************************QQ跟微视项目 ****************************************************************


//上传数据
function upshuju(bb){  
    var url = "http://120.79.199.143/xuguangsheng/up.php?biao_name=weishi&ph="+bb;
	log("上传数据")	
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

//获取数据
function gethaoma(bb){  
	var url = "http://120.79.199.143/xuguangsheng/get.php?biao_name="+bb;	
	log("获取号码")	
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
			//var ss = res.body.json();
			ss = res.body.string()
			log(ss)
			var ss = ss.split("|")
			log(ss[0])
			if (ss[0]=="OK"){
				log(ss[1])
				toast(ss[1])
				sleep(3000)
				return ss[1]
			}else{
				log("没有号码")				
				toast("没有号码")
				sleep(4000);
			}
		}
	}
}

//更新状态
function gxzhuangtai(aa, bb ,cc){  
    var url = "http://120.79.199.143/xuguangsheng/gx.php?biao_name="+aa+"&ph="+bb+"&zt="+cc;
    log("上传数据")	
    var TC = (new Date()).getTime()
	while(true){
        if ((new Date()).getTime() - TC > 20 * 1000){
            log("更新状态失败不更新了")
            return false
        }
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
				toastLog("更新状态成功")
				return true
			}else{
				toastLog("更新失败")		
				sleep(4000);
			}
		}
	}
}

//下载图片
function dowtupian(){
    var pnum = random(1, 600)
    log("下载图片"+pnum)
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    while (1){
        try {
            if (tem > 10){
                log("访问次数够了退出")
                return false
            }else{
                if (tem == 5){
                    pnum = random(1, 100) 
                }
            }
            var filePath = files.join(dirpath, '1.png');
            // let imgurl = 'https://png-1300551841.cos.ap-guangzhou.myqcloud.com/'+pnum+'.png';
            let imgurl = 'https://tupian-1300185247.cos.ap-chengdu.myqcloud.com/'+pnum+'.png';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                return true
            } else {
                log("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch(error) {
            log(error);
            sleep(random(3000,8000))
        }
    }
    log("下载图片完成")
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

//备份
function beifen(){  
    log("备份")
    try {
        var r = http.get("http://127.0.0.1:1314/cmd?fun=backup_params&to_filename=123.txt");
        log("code = " + r.statusCode);
        log("html = " + r.body.string());
       
    } catch(error) {
        print(error);
            sleep(2000)
    }
}

//上传备份
function setbeifen(name){   //上传备份
    log("开始上传备份文件") 
    path = "/sdcard/.crab/123.txt"
    if (files.exists(path)){ 
        log("账号ID文件存在")
        var data = files.read(path)
        seturlbeifen(name,data)
        log("上传完成")
        return 1
    }else{
        log("账号ID文件不存在,上传失败")
        return 0
	}
}

//上传备份到服务器
function seturlbeifen(phone,data){  
	var url = "http://120.79.199.143/douyinUID/qqBeifen.php?phone="+phone+"&data="+data;	
	log("uir上传备份数据")	
	var TT = (new Date()).getTime()
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
			//var ss = res.body.json();
			ss = res.body.string()
			log(ss)
			var ss = ss.split("|")
			log(ss[0])
			if (ss[0]=="OK"){
				log("更新完成")
				toast("更新完成")
				sleep(2000)
				break
			}else{
				log("更新失败")				
				toast("更新失败")
				sleep(4000);
			}
		}
	}
}

//将备份内容保存到本地目录
function getbeifen(){ 
    log("下载备份文件")
    getdata()
    var path = "/sdcard/.crab/123.txt"
    files.write(path, beifendata) //在本地创建备份空文件
}

//获取服务器备份内容
function getdata(){  
	var url = "http://120.79.199.143/douyinUID/getqqBeifen.php";
	log("获取服务器备份内容")	
	while(true){  
        try{
            var res = http.get(url);  
            if(res.statusCode == 200){
                ss = res.body.string()
                log(ss)
                var ss = ss.split("|")
                if (ss[0]=="OK"){
                    phone_num = ss[1]
                    password = ss[2]
                    beifendata = ss[3]
                    return 
                }else{
                    log("没有号码")				
                    toast("没有号码")
                    sleep(5000);
                }
            }
        }catch (e) 
        {
            log("没网")			
            sleep(3000);
        }
	}
}

//还原备份
function huanyuan(){
    log("还原参数")
    while (1){
        try {
            var r = http.get("http://127.0.0.1:1314/cmd?fun=restore_params&from_filename=123.txt");
            if( r.statusCode == 200){
                var r_str = r.body.string()
                //log("html = " + r_str);
                r_obj = JSON.parse(r_str);
                if (r_obj['code'] == 0){
                    toastLog("还原参数成功")
                    break
                }
                else{
                    toastLog("还原参数失败")
                    sleep(2000)
                }
            }
        } catch(error) {
            print(error);
            sleep(2000)
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

function zonghe(){
    if(text("允许").exists()){
        log("允许")
        click("允许")   
        sleep(1000)
    }
    if(text("知道了").exists()){
        log("知道了")
        click("知道了")   
        sleep(1000)
    }
    if(text("我知道了").exists()){
        log("我知道了")
        click("我知道了")   
        sleep(1000)
    }
    if(text("安装").exists() && text("取消").exists()){
        log("取消")
        click("取消")   
        sleep(1000)
    }
    if(text("重试").exists() && text("取消").exists()){
        log("重试")
        click("重试")   
        sleep(1000)
    }
    if(text("取消关注").exists() && text("取消").exists()){
        log("取消关注")
        click("取消")   
        sleep(1000)
    }
    if(text("关闭应用").exists() && text("等待").exists()){
        log("等待")
        click("等待")   
        sleep(1000)
    }
    if(text("一键关注").exists() && id("com.tencent.weishi:id/close_btn").exists()){
        log("一键关注")
        try {
            var ss = id("com.tencent.weishi:id/close_btn").findOnce().bounds();
            click(ss.centerX(), ss.centerY());
            sleep(2000)
            sleep(1000)
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
}

//L先生新机
function Lxinji(){
    log("L先生新机")
    var cu = 0
    while (1){
        try {
            var r = http.get("http://127.0.0.1:1314/cmd?fun=new_device");
            if( r.statusCode == 200){
                var r_str = r.body.string()
                log("html = " + r_str);
                r_obj = JSON.parse(r_str);
                if (r_obj['code'] == 0){
                    toastLog("新机成功")
                    sleep(4000)
                    home()
                    sleep(2000)
                    home()
                    sleep(2000)
                    click("知道了")
                    sleep(1000)
                    break
                }
                else{
                    cu = cu +1
                    if (cu >= 5 ){
                        vpng();
                        vpnk();
                        cu = 0
                    }
                    toastLog("新机失败")
                    sleep(2000)
                }
            }
        } catch(error) {
            print(error);
            sleep(2000)
        }
    }
}

//微视搜索
function sousuo(){
    log("微视搜索")
    launch("com.tencent.weishi")
    var tem = 0  //判定在哪个页面
    var yh = "ts11001"    //搜索的用户 ts11001   a133188
    var xh = 0   //下滑次数判断关注完
    var gs = 0   //关注个数
    var xx = 500
    var yy = 1700    //240
    var name = "123"
    var zh = "1234"
    var TC = (new Date()).getTime()
    files.write("/sdcard/weishiname.txt", "10")   //记录微视名字的文本
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            log("超时没有关注")
            guanbiyy("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }
        if((text("首页").exists() && text("消息").exists() && text("我").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            log("首页")
            click(990, 120)   //  点击搜索
            sleep(1000)
            tem = 0
        }

        if(id("com.tencent.weishi:id/search_icon").exists() && text("取消").exists() || text("用户").exists() && text("综合").exists() ){
            log("搜搜界面")
            tem = 0
            if(text("用户").exists() && text("综合").exists() && id("com.tencent.weishi:id/avatar").exists()||  text("用户").exists() && text("音乐").exists() && id("com.tencent.weishi:id/avatar").exists()){
                log("搜索结果")
                click("用户")   //  点击搜索
                sleep(2000)
                click(500, 500)    //点击第一个
                sleep(3000)
            }else{
                log("去搜索")
                click(500, 150)
                sleep(1000)
                setText(yh)
                sleep(1000)
                click(970, 1840)   //搜索
                sleep(3000)
            }
        }

        if((id("com.tencent.weishi:id/iv_title_bar_back").exists() && text("粉丝").exists() && text("获赞").exists() )||  (text("关注").exists() && text("com.tencent.weishi:id/iv_title_bar_share").exists() && text("获赞").exists())){
            log("个人详情页")
            if (tem == 0){
                sleep(2000)
                if (text("微视号: "+yh).exists() || text(yh).exists()){
                    click("关注")   
                    sleep(1000)
                }else{
                    log("不是要搜索的人")
                    back()
                    sleep(2000)
                }
            }else{
                if (text("发私信").exists()){
                    log("上传数据")
                    zh = "meiyouzh"    //有是会没有账号
                    try {
                        name = id("com.tencent.weishi:id/tv_title_bar_title").findOnce().text()
                        var ss = getAllTexts()
                        for(j = 0,len=ss.length; j < len; j++){
                            if (ss[j].indexOf("微视号") != -1){
                                log(ss[j])
                                var st = ss[j].split(":")
                                zh = st[1]
                                log("微视号"+ zh)
                            }
                        }
                        log(name+ ":" + zh)
                        // upshuju(name+"----"+zh)
                        back()
                        sleep(1000)
                        var nr = files.read("/sdcard/weishiname.txt").split("\n")
                        // for (var k in nr){
                        //     if (nr[k] == name && yy > 1450){
                        //         log(nr[k])
                        //         log("已经关注完了")
                        //         toast("已经关注完了")
                        //         // return true
                        //     }
                        // }
                        xieru("/sdcard/weishiname.txt", name)
                    }catch(error) {
                        log(error);
                    }
                }else{
                    log("关注")
                    try {
                        var ss = text("私信").findOnce().bounds();
                        log(ss)
                        click(ss.centerX()-400, ss.centerY());
                        sleep(2000)
                    }catch(error) {
                        log(error);
                    }
                }
            }
        }
        if (id("com.tencent.weishi:id/user_list_follow_button").exists() && id("com.tencent.weishi:id/user_list_avatar").exists() ||  id("com.tencent.weishi:id/tab_text").exists() && text("com.tencent.weishi:id/user_list_follow_button").exists()){
            log("关注列表")
            // if (yy < 500){   // 1800
            //     log("滑至下一页")
            //     yy = 1700      //500
            //     // scrollDown(0)
            //     swipe(574,1900, 500,380,random(1500, 2000))
            //     sleep(2000)
            // }
            // click(xx, yy)   
            // sleep(2000)
            // yy = yy - 240
            var point = findColor(captureScreen(), "#7a46ff", {
                region: [864,394, 150,1500],
                threshold: 6
            });
            if(point){
                log("找到关注")
                click(point.x, point.y)
                TC = (new Date()).getTime()
                sleep(500)
                gs = gs + 1
                if (gs == 14){
                    log("关注数量够了")
                    toast("关注数量够了")
                    break
                }
                xh = 0
            }else{
                log("下滑")
                swipe(574,1900, 500,430,random(1500, 2000))
                sleep(2000)
                xh = xh + 1
            }
            if (xh > 3){
                log("没有关注的人了")
                break
            }
            tem = 1
        }
        zonghe()
    }
}

//登录微视
function dlweishi(){
    log("登录微视")
    launch("com.tencent.weishi")
    var TC = (new Date()).getTime()
    var TB = (new Date()).getTime()
    var cs = 0   //修改ID的次数
    var dl = 0
    var name = "123"
    var zh = "1234"
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            log("超时没有登录成功")
            guanbiyy("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }
        if((text("首页").exists() && text("消息").exists() && text("我").exists() )||  (text("关注").exists() && text("推荐").exists())){
            log("首页")
            if (dl == 0){
                click(970, 1850)  
                sleep(1000)
            }else{
                log("登录成功")
                break
            }
        }
        if((text("编辑资料").exists() && id("com.tencent.weishi:id/iv_title_bar_share").exists())||  (text("编辑资料").exists() && text("关注").exists())){
            log("登录成功")
            toast("登录成功")
            sleep(2000)
            if (text("微视号: 快来抢注唯一ID").exists()){
                click("微视号: 快来抢注唯一ID")   
                sleep(1000)
            }else{
                try {
                    name = id("com.tencent.weishi:id/tv_title_bar_title").findOnce().text()
                    var ss = getAllTexts()
                    for(j = 0,len=ss.length; j < len; j++){
                        if (ss[j].indexOf("微视号") != -1){
                            log(ss[j])
                            var st = ss[j].split(":")
                            zh = st[1]
                            log("微视号"+ zh)
                        }
                    }
                    if (zh != "1234" && name != "123" && zh != " 快来抢注唯一ID"){
                        log(name+ ":" + zh)
                        click(100, 1840)   
                        sleep(1000)
                        upshuju(name+"----"+zh)
                        dl = 1
                    }
                }catch(error) {
                    log(error);
                }
            }
        }

        if (text("抢注微视号").exists() && id("com.tencent.weishi:id/btn_back").exists()){
            log("抢注微视号")
            if (text("该微视号已成为你的专属ID").exists()){
                log("已经抢注成功")
                back()
                sleep(1000)

            }else{
                cs = cs + 1 
                if (cs > 3){
                    log("返回一下")
                    back()
                    cs = 0
                }else{
                    setText(random(11111111, 99999999))
                    sleep(1000)
                    click("立即抢注")
                    sleep(1000)
                }
            }
        } 
        if (text("取消").exists() && text("确定").exists()){
            log("确定抢注") 
            click("确定")
            sleep(1000)
        }
        if (text("登录").exists() && text("取消").exists()){
            log("登录") 
            click("登录")
            sleep(5000)
        }
        if(text("微信登录").exists() && text("QQ登录").exists()){
            log("微信登录或QQ登录")
            if (id("com.tencent.weishi:id/login_progress").exists() && (new Date()).getTime() - TB < 40*1000){
                toast("等待授权")
                log("等待授权")
                sleep("3000")
            }else{
                click("QQ登录") 
                // click("微信登录")  
                sleep(3000)
                TB = (new Date()).getTime()
            }
        }
        if(text("QQ授权登录").exists() ){
            log("QQ授权登录")
            click("QQ授权登录")
            sleep(5000)
        }
        if(text("完成QQ授权").exists() ){
            log("完成QQ授权")
            click("完成QQ授权")
            sleep(3000)
        }
        if(text("开始看视频").exists() && text("跳过").exists()){
            log("开始看视频")
            click("跳过")
            sleep(3000)
        }
        zonghe()
    }
}

//微视养号
function wsyanghao(){
    log("微视养号")
    launch("com.tencent.weishi")
    var TB = (new Date()).getTime()
    var TC = (new Date()).getTime()
    var TT = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - TC > 3*60*1000){
            log("超时没在首页")
            guanbiyy("com.tencent.weishi")
            sleep(3000)
            launch("com.tencent.weishi")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 30*60*1000){
            log("养号时间够了")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            break
        }
        if((text("首页").exists() && text("消息").exists() && text("关注").exists() )||  (id("com.tencent.weishi:id/tv_tab_bar_home_page").exists() && text("关注").exists() && text("推荐").exists())){
            log("首页")
            TC = (new Date()).getTime()
            var shij = random(20, 50)
            TB = (new Date()).getTime()
            if (shij < 23){
                var bb = random(1, 30)
                if (bb >29){
                    log("去点赞")
                    click(968,1756)
                    sleep(2500)
                }else{
                    log("看评论")
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
                        log("看完了")
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
            log("评论界面")
            var cc = random(1, 5)
            for (let i = 0; i < cc; i++){
                sleep(1000)
                swipe(500,1700, 486,550, 1000)
                sleep(random(1000, 2000))
            }
            back()
            sleep(1000)
        }
        zonghe()
    }
}

//登录QQ
function dlqq(){
    log("登录qq")
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var hh = "1111"
    var tem = 0
    var bb = 0
    var zh = "2149292992"
    var mm = "S8CryRJJ"
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            log("超时没有登录成功")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
        }
        if (tem == 0 && bb == 1){
            log("去拿号")
            // hh = gethaoma("weishiqq")
            // var ss = hh.split("----")
            // zh = ss[0]
            // mm = ss[1]   2149292992----S8CryRJJ
            log("账号:"+ zh+"密码："+mm)
            tem = 1
        }
        if(text("用户注册").exists() && text("忘记密码").exists() ){
            log("输入账号界面")
            if (bb == 1){
                setText([0],zh)
                sleep(500)
                setText([1],mm)
                sleep(1000)
                try{
                    if (id("com.tencent.mobileqq:id/login").exists()){
                        log("点击控件")
                        var ss = id("com.tencent.mobileqq:id/login").findOnce().bounds();
                        log(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }else{
                        click(500, 1200)  
                    }
                    sleep(3000)
                }catch(error) {
                    log(error);
                }
            }else{
                log("先去拿号")
                bb = 1
            }
        }
        if(text("消息").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
            log("登录成功")
            toast("登录成功")
            sleep(2000)
            if (tem == 1){
                gxzhuangtai("weishiqq", zh ,"dlcg")
            }
            back()
            return hh
        }
        if(text("拖动下方滑块完成拼图").exists() || desc("拖动下方滑块完成拼图").exists()){
            log("滑块验证")
            toast("滑块验证")  
            var point = findColor(captureScreen(), "#007aff", {
                region: [75,621, 450,600],
                threshold: 4
            });
            if(point){
                log("滑滑块"+point.x+":"+point.y)
                // click(point.x, point.y)
                swipe(point.x, point.y+50, random(600, 1000),point.y,random(800, 1500))
                sleep(2000)
            }
            // swipe(339,743, 739,744,random(800, 1500))
            // sleep(2000)
        }
        
        if(text("开始验证").exists() ){
            log("开始验证")
            click("开始验证")  
            sleep(2000)
        }
        if(text("资料辅助验证").exists() || desc("资料辅助验证").exists()){
            log("资料辅助验证")
            try{
                if (desc("资料辅助验证").exists()){
                    log("点击控件")
                    var ss = desc("资料辅助验证").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            }catch(error) {
                log(error);
            }
            click("资料辅助验证")  
            sleep(2000)
        }
        if(text("以上都不是").exists() || desc("以上都不是").exists()){
            log("以上都不是")
            try{
                if (desc("以上都不是").exists()){
                    log("点击控件")
                    var ss = desc("以上都不是").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                    click(ss.centerX(), ss.centerY()+300);
                    sleep(2000)
                }else{
                    click("以上都不是")  
                    sleep(500)
                }
            }catch(error) {
                log(error);
            }
            click("下一步")  
            sleep(1000)
        }
        if(text("验证成功").exists() || desc("验证成功").exists()){
            log("验证成功")
            back()
            sleep(2000)
            back()
            sleep(2000)
        }
        if(text("登录失败").exists() && text("确定").exists() ){
            log("登录失败")
            click("确定")  
            sleep(1000)
        }
        if(text("新用户").exists() && text("登录").exists() ){
            log("新用户")
            click("登录")  
            sleep(1000)
        }
        if(text("暂不使用").exists() && text("同意").exists() ){
            log("暂不使用")
            click("同意")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("取消").exists() ){
            log("跳过")
            click("跳过")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("继续绑定").exists() ){
            log("继续绑定")
            click("跳过")  
            sleep(1000)
        }
        if(text("返回").exists() && text("关注").exists()){
            log("返回")
            back()
            sleep(3000)
        }
        if(text("解除保护").exists() && text("取消").exists() || text("资金管理").exists() && text("取消").exists()){
            log("封了")
            if (tem == 1){
                gxzhuangtai("weishiqq", zh ,"fengl")
            }
            click("取消")  
            tem = 0
            bb = 0
            sleep(3000)
        }
        if(text("允许").exists() ){
            log("允许")
            click("允许")  
            sleep(1000)
        }
        if(text("开启QQ之旅").exists() ){
            log("开启QQ之旅")
            back()
            sleep(2000)
        }
        if(text("绑定手机号码").exists() ){
            log("绑定手机号码")
            back()
            sleep(2000)
        }
        if(text("关闭应用").exists() && text("等待").exists()){
            log("等待")
            click("等待")   
            sleep(1000)
        }
    }
}

//修改头像
function xiugtx(){
    dowtupian()
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TS = (new Date()).getTime()
    log("修改头像")
    toast("修改头像")
    while(1){
        if ((new Date()).getTime() - TC > 5*60*1000){
            log("超时没有登录成功")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TS > 10*60*1000){
            log("超时退出")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            break
        }
        if(text("消息").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
            log("首页")
            click(100, 150)
            sleep(2000)
        }
        if(text("设置").exists() && text("我的相册").exists() || text("设置").exists() && text("我的收藏").exists()){
            log("设置")
            click(120, 350)
            sleep(2000)
        }
        if(text("个性名片").exists() && text("编辑资料").exists() || text("编辑资料").exists() && text("我的资料").exists()){
            log("编辑资料")
            click("编辑资料")
            sleep(2000)
        }
        if(text("从相册选择图片").exists() && text("拍照").exists() || text("从相册选择图片").exists() && text("取消").exists()){
            log("从相册选择图片")
            click("从相册选择图片")
            sleep(2000)
        }
        if(text("编辑资料").exists() && text("头像").exists() || text("编辑资料").exists() && text("性别").exists()){
            log("编辑资料2")
            click("头像")
            sleep(2000)
        }
        if(text("最近照片").exists() && text("取消").exists()){
            log("选择照片")
            click(100, 400)
            sleep(2000)
        }
        if(text("移动和缩放").exists() && text("完成").exists()){
            log("移动和缩放")
            click("完成")
            sleep(3000)
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            break
        }

        if(text("开启QQ之旅").exists() ){
            log("开启QQ之旅")
            back()
            sleep(2000)
        }
        if(text("绑定手机号码").exists() ){
            log("绑定手机号码")
            back()
            sleep(2000)
        }
        if(text("跳过").exists() && text("取消").exists() ){
            log("跳过")
            click("跳过")  
            sleep(1000)
        }
        if(text("跳过").exists() && text("继续绑定").exists() ){
            log("继续绑定")
            click("跳过")  
            sleep(1000)
        }
        if(text("返回").exists() && text("关注").exists()){
            log("返回")
            back()
            sleep(3000)
        }
        if(text("进入勋章墙").exists() ){
            log("进入勋章墙")
            back()
            sleep(3000)
        }
        if(text("关闭应用").exists() && text("等待").exists()){
            log("等待")
            click("等待")   
            sleep(1000)
        }
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

//qq养号
function qqyanghao(){
    log("qq养号")
    launch("com.tencent.mobileqq")
    var TC = (new Date()).getTime()
    var TS = (new Date()).getTime()
    var tem = 1
    while(1){
        if ((new Date()).getTime() - TC > 4*60*1000){
            log("超市没有在首页")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
            TC = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TS > 30*60*1000){
            log("观看时间够了")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            break
        }
        if(text("关注").exists() && text("推荐").exists()  && id("com.tencent.mobileqq:id/name").exists() || text("推荐").exists() && text("视频").exists() && id("com.tencent.mobileqq:id/name").exists()){
            log("看点界面")
            TC = (new Date()).getTime()
            if (random(1, 10) > 8 || tem == 1){
                log("点击推荐")
                click("推荐")
                sleep(4000)
                tem = 2
            }
            var sb = random(2, 10)
            for(var i = 0;i< sb ;i++){
                swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                sleep(random(1000, 4000))
            }
            click(random(500, 600), random(800, 1500))
            sleep(3000)
        }else{
            if(text("看点").exists() && text("联系人").exists() || text("看点").exists() && text("动态").exists()){
                log("qq首页")
                click("看点")
                sleep(2000)
            }
        }
        if(desc("返回").exists() && text("关注").exists() && desc("小窗播放").exists() || desc("返回").exists() && desc("分享").exists() && text("关注").exists()){
            log("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("等待视频播放")
                sleep(random(3800, 4000))
            }
            back()
        }
        if(text("返回").exists() && text("收藏").exists() && text("写评论…").exists() || text("返回").exists() && text("已收藏").exists() && text("写评论…").exists()){
            log("观看视频")
            var sb = random(5, 10)
            for(var i = 0;i< sb ;i++){
                toast("浏览文章")
                swipe(random(500, 600),random(1400, 1600), random(500, 600),random(500, 1000),random(500, 3000))
                sleep(random(1000, 4000))
            }
            sb = random(1, 20)
            if (sb == 20){
                log("点击收藏")
                click("收藏")
                sleep(2000)
            }
            back()
        }
        if(text("允许").exists() ){
            log("允许")
            click("允许")  
            sleep(1000)
        }
        if(text("开启QQ之旅").exists() ){
            log("开启QQ之旅")
            back()
            sleep(2000)
        }
        if(text("绑定手机号码").exists() ){
            log("绑定手机号码")
            back()
            sleep(2000)
        }
        if(text("关闭应用").exists() && text("等待").exists()){
            log("等待")
            click("等待")   
            sleep(1000)
        }
        if(text("稍后处理").exists() && text("立即升级").exists()){
            log("稍后处理")
            click("稍后处理")   
            sleep(1000)
        }
        if(text("设置").exists() && text("取消").exists()){
            log("设置")
            guanbiyy("com.tencent.mobileqq")
            sleep(3000)
            launch("com.tencent.mobileqq")
        }
    }
}

//*****************************************************QQ跟微视项目 ****************************************************************

// ws()
// dlqq()
var ss = getAllTexts()
log(ss)
// var baoming = currentPackage()
// log(baoming)
// bofangyy()
// while(1){
//     qqyanghao()
//     wsyanghao()
// }
// log(getClip()+"**")
// qqyanghao()
// xiugtx()







