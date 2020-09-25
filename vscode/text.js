function get_text(msg) {
    log("获取回复")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log("超时没获取到号码退出")
                return false
            }
            var r = http.get("http://api.qingyunke.com/api.php?key=free&appid=0&msg=" + msg);
            if (r.statusCode == 200) {
                var ss = r.body.json();
                if (ss["result"] == "0" || ss["result"] == 0) {
                    log("获取text成功:" + ss["content"])
                    var z = ss["content"]
                    if (z.indexOf('}') != -1) {
                        var z = z.split('}')[1]
                    }
                    return String(z)
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("获取中")
            sleep(3000)
        } catch (error) {
            print(error);
            sleep(3000)
        }
    }
}

function findeclick(kj, te, ys) {
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
    }
    return false
}
// var z = '你好'
// if (z.indexOf('}') !=-1){
//     var z = z.split('}')[1]
// }

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
        log(error);
        return 1
    }
}


function getText(uiObj) {
    while (1) {
        //微信的聊天文本不能直接获取到 这里模拟双击在文本详情界面获取内容
        //获取文字区域 模拟双击
        // var last_ji_rect = uiObj.findOne().bounds();
        press(uiObj.centerX(), uiObj.centerY(), 1);
        sleep(40)
        press(uiObj.centerX(), uiObj.centerY(), 1);
        sleep(1000)
        if (text('聊天气泡').exists() || text('设置').exists()) {
            var li = getAllTexts()
            var z = ['聊天气泡', '默认', '设置', '更多装扮']
            for (var x = 0; x < z.length; x++) {
                for (var i = 0; i < li.length; i++) {
                    if ((li[i]).indexOf(z[x]) != -1) {
                        index = i;
                        li.splice(index, 1);
                    }
                }
            }
            back()
            sleep(1000)
            log(li[0])
            return li[0]
        }
    }
}


// var id_x = id('com.immomo.momo:id/message_layout_messagecontainer').find()
// var id_z = id_x[id_x.length - 1].bounds()
// log(id_z.left)
// if (id_z.left < 200) {
//     log('11')
// }
// var x
// var obj = id('com.immomo.momo:id/message_layout_messagecontainer').find()
// if (obj.length > 0) {
//     obj = obj[obj.length - 1]
//     x = obj.bounds().left
// }
// log(x)
// if (x < 200) {
//     log('11')
// }

function zonghe() {
    if (text('全部通知').exists() && (desc('通知类型').exists() || desc('通知设置').exists() || id('com.immomo.momo:id/notice_category').exists())) {
        // log('11')
        back()
        sleep(800)
    }
    if (desc('忽略未读').exists() && (desc('骚扰信息').exists() || textContains('收到的招呼').exists())) {
        //收到的招呼界面
        // log('21')
        back()
        sleep(800)
    }
    if (textContains('订阅内容').exists() && !id('com.immomo.momo:id/icon').exists()) {
        //订阅内容界面
        // log('21')
        back()
        sleep(800)
    }
    if (text('猜你喜欢').exists() && (text('关注').exists() || id('com.immomo.momo:id/appbar_id').exists())) {
        //猜你喜欢界面
        // log('31')
        back()
        sleep(1000)
    }
    if (text('天天抢车位').exists() && (id('avatarInfoBox').exists() || text('去停车').exists() || text('我的车').exists())) {
        //天天抢车位界面
        // log('41')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/icon_first').exists() && (id('com.immomo.momo:id/match_list_entry').exists() || id('com.immomo.momo:id/menu_my_slide_card_profile').exists())) {
        //点点界面
        // log('51')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/chat_menu_profile').exists() && text('与陌陌对话').exists()) {
        //与陌陌对话界面
        // log('61')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/chat_menu_profile').exists() && text('与MOMO群组对话').exists()) {
        //与MOMO群组对话界面
        // log('71')
        back()
        sleep(1000)
    }
    if (text('账号管理').exists() && text('管理').exists() && text('退出当前帐号').exists()) {
        //账号管理界面
        // log('81')
        back()
        sleep(1000)
    }
    if (text('天天庄园').exists() && (text('点击头像可查看个人信息').exists() || text('欢迎来到天天庄园').exists() || text('附近').exists() && text('关注').exists())) {
        //天天庄园界面
        // log('81')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/notice_iv_unread_count').exists() && id('com.immomo.momo:id/notice_setting').exists() ) {
        var xx = id('com.immomo.momo:id/notice_iv_unread_count').findOnce().bounds()
        // log('互动通知')
        click(500, xx.centerY())
        sleep(2000)
        // log('91')
        back()
    }
    if (desc('骚扰消息').exists() && text('收到的招呼').exists() && !id('com.immomo.momo:id/icon').exists()) {
        //附近人打招呼界面
        findeclick("id", "com.immomo.momo:id/card_right_btn", 800)
        log('101')
        back()
    }
    if (text('招呼').exists() && id('com.immomo.momo:id/auto_reply_setting_entry').exists()) {
        //附近人打招呼界面
        findeclick("id", "com.immomo.momo:id/card_right_btn", 800)
        log('101')
    }
    if (text('招呼').exists() && text('暂无新招呼').exists() && (id('com.immomo.momo:id/auto_reply_setting_entry').exists() || id('com.immomo.momo:id/history_sayhi_entry').exists())) {
        //招呼界面
        log('101')
        back()
    }
}

// while(1){
//     zonghe()
// }
var zhanghao= 'zhanghao',
mima= 'mima',
dd= 'dd',
gh= 'gh',
banben= 'banben'
function upbeifen(dd, gh) {
    log("上传备份")
    while (1) {
        try {
            var res = http.post(api.beifen, {
                "phone": zhanghao,
                "pass": mima,
                "data": dd,
                "gh": gh,
                "bb": banben
            });
            if (res.statusCode == 200) {
                toastLog("上传成功")
                log("html = " + res.body.string());
                break
            } else {
                toastLog("没网")
                sleep(3000)
            }
        } catch (error) {
            toastLog(error);
            sleep(2000)
        }
    }
}

if (id('com.immomo.momo:id/toolbar_id').exists() || id('com.immomo.momo:id/icon_first').exists() && id('com.immomo.momo:id/ic_match_list').exists()) {
    //点点界面
    back()
    sleep(800)
}