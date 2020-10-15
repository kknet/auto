

auto.waitFor()
var phone,token,code;
var uu = [];
var WIDTH = device.width,HEIGHT = device.height
var TKB = require('./tkb2.js')


if (!requestScreenCapture()) {      //截图权限申请
    alert("请求截图权限失败！");
    exit();
}

function yangHao(){
    toastLog("开始养号")
    while(true){
        baoming = currentPackage()
        if (baoming !="com.ss.android.article.news"){
            toastLog("打开抖音")
            log(baoming)
            launch("com.ss.android.article.news")
            sleep(3999)
        }
        else{
            break
        }
    }
    var newRunTime = random(20,40)                  //随机看新闻时间  20  40
    var dianzhenshijian = random(5,(newRunTime-2))
    var hua = random(5,10) 
    var temp = 0
    var outtime = TKB.ostime();
    var huaNeiRongNum = 0
    while(1){
        if (TKB.ostime() - outtime > dianzhenshijian*60){
            toastLog("养号结束")
            return true
        }
        if((text("首页").exists() && text("西瓜视频").exists() && text("我的").exists() ) ){
            log("首页")
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(random(2,5) * 1000);
            temp++;
            if (temp >=hua){       //随机次数到，去进入新闻
                if(TKB.funcFingIdClick("com.ss.android.article.news:id/cp2")){
                    sleep(3000)
                    temp = 1
                }
            }
        }
        if (id("com.ss.android.article.news:id/eb3").exists()){
            toastLog("新闻内容界面")
            swipe(WIDTH * 0.5, HEIGHT * 0.8, WIDTH * 0.5, HEIGHT * 0.2, 1200);
            sleep(random(2,5) * 1000);
            huaNeiRongNum++;
            if (huaNeiRongNum > 30 ){
                huaNeiRongNum = 0
                back()
                sleep(2000)
            }
        }
        if (id("com.ss.android.article.news:id/dd6").exists()){
            toastLog("看到点赞")
            back()
            sleep(2000)
        }
        if((text("分享").exists() && text("收藏").exists()) ){
            sleep(random(15,35) * 1000)
            back()
        }
    }
}


yangHao()