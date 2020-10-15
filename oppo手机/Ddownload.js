log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()


auto.waitFor()
sleep(2000)
var lock = threads.lock();
threads.start(function () {
    //线程中需要谨慎,以免线程死了
    log("子线程1");
    while (true) {
        lock.lock();
        sleep(200)
        id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
        sleep(200)
        clickable().id('android:id/button1').findOnce() ? clickable().id('android:id/button1').findOnce().click() : ''
        sleep(200)
        text('每次切换时提醒').findOnce() ? clickable().text('不再提醒').findOnce().click() : ''
        sleep(200)
        text('保持禁止').findOnce() ? text('保持禁止').findOnce().click() : ''
        sleep(200)
        id('com.wandoujia.phoenix2:id/acw').findOnce() ? clickable().id('com.wandoujia.phoenix2:id/y8').findOnce().click() : ''
        sleep(200)
        textContains('允许访问你的"位置"').exists() ? text('允许').findOnce().click() : ''
        sleep(200)
        text('声明与条款').findOnce() ? clickable().text('同意并继续').findOnce().click() : ''
        sleep(200)
        clickable().text('点击继续').findOnce() ? clickable().text('点击继续').findOnce().click() : ''
        sleep(200)
        clickable().text('以后都允许').findOnce() ? clickable().text('以后都允许').findOnce().click() : ''
        sleep(200)
        text('个人信息保护指引').findOnce() ? clickable().text('好的').findOnce().click() : ''
        sleep(200)
        text('我知道了').findOnce() ? clickable().text('我知道了').findOnce().click() : ''
        sleep(200)
        text('发现通讯录好友').findOnce() ? clickable().text('取消').findOnce().click() : ''
        sleep(200)
        text('检查新版本').findOnce() ? clickable().text('取消').findOnce().click() : ''
        sleep(200)
        text('温馨提醒').findOnce() ? clickable().text('允许').findOnce().click() : ''
        sleep(200)
        textContains('检测到更新').findOnce() ? clickable().text('以后再说').findOnce().click() : ''
        sleep(200)
        text('欢迎来到豌豆荚').exists() ? clickable().text('同意并授权').findOnce().click() : ''
        sleep(200)

        var arr = ['好友推荐']
        for (let i = 0; i < arr.length; i++) {
            if (text(arr[i]).findOnce()) {
                log('有弹窗')
                back()
                sleep(2000)
            }
        }
        lock.unlock();

    }

    // 普通处理 
    //   TryCloseGG();

});
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

// ----------常量----------
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';
var repeat = 0

var searchId = 'a_5'
var mheight = device.height
var mwidth = device.width / 2


//----------特有弹窗判断----------------


//-------------通用函数封装--------------
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


/* 杀进程操作
package  程序名
time 间隔时间
type  操作类型
config  手机配置文件
*/
function closeandopen(package, time, type, config) {
    if (type == 'single') {
        launch(package);
        sleep(time * 1000)
        let packageName = package;
        app.openAppSetting(packageName);
        text(app.getAppName(packageName)).waitFor();
        let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
        if (is_sure.enabled()) {
            textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
            id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOne() ? id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOnce().click() : log('按钮点击不到');
            log(app.getAppName(packageName) + "应用已被关闭");
            sleep(1000);
            back();
        } else {
            log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
            back();
        }
        sleep(time * 1000)
        launch(package);
    } else {
        launch(package);
        sleep(time * 1000)
        home()
        sleep(2000)
        recents()
        sleep(1000)
        log('点击清除后台任务按钮')
        id('clearAnimView').findOne(2000).click()
        sleep(time * 1000)
        launch(package);

    }

}


function downjsrun() {
    toastLog("下载js")
    var TTR = (new Date()).getTime()
    while (1) {
        try {

            if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
                break;

            }
            let jsurl = 'https://mlziliao.oss-cn-hangzhou.aliyuncs.com/js/keeplight.js';
            let res = http.get(jsurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/keeplight.js", res.body.bytes());
                toastLog("下载完成")
                break;
            } else {
                toastLog("没有js");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }

    engines.execScriptFile("/sdcard/keeplight.js")
}


//-------------实际运行模块---------------
function download(package, modules, parameter) {

    paramInfo = changeStr(parameter.param['app_info_tags'])



    log(paramInfo, modules)


    for (let i = 0; i < paramInfo.length; i++) {

        closeandopen(package, 10, 'single');

        // 30秒 延长时间处理第一次出现弹窗
        sleep(30000)

        var searchFor = paramInfo[i].app
        var edition = paramInfo[i].version

        log(searchFor + edition + "111")
        log(paramInfo[i].app, paramInfo[i].version)

        if (textContains('版本新特性').findOnce()) {
            back()
        }
        id(searchId).findOnce() ? id(searchId).findOnce().click() : '' //点击搜索按钮
        sleep(5000)
        setText(searchFor)
        sleep(5000)
        click(990, 150)
        sleep(5000)


        var appDouyin = text(searchFor).find()[1]
        // log('2', appDouyin.bounds())
        appDouyin ? click(appDouyin.bounds().centerX(), appDouyin.bounds().centerY()) : id('f0').findOnce().click()
        sleep(3000)

        // log(mwidth, mheight - 400, mwidth, 300, 500)
        var historyB = text('历史版本').findOnce().bounds().top

        while (historyB + 200 > mheight) {
            swipe(mwidth, mheight - 300, mwidth, 300, 300)
            sleep(1000)
            historyB = text('历史版本').findOnce().bounds().top
        }

        // if (!text('打开').findOnce() && !text('升级').findOnce()) 
        if (!text('打开').findOnce()) {
            text('历史版本').findOnce().parent().click()
            sleep(2000)


            swipe(mwidth, mheight - 300, mwidth, 300, 300)

            modules == 'meitu' ?
                textContains(edition).findOnce().parent().parent().children()[2].click() :
                textContains(edition).findOnce().parent().children()[1] ?
                textContains(edition).findOnce().parent().children()[1].click() :
                textContains(edition).findOnce().parent().parent().children()[2].click()
            sleep(4000)

            clickable().id('com.wandoujia.phoenix2:id/y9').findOnce() ? clickable().id('com.wandoujia.phoenix2:id/y9').findOnce().click() : ''

            text('确定').findOnce() ? text('确定').findOnce().click() : ''

            while (text('暂停').exists()) {
                sleep(10000)
            }

            while (text('暂停').exists()) {
                sleep(10000)
            }

            toastLog('等待下载完成')

            // text('允许"豌豆荚"安装应用吗？').findOnce() ? text('以后都允许').findOnce().click() : '' 

            if (modules == 'meitu') {
                log('meitu')
                toast(text('继续安装').findOnce())
                text('继续安装').findOne(5000) ? text('继续安装').findOnce().click() : click(800, 1925)
                sleep(2000)
                text('下一步').findOnce() ? text('下一步').findOnce().click() : ''
                sleep(2000)
                text('安装').findOnce() ? text('安装').findOnce().click() : ''
                sleep(35000)
                toastLog('等待安装完成')
                if (text('允许').findOnce()) {
                    text('不再提示').findOnce().click()
                    sleep(1000)
                    text('允许').findOnce().click()
                    sleep(5000)
                }
                text('完成').findOne(10000).click()
            } else {
                sleep(3000)
                text('版本：' + edition).findOne(10000)

                while (text('继续安装旧版本').findOnce() && text("安装新版本").exists()) {
                    // id('com.android.packageinstaller:id/btn_continue_install_old').findOnce() ? id('com.android.packageinstaller:id/btn_continue_install_old').findOnce().click() : click(540, 1810)
                    id('com.android.packageinstaller:id/btn_continue_install_old').findOnce() ? id('com.android.packageinstaller:id/btn_continue_install_old').findOnce().click() : click("继续安装旧版本")
                }

                sleep(3000)

                while (text('我已知问题严重性。无视风险安装').findOnce()) {
                    click(900, 1800)
                }

                id('virus_warning').findOne(8000) ?
                    click(id('virus_warning').findOnce().bounds().centerX() + 200, id('virus_warning').findOnce().bounds().centerY()) : ''

                sleep(5000)

                text('安装').findOnce() ? text('安装').findOnce().click() : click(540, 1600)

                sleep(35000)

                toastLog('等待安装完成')

                text('打开应用').findOne(2000)

                sleep(2000)

                click(540, 1800)
            }

            sleep(2000)

        } else {

            toastLog('应用已安装')
        }

        home()
        sleep(2000)
        recents()
        sleep(1000)
        log('点击清除后台任务按钮')
        modules == 'meitu' ? id('clear_recents').findOne(2000).click() : id('clear_button').findOne(2000).click()
        sleep(2000)

        continue
    }

    function changeStr(str) {
        var obj = str.slice(1, -1).split(",");
        var obj1 = []
        obj.map(index => {
            if (index.split('"').length > 3) {
                obj1.push(index.split('"').filter(arr => {
                    return arr.length > 1
                }))
            }
        })
        var arr = []
        for (let i = 0; i < obj1.length;) {
            var obj2 = new Object()
            obj2.app = obj1[i][1]
            obj2.version = obj1[i + 1][1]
            arr.push(obj2)
            i += 2
        }
        return arr
    }

}




function changeStr(str) {
    var obj = str.slice(1, -1).split(",");
    var obj1 = []
    obj.map(index => {
        if (index.split('"').length > 3) {
            obj1.push(index.split('"').filter(arr => {
                return arr.length > 1
            }))
        }
    })
    var arr = []
    for (let i = 0; i < obj1.length;) {
        var obj2 = new Object()
        obj2.app = obj1[i][1]
        obj2.version = obj1[i + 1][1]
        arr.push(obj2)
        i += 2
    }
    return arr
}

function download2(parameter) {
    paramInfo = changeStr(parameter.param['app_info'])
    toastLog("执行下载任务")

    var app_list = paramInfo
    app_list.forEach(element => {
        var install_num = 10

        while (install_num) {
            var baom = getPackageName(element['app'])
            log(element['app'] + element['version'])
            if (baom != null && TKB.getVerName(element['app']) != element['version']) {
                TKB.xiezai(baom)
                install_num--
            } else if (baom == null) {
                var bbd = TKB.wdjxiazai(element['app'], element['version'])
                if (bbd == false) {
                    TKB.xgsrizhi(element['app'] + "安装失败")
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            } else {
                break;
            }
        }
    });
    TKB.qinglihh();

}
//------------------------------------------main函数--------------------------------------------------------------
function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)
        download2(res)

    } catch (error) {
        toastLog('执行遇到错误' + error);
        repeat++
        if (repeat < 5) {
            main()
        }else{
            TKB.wzaandhome()
        }

    }

    sleep(3000)
    threads.shutDownAll();
    downjsrun()
}

main();
