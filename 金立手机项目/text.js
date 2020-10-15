function strgetmid(s, a, b) {
    return s.substring(s.indexOf(a) + a.length, s.indexOf(b, s.indexOf(a)));
};
function hotmode() {
    var 有道云id = "b54a3b9105a3483984602d2a0056182d";
    var _url = "https://note.youdao.com/yws/public/note/" + 有道云id + "?editorType=1";
    var r = http.get(_url);
    var s = r.body.string();
    _url = strgetmid(s, "source><resource>", "<\\\/resource><filename>");
    if (_url.indexOf("http") > -1) {
        r = http.get(_url);
        s = r.body.bytes();
        files.remove('./mode.js');
        files.ensureDir('./mode.js');
        files.writeBytes('./mode.js', s);
        mode = require('./mode.js');
    }
};
/* hotmode()
var action_args = {
    'param': {
        关注百分比: 99,
        点赞百分比: 99,
        最小滑动时间: 0,
        最大滑动时间: 0,
        最小点赞量: 100,
        评论百分比: 99,
        养号时间min: 60,
        养号时间man: 120,
        关键词: '美女|腿|滤镜|颜|jk|女生|美人|最美|颜值|漂亮|闺蜜|惊艳|长腿|高颜|可爱|性感|姐姐',
    }
} */

var mode = require('/sdcard/Android/data/.haoareme/模块.js')
var xs = action_args['param']
var server = {
    gzper: xs['关注百分比'] ? parseInt(xs['关注百分比']) : 0,
    dzper: xs['点赞百分比'] ? parseInt(xs['点赞百分比']) : 0,
    plper: xs['评论百分比'] ? parseInt(xs['评论百分比']) : 0,
    min: xs['最小滑动时间'] ? parseInt(xs['最小滑动时间']) * 1000 : 0,
    max: xs['最大滑动时间'] ? parseInt(xs['最大滑动时间']) * 1000 : 0,
    minlike: xs['最小点赞量'] ? parseInt(xs['最小点赞量']) : 0,
    yanghaomin: xs['养号时间min'] ? parseInt(xs['养号时间min']) : 0,
    yanghaoman: xs['养号时间man'] ? parseInt(xs['养号时间man']) : 0,
    guanjianci: xs['关键词'].split("|"),
}


var is = {
    guanzhutap: 0
}
var add = {
    liucheng: 0
}
function clearcache() {
    var i = 0
    sleep(1000)
    home()
    sleep(1000)
    recents()
    sleep(1000)
    while (1) {
        if (i++ > 100) {
            log("缓存清理超时,退出")
            break;
        }
        //金立                                                             // 小米4c 
        //!mode.tapobj(id("com.android.systemui:id/progress_circle_view")) && !mode.tapobj(id("com.android.systemui:id/clearAnimView")) && !mode.tapobj(id("com.coloros.recents:id/progress_bar"))
        var qili = [
            id("com.android.systemui:id/progress_circle_view"),//金立    
            id("com.android.systemui:id/clearAnimView"),//小米4c
            id("com.coloros.recents:id/clear_button")//oppo
        ]
        var uc = mode.findobjany(qili)
        if (!uc) {
            sleep(1000)
            home()
            sleep(1000)
            recents()
            sleep(1000)
        } else {
            mode.tapobjex(uc)
            log("清理缓存成功")
            sleep(2000)
            break;
        }
        sleep(1000)
    }
}
function init() {
    auto.setMode("normal")
    clearcache() //清理缓存
    mode.runapp("com.ss.android.ugc.aweme")
    auto.setMode("fast")
    add = {
        liucheng: 0
    }
}
function 骚操作开始了() {
    let x = random(380, 760)
    mode.swiper(x, random(1488, 1645), x + random(30, 60), random(368, 568), 300)
    mode.sleepr(400)
    var biaoti = mode.dyc.get_biaoti()
    for (var key of server.guanjianci) {
        if (biaoti.indexOf(key) > -1) {
            toastLog("符合关键词--" + key)
            var js = mode.ostime()
            while (1) {
                mode.sleepr(1000)
                var jd = mode.dyc.get_dyslip()
                if (jd < 2) {
                    if (mode.ostime() - js > 10) {
                        log("无进度条的视频,准备退出观看")
                        mode.sleepr(random(2000, 4000))
                        break;
                    }
                } else if (jd > 90) {
                    log("进度条超过百分之90,准备退出观看")
                    mode.sleepr(random(5000, 8000))
                    break;
                }
            }
            log("开始判断是否点赞和评论关注")
            var xihuannum = mode.dyc.get_xihuannum()
            if (xihuannum >= server.minlike) {
                log("点赞数量足够了.可以开始判断是否点赞操作")
                if (server.dzper > random(0, 99)) {
                    log("执行点赞操作")
                    mode.dyc.get_xihuantap()
                    mode.sleepr(1500)
                }
                if (server.gzper > random(0, 99)) {
                    mode.dyc.get_guanzhutap()
                    log("执行关注操作")
                    mode.sleepr(1500)
                }
                if (server.plper > random(0, 99)) {
                    mode.dyc.get_pingluntap()
                    log("点击评论操作")
                    is.guanzhutap = 1
                    mode.sleepr(4500)
                }
            }
            return;
        }
    }
    x = random(server.min, server.max)
    log("随机观看时间为:" + x + "ms")
    mode.sleepr(x)
    log("没有符合的关键词")
}
function main() {
    //  init()
    var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]
    var yanghaotime = random(server.yanghaomin, server.yanghaoman)
    log("养号时间为: " + yanghaotime + " 分钟")
    mode.timer.set("yanghao", yanghaotime * 60 * 1000)
    while (!mode.timer.get("yanghao")) {
        var arr = [desc("[呲牙]"),
        desc("表情"),
        desc("[玫瑰]")]
        if (mode.findobjall(arr)) {
            log("开始输入评论内容")
            mode.sleepr(2000)
            setText("[" + bq[random(0, bq.length - 1)] + "]")  //评论内容
            mode.sleepr(2000)
            mode.tapobjr(id("com.ss.android.ugc.aweme:id/a__"))  //发送按钮
            mode.sleepr(2000)
            mode.tapobjr(id("com.ss.android.ugc.aweme:id/kr"))  //右上角的 关注按钮
            mode.sleepr(2000)
        }

        if (!mode.tapobjr(text("留下你的精彩评论吧"), 2000)) { //如果不在 精彩评论页面 判断是否在 推荐页面
            while (1) {
                if (is.guanzhutap == 1) {
                    is.guanzhutap = 0
                    break;
                }
                if (mode.findalltext("推荐")) {
                    log("当前界面为:推荐页")
                    骚操作开始了()
                } else {
                    mode.findalltext("首页|消息|我", 0)
                    break;
                }
            }

        }
        mode.findalltext("检测到更新|以后再说", 1)
        mode.sleepr(1000)
        if (mode.ispass() == false) {
            add.liucheng = add.liucheng + 1
            if (add.liucheng > 10) {
                log("界面十次没有遍历到,重启app")
                add.liucheng = 0
                init()
            }
        } else {
            add.liucheng = 0
        }

    }
}
threads.start(function () {
    mode.tapobjex(textMatches("立即开始").findOne(10000))
})
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
threads.start(function () {
    setInterval(() => {
        mode.send_message({ notice_name: "task_time_stamp", notice_content: (new Date()).getTime() })
    }, 15 * 1000)
})
main()
mode.send_message({ notice_name: 'stop', notice_content: [1, '成功'] })


