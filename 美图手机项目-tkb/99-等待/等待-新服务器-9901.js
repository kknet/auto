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

//*******************************************************QQ项目 *****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy(){
    _THREADSS = threads.start(function (){
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 *1000
        var TJH = (new Date()).getTime()
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
                        TKB.xgsrizhi("继续等待任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有等待任务")
                        TKB.qinglihh(dqbaoming)
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

//执行等待项目
function daiding(){
    try {
        bofangyy()
        toastLog("执行等待任务")
        _THREADSSxx = threads.start(function (){
            device.keepScreenOn(240*60*60*1000)
            files.remove("/sdcard/dyrizhi.txt")
            device.setNotificationVolume(1)
            device.setMusicVolume(1)
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
            TKB.xgsrizhi("执行完存停止数据")
            TKB.cunqusj("jiaoben","tingzhi")
            java.lang.System.exit(0);
            _THREADSS.interrupt()
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



// TKB.xgsrizhi(getClip()+"**")
// qqyanghao()
// xiugtx()







