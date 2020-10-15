var TKB = require('/sdcard/tkb2.js')
//获取微信版本
function huoquwxbbh() {
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
            if (text("微信").exists() && id("com.tencent.mm:id/cl7").exists()) {
                TKB.xgsrizhi("点击我");
                id("com.tencent.mm:id/cl7").text("我").findOne().parent().parent().click();
                sleep(2000);
            }
            if (text("设置").exists() && text("支付").exists()) {
                TKB.xgsrizhi("点击设置");
                click("设置");
                sleep(2000);
            }
            if (text("设置").exists() && text("切换帐号").exists()) {
                TKB.xgsrizhi("点击关于微信");
                click("关于微信");
                sleep(2000);
                text("微信 WeChat").findOne().wartFor()
            }
            if (text("功能介绍").exists() && text("检查新版本").exists()) {
                TKB.xgsrizhi("获取微信版本");
                var bbhao = id("com.tencent.mm:id/ao").findOnce().text();
                TKB.xgsrizhi("微信版本号" + bbhao);
                return bbhao;
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

function qqqzzz() {
    var wxbbh = huoquwxbbh();
    if (wxbbh == "Version 7.0.10") {
        TKB.xgsrizhi("执行版本号：" + wxbbh);
    } else if (wxbbh == "Version 7.0.13") {
        TKB.xgsrizhi("执行版本号：" + wxbbh);
    } else {
        TKB.xgsrizhi("微信版本号不匹配");
    }
}
qqqzzz()