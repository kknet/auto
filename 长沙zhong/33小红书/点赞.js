var workLink;
var likeMin = 500;
var likePercent = 10;

//点赞
function workLike() {
    // var xs = TKB.zhid(sbip, run_id)
    if (xs["作品链接"] == 0 || xs["作品链接"] == '0') {
        TKB.xgsrizhi("未获取到作品链接");
    } else {
        workLink = xs["作品链接"];
        TKB.xgsrizhi("获取到作品链接为" + workLink);
    }
    var statrtTime = (new Date()).getTime();
    var RT = (new Date()).getTime()
    var failTime = 0;
    if (workLink != undefined) {
        while (1) {
            try {
                if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                    TKB.xgsrizhi("时间够了退出")
                    TKB.qinglihh()
                    break
                }
                if ((new Date()).getTime() - statrtTime > 5 * 60 * 1000) {
                    TKB.xgsrizhi("超时跳出");
                    TKB.qinglihh()
                    sleep(2000)
                }
                TKB.qinglihh();
                sleep(2000);
                setClip(workLink);
                launch('com.xingin.xhs');
                TKB.xgsrizhi("打开小红书")
                sleep(12000);
                popUp()
                sleep(3000)
                if (text("立即查看").exists()) {
                    sleep(3000)
                    click("立即查看")
                    TKB.xgsrizhi("点击立即查看")
                    sleep(10000);
                    for (let i = 0; i < 3; i++) {
                        swipe(random(500, 700), 1600, random(500, 700), 400, 2000)
                        sleep(2000);
                        swipe(random(500, 700), 400, random(500, 700), 1600, 2000)
                        sleep(2000);
                    }
                    likePercent = 100;
                    likeMin = 0;
                    TKB.xgsrizhi("向下滑动评论")
                    sliding(1);
                    // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                    break
                } else {
                    TKB.xgsrizhi("失败")
                    failTime++;
                    if (failTime >= 3) {
                        KB.xgsrizhi("失败次数3次 退出")
                        break;
                    }
                }
            } catch (error) {
                TKB.xgsrizhi(error);
            }

        }
        if (failTime >= 3) {
            TKB.qinglihh();
            sleep(2000);
            TKB.xgsrizhi("网络异常", "点赞任务失败")
        }
    }
}


workLike()