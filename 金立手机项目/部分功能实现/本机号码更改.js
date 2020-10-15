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


//获取通讯录判断是否有通讯录
function huoqutxl(){
    try {
        log("获取通讯录")
        importClass(android.database.Cursor);
        var cursor = context.getContentResolver().query(android.provider.ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
        var zhs = {}
        var txl = 0
        while (cursor.moveToNext()) {
            //读取通讯录的姓名
            var name = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
            //读取通讯录的号码
            var number = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.NUMBER));
            log(name)
            log(number)
            if (name != number && name == '本机号码') {
                log("[名字]：" + name + " [号码]：" + number);
                zhs[name] = number
            } else {
                log("[号码]：" + number);
            }
            txl = txl + 1
        }
        if (txl == 0){
            return false
        }else{
            log(zhs)
            return zhs
        }
    } catch (error) {
        log("获取通讯录报错")
        log(error)
        sleep(1000)
        return false
    }
}
//上传手机号码
function upsjhm(sbip, user_id, yhbh, phone) {
    log("上传手机号码" + phone)
    var Tb = (new Date()).getTime()
    log(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 60 * 1000) {
                log("超时更新完成")
                break
            }
            // var url = "http://"+sbip+"/api.php/potal/meitu/qidongjaoben?user="+yhname+"&der_id="+yhbh
            var url = "http://" + sbip + "/api.php/potal/meitu/upphone?user_id=" + user_id + "&der_id=" + yhbh + "&remarks=&phone=" + phone
            log("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                log(r_obj)
                if (r_obj["code"] == 0) {
                    toastLog("上传手机号码成功")
                    return true
                }
            } else {
                log("没网")
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传手机号中...")
        sleep(random(100, 10000))
    }
}

var z = {"本机号码":18597941555}
//获取上传本机号码
function phoneNumber() {
    launch(packageName)
    TKB.xgsrizhi("启动信息")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var TSD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时")
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            var phonenum = z['本机号码']
            toast(phonenum)
            TKB.xgsrizhi("本机号码"+phonenum)
            files.write("/sdcard/1.txt", phonenum)
            upsjhm(sbip, user_id, yhbh, phonenum)
            TKB.xgsrizhi("执行完毕退出")
            TKB.qinglihh()
            return true
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}
phoneNumber()