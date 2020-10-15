var TKB = require('/sdcard/tkb2.js')
//fbwz 微信朋友圈发表文字
//pyqzfwz 微信腾讯新闻转发文字
//sum朋友圈已赞个数
var sum = 0;
var fbwz = '测试';
var pyqzfwz = '我的天啊！';
var timex = random(3000, 4000);
//wxbbh微信版本号
var wxbbh = TKB.getVerName("微信");

//fapyq0是7.0.10发朋友圈
function fapyq0() {
    try {
        if (text("微信").exists() && id("android:id/text1").exists()) {
            TKB.xgsrizhi("点击发现");
            id("com.tencent.mm:id/dkb").text("发现").findOne().parent().parent().click();
            sleep(2000);
        }
        if (text("发现").exists() && id("android:id/title").exists()) {
            TKB.xgsrizhi("点击朋友圈");
            click("朋友圈");
            sleep(2000);
        }
        if (id("com.tencent.mm:id/baj").exists() && id("com.tencent.mm:id/s5").exists()) {
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
        if (id("com.tencent.mm:id/djr").exists() && text("我知道了").exists()) {
            TKB.xgsrizhi("点击我知道了");
            click("我知道了");
            sleep(1000);
        }
        if (id("com.tencent.mm:id/el9").exists() && text("图片和视频").exists()) {
            //预览ID
            TKB.xgsrizhi("选择图片");
            id("ge9").findOne().children().forEach(child => {
                var target = child.findOne(id("bws"));
                target.click();
            });
            sleep(1000);
            id("com.tencent.mm:id/ln").click();
            sleep(1000);
            if (text("所在位置").exists() && text("谁可以看").exists()) {
                setText(fbwz);
                id("com.tencent.mm:id/ln").click();
                sleep(5000);
                TKB.xgsrizhi("已经发表朋友圈");
            }
            do {
                sleep(2000);
                comment = desc("评论").find();
                if (!comment.empty()) {
                    TKB.xgsrizhi("找到评论集合");
                    comment.forEach(item => {
                        TKB.xgsrizhi("找到一个评论框");
                        var b = item.click();
                        TKB.xgsrizhi(b ? "点击评论成功" : "点击评论失败");
                        sleep(1000);
                        if (id("com.tencent.mm:id/eym").text("赞").exists()) {
                            id("com.tencent.mm:id/eym").text("赞").findOne().parent().click();
                            sleep(1000);
                            sum++;
                            TKB.xgsrizhi("已赞个数：" + sum);
                        }
                    })
                    TKB.xgsrizhi("点赞完成");
                    return true;
                }
            } while (className("android.widget.ListView").findOne().scrollForward());
            return false;
        }
    } catch (error) {
        sleep(1001);
        TKB.xgsrizhi(error);
    }
}

//zhuanfatxxw0是7.0.10转发腾讯新闻
function zhuanfatxxw0() {
    try {
        if (text("微信").exists() && id("android:id/text1").exists()) {
            TKB.xgsrizhi("点击微信");
            id("com.tencent.mm:id/dkb").text("微信").findOne().parent().parent().click();
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
            id("com.tencent.mm:id/d9").text("启用该功能").findOne().parent().parent().click();
            sleep(2000);
            if (text("接收新闻提醒").exists() && text("清空此功能消息记录").exists()) {
                TKB.xgsrizhi("点击腾讯新闻");
                id("android:id/title").text("腾讯新闻").findOne().parent().parent().click();
                sleep(2000);
                if (id("com.tencent.mm:id/e_v").exists()) {
                    TKB.xgsrizhi("未推送，请稍后转发腾讯新闻");
                    sleep(2000);
                    back();
                    sleep(1000);
                    back();
                    sleep(1000);
                    TKB.xgsrizhi("执行：" + ii);
                    fapyq0();
                }
            }
        } else if (id("android:id/text1").exists()) {
            if (id("com.tencent.mm:id/e_v").exists()) {
                TKB.xgsrizhi("未推送，请稍后转发腾讯新闻");
                sleep(2000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                TKB.xgsrizhi("执行：" + ii);
                fapyq0();
            }
        }
        while (1) {
            if (id("com.tencent.mm:id/ari").exists() && id("com.tencent.mm:id/dd").exists()) {
                if (bounds(38, 952, 1042, 1379).exists()) {
                    click(540, 1150);
                } else if (bounds(38, 358, 1042, 785).exists()) {
                    click(540, 622);
                }
                className("android.view.View").waitFor();
                sleep(5000);
            }

            if (className("android.view.View") && text("热门推荐").exists()) {
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
                    id("com.tencent.mm:id/ln").click();
                    sleep(5000);
                    TKB.xgsrizhi("已经转发腾讯新闻");
                    break;
                }
            }
            if (className("android.view.View") && text("热门推荐").exists()) {
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
                    id("com.tencent.mm:id/ln").click();
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
        if (wxbbh == "7.0.10") {
            TKB.xgsrizhi("执行版本号：" + wxbbh);
            if (ii == 0) {
                TKB.xgsrizhi("执行：" + ii);
                fapyq0();
                return true;
            } else if (ii == 1) {
                TKB.xgsrizhi("执行：" + ii);
                zhuanfatxxw0();
                return true;
            }
        } else if (wxbbh == "7.0.13") {
            TKB.xgsrizhi("执行版本号：" + wxbbh);
            if (ii == 0) {
                TKB.xgsrizhi("执行：" + ii);
                fapyq1();
                return true;
            } else if (ii == 1) {
                TKB.xgsrizhi("执行：" + ii);
                zhuanfatxxw1();
                return true;
            }
        } else {
            TKB.xgsrizhi("微信版本号不匹配" + wxbbh)
            return false;
        }
    }
}