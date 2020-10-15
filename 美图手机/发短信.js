log("tKB")


var TKB = require('/sdcard/tkb2.js')

function huoquyzm(){
    log("获取本机验证码")
    var TC = (new Date()).getTime()
    var i=0;
    var sms=[];
    while(1){
        try {
            if ((new Date()).getTime() - TC > 60*1000){
                log("获取短信超时")
                if (sms.length > 0){
                    for(var i = 0;i< sms.length ;i++){
                        var dxnr = sms[i]["body"]   //短信内容
                        if (dxnr.indexOf(dxgj) != -1){
                            log("获取到短信2" + dxnr)
                            var reg = '[0-9]{4,6}';
                            var table = dxnr.match(reg)
                            var yzm = table[0]
                            return yzm
                        }
                    }
                }
                return false
            }
        } catch(error) {
            log("错误2" +error);
            sleep(2000)
            return false
        }
        try {
            importClass(android.net.Uri);
            SMS_INBOX = Uri.parse("content://sms/");
            var cr = context.getContentResolver();
            var projection = [
                "_id",
                "address",
                "person",
                "body",
                "date",
                "type"
            ];
            var cur = cr.query(SMS_INBOX, projection, null, null, "date desc");//此处报错是因为系统没允许autojs读取短信            
            if (null == cur) {
                log("************cur == null");
                return;
            }
            while (cur.moveToNext()){
                sms[i]={
                number:cur.getString(cur.getColumnIndex("address")),
                name:cur.getString(cur.getColumnIndex("person")),
                body:cur.getString(cur.getColumnIndex("body")),
                }
                i++;
                //至此就获得了短信的相关的内容, 以下是把短信加入map中，构建listview,非必要。
            }
            log (sms)
            // return sms;
            if (sms.length > 0){
                log("手机中发现短信")
                var dxnr = sms[0]["body"]   //短信内容
                if (dxnr.indexOf(dxgj) != -1){
                    log("获取到短信" + dxnr)
                    var reg = '[0-9]{4,6}';
                    var table = dxnr.match(reg)
                    var yzm = table[0]
                    return yzm
                }else{
                    toastLog("获取验证码中...")
                    sleep(3000)
                }
            }
        } catch(error) {
            log("错误" +error);
            sleep(2000)
        }
    }
}
function fadx(dxhm,dxnrx){
    var i = 0
    log('发短信')
    launch('com.android.mms')
    var TSD = (new Date()).getTime()
    while(1){
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            log('超时')
            back()
            sleep(1000)
            TKB.qinglihh('com.android.mms')
            sleep(3000)
            launch('com.android.mms')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('新信息').exists() && text('更多').exists()){
                log('写信息')
                click('新信息')
                sleep(2000)
            }
            if (text('收件人').exists() && text('发送').exists() && id('com.android.mms:id/pick_contacts_area').exists()){
                log('输入')
                click(400,150)
                sleep(2000)
                setText(0,dxhm)
                sleep(5000)
                click('输入内容')
                sleep(2000)
                setText(0,'本机号码查询')
                sleep(2000)
                id('com.android.mms:id/gn_send_msg_button').click()
            }
            if(text('无法发送此信息').exists()){
                log('发送失败')
                click('确定')
                sleep(500)
                back()
                sleep(2000)
            }
            'com.android.mms:id/gn_repeat_btn'
            'com.android.mms:id/gn_repeat_btn'
            if(id('com.android.mms:id/gn_title_name').exists()){
                log('发送成功')
                sleep(2000)
            }
            if (id('com.android.mms:id/gn_repeat_btn').exists()){
                if (i = 5){
                    log('发送失败5次，跳出')
                    return false
                }
                log('发送失败')
                sleep(10000)
                id('com.android.mms:id/gn_repeat_btn').click()
                log('重新发送')
                i++
                sleep(2000)
            }
        } catch (error) {
            sleep(1001)
            log(error)
        }

    }
}
// fadx('10001','本机号码查询')
// var xx = huoquyzm('业务号码')
if (id('com.android.mms:id/gn_repeat_btn').exists()){
    if (i = 5){
        log('发送失败5次，跳出')
        return false
    }
    log('发送失败')
    sleep(10000)
    id('com.android.mms:id/gn_repeat_btn').click()
    log('重新发送')
    i++
    sleep(2000)
    
}