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
// var dqbaoming = "com.taobao.taobao" //该项目包名 
var qqb_pk = 'com.tencent.mtt'
var xmxh = "38" //项目序号


//*******************************************************微博项目 *****************************************************************


//所有判断和弹窗
function popUp() {
    while (text("始终同意").exists()) {
        click("始终同意");
        TKB.xgsrizhi("点击始终同意")
        sleep(2000);
    }
    if (text("取消").exists() && text("开启位置信息开关").exists()) {
        click("取消");
        TKB.xgsrizhi("取消")
        sleep(2000);
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("点击以后再说")
        sleep(2000);
    }
    if (text("知道了").exists()) {
        click("知道了");
        TKB.xgsrizhi("点击知道了")
        sleep(2000);
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.xgsrizhi("点击我知道了")
        sleep(2000);
    }
    if (text("取消").exists() && text("更新").exists()) {
        click("取消");
        TKB.xgsrizhi("点击取消")
        sleep(2000);
    }
    if (text("继续").exists()) {
        click("继续");
        TKB.xgsrizhi("点击继续")
        sleep(2000);
    }
    if (text("取消").exists() && text("提示").exists()) {
        click("取消");
        TKB.xgsrizhi("豌豆荚下载安装包提示")
        sleep(2000);
    }
    if (text("取消").exists() && text("提示").exists()) {
        click("取消");
        TKB.xgsrizhi("豌豆荚下载安装包提示")
        sleep(2000);
    }
    if (text("禁止安装").exists()) {
        click("确认开启")
        TKB.xgsrizhi("点击确认开启")
        sleep(2000);
    }
}
/**
 * 下载墓碑以及安装
 */
function download() {
    var startTime = (new Date()).getTime()
    //第三代图标链接
    // url = 'https://wws.lanzous.com/iK79wfj0xkh'
    // password = '5ezp'
    shezhi()
    wandoujia()
    //第四代图标链接
    shezhi()
    wandoujia()
    url = 'https://wws.lanzous.com/iieJ4fm0bwf'
    password = '82kk'
    setClip(url)
    var z = 0
    var a = 0
    var tep = 0
    launch(qqb_pk)
    sleep(8000);
    while (1) {
        try {
            popUp();
            if ((new Date()).getTime() - startTime > 20 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if (z == 0) {
                if (url != undefined) {
                    if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                        if (text('搜索或输入网址').exists()) {
                            text('搜索或输入网址').findOnce().parent().click()
                        } else {
                            id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                        }
                        TKB.xgsrizhi("点击搜索栏");
                        sleep(3000)
                    }

                    if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                        id('com.tencent.mtt:id/search_frame_input_bar').longClick()
                        TKB.xgsrizhi("长按搜索栏");
                        sleep(3000)
                    }
                    if (text('粘贴').exists()) {
                        text('粘贴').findOnce().parent().click()
                        TKB.xgsrizhi("点击粘贴");
                        sleep(3000)
                    }
                    if (text('进入').exists()) {
                        text('进入').findOnce().click()
                        TKB.xgsrizhi("点击进入");
                        sleep(8000);
                    }
                    if (text("立即下载").exists() && textStartsWith("mubei").exists()) {
                        click("立即下载")
                        TKB.xgsrizhi("点击立即下载");
                        sleep(8000);
                    }
                    if (textStartsWith("下载").exists() && textStartsWith("mubei").exists()) {
                        click("下载( 12.9 M )")
                        TKB.xgsrizhi("点击下载");
                        sleep(5000)
                    }
                    if (text("密码").exists() && text("输入密码").exists()) {
                        text("输入密码").findOnce().setText(password)
                        TKB.xgsrizhi("输入验证码");
                        sleep(5000)
                        click("验证")
                        TKB.xgsrizhi("点击验证");
                        sleep(8000)
                    }
                    if (text('取消').exists() && text('去设置').exists()) {
                        click('去设置')
                        TKB.xgsrizhi("去设置");
                        sleep(3000)
                        openAppSetting(getPackageName("QQ浏览器"))
                    }
                    if (text('应用信息').exists() && text('卸载').exists() && text('权限').exists()) {
                        TKB.xgsrizhi('点击权限')
                        click('权限')
                        sleep(3000)
                    }
                    if (text('读取/修改存储器数据').exists() && text('读取联系人').exists()) {
                        if (text('关').exists()) {
                            TKB.xgsrizhi('点击打开')
                            click('关')
                            sleep(2000)
                        } else {
                            TKB.xgsrizhi('下滑')
                            swipe(500, 1700, 500, 400, 800)
                            sleep(2000)
                        }
                    }
                    if (text("立即下载").exists() && textStartsWith("mubei").exists()) {
                        click("立即下载")
                        TKB.xgsrizhi("点击立即下载");
                        sleep(15000);
                    }
                    if (text("其他方式（有拦截风险）").exists() && text("腾讯应用宝下载（防拦截）").exists()) {
                        click("其他方式（有拦截风险）")
                        TKB.xgsrizhi("其他方式（有拦截风险）");
                        sleep(5000)
                    }
                    if (text("普通下载（有拦截风险）").exists() && text("腾讯应用宝下载（防拦截）").exists()) {
                        click("普通下载（有拦截风险）")
                        TKB.xgsrizhi("普通下载（有拦截风险）");
                        sleep(5000)
                    }
                    if (text("直接下载").exists()) {
                        click("直接下载")
                        TKB.xgsrizhi("点击直接下载");
                        sleep(2000)
                    }
                    if (text("普通下载").exists()) {
                        click("普通下载")
                        TKB.xgsrizhi("点击普通下载");
                        sleep(2000)
                    }
                    if (text("返回重试").exists()) {
                        click("返回重试")
                        TKB.xgsrizhi("点击返回重试");
                        sleep(2000)
                    }
                    if (text("墓碑").exists() && text("软件包安装程序").exists()) {
                        toast("下载成功")
                        TKB.qinglihh()
                        sleep(3000)
                        TKB.pdbb('墓碑', '1.0.2')
                        sleep(5000)
                        z = 1
                    }
                } else {
                    toast("未获取到链接")
                    TKB.xgsrizhi("未获取到链接");
                    sleep(5000);
                }
            } else if (z == 1) {
                popUp()
                if (tep == 0) {
                    launch('com.gionee.filemanager')
                    TKB.xgsrizhi("启动文件管理");
                    a = 0
                    tep = 1
                    sleep(5000)
                }
                if (text("分类浏览").exists() && text("目录浏览").exists()) {
                    text("分类浏览").findOnce().parent().click()
                    TKB.xgsrizhi("点击分类浏览");
                    sleep(3000)
                }
                if (id('com.gionee.filemanager:id/category_apk').exists()) {
                    id('com.gionee.filemanager:id/category_apk').findOnce().click()
                    TKB.xgsrizhi("点击安装包");
                    sleep(3000)
                }
                if (text("更多").exists() && text("搜索").exists() && a == 0) {
                    click("更多")
                    TKB.xgsrizhi("点击更多");
                    sleep(5000)
                    click(549, 1835)
                    sleep(5000)
                    if (text("排序").exists()) {
                        click(544, 1838)
                        TKB.xgsrizhi("日期(新 - 旧)");
                        a = 1
                        sleep(3000)
                    }
                }
                if (textStartsWith("mubei").exists() && !text("立即下载").exists()) {
                    click('12.9 MB', 0)
                    var ss = text('12.9 MB').findOnce().bounds()
                    if (ss.centerY() < 730 && ss.centerY() > 300) {
                        click(ss.centerX(), ss.centerY());
                        sleep(2000)
                    }
                    TKB.xgsrizhi("点击墓碑安装包");
                    sleep(3000)
                }
                if (text("始终").exists() && text("仅此一次")) {
                    click("仅此一次")
                    TKB.xgsrizhi("点击仅此一次")
                    sleep(3000)
                }
                if (text("墓碑").exists() && text("软件包安装程序").exists()) {
                    click("安装")
                    TKB.xgsrizhi("点击安装");
                    sleep(15000)
                }
                if (textContains("发现木马病毒").exists()) {
                    alert("发现木马病毒")
                }
                if (text("删除安装包").exists()) {
                    click("取消")
                    TKB.xgsrizhi("点击取消");
                    sleep(3000)
                }
                if (desc("图标").exists() && text("墓碑").exists()) {
                    TKB.xgsrizhi("qq浏览器页面");
                    back()
                    sleep(3000)
                    back()
                    sleep(200)
                    back()
                    sleep(3000)
                }
                if (text("应用安装成功").exists() && text("完成").exists() && text("打开").exists()) {
                    toast("安装成功")
                    TKB.xgsrizhi("安装成功")
                    click("关")
                    sleep(3000)
                    if (text("取消").exists() && text("拒绝").exists()) {
                        click("取消")
                        sleep(3000)
                    }
                    click("完成")
                    TKB.xgsrizhi("点击完成")
                    sleep(3000)
                    TKB.qinglihh()
                    return true
                }
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}
/**
 * 安装
 */
function install() {
    launch('com.gionee.filemanager')
    TKB.xgsrizhi("启动文件管理");
    var a = 0
    sleep(5000)
    while (true) {
        try {
            popUp()
            if (text("分类浏览").exists() && text("目录浏览").exists()) {
                text("分类浏览").findOnce().parent().click()
                TKB.xgsrizhi("点击分类浏览");
                sleep(3000)
            }
            if (id('com.gionee.filemanager:id/category_apk').exists()) {
                id('com.gionee.filemanager:id/category_apk').findOnce().click()
                TKB.xgsrizhi("点击安装包");
                sleep(3000)
            }
            if (text("更多").exists() && text("搜索").exists() && a == 0) {
                click("更多")
                TKB.xgsrizhi("点击更多");
                sleep(5000)
                click(549, 1835)
                sleep(5000)
                if (text("排序").exists()) {
                    click(544, 1838)
                    TKB.xgsrizhi("日期(新 - 旧)");
                    a = 1
                    sleep(3000)
                }
            }
            if (textStartsWith("mubei").exists() && !text("立即下载").exists()) {
                click(528, 449)
                TKB.xgsrizhi("点击墓碑安装包");
                sleep(3000)
            }
            if (text("始终").exists() && text("仅此一次")) {
                click("仅此一次")
                TKB.xgsrizhi("点击仅此一次")
                sleep(3000)
            }
            if (text("墓碑").exists() && text("软件包安装程序").exists()) {
                click("安装")
                TKB.xgsrizhi("点击安装");
                sleep(15000)
            }
            if (textContains("发现木马病毒").exists()) {
                alert("发现木马病毒")
            }
            if (text("删除安装包").exists()) {
                click("取消")
                TKB.xgsrizhi("点击取消");
                sleep(3000)
            }
            if (desc("图标").exists() && text("墓碑").exists()) {
                TKB.xgsrizhi("qq浏览器页面");
                back()
                sleep(3000)
                back()
                sleep(200)
                back()
                sleep(3000)
            }
            if (text("应用安装成功").exists() && text("完成").exists() && text("打开").exists()) {
                toast("安装成功")
                TKB.xgsrizhi("安装成功")
                click("关")
                sleep(3000)
                if (text("取消").exists() && text("拒绝").exists()) {
                    click("取消")
                    sleep(3000)
                }
                click("完成")
                TKB.xgsrizhi("点击完成")
                sleep(3000)
                TKB.qinglihh()
                return true
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }

}
/**
 * 豌豆荚设置
 */
function wandoujia() {
    TKB.xgsrizhi('豌豆荚设置')
    launch('com.wandoujia.phoenix2')
    sleep(8000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                TKB.xgsrizhi('时间够了退出')
                TKB.qinglihh()
                return false
            }
            if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
                TKB.xgsrizhi('超时没清理成功')
                back()
                sleep(1000)
                TKB.qinglihh('com.wandoujia.phoenix2')
                sleep(3000)
                launch('com.wandoujia.phoenix2')
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            popUp()
            if (text('取消').exists() && (text('更新').exists() || text('立即安装').exists() || text('安装').exists())) {
                TKB.xgsrizhi('更新')
                click('取消')
                sleep(2000)
            }
            if (text('应用管理').exists() && id('com.wandoujia.phoenix2:id/a9q').exists() && text('升级').exists()) {
                TKB.xgsrizhi('返回')
                //应用下载界面
                back()
                sleep(1000)
            }
            if (text('你下载了这些应用，不要忘了安装').exists() && id('com.wandoujia.phoenix2:id/agj').exists()) {
                TKB.xgsrizhi('关闭')
                id('com.wandoujia.phoenix2:id/agj').click()
                sleep(2000)
            }
            if (text("我的").exists() && text("精选").exists() && id('com.wandoujia.phoenix2:id/g8').exists()) {
                click(980, 1826)
                TKB.xgsrizhi("点击我的")
                sleep(3000)
                if (text("垃圾清理").exists() && id('com.wandoujia.phoenix2:id/a0k').exists()) {
                    swipe(random(700, 800), 1500, random(700, 800), 700, 1000)
                    sleep(3000)
                    click('设置')
                    TKB.xgsrizhi("点击设置")
                    sleep(10000)
                }
            }
            if (text("设置").exists() && id('com.wandoujia.phoenix2:id/ec').exists()) {
                swipe(random(700, 800), 1500, random(700, 800), 300, 1000)
                sleep(3000)
                swipe(random(700, 800), 1500, random(700, 800), 300, 1000)
                sleep(3000)
                if (text("安装完成页推荐").exists() && text("清洗安装应用").exists()) {
                    var ss = text("安装完成页推荐").findOnce().bounds();
                    if (ss.centerY() > 300, ss.centerY() < 1600) {
                        swipe(1020, ss.centerY() + 40, 935, ss.centerY() + 40, 800)
                        TKB.xgsrizhi("滑动安装完成页推荐")

                    }
                    sleep(3000)
                    var xx = text("清洗安装应用").findOnce().bounds();
                    if (xx.centerY() > 300, xx.centerY() < 1600) {
                        swipe(1020, xx.centerY() + 40, 935, xx.centerY() + 40, 800)
                        TKB.xgsrizhi("滑动清洗安装应用")
                    }
                    sleep(3000)
                    break
                }
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}
/**
 * 设置锁屏
 */
function shezhi() {
    TKB.xgsrizhi('设置锁屏')
    launch('com.android.settings')
    sleep(2000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        try {
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi('超时')
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launch('com.android.settings')
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text('设置').exists() && text('特色功能').exists() && text('安全').exists()) {
                TKB.xgsrizhi('设置主页')
                var ss = text('安全').findOnce().bounds()
                if (ss.centerY() < 1800 && ss.centerY() > 300) {
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                }
            } else if (text('设置').exists() && !text('更多设置').exists()) {
                TKB.xgsrizhi('下滑')
                swipe(600, 1700, 500, 500, 1000)
                random(1500, 3000)
            }
            if (text('安全').exists() && text('锁屏方式').exists() && text('无').exists()) {
                TKB.xgsrizhi('锁屏设置完成')
                toastLog('锁屏设置完成')
                break
            } else if (text('安全').exists() && text('锁屏方式').exists() && !text('无').exists()) {
                click('锁屏方式')
                sleep(2000)
            }
            if (text('滑动').exists() && text('无').exists()) {
                TKB.xgsrizhi('设置锁屏')
                click(200, 650)
                sleep(2000)
                back()
                sleep(1000)
            }
            if (text('是，移除').exists()) {
                click('是，移除')
                sleep(2000)
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
            toastLog('error')
        }
    }
}

/**
 * 设置手机音量和亮度
 */
function ylshezhi() {
    TKB.xgsrizhi("设置")
    toastLog("开始运行设设置")
    var ld = 40 //亮度
    var yl = 1 //音量
    var cs = 0
    var RT = (new Date()).getTime()
    var dv = TKB.zhid(sbip, run_id)
    if (dv == false) {
        TKB.xgsrizhi("获取不到数据")
        return false
    }
    try {
        ld = dv["亮度"]
        yl = dv["音量"]
        TKB.xgsrizhi("设置")
        if (isNaN(yl) == false && isNaN(ld) == false) {
            TKB.xgsrizhi("都是数字")
        } else {
            TKB.xgsrizhi("不是数字")
            ld = 40 //亮度
            yl = 1 //音量
        }
    } catch (error) {
        sleep(1001)
        log(error)
        ld = 40 //亮度
        yl = 1 //音量
    }
    TKB.xgsrizhi("修改的音量为：" + yl)
    TKB.xgsrizhi("修改的亮度为：" + ld)
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 5 * 60 * 1000) {
                TKB.xgsrizhi("时间到了")
                TKB.qinglihh()
                return false
            }
            if (text('允许修改系统设置').exists() && text('可修改系统设置').exists()) {
                TKB.xgsrizhi('允许修改系统设置')
                var point = findColor(captureScreen(), "#b9b9b9", {
                    region: [938, 425, 60, 60],
                    threshold: 6
                });
                if (point) {
                    TKB.xgsrizhi("还没打开")
                    click(950, 450)
                    sleep(1000)
                    back()
                    sleep(2000)
                }
            }
            sleep(2000)
            device.setBrightnessMode(0)
            device.setBrightness(ld)
            sleep(1000)
            // device.getMusicVolume()  // 返回媒体音量
            // device.getNotificationVolume()  //返回通知音量
            if (device.getBrightness() == ld) {
                toastLog("亮度设置成功" + ld)
                TKB.xgsrizhi("亮度设置成功" + ld)
                device.setMusicVolume(yl) //设置媒体音量
                device.setNotificationVolume(yl) //设置通知音量
                log(device.getMusicVolume())
                log(device.getNotificationVolume())
                cs = cs + 1
                if (device.getMusicVolume() == yl && device.getNotificationVolume() == yl || cs > 5) {
                    toastLog("音量设置成功" + cs)
                    TKB.xgsrizhi("音量设置成功" + cs)
                    TKB.qinglihh()
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            log(error)
        }

    }
}

/**
 * 手机重启
 */
function restart() {
    TKB.xgsrizhi('执行重启任务')
    while (1) {
        TKB.renwuzt(sbip, user_id, yhbh, run_id)
        TKB.xgsrizhi('反馈重启任务')
        sleep(5000)
        TKB.xgsrizhi('执行重启')
        TKB.chongq()
        return true
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
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续安装墓碑任务")
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

//执行安装墓碑
function zxtb() {
    try {
        toastLog("执行安装墓碑任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var app_list = [
                // ['爱奇艺', '11.8.0'],
                ['QQ浏览器', '10.5.1.7230']
            ]
            app_list.forEach(element => {
                var install_num = 10
                while (install_num) {
                    var baom = getPackageName(element[0])
                    if (baom != null && TKB.getVerName(element[0]) != element[1]) {
                        // TKB.xiezai(dqbaoming)
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
            var sz = download()
            if (sz = true) {
                ylshezhi()
                restart()
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


// download()
// install()