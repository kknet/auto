var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
if (!requestScreenCapture()) {
    toastLog("请求截图权限失败！");
    exit();
}
var dqbaoming = "com.smile.gifmaker" //该项目包名
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
    TKB.set_log('垂直养号')
    var gjc_name = xs['关键词']
    // var gjz = '美女'
    var ss = gjc_name.split("|")
    var gjz = ss[random(0, ss.length - 1)]
    TKB.set_log('关键词' + gjz)
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
                TKB.set_log('点击首页')
                click('首页')
                sleep(random(1000, 3000))
                tem = 1
            }
            if (desc('菜单').exists() && desc('发现').exists()) {
                TKB.set_log('点击菜单')
                desc('菜单').click()
                sleep(3000)
            }
            if (TKB.zhaose("if isColor(107,1746,0xffffff,80) and isColor(122,1742,0x666666,80) and isColor(141,1754,0x666666,80) and isColor(151,1761,0x666764,80) and isColor(158,1771,0x0fba03,80) and isColor(166,1776,0xfefff3,80) and isColor(165,1785,0x0fb80b,80) and isColor(165,1823,0x666666,80) and isColor(172,1823,0x666666,80) then")) {
                TKB.set_log("已经开启大屏模式")
                back()
                sleep(3000)
                tem = 0
            }else if (text('更多').exists() && text('大屏模式').exists() && a == 0) {
                TKB.set_log('大屏模式')
                click('大屏模式')
                sleep(5000)
            }
            if (text('快手大屏版来啦').exists() && id('com.smile.gifmaker:id/close_iv').exists()) {
                TKB.set_log('关闭')
                id('com.smile.gifmaker:id/close_iv').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/tabs').exists()){
                TKB.set_log('发现')
                click(570,150)
                sleep(2000)
                a = 1
            }
            if (id('com.smile.gifmaker:id/left_btn').exists()){
                TKB.set_log('发现')
                click(570,150)
                sleep(2000)
                a = 1
            }
        }
        if (a == 1) {
            if (id('com.smile.gifmaker:id/like_icon').exists() && id('com.smile.gifmaker:id/comment_icon').exists()) {
                TKB.set_log('视频界面')
                swipe(600, 1350, 500, 100, 800)
                sleep(2000) //刚进入视频页面下滑一次
                var zbt = random(30, 40) //视频总观看时长
                var rddx = (new Date()).getTime()
                while (1) {
                    try {
                        like = lickopen(0)
                        if (like == false) {
                            TKB.set_log("下滑")
                            toastAt("下滑",300,300)
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
                                        toastAt("观看视频中...",300,300)
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
                                                    toastAt("评论界面返回",300,300)
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
                                                            toastAt(sp_time + "秒，滑动",300,300)
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
                TKB.set_log('点击搜索')
                id('com.smile.gifmaker:id/thanos_home_top_search').click()
                sleep(2000)
            }
            if (desc('返回').exists() && id('com.smile.gifmaker:id/right_btn').exists()) {
                TKB.set_log('点击输入')
                click(400, 150)
                sleep(2000)
            }
            if (desc('返回').exists() && text('搜索').exists() && text('猜你想搜').exists()) {
                TKB.set_log('输入搜索内容')
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
                        // TKB.set_log(cars[x])
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
                TKB.set_log('视频界面')
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
                                        toastAt("观看视频中...",300,300)
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
                                                    toastAt("评论界面返回",300,300)
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
                                                            toastAt(sp_time + "秒，滑动",300,300)
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
ksgjcyh()
TKB.send_message({notice_name: 'stop',notice_content: [1, '成功']})
