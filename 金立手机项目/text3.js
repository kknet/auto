log("tKB")
auto("fast");
var TKB = require('/sdcard/tkb2.js');
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}


// city_list = ['温州','杭州','玉林','沈阳']
// var cityz = city_list[random(0,city_list.length-1)]
// log( get_phone('861065032044357', cityz, '2', '1', [1,5]) )
var sx = device.width, sy = device.height
var jy = null, jys = null
var isget = 0 //为0 找控件 不为零 不找 
function getdyslip(idtz) {
    if (isget == 0) {
        var uc, y, img, ys, ucs
        var j = new Array(2), jj = new Array(2), jjj = new Array(2)
        //uc = id("com.ss.android.ugc.aweme:id/us").find() //oppo 抖音11..0.0
        //"com.ss.android.ugc.aweme:id/y5" //小米4c 12.1.0 
        uc = id(idtz).find(); 
        log(uc.length)
        if (uc.length > 0) {
            for (var i = 0; i < uc.length; i++) {
                ucs = uc[i];
                y = ucs.bounds().top;
                if (y > sy * 3 / 4 && y < sy) {
                    break;
                }
            }
            log("坐标位置:", y)
            jy = y
            img = images.captureScreen()
            for (var i = 0; i < 2; i++) {
                j[i] = images.pixel(img, 0, jy + i);
                jj[i] = images.pixel(img, 1, jy + i);
                jjj[i] = images.pixel(img, 2, jy + i);
            }
            log(j[0], j[1], jj[0], jj[1], jjj[0], jjj[1]);
            if (j[0] == j[1] && jj[0] == jj[1] && jjj[0] == jjj[1] || j[0] == jj[0] && j[0] == jjj[0]) {
                ys = j[0];
                if (colors.isSimilar(colors.toString(ys), colors.toString(-16711679), 10, "diff")) {
                   // log("黑色底,没有进度条.视频长度短语15s")
                } else {
                   // log("视频时长超过15秒,开始判断,播放时间.")
                    jys = ys;
                    jy = y;
                    isget = 1;
                }
            }
        }
    }
    if (jys != null && jy != null) {
        return istime(jys, jy);
    } else {
        return 0;
    }
}
function istime(ys, y) {
    var img, x;
    img = images.captureScreen();
    x = 0;
    if (img != null) {
        x = isbftime(img, ys, y, x)
        if (x < 0) {
           // log("没找到颜色,视频可能从头开始了");
            x = 0;
            sleep(3000);
            // setxuanfu("当前视频进度:0%");
            return 0;
        } else {
            // setxuanfu("当前视频进度:" + (parseInt(x / sx * 100) + 1) + "%");
            return (parseInt(x / sx * 100) + 1);
        }
    }

}
function isbftime(img, ysz, y, x) {
    // log("颜色值为: ", ysz, " ---- rbg: ", colors.toString(ysz))
    var imgx = img.getWidth()
    //var t = ostime(1)
    while (1) {
        if (x >= imgx) {
            x = imgx - 1;
        }
        try {
            if (images.detectsColor(img, ysz, x, y, 16, "diff")) {
                x = x + 3;
            } else {
                x = x - 1;
                break;
            }
        } catch (error) {
            //log("找色报错:", error, x, imgx)
        }

    }
    //log("坐标点:", x)
    //log("用时:", ostime(1) - t, "ms")
    return x
}
// var i = 0
// while(1){
//     if (id('com.ss.android.ugc.aweme:id/us').exists()){
//         log('存在进度条')
//         var slip = getdyslip('com.ss.android.ugc.aweme:id/us');
//         toastLog("当前视频进度:" + slip + "%");
//     }else{
//         log('没有进度条')
//         // sleep(random(7000,12000))
//         swipe(500, 1600, 600, 400, 500)
//         sleep(3000)
//     }
// }

sleep(1000)
var x = random(150, 750)
var y = random(600, 1200)
var z = 100
click(x, y)
sleep(z)
click(x, y)
sleep(z)
click(x, y)