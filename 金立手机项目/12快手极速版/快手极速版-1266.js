log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.kuaishou.nebula" //该项目包名
var xmxh = "25" //项目序号 版本11.0.0
var i = 0;
var sum = 1;
var name;
var jianjie;
var nameflag
var imgflag

//******************************************************************快手项目*****************************************************************
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
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.xgsrizhi('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.xgsrizhi('失败')
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

//获取资料
function get_name(sbip, user_id, yhbh) {
    TKB.xgsrizhi("获取名字头像简介")
    var TS = (new Date()).getTime()
    var url = 'http://' + sbip + '/api.php/potal/meitu/getname?user_id=' + user_id + '&der_id=' + yhbh
    // var url = 'http://47.114.99.72/api.php/potal/meitu/getname?user_id=9&der_id=628'
    TKB.xgsrizhi(url)
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                TKB.xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                TKB.xgsrizhi(ss)
                if (ss["code"] == 0) {
                    var data = ss['data']
                    return data
                } else {
                    var data = ss['msg']
                    TKB.xgsrizhi(ss['msg'])
                    return false
                }
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

function zonghe() {
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.xgsrizhi("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.xgsrizhi("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.xgsrizhi("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    // if (desc("邀请好友赚36元").exists()) {
    //     TKB.xgsrizhi("签到成功")
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
        TKB.xgsrizhi('关闭')
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
        TKB.xgsrizhi("快手调研")
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
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.xgsrizhi("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("始终同意")
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
        TKB.xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.xgsrizhi("确认");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.xgsrizhi("同步到今日头条");
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (text("立即赠送").exists()) {
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
        TKB.xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//快手登录上传信息
function kszc() {
    TKB.xgsrizhi("快手极速版注册")
    TKB.killapp() // 先结束进程
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
    zonghe();
    while (1) {
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没注册成功")
            back()
            sleep(1000)
            TKB.qinglihh("com.kuaishou.nebula")
            sleep(3000)
            launch("com.kuaishou.nebula")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (tem = 0) {
            if (id('com.kuaishou.nebula:id/left_btn').exists()) {
                TKB.xgsrizhi('点击菜单')
                id('com.kuaishou.nebula:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (desc('头像').exists()) {
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                return true
            }
            tem = 1
        }
        // 判断用户有没有登录
        if (id("com.kuaishou.nebula:id/login_text").exists() && id('com.kuaishou.nebula:id/action_bar_left_logo').exists() && z == 1) {
            id("com.kuaishou.nebula:id/login_text").findOnce().click()
            toastLog('开始登录')
            TKB.xgsrizhi("开始登录")
            sleep(3500)
            z = 0
        }


        // 用户没有登录开始用手机号码登录
        if (text('手机号登录').exists() && id('com.kuaishou.nebula:id/full_screen_login_logo') && login == 0) {
            toastLog('开始手机登录');
            TKB.xgsrizhi("手机号登录")
            text('手机号登录').findOnce().parent().click();
            sleep(4500);
            login = 1
        }

        // 勾选同意按钮
        if (id('com.kuaishou.nebula:id/protocol_checkbox').exists() && x == 1) {
            id('com.kuaishou.nebula:id/protocol_checkbox').findOnce().click();
            TKB.xgsrizhi("勾选同意按钮")
            sleep(3000);
            x = 0
        }

        // 直接本机登录
        if (text('本机一键登录').exists() || text('其他登录方式').exists()) {
            TKB.xgsrizhi("本机一键登录")
            click('本机一键登录');
            sleep(3000)
        }

        if (text('其他登录方式').exists()) {
            click('其他登录方式');
            TKB.xgsrizhi("其他登录方式")
            sleep(1500)
        }

        if (text('未注册的手机号登录成功后将自动注册').exists() && text('+86').exists() && text('密码登录') && cc == 0) {
            TKB.xgsrizhi("去获取号码")
            toast('获取手机号');
            zh = TKB.benjitel()
            tem = 1;
            sleep(2500)
            cc = 1
        }

        // 获取手机号码 并输入  只执行一次
        if (id('com.kuaishou.nebula:id/phone_et').exists() && bb == 0) {
            TKB.xgsrizhi("输入账号" + zh)
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
            TKB.xgsrizhi("获取验证码")
            text('获取验证码').findOnce().click();
            count++
            do {
                sleep(1000)
            } while (textContains('重新发送').exists() == false)
        }


        if (text('重新发送').exists() && count !== 2) {
            text('重新发送').findOnce().click();
            TKB.xgsrizhi("重新发送")
            count++
            do {
                sleep(1000)
            } while (textContains('重新发送').exists() == false)
        }

        // 输入验证码
        if (textContains('重新发送').exists()) {
            sleep(5000)
            TKB.xgsrizhi("输入验证码界面")
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
                TKB.xgsrizhi("输入验证码界面")
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
                TKB.xgsrizhi("请检查下网络连接是否正常")
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
                TKB.xgsrizhi("登录成功")
                toastLog('登录成功')
                sleep(1500)
                return true;
            }
        }

        // 获取6次验证码错误后重新执行快手任务
        if (y === 15) {
            // toastLog('没有获取到正确的验证码重新执行快手任务');
            TKB.xgsrizhi("重新执行快手任务")
            sleep(5000)
            kszc();
        }
        // 弹窗
        zonghe();
    }
}

//快手极速版任务
function ksjsrw() {
    TKB.xgsrizhi('快手急速版任务')
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > 30 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (tem == 0) {
            if (id('com.kuaishou.nebula:id/left_btn').exists()) {
                TKB.xgsrizhi('点击菜单')
                id('com.kuaishou.nebula:id/left_btn').findOnce().click()
                sleep(2000)
            }
            tem = 1
        }
        if (text('去赚钱').exists()) {
            TKB.xgsrizhi('点击去赚钱')
            click('去赚钱')
            sleep(10000)
        }
        if (desc('金币收益').exists() && desc('现金收益').exists()) {
            TKB.xgsrizhi('赚钱页面')
            swipe(550, 1500, 550, 300, 1000)
            sleep(2000)
            while (1) {
                try {
                    zonghe()
                    if (desc('签到领金币').exists()) {
                        TKB.xgsrizhi('去签到')
                        desc('去签到').findOnce().click()
                        sleep(5000)
                        if (desc('打开签到提醒+100金币').exists()) {
                            TKB.xgsrizhi('打开签到提醒')
                            var ss = desc('打开签到提醒+100金币').findOnce().bounds();
                            click(ss.centerX() + 150, ss.centerY());
                            sleep(2000)
                        }
                    } else {
                        if (desc('问卷调查').exists()) {
                            TKB.xgsrizhi('问卷调查')
                            desc('去填写').findOnce().click()
                            try {
                                if (wj == 0 && desc('出生年份').exists()) {
                                    TKB.xgsrizhi('出生年份')
                                    var ss = desc('出生年份').findOnce().bounds()
                                    click(ss.centerX() + 350, ss.centerY() + 100)
                                    sleep(2000)
                                    if (text('选择出生年份').exists() && text('完成').exists()) {
                                        TKB.xgsrizhi('下滑')
                                        for (var i = 0; i < random(0, 31); i++) {
                                            swipe(550, 1470, 550, 1600, 1000)
                                            sleep(500)
                                        }
                                        TKB.xgsrizhi('下滑次数:' + i)
                                        click('完成')
                                        sleep(2000)
                                        wj = 1
                                    }
                                }
                                if (wj == 1 && desc('性别').exists()) {
                                    TKB.xgsrizhi('性别')
                                    var ss = desc('性别').findOnce().bounds();
                                    click(ss.centerX() + 350, ss.centerY() + 100);
                                    sleep(2000)
                                    if (desc('性别').exists() && desc('性别').exists()) {
                                        if (random(0, 1) === 1) {
                                            TKB.xgsrizhi('男')
                                            desc('男').findOnce().click()
                                            sleep(2000)
                                        } else {
                                            TKB.xgsrizhi('女')
                                            desc('女').findOnce().click()
                                            sleep(2000)
                                        }
                                        wj = 2
                                    }
                                }
                                if (wj == 2 && desc('家乡').exists()) {
                                    TKB.xgsrizhi('家乡')
                                    var ss = desc('家乡').findOnce().bounds()
                                    click(ss.centerX() + 350, ss.centerY() + 100)
                                    sleep(2000)
                                    if (text('选择地区').exists() && text('完成').exists()) {
                                        TKB.xgsrizhi('选择地区')
                                        for (var i = 0; i < random(0, 31); i++) {
                                            swipe(290, 1470, 290, 1600, 1000)
                                            sleep(500)
                                        }
                                        sleep(2000)
                                        for (var i = 0; i < random(1, 5); i++) {
                                            swipe(810, 1600, 810, 1470, 1000)
                                            sleep(500)
                                        }
                                        click('完成')
                                        sleep(2000)
                                        wj = 3
                                    }
                                }
                                if (wj == 3 && desc('职业').exists()) {
                                    TKB.xgsrizhi('职业')
                                    var ss = desc('职业').findOnce().bounds()
                                    click(ss.centerX() + 350, ss.centerY() + 100)
                                    sleep(2000)
                                    if (text('选择职业').exists() && text('完成').exists()) {
                                        TKB.xgsrizhi('选择职业')
                                        for (var i = 0; i < random(1, 12); i++) {
                                            swipe(550, 1600, 550, 1470, 1000)
                                            sleep(500)
                                        }
                                        click('完成')
                                        sleep(2000)
                                        wj = 4
                                    }
                                }
                                if (wj == 4 && desc('确认提交').exists()) {
                                    TKB.xgsrizhi('确认提交')
                                    desc('确认提交').findOnce().click()
                                    sleep(3000)
                                    wj = 5
                                }
                            } catch (error) {
                                TKB.xgsrizhi(error)
                            }
                        } else {
                            if (desc('看精彩视频赚金币').exists() && desc('福利').exists()) {
                                TKB.xgsrizhi('看精彩视频赚金币')
                                desc('福利').findOnce().click()
                                sleep(2000)
                                while (1) {
                                    if (text('关闭广告').exists()) {
                                        TKB.xgsrizhi('时间到了,关闭广告')
                                        sleep(1000)
                                        click('关闭广告')
                                        sleep(2000)
                                    }
                                    if (desc('明天看视频继续领取1000金币').exists() && desc('明日再来').exists()) {
                                        TKB.xgsrizhi('今天赚钱小视频看完了')
                                        sleep(1000)
                                        break
                                    }
                                }
                            } else if (desc('明日再来').exists() && desc('已完成').exists() && !desc('问卷调查').exists()) {
                                TKB.xgsrizhi('任务已经完成')
                                toastLog('任务已经完成')
                                return true
                            }
                        }

                    }
                } catch (error) {
                    TKB.xgsrizhi(error)
                }
            }
        }
        zonghe()
    }
}

//快手新养号
function ksxyh() {
    TKB.xgsrizhi("快手新养号")
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
    //zbbpx 直播表情
    var zbbpx = ['😀', '😬', '😁', '😂', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '☺', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '☹', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']
    var live_time = random(20, 30)
    var start_time = (new Date()).getTime()
    var bq = ['必胜', '戴口罩', '勤洗手', '扎心', '666', '奸笑', '捂脸', '龇牙', '哼', '哦', '微笑', '老铁', '双鸡', '调皮', '呆住', '星星眼', '爱心', '疑问', '生气', '难过', '撇嘴', '惊讶', '羞涩', '色', '汗', '老司机', '头盔', '酷', '笑哭', '愉快', '委屈', '白眼', '安排', '点点关注', '小姐姐', '小哥哥', '鼓掌', '抱抱', '哈欠', '大哭', '闭嘴', '惊恐', '红脸蛋', '亲亲', '冷汗', '晕', '火', '坏笑', '爆炸', '可怜', '再见', '赞', '囧', '大哥', '玫瑰', '抓狂', '嘘', '快哭了', '偷笑', '落泪', '挑逗', '困', '睡觉', '打招呼', '流鼻血', '抱大腿', '偷瞄', '吃瓜', '旋转', '憨笑', '吐彩虹', '擦鼻涕', '拜托', '加油', '想吃', '打脸', '吐血', '大鼻孔', '天啊', '皱眉', '装傻', '酸了', '柴犬', '期待', '干杯', '祈祷', '爱你', '摸头', '欢迎', '比心']
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(60, 70)
    var a = 0
    var sp_num = 0
    var live_time = random(20, 30)
    var start_time = (new Date()).getTime()
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            zonghe()
            if (tem == 0) {
                log('点击发现')
                click(580, 150)
                sleep(100)
                click(580, 150)
                sleep(3000)
                swipe(600, 1350, 500, 100, 800)
                sleep(random(1000, 3000))
            }
            if (id('com.kuaishou.nebula:id/like_button').exists() && id('com.kuaishou.nebula:id/comment_button').exists()) {
                log('视频界面')
                var zbtx = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    zonghe()
                    var x = 0
                    var dzl = 0
                    var dzs = ''
                    if ((new Date()).getTime() - rddx > zbtx * 60 * 1000) {
                        TKB.xgsrizhi("去看直播")
                        back()
                        sleep(1000)
                        var start_time = (new Date()).getTime()
                        a = 1
                        break
                    }
                    if (text('点击重播').exists()) {
                        TKB.xgsrizhi("广告重播")
                        click('点击重播')
                        sleep(2000)
                        swipe(600, 1350, 500, 100, 800)
                        sleep(2000)
                        break
                    }
                    if (id('com.kuaishou.nebula:id/like_count_view').exists()) {
                        comment = id('com.kuaishou.nebula:id/like_count_view').find()
                        comment.forEach(item => {
                            var a = item.text();
                            x++
                            if (Number(x) == 2) {
                                dzs = a
                                TKB.xgsrizhi(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            TKB.xgsrizhi('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        TKB.xgsrizhi("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        TKB.xgsrizhi('符合条件')
                        if (sp_num > 20) {
                            log('刷新')
                            click(570, 150)
                            sleep(100)
                            click(570, 150)
                            sleep(3000)
                            sp_num = 0
                        }
                        dzl = 0
                        var sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                TKB.xgsrizhi("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    TKB.xgsrizhi("评论")
                                    id('com.kuaishou.nebula:id/comment_button').click()
                                    sleep(1000)
                                    for (j = 0; j < random(2, 5); j++) {
                                        swipe(500, 1600, 600, 400, 1000)
                                        sleep(random(1000, 3000))
                                    }
                                    click(400, 1840)
                                    sleep(2000)
                                    setText("[" + bq[random(1, bq.length)] + "]")
                                    sleep(4000)
                                    if (text("发送").exists()) {
                                        TKB.xgsrizhi("发送")
                                        click('发送')
                                        sleep(2000)
                                    }
                                    back()
                                    sleep(1000)
                                    sj = 101
                                } else {
                                    if (sj < 5) {
                                        for (var j = 0; j < random(1, 3); j++) {
                                            swipe(600, 1600, 500, 300, 1000)
                                            sleep(random(1000, 2000))
                                            TKB.xgsrizhi("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            TKB.xgsrizhi("点赞")
                                            click(990, 1320)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.kuaishou.nebula:id/editor').exists() && id('com.kuaishou.nebula:id/at_button').exists()) {
                                                TKB.xgsrizhi("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    TKB.xgsrizhi("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        TKB.xgsrizhi("观看时间够了,滑动")
                                                        swipe(600, 1350, 500, 100, 800)
                                                        sleep(random(1000, 3000))
                                                        sleep(1000)
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (a == 1) {
            zonghe()
            if (text('立即赠送').exists() && text('送我一个棒棒糖吧').exists()) {
                TKB.xgsrizhi("送我一个棒棒糖吧")
                back()
                sleep(1000)
            }
            if (id('com.kuaishou.nebula:id/left_btn').exists()) {
                TKB.xgsrizhi("点击菜单")
                id('com.kuaishou.nebula:id/left_btn').click()
                sleep(5000)
            }
            if (text('动态').exists() && text('消息').exists() && text('设置').exists() && !text('直播广场').exists()) {
                TKB.xgsrizhi("下滑")
                swipe(300, 1580, 300, 900, 800)
                sleep(1000)
            } else if (text('直播广场').exists() && text('设置').exists()) {
                TKB.xgsrizhi("点击直播广场")
                click('直播广场')
                sleep(1000)
            }
            if (text('直播广场').exists() && text('设置').exists()) {
                TKB.xgsrizhi("点击直播广场")
                click('直播广场')
                sleep(1000)
            }
            if (text('直播广场').exists() && text('推荐').exists()) {
                TKB.xgsrizhi("直播广场界面")
                sleep(2000)
                for (var i = 0; i < random(2, 11); i++) {
                    swipe(500, 1800, 500, 200, 1200)
                    sleep(2000)
                }
                TKB.xgsrizhi("下滑次数:" + i)
                sleep(1000)
                click(random(200, 400), 1600)
                sleep(5000)
            }
            if (text('说点什么...').exists() && id('com.kuaishou.nebula:id/live_comment_container').exists() || id('com.kuaishou.nebula:id/live_share').exists() && text('com.kuaishou.nebula:id/live_nebula_bottom_bar_guide_gift_button').exists() || id('com.kuaishou.nebula:id/top_bar').exists() && text('com.kuaishou.nebula:id/live_close_place_holder').exists()) {
                toastLog("直播界面")
                TSD = (new Date()).getTime()
                var ssi = random(1, 100)
                // var ssi = 100
                if (ssi > 99) {
                    TKB.xgsrizhi("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText(zbbpx[random(1, zbbpx.length)])
                    sleep(1000)
                    if (text("发送").exists()) {
                        TKB.xgsrizhi("发送")
                        click('发送')
                        sleep(2000)
                    }
                }
                if ((new Date().getTime()) - start_time < live_time * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.xgsrizhi("观看直播中")
                    sleep(4000)
                } else if ((new Date().getTime()) - start_time > live_time * 60 * 1000) {
                    TKB.xgsrizhi("观看直播时间已到")
                    back()
                    sleep(1000)
                    if (text('关注并退出').exists()) {
                        TKB.xgsrizhi("退出")
                        click('退出')
                        sleep(2000)
                    }
                    back()
                    sleep(500)
                    return true
                }
            }
            if (text('直播已结束').exists()) {
                TKB.xgsrizhi("直播已结束")
                back()
                sleep(1000)
            }
            if (id('com.kuaishou.nebula:id/open_icon_view').exists() && id('com.kuaishou.nebula:id/background_view_normal').exists()) {
                TKB.xgsrizhi('点击红包')
                id('com.kuaishou.nebula:id/background_view_normal').click()
                sleep(500)
            }
            if (id('com.kuaishou.nebula:id/live_arrow_red_packet_float_view').exists() && text('抢红包').exists()) {
                TKB.xgsrizhi('点击红包1')
                click('抢红包')
                sleep(500)
            }
            if (id('com.kuaishou.nebula:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('开红包')
                id('com.kuaishou.nebula:id/live_red_packet_pre_snatch_state_view').click()
                sleep(5000)
            }
            if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('红包抢完了')
                id('com.kuaishou.nebula:id/live_red_packet_close_view').click()
                sleep(3000)
            }
            if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
                TKB.xgsrizhi('红包未开启')
                id('com.kuaishou.nebula:id/live_red_packet_close_view').click()
                sleep(3000)
            }
        }
    }
}
// 开始刷
function Refresh() {
    var newtime = Date.parse(new Date()) / 1000
    do {
        zonghe()
        var endtime = Date.parse(new Date()) / 1000
        i++
        let ran = randomNum(20, 30);

        if (i == 5) {
            const money = jindan()
            sleep(3000)
            back();
            toastLog(money)
            TKB.upjine(sbip, user_id, yhbh, app_id, money)
            TKB.xgsrizhi('第' + sum + '上传金额成功')
            sum++
            sleep(3000)
        }
        // 每隔n次点一个赞
        let good = randomNum(10, 15)
        if ((i % good) === 0) {
            click(1000, 1340);
            sleep(1000)
        }

        // 等待 ran时间刷新
        let ranx1 = randomNum(300, 650)
        let ranx2 = randomNum(300, 650)
        let rany1 = randomNum(1500, 1700)
        let rany2 = randomNum(300, 400)
        let randomtime = randomNum(600, 1000)
        // 随机下拉
        toastLog('当前需要观看' + ran + '秒')
        sleep(ran * 1000);
        gesture(randomtime, [ranx1, rany1], [ranx2, rany2]);

    }
    while ((endtime - newtime) < 7200) {
        return
    }
}

//上传info结果
function upinfo(sbip, user_id, yhbh, info, status) {
    TKB.xgsrizhi("上传info结果")
    var Tb = (new Date()).getTime()
    TKB.xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                TKB.xgsrizhi("超时退出")
                return false
            }
            if (info != '' || info != null) {
                var ss = info.split(",")
                var name_info = ss[0],
                    img_info = ss[1],
                    jianjie_info = ss[2]
                var url = "http://" + sbip + "/api.php/potal/meitu/gxnamestatus?user_id=" + user_id + "&der_id=" + yhbh + "&name_info=" + name_info + "&img_info=" + img_info + "&jianjie_info=" + jianjie_info + "&status=" + status
                TKB.xgsrizhi("链接：" + url)
                var r = http.get(url);
                if (r.statusCode == 200) {
                    var r_obj = r.body.json();
                    TKB.xgsrizhi(r_obj)
                    if (r_obj["code"] == "0") {
                        toastLog("上传info结果成功")
                        return true
                    }
                } else {
                    TKB.xgsrizhi("没网")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("info数据上传失败")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传info结果中...")
        sleep(random(100, 10000))
    }
}

//快手极速版改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var sex = random(0, 1)
    var tep = 0 //判断编辑资料界面该干啥
    // var name = "0"
    // var jianjie = "你们在干嘛呢"
    // var xb = 0
    var zz = get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname']
        TKB.xgsrizhi(name)
        var img = zz['img']
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie']
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        zonghe()
        if (id("com.kuaishou.nebula:id/tabs").exists()) {
            TKB.xgsrizhi("点击侧边栏")
            id("com.kuaishou.nebula:id/left_btn").findOnce().click()
            sleep(3000)
        }
        if (id("com.kuaishou.nebula:id/tab_avatar").exists() && id("com.kuaishou.nebula:id/tab_name").exists()) {
            TKB.xgsrizhi("点击个人信息")
            id("com.kuaishou.nebula:id/tab_avatar").findOnce().click()
            sleep(3000)
        }
        if (desc("编辑资料").exists()) {
            TKB.xgsrizhi("点击编辑资料")
            desc("编辑资料").findOnce().click()
            sleep(3000)
        }
        if (text("编辑资料").exists() && text("头像").exists() && text("个人介绍").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                TKB.xgsrizhi("修改名字")
                sleep(300)
                if (text("昵称").exists()) {
                    TKB.xgsrizhi("点击昵称")
                    id("com.kuaishou.nebula:id/nickname_layout").findOnce().click()
                    sleep(3000)
                    if (text("昵称").exists() && text("完成").exists()) {
                        TKB.xgsrizhi("清空原有的名字")
                        id("com.kuaishou.nebula:id/input").findOnce().setText('')
                        sleep(3000)
                        setText(0, name)
                        sleep(3000)
                        click("完成")
                        TKB.xgsrizhi("点击完成")
                        sleep(3000)
                    }
                }
                if (id("com.kuaishou.nebula:id/nickname").findOnce().text() != name) {
                    TKB.xgsrizhi("快手极速版昵称不符合")
                    nameflag = '快手极速版昵称不符合'
                } else {
                    TKB.xgsrizhi("快手极速版昵称符合")
                    nameflag = '快手极速版昵称符合'
                }
                sleep(2000)
                if (text("修改用户名次数已达本周上线").exists()) {
                    nameflag = '修改用户名次数已达本周上线'
                    back()
                    TKB.xgsrizhi("回到编辑资料页面")
                    sleep(3000)
                }
                tep = 1
                sleep(3000)
            }
            if (tep == 1) {
                TKB.xgsrizhi("修改头像")
                if (text("头像").exists()) {
                    TKB.xgsrizhi("点击头像")
                    id("com.kuaishou.nebula:id/avatar_layout").findOnce().click()
                    sleep(3000)
                }
                if (text("个人头像").exists() && text("更换头像").exists()) {
                    TKB.xgsrizhi("点击更换头像")
                    click("更换头像")
                    sleep(3000)
                    if (text("拍一张").exists() && text("从相册选取").exists()) {
                        TKB.xgsrizhi("点击从相册选取")
                        click("从相册选取")
                        sleep(3000)
                        if (text("所有照片").exists()) {
                            TKB.xgsrizhi("点击所有照片")
                            click("所有照片")
                            sleep(3000)
                            if (text("DY").exists()) {
                                TKB.xgsrizhi("点击DY")
                                click("DY")
                                sleep(3000)
                            }
                            click(131, 290)
                            sleep(3000)
                            if (text("照片预览").exists()) {
                                TKB.xgsrizhi("点击钩")
                                id("com.kuaishou.nebula:id/right_btn").findOnce().click()
                                sleep(3000)
                                if (textStartsWith("你的照片尺寸太模糊").exists()) {
                                    TKB.xgsrizhi("点击好的")
                                    click("好的")
                                    TKB.xgsrizhi("快手极速版头像不符合")
                                    imgflag = '快手极速版头像不符合'
                                    sleep(3000)
                                    back()
                                    sleep(3000)
                                } else {
                                    TKB.xgsrizhi("快手极速版头像符合")
                                    imgflag = '快手极速版头像符合'
                                }
                                back()
                                sleep(3000)
                            }
                        }
                    }
                }
                tep = 2
                sleep(3000)
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改简介")
                if (text("个人介绍").exists()) {
                    TKB.xgsrizhi("点击个人介绍")
                    id("com.kuaishou.nebula:id/intro_layout").findOnce().click()
                    sleep(3000)
                    if (text("设置个人介绍").exists()) {
                        if (text(jianjie).exists()) {
                            TKB.xgsrizhi("已经是该简介了")
                            back()
                            sleep(2000)
                        } else {
                            TKB.xgsrizhi("填写简介")
                            setText(jianjie)
                            sleep(2000)
                            click("完成")
                            TKB.xgsrizhi("点击完成")
                            sleep(2000)
                        }
                    }
                }
                tep = 3
                sleep(3000)
            }
            if (tep == 3) {
                if (text("性别").exists()) {
                    TKB.xgsrizhi("点击性别")
                    id("com.kuaishou.nebula:id/gender_layout").findOnce().click()
                    sleep(2000)
                    if (sex = 0) {
                        TKB.xgsrizhi("点击女生")
                        click("女")
                        sleep(2000)
                    } else {
                        TKB.xgsrizhi("点击男生")
                        click("男")
                        sleep(2000)
                    }
                }
                tep = 4
                sleep(3000)
            }
            if (tep == 4) {
                if (text("生日/星座").exists()) {
                    TKB.xgsrizhi("点击生日")
                    id("com.kuaishou.nebula:id/birthday_layout").findOnce().click()
                    sleep(3000)
                    if (text('选择生日').exists()) {
                        TKB.xgsrizhi("滑动选择生日")
                        if (id("com.kuaishou.nebula:id/year").exists()) {
                            TKB.xgsrizhi("滑动选择年份")
                            for (let i = 0; i < random(1, 3); i++) {
                                swipe(235, 1180, 265, 770, 1000)
                                sleep(2000)
                            }
                        }
                        sleep(1000)
                        if (id("com.kuaishou.nebula:id/month").exists()) {
                            TKB.xgsrizhi("滑动选择月份")
                            for (let i = 0; i < random(1, 3); i++) {
                                if (random(0, 1) == 0) {
                                    swipe(553, random(1180, 770), 564, random(770, 1180), 1000)
                                    sleep(2000)
                                } else {
                                    swipe(564, random(770, 1180), 553, random(1180, 770), 1000)
                                    sleep(2000)
                                }
                            }
                        }
                        sleep(1000)
                        if (id("com.kuaishou.nebula:id/day").exists()) {
                            TKB.xgsrizhi("滑动选择日期")
                            for (let i = 0; i < random(1, 3); i++) {
                                if (random(0, 1) == 0) {
                                    swipe(890, random(1180, 770), 910, random(770, 1180), 1000)
                                    sleep(1000)
                                } else {
                                    swipe(910, random(1180, 770), 890, random(770, 1180), 1000)
                                    sleep(1000)
                                }
                            }
                        }
                        sleep(2000)
                        if (text("完成").exists() && text("取消").exists()) {
                            TKB.xgsrizhi("点击确认")
                            click("完成")
                            sleep(2000)
                        }
                        if (text("确定").exists() && text("取消").exists()) {
                            TKB.xgsrizhi("点击确定")
                            click("确定")
                            sleep(3000)
                        }
                    }
                }
                if (nameflag == '快手极速版昵称符合' && imgflag == '快手极速版头像符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = nameflag + ',' + imgflag + ',' + 0
                upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh();
                return true
            }
        }
    }
}

// 金蛋的金额
function jindan() {
    sleep(5000)
    const redbao = id('com.kuaishou.nebula:id/circular_progress_bar').findOnce().bounds()
    click(redbao.centerX(), redbao.centerY());
    sleep(2500)
    while (1) {
        if (text('请检查网络连接是否正常').exists()) {
            click('重试');
            sleep(3000);
            toastLog('加载网络')
        }
        if (text('重试').exists()) {
            click('重试')
        }
        if (desc('哎呀，页面出错啦~').exists()) {
            // click('重试');
            click(500, 700)
            sleep(3000);
            toastLog('加载网络')
        }

        if (desc('面对面邀请').exists() && desc('QQ') && desc("复制链接").exists()) {
            // zonghe();
            if (desc('现金收益').exists() && desc('金币收益').exists()) {
                money = desc('现金收益').findOnce().parent().child(0).desc();
                return money
                // log(desc('金币收益').findOnce().parent().child(0).desc())
            }
        }
    }
}



//封装的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
        default:
            return 0;
            break;
    }
}

// 判断登录按钮有没有转圈圈
function zhuanquan() {
    if (id('com.kuaishou.nebula:id/confirm_progress_bar').exists()) {
        for (let a = 0; a < 1000; a++) {
            if (id('com.kuaishou.nebula:id/confirm_progress_bar').exists()) {
                // log('我出来了')
                toastLog('登录加载中');
                break;
            }
            sleep(3500)
        }
    }

}

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续今日头条任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                        // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000);
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************

//执行快手极速版项目

function dyzhixing() {
    try {
        toastLog("执行快手任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var baom = getPackageName("快手极速版")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("快手极速版", "2.4.1.283")
                if (bbd == false) {
                    TKB.xgsrizhi("没安装成功快手极速版")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()

            var dl = kszc()
            toast(dl)
            sleep(2000)
            if (dl == true) {
                toast('开始刷')
                if (fun == "任务") {
                    ksjsrw()
                } else if (fun == "养号") {
                    ksxyh()
                } else if (fun == "修改资料") {
                    changeInfo()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
            // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        log(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}


// changeInfo()
dyzhixing()