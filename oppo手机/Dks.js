log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！")
    exit()
}

var TKB = require('/sdcard/mytkb.js')

var dqbaoming = "com.smile.gifmaker" //该项目包名
var yzcs = 0 // 异常登录测次数

//******************************************************************快手项目*****************************************************************

function zonghe() {
    if (id('com.smile.gifmaker:id/birthday_click_to_close').exists()) {
        TKB.xgsrizhi('关闭生日')
        id('com.smile.gifmaker:id/birthday_click_to_close').findOnce().click()
        sleep(1500)
    }
    if (id('com.smile.gifmaker:id/close_btn').exists()) {
        TKB.xgsrizhi('关闭活动红包')
        id('com.smile.gifmaker:id/close_btn').findOnce().click()
        sleep(1500)
    }
    if (text("激活帐号").exists() && desc("获取语音验证码").exists()) {
        alert("此账号需要激活")
        //账号被封提示弹窗
    }
    if (text('同意并继续').exists()) {
        click('同意并继续')
        sleep(1500)
        TKB.xgsrizhi('同意并继续')
    }
    if (id("com.smile.gifmaker:id/icon_close").exists() && text("一键开启").exists()) {
        TKB.xgsrizhi("深色模式")
        id("com.smile.gifmaker:id/icon_close").click()
        sleep(2000)
    }
    if (text('设置头像').exists() && text('跳过').exists()) {
        click('跳过')
        sleep(1500)
        TKB.xgsrizhi('跳过设置头像')
    }
    if (text('立即升级').exists() && text('版本升级').exists()) {
        id('com.smile.gifmaker:id/iv_close').findOnce().click()
        sleep(1500)
    }
    if (text('取消').exists() && text('去开启').exists()) {
        click('取消')
        sleep(1500)
    }
    if (text('通讯录').exists() && text('跳过').exists()) {
        click('跳过')
        sleep(1500)
        TKB.xgsrizhi('跳过通讯录')
    }
    if (text('我知道了').exists() && text('设置青少年模式').exists()) {
        click('我知道了')
        TKB.xgsrizhi('设置青少年模式')
        sleep(1500)
    }
    if (text('邀请你体验快手新版大屏模式').exists() && text('取消')) {
        click('取消')
        sleep(1500)
    }
    if (text('送我一个小可爱吧').exists() || text('立即赠送').exists()) {
        back()
        sleep(500)
    }
    if (id('com.smile.gifmaker:id/follow_btn').exists() && text('关注并退出').exists()) {
        click('关注并退出')
        sleep(1500)
        TKB.xgsrizhi("关注并退出")
    }
    if (text('点击重试').exists() || text('网络连接失败，请稍后重试').exists()) {
        click('点击重试')
        sleep(1500)
    }
    if (desc('您的帐号存在异常，请使用当前绑定的手机号激活。').exists() && desc('获取语音验证码后1分钟内，我们将以电话形式告知您验证码，请留意接听。').exists()) {
        yzcs++
        sleep(2500)
        back()
    }
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        TKB.xgsrizhi("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            TKB.xgsrizhi("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.xgsrizhi("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    if (id('com.smile.gifmaker:id/close_btn').exists()) {
        id('com.smile.gifmaker:id/close_btn').findOnce().click()
        TKB.xgsrizhi("关闭好友推荐")
        sleep(1500)
    }
    if (text('现在就开始拍摄').exists() && text('开启以下权限，记录和分享美好生活').exists() && text('一键开启').exists()) {
        click('一键开启')
        sleep(1500)
        TKB.xgsrizhi("一键开启摄像")
    }
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
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
    if (text("始终同意").exists()) {
        TKB.xgsrizhi("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("始终允许").exists()) {
        TKB.xgsrizhi("始终允许")
        click("始终允许")
        sleep(2000)
    }
    if (text("五星好评").exists() && text("取消").exists()) {
        log("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.xgsrizhi("长按屏幕使用更多功能")
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
    if (text("知道了").exists()) {
        TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试")
        TKB.xgsrizhi("网络连接错误")
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认")
        TKB.xgsrizhi("确认")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542)
        TKB.xgsrizhi("同步到今日头条")
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待")
        TKB.xgsrizhi("等待")
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消")
        TKB.xgsrizhi("取消")
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说")
        TKB.xgsrizhi("以后再说")
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过")
        TKB.xgsrizhi("跳过")
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        TKB.xgsrizhi("继续播放")
        try {
            node = text("继续播放").findOnce().bounds()
            click(node.centerX(), node.centerY())
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
    if (text("立即赠送").exists()) {
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许")
        TKB.xgsrizhi("允许")
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (id("com.smile.gifmaker:id/xd").exists() && text("好友推荐").exists()) {
        TKB.xgsrizhi("好友推荐")
        click(910, 430)
        sleep(1200)
    }
    if (id('com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view').exists()) {
        id('com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view').findOnce().click()
        sleep(2000)
    }
    if (text("立即升级").exists()) {
        TKB.xgsrizhi("关闭升级")
        id("com.smile.gifmaker:id/iv_close").findOnce().click()
        sleep(3000)
    }
}

function getInsideString(str, strStart, strEnd) {
    if (str.indexOf(strStart) < 0) {
        return "";
    }
    if (str.indexOf(strEnd) < 0) {
        return "";
    }
    return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}
//找色
function zhaose(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",80)")
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
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
            TKB.xgsrizhi('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.xgsrizhi('失败')
            return '失败'
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

/**快手注册
 * e_num{number} 注册获取验证码最大次数
 */
function kszc() {
    TKB.xgsrizhi("快手注册")
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
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没注册成功")
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        zonghe()
        if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
            TKB.xgsrizhi('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.xgsrizhi('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.xgsrizhi('登录成功1')
                return true
            }
        }
        if (text('登录').exists()) {
            click('登录')
            TKB.xgsrizhi("开始点击登录按钮")
            TSD = (new Date()).getTime()
            sleep(1500)
        }
        if (text('本机一键登录').exists()) {
            click('本机一键登录')
            toastLog('本机一键登录')
            TKB.xgsrizhi("本机一键登录")
            sleep(1500)
        }
        if (text('其他方式登录').exists()) {
            click('其他方式登录')
            toastLog('其他方式登录')
            TKB.xgsrizhi("其他方式登录")
            sleep(1500)
            // 获取账号
            if (tem == 0) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("获取不到号码")
                    return false
                }
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                tem = 1
            }
        }
        if (text('快速登录观看更多好玩的视频').exists() && text('手机号登录').exists()) {
            var x = text('手机号登录').findOnce().bounds().centerX()
            var y = text('手机号登录').findOnce().bounds().centerY()
            click(x, y)
            sleep(1500)
            TKB.xgsrizhi('点击手机号登录')
        }
        if (text('手机号登录').exists() && text('+86').exists()) {
            if (id('com.smile.gifmaker:id/phone_et').exists()) {
                id('com.smile.gifmaker:id/phone_et').findOnce().click()
                sleep(1500)
                id('com.smile.gifmaker:id/phone_et').findOnce().setText(zh)
                sleep(5000)
                click('获取验证码')
            } else {
                id('com.smile.gifmaker:id/login_name_et').findOnce().click()
                sleep(1500)
                id('com.smile.gifmaker:id/login_name_et').findOnce().setText(zh)
                TKB.xgsrizhi('输入手机号码')
            }
            sleep(2000)
        }
        if (text('下一步').exists() && text('下一步').findOnce().enabled() == true && text('手机号登录').exists()) {
            text('下一步').findOnce().click()
            sleep(1500)
        }
        if (e_num <= 0) {
            TKB.xgsrizhi("获取验证码频繁")
            TKB.qinglihh(dqbaoming)
            sleep(2000)
            return false
        }
        if ((text('验证码登录').exists() && text('无法接收短信?').exists()) || (text('确定').exists() && text('确定').findOnce().enabled() == true && is_click == false) || (text('请输入验证码').exists() && text('登录').exists())) {
            // 获取验证码
            sleep(15000)
            yzm = TKB.huoquyzm("快手科技")
            e_num--
            sleep(2000)
            if (yzm == false) {
                TKB.xgsrizhi("没有获取到验证码")
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_click = false
                continue
            } else {
                TKB.xgsrizhi("输入验证码" + yzm)
                if (id('com.smile.gifmaker:id/captcha_et').exists()) {
                    id('com.smile.gifmaker:id/captcha_et').findOnce().click()
                    sleep(1500)
                    id('com.smile.gifmaker:id/captcha_et').findOnce().setText(yzm)
                } else if (id('com.smile.gifmaker:id/captcha_code_et').exists()) {
                    id('com.smile.gifmaker:id/captcha_code_et').findOnce().click()
                    sleep(1500)
                    id('com.smile.gifmaker:id/captcha_code_et').findOnce().setText(yzm)
                }
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
            TKB.xgsrizhi('登录成功')
            toastLog('登录成功')
            return true
        }
        if (id('com.smile.gifmaker:id/left_btn').exists()) {
            TKB.xgsrizhi('点击菜单')
            click(50, 150)
            sleep(1000)
            if (desc('头像').exists()) {
                TKB.xgsrizhi('登录成功1')
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
    TKB.xgsrizhi("快手新养号")
    // TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
    //bp 评论的表情
    var bq = ['必胜', '戴口罩', '勤洗手', '扎心', '666', '奸笑', '捂脸', '龇牙', '哼', '哦', '微笑', '老铁', '双鸡', '调皮', '呆住', '星星眼', '爱心', '疑问', '生气', '难过', '撇嘴', '惊讶', '羞涩', '色', '汗', '老司机', '头盔', '酷', '笑哭', '愉快', '委屈', '白眼', '安排', '点点关注', '小姐姐', '小哥哥', '鼓掌', '抱抱', '哈欠', '大哭', '闭嘴', '惊恐', '红脸蛋', '亲亲', '冷汗', '晕', '火', '坏笑', '爆炸', '可怜', '再见', '赞', '囧', '大哥', '玫瑰', '抓狂', '嘘', '快哭了', '偷笑', '落泪', '挑逗', '困', '睡觉', '打招呼', '流鼻血', '抱大腿', '偷瞄', '吃瓜', '旋转', '憨笑', '吐彩虹', '擦鼻涕', '拜托', '加油', '想吃', '打脸', '吐血', '大鼻孔', '天啊', '皱眉', '装傻', '酸了', '柴犬', '期待', '干杯', '祈祷', '爱你', '摸头', '欢迎', '比心']
    //zbbpx 直播评论的表情
    var zbbpx = ['😀', '😬', '😁', '😂', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '☺', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '☹', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']
    var live_time = random(20, 30) //直播观看时长
    var stt = random(60, 70) //脚本总共运行时长
    var start_time = (new Date()).getTime()
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var zbz = 0 //直播间选择判断
    var a = 0 //执行的步骤判断
    var z = 0 //是否开启大屏模式的判断
    var sj = random(1, 100) //0-3评论，3-5随机下滑，5-20点赞
    var sp_num = 0 //看20个视频就刷新一下
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
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
            if (zhaose("if isColor(107,1746,0xffffff,80) and isColor(122,1742,0x666666,80) and isColor(141,1754,0x666666,80) and isColor(151,1761,0x666764,80) and isColor(158,1771,0x0fba03,80) and isColor(166,1776,0xfefff3,80) and isColor(165,1785,0x0fb80b,80) and isColor(165,1823,0x666666,80) and isColor(172,1823,0x666666,80) then")) {
                TKB.xgsrizhi("已经开启大屏模式")
                back()
                sleep(2000)
                tem = 0
                z = 1
            }
            if (text('动态').exists() && text('消息').exists() && text('大屏模式').exists() && z == 0) {
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
                        TKB.xgsrizhi("去看直播")
                        back()
                        sleep(1000)
                        var start_time = (new Date()).getTime()
                        a = 1
                        break
                    }
                    if (sp_num > 20) {
                        log('刷新')
                        click(570, 150)
                        sleep(100)
                        click(570, 150)
                        sleep(3000)
                        sp_num = 0
                    }
                    if (text('点击重播').exists()) {
                        TKB.xgsrizhi("广告重播")
                        click('点击重播')
                        sleep(2000)
                        swipe(600, 1350, 500, 100, 800)
                        sleep(2000)
                        break
                    }
                    if (id('com.smile.gifmaker:id/like_count_view').exists()) {
                        comment = id('com.smile.gifmaker:id/like_count_view').find()
                        comment.forEach(item => {
                            var a = item.text();
                            x++
                            if (Number(x) == 2) {
                                dzs = a
                                TKB.xgsrizhi(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            TKB.xgsrizhi('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        TKB.xgsrizhi("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        TKB.xgsrizhi('符合条件')
                        dzl = 0
                        sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                TKB.xgsrizhi("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    TKB.xgsrizhi("评论")
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
                                        TKB.xgsrizhi("发送")
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
                                            TKB.xgsrizhi("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            TKB.xgsrizhi("点赞")
                                            click(990, 1320)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                TKB.xgsrizhi("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    TKB.xgsrizhi("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        TKB.xgsrizhi("观看时间够了,滑动")
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
                }
            }
        }
        if (a == 1) {
            zonghe()
            if (id('com.smile.gifmaker:id/left_btn').exists()) {
                TKB.xgsrizhi("点击菜单")
                id('com.smile.gifmaker:id/left_btn').click()
                sleep(5000)
            }
            if (text('直播广场').exists() && text('大屏模式').exists()) {
                TKB.xgsrizhi("点击直播广场")
                click('直播广场')
                sleep(1000)
                zbz = 0
            }
            if (zbz == 0) {
                if (id('com.smile.gifmaker:id/live_close_place_holder').exists() && id('com.smile.gifmaker:id/live_audience_count_text').exists()) {
                    TKB.xgsrizhi("直播界面")
                    if (id('com.smile.gifmaker:id/live_right_pendant_container').exists() && text('更多直播').exists()) {
                        TKB.xgsrizhi("更多直播")
                        id('com.smile.gifmaker:id/live_right_pendant_container').click()
                        sleep(3000)
                        for (var i = 0; i < random(1, 10); i++) {
                            TKB.xgsrizhi("下滑")
                            swipe(630, 1800, 630, 200, 1200)
                            sleep(2000)
                        }
                        zbz = 1
                        TKB.xgsrizhi("点击")
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
                    TKB.xgsrizhi("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText(zbbpx[random(0, zbbpx.length - 1)])
                    sleep(1000)
                    if (text("发送").exists()) {
                        TKB.xgsrizhi("发送")
                        click('发送')
                        sleep(2000)
                    }
                }
                if ((new Date().getTime()) - start_time < live_time * 60 * 1000) {
                    toastLog("观看直播中")
                    TKB.xgsrizhi("观看直播中")
                    sleep(3000)
                } else if ((new Date().getTime()) - start_time > live_time * 60 * 1000) {
                    TKB.xgsrizhi("观看直播时间已到")
                    back()
                    sleep(1000)
                    if (text('关注并退出').exists()) {
                        TKB.xgsrizhi("退出")
                        click('退出')
                        sleep(2000)
                    }
                    back()
                    sleep(500)
                    return true
                }
            }
            if (text('直播已结束').exists()) {
                TKB.xgsrizhi("直播已结束")
                swipe(600, 1150, 500, 300, 1000)
                sleep(1000)
            }
            if (id('com.smile.gifmaker:id/live_right_top_pendant_container').exists() && text('可领取').exists()) {
                TKB.xgsrizhi("领取宝箱")
                click('可领取')
                sleep(3000)
            }
            if (text('每日百宝箱').exists() && text('开宝箱').exists()) {
                TKB.xgsrizhi("开宝箱")
                click('开宝箱')
                sleep(1000)
                back()
                sleep(500)
            }
            if (id('com.smile.gifmaker:id/open_icon_view').exists() && id('com.smile.gifmaker:id/background_view_normal').exists()) {
                TKB.xgsrizhi('点击红包')
                id('com.smile.gifmaker:id/background_view_normal').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('开红包')
                id('com.smile.gifmaker:id/live_red_packet_pre_snatch_state_view').click()
                sleep(5000)
            }
            if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
                TKB.xgsrizhi('红包抢完了')
                id('com.smile.gifmaker:id/live_red_packet_close_view').click()
                sleep(3000)
            }
            if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
                TKB.xgsrizhi('红包未开启')
                id('com.smile.gifmaker:id/live_red_packet_close_view').click()
                sleep(3000)
            }
        }
    }
}

/**快手关键词养号
 * 和养号的区别在于后面观看直播的时间换成了搜索关键词浏览
 * gjz 关键词
 */
function ksgjcyh() {
    TKB.xgsrizhi("快手关键词养号")
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(6000)
    // zbbpx 评论的表情
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var rddx = (new Date()).getTime()
    var stt = random(60, 70)
    var a = 0
    var dp = 0 //大屏模式开启
    var sp = 0
    var sp_num = 0 //视频浏览量
    var tem = 0
    var zbt = random(20, 30) //视频总观看时长
    var sp_time = random(30, 50) //视频观看时长
    var z = random(0, 2)
    // var xs = TKB.zhid(sbip, run_id)
    // var cz = xs['是否垂直']
    // if (cz == '是') {
    //     TKB.xgsrizhi('垂直养号')
    //     var gjc_name = xs['关键词']
    //     // var gjz = '美女'
    //     var ss = gjc_name.split("|")
    //     var gjz = ss[0,ss.length-1]
    //     TKB.xgsrizhi('关键词' + gjz)
    // }
    // 关键词
    var gjz = '腿' //关键词
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
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
            if (zhaose("if isColor(107,1746,0xffffff,80) and isColor(122,1742,0x666666,80) and isColor(141,1754,0x666666,80) and isColor(151,1761,0x666764,80) and isColor(158,1771,0x0fba03,80) and isColor(166,1776,0xfefff3,80) and isColor(165,1785,0x0fb80b,80) and isColor(165,1823,0x666666,80) and isColor(172,1823,0x666666,80) then")) {
                TKB.xgsrizhi("已经开启大屏模式")
                back()
                sleep(2000)
                tem = 0
                dp = 1
            }
            if (text('动态').exists() && text('消息').exists() && text('大屏模式').exists() && dp == 0) {
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
                var zbt = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    zonghe()
                    var x = 0
                    var dzl = 0
                    var dzs = ''
                    if ((new Date()).getTime() - rddx > zbt * 60 * 1000) {
                        TKB.xgsrizhi("去看直播")
                        back()
                        sleep(1000)
                        a = 1
                        var rddx = (new Date()).getTime()
                        var zbtx = random(30, 40) //视频总观看时长
                        break
                    }
                    if (text('点击重播').exists()) {
                        TKB.xgsrizhi("广告重播")
                        click('点击重播')
                        sleep(2000)
                        swipe(600, 1350, 500, 100, 800)
                        sleep(2000)
                    }
                    if (sp_num > 20) {
                        log('刷新')
                        click(570, 150)
                        sleep(100)
                        click(570, 150)
                        sleep(3000)
                        sp_num = 0
                    }
                    if (id('com.smile.gifmaker:id/like_count_view').exists()) {
                        comment = id('com.smile.gifmaker:id/like_count_view').find()
                        comment.forEach(item => {
                            var a = item.text();
                            x++
                            if (Number(x) == 2) {
                                dzs = a
                                TKB.xgsrizhi(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            TKB.xgsrizhi('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        TKB.xgsrizhi("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        TKB.xgsrizhi('符合条件')
                        dzl = 0
                        var sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                TKB.xgsrizhi("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    TKB.xgsrizhi("评论")
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
                                        TKB.xgsrizhi("发送")
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
                                            TKB.xgsrizhi("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            TKB.xgsrizhi("点赞")
                                            click(990, 1350)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                TKB.xgsrizhi("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    TKB.xgsrizhi("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        TKB.xgsrizhi("观看时间够了,滑动")
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
                }
            }
        }
        if (a == 1) {
            zonghe()
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
                TKB.xgsrizhi("搜索后视频主页")
                click('综合')
                sleep(1000)
                var x = 0
                var cars = []
                //搜索关键词之后
                if (id('com.smile.gifmaker:id/appbar').className("androidx.recyclerview.widget.RecyclerView").exists()) {
                    for (var j = 0; j < random(0, 2); j++) {
                        swipe(500, 450, 50, 450, 800)
                        sleep(random(1000, 2000))
                        TKB.xgsrizhi("横向滑动")
                    }
                    className("androidx.recyclerview.widget.RecyclerView").findOne().children().forEach(function (child) {
                        cars[x] = child.text()
                        // log(cars[x])
                        x = x + 1
                    })
                    click(cars[random(0, cars.length - 1)])
                    sleep(5000)
                }
                if (z == 1) {
                    TKB.xgsrizhi("浏览第一个")
                    click(250, 500)
                    sleep(5000)
                } else {
                    for (var j = 0; j < random(0, 5); j++) {
                        swipe(600, 1800, 500, 500, 1000)
                        sleep(random(1000, 2000))
                        TKB.xgsrizhi("随机滑动")
                    }
                    sleep(2000)
                    click(250, 500)
                    sleep(5000)
                }
            }
            if (id('com.smile.gifmaker:id/like_icon').exists() && id('com.smile.gifmaker:id/comment_icon').exists()) {
                log('视频界面')
                var x = 0
                var dzl = 0
                var dzs = ''
                if ((new Date()).getTime() - rddx > zbtx * 60 * 1000) {
                    TKB.xgsrizhi("浏览完成")
                    back()
                    sleep(1000)
                }
                if (id('com.smile.gifmaker:id/like_count_view').exists()) {
                    comment = id('com.smile.gifmaker:id/like_count_view').find()
                    comment.forEach(item => {
                        var a = item.text();
                        x++
                        if (Number(x) == 2) {
                            dzs = a
                            TKB.xgsrizhi(dzs)
                        }
                    })
                }
                if (dzs.indexOf("w") != -1) {
                    var st = dzs.split("w")
                    if (Number(st[0]) > 0) {
                        TKB.xgsrizhi('点赞量大于1W')
                        dzl = 1
                    } else {
                        TKB.xgsrizhi("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    var dzs = ''
                } else if (dzs.indexOf("w") == -1 && Number(dzs) > 500) {
                    TKB.xgsrizhi('点赞量大于500')
                    dzl = 1
                } else {
                    TKB.xgsrizhi("下滑")
                    swipe(600, 1350, 500, 100, 800)
                    sleep(1000)
                }
                if (dzl == 1) {
                    TKB.xgsrizhi('符合条件')
                    if (sp > 20) {
                        log('刷新')
                        click(570, 150)
                        sleep(100)
                        click(570, 150)
                        sleep(3000)
                        sp = 0
                    }
                    dzl = 0
                    var sj = random(1, 100)
                    var sp_time = random(30, 50) //视频观看时长
                    // var sp_time = 5
                    var rdd = (new Date()).getTime()
                    sp++
                    while (1) {
                        zonghe()
                        if (text('一键下载').exists() || text('抢先领取').exists() || text('玩游戏').exists() || text('点击重播').exists()) {
                            TKB.xgsrizhi("广告重播")
                            click('点击重播')
                            sleep(3000)
                        }
                        if ((new Date()).getTime() - rdd < sp_time * 1000) {
                            TKB.xgsrizhi("观看视频中...")
                            toastLog("观看视频中...")
                            sleep(4000)
                        } else {
                            if (sj < 3) {
                                TKB.xgsrizhi("评论")
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
                                    TKB.xgsrizhi("发送")
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
                                        TKB.xgsrizhi("随机滑动")
                                    }
                                    sj = 101
                                } else {
                                    if (sj < 20) {
                                        TKB.xgsrizhi("点赞")
                                        id('com.smile.gifmaker:id/like_button').click()
                                        sleep(2000)
                                        sj = 101
                                    } else {
                                        if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                            TKB.xgsrizhi("评论界面返回")
                                            toastLog("评论界面返回")
                                            sleep(2000)
                                            back()
                                            sleep(1000)
                                            back()
                                            sleep(1000)
                                        } else {
                                            if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                toastLog(sp_time + "秒，滑动")
                                                TKB.xgsrizhi("观看时间够了,滑动")
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
        }
    }
}

/**快手关注  
 * live_obj {string} 关注的链接或者快手号 'https://v.kuaishou.com/5qc7LK' 'yzx4794141681523'
 */
function ksgz() {
    TKB.xgsrizhi('关注用户')
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    // var sbip = '47.114.99.72',
    //     run_id = '171821'
    // var xs = TKB.zhid(sbip, run_id)
    var live_obj = 'yzx4794141681523' //关注的链接或者快手号
    var is_follow = false,
        follow_num = 2
    // if (xs['快手号/链接'] == undefined || xs['快手号/链接'] == '') {
    // TKB.xgsrizhi('未获取到关注用户所需的参数')
    // return false
    // } else {
    // live_obj = xs['快手号/链接']
    if (live_obj.indexOf('https://') != -1) {
        home()
        sleep(2000)
        setClip(live_obj)
        sleep(2000)
        launch(dqbaoming)
    }
    // }
    while (1) {
        if ((new Date()).getTime() - BD > 180 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_follow = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && id('com.smile.gifmaker:id/thanos_home_top_search').exists()) {
                TKB.xgsrizhi('首页')
                id('com.smile.gifmaker:id/thanos_home_top_search').findOnce().click()
                BD = (new Date()).getTime()
                sleep(2000)
            }
            if ((desc('返回').exists() && text('热榜').exists() || desc('返回').exists() && id('com.smile.gifmaker:id/search_layout').exists() && !text('用户').exists())) {
                TKB.xgsrizhi('输入抖音ID_' + live_obj)
                click(500, 160)
                sleep(2000)
                setText(live_obj)
                sleep(2000)
                click('搜索')
                sleep(5000)
            }
            if (text('用户').exists() && desc('返回').exists() && desc('查找').exists()) {
                if (id('com.smile.gifmaker:id/name').exists() && (id('com.smile.gifmaker:id/text1').findOnce().text() == '快手号:' + live_obj || id('com.smile.gifmaker:id/text2').findOnce().text() == '快手号匹配')) {
                    TKB.xgsrizhi('选择该用户')
                    var er = id('com.smile.gifmaker:id/name').findOnce().bounds()
                    click(er.centerX(), er.centerY())
                    sleep(2000)
                }
            }
            if (text('去看看').exists()) {
                TKB.xgsrizhi("去看看")
                click('去看看')
                sleep(2000)
            }
            if (textStartsWith('i 关注').exists() && (text('i 关注').exists() && text('粉丝').exists())) {
                TKB.xgsrizhi('关注')
                text('i 关注').findOnce().click()
                is_follow = true
                sleep(2000)
            }
            if ((text('快手号: ' + live_obj).exists() || ((text('取消关注').exists() || text('相互关注').exists()) || text('发私信').exists()))) {
                if (is_follow == false && follow_num == 2) {
                    TKB.xgsrizhi('你已经关注过此用户')
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
                            TKB.xgsrizhi('关注成功')
                            toastLog("关注成功")
                            TKB.qinglihh()
                            return true
                        } else {
                            TKB.xgsrizhi('关注失败')
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
            TKB.xgsrizhi(error);
        }
    }
}

/**快手点赞 
 * live_obj {string} 点赞的链接 '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
 */
function ksdz() {
    TKB.xgsrizhi('快手点赞')
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    // var sbip = '47.114.99.72',
    //     run_id = '171547'
    var is_open = false
    // var xs = TKB.zhid(sbip, run_id)
    var live_obj = '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
    // if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
    //     TKB.xgsrizhi('未获取到作品链接')
    //     return false
    // } else {
    // live_obj = xs['作品链接']
    home()
    sleep(2000)
    setClip(live_obj)
    sleep(2000)
    launch(dqbaoming)
    // }
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_open = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/title').exists() && id('com.smile.gifmaker:id/close').exists() && text('去看看').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                text('去看看').findOnce().click()
                is_open = true
                sleep(5000)
            }
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && is_open == true) {
                TKB.xgsrizhi('已打开链接，准备点赞')
                id('com.smile.gifmaker:id/like_button').click()
                sleep(2000)
                toastLog('点赞成功')
                TKB.xgsrizhi('点赞成功')
                sleep(2000)
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

/**快手评论   var pltext = '学到了|厉害'
 * live_obj {string} 评论的链接 '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
 * pltext {string}评论的话术  '学到了|厉害' 用'|'符号隔开
 */
function kspl() {
    TKB.xgsrizhi('快手评论')
    TKB.qinglihh()
    sleep(2000)
    launch(dqbaoming)
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    // var sbip = '47.114.99.72',
    //     run_id = '171740'
    // var xs = TKB.zhid(sbip, run_id)
    var live_obj = '超A开球 包教包会#台球教学 https://v.kuaishou.com/5MeMMS 复制此链接，打开【快手App】直接观看！'
    // if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
    //     TKB.xgsrizhi('未获取到作品链接')
    //     return false
    // } else {
    sleep(2000)
    // var live_obj = xs['作品链接']
    // var hs = xs['话术']
    var hs = '学到了|厉害'
    var ss = hs.split("|")
    var pltext = ss[random(0, ss.length - 1)]
    home()
    sleep(2000)
    setClip(live_obj)
    sleep(2000)
    launch(dqbaoming)
    // }
    var is_open = false,
        send_comment = false
    while (1) {
        if ((new Date()).getTime() - BD > 120 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            TKB.killapp("抖音短视频")
            sleep(1000)
            setClip(live_obj)
            sleep(3000)
            launch(dqbaoming)
            is_open = send_comment = false
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi('超时退出')
            return false
        }
        try {
            if (id('com.smile.gifmaker:id/title').exists() && id('com.smile.gifmaker:id/close').exists() && text('去看看').exists()) {
                TKB.xgsrizhi('检测到链接，立即打开')
                text('去看看').findOnce().click()
                is_open = true
                sleep(5000)
            }
            if (id('com.smile.gifmaker:id/like_button').exists() && id('com.smile.gifmaker:id/comment_button').exists() && is_open == true) {
                TKB.xgsrizhi('已打开链接，准备评论')
                id('com.smile.gifmaker:id/comment_button').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/sub_comment_more').exists() && is_open == true) {
                TKB.xgsrizhi('输入评论文本')
                click(300, 1840)
                sleep(2000)
                id('com.smile.gifmaker:id/editor').findOnce().setText(pltext)
                sleep(2000)
            }
            if (text('发送').exists() && text('发送').findOnce().enabled() == true) {
                TKB.xgsrizhi('发送')
                click('发送')
                send_comment = true
                sleep(2000)
            }
            if (!id('com.ss.android.ugc.aweme:id/a__').exists() && send_comment == true) {
                TKB.xgsrizhi('评论成功')
                toastLog('评论成功')
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}
//快手直播2
function dyzhibo() {
    TKB.xgsrizhi("快手直播2")
    var TSD = (new Date()).getTime()
    var xs = TKB.zhid(sbip, run_id)
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
    TKB.xgsrizhi("获取到的链接" + url)
    TKB.qinglihh()
    var lpp = 0
    setClip(url) //写连接进入粘贴板
    sleep(1000)
    launch("com.smile.gifmaker")
    var cs = 0 //进入直播间的次数
    var jieshu = 0 //判断直播间结束
    var rq = (new Date()).getTime() //上传是否进入
    while (1) {
        if (text('去看看').exists()) {
            TKB.xgsrizhi("打开看看-进入直播")
            click('去看看')
            sleep(2000)
        }
        if (textStartsWith('分享者').exists() && id('com.smile.gifmaker:id/close').exists()) {
            click(random(200, 700), random(1400, 1480))
            sleep(2000)
        }
        if (text("说点什么...").exists() && text("更多直播").exists() || id("com.smile.gifmaker:id/live_close_place_holder").exists() && id("com.smile.gifmaker:id/live_share").exists() || text("说点什么...").exists() && id("com.smile.gifmaker:id/live_bottom_bar_gift_container").exists()) {
            TKB.xgsrizhi("直播界面")
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
                    TKB.xgsrizhi("发弹幕")
                    click(120, 1830)
                    sleep(1500)
                    var fas = huahsu.split("|")
                    setText(fas[random(0, fas.length - 1)])
                    sleep(500)
                    if (desc("发送").exists()) {
                        TKB.xgsrizhi("点击发送")
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
                TKB.xgsrizhi("去上传人气")
                TKB.uprenqi(sbip, user_id, yhbh, run_id, "1")
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.xgsrizhi("链接" + url)
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
                TKB.xgsrizhi("超时重新打开")
                TKB.qinglihh()
                sleep(2000)
                setClip(url)
                sleep(1000)
                launch("com.smile.gifmaker")
                TSD = (new Date()).getTime()
                if (cs > 3) {
                    xs = TKB.zhid(sbip, run_id)
                    url = xs["account"]
                    TKB.xgsrizhi("链接" + url)
                    huahsu = xs["话术"] //直播间话术
                    yanshi = xs["话术频率"] //直播间话术时间间隔
                    gzs = xs["关注"] //直播间关注
                    tuichu = xs["退出"] //判断是否退出当前任务
                    danmu = xs["发弹幕"] //判断是否发弹幕
                    setClip(url)
                    TKB.qinglihh()
                    launch("com.smile.gifmaker")
                }
                cs = cs + 1
            }
        }
        if (text("直播已结束").exists() && text("观看人数").exists() || text("直播已结束").exists() && text("直播时长").exists()) {
            TKB.xgsrizhi("直播已经结束")
            jieshu = jieshu + 1
            if (jieshu > 3) {
                TKB.xgsrizhi("结束退出")
                return true
            } else {
                TKB.xgsrizhi("重新去拿连接")
                xs = TKB.zhid(sbip, run_id)
                url = xs["account"]
                TKB.xgsrizhi("链接" + url)
                huahsu = xs["话术"] //直播间话术
                yanshi = xs["话术频率"] //直播间话术时间间隔
                gzs = xs["关注"] //直播间关注
                tuichu = xs["退出"] //判断是否退出当前任务
                danmu = xs["发弹幕"] //判断是否发弹幕
                setClip(url)
                TKB.qinglihh()
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
            TKB.xgsrizhi("发消息界面")
            back()
            sleep(2000)
        }
        if (url == undefined || tuichu == 1) {
            TKB.xgsrizhi("获取不到链接" + tuichu)
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
    TKB.xgsrizhi("快手修改资料")
    launch("com.smile.gifmaker")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var a = 0
    var ql = 0
    var xb = random(0, 1)
    var nm = 0
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        var nickname = zz['nickname']
        var img = zz['img']
        var jianjie = zz['jianjie']
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    var name = nickname
    while (1) {
        if ((new Date()).getTime() - RT > 30 * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
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
            zonghe()
            if (desc('菜单').exists() && desc('关注').exists() && desc('发现').exists()) {
                TKB.xgsrizhi('菜单')
                desc('菜单').click()
                sleep(2000)
            }
            if (text('动态').exists() && text('消息').exists() && text('私信').exists()) {
                TKB.xgsrizhi('点击头像')
                id('com.smile.gifmaker:id/tab_avatar').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/left_btn').exists() && !desc('编辑资料').exists()) {
                TKB.xgsrizhi('点击菜单')
                id('com.smile.gifmaker:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/user_content_avatar').exists() && text('好友').exists() || text('关注').exists() && text('粉丝').exists()) {
                TKB.xgsrizhi('编辑资料')
                desc('编辑资料').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/retry_btn').exists() && text('去激活').exists()) {
                TKB.xgsrizhi('账号异常需要激活')
                alert('账号异常需要激活')
                return false
            }
            if (text('编辑资料').exists() && text('头像').exists() && text('昵称').exists()) {
                if (a == 0) {
                    if (xs['是否修改昵称'] == '是') {
                        // TKB.xgsrizhi('修改昵称')
                        if (text('编辑资料').exists() && text('昵称').exists()) {
                            TKB.xgsrizhi('点击昵称')
                            text('昵称').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (id(name).exists()) {
                            TKB.xgsrizhi("已经是该名字了")
                            a = 1
                            sleep(1000)
                        } else if (text('完成').exists() && text('昵称').exists()) {
                            TKB.xgsrizhi('修改昵称')
                            if (id('com.smile.gifmaker:id/clear').exists() && ql == 0) {
                                TKB.xgsrizhi('清理')
                                id('com.smile.gifmaker:id/clear').click()
                                ql = 1
                                sleep(2000)
                            }
                            if (text('请输入昵称').exists() && ql == 1) {
                                TKB.xgsrizhi('请输入昵称')
                                setText(name)
                                sleep(1000)
                                click('完成')
                                sleep(2000)
                                a = 1
                            }
                            if (text('改名字已经被注册了').exists()) {
                                TKB.xgsrizhi('改名字已经被注册了')
                                sleep(2000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                ql = 0
                                a = 1
                            }
                            if (text('修改用户名次数已达本周上限').exists()) {
                                TKB.xgsrizhi('修改用户名次数已达本周上限')
                                sleep(2000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                ql = 0
                                a = 1
                                nm = 1
                            }
                        }
                    } else {
                        a = 1
                        TKB.xgsrizhi("快手昵称不修改")
                    }
                }
                if (a == 1) {
                    if (xs['是否修改头像'] == '是') {
                        // TKB.xgsrizhi('修改头像')
                        if (text('编辑资料').exists() && text('头像').exists()) {
                            TKB.xgsrizhi('点击头像')
                            text('头像').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('个人头像').exists() && text('更换头像').exists()) {
                            TKB.xgsrizhi('更换头像')
                            click('更换头像')
                            sleep(2000)
                        }
                        if (text('拍一张').exists() && text('从相册选取').exists()) {
                            TKB.xgsrizhi('从相册选取')
                            click('从相册选取')
                            sleep(2000)
                        }
                        if (desc('返回').exists() && id('com.smile.gifmaker:id/preview_container').exists()) {
                            TKB.xgsrizhi('点击第一个')
                            click(200, 250)
                            sleep(2000)
                        }
                        if (text('照片预览').exists() && id('com.smile.gifmaker:id/right_btn').exists()) {
                            TKB.xgsrizhi('确定')
                            id('com.smile.gifmaker:id/right_btn').click()
                            sleep(3000)
                            if (text('你的照片尺寸太模糊，请选择更清晰的照片上传。').exists() && text('好的').exists()) {
                                TKB.xgsrizhi('照片尺寸太模糊')
                                back()
                                sleep(500)
                                back()
                                sleep(1000)
                            } else {
                                back()
                                sleep(1000)
                            }
                            a = 2
                        }
                    } else {
                        a = 2
                        TKB.xgsrizhi("快手头像不修改")
                    }
                }
                if (a == 2) {
                    // TKB.xgsrizhi('修改性别')
                    if (xs['是否修改性别'] == '是') {
                        if (xs['性别'] == '男' || xs['性别'] == '女') {
                            if (text(xs['性别']).exists() && text("性别").exists()) {
                                toastLog("性别修改完成")
                                tep = 3
                            } else {
                                if (text('编辑资料').exists() && text('昵称').exists()) {
                                    TKB.xgsrizhi('点击性别')
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
                        TKB.xgsrizhi("快手性别不修改")
                    }
                }
                if (a == 3) {
                    // TKB.xgsrizhi('修改生日/星座')
                    if (!bounds(860, 1127, 986, 1184).exists()) {
                        TKB.xgsrizhi('生日已经设置')
                        toastLog('生日已经设置')
                        a = 4
                        sleep(1000)
                    } else {
                        if (text('编辑资料').exists() && text('昵称').exists()) {
                            TKB.xgsrizhi('点击昵称')
                            text('生日/星座').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('选择生日').exists() && text('完成').exists()) {
                            TKB.xgsrizhi('选择生日')
                            var y = random(0, 1)
                            TKB.xgsrizhi('年')
                            for (var i = 0; i < random(1, 11); i++) {
                                if (y == 0) {
                                    swipe(170, 1100, 170, 950, random(500, 800))
                                    sleep(500)
                                } else {
                                    swipe(170, 850, 170, 980, random(500, 800))
                                    sleep(500)
                                }
                            }
                            TKB.xgsrizhi('月')
                            for (var x = 0; x < random(1, 12); x++) {
                                swipe(530, 1100, 530, 950, random(500, 800))
                                sleep(500)
                            }
                            TKB.xgsrizhi('日')
                            for (var z = 0; z < random(1, 31); z++) {
                                swipe(875, 1100, 875, 950, random(500, 800))
                                sleep(500)
                            }
                            sleep(1000)
                            click('完成')
                            sleep(1000)
                        }
                        if (text('生日信息6个月内只允许修改一次，是否确定提交？').exists() && text('确定').exists()) {
                            TKB.xgsrizhi('确定')
                            click('确定')
                            sleep(500)
                            a = 4
                        }
                        if (text('距离上次修改生日不足6个月，目前只能修改年龄可见范围').exists()) {
                            TKB.xgsrizhi('距离上次修改生日不足6个月，目前只能修改年龄可见范围')
                            sleep(1000)
                            a = 4
                        }
                    }
                }
                if (a == 4) {
                    if (xs['是否修改简介'] == '是') {
                        if (text(jianjie).exists() && text('编辑资料').exists()) {
                            TKB.xgsrizhi('修改完成')
                            toastLog('修改完成')
                            a = 5
                        } else if (text('个人介绍').exists() && text('编辑资料').exists()) {
                            TKB.xgsrizhi('个人介绍')
                            text('个人介绍').findOnce().parent().click()
                            sleep(2000)
                            setText(jianjie)
                            sleep(1000)
                            click('完成')
                        }
                    } else {
                        a = 5
                        TKB.xgsrizhi("快手简介不修改")
                    }
                }
                if (a == 6) {
                    if (!bounds(860, 1114, 986, 1282).exists()) {
                        TKB.xgsrizhi('所在地已经设置')
                        toastLog('所在地已经设置')
                        sleep(4000)
                        TKB.qinglihh(dqbaoming)
                        return true
                    } else {
                        if (text('编辑资料').exists() && text('所在地').exists()) {
                            TKB.xgsrizhi('点击所在地')
                            text('所在地').findOnce().parent().click()
                            sleep(2000)
                        }
                        if (text('选择地区').exists() && text('完成').exists()) {
                            TKB.xgsrizhi('选择地区')
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
                            TKB.xgsrizhi('编辑完成')
                            sleep(4000)
                            TKB.qinglihh(dqbaoming)
                            return true
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


/**快手手机号检测，通过发短信判断
 *  phonenumber{string}'10001'  发送的对象手机号码，默认电信
 *  text {string}'504' 发送的内容
*/
function phonenum() {
    TKB.xgsrizhi("快手手机号检测")
    launch("com.smile.gifmaker")
    sleep(6000)
    var phonenumber = '10001' 
    var text = '504'
    var num = 0
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            zonghe()
            if (id('com.smile.gifmaker:id/left_btn').exists() && !desc('编辑资料').exists()) {
                TKB.xgsrizhi('点击菜单')
                id('com.smile.gifmaker:id/left_btn').findOnce().click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/tab_settings').exists()) {
                id('com.smile.gifmaker:id/tab_settings').findOnce().click()
                TKB.xgsrizhi('点击设置')
                sleep(3000)
            }
            if (text("设置").exists() && text("帐号").exists()) {
                var fournum = id('com.smile.gifmaker:id/entry_sub_text').findOnce().text()
                var y = fournum.substr(fournum.length - 4)
                toast(y)
                TKB.xgsrizhi(y)
                TKB.xgsrizhi('获取后四位号码')
                sleep(3000)
                home()
                TKB.xgsrizhi('返回到手机桌面')
                sleep(3000)
                launch('com.android.mms')
                sleep(6000)
            }
            if (desc("新建信息").exists()) {
                desc("新建信息").findOnce().click()
                TKB.xgsrizhi("点击新建信息")
                sleep(3000)
            }
            if (desc("添加附件").exists() && desc("发送").exists()) {
                click(text("收件人：").findOnce().bounds().centerX(), text("收件人：").findOnce().bounds().centerY())
                TKB.xgsrizhi("点击收件人")
                sleep(3000)
                setText(0, phonenumber)
                sleep(3000)
                setText(1, text)
                sleep(3000)
                if (desc("发送").exists()) {
                    desc("发送").findOnce().click()
                    TKB.xgsrizhi("点击发送")
                    sleep(3000)
                    num = 1
                }
            }
            sleep(35000)
            if (desc("添加附件").exists() && desc("发送").exists() && num == 1) {
                var str = id("com.android.mms:id/gn_text_view").findOnce().text();
                var num = str.replace(/[^0-9]/ig, "");
                var phonenum = num.slice(0, 11)
                var x = phonenum.substr(phonenum.length - 4)
                toast(x)
                TKB.xgsrizhi(x)
                sleep(3000)
            }
            if (x == y) {
                toast("手机号码一致")
                TKB.xgsrizhi("手机号码一致")
                TKB.qinglihh()
                sleep(3000)
                return true
            } else {
                alert("手机号码有误")
                TKB.qinglihh()
                sleep(3000)
                return true
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}


//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
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
                        TKB.xgsrizhi("子线程运行结束！")
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续快手任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                        // java.lang.System.exit(0)
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp)
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    if (files.exists("/sdcard/观沧海.mp3") == false) {
                        TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01)
                TKB.xgsrizhi("我还在播放音乐")
                // sleep(media.getMusicDuration())
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
        _THREADSSxx = threads.start(function () {
            var bb = TKB.getVerName("快手")
            if (bb != "7.4.20.13991" && bb != false) {
                TKB.xgsrizhi("快手的版本不对")
                TKB.xiezai(dqbaoming)
            }
            var baom = getPackageName("快手")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("快手", "7.4.20.13991")
                if (bbd == false) {
                    TKB.xgsrizhi("没安装成功快手")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0)
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = kszc()
            var dl = true
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
                    var xs = TKB.zhid(sbip, run_id)
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
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
            // java.lang.System.exit(0)
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
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