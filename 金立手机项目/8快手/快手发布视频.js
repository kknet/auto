log("tKB")
var TKB = require('/sdcard/tkb2.js')

//发布视频
function fabusp() {
    TKB.xgsrizhi("发布视频")
    launch("com.smile.gifmaker")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var a = 0
    var x = 0
    var ylsl = 0 //现在的作品数量
    var zpsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var lj = TKB.hqtpsplj(sbip, user_id, yhbh, app_id, 2)
    if (lj == false){
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false){
        TKB.xgsrizhi("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (a == 0) {
                zonghe()
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
                    var ss = TKB.getAllTexts()
                    for (var j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("\n作品") != -1) {
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("作品")
                            zpsl = st[0]
                            TKB.xgsrizhi("作品数量：" + zpsl)
                            a = 1
                            if (fb == 0) {
                                ylsl = zpsl
                                TKB.xgsrizhi(ylsl)
                            }
                            if (zpsl > ylsl) {
                                TKB.xgsrizhi("现在的作品数量大于原来的")
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                toastLog('成功上传')
                            }
                            sleep(500)
                        }
                    }
                }
            } else if (a == 1) {
                zonghe()
                if (id('com.smile.gifmaker:id/mytprofile_record_guide').exists() && id('com.smile.gifmaker:id/left_btn').exists() && id('com.smile.gifmaker:id/more_btn').exists()) {
                    log('拍摄视频')
                    id('com.smile.gifmaker:id/mytprofile_record_guide').click()
                    sleep(2000)
                }
                if (text('视频').exists() && text('直播').exists()) {
                    log('视频')
                    click('视频')
                    sleep(1000)
                }
                if (id('com.smile.gifmaker:id/inner_oval').exists() && text('相册').exists() && text('音乐').exists()) {
                    log('视频界面')
                    text('相册').findOnce().parent().click()
                    sleep(2000)
                }
                if (text('相机胶卷').exists() && text('全部').exists() && text('视频').exists()) {
                    log('相机胶卷')
                    click('全部')
                    sleep(1000)
                    while (1) {
                        if (bounds(196, 451, 253, 508).exists()) {
                            var x = id('com.smile.gifmaker:id/next_step').findOnce().text()
                            var st = x.split("下一步()")
                            log(st)
                            if (st == "下一步(1)") {
                                log('下一步')
                                id('com.smile.gifmaker:id/next_step').click()
                                sleep(2000)
                                break
                            } else if (st != "下一步(1)") {
                                log('删除选择视频')
                                id('com.smile.gifmaker:id/delete_img').click()
                                sleep(1000)
                            }
                        } else {
                            log('选择第一个')
                            click(220, 480)
                            sleep(2000)
                        }
                    }
                }
                if (text('画幅').exists() && text('变速').exists() && text('旋转').exists() && text('下一步').exists()) {
                    log('视频剪辑')
                    click('下一步')
                    sleep(2000)
                }
                if (text('美化').exists() && text('配乐').exists() && text('特效').exists() && text('下一步').exists()) {
                    log('剪辑完成')
                    click('下一步')
                    sleep(2000)
                }
                if (text('所在位置').exists() && text('个性化设置').exists() && text('所有人可见').exists() && text('发布').exists()) {
                    log('发布')
                    click('发布')
                    a = 0
                    fb = 1
                    sleep(5000)
                }
            }

        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

fabusp()