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
var xmxh = "99"               //项目序号




//********************************************************下载播放mp3***************************************************************

//截取字符串
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
function zhaose(aa){
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    for (var k in ss){
        //TKB.xgsrizhi(ss[k])
        var xx = getInsideString(ss[k], "(", "," )
        var yy = getInsideString(ss[k], ",", ",0" )
        var ys = getInsideString(ss[k], "0x", ",80)" )
        //TKB.xgsrizhi(xx + ":" + yy)
        //TKB.xgsrizhi(ys)
        if (images.detectsColor(imgss, "#"+ys, xx, yy, 20)) {

        }else{
            imgss.recycle()
            return 0
        }
    }
    imgss.recycle()
    return 1
}

//*******************************************************QQ项目 *****************************************************************

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
        var ssee = (new Date()).getTime() - 600 *10000
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
                    // var renwu_table = renwu.split("-")
                    if (renwu != false){
                        TKB.xgsrizhi(renwu.length)
                        sstt = 0
                        for(var i =0 ; i < renwu.length; i++){
                            if (renwu[i] == xmxh ){
                                TKB.xgsrizhi("继续等待任务")
                                sstt = 1
                            }else{
                                if (renwu[i] == "100" ){
                                    TKB.xgsrizhi("结束脚本")
                                    TKB.qinglihh(dqbaoming)
                                    exit()
                                }
                            }
                        }
                        if (sstt == 0){
                            TKB.xgsrizhi("服务器上没有qq任务")
                            TKB.qinglihh(dqbaoming)
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
    //         if ((new Date()).getTime() -bst > 10*1000){
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


//*******************************************************新服务器*********************************************************************

//获取任务
function hqrenwu(){
    TKB.xgsrizhi("获取任务")
    var xmmc = "qqflag"          //项目名称
    while (1){ 
        try {
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/shebeixinxi/xiangmu/"+xmmc+"/usr/"+yhname+"/shebeihao/" + yhbh
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi(r_obj)
                // var renwu = r_obj["data"]
                // TKB.xgsrizhi(renwu)
                // return renwu
                return r_obj["data"]
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}

//上传账号
function upzhanghao(zhanghao){
    TKB.xgsrizhi("上传账号数据..."+yhname+"--"+yhbh+"--"+zhanghao)
    var ts = (new Date()).getTime()  
    var sbb = "zhanghao_qq"
    while(1){
        try {
            if ((new Date()).getTime() - ts > 30*1000){
                TKB.xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/douyin.com/tp5/public/index/Myapi/addZhangHaonew/tableflag/"+sbb+"/usr/"+yhname+"/shebeihao/"+yhbh+"/zhanghao/"+zhanghao
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0 || r_obj["code"] == 1){
                    TKB.xgsrizhi("上传账号信息成功")
                    return true
                }else{
                    TKB.xgsrizhi("上传账号信息失败")
                    toast("上传账号信息失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
            sleep(random(10, 10000))
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
    }
}

//上传数据
//上传点赞、粉丝、关注总数  ziduan = guanzhushuliang //关注数量   name = "抖音账号"   ziduan =  fsshuliang//粉丝数量
//ziduan = 	jianjie //简介  ziduan = touxiang //头像   ziduan = shipin //视频 ziduan = zan //点赞数量
//ziduan = 	shipinbofangliang //视频播放量  ziduan = quanzhong //权重   ziduan = nickname //昵称  ziduan = sex //性别
function scshuju(name, ziduan, shuju){
    TKB.xgsrizhi("上传账号数据..."+yhname+"--"+yhbh)
    TKB.xgsrizhi(name + "----"+ziduan+"----"+shuju)
    var Tb = (new Date()).getTime()
    // var name = "888----008"   //账号名称
    // var ziduan = "sex"
    // var shuju = "1"
    var sbb = "zhanghao_qq"
    while (1){ 
        try {
            if ((new Date()).getTime() - Tb > 20*1000){
                TKB.xgsrizhi("超时退出")
                break
            }
            var url = "http://"+sbip+"/douyin.com/tp5/public/index/Myapi/gxzhanghaonew/tableflag/"+sbb+"/usr/"+yhname+"/count/"+name+"/ziduan/"+ziduan+"/val/"+shuju
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if( r.statusCode == 200){
                var body =  r.body.string()
                var r_obj = JSON.parse(body);
                TKB.xgsrizhi("我是返回的信息"+ r_obj)
                TKB.xgsrizhi(r_obj["code"])
                if (r_obj["code"] == 0){
                    TKB.xgsrizhi("上传信息成功")
                    break
                }else{
                    TKB.xgsrizhi("上传信息成功失败")
                    toast("增上传信息成功失败--检查账号信息")
                    sleep(4000)
                }
            }
            else{
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch(error) {
            TKB.xgsrizhi(error);
            sleep(random(3000,8000))
        }
        toastLog("获取任务中...")
        sleep(random(100, 10000))
    }
}

//*******************************************************对接服务器*****************************************************************

//执行QQ项目
function daiding(){
    toastLog("执行等待任务")
    _THREADSSxx = threads.start(function (){
        device.keepScreenOn(240*60*60*1000)
        // bofangyy()
        files.remove("/sdcard/dyrizhi.txt")
        try {
            device.setNotificationVolume(1)
            device.setMusicVolume(1)
        } catch(error) {
            toastLog(error);
            sleep(random(1000,3000))
        }
        var ttr = (new Date()).getTime()
        while(1){
            toastLog("等待项目")
            sleep(5000)
            if ((new Date()).getTime() - ttr > 5*60*1000){
                TKB.qinglihh()
                sleep(3000)
                ttr = (new Date()).getTime()
            }
        }
        // meitxx()
        TKB.xgsrizhi("执行完存停止数据")
        TKB.cunqusj("jiaoben","tingzhi")
        java.lang.System.exit(0);
        _THREADSS.interrupt()
        _THREADSSxx.interrupt()
    });
    // exit()
}

try {
    bofangyy()
    daiding()
} catch(error) {
    log(error);
    TKB.cunqusj("jiaoben","tingzhi")
    java.lang.System.exit(0);
    sleep(random(1000,2000))
}
// ws()
// dlqq()
// var ss = getAllTexts()
// TKB.xgsrizhi(ss)
// var baoming = currentPackage()
// TKB.xgsrizhi(baoming)
TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







