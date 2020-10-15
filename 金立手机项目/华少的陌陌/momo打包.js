var user = 'zhuce'
//更新脚本
function gxjiaoben(user) {
    // var mkgxs = mkgx()
    log("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.momo/files/perf/" + user + ".txt");
    while (1) {
        try {
            // var r = http.get("http://120.79.199.143/mubei/jinli/"+user+".txt");
            var r = http.get("https://milu1.oss-cn-hangzhou.aliyuncs.com/zhixing/" + user + ".txt");
            if (r.statusCode == 200) {
                var body = r.body.string()
                log("html = " + body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.momo/files/perf/" + user + ".txt")
                if (body == bb && files.exists("/sdcard/Android/data/com.xiaomi.momo/files/perf/momo" + user + ".js")) {
                    log("已经是最新版本44")
                } else {
                    log("版本更新")
                    sleep(3000)
                    // files.write("/sdcard/Android/data/com.xiaomi.momo/files/perf/"+user+".txt", body);
                    xiazaijb(body, user)
                    return "gengxin"
                }
                return 'mkgxs'
            } else {
                log("没网")
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(2000)
        }
        sleep(random(100, 5000))
    }
}


//下载脚本
function xiazaijb(url, user) {
    log("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.momo/files/perf/momo" + user + ".js";
    while (1) {
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.momo/files/perf/1-1.js");
                // log("停止当前运行的脚本")
                // exit()
                sleep(2000)
                files.write("/sdcard/Android/data/com.xiaomi.momo/files/perf/" + user + ".txt", url);
                break
            } else {
                log("网络异常");
                sleep(2000)
            };
        } catch (error) {
            log(error);
            sleep(2000)
        }
        sleep(random(100, 5000))
    }
    log("加载脚本完成")
}
function mains() {
    threads.start(function () {
        gxjiaoben(user)
        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.momo/files/perf/momo" + user + ".js")
    })
}
mains() 