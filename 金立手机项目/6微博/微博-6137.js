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
var dqbaoming = "com.sina.weibo" //该项目包名
var packageName = "com.sina.weibo";
var xmxh = "6" //项目序号
var browseTime = 30 * 60 * 1000;
var ifClick = true;
var jianjie;
var name;
var nameflag
var imgflag
var jianjieflag

//*******************************************************微博项目 *****************************************************************
//所有判断和弹窗
function zonghe() {
    if (text("不了，谢谢").exists()) {
        click("不了，谢谢")
        TKB.xgsrizhi("不了，谢谢")
        sleep(2000)
    }
    if (text("进入微博").exists()) {
        click("跳过")
        TKB.xgsrizhi("点击跳过")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        click("我知道了")
        TKB.xgsrizhi("我知道了")
        sleep(2000)
    }
    if (text("同意").exists() && text("不同意").exists()) {
        click("同意")
        TKB.xgsrizhi("同意")
        sleep(2000)
    }
    if (textContains("博主").exists()) {
        // TKB.xgsrizhi("博主推荐")
        for (var i = 0; i < 5; i++) {
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        sleep(2000)
        click(800, 1750)
        sleep(2000)
        if (textEndsWith('下一步').exists()) {
            textEndsWith('下一步').click()
        }
        if (textEndsWith('进入微博').exists()) {
            textEndsWith('进入微博').click()
        }
        sleep(2000)
    }
    if (textEndsWith('我选好了').exists()) {
        click("跳过")
        TKB.xgsrizhi("点击跳过");
        sleep(3000)
    }
    if (text("选择你感兴趣的分类").exists()) {
        TKB.xgsrizhi("选择你感兴趣的分类")
        for (var i = 0; i < 5; i++) {
            click(random(300, 800), random(500, 1700))
            sleep(500)
        }
        click(500, 1920)
        sleep(2000)
        textEndsWith('我选好了').click()
        sleep(2000)
    }
    if (text("等待").exists() && text("关闭应用").exists()) {
        click("等待")
        TKB.xgsrizhi("关闭应用")
        sleep(2000)
    }
    if (text("展开").exists() && id("com.sina.weibo:id/btn_show_more").exists()) {
        back()
        TKB.xgsrizhi("图片展开")
        sleep(2000)
    }
    if (text("重播").exists() && text("转发").exists()) {
        back()
        TKB.xgsrizhi("重播")
        sleep(2000)
    }
    if (text("提示").exists() && text("取消").exists() && text("确定").exists()) {
        click("取消")
        TKB.xgsrizhi("点击取消实名认证")
        sleep(2000)
    }
    if (text("上滑观看更多内容").exists()) {
        swipe(533, 1630, 557, 400, random(400, 600))
        TKB.xgsrizhi("上滑观看更多内容")
        sleep(2000)
    }
    if (text('给我们评分').exists() && text('不了，谢谢').exists()) {
        click('不了，谢谢')
        TKB.xgsrizhi("点击不了，谢谢")
        sleep(2000)
    }
    if (text("立即更新").exists() && text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("点击以后再说")
        sleep(2000);
    }
    if (id('com.sina.weibo:id/iv_content').exists() && id('com.sina.weibo:id/iv_close').exists()) {
        id('com.sina.weibo:id/iv_close').findOnce().click()
        TKB.xgsrizhi("点击关闭")
        sleep(2000)
    }
    if (desc('立即签到').exists()) {
        click('立即签到')
        TKB.xgsrizhi("点击立即签到")
        sleep(2000)
    }
    if (desc("立即签到").exists()) {
        TKB.xgsrizhi("点击立即签到")
        desc("立即签到").findOnce().click()
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (text('开启定位功能').exists() && text('开启').exists()) {
        TKB.xgsrizhi("关闭定位弹窗")
        id('com.sina.weibo:id/btn_close').click()
        sleep(2000)
    }
    if (text("欢迎使用微博").exists() && text("继续").exists()) {
        TKB.xgsrizhi("点击继续")
        click("继续");
        sleep(2000);
    }
    if (text('更多…').exists()) {
        TKB.xgsrizhi("点击更多")
        click('更多…')
        sleep(2000)
    }
    if (text("重新加载").exists()) {
        TKB.xgsrizhi("点击重新加载")
        click("重新加载");
        sleep(2000);
    }
    if (text("请先验证身份").exists()) {
        toast("等待人为操作");
        TKB.xgsrizhi("等待人为操作")
        sleep(10000);
    }
    if (text("解除异常").exists()) {
        click("解除异常");
        sleep(2000);
        TKB.xgsrizhi("点击解除异常");
    }
    if (text("设置密码").exists()) {
        TKB.xgsrizhi("返回");
        if (id("com.sina.weibo:id/titleLeft").exists()) {
            id("com.sina.weibo:id/titleLeft").click();
        } else {
            back();
        }
        sleep(2000);
    }
    /*--------------------------------------抖音 */
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text('打开看看').exists()) {
        TKB.xgsrizhi("打开看看-进入直播")
        click('打开看看')
        sleep(2000)
    }
    if (text("刷新").exists() && text("网络错误").exists()) {
        TKB.xgsrizhi("网络错误")
        click("刷新")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("退出").exists() && text("发现更多主播").exists()) {
        TKB.xgsrizhi("发现更多主播")
        click("退出")
        sleep(2000)
    }
    if (text("确认更换").exists() || desc("确认更换").exists()) {
        TKB.xgsrizhi("发现更多主播")
        click(940, 502)
        sleep(1000)
        back()
        sleep(3000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.xgsrizhi("取消未编辑的视频")
        click("取消")
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
    if (text('允许访问你的"位置"？').exists() && text("以后再说").exists()) {
        TKB.xgsrizhi("位置,以后再说")
        click("以后再说")
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
    if (text("下次再说").exists()) {
        TKB.xgsrizhi("下次再说")
        click("下次再说")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        TKB.xgsrizhi("知道了")
        click("知道了")
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
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542);
        TKB.xgsrizhi("同步到今日头条");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
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
    if (text("以后再说").exists() || text("立即升级").exists()) {
        click(300, 1370)
        sleep(500)
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        TKB.xgsrizhi("以后再说2");
        try {
            var ss = text("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("以后再说").exists()) {
        TKB.xgsrizhi("以后再说3");
        try {
            var ss = desc("以后再说").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }

    if (text("继续观看").exists()) {
        TKB.xgsrizhi("继续观看");
        try {
            var ss = text("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    if (desc("继续观看").exists()) {
        TKB.xgsrizhi("继续观看2");
        try {
            var ss = desc("继续观看").findOnce().bounds();
            log(ss)
            click(ss.centerX(), ss.centerY());
            sleep(2000)
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
    // if (text("跳过").exists()) {
    //     click("跳过");
    //     TKB.xgsrizhi("跳过");
    //     sleep(1200)
    // }
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
    if (text("升级到最新版").exists() || text("立即更新").exists()) {
        click(939, 523);
        TKB.xgsrizhi("立即更新");
        sleep(200)
        back()
        sleep(3000)
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

//微博登录
function wbdl() {
    TKB.xgsrizhi("微博登录")
    launch(dqbaoming)
    sleep(13000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = "18967729524"
    var yzm = "1234"
    var is_verify = 3,
        is_choice = false
    var loginClick = 0
    var sex = 1
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }

            if (!text('登录/注册').exists() && desc("首页").exists()) {
                TKB.xgsrizhi("已登录微博")
                sleep(2000)
                return true;
            }
            if (text('登录/注册').exists()) {
                TKB.xgsrizhi("点击首页的登陆注册")
                click('登录/注册')
                sleep(2000)
            }
            if (text('用本机号码一键登录').exists()) {
                TKB.xgsrizhi("一键登录")
                click('用本机号码一键登录')
                sleep(2000)
            }
            if (text('短信登录').exists() && text('取消').exists()) {
                TKB.xgsrizhi("一键登录出现问题")
                click('短信登录');
                sleep(2000)
            }
            if (text("输入手机号").exists() && text("获取验证码").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                text("输入手机号").findOnce().setText(zh)
                sleep(2000)
            }
            if (text('获取验证码').exists() && text('获取验证码').findOnce().enabled() == true) {
                TKB.xgsrizhi("获取验证码")
                text('获取验证码').findOnce().click()
                sleep(random(10000, 15000))
            }
            if (text('请输入验证码').exists() && text('输入验证码').exists() || textStartsWith('验证码错误').exists() && text('重新获取验证码').exists()) {
                if (textStartsWith('验证码错误').exists() && text('重新获取验证码').exists()) {
                    click('重新获取验证码')
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("微博")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    TKB.xgsrizhi("输入验证码" + yzm)
                    text('输入验证码').findOnce().click()
                    sleep(2000)
                    id('com.sina.weibo:id/verification_code').findOnce().setText(yzm)
                    sleep(2000)
                }
            }
            if (text('请输入验证码').exists() && (text('注册').exists() && text('注册').findOnce().clickable() == true || text('登录').exists() && text('登录').findOnce().clickable() == true)) {
                if (text('注册').exists() && text('注册').findOnce().clickable() == true) {
                    TKB.xgsrizhi("注册")
                    text('注册').findOnce().click()
                } else {
                    TKB.xgsrizhi("登录")
                    text('登录').findOnce().click()
                }
                sleep(2000)
            }
            if (text('我已阅读并同意上述条款').exists() && text('下一步').exists() && text('我已阅读并同意上述条款').findOnce().checked() == false) {
                TKB.xgsrizhi("同意以上条款")
                text('我已阅读并同意上述条款').findOnce().click()
                sleep(2000)
            }
            if (text('下一步').exists() && text('下一步').findOnce().enabled() == true) {
                TKB.xgsrizhi("下一步")
                text('下一步').findOnce().click()
                sleep(2000)
            }
            if (desc('首页').exists() && desc('视频').exists() && desc('发现').exists() && desc('我').exists()) {
                desc('我').findOnce().click()
                sleep(2000)
            }
            if (id('com.sina.weibo:id/tvNick').exists() && id('com.sina.weibo:id/ivPortrait').exists()) {
                TKB.xgsrizhi("登录成功")
                return true
            }
            if (text("我是男生").exists() && text("我是女生").exists()) {
                if (sex == 1) {
                    TKB.xgsrizhi("选择女生")
                    click("我是女生")
                }
                sleep(1000)
            }
            if (text('点击选择生日').exists()) {
                TKB.xgsrizhi("点击选择生日")
                click('点击选择生日')
                sleep(1000)
            }
            if (id('android:id/date_picker_header_year').exists() && id('android:id/date_picker_header_year').findOnce().text() == (new Date()).getFullYear() && !id('android:id/text1').exists()) {
                id('android:id/date_picker_header_year').findOnce().click()
                sleep(2000)
            }
            if (id('android:id/date_picker_header_year').exists() && id('android:id/text1').exists()) {
                var nums = random(2, 5)
                for (let i = 0; i < nums; i++) {
                    id('android:id/date_picker_year_picker').findOnce().scrollUp()
                    sleep(1000)
                }
                var dates = id('android:id/text1').find()
                dates[random(0, dates.size() - 1)].click()
                is_choice = true
                sleep(2000)
            }
            if (is_choice == true && desc('上个月').exists() && text('确定').exists()) {
                var nums = random(1, 10)
                for (let i = 0; i < nums; i++) {
                    desc('上个月').findOnce().click()
                    sleep(1000)
                }
                var days = id('android:id/month_view').findOnce().children()
                days[random(0, days.size() - 1)].click()
                sleep(1000)
                click('确定')
                sleep(2000)
            }
            if (text("完成").exists() && text('完成').findOnce().enabled() == true) {
                TKB.xgsrizhi("提交性别生日完成")
                click("完成")
                sleep(2000)
            }
            if (text("我选好了").exists()) {
                TKB.xgsrizhi("我选好了")
                click("我选好了")
                sleep(1000)
            }
            // if (text("跳过").exists()) {
            //     TKB.xgsrizhi("跳过")
            //     click("跳过")
            //     sleep(1000)
            // }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (text("帐号异常").exists() && (text("解除异常").exists() || text("立即激活").exists())) {
                if (text("解除异常").exists()) {
                    click("解除异常");
                }
                if (text("立即激活").exists()) {
                    click("立即激活");
                }
                sleep(2000);
                TKB.xgsrizhi("点击账号异常");
            }
            if (text("登录注册后可查看更多").exists() && textEndsWith("一键登录").exists()) {
                textEndsWith("一键登录").click()
                TKB.xgsrizhi("点击弹窗一键登录");
                loginClick++
                sleep(2000)
                if (loginClick >= 3) {
                    TKB.xgsrizhi("账号出现异常，无法登录");
                    return false
                }
            }
            if (textStartsWith("您获取验证码次数超过上限").exists() || textStartsWith("验证码获取次数已超限").exists()) {
                TKB.xgsrizhi("账号验证码次数获取超过上限，明天再试");
                sleep(2000);
                return false;
            }
            if (textStartsWith("该用户不存在").exists()) {
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(8000);
            }
            if (text('帐号异常').exists() && text('请输入手机号码').exists()) {
                click('请输入手机号')
                sleep(2000)
                setText(0, zh)
                sleep(2000)
                desc('下一步').click()
            }
            if (descStartsWith('已发送').exists() || desc('处理中...').exists()) {
                sleep(10000)
                toast('等待人为操作')
            }
            if (text("帐号异常").exists() && desc("提交").exists()) {
                sleep(10000)
                toast('等待人为操作')
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }

}

//换绑
function binding() {
    TKB.xgsrizhi('抖音换绑')
    launch('com.ss.android.ugc.aweme')
    sleep(8000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh('com.ss.android.ugc.aweme')
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                back()
                sleep(1000)
                TKB.qinglihh('com.ss.android.ugc.aweme')
                sleep(3000)
                launch('com.ss.android.ugc.aweme')
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            zonghe()
            if (text("关注").exists() && text("消息").exists() && text("我").exists()) {
                click("我")
                TKB.xgsrizhi("点击我")
                sleep(3000)
            }
            if (textStartsWith("编辑资料").exists() && desc("更多").exists() && text("我").exists()) {
                id("com.ss.android.ugc.aweme:id/d6u").findOnce().click()
                TKB.xgsrizhi("点击更多")
                sleep(3000)
            }
            if (text("设置").exists() && text("更多功能").exists()) {
                id("com.ss.android.ugc.aweme:id/gnm").findOnce().click()
                TKB.xgsrizhi("点击设置")
                sleep(3000)
            }
            if (text("设置").exists() && text("帐号").exists() && text("通用").exists()) {
                swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
                sleep(3000)
                swipe(random(400, 600), random(1300, 1700), random(400, 600), random(500, 900), random(800, 2000))
                sleep(3000)
                if (text("退出登录").exists()) {
                    id("com.ss.android.ugc.aweme:id/c13").findOnce().click()
                    TKB.xgsrizhi("点击退出")
                    sleep(3000)
                }
                if (text("退出").exists() && text("取消").exists()) {
                    click("退出")
                    TKB.xgsrizhi("点击退出")
                    sleep(6000)
                }
            }
            if (text("其他方式登录").exists()) {
                click("其他方式登录")
                TKB.xgsrizhi("点击其他方式登录")
                sleep(3000)
            }
            if (id("com.ss.android.ugc.aweme:id/c82").exists()) {
                id("com.ss.android.ugc.aweme:id/c82").findOnce().click()
                TKB.xgsrizhi("点击微博登录")
                sleep(3000)
            }
            if (id("com.ss.android.ugc.aweme:id/bre").exists()) {
                id("com.ss.android.ugc.aweme:id/bre").findOnce().click()
                TKB.xgsrizhi("点击微博登录")
                sleep(3000)
            }
            if (text("微博登录").exists() && id("com.ss.android.ugc.aweme:id/gxb").exists()) {
                id("com.ss.android.ugc.aweme:id/gxb").findOnce().click()
                TKB.xgsrizhi("点击微博登录")
                sleep(3000)
            }
            if (text("微博登录").exists() && text("确定").exists()) {
                click("确定")
                TKB.xgsrizhi("点击确定")
                sleep(6000)
            }
            if ((text("绑定手机号").exists() || text("一键绑定").exists()) && text("跳过").exists()) {
                click("跳过")
                TKB.xgsrizhi("点击跳过")
                sleep(6000)
            }
            if ((text("绑定手机号").exists() || text("一键绑定").exists()) && !text("跳过").exists()) {
                alert("不能换绑")
                sleep(6000)
                TKB.xgsrizhi("不能换绑")
                TKB.qinglihh(dqbaoming)
                return true
            }
            if ((text("查看通讯录好友").exists() || text("查看通讯录").exists()) && text("跳过").exists()) {
                click("跳过")
                TKB.xgsrizhi("点击跳过")
                sleep(6000)
                toast("换绑完成")
                TKB.xgsrizhi("换绑完成")
                sleep(3000)
                TKB.qinglihh(dqbaoming)
                return true
            }
            if (text("一键登录").exists() && textStartsWith("以其他帐号").exists()) {
                click(659, 1782)
                TKB.xgsrizhi("点击其他帐号登录")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}
//修改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(packageName)
    sleep(10000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(5, 10)
    var tep = 0 //判断编辑资料界面该干啥
    var imgClick = false
        // var name = "0"
        // var jianjie = "你们在干嘛呢"
        // var xb = 0
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie'].split('|||')[0]
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
        if (desc("我").exists()) {
            TKB.xgsrizhi("点击我")
            desc("我").findOnce().click();
            sleep(2000);
        }
        if (id('com.sina.weibo:id/ivPortrait').exists() && text('我').exists()) {
            TKB.xgsrizhi("点击开自己微博主页")
            id('com.sina.weibo:id/ivPortrait').click()
            sleep(2000)
        }
        if (textStartsWith('简介').exists()) {
            TKB.xgsrizhi("点击编辑资料")
            id('com.sina.weibo:id/tvVerifyInfo').click()
            sleep(2000)
        }
        if (text('账号信息').exists()) {
            TKB.xgsrizhi("点击编辑")
            click('编辑')
            sleep(5000)
        }
        if (text('编辑资料').exists() && text('账号信息').exists()) {
            TKB.xgsrizhi("微博编辑资料页面")
                //名字
            if (tep == 0) {
                TKB.xgsrizhi("修改名字")
                if (xs['是否修改名字'] == '是') {
                    if (text('昵称').exists()) {
                        TKB.xgsrizhi("点击昵称")
                        id('com.sina.weibo:id/lyNick').findOnce().click()
                        sleep(5000)
                    }
                    if (desc('确定').exists()) {
                        if (className('android.widget.EditText').findOnce().text() != '请填写昵称') {
                            TKB.xgsrizhi("清空昵称")
                            className('android.widget.EditText').findOnce().setText('')
                            sleep(2000)
                        }
                        setText(0, name)
                        sleep(2000)
                        TKB.xgsrizhi("点击确定")
                        desc('确定').findOnce().click();
                        sleep(2000)
                        if (desc('昵称不可用').exists()) {
                            TKB.xgsrizhi("点击我知道了")
                            click('我知道了')
                            sleep(2000)
                        }
                        if (desc('昵称不可用').exists() && desc("我知道了").exists()) {
                            TKB.xgsrizhi("点击我知道了")
                            desc("我知道了").findOnce().click()
                            sleep(2000)
                            back()
                            TKB.xgsrizhi("返回到编辑资料页")
                            sleep(3000)
                        }
                        if (desc('立即开通').exists()) {
                            TKB.xgsrizhi("点击取消")
                            click('取消')
                            sleep(2000)
                            back()
                            sleep(2000)
                        }
                        if (desc('会员专属昵称推荐:').exists() && desc('昵称不可用').exists()) {
                            TKB.xgsrizhi("返回到编辑资料页")
                            back()
                            sleep(2000)
                        }
                    }
                    if (id("com.sina.weibo:id/tvNickContent").findOnce().text() !== name) {
                        TKB.xgsrizhi("微博昵称不符合")
                        nameflag = '微博昵称不符合'
                    } else {
                        TKB.xgsrizhi("微博昵称符合")
                        nameflag = '微博昵称符合'
                    }
                    tep = 1
                    sleep(3000)
                } else {
                    tep = 1
                    TKB.xgsrizhi("微博昵称不修改")
                    nameflag = '微博昵称不修改'
                }
            }
            //简介
            if (tep == 1) {
                TKB.xgsrizhi("修改简介")
                if (xs['是否修改简介'] == '是') {
                    if (text('简介').exists()) {
                        TKB.xgsrizhi("点击简介")
                        id('com.sina.weibo:id/lyIntro').findOnce().click()
                        sleep(2000)
                    }
                    if (text("编辑简介").exists() && text("完成").exists()) {
                        if (text(jianjie).exists()) {
                            TKB.xgsrizhi("已经是该简介了")
                            jianjieflag = '微博简介符合'
                            sleep(4000)
                            click(88, 150)
                            sleep(3000)
                        } else {
                            TKB.xgsrizhi("填写简介")
                            setText(0, jianjie)
                            sleep(2000)
                            id("com.sina.weibo:id/rltitleSave").findOnce().click()
                            TKB.xgsrizhi("点击完成")
                            sleep(3000)
                            if (id("com.sina.weibo:id/tvIntroContent").findOnce().text() != jianjie) {
                                TKB.xgsrizhi("微博简介不符合")
                                jianjieflag = '微博简介不符合'
                                sleep(3000)
                            } else {
                                TKB.xgsrizhi("微博简介符合")
                                jianjieflag = '微博简介符合'
                                sleep(3000)
                            }
                        }
                        tep = 2
                        sleep(3000)
                    }
                } else {
                    tep = 2
                    TKB.xgsrizhi("简介不做修改")
                    jianjieflag = '微博简介不修改'
                    sleep(3000)
                }
            }
            //性别
            if (tep == 2) {
                if (xs['是否修改性别'] == '是') {
                    if (text("编辑资料").exists() && text("性别").exists()) {
                        if (xs['性别'] == '男') {
                            id("com.sina.weibo:id/lyGender").findOnce().click()
                            TKB.xgsrizhi("点击性别")
                            sleep(3000)
                            if (text("男").exists() && text("女").exists()) {
                                click("男")
                                TKB.xgsrizhi("点击男")
                                sleep(3000)
                            }
                        } else if (xs['性别'] == '男') {
                            id("com.sina.weibo:id/lyGender").findOnce().click()
                            TKB.xgsrizhi("点击性别")
                            sleep(3000)
                            if (text("男").exists() && text("女").exists()) {
                                click("女")
                                TKB.xgsrizhi("点击男")
                                sleep(3000)
                            }
                        }
                        tep = 3
                        sleep(3000)
                    }
                } else {
                    TKB.xgsrizhi("性别不做修改")
                    tep = 3
                    sleep(3000)
                }
            }
            //地区
            if (tep == 3) {
                if (text("编辑资料").exists() && text("所在地").exists()) {
                    id("com.sina.weibo:id/lyAddress").findOnce().click()
                    TKB.xgsrizhi("点击所在地")
                    sleep(3000)
                    if (text("所在地").exists() && text("确定").exists() && text("取消")) {
                        for (let i = 0; i < random(1, 3); i++) {
                            swipe(220, 1400, 193, 1835, 1000)
                            sleep(2000)
                        }
                        sleep(3000)
                        for (let i = 0; i < random(1, 3); i++) {
                            if (random(0, 1) == 0) {
                                swipe(910, random(1887, 1700), 920, random(1363, 1500), 1000)
                            } else {
                                swipe(920, random(1363, 1500), 910, random(1887, 1700), 1000)
                            }
                        }
                        sleep(3000)
                        click("确定")
                        TKB.xgsrizhi("点击确定")
                        sleep(3000)
                    }
                    tep = 4
                    sleep(3000)
                }
            }
            //生日
            if (tep == 4) {
                if (text("编辑资料").exists() && text("生日").exists() && text("请选择").exists()) {
                    var bir = id('com.sina.weibo:id/lyBirthday').findOnce().child(0)
                    bir.click()
                    TKB.xgsrizhi("点击生日")
                    sleep(3000)
                    if (text("编辑你的生日").exists()) {
                        id('com.sina.weibo:id/lyBirthday').findOnce().click()
                        TKB.xgsrizhi("点击生日")
                        sleep(3000)
                        if (text('生日').exists()) {
                            TKB.xgsrizhi("滑动选择生日")
                            if (id("com.sina.weibo:id/year").exists()) {
                                TKB.xgsrizhi("滑动选择年份")
                                for (let i = 0; i < random(18, 30); i++) {
                                    swipe(249, 1532, 228, 1661, 1000)
                                    sleep(2000)
                                }
                            }
                            sleep(1000)
                            if (id("com.sina.weibo:id/month").exists()) {
                                TKB.xgsrizhi("滑动选择月份")
                                for (let i = 0; i < random(1, 3); i++) {
                                    if (random(0, 1) == 0) {
                                        swipe(553, random(1887, 1700), 564, random(1363, 1500), 1000)
                                    } else {
                                        swipe(564, random(1363, 1500), 553, random(1887, 1700), 1000)
                                    }
                                }
                            }
                            sleep(1000)
                            if (id("com.sina.weibo:id/days").exists()) {
                                TKB.xgsrizhi("滑动选择日期")
                                for (let i = 0; i < random(1, 3); i++) {
                                    if (random(0, 1) == 0) {
                                        swipe(910, random(1887, 1700), 920, random(1363, 1500), 1000)
                                    } else {
                                        swipe(920, random(1363, 1500), 910, random(1887, 1700), 1000)
                                    }
                                }
                            }
                            sleep(2000)
                            if (text("完成").exists()) {
                                TKB.xgsrizhi("点击确认")
                                click("完成")
                                sleep(3000)
                            }
                            if (text('确定').exists()) {
                                id("com.sina.weibo:id/rltitleSave").findOnce().click()
                                TKB.xgsrizhi("点击确定")
                                sleep(3000)
                            }
                        }
                    }
                } else if (text("编辑资料").exists() && text("生日").exists() && !text("请选择").exists()) {
                    TKB.xgsrizhi("已经有生日无需修改")
                }
                back()
                sleep(3000)
                back()
                sleep(3000)
                tep = 5
                sleep(3000)
            }
            //头像
            if (tep == 5) {
                TKB.xgsrizhi("修改头像")
                if (xs['是否修改头像'] == '是') {
                    if (id('com.sina.weibo:id/ivPortrait').exists()) {
                        id('com.sina.weibo:id/ivPortrait').click()
                        TKB.xgsrizhi("前往挂件商城")
                        sleep(5000)
                    }
                    if (desc('点击头像可更换照片').exists()) {
                        TKB.xgsrizhi("点击头像")
                        sleep(2000)
                        click(545, 520)
                        sleep(2000)
                        click(560, 1250)
                        sleep(2000)
                    }
                    if (text('相机胶卷').exists() && text('取消').exists()) {
                        TKB.xgsrizhi("点击相机胶卷")
                            // click(418, 333)
                        click("相机胶卷");
                        sleep(2000);
                        if (text("DY").exists()) {
                            click("DY")
                            sleep(2000);
                        }
                        click(100, 300);
                        sleep(2000)
                        if (text('取消').exists() && text('确定').exists()) {
                            TKB.xgsrizhi("点击确定")
                            click('确定')
                            sleep(2000)
                        }
                        if (textStartsWith('下一步').exists()) {
                            TKB.xgsrizhi("点击下一步")
                            textStartsWith('下一步').click()
                            imgClick = true
                            sleep(3000)
                        }
                        if (imgClick = true) {
                            TKB.xgsrizhi("微博头像符合")
                            imgflag = '微博头像符合'
                        } else {
                            TKB.xgsrizhi("微博头像不符合")
                            imgflag = '微博头像不符合'
                        }
                        tep = 6
                        sleep(3000)
                    }
                } else {
                    TKB.xgsrizhi("头像不修改")
                    imgflag = '微博头像不修改'
                    tep = 6
                    sleep(3000)
                }
            }
            if (tep == 6) {
                if (nameflag == '微博昵称符合' && imgflag == '微博头像符合' && jianjieflag == "微博简介符合") {
                    status = 1
                } else {
                    status = 2
                }
                var info = nameflag + ',' + imgflag + ',' + jianjieflag
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                sleep(3000)
                TKB.xgsrizhi("返回到自己的微博主页")
                back()
                sleep(2000)
                back()
                sleep(2000);
                TKB.qinglihh()
                return true
            }
        }
    }
}

//浏览主页
function browseRecommend() {
    TKB.xgsrizhi("微博养号")
    launch(dqbaoming)
    sleep(13000)
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var clickMore = 0
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (desc("首页").exists()) {
                    desc("首页").findOnce().click();
                    TKB.xgsrizhi("点击首页")
                    sleep(2000);
                }
                if (id("com.sina.weibo:id/tv_groupName").text("推荐").exists()) {
                    click("推荐");
                    TKB.xgsrizhi("点击推荐")
                    sleep(2000);
                }
                if (id("com.sina.weibo:id/hroizontalscoll").exists()) {
                    var tabViews = id("com.sina.weibo:id/hroizontalscoll").findOnce().child(0).children();
                    tabViews[random(0, tabViews.size() - 1)].click();
                    TKB.xgsrizhi("随即点击话题")
                    sleep(4000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            zonghe();
            for (let i = 0; i < random(3, 4); i++) {
                TKB.xgsrizhi("博文列表滑动")
                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                sleep(1500);
            }
            swipeCount++;
            if (id("com.sina.weibo:id/lvUser").exists()) {
                var contents = id("com.sina.weibo:id/lvUser").find().filter(function(w) {
                    return w.bounds().left < w.bounds().right
                })[0].children();
                for (let index = 1; index < contents.length; index += random(1, 2)) {
                    if (contents[index].findOne(text("广告"))) {
                        TKB.xgsrizhi("广告 跳过")
                        continue;
                    }
                    if (text('更多...').exists()) {
                        TKB.xgsrizhi("点击更多")
                        click('更多...')
                        TKB.xgsrizhi("点击更多")
                        clicMore++
                        sleep(2000)
                        if (clickMore >= 3) {
                            ifClick = true
                            clickMore = 0
                            break
                        }
                    }
                    contents[index].click();
                    TKB.xgsrizhi("点击博文")
                    sleep(5000);
                    var slipCount = 0;
                    if (text("分享").exists()) {
                        while (text("分享").findOnce().bounds().bottom > 1780 && slipCount < 15) {
                            swipe(random(500, 700), 1250, random(500, 700), 750, 500);
                            sleep(2000);
                            slipCount++;
                        }
                    } else if (id("com.sina.weibo:id/tv_comment_count").exists()) {
                        while (id("com.sina.weibo:id/tv_comment_count").findOnce().bounds().top > 2000 && slipCount < 15) {
                            swipe(random(500, 700), 1250, random(500, 700), 750, 500);
                            sleep(2000);
                            slipCount++;
                        }
                    }
                    if (random(1, 50) == 1) {
                        if (text("赞").exists()) {
                            var like = text("赞").findOnce().bounds();
                            click(like.centerX(), like.centerY())
                            TKB.xgsrizhi("点赞")
                            sleep(2000);
                        }
                    }
                    if (id("com.sina.weibo:id/tv_duration").exists() && random(1, 3) == 1 &&
                        desc("返回").exists() && slipCount < 15) {
                        var videoDuration = id("com.sina.weibo:id/tv_duration").findOnce().text().split(":");
                        var videoTime = Number(videoDuration[0]) * 60 + Number(videoDuration[1]);
                        videoTime = videoTime > 60 ? 60 : videoTime;
                        TKB.xgsrizhi("观看视频，时长为：" + videoTime);
                        if (videoDuration) {
                            if (id("com.sina.weibo:id/shader_view").exists()) {
                                var videoBounds = id("com.sina.weibo:id/shader_view").findOnce().bounds();
                                click(videoBounds.centerX(), videoBounds.centerY());
                                sleep(2000);
                                sleep(videoTime * 1000)
                                back()
                                sleep(2000);
                            } else {
                                sleep(videoTime * 1000)
                            }
                        }
                    }
                    back();
                    TKB.xgsrizhi("返回主页");
                    sleep(2000);
                }
                if (!desc("首页").exists()) {
                    back();
                    sleep(2000);
                }
            } else {
                TKB.xgsrizhi("找不到博文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在微博页面3次 重新启动");
                TKB.qinglihh(packageName);
                sleep(2000);
                launch(packageName);
                sleep(8000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}


//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if ( files.exists("/sdcard/观沧海.mp3")  ==  false) {
            TKB.xgsrizhi("没有音乐文件去下载")    
            TKB.dowmp3()
        }
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
                        TKB.xgsrizhi("renwux=" + renwux + "run_time=" + run_time)
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        TKB.xgsrizhi(renwux)
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续微博任务")
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
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}


//*******************************************************对接服务器*****************************************************************

//执行微博
function zxwb() {
    try {
        toastLog("执行微博任务")
        bofangyy()
        var install_num = 10
        _THREADSSxx = threads.start(function() {
            while (install_num) {
                var baom = getPackageName("微博")
                if (baom != null && TKB.getVerName('微博') != "10.8.3") {
                    TKB.xiezai(dqbaoming)
                    install_num--
                } else if (baom == null) {
                    var bbd = TKB.wdjxiazai("微博", "10.8.3")
                    if (bbd == false) {
                        TKB.xgsrizhi("没安装成功微博")
                        _THREADSS.interrupt()
                        TKB.cunqusj("jiaoben", "tingzhi")
                        java.lang.System.exit(0);
                    }
                } else {
                    break
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = wbdl()
            if (dl == true) {
                if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "养号") {
                    binding()
                        // browseRecommend()
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

zxwb()

// browseRecommend()
// changeInfo()