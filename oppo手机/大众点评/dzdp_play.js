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
        text('温馨提示').exists() ? (click("同意并继续"), log("点击同意并继续")) : ''
        sleep(200)
        text('始终允许').exists() ? (click("始终允许"), log("始终允许")) : ''
        sleep(200)
        text('温馨提示').exists() && text("同意").exists() ? (text("同意").findOnce().click(), log("点击同意"),sleep(5000),click("确定")) : ''
        sleep(200)
        text('立刻升级').exists() ? (id("com.dianping.v1:id/update_cross_icon").findOnce().click(), log("点击关闭")) : ''
        sleep(200)
        text('领取成功').exists() ? (click("知道了"), log("点击知道了")) : ''
        sleep(200)
        id("com.dianping.v1:id/operate_btn").exists() && id("com.dianping.v1:id/operate_cross_icon").exists()? (id("com.dianping.v1:id/operate_cross_icon").findOnce().click(), log("点击关闭新人红包")) : ''
        sleep(200)
        text("立即领取").exists() && id("com.dianping.v1:id/stimulate_cross_icon").exists() ? (id("com.dianping.v1:id/stimulate_cross_icon").findOnce().click(), log("点击关闭")) : ''
        sleep(200)
        text("你的专属礼包").exists() ? (click(974, 482), log("点击关闭")) : ''
        sleep(200)
        text('知道了').exists() ? (click("知道了"), log("知道了")) : ''
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
var packageName = "com.dianping.v1"; //该项目包名
var xmxh = "36" //项目序号
//修改
var repeat = 0;
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';

//*******************************************************小红书项目 *****************************************************************

/**大众点评注册
 */
function login() {
    TKB.xgsrizhi("大众点评登录")
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
                click('我的')
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
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
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

//滑动+点赞
function silding() {
    if (desc("关注").exists()) {
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
/**大众点评养号
 */
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
//*******************************************************对接服务器*****************************************************************


//*******************************************************对接服务器*****************************************************************

//执行小红书
function zxxhs() {
    try {
        toastLog("执行豆瓣任务")
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['大众点评', '10.31.4']
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
        var dl =  login()
        if (dl == true) {
            browseRecommend();
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