//下载视频
function xzsp(lj) {
    xgsrizhi("下载视频")
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/29.mp4';
    var imgurl = lj
    xgsrizhi("视频链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                xgsrizhi("下载不到视频头像")
                return false
            }
            var filePath = files.join(dirpath, '1.mp4');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                xgsrizhi("下载视频完成")
                return true
            } else {
                xgsrizhi("没有视频");
                sleep(3000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}
/** 发布视频
 * zz 视频链接
 * biaoti 发布视频的标题内容
 **/
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
    // var status = 0
    var biaoti = '6'
    var xs = TKB.zhid(sbip, run_id)
    var category = xs['类型']
    // var category = '美女'
    var zz = TKB.get_video(sbip, user_id, yhbh, category)
    // var shipin_id = zz['shipin_id']
    var lj = zz['text']
    if (lj == false) {
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false) {
        TKB.xgsrizhi("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                // status = 1
                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
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
                    sleep(10000)
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
                                // status = 1
                                // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                            sleep(500)
                        }
                    }
                }
            } else if (a == 1) {
                zonghe()
                if (id('com.smile.gifmaker:id/mytprofile_record_guide').exists() && id('com.smile.gifmaker:id/left_btn').exists() && id('com.smile.gifmaker:id/more_btn').exists()) {
                    TKB.xgsrizhi('拍摄视频')
                    id('com.smile.gifmaker:id/mytprofile_record_guide').click()
                    sleep(2000)
                }
                if (text('视频').exists() && text('直播').exists()) {
                    TKB.xgsrizhi('视频')
                    click('视频')
                    sleep(1000)
                }
                if (id('com.smile.gifmaker:id/inner_oval').exists() && text('相册').exists() && text('音乐').exists()) {
                    TKB.xgsrizhi('视频界面')
                    text('相册').findOnce().parent().click()
                    sleep(2000)
                }
                if (text('照片').exists() && text('全部').exists() && text('视频').exists()) {
                    TKB.xgsrizhi('相机胶卷')
                    click('视频')
                    sleep(3000)
                    click(220, 315)
                    sleep(2000)
                    click('下一步(1)')
                    sleep(2000)
                }
                if (text('画幅').exists() && text('变速').exists() && text('旋转').exists() && text('下一步').exists()) {
                    TKB.xgsrizhi('视频剪辑')
                    click('下一步')
                    sleep(2000)
                }
                if (text('美化').exists() && text('配乐').exists() && text('特效').exists() && text('下一步').exists()) {
                    TKB.xgsrizhi('剪辑完成')
                    click('下一步')
                    sleep(2000)
                }
                if (text('所在位置').exists() && text('个性化设置').exists() && text('所有人可见').exists() && text('发布').exists()) {
                    TKB.xgsrizhi('发布')
                    setText(biaoti)
                    sleep(5000)
                    click('发布')
                    a = 0
                    fb = 1
                    sleep(10000)
                }
                if (text('发布成功').exists()) {
                    TKB.xgsrizhi('发布成功')
                    // status = 1
                    // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                    return true
                }
            }

        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
