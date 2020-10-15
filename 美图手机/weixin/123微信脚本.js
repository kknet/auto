var TKB = require('/sdcard/tkb2.js')

var jqfayan = "大家好" //jqfayan微信建群后的发言
var maxqlrs = "85" // maxqlrs群聊最大人数
var TKB = require('/sdcard/tkb2.js')
var qunmz = '傻子群'//建群之后的群聊名字
var fayan = "大家好"; //fayan是扫码加入群里发的话
// var wxbbh = TKB.getVerName("微信"); //wxbbh微信版本号
var tpid = "1234" //图片名字
var mun = "0" //寻找二维码次数
var jietuid = "jietuid"; //截图的二维码图片
var lianjie = "https://weixin.qq.com/g/A2zO4f9e4rWCmTLB" //二维码链接
//fbwz 微信朋友圈发表文字
//pyqzfwz 微信腾讯新闻转发文字
//sum朋友圈已赞个数
var sum = 0;
var fbwz = '测试';
var pyqzfwz = '我的天啊！';
var timex = random(3000, 4000);
runtime.loadDex("二维码识别.dex");
importPackage(com.google.zxing);
importPackage(com.google.zxing.common);
importPackage(com.google.zxing.client.j2se);
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
//fbwz 微信朋友圈发表文字
//pyqzfwz 微信腾讯新闻转发文字
//sum朋友圈已赞个数
var sum = 0;
var fbwz = '测试';
var pyqzfwz = '我的天啊！';
var timex = random(3000, 4000);
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
//二维码生成图片
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

//获取微信账号,手机号
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
                var wxh = bounds(677, 228, 1037, 334).findOnce().text();
                var sjh = bounds(651, 379, 983, 485).findOnce().text();
                TKB.xgsrizhi("微信号：" + wxh);
                TKB.xgsrizhi("手机号：" + sjh);
                break;
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
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

//微信加群
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

// 朋友圈点赞
function dianzan() {
    if (id("android:id/text1").exists() && text("朋友圈").exists()) {
        TKB.xgsrizhi("朋友圈点赞");
        var i = 0;
        do {
            sleep(2000);
            if (i > random(2, 3)) {
                break;
            } else {
                comment = desc("评论").find();
                if (!comment.empty()) {
                    TKB.xgsrizhi("找到评论集合");
                    comment.forEach(item => {
                        TKB.xgsrizhi("找到一个评论框");
                        sj = random(0, 1, 2);
                        if (sj == 0) {
                            var b = item.click();
                            TKB.xgsrizhi(b ? "点击评论按钮成功" : "点击评论按钮失败");
                            sleep(200);
                            if (id("com.tencent.mm:id/i9").text("赞").exists()) {
                                id("com.tencent.mm:id/i9").text("赞").findOne().parent().click();
                                sleep(500);
                                sum++;
                            } else if (id("com.tencent.mm:id/i9").text("取消").exists()) {
                                item.click();
                            }
                        } else {
                            TKB.xgsrizhi("下一个");
                        }
                    })
                    TKB.xgsrizhi("此页点赞完成");
                } else {
                    TKB.xgsrizhi("没找到评论集合");
                }
            }
            i++
            TKB.xgsrizhi("今天已赞个数：" + sum);
        } while (className("android.widget.ListView").findOne().scrollForward());
    }
}
// 朋友圈浏览
function pyqliulan() {
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
            //通过 数量判断是否有小红点等
            var s = bounds(540, 1889, 810, 2040).findOne().child(0).child(0).childCount();
            // ss=2朋友圈有新消息去浏览
            if (s == 2) {
                TKB.xgsrizhi("朋友圈有新信息");
                if (text("微信").exists() && id("android:id/text1").exists()) {
                    TKB.xgsrizhi("点击发现");
                    id("com.tencent.mm:id/cl7").text("发现").findOne().parent().parent().click();
                    sleep(2000);
                }
                if (text("发现").exists() && id("android:id/text1").exists()) {
                    TKB.xgsrizhi("点击朋友圈");
                    click("朋友圈");
                    sleep(3000);
                }
                if (id("com.tencent.mm:id/fjw").exists() && text("朋友圈").exists()) {
                    TKB.xgsrizhi("查看新信息");
                    id("com.tencent.mm:id/fjw").findOne().click();
                    sleep(3000);
                }
                if (id("com.tencent.mm:id/b7a").exists() && text("消息").exists()) {
                    TKB.xgsrizhi("查看新信息");
                    back();
                    sleep(500);
                    dianzan()
                }
            } else if (s == 1) {
                TKB.xgsrizhi("朋友圈暂无新信息");
            }
        } catch (error) {
            sleep(1001);
            TKB.xgsrizhi(error);
        }
    }
}
//发朋友圈
function fapyq() {
    try {
        if (text("微信").exists() && id("android:id/text1").exists()) {
            TKB.xgsrizhi("点击发现");
            id("com.tencent.mm:id/cl7").text("发现").findOne().parent().parent().click();
            sleep(2000);
        }
        if (text("发现").exists() && id("android:id/text1").exists()) {
            TKB.xgsrizhi("点击朋友圈");
            click("朋友圈");
            sleep(2000);
        }
        if (id("com.tencent.mm:id/e0n").exists() && id("android:id/text1").exists() && text("朋友圈").exists()) {
            TKB.xgsrizhi("点击发朋友圈");
            // var abc = id("com.tencent.mm:id/baj").findOnce().text();
            desc("拍照分享").findOne().click();
            sleep(1000);
        }
        if (text("拍摄").exists() && text("从相册选择").exists()) {
            TKB.xgsrizhi("点击从相册选择");
            click("从相册选择");
            sleep(1000);
        }
        if (text("我知道了").exists()) {
            TKB.xgsrizhi("点击我知道了");
            click("我知道了");
            sleep(1000);
        }
        if (id("com.tencent.mm:id/djb").exists() && text("图片和视频").exists()) {
            //预览ID
            TKB.xgsrizhi("选择图片");
            id("com.tencent.mm:id/dj4").find().forEach(child => {
                child.click();
            });
            sleep(1000);
            id("com.tencent.mm:id/ch").click();
            sleep(1000);
            if (text("所在位置").exists() && text("谁可以看").exists()) {
                setText(fbwz);
                id("com.tencent.mm:id/ch").click();
                sleep(5000);
                TKB.xgsrizhi("已经发表朋友圈");
                dianzan();
            }
        }
    } catch (error) {
        sleep(1001);
        TKB.xgsrizhi(error);
    }
}
//发腾讯新闻
function zhuanfatxxw() {
    try {
        if (text("微信").exists() && id("android:id/text1").exists()) {
            TKB.xgsrizhi("点击微信");
            id("com.tencent.mm:id/cl7").text("微信").findOne().parent().parent().click();
            sleep(2000);
            TKB.xgsrizhi("点击搜索");
            click(850, 135);
            sleep(2000);
        }

        if (text("取消").exists()) {
            TKB.xgsrizhi("搜索腾讯新闻");
            click(520, 150);
            sleep(500);
            setText("腾讯新闻");
            sleep(2000);
            click(540, 400);
            sleep(2000);
        }
        if (text("未启用").exists() && text("启用该功能").exists()) {
            TKB.xgsrizhi("启用腾讯新闻");
            id("com.tencent.mm:id/g1x").text("启用该功能").findOne().parent().parent().click();
            sleep(2000);
            textContains("停用").waitFor();
            // text("停用").findOne().waitFor();
            if (text("接收新闻提醒").exists() && text("清空此功能消息记录").exists()) {
                TKB.xgsrizhi("点击腾讯新闻");
                var css = id("android:id/title").text("腾讯新闻").findOnce().bounds();
                click(css.centerX(), css.centerY());
                sleep(2000);
                //通过图标来判断是否推送
                if (id("android:id/text1").exists() && id("com.tencent.mm:id/eo4").exists() && id("com.tencent.mm:id/eo5").exists()) {
                    TKB.xgsrizhi("未推送，请稍后转发腾讯新闻");
                    sleep(2000);
                    back();
                    sleep(1000);
                    back();
                    sleep(1000);
                    back();
                    sleep(1000);
                    TKB.xgsrizhi("执行：" + ii);
                    fapyq();
                }
            }
        }
        while (1) {
            if (id("com.tencent.mm:id/g74").exists() && id("com.tencent.mm:id/g9i").exists()) {
                if (bounds(38, 952, 1042, 1379).exists()) {
                    click(540, 1150);
                    click(random(130,930), random(400,700));
                } else if (bounds(38, 358, 1042, 785).exists()) {
                    click(random(130,930), random(1000,1300));
                }
                // className("android.view.View").findOne().waitFor();
                sleep(5000);
            }

            if (className("android.view.View") && text("腾讯新闻").exists()) {
                TKB.xgsrizhi("浏览腾讯新闻");
                swipe(540, 1800, 540, 800, timex);
                sleep(2000);
                click(1000, 140);
                sleep(2000);
                click("分享到朋友圈");
                sleep(3000);
                if (text("所在位置").exists() && text("谁可以看").exists()) {
                    setText(pyqzfwz);
                    sleep(500);
                    id("com.tencent.mm:id/ch").click();
                    sleep(5000);
                    TKB.xgsrizhi("已经转发腾讯新闻");
                    break;
                }
            }
            if (text("轻触屏幕重新加载").exists() && text("出错了").exists()) {
                TKB.xgsrizhi("腾讯新闻加载出错");
                click("轻触屏幕重新加载");
                sleep(1000);
                back();
                sleep(1000);
                continue;
            }
        }
    } catch (error) {
        sleep(1001);
        TKB.xgsrizhi(error);
    }

}
//执行发微信发朋友圈或者转发腾讯新闻
function weixinpyq() {
    TKB.xgsrizhi("打开微信");
    launchApp("微信");
    sleep(4000);
    // var ii = 0;
    // ii==0 发表朋友圈
    // ii==1 转发腾讯新闻
    var ii = random(0, 1);
    var RT = (new Date()).getTime();
    var stt = random(15, 25);
    var TSD = (new Date()).getTime();
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出");
            TKB.qinglihh();
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
        if (ii == 0) {
            TKB.xgsrizhi("执行：" + ii);
            fapyq();
            return true;
        } else if (ii == 1) {
            TKB.xgsrizhi("执行：" + ii);
            zhuanfatxxw();
            return true;
        }
    }
}

module.exports = {
    'jietu': jietu, //截图
    'shengchengtp': shengchengtp, //二维码生成图片
    'huoquwxh': huoquwxh, ////获取微信账号,手机号
    'weixinjq': weixinjq, //微信建群
    'weixinjiaq': weixinjiaq, //微信加群
    'dianzan': dianzan, //朋友圈点赞
    'pyqliulan': pyqliulan, //朋友圈浏览
    'fapyq': fapyq, //发朋友圈
    'zhuanfatxxw': zhuanfatxxw, //发腾讯新闻
    'weixinpyq': weixinpyq, //执行发微信发朋友圈或者转发腾讯新闻
}