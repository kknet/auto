
auto.waitFor()
sleep(1000)
// var timex = rawInput("请输入运行时间,运行24小时输入0", "0");

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
                    if (z.indexOf('}') !=-1){
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
                zonghe()
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
                                if (id('com.xyz.qingtian:id/audio_play_iv').exists()) {
                                    back()
                                    sleep(2000)
                                    break
                                } else if (id('com.xyz.qingtian:id/msg_content_fl').exists()) {
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
                                        } else {
                                            var textx = '手机坏了没有声音，能打字'
                                        }
                                    }
                                    var answer = get_text(textx)
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
                                } else if (id('com.xyz.qingtian:id/audio_play_iv').exists()) {
                                    back()
                                    sleep(2000)
                                    break
                                }
                            }
                        }
                        // } 
                    })
                } else {
                    log('此页面没有了,下滑')
                    swipe(530, 1600, 500, 800, 800)
                    sleep(random(500, 1200))
                }
            } else if (id('com.xyz.qingtian:id/msg_total_unread').exists()) {
                while (scrollUp(1)) {
                    toastLog('上滑')
                    scrollUp(1)
                    sleep(random(800, 1200))
                    a = 0
                }
                sleep(5000)
                toastLog('到顶了')
            } else if (!id('com.xyz.qingtian:id/msg_total_unread').exists()) {
                break
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
    if (timex == 0) {
        var time = 1440
    } else {
        var time = timex
    }
    var tem = 0
    sleep(8000)
    while (1) {
        if (tem == 0){
            click(540, 1850)
            sleep(3000)
            tem = 1
        }
        huifu()
        if ((new Date()).getTime() - BD > time *60* 1000) {
            log("时间到了")
            home()
            break
        }
    }

}
// main()

    while (1) {
         if (id('com.xyz.qingtian:id/msg_content_fl').exists()) {
            var id_x = id('com.xyz.qingtian:id/msg_content_fl').find()
            var id_z = id_x[id_x.length - 1]
            var id_y = id_z.children()
            // log(id_y)
            // for (var i = 0; i < id_y.length; i++) {
                var tv = id_y[id_y.length - 1];
                // log(tv.findOne(id("msg_body_tv")))
                if (tv.findOne(id("msg_body_tv")) != null) {
                    log('不是语音');
                    var textz = id('com.xyz.qingtian:id/msg_body_tv').find()
                    var textx = textz[textz.length - 1].text()
                    log('不是语音,text:' + textx);
                    var answer = get_text(textx)
                } else {
                    var answer = '手机坏了没有声音，能打字'
                }
            // }
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