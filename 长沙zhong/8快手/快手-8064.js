﻿log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！")
    exit()
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
var dqbaoming = "com.smile.gifmaker" //该项目包名
var xmxh = "8" //项目序号

//******************************************************************快手项目*****************************************************************
function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
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
        alert("此账号需要激活")
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
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.set_log("滑块验证码失败")
            toastLog("滑块验证码失败")
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
        log("五星好评")
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

/**快手注册
 * e_num{number} 注册获取验证码最大次数
 */
function kszc() {
    TKB.set_log("快手注册")
    launch(dqbaoming)
    sleep(6000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zh = ""
    var yzm = ""
    var is_click = false
    var tem = 0,
        e_num = 2
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.set_log("时间够了退出")
            TKB.clear(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没注册成功")
            TKB.clear(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        zonghe()
        if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
            TKB.set_log('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.set_log('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.set_log('登录成功1')
                return true
            }
        }
        if (text('登录').exists()) {
            click('登录')
            TKB.set_log("开始点击登录按钮")
            TSD = (new Date()).getTime()
            sleep(1500)
        }
        if (text('本机一键登录').exists()) {
            click('本机一键登录')
            toastLog('本机一键登录')
            TKB.set_log("本机一键登录")
            sleep(1500)
        }
        if (text('其他方式登录').exists()) {
            click('其他方式登录')
            toastLog('其他方式登录')
            TKB.set_log("其他方式登录")
            sleep(1500)
                // 获取账号
            if (tem == 0) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                sleep(5000)
                if (zh == false) {
                    TKB.set_log("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
        }
        if (text('快速登录观看更多好玩的视频').exists() && text('手机号登录').exists()) {
            var x = text('手机号登录').findOnce().bounds().centerX()
            var y = text('手机号登录').findOnce().bounds().centerY()
            click(x, y)
            sleep(1500)
            TKB.set_log('点击手机号登录')
        }
        if (text('下一步').exists() && text('下一步').findOnce().enabled() == true && text('手机号登录').exists()) {
            text('下一步').findOnce().click()
            sleep(1500)
        }
        if (e_num <= 0) {
            TKB.set_log("获取验证码频繁")
            TKB.clear(dqbaoming)
            sleep(2000)
            return false
        }
        if (text('手机号登录').exists() && (text('+86').exists() || text('密码登录').exists())) {
            TKB.set_log('手机号登录')
            if (tem == 0) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                sleep(5000)
                if (zh == false) {
                    TKB.set_log("获取不到号码")
                    toastLog("获取不到号码")
                    return false
                }
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
            setText(0, zh)
            sleep(2000)
            click('获取验证码')
            sleep(15000)
            yzm = TKB.huoquyzm("快手科技")
            e_num--
            sleep(2000)
            if (yzm == false) {
                TKB.set_log("没有获取到验证码")
                TKB.clear(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_click = false
                continue
            } else {
                TKB.set_log("输入验证码" + yzm)
                setText(1, yzm)
                sleep(1500)
            }
        }
        if (text('确定').exists() && text('确定').findOnce().enabled() == true && is_click == false) {
            text('确定').findOnce().click()
            sleep(5000)
            is_click = true
        }
        if (text('完成').exists() && text('跳过').exists()) {
            text('跳过').findOnce().click()
            sleep(1500)
        }
        if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
            TKB.set_log('登录成功')
            toastLog('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.set_log('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.set_log('登录成功1')
                toastLog('登录成功1')
                return true
            }
        }
    }
}

/**快手新养号
 * e_num{number} 注册获取验证码最大次数
 * zbbpx 直播评论的表情
 * //bp 评论的表情
 */
function ksxyh() {
    TKB.set_log("快手新养号")
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
        //zbbpx 直播评论的表情
    var zbbpx = ['😀', '😬', '😁', '😂', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '☺', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '☹', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']
    var live_time = random(20, 30)
    var stt = random(60, 70) //脚本总共运行时长
    var start_time = (new Date()).getTime()
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zbz = 0
        //bp 评论的表情
    var bq = ['必胜', '戴口罩', '勤洗手', '扎心', '666', '奸笑', '捂脸', '龇牙', '哼', '哦', '微笑', '老铁', '双鸡', '调皮', '呆住', '星星眼', '爱心', '疑问', '生气', '难过', '撇嘴', '惊讶', '羞涩', '色', '汗', '老司机', '头盔', '酷', '笑哭', '愉快', '委屈', '白眼', '安排', '点点关注', '小姐姐', '小哥哥', '鼓掌', '抱抱', '哈欠', '大哭', '闭嘴', '惊恐', '红脸蛋', '亲亲', '冷汗', '晕', '火', '坏笑', '爆炸', '可怜', '再见', '赞', '囧', '大哥', '玫瑰', '抓狂', '嘘', '快哭了', '偷笑', '落泪', '挑逗', '困', '睡觉', '打招呼', '流鼻血', '抱大腿', '偷瞄', '吃瓜', '旋转', '憨笑', '吐彩虹', '擦鼻涕', '拜托', '加油', '想吃', '打脸', '吐血', '大鼻孔', '天啊', '皱眉', '装傻', '酸了', '柴犬', '期待', '干杯', '祈祷', '爱你', '摸头', '欢迎', '比心']
    var a = 0
    var z = 0
    var sp_num = 0
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            TKB.clear(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.clear(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            zonghe()
            if (desc('菜单').exists() && desc('发现').exists()) {
                log('点击菜单')
                desc('菜单').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/left_btn').exists()) {
                log('点击菜单')
                id('com.smile.gifmaker:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (TKB.zhaose("if isColor(107,1746,0xffffff,80) and isColor(122,1742,0x666666,80) and isColor(141,1754,0x666666,80) and isColor(151,1761,0x666764,80) and isColor(158,1771,0x0fba03,80) and isColor(166,1776,0xfefff3,80) and isColor(165,1785,0x0fb80b,80) and isColor(165,1823,0x666666,80) and isColor(172,1823,0x666666,80) then")) {
                TKB.set_log("已经开启大屏模式")
                back()
                sleep(2000)
                tem = 0
                z = 1
            }
            if (text('更多').exists() && text('大屏模式').exists() && z == 0) {
                log('大屏模式')
                click('大屏模式')
                sleep(5000)
            }
            if (text('快手大屏版来啦').exists() && id('com.smile.gifmaker:id/close_iv').exists()) {
                log('关闭')
                id('com.smile.gifmaker:id/close_iv').click()
                sleep(2000)
            }
            if (tem == 0) {
                log('点击发现')
                click(570, 150)
                sleep(100)
                click(570, 150)
                sleep(3000)
                swipe(600, 1350, 500, 100, 800)
                sleep(random(1000, 3000))
            }
            if (id('com.smile.gifmaker:id/like_icon').exists() && id('com.smile.gifmaker:id/comment_icon').exists()) {
                log('视频界面')
                var zbtx = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    zonghe()
                    var x = 0
                    var dzl = 0
                    var dzs = ''
                    if ((new Date()).getTime() - rddx > zbtx * 60 * 1000) {
                        TKB.set_log("去看直播")
                        back()
                        sleep(1000)
                        var start_time = (new Date()).getTime()
                        a = 1
                        break
                    }
                    if (sp_num > random(20, 30)) {
                        log('刷新')
                        click(570, 150)
                        sleep(100)
                        click(570, 150)
                        sleep(3000)
                        sp_num = 0
                    }
                    if (text('点击重播').exists()) {
                        TKB.set_log("广告重播")
                        click('点击重播')
                        sleep(2000)
                        swipe(600, 1350, 500, 100, 800)
                        sleep(2000)
                    }
                    if (id('com.smile.gifmaker:id/like_count_view').exists()) {
                        comment = id('com.smile.gifmaker:id/like_count_view').find()
                        comment.forEach(item => {
                            var a = item.text();
                            x++
                            if (Number(x) == 2) {
                                dzs = a
                                TKB.set_log(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            TKB.set_log('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        TKB.set_log("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        TKB.set_log('符合条件')
                        dzl = 0
                        var sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                            // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                TKB.set_log("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    TKB.set_log("评论")
                                    id('com.smile.gifmaker:id/comment_button').click()
                                    sleep(1000)
                                    for (j = 0; j < random(2, 5); j++) {
                                        swipe(500, 1600, 600, 400, 1000)
                                        sleep(random(1000, 3000))
                                    }
                                    click(400, 1840)
                                    sleep(2000)
                                    setText("[" + bq[random(0, bq.length - 1)] + "]")
                                    sleep(4000)
                                    if (text("发送").exists()) {
                                        TKB.set_log("发送")
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
                                            TKB.set_log("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            TKB.set_log("点赞")
                                            click(990, 1320)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                TKB.set_log("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    TKB.set_log("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        TKB.set_log("观看时间够了,滑动")
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
            if (id('com.smile.gifmaker:id/left_btn').exists()) {
                TKB.set_log("点击菜单")
                id('com.smile.gifmaker:id/left_btn').click()
                sleep(5000)
            }
            if (text('直播广场').exists() && text('大屏模式').exists()) {
                TKB.set_log("点击直播广场")
                click('直播广场')
                sleep(1000)
                zbz = 0
            }
            if (zbz == 0) {
                if (id('com.smile.gifmaker:id/live_close_place_holder').exists() && id('com.smile.gifmaker:id/live_audience_count_text').exists()) {
                    TKB.set_log("直播界面")
                    if (id('com.smile.gifmaker:id/live_right_pendant_container').exists() && text('更多直播').exists()) {
                        TKB.set_log("更多直播")
                        id('com.smile.gifmaker:id/live_right_pendant_container').click()
                        sleep(3000)
                        for (var i = 0; i < random(1, 10); i++) {
                            TKB.set_log("下滑")
                            swipe(630, 1800, 630, 200, 1200)
                            sleep(2000)
                        }
                        zbz = 1
                        TKB.set_log("点击")
                        click(450, 1000)
                        sleep(3000)
                    }
                }
            }
            if (id('com.smile.gifmaker:id/live_close_place_holder').exists() && id('com.smile.gifmaker:id/live_audience_count_text').exists() && id('com.smile.gifmaker:id/live_bottom_bar_gift_container').exists() && id('com.smile.gifmaker:id/live_share').exists()) {
                toastLog("直播界面")
                TSD = (new Date()).getTime()
                var ssi = random(1, 100)
                    // var ssi = 100
                if (ssi > 99) {
                    TKB.set_log("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText(zbbpx[random(0, zbbpx.length - 1)])
                    sleep(1000)
                    if (text("发送").exists()) {
                        TKB.set_log("发送")
                        click('发送')
                        sleep(2000)
                    }
                }
                if ((new Date().getTime()) - start_time < live_time * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.set_log("观看直播中")
                    sleep(3000)
                } else if ((new Date().getTime()) - start_time > live_time * 60 * 1000) {
                    TKB.set_log("观看直播时间已到")
                    back()
                    sleep(1000)
                    if (text('关注并退出').exists()) {
                        TKB.set_log("退出")
                        click('退出')
                        sleep(2000)
                    }
                    back()
                    sleep(500)
                    TKB.clear()
                    return true
                }
            }
            if (text('直播已结束').exists()) {
                TKB.set_log("直播已结束")
                swipe(800, 1600, 800, 300, 1000)
                sleep(1000)
            }
            if (id('com.smile.gifmaker:id/live_right_top_pendant_container').exists() && text('可领取').exists()) {
                TKB.set_log("领取宝箱")
                click('可领取')
                sleep(3000)
            }
            if (text('每日百宝箱').exists() && text('开宝箱').exists()) {
                TKB.set_log("开宝箱")
                click('开宝箱')
                sleep(1000)
                back()
                sleep(500)
            }
            if (id('com.smile.gifmaker:id/open_icon_view').exists() && id('com.smile.gifmaker:id/background_view_normal').exists()) {
                TKB.set_log('点击红包')
                id('com.smile.gifmaker:id/background_view_normal').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
                TKB.set_log('开红包')
                id('com.smile.gifmaker:id/live_red_packet_pre_snatch_state_view').findOnce().click()
                sleep(5000)
            }
            if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
                TKB.set_log('红包抢完了')
                id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
                sleep(3000)
            }
            if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
                TKB.set_log('红包未开启')
                id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
                sleep(3000)
            }
            if (id('com.smile.gifmaker:id/close_view').exists()) {
                TKB.set_log('抢到了红包')
                id('com.smile.gifmaker:id/close_view').findOnce().click()
                sleep(2000)
            }
        }
    }
}
function lickopen(aa) {
    try {
        log('点赞数判断')
        var res = false;
        var a = id('com.smile.gifmaker:id/like_count_view').find()
        // log(a.length)
        //通过a.length判断获取到几个视频标题，再通过视频标题坐标判断是否为正在看的视频的标题
        if (a.length == 3) {
            likenum = a[1].text()
        } else if (a.length == 2) {
            var lickbounds0 = a[0].bounds()
            if (lickbounds0.centerY() > 300 && lickbounds0.centerY() < 1800) {
                likenum = a[0].text()
            } else {
                var lickbounds1 = a[1].bounds()
                if (lickbounds1.centerY() > 300 && lickbounds1.centerY() < 1800) {
                    likenum = a[1].text()
                } else {
                    return res
                }
            }
        } else {
            return res
        }
        log(likenum)
        //0为浏览上万视频，1为浏览500以上
        if (aa == 0) {
            if (likenum.indexOf("w") != -1) {
                res = true
            }
        } else if (aa == 1) {
            if (likenum.indexOf("w") == -1 && Number(likenum) > 500) {
                res = true
            }
        }
        return res;
    } catch (error) {
        log(error)
        sleep(3000)
    }
}
//快手关键词养号
function ksgjcyh() {
    TKB.set_log("快手关键词养号")
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
    var bq = ['必胜', '戴口罩', '勤洗手', '扎心', '666', '奸笑', '捂脸', '龇牙', '哼', '哦', '微笑', '老铁', '双鸡', '调皮', '呆住', '星星眼', '爱心', '疑问', '生气', '难过', '撇嘴', '惊讶', '羞涩', '色', '汗', '老司机', '头盔', '酷', '笑哭', '愉快', '委屈', '白眼', '安排', '点点关注', '小姐姐', '小哥哥', '鼓掌', '抱抱', '哈欠', '大哭', '闭嘴', '惊恐', '红脸蛋', '亲亲', '冷汗', '晕', '火', '坏笑', '爆炸', '可怜', '再见', '赞', '囧', '大哥', '玫瑰', '抓狂', '嘘', '快哭了', '偷笑', '落泪', '挑逗', '困', '睡觉', '打招呼', '流鼻血', '抱大腿', '偷瞄', '吃瓜', '旋转', '憨笑', '吐彩虹', '擦鼻涕', '拜托', '加油', '想吃', '打脸', '吐血', '大鼻孔', '天啊', '皱眉', '装傻', '酸了', '柴犬', '期待', '干杯', '祈祷', '爱你', '摸头', '欢迎', '比心']
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var rddx = (new Date()).getTime()
    var stt = random(60, 70)
    var a = 0
    var tem = 0
    var zbt = random(20, 30) //视频总观看时长
    var sp_time = random(30, 50) //视频观看时长
    var like = ''
    var z = random(0, 2)
    // var sp = 0
    var xs = action_args['param']
    var cz = xs['是否垂直']
    // var cz = '是'
    if (cz == '是') {
        TKB.set_log('垂直养号')
        var gjc_name = xs['关键词']
        // var gjz = '美女'
        var ss = gjc_name.split("|")
        var gjz = ss[random(0, ss.length - 1)]
        TKB.set_log('关键词' + gjz)
    }
    // var gjz = '腿' //关键词
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            TKB.clear(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.set_log("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.clear(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        zonghe()
        if (a == 0) {
            if (tem == 0) {
                log('点击首页')
                click('首页')
                sleep(random(1000, 3000))
                tem = 1
            }
            if (desc('菜单').exists() && desc('发现').exists()) {
                log('点击菜单')
                desc('菜单').click()
                sleep(3000)
            }
            if (id('com.smile.gifmaker:id/tabs').exists()){

            }
            if (TKB.zhaose("if isColor(107,1746,0xffffff,80) and isColor(122,1742,0x666666,80) and isColor(141,1754,0x666666,80) and isColor(151,1761,0x666764,80) and isColor(158,1771,0x0fba03,80) and isColor(166,1776,0xfefff3,80) and isColor(165,1785,0x0fb80b,80) and isColor(165,1823,0x666666,80) and isColor(172,1823,0x666666,80) then")) {
                TKB.set_log("已经开启大屏模式")
                back()
                sleep(3000)
                tem = 0
            }else if (text('更多').exists() && text('大屏模式').exists() && a == 0) {
                log('大屏模式')
                click('大屏模式')
                sleep(5000)
            }
            if (text('快手大屏版来啦').exists() && id('com.smile.gifmaker:id/close_iv').exists()) {
                log('关闭')
                id('com.smile.gifmaker:id/close_iv').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/tabs').exists()){
                log('发现')
                click(570,150)
                sleep(2000)
                a = 1
            }
        }
        if (a == 1) {
            if (id('com.smile.gifmaker:id/like_icon').exists() && id('com.smile.gifmaker:id/comment_icon').exists()) {
                log('视频界面')
                swipe(600, 1350, 500, 100, 800)
                sleep(2000) //刚进入视频页面下滑一次
                var zbt = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    try {
                        like = lickopen(0)
                        if (like == false) {
                            TKB.set_log("下滑")
                            swipe(600, 1350, 500, 100, 800)
                            TSD = (new Date()).getTime()
                            sleep(800)
                            like = ''
                        } else if (like == true) {
                            TKB.set_log('符合条件')
                            var dz_num = random(1, 100)
                            var pl_num = random(1, 100)
                            var sj = random(1, 100)
                            var sp_time = random(30, 50) //视频观看时长
                            // var sp_time = 5
                            var rdd = (new Date()).getTime()
                            while (1) {
                                if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                    if (text('点击重播').exists()) {
                                        TKB.set_log("广告重播")
                                        click('点击重播')
                                        sleep(2000)
                                        swipe(600, 1350, 500, 100, 800)
                                        break
                                    } else {
                                        TKB.set_log("观看视频中...")
                                        toastLog("观看视频中...")
                                        sleep(4000)
                                    }
                                } else {
                                    if (pl_num < 3) {
                                        TKB.set_log("评论")
                                        id('com.smile.gifmaker:id/comment_button').click()
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
                                            TKB.set_log("发送")
                                            click('发送')
                                            sleep(2000)
                                        }
                                        back()
                                        sleep(1000)
                                        pl_num = 101
                                    } else {
                                        if (sj < 5) {
                                            for (var j = 0; j < random(1, 3); j++) {
                                                swipe(600, 1600, 500, 300, 1000)
                                                sleep(random(1000, 2000))
                                                TKB.set_log("随机滑动")
                                            }
                                            sj = 101
                                        } else {
                                            if (dz_num < 20) {
                                                TKB.set_log("点赞")
                                                click(990, 1350)
                                                sleep(2000)
                                                dz_num = 101
                                            } else {
                                                if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                    TKB.set_log("评论界面返回")
                                                    toastLog("评论界面返回")
                                                    sleep(2000)
                                                    back()
                                                    sleep(1000)
                                                    back()
                                                    sleep(1000)
                                                } else {
                                                    if (text('点击重播').exists()) {
                                                        TKB.set_log("广告重播")
                                                        click('点击重播')
                                                        sleep(2000)
                                                        swipe(600, 1350, 500, 100, 800)
                                                        sleep(2000)
                                                        break
                                                    } else {
                                                        if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                            toastLog(sp_time + "秒，滑动")
                                                            TKB.set_log("观看时间够了,滑动")
                                                            swipe(600, 1350, 500, 100, 800)
                                                            sleep(random(1000, 3000))
                                                            TSD = (new Date()).getTime()
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
                        if ((new Date()).getTime() - rddx > zbt * 60 * 1000) {
                            TKB.set_log("去搜索视频")
                            back()
                            sleep(1000)
                            a = 2
                            var rddx = (new Date()).getTime()
                            var zbtx = random(30, 40) //视频总观看时长
                            break
                        }
                    } catch (error) {
                    }
                }
            }
        }
        if (a == 2) {
            if (id('com.smile.gifmaker:id/thanos_home_top_search').exists()) {
                log('点击搜索')
                id('com.smile.gifmaker:id/thanos_home_top_search').click()
                sleep(2000)
            }
            if (desc('返回').exists() && id('com.smile.gifmaker:id/right_btn').exists()) {
                log('点击输入')
                click(400, 150)
                sleep(2000)
            }
            if (desc('返回').exists() && text('搜索').exists() && text('猜你想搜').exists()) {
                log('输入搜索内容')
                setText(gjz)
                sleep(2000)
                click('搜索')
                sleep(2000)
            }
            if (desc('返回').exists() && text('搜索').exists() && text('综合').exists()) {
                TKB.set_log("搜索后视频主页")
                click('综合')
                sleep(1000)
                var x = 0
                var cars = []
                if (id('com.smile.gifmaker:id/appbar').className("androidx.recyclerview.widget.RecyclerView").exists()) {
                    for (var j = 0; j < random(0, 2); j++) {
                        swipe(500, 450, 50, 450, 800)
                        sleep(random(1000, 2000))
                        TKB.set_log("横向滑动")
                    }
                    className("androidx.recyclerview.widget.RecyclerView").findOne().children().forEach(function (child) {
                        cars[x] = child.text()
                        // log(cars[x])
                        x = x + 1
                    })
                    click(cars[Math.floor(Math.random() * cars.length)])
                    sleep(5000)
                }
                if (z == 1) {
                    TKB.set_log("浏览第一个")
                    click(250, 500)
                    sleep(5000)
                } else {
                    for (var j = 0; j < random(0, 5); j++) {
                        swipe(600, 1800, 500, 500, 1000)
                        sleep(random(1000, 2000))
                        TKB.set_log("随机滑动")
                    }
                    sleep(2000)
                    click(250, 500)
                    sleep(5000)
                }
            }
            if (id('com.smile.gifmaker:id/like_icon').exists() && id('com.smile.gifmaker:id/comment_icon').exists()) {
                log('视频界面')
                swipe(600, 1350, 500, 100, 800)
                sleep(2000) //刚进入视频页面下滑一次
                var zbt = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    try {
                        like = lickopen(0)
                        if (like == false) {
                            TKB.set_log("下滑")
                            swipe(600, 1350, 500, 100, 800)
                            TSD = (new Date()).getTime()
                            like = ''
                        } else if (like == true) {
                            TKB.set_log('符合条件')
                            var sj = random(1, 100)
                            var sp_time = random(30, 50) //视频观看时长
                            // var sp_time = 5
                            var rdd = (new Date()).getTime()
                            while (1) {
                                if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                    if (text('点击重播').exists()) {
                                        TKB.set_log("广告重播")
                                        click('点击重播')
                                        sleep(2000)
                                        swipe(600, 1350, 500, 100, 800)
                                        break
                                    } else {
                                        TKB.set_log("观看视频中...")
                                        toastLog("观看视频中...")
                                        sleep(4000)
                                    }
                                } else {
                                    if (sj < 3) {
                                        TKB.set_log("评论")
                                        id('com.smile.gifmaker:id/comment_button').click()
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
                                            TKB.set_log("发送")
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
                                                TKB.set_log("随机滑动")
                                            }
                                            sj = 101
                                        } else {
                                            if (sj < 20) {
                                                TKB.set_log("点赞")
                                                click(990, 1350)
                                                sleep(2000)
                                                sj = 101
                                            } else {
                                                if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                    TKB.set_log("评论界面返回")
                                                    toastLog("评论界面返回")
                                                    sleep(2000)
                                                    back()
                                                    sleep(1000)
                                                    back()
                                                    sleep(1000)
                                                } else {
                                                    if (text('点击重播').exists()) {
                                                        TKB.set_log("广告重播")
                                                        click('点击重播')
                                                        sleep(2000)
                                                        swipe(600, 1350, 500, 100, 800)
                                                        sleep(2000)
                                                        break
                                                    } else {
                                                        if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                            toastLog(sp_time + "秒，滑动")
                                                            TKB.set_log("观看时间够了,滑动")
                                                            swipe(600, 1350, 500, 100, 800)
                                                            sleep(random(1000, 3000))
                                                            TSD = (new Date()).getTime()
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
                        if ((new Date()).getTime() - rddx > zbt * 60 * 1000) {
                            TKB.set_log("去搜索视频")
                            back()
                            sleep(1000)
                            a = 2
                            var rddx = (new Date()).getTime()
                            var zbtx = random(30, 40) //视频总观看时长
                            break
                        }
                    } catch (error) {
                    }
                }
            }
        }
    }
}

// 关注 'https://v.kuaishou.com/5qc7LK' 'yzx4794141681523'
function ksgz() {
    TKB.set_log('关注用户')
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171821'
    var xs = action_args['param'],
        live_obj
        // var live_obj = 'https://v.kuaishou.com/5qc7LK'
    var is_follow = false,
        follow_num = 2
    if (xs['快手号/链接'] == undefined || xs['快手号/链接'] == '') {
        TKB.set_log('未获取到关注用户所需的参数')
        return false
    } else {
        live_obj = xs['快手号/链接']
        if (live_obj.indexOf('https://') != -1) {
            home()
            sleep(2000)
            setClip(live_obj)
            sleep(2000)
            launch(dqbaoming)
        }
    }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.set_log('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_follow = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.set_log('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && id('com.smile.gifmaker:id/thanos_home_top_search').exists()) {
                TKB.set_log('首页')
                id('com.smile.gifmaker:id/thanos_home_top_search').findOnce().click()
                BD = (new Date()).getTime()
                sleep(2000)
            }
            if ((desc('返回').exists() && text('热榜').exists() || desc('返回').exists() && id('com.smile.gifmaker:id/search_layout').exists() && !text('用户').exists())) {
                TKB.set_log('输入抖音ID_' + live_obj)
                click(500, 160)
                sleep(2000)
                setText(live_obj)
                sleep(2000)
                click('搜索')
                sleep(5000)
            }
            if (text('用户').exists() && desc('返回').exists() && desc('查找').exists()) {
                if (id('com.smile.gifmaker:id/name').exists() && (id('com.smile.gifmaker:id/text1').findOnce().text() == '快手号:' + live_obj || id('com.smile.gifmaker:id/text2').findOnce().text() == '快手号匹配')) {
                    TKB.set_log('选择该用户')
                    var er = id('com.smile.gifmaker:id/name').findOnce().bounds()
                    click(er.centerX(), er.centerY())
                    sleep(2000)
                }
            }
            if (text('去看看').exists()) {
                TKB.set_log("去看看")
                click('去看看')
                sleep(2000)
            }
            if (textStartsWith('i 关注').exists() && (text('i 关注').exists() && text('粉丝').exists())) {
                TKB.set_log('关注')
                text('i 关注').findOnce().click()
                is_follow = true
                sleep(2000)
            }
            if ((text('快手号: ' + live_obj).exists() || ((text('取消关注').exists() || text('相互关注').exists()) || text('发私信').exists()))) {
                if (is_follow == false && follow_num == 2) {
                    TKB.set_log('你已经关注过此用户')
                    toastLog("你已经关注过此用户")
                    back()
                    return false
                } else {
                    if (follow_num > 0) {
                        follow_num--
                        if (live_obj.indexOf('https://') == -1) {
                            sleep(2000)
                            back()
                        } else {
                            home()
                            sleep(1000)
                            setClip(live_obj)
                            sleep(3000)
                            launch(dqbaoming)
                        }
                        is_follow = false
                        continue
                    } else {
                        if (is_follow == false) {
                            TKB.set_log('关注成功')
                            toastLog("关注成功")
                            back()
                            return true
                        } else {
                            TKB.set_log('关注失败')
                            toastLog("关注失败")
                            back()
                            return false
                        }
                    }
                }
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}

// 点赞 '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
function ksdz() {
    TKB.set_log('快手点赞')
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171547'
    var is_open = false
    var xs = action_args['param'],
        live_obj
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.set_log('未获取到作品链接')
        return false
    } else {
        live_obj = xs['作品链接']
        home()
        sleep(2000)
        setClip(live_obj)
        sleep(2000)
        launch(dqbaoming)
    }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.set_log('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_open = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.set_log('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/title').exists() && id('com.smile.gifmaker:id/close').exists() && text('去看看').exists()) {
                TKB.set_log('检测到链接，立即打开')
                text('去看看').findOnce().click()
                is_open = true
                sleep(5000)
            }
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && is_open == true) {
                TKB.set_log('已打开链接，准备点赞')
                id('com.smile.gifmaker:id/like_button').click()
                sleep(2000)
                return true
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}

// 评论 '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'  var pltext = '学到了'
function kspl() {
    TKB.set_log('快手评论')
    TKB.clear()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
        // var sbip = '47.114.99.72',
        //     run_id = '171740'
    var xs = action_args['param'],
        live_obj
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.set_log('未获取到作品链接')
        return false
    } else {
        sleep(2000)
        var live_obj = xs['作品链接']
        var hs = xs['话术']
            // var live_obj = 'https://v.kuaishou.com/6gobVS'
            // var hs = '这个建筑师很有名|很想去住一晚|符合我们年轻人的想法|期待更新|超级喜欢的一个建筑师|这个地方我也去过|视频内容不错|跟宿舍差不多|理想家园|这个记者好帅|啥时候发新的视频呀|我都关注你好久了|女朋友可不能共享哦|空间有点小|好像不适合情侣呀|我一个单身的，对我挺好|这个地址是在哪里呢|感觉还要好久才能实现理想家|何记者好|给你点赞|666|有人去过吗，什么体验|共享时代的到来|一起去住吧|我相信未来人都会住上这样的房子|漂亮|喜欢|前排|沙发|希望能住上'
        var ss = hs.split("|")
        var pltext = ss[random(0, ss.length - 1)]
        home()
        sleep(2000)
        setClip(live_obj)
        sleep(2000)
        launch(dqbaoming)
    }
    var is_open = false,
        send_comment = false
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.set_log('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_open = send_comment = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.set_log('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/title').exists() && id('com.smile.gifmaker:id/close').exists() && text('去看看').exists()) {
                TKB.set_log('检测到链接，立即打开')
                text('去看看').findOnce().click()
                is_open = true
                sleep(random(10000, 15000))
            }
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && is_open == true) {
                TKB.set_log('已打开链接，准备评论')
                id('com.smile.gifmaker:id/comment_button').click()
                sleep(5000)
                TKB.set_log('输入评论文本')
                click(300, 1840)
                sleep(2000)
                setText(pltext)
                sleep(2000)
            }
            if (text('发送').exists() && text('发送').findOnce().enabled() == true) {
                TKB.set_log('发送')
                click('发送')
                send_comment = true
                sleep(2000)
            }
            if (!id('com.ss.android.ugc.aweme:id/a__').exists() && send_comment == true) {
                TKB.set_log('评论成功')
                back()
                return true
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}
//快手直播2
function dyzhibo() {
    TKB.set_log("快手直播2")
    var TSD = (new Date()).getTime()
    var xs = action_args['param']
        // var url = "https://v.douyin.com/Jd2rLDf/"   //直播间连接
    log(xs)
    var url = xs["account"] //直播间连接
    var huahsu = xs["话术"] //直播间话术
    var yanshi = xs["话术频率"] //直播间话术时间间隔
    var gzs = xs["关注"] //直播间关注
    var ttn = 0 //判断有没有点关注
    var tuichu = xs["退出"] //判断是否退出当前任务
    var danmu = xs["发弹幕"] //判断是否发弹幕
    var yu = (new Date()).getTime() //发话术时间
    TKB.set_log("获取到的链接" + url)
    TKB.clear()
    var lpp = 0
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.smile.gifmaker")
    var cs = 0 //进入直播间的次数
    var jieshu = 0 //判断直播间结束
    var rq = (new Date()).getTime() //上传是否进入
    while (1) {
        if (text('去看看').exists()) {
            TKB.set_log("打开看看-进入直播")
            click('去看看')
            sleep(2000)
        }
        //直播间红包
        if (id('com.smile.gifmaker:id/open_icon_view').exists() && id('com.smile.gifmaker:id/background_view_normal').exists()) {
            TKB.set_log('点击红包')
            id('com.smile.gifmaker:id/background_view_normal').findOnce().click()
            sleep(2000)
        }
        if (id('com.smile.gifmaker:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
            TKB.set_log('开红包')
            id('com.smile.gifmaker:id/live_red_packet_pre_snatch_state_view').findOnce().click()
            sleep(5000)
        }
        if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
            TKB.set_log('红包抢完了')
            id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
            sleep(3000)
        }
        if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
            TKB.set_log('红包未开启')
            id('com.smile.gifmaker:id/live_red_packet_close_view').findOnce().click()
            sleep(3000)
        }
        if (id('com.smile.gifmaker:id/close_view').exists()) {
            TKB.set_log('抢到了红包')
            id('com.smile.gifmaker:id/close_view').findOnce().click()
            sleep(2000)
        }
        if (textStartsWith('分享者').exists() && id('com.smile.gifmaker:id/close').exists()) {
            click(random(200, 700), random(1400, 1480))
            sleep(2000)
        } //直播间红包
        if (text("说点什么...").exists() && text("更多直播").exists() || id("com.smile.gifmaker:id/live_close_place_holder").exists() && id("com.smile.gifmaker:id/live_share").exists() || text("说点什么...").exists() && id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists()) {
            TKB.set_log("直播界面")
            toastLog("直播界面")
            if (lpp == 0) {
                TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                lpp = 1
            }
            sleep(2000)
            if (ttn == 0 && gzs == 1) {
                log("去关注")
                click(80, 60)
                sleep(2000)
            } else {
                var ff = random(1, 10)
                if (ff > 8) {
                    var djcs = random(4, 10)
                    for (j = 0, len = djcs; j < len; j++) {
                        click(random(800, 1000), random(450, 800))
                        sleep(random(100, 500))
                    }
                }
                if (danmu == 1 && (new Date()).getTime() - yu > Number(yanshi) * 1000) {
                    TKB.set_log("发弹幕")
                    click(120, 1830)
                    sleep(1500)
                    var fas = huahsu.split("|")
                    setText(fas[random(0, fas.length - 1)])
                    sleep(500)
                    if (desc("发送").exists()) {
                        TKB.set_log("点击发送")
                        try {
                            var ss = desc("发送").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            log(error);
                        }
                    } else {
                        click(1020, 1000)
                        sleep(1000)
                    }
                    yu = (new Date()).getTime()
                }
            }
            if ((new Date()).getTime() - rq > 60 * 1000) {
                TKB.set_log("去上传人气")
                TKB.uprenqi(sbip, user_id, yhbh, run_id, "1")
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.set_log("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                gzs = xs["关注"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                rq = (new Date()).getTime()
            }
            TSD = (new Date()).getTime()
        } else {
            if ((new Date()).getTime() - TSD > 90 * 1000) {
                TKB.set_log("超时重新打开")
                TKB.clear()
                sleep(2000)
                setClip(url)
                sleep(1000)
                launch("com.smile.gifmaker")
                TSD = (new Date()).getTime()
                if (cs > 3) {
                    xs = TKB.zhid(sbip, run_id)
                    url = xs["account"]
                    TKB.set_log("链接" + url)
                    huahsu = xs["话术"] //直播间话术
                    yanshi = xs["话术频率"] //直播间话术时间间隔
                    gzs = xs["关注"] //直播间关注
                    tuichu = xs["退出"] //判断是否退出当前任务
                    danmu = xs["发弹幕"] //判断是否发弹幕
                    setClip(url)
                    TKB.clear()
                    launch("com.smile.gifmaker")
                }
                cs = cs + 1
            }
        }
        if (text("直播已结束").exists() && text("观看人数").exists() || text("直播已结束").exists() && text("直播时长").exists()) {
            TKB.set_log("直播已经结束")
            jieshu = jieshu + 1
            if (jieshu > 3) {
                TKB.set_log("结束退出")
                return true
            } else {
                TKB.set_log("重新去拿连接")
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.set_log("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                gzs = xs["关注"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                setClip(url)
                TKB.clear()
                launch("com.smile.gifmaker")
            }
        }
        if (text("关注").exists() && id("com.smile.gifmaker:id/live_profile_header_list_follow_container").exists() || text("粉丝").exists() && id("com.smile.gifmaker:id/live_profile_header_list_follow_container").exists()) {
            log("关注界面")
            if (gzs == 1) {
                try {
                    var ss = id("com.smile.gifmaker:id/live_profile_header_list_follow_container").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
                ttn = 1
                back()
                sleep(2000)
            } else {
                back()
                sleep(2000)
            }
        }
        if (text('不再提醒').exists() && text('去开启').exists()) {
            click('不再提醒')
            sleep(2000)
        }
        if (desc('立即购买').exists() && !desc('分享成功').exists()) {
            back()
            sleep(2000)
        }
        if (id("com.smile.gifmaker:id/editor").exists() && desc("发送").exists() || id("com.smile.gifmaker:id/emotion_button").exists() && desc("发送").exists()) {
            TKB.set_log("发消息界面")
            back()
            sleep(2000)
        }
        if (url == undefined || tuichu == 1) {
            TKB.set_log("获取不到链接" + tuichu)
            return false
        }
        if (text("入团特权").exists() && id("com.smile.gifmaker:id/live_fans_group_anchor_avatar").exists() || text("送礼并加入").exists()) {
            log("加入粉丝团")
            back()
            sleep(3000)
        }
        if (text("立即赠送").exists()) {
            log("立即赠送")
            back()
            sleep(3000)
        }
        zonghe()
    }
}
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
    var name_return = '快手昵称不符合'
    var img_return = '快手头像不符合'
    var jj_return = '快手简介不符合'
    var nm = 0
    var status = 0
    var xs = action_args['param']
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname'].split('|||')[0]
        TKB.set_log(name)
        var img = zz['img'].split('|||')[0]
        TKB.set_log(img)
        jianjie = zz['jianjie'].split('|||')[0]
        TKB.set_log(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.set_log("下载图片失败")
            return false
        }
    }
    var name = nickname
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
                alert('账号异常需要激活')
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
                        if (id(name).exists()) {
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
                                setText(name)
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
                    if (name_result == true && img_result == true && jj_result == true) {
                        status = 1
                    } else {
                        status = 2
                    }
                    info = name_return + ',' + img_return + ',' + jj_return
                    TKB.set_log(info)
                    TKB.upinfo(sbip, user_id, yhbh, info, status)
                    sleep(3000)
                    TKB.clear(dqbaoming)
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}

//发布视频
function fabusp() {
    TKB.set_log("发布视频")
    launch("com.smile.gifmaker")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var a = 0
    var x = 0
    var ylsl = 0 //现在的作品数量
    var zpsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var status = 0
    var xs = action_args['param']
    var category = xs['类型']
        // var category = '美女'
    var zz = TKB.get_video(sbip, user_id, yhbh, category)
    var shipin_id = zz['shipin_id']
    var lj = zz['text']
    if (lj == false) {
        return false
    }
    var sp = TKB.xzsp(lj)
    if (sp == false) {
        TKB.set_log("下载视频失败")
        return false
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.set_log("时间够了退出")
            if (fb != 0) {
                status = 1
                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                return true
            }
            TKB.clear()
            return false
        }
        if ((new Date()).getTime() - TSD > 7 * 60 * 1000) {
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
                            TKB.set_log(ss[j])
                            var st = ss[j].split("作品")
                            zpsl = st[0]
                            TKB.set_log("作品数量：" + zpsl)
                            a = 1
                            if (fb == 0) {
                                ylsl = zpsl
                                TKB.set_log(ylsl)
                            }
                            if (zpsl > ylsl) {
                                TKB.set_log("现在的作品数量大于原来的")
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                toastLog('成功上传')
                                status = 1
                                TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                            sleep(500)
                        }
                    }
                }
            } else if (a == 1) {
                zonghe()
                if (id('com.smile.gifmaker:id/mytprofile_record_guide').exists() && id('com.smile.gifmaker:id/left_btn').exists() && id('com.smile.gifmaker:id/more_btn').exists()) {
                    TKB.set_log('拍摄视频')
                    id('com.smile.gifmaker:id/mytprofile_record_guide').click()
                    sleep(2000)
                }
                if (text('视频').exists() && text('直播').exists()) {
                    TKB.set_log('视频')
                    click('视频')
                    sleep(1000)
                }
                if (id('com.smile.gifmaker:id/inner_oval').exists() && text('相册').exists() && text('音乐').exists()) {
                    TKB.set_log('视频界面')
                    text('相册').findOnce().parent().click()
                    sleep(2000)
                }
                if (text('照片').exists() && text('全部').exists() && text('视频').exists()) {
                    TKB.set_log('相机胶卷')
                    click('视频')
                    sleep(3000)
                    click(220, 315)
                    sleep(2000)
                    click('下一步(1)')
                    sleep(2000)
                }
                if (text('画幅').exists() && text('变速').exists() && text('旋转').exists() && text('下一步').exists()) {
                    TKB.set_log('视频剪辑')
                    click('下一步')
                    sleep(2000)
                }
                if (text('美化').exists() && text('配乐').exists() && text('特效').exists() && text('下一步').exists()) {
                    TKB.set_log('剪辑完成')
                    click('下一步')
                    sleep(2000)
                }
                if (text('所在位置').exists() && text('个性化设置').exists() && text('所有人可见').exists() && text('发布').exists()) {
                    TKB.set_log('发布')
                    click('发布')
                    a = 0
                    fb = 1
                    sleep(10000)
                }
                if (text('发布成功').exists()) {
                    TKB.set_log('发布成功')
                    status = 1
                    TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                    return true
                }
            }

        } catch (error) {
            sleep(1001)
            TKB.set_log(error);
        }
    }
}


//删除作品
function shipinsc() {
    TKB.set_log("视频删除")
    launch("com.smile.gifmaker")
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var a = 0
    while (1) {
        if ((new Date()).getTime() - BD > 10 * 60 * 1000) {
            TKB.set_log("超时没在首页")
            TKB.killapp("快手")
            sleep(1000)
            launch("com.smile.gifmaker")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.set_log("超时退出")
            return false
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
                    } else if (!desc("作品").exists() || text("没有作品").exists()) {
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
            zonghe()
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
                            TKB.set_log(ss[j])
                            var st = ss[j].split("作品")
                            var zpsl = st[0]
                            TKB.set_log("作品数量：" + zpsl)
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
            TKB.set_log(error);
        }
    }
}

//核对账号
function phonenum() {
    TKB.set_log("快手手机号检测")
    launch("com.smile.gifmaker")
    sleep(6000)
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.set_log("时间够了退出")
                TKB.clear()
                break
            }
            zonghe()
            if (id('com.smile.gifmaker:id/left_btn').exists() && !desc('编辑资料').exists()) {
                TKB.set_log('点击菜单')
                id('com.smile.gifmaker:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/tab_settings').exists()) {
                id('com.smile.gifmaker:id/tab_settings').findOnce().click()
                TKB.set_log('点击设置')
                sleep(3000)
            }
            if (text("设置").exists() && text("帐号").exists()) {
                var fournum = id('com.smile.gifmaker:id/entry_sub_text').findOnce().text()
                var y = fournum.substr(fournum.length - 4)
                toast(y)
                TKB.set_log(y)
                TKB.set_log('获取后四位号码')
                sleep(3000)
                home()
                TKB.set_log('返回到手机桌面')
                sleep(3000)
                launch('com.android.mms')
                sleep(6000)
            }
            if (text("新信息").exists()) {
                click("新信息")
                TKB.set_log("点击新建信息")
                sleep(3000)
            }
            if (text("收件人").exists() && text("输入内容").exists()) {
                click(text("收件人").findOnce().bounds().centerX(), text("收件人").findOnce().bounds().centerY())
                TKB.set_log("点击收件人")
                sleep(3000)
                text("收件人").findOnce().setText(10001)
                sleep(3000)
                text("输入内容").findOnce().setText(504)
                sleep(3000)
                if (text("发送").exists()) {
                    id("com.android.mms:id/gn_send_msg_button").findOnce().click()
                    TKB.set_log("点击发送")
                    sleep(3000)
                }
            }
            sleep(35000)
            if (text("发送").exists() && text("输入内容").exists()) {
                var str = id("com.android.mms:id/gn_text_view").findOnce().text();
                var num = str.replace(/[^0-9]/ig, "");
                var phonenum = num.slice(0, 11)
                var x = phonenum.substr(phonenum.length - 4)
                toast(x)
                TKB.set_log(x)
                sleep(3000)
            }
            if (x == y) {
                toast("手机号码一致")
                TKB.set_log("手机号码一致")
                TKB.clear()
                sleep(3000)
                return true
            } else {
                alert("手机号码有误")
                TKB.clear()
                sleep(3000)
                return true
            }
        } catch (error) {
            TKB.set_log(error)
        }
    }
}



//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.set_log("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        if ( files.exists("/sdcard/观沧海.mp3")  ==  false) {
            TKB.set_log("没有音乐文件去下载")    
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
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
                        TKB.set_log("子线程运行结束！")
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.set_log("继续快手任务")
                    } else {
                        TKB.set_log("运行时间到了或者有紧急任务了")
                        TKB.clear()
                        sleep(2000)
                            // java.lang.System.exit(0)
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.set_log("获取到的任务3" + renwux)
                        TKB.set_log("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp)
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                TKB.set_log("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error)
                sleep(random(3000, 8000))
            }
        }
    })
}


//执行美图项目
function kszhixing() {
    try {
        toastLog("执行快手任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var bb = TKB.getVerName("快手")
            if (bb != "7.4.20.13991" && bb != false) {
                TKB.set_log("快手的版本不对")
                TKB.xiezai(dqbaoming)
            }
            var baom = getPackageName("快手")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("快手", "7.4.20.13991")
                if (bbd == false) {
                    TKB.set_log("没安装成功快手")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0)
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.clear()
            var dl = kszc()
                // var dl = true
            if (dl == true) {
                if (fun == "直播间") {
                    dyzhibo()
                } else if (fun == "删除作品") {
                    shipinsc()
                } else if (fun == "发布视频") {
                    fabusp()
                } else if (fun == "修改资料") {
                    ksxgzl()
                } else if (fun == "养号") {
                    var xs = action_args['param']
                    var cz = xs['是否垂直']
                    if (cz == '否') {
                        ksxyh()
                    } else if (cz == '是') {
                        ksgjcyh()
                    }
                } else if (fun == "关注") {
                    ksgz()
                } else if (fun == "点赞") {
                    ksdz()
                } else if (fun == "评论") {
                    kspl()
                } else if (fun == "快手手机号检测") {
                    phonenum()
                }
            }
            TKB.set_log("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0)
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.set_log("获取到的任务2" + renwus)
            TKB.set_log("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp)
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        })
    } catch (error) {
        log(error)
        TKB.cunqusj("jiaoben", "tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi")
        java.lang.System.exit(0)
        sleep(random(1000, 2000))
    }
}

kszhixing()

