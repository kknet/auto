
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
function shouye() {
    log("我是----shouye----界面执行的函数")
    mode.swiper(500, 1500, 600, 300, 500)
    mode.sleepr(20000)
}
function pengyou() {
    log("我是----pengyou----界面执行的函数")
}


//界面特征放在一个数组里 有一小数组符合 就算达到此界面 ,

//小数组的特征都满足就会退出当前界面数组的循环去执行相应界面的函数 或者只是单纯点击.


var datall = {
    shouye: [
        [   // 此集合 在遍历查找的时候 会自动 更换位置所以请勿直接调用,要不你找错都找不到在哪里
            // 如果想使用此属性,请直接 使用模块里的findobjany 函数把此array 传进去 会返回找到的控件对象//放在集合里有一个存在即返回真
            //抖音首页界面 oppo 11.0
            id("com.ss.android.ugc.aweme:id/ayb"),
            //抖音首页界面 小4c
            id("com.ss.android.ugc.aweme:id/dby"),
            //抖音首页界面 oppo 11.3
            id("com.ss.android.ugc.aweme:id/aqf"),
   
        ],
      
        textMatches("朋友|探索")
    ],
    pengyou: [
        [   // 此集合 在遍历查找的时候 会自动 更换位置所以请勿直接调用,要不你找错都找不到在哪里
            // 如果想使用此属性,请直接 使用模块里的findobjany 函数把此array 传进去 会返回找到的控件对象//放在集合里有一个存在即返回真
            //抖音朋友界面 oppo 11.0
            id("com.ss.android.ugc.aweme:id/ahl"),
            //抖音朋友界面 小4c
            id("com.ss.android.ugc.aweme:id/fge"),
            
            //抖音朋友界面 oppo 11.3 探索界面和朋友同位置
            id("com.ss.android.ugc.aweme:id/d83"),
            //抖音朋友界面 oppo 11.3
            text("通讯录同步朋友"),
        ],
        text("消息")
    ],

    xiaoxi: [
        [   // 此集合 在遍历查找的时候 会自动 更换位置所以请勿直接调用,要不你找错都找不到在哪里
            // 如果想使用此属性,请直接 使用模块里的findobjany 函数把此array 传进去 会返回找到的控件对象//放在集合里有一个存在即返回真
            //抖音消息界面 oppo 11.0
            id("com.ss.android.ugc.aweme:id/hi"),
            //抖音消息界面 小4c
            id("com.ss.android.ugc.aweme:id/g9"),
            //抖音消息界面 oppo 11.3
            id("com.ss.android.ugc.aweme:id/g7"),
        ],
        text("我")
    ],
    ziliao: [
        [   // 此集合 在遍历查找的时候 会自动 更换位置所以请勿直接调用,要不你找错都找不到在哪里
            // 如果想使用此属性,请直接 使用模块里的findobjany 函数把此array 传进去 会返回找到的控件对象
            //放在集合里有一个存在即返回真
            //抖音资料界面 oppo 11.0
            id("com.ss.android.ugc.aweme:id/ebx"),
            //抖音资料界面 小4c
            id("com.ss.android.ugc.aweme:id/dxz"),
            //抖音资料界面 oppo 11.3
            id("com.ss.android.ugc.aweme:id/gy5"),
        ],
        text("首页")
    ],
    ido: [
        //在集合外的 要全部都识别到,并且集合内的至少要有一个存在的
        text("我知道了")
    ],
    tongxunlu: [
        //在集合外的 要全部都识别到,并且集合内的至少要有一个存在的
        text("发现通讯录好友"),
        text("取消"),
    ],
}
// 开启快速控件模式 
auto.setMode("fast")
//导入云模块. miluc.js
hotmode()
mode.sleepr(2000)
mode.getAccessibility()
// 需要递加的对象
var add = {
    // 一个流程下来 未出现界面的次数.
    liucheng: 0
}
//需要计时的对象
var timej = {
    // 一个流程下载的开始时间 
    liucheng: mode.ostime()
}

var server={
    dianzan:0,
    guanzhu:0
}

function main() {
    var uc = []
    while (1) {
        for (var key in datall) {
            add.tz = 0
            for (var obj of datall[key]) {
            
                /*if (mode.typeofs(obj) == "array") {
                         ucs = mode.findobjany(obj)
                     } else {
                         ucs = obj.findOnce()
                } */
                ucs = mode.typeofs(obj) == "array" ? mode.findobjany(obj) : obj.findOnce()

                if (ucs) {
                    uc[add.tz] = ucs
                    add.tz++
                } else {
                    add.tz = 0
                    break;
                }
            }
            if (add.tz > 0) {
                add.liucheng = 0; // 可用界面出现就重置流程次数
                timej.liucheng = mode.ostime(); // 可用界面出现就重置流程时间
                log("界面----" + key + "----出现了");
                if (key.indexOf("tap_")>-1) {
                    mode.tapobjex(uc[uc.length - 1], 100); //点击界面最后的对象 
                }
                mode.isfun(key)  //执行界面名称相应的函数 
                if (key.indexOf("_tap")>-1) {
                    mode.tapobjex(uc[uc.length - 1], 100); //点击界面最后的对象 
                }
            }
        }
        add.liucheng++
        if (add.liucheng == 10) {
            back();
            log("遍历10次界面没出现,返回一次");
            mode.sleepr(3000);
        } else if (add.liucheng > 10 && mode.ostime() - timej.liucheng > 120) {
            log("界面没找到,重新来过.");
            //这里应该大概率是 清理缓存重新来  或者是执行卡点函数
            //如果执行完卡点函数  还是不出现datall 对象里的界面 就可以清理缓存 重新来过..


            //执行完以上操作流程 之后重置数据
            add.liucheng = 0; // 可用界面出现就重置流程次数
            timej.liucheng = mode.ostime(); // 可用界面出现就重置流程时间
        }
    }
}

//入口函数

main()



































