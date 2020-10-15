var TKB = require('/sdcard/tkb2.js')


function shipinsc() {
    TKB.xgsrizhi("视频删除")
    launch("com.smile.gifmaker")
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var a = 0
    while (1) {
        if ((new Date()).getTime() - BD > 10 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            TKB.killapp("快手")
            sleep(1000)
            launch("com.smile.gifmaker")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi("超时退出")
            return false
        }
        try {
            if (a == 0) {
                // zonghe()
                if (desc('菜单').exists() && desc('关注').exists() && desc('发现').exists()) {
                    log('菜单')
                    desc('菜单').click()
                    sleep(2000)
                }
                if (text('动态').exists() && text('消息').exists() && text('私信').exists()) {
                    log('点击本地作品集')
                    click('本地作品集')
                    sleep(2000)
                }
                if (text('本地作品集').exists() && id('com.smile.gifmaker:id/left_btn').exists()) {
                    log('本地作品集')
                    if (desc("作品").exists()) {
                        log('存在本地作品')
                        click('选择')
                        sleep(1000)
                    }else if (!desc("作品").exists() || text("没有作品").exists()) {
                        log('没有本地作品')
                        a = 1
                        sleep(2000)
                        back()
                        sleep(1000)
                    }
                    if (text('删除').exists() && id('com.smile.gifmaker:id/joint_button').exists()) {
                        comment = desc("作品").find();
                        comment.forEach(item => {
                            var b = item.bounds()
                            click(b.centerX(), b.centerY())
                        });
                        sleep(1000)
                        click('删除')
                        sleep(1000)
                    }
                    if (text('确定删除吗？').exists() && text('取消').exists() && text('删除').exists()) {
                        log('确定删除')
                        click('删除')
                    }
                }
            }
            // zonghe()
            if (a == 1) {
                if (desc('菜单').exists() && desc('关注').exists() && desc('发现').exists()) {
                    log('菜单')
                    desc('菜单').click()
                    sleep(2000)
                }
                if (text('动态').exists() && text('消息').exists() && text('私信').exists()) {
                    log('点击头像')
                    id('com.smile.gifmaker:id/tab_avatar').click()
                    sleep(2000)
                }
                if (id('com.smile.gifmaker:id/mytprofile_record_guide').exists() && id('com.smile.gifmaker:id/left_btn').exists() && id('com.smile.gifmaker:id/more_btn').exists()) {
                    swipe(700, 300, 700, 1500, 300)
                    sleep(2000)
                    var ddf = (new Date()).getTime()
                    var fg = (new Date()).getTime()
                    var ss = TKB.getAllTexts()
                    for (var j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("\n作品") != -1) {
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("作品")
                            var zpsl = st[0]
                            TKB.xgsrizhi("作品数量：" + zpsl)
                            if (zpsl == 0 || zpsl == "0") {
                                log("已经删除完了")
                                sleep(1000)
                                back()
                                sleep(1000)
                                toastLog('删除完成')
                                return true
                            } else {
                                while (1) {
                                    var dda = text(ss[j]).findOnce().bounds();
                                    log(dda)
                                    if (dda.centerY() > 0 && dda.centerY() < 1760) {
                                        log("点击第一个作品")
                                        click(dda.centerX(), dda.centerY() + 100);
                                        sleep(2000)
                                    }
                                    if ((new Date()).getTime() - fg > 5 * 60 * 1000) {
                                        log("超时没删除完先退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    if ((new Date()).getTime() - ddf > 20 * 1000 || zpsl == 0) {
                                        log("超时退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    if (desc('喜欢').exists() && desc('更多').exists() && desc('返回').exists()) {
                                        log("视频界面")
                                        desc('更多').click()
                                        sleep(2000)
                                    }
                                    if (text("分享至").exists() && text("保存到相册").exists() && text("取消").exists()) {
                                        log("分享界面")
                                        click("取消")
                                        sleep(2000)
                                    }
                                    if (text("编辑作品").exists() && text("转为私密作品").exists() && text("删除作品").exists()) {
                                        log("删除")
                                        click("删除作品")
                                        sleep(2000)
                                    }
                                    if (text("确定删除吗？").exists() && text("删除").exists() && text("取消").exists()) {
                                        log("确认删除")
                                        click("删除")
                                        sleep(2000)
                                        zpsl = Number(zpsl) - 1
                                        toastLog("还剩余个数" + zpsl)
                                        if (zpsl == 0 || zpsl == "0") {
                                            log("已经删除完了")
                                            sleep(1000)
                                            back()
                                            sleep(1000)
                                            toastLog('删除完成')
                                            return true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
shipinsc()