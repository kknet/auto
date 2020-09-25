"ui";
var arr = []

var storage = storages.create("QQ");
var xiaoxi = storage.get("xiaoxi", 70)
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

function get_text(msg) {
    log("获取回复")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log("超时没获取到回复退出")
                return false
            }
            var apikey = 'a40be5880c6d47fc87c7da222d0d1424'
            var api_url = 'http://www.tuling123.com/openapi/api'
            data = {
                "key": apikey,
                "info": msg,
                "userid": '187834666003',
            }
            var res = http.post(api_url, data);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                if (ss["code"] == "100000" || ss["code"] == 100000) {
                    log("获取text成功:" + ss["text"])
                    var z = ss["text"]
                    if (z.indexOf("").exists()){

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

function zonghe() {
    if (text('全部通知').exists() && (desc('通知类型').exists() ||desc('通知设置').exists() || id('com.immomo.momo:id/notice_category').exists())) {
        log('11')
        back()
        sleep(800)
    }
    if (desc('忽略未读').exists() && (desc('骚扰信息').exists() || textContains('收到的招呼').exists())) {
        //收到的招呼界面
        log('21')
        back()
        sleep(800)
    }
    if (text('猜你喜欢').exists() && (text('关注').exists() || id('com.immomo.momo:id/appbar_id').exists())) {
        //猜你喜欢界面
        log('31')
        back()
        sleep(1000)
    }
    if (text('天天抢车位').exists() && (id('avatarInfoBox').exists() || text('去停车').exists() || text('我的车').exists())) {
        //天天抢车位界面
        log('41')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/icon_first').exists() && (id('com.immomo.momo:id/match_list_entry').exists() || id('com.immomo.momo:id/menu_my_slide_card_profile').exists())) {
        //点点界面
        log('51')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/chat_menu_profile').exists() && text('与陌陌对话').exists()) {
        //与陌陌对话界面
        log('61')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/chat_menu_profile').exists() && text('与MOMO群组对话').exists()) {
        //与MOMO群组对话界面
        log('71')
        back()
        sleep(1000)
    }
    if (text('天天庄园').exists() && (text('点击头像可查看个人信息').exists() || text('欢迎来到天天庄园').exists() || text('附近').exists() && text('关注').exists())) {
        //天天庄园界面
        log('81')
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/notice_iv_unread_count').exists()) {//互动通知的特殊红点id
        var xx = id('com.immomo.momo:id/notice_iv_unread_count').findOnce().bounds()
        log('互动通知')
        click(500, xx.centerY())
        sleep(2000)
        log('91')
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
    if (text('招呼').exists()  && text('暂无新招呼').exists() && (id('com.immomo.momo:id/auto_reply_setting_entry').exists() || id('com.immomo.momo:id/history_sayhi_entry').exists())) {
        //招呼界面
        log('101')
        back()
    }
}

function arradd(key) {
    if (arr[key] == undefined) {
        arr[key] = 1
    } else {
        arr[key]++
    }
    return arr[key]
}
var name;
function huifu() {
    while (1) {
        zonghe()
        if (id('com.immomo.momo:id/tab_item_tv_badge').exists()) {
            //如果底部信息有红点则有消息
            click(540,1820)
            sleep(20)
            click(540,1820)
            sleep(2000)
            if (id('com.immomo.momo:id/chatlist_item_tv_status_new').exists()) {//消息红点ID
                comment = id('com.immomo.momo:id/chatlist_item_tv_status_new').find();
                comment.forEach(item => {
                    var z = item.bounds()
                    // if (z.centerY() > 170 && z.centerY() < 1760) {
                    log('点击红点聊天')
                    click(500, z.centerY())
                    sleep(2000);
                    name = ''
                    zonghe()
                    if (id('com.immomo.momo:id/message_btn_voice').exists() && id('com.immomo.momo:id/message_btn_selectpic').exists()) { //表情和语音ID判断在不在聊天界面
                        while (1) {
                            name = id('com.immomo.momo:id/chat_user_name').findOnce().text()
                            if (id('com.immomo.momo:id/message_layout_messagecontainer').exists()) {
                                var id_x = id('com.immomo.momo:id/message_layout_messagecontainer').find()//对话小弹窗的id
                                var id_z = id_x[id_x.length - 1]
                                // var id_y = id_z.children()
                                // for (var i = 0; i < id_y.length; i++) {
                                //     var tv = id_y[i];
                                var cs = arradd(name)
                                log('第几次'+cs)
                                if (cs < 10) {
                                    log('有次数回复');
                                    var textz = id('com.immomo.momo:id/message_tv_layouttextview').find()//对话小弹窗里面内容的id
                                    var idx = textz[textz.length - 1].bounds()
                                    var id_z_left = id_z.bounds().left
                                    if (id_z_left < 200) {
                                        var textx = getText(idx)
                                        // log('不是语音,text:' + textx);
                                        var answer = get_text(textx)
                                        if (answer == null || answer == ''){
                                            answer = get_text(textx)
                                        }
                                        sleep(1000)
                                        setText(answer)
                                        // arradd(name)
                                        sleep(1000)
                                        click('发送')
                                        sleep(3000)
                                        toastLog('回复成功')
                                    }
                                } else if(cs == 10){
                                    log('第10次');
                                    setText(xiaoxi)//xiaoxi为指定输入
                                    // arradd(name)
                                    sleep(500)
                                    click('发送')
                                    sleep(500)
                                    toastLog('回复成功')
                                }else {
                                    log('无次数');
                                }
                                // }
                                back()
                                sleep(800)
                                if (id('com.immomo.momo:id/message_btn_voice').exists() && id('com.immomo.momo:id/message_btn_selectpic').exists()) { //表情和语音ID判断在不在聊天界面
                                    back()
                                }
                                break
                            }
                        }
                        // } 
                    }
                })
            }else {
                log('此页面没有了,下滑')
                swipe(530, 1600, 500, 800, 800)
                sleep(random(500, 1200))
            }
        }
    }
}

function main() {
    launch('com.immomo.momo')
    var BD = (new Date()).getTime()
    var tem = 0
    sleep(10000)
    while (1) {
        if (tem == 0) {
            click(540, 1820)
            sleep(3000)
            tem = 1
        }
        huifu()
        /*     if ((new Date()).getTime() - BD > time * 1000) {
                log("时间到了")
                home()
                break
            } */
    }

}

function mains() {1
    threads.start(function () {
        main()
    })
}


function showUI() {
    ui.layout(
        <frame>

            <vertical >
                <Switch id="autoService" text="无障碍服务" textStyle="bold" checked="{{auto.service != null}}" color="#000000" textSize="16" />
                <linear>
                    <text w="auto" gravity="" color="#111111" size="16">发送内容:</text>
                    <input id="gengsuiid" w="*" h="auto" text="{{xiaoxi}}" singleLine="true" />
                </linear>
            </vertical>

            <linear gravity="bottom">
                <button style="Widget.AppCompat.Button.Colored" id="runapp" w="*" text="开始运行" />
            </linear>

        </frame>
    );


    ui.autoService.on("check", function (checked) {
        // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
        if (checked && auto.service == null) {
            app.startActivity({
                action: "android.settings.ACCESSIBILITY_SETTINGS"
            });
        }
        if (!checked && auto.service != null) {
            ui.autoService.checked = auto.service != null;
            toast("请不要关闭无障碍")
        }


    });




    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;

    });
    ui.runapp.on("click", () => {


        if (ui.runapp.getText() == "开始运行") {

            xiaoxi = ui.gengsuiid.text();
            storage.put("xiaoxi", xiaoxi)

            if (auto.service != null) {
                ui.runapp.setText("停止运行");
                mains()
            } else {
                toast("请打开无障碍权限")
            }

        } else {

            threads.shutDownAll();

            ui.runapp.setText("开始运行");

        }

    });


}

showUI()
