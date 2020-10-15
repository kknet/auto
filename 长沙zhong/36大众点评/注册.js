//大众点评弹窗
function allJudge() {
    if (text("温馨提示").exists()) {
        TKB.xgsrizhi("点击同意并继续")
        click("同意并继续")
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (text("温馨提示").exists()) {
        TKB.xgsrizhi("点击同意")
        click("同意")
        sleep(2000)
    }
    if (text("立刻升级").exists()) {
        TKB.xgsrizhi("点击关闭")
        id("com.dianping.v1:id/update_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("领取成功").exists()) {
        TKB.xgsrizhi("点击知道了")
        click("知道了")
        sleep(2000)
    }
    if (id("com.dianping.v1:id/operate_btn").exists()) {
        TKB.xgsrizhi("点击关闭新人红包")
        id("com.dianping.v1:id/operate_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("立即领取").exists() && id("com.dianping.v1:id/stimulate_cross_icon").exists()) {
        TKB.xgsrizhi("点击关闭")
        id("com.dianping.v1:id/stimulate_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("你的专属礼包").exists()) {
        TKB.xgsrizhi("点击关闭")
        click(974, 482)
            // desc("关闭").findOnce().click()
        sleep(2000)
    }
}

//大众点评注册
function login() {
    TKB.xgsrizhi("大众点评登录")
    launch("com.dianping.v1")
    sleep(13000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = "18905870854"
    var yzm = "123456"
    var is_verify = 3;
    var is_send = false;
    // var xs = zhid(sbip, run_id)
    while (true) {
        try {
            allJudge()
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh("com.dianping.v1")
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh("com.dianping.v1")
                sleep(3000)
                launch("com.dianping.v1")
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("立即登录").exists()) {
                TKB.xgsrizhi("点击立即登录")
                click("立即登录")
                sleep(6000)
            }
            if (text("登录领奖").exists()) {
                TKB.xgsrizhi("点击登录领奖")
                click("登录领奖")
                sleep(6000)
            }
            if (text("首页").exists() && text("我的").exists()) {
                TKB.xgsrizhi("点击我的")
                click("我的")
                sleep(3000)
            }
            if (text("点击登录").exists()) {
                TKB.xgsrizhi("点击重新返回首页登录")
                click("首页")
                sleep(3000)
            }
            if (text("个人主页").exists()) {
                TKB.xgsrizhi("登录成功")
                sleep(2000)
                return true
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh("com.dianping.v1")
                return false
            }
            if (text("手机号登录").exists()) {
                click(575, 1485)
                TKB.xgsrizhi("点击手机号登录")
                sleep(2000);
            }
            if (text("手机号登录/注册").exists() &&
                text("请输入手机号").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh("com.dianping.v1")
                    sleep(10000)
                    launch("com.dianping.v1")
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue;
                }
                // 上传该应用注册的手机号
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(0, zh);
                sleep(5000)
                click("下一步")
                is_send = true;
                TKB.xgsrizhi("点击下一步")
                sleep(random(10000, 15000));
            }
            if (text("验证码登录").exists() && (text("获取验证码").exists() || textStartsWith("重新发送").exists())) {
                if (text('获取验证码').exists() && is_send == false) {
                    setText(0, '')
                    sleep(2000)
                    click('获取验证码')
                    TKB.xgsrizhi("点击重新获取验证码")
                    is_verify--
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                if (text('获取验证码').exists() && is_send == true) {
                    click('获取验证码')
                    TKB.xgsrizhi("点击获取验证码")
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("大众点评")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh("com.dianping.v1")
                    sleep(10000)
                    launch("com.dianping.v1")
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    if (is_send == true) {
                        TKB.xgsrizhi("输入验证码" + yzm)
                        setText(0, yzm);
                        sleep(3000);
                        if (text("登录").exists()) {
                            TKB.xgsrizhi("点击登录")
                            text("登录").findOnce().click()
                            sleep(3000)
                        }
                        is_send = false;
                    }
                }
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}


login()