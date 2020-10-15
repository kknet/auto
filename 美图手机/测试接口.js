function getUuid(url){
    console.log('初始化用户设备信息')
    var Tb = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 60*1000){
                console.log("超时退出")
                return false
            }
            var r = http.get(url);
            if( r.statusCode == 200){
                var ss = r.body.json();
                if (ss["code"] === 0) {
                    return ss['data']
                } else {
                    console.log(r.body.string())
                    sleep(3000)
                }
            }
            else{
                console.log("没网")
                sleep(3000)
            }
        } catch(error) {
            console.log(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}

function getRunId(url){
    console.log('获取任务id')
    var Tb = (new Date()).getTime()
    while (1){
        try {
            if ((new Date()).getTime() - Tb > 60*1000){
                console.log("超时退出")
                return false
            }
            var r = http.get(url);
            if( r.statusCode == 200){
                var ss = r.body.json();
                if (ss["code"] === 0) {
                    return ss['data']
                } else {
                    console.log(r.body.string())
                    sleep(3000)
                }
            }
            else{
                console.log("没网")
                sleep(3000)
            }
        } catch(error) {
            console.log(error);
            sleep(random(3000,8000))
        }
        sleep(random(100, 10000))
    }
}

var wx_id = 'a1771380243', run_id = 0
function startTask(){
    var uuid_url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=YAY61uohgFkihxyGX1AoxVOM&client_secret=dHMfXBWmT76fBD2TY6GK3bFWBLQfDzY3'
    var uuid = getUuid(uuid_url)
    if (uuid){
        while (1){
            var run_url = 'http://aip.baidubce.com/api.php/potal/meitu/getrun?user_id='+uuid+'&der_id=1&run_id='+run_id
            var run_obj = getRunId(run_url)
            var run_name = run_obj['access_token'], run_id = run_obj['run_id']
            if (run_name === '加好友'){
                console.log('正在加好友')
                sleep(10000)
            }
            else if (run_name === '点赞'){
                console.log('正在点赞')
                sleep(10000)
            }
            else{
                sleep(10000)
            }
        }
    }
}

startTask()


var dz = "/sdcard/16k.pcm"

var cuid = '123456PYTHON'
var API_Key= 'YAY61uohgFkihxyGX1AoxVOM'
var Secret_Key = 'dHMfXBWmT76fBD2TY6GK3bFWBLQfDzY3'
function startTask(){
    var uid_url = 'https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id='+API_Key+'&client_secret='+Secret_Key
    var uid = getUuid(uid_url)
    if (uuid){
        while (1){
            var access_token = uid['access_token']
            log(files.read("/sdcard/16k.pcm"))
            // var run_url = 'https://vop.baidu.com/pro_api?dev_pid=80001&cuid='+cuid+'&token='+access_token
            var url = 'http://vop.baidu.com/server_api'
            var run_obj = http.postJson(url,{
                "format":"pcm",
                "rate":16000,
                "dev_pid":1537,
                "channel":1,
                "token":access_token,
                "cuid":cuid,
                "len":4096,
                "speech":xxx, 
            })
        }
    }
}