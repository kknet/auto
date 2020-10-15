if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}






//********************************************************下载播放mp3***************************************************************

function dowmp3(){
    toastLog("下载mp3")
    while (1){
        try {
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
        } catch(error) {
            toastLog(error);
            sleep(random(3000,8000))
        }
    }
}

function bofangyy(){
    _THREADSS = threads.start(function (){
        log("去播放音乐")
        if( files.exists("/sdcard/观沧海.mp3") == false){
            log("没有音乐文件去下载")
            dowmp3()
            sleep(5000)
        }
        while(1){
            media.playMusic("/sdcard/观沧海.mp3",80);
            sleep(media.getMusicDuration());
            log("我还在播放音乐")
        }
    });
}

//写文本
function xieru(lujing, zhi){
	var aa = files.read(lujing)
	var file = open(lujing, "w");
	var zhanghao = aa.split("\n")
	for (var k in zhanghao){
		if (zhanghao[k] == ""){
			zhanghao.splice(k,k)
		}
	}  
	var geshu = zhanghao.push(zhi)
	file.writelines(zhanghao)
	file.close();
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
        //log(defaultSetting)
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
        log(error);
        return 1
    }
}

//关闭应用
function guanbiyy(bb){
    log("关闭应用")               //www.feiyunjs.com
    try{
        if (bb == 1){
            for(var i = 0; i < 10; i ++){
                sleep(500);
                back();
            }
        }else{
            // launch(bb);
            // sleep(2000);
            // let packageName = currentPackage();
            let packageName = bb
            log(packageName)
            app.openAppSetting(packageName);
            text(app.getAppName(packageName)).waitFor();  
            let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
            if (is_sure.enabled()) {
                textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
                textMatches(/(.*确.*|.*定.*)/).findOne().click();
                log(app.getAppName(packageName) + "应用已被关闭");
                sleep(1000);
                back();
                sleep(1000);
                back();
                sleep(1000);
                back();
            } else {
                log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
                back();
                sleep()
                back();
            }
        }
    }catch(error) {
        log(error);
    }
}


//*******************************************************微博养号 *****************************************************************

function zonghe(){
    if(text("不了，谢谢").exists()){
        log("不了，谢谢")
        click("不了，谢谢")
        sleep(1000)
    }
    if(text("上滑观看更多内容").exists()){
        log("上滑观看更多内容")
        swipe(533,1630, 557,400,random(400, 600))
        sleep(1000)
    }

}

function wbyh(){
    log("微博养号")
    launch("com.sina.weibo")
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var ll = 0    //浏览此时
    var tem = 0
    while(1){
        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            guanbiyy("com.sina.weibo")
            break
        }
        if ((new Date()).getTime() - TSD > 3*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            guanbiyy("com.sina.weibo")
            sleep(3000)
            launch("com.sina.weibo")
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if(text("热门").exists() && desc("微博").exists() && text("推荐").exists() || text("关注").exists() && text("推荐").exists()){
            log("首页")
            TSD = (new Date()).getTime()
            if (tem == 0){
                log("刷新首页")
                try{
                    var aa = text("推荐").findOnce().bounds()
                    if (aa != null){
                        log(aa.centerX())
                        log(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                        click(aa.centerX(), aa.centerY())
                        sleep(2000)
                        swipe(557,400,533,1630,random(400, 600))
                        sleep(4000)
                    }
                } catch(error) {
                    log("异常了")
                } 
                tem = 1
            }else{
                log("浏览微博")
                var bb = random(1, 5)
                for(var i = 0;i< bb ;i++){
                    swipe(200,1630, 557,400,random(400, 600))
                    sleep(random(2000, 5000))
                }
                click(random(400, 800), random(400, 1500))
                sleep(3000)
            }
        }else{
            if(desc("微博").exists() && desc("消息").exists() || desc("微博").exists() && desc("我的资料").exists()){
                log("进入微博界面")
                click(100, 1950)
                sleep(1500)
            }
        }
        if(id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() && text("评论").exists() || text("转发").exists() && text("赞").exists()){
            log("评论界面")
            var bb = random(1, 5)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            var bs = random(1, 30)
            if (id("com.sina.weibo:id/iv_like_icon").exists() && bs == 29){
                log("点评论赞")
                try{
                    var aa = id("com.sina.weibo:id/iv_like_icon").findOnce().bounds()
                    if (aa != null){
                        log(aa.centerX())
                        log(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(500)
                    }
                } catch(error) {
                    log("异常了")
                } 
            }
            ll = ll  + 1 
            if (ll > 10){
                log("浏览评论的次数够了")
                tem = 0
                ll = 0
            }
        }
        if(id("com.sina.weibo:id/story_feed_comment").exists() && id("com.sina.weibo:id/story_close_zone").exists() || text("写评论").exists() && id("com.sina.weibo:id/story_feed_like").exists()){
            log("观看视频界面")
            var vb = (new Date()).getTime()
            var ss = random(15, 40)
            while(1){
                if ((new Date()).getTime() - vb > ss*1000){
                    log("观看时间到了")
                    break
                }else{
                    toastLog("观看视频中")
                    sleep(2000)
                }
            }
            if (ss == 39){
                log("点视频赞")
                click(800, 1950)
                sleep(1500)
            }
            if (ss > 35){
                log("滑至下一个视频")
                swipe(533,1630, 557,400,random(400, 600))
                sleep(2000)
            }else{
                log("退出视频播放")
                back()
                sleep(1500)
            }
        }
        if(desc("转发").exists() && desc("评论").exists() && id("com.sina.weibo:id/detail_activity_header_left_button_text").exists() || desc("赞").exists() && id("com.sina.weibo:id/detail_activity_header_right_button_text").exists()){
            log("浏览文章")
            var bb = random(4, 8)
            for(var i = 0;i< bb ;i++){
                swipe(533,1630, 557,400,random(400, 600))
                sleep(random(2000, 5000))
            }
            sleep(3000)
            back()
            sleep(1200)
        }
        if(id("com.sina.weibo:id/nomarl_like_image").exists() && id("com.sina.weibo:id/btn_retweet").exists() || text("收起").exists() && id("com.sina.weibo:id/btn_show_more").exists()){
            log("观看图片界面")
            sleep(3000)
            var ss = random(1, 40) 
            if (ss > 38){
                log("点图片赞")
                click(892, 1970)
                sleep(1000)
            }
            back()
            sleep(1000)
        }
        zonghe()
    }
}









bofangyy()
wbyh()


var user = "3"

function UI(){
    var dy = "xz"
    if (files.exists("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/xgs1.txt")){
        dy = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/xgs1.txt")
    }
    var thread = threads.start(function(){
        user = rawInput("请输入项目名称", dy);
    });
    //等待该线程完成
    thread.join(60*1000);
    click("确定")
    sleep(2000)
    click("确定")
    sleep(1200)
    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/123.txt", user)
}

function gengxin(){
    log("检测更新脚本")
    files.createWithDirs("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt");
    while (1){
        try {
            var r = http.get("http://120.79.199.143/mubei/meitu/"+user+".txt");
            if( r.statusCode == 200){
                var body =  r.body.string()
                log("html = " +body);
                var bb = files.read("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt")
                if (body== bb){
                    log("已经是最新版本")
                }
                else{
                    log("版本更新")
                    sleep(3000)
                    files.write("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/"+user+".txt", body);
                    dowscripte(body)
                }
                return body
            }
            else{
                log("没网")
                sleep(3000)
            }
        } catch(error) {
            log(error);
            sleep(2000)
        }
    }
}

function dowscripte(url){
    log("加载脚本")
    var dirpath = "/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu.js";
    while (1){
        try {
            let imgurl = url;
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(dirpath, res.body.bytes());
                // engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/1-1.js");
                // log("停止当前运行的脚本")
                // exit()
                sleep(2000)
                break
            } else {
                log("网络异常");
                sleep(2000)
            };
        } catch(error){
            log(error);
            sleep(2000)
        }
    }
    log("加载脚本完成")
}

// UI()
var gg = gengxin()
engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu.js");

exit()

// ws()
// dlqq()
// var ss = getAllTexts()
// log(ss)
// var baoming = currentPackage()
// log(baoming)
log(getClip()+"**")
// qqyanghao()
// xiugtx()







