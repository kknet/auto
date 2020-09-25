log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var dqbaoming = "com.ss.android.ugc.aweme" //该项目包名
var xmxh = "97" //项目序号 版本11.0.0



//******************************************************************抖音项目*****************************************************************

//启动时间
function qdtimes(sbip) {
    TKB.xgsrizhi("启动时间")
    var Tb = (new Date()).getTime()
    var jiqima = device.getIMEI()
    TKB.xgsrizhi(sbip)
    while (1) {
        try {
            // var url = "http://"+sbip+"/api.php/potal/meitu/qidongjaoben?user="+yhname+"&der_id="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/qidongjaoben2?jiqima=" + jiqima + "&remarks="
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["msg"] == "请输入备注") {
                    toastLog("请重启脚本")
                    sleep(2000)
                } else {
                    if (r_obj["msg"] == "等待初始化") {
                        toastLog("请到服务器分配该机器码：" + jiqima)
                        sleep(6000)
                    } else {
                        if (r_obj["msg"] == "ok") {
                            yhbh = r_obj["data"]["der_id"]
                            user_id = r_obj["data"]["user_id"]
                            TKB.xgsrizhi("user_id为" + user_id + "该机器的编号为" + yhbh)
                            toastLog("该机器的用户编号：" + user_id + "手机编号:" + yhbh)
                            sleep(2000)
                            toastLog("该机器的用户编号：" + user_id + "手机编号:" + yhbh)
                            return [user_id, yhbh]
                        }
                    }
                }
            } else {
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传启动时间中...")
        sleep(random(100, 10000))
    }
}



//获取紧急任务
function huoqujjrw(sbip, user_id, yhbh, run_id) {
    TKB.xgsrizhi("获取紧急任务")
    var ttr = (new Date()).getTime()
    TKB.xgsrizhi(sbip + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - ttr > 20 * 1000) {
                log("超时没获取到紧急任务")
                return false
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/getrun?user_id="+user_id+"&der_id="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/getrunhot?user_id=" + user_id + "&der_id=" + yhbh
            TKB.xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                log(r.body)
                if (r_obj["msg"] == "ok") {
                    TKB.xgsrizhi(r_obj)
                    var renwu = r_obj["data"]["app"] //任务编号
                    if (renwu == 97 || renwu == "97") {
                        log("获取到了暂停")
                        return [renwu, "99", "99", "99"]
                    } else {
                        if (renwu == 99 || renwu == "99") {
                            log("获取到了等待")
                            return [renwu, "99", "99", "99"]
                        } else {
                            if (renwu == 0 || renwu == "0") {
                                log("现在没有紧急任务")
                                return "123"
                            } else {
                                var renwuid = r_obj["data"]["run_id"]
                                if (renwuid == run_id) {
                                    TKB.xgsrizhi("当前正在做该紧急任务")
                                    return false
                                }
                            }
                        }
                    }
                    var run_id = r_obj["data"]["run_id"] //任务id
                    var run_time = r_obj["data"]["run_time"] //时间
                    var fun = r_obj["data"]["fun"] //子任务
                    TKB.xgsrizhi(renwu)
                    return [renwu, run_id, run_time, fun]
                } else {
                    toastLog("获取不到服务器任务")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("没网")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 5000))
    }
}
//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        if( files.exists("/sdcard/观沧海.mp3") == false){
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3",0.1,true);
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    back()
                    sleep(1000)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                        // var renwux = huoqujjrw(sbip, user_id, yhbh, run_id)   //获取紧急任务
                    renwux = false
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < 120 * 60 * 1000) {
                        TKB.xgsrizhi("继续暂停任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                            // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                TKB.xgsrizhi("我还在播放音乐")
                    // sleep(media.getMusicDuration());
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************


//执行美图项目

function dyzhixing() {
    try {
        toastLog("执行暂停任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var TR = (new Date()).getTime()
            var TY = (new Date()).getTime()
                // qdtimes(sbip)
            var renwus = huoqujjrw(sbip, user_id, yhbh, run_id)
            while (1) {
                if ((new Date()).getTime() - TR > 2 * 60 * 1000) {
                    renwus = huoqujjrw(sbip, user_id, yhbh, run_id)
                    TR = (new Date()).getTime()
                }
                if (renwus == "123") {
                    log("已经不是暂停了")
                    break
                } else {
                    if (renwus[0] != 99 && renwus[0] != 97) {
                        log("已经不是等待任务了")
                        break
                    } else {
                        toastLog("脚本已暂停...")
                        sleep(3000)
                    }
                }
                if ((new Date()).getTime() - TY > 5 * 60 * 1000) {
                    log("时间到了动一下")
                    swipe(557, 1600, 533, 400, random(400, 1000))
                    sleep(1000)
                    back()
                    sleep(1000)
                    home()
                    sleep(2000)
                    TY = (new Date()).getTime()
                }
                sleep(5000)
            }
            qdtimes(sbip)
            renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("执行完存停止数据")
                // TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0);
                // var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        log(error);
        TKB.cunqusj("jiaoben", "tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}



dyzhixing()