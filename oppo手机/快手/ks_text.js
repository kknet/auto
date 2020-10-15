log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
threads.start(function () {
    while (1) {
        //修改
        text("允许").exists() ? (click('允许'), log("允许")) : ''
        sleep(200)
        id('com.smile.gifmaker:id/birthday_click_to_close').exists() ? (id('com.smile.gifmaker:id/birthday_click_to_close').findOnce().click(), log('关闭生日')) : ''
        sleep(200)
        id('com.smile.gifmaker:id/close_btn').exists() ? (id('com.smile.gifmaker:id/close_btn').findOnce().click(), log('关闭活动红包')) : ''
        sleep(200)
        text("激活帐号").exists() && desc("获取语音验证码").exists() ? alert("此账号需要激活") : ''
        sleep(200)
        text('同意并继续').exists() ? (click("同意并继续"), log("隐私协议提示")) : ''
        sleep(200)
        text('开启设备权限').exists() ? (click("暂时不用"), log("点击暂时不用")) : ''
        sleep(200)
        id("com.smile.gifmaker:id/icon_close").exists() && text("一键开启").exists() ? (id("com.smile.gifmaker:id/icon_close").click(), log("深色模式")) : ''
        sleep(200)
        text('设置头像').exists() && text('跳过').exists() ? (click("跳过"), log("跳过设置头像")) : ''
        sleep(200)
        text('立即升级').exists() && text('版本升级').exists() ? id('com.smile.gifmaker:id/iv_close').findOnce().click() : ''
        sleep(200)
        text("去开启").exists() && text("取消").exists() ? (click('取消'), log("取消")) : ''
        sleep(200)
        text("通讯录").exists() && text("跳过").exists() ? (click('跳过'), log("跳过通讯录")) : ''
        sleep(200)
        text("我知道了").exists() && text("设置青少年模式").exists() ? (click('我知道了'), log("设置青少年模式")) : ''
        sleep(200)
        text("立即赠送").exists() ? back() : ''
        sleep(200)
        text('关注并退出').exists() ? (click('关注并退出'), log("关注并退出")) : ''
        sleep(200)
        text("点击重试").exists() || text('网络连接失败，请稍后重试').exists() ? (click('点击重试'), log("点击重试")) : ''
        sleep(200)
        id('com.smile.gifmaker:id/close_btn').exists() ? (id('com.smile.gifmaker:id/close_btn').findOnce().click(), log("关闭好友推荐")) : ''
        sleep(200)
        text("一键开启").exists() ? (click('一键开启'), log("一键开启")) : ''
        sleep(200)
        text("稍后").exists() ? (click('稍后'), log("稍后")) : ''
        sleep(200)
        text("立即登录").exists() && text("取消").exists() ? (click('取消'), log("取消")) : ''
        sleep(200)
        text("个人信息保护指引").exists && text("好的").exists() ? (click('好的'), log("个人信息保护指引")) : ''
        sleep(200)
        text("始终同意").exists() ? (click('始终同意'), log("始终同意")) : ''
        sleep(200)
        text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists() ? (log("滑块验证码"), zz = get_verify(), x = zz[0], swipe(120, 980, x + 30, 980, random(1200, 1500))) : ''
        sleep(200)
    }
})
// 获取任务信息
function getTaskInfo(taskId, url) {
    toastLog('获取任务参数值开始')
    let res = http.postJson(url, {
        "taskId": taskId
    });
    if (res.statusCode == 200) {
        let resdata = res.body.string();
        let taskres = JSON.parse(resdata).data
        // log("全部任务信息" + taskres)
        let TotaskParam = parseJSON(taskres)
        //执行动作、任务值
        var needExecuteActions = TotaskParam.needAction.split(',');
        var paramMap = {};
        TotaskParam.paramvalue.forEach((paramObj, j) => {
            paramMap[paramObj.paramId] = paramObj.paramValue;
        });
        // log('动作action', needExecuteActions)
        // log("详细参数paramMap", paramMap);
        var taskInfo = {}
        taskInfo.action = needExecuteActions;
        taskInfo.param = paramMap;
        return taskInfo;
    }
    toastLog('获取任务参数值结束')
}

//数据转化为对应类型
function parseJSON(data) {
    let datejson = '';
    if (typeof data === "string") {
        try {
            datejson = JSON.parse(data);
        } catch (e) {
            datejson = new Function("return " + data)();
        }
    } else {
        datejson = data;
    }
    return datejson;
};

var dqbaoming = "com.smile.gifmaker" //该项目包名
var yzcs = 0 // 异常登录测次数
//修改
var repeat = 0;
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';

//*******************************************************快手项目 *****************************************************************

function zonghe() {
    if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
        log("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            swipe(120, 980, x + 30, 980, random(1200, 1500))
            sleep(1000)
            log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            log("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        log("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        log("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        log("个人信息保护指引")
        click("好的")
        sleep(2000)
    }
    if (text("始终同意").exists()) {
        log("始终同意")
        click("始终同意")
        sleep(2000)
    }
    if (text("始终允许").exists()) {
        log("始终允许")
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
        log("长按屏幕使用更多功能")
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        log("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        log("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        log("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试")
        log("网络连接错误")
        sleep(1200)
    }
    if (textContains("是否用流量观看").exists()) {
        click("确认")
        log("确认")
        sleep(1200)
    }
    if (textContains("同步到今日头条").exists()) {
        click(543, 1542)
        log("同步到今日头条")
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        log("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待")
        log("等待")
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消")
        log("取消")
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说")
        log("以后再说")
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过")
        log("跳过")
        sleep(1200)
    }
    if (text("继续播放").exists()) {
        log("继续播放")
        try {
            node = text("继续播放").findOnce().bounds()
            click(node.centerX(), node.centerY())
            sleep(1200)
        } catch (error) {
            sleep(1001)
            log(error)
        }
    }
    if (text("立即赠送").exists()) {
        log("立即赠送")
        back()
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许")
        log("允许")
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        log("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (text("上滑查看更多视频").exists()) {
        log("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200)
        sleep(2000)
    }
    if (id("com.smile.gifmaker:id/xd").exists() && text("好友推荐").exists()) {
        log("好友推荐")
        click(910, 430)
        sleep(1200)
    }
    if (id('com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view').exists()) {
        id('com.smile.gifmaker:id/live_lucky_star_open_result_close_image_view').findOnce().click()
        sleep(2000)
    }
    if (text("立即升级").exists()) {
        log("关闭升级")
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
            log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            log('失败')
            return '失败'
        }
    } catch (error) {
        log(error)
    }
}

/**快手注册
 * e_num{number} 注册获取验证码最大次数
 */
function kszc() {
    log("快手注册")
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
        try {
            if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                log("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                log("超时没注册成功")
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            zonghe()
            if (desc('关注').exists() && desc('发现').exists() && desc('同城').exists()) {
                log('登录成功')
                return true
            }
            if (text('登录').exists()) {
                click('登录')
                log("开始点击登录按钮")
                TSD = (new Date()).getTime()
                sleep(1500)
            }
            if (text('本机一键登录').exists()) {
                click('本机一键登录')
                toastLog('本机一键登录')
                log("本机一键登录")
                sleep(1500)
            }
            if (text('其他方式登录').exists()) {
                click('其他方式登录')
                toastLog('其他方式登录')
                log("其他方式登录")
                sleep(1500)
            }
            if (text('快速登录观看更多好玩的视频').exists() && text('手机号登录').exists()) {
                var x = text('手机号登录').findOnce().bounds().centerX()
                var y = text('手机号登录').findOnce().bounds().centerY()
                click(x, y)
                sleep(1500)
                log('点击手机号登录')
            }
            if (text('手机号登录').exists() && text('+86').exists()) {
                if (tem == 0) {
                    log("去获取号码")
                    zh = TKB.benjitel()
                    if (zh == false) {
                        log("获取不到号码")
                        return false
                    }
                    // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                    tem = 1
                }
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
                    log('输入手机号码')
                }
                sleep(2000)
            }
            if (text('下一步').exists() && text('下一步').findOnce().enabled() == true && text('手机号登录').exists()) {
                text('下一步').findOnce().click()
                sleep(1500)
            }
            if (e_num <= 0) {
                log("获取验证码频繁")
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
                    log("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_click = false
                    continue
                } else {
                    log("输入验证码" + yzm)
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
                log('登录成功')
                toastLog('登录成功')
                return true
            }
            if (id('com.smile.gifmaker:id/left_btn').exists()) {
                log('点击菜单')
                click(50, 150)
                sleep(5000)
                if (desc('头像').exists()) {
                    log('登录成功1')
                    return true
                }
            } 

        } catch (error) {
            log(error)
            sleep(2000)
        }
    }
}

/**快手新养号
 * e_num{number} 注册获取验证码最大次数
 * zbbpx 直播评论的表情
 * //bp 评论的表情
 */
function ksxyh() {
    log("快手新养号")
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
            log("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log("超时没在首页")
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
                log("已经开启大屏模式")
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
                        log("去看直播")
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
                        log("广告重播")
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
                                log(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            log('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        log("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        log('符合条件')
                        dzl = 0
                        sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                log("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    log("评论")
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
                                        log("发送")
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
                                            log("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            log("点赞")
                                            click(990, 1320)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                log("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    log("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        log("观看时间够了,滑动")
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
                log("点击菜单")
                id('com.smile.gifmaker:id/left_btn').click()
                sleep(5000)
            }
            if (text('直播广场').exists() && text('大屏模式').exists()) {
                log("点击直播广场")
                click('直播广场')
                sleep(1000)
                zbz = 0
            }
            if (zbz == 0) {
                if (id('com.smile.gifmaker:id/live_close_place_holder').exists() && id('com.smile.gifmaker:id/live_audience_count_text').exists()) {
                    log("直播界面")
                    if (id('com.smile.gifmaker:id/live_right_pendant_container').exists() && text('更多直播').exists()) {
                        log("更多直播")
                        id('com.smile.gifmaker:id/live_right_pendant_container').click()
                        sleep(3000)
                        for (var i = 0; i < random(1, 10); i++) {
                            log("下滑")
                            swipe(630, 1800, 630, 200, 1200)
                            sleep(2000)
                        }
                        zbz = 1
                        log("点击")
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
                    log("直播评论")
                    click(200, 1830)
                    sleep(2000)
                    setText(zbbpx[random(0, zbbpx.length - 1)])
                    sleep(1000)
                    if (text("发送").exists()) {
                        log("发送")
                        click('发送')
                        sleep(2000)
                    }
                }
                if ((new Date().getTime()) - start_time < live_time * 60 * 1000) {
                    toastLog("观看直播中")
                    log("观看直播中")
                    sleep(3000)
                } else if ((new Date().getTime()) - start_time > live_time * 60 * 1000) {
                    log("观看直播时间已到")
                    back()
                    sleep(1000)
                    if (text('关注并退出').exists()) {
                        log("退出")
                        click('退出')
                        sleep(2000)
                    }
                    back()
                    sleep(500)
                    return true
                }
            }
            if (text('直播已结束').exists()) {
                log("直播已结束")
                swipe(600, 1150, 500, 300, 1000)
                sleep(1000)
            }
            if (id('com.smile.gifmaker:id/live_right_top_pendant_container').exists() && text('可领取').exists()) {
                log("领取宝箱")
                click('可领取')
                sleep(3000)
            }
            if (text('每日百宝箱').exists() && text('开宝箱').exists()) {
                log("开宝箱")
                click('开宝箱')
                sleep(1000)
                back()
                sleep(500)
            }
            if (id('com.smile.gifmaker:id/open_icon_view').exists() && id('com.smile.gifmaker:id/background_view_normal').exists()) {
                log('点击红包')
                id('com.smile.gifmaker:id/background_view_normal').click()
                sleep(2000)
            }
            if (id('com.smile.gifmaker:id/content_view').exists() && text('快币').exists() && text('看看大家手气').exists()) {
                log('开红包')
                id('com.smile.gifmaker:id/live_red_packet_pre_snatch_state_view').click()
                sleep(5000)
            }
            if (text('手慢了，红包派完了').exists() && text('看看大家手气').exists()) {
                log('红包抢完了')
                id('com.smile.gifmaker:id/live_red_packet_close_view').click()
                sleep(3000)
            }
            if (text('关注主播，更容易抢到红包').exists() && text('开抢').exists() && text('快币').exists()) {
                log('红包未开启')
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
    log("快手关键词养号")
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
    //     log('垂直养号')
    //     var gjc_name = xs['关键词']
    //     // var gjz = '美女'
    //     var ss = gjc_name.split("|")
    //     var gjz = ss[0,ss.length-1]
    //     log('关键词' + gjz)
    // }
    // 关键词
    var gjc_name = '美女|靓仔|小姐姐|JK|裙子|腿|气质' //关键词库
    var ss = gjc_name.split("|")
    var gjz = ss[0, ss.length - 1]
    // var gjz = '腿' //关键词
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log("超时没在首页")
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
                log("已经开启大屏模式")
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
                        log("去看直播")
                        back()
                        sleep(1000)
                        a = 1
                        var rddx = (new Date()).getTime()
                        var zbtx = random(30, 40) //视频总观看时长
                        break
                    }
                    if (text('点击重播').exists()) {
                        log("广告重播")
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
                                log(dzs)
                            }
                        })
                    }
                    if (dzs.indexOf("w") != -1) {
                        var st = dzs.split("w")
                        if (Number(st[0]) > 0) {
                            log('点赞量大于1W')
                            dzl = 1
                        }
                        var dzs = ''
                    } else {
                        log("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    if (dzl == 1) {
                        log('符合条件')
                        dzl = 0
                        var sj = random(1, 100)
                        var sp_time = random(30, 50) //视频观看时长
                        // var sp_time = 5
                        var rdd = (new Date()).getTime()
                        sp_num++
                        while (1) {
                            zonghe()
                            if ((new Date()).getTime() - rdd < sp_time * 1000) {
                                log("观看视频中...")
                                toastLog("观看视频中...")
                                sleep(4000)
                            } else {
                                if (sj < 3) {
                                    log("评论")
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
                                        log("发送")
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
                                            log("随机滑动")
                                        }
                                        sj = 101
                                    } else {
                                        if (sj < 20) {
                                            log("点赞")
                                            click(990, 1350)
                                            sleep(2000)
                                            sj = 101
                                        } else {
                                            if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                                log("评论界面返回")
                                                toastLog("评论界面返回")
                                                sleep(2000)
                                                back()
                                                sleep(1000)
                                                back()
                                                sleep(1000)
                                            } else {
                                                if (text('点击重播').exists()) {
                                                    log("广告重播")
                                                    click('点击重播')
                                                    sleep(2000)
                                                    swipe(600, 1350, 500, 100, 800)
                                                    sleep(2000)
                                                    break
                                                } else {
                                                    if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                        toastLog(sp_time + "秒，滑动")
                                                        log("观看时间够了,滑动")
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
                log("搜索后视频主页")
                click('综合')
                sleep(1000)
                var x = 0
                var cars = []
                //搜索关键词之后
                if (id('com.smile.gifmaker:id/appbar').className("androidx.recyclerview.widget.RecyclerView").exists()) {
                    for (var j = 0; j < random(0, 2); j++) {
                        swipe(500, 450, 50, 450, 800)
                        sleep(random(1000, 2000))
                        log("横向滑动")
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
                    log("浏览第一个")
                    click(250, 500)
                    sleep(5000)
                } else {
                    for (var j = 0; j < random(0, 5); j++) {
                        swipe(600, 1800, 500, 500, 1000)
                        sleep(random(1000, 2000))
                        log("随机滑动")
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
                    log("浏览完成")
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
                            log(dzs)
                        }
                    })
                }
                if (dzs.indexOf("w") != -1) {
                    var st = dzs.split("w")
                    if (Number(st[0]) > 0) {
                        log('点赞量大于1W')
                        dzl = 1
                    } else {
                        log("下滑")
                        swipe(600, 1350, 500, 100, 800)
                        sleep(1000)
                    }
                    var dzs = ''
                } else if (dzs.indexOf("w") == -1 && Number(dzs) > 500) {
                    log('点赞量大于500')
                    dzl = 1
                } else {
                    log("下滑")
                    swipe(600, 1350, 500, 100, 800)
                    sleep(1000)
                }
                if (dzl == 1) {
                    log('符合条件')
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
                            log("广告重播")
                            click('点击重播')
                            sleep(3000)
                        }
                        if ((new Date()).getTime() - rdd < sp_time * 1000) {
                            log("观看视频中...")
                            toastLog("观看视频中...")
                            sleep(4000)
                        } else {
                            if (sj < 3) {
                                log("评论")
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
                                    log("发送")
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
                                        log("随机滑动")
                                    }
                                    sj = 101
                                } else {
                                    if (sj < 20) {
                                        log("点赞")
                                        id('com.smile.gifmaker:id/like_button').click()
                                        sleep(2000)
                                        sj = 101
                                    } else {
                                        if (id('com.smile.gifmaker:id/editor').exists() && id('com.smile.gifmaker:id/at_button').exists()) {
                                            log("评论界面返回")
                                            toastLog("评论界面返回")
                                            sleep(2000)
                                            back()
                                            sleep(1000)
                                            back()
                                            sleep(1000)
                                        } else {
                                            if ((new Date()).getTime() - rdd > sp_time * 1000) {
                                                toastLog(sp_time + "秒，滑动")
                                                log("观看时间够了,滑动")
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

//*******************************************************对接服务器*****************************************************************


//*******************************************************对接服务器*****************************************************************

//执行快手
function zxxhs() {
    try {
        toastLog("执行快手任务")
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ["快手", "7.4.20.13991"]
            ]
            app_list.forEach(element => {
                var install_num = 10
                while (install_num) {
                    var baom = getPackageName(element[0])
                    if (baom != null && TKB.getVerName(element[0]) != element[1]) {
                        TKB.xiezai(dqbaoming)
                        install_num--
                    } else if (baom == null) {
                        var bbd = TKB.wdjxiazai(element[0], element[1])
                        if (bbd == false) {
                            log(element[0] + "安装失败")
                        }
                    } else {
                        break;
                    }
                }
            });

            _THREADSSxx.interrupt()
        });
        //修改
        var dl = kszc()()
        var a = random(0, 1)
        if (dl == true) {
            if (a == 0) {
                ksxyh
            } else {
                ksgjcyh
            }
        }
        TKB.qinglihh()
    } catch (error) {
        log(error);
        sleep(random(1000, 2000))
    }
}


function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)
        log(res)
        zxxhs();
    } catch (error) {
        toastLog('执行遇到错误' + error);
        repeat++
        if (repeat < 3) {
            main()
        } else {
            TKB.wzaandhome()
        }
    }
    sleep(3000)
    threads.shutDownAll();
}

main();