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
var xmxh = "99" //项目序号 版本11.0.0



//******************************************************************抖音项目*****************************************************************

function get_phone(sbip, user_id, yhbh, num) {
    log("获取手机号码成功")
    var Tb = (new Date()).getTime()
    log(sbip + "----" + user_id + "----" + yhbh + "----" + num)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log("超时退出")
                return false
            }
            var url = 'http://' + sbip + '/api.php/potal/meitu/get_tongxunlu?user_id=' + user_id + '&der_id=' + yhbh + '&num=' + num
            log("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["code"] == "0") {
                    toastLog("获取手机号码成功")
                    var data = r_obj['data']
                    log(data)
                    return data
                } else {
                    toastLog("失败:" + r_obj["msg"])
                    log("失败:" + r_obj["msg"])
                    return false
                }
            } else {
                log("获取失败")
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        toastLog("获取中...")
        sleep(random(100, 10000))
    }
}


/**添加手机号码
 * @num {number} 导入个数
 */
function tjlxr() {
    TKB.xgsrizhi('添加联系人')
    var dqbaoming = 'com.android.contacts'
    launch(dqbaoming)
    sleep(3000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var i = 0
    var num = random(15, 25)
    var num_lists = [];
    var x = get_phone(sbip, user_id, yhbh, num)
    if (x != false) {
        for (var z = 0; z < num; z++) {
            num_lists.push([x[z]['name'], Number(x[z]['phone'])])
        }
    } else {
        TKB.xgsrizhi('暂时没有联系人')
        toastLog('暂时没有联系人')
        return false
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 30 * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh(dqbaoming)
                return false
            }
            // log(num_lists.length)
            if (text('更多').exists() && text('收藏').exists() && text('拨号').exists()) {
                TKB.xgsrizhi("拨号界面")
                click(530, 150)
                sleep(2000)
            }
            if (text('同意').exists()) {
                click('同意')
                sleep(3000)
            }
            if (text('保存联系人到').exists() && text('手机').exists()) {
                click(500, 1840)
                sleep(3000)
            }
            if (text('新建联系人').exists() && text('导入联系人').exists() && text('其他手机导入').exists()) {
                TKB.xgsrizhi("新建联系人")
                click('新建联系人')
                sleep(5000)
            }
            if (text('保存联系人到').exists() && text('手机').exists()) {
                TKB.xgsrizhi("添加联系人")
                click('手机')
                sleep(2000)
            }
            if (text('我的收藏').exists() && text('我的群组').exists() && text('新建').exists()) {
                TKB.xgsrizhi("添加联系人")
                click('新建')
                sleep(2000)
            }
            if (text('舍弃').exists() && text('保存').exists() && text('手机').exists()) {
                TKB.xgsrizhi("输入信息")
                TKB.xgsrizhi(num_lists[i][1] + "," + num_lists[i][0])
                setText(0, num_lists[i][0])
                sleep(1000)
                click(500, 580)
                sleep(2000)
                setText(1, num_lists[i][1])
                sleep(1000)
                click('保存')
                sleep(5000)
            }
            if (text('联系人详情').exists() && id('com.android.contacts:id/gnQRcord').exists() || text('详情').exists() && text('通话记录').exists() && text('短信记录').exists()) {
                TKB.xgsrizhi("联系人详情")
                sleep(2000)
                back()
                sleep(2000)
                i++
                TKB.xgsrizhi("第" + i + "个")
                if (i >= num_lists.length) {
                    TKB.xgsrizhi("添加" + num + '联系人')
                    toastLog('添加完成')
                    sleep(2000)
                    TKB.qinglihh()
                    return true
                }
            }
        } catch (error) {
            sleep(2000)
            TKB.xgsrizhi(error)
        }
    }
}

//启动时间
function qdtimes(sbip) {
    TKB.xgsrizhi("检测通讯录")
    var z = TKB.huoqutxl()
    if (z == false || z != false && z < 5) {
        tjlxr()
    } else {
        TKB.xgsrizhi('已有' + z + '联系人')
    }
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


//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var chargetime = (new Date()).getTime()
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    back()
                    sleep(1000)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - chargetime > 10 * 60 * 1000 && sstt == 1 || sstt == 0) {
                    //上传电量信息
                    var dl_flag = device.isCharging()
                    var dl = device.getBattery()
                    if (dl > 100) {
                        dl_flag == true
                        dl == 100
                    }
                    TKB.xgsrizhi('上传充电状态' + dl_flag + '电量' + dl)
                    TKB.up_result(sbip, user_id, yhbh, dl_flag, dl)
                    chargetime = (new Date()).getTime()
                    sstt = 1
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false) {
                        TKB.xgsrizhi("继续等待任务")
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
        toastLog("执行等待任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.xgsrizhi("执行等待任务")
            TKB.qinglihh()
            var TR = (new Date()).getTime()
            var TY = (new Date()).getTime()
            qdtimes(sbip)
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            while (1) {
                if ((new Date()).getTime() - TR > 2 * 60 * 1000) {
                    renwus = TKB.huoqurw(sbip, user_id, yhbh)
                    TR = (new Date()).getTime()
                }
                if (renwus[0] != 99) {
                    log("已经不是等待任务了")
                    TKB.xgsrizhi("已经不是等待任务了")
                    break
                } else {
                    toastLog("等待任务中...")
                    TKB.xgsrizhi("等待任务中...")
                    sleep(3000)
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
            files.remove("/sdcard/dyrizhi.txt")
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