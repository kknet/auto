var TKB = require('/sdcard/tkb2.js')

//获取微信账号,手机号,版本号
function huoquwxh() {
    TKB.xgsrizhi("打开微信");
    launchApp("微信");
    sleep(4000);
    var RT = (new Date()).getTime();
    var stt = random(15, 25);
    var TSD = (new Date()).getTime();
    aa = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出");
            TKB.qinglihh();
            break;
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页");
            back();
            sleep(1000);
            TKB.qinglihh();
            sleep(3000);
            launch("");
            sleep(2000);
            TSD = (new Date()).getTime();
        }
        try {
            if (id("com.tencent.mm:id/cl7").exists() && id("android:id/text1").exists()) {
                TKB.xgsrizhi("点击微信");
                id("com.tencent.mm:id/cl7").text("我").findOne().parent().parent().click();
                sleep(2000);
            }
            if (text("设置").exists() && text("支付").exists()) {
                TKB.xgsrizhi("点击设置");
                click("设置");
                sleep(2000);
            }
            if (text("设置").exists() && text("切换帐号").exists() || id("android:id/text1").exists() && id("com.tencent.mm:id/d9").exists()) {
                TKB.xgsrizhi("点击帐号与安全");
                click("帐号与安全");
                sleep(2000);
            }
            if (text("帐号与安全").exists() && text("微信号").exists() && text("微信安全中心").exists()) {
                TKB.xgsrizhi("获取微信手机号");
                var wxh = id("android:id/summary").depth("16").findOnce().text();
                var sjh =  id("android:id/summary").depth("17").findOnce().text();
                TKB.xgsrizhi("微信号：" + wxh);
                TKB.xgsrizhi("手机号：" + sjh);
                back();
                TKB.xgsrizhi("点击关于微信");
                sleep(500);
                click("关于微信");
                sleep(3000);
                if (text("功能介绍").exists() && text("检查新版本").exists()) {
                    TKB.xgsrizhi("获取微信版本");
                    var wxbbhao = id("com.tencent.mm:id/ao").findOnce().text();
                    TKB.xgsrizhi("微信版本号" + wxbbhao);
                    back();
                    sleep(500);
                    back();
                    sleep(500);
                    back();
                    sleep(500);
                    break;
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
huoquwxh()