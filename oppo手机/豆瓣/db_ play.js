log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()
auto.waitFor()
sleep(2000)
threads.start(function () {
    while (1) {
        //修改
        text('允许').exists() ? (click("允许"), log("允许")) : ''
        sleep(200)
        text('下一步').exists() && textEndsWith('权限').exists() ? (click("下一步"), log("同意授权")) : ''
        sleep(200)
        text('始终允许').exists() ? (click("始终允许"), log("始终允许")) : ''
        sleep(200)
        text('确定').exists() && id("com.douban.frodo:id/check_box").exists() ? (id("com.douban.frodo:id/check_box").findOnce().click(), log("勾选"), sleep(5000), click("确定")) : ''
        sleep(200)
        text('喜欢豆瓣吗？').exists() ? (click("下次再说"), log("下次再说")) : ''
        sleep(200)
        id("com.douban.frodo:id/skip").exists() ? (id("com.douban.frodo:id/skip").findOnce().click(), log("点击跳过")) : ''
        sleep(200)
        text('完善资料').exists() ? (click("写好了"), log("完善资料")) : ''
        sleep(200)
        text('查看详情').exists() && text('我知道了').exists() ? (click("我知道了"), log("我知道了")) : ''
        sleep(200)
        desc("已发送短信，去验证").exists() ? (desc("已发送短信，去验证").findOnce().click(), log("点击已发送")) : ''
        sleep(200)
        desc("下载App").exists() ? (desc("Navigate up").findOnce().click(), log("点击下载app关闭")) : ''
        sleep(200)
        text('知道了').exists() ? (click("知道了"), log("知道了")) : ''
        sleep(200)
        text("验证手机号").exists() ? (desc("立即发送短信").findOnce().click(), sleep(3000), text("发送").exists() ? (id("com.android.mms:id/gn_send_msg_button").findOnce().click(), sleep(5000), back()) : '') : ''
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

if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
var packageName = "com.douban.frodo"; //该项目包名
var xmxh = "35" //项目序号
//修改
var repeat = 0;
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';

//*******************************************************小红书项目 *****************************************************************

/**豆瓣注册
 */
function login() {
    TKB.xgsrizhi("豆瓣登录")
    launch(packageName)
    sleep(13000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = ""
    var yzm = ""
    var is_verify = 3;
    var is_send = false;
    while (true) {
        try {
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
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(packageName)
                return false
            }
            if (text("手机号登录").exists()) {
                click("手机号登录");
                TKB.xgsrizhi("点击手机号登录")
                sleep(2000);
            }
            if (text("一键登录豆瓣").exists()) {
                click("一键登录豆瓣")
                TKB.xgsrizhi("点击一键登录豆瓣")
                sleep(2000);
            }
            if (text("首页").exists() && text("我的").exists()) {
                click(980, 1850)
                TKB.xgsrizhi("点击我的")
                sleep(5000);
                if (id("com.douban.frodo:id/name").exists()) {
                    TKB.xgsrizhi("用户名存在登陆成功")
                    return true
                }
            }
            if (id("com.douban.frodo:id/login_button").exists() && id("com.douban.frodo:id/login_phone").exists()) {
                id("com.douban.frodo:id/login_phone").click();
                sleep(2000);
                TKB.xgsrizhi("点击登录豆瓣")
            }
            if (text("手机号登录/注册").exists() &&
                text("获取验证码").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel() //获取手机号码
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
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(0, zh);
                sleep(2000)
                click("获取验证码")
                is_send = true;
                TKB.xgsrizhi("点击获取验证码")
                sleep(random(10000, 15000));
            }
            if (text("输入验证码").exists() && (textEndsWith("后重新获取").exists() ||
                    text("重新获取验证码").exists())) {
                if (text('重新获取验证码').exists() && is_send == false) {
                    for (let i = 0; i < 4; i++) {
                        setText(i, "");
                        sleep(700)
                    }
                    click('重新获取验证码')
                    TKB.xgsrizhi("点击重新获取验证码")
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("豆瓣")
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
                        for (let i = 0; i < 4; i++) {
                            setText(i, yzm[i]);
                            sleep(700)
                        }
                        sleep(6000);
                        is_send = false;
                    }
                }
            }
            if (text("请输入图中校验码") && text("校验码").exists()) {
                toast("等待人为操作");
                TKB.xgsrizhi("等待人为操作")
                sleep(10 * 1000);
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}
//滑动
function slide() {
    var pageTime = random(10, 15)
    var pageStart = (new Date()).getTime()
    while (true) {
        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
            TKB.xgsrizhi("内容滑动")
            swipe(random(500, 600), 1600, random(500, 600), 500, 1000)
            sleep(random(3000, 8000))
        } else {
            break
        }
    }
}
/**豆瓣养号
 * @dz {string}点赞百分比
 */
function dbyh() {
    TKB.xgsrizhi('豆瓣养号')
    launch(packageName)
    sleep(12000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    var a = 0
    var tem = 0
    var tj_time = random(30, 40)
    var temx = 0
    var rb_time = random(10, 20)
    var sjSort = random(0, 2)
    // var dz = random(1,100)
    var dz = '2'
    while (1) {
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
                var tj = (new Date()).getTime()
                TKB.xgsrizhi("刷推荐")
                while (1) {
                    if ((new Date()).getTime() - tj > tj_time * 60 * 1000) {
                        TKB.xgsrizhi('去刷书影音')
                        a = 1
                        break
                    }
                    if (tem == 0) {
                        click('首页')
                        TKB.xgsrizhi('点击首页')
                        sleep(6000)
                        tem = 1
                    }

                    for (let i = 0; i < random(2, 4); i++) {
                        TKB.xgsrizhi("推荐滑动");
                        swipe(random(500, 700), 1500, random(500, 700), 500, 2000);
                        sleep(2000);
                    }
                    var tabViews = id("com.douban.frodo:id/swipe_refresh_layout").find().filter(function (w) {
                        return w.bounds().right > 0
                    })[0].child(0).children()
                    sleep(2000)
                    for (let i = 0; i < tabViews.length; i++) {
                        if (text("广告").exists()) {
                            TKB.xgsrizhi("广告,跳过");
                            continue;
                        }
                        if (id("com.douban.frodo:id/group_container").exists()) {
                            TKB.xgsrizhi("豆瓣小组,跳过");
                            continue
                        }
                        sleep(2000)
                        tabViews[i].click()
                        TKB.xgsrizhi("点击文章");
                        sleep(5000)
                        slide()
                        if (dz < 5) {
                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                var like = id("com.douban.frodo:id/icon_react").find();
                                for (var x = 0; x < like.length; x++) {
                                    var z = like[x].bounds()
                                    if (z.centerY() < 1900 && z.centerY() > 300) {
                                        click(z.centerX(), z.centerY())
                                        log(z.centerY())
                                        TKB.xgsrizhi("点赞")
                                        sleep(2000);
                                    }
                                }
                            }
                        }
                        back()
                        sleep(2000)
                    }
                }
            }
            if (a == 1) {
                TKB.xgsrizhi("刷书影音")
                var rb = (new Date()).getTime()
                while (1) {
                    try {
                        if ((new Date()).getTime() - rb > rb_time * 60 * 1000) {
                            TKB.xgsrizhi('全部执行完毕，退出')
                            TKB.qinglihh()
                            return true
                        }
                        if (temx == 0) {
                            if (id("com.douban.frodo:id/title").text("书影音").exists()) {
                                click(336, 1826)
                                TKB.xgsrizhi("点击书影音");
                                sleep(15000)
                            }
                            if (id("com.douban.frodo:id/subject_tab_strip").exists()) {
                                var sort = id("com.douban.frodo:id/subject_tab_strip").findOnce().child(0).children()
                                sort[sjSort].click()
                                TKB.xgsrizhi("随机点分类")
                            }
                            temx = 1
                            sleep(8000)
                        }
                        if (sjSort == 0) {
                            TKB.xgsrizhi("刷电影")
                            // if (descContains('豆瓣热门').exists()) {
                            //     TKB.xgsrizhi("点击豆瓣热门");
                            //     click(500, 715)
                            //     sleep(5000)
                            // }
                            if (descContains('豆瓣热门').exists()) {
                                TKB.xgsrizhi("点击豆瓣热门全部");
                                click(932, 725)
                                sleep(15000)
                            }
                            if (text("豆瓣热门").exists()) {
                                click("豆瓣热门")
                                TKB.xgsrizhi("点击豆瓣热门");
                                sleep(6000)
                            }

                            for (let i = 0; i < random(3, 5); i++) {
                                TKB.xgsrizhi("热门列表滑动");
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(2000);
                            }
                            if (text("热门电影").exists()) {
                                var movieView = desc("(").find().filter(function (w) {
                                    return w.bounds().top < w.bounds().bottom && w.bounds().left > 0
                                })
                                for (let i = 0; i < movieView.length; i++) {
                                    click(movieView[i].bounds().centerX(), movieView[i].bounds().centerY())
                                    TKB.xgsrizhi("点击影片");
                                    sleep(5000)

                                    if (text("影评列表").exists()) {
                                        while (text("影评列表").findOnce().bounds().top > 1200) {
                                            swipe(random(500, 700), 1400, random(500, 700), 500, 1000);
                                            sleep(2000);
                                        }
                                        TKB.xgsrizhi("滑动");
                                        swipe(random(500, 700), 1200, random(500, 700), 500, 1000);
                                        sleep(3000)
                                    }
                                    if (id("com.douban.frodo:id/list_view").exists()) {
                                        for (let i = 0; i < random(3, 5); i++) {
                                            TKB.xgsrizhi("影评列表滑动");
                                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                            sleep(2000);
                                        }
                                        var listView = id("com.douban.frodo:id/list_view").findOnce().children()
                                        for (let j = 0; j < listView.size(); j++) {
                                            sleep(2000)
                                            listView[j].click()
                                            TKB.xgsrizhi("点击影评");
                                            sleep(7000)
                                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                                TKB.xgsrizhi("影评滑动");
                                                slide()
                                                back()
                                                sleep(2000)
                                            }
                                        }
                                    }
                                    TKB.xgsrizhi("返回热门电影列表");
                                    back()
                                    sleep(2000)
                                }
                            }
                        } else if (sjSort == 1) {
                            TKB.xgsrizhi("刷电视")
                            if (descContains('热播新剧').exists()) {
                                TKB.xgsrizhi("点击热播新剧全部");
                                click(932, 725)
                                sleep(15000)
                            }

                            for (let i = 0; i < random(2, 3); i++) {
                                TKB.xgsrizhi("热门列表滑动");
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(2000);
                            }
                            if (text("热播剧集").exists()) {
                                var tvplayView = desc("(").find().filter(function (w) {
                                    return w.bounds().top < w.bounds().bottom && w.bounds().left < 1063
                                })
                                for (let i = 0; i < tvplayView.length; i++) {
                                    sleep(2000)
                                    click(tvplayView[i].bounds().centerX(), tvplayView[i].bounds().centerY())
                                    TKB.xgsrizhi("点击电视剧");
                                    sleep(5000)

                                    if (text("剧评列表").exists()) {
                                        while (text("剧评列表").findOnce().bounds().top > 1200) {
                                            swipe(random(500, 700), 1400, random(500, 700), 500, 1000);
                                            sleep(2000);
                                        }
                                        TKB.xgsrizhi("滑动");
                                        swipe(random(500, 700), 1200, random(500, 700), 500, 1000);
                                        sleep(3000)
                                    }
                                    if (id("com.douban.frodo:id/list_view").exists()) {
                                        for (let i = 0; i < random(3, 5); i++) {
                                            TKB.xgsrizhi("影评列表滑动");
                                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                            sleep(2000);
                                        }
                                        var listView = id("com.douban.frodo:id/list_view").findOnce().children()
                                        for (let j = 0; j < listView.size(); j++) {
                                            sleep(2000)
                                            listView[j].click()
                                            TKB.xgsrizhi("点击剧评");
                                            sleep(7000)
                                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                                TKB.xgsrizhi("剧评滑动");
                                                slide()
                                                back()
                                                sleep(2000)
                                            }
                                        }
                                    }
                                    TKB.xgsrizhi("返回热播剧集列表");
                                    back()
                                    sleep(2000)
                                }
                            }
                        } else if (sjSort == 2) {
                            TKB.xgsrizhi("刷读书")
                            if (text('读书').exists()) {
                                TKB.xgsrizhi("点击豆瓣榜单");
                                click(407, 480)
                                sleep(15000)
                            }

                            if (text("豆瓣榜单").exists() && text("豆瓣书单").exists()) {
                                TKB.xgsrizhi("点击豆瓣读书Top250")
                                click(514, 1176)
                                sleep(8000)
                            }
                            for (let i = 0; i < random(2, 3); i++) {
                                TKB.xgsrizhi("热门列表滑动");
                                swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                sleep(2000);
                            }
                            if (text("豆瓣读书 Top250")) {
                                var bookView = descStartsWith("No").find().filter(function (w) {
                                    return w.bounds().top < w.bounds().bottom
                                })
                                for (let i = 0; i < bookView.length; i++) {
                                    TKB.xgsrizhi("点击书籍")
                                    // bookView[i].click()
                                    click(bookView[i].bounds().centerX(), bookView[i].bounds().centerY())
                                    sleep(7000)

                                    if (text("书评列表").exists()) {
                                        while (text("书评列表").findOnce().bounds().top > 1200) {
                                            swipe(random(500, 700), 1400, random(500, 700), 500, 1000);
                                            sleep(2000);
                                        }
                                        TKB.xgsrizhi("滑动");
                                        swipe(random(500, 700), 1200, random(500, 700), 500, 1000);
                                        sleep(3000)
                                    }
                                    if (id("com.douban.frodo:id/list_view").exists()) {
                                        for (let i = 0; i < random(3, 5); i++) {
                                            TKB.xgsrizhi("影评列表滑动");
                                            swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                                            sleep(2000);
                                        }
                                        var listView = id("com.douban.frodo:id/list_view").findOnce().children()
                                        for (let j = 0; j < listView.size(); j++) {
                                            sleep(2000)
                                            listView[j].click()
                                            TKB.xgsrizhi("点击书评");
                                            sleep(7000)
                                            if (id("com.douban.frodo:id/icon_react").exists()) {
                                                TKB.xgsrizhi("书评滑动");
                                                slide()
                                                back()
                                                sleep(2000)
                                            }
                                        }
                                    }
                                    TKB.xgsrizhi("返回top榜单");
                                    back()
                                    sleep(2000)
                                }
                            }
                        }
                    } catch (error) {
                        TKB.xgsrizhi(error);
                        sleep(2000)
                    }
                }
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }

    }
}
//*******************************************************对接服务器*****************************************************************


//*******************************************************对接服务器*****************************************************************

//执行小红书
function zxxhs() {
    try {
        toastLog("执行豆瓣任务")
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['豆瓣', '6.39.0'],
                ['QQ浏览器', '10.5.1.7230']
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
        var dl = login()
        if (dl == true) {
            dbyh();
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