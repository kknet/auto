var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
var comment_url;
var comment_sentence, comments, word

//知乎评论
function comment() {
    var startTime = (new Date()).getTime()
    var TSD = (new Date()).getTime()
    var xs = action_args['param']
    comment_url = xs['作品链接']
    TKB.set_log("获取到的作品链接" + comment_url)
    comment_sentence = xs['话术']
    comments = comment_sentence.split("|")
    word = comments[random(0, comments.length - 1)]
    TKB.set_log("获取到的话术为" + word);
    setClip(comment_url)
    launch('com.tencent.mtt')
    sleep(8000);
    while (1) {
        try {
            zonghe()
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.set_log("时间够了退出");
                TKB.clear();
                break;
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.set_log("超时跳出");
                TKB.clear()
                sleep(2000)
                setClip(comment_url)
                launch('com.tencent.mtt')
                sleep(1000)
                TSD = (new Date()).getTime()
            }
            if (comment_url != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.set_log("点击搜索栏");
                    sleep(3000)
                }
                if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                    TKB.set_log("腾讯应用宝下载");
                    TKB.clear()
                    setClip(comment_url)
                    sleep(3000)
                    launch('com.tencent.mtt')
                    startTime = (new Date()).getTime()
                    TSD = (new Date()).getTime()
                }
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
                    TKB.set_log("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    text('粘贴').findOnce().parent().click()
                    TKB.set_log("点击粘贴");
                    sleep(3000)
                }
                if (text('进入').exists()) {
                    text('进入').findOnce().click()
                    TKB.set_log("点击进入");
                    sleep(8000);
                }
                //问答
                if (text("是否打开知乎 App 阅读全文").exists()) {
                    TKB.set_log("点击打开知乎作品链接");
                    click("确认")
                    sleep(5000)
                }
                //文章或者视频
                if (text("App 内打开").exists()) {
                    click("App 内打开")
                    TKB.set_log("点击App 内打开");
                    sleep(5000)
                }
                if (textEndsWith("内打开").exists()) {
                    click(537, 1620)
                    TKB.set_log("点击app内打开坐标打开知乎作品链接");
                    sleep(5000)
                }
                //想法
                if (text("打开 App 为他鼓掌").exists()) {
                    click(556, 1670)
                    TKB.set_log("点击写一条想法打开app")
                    sleep(3000)
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.set_log("点击允许打开");
                    sleep(10000);
                }
                if (text("暂无内容或结果").exists()) {
                    TKB.set_log("网络异常，重新启动流程");
                    launch('com.tencent.mtt');
                    sleep(8000);
                }
                //进入到了作品链接
                if (id("com.zhihu.android:id/search_btn").exists() || id("com.zhihu.android:id/system_bar").exists()) {
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            if (desc("评论").exists()) {
                                var aa = desc("评论").findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                    TKB.set_log('到底了')
                                    sleep(1000)
                                    break
                                }
                            }
                            TKB.set_log("作品内容滑动")
                            swipe(random(500, 600), 1200, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    sleep(3000)
                    if (textStartsWith("评论").exists() || descStartsWith("评论").exists()) {
                        click(992, 1834)
                        TKB.set_log("点击评论")
                        sleep(6000)
                        TKB.set_log("点击请输入评论")
                        if (id("com.zhihu.android:id/comment_status_layout_view").exists()) {
                            id("com.zhihu.android:id/comment_status_layout_view").findOnce().click()
                            TKB.set_log("点击请输入评论")
                            sleep(5000)
                        }
                        setText(0, word)
                        TKB.set_log("输入评论")
                        sleep(5000)
                        if (text("发布").exists()) {
                            click("发布")
                            TKB.set_log("点击发布")
                            sleep(3000)
                        }
                        // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        toast("评论成功")
                        sleep(3000)
                    }
                    TKB.clear('com.zhihu.android')
                    sleep(2000)
                    return true
                }
                //视频链接
                if (id("com.zhihu.android:id/video_progress_bottom").exists()) {
                    toast("正在观看视频")
                    setClip(word)
                    var videoDuration = id("com.zhihu.android:id/video_player_duration").findOnce().text().split(":");
                    var videoTime = Number(videoDuration[0]) * 60 + Number(videoDuration[1]);
                    if (videoTime > 60) {
                        TKB.set_log("观看视频，时长为：" + videoTime / random(2, 4))
                        sleep(videoTime / random(2, 4) * 1000)
                    } else {
                        TKB.set_log("观看视频，时长为：" + videoTime / 2)
                        sleep(videoTime / 2 * 1000)
                    }
                    if (textStartsWith("评论").exists() || descStartsWith("评论").exists()) {
                        descStartsWith("评论").findOnce().click()
                        TKB.set_log("点击评论")
                        sleep(6000)
                        if (id("com.zhihu.android:id/comment_status_layout_view").exists()) {
                            id("com.zhihu.android:id/comment_status_layout_view").findOnce().click()
                            TKB.set_log("点击请输入评论")
                            sleep(5000)
                        }
                        setText(word)
                        TKB.set_log("输入评论")
                        sleep(5000)
                        if (text("发布").exists()) {
                            click("发布")
                            TKB.set_log("点击发布")
                            sleep(3000)
                        }
                        // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        toast("评论成功")
                        sleep(3000)
                        TKB.clear('com.zhihu.android')
                        sleep(2000)
                        return true
                    }
                }
            } else {
                toast("未获取到评论链接")
                TKB.set_log("未获取到评论链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.set_log(error);
        }

    }
}

comment()