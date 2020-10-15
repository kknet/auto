﻿log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
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
var dqbaoming = "com.ss.android.ugc.live" //该项目包名
var xmxh = "7" //项目序号
var followUrl
var commentUrl
var comment_text
var focuson_obj
var name;
var jianjie;


//********************************************************下载播放mp3***************************************************************

//*******************************************************火山养号 *****************************************************************



function zonghe() {
    try {
        if (text("知道了").exists()) {
            TKB.xgsrizhi("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            click("以后再说")
            sleep(2000)
        }
        if (desc("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            try {
                if (desc("以后再说").exists()) {
                    var ss = desc("以后再说").findOnce().bounds();
                    TKB.xgsrizhi(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                TKB.xgsrizhi(error);
            }
        }
        if (text("我知道了").exists()) {
            TKB.xgsrizhi("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("以后再说").exists()) {
            TKB.xgsrizhi("以后再说")
            click("以后再说")
            sleep(2000)
        }
        if (text("允许").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("允许")
            click("允许")
            sleep(2000)
        }
        if (text("立即下载").exists() && text("点击重播").exists()) {
            TKB.xgsrizhi("点击重播2")
            back()
            sleep(2000)
        }

        if (text("点击查看").exists() && text("点击重播").exists()) {
            TKB.xgsrizhi("点击重播")
            back()
            sleep(2000)
            back()
            sleep(3000)
        }
        if (text("立即赠送").exists()) {
            TKB.xgsrizhi("立即赠送")
            back()
            sleep(2000)
        }
        if (text("不感兴趣？长按试试").exists()) {
            TKB.xgsrizhi("不感兴趣？长按试试")
            back()
            sleep(500)
            back()
            sleep(2000)
        }
        if (text("始终同意").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("始终同意")
            click("始终同意")
            sleep(2000)
        }
        if (text("始终允许").exists() && text("禁止").exists()) {
            TKB.xgsrizhi("始终允许")
            click("始终允许")
            sleep(2000)
        }
        if (text("允许").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("允许拒绝")
            click("允许")
            sleep(2000)
        }
        if (text("同意").exists() && text("不同意").exists()) {
            TKB.xgsrizhi("同意不同意")
            click("同意")
            sleep(2000)
        }
        if (text("授权").exists() && textContains("授权后，").exists()) {
            TKB.xgsrizhi("授权")
            click("授权")
            sleep(2000)
        }
        if (text("立即赠送").exists() && id("com.ss.android.ugc.live:id/dur").exists()) {
            back()
            sleep(2000)
        }
        if (text("授权提示").exists() && text("同 意").exists()) {
            TKB.xgsrizhi("同意")
            click("同 意")
            sleep(2000)
        }
        if (textContains("关注主播").exists() && text("关注").exists()) {
            back()
            sleep(2000)
        }
        if (text("同意并登录").exists() && text("取消").exists()) {
            TKB.xgsrizhi("同意并登录")
            click("同意并登录")
            sleep(2000)
        }
        if (text("我要免流").exists() && text("暂不需要").exists()) {
            TKB.xgsrizhi("暂不需要")
            click("暂不需要")
            sleep(2000)
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

//火山养号
function hsyh() {
    TKB.xgsrizhi("火山养号")
    launch(dqbaoming)
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(50, 90)
    var TSD = (new Date()).getTime()
    var is_type = ''
    var live_date = random(1, 8),
        video_num = 1
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                TKB.xgsrizhi("首页")
                var title_list = className('android.widget.LinearLayout').depth(10).findOnce().children()
                var asa = random(1, 10)
                if (asa > 8) {
                    if (title_list.size() > 4) {
                        var type_list = ['直播', '视频', '精选', '关注']
                    } else {
                        var type_list = ['直播', '视频', '关注']
                    }
                    title_list.some(e => {
                        if (type_list.indexOf(e.child(0).text()) === -1) {
                            log(e.child(0).text())
                            var t = id('com.ss.android.ugc.live:id/title').text(e.child(0).text()).findOnce().parent()
                            TKB.xgsrizhi("点击同城栏")
                            t.click()
                            sleep(100)
                            t.click()
                            is_type = '同城'
                            video_num = random(8, 15)
                            return true
                        } else {
                            return false
                        }
                    })
                } else {
                    if (asa == 8) {
                        TKB.xgsrizhi("点击直播栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('直播').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '直播'
                    } else if (title_list.size() > 4 && asa == 1) {
                        TKB.xgsrizhi("点击精选栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('精选').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '精选'
                        video_num = random(8, 15)
                    } else {
                        TKB.xgsrizhi("点击视频栏")
                        var t = id('com.ss.android.ugc.live:id/title').text('视频').findOnce().parent()
                        t.click()
                        sleep(100)
                        t.click()
                        is_type = '视频'
                        video_num = random(8, 15)
                    }
                }
                sleep(10 * 1000)
            }
            if (is_type == '视频') {
                var video_list = id('com.ss.android.ugc.live:id/aku').depth(14).find()
                video_list[random(0, video_list.size() - 1)].child(0).click()
                sleep(2000)
            } else if (is_type == '同城') {
                var video_list = id('com.ss.android.ugc.live:id/aku').depth(13).find()
                video_list[random(0, video_list.size() - 1)].child(0).click()
                sleep(2000)
            } else if (is_type == '直播') {
                var video_list = id('com.ss.android.ugc.live:id/blw').depth(15).find()
                video_list[random(0, video_list.size() - 1)].parent().click()
                sleep(2000)
                var zbt = (new Date()).getTime() //直播的时间
            }
            if (descEndsWith("喜欢按钮").exists() && descEndsWith("评论按钮").exists() && descEndsWith("转发按钮").exists()) {
                TKB.xgsrizhi("播放视频界面")
                var aasr = random(15, 35)
                var ssd = (new Date()).getTime()
                while (1) {
                    if ((new Date()).getTime() - ssd > aasr * 1000) {
                        TKB.xgsrizhi("看完了")
                        break
                    } else {
                        toastLog("观看视频中")
                        zonghe()
                        sleep(3000)
                    }
                }
                if (aasr > 40) {
                    TKB.xgsrizhi("观看评论")
                    descEndsWith("评论按钮").findOnce().click()
                    sleep(2000)
                    back()
                } else {
                    if (random(1, 100) == 50) {
                        toastLog("点赞视频")
                        descEndsWith("喜欢按钮").findOnce().click()
                        sleep(2000)
                    }
                }
                video_num--
                is_type = ''
                swipe(random(600, 650), random(1350, 1400), random(600, 650), random(180, 240), random(400, 500))
                sleep(random(3000, 5000))
                TSD = (new Date()).getTime()
            }
            if (!video_num && descEndsWith("喜欢按钮").exists()) {
                back()
                sleep(2000)
            }
            if (text("直播已结束").exists() && id("com.ss.android.ugc.live:id/ja").exists()) {
                TKB.xgsrizhi("直播已经结束")
                back()
                sleep(2000)
            }
            if (id("com.ss.android.ugc.live:id/bhc").exists() && id("com.ss.android.ugc.live:id/yg").exists() && !descEndsWith("喜欢按钮").exists()) {
                TKB.xgsrizhi("直播界面")
                if ((new Date()).getTime() - zbt > live_date * 60 * 1000) {
                    back()
                    sleep(2000)
                } else {
                    toastLog("观看直播中")
                }
                zonghe()
                TSD = (new Date()).getTime()
                is_type = ''
            }
            if (text('关注主播不再错过精彩直播').exists() && text('退出').exists()) {
                TKB.xgsrizhi("退出直播间")
                click("退出")
                sleep(2000)
            }
            zonghe()
            sleep(500)
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//火山登录
function hsdl() {
    TKB.xgsrizhi("火山登录")
    launch(dqbaoming)
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
        // var zh = '18072064352'
        // var yzm = "3976"
    var is_verify = 2,
        is_send = false,
        is_login = false,
        send_money = false
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (text("注册/登录").exists() && id("com.ss.android.ugc.live:id/dae").exists() && id('com.ss.android.ugc.live:id/title').exists()) {
                TKB.xgsrizhi("首页点登录")
                click("注册/登录")
                sleep(2000)
            }
            if (text('一键登录失败').exists()) {
                back()
                sleep(2000)
            }
            if (id('com.ss.android.ugc.live:id/wp').exists() && id('com.ss.android.ugc.live:id/wp').findOnce().checked() == false) {
                id('com.ss.android.ugc.live:id/wp').findOnce().click()
                sleep(2000)
            }
            if (id('com.ss.android.ugc.live:id/wd').exists() && id('com.ss.android.ugc.live:id/wd').findOnce().checked() == false) {
                id('com.ss.android.ugc.live:id/wd').findOnce().click()
                sleep(2000)
            }
            if ((text('使用本机号码一键登录').exists() && text('使用本机号码一键登录').findOnce().clickable() == true) || (text('本机号码一键登录').exists() && text('本机号码一键登录').findOnce().clickable() == true)) {
                if (text('使用本机号码一键登录').exists()) {
                    click("使用本机号码一键登录")
                } else {
                    click("本机号码一键登录")
                }
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('使用上次账号登录').exists()) {
                click('使用上次账号登录')
                sleep(2000)
            }
            if (text('一键登录').exists()) {
                click('一键登录')
                sleep(2000)
            }
            if (text('使用手机号登录').exists()) {
                click('使用手机号登录')
                sleep(2000)
            }
            if (text('使用本机号码登录').exists() && text('使用本机号码登录').findOnce().clickable() == true) {
                click('使用本机号码登录')
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('下一步').exists() && text('下一步').findOnce().clickable() == true) {
                click('下一步')
                sleep(2000)
            }
            if (text("请输入手机号").exists()) {
                TKB.xgsrizhi("播放视频界面")
                text("请输入手机号").findOnce().click()
                sleep(1000)
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip,  user_id,  yhbh,  app_id,  zh)
                text("请输入手机号").findOnce().setText(zh)
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('验证码').exists() && (text('下一步').exists() || text('登录').exists())) {
                sleep(15 * 1000)
                yzm = TKB.huoquyzm("抖音火山版")
                sleep(2000)
                if (desc('captcha verify').exists()) {
                    TKB.xgsrizhi("出现点选验证码或滑块验证码")
                    TKB.qinglihh(dqbaoming)
                    return false
                }
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                } else {
                    TKB.xgsrizhi("输入验证码" + yzm)
                    click('验证码')
                    sleep(2000)
                    text("验证码").findOnce().setText(yzm)
                    sleep(2000)
                }
                TSD = (new Date()).getTime()
                is_verify--
            }
            if (text('下一步').exists() && text('下一步').findOnce().clickable() == true && id('com.ss.android.ugc.live:id/sz').exists()) {
                TKB.xgsrizhi("验证码-下一步")
                click('下一步')
                is_send = true
                sleep(2000)
            }
            if (is_send == true && text('下一步').exists() && text('下一步').findOnce().clickable() == true) {
                id('com.ss.android.ugc.live:id/sz').findOnce().click()
                is_verify--
                sleep(2000)
            }
            if (is_send == false && text('登录').exists() && text('登录').findOnce().parent().parent().clickable() == true) {
                text('登录').findOnce().parent().parent().click()
                is_send = true
                sleep(2000)
            }
            if (is_send == true && text('登录').exists() && text('登录').findOnce().parent().parent().clickable() == true) {
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                is_send = false
                is_verify--
            }
            if (text('获取短信验证码').exists() && text('获取短信验证码').findOnce().clickable() == true) {
                TKB.xgsrizhi("获取短信验证码")
                click('获取短信验证码')
                TSD = (new Date()).getTime()
                sleep(2000)
            }
            if (text('编辑资料').exists() && text('跳过').exists()) {
                TKB.xgsrizhi("跳过编辑资料")
                click('跳过')
                sleep(2000)
            }
            if (text('一键登录成功').exists() && text('完成').exists()) {
                TKB.xgsrizhi("一键登录成功")
                click('完成')
                sleep(2000)
            }
            if (text('我要申诉').exists() && text('取消').exists()) {
                TKB.xgsrizhi("账号封禁")
                click('取消')
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (id('com.ss.android.ugc.live:id/ew').exists() && text('关注').exists() && text('视频').exists() && text('直播').exists() && !text('注册/登录').exists()) {
                TKB.xgsrizhi("登录成功")
                is_login = true
                id('com.ss.android.ugc.live:id/cem').findOnce().child(0).click()
                sleep(5000)
            }
            if (desc('captcha verify').exists()) {
                TKB.xgsrizhi("出现点选验证码或滑块验证码")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (is_login == true && text('火苗管理').exists() && (text('玩火山，赚火苗').exists() || textStartsWith('当前火苗').exists())) {
                if (textStartsWith('当前火苗').exists()) {
                    var hm_mun = textStartsWith('当前火苗').findOnce().text().substr(4)
                    if (hm_mun.charAt(hm_mun.length - 1) == "万") {
                        hm_mun = hm_mun.substr(0, hm_mun.length - 1)
                        var money = (hm_mun / 3).toFixed(2)
                    } else {
                        var money = (hm_mun / 30000).toFixed(2)
                    }
                } else {
                    var money = '0.00'
                }
                TKB.xgsrizhi("资产:" + money)
                toastLog("资产:" + money)
                back()
                sleep(1000)
                TKB.upjine(sbip,  user_id,  yhbh,  app_id, money)
                send_money = true
            }
            if (is_login == true && send_money == true) {
                return true
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(dqbaoming)
                return false
            }
            zonghe()
            sleep(500)
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//火山修改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    sleep(6000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    var name_return = '抖音火山版昵称不符合'
    var img_return = '抖音火山版头像不符合'
    var jj_return = '抖音火山版简介不符合'
    var status = 0
    var cs = 0
    var tep = 0 //判断编辑资料界面该干啥
    var nf = random(1990, 2002)
    var zz = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
    var yf = zz[Math.floor(Math.random() * zz.length)]
    var rq = random(1, 28)
    if (rq < 10) {
        rq = '0' + rq
    }
    var x = rq + ' ' + yf + '月 ' + nf
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie'].split('|||')[0]
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    while (1) {
        if ((new Date()).getTime() - BD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.live")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            TKB.xgsrizhi("超时退出")
            return false
        }
        zonghe()
        if (text("关注").exists() && text("视频").exists() && text("直播").exists()) {
            // id("com.ss.android.ugc.live:id/ew").findOnce().parent().click()
            click(75, 127)
            TKB.xgsrizhi("点击到个人主页");
            sleep(3000)
        }
        if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
            TKB.xgsrizhi("主页")
            click('进入我的主页')
            sleep(2000)
        }
        if (text('编辑资料').exists() && text('粉丝').exists() && text('关注').exists()) {
            TKB.xgsrizhi("编辑资料")
            click('编辑资料')
            sleep(2000)
        }
        if (text("编辑资料").exists() && text("保存").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                if (xs['是否修改头像'] == '是') {
                    zonghe()
                    TKB.xgsrizhi("修改头像")
                    if (text("编辑资料").exists() && text("点击更换头像").exists()) {
                        TKB.xgsrizhi("点击头像")
                        id("com.ss.android.ugc.live:id/b1q").findOnce().click()
                        sleep(3000)
                    }
                    if (text("从相册选择").exists() && text("取消").exists()) {
                        TKB.xgsrizhi("从相册选择")
                        click("从相册选择")
                        sleep(6000)
                    }
                    if (desc("列表视图").exists() && desc("更多选项").exists()) {
                        TKB.xgsrizhi("选择照片")
                        click(289, 584) //选择第一张
                        sleep(3000)
                        TKB.xgsrizhi("点击裁剪")
                        click("裁剪") //确定
                        sleep(1000)
                    }
                    if (text("编辑资料") && TKB.zhaose("if isColor(108,286,0xff985d,80) and isColor(172,284,0xff945e,80) and isColor(211,285,0xff925e,80) and isColor(275,286,0xff8e5f,80) and isColor(777,288,0xff6e65,80) and isColor(853,288,0xff6965,80) and isColor(896,288,0xff6665,80) and isColor(934,290,0xff6466,80) and isColor(982,290,0xff6166,80) and isColor(1020,290,0xff5e67,80) then")) {
                        TKB.xgsrizhi("抖音火山版头像不符合")
                        img_return = '抖音火山版头像不符合'
                        tep = 1
                    } else {
                        TKB.xgsrizhi("抖音火山版头像符合")
                        img_return = '抖音火山版头像符合'
                        tep = 1
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版头像不修改")
                    img_return = '抖音火山版头像不修改'
                    tep = 1
                }
            }
            if (tep == 1) {
                // TKB.xgsrizhi("修改昵称")
                if (xs['是否修改名字'] == '是') {
                    zonghe()
                    if (text(name).exists() && text("编辑资料").exists()) {
                        TKB.xgsrizhi("已经是该名字了")
                        toastLog("名字修改完成")
                        name_return = '抖音火山版昵称符合'
                        tep = 2
                        sleep(500)
                    } else if (text("编辑资料").exists() && text("昵称").exists()) {
                        TKB.xgsrizhi("清空原来的昵称")
                        setText(0, nickname)
                        sleep(3000)
                    }
                    // if (id("com.ss.android.ugc.live:id/c1o").findOnce().text() !== name) {
                    //     TKB.xgsrizhi("抖音火山版昵称不符合")
                    //     name_return = '抖音火山版昵称不符合'
                    // }
                } else {
                    TKB.xgsrizhi("抖音火山版昵称不修改")
                    name_return = '抖音火山版昵称不修改'
                    tep = 2
                }
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改性别")
                zonghe()
                if (xs['是否修改性别'] == '是') {
                    if (text(xs['性别']).exists() && text("性别").exists()) {
                        toastLog("性别修改完成")
                        TKB.xgsrizhi("已经是该性别了")
                        tep = 3
                    } else if (text("编辑资料").exists() && text("性别").exists()) {
                        TKB.xgsrizhi("点击性别")
                        id("com.ss.android.ugc.live:id/aui").findOnce().click()
                        sleep(3000)
                    }
                    if (text("男").exists() && text("女").exists()) {
                        click(xs['性别'])
                        sleep(3000)
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版性别不修改")
                    tep = 3
                }
            }
            if (tep == 3) {
                if (!bounds(36, 1122, 444, 1179).exists() && text("编辑资料").exists()) {
                    toastLog("生日修改完成")
                    TKB.xgsrizhi("生日修改完成")
                    tep = 4
                } else if (bounds(36, 1122, 444, 1179).exists() && text("编辑资料").exists()) {
                    TKB.xgsrizhi('日期' + x)
                    id('com.ss.android.ugc.live:id/ms').findOnce().parent().parent().click()
                    while (1) {
                        if (desc(x).exists()) {
                            desc(x).findOnce().click()
                            sleep(1000)
                            TKB.xgsrizhi('找到本月')
                            click('确定')
                            sleep(1000)
                            toastLog("生日修改完成")
                            TKB.xgsrizhi("生日修改完成")
                            tep = 4
                            break
                        } else {
                            cs++
                            if (Number(cs) > 140) {
                                back()
                                sleep(500)
                                if (text('继续编辑').exists() && text('放弃').exists()) {
                                    TKB.xgsrizhi('放弃')
                                    click('放弃')
                                    sleep(2000)
                                }
                                //退出不保存修改重来一遍
                                tep = 1
                                cs = 0
                                break
                            }
                            id('android:id/next').click()
                            sleep(random(200, 400))
                        }
                    }
                }
            }
            if (tep == 4) {
                if (xs['是否修改简介'] == '是') {
                    TKB.xgsrizhi("修改简介")
                    zonghe()
                    if (text("编辑资料").exists() && text(jianjie).exists()) {
                        TKB.xgsrizhi("已经是该简介了")
                        tep = 5
                        jj_return = '抖音火山版简介符合'
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        sleep(8000)
                    } else if (text("编辑资料").exists() && text("保存").exists()) {
                        TKB.xgsrizhi("填写简介")
                        id("com.ss.android.ugc.live:id/cuc").findOnce().setText(jianjie)
                        sleep(2000)
                    }
                } else {
                    TKB.xgsrizhi("抖音火山版简介不修改")
                    jj_return = '抖音火山版简介不修改'
                    tep = 5
                }
            }
            if (tep == 5) {
                if (name_return == '抖音火山版昵称符合' && img_return == '抖音火山版头像符合' && jj_return == '抖音火山版简介符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = name_return + ',' + img_return + ',' + jj_return
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh()
                return true
            }
        }
    }
}

function fabusp() {
    TKB.xgsrizhi("发布视频")
    launch("com.ss.android.ugc.live")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var a = 0
    var x = 0
    var sb = 0 //sb大于3判断失败
    var ylsl = 0 //现在的作品数量
    var zpsl = 0 //原来的作品数量
    var fb = 0 //判断发布成功
    var status = 0
    var xs = TKB.zhid(sbip, run_id)
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
        TKB.xgsrizhi("下载视频失败")
        return false
    }

    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                status = 1
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
            launch("com.ss.android.ugc.live")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (x == 0) {
                zonghe()
                if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                    TKB.xgsrizhi("首页")
                    id('com.ss.android.ugc.live:id/ew').findOnce().parent().click()
                    sleep(2000)
                }
                if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
                    TKB.xgsrizhi("主页")
                    click('进入我的主页')
                    sleep(2000)
                }
                if (text('编辑资料').exists() && id('com.ss.android.ugc.live:id/dur').exists() && id('com.ss.android.ugc.live:id/e52').exists()) {
                    var ss = TKB.getAllTexts()
                    for (var j = 0, len = ss.length; j < len; j++) {
                        if (ss[j].indexOf("作品 ") != -1) {
                            click(ss[j])
                            TKB.xgsrizhi(ss[j])
                            var st = ss[j].split("品 ")
                            zpsl = st[1]
                            TKB.xgsrizhi("作品数量：" + zpsl)
                            if (fb == 0) {
                                ylsl = zpsl
                                TKB.xgsrizhi(ylsl)
                            }
                            if (zpsl > ylsl) {
                                TKB.xgsrizhi("现在的作品数量大于原来的")
                                toastLog('发布成功')
                                sleep(1000)
                                back()
                                sleep(1000)
                                back()
                                sleep(1000)
                                status = 1
                                    // TKB.upvideo_result(sbip, user_id, yhbh, shipin_id, status)
                                return true
                            }
                            sleep(500)
                            back()
                            sleep(1000)
                            back()
                            sleep(1000)
                            x = 1
                        }
                    }
                }
            }
            if (a == 0) {
                zonghe()
                if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                    TKB.xgsrizhi("首页")
                    id('com.ss.android.ugc.live:id/db1').findOnce().parent().click()
                    sleep(2000)
                }
                if (id('com.ss.android.ugc.live:id/title').exists() && text('我知道了').exists() && id('com.ss.android.ugc.live:id/cab').exists()) {
                    TKB.xgsrizhi("启动中")
                    sleep(5000)
                }
                if (text("一键大片").exists() && text("聊一聊").exists() && text("拍摄").exists() || text("拍摄").exists() && text("K歌").exists() && text("拍摄").exists()) {
                    TKB.xgsrizhi("拍摄")
                    click("拍摄")
                    sleep(1000)
                }
                if (id('com.ss.android.ugc.live.liveshortvideo_so:id/btn_record_view').exists() && text("上传").exists() && text("音乐").exists()) {
                    TKB.xgsrizhi("上传")
                    click("上传")
                    sleep(2000)
                }
                if (id('com.ss.android.ugc.live:id/i5').exists() && text("视频").exists() && text("照片").exists()) {
                    TKB.xgsrizhi("视频")
                    id('com.ss.android.ugc.live.liveshortvideo_so:id/title_video').text('视频').click()
                    sleep(2000)
                }
                if (bounds(0, 414, 351, 765).exists()) {
                    TKB.xgsrizhi("点击第一个")
                    click(200, 500)
                    sleep(2000)
                }
                if (text("裁剪").exists() && text("下一步").exists() && text("标准").exists()) {
                    TKB.xgsrizhi("裁剪")
                    sleep(5000)
                    click("下一步")
                    sleep(2000)
                }
                if (text('处理中，请不要退出').exists()) {
                    TKB.xgsrizhi("处理中")
                    sleep(5000)
                }
                if (text("特效").exists() && text("下一步").exists() && text("配乐").exists()) {
                    TKB.xgsrizhi("下一步")
                    click("下一步")
                    sleep(2000)
                }
                if (text("同步至圈子").exists() && text("添加位置").exists() && text("发布").exists()) {
                    TKB.xgsrizhi("发布")
                    click("发布")
                    a = 1
                    sleep(2000)
                }
            } else if (a == 1) {
                zonghe()
                var ss = TKB.getAllTexts()
                for (var j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("视频上传") != -1) {
                        TKB.xgsrizhi('视频上传中')
                        toastLog('视频上传中')
                        sleep(3000)
                    } else if (ss[j].indexOf("上传成功") != -1) {
                        var aa = text(ss[j]).findOnce().bounds()
                        if (aa.centerX() < 540 && aa.centerY() < 620 || aa.centerX() < 540 && aa.centerY() > 630 && aa.centerY() < 800) {
                            TKB.xgsrizhi(ss[j])
                            toastLog(ss[j])
                            sleep(3000)
                            fb = 1
                            x = 0
                            a = 0
                        }
                    } else if (ss[j].indexOf("上传失败") != -1) {
                        var aa = text(ss[j]).findOnce().bounds()
                        if (aa.centerX() < 540 && aa.centerY() < 620 || aa.centerX() < 540 && aa.centerY() > 630 && aa.centerY() < 800) {
                            TKB.xgsrizhi(ss[j])
                            sb++
                            if (sb > 2) {
                                TKB.xgsrizhi('上传失败')
                                click('删除')
                                sleep(1000)
                                if (text("保存到本地").exists() && text("确认放弃").exists() && text("取消").exists()) {
                                    TKB.xgsrizhi("发布")
                                    click("确认放弃")
                                    sleep(2000)
                                }
                                return false
                            } else {
                                click('重试')
                                sleep(2000)
                            }
                            sleep(3000)
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
//删除视频
function shipinsc() {
    log("视频删除")
    launch("com.ss.android.ugc.live")
    sleep(5000)
    var BD = (new Date()).getTime()
    var RE = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BD > 3 * 60 * 1000) {
            log("超时没在首页")
            TKB.killapp("抖音短视频")
            sleep(1000)
            launch("com.ss.android.ugc.live")
            BD = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            log("超时退出")
            return false
        }
        try {
            if (desc('返回').exists() && id('com.ss.android.ugc.live:id/cmn').exists() && desc('输入评论').exists()) {
                desc('返回').findOnce().click()
                sleep(2000)
            }
            if (text('关注').exists() && text('视频').exists() && text('直播').exists()) {
                log("首页")
                id('com.ss.android.ugc.live:id/ew').findOnce().parent().click()
                sleep(2000)
            }
            if (text('消息').exists() && text('搜索').exists() && text('钱包').exists() && text('进入我的主页').exists()) {
                log("主页")
                click('进入我的主页')
                sleep(2000)
            }
            zonghe()
            if (text('编辑资料').exists() && id('com.ss.android.ugc.live:id/dur').exists() && id('com.ss.android.ugc.live:id/e52').exists() || id('com.ss.android.ugc.live:id/e6e').exists() && id('com.ss.android.ugc.live:id/bjr').exists()) {
                log("我的界面")
                swipe(700, 1600, 700, 300, 800)
                sleep(1000)
                var ss = TKB.getAllTexts()
                for (var j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("作品 ") != -1) {
                        log(ss[j])
                        var st = ss[j].split("品 ")
                        var zpsl = st[1]
                        log("作品数量：" + zpsl)
                        if (zpsl == 0 && !text('草稿箱').exists() || zpsl == '0' && !text('草稿箱').exists()) {
                            log("已经删除完了")
                            sleep(1000)
                            back()
                            sleep(1000)
                            back()
                            sleep(1000)
                            return true
                        } else {
                            try {
                                var fg = (new Date()).getTime()
                                while (1) {
                                    if ((new Date()).getTime() - fg > 5 * 60 * 1000) {
                                        log("超时没删除完先退出")
                                        back()
                                        sleep(3000)
                                        back()
                                        sleep(3000)
                                        break
                                    }
                                    zonghe()
                                    if (text(ss[j]).exists()) {
                                        var dda = text(ss[j]).findOnce().bounds();
                                        log(dda)
                                        if (dda.centerY() > 0 && dda.centerY() < 1760) {
                                            log("点击第一个作品")
                                            click(dda.centerX() - 100, dda.centerY() + 100);
                                            sleep(2000)
                                        }
                                    }
                                    if (text('草稿箱').exists() && text('草稿箱视频在应用卸载后会被删除，请及时发布').exists()) {
                                        while (1) {
                                            if (text('草稿箱').exists() && text('草稿箱视频在应用卸载后会被删除，请及时发布').exists()) {
                                                log("本地草稿箱")
                                                click('选择')
                                                sleep(2000)
                                            }
                                            if (id("com.ss.android.ugc.live:id/ado").exists()) {
                                                var i = id("com.ss.android.ugc.live:id/ado").find()
                                                i.some(e => {
                                                    e.click()
                                                    sleep(500)
                                                })
                                                if (text('是否确定删除草稿').exists() && text('确定').exists()) {
                                                    log('确定删除')
                                                    click('确定')
                                                    sleep(1000)
                                                }
                                            } else if (text('暂无草稿').exists()) {
                                                log('删除完了')
                                                sleep(2000)
                                                back()
                                                sleep(2000)
                                                break
                                            }
                                        }
                                    }
                                    if (id('com.ss.android.ugc.live:id/bjz').exists() && id('com.ss.android.ugc.live:id/a0w').exists() && id('com.ss.android.ugc.live:id/cmn').exists()) {
                                        log("视频界面")
                                        click(980, 140)
                                        sleep(2000)
                                    }
                                    if (text('私信分享给好友').exists() && text('取消').exists() && text('私信').exists()) {
                                        log("删除界面")
                                        if (text("删除").exists()) {
                                            log("看到删除了")
                                            text('删除').findOnce().parent().click()
                                            sleep(2000)
                                        } else {
                                            log("找删除")
                                            swipe(900, 1600, 200, 1600, 500)
                                            sleep(2000)
                                        }
                                    }
                                    if (text('确定删除吗？').exists() && text("确定").exists() && text("取消").exists()) {
                                        log("确认删除")
                                        click("确定")
                                        sleep(3000)
                                        zpsl = Number(zpsl) - 1
                                        toastLog("还剩余个数" + zpsl)
                                        break
                                    }
                                    if (zpsl == 0 && !text('草稿箱').exists() || zpsl == '0' && !text('草稿箱').exists()) {
                                        log("已经删除完了")
                                        swipe(700, 300, 700, 1600, 800)
                                        sleep(1000)
                                        swipe(700, 300, 700, 1600, 800)
                                        sleep(1000)
                                        back()
                                        sleep(1000)
                                        back()
                                        sleep(1000)
                                        return true
                                    }
                                }
                            } catch (error) {
                                sleep(1001)
                                log(error);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//点赞
function follow() {
    TKB.xgsrizhi("抖音火山版点赞");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        followUrl = xs['作品链接']
        TKB.xgsrizhi("获取到作品链接为" + followUrl)
    }
    // followUrl = "许洪昊Xu在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/wKlIhymdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "陳婷mm中午12点直播在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/4uWIT4D1na8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "奶龙在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/ljsxRbGdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    var is_open = false
    setClip(followUrl)
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(followUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("打开看看").exists() && id("com.ss.android.ugc.live:id/ew").exists()) {
                click("打开看看")
                is_open = true
                TKB.xgsrizhi("点击打开看看");
                sleep(6000)
            }
            if (id("com.ss.android.ugc.live:id/bjy").exists() && id("com.ss.android.ugc.live:id/a0v").exists() && is_open == true) {
                TKB.xgsrizhi("进入到了作品页面");
                id("com.ss.android.ugc.live:id/bjz").findOnce().click()
                TKB.xgsrizhi("点赞");
                toast("点赞成功")
                sleep(3000)
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}

//评论
function comment() {
    TKB.xgsrizhi("抖音火山版评论");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['作品链接'] == undefined || xs['作品链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        commentUrl = xs['作品链接'], comment_text = xs['话术']
        TKB.xgsrizhi("获取到作品链接为" + commentUrl)
        TKB.xgsrizhi("获取到话术为" + comment_text)
    }
    // followUrl = "许洪昊Xu在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/wKlIhymdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // commentUrl = "陳婷mm中午12点直播在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/4uWIT4D1na8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // followUrl = "奶龙在火山分享了视频，快来围观！传送门戳我>>https://share.huoshan.com/hotsoon/s/ljsxRbGdna8/ 复制此链接，打开【抖音火山版】，直接观看视频~"
    // comment_text = "吃饭了吗"
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    var is_open = false,
        send_comment = false
    setClip(commentUrl)
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(commentUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("打开看看").exists() && id("com.ss.android.ugc.live:id/ew").exists()) {
                click("打开看看")
                is_open = true
                TKB.xgsrizhi("点击打开看看");
                sleep(6000)
            }
            if (id("com.ss.android.ugc.live:id/bjy").exists() && id("com.ss.android.ugc.live:id/a0v").exists() && is_open == true) {
                setClip(comment_text)
                TKB.xgsrizhi("输入评论");
                id("com.ss.android.ugc.live:id/a0w").findOnce().click()
                sleep(3000)
                id("com.ss.android.ugc.live:id/zx").findOnce().setText(comment_text)
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/a0e").exists() && id("com.ss.android.ugc.live:id/zx").exists()) {
                id("com.ss.android.ugc.live:id/a0e").findOnce().click()
                TKB.xgsrizhi("点击发送");
                send_comment = true
                sleep(3000)
            }
            if (send_comment == true) {
                TKB.xgsrizhi("评论成功")
                toast("点赞成功")
                back()
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}

//关注
function focuson() {
    TKB.xgsrizhi("抖音火山版关注");
    launch(dqbaoming)
    sleep(20000);
    var xs = TKB.zhid(sbip, run_id)
    if (xs['关注号/链接'] == undefined || xs['关注号/链接'] == '') {
        TKB.xgsrizhi('未获取到作品链接')
        return false
    } else {
        focuson_obj = xs['关注号/链接']
        TKB.xgsrizhi("获取到关注号/链接为" + focuson_obj)
    }
    // focuson_obj = '1960378170'
    // focuson_obj = '2196311909'
    var focusonflag = false
    var focusont = 2
    var startTime = (new Date()).getTime()
    var BD = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - BD > 120 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                TKB.qinglihh("抖音短视频")
                sleep(1000)
                setClip(commentUrl)
                sleep(3000)
                launch(dqbaoming)
                is_open = false
                BD = (new Date()).getTime()
            }
            if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(dqbaoming);
                break;
            }
            if (text("关注").exists() && text("视频").exists() && text("直播").exists()) {
                // id("com.ss.android.ugc.live:id/ew").findOnce().parent().click()
                click(75, 127)
                TKB.xgsrizhi("点击到个人主页");
                sleep(3000)
            }
            if (text("消息").exists() && text("搜索").exists() && text("钱包").exists()) {
                id("com.ss.android.ugc.live:id/csb").findOnce().click()
                TKB.xgsrizhi("点击搜索");
                sleep(6000)
            }
            if (textStartsWith("启动中").exists()) {
                sleep(15000)
                click("我知道了")
                TKB.xgsrizhi("点击我知道了");
            }
            if (TKB.zhaose("if isColor(448,139,0xf2f2f2,80) and isColor(465,140,0xf2f2f2,80) and isColor(536,135,0xf2f2f2,80) and isColor(580,133,0xf2f2f2,80) and isColor(633,119,0xf2f2f2,80) and isColor(696,148,0xf2f2f2,80) and isColor(729,138,0xf2f2f2,80) and isColor(817,139,0xf2f2f2,80) and isColor(857,168,0xf2f2f2,80) and isColor(886,139,0xf2f2f2,80) then")) {
                click(402, 140)
                TKB.xgsrizhi("进入搜索页，点击搜索栏");
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/hz").exists() && text("搜索").exists()) {
                id("com.ss.android.ugc.live:id/hz").findOnce().setText(focuson_obj)
                TKB.xgsrizhi("输入抖音号");
                sleep(3000)
                click("搜索")
                TKB.xgsrizhi("点击搜索");
                sleep(3000)
            }
            if (id("com.ss.android.ugc.live:id/aqz").exists() && text("关注").exists()) {
                id("com.ss.android.ugc.live:id/aqz").findOnce().click()
                TKB.xgsrizhi("点击关注");
                focusonflag = true
                sleep(3000)
            }
            if (text("综合").exists() && text("用户").exists() && text("已关注").exists()) {
                id("com.ss.android.ugc.live:id/js").findOnce().click()
                TKB.xgsrizhi("点击搜索到的用户");
                sleep(3000)
            }
            if (focusont < 0) {
                TKB.xgsrizhi("关注失败")
                toast("关注失败")
                TKB.qinglihh()
                return false
            }
            if (text("粉丝").exists() && text("关注").exists() && id("com.ss.android.ugc.live:id/an9").exists()) {
                id("com.ss.android.ugc.live:id/an9").findOnce().click()
                TKB.xgsrizhi("未关注上再次点击关注");
                sleep(3000)
                focusont--
                back()
                sleep(5000)
            }
            if (text("发私信").exists() || (focusonflag == true && text("发私信").exists())) {
                TKB.xgsrizhi("关注成功")
                toast("关注成功")
                sleep(3000)
                back()
                sleep(5000)
                TKB.qinglihh()
                return true
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if( files.exists("/sdcard/观沧海.mp3") == false){
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3",0.1,true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    TKB.xgsrizhi("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = false
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续火山任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                            // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()

                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************对接服务器*****************************************************************


function hszhixing() {
    try {
        bofangyy()
        TKB.xgsrizhi("执行抖音火山版")
        _THREADSSxx = threads.start(function() {
            var bb = TKB.getVerName("抖音火山版")
            if (bb != "9.1.5" && bb != false) {
                TKB.xgsrizhi("火山的版本不对")
                TKB.xiezai(dqbaoming)
            }
            var baom = getPackageName("抖音火山版")
            if (baom == null) {
                TKB.xgsrizhi("未安装抖音火山版")
                var bbd = TKB.wdjxiazai("抖音火山版", "9.1.5")
                if (bbd == false) {
                    TKB.xgsrizhi("安装抖音火山版不成功")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                        //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var wb = hsdl()
            if (wb == true) {
                if (fun == "发布视频") {
                    fabusp()
                } else if (fun == "删除作品") {
                    shipinsc()
                } else if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "养号") {
                    hsyh()
                } else if (fun == "评论") {
                    comment()
                } else if (fun == "关注") {
                    focuson()
                } else if (fun == "点赞") {
                    follow()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        TKB.xgsrizhi(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}


hszhixing()