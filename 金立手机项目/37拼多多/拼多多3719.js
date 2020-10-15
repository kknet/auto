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
var dqbaoming = "com.xunmeng.pinduoduo" //该项目包名
    // var qqb_pk = 'com.tencent.mtt'
var xmxh = "37" //项目序号
var tabList = ['手机', '百货', '鞋靴', '食品', '运动', '家装', '运动', '电器', '美妆', '家纺', '车品', '美妆']
var taskList = ['看分类', '搜索关键词任务']

//*******************************************************微博项目 *****************************************************************
//所有判断和弹窗
function popUp() {
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (id("com.xunmeng.pinduoduo:id/b4f").exists()) {
        id("com.xunmeng.pinduoduo:id/b4f").findOnce().click()
        TKB.xgsrizhi("关闭广告")
        sleep(3000)
    }
    if (text("同意").exists()) {
        click("同意")
        TKB.xgsrizhi("点击同意")
        sleep(3000)
    }
    if (id("com.xunmeng.pinduoduo:id/eh").exists()) {
        id("com.xunmeng.pinduoduo:id/eh").findOnce().click()
        TKB.xgsrizhi("关闭红包")
        sleep(3000)
    }
    if (text('安全验证').exists()) {    
        TKB.xgsrizhi('安全验证')
        click('安全验证')
        sleep(2000)
    }
    if (text('前往验证').exists()) {    
        TKB.xgsrizhi('前往验证')    
        click('前往验证')    
        sleep(2000)
    }
}

//拼多多登录
function login() {
    TKB.xgsrizhi("拼多多登录")
    launch(dqbaoming)
    sleep(10000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var zh = "18955553686"
    var yzm = "123456"
    var is_verify = 3
    var is_send = false;
    var a = 0
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
                a = 0
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                alert("获取验证码次数过多，请稍后重试");
                TKB.qinglihh();
                launch(dqbaoming);
                sleep(12000);
                is_verify = 3;
                a = 0
            }
            if (text("首页").exists() && text("个人中心").exists()) {
                text("个人中心").findOnce().parent().click()
                TKB.xgsrizhi("点击个人中心")
                sleep(5000)
                if (id("com.xunmeng.pinduoduo:id/bc4").exists() && text("我的拼小圈").exists()) {
                    toast("登录成功")
                    TKB.xgsrizhi("登录成功")
                    sleep(2000)
                    return true
                }
                if (id("com.xunmeng.pinduoduo:id/bc4").exists() && text("点击登录").exists()) {
                    click("点击登录")
                    TKB.xgsrizhi("点击登录")
                    sleep(3000)
                }
            }
            if (id("com.xunmeng.pinduoduo:id/ewr").exists() && text("请使用其它方式登录").exists() && a == 0) {
                toast("手机号登录")
                if (id("com.xunmeng.pinduoduo:id/ewr").exists() && text("请使用其它方式登录").exists()) {
                    id("com.xunmeng.pinduoduo:id/ewr").findOnce().click()
                        // click('请使用其它方式登录')
                    TKB.xgsrizhi("点击其它方式登录")
                    sleep(5000)
                }
                if (text('手机号登录').exists() && text('QQ登录').exists()) {
                    // id('com.xunmeng.pinduoduo').findOnce().click()
                    click("手机号登录")
                    TKB.xgsrizhi("点击手机号登录")
                    sleep(5000)
                }
                if ((text("请输入手机号").exists() || text("请输入手机号码").exists()) && text("同意协议并登录").exists()) {
                    TKB.xgsrizhi("去获取号码")
                    zh = TKB.benjitel()
                    if (zh == false) {
                        TKB.xgsrizhi("没有获取到手机号")
                        TKB.qinglihh(dqbaoming)
                        sleep(10000)
                        launch(dqbaoming)
                        is_verify--
                        TSD = (new Date()).getTime()
                        a = 0
                        continue
                    }
                    // 上传该应用注册的手机号
                    TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                    id("com.xunmeng.pinduoduo:id/ah2").findOnce().setText(zh)
                    TKB.xgsrizhi("输入手机号码" + zh)
                    sleep(3000)
                    if (text("同意协议并登录").exists()) {
                        click("同意协议并登录")
                        TKB.xgsrizhi("点击同意协议并登录")
                    }
                    is_send = true
                    sleep(3000)
                }
                if (text("本机号码一键登录").exists()) {
                    id("com.xunmeng.pinduoduo:id/bvw").findOnce().click()
                    TKB.xgsrizhi("点击本机号码一键登录")
                    is_send = true
                    sleep(2000)
                }
                a = 1
                sleep(3000)
            }
            if (text("请输入验证码并登录").exists()) {
                if (text("重新发送验证码").exists()) {
                    click("重新发送验证码")
                    TKB.xgsrizhi("重新获取验证码")
                    is_verify--
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                TKB.xgsrizhi("获取验证码")
                sleep(random(10000, 15000))
                yzm = TKB.huoquyzm("拼多多")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    launch(dqbaoming)
                    sleep(8000)
                    is_verify--
                    TKB.xgsrizhi("剩余次数" + is_verify);
                    TSD = (new Date()).getTime()
                    a = 0
                    continue
                } else {
                    if (is_send == true) {
                        TKB.xgsrizhi("请输入验证码" + yzm)
                        id("com.xunmeng.pinduoduo:id/ahc").findOnce().setText(yzm)
                        sleep(2000)
                    }
                    is_send = false;
                }
            }
            if (text("手机号登录").exists() && text("同意协议并登录").exists()) {
                if (text("发送验证码").exists() && is_send == false) {
                    click("发送验证码")
                    TKB.xgsrizhi("重新获取验证码")
                    is_verify--
                    is_send = true;
                    sleep(random(10000, 15000))
                }
                if (text("发送验证码").exists()) {
                    click("发送验证码")
                    TKB.xgsrizhi("点击发送验证码")
                }
                sleep(random(10000, 15000))
                yzm = TKB.huoquyzm("拼多多")
                TKB.xgsrizhi("获取验证码")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    launch(dqbaoming)
                    sleep(8000)
                    is_verify--
                    TKB.xgsrizhi("剩余次数" + is_verify);
                    TSD = (new Date()).getTime()
                    a = 0
                    continue
                } else {
                    if (is_send == true) {
                        TKB.xgsrizhi("请输入验证码" + yzm)
                        id("com.xunmeng.pinduoduo:id/ahb").findOnce().setText(yzm)
                        sleep(2000)
                        click("同意协议并登录")
                        TKB.xgsrizhi("点击同意协议并登录")
                        sleep(5000)
                    }
                    is_send = false;
                }
            }
            if (text("领券中心").exists()) {
                back()
                TKB.xgsrizhi("返回")
                sleep(3000)
            }
            popUp()
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//点消息
function clickMessage() {
    if (id("com.xunmeng.pinduoduo:id/dwr").exists()) {
        popUp()
        text("聊天").findOnce().parent().click()
        TKB.xgsrizhi("点击聊天")
        sleep(3000)
        if (id("com.xunmeng.pinduoduo:id/ems").exists()) {
            var messagelist = id("com.xunmeng.pinduoduo:id/ems").find();
            var length = messagelist.size();
            for (let i = 0; i < length; i++) {
                click(messagelist[i].bounds().centerX(), messagelist[i].bounds().centerY())
                TKB.xgsrizhi("点击第" + i + "个消息");
                sleep(3000);
                back()
                sleep(3000);
                TKB.xgsrizhi("返回聊天页面");
            }
        }
        return true
    } else {
        toast("没有消息需要点击")
        TKB.xgsrizhi("没有消息需要点击");
        return false;
    }
}

//滑动
function silding() {
    popUp()
    if (text("店铺").exists() && text("收藏").exists() && text("客服").exists()) {
        popUp()
        TKB.xgsrizhi("进入商品页面")
        if (id("com.xunmeng.pinduoduo:id/iv_float_window_close").exists()) {
            click(id("com.xunmeng.pinduoduo:id/iv_float_window_close").findOnce().bounds().centerX(), id("com.xunmeng.pinduoduo:id/iv_float_window_close").findOnce().bounds().centerY())
            TKB.xgsrizhi("关闭直播悬浮窗")
            sleep(3000)
        }
        if (id("com.xunmeng.pinduoduo:id/ea_").exists()) {
            var pageContent = id("com.xunmeng.pinduoduo:id/ea_").findOnce().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum - 1; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(1000, 450, random(300, 200), 450, 1000)
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

//养号
function browseRecommend() {
    TKB.xgsrizhi("拼多多养号")
    var startTime = (new Date()).getTime();
    var browseTime = random(40, 60) * 60 * 1000;
    var tabTime = random(10, 20) * 60 * 1000;
    var tabInterval = random(5, 10);
    var taskInterVal = random(5, 10);
    var taskStart = (new Date()).getTime();
    var ifClick = true;
    var ifRecommend = true;
    var notInHome = 0;
    var swipeCount = 0;
    var tabName = "推荐";
    var xs = TKB.zhid(sbip, run_id)
    TKB.xgsrizhi("任务间隔为" + taskInterVal + "分钟");
    TKB.xgsrizhi("类目任务间隔为" + tabInterval + "分钟");
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
                        default:
                            break;
                    }
                    taskList.splice(taski, 1);
                } else {
                    sort()
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
            if ((new Date()).getTime() - startTime > tabTime && !ifRecommend) {
                TKB.xgsrizhi("时间够了退出类目词任务")
                ifClick = true;
                tabName = "推荐";
                ifRecommend = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime();
                sleep(2000);
            }
            if ((new Date()).getTime() - startTime > tabInterval * 60 * 1000 &&
                ifRecommend && tabList.length) {
                tabInterval = random(5, 10);
                browseTime -= ((new Date()).getTime() - startTime)
                startTime = (new Date()).getTime();
                TKB.xgsrizhi("类目词发生变化");
                ifClick = true;
                ifRecommend = false;
                var tabi = random(0, tabList.length - 1);
                tabName = tabList[tabi];
                TKB.xgsrizhi("类目词为" + tabName);
                tabList.splice(tabi, 1);
            }
            if (swipeCount > 80 || ifClick) {
                if (text("首页").exists()) {
                    text("首页").findOnce().parent().click()
                    TKB.xgsrizhi("点击首页")
                    sleep(3000)
                    className("android.widget.TextView").text("推荐").findOnce().click()
                    TKB.xgsrizhi("点击推荐")
                    sleep(5000);
                }
                if (!ifRecommend) {
                    if (text(tabName).exists()) {
                        click(tabName)
                        TKB.xgsrizhi("点击" + tabName);
                        sleep(2000);
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
            swipeCount++;
            var contents = id("com.xunmeng.pinduoduo:id/b8j").find().filter(function(w) {
                return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
            })
            if (contents.length > 0) {
                for (let i = 0; i < contents.length; i += random(2, 3)) {
                    click(contents[i].bounds().centerX(), contents[i].bounds().centerY())
                        // contents[i].parent().click();
                    TKB.xgsrizhi("点击商品");
                    sleep(6000)
                    if (textStartsWith("原商品已下架").exists()) {
                        back()
                        TKB.xgsrizhi("原商品已下架,返回到主页");
                        sleep(3000)
                    } else {
                        silding()
                    }
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(6000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在拼多多页面3次 重新启动");
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
                return true
            }
            if (swipeCount > 80 || ifClick) {
                if (text("分类").exists() && text("首页").exists()) {
                    text("分类").findOnce().parent().click()
                    TKB.xgsrizhi("点击商城")
                    sleep(3000);
                }
                if (id("com.xunmeng.pinduoduo:id/eh3").exists()) {
                    var tabViews = id("com.xunmeng.pinduoduo:id/eh3").find();
                    tabViews[random(0, tabViews.size() - 1)].parent().click();
                    sleep(3000)
                    TKB.xgsrizhi("随机点击分类")
                    var sortViews = id("com.xunmeng.pinduoduo:id/b8n").find().filter(function(w) {
                        return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
                    })
                    sortViews[random(0, sortViews.length - 1)].parent().click();
                    TKB.xgsrizhi("随机点击分类中的分类")
                    sleep(4000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            for (let i = 0; i < random(2, 3); i++) {
                TKB.xgsrizhi("滑动")
                swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                sleep(1500);
            }
            var contents = id("com.xunmeng.pinduoduo:id/crc").findOnce().children()
            contents.splice(0, 1)
            if (contents.size() > 0) {
                for (let i = 0; i < contents.size(); i += random(2, 3)) {
                    contents[i].click();
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
                TKB.xgsrizhi("不在拼多多页面3次 重新启动");
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
    var xs = TKB.zhid(sbip, run_id)
    if (xs['关键词'] == 0 || xs['关键词'] == '0' || xs['关键词'] == undefined) {
        TKB.xgsrizhi("未获取关键词")
    } else {
        keywords = xs['关键词'];
        word = keywords.split("|")
        keyword = word[random(0, word.length - 1)]
        TKB.xgsrizhi("获取到的关键词为" + keyword);
    }
    TKB.xgsrizhi("搜索关键词任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(5, 10) * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (text("首页").exists()) {
                    text("首页").findOnce().parent().click()
                    TKB.xgsrizhi("点击首页")
                    sleep(3000)
                }
                if (id("com.xunmeng.pinduoduo:id/a2e").exists()) {
                    id("com.xunmeng.pinduoduo:id/a2e").findOnce().click()
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
            if (id("com.xunmeng.pinduoduo:id/b8j").exists) {
                for (let i = 0; i < random(2, 3); i++) {
                    TKB.xgsrizhi("滑动")
                    swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                    sleep(1500);
                }
                swipeCount++;
                var contents = id("com.xunmeng.pinduoduo:id/b8j").find().filter(function(w) {
                    return w.bounds().left < w.bounds().right && w.bounds().top < w.bounds().bottom
                })
                if (contents.length > 0) {
                    for (let i = 0; i < contents.length; i += random(2, 3)) {
                        click(contents[i].bounds().centerX(), contents[i].bounds().centerY())
                            // contents[i].parent().click();
                        TKB.xgsrizhi("点击商品");
                        sleep(6000)
                        if (textStartsWith("原商品已下架").exists()) {
                            back()
                            TKB.xgsrizhi("原商品已下架,返回到主页");
                            sleep(3000)
                        } else {
                            silding()
                        }
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
                TKB.xgsrizhi("不在拼多多页面3次 重新启动");
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
    if (id("com.xunmeng.pinduoduo:id/dbu").exists()) {
        id("com.xunmeng.pinduoduo:id/dbu").findOnce().click();
        sleep(2000);
        TKB.xgsrizhi("返回主页")
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
                        TKB.xgsrizhi("继续抖音任务")
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

//执行拼多多
function zxpdd() {
    try {
        toastLog("执行拼多多任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var app_list = [
                ['拼多多', '5.24.0'],
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
                if (fun == "养号") {
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

zxpdd()
    // searchItem()
    // browseRecommend()
    // clickMessage()
    // login()