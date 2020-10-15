sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()){
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx =  files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var dqbaoming = "cn.youth.news"   //该项目包名  版本 v1.7.0
var xmxh = "19"               //项目序号

var TKB = require('/sdcard/tkb2.js')

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

    if (text("跳过").exists()) {
        TKB.xgsrizhi("跳过")
        click("跳过")
        sleep(2000)
    }

    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许")
        click("允许")
        sleep(2000)
    }

    if (id("cn.youth.news:id/lw").exists()) {
        TKB.xgsrizhi("关闭弹窗广告")
        id("cn.youth.news:id/lw").findOne().click()
        sleep(2000)
    }

    if (text("先去逛逛").exists()) {
        TKB.xgsrizhi("新人红包")
        text("先去逛逛").findOne().click()
        sleep(2000)
    }

    if (text("夜间升级").exists()) {
        TKB.xgsrizhi("系统升级弹窗")
        text("夜间升级").findOne().click()
        sleep(2000)
    }

    if (text("微信一键登录").exists()) {
        TKB.xgsrizhi("需要微信登录")
        text("微信一键登录").findOne().parent().click()
        sleep(2000)
    }

    if ((text("关闭").exists() && text("同意").exists()) || (text("同意").exists() && text("拒绝").exists())) {
        TKB.xgsrizhi('同意')
        click("同意")
        sleep(5000)
    }

    if (id('cn.youth.news:id/iv_close_packet').exists()) {
        id('cn.youth.news:id/iv_close_packet').findOne().click()
        sleep(random(1500, 2000))
    }

    if (className('android.widget.Button').text('马上好评~').exists()) {
        className('android.widget.Button').text('残忍拒绝').findOne().click()
        sleep(1000)
    }

    if (text("任务中心").exists()) {
        TKB.xgsrizhi("任务中心")
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
}

//刷文章视频
function sbyh() {
    TKB.xgsrizhi("刷文章视频")
    var RT = (new Date()).getTime()
    var stt = random(35, 50)
    TKB.xgsrizhi("stt_"+stt)
    var TSD = (new Date()).getTime()
    var tem = 0

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            return true
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch("com.jm.video")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        // 首页
        if (id('cn.youth.news:id/a5h').exists() && id('cn.youth.news:id/a9f').exists()) {
            TKB.xgsrizhi('首页')
            var suiji = random(1, 2),
                is_refresh = 0,
                cs = random(10, 15)
            if (suiji == 1) {
                TKB.xgsrizhi('看首页资讯')
                while (cs) {
                    try {
                        if (id('cn.youth.news:id/a5h').findOne().selected()) {
                            swipe(random(500, 580), random(1205, 1220), random(500, 580), random(1758, 1780), random(500, 800))
                        } else {
                            id('cn.youth.news:id/a5h').findOne().click()
                        }
                        sleep(random(1500, 2000))
                        if (is_refresh == 1) {
                            className('android.widget.TextView').depth(13).text('热点').findOne().click()
                            sleep(random(1000, 2000))
                            swipe(random(500, 580), random(1205, 1220), random(500, 580), random(1758, 1780), random(500, 800))
                            sleep(random(1500, 2500))
                            className('android.widget.TextView').depth(13).text('推荐').findOne().click()
                            is_refresh = 0
                        }
                        TKB.xgsrizhi('刷新文章列表')
                        sleep(random(1500, 2000))
                        var wz_list = id('cn.youth.news:id/qz').find()
                        TKB.xgsrizhi('此页文章数量_' + wz_list.size())
                        wz_list.some(e => {
                            try {
                                e.parent().click()
                                TKB.xgsrizhi('点击进入文章')
                                sleep(random(2500, 3500))
                                if (textContains('这个圈圈转满一圈').exists()) {
                                    textContains('这个圈圈转满一圈').findOne().click()
                                }
                                if (text('视频').exists() && text('首页').exists()) {
                                    TKB.xgsrizhi('未正常阅读文章')
                                    return false
                                }
                                var is_scrd = random(0, 20),
                                    wz_time = getRandomArbitrary(1, 2).toFixed(1)
                                TKB.xgsrizhi('文章时间_' + (wz_time * 60 * 1000))
                                var TJH = (new Date()).getTime()
                                while (1) {
                                    try {
                                        var is_scrollup = random(0, 20)
                                        if ((new Date()).getTime() - TJH > wz_time * 60 * 1000) {
                                            TKB.xgsrizhi("看文章时间够了")
                                            back()
                                            sleep(random(1500, 2500))
                                            return false
                                        }
                                        if (desc('网页无法打开').exists()){
                                            TKB.xgsrizhi("网页无法打开")
                                            sleep(1000)
                                            back()
                                            sleep(1000)
                                            return false
                                        }
                                        // 当遇到分享按钮则认为滑到底
                                        if ((text('查看更多评论').exists() && text('查看更多评论').findOne().bounds().centerY() > 1810) || (text('抢先发表观点，更容易上热评').exists() && text('抢先发表观点，更容易上热评').findOne().bounds().centerY() > 1350) || (text('已显示全部评论').exists() && text('已显示全部评论').findOne().bounds().centerY() > 1810)) {
                                            break
                                        } else {
                                            swipe(random(550, 580), random(1758, 1780), random(550, 580), random(1205, 1220), random(200, 500))
                                            sleep(random(300, 1000))
                                        }
                                        // 浏览中需要点击 查看全文
                                        if (desc('查看全文，奖励更多').exists()) {
                                            TKB.xgsrizhi("查看全文")
                                            desc('查看全文，奖励更多').findOne().click()
                                            sleep(random(1500, 2500))
                                        }
                                        if (is_scrollup === 1) {
                                            TKB.xgsrizhi('向上滑')
                                            swipe(random(500, 580), random(1205, 1220), random(500, 580), random(1758, 1780), random(300, 700))
                                            sleep(random(700, 1500))
                                        }
                                        zonghe()
                                    } catch (error) {
                                        TKB.xgsrizhi(error)
                                    }
                                }
                                // 随机浏览收藏
                                if (is_scrd === 3) {
                                    id('cn.youth.news:id/m0').findOne().parent().parent().click()
                                    textContains('收藏成功').waitFor()
                                    back()
                                    sleep(random(1000, 1500))
                                }
                                var back_time = (new Date()).getTime()
                                while (1) {
                                    if ((new Date()).getTime() - back_time > 10 * 1000) {
                                        TKB.xgsrizhi("超时")
                                        TKB.qinglihh()
                                        break
                                    }
                                    back()
                                    sleep(random(1000, 1500))
                                    TKB.xgsrizhi('返回首页')
                                    if (id('cn.youth.news:id/a5h').exists()) {
                                        break
                                    }
                                }
                                zonghe()
                                sleep(random(500, 1000))
                            } catch (error) {
                                TKB.xgsrizhi(error)
                                return false
                            }
                            TKB.xgsrizhi('读完一篇文章')
                        })
                        is_refresh = 1
                        sleep(random(2500, 3500))
                        cs--
                        toastLog('cs_'+cs)
                    } catch (error) {
                        TKB.xgsrizhi(error)
                    }
                }
            } else {
                function get_ss(total) {
                    var sli_ss = total.split(':'),
                        m_ss = parseInt(sli_ss[0]) * 60,
                        ss = parseInt(sli_ss[1])
                    return (m_ss + ss) * 1000
                }
                while (cs) {
                    try {
                        if (id('cn.youth.news:id/a9f').findOne().selected()) {
                            swipe(random(500, 580), random(1205, 1220), random(500, 580), random(1758, 1780), random(500, 800))
                        } else {
                            id('cn.youth.news:id/a9f').findOne().click()
                        }
                        sleep(random(1500, 2000))
                        if (is_refresh == 1) {
                            className('android.widget.TextView').depth(13).text('生活').findOne().click()
                            sleep(random(1000, 2000))
                            swipe(random(500, 580), random(1205, 1220), random(500, 580), random(1758, 1780), random(500, 800))
                            sleep(random(1500, 2500))
                            className('android.widget.TextView').depth(13).text('推荐').findOne().click()
                            is_refresh = 0
                        }
                        TKB.xgsrizhi('看视频')
                        sleep(random(1500, 2000))
                        var sp_list = id('cn.youth.news:id/p6').find()
                        TKB.xgsrizhi('此页视频数量_' + sp_list.size())
                        sp_list.some(e => {
                            try {
                                e.click()
                                TKB.xgsrizhi('点击进入视频')
                                sleep(random(2500, 3500))
                                if (text('视频').exists() && text('首页').exists()) {
                                    TKB.xgsrizhi('未正常播放视频')
                                    return false
                                } else {
                                    try {
                                        var TJH = (new Date()).getTime(),
                                            sp_total = 0
                                        while (1) {
                                            if ((new Date()).getTime() - TJH > 30 * 1000) {
                                                log("该视频播放超时跳出")
                                                back()
                                                sleep(random(1000, 2000))
                                                break
                                            }
                                            if (text('继续播放').exists()) {
                                                text('继续播放').findOne().click()
                                                sleep(random(200, 500))
                                            } else {
                                                id('cn.youth.news:id/zw').findOne().click()
                                                sleep(random(200, 500))
                                            }
                                            if (id('cn.youth.news:id/a35').exists()) {
                                                id('cn.youth.news:id/a35').findOne().click()
                                                sleep(500)
                                            }
                                            if (id('cn.youth.news:id/a1r').exists()) {
                                                var sp_total = id('cn.youth.news:id/a1r').findOne().text()
                                            }
                                            if (sp_total != '00:00' && sp_total != undefined && sp_total != 0) {
                                                log('sp_total_' + sp_total)
                                                break
                                            }
                                            sleep(1000)
                                        }
                                        sp_time = get_ss(sp_total)
                                        TKB.xgsrizhi('sp_time_' + sp_time)
                                        if (sp_time < 300000) {
                                            sleep(random(parseInt(sp_time / 2), parseInt(sp_time / 3) * 2))
                                        } else if (300000 < sp_time < 600000) {
                                            sleep(random(parseInt(sp_time / 2), parseInt(sp_time / 10) * 2))
                                        }
                                        else if (sp_time === NaN){
                                            sleep(random(20, 45))
                                        }
                                        else{
                                            sleep(random(20, 45))
                                        }
                                        TKB.xgsrizhi('看完了')
                                        toastLog('该视频已观看完')
                                        zonghe()
                                        TKB.xgsrizhi('没有弹窗广告')
                                    } catch (error) {
                                        TKB.xgsrizhi(error)
                                        toastLog(error)
                                        return false
                                    }
                                    var back_time = (new Date()).getTime()
                                    while (1) {
                                        if ((new Date()).getTime() - back_time > 10 * 1000) {
                                            TKB.xgsrizhi("返回首页超时")
                                            TKB.qinglihh()
                                            return false
                                        }
                                        back()
                                        sleep(random(1000, 1500))
                                        TKB.xgsrizhi('返回首页')
                                        if (id('cn.youth.news:id/a5h').exists()) {
                                            break
                                        }
                                    }
                                }
                                zonghe()
                                sleep(random(500, 1000))
                            } catch (error) {
                                TKB.xgsrizhi(error)
                                return false
                            }
                            TKB.xgsrizhi('看完视频了')
                        })
                        is_refresh = 1
                        sleep(random(2500, 3500))
                        cs--
                        toastLog('cs_'+cs)
                    } catch (error) {
                        TKB.xgsrizhi(error)
                    }
                }
            }
            sleep(random(1500, 2500))
            zonghe()
        }
        else{
            sleep(1000)
            TKB.qinglihh()
        }
    }
}

//中青看点登录
function sbdl() {
    TKB.xgsrizhi("中青看点登录")
    launchApp('中青看点')
    sleep(8000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    var is_login = 0
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                if (is_login == 1) {
                    return true
                }
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh()
                sleep(3000)
                launchApp('中青看点')
                sleep(8000)
                TSD = (new Date()).getTime()
            }
            if (id('cn.youth.news:id/th_home_tab').exists() && s == 0) {
                id('cn.youth.news:id/th_home_tab').findOne().child(3).click()
            }
            if (id('cn.youth.news:id/tv_to_login').exists()) {
                var login_bounds = id('cn.youth.news:id/tv_to_login').findOne().bounds()
                click(login_bounds.centerX(), login_bounds.centerY())
                sleep(random(1500, 2000))
                TKB.xgsrizhi('tv_to_login')
            }
            if (id('cn.youth.news:id/a9a').exists()) {
                // 点击到是否登录界面
                id('cn.youth.news:id/a9a').findOne().parent().click()
                sleep(2000)
            }
            if (id('cn.youth.news:id/a96').exists()) {
                var logins = id('cn.youth.news:id/a96').findOne().text()
                if (!logins.indexOf('登录') && logins) {
                    TKB.xgsrizhi('需要登录')
                } else {
                    TKB.xgsrizhi('登录成功')
                    is_login = 1
                }
            }
            if (text('登录领红包').exists()) {
                text("登录领红包").findOne().click()
                sleep(2000)
            }
            if (text("微信一键登录").exists()) {
                TKB.xgsrizhi("需要微信登录")
                text("微信一键登录").findOne().parent().click()
                sleep(2000)
            }
            if (is_login == 1) {
                TKB.xgsrizhi('vvv')
                return true
            }
            sleep(random(1000, 2000))
            zonghe()
        } catch (error) {
            toastLog(error);
            sleep(random(3000,8000))
        }
    }
}


function bofangyy(){
    _THREADSS = threads.start(function (){
         TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime()- 50*1000
        var TJH = (new Date()).getTime()
        TKB.cunqusj("jiaoben","1")
        var aa = 1
        while(1){
            try{
                if ((new Date()).getTime() - TJH > 3*55*1000){
                    log("激活设备")
                    TKB.xjihuoxt(sbip, yhname, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 *1000){
                    aa = aa + 1
                    TKB.cunqusj("jiaoben",aa)
                    var renwu = TKB.huoqurenwu(sbip, yhname, yhbh, xmxh)
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        renwu = false
                    }
                    if (renwu == true){
                        TKB.xgsrizhi("继续中青看点任务")
                    }else{
                        TKB.xgsrizhi("服务器上没有中青看点任务")
                        TKB.qinglihh("cn.youth.news")
                        sleep(2000)
                        TKB.xgsrizhi("执行完存停止数据2")
                        TKB.cunqusj("jiaoben","tingzhi")
                        java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        _THREADSS.interrupt()
                    }
                    if( files.exists("/sdcard/观沧海.mp3") == false){
                         TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            }catch(error) {
                toastLog(error);
                sleep(random(3000,8000))
            }
        }
    });
}


function hszhixing() {
    try {
        bofangyy()
        TKB.xgsrizhi("中青看点app")
        _THREADSSxx = threads.start(function () {
            var baom = getPackageName("中青看点")
            if (baom == null) {
                TKB.xgsrizhi("未安装中青看点")
                var bbd = TKB.wdjxiazai("中青看点", "v1.7.0")
                if (bbd == false) {
                    TKB.xgsrizhi("安装中青看点")
                    _THREADSS.interrupt()
                    //files.write("/sdcard/jiaoben.txt", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var is_login = sbdl()
            TKB.xgsrizhi('is_login_' + is_login)
            if (is_login) {
                sbyh()
            }
            _THREADSS.interrupt()
            sleep(1000)
            java.lang.System.exit(0);
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        TKB.xgsrizhi(error);
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}

hszhixing()

// sbdl()
