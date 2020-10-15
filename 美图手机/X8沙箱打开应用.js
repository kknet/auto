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

// name = 'X8沙箱'
// banebn = 'V0.6.8.8-cn'
// wdjxiazai('X8沙箱','0.6.8.8-cn')
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

//清理缓存
function qinglihh(){
    var TB = (new Date()).getTime()
    back()
    sleep(500)
    home()
    sleep(1000)
	while(true){
		if ((new Date()).getTime() - TB > 30*1000){
            xgsrizhi("超时没完成")
            home()
            sleep(2000)
            back()
            sleep(2000)
			return false
        }
        try {

            if (id("com.android.systemui:id/clear_recents").exists()){
                xgsrizhi("点击清理")
                //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                var aa = id("com.android.systemui:id/clear_recents").findOnce().bounds();
                if (aa != null){
                    xgsrizhi(aa.centerX())
                    xgsrizhi(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                }
                sleep(2000)
                home()
                sleep(2000)
                return true
            }else{
                if (id("com.android.systemui:id/progress_circle_view").exists()){
                    xgsrizhi("点击清理2")
                    //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                    var aa = id("com.android.systemui:id/progress_circle_view").findOnce().bounds();
                    if (aa != null){
                        xgsrizhi(aa.centerX())
                        xgsrizhi(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                    }
                    sleep(2000)
                    home()
                    sleep(2000)
                    return true
                }else{
                    if (id("com.huawei.android.launcher:id/clear_all_recents_image_button").exists()){
                        xgsrizhi("点击清理3")
                        //id("com.android.systemui:id/clearAnimView").findOnce().xgs()
                        var aa = id("com.huawei.android.launcher:id/clear_all_recents_image_button").findOnce().bounds();
                        if (aa != null){
                            xgsrizhi(aa.centerX())
                            xgsrizhi(aa.centerY())
                            click(aa.centerX(), aa.centerY())
                        }
                        sleep(2000)
                        home()
                        sleep(2000)
                        return true
                    }else{
                        back()
                        sleep(500)
                        home()
                        sleep(2000)
                        recents()
                        sleep(3000)
                    }
                }
            }
        }catch (error) {
            sleep(1001)
            xgsrizhi(error);
        }
	}
}

function zonghe(){
    if (text('允许').exists() && text('拒绝').exists()) {
        log('允许')
        click('允许')
        sleep(2000)
    }
    if (text('服务条款和隐私政策提示').exists() && text('同意').exists()) {
        log('同意')
        click('同意')
        sleep(2000)
    }
    if (id('com.x8zs.sandbox:id/close').exists()) {
        log('同意')
        id('com.x8zs.sandbox:id/close').click()
        sleep(2000)
    }
    
}


//导入会玩
function drhw() {
    log('打开沙箱')
    launch('com.x8zs.sandbox')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            log('时间够了退出')
            qinglihh('com.x8zs.sandbox')
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            log('超时没在首页')
            back()
            sleep(1000)
            qinglihh('com.x8zs.sandbox')
            sleep(3000)
            launch('com.x8zs.sandbox')
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        try {
            zonghe()
            if (text('设置').exists() && id('com.x8zs.sandbox:id/setting').exists()) {
                log('点击设置')
                click('设置')
                sleep(1000)
            }
            if (text('分辨率').exists() && text('设置').exists() && text('Root权限管理').exists()) {
                log('分辨率')
                var xx = bounds(60, 890, 369, 939).findOnce().text()
                log(xx)
                if (xx == '1080X2160DPI480') {
                    var aa = text("分辨率").findOnce().bounds();
                    if (aa != null) {
                        log(aa.centerX())
                        log(aa.centerY())
                        click(aa.centerX(), aa.centerY())
                        sleep(1000)
                    }
                }
                if (text('设置分辨率').exists() && text('确认').exists()) {
                    log('设置分辨率')
                    click('原始比例，高画质')
                    sleep(1000)
                    click('确认')
                    sleep(1000)
                }
                back()
                sleep(1000)
            }
            if (text('公主连接').exists()) {
                log('找到应用了')
                var aa = text("电子邮箱").findOnce().bounds();
                if (aa != null) {
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(1000)
                }
            } else {
                var aa = text("导入应用").findOnce().bounds();
                if (aa != null) {
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(1000)
                }
            }
            if (text('会玩').exists() && text('导入应用').exists() && text('设置').exists()) {
                log('找到应用了')
                return true;
            } else {
                log('导入')
                var aa = text("导入应用").findOnce().bounds();
                if (aa != null) {
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY() - 120)
                    sleep(1000)
                }
                if (text('已安装的应用').exists() && text('安装包').exists()) {
                    log('已安装的应用')
                    click(180, 300)
                    if (text('会玩').exists()) {
                        var aa = text("会玩").findOnce().bounds();
                        if (aa != null) {
                            log(aa.centerX())
                            log(aa.centerY())
                            click(aa.centerX() + 620, aa.centerY() + 30)
                            sleep(1000)
                            back()
                            sleep(1000)
                        }
                    } else {
                        log('下滑')
                        swipe(random(300, 500), random(1700, 1900), random(300, 500), random(600, 800), random(1000, 1200))
                    }
                }
            }
        } catch (error) {
            Log(error)
            sleep(random(1000, 3000))
        }
    }
}