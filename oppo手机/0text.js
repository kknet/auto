log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

function iskeyopen(keylist) {
    sleep(1000)
    log('关键词判断')
    var res = false;
    //是否开启关键词检测

    //检测当前视频标题
    // log(keylist)

    for (let i = 0; i < keylist.length; i++) {
        try {
            var vediotext = id('a93').className('android.widget.TextView').findOnce() ? id('a93').className('android.widget.TextView').find()[1].text() : '';
        
        } catch (e) {
            log(e)
            continue;
        }
        // log('标题' + vediotext)
        if (vediotext.indexOf(keylist[i].replace(/[\r\n]/g, "")) != -1) {
            res = true;
            // log('关键词' + keylist[i])
            log('关键词通过')
            log('内容' + vediotext)
        }

    }
    log('内容' + vediotext)
    return res;
}
var zz = '美女|腿|滤镜|颜|jk|女生|美人|最美|颜值|漂亮|闺蜜|惊艳|长腿|高颜|舞蹈|可爱|性感|姐姐|女友|火箭少女|创造营'
var word = zz.split('|')
while (1) {
    try {
        var z = iskeyopen(word)
        if (text('点击进入直播间').exists() || text('直播中').exists() || z == false) {
            log('下滑')
            swipe(random(400, 600), 1600, random(400, 600), 400, random(500, 800));
            z = ''
        } else {
            log('word')
            swipe(random(400, 600), 1600, random(400, 600), 400, random(500, 800));
            z = ''
        }
    } catch (error) {

    }
}