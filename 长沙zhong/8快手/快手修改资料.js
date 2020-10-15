var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败！");
    exit();
}
function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            TKB.set_log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            TKB.set_log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}
function toastAt0(msg, x, y) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
    toast.show();
  }
  
  function toastAt(msg, x, y) {
    ui.run(() => toastAt0(msg, x, y));
  }
function zonghe() {
    findeclick("id", "com.smile.gifmaker:id/birthday_click_to_close'", 800) //关闭生日
    findeclick("id", "com.smile.gifmaker:id/close_btn", 800) //关闭活动红包关闭好友推荐
    text('好友推荐').exists()?click(150,400):''
    findeclick("id", "com.smile.gifmaker:id/icon_close", 800) //深色模式
    findeclick("id", "com.smile.gifmaker:id/iv_close", 800) //深色模式
    findeclick("id", "com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view", 800) //深色模式
    findeclick("text", "同意并继续", 800)
    findeclick("text", "跳过", 800)
    findeclick("text", "我知道了", 800)
    findeclick("text", "知道了", 800)
    findeclick("text", "点击重试", 800)
    findeclick("text", "稍后", 800)
    findeclick("text", "关注并退出", 800)
    findeclick("text", "允许", 800)
    findeclick("text", "一键开启", 800) //一键开启摄像
    if (text("激活帐号").exists() && desc("获取语音验证码").exists()) {
        toastLog("此账号需要激活")
        //账号被封提示弹窗
    }
    if (text('取消').exists() && text('去开启').exists()) {
        click('取消')
        sleep(1500)
    }
    if (desc("天气图标").exists() || desc("近日天气").exists() || desc("今天").exists()) {
        TKB.set_log("天气")
        back()
        sleep(1000)
    }
    if (text('邀请你体验快手新版大屏模式').exists() && text('取消')) {
        click('取消')
        sleep(1500)
    }
    if (text('送我一个小可爱吧').exists() || text('立即赠送').exists()) {
        back()
        sleep(500)
    }
    if (desc('您的帐号存在异常，请使用当前绑定的手机号激活。').exists() && desc('获取语音验证码后1分钟内，我们将以电话形式告知您验证码，请留意接听。').exists()) {
        sleep(2500)
        back()
    }
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.set_log("滑块验证码")
        var zz = get_verify()
        TKB.set_log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastAt("滑块验证码成功",300,300)
        } else {
            TKB.set_log("滑块验证码失败")
            toastAt("滑块验证码失败",300,300)
        }
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.set_log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.set_log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.set_log("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        TKB.set_log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.set_log("长按屏幕使用更多功能")
        sleep(1200)
    }
    if (text("网络连接错误").exists()) {
        click("重试")
        TKB.set_log("网络连接错误")
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认")
        TKB.set_log("确认")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542)
        TKB.set_log("同步到今日头条")
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.set_log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待")
        TKB.set_log("等待")
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消")
        TKB.set_log("取消")
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说")
        TKB.set_log("以后再说")
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.set_log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds()
            click(node.centerX(), node.centerY())
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.set_log(error)
        }
    }
    if (text("立即赠送").exists()) {
        TKB.set_log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("滑动查看更多").exists()) {
        TKB.set_log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.set_log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (id("com.smile.gifmaker:id/xd").exists() && text("好友推荐").exists()) {
        TKB.set_log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
}

//快手滑块
function get_verify() {
    try {
        // sleep(3000)
        // click(890, 621)
        sleep(5000)
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
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
            return '失败'
        }
    } catch (error) {
        TKB.set_log(error)
    }
}
var msgz
//修改资料
function ksxgzl() {
    TKB.set_log("快手修改资料")
    launch("com.smile.gifmaker")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var a = 0
    var ql = 0
    var xb = random(0, 1)
    var name_result = false
    var img_result = false
    var jj_result = false
    var name_return = '快手昵称'
    var img_return = '快手头像'
    var jj_return = '快手简介'
    var nm = 0
    var status = 0
    var name = device.getIMEI()
    var xs = action_args['param']
    var resource_type = 0
    var zz = TKB.get_name(name,resource_type)
    if (zz == false || zz == null || zz == []) {
        toastLog('素材获取错误')
        msgz = '素材获取错误'
        return false
    }  else {
        var nickname = zz['nickname']
        var img = zz['photo']
        var jianjie = zz['remarks']
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.set_log("下载图片失败")
            return false
        }
    }
    while (1) {
        if ((new Date()).getTime() - RT > 30 * 60 * 1000) {
            TKB.set_log("时间够了退出")
            if (fb != 0) {
                return true
            }
            TKB.clear()
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.clear()
            sleep(3000)
            launch("com.smile.gifmaker")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            zonghe()
            if (desc('菜单').exists() && desc('关注').exists() && desc('发现').exists()) {
                TKB.set_log('菜单')
                desc('菜单').click()
                sleep(2000)
            }
            if (text('动态').exists() && text('消息').exists() && text('私信').exists() || text('直播广场').exists() && text('更多').exists()) {
                TKB.set_log('点击头像')
                id('com.smile.gifmaker:id/tab_avatar').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/left_btn').exists() && !desc('编辑资料').exists()) {
                TKB.set_log('点击菜单')
                id('com.smile.gifmaker:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/user_content_avatar').exists() && text('好友').exists() || text('关注').exists() && text('粉丝').exists()) {
                TKB.set_log('编辑资料')
                desc('编辑资料').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/retry_btn').exists() && text('去激活').exists()) {
                TKB.set_log('账号异常需要激活')
                toastLog('账号异常需要激活')
                return false
            }
            if (text('编辑资料').exists() && text('头像').exists() && text('昵称').exists()) {
                if (a == 0) {
                    if (xs['是否修改昵称'] == '是') {
                        // TKB.set_log('修改昵称')
                        if (text('编辑资料').exists() && text('昵称').exists()) {
                            TKB.set_log('点击昵称')
                            text('昵称').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (id(nickname).exists()) {
                            TKB.set_log("已经是该名字了")
                            a = 1
                            name_result = true
                            name_return = '快手昵称符合'
                            sleep(1000)
                        } else if (text('完成').exists() && text('昵称').exists()) {
                            TKB.set_log('修改昵称')
                            if (id('com.smile.gifmaker:id/clear').exists() && ql == 0) {
                                TKB.set_log('清理')
                                id('com.smile.gifmaker:id/clear').click()
                                ql = 1
                                sleep(2000)
                            }
                            if (text('请输入昵称').exists() && ql == 1) {
                                TKB.set_log('请输入昵称')
                                setText(nickname)
                                sleep(1000)
                                click('完成')
                                sleep(2000)
                                name_result = true
                                name_return = '快手昵称符合'
                                a = 1
                            }
                            if (text('改名字已经被注册了').exists()) {
                                TKB.set_log('改名字已经被注册了')
                                sleep(2000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                ql = 0
                                a = 1
                                name_result = false
                                name_return = '快手昵称不符合'
                            }
                            if (text('修改用户名次数已达本周上限').exists()) {
                                TKB.set_log('修改用户名次数已达本周上限')
                                sleep(2000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                ql = 0
                                a = 1
                                nm = 1
                                name_result = false
                                name_return = '快手昵称修改达本周上限'
                            }
                        }
                    } else {
                        a = 1
                        name_return = '快手昵称不修改'
                        TKB.set_log("快手昵称不修改")
                    }
                }
                if (a == 1) {
                    if (xs['是否修改头像'] == '是') {
                        // TKB.set_log('修改头像')
                        if (text('编辑资料').exists() && text('头像').exists()) {
                            TKB.set_log('点击头像')
                            text('头像').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('个人头像').exists() && text('更换头像').exists()) {
                            TKB.set_log('更换头像')
                            click('更换头像')
                            sleep(2000)
                        }
                        if (text('拍一张').exists() && text('从相册选取').exists()) {
                            TKB.set_log('从相册选取')
                            click('从相册选取')
                            sleep(2000)
                        }
                        if (desc('返回').exists() && id('com.smile.gifmaker:id/preview_container').exists()) {
                            TKB.set_log('点击第一个')
                            click(200, 250)
                            sleep(2000)
                        }
                        if (text('照片预览').exists() && id('com.smile.gifmaker:id/right_btn').exists()) {
                            TKB.set_log('确定')
                            id('com.smile.gifmaker:id/right_btn').click()
                            sleep(3000)
                            if (text('你的照片尺寸太模糊，请选择更清晰的照片上传。').exists() && text('好的').exists()) {
                                TKB.set_log('照片尺寸太模糊')
                                img_result = false
                                img_return = '快手头像不符合'
                                back()
                                sleep(500)
                                back()
                                sleep(1000)
                            } else {
                                back()
                                sleep(1000)
                                img_result = true
                                img_return = '快手头像符合'
                            }
                            a = 2
                        }
                    } else {
                        a = 2
                        img_return = '快手头像不修改'
                        TKB.set_log("快手头像不修改")
                    }
                }
                if (a == 2) {
                    // TKB.set_log('修改性别')
                    if (xs['是否修改性别'] == '是') {
                        if (xs['性别'] == '男' || xs['性别'] == '女') {
                            if (text(xs['性别']).exists() && text("性别").exists()) {
                                toastLog("性别修改完成")
                                tep = 3
                                a = 3
                            } else {
                                if (text('编辑资料').exists() && text('昵称').exists()) {
                                    TKB.set_log('点击性别')
                                    text('性别').findOnce().parent().click()
                                    sleep(2000)
                                }
                                if (text('男').exists() && text('女').exists()) {
                                    click(xs['性别'])
                                    sleep(2000)
                                }
                            }
                        }
                    } else {
                        a = 3
                        TKB.set_log("快手性别不修改")
                    }
                }
                if (a == 3) {
                    // TKB.set_log('修改生日/星座')
                    if (!bounds(860, 1127, 986, 1184).exists()) {
                        TKB.set_log('生日已经设置')
                        toastLog('生日已经设置')
                        a = 4
                        sleep(1000)
                    } else {
                        if (text('编辑资料').exists() && text('昵称').exists()) {
                            TKB.set_log('点击昵称')
                            text('生日/星座').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('选择生日').exists() && text('完成').exists()) {
                            TKB.set_log('选择生日')
                            var y = random(0, 1)
                            TKB.set_log('年')
                            for (var i = 0; i < random(1, 11); i++) {
                                if (y == 0) {
                                    swipe(170, 1100, 170, 950, random(500, 800))
                                    sleep(500)
                                } else {
                                    swipe(170, 850, 170, 980, random(500, 800))
                                    sleep(500)
                                }
                            }
                            TKB.set_log('月')
                            for (var x = 0; x < random(1, 12); x++) {
                                swipe(530, 1100, 530, 950, random(500, 800))
                                sleep(500)
                            }
                            TKB.set_log('日')
                            for (var z = 0; z < random(1, 31); z++) {
                                swipe(875, 1100, 875, 950, random(500, 800))
                                sleep(500)
                            }
                            sleep(1000)
                            click('完成')
                            sleep(1000)
                        }
                        if (text('生日信息6个月内只允许修改一次，是否确定提交？').exists() && text('确定').exists()) {
                            TKB.set_log('确定')
                            click('确定')
                            sleep(500)
                            a = 4
                        }
                        if (text('距离上次修改生日不足6个月，目前只能修改年龄可见范围').exists()) {
                            TKB.set_log('距离上次修改生日不足6个月，目前只能修改年龄可见范围')
                            sleep(1000)
                            a = 4
                        }
                    }
                }
                if (a == 4) {
                    // TKB.set_log('修改所在地')
                    if (!bounds(860, 1114, 986, 1282).exists()) {
                        TKB.set_log('所在地已经设置')
                        toastLog('所在地已经设置')
                        a = 5
                        sleep(1000)
                    } else {
                        if (text('编辑资料').exists() && text('所在地').exists()) {
                            TKB.set_log('点击所在地')
                            text('所在地').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('选择地区').exists() && text('完成').exists()) {
                            TKB.set_log('选择地区')
                            for (var x = 0; x < random(1, 30); x++) {
                                swipe(290, 1475, 290, 1610, random(500, 800))
                                sleep(500)
                            }
                            sleep(2000)
                            for (var x = 0; x < random(1, 10); x++) {
                                swipe(800, 1710, 800, 1580, random(500, 800))
                                sleep(500)
                            }
                            sleep(1000)
                            click('完成')
                            sleep(2000)
                            TKB.set_log('编辑完成')
                            a = 5
                        }
                    }
                }
                if (a == 5) {
                    if (xs['是否修改简介'] == '是') {
                        if (text(jianjie).exists() && text('编辑资料').exists()) {
                            TKB.set_log('修改完成')
                            toastLog('修改完成')
                            jj_result = true
                            jj_return = '快手简介符合'
                            a = 6
                        } else if (text('个人介绍').exists() && text('编辑资料').exists()) {
                            TKB.set_log('个人介绍')
                            text('个人介绍').findOnce().parent().click()
                            sleep(2000)
                            setText(jianjie)
                            sleep(1000)
                            click('完成')
                            sleep(4000)
                        }
                    } else {
                        a = 6
                        name_return = '快手简介不修改'
                        TKB.set_log("快手简介不修改")
                    }
                }
                if (a == 6) {
                    // if (name_result == true && img_result == true && jj_result == true) {
                    //     status = 1
                    // } else {
                    //     status = 2
                    // }
                    // info = name_return + ',' + img_return + ',' + jj_return
                    // TKB.set_log(info)
                    // TKB.upinfo(sbip, user_id, yhbh, info, status)
                    sleep(3000)
                    TKB.clear()
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}
_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    setInterval(() => {
        TKB.send_message({notice_name: "task_time_stamp",notice_content: (new Date()).getTime()})
    }, 15 * 1000)
})
var z = ksxgzl() 
if (z == true) {
    var msg_num = 1
    var msg = '成功'
} else {
    var msg_num = 0
    if (msgz == '素材获取错误'){
        var msg = msgz
    }else{
        var msg = '失败'
    }
}
TKB.send_message({notice_name: 'stop',notice_content: [msg_num, msg]})
