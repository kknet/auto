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
        //set_log(defaultSetting)
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
        set_log(error);
        return 1
    }
}

function find_click(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "desc") {
        var w = desc(te).findOnce();
        if (w != null) {
            log("发现desc:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}

function download_photo(lj) {
    log("下载图片")
    var dirpath = "/sdcard/wxphoto/";
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/3.png';
    var imgurl = lj
    log("拿图片的链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                log("访问次数够了退出")
                return false
            }
            var filePath = files.join(dirpath, '1.png');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                log("下载图片完成")
                return true
            } else {
                log("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

function clear() {
    var start_time = (new Date()).getTime()
    while (1) {
        try {
            if (!id('com.android.systemui:id/progress_circle_view').exists() || !id('com.coloros.recents:id/clear_button').exists()) {
                home()
                sleep(1000)
                recents()
                sleep(1000)
            }
            // 金立手机一键清理按键
            if (id('com.android.systemui:id/progress_circle_view').exists()) {
                id('com.android.systemui:id/progress_circle_view').findOnce().click()
                sleep(1000)
                return true
            }
            // OPPO手机一键清理按键
            if (id('com.coloros.recents:id/clear_button').exists()) {
                id('com.coloros.recents:id/clear_button').findOnce().click()
                sleep(1000)
                return true
            }
            // OPPO手机一键清理按键
            if (id('com.coloros.recents:id/clear_button').exists()) {
                id('com.coloros.recents:id/clear_button').findOnce().click()
                sleep(1000)
                return true
            }
            //小米手机一键清理按键
            if (id("com.android.systemui:id/clearAnimView").exists()) {
                id("com.android.systemui:id/clearAnimView").findOnce().click();
                log("小米4清理缓存");
                sleep(1000);
                return true;
            } else {
                if ((new Date()).getTime() - start_time > 30 * 1000) {
                    home()
                    return false
                }
            }
        } catch (error) {
            set_log("clear：" + error)
        }
        sleep(1000)
    }
}
var lj = 'https://i.loli.net/2020/10/14/uGTVakKrBN2bEeZ.jpg'

function 个人版加入群聊() {
    launch('com.tencent.mm')
    download_photo(lj)
    sleep(6000)
    while (1) {
        // find_click('id', 'com.tencent.mm:id/f4u', 800)//搜索ID
        find_click('id', 'com.tencent.mm:id/ebv', 800) //+号ID
        find_click('id', 'com.tencent.mm:id/f7d', 800) //扫一扫里面的本地相册ID
        find_click('text', '扫一扫', 800)
        if (find_click('text', '所有图片', 1000)) {
            find_click('text', 'wxphoto', 5000)
        }
        find_click('id', 'com.tencent.mm:id/f09', 5000) //下载的图片的id,选择该图片
        if (id('com.tencent.mm:id/ak8').exists()) {
            //欢迎回到群里的id
            log('已经加入过')
            break
        }
        find_click('text', '加入群聊', 800)
        if (text('系统错误').exists()) {
            back()
            sleep(1000)
            back()
            sleep(1000)
        }
        find_click('desc', '聊天信息', 800)
        if (id('com.tencent.mm:id/ezv').exists() && textContains('聊天信息')) {
            log('111')
            break
        }
    }
}

// 个人版加入群聊()
// log(getAllTexts())
var 群聊人数 = id('android:id/text1').findOnce().text().split('(')[1].split(')')[0]
log(群聊人数)
