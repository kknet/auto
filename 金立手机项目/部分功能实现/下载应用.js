//查看应用版本
function getVerName(name){
    try{
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name){
                return pkgs[i].versionName;
            }
        }
        return false
    }catch (e){
        log("出错"+ e)			
        sleep(3000);
        return false
    }
}

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

function wdjxiazai(name, banebn){
    log("豌豆荚下载应用"+ name)   //豌豆荚
    var waddj = getPackageName("豌豆荚")
    if (waddj == null){
        var lujing  = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/wandoujia.apk"
        log("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(5000)
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var TSD = (new Date()).getTime()
    while(1){
        if(text("完成").exists() && text("打开").exists()){
            log("完成")
            click("完成")
            back()
            sleep(500)
            back()
            sleep(1000)
            return true
        }
        var bmname = getPackageName(name)
        if (bmname != null){
            toastLog("已经安装了该应用："+bmname)
            sleep(2000)
            toastLog("版本号："+ getVerName(name))
            back()
            sleep(500)
            home()
            sleep(1000)
            return true
        }

        if ((new Date()).getTime() - RT > stt*60*1000){
            log("时间够了退出")
            qinglihh("com.wandoujia.phoenix2")
            return false
        }
        if ((new Date()).getTime() - TSD > 6*60*1000){
            log("超时没在首页")
            back()
            sleep(1000)
            qinglihh("com.wandoujia.phoenix2")
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if(text("跳过").exists()){
            log("跳过")
            click("跳过")
            sleep(2000)
        }
        if(text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()){
            log("首页点搜索")
            click(860, 160)
            sleep(2000)
        }
        if(id("com.wandoujia.phoenix2:id/a08").exists() && id("com.wandoujia.phoenix2:id/hl").exists() || id("com.wandoujia.phoenix2:id/c4").exists() && id("com.wandoujia.phoenix2:id/a7h").exists()){
            log("搜索界面输入")
            setText(name)
            sleep(1000)
            click(1000, 160)
            sleep(2000)
        }

        if(text("立即安装").exists() && text("取消").exists()){
            log("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if(text("提示").exists() && text("确定").exists() && text("取消").exists()){
            log("提示")
            click("确定")
            sleep(2000)
        }

        if(text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists() ){
            log("搜索结果页面")
            sleep(1000)
            if (id("com.wandoujia.phoenix2:id/f0").exists()){
                log("看到搜索结果")
                click(500, 360)
                sleep(4000)
            }else{
                log("没有搜索结果")
                setText(name)
                sleep(1000)
                click(1000, 160)
                sleep(4000)
            }
        }

        if(text("评价").exists() && id("com.wandoujia.phoenix2:id/b11").exists() || text("评价").exists() && id("com.wandoujia.phoenix2:id/zz").exists() || text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/ej").exists() ){
            log("搜索结果页面")
            if(text("历史版本").exists() && text("系统权限").exists()){
                log("看到历史版本")
                // click("看到历史版本")
                // sleep(4000)
                var ss = text("历史版本").findOnce().bounds();
                log(ss.centerX())
                log(ss.centerY())
                if (ss.centerY() < 1880){
                    click(ss.centerX(), ss.centerY());
                    sleep(3000)
                }else{
                    log("下滑2")
                    swipe(557,1600, 533,400, random(400, 1000))
                    sleep(1000)
                }
            }else{
                log("下滑")
                swipe(557,1600, 533,400, random(400, 1000))
                sleep(1000)
            }
        }

        if(text("历史版本").exists() && id("com.wandoujia.phoenix2:id/ano").exists() || id("com.wandoujia.phoenix2:id/g4").exists() && id("com.wandoujia.phoenix2:id/hr").exists() || text("历史版本").exists() && id("com.wandoujia.phoenix2:id/hr").exists()){
            log("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()){
                try{
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称："+cc)
                    if (cc.indexOf(name) != -1 ){
                        var ss = getAllTexts()
                        log(ss)
                        var cd = 0
                        for(j = 0,len=ss.length; j < len; j++){
                            log("获取的值："+ ss[j])
                            if (ss[j].indexOf(banebn) != -1){
                                log("找到该版本了"+ ss[j])
                                cd = 1
                                var bb = text(ss[j]).findOnce().bounds();
                                log(bb.centerX())
                                log(bb.centerY())
                                if (bb.centerY() < 2030){
                                    click(920, bb.centerY()-53); 
                                    sleep(10000)
                                }else{
                                    log("微调")
                                    swipe(557,1500, 533,800, random(400, 1000))
                                    sleep(1000)
                                }
                            }
                        }
                        if (cd == 0 ){
                            log("没找到该版本")
                            swipe(557,1600, 533,500, random(400, 1000))
                            sleep(1000)
                        }
                        sleep(1500)
                    }else{
                        log("搜到的不是该应用")
                        back()
                        sleep(2000)
                        back()
                        sleep(3000)
                        back()
                        sleep(3000)
                    }
                }catch(error) {
                    sleep(1001)
                    log(error);
                }
            }else{
                if (id("com.wandoujia.phoenix2:id/ano").exists()){
                    try{
                        var cc = id("com.wandoujia.phoenix2:id/ano").findOnce().text()
                        log("应用名称2："+cc)
                        if (cc.indexOf(name) != -1 ){
                            var ss = getAllTexts()
                            log(ss)
                            var cd = 0
                            for(j = 0,len=ss.length; j < len; j++){
                                log("获取的值2："+ ss[j])
                                if (ss[j].indexOf(banebn) != -1){
                                    log("找到该版本了2"+ ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030){
                                        click(920, bb.centerY()-53); 
                                        sleep(10000)
                                    }else{
                                        log("微调2")
                                        swipe(557,1500, 533,800, random(400, 1000))
                                        sleep(1000)
                                    }
                                }
                            }
                            if (cd == 0 ){
                                log("没找到该版本2")
                                swipe(557,1600, 533,500, random(400, 1000))
                                sleep(1000)
                            }
                            sleep(1500)
                        }else{
                            log("搜到的不是该应用2")
                            back()
                            sleep(2000)
                            back()
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    }catch(error) {
                        sleep(1001)
                        log(error);
                    }
                }
            }
        }
        
        if(text("设置").exists() && text("取消").exists()){
            log("设置")
            click("设置")
            sleep(2000)
        }
        if(text("点击继续").exists() && text("稍后下载").exists()){
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if(text("选好了，安装").exists()){
            log("选好了，安装")
            click(80, 110)
            sleep(2000)
        }
        if(text("你可能需要").exists() || id("com.wandoujia.phoenix2:id/a83").exists()){
            log("你可能需要")
            try{
                var bb = id("com.wandoujia.phoenix2:id/a83").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY()); 
                sleep(2000)
            }catch(error) {
                sleep(1001)
                log(error);
            }
        }

        if(id("com.wandoujia.phoenix2:id/a7s").exists() || text("你可能需要").exists()){
            log("选好了，安装2")
            try{
                var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY()); 
                sleep(2000)
            }catch(error) {
                sleep(1001)
                log(error);
            }
        }

        if(text("继续安装").exists() && text("取消").exists()){
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if(text("下一步").exists() && text("取消").exists()){
            log("下一步")
            click("下一步")
            sleep(2000)
        }
        if(text("安装未知应用").exists() && id("android:id/switch_widget").exists()){
            log("安装未知应用")
            try{
                var ss = id("android:id/switch_widget").findOnce().checked();
                if (ss == false){
                    var css = id("android:id/switch_widget").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                    back()
                    sleep(2000)
                }
            }catch(error) {
                sleep(1001)
                log(error);
            }
        }
        if(text("安装").exists() && text("取消").exists()){
            log("安装")
            click("安装")
            sleep(15000)
        }
        if(text("继续").exists() && text("退出").exists()){
            log("继续")
            click("继续")
            sleep(2000)
        }
        if(text("同意并授权").exists()){
            log("同意并授权")
            click("同意并授权")
            sleep(2000)
        }
        if(text("更新").exists() && text("取消").exists()){
            log("更新")
            click("取消")
            sleep(1000)
        }
    }
}

wdjxiazai('今日头条', 'v7.7.3')