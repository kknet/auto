"auto";

function main() {
    launchApp("微信");
    toast("打开微信");
    log("打开微信");
    sleep(5000);
    if (text("我知道了").findOne(2000)) {
        text("我知道了").findOne(2000).click();
        sleep(500);
        text("我知道了").findOne(2000).click();
    }
    if (className("android.widget.Button").text("登录").findOne(2000)) {
        toast("未登录微信");
        log("未登录微信");
        className("android.widget.Button").text("登录").waitFor();
        if (className("android.widget.Button").text("登录").findOne(2000)) {
            className("android.widget.Button").text("登录").findOne(2000).click();
        }
        if (className("android.widget.TextView").text("手机号登录").findOne(1000)) {
            log("手机号登录");
            toast("手机号登录");

            if (text("我知道了").exists()) {
                toastLog("我知道了")
                click(540, 1270)
                sleep(2000)
            }

            id("bem").setText("18597941432"); //手机号
            click("下一步");
            sleep(3000);
            id("bem").setText("LWJ122310#"); //密码
            sleep(2000);

        } else if (className("android.widget.TextView").text("微信号/QQ/邮箱登录").findOne(1000)) {
            log("微信号/QQ/邮箱登录")
            toast("微信号/QQ/邮箱登录")
            if (text("我知道了").findOne(2000)) {
                text("我知道了").findOne(2000).click();
            }

            var UserName = className("android.widget.EditText").text("请填写微信号/QQ号/邮箱").findOne();
            UserName.setText("15974152241"); //账号
            sleep(1500);
            var Password = bounds(286, 650, 1005, 736).findOne();
            Password.setText("hedesen.057420"); //密码
        }

        className("android.widget.Button").text("登录").findOne(2000).click()

        if (text("我知道了").findOne(2000)) {
            text("我知道了").findOne(2000).click();
        }
        if (text("允许").findOne(2000)) {
            text("允许").findOne(2000).click();
            sleep(500);
            text("允许").findOne(2000).click();
        }
        sleep(5000)

        if (className("android.view.View").text("拖动下方滑块完成拼图").findOne(2000)) {
            for (var ii = 1; ii < 99; ii++) {
                for (var iii = 1; iii < 99; iii++) {
                    if (className("android.view.View").text("拖动下方滑块完成拼图").findOne(2000)) {
                        swipe(232, 1040, 817, 1040, 1500); //从232，1040移动到817，1040
                        sleep(2500);
                        if (className("android.view.View").text("拖动下方滑块完成拼图").findOne(2000)) {
                            click(1000, 1150);
                            sleep(1000);
                        }
                    } else {
                        toast("滑动完成");
                        log("滑动完成");
                        break;
                    }
                }
                if (className("android.widget.TextView").bounds("418,965,823,1027").findOne(2000)) {
                    log("登录成功");
                    toast("登录成功");
                    break;
                } else if (className("android.widget.TextView").text("绑定手机号码").findOne(2000)) {
                    log("登录成功");
                    toast("登录成功");
                    break;
                }
                if (className("android.widget.TextView").text("登录失败").findOne(5000)) {
                    log("密码错误，重新登录");
                    toast("密码错误，重新登录");
                    click("确定");
                    sleep(500);
                    break;
                } else if (text("去安全中心").findOne(3000)) {
                    log("冻结，重新登录");
                    toast("冻结，重新登录");
                    text("取消").findOne(5000).click();
                    toastLog(read_delete());
                    break;
                }
            }
        } else if (text("是").findOne(2000)) {
            text("是").findOne(2000).click();
        }
    }
}