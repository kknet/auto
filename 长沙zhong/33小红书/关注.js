var focusonUrl;
var clickOther;
var clickFocuson;

//关注用户
function focusOn() {
    // var xs = TKB.zhid(sbip, run_id)
    clickFocuson = xs["关注方式"];
    TKB.xgsrizhi("获取到第" + clickFocuson + "种")
    clickOther = xs["关注人数"];
    TKB.xgsrizhi("获取到关注人数" + clickOther)
    if (xs["关注链接"] == 0 || xs["关注链接"] == '0') {
        TKB.xgsrizhi("未获取到关注链接")
    } else {
        focusonUrl = xs['关注链接']
        focusonFlag = true;
        TKB.xgsrizhi("获取到关注链接为" + focusonUrl)
    }
    var statrtTime = (new Date()).getTime()
    var RT = (new Date()).getTime()
    setClip(focusonUrl)
    launch('com.tencent.mtt')
    var lpp = 0
    TKB.xgsrizhi("打开浏览器");
    sleep(20000);
    while (1) {
        try {
            sleep(5000);
            popUp();
            if (text("以后再说").exists() && text("立即更新").exists()) {
                click("以后再说");
                TKB.xgsrizhi("以后再说")
                sleep(2000);
            }
            if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - statrtTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时跳出");
                TKB.qinglihh()
                sleep(2000)
                setClip(focusonUrl)
                launch('com.tencent.mtt')
                sleep(1000)
                statrtTime = (new Date()).getTime()
            }
            if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                TKB.xgsrizhi("腾讯应用宝下载");
                TKB.qinglihh()
                setClip(focusonUrl)
                sleep(3000)
                launch('com.tencent.mtt')
                statrtTime = (new Date()).getTime()
            }
            if (focusonUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        click("搜索或输入网址");
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (text("以后再说").exists() && text("立即更新").exists()) {
                    click("以后再说");
                    TKB.xgsrizhi("以后再说")
                    sleep(2000);
                }
                popUp();
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    sleep(5000)
                    popUp();
                    sleep(2000)
                    id('com.tencent.mtt:id/search_frame_input_bar').findOnce().longClick()
                    TKB.xgsrizhi("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    click("粘贴");
                    TKB.xgsrizhi("点击粘贴");
                    sleep(3000)
                }
                if (text('进入').exists()) {
                    text('进入').findOnce().click()
                    TKB.xgsrizhi("点击进入");
                    sleep(8000);
                    // let waitTime = 0;
                    // while (text('' + focusonUrl).exists() && waitTime < 5) {
                    //     sleep(5000);
                    //     toast("等待网页结果显示")
                    //     TKB.xgsrizhi("等待网页结果显示");
                    //     waitTime++;
                    // }
                }
                if (id("android:id/content").exists()) {
                    sleep(5000);
                }
                if (!text('打开App').exists()) {
                    TKB.xgsrizhi("点击坐标");
                    click(550, 1525)
                    sleep(3000)
                } else {
                    click("打开App");
                    TKB.xgsrizhi("点击立即打开 跳转小红书");
                    sleep(3000)
                }
                if (text("小红书.apk").exists()) {
                    TKB.xgsrizhi("有弹窗按一下返回");
                    sleep(3000)
                    back()
                }

                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(12000);
                }
                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch('com.tencent.mtt');
                    sleep(8000);
                }
                if (textStartsWith("向右滑动滑块").exists() || text('我要反馈').exists()) {
                    TKB.xgsrizhi("滑块验证码")
                    var zz = get_verify()
                    log(zz)
                    sleep(2000)
                    var x = zz[0]
                    swipe(190, 1257, x - 10, 1257, random(1200, 1500))
                    sleep(1000)
                        // TKB.xgsrizhi("滑块验证码成功")
                        // toastLog("滑块验证码成功")
                }
                //进入到了用户页面
                if (id("com.xingin.xhs:id/c53").exists() && id("com.xingin.xhs:id/k5").exists()) {
                    if (clickFocuson == 0) {
                        if (id("com.xingin.xhs:id/v7").exists()) {
                            id("com.xingin.xhs:id/v7").findOnce().click()
                            TKB.xgsrizhi("点击被关注用户的第一条笔记");
                            sleep(5000)
                        } else {
                            if (id("com.xingin.xhs:id/d9v").exists()) {
                                id("com.xingin.xhs:id/d9v").findOnce().click()
                                TKB.xgsrizhi("没有笔记 点击关注按钮");
                                sleep(5000);
                            }
                        }
                        if (id("com.xingin.xhs:id/nickNameTV").exists()) {
                            popUp()
                            TKB.xgsrizhi("图文笔记")
                            swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                            if (id("com.xingin.xhs:id/aqq").exists()) {
                                var pageContent = id("com.xingin.xhs:id/aqq").findOnce().text().split("/")
                                var pageNum = pageContent[pageContent.length - 1]
                                pageNum = pageNum > 5 ? random(3, 5) : pageNum
                                for (let i = 1; i < pageNum - 1; i++) {
                                    TKB.xgsrizhi("滑动图片")
                                    swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                                    sleep(2000)
                                }
                            }
                            var pageTime = random(10, 15)
                            var pageStart = (new Date()).getTime()
                            while (true) {
                                if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                                    TKB.xgsrizhi("图文内容滑动")
                                    swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                                    sleep(2000)
                                } else {
                                    break
                                }
                            }
                            if (text("关注").exists()) {
                                TKB.xgsrizhi("点击关注");
                                click("关注")
                                lpp = 1
                                sleep(2000)
                            }
                        }
                        if (id("com.xingin.xhs:id/dc9").exists()) {
                            popUp()
                            TKB.xgsrizhi("视频")
                            sleep(12000)
                            if (id("com.xingin.xhs:id/matrixFollowView").exists()) {
                                TKB.xgsrizhi("点击关注");
                                id("com.xingin.xhs:id/matrixFollowView").findOnce().click()
                                sleep(2000)
                                    // lpp = 1
                            }
                        }
                    } else {
                        if (id("com.xingin.xhs:id/ja").exists()) {
                            TKB.xgsrizhi("点击该用户的关注");
                            id("com.xingin.xhs:id/ja").findOnce().click()
                            sleep(3000)
                            if (text("她的关注").exists() || text("他的关注").exists()) {
                                var focusOnClick = id("com.xingin.xhs:id/d5o").find()
                                TKB.xgsrizhi("点击第三个关注");
                                focusOnClick[clickOther].click()
                                lpp = 1
                            }
                            sleep(2000)
                        }
                    }
                    // if (lpp == 1) {
                    //     TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                    //     lpp = 0
                    // }
                    TKB.qinglihh('com.xingin.xhs')
                    sleep(2000)
                    return true
                }
            } else {
                toast("未获取到关注链接")
                TKB.xgsrizhi("未获取到关注链接");
                sleep(5000);
            }
        } catch (error) {
            TKB.xgsrizhi("发现错误");
            TKB.xgsrizhi(error);
        }
    }
}

focusOn()