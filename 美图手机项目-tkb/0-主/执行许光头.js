

try {
        log("123")
        sleep(3000)
        auto.waitFor()
        runtime.loadDex("二维码识别.dex");
        log("吊死TKB")
        var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
        var sbxx_table = sbxx.split("-")
        log("读取到的值："+ sbxx)
        var user = sbxx_table[0]    
        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu"+user+".js")
}catch (error) {
        sleep(1000)
        log("小老弟出错了："+error);
        files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
}







