

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
                    temp = 1
                }
            }else if (tem == 1 || text("失败").exists()){
                if (text("Gn").exists()){
                    log("点击Gn")
                    click("Gn")
                    sleep(2000)
                }else{
                    temp = 1
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
        if (text("确定").exists()){
            click("确定")
            sleep(2000)
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
                for (let index = 0; index < 20; index++) {
                    click("0")
                    sleep(20)
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
                sleep(2000)
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

getVpnUser()
xitongVPN("开")
