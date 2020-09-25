"ui";



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
                          z = z.split('}')[1]
                    }
                      z=z.replace("菲菲","亲爱的")

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
function zonghe(){
    if (textContains('守护').exists() && textContains('轻甜号').exists()){
        back()
        sleep(1000)
    }
}
function huifu() {
    var a = 0
    while (1) {
        try {
            zonghe()
            if (id('com.xyz.qingtian:id/msg_total_unread').exists() && text('消息').exists() && scrollDown(1) == true) {
                if (a == 0) {
                    a = 1
                    sleep(2000)
                    swipe(530, 300, 500, 1700, 800)
                    sleep(random(800, 1200))
                }
                if (id('com.xyz.qingtian:id/conversation_unread').exists()) {
                    comment = id('com.xyz.qingtian:id/conversation_unread').find();
                    comment.forEach(item => {
                        var z = item.bounds()
                        // if (z.centerY() > 170 && z.centerY() < 1760) {
                        log('点击红点聊天')
                        click(500, z.centerY())
                        sleep(2000);
                        zonghe()
                        if(id('com.xyz.qingtian:id/face_btn').exists() && id('com.xyz.qingtian:id/voice_input_switch').exists()){//表情和语音ID判断在不在聊天界面
                            while (1) {
                                if (id('com.xyz.qingtian:id/msg_content_fl').exists()) {
                                    var id_x = id('com.xyz.qingtian:id/msg_content_fl').find()
                                    var id_z = id_x[id_x.length - 1]
                                    var id_y = id_z.children()
                                    for (var i = 0; i < id_y.length; i++) {
                                        var tv = id_y[i];
                                        if (tv.findOne(id("msg_body_tv")) != null) {
                                            log('不是语音');
                                            var textz = id('com.xyz.qingtian:id/msg_body_tv').find()
                                            var textx = textz[textz.length - 1].text()
                                            log('不是语音,text:' + textx);
                                            var answer = get_text(textx)
                                        } else {
                                            var answer = '手机坏了没有声音，能打字'
                                        }
                                    }
                                    sleep(1000)
                                    setText(answer)
                                    sleep(1000)
                                    click('发送')
                                    sleep(5000)
                                    if (text(answer).exists()) {
                                        toastLog('回复成功')
                                        back()
                                        sleep(2000)
                                        break
                                    }
                                } 
                            }
                        // } 
                        } 
                    })
                } else {
                    log('此页面没有了,下滑')
                    swipe(530, 1600, 500, 800, 800)
                    sleep(random(500, 1200))
                }
            } else if (id('com.xyz.qingtian:id/msg_total_unread').exists()) {
                while (scrollUp(1)) {
                    log('上滑')
                    scrollUp(1)
                    sleep(random(800, 1200))
                    a = 0
                }
                sleep(5000)
                log('到顶了')
            } else if (!id('com.xyz.qingtian:id/msg_total_unread').exists()) {
                if (text('好友').exists() && text('系统通知').exists()){
                    break
                }else{
                    swipe(530, 300, 500, 1700, 800)
                    sleep(random(800, 1200))
                }
            }
        } catch (error) {
            log(error)
            sleep(2000)
        }
    }
}

function main() {
    launch('com.xyz.qingtian')
    var BD = (new Date()).getTime()
  
    var tem = 0
    sleep(1000)
    while (1) {
        if (tem == 0) {
            click(540, 1850)
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
            auto.service.disableSelf();
        }
    });




    ui.emitter.on("resume", function () {
        // 此时根据无障碍服务的开启情况，同步开关的状态
        ui.autoService.checked = auto.service != null;

    });
    ui.runapp.on("click", () => {


        if (ui.runapp.getText() == "开始运行") {


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
events.on("exit", function () {
    threads.shutDownAll();
});

showUI()

