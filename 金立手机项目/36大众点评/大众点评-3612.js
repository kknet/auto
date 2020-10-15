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
var packageName = "com.dianping.v1"; //该项目包名
var xmxh = "36" //项目序号
    // var qqb_pk = 'com.tencent.mtt'
    // var browseTime = 30 * 60 * 1000;
var nameflag
var imgflag

//*******************************************************豆瓣项目 *****************************************************************

//获取网址
function zhid(sbip, run_id) {
    TKB.xgsrizhi("获取指定任务的参数")
    var TS = (new Date()).getTime()
    var url = "http://" + sbip + "/api.php/potal/meitu/getrunbyrunid?&run_id=" + run_id
    var urlStart = (new Date()).getTime()
    TKB.xgsrizhi(url)
    var gf = {}
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 60 * 1000) {
                TKB.xgsrizhi("获取名字超时退出")
                return false
            }
            if ((new Date()).getTime() - urlStart > 5 * 1000) {
                res = http.get(url);
                if (res.statusCode == 200) {
                    var ss = res.body.json();
                    TKB.xgsrizhi(ss)
                    if (ss["code"] == 0) {
                        var ds = ss["data"]["more"]
                        TKB.xgsrizhi("获取到的参数：" + ds)
                        ds = JSON.parse(ds);
                        for (i = 0; i < ds.length; i++) {
                            gf[ds[i]["title"]] = ds[i]["val"]
                        }
                        TKB.xgsrizhi(gf)
                        return gf
                    } else {
                        toast("未获取到任务状态信息");
                        TKB.xgsrizhi("未获取到任务状态信息")
                    }
                } else {
                    toast("请求失败");
                    TKB.xgsrizhi("请求失败")
                }
                urlStart = (new Date()).getTime()
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

//大众点评弹窗
function allJudge() {
    if (text("温馨提示").exists()) {
        TKB.xgsrizhi("点击同意并继续")
        click("同意并继续")
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (text("温馨提示").exists()) {
        TKB.xgsrizhi("点击同意")
        click("同意")
        sleep(2000)
    }
    if (text("立刻升级").exists()) {
        TKB.xgsrizhi("点击关闭")
        id("com.dianping.v1:id/update_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("领取成功").exists()) {
        TKB.xgsrizhi("点击知道了")
        click("知道了")
        sleep(2000)
    }
    if (id("com.dianping.v1:id/operate_btn").exists()) {
        TKB.xgsrizhi("点击关闭新人红包")
        id("com.dianping.v1:id/operate_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("立即领取").exists() && id("com.dianping.v1:id/stimulate_cross_icon").exists()) {
        TKB.xgsrizhi("点击关闭")
        id("com.dianping.v1:id/stimulate_cross_icon").findOnce().click()
        sleep(2000)
    }
    if (text("你的专属礼包").exists()) {
        TKB.xgsrizhi("点击关闭")
        click(974, 482)
            // desc("关闭").findOnce().click()
        sleep(2000)
    }
}

//大众点评注册
function login() {
    TKB.xgsrizhi("大众点评登录")
    launch(packageName)
    sleep(13000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = "18905870854"
    var yzm = "123456"
    var is_verify = 3;
    var is_send = false;
    // var xs = zhid(sbip, run_id)
    while (true) {
        try {
            allJudge()
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(packageName)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(packageName)
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("立即登录").exists()) {
                TKB.xgsrizhi("点击立即登录")
                click("立即登录")
                sleep(6000)
            }
            if (text("登录领奖").exists()) {
                TKB.xgsrizhi("点击登录领奖")
                click("登录领奖")
                sleep(6000)
            }
            if (text("首页").exists() && text("我的").exists()) {
                TKB.xgsrizhi("点击我的")
                click("我的")
                sleep(3000)
            }
            if (text("点击登录").exists()) {
                TKB.xgsrizhi("点击重新返回首页登录")
                click("首页")
                sleep(3000)
            }
            if (text("个人主页").exists()) {
                TKB.xgsrizhi("登录成功")
                sleep(2000)
                return true
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(packageName)
                return false
            }
            if (text("手机号登录").exists()) {
                click(575, 1485)
                TKB.xgsrizhi("点击手机号登录")
                sleep(2000);
            }
            if (text("手机号登录/注册").exists() &&
                text("请输入手机号").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(packageName)
                    sleep(10000)
                    launch(packageName)
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue;
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(0, zh);
                sleep(5000)
                click("下一步")
                is_send = true;
                TKB.xgsrizhi("点击下一步")
                sleep(random(10000, 15000));
            }
            if (text("验证码登录").exists() && (text("获取验证码").exists() || textStartsWith("重新发送").exists())) {
                if (text('获取验证码').exists() && is_send == false) {
                    setText(0, '')
                    sleep(2000)
                    click('获取验证码')
                    TKB.xgsrizhi("点击重新获取验证码")
                    is_verify--
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                if (text('获取验证码').exists() && is_send == true) {
                    click('获取验证码')
                    TKB.xgsrizhi("点击获取验证码")
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("大众点评")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(packageName)
                    sleep(10000)
                    launch(packageName)
                    sleep(10000)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    if (is_send == true) {
                        TKB.xgsrizhi("输入验证码" + yzm)
                        setText(0, yzm);
                        sleep(3000);
                        if (text("登录").exists()) {
                            TKB.xgsrizhi("点击登录")
                            text("登录").findOnce().click()
                            sleep(3000)
                        }
                        is_send = false;
                    }
                }
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//养号
function browseRecommend() {
    TKB.xgsrizhi('大众点评养号')
    launch(packageName)
    sleep(13000)
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    var swipeCount = 0;
    var notInHome = 0;
    var homeTime = random(30, 40)
    var shopTime = random(10, 20)
    var communityTime = random(5, 10)
    var a = 0
    var ifClick = true;
    var temx = 0
    var tem = 0
    var tems = 0
    while (true) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh(packageName)
                break
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi('超时没在首页')
                back()
                sleep(1000)
                TKB.qinglihh(packageName)
                sleep(3000)
                launch(packageName)
                sleep(2000)
                TSD = (new Date()).getTime()
                tem = 0
            }
            if (a == 0) {
                var HT = (new Date()).getTime();
                while (1) {
                    if ((new Date()).getTime() - HT > homeTime * 60 * 1000) {
                        TKB.xgsrizhi("时间够了刷商城")
                        a = 1
                        sleep(3000)
                        break;
                    }
                    allJudge();
                    if (temx == 0) {
                        if (swipeCount > 80 || ifClick) {
                            if (text("首页").exists()) {
                                TKB.xgsrizhi("点击首页")
                                click("首页");
                                sleep(2000);
                            }
                            TKB.xgsrizhi("首页滑动")
                            swipe(random(500, 600), 1700, random(500, 600), 300, 2000)
                            sleep(2000)
                            if (id("com.dianping.v1:id/tab_layout").exists()) {
                                var tabViews = id("com.dianping.v1:id/tab_layout").findOnce().child(0).children();
                                tabViews.splice(2, 1)
                                tabViews[random(0, tabViews.size() - 1)].click();
                                TKB.xgsrizhi("随即点击栏目")
                                sleep(4000);
                            }
                            ifClick = false;
                            swipeCount = 0;
                            temx = 1
                        }
                    }
                    for (let i = 0; i < random(3, 4); i++) {
                        TKB.xgsrizhi("点评列表滑动")
                        swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                        sleep(1500);
                    }
                    swipeCount++;
                    if (id("com.dianping.v1:id/recycler_view").exists()) {
                        var contents = id("com.dianping.v1:id/recycler_view").find().filter(function(w) {
                            return w.bounds().left < w.bounds().right
                        })[0].children();
                        for (let i = 0; i < contents.length; i += random(2, 3)) {
                            var adv = className("android.widget.ImageView").find().filter(function(w) {
                                return w.bounds().width() === 68 && w.bounds().height() === 34
                            });
                            if (adv != null && adv != '') {
                                TKB.xgsrizhi("有广告，跳过");
                                // swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                                continue;
                            }
                            if (contents[i].findOne(textEndsWith("评价榜"))) {
                                TKB.xgsrizhi("评价榜，跳过");
                                // swipe(random(500, 700), 1700, random(500, 700), 400, 1500);
                                continue
                            }
                            contents[i].click()
                            TKB.xgsrizhi("点击点评文章");
                            sleep(6000)
                            if (text("打卡").exists() && text("写点评").exists() && text("拍视频").exists()) {
                                TKB.xgsrizhi("进入了店铺，返回到首页");
                                back()
                                sleep(6000)
                            } else {
                                silding()
                                sleep(3000)
                            }
                        }
                    } else {
                        TKB.xgsrizhi("找不到文章第" + notInHome + "次");
                        notInHome++;
                        back();
                        sleep(2000);
                        ifClick = true;
                    }
                }
            }
            if (a == 1) {
                while (1) {
                    var SP = (new Date()).getTime();
                    while (true) {
                        try {
                            if ((new Date()).getTime() - SP > shopTime * 60 * 1000) {
                                TKB.xgsrizhi("时间够了逛社区")
                                a = 2
                                sleep(3000)
                                break;
                            }
                            allJudge()
                            if (tem == 0) {
                                if (text("好物").exists()) {
                                    TKB.xgsrizhi("点击好物")
                                    click("好物")
                                    sleep(3000)
                                }
                                tem = 1
                            }
                            for (let i = 0; i < random(2, 3); i++) {
                                TKB.xgsrizhi("点评列表滑动")
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(1500);
                            }
                            if (text("查看详情").exists()) {
                                TKB.xgsrizhi("点击查看详情")
                                click("查看详情")
                                sleep(3000)
                                silding()
                            }
                        } catch (error) {
                            TKB.xgsrizhi(error)
                            sleep(random(3000, 8000))
                        }
                    }
                }
            }
            if (a == 2) {
                var CT = (new Date()).getTime()
                while (1) {
                    try {
                        if ((new Date()).getTime() - CT > communityTime * 60 * 1000) {
                            TKB.xgsrizhi("时间够了退出")
                            TKB.qinglihh(packageName)
                            return true
                        }
                        allJudge()
                        if (tems == 0) {
                            if (id("com.dianping.v1:id/home_tab_square").exists()) {
                                TKB.xgsrizhi("点击关注")
                                click("关注")
                                sleep(3000)
                            }
                            if (text("社区").exists() && text("关注").exists()) {
                                TKB.xgsrizhi("点击社区")
                                desc("社区").findOnce().click()
                                sleep(3000)
                            }
                            tems = 1
                        }
                        for (let i = 0; i < random(2, 3); i++) {
                            TKB.xgsrizhi("点评列表滑动")
                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                            sleep(1500);
                        }
                        var tribe = desc("点击帖子").find()
                        for (let i = 0; i < tribe.size(); i++) {
                            TKB.xgsrizhi("点击帖子")
                            click(tribe[i].bounds().centerX(), tribe[i].bounds().centerY())
                            sleep(6000)
                            silding()
                        }
                    } catch (error) {
                        TKB.xgsrizhi(error)
                        sleep(random(3000, 8000))
                    }
                }
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在大众点评页面3次 重新启动");
                TKB.qinglihh(packageName);
                sleep(2000);
                launch(packageName);
                sleep(8000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//修改资料
function changeInfo() {
    TKB.xgsrizhi("大众点评改资料")
    launch(packageName)
    sleep(6000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
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
        // if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
        //     TKB.xgsrizhi("超时没在首页")
        //     swipe(500, 1600, 600, 400, 1200);
        //     sleep(500)
        //     back()
        //     sleep(1000)
        //     TKB.qinglihh()
        //     sleep(3000)
        //     launch("com.ss.android.ugc.aweme")
        //     sleep(2000)
        //     TSD = (new Date()).getTime()
        // }
        allJudge()
        if (id("com.dianping.v1:id/home_tab_my").exists()) {
            TKB.xgsrizhi("点击我")
                // id("com.dianping.v1:id/home_tab_my").findOnce().parent().click()
            click("我的")
            sleep(3000);
        }
        if (text("个人主页").exists()) {
            TKB.xgsrizhi("点击个人主页")
                // text("个人主页").findOnce().parent().click()
                // desc("个人主页").findOnce().click()
            click(149, 280)
            sleep(3000)
        }
        if (id("com.dianping.v1:id/social_profile_searchBt").exists() && desc("更多按钮").exists()) {
            TKB.xgsrizhi("点击更多资料")
            desc("更多按钮").findOnce().click()
            sleep(3000)
        }
        if (text("编辑资料").exists()) {
            TKB.xgsrizhi("点击编辑资料")
            id("com.dianping.v1:id/item").findOnce().click()
            sleep(3000)
        }
        if (text("个人资料").exists() && text("头像").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                TKB.xgsrizhi("修改名字")
                sleep(300)
                if (text("个人资料").exists() && text("昵称").exists()) {
                    TKB.xgsrizhi("前往修改名字")
                    text("昵称").findOnce().parent().click()
                    sleep(3000)
                    if (text("修改昵称").exists() && desc("保存").exists()) {
                        // TKB.xgsrizhi("清空原有的名字")
                        // id("com.xingin.xhs:id/bse").findOnce().setText("")
                        // sleep(3000)
                        TKB.xgsrizhi("添加新的名字")
                        setText(0, name);
                        sleep(3000)
                        TKB.xgsrizhi("点击完成")
                        desc("保存").findOnce().click()
                        sleep(6000)
                        if (text("修改").exists() && text("取消").exists()) {
                            TKB.xgsrizhi("是否确定修改昵称")
                            click("修改")
                            sleep(3000)
                        }
                        if (text("昵称包含不合法信息").exists() || text("昵称只能包含字母、数字、中文、下划线和点").exists()) {
                            TKB.xgsrizhi("大众点评昵称不符合")
                            nameflag = '大众点评昵称不符合'
                            click("确定")
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    }
                }
                if (text(name).exists()) {
                    TKB.xgsrizhi("大众点评昵称符合")
                    nameflag = '大众点评昵称符合'
                } else {
                    TKB.xgsrizhi("大众点评昵称不符合")
                    nameflag = '大众点评昵称不符合'
                }
                tep = 1
                sleep(3000)
            }
            if (tep == 1) {
                if (text("个人资料").exists() && text("个人介绍").exists()) {
                    TKB.xgsrizhi("修改简介")
                    text("个人介绍").findOnce().parent().click()
                    sleep(2000)
                    if (text("编辑个人介绍").exists() && desc("保存").exists()) {
                        if (text(jianjie).exists()) {
                            TKB.xgsrizhi("已经是该简介了")
                            sleep(2000)
                            back()
                            sleep(2000)
                        } else {
                            TKB.xgsrizhi("填写简介")
                            setText(jianjie)
                            sleep(2000)
                            desc("保存").findOnce().click()
                            sleep(3000)
                        }
                    }
                }
                tep = 2
                sleep(3000)
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改头像")
                if (text("个人资料").exists() && text("头像").exists()) {
                    TKB.xgsrizhi("前往修改头像")
                    text("头像").findOnce().parent().click()
                    sleep(3000)
                }
                if (text('所有照片').exists()) {
                    TKB.xgsrizhi("点击所有照片")
                        // id("com.xingin.xhs:id/cxc").findOnce().click();
                    click("所有照片")
                    sleep(2000);
                    if (textStartsWith("DY").exists()) {
                        TKB.xgsrizhi("点击DY相册")
                        click("DY")
                        sleep(2000);
                    }
                    click(539, 395);
                    sleep(2000)
                    if (text('取消').exists() && text('完成').exists()) {
                        TKB.xgsrizhi("点击确定")
                        click('完成')
                        sleep(3000)
                    }
                    if (text("个人资料").exists() && text("头像").exists()) {
                        TKB.xgsrizhi("大众点评头像符合")
                        imgflag = '大众点评头像符合'
                    } else {
                        TKB.xgsrizhi("大众点评头像不符合")
                        imgflag = '大众点评头像不符合'
                    }
                    sleep(2000)
                }
            }
            if (nameflag == '大众点评昵称符合' && imgflag == '大众点评头像符合') {
                status = 1
            } else {
                status = 2
            }
            var info = nameflag + ',' + imgflag + ',' + 0
            upinfo(sbip, user_id, yhbh, info, status)
            sleep(2000)
            TKB.xgsrizhi("执行完了退出")
            TKB.qinglihh();
            return true
        }
    }
}

//获取资料
function get_name(sbip, user_id, yhbh) {
    TKB.xgsrizhi("获取名字头像简介")
    var TS = (new Date()).getTime()
    var url = 'http://' + sbip + '/api.php/potal/meitu/getname?user_id=' + user_id + '&der_id=' + yhbh
        // var url = 'http://47.114.99.72/api.php/potal/meitu/getname?user_id=9&der_id=629'
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

//滑动+点赞
function silding() {
    if (desc("关注").exists()) {
        allJudge()
        TKB.xgsrizhi("进入点评文章")
            // swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
        sleep(3000);
        if (textContains('/').exists()) {
            var pageContent = textContains('/').findOne().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(10, 15)
        var pageStart = (new Date()).getTime()
        while (true) {
            // if (textStartsWith("尚无评论").exists() || textEndsWith("回复").exists()) {
            //     TKB.xgsrizhi("没有评论返回")
            //     back()
            //     break
            // }
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                TKB.xgsrizhi("图文内容滑动")
                swipe(random(700, 800), 1200, random(700, 800), 400, 1000)
                sleep(2000)
            } else {
                break
            }
        }
        if (random(1, 50) == 1) {
            if (text("说点什么吧…").exists()) {
                click(660, 1860)
                TKB.xgsrizhi("点赞")
                sleep(2000);
            }
        }
        sleep(3000)
        TKB.xgsrizhi("返回到主页")
        back()
        sleep(3000)
    }
}


//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        // TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if( files.exists("/sdcard/观沧海.mp3") == false){
            TKB.xgsrizhi("没有音乐文件去下载")
            dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3",0.1,true);
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
                        TKB.xgsrizhi("继续大众点评任务")
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

//执行大众点评
function main() {
    try {
        toastLog("执行大众点评任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var app_list = [
                ['大众点评', '10.31.4'],
                // ['QQ浏览器', '10.5.1.7230']
            ]
            app_list.forEach(element => {
                var install_num = 10
                while (install_num) {
                    var baom = getPackageName(element[0])
                    if (baom != null && TKB.getVerName(element[0]) != element[1]) {
                        TKB.xiezai(packageName)
                        install_num--
                    } else if (baom == null) {
                        var bbd = TKB.wdjxiazai(element[0], element[1])
                        if (bbd == false) {
                            TKB.xgsrizhi(element[0] + "安装失败")
                            _THREADSS.interrupt()
                            TKB.cunqusj("jiaoben", "tingzhi")
                            java.lang.System.exit(0);
                        }
                    } else {
                        break;
                    }
                }
            });
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var iflogin = login()
            if (iflogin == true) {
                if (fun == "养号") {
                    browseRecommend()
                } else if (fun == "修改资料") {
                    changeInfo()
                }
            } else {
                alert("点击次数过多", "请稍后重试");
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

main()