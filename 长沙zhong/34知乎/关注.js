var focusonUrl;
var clickFocuson;
var clickOther;

//知乎关注
function focusOn() {
    var startTime = (new Date()).getTime();
    var TSD = (new Date()).getTime()
    var lpp = 0
    setClip(focusonUrl)
    launch('com.tencent.mtt')
    sleep(5000);
    while (1) {
        try {
            zonghe();
            if ((new Date()).getTime() - startTime > 30 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh();
                break;
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                TKB.qinglihh()
                sleep(3000)
                setClip(focusonUrl)
                launch('com.tencent.mtt')
                sleep(2000)
                TSD = (new Date()).getTime()
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
                if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                    TKB.xgsrizhi("腾讯应用宝下载");
                    TKB.qinglihh()
                    setClip(focusonUrl)
                    sleep(3000)
                    launch('com.tencent.mtt')
                    startTime = (new Date()).getTime()
                    TSD = (new Date()).getTime()
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
                    // let waitTime = 0;
                    // while (text('' + focusonUrl).exists() && waitTime < 5) {
                    //     sleep(5000);
                    //     toast("等待网页结果显示")
                    //     TKB.xgsrizhi("等待网页结果显示");
                    //     waitTime++;
                    // }
                    TKB.xgsrizhi("点击坐标打开知乎用户主页");
                    click(526, 1065)
                    log(1);
                    sleep(5000)
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(5000);
                }
                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch('com.tencent.mtt');
                    sleep(8000);
                }
                //进入到了用户页面
                if (id("com.zhihu.android:id/avatar").exists() && id("com.zhihu.android:id/name").exists()) {
                    if (clickFocuson == 0) {
                        var pageTime = random(7, 10)
                        var pageStart = (new Date()).getTime()
                        while (true) {
                            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                                TKB.xgsrizhi("内容滑动")
                                swipe(random(700, 800), 1700, random(700, 800), 500, 1000)
                                sleep(2000)
                            } else {
                                break
                            }
                        }
                        if (id("com.zhihu.android:id/menu_follow_shell").exists()) {
                            id("com.zhihu.android:id/menu_follow").findOnce().click()
                                // if (lpp == 0) {
                                //     TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                                //     lpp = 1
                                // }
                            TKB.xgsrizhi("点击关注")
                            toast("点击关注")
                            sleep(3000)
                        }
                    } else {
                        if (id("com.zhihu.android:id/following_list").exists()) {
                            TKB.xgsrizhi("点击他关注的人")
                            id("com.zhihu.android:id/following_list").findOnce().click()
                            sleep(3000)
                            if (textEndsWith("Ta关注的人").exists()) {
                                var focusOnClick = id("com.zhihu.android:id/btn_follow").find()
                                focusOnClick[clickOther].click()
                                    // if (lpp == 0) {
                                    //     TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                                    //     lpp = 1
                                    // }
                                TKB.xgsrizhi("点击关注");
                                toast("点击关注")
                                sleep(3000)
                            }
                        }
                    }
                    TKB.qinglihh('com.zhihu.android')
                    return true
                }
            } else {
                toast("未获取到关注链接")
                TKB.xgsrizhi("未获取到关注链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}

focusOn()