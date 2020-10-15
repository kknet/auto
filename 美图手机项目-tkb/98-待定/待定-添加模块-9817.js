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
var dqbaoming = "com.tencent.mobileqq"   //该项目包名
var xmxh = "98"               //项目序号


//********************************************************下载播放mp3***************************************************************


function feixing(){
    var intent = new Intent(); 
    var tout = (new Date()).getTime()
    var tem = 0
    intent.setAction("android.settings.WIRELESS_SETTINGS");
    app.startActivity(intent);
    sleep(2000)
    while (1){
        if ((new Date()).getTime() - tout > 30 * 1000){
            toastLog("超时没打开")
            back()
            sleep(500)
            back()
            sleep(500)
            back()
            intent.setAction("android.settings.WIRELESS_SETTINGS");
            app.startActivity(intent);
            sleep(2000)
            tout = (new Date()).getTime()
        }
        if(text("飞行模式").exists()){
            log("飞行模式")
            try{
                if(id("android:id/switch_widget").exists()){
                    var ss = id("android:id/switch_widget").findOnce().checked()
                    if (ss == true && tem == 1){
                        toastLog("已经关闭了飞行模式")
                        sleep(2000)
                        break
                    }else{
                        toastLog("点击飞行模式")
                        click(937, 328)
                        sleep(4000)
                        tem = 1
                    }
                }
            }catch(error) {
                log(error);
            }
        }
        toastLog("正在打开无线和网络")
        sleep(2000)
    }
    // click(937, 328)
    // sleep(6000)
    // click(937, 328)
    // sleep(6000)
}


//*******************************************************QQ项目 *****************************************************************

function zonghe(){
    if (text("允许").exists() && text("拒绝").exists()){
        log("允许")
        click("允许")
        sleep(1000)
    }
    if (text("继续").exists() && text("取消").exists()){
        log("继续")
        click("继续")
        sleep(1000)
    }
    if (text("忽略更新").exists() && text("同意").exists()){
        log("忽略更新")
        click("同意")
        sleep(1000)
    }
    if (text("我知道了").exists()){
        log("我知道了")
        click("我知道了")
        sleep(1000)
    }
}

//下载
function xiazai(bb){
    TKB.xgsrizhi("下载")
    var name = bb   //下载的应用名称
    launch("com.android.meitu.appstore")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.android.meitu.appstore")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没下载成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.android.meitu.appstore")
            sleep(3000)
            launch("com.android.meitu.appstore")
            sleep(2000)
            TSD = (new Date()).getTime()
        }

        if((text("精品").exists() && text("游戏").exists() && text("排行榜").exists() )||  (id("com.android.meitu.appstore:id/img_icon_search").exists() && text("排行榜").exists())  ){
            TKB.xgsrizhi("首页")
            // setText(name)
            click(500, 120)
            sleep(1000)
        }
        if(id("com.android.meitu.appstore:id/first_jump_over_img").exists()){
            log("关闭一键安装")
            try {
                var aa = id("com.android.meitu.appstore:id/first_jump_over_img").findOnce().bounds();
                TKB.xgsrizhi(aa.centerX())
                TKB.xgsrizhi(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
            }catch(error) {
                TKB.xgsrizhi(error);
                sleep(2000)
            }
        }

        if(id("com.android.meitu.appstore:id/iv_back_arrow").exists() && text("搜索").exists()){
            TKB.xgsrizhi("搜索")
            if (text(name).exists()){
                TKB.xgsrizhi("看到小程序了")
                try {
                    var ws = text(name).boundsInside(0, 200, device.width, device.height).findOnce().bounds()
                    if (ws != null){
                        TKB.xgsrizhi(ws.centerX())
                        TKB.xgsrizhi(ws.centerY())
                        click(ws.centerX(), ws.centerY())
                        sleep(3000)
                    }else{
                        log("搜索2")
                        click(500, 120)
                        sleep(1000)
                        setText(name)
                        sleep(1000)
                        click(930, 130)
                        sleep(3000)
                    }
                }catch(error) {
                    TKB.xgsrizhi(error);
                    sleep(2000)
                }
            }else{
                log("搜索2")
                click(500, 120)
                sleep(1000)
                setText(name)
                sleep(1000)
                click(930, 130)
                sleep(3000)
            }
        }
            
        if(text(name).exists() && id("com.android.meitu.appstore:id/activity_detail_actionbar_backimgVi").exists() ||  id("com.android.meitu.appstore:id/activity_cproducts_detail_collect_iconImgVi").exists() && id("com.android.meitu.appstore:id/activity_cproducts_detail_share_iconImgVi").exists()){
            TKB.xgsrizhi("应用详情页")
            sleep(2000)
            if (zhaose("if isColor(255,1951,0xffffff,80) and isColor(365,1936,0xffffff,80) and isColor(719,1929,0xffffff,80) and isColor(817,1969,0xffffff,80) and isColor(552,1949,0x695afc,80) then")){
                log("已经下载了")
                TKB.qinglihh("com.android.meitu.appstore")
                return true
            }else{
                log("点击下载")
                click(500, 1940)
                sleep(1000)
                if (text("继续").exists() && text("取消").exists()){
                    log("继续")
                    click("继续")
                    sleep(1000)
                }
                sleep(5000)
            }
        }
        if (text("同意").exists() && text("取消").exists()){
            log("同意")
            click("同意")
            sleep(1000)
        }
        if (text("忽略更新").exists() && text("同意").exists()){
            log("忽略更新")
            click("同意")
            sleep(1000)
        }
        zonghe()
    }
}

//设置360
function shezhi(){
    log("设置360")
    launch("com.qihoo.cleandroid_cn")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var tem = 1
    while(1){
        if ((new Date()).getTime() - RT > 20*60*1000){
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh("com.qihoo.cleandroid_cn")
            return false
        }
        if ((new Date()).getTime() - TSD > 5*60*1000){
            TKB.xgsrizhi("超时没设置成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.qihoo.cleandroid_cn")
            sleep(3000)
            launch("com.qihoo.cleandroid_cn")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (text("清理").exists() && text("文件管理").exists() && text("我的").exists()){
            log("首页")
            click(900, 1950)
            sleep(2000)
            if (text("设置").exists()){
                log("进入设置")
                click("设置")
                sleep(2000)
            }
        }
        if (id("com.qihoo.cleandroid_cn:id/lw").exists() ){
            log("提升清理效果")
            var aa = id("com.qihoo.cleandroid_cn:id/lw").findOnce().bounds()
            TKB.xgsrizhi(aa.centerX())
            TKB.xgsrizhi(aa.centerY())
            click(aa.centerX(), aa.centerY())
        }

        if (text("充电保护").exists() && text("自动清理").exists() ||  text("自动清理").exists() && text("通用").exists()){
            log("进入自动清理")
            click("自动清理")
            sleep(2000)
        }

        if (id("com.qihoo.cleandroid_cn:id/gd").exists() && text("内存过高清理").exists() && text("定时清理内存").exists() ){
            log("设置自动清理")
            try {
                var ss = id("com.qihoo.cleandroid_cn:id/gd").findOnce().desc()
                if (ss != "已选中"){
                    log("还没选中")
                    var aa = id("com.qihoo.cleandroid_cn:id/gd").findOnce().bounds();
                    TKB.xgsrizhi(aa.centerX())
                    TKB.xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
                if (tem == 1){
                    log("过高清理")
                    click("内存过高清理")
                    sleep(2000)
                }else{
                    if (tem == 2){
                        log("定时清理内存")
                        click("定时清理内存")
                        sleep(2000)
                    }else{
                        log("设置完成")
                        TKB.qinglihh("com.android.meitu.appstore")
                        return true
                    }
                }
            }catch (error) {
                sleep(1000)
                log(error);
            }
        }
        if (text("加速阈值设置").exists() && text("确定").exists()){
            log("设置过高清理")
            click(870, 790)
            sleep(2000)
            click("确定")
            sleep(2000)
            tem = 2
        }
        if (text("定时加速区间").exists() && text("确定").exists()){
            log("设置定时加速区间")
            click(870, 880)
            sleep(2000)
            click("确定")
            sleep(2000)
            tem = 3
        }
        if (text("立即使用").exists()){
            log("立即使用")
            click("立即使用")
            sleep(2000)
        }


        zonghe()
    }
}

//下载应用
function xzm(){
    toastLog("下载应用")
    var BB = (new Date()).getTime()
    while(1){
        try {
            if ((new Date()).getTime() - BB > 5*60*1000){
                log("超时退出")
                TKB.qinglihh()
                BB = (new Date()).getTime()
            }
        //文件更新地址
        // var url = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
            var url = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/4.1.1a%20Alpha2-armeabi-v7a-release.apk";
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
            return true
        } catch(error) {
            log(error);
            sleep(random(1000,3000))
        }
    }
}

//安装应用
function anz(){
    log("安装")
    var TT = (new Date()).getTime() - 100*1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - BB > 5*60*1000){
            log("超时退出")
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60*1000){
            log("超时清理一次换存")
            TKB.qinglihh()
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
                TKB.qinglihh()
            }
            back()
            sleep(2000)
        }
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 *1000
        var TJH = (new Date()).getTime()
        // device.setNotificationVolume(0)
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 3*55*1000){
                    log("激活设备")
                    TKB.xjihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwu = TKB.huoqurenwu(sbip, yhname, yhbh, xmxh)
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        renwu = false
                    }
                    if (renwu == true){
                        TKB.xgsrizhi("继续待定任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有待定任务")
                        TKB.qinglihh()
                        sleep(2000)
                        TKB.xgsrizhi("执行完存停止数据2")
                        TKB.cunqusj("jiaoben","tingzhi")
                        java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        _THREADSS.interrupt()
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


//执行待定项目
function daiding(){
    try {
        bofangyy()
        toastLog("执行待定任务")
        _THREADSSxx = threads.start(function (){
            device.keepScreenOn(240*60*60*1000)
            var ttr = (new Date()).getTime()
            var baom = getPackageName("Auto.js")
            if (baom == null){
                log("没安装js")
                xzm()
                anz()
            }
            
            // feixing()
            while(1){
                toastLog("待定项目")
                sleep(5000)
                if ((new Date()).getTime() - ttr > 5*60*1000){
                    TKB.qinglihh()
                    sleep(3000)
                    ttr = (new Date()).getTime()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            _THREADSS.interrupt()
            TKB.cunqusj("jiaoben","tingzhi")
            files.write("/sdcard/jiaoben.txt", "tingzhi")
            sleep(1000)
            java.lang.System.exit(0);
            
            _THREADSSxx.interrupt()
        });
    } catch(error) {
        log(error);
        TKB.cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000,2000))
    }
}



daiding()

// ws()
// dlqq()
// var ss = getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(baoming)
TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







