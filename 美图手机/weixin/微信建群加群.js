
var jqfayan = "大家好" //jqfayan微信建群后的发言
var maxqlrs = "85" // maxqlrs群聊最大人数
var TKB = require('/sdcard/tkb2.js')
var qunmz = '傻子群'//建群之后的群聊名字
var fayan = "大家好"; //fayan是扫码加入群里发的话
var wxbbh = TKB.getVerName("微信"); //wxbbh微信版本号
var tpid = "1234" //图片名字
var mun = "0" //寻找二维码次数
var jietuid = "jietuid"; //截图的二维码图片
var lianjie = "https://weixin.qq.com/g/A2zO4f9e4rWCmTLB" //二维码链接
var wxbbh = "7.0.13"; //微信版本号
// var wxbbh =huoquwxbbh();
runtime.loadDex("二维码识别.dex");
importPackage(com.google.zxing);
importPackage(com.google.zxing.common);
importPackage(com.google.zxing.client.j2se);
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}


function shengchengtp() {
    TKB.xgsrizhi("生成图片");
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


//截图
function jietu() {
    TKB.xgsrizhi("截图");
    sleep(2000);
    var imm = captureScreen();
    images.save(imm, "/sdcard/" + jietuid + ".png"); //data:image/png;base64,
    sleep(1000);
    var imgPath = "/sdcard/" + jietuid + ".png";
    var pixels = images.readPixels(imgPath);
    var w = pixels.width;
    var h = pixels.height;
    var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)));
    var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
    basc = qrCodeResult.getText();
    TKB.xgsrizhi("二维码链接" + basc);
}

//微信建群
function weixinjq() {
    TKB.xgsrizhi("执行微信建群");
    launchApp("微信");
    TKB.xgsrizhi("打开微信");
    sleep(4000);
    var RT = (new Date()).getTime();
    var stt = random(15, 25);
    var TSD = (new Date()).getTime();
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
                id("com.tencent.mm:id/cl7").text("微信").findOne().parent().parent().click();
                sleep(2000);
                TKB.xgsrizhi("点击+号");
                click(1000, 140);
                sleep(1000);
            }
            //遍历选择好友 
            if (text("发起群聊").exists() && text("添加朋友").exists()) {
                TKB.xgsrizhi("发起群聊");
                click(880, 300);
                sleep(2000);
                var i = id("com.tencent.mm:id/f70").checked(false).find();
                TKB.xgsrizhi("好友人数：" + i.length);
                for (var z = 0; z <= i.length; z++) {
                    if (id("com.tencent.mm:id/f70").exists()) {
                        try {
                            var css = id("com.tencent.mm:id/f70").checked(false).findOnce().bounds()
                            click(css.centerX(), css.centerY());
                            sleep(500);
                        } catch (error) {
                            sleep(1001);
                            log(error);
                        }
                    }
                }
                id("com.tencent.mm:id/ch").findOne().click();
                sleep(2000);
            }
            //群聊里面的语音+号ID
            if (id("com.tencent.mm:id/am9").exists() && id("com.tencent.mm:id/ajp").exists()) {
                click(470, 1970);
                TKB.xgsrizhi("在群聊发一句话");
                sleep(1000);
                setText(jqfayan);
                sleep(500);
                click("发送");
                sleep(1000);
                click(1000, 190);
                text("群聊名称").waitFor();
                if (text("群二维码").exists() && text("群聊名称")){
                    TKB.xgsrizhi("设置微信群名");
                    var qlmz = text("群聊名称").findOnce().bounds()
                    click(qlmz.centerX(), qlmz.centerY());
                    sleep(2000);
                    click(400,370);
                    setText(qunmz);
                    text("保存").click();
                    sleep(500);
                }
                while (1) {
                    if (id("android:id/text1").exists() && id("com.tencent.mm:id/ezv").exists()) {
                        if (text("群二维码").exists()) {
                            var list = text("群二维码").findOnce().parent().parent().bounds();
                            click(list.centerX(), list.centerY());
                            className("android.widget.FrameLayout").depth(11).waitFor();
                            break;
                        } else {
                            swipe(440, 1500, 440, random(700, 800), random(500, 1000));
                            continue;
                        }
                    }
                }
            }
            if (id("android:id/text1").exists() && text("群二维码名片")) {
                var arr = id("com.tencent.mm:id/ek0").findOne().text();
                var shixiao = arr.split("(")[1].split(")")[0]
                TKB.xgsrizhi("二维码有效期：" + shixiao);
                TKB.xgsrizhi("等待二维码出现");
                jietu();
                back();
                sleep(500);
                while (1) {
                    if (id("android:id/text1").exists() && id("com.tencent.mm:id/ezv").exists()) {
                        if (text("保存到通讯录").exists()) {
                            var xx = text("保存到通讯录").findOnce().parent().parent().child(1).desc();
                            if (xx == "已关闭") {
                                var list = text("保存到通讯录").findOnce().parent().parent().child(1).bounds();
                                click(list.centerX(), list.centerY());
                                var yy = text("保存到通讯录").findOnce().parent().parent().child(1).desc();
                                if (yy == "已关闭") {
                                    TKB.xgsrizhi("此群已保存到通讯录");
                                    continue;
                                }
                                TKB.xgsrizhi("此群已保存到通讯录");
                            } else if (xx == "已开启") {
                                TKB.xgsrizhi("此群已保存到通讯录");
                            } else {
                                TKB.xgsrizhi("群聊保存失败");
                            }
                            break;
                        } else {
                            swipe(440, 1500, 440, random(700, 800), random(500, 1000));
                            continue;
                        }
                    }
                }
                break;
            }
        } catch (error) {
            sleep(1001);
            TKB.xgsrizhi(error);
        }
    }
}


//微信建群
function weixinjiaq() {
    TKB.xgsrizhi("执行微信加群");
    launchApp("微信");
    TKB.xgsrizhi("打开微信");
    sleep(4000);
    var RT = (new Date()).getTime();
    var stt = random(15, 25);
    var TSD = (new Date()).getTime();
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
            if (id("com.tencent.mm:id/h3").exists() && id("com.tencent.mm:id/djk").exists()) {
                TKB.xgsrizhi("选择第一张图片");
                click(400, 350);
                sleep(1000);
                if (text("未发现二维码 / 条码 / 小程序码").exists() && id("com.tencent.mm:id/duu").exists()) {
                    click(random(150, 850), random(500, 1500));
                    shengchengtp();
                    mun++
                    if (mun > 2) {
                        TKB.xgsrizhi("未找到二维码");
                        return false;
                    } else {
                        continue;
                    }
                }
                if (id("com.tencent.mm:id/am9").exists() && id("com.tencent.mm:id/ajp").exists()) {
                    TKB.xgsrizhi("已");
                    click(470, 1970);
                    TKB.xgsrizhi("在群聊发一句话");
                    sleep(1000);
                    setText(fayan);
                    sleep(500);
                    click("发送");
                    return true;
                }else{
                    text("确认加入群聊").findOnce.waitFor();
                }
            }
            if (text("确认加入群聊").exists() && text("加入该群聊").exists()) {
                var arr = bounds(0, 610, 1080, 676).findOne().text();
                TKB.xgsrizhi("未找到二维码");
                var qlrs = arr.split("（共")[1].split("人）")[0]
                TKB.xgsrizhi("此群总共：" + ing(qlrs) + 1 + "人");
                if (qlrs > maxqlrs) {
                    TKB.xgsrizhi("群人数上限");
                    return false;
                } else {
                    click("加入该群聊");
                    sleep(500);
                    TKB.xgsrizhi("加入该群聊");
                    click(470, 1970);
                    TKB.xgsrizhi("在群聊发一句话");
                    sleep(1000);
                    setText(fayan);
                    sleep(500);
                    click("发送");
                    return true;
                }
            }
            if (id("com.tencent.mm:id/aqd").exists() && id("com.tencent.mm:id/lt").exists()) {
                click(470, 1970);
                TKB.xgsrizhi("在群聊发一句话");
                sleep(1000);
                setText(fayan);
                sleep(500);
                click("发送");
                return true;
            } else if (text("二维码已过期").exists()) {
                TKB.xgsrizhi("二维码已过期");
                return false;
            }
        } catch (error) {
            sleep(1001)
        }
    }
}


// weixinjq()
// weixinjiaq()