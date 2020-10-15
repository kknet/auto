var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
//滑块
function get_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
        // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        var clip = images.clip(src, 47, 257, 985, 574)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "ks",
            image: open(imgFile),
            type: 'file'
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
        }
    } catch (error) {
        TKB.set_log(error)
    }
}


function zonghe() {
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.set_log("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.set_log("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    // if (desc("邀请好友赚36元").exists()) {
    //     TKB.set_log("签到成功")
    //     click(120,340)
    //     sleep(1000)
    // }
    if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
        click('同意并继续')
        sleep(2000)
    }
    if (text('禁止').exists() && text('始终允许').exists()) {
        click('始终允许')
        sleep(2000)
    }
    if (text('阅读完整版《隐私权保护政策》').exists() && text('用户隐私政策').exists()) {
        click('同意并继续')
        sleep(2000)
    }
    if (text('恭喜收到现金红包').exists() && text('当天可提现').exists()) {
        id('com.kuaishou.nebula:id/close').findOnce().click()
        sleep(2000)
    }
    if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
        click('同意并继续')
        sleep(2000)
    }

    if (text('完善资料').exists() && text('填写个人资料更容易获得关注').exists() && text('跳过').exists()) {
        click('跳过')
        sleep(1500)
    }
    if (text('通讯录').exists() && text('跳过').exists() && text('看看通讯录中谁在玩快手').exists()) {
        click('跳过')
        sleep(1500)
    }
    if (id('com.kuaishou.nebula:id/comment_header').exists() || id('com.kuaishou.nebula:id/panel_background').exists() || id('com.kuaishou.nebula:id/menu_layout_container').exists()) {
        click(980, 350)
        sleep(1000)
    }
    if (id('com.kuaishou.nebula:id/close').exists()) {
        TKB.set_log('关闭')
        id('com.kuaishou.nebula:id/close').findOnce().click()
        sleep(1000)
    }
    if (text('我知道了').exists()) {
        text('我知道了').findOnce().click()
    }
    if (text('网络连接失败，请稍后重试').exists()) {
        click('点击重试')
        toastLog('检查网络')
        sleep(3000)
    }
    if (text('快手用户调研').exists() && textContains('您对快手App是否满意').exists() && textContains('您会向亲友推荐快手App吗').exists()) {
        TKB.set_log("快手调研")
        click(130, 370);
        sleep(2000)
    }
    if (id('com.kuaishou.nebula:id/photo_ad_title').exists()) {
        back()
        sleep(2000)
    }
    if (text('设置青少年模式').exists() && text('为呵护未成年人健康成长，快手特别推出青少年模式，该模式下部分功能无法正常使用。请监护人主动选择，并设置监护密码。').exists() && text('我知道了').exists()) {
        text('我知道了').findOnce().click()
        sleep(4000)
    }

    if (text('现在就开始拍摄').exists() && text('开启以下权限，记录和分享美好生活').exists() && text('开启相机').exists() && text('开启录音').exists()) {
        back();
        sleep(4000)
    }
    if (desc('微信').exists() && desc('面对面邀请').exists() && desc('QQ') && desc("复制链接").exists()) {
        back();
        sleep(1500)
    }
    if (desc('166签到可领').exists() && desc('3662天').exists() && desc('6666天').exists()) {
        click(140, 340);
        sleep(1000);
    }
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.set_log("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.set_log("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        TKB.set_log("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.set_log("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.set_log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.set_log("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.set_log("网络连接错误");
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.set_log("确认");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.set_log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.set_log("同步到今日头条");
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.set_log("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.set_log("取消");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.set_log("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.set_log("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.set_log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
    if (text("立即赠送").exists()) {
        TKB.set_log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.set_log("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.set_log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.set_log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        TKB.set_log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//快手登录上传信息
function kszc() {
    TKB.set_log("快手极速版注册")
    var bb = TKB.getVerName("快手极速版")
    if (bb != "2.4.1.283" && bb != false) {
        log("快手极速版的版本不对")
        TKB.xiezai(dqbaoming)
    }
    var baom = getPackageName("快手极速版")
    if (baom == null) {
        var bbd = TKB.wdjxiazai("快手极速版", "2.4.1.283")
        if (bbd == false) {
            log("没安装成功快手极速版")
            return false
        }
    }
    sleep(2000)
    launch("com.kuaishou.nebula") // 重新打开快手
    sleep(5000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zh = '1';
    var yzm = '0000';
    var bb = 0;
    var tem = 0;
    var cc = 0
    var checked = 0
    var y = 1
    var z = 1
    var x = 1
    let login = 0
    let count = 0
    while (1) {
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没注册成功")
            back()
            sleep(1000)
            TKB.clear("com.kuaishou.nebula")
            sleep(3000)
            launch("com.kuaishou.nebula")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (tem = 0) {
            if (id('com.kuaishou.nebula:id/left_btn').exists()) {
                TKB.set_log('点击菜单')
                id('com.kuaishou.nebula:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (desc('头像').exists()) {
                TKB.set_log("登录成功")
                toastLog("登录成功")
                return true
            }
            tem = 1
        }
        // 判断用户有没有登录
        if (id("com.kuaishou.nebula:id/login_text").exists() && id('com.kuaishou.nebula:id/action_bar_left_logo').exists() && z == 1) {
            id("com.kuaishou.nebula:id/login_text").findOnce().click()
            toastLog('开始登录')
            TKB.set_log("开始登录")
            sleep(3500)
            z = 0
        }
        // 用户没有登录开始用手机号码登录
        if (text('手机号登录').exists() && id('com.kuaishou.nebula:id/full_screen_login_logo') && login == 0) {
            toastLog('开始手机登录');
            TKB.set_log("手机号登录")
            text('手机号登录').findOnce().parent().click();
            sleep(4500);
            login = 1
        }

        // 勾选同意按钮
        if (id('com.kuaishou.nebula:id/protocol_checkbox').exists() && x == 1) {
            id('com.kuaishou.nebula:id/protocol_checkbox').findOnce().click();
            TKB.set_log("勾选同意按钮")
            sleep(3000);
            x = 0
        }

        // 直接本机登录
        if (text('本机一键登录').exists() || text('其他登录方式').exists()) {
            TKB.set_log("本机一键登录")
            click('本机一键登录');
            sleep(3000)
        }

        if (text('其他登录方式').exists()) {
            click('其他登录方式');
            TKB.set_log("其他登录方式")
            sleep(1500)
        }

        if (text('未注册的手机号登录成功后将自动注册').exists() && text('+86').exists() && text('密码登录') && cc == 0) {
            TKB.set_log("去获取号码")
            toast('获取手机号');
            zh = TKB.benjitel()
            tem = 1;
            sleep(2500)
            cc = 1
        }

        // 获取手机号码 并输入  只执行一次
        if (id('com.kuaishou.nebula:id/phone_et').exists() && bb == 0) {
            TKB.set_log("输入账号" + zh)
            const ipt = id('com.kuaishou.nebula:id/phone_et').findOnce()
            ipt.setText('');
            sleep(1000)
            text('请输入手机号').setText(zh)
            sleep(3000)
            TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
            bb = 1
        }

        // 点击获取验证码按钮
        if (text('获取验证码').exists() && count !== 2) {
            TKB.set_log("获取验证码")
            text('获取验证码').findOnce().click();
            count++
            do {
                sleep(1000)
            } while (textContains('重新发送').exists() == false)
        }


        if (text('重新发送').exists() && count !== 2) {
            text('重新发送').findOnce().click();
            TKB.set_log("重新发送")
            count++
            do {
                sleep(1000)
            } while (textContains('重新发送').exists() == false)
        }

        // 输入验证码
        if (textContains('重新发送').exists()) {
            sleep(5000)
            TKB.set_log("输入验证码界面")
            yzm = TKB.huoquyzm("快手科技")
            const btn = id('com.kuaishou.nebula:id/captcha_code_et').findOnce();
            if (yzm == false) {
                toast('获取验证码失败')
            } else {
                btn.setText('')
                sleep(2000)
                btn.setText(yzm)
                sleep(2500)
                y++
                toastLog('第' + y + '次尝试验证码输入')
                // 判断登录是有没有转圈圈
                zhuanquan()
            }

            // 加入验证码输入错误，重新在来获取验证码输入
            if (text('验证码错误').exists()) {
                TKB.set_log("输入验证码界面")
                toastLog('开始重新获取验证码')
                yzm = TKB.huoquyzm("快手科技")
                y++
                toastLog('第' + y + '次尝试验证码输入')
                btn.setText('')
                sleep(2000)
                btn.setText(yzm)
                sleep(2500)
                // 判断登录是有没有转圈圈
                zhuanquan()
            }

            // 登录的延迟
            if (text('请检查下网络连接是否正常').exists()) {
                TKB.set_log("请检查下网络连接是否正常")
                toastLog('请检查下网络连接是否正常');
                sleep(3000)
            }
        }

        // 判断登录成功没
        if (id("com.kuaishou.nebula:id/login_text").exists() == false) {
            var img2 = captureScreen();
            var color3 = colors.toString(images.pixel(img2, 590, 188))
            var color4 = colors.toString(images.pixel(img2, 62, 117))
            if (color3 == '#ffffffff' && color4 == '#ffff5000') {
                TKB.set_log("登录成功")
                toastLog('登录成功')
                sleep(1500)
                return true;
            }
        }
        // 获取6次验证码错误后重新执行快手任务
        if (y === 15) {
            // toastLog('没有获取到正确的验证码重新执行快手任务');
            TKB.set_log("重新执行快手任务")
            sleep(5000)
            kszc();
        }
        // 弹窗
    }
}


_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
var dl = kszc()
if (dl == true) {
    var msg_num = 1
    var msg = '成功'
    var notice_name = 'after_script'
} else {
    var msg_num = 0
    var msg = '失败'
    var notice_name = 'stop'
}
TKB.send_message({notice_name: notice_name,notice_content: [msg_num, msg]})
