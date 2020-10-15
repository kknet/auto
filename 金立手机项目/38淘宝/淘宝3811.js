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
var dqbaoming = "com.taobao.taobao" //该项目包名
    // var qqb_pk = 'com.tencent.mtt'
var xmxh = "38" //项目序号


//*******************************************************微博项目 *****************************************************************

//获取验证码
function huoquyzm(dxgj) {
    TKB.xgsrizhi("获取本机验证码")
    var TC = (new Date()).getTime()
    sleep(10000)
    var i = 0;
    var sms = [];
    while (1) {
        try {
            if ((new Date()).getTime() - TC > 2 * 60 * 1000) {
                TKB.xgsrizhi("获取短信超时")
                if (sms.length > 0) {
                    for (var i = 0; i < sms.length; i++) {
                        if (i > 1) {
                            TKB.xgsrizhi("最近两条都不是该应用的短信")
                            return false
                        }
                        var dxnr = sms[i]["body"] //短信内容
                        TKB.xgsrizhi(dxnr)
                        if (dxnr.indexOf(dxgj) != -1) {
                            TKB.xgsrizhi("获取到短信2" + dxnr)
                            var arr = dxnr.match(/([0-9]{6,})/g)
                            var yzm = arr.toString()
                            return yzm
                        }
                    }
                }
                return false
            }
        } catch (error) {
            log("错误2" + error);
            sleep(2000)
            return false
        }
        try {
            importClass(android.net.Uri);
            SMS_INBOX = Uri.parse("content://sms/");
            var cr = context.getContentResolver();
            var projection = [
                "_id",
                "address",
                "person",
                "body",
                "date",
                "type"
            ];
            var cur = cr.query(SMS_INBOX, projection, null, null, "date desc"); //此处报错是因为系统没允许autojs读取短信            
            if (null == cur) {
                log("************cur == null");
                return;
            }
            while (cur.moveToNext()) {
                sms[i] = {
                    number: cur.getString(cur.getColumnIndex("address")),
                    name: cur.getString(cur.getColumnIndex("person")),
                    body: cur.getString(cur.getColumnIndex("body")),
                }
                i++;
                //至此就获得了短信的相关的内容, 以下是把短信加入map中，构建listview,非必要。
            }
            // return sms;
            if (sms.length > 0) {
                TKB.xgsrizhi("手机中发现短信")
                var dxnr = sms[0]["body"] //短信内容
                if (dxnr.indexOf(dxgj) != -1) {
                    TKB.xgsrizhi("获取到短信" + dxnr)
                    var arr = dxnr.match(/([0-9]{6,})/g)
                    var yzm = arr.toString()
                    return yzm
                } else {
                    toastLog("获取验证码中...")
                    sleep(3000)
                }
            }
        } catch (error) {
            toastLog("请查看laodi是否开启读取短信权限")
            TKB.xgsrizhi("错误" + error);
            sleep(2000)
        }
    }
}

//所有判断和弹窗
function popUp() {
    while (text("始终同意").exists()) {
        click("始终同意");
        TKB.xgsrizhi("点击始终同意")
        sleep(2000);
    }
    if (text("温馨提示").exists() || text("同意").exists()) {
        click("同意")
        TKB.xgsrizhi("点击同意")
        sleep(2000);
    }
    if (text("好的").exists()) {
        click("好的")
        TKB.xgsrizhi("点击好的")
        sleep(3000)
    }
    if (text("恭喜注册成功！").exists()) {
        id("com.taobao.taobao:id/aliuser_operation_cancel").findOnce().click()
        TKB.xgsrizhi("点击关闭")
        sleep(3000)
    }
    if (desc("恭喜你获得").exists() && desc("新用户专享礼").exists()) {
        back()
        TKB.xgsrizhi("返回")
        sleep(3000)
    }
    if (text("提示").exists() && text("立即下载").exists()) {
        click(471, 1147)
        TKB.xgsrizhi("点击取消")
        sleep(3000)
    }
    if (TKB.zhaose('if isColor(607,1301,0xfff0cb,80) and isColor(728,1214,0xfe4f22,80) and isColor(848,1265,0xd02c17,80) and isColor(843,1360,0xe9381f,80) and isColor(826,1433,0xf54427,80) and isColor(647,1502,0xfa4c2e,80) and isColor(454,1507,0xfe5131,80) and isColor(373,1490,0xfc4e2f,80) and isColor(287,1439,0xf24021,80) and isColor(249,1372,0xeb3a1f,80) then')) {
        click(168, 351)
        TKB.xgsrizhi("点击关闭")
        sleep(3000)
    }
}

//淘宝登录
function login() {
    toast("淘宝注册登录")
    TKB.xgsrizhi("淘宝注册登录")
    launch(dqbaoming)
    sleep(10000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var zh = "18955553686"
    var yzm = "123456"
    var is_verify = 3
    var is_send = false;
    var sz = {
        "1": [294, 1317],
        "2": [540, 1326],
        "3": [780, 1320],
        "4": [300, 1483],
        "5": [540, 1500],
        "6": [780, 1482],
        "7": [298, 1648],
        "8": [606, 1632],
        "9": [777, 1660],
        "0": [550, 1820]
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            popUp()
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                alert("获取验证码次数过多，请稍后重试");
                TKB.qinglihh();
                launch(dqbaoming);
                sleep(12000);
            }
            if (text("注册/登录").exists()) {
                click("注册/登录")
                TKB.xgsrizhi("点击注册")
                sleep(3000)
            }
            if (text("立即注册").exists()) {
                click("立即注册")
                TKB.xgsrizhi("立即注册")
                sleep(3000)
            }
            if (text("同意协议并一键注册").exists()) {
                click("同意协议并一键注册")
                TKB.xgsrizhi("点击同意协议并一键注册")
                sleep(3000)
            }
            if (text("手机号注册").exists() && text("请输入手机号码").exists()) {
                toast("手机号登录")
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(0, zh)
                TKB.xgsrizhi("输入手机号码" + zh)
                sleep(3000)
                click("同意协议并注册")
                TKB.xgsrizhi("点击同意协议并注册")
                is_send = true
                sleep(3000)
            }
            if (text("安全校验").exists()) {
                TKB.xgsrizhi("截图找色")
                var img = captureScreen();
                var point = findColor(img, "#c8140e");
                var x1 = point.x
                var y1 = point.y
                var point2 = findColor(img, '#ff9801')
                var x2 = point2.x
                var y2 = point2.y
                gesture(2000, [x1, y1], [x2, y2])
            }
            if (textStartsWith("请输入").exists() && (textStartsWith("验证码已发送").exists() || text("重新获取验证码").exists())) {
                if (text("重新获取验证码").exists()) {
                    click("重新获取验证码")
                    TKB.xgsrizhi("重新获取验证码")
                    is_verify--
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                TKB.xgsrizhi("获取验证码")
                sleep(random(10000, 15000))
                yzm = huoquyzm("淘宝网")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    launch(dqbaoming)
                    sleep(8000)
                    is_verify--
                    TKB.xgsrizhi("剩余次数" + is_verify);
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    if (is_send == true) {
                        for (var i = 0; i < 6; i++) {
                            var x = yzm.substr(i, 1);
                            TKB.xgsrizhi(x)
                            click(sz[x][0], sz[x][1]);
                            sleep(1500)
                            TKB.xgsrizhi('第' + (i + 1) + '次')
                        }
                    }
                    is_send = false;
                }
            }
            if (desc("我的淘宝").exists()) {
                desc("我的淘宝").findOnce().click()
                TKB.xgsrizhi("点击我的淘宝")
                sleep(3000)
                if (text("我的订单").exists() && text("查看全部订单").exists()) {
                    toast("登陆成功")
                    TKB.xgsrizhi("登陆成功")
                    return true
                }
            }
            if (text("一键登录").exists() && text("其它账户登录").exists()) {
                click("其它账户登录")
                TKB.xgsrizhi("点击其它账户登录")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//点消息
function clickMessage() {
    popUp()
    if (desc("消息").exists()) {
        popUp()
        desc("消息").findOnce().click()
        TKB.xgsrizhi("点击聊天")
        sleep(3000)
        if (id("com.taobao.taobao:id/msgcenter_router_right").exists()) {
            id("com.taobao.taobao:id/clear_unread_msg_btn").findOnce().click()
            TKB.xgsrizhi("点击清除未读消息")
            sleep(3000)
            if (text("确认").exists() && text("取消").exists()) {
                click("确认")
                TKB.xgsrizhi("点击确认")
                sleep(3000)
            }
            return true
        } else {
            toast("没有消息需要点击")
            TKB.xgsrizhi("没有消息需要点击");
            return false;
        }
    }
}

//淘宝养号
function browseRecommend() {
    TKB.xgsrizhi("淘宝养号")
    var startTime = (new Date()).getTime();
    var browseTime = random(40, 60) * 60 * 1000;
    var taskInterVal = random(5, 10);
    var taskStart = (new Date()).getTime();
    var ifClick = true;
    var ifRecommend = true;
    var notInHome = 0;
    var swipeCount = 0;
    var xs = TKB.zhid(sbip, run_id)
    TKB.xgsrizhi("任务间隔为" + taskInterVal + "分钟");
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > browseTime && ifRecommend) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            popUp()
            if ((new Date()).getTime() - taskStart > taskInterVal * 60 * 1000 && ifRecommend) {
                TKB.xgsrizhi("执行刷分类任务")
                if (xs['是否关键词养号'] == '是') {
                    var taskList = ['看分类', '搜索关键词任务', '看直播']
                    browseTime -= ((new Date()).getTime() - startTime)
                    var taski = random(0, taskList.length - 1);
                    TKB.xgsrizhi("执行" + taskList[taski] + "任务");
                    switch (taskList[taski]) {
                        case '看分类':
                            sort();
                            break;
                        case '搜索关键词任务':
                            searchItem();
                            break;
                        case '看直播':
                            browseLiveStream();
                            break;
                        default:
                            break;
                    }
                    taskList.splice(taski, 1);
                } else {
                    var taskList = ['看分类', '看直播']
                    browseTime -= ((new Date()).getTime() - startTime)
                    var taski = random(0, taskList.length - 1);
                    TKB.xgsrizhi("执行" + taskList[taski] + "任务");
                    switch (taskList[taski]) {
                        case '看分类':
                            sort();
                            break;
                        case '看直播':
                            browseLiveStream();
                            break;
                        default:
                            break;
                    }
                    taskList.splice(taski, 1);
                }
                taskStart = (new Date()).getTime();
                taskInterVal = random(5, 10);
                ifClick = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime();
                back();
                sleep(2000);
            }
            if (swipeCount > 80 || ifClick) {
                if (desc("首页").exists()) {
                    desc("首页").findOnce().click()
                    TKB.xgsrizhi("点击首页")
                    sleep(3000)
                    click("首页")
                    TKB.xgsrizhi("点击首页")
                    sleep(5000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            for (let i = 0; i < random(2, 3); i++) {
                TKB.xgsrizhi("滑动")
                swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                sleep(1500);
            }
            swipeCount++;
            var contents = textStartsWith("¥").find().filter(function(w) {
                return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
            })
            if (contents.length > 0) {
                for (let i = 0; i < contents.length; i += random(2, 3)) {
                    // click(contents[i].bounds().centerX(), contents[i].bounds().centerY())
                    contents[i].parent().click();
                    TKB.xgsrizhi("点击商品");
                    sleep(6000)
                    silding()
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(6000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在淘宝页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(15000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }

}

//直播
function browseLiveStream() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("直播任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > 10 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                back();
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (desc("微淘").exists()) {
                    desc("微淘").findOnce().click();
                    TKB.xgsrizhi("点击微淘")
                    sleep(2000);
                }
                click(539, 260);
                ifClick = false;
                swipeCount = 0;
            }
            var liveStreams = className("android.widget.ImageView").find().filter(function(w) {
                return w.bounds().width() === 118 && w.bounds().top < w.bounds().bottom
            });
            if (liveStreams.length > 0) {
                liveStreams[random(0, liveStreams.length - 1)].click();
                sleep(2000);
                var liveStart = (new Date()).getTime();
                var sleepTime = random(30, 60);
                TKB.xgsrizhi("观看直播时间为" + sleepTime);
                while (true) {
                    if ((new Date()).getTime() - liveStart > sleepTime * 1000) {
                        back();
                        sleep(2000);
                        popUp();
                        TKB.xgsrizhi("退出直播间");
                        break;
                    }
                }
                for (let i = 0; i < random(1, 2); i++) {
                    swipe(500, 1700, 500, 200, 1000);
                    sleep(2000);
                }
                sleep(2000);
            } else {
                TKB.xgsrizhi("找不到直播间第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在淘宝页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
    return true

}

//刷分类
function sort() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("开始刷分类任务")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(30, 90) * 1000) {
                TKB.xgsrizhi("时间够了退出")
                back()
                TKB.xgsrizhi("返回到商品分类")
                sleep(3000)
                back()
                TKB.xgsrizhi("返回到主页")
                return true
            }
            if (swipeCount > 80 || ifClick) {
                if (desc("首页").exists()) {
                    id("com.taobao.taobao:id/iv_btn_background").findOnce().parent().click()
                    TKB.xgsrizhi("点击首页")
                    sleep(3000);
                    if (text("首页").exists()) {
                        click(1018, 251)
                        TKB.xgsrizhi("点击分类")
                        sleep(5000)
                    }
                }
                if (text("商品分类").exists()) {
                    if (className("android.widget.FrameLayout").exists()) {
                        var tabViews = className("android.widget.FrameLayout").find().filter(function(w) {
                            return w.bounds().width() === 230 && w.bounds().top < w.bounds().bottom
                        });
                        tabViews[random(0, tabViews.length - 1)].click();
                        TKB.xgsrizhi("随机点击分类")
                        sleep(3000)
                        var sortViews = className("android.widget.FrameLayout").find().filter(function(w) {
                            return w.bounds().height() === 253 && w.bounds().top < w.bounds().bottom
                        });
                        sortViews[random(0, sortViews.length - 1)].click();
                        TKB.xgsrizhi("随机点击分类中的分类")
                        sleep(4000);
                    }
                }
                ifClick = false;
                swipeCount = 0;
            }
            for (let i = 0; i < random(2, 3); i++) {
                TKB.xgsrizhi("滑动")
                swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                sleep(1500);
            }
            var contents = id("com.taobao.taobao:id/auction_layout").find().filter(function(w) {
                return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
            })
            if (contents.length > 0) {
                for (let i = 1; i < contents.length; i += random(2, 3)) {
                    click(contents[i].bounds().centerX(), contents[i].bounds().centerY())
                        // contents[i].click();
                    TKB.xgsrizhi("点击商品");
                    sleep(6000)
                    silding()
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在淘宝页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }

    }
}

//搜索关键词
function searchItem() {
    TKB.xgsrizhi("搜索关键词养号")
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    var keyword, keywords, word
        // var xs = TKB.zhid(sbip, run_id)
        // if (xs['关键词'] == 0 || xs['关键词'] == '0' || xs['关键词'] == undefined) {
        //     TKB.xgsrizhi("未获取关键词")
        // } else {
        //     keywords = xs['关键词'];
        //     word = keywords.split("|")
        //     keyword = word[random(0, word.length - 1)]
        //     TKB.xgsrizhi("获取到的关键词为" + keyword);
        // }
    var keyword = '苹果'
    TKB.xgsrizhi("搜索关键词任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(5, 10) * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (desc("首页").exists()) {
                    id("com.taobao.taobao:id/iv_btn_background").findOnce().parent().click()
                    TKB.xgsrizhi("点击首页")
                    sleep(3000)
                }
                if (desc("搜索").exists()) {
                    desc("搜索").findOnce().click()
                    TKB.xgsrizhi("点击搜索栏")
                    sleep(5000)
                    setText(0, keyword)
                    TKB.xgsrizhi("输入关键词")
                    sleep(5000)
                    TKB.xgsrizhi("点击搜索")
                    click("搜索")
                    sleep(5000)
                }
                ifClick = false;
                swipeCount = 0;
            }
            if (id("com.taobao.taobao:id/auction_layout").exists) {
                for (let i = 0; i < random(2, 3); i++) {
                    TKB.xgsrizhi("滑动")
                    swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                    sleep(1500);
                }
                swipeCount++
                var contents = id("com.taobao.taobao:id/auction_layout").find().filter(function(w) {
                    return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
                })
                if (contents.length > 0) {
                    for (let i = 1; i < contents.length; i += random(2, 3)) {
                        click(contents[i].bounds().centerX(), contents[i].bounds().centerY())
                            // contents[i].click();
                        TKB.xgsrizhi("点击商品");
                        sleep(6000)
                        silding()
                    }
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }

            if (notInHome >= 3) {
                TKB.xgsrizhi("不在淘宝页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
    back()
    sleep(2000);
    if (id("com.taobao.taobao:id/btn_go_back").exists()) {
        id("com.taobao.taobao:id/btn_go_back").findOnce().click();
        sleep(2000);
        TKB.xgsrizhi("返回主页")
    }
}
//滑动
function silding() {
    popUp()
    if (text("店铺").exists() && text("收藏").exists() && text("客服").exists()) {
        popUp()
        TKB.xgsrizhi("进入商品页面")
        sleep(2000)
        swipe(1000, 600, random(300, 200), 600, 1000)
        sleep(3000)
        if (id("com.taobao.taobao:id/new_gallery_text_indicator").exists()) {
            var pageContent = id("com.taobao.taobao:id/new_gallery_text_indicator").findOnce().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum - 1; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(1000, 600, random(300, 200), 600, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(20, 30)
        var pageStart = (new Date()).getTime()
        while (true) {
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                TKB.xgsrizhi("图文内容滑动")
                swipe(random(700, 800), 1200, random(700, 800), 400, 1000)
                sleep(2000)
            } else {
                break
            }
        }
        sleep(3000)
        TKB.xgsrizhi("返回到主页")
        back()
        sleep(6000)
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
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续淘宝任务")
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
                    if (files.exists("/sdcard/观沧海.mp3") == false) {
                        TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************对接服务器*****************************************************************

//执行淘宝
function zxtb() {
    try {
        toastLog("执行淘宝任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var app_list = [
                ['手机淘宝', '9.10.0'],
                // ['QQ浏览器', '10.5.1.7230']
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
            var dl = login()
            if (dl == true) {
                clickMessage()
                if (fun == '养号') {
                    browseRecommend()
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

zxtb()
    // browseRecommend()
    // clickMessage()
    // login()
    // searchItem()
    // sort()
    // browseLiveStream()