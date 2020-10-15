// var ss = className('android.widget.TextView').text('发现').findOne().bounds();
// click(ss.centerX(), ss.centerY());
var TKB = require('/sdcard/tkb2.js');
var sum = '0';
var i = '0';

function dianzan() {
    if (id("com.tencent.mm:id/e0n").exists() && id("android:id/text1").exists() && text("朋友圈").exists()) {
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
                        sj = random(0, 1, 2)
                        if (sj == 0) {
                            var b = item.click();
                            TKB.xgsrizhi(b ? "点击评论按钮成功" : "点击评论按钮失败");
                            sleep(200);
                            if (id("com.tencent.mm:id/i9").text("赞").exists()) {
                                id("com.tencent.mm:id/i9").text("赞").findOne().parent().click();
                                sleep(500);
                                sum++;
                                TKB.xgsrizhi("今天已赞个数：" + sum);
                            } else if (id("com.tencent.mm:id/i9").text("取消").exists()) {
                                item.click()
                            }
                        } else {}
                    })
                    TKB.xgsrizhi("此页点赞完成");
                } else {
                    TKB.xgsrizhi("没找到评论集合");
                }
            }
            i++
        } while (className("android.widget.ListView").findOne().scrollDown());
    }
}
dianzan()

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