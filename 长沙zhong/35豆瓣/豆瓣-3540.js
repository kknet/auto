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
var packageName = "com.douban.frodo"; //该项目包名
var xmxh = "35" //项目序号
var qqb_pk = 'com.tencent.mtt'
var commentUrl;
var commentOn, comments, word;
var focusonUrl
var followUrl
var name
var jianjie
var nameflag
var imgflag
var jianjieflag


//*******************************************************豆瓣项目 *****************************************************************


//豆瓣弹窗
function allJudge() {
    if (text('下一步').exists() && textEndsWith('权限').exists()) {
        text('下一步').click()
        sleep(2000);
        TKB.xgsrizhi("同意授权")
    }
    while (text("始终允许").exists()) {
        click("始终允许");
        sleep(2000);
        TKB.xgsrizhi("点击始终允许")
    }
    if (text("确定").exists()) {
        TKB.xgsrizhi("勾选")
        id("com.douban.frodo:id/check_box").findOnce().click()
        sleep(5000)
        TKB.xgsrizhi("点击确定")
        click("确定")
        sleep(5000)
    }
    if (text("喜欢豆瓣吗？").exists()) {
        click("下次再说")
        TKB.xgsrizhi("点击下次再说")
        sleep(2000)
    }
    if (id("com.douban.frodo:id/skip").exists()) {
        id("com.douban.frodo:id/skip").findOnce().click()
        TKB.xgsrizhi("点击跳过")
        sleep(2000)
    }
    if (text("完善资料").exists()) {
        click("写好了")
        TKB.xgsrizhi("点击关闭")
        sleep(2000)
    }
    if (text("查看详情").exists()) {
        TKB.xgsrizhi("点击我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("验证手机号").exists()) {
        TKB.xgsrizhi("点击发送短信");
        desc("立即发送短信").findOnce().click()
        sleep(3000)
        if (text("发送").exists()) {
            TKB.xgsrizhi("点击发送");
            id("com.android.mms:id/gn_send_msg_button").findOnce().click()
            sleep(5000)
            back()
            sleep(8000)
        }
    }
    if (desc("已发送短信，去验证").exists()) {
        TKB.xgsrizhi("点击已发送");
        desc("已发送短信，去验证").findOnce().click()
        sleep(3000)
    }
    if (desc("下载App").exists()) {
        TKB.xgsrizhi("点击下载app关闭");
        desc("Navigate up").findOnce().click()
        sleep(3000)
    }
    if (text("知道了").exists()) {
        TKB.xgsrizhi("点击知道了");
        click("知道了")
        sleep(3000)
    }
}
//豆瓣注册
function login() {
    TKB.xgsrizhi("豆瓣登录")
    launch(packageName)
    sleep(13000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = "18905870854"
    var yzm = "1234"
    var is_verify = 3;
    var is_send = false;
    try {
        if (fun == "评论") {
            var xs = TKB.zhid(sbip, run_id)
            if (xs["作品链接"] == 0 || xs["作品链接"] == '0') {
                TKB.xgsrizhi("未获取到作品链接");
            } else {
                commentUrl = xs["作品链接"];
                TKB.xgsrizhi("获取到作品链接为" + commentUrl);
            }
            if (xs["话术"] == 0 || xs["话术"] == "0") {
                TKB.xgsrizhi("未获取到话术");
            } else {
                commentOn = xs["话术"];
                TKB.xgsrizhi("获取到话术为" + commentOn);
            }
        } else if (fun == "点赞") {
            var xs = TKB.zhid(sbip, run_id)
            if (xs["点赞链接"] == 0 || xs["点赞链接"] == '0') {
                TKB.xgsrizhi("未获取到点赞链接");
            } else {
                focusonUrl = xs["点赞链接"];
                TKB.xgsrizhi("获取到点赞链接为" + focusonUrl);
            }
        } else if (fun == "关注") {
            var xs = TKB.zhid(sbip, run_id)
            if (xs["关注链接"] == 0 || xs["关注链接"] == '0') {
                TKB.xgsrizhi("未获取到作品链接");
            } else {
                followUrl = xs["关注链接"];
                TKB.xgsrizhi("获取到关注链接为" + followUrl);
            }
        }

    } catch (error) {
        TKB.xgsrizhi(error);
    }
    while (true) {
        try {
            allJudge()
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(packageName)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(packageName)
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(packageName)
                return false
            }
            if (text("手机号登录").exists()) {
                click("手机号登录");
                TKB.xgsrizhi("点击手机号登录")
                sleep(2000);
            }
            if (text("一键登录豆瓣").exists()) {
                click("一键登录豆瓣")
                TKB.xgsrizhi("点击一键登录豆瓣")
                sleep(2000);
            }

            if (text("首页").exists() && text("我的").exists()) {
                click(980, 1850)
                TKB.xgsrizhi("点击我的")
                sleep(5000);
                if (id("com.douban.frodo:id/name").exists()) {
                    TKB.xgsrizhi("用户名存在登陆成功")
                    return true
                }
            }
            if (id("com.douban.frodo:id/login_button").exists() &&
                id("com.douban.frodo:id/login_phone").exists()) {
                id("com.douban.frodo:id/login_phone").click();
                sleep(2000);
                TKB.xgsrizhi("点击登录豆瓣")
            }
            if (text("手机号登录/注册").exists() &&
                text("获取验证码").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(packageName)
                    sleep(10000)
                    launch(packageName)
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue;
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(0, zh);
                sleep(2000)
                click("获取验证码")
                is_send = true;
                TKB.xgsrizhi("点击获取验证码")
                sleep(random(10000, 15000));
            }
            if (text("输入验证码").exists() && (textEndsWith("后重新获取").exists() ||
                    text("重新获取验证码").exists())) {
                if (text('重新获取验证码').exists() && is_send == false) {
                    for (let i = 0; i < 4; i++) {
                        setText(i, "");
                        sleep(700)
                    }
                    click('重新获取验证码')
                    TKB.xgsrizhi("点击重新获取验证码")
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("豆瓣")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(packageName)
                    sleep(10000)
                    launch(packageName)
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    if (is_send == true) {
                        TKB.xgsrizhi("输入验证码" + yzm)
                        for (let i = 0; i < 4; i++) {
                            setText(i, yzm[i]);
                            sleep(700)
                        }
                        sleep(6000);
                        is_send = false;
                    }
                }
            }
            if (text("请输入图中校验码") && text("校验码").exists()) {
                toast("等待人为操作");
                TKB.xgsrizhi("等待人为操作")
                sleep(10 * 1000);
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}
//滑动
function slide() {
    var pageTime = random(10, 15)
    var pageStart = (new Date()).getTime()
    while (true) {
        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
            TKB.xgsrizhi("内容滑动")
            swipe(random(500, 600), 1600, random(500, 600), 500, 1000)
            sleep(2000)
        } else {
            break
        }
    }
}
//关注
function follow() {
    var startTime = (new Date()).getTime()
    var xs = TKB.zhid(sbip, run_id)
        // followUrl = "https://www.douban.com/doubanapp/dispatch?uri=/status/3075433193/"
    followUrl = xs['关注链接']
    setClip(followUrl)
    launch(qqb_pk)
    sleep(5000);
    while (1) {
        try {
            allJudge();
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if (followUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }

                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
                    TKB.xgsrizhi("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    text('粘贴').findOnce().parent().click()
                    TKB.xgsrizhi("点击粘贴");
                    sleep(3000)
                }
                if (text('进入').exists()) {
                    text('进入').findOnce().click()
                    TKB.xgsrizhi("点击进入");
                    sleep(8000);
                }
                if (!text("打开App").exists()) {
                    TKB.xgsrizhi("点击打开豆瓣链接");
                    click("打开App")
                    sleep(3000)
                } else {
                    TKB.xgsrizhi("点击坐标打开豆瓣链接");
                    click(905, 538)
                    sleep(3000)
                }
                if (text("广告").exists()) {
                    TKB.xgsrizhi("点击关闭广告");
                    // id("dismiss-button").findOnce().click()
                    click("关闭广告")
                    sleep(3000)
                }
                if (text("豆瓣.apk").exists()) {
                    TKB.xgsrizhi("有弹窗按一下返回");
                    sleep(3000)
                    back()
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(10000);
                }

                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch(qqb_pk);
                    sleep(8000);
                }
                //进入到文章链接
                if (id("com.douban.frodo:id/icon_react").exists()) {
                    for (let i = 0; i < 5; i++) {
                        swipe(random(500, 600), 1300, random(500, 600), 500, 1000)
                        sleep(2000)
                        swipe(random(500, 600), 500, random(500, 600), 800, 1000)
                        sleep(2000)
                    }
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if (text("相似内容").exists()) {
                            if (text("相似内容").findOnce().bounds().top < 1800) {
                                TKB.xgsrizhi("出现相似内容")
                                break
                            }
                        }
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            TKB.xgsrizhi("内容滑动")
                            swipe(random(500, 600), 1500, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    if (text("关注").exists() || desc("关注").exists) {
                        TKB.xgsrizhi("关注")
                        click("关注")
                        TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                        sleep(3000)
                        TKB.qinglihh(packageName)
                        sleep(2000)
                        return true
                    }
                }
            } else {
                toast("未获取到评论链接")
                TKB.xgsrizhi("未获取到评论链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
}
//点赞
function focusOn() {
    var startTime = (new Date()).getTime()
        // var urlStart = (new Date()).getTime();
        // var urlInterval = random(5, 10) * 60 * 1000;
    var xs = TKB.zhid(sbip, run_id)
        // focusonUrl = "https://www.douban.com/doubanapp/dispatch?uri=/note/756037003/"
    focusonUrl = xs['点赞链接']
    setClip(focusonUrl)
    launch(qqb_pk)
    sleep(5000);
    while (1) {
        try {
            allJudge();
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if (focusonUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }

                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
                    TKB.xgsrizhi("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    text('粘贴').findOnce().parent().click()
                    TKB.xgsrizhi("点击粘贴");
                    sleep(3000)
                }
                if (text('进入').exists()) {
                    text('进入').findOnce().click()
                    TKB.xgsrizhi("点击进入");
                    sleep(8000);
                }
                if (!text("打开App").exists()) {
                    TKB.xgsrizhi("点击打开豆瓣链接");
                    click("打开App")
                    sleep(3000)
                } else {
                    TKB.xgsrizhi("点击坐标打开豆瓣链接");
                    click(905, 538)
                    sleep(3000)
                }
                if (text("广告").exists()) {
                    TKB.xgsrizhi("点击关闭广告");
                    // id("dismiss-button").findOnce().click()
                    click("关闭广告")
                    sleep(3000)
                }
                if (text("豆瓣.apk").exists()) {
                    TKB.xgsrizhi("有弹窗按一下返回");
                    sleep(3000)
                    back()
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(10000);
                }

                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch(qqb_pk);
                    sleep(8000);
                }
                //进入到文章链接
                if (id("com.douban.frodo:id/icon_react").exists()) {
                    for (let i = 0; i < 5; i++) {
                        swipe(random(500, 600), 1300, random(500, 600), 500, 1000)
                        sleep(2000)
                        swipe(random(500, 600), 500, random(500, 600), 800, 1000)
                        sleep(2000)
                    }
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if (text("相似内容").exists()) {
                            if (text("相似内容").findOnce().bounds().top < 1800) {
                                TKB.xgsrizhi("出现相似内容")
                                break
                            }
                        }
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            TKB.xgsrizhi("内容滑动")
                            swipe(random(500, 600), 1500, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    if (id("com.douban.frodo:id/icon_react").exists()) {
                        id("com.douban.frodo:id/icon_react").findOnce().click()
                        TKB.xgsrizhi("点赞")
                        TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                        sleep(3000)
                        TKB.qinglihh(packageName)
                        sleep(2000)
                        return true
                    }
                }
            } else {
                toast("未获取到点赞链接")
                TKB.xgsrizhi("未获取到点赞链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
}
//评论
function comment() {
    TKB.xgsrizhi("豆瓣评论")
    launch(packageName)
    sleep(13000);
    var startTime = (new Date()).getTime()
        // var urlStart = (new Date()).getTime();
        // var urlInterval = random(5, 10) * 60 * 1000;
    var xs = TKB.zhid(sbip, run_id)
        // commentUrl = "https://www.douban.com/doubanapp/dispatch?uri=/note/756037003/"
    commentUrl = xs['作品链接']
        // commentOn = "好笑^_^"
    commentOn = xs['话术'];
    comments = commentOn.split("|");
    word = comments[random(0, comments.length - 1)];
    TKB.xgsrizhi("获取到的话术为" + word);
    setClip(commentUrl)
    launch(qqb_pk)
    sleep(5000);
    while (1) {
        try {
            allJudge();
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if (commentUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
                    TKB.xgsrizhi("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    text('粘贴').findOnce().parent().click()
                    TKB.xgsrizhi("点击粘贴");
                    sleep(3000)
                }
                if (text('进入').exists()) {
                    text('进入').findOnce().click()
                    TKB.xgsrizhi("点击进入");
                    sleep(13000);
                }
                if (text("打开App").exists()) {
                    TKB.xgsrizhi("点击坐标打开豆瓣链接");
                    click(905, 538)
                    sleep(3000)
                }
                if (text("广告").exists()) {
                    TKB.xgsrizhi("点击关闭广告");
                    // id("dismiss-button").findOnce().click()
                    click("关闭广告")
                    sleep(3000)
                }
                if (text("豆瓣.apk").exists()) {
                    TKB.xgsrizhi("有弹窗按一下返回");
                    sleep(3000)
                    back()
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(15000);
                }

                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch(qqb_pk);
                    sleep(8000);
                }
                //进入到文章链接
                if (id("com.douban.frodo:id/icon_comment").exists()) {
                    for (let i = 0; i < 5; i++) {
                        swipe(random(500, 600), 1300, random(500, 600), 500, 1000)
                        sleep(2000)
                        swipe(random(500, 600), 500, random(500, 600), 800, 1000)
                        sleep(2000)
                    }
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if (text("相似内容").exists()) {
                            if (text("相似内容").findOnce().bounds().top < 1800) {
                                TKB.xgsrizhi("出现相似内容")
                                break
                            }
                        }
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            TKB.xgsrizhi("内容滑动")
                            swipe(random(500, 600), 1500, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    TKB.xgsrizhi("点击评论按钮");
                    id("com.douban.frodo:id/icon_comment").findOnce().click()
                    sleep(3000)
                }
                // if (id("com.douban.frodo:id/icon_comment").exists()) {}
                if (id("com.douban.frodo:id/input_comment_fake_bg").exists()) {
                    TKB.xgsrizhi("点击写回复框");
                    id("com.douban.frodo:id/input_comment_fake_bg").findOnce().click()
                    sleep(3000)
                    if (text("确定").exists()) {
                        TKB.xgsrizhi("点击确定加入小组");
                        click("确定")
                        sleep(3000)
                    }
                    if (text("加入小组").exists()) {
                        TKB.xgsrizhi("点击确定加入小组");
                        click("加入小组")
                        sleep(3000)
                    }
                    // allJudge()
                    if (text("发布").exists()) {
                        setText(0, word)
                        TKB.xgsrizhi("输入评论");
                        sleep(5000)
                        click("发布")
                        TKB.xgsrizhi("点击发布");
                        TKB.upkfrenw(sbip,  user_id,  yhbh,  run_id)
                        sleep(5000)
                        TKB.qinglihh(packageName)
                        sleep(2000)
                        return true

                    }
                }
            } else {
                toast("未获取到作品链接")
                TKB.xgsrizhi("未获取到作品链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}
//豆瓣养号
function dbyh() {
    TKB.xgsrizhi('豆瓣养号')
    launch(packageName)
    sleep(12000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    var a = 0
    var tem = 0
    var tj_time = random(30, 40)
    var temx = 0
    var rb_time = random(10, 20)
    var sjSort = random(0, 1)
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh(packageName)
                break
            }
            // if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            //     TKB.xgsrizhi('超时没在首页')
            //     back()
            //     sleep(1000)
            //     TKB.qinglihh(packageName)
            //     sleep(3000)
            //     launch(packageName)
            //     sleep(2000)
            //     TSD = (new Date()).getTime()
            //     tem = 0
            // }
            if (a == 0) {
                var tj = (new Date()).getTime()
                TKB.xgsrizhi("刷推荐")
                while (1) {
                    if ((new Date()).getTime() - tj > tj_time * 60 * 1000) {
                        TKB.xgsrizhi('去刷书影音')
                        a = 1
                        break
                    }
                    if (tem == 0) {
                        click('首页')
                        TKB.xgsrizhi('点击首页')
                        sleep(6000)
                        tem = 1
                    }
                    allJudge()
                    for (let i = 0; i < random(2, 4); i++) {
                        TKB.xgsrizhi("推荐滑动");
                        swipe(random(500, 700), 1500, random(500, 700), 500, 2000);
                        sleep(2000);
                    }
                    var tabViews = id("com.douban.frodo:id/swipe_refresh_layout").find().filter(function(w) {
                        return w.bounds().right > 0
                    })[0].child(0).children()
                    sleep(2000)
                    for (let i = 0; i < tabViews.length; i++) {
                        if (text("广告").exists()) {
                            TKB.xgsrizhi("广告,跳过");
                            continue;
                        }
                        if (id("com.douban.frodo:id/group_container").exists()) {
                            TKB.xgsrizhi("豆瓣小组,跳过");
                            continue
                        }
                        sleep(2000)
                        tabViews[i].click()
                        TKB.xgsrizhi("点击文章");
                        sleep(5000)
                        slide()
                            // if (random(1, 50) == 1) {
                            //     if (id("com.douban.frodo:id/icon_react").exists()) {
                            //         var like = id("com.douban.frodo:id/icon_react").findOnce();
                            //         click(like.centerX(), like.centerY())
                            //         TKB.xgsrizhi("点赞")
                            //         sleep(2000);
                            //     }
                            // }
                        back()
                        sleep(2000)
                    }
                }
            }
            if (a == 1) {
                TKB.xgsrizhi("刷书影音")
                var rb = (new Date()).getTime()
                while (1) {
                    try {
                        if ((new Date()).getTime() - rb > rb_time * 60 * 1000) {
                            TKB.xgsrizhi('全部执行完毕，退出')
                            TKB.qinglihh()
                            return true
                        }
                        if (temx == 0) {
                            if (id("com.douban.frodo:id/title").text("书影音").exists()) {
                                click(336, 1826)
                                TKB.xgsrizhi("点击书影音");
                                sleep(15000)
                            }
                            if (id("com.douban.frodo:id/subject_tab_strip").exists()) {
                                var sort = id("com.douban.frodo:id/subject_tab_strip").findOnce().child(0).children()
                                sort[sjSort].click()
                                TKB.xgsrizhi("随机点分类")
                            }
                            temx = 1
                            sleep(8000)
                        }
                        if (sjSort == 0) {
                            TKB.xgsrizhi("刷电影")
                                // if (descContains('豆瓣热门').exists()) {
                                //     TKB.xgsrizhi("点击豆瓣热门");
                                //     click(500, 715)
                                //     sleep(5000)
                                // }
                            if (descContains('豆瓣热门').exists()) {
                                TKB.xgsrizhi("点击豆瓣热门全部");
                                click(932, 725)
                                sleep(15000)
                            }
                            if (text("豆瓣热门").exists()) {
                                click("豆瓣热门")
                                TKB.xgsrizhi("点击豆瓣热门");
                                sleep(6000)
                            }
                            allJudge()
                            for (let i = 0; i < random(3, 5); i++) {
                                TKB.xgsrizhi("热门列表滑动");
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(2000);
                            }
                            if (text("热门电影").exists()) {
                                var movieView = desc("(").find().filter(function(w) {
                                    return w.bounds().top < w.bounds().bottom && w.bounds().left > 0
                                })
                                for (let i = 0; i < movieView.length; i++) {
                                    click(movieView[i].bounds().centerX(), movieView[i].bounds().centerY())
                                    TKB.xgsrizhi("点击影片");
                                    sleep(5000)
                                    allJudge()
                                    if (text("影评列表").exists()) {
                                        while (text("影评列表").findOnce().bounds().top > 1200) {
                                            swipe(random(500, 700), 1400, random(500, 700), 500, 1000);
                                            sleep(2000);
                                        }
                                        TKB.xgsrizhi("滑动");
                                        swipe(random(500, 700), 1200, random(500, 700), 500, 1000);
                                        sleep(3000)
                                    }
                                    if (id("com.douban.frodo:id/list_view").exists()) {
                                        for (let i = 0; i < random(3, 5); i++) {
                                            TKB.xgsrizhi("影评列表滑动");
                                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                            sleep(2000);
                                        }
                                        var listView = id("com.douban.frodo:id/list_view").findOnce().children()
                                        for (let j = 0; j < listView.size(); j++) {
                                            sleep(2000)
                                            listView[j].click()
                                            TKB.xgsrizhi("点击影评");
                                            sleep(7000)
                                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                                TKB.xgsrizhi("影评滑动");
                                                slide()
                                                back()
                                                sleep(2000)
                                            }
                                        }
                                    }
                                    TKB.xgsrizhi("返回热门电影列表");
                                    back()
                                    sleep(2000)
                                }
                            }
                        } else if (sjSort == 1) {
                            TKB.xgsrizhi("刷电视")
                            if (descContains('热播新剧').exists()) {
                                TKB.xgsrizhi("点击热播新剧全部");
                                click(932, 725)
                                sleep(15000)
                            }
                            allJudge()
                            for (let i = 0; i < random(2, 3); i++) {
                                TKB.xgsrizhi("热门列表滑动");
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(2000);
                            }
                            if (text("热播剧集").exists()) {
                                var tvplayView = desc("(").find().filter(function(w) {
                                    return w.bounds().top < w.bounds().bottom && w.bounds().left < 1063
                                })
                                for (let i = 0; i < tvplayView.length; i++) {
                                    sleep(2000)
                                    click(tvplayView[i].bounds().centerX(), tvplayView[i].bounds().centerY())
                                    TKB.xgsrizhi("点击电视剧");
                                    sleep(5000)
                                    allJudge()
                                    if (text("剧评列表").exists()) {
                                        while (text("剧评列表").findOnce().bounds().top > 1200) {
                                            swipe(random(500, 700), 1400, random(500, 700), 500, 1000);
                                            sleep(2000);
                                        }
                                        TKB.xgsrizhi("滑动");
                                        swipe(random(500, 700), 1200, random(500, 700), 500, 1000);
                                        sleep(3000)
                                    }
                                    if (id("com.douban.frodo:id/list_view").exists()) {
                                        for (let i = 0; i < random(3, 5); i++) {
                                            TKB.xgsrizhi("影评列表滑动");
                                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                            sleep(2000);
                                        }
                                        var listView = id("com.douban.frodo:id/list_view").findOnce().children()
                                        for (let j = 0; j < listView.size(); j++) {
                                            sleep(2000)
                                            listView[j].click()
                                            TKB.xgsrizhi("点击剧评");
                                            sleep(7000)
                                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                                TKB.xgsrizhi("剧评滑动");
                                                slide()
                                                back()
                                                sleep(2000)
                                            }
                                        }
                                    }
                                    TKB.xgsrizhi("返回热播剧集列表");
                                    back()
                                    sleep(2000)
                                }
                            }
                        }
                    } catch (error) {
                        TKB.xgsrizhi(error);
                        sleep(2000)
                    }
                }
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }

    }
}
//豆瓣改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(packageName)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0 //判断编辑资料界面该干啥
        // var sex = random(0, 1)
    var imgClick = false
        // var name = "0"
        // var jianjie = "你们在干嘛呢"
        // var xb = 0
    var a = 0
    var nf = random(1992, 2000)
    var zz = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    var yf = zz[Math.floor(Math.random() * zz.length)]
    var sub = contains(zz, yf)
    var rq = random(1, 28)
    var x = rq + ' ' + yf + '月 ' + nf
    TKB.xgsrizhi(x)
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        var name = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        var jianjie = zz['jianjie'].split('|||')[0]
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
        allJudge()
        if (text("首页").exists() && text("我的").exists()) {
            TKB.xgsrizhi("点击我的")
            click(980, 1850)
            sleep(5000);
        }
        if (text("个人主页").exists() && id("com.douban.frodo:id/header_content").exists()) {
            TKB.xgsrizhi("点击")
            click("个人主页")
            sleep(2000)
        }
        if (text("个人主页").exists() && text("编辑个人资料").exists()) {
            TKB.xgsrizhi("点击编辑资料")
            click("编辑个人资料")
            sleep(2000)
        }
        if (text("编辑个人资料").exists() && text("保存").exists() && text("取消").exists()) {
            TKB.xgsrizhi("编辑资料界面")
                //名字
            if (tep == 0) {
                if  (xs['是否修改名字']  ==  '是') {
                    TKB.xgsrizhi("修改名字")
                    sleep(300)
                    if (id("com.douban.frodo:id/input_name").exists()) {
                        if (text("昵称").exists()) {
                            TKB.xgsrizhi("清空原有的名字")
                            id("com.douban.frodo:id/input_name").findOnce().setText("")
                            sleep(3000)
                            TKB.xgsrizhi("添加新的名字")
                            id("com.douban.frodo:id/input_name").findOnce().setText(name);
                            sleep(3000)
                        }
                    }
                    if (id("com.douban.frodo:id/input_name").findOnce().text() != name) {
                        TKB.xgsrizhi("豆瓣昵称不符合")
                        nameflag = '豆瓣昵称不符合'
                    } else {
                        TKB.xgsrizhi("豆瓣昵称符合")
                        nameflag = '豆瓣昵称符合'
                    }
                    tep = 1
                } else {
                    tep = 1
                    TKB.xgsrizhi("昵称不做修改") 
                    nameflag  =  '豆瓣昵称不修改'
                }
                sleep(3000)
            }
            //简介
            if (tep == 1) {
                if  (xs['是否修改简介']  ==  '是') {
                    if (id("com.douban.frodo:id/input_intro").exists()) {
                        TKB.xgsrizhi("修改简介")
                        if (text(jianjie).exists()) {
                            TKB.xgsrizhi("已经是该简介了")
                            sleep(2000)
                        } else {
                            TKB.xgsrizhi("填写简介")
                            id("com.douban.frodo:id/input_intro").findOnce().setText(jianjie)
                            sleep(2000)
                        }
                        if (id("com.douban.frodo:id/input_intro").findOnce().text() != jianjie) {
                            TKB.xgsrizhi("豆瓣简介不符合")
                            jianjieflag = '豆瓣简介不符合'
                        } else {
                            TKB.xgsrizhi("豆瓣简介符合")
                            jianjieflag = '豆瓣简介符合'
                        }
                        tep = 2
                        sleep(3000)
                    }
                } else {
                    tep = 2
                    TKB.xgsrizhi("简介不做修改") 
                    jianjieflag =  '豆瓣简介不修改'
                    sleep(3000)
                }
            }
            //性别
            if (tep == 2) {
                if  (xs['是否修改性别']  ==  '是') {
                    if (text("男").exists() && text("女").exists()) {
                        TKB.xgsrizhi("修改性别")
                        if (xs['性别'] == '男') {
                            if (TKB.zhaose('if isColor(262,922,0x4f9ded,80) and isColor(205,923,0x4f9ded,80) and isColor(224,891,0x4f9ded,80) and isColor(248,960,0x4f9ded,80) and isColor(261,944,0x4f9ded,80) and isColor(208,947,0x4f9ded,80) and isColor(200,930,0x4f9ded,80) and isColor(224,895,0x4f9ded,80) and isColor(255,948,0x4f9ded,80) and isColor(207,959,0x4f9ded,80) then')) {
                                TKB.xgsrizhi("已经是男生")
                                tep = 3
                                sleep(3000)
                            } else {
                                TKB.xgsrizhi("修改男生")
                                id("com.douban.frodo:id/male").findOnce().click()
                                sleep(2000)
                                tep = 3
                                sleep(3000)
                            }
                        } else if (xs['性别'] == '女') {
                            if (TKB.zhaose('if isColor(262,922,0x4f9ded,80) and isColor(205,923,0x4f9ded,80) and isColor(224,891,0x4f9ded,80) and isColor(248,960,0x4f9ded,80) and isColor(261,944,0x4f9ded,80) and isColor(208,947,0x4f9ded,80) and isColor(200,930,0x4f9ded,80) and isColor(224,895,0x4f9ded,80) and isColor(255,948,0x4f9ded,80) and isColor(207,959,0x4f9ded,80) then')) {
                                TKB.xgsrizhi("已经是女生")
                                tep = 3
                                sleep(3000)
                            } else {
                                TKB.xgsrizhi("女生")
                                id("com.douban.frodo:id/female").findOnce().click()
                                sleep(2000)
                                tep = 3
                                sleep(3000)
                            }
                        }
                    }
                } else {
                    TKB.xgsrizhi("性别不做修改") 
                    tep = 3
                    sleep(3000)
                }
            }
            //头像
            if (tep == 3) {
                if  (xs['是否修改头像']  ==  '是') {
                    TKB.xgsrizhi("修改头像")
                    if (id('com.douban.frodo:id/avatar').exists()) {
                        id('com.douban.frodo:id/avatar').findOnce().click()
                        sleep(2000)
                        if (text("全部").exists()) {
                            TKB.xgsrizhi("点击全部，选择相册")
                            click("全部");
                            sleep(2000);
                            if (text("DY").exists()) {
                                TKB.xgsrizhi("点击DY相册")
                                click("DY")
                                sleep(2000);
                            }
                        }
                        if (text("DY").exists()) {
                            TKB.xgsrizhi("已经在DY相册")
                            sleep(2000);
                        }
                        click(554, 403);
                        sleep(2000)
                        if (text('确定').exists()) {
                            TKB.xgsrizhi("点击确定")
                            click('确定')
                            sleep(2000)
                        }
                        if (text('完成').exists()) {
                            TKB.xgsrizhi("点击完成")
                            click('完成')
                            imgClick = true
                            sleep(3000)
                            if (imgClick = true) {
                                TKB.xgsrizhi("豆瓣头像符合")
                                imgflag = '豆瓣头像符合'
                            } else {
                                TKB.xgsrizhi("豆瓣头像不符合")
                                imgflag = '豆瓣头像不符合'
                            }
                        }
                        tep = 4
                        sleep(3000)
                    }
                } else {
                    TKB.xgsrizhi("头像不修改") 
                    imgflag =  '豆瓣头像不修改'
                    tep = 4
                    sleep(3000)
                }
            }
            //城市
            if (tep == 4) {
                if (text("编辑个人资料").exists() && text("城市").exists()) {
                    id("com.douban.frodo:id/city_layout").findOnce().click()
                    TKB.xgsrizhi("点击城市")
                    sleep(3000)
                    while (1) {
                        try {
                            var y = 0
                            if (!text('昵称').exists() && !text('城市').exists()) {
                                if (y == 0) {
                                    swipe(500, 1800, 500, 500, 800)
                                    sleep(3000)
                                }
                                var z = id('android:id/text1').find()
                                for (var i = 0; i < z.size(); i++) {
                                    if (random(0, 6) == 5) {
                                        click(z[i].text())
                                        x = z[i].text()
                                        sleep(3000)
                                        y = 1
                                        break
                                    }
                                }
                            }
                            if (text('城市').exists()) {
                                var xx = TKB.getAllTexts()
                                if (xx.indexOf(x) != -1 || textContains(x).findOnce()) {
                                    toastLog('地区设置成功')
                                    TKB.xgsrizhi('地区设置成功')
                                    tep = 6
                                    break
                                } else {
                                    TKB.xgsrizhi('点击地区')
                                    click('地区')
                                    sleep(2000)
                                }
                            }
                        } catch (error) {
                            toastLog('error')
                            sleep(1000)
                        }
                    }
                    tep = 5
                    sleep(3000)
                }
            }
            //生日
            if (tep == 5) {
                if (text("编辑个人资料").exists() && text("生日").exists() && text("选择生日（选填）").exists()) {
                    id("com.douban.frodo:id/birthday_layout").findOnce().click()
                    TKB.xgsrizhi("点击生日")
                    sleep(3000)
                    if (text("选择生日").exists()) {
                        id('android:id/date_picker_header_year').findOnce().click()
                        TKB.xgsrizhi("点击年份")
                        sleep(3000)
                        while (1) {
                            if (a == 0) {
                                if (text(nf).exists()) {
                                    click(nf)
                                    TKB.xgsrizhi('找到年份')
                                    a = 1
                                    sleep(3000)
                                } else {
                                    swipe(700, 1100, 532, 900, 2000)
                                    sleep(3000)
                                }
                            }
                            if (a == 1) {
                                if (sub < 5) {
                                    id('android:id/prev').click()
                                    sleep(3000)
                                    sub++
                                } else if (sub > 5) {
                                    id('android:id/next').click()
                                    sleep(3000)
                                    sub--
                                } else if (sub = 5) {
                                    text(rq).findOnce().click()
                                        // var day = text(rq).findOnce().bounds()
                                        // click(day.centerX(), day.centerY())
                                    TKB.xgsrizhi('点击日期')
                                    sleep(3000)
                                    click("确定")
                                    TKB.xgsrizhi('点击确定')
                                    break
                                }
                            }
                        }
                        if (text('编辑个人资料').exists() && text('保存').exists()) {
                            TKB.xgsrizhi("点击保存")
                            click("保存")
                            tep = 6
                            sleep(8000)
                        }
                    }
                } else {
                    TKB.xgsrizhi("已有生日无需修改")
                    if (text('编辑个人资料').exists() && text('保存').exists()) {
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        tep = 6
                        sleep(8000)
                    }
                }
            }
            //上传
            if (tep == 6) {
                if (text('编辑个人资料').exists() && text('保存').exists()) {
                    TKB.xgsrizhi("30天之内只能修改两次资料")
                    toast("30天之内只能修改两次资料")
                    imgflag = '豆瓣头像不符合'
                    nameflag = '豆瓣昵称不符合'
                    jianjieflag == '豆瓣简介不符合'
                }
                if (nameflag == '豆瓣昵称符合' && imgflag == '豆瓣头像符合' && jianjieflag == '豆瓣简介符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = nameflag + ',' + imgflag + ',' + jianjieflag
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh();
                return true
            }
        }
    }
}
//获取下标
function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
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
                        TKB.xgsrizhi("继续抖音任务")
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

//执行豆瓣
function main() {
    try {
        toastLog("执行豆瓣任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var app_list = [
                ['豆瓣', '6.39.0'],
                ['QQ浏览器', '10.5.1.7230']
            ]
            app_list.forEach(element => {
                var install_num = 10
                while (install_num) {
                    var baom = getPackageName(element[0])
                    if (baom != null && TKB.getVerName(element[0]) != element[1]) {
                        TKB.xiezai(packageName)
                        install_num--
                    } else if (baom == null) {
                        var bbd = TKB.wdjxiazai(element[0], element[1])
                        if (bbd == false) {
                            TKB.xgsrizhi(element[0] + "安装失败")
                            _THREADSS.interrupt()
                            TKB.cunqusj("jiaoben", "tingzhi")
                            java.lang.System.exit(0);
                        }
                    } else {
                        break;
                    }
                }
            });
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var iflogin = login()
            if (iflogin == true) {
                if (fun == "养号") {
                    dbyh()
                } else if (fun == "点赞") {
                    focusOn()
                } else if (fun == "评论") {
                    comment()
                } else if (fun == "关注") {
                    follow()
                } else if (fun == "修改资料") {
                    changeInfo()
                }
            } else {
                // alert("点击次数过多", "请稍后重试");
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

main()

// comment()
// login()

// changeInfo()
// dbyh()
// follow()