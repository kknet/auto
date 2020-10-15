//写日志
function xgsrizhi(g) {
    log(g)
    sleep(random(100, 200))
    files.append("/sdcard/dyrizhi.txt", riqis(2) + ":" + g + "\n")
    // scrz(g)
}

//日期
function riqis(nn) {
    var tem = nn
    Date.prototype.format = function (fmt) {
        var year = this.getFullYear();
        var month = this.getMonth() + 1;
        var date = this.getDate();
        var hour = this.getHours();
        var minute = this.getMinutes();
        var second = this.getSeconds();
        fmt = fmt.replace("yyyy", year);
        fmt = fmt.replace("yy", year % 100);
        fmt = fmt.replace("MM", fix(month));
        fmt = fmt.replace("dd", fix(this.getDate()));
        fmt = fmt.replace("hh", fix(this.getHours()));
        fmt = fmt.replace("mm", fix(this.getMinutes()));
        fmt = fmt.replace("ss", fix(this.getSeconds()));
        return fmt;

        function fix(n) {
            return n < 10 ? "0" + n : n;
        }
    }
    var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    var time = new Date().format("dd")
    if (tem == 1) {
        return time
    } else {
        return times
    }
}

//下载mp3
function dowmp3() {
    toastLog("下载mp3")
    var TTR = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            let imgurl = 'https://mp3-10086.oss-cn-shenzhen.aliyuncs.com/%E8%A7%82%E6%B2%A7%E6%B5%B7.mp3';
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes("/sdcard/观沧海.mp3", res.body.bytes());
                toastLog("下载完成")
                return true
            } else {
                toastLog("没有mp3");
                sleep(2000)
            };
        } catch (error) {
            toastLog(error);
            sleep(random(3000, 8000))
        }
    }
}

//存取数据
function cunqusj(name, str) {
    if (text("登录").exists() && text("取消登录").exists() || text("登录").exists() && text("关闭").exists()) {
        xgsrizhi("登录x2")
        try {
            if (text("登录").exists()) {
                var ss = text("登录").findOnce().bounds();
                xgsrizhi(ss)
                click(ss.centerX(), ss.centerY());
                sleep(2000)
            }
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
        click("登录")
        sleep(2000)
    }
    if (str == "tingzhi" || str == "jiance") {
        var bb = (new Date()).getTime()
        if (files.exists("/sdcard/mbtztime.txt")) {
            xgsrizhi("文件存在")
            var cun = files.read("/sdcard/mbtztime.txt")
            if (bb - Number(cun) > 100 * 1000) {
                xgsrizhi("我是bb的值：" + bb)
                xgsrizhi("我是cun的值：" + cun)
                toastLog("墓碑停止已经运行了")
                dkmubei()
            }
            xgsrizhi(bb - Number(cun))
        }
        files.write("/sdcard/jiaoben.txt", str)
    } else {
        var bb = (new Date()).getTime()
        files.write("/sdcard/jiaoben.txt", bb);
    }
    var storage = storages.create("lun");
    if (str == "qu") {
        log("取出来的数据：" + storage.get(name));
        if (storage.get(name) == undefined) {
            return -1
        } else {
            return storage.get(name)
        }
    } else {
        storage.put(name, str);
    }
}

//获取该页面文字
function getAllTexts(setting) {
    try {
        var setting = setting || {}
        var defaultSetting = {
            getText: true,
            getDesc: true,
            getId: false,
            removeRepetitiveElements: true
        }
        Object.assign(defaultSetting, setting);
        //xgsrizhi(defaultSetting)
        var allStr = []
        var getDescAndTextAndIdOfNode = function (node) {
            if (node) {
                if (defaultSetting.getText) {
                    var text = node.text()
                    if (!!text) {
                        allStr.push(text)
                    }
                }
                if (defaultSetting.getDesc) {
                    var desc = node.desc()
                    if (!!desc) {
                        allStr.push(desc)
                    }
                }
                if (defaultSetting.getId) {
                    var id = node.id()
                    if (!!id) {
                        allStr.push(id)
                    }
                }
            }
            for (let i = 0; i < node.childCount(); i++) {
                getDescAndTextAndIdOfNode(node.child(i));
            }
        }
        var getFrameLayoutNode = function () {
            return className('FrameLayout').findOne(2000)
        }
        getDescAndTextAndIdOfNode(getFrameLayoutNode())

        function removeRepetitiveElements(arr) {
            var obj = {}
            for (let i = 0; i < arr.length; i++) {
                if (obj.hasOwnProperty(arr[i])) {} else {
                    obj[arr[i]] = true
                }
            }
            return Object.keys(obj)
        }
        if (defaultSetting.removeRepetitiveElements) {
            allStr = removeRepetitiveElements(allStr)
        }
        return allStr
    } catch (error) {
        sleep(1001)
        xgsrizhi(error);
        return 1
    }
}

//查看应用版本
function getVerName(name) {
    try {
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name) {
                return pkgs[i].versionName;
            }
        }
        return false
    } catch (e) {
        log("出错" + e)
        sleep(3000);
        return false
    }
}


//卸载指定应用
function xiezai(baoming) {
    xgsrizhi("卸载：" + baoming)
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载2")
            try {
                var bb = text("卸载").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(5000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            xgsrizhi("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            xgsrizhi("已经没有该应用了")
            return true
        }
    }
}


//判断版本卸载
function pdbb(names, banben) {
    xgsrizhi("判断版本是否对应" + names + banben)
    var baoming = getPackageName(names) //返回包名
    var xzbb = getVerName(names)
    if (xzbb != false) {
        if (banben == xzbb) {
            xgsrizhi("版本一致")
            return true
        }
        xgsrizhi("版本不一致" + xzbb)
    } else {
        xgsrizhi("获取不到版本")
        return true
    }
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            xgsrizhi("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            xgsrizhi("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            xgsrizhi("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            xgsrizhi("已经没有该应用了")
            return true
        }
    }
}


//下载应用
function xzm(aa) {
    //文件更新地址
    xgsrizhi("下载应用")
    while (1) {
        try {
            // var url = "https://meitus.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
            var url = aa
            // threads.start(function() {

            //发送get获取文件
            var data = http.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
                }
            }).body.bytes();
            files.writeBytes("/sdcard/xgs.apk", data);
            toast("更新成功,文件保存在/sdcard/zip签名.apk");
            //安装更新后的软件
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })


            // storage.clear();
            // });
            return true
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//安装应用
function anz(lujing) {
    xgsrizhi("安装")
    xzm(lujing)
    var TT = (new Date()).getTime() - 100 * 1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BB > 5 * 60 * 1000) {
            xgsrizhi("超时退出")
            qinglihh()
            return false
        }
        if ((new Date()).getTime() - ts > 60 * 1000) {
            xgsrizhi("超时清理一次换存")
            qinglihh()
            ts = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 20 * 1000) {
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            TT = (new Date()).getTime()
        }


        if (text('以后都允许').exists() && clickable().text('以后都允许').findOnce()) {
            click("以后都允许")
        }

        if (text("设置").exists() && text("取消").exists()) {
            xgsrizhi("设置")
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists()) {
            xgsrizhi("安装")
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists()) {
            xgsrizhi("已经安装成功")
            click("完成")
            return true
        }

        if (id("android:id/switch_widget").exists() && desc("向上导航").exists()) {
            xgsrizhi("添加安装权限")
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false) {
                var aa = id("android:id/switch_widget").findOnce().bounds();
                xgsrizhi(aa.centerX())
                xgsrizhi(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100 * 1000
                qinglihh()
            }
            back()
            sleep(2000)
        }
    }
}


//清理缓存
function qinglihh() {
    xgsrizhi("清理缓存")
    var TB = (new Date()).getTime()
    sleep(2000)
    back()
    sleep(500)
    home()
    sleep(1000)
    while (true) {
        if ((new Date()).getTime() - TB > 30 * 1000) {
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
            return false
        }
        try {

            if (id("com.coloros.recents:id/clear_button").exists()) {
                xgsrizhi("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.coloros.recents:id/clear_button").findOnce().bounds();
                if (aa != null) {
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            } else {
                if (id("com.android.systemui:id/progress_circle_view").exists()) {
                    xgsrizhi("点击清理2")
                    //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                    var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                    if (aa != null) {
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                    }
                    sleep(2000)
                    home()
                    sleep(2000)
                    return true
                } else {
                    if (id("com.huawei.android.launcher:id/clear_all_recents_image_button").exists()) {
                        xgsrizhi("点击清理3")
                        //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                        var aa = id("com.huawei.android.launcher:id/clear_all_recents_image_button").findOnce().bounds();
                        if (aa != null) {
                            xgsrizhi(aa.centerX())
                            xgsrizhi(aa.centerY())
                            click(aa.centerX(), aa.centerY())
                        }
                        sleep(2000)
                        home()
                        sleep(2000)
                        return true
                    } else {
                        back()
                        sleep(500)
                        home()
                        sleep(2000)
                        recents()
                        sleep(3000)
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
    }
}

//豌豆荚下载应用
function wdjxiazai(name, banebn) {
    var baom = getPackageName(name)
    if (baom != null) {
        xgsrizhi("已经下载了该应用")
        device.keepScreenOn(240 * 60 * 60 * 1000)
        return true
    }

    xgsrizhi("豌豆荚下载应用" + name) //豌豆荚
    var waddj = getPackageName("豌豆荚")
    var wdbb = getVerName("豌豆荚") //豌豆荚版本
    log(waddj + "111" + wdbb)
    if (wdbb != "6.17.31" && waddj != null) {
        xgsrizhi("豌豆荚版本不对")
        var ss = xiezai("com.wandoujia.phoenix2")
        if (ss == false) {
            return false
        }
        waddj = false
    }
    if (waddj == null || waddj == false) {
        var lujing = "https://mlziliao.oss-cn-hangzhou.aliyuncs.com/apk/com.wandoujia.phoenix2.apk"
        xgsrizhi("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(10000)
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TSD = (new Date()).getTime()
    var azc = 0
    while (1) {

        if (currentPackage != "com.wandoujia.phoenix2") {
            launch("com.wandoujia.phoenix2")
        }

        if (text("完成").exists() && text("打开").exists() && azc == 1) {
            xgsrizhi("完成")
            click("完成")
            back()
            sleep(500)
            back()
            sleep(1000)
            return true
        }
        var bmname = getPackageName(name)
        if (bmname != null) {
            toastLog("已经安装了该应用：" + bmname)
            sleep(2000)
            toastLog("版本号：" + getVerName(name))
            back()
            sleep(500)
            home()
            sleep(1000)
            return true
        }

        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            xgsrizhi("时间够了退出")
            qinglihh("com.wandoujia.phoenix2")
            return false
        }
        if ((new Date()).getTime() - TSD > 6 * 60 * 1000) {
            xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.wandoujia.phoenix2")
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if (text("跳过").exists()) {
            xgsrizhi("跳过")
            click("跳过")
            sleep(2000)
        }

        if (text('始终允许').exists() && id('com.android.packageinstaller:id/permission_allow_button').exists()) {
            click("始终允许")
        }


        if (text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()) {
            xgsrizhi("首页点搜索")
            click(860, 160)
            log(2333)
            sleep(2000)
        }
        if (id("com.wandoujia.phoenix2:id/a05").exists() && id("com.wandoujia.phoenix2:id/hl").exists() || id("com.wandoujia.phoenix2:id/c4").exists() && id("com.wandoujia.phoenix2:id/a7s").exists()) {
            log("搜索界面输入")
            setText(name)
            sleep(1000)
            click(1000, 160)
            sleep(2000)
        }

        if (text("立即安装").exists() && text("取消").exists()) {
            xgsrizhi("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if (text("提示").exists() && text("确定").exists() && text("取消").exists()) {
            xgsrizhi("提示")
            click("确定")
            sleep(2000)
        }

        if (text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists()) {
            xgsrizhi("搜索结果页面")
            sleep(1000)
            if (id("com.wandoujia.phoenix2:id/f0").exists()) {
                log("看到搜索结果")
                click(500, 360)
                sleep(4000)
            } else {
                log("没有搜索结果")
                setText(name)
                sleep(1000)
                click(1000, 160)
                sleep(4000)
            }
        }

        if (text("评价").exists() && id("com.wandoujia.phoenix2:id/b11").exists() || text("评价").exists() && id("com.wandoujia.phoenix2:id/zz").exists() || text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/ej").exists()) {
            xgsrizhi("搜索结果页面")
            if (text("历史版本").exists()) {
                log("看到历史版本")

                sleep(2000)
                text("历史版本").findOne().parent().click()
            }
            // if (text("历史版本").exists() && text("系统权限").exists()) {
            //     log("看到历史版本")
            //     // click("看到历史版本")
            //     sleep(3000)
            //     var ss = text("历史版本").findOnce().bounds();
            //     log(ss.centerX())
            //     log(ss.centerY())
            //     if (ss.centerY() < 1730) {
            //         click(ss.centerX(), ss.centerY());
            //         sleep(3000)
            //     } else {
            //         log("下滑2")
            //         swipe(557, 1600, 533, 400, random(400, 1000))
            //         sleep(1000)
            //     }
            // } else {
            //     log("下滑")
            //     swipe(557, 1600, 533, 400, random(400, 1000))
            //     sleep(1000)
            // }
        }


        if (text('以后都允许').exists() && clickable().text('以后都允许').findOnce()) {
            click("以后都允许")
        }

        if (text("历史版本").exists() && id("com.wandoujia.phoenix2:id/ao1").exists() || id("com.wandoujia.phoenix2:id/g4").exists() && id("com.wandoujia.phoenix2:id/hm").exists() || text("历史版本").exists() && id("com.wandoujia.phoenix2:id/hm").exists()) {
            xgsrizhi("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()) {
                try {
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称：" + cc)
                    if (cc.indexOf(name) != -1) {
                        var ss = getAllTexts()
                        log(ss)
                        var cd = 0
                        for (j = 0, len = ss.length; j < len; j++) {
                            log("获取的值：" + ss[j])
                            if (ss[j].indexOf(banebn) != -1) {
                                log("找到该版本了" + ss[j])
                                cd = 1
                                var bb = text(ss[j]).findOnce().bounds();
                                log(bb.centerX())
                                log(bb.centerY())
                                if (bb.centerY() < 2030) {
                                    click(920, bb.centerY() - 53);
                                    sleep(10000)
                                } else {
                                    log("微调")
                                    swipe(557, 1500, 533, 800, random(400, 1000))
                                    sleep(1000)
                                }
                            }
                        }
                        if (cd == 0) {
                            log("没找到该版本")
                            swipe(557, 1600, 533, 500, random(400, 1000))
                            sleep(1000)
                        }
                        sleep(1500)
                    } else {
                        log("搜到的不是该应用")
                        back()
                        sleep(2000)
                        back()
                        sleep(3000)
                        back()
                        sleep(3000)
                    }
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                if (id("com.wandoujia.phoenix2:id/ao1").exists()) {
                    try {
                        var cc = id("com.wandoujia.phoenix2:id/ao1").findOnce().text()
                        xgsrizhi("应用名称2：" + cc)
                        if (cc.indexOf(name) != -1) {
                            var ss = getAllTexts()
                            log(ss)
                            var cd = 0
                            for (j = 0, len = ss.length; j < len; j++) {
                                xgsrizhi("获取的值2：" + ss[j])
                                if (ss[j].indexOf(banebn) != -1) {
                                    log("找到该版本了2" + ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030) {
                                        click(920, bb.centerY() - 53);
                                        // sleep(10000)
                                        var hhe = (new Date()).getTime()
                                        while (1) {
                                            if ((new Date()).getTime() - hhe > 60 * 1000) {
                                                log("时间到了")
                                                break
                                            }
                                            if (text("点击继续").exists() && text("稍后下载").exists()) {
                                                log("点击继续")
                                                click("点击继续")
                                                sleep(20000)
                                            }
                                        }
                                    } else {
                                        log("微调2")
                                        swipe(557, 1500, 533, 800, random(400, 1000))
                                        sleep(1000)
                                    }
                                }
                            }
                            if (cd == 0) {
                                log("没找到该版本2")
                                swipe(557, 1600, 533, 500, random(400, 1000))
                                sleep(1000)
                            }
                            sleep(1500)
                        } else {
                            log("搜到的不是该应用2")
                            back()
                            sleep(2000)
                            back()
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                }
            }
        }

        if (text("安装新版本").exists() && text("继续安装旧版本").exists()) {
            log("更新")
            click("继续安装旧版本")
            sleep(1000)
        }


        if (text("完成").exists() && text("打开").exists()) {
            log("完成")
            click("完成")
            sleep(2000)
        }

        if (text("设置").exists() && text("取消").exists()) {
            log("设置")
            click("设置")
            sleep(2000)
        }
        if (text("忽略").exists() && text("官方商店下载").exists()) {
            log("官方商店下载")
            click("忽略")
            sleep(2000)
        }
        if (text("点击继续").exists() && text("稍后下载").exists()) {
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if (text("选好了，安装").exists()) {
            log("选好了，安装")
            click(80, 110)
            sleep(2000)
        }
        if (text("允许一次").exists()) {
            log("允许一次")
            click("允许一次")
            sleep(2000)
        }
        if (text("你可能需要").exists() || id("com.wandoujia.phoenix2:id/a83").exists()) {
            log("你可能需要")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a83").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }

        if (id("com.wandoujia.phoenix2:id/a7s").exists() && text("你可能需要").exists()) {
            log("选好了，安装2")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }

        if (text("继续安装").exists()) {
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if (text("下一步").exists() && text("取消").exists()) {
            log("下一步")
            click("下一步")
            sleep(2000)
        }
        if (text("安装未知应用").exists() && id("android:id/switch_widget").exists()) {
            log("安装未知应用")
            try {
                var ss = id("android:id/switch_widget").findOnce().checked();
                if (ss == false) {
                    var css = id("android:id/switch_widget").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                    back()
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("安装").exists() && text("取消").exists()) {
            log("安装")
            click("安装")
            azc = 1
            sleep(15000)
        }
        if (text("继续").exists() && text("退出").exists()) {
            log("继续")
            click("继续")
            sleep(2000)
        }
        if (text("继续").exists() && text("取消").exists()) {
            log("继续2")
            click("继续")
            sleep(2000)
        }
        if (text("同意并授权").exists()) {
            log("同意并授权")
            click("同意并授权")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click("取消")
            sleep(1000)
        }

        if (text("应用权限").exists() && text("退出安装").exists()) {
            log("安装")
            click(540, 1600)
            sleep(2000)
        }
    }
}

//获取本机号码
function benjitel() {
    try {
        xgsrizhi("获取本机号码")
        runtime.requestPermissions(["READ_PHONE_STATE"]);
        telephonyManager = context.getSystemService(context.TELEPHONY_SERVICE);
        //deviceid = telephonyManager.getDeviceId();
        //simSerialNumber = telephonyManager.getSimSerialNumber();
        var tel = telephonyManager.getLine1Number();
        //imsi = telephonyManager.getSubscriberId();
        //log('deviceid = ' + deviceid)
        //log('simSerialNumber = ' + simSerialNumber)
        xgsrizhi('tel=' + tel)
        if (tel != null) {
            if (tel.length > 10) {
                var ss = tel.split("+86")
                var phone = ss[1]
                return phone
            }
        }
        if (files.exists("/sdcard/phone.txt")) {
            var zh = files.read("/sdcard/phone.txt")
            if (zh.length == 11) {
                return zh
            }
        } else {
            files.createWithDirs("/sdcard/phone.txt");
            console.show();
            console.setSize(500, 500);
            telNumber = console.rawInput('请输入');
            log(telNumber)
            console.hide()
            files.write('/sdcard/phone.txt', telNumber)
            sleep(2000)
            var zh = files.read("/sdcard/phone.txt")
            if (zh.length == 11) {
                return zh
            }

        }

        return false
        //log('imsi = ' + imsi)
    } catch (error) {
        log("错误2" + error);
        sleep(2000)
        return false
    }
}

//获取本机验证码
function huoquyzm(smsapp, app) {
    xgsrizhi("获取本机验证码")
    var TC = (new Date()).getTime()
    sleep(10000)
    while (1) {
        try {
            if ((new Date()).getTime() - TC > 2 * 60 * 1000) {
                xgsrizhi("获取短信超时")
                return false
            }
        } catch (error) {
            log("错误2" + error);
            sleep(2000)
            return false
        }
        try {
            launchApp('信息')
            sleep(10000)
            text('通知信息').findOnce() ? click(text('通知信息').findOnce().bounds().centerX(), text('通知信息').findOnce().bounds().centerY()) : ''
            sleep(1000)
            var mesDate = id('subject').find()
            mesDate = mesDate.filter(index => {
                return index.text().indexOf(smsapp) != -1
            })
            var code, reg, table, yzm = '';
            if (smsapp == '快手科技') {
                code = mesDate[0].text().split('快手验证码')
                reg = '[0-9]{4,6}';
                log(code[0])
                var table = code[0].match(reg)
                var yzm = table[0]
            } else {
                code = mesDate[0].text().split('验证码')
                reg = '[0-9]{4,6}';
                log(code[1])
                var table = code[1].match(reg)
                var yzm = table[0]
            }



            launchApp(app)
            sleep(3000)

            return yzm

        } catch (error) {
            toastLog("请查看laodi是否开启读取短信权限")
            xgsrizhi("错误" + error);
            sleep(2000)
        }
    }
}

function wzaandhome() {

    importClass(android.content.Context);
    importClass(android.provider.Settings);
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        log('当前已启用的辅助服务\n', enabledServices);
        if (enabledServices.indexOf('com.yyunkong.y') != -1) {
            toastLog('辅助功能已开启')
            if (currentPackage() !== 'com.yyunkong.y') {
                launch("com.yyunkong.y");
            }
        } else {
            var Services = enabledServices + ":com.yyunkong.y/com.stardust.autojs.core.accessibility.AccessibilityService:com.yyunkong.parent/com.stardust.autojs.core.accessibility.AccessibilityService";
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
            Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
            toastLog("成功开启辅助服务");

            sleep(5000)
            if (currentPackage() !== 'com.yyunkong.y') {
                launch("com.yyunkong.parent");
            }
        }

    } catch (error) {
        toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限");
    }

}

function findColor(aa) {
    var ss = aa.split(" and ")
    var imgss = captureScreen()
    // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",80)")
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
}



function getPersonInfo() {
    let deviceId = files.read('/sdcard/deviceId.txt');
    let url = "http://121.196.126.46:9090/mqttcontrol/api/js/queryZl";
    toastLog('获取个人资料开始')
    let res = http.postJson(url, {
        "deviceId": deviceId
    });
    if (res.statusCode == 200) {
        let resdata = res.body.string();
        let taskres = JSON.parse(resdata).data
        log("全部信息" + taskres)

        personres = {};

        if (taskres == "当前编号暂无绑定个人资料") {
            return "当前编号暂无绑定个人资料"
        }


        personres.nickname = taskres.nickname;
        personres.signature = taskres.signature;
        personres.avatar = taskres.avatar;

        log(personres)
        return personres;


    }
    toastLog('获取任务参数值结束')
}


/*{record} strinng  错误信息*/
function pushRecord(record) {
    let deviceId = files.read('/sdcard/deviceId.txt');
    let url = "http://121.196.126.46:9090/mqttcontrol/api/js/record";
    toastLog('获取个人资料开始')
    let res = http.postJson(url, {
        "deviceId": deviceId,
        "errorLog": record
    });
    if (res.statusCode == 200) {
        toastLog('错误提交成功')
    }
    toastLog('错误提交')
}

/*{num} interger  数量*/
function getAddress(num) {

    let deviceId = files.read('/sdcard/deviceId.txt');
    let url = "http://121.196.126.46:9090/mqttcontrol/api/js/address";
    toastLog('获取通讯录开始')
    let res = http.postJson(url, {
        "deviceId": deviceId,
        "num": num
    });

    if (res.statusCode == 200) {
        let resdata = res.body.string();
        let addressdata = JSON.parse(resdata).data
        // log(addressdata + typeof addressdata)
        return addressdata
    }
    return null;
}


module.exports = {
    'xgsrizhi': xgsrizhi,
    'riqis': riqis,
    'dowmp3': dowmp3,
    'cunqusj': cunqusj,
    'getAllTexts': getAllTexts,
    'getVerName': getVerName,
    'xiezai': xiezai,
    'pdbb': pdbb,
    'anz': anz,
    'qinglihh': qinglihh, //清理缓存
    'wdjxiazai': wdjxiazai, //软件下载
    'benjitel': benjitel, //获取本机号
    'huoquyzm': huoquyzm, //验证码
    'wzaandhome': wzaandhome, //无障碍
    'getPersonInfo': getPersonInfo, //获取当前设备的名称、头像、签名
    'getAddress': getAddress, // 获取通讯录信息
    'pushRecord': pushRecord, //提交错误信息
    'findColor': findColor //找色
}