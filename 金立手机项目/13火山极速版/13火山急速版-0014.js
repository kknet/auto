log("tKB")
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
var dqbaoming = "com.ss.android.ugc.livelite" //该项目包名
var xmxh = "13" //项目序号 版本11.0.0
var name;
var jianjie;
var nameflag
var imgflag


//******************************************************************抖音项目*****************************************************************

function zonghe() {
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
    if (text("加载失败，点击屏幕重新加载").exists()) {
        TKB.xgsrizhi("加载失败，点击屏幕重新加载")
        click("加载失败，点击屏幕重新加载")
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
    if (id("com.ss.android.ugc.livelite:id/h_").exists() && desc("立即下载").exists()) {
        TKB.xgsrizhi("进到广告下载")
        back()
        sleep(2000)
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
        TKB.xgsrizhi("点击重播")
        back()
        sleep(2000)
    }
    if (id("com.ss.android.ugc.livelite:id/a5b").exists() && id("cpt_teecr33zj7").exists()) {
        TKB.xgsrizhi("进到广告界面2")
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
    if (desc("签到成功+100金币").exists()) {
        TKB.xgsrizhi("签到成功+100金币")
        click(540, 1840);
        sleep(2000)
    }
    if (id("com.ss.android.ugc.livelite:id/a5v").exists() && text("恭喜！你收到一个现金红包").exists()) {
        log("恭喜！你收到一个现金红包")
        try {
            id("com.ss.android.ugc.livelite:id/a5v").findOnce().click()
            sleep(1000)
        } catch (error) {
            log(error);
            sleep(2000)
        }
    }
    if (id("com.ss.android.ugc.livelite:id/a5o").exists()) {
        try {
            log("输入邀请码提示")
            var node = id("com.ss.android.ugc.livelite:id/a5o").findOnce().bounds();
            click(node.centerX(), node.centerY());
            sleep(1200)
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
    if (text("上滑查看下一视频").exists()) {
        TKB.xgsrizhi("上滑查看下一视频")
        swipe(557, 1630, 533, 400, random(400, 1000))
        sleep(2000)
    }
    if (text("不感兴趣？长按试试").exists()) {
        TKB.xgsrizhi("不感兴趣？长按试试")
        back()
        sleep(500)
        back()
        sleep(2000)
    }
}

//火山极速版养号
function hsjsbyh() {
    TKB.xgsrizhi("火山极速版养号")
    TKB.qinglihh()
    sleep(2000)
    launch("com.ss.android.ugc.livelite")
    var RT = (new Date()).getTime()
    var stt = random(50, 70)
    var TSD = (new Date()).getTime()
    var zbt = random(25, 50) //视频观看时长
    var ll = 0 //浏览次数
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (text("首页").exists() && text("我的").exists() && text("推荐").exists() || id("com.ss.android.ugc.livelite:id/ou").exists() && id("com.ss.android.ugc.livelite:id/o3").exists()) {
            TKB.xgsrizhi("首页1")
            if (tem == 0) {
                click(120, 1850)
                sleep(300)
                click(120, 1850)
                sleep(4000)
                tem = 1
            }
        }
        if (id("com.ss.android.ugc.livelite:id/hy").exists() && id("com.ss.android.ugc.livelite:id/gr").exists()) {
            TKB.xgsrizhi("首页")
            if (tem == 0) {
                TKB.xgsrizhi("刷新首页")
                click(420, 110)
                sleep(100)
                click(421, 111)
                sleep(5000)
                swipe(557, 400, 533, 1630, random(400, 1000))
                sleep(4000)
                tem = 1
            } else {
                TKB.xgsrizhi("进入观看视频")
                click(random(100, 800), random(400, 1600))
                sleep(3000)
            }
        }
        if (text("说点什么...").exists() && text("关注").exists() || id("com.ss.android.ugc.livelite:id/oc").exists() && id("com.ss.android.ugc.livelite:id/o9").exists()) {
            log("观看视频界面")
            TSD = (new Date()).getTime()
            zbt = random(15, 30)
            TR = (new Date()).getTime()
            while (1) {
                if ((new Date()).getTime() - TR > zbt * 1000) {
                    toastLog("观看视频时间到了")
                    break
                } else {
                    toastLog("观看视频中...")
                    sleep(3000)
                }
                if (desc("谢谢参与").exists() && desc("100金币").exists()) {
                    log("抽奖界面")
                    click(500, 1350)
                    sleep(10000)
                    back()
                    sleep(2000)
                }
            }
            zbt = random(1, 50)
            if (zbt == 40) {
                log("点赞")
                click(980, 1120)
                sleep(1000)
            }
            if (zbt > 47) {
                log("去浏览评论点赞")
                click(980, 1350)
                sleep(2000)
            }
            swipe(533, 1630, 557, 400, random(400, 600))
            sleep(random(2000, 5000))
            ll = ll + 1
            if (ll > 15) {
                TKB.xgsrizhi("浏览次数够了刷新首页")
                tem = 0
                ll = 0
            }
        }
        if (text("作品数").exists() && id("com.ss.android.ugc.livelite:id/a_5").exists() || text("粉丝").exists() && id("com.ss.android.ugc.livelite:id/mz").exists()) {
            log("进到了个人界面")
            swipe(533, 1660, 557, 300, random(400, 600))
            sleep(random(2000, 5000))
            back()
        }
        if (id("com.ss.android.ugc.livelite:id/a2l").exists() && text("领取").exists()) {
            TKB.xgsrizhi("领取")
            click("领取")
            sleep(2000)
        }
        if (id("com.ss.android.ugc.livelite:id/h_").exists() && id("com.ss.android.ugc.livelite:id/mz").exists() && id("com.ss.android.ugc.livelite:id/fc").exists()) {
            TKB.xgsrizhi("进到广告详情界面了")
            back()
            sleep(3000)
        }
        if (desc("谢谢参与").exists() && desc("100金币").exists()) {
            log("抽奖界面")
            click(500, 1350)
            sleep(10000)
            back()
            sleep(2000)
        }
        if (text("com.ss.android.ugc.livelite:id/pc").exists() && id("com.ss.android.ugc.livelite:id/ks").exists() || text("发送").exists() && id("com.ss.android.ugc.livelite:id/ku").exists()) {
            toastLog("评论界面")
            var aa = random(1, 5)
            for (var i = 0; i < aa; i++) {
                swipe(533, 1700, 557, 400, random(400, 600))
                sleep(random(1000, 3000))
            }
            back()
            sleep(2000)
        }

        if (text("立即下载").exists() && id("com.ss.android.ugc.livelite:id/qp").exists() || text("点击重播").exists() || text("查看详情").exists() && id("com.ss.android.ugc.livelite:id/qp").exists()) {
            log("观看广告界面")
            zbt = random(10, 30)
            TR = (new Date()).getTime()
            while (1) {
                if ((new Date()).getTime() - TR > zbt * 1000) {
                    toastLog("观看视频时间到了")
                    back()
                    sleep(2000)
                    break
                } else {
                    toastLog("观看广告中...")
                    sleep(3000)
                }
            }
        }

        zonghe()
    }
}

//获取资料
function get_name(sbip, user_id, yhbh) {
    TKB.xgsrizhi("获取名字头像简介")
    var TS = (new Date()).getTime()
    var url = 'http://' + sbip + '/api.php/potal/meitu/getname?user_id=' + user_id + '&der_id=' + yhbh
    // var url = 'http://47.114.99.72/api.php/potal/meitu/getname?user_id=9&der_id=628'
    TKB.xgsrizhi(url)
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                TKB.xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                TKB.xgsrizhi(ss)
                if (ss["code"] == 0) {
                    var data = ss['data']
                    return data
                } else {
                    var data = ss['msg']
                    TKB.xgsrizhi(ss['msg'])
                    return false
                }
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

//改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    sleep(6000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(5, 10)
    var sex = random(0, 1)
    var tep = 0 //判断编辑资料界面该干啥
    var zz = get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname']
        TKB.xgsrizhi(name)
        var img = zz['img']
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie']
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        zonghe()
        if (text("首页").exists() && text("推荐").exists() && text("我的").exists()) {
            TKB.xgsrizhi("点击我的")
            id("com.ss.android.ugc.livelite:id/wi").findOnce().click()
            sleep(3000)
        }
        if (text("我的").exists() && id("com.ss.android.ugc.livelite:id/li").exists()) {
            TKB.xgsrizhi("点击头像进入编辑资料界面")
            id("com.ss.android.ugc.livelite:id/li").findOnce().click()
            sleep(3000)
        }
        if (text("编辑资料").exists() && text("保存").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                TKB.xgsrizhi("修改头像")
                if (text("编辑资料").exists() && text("点击更换头像").exists()) {
                    TKB.xgsrizhi("点击头像")
                    id("com.ss.android.ugc.livelite:id/gs").findOnce().click()
                    sleep(3000)
                }
                if (text("从相册选择").exists() && text("取消").exists()) {
                    TKB.xgsrizhi("从相册选择")
                    click("从相册选择")
                    sleep(6000)
                }
                if (text("最近").exists()) {
                    TKB.xgsrizhi("选择照片")
                    click(289, 584) //选择第一张
                    sleep(3000)
                    TKB.xgsrizhi("点击裁剪")
                    click("裁剪") //确定
                    sleep(1000)
                }
                if (text("编辑资料") && TKB.zhaose("if isColor(108,286,0xff985d,80) and isColor(172,284,0xff945e,80) and isColor(211,285,0xff925e,80) and isColor(275,286,0xff8e5f,80) and isColor(777,288,0xff6e65,80) and isColor(853,288,0xff6965,80) and isColor(896,288,0xff6665,80) and isColor(934,290,0xff6466,80) and isColor(982,290,0xff6166,80) and isColor(1020,290,0xff5e67,80) then")) {
                    TKB.xgsrizhi("火山极速版头像不符合")
                    imgflag = '火山极速版头像不符合'
                } else {
                    TKB.xgsrizhi("火山极速版头像符合")
                    imgflag = '火山极速版头像符合'
                }
                tep = 1
                sleep(3000)
            }
            if (tep == 1) {
                TKB.xgsrizhi("修改名字")
                if (text("编辑资料").exists() && text("昵称").exists()) {
                    TKB.xgsrizhi("清空原来的名字")
                    id("com.ss.android.ugc.livelite:id/gw").findOnce().setText('')
                    sleep(3000)
                    TKB.xgsrizhi("添加名字")
                    id("com.ss.android.ugc.livelite:id/gw").findOnce().setText(name)
                    sleep(3000)
                }
                if (id("com.ss.android.ugc.livelite:id/gw").findOnce().text() !== name) {
                    TKB.xgsrizhi("火山极速版名字不符合")
                    nameflag = '火山极速版名字不符合'
                } else {
                    TKB.xgsrizhi("火山极速版名字符合")
                    nameflag = '火山极速版名字符合'
                }
                tep = 2
                sleep(3000)
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改性别")
                if (text("编辑资料").exists() && text("性别").exists()) {
                    TKB.xgsrizhi("点击性别")
                    id("com.ss.android.ugc.livelite:id/h3").findOnce().click()
                    sleep(3000)
                }
                if (text("男").exists() && text("女").exists()) {
                    if (sex == 0) {
                        click("女")
                        sleep(3000)
                    } else {
                        click("男")
                        sleep(3000)
                    }
                }
                tep = 3
                sleep(3000)
            }
            if (tep == 3) {
                TKB.xgsrizhi("修改简介")
                if (text("编辑资料").exists() && id("com.ss.android.ugc.livelite:id/h7").exists()) {
                    TKB.xgsrizhi("点击简介")
                    id("com.ss.android.ugc.livelite:id/h7").findOnce().click()
                    sleep(3000)
                }
                if (text("编辑资料").exists() && text("保存").exists()) {
                    if (text(jianjie).exists()) {
                        TKB.xgsrizhi("已经是该简介了")
                        back()
                        sleep(2000)
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        sleep(2000)
                    } else {
                        TKB.xgsrizhi("填写简介")
                        setText(jianjie)
                        sleep(2000)
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        sleep(3000)
                    }
                }
                if (nameflag == '火山极速版昵称符合' && imgflag == '火山极速版头像符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = nameflag + ',' + imgflag + ',' + 0
                upinfo(sbip, user_id, yhbh, info, status)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh();
                return true
            }
        }
    }
}

//上传info结果
function upinfo(sbip, user_id, yhbh, info, status) {
    TKB.xgsrizhi("上传info结果")
    var Tb = (new Date()).getTime()
    TKB.xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                TKB.xgsrizhi("超时退出")
                return false
            }
            if (info != '' || info != null) {
                var ss = info.split(",")
                var name_info = ss[0],
                    img_info = ss[1],
                    jianjie_info = ss[2]
                var url = "http://" + sbip + "/api.php/potal/meitu/gxnamestatus?user_id=" + user_id + "&der_id=" + yhbh + "&name_info=" + name_info + "&img_info=" + img_info + "&jianjie_info=" + jianjie_info + "&status=" + status
                TKB.xgsrizhi("链接：" + url)
                var r = http.get(url);
                if (r.statusCode == 200) {
                    var r_obj = r.body.json();
                    TKB.xgsrizhi(r_obj)
                    if (r_obj["code"] == "0") {
                        toastLog("上传info结果成功")
                        return true
                    }
                } else {
                    TKB.xgsrizhi("没网")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("info数据上传失败")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传info结果中...")
        sleep(random(100, 10000))
    }
}

//火山极速版注册
function hsjszc() {
    log("火山极速版注册")
    launch("com.ss.android.ugc.livelite") //启动
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 20)
    var TSD = (new Date()).getTime()
    var bb = 0 //判断拿号
    var tem = 0 //判断拿号
    var zh = "18615969856" //号码
    var yzm = "1234" //验证码
    var dll = 0 //判断登录成功
    var dd = 0 //上传金额
    var yzmcs = 0 //获取验证码的次数
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log("时间够了退出")
            TKB.qinglihh()
            if (dll != 0) {
                return true
            }
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.ss.android.ugc.livelite")
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (bb == 1 && tem == 0) {
            TKB.xgsrizhi("去获取号码")
            zh = TKB.benjitel()
            if (zh == false) {
                return false
            }
            TKB.xgsrizhi("获取到的号码" + zh)
            TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
            tem = 1
        }

        if (text("手机号登录").exists() && text("下一步").exists() || id("com.ss.android.ugc.livelite:id/qp").exists() && text("手机号登录").exists()) {
            TKB.xgsrizhi("手机号登录")
            if (bb == 0) {
                log("先去拿号")
                bb = 1
            } else {
                if (yzmcs != 0) {
                    return false
                }
                TKB.xgsrizhi("输入号码" + zh)
                setText(zh)
                sleep(500)
                click(500, 720)
                sleep(500)
                click("下一步")
                sleep(5000)
            }
        }
        if (text("使用密码登录").exists() && text("登录").exists() || text("验证码").exists() && text("登录").exists() || text("验证码").exists() && text("下一步").exists() || text("同意《火山用户协议》").exists() && text("下一步").exists()) {
            TKB.xgsrizhi("输入验证码界面")
            if (yzmcs != 0) {
                return false
            }
            yzm = TKB.huoquyzm("火山")
            if (yzm == false) {
                back()
                sleep(100)
                back()
                sleep(2000)
            } else {
                TKB.xgsrizhi("输入验证码")
                setText(yzm)
                sleep(500)
                click(500, 720)
                sleep(500)
                click("下一步")
                sleep(5000)
                yzmcs = yzmcs + 1
            }
        }

        if (id("com.ss.android.ugc.livelite:id/oc").exists() && text("关注").exists() && id("com.ss.android.ugc.livelite:id/o9").exists() || id("com.ss.android.ugc.livelite:id/ou").exists() && id("com.ss.android.ugc.livelite:id/o3").exists()) {
            TKB.xgsrizhi("首页")
            click(943, 1851)
            sleep(2000)
        }
        if (id("com.ss.android.ugc.livelite:id/z2").exists() && text("手机登录").exists() || id("com.ss.android.ugc.livelite:id/qp").exists() && text("手机登录").exists() || text("其他登录方式").exists() && text("手机登录").exists() || text("微信登录").exists() && text("手机登录").exists()) {
            TKB.xgsrizhi("手机登录")
            click("手机登录")
            sleep(2000)
        }
        if (text("关闭").exists() && text("同意").exists() || text("同意").exists() && text("拒绝").exists()) {
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(5000)
        }
        if (text("注册/登录").exists()) {
            TKB.xgsrizhi("注册/登录")
            click("注册/登录")
            sleep(2000)
        } else {
            if (id("com.ss.android.ugc.livelite:id/hy").exists() && id("com.ss.android.ugc.livelite:id/gr").exists()) {
                TKB.xgsrizhi("登录成功")
                toastLog("登录成功")
                click(980, 130)
                dll = dll + 1
                sleep(3000)
            }
        }
        if (desc("看视频 领双倍金币").exists()) {
            TKB.xgsrizhi("看视频 领双倍金币")
            back()
            sleep(2000)
        }
        if (desc("金币").exists() && desc("兑换").exists() || text("金币").exists() && text("兑换").exists() || desc("摇钱树").exists() && desc("金币").exists() || desc("摇钱树").exists() && desc("兑换").exists()) {
            if (desc("开宝箱得金币").exists() && dll < 2) {
                TKB.xgsrizhi("开宝箱得金币")
                try {
                    if (desc("开宝箱得金币").exists()) {
                        var ss = desc("开宝箱得金币").findOnce().bounds();
                        TKB.xgsrizhi(ss)
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dll = dll + 1
            } else {
                if (desc("领8元现金").exists()) {
                    TKB.xgsrizhi("领8元现金")
                    try {
                        if (desc("领8元现金").exists()) {
                            var ss = desc("领8元现金").findOnce().bounds();
                            TKB.xgsrizhi(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    } catch (error) {
                        sleep(1001)
                        TKB.xgsrizhi(error);
                    }
                }
                if (desc("领10000金币").exists()) {
                    TKB.xgsrizhi("领10000金币")
                    try {
                        if (desc("领10000金币").exists()) {
                            var ss = desc("领10000金币").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        }
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                }
                if (dll > 3) {
                    TKB.xgsrizhi("登录成功退出3")
                    return true
                }
                TKB.xgsrizhi("下滑")
                swipe(557, 1630, 533, 400, random(400, 1000))
                sleep(2000)
                dll = dll + 1
            }
        }
        if (desc("登录查看余额").exists()) {
            TKB.xgsrizhi("登录查看余额")
            try {
                if (desc("登录查看余额").exists()) {
                    var ss = desc("登录查看余额").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("温馨提示").exists() && text("马上提交").exists() || desc("温馨提示").exists() && desc("马上提交").exists() || id("com.ss.android.ugc.livelite:id/a5b").exists() && desc("马上提交").exists()) {
            log("输入邀请码界面")
            return true
        }
        if (text("我的消息").exists() && id("com.ss.android.ugc.livelite:id/h_").exists() && text("我的关注").exists() || id("com.ss.android.ugc.livelite:id/mm").exists() && text("我的邀请码").exists()) {
            TKB.xgsrizhi("我的资料界面")
            sleep(3000)
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2) {
                sleep(3000)
                TKB.xgsrizhi("上传金额")
                try {
                    var jine = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (jine != "0" && jine != "" && jine != 0) {
                        TKB.xgsrizhi("获取到的金额" + jine)
                        toastLog("获取到的金额" + jine)
                        TKB.upjine(sbip, user_id, yhbh, app_id, jine)
                        dd = 10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            } else {
                TKB.xgsrizhi("去领钱1")
                click(900, 300)
                sleep(3000)
            }
        }
        if (text("好友列表").exists() && text("去领钱").exists() || text("去领钱").exists() && text("现金金额").exists()) {
            TKB.xgsrizhi("我的资料界面2")
            sleep(3000)
            if (id("com.ss.android.ugc.livelite:id/l4").exists() && dd < 2) {
                sleep(3000)
                TKB.xgsrizhi("上传金额2")
                try {
                    var jine = id("com.ss.android.ugc.livelite:id/l4").findOnce().text()
                    if (jine != "0" && jine != "" && jine != 0) {
                        TKB.xgsrizhi("获取到的金额" + jine)
                        toastLog("获取到的金额" + jine)
                        TKB.upjine(sbip, user_id, yhbh, app_id, jine)
                        dd = 10
                    }
                } catch (error) {
                    sleep(1001)
                    TKB.xgsrizhi(error);
                }
                dd = dd + 1
            } else {
                TKB.xgsrizhi("去领钱2")
                click(910, 220)
                sleep(300)
                click("去领钱")
                sleep(3000)
            }
        }
        if (text("微信号/QQ/邮箱登录").exists() || packageName("com.tencent.mm").exists() && text("注册").exists() && text("登录").exists() || text("找回密码").exists() && text("紧急冻结").exists()) {
            toastLog("未登录微信")
            TKB.qinglihh()
            return false
        }
        if (text("关闭广告").exists()) {
            log("关闭广告")
            click("关闭广告")
            sleep(3000)
        }
        zonghe()
    }
}

//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
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
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续抖火山急速版务")
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
                sleep(5000);
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************


//执行美图项目

function hszhixing() {
    try {
        toastLog("执行火山极速版")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var baom = getPackageName("火山极速版")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("火山极速版", "7.1.0")
                if (bbd == false) {
                    TKB.xgsrizhi("没安装成功火山极速版")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()

            var dl = hsjszc()
            if (dl == true) {
                if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "养号") {
                    hsjsbyh()
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
        log(error);
        TKB.cunqusj("jiaoben", "tingzhi")
        //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}



// changeInfo()
hszhixing()