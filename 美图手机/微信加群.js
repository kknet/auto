var TKB = require('/sdcard/tkb2.js')
var fayan = '1';
//fayan是扫码加入群里发的话
var wxbbh = "Version 7.0.13"
//微信版本号
function shengchengtp() {
    TKB.xgsrizhi("生成图片");
    var tpid = "tpid" //图片名字
    var lianjie = "https://weixin.qq.com/g/A7n9NwWJsQdvMwfP" //二维码链接
    while (true) {
        var im = images.load("http://qr.liantu.com/api.php?&w=200&text=" + lianjie)
        if (im != null && im != "") {
            images.save(im, "/sdcard/" + tpid + ".png")
            TKB.xgsrizhi("保存图片到本地：" + tpid + ".png");
            break;
        } else {
            TKB.xgsrizhi("图片下载失败");
            break;
        }
    }
}


function weixinjiaq() {
    TKB.xgsrizhi("打开微信");
    launchApp("微信");
    sleep(4000);
    var RT = (new Date()).getTime();
    var stt = random(15, 25);
    var TSD = (new Date()).getTime();
    if (!requestScreenCapture()) {
        alert("请求截图权限失败！");
        exit();
    }
    if (wxbbh == "Version 7.0.10") {
        TKB.xgsrizhi("执行版本号：" + wxbbh);
        shengchengtp();
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
                if (TKB.qinglihh()) {

                }
                TKB.qinglihh();
                sleep(3000);
                launch("");
                sleep(2000);
                TSD = (new Date()).getTime();
            }
            try {
                sleep(3000);
                if (id("com.tencent.mm:id/dkb").exists() && id("android:id/text1").exists() || id("com.tencent.mm:id/cl7").exists() && id("android:id/text1").exists()) {
                    TKB.xgsrizhi("点击微信");
                    id("com.tencent.mm:id/dkb").text("微信").findOne().parent().parent().click() || id("com.tencent.mm:id/cl7").text("微信").findOne().parent().parent().click();
                    sleep(2000);
                    TKB.xgsrizhi("点击+号");
                    click(1000, 140);
                    sleep(1000);
                    TKB.xgsrizhi("点击扫一扫");
                    click(815, 600);
                    sleep(2000);
                }

                if (id("com.tencent.mm:id/geo").exists() && id("com.tencent.mm:id/gg2").exists()) {
                    TKB.xgsrizhi("选择本地图片");
                    id("com.tencent.mm:id/gg2").findOne().click();
                    sleep(2000);
                    id("com.tencent.mm:id/pf").text("所有图片").waitFor();
                }
                if (id("com.tencent.mm:id/pf") && id("com.tencent.mm:id/aoq").exists()) {
                    TKB.xgsrizhi("选择第一张图片");
                    click(400, 350);
                }
                if (id("com.tencent.mm:id/aqd").exists() && id("com.tencent.mm:id/lt").exists()) {
                    click(470, 1970);
                    TKB.xgsrizhi("在群聊发一句话");
                    sleep(1000);
                    setText(fayan);
                    sleep(500);
                    click("发送");
                    break;
                }

            } catch (error) {
                sleep(1001)
            }
        }
    } else if (wxbbh == "Version 7.0.13") {
        TKB.xgsrizhi("执行版本号：" + wxbbh);
        shengchengtp();
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
                if (TKB.qinglihh()) {

                }
                TKB.qinglihh();
                sleep(3000);
                launch("");
                sleep(2000);
                TSD = (new Date()).getTime();
            }
            try {
                sleep(1000);
                if (id("com.tencent.mm:id/cl7").exists() && id("android:id/text1").exists()) {
                    TKB.xgsrizhi("点击微信");
                    id("com.tencent.mm:id/cl7").text("微信").findOne().parent().parent().click();
                    sleep(2000);
                    TKB.xgsrizhi("点击+号");
                    click(1000, 140);
                    sleep(1000);
                    TKB.xgsrizhi("点击扫一扫");
                    click(815, 600);
                    sleep(2000);
                }

                if (id("com.tencent.mm:id/f7d").exists() && id("com.tencent.mm:id/duu").exists()) {
                    TKB.xgsrizhi("选择本地图片");
                    id("com.tencent.mm:id/f7d").findOne().click();
                    sleep(2000);
                    id("com.tencent.mm:id/h3").text("所有图片").findOne().waitFor();
                }
                if (id("com.tencent.mm:id/h3") && id("com.tencent.mm:id/djk").exists()) {
                    TKB.xgsrizhi("选择第一张图片");
                    click(400, 350);
                    sleep(1000);
                }
                if (id("com.tencent.mm:id/aqd").exists() && id("com.tencent.mm:id/lt").exists()) {
                    click(470, 1970);
                    TKB.xgsrizhi("在群聊发一句话");
                    sleep(1000);
                    setText(fayan);
                    sleep(500);
                    click("发送");
                    break;
                }

            } catch (error) {
                sleep(1001)
            }
        }
    } else {
        TKB.xgsrizhi("微信版本号不匹配");
    }

}
weixinjiaq()