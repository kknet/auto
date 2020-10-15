
/*------------------------------------------------------------全局变量------------------------------------------------------------*/
this.vars = {
    modedev: {
        x: 0,  //手机横坐标x
        y: 0   //手机纵坐标y
    },
    modeis: {
        current: false,//是否使用当前界面模式
        addkongjian: 0,
    },
}
try {
    vars.modedev.x = device.width
    vars.modedev.y = device.height
} catch (error) {
    log("获取设备信息失败", error)
    log("使用默认设备信息x-1080,y-1920")
    vars.modedev.x = 1080
    vars.modedev.y = 1920
}
/*------------------------------------------------------------抖音函数------------------------------------------------------------*/
this.dyc = {
    x: vars.modedev.x,
    y: vars.modedev.y,
    tz: {
        biaoti: ""
    },
    same: {
        biaoti: ""
    },
    slip: {//进度条需要的变量 
        ui: 0,   //是否取颜色 
        x: 0,  //进度条上次位置记录
        y: 0,// 进度条的y坐标
        colo: "",//进度条颜色
    },
    fixnum: function (num) {
        if (num.indexOf("w") > -1) {
            num = num.replace("w", "")
            num = num * 10000
        }
        if (!Number(num)) {
            num = 0  //这里如果不是数字 就是置0
        }
        return num
    },
    get_biaoti: function () {  //获取抖音当前界面 标题 兼容11.0.0 11.3.0 其他版本无测试
        var lstz = this.tz.biaoti
        var biaoti
        for (let i = 1; i < 5; i++) {
            if (this.tz.biaoti == "") {
                lstz = "com.ss.android.ugc.aweme:id/a9" + i
            }
            var uc = id(lstz).boundsInside(1, 1, this.x - 1, this.y - 1).findOnce()
            if (uc) {
                this.tz.biaoti = lstz
                biaoti = uc.text()
                if (this.same.biaoti != biaoti) {
                    this.same.biaoti = biaoti
                    return this.same.biaoti
                }
            }
        }
        return ""
    },
    get_xihuannumu: function () {  //获取当前界面喜欢数量  建议使用前 先调用get_biaoti函数
        var uc = descMatches(".+选中，喜欢.+，按钮").boundsInside(1, 1, this.x - 1, this.y - 1).findOnce()
        var num = 0
        if (uc) {
            num = strgetmid(uc.desc(), "喜欢", "，按钮")
            num = this.fixnum(num)
        }
        return num
    },
    get_pinglunumu: function () {//获取当前界面评论数量  建议使用前 先调用get_biaoti函数
        var uc = descMatches("评论.+，按钮").boundsInside(1, 1, this.x - 1, this.y - 1).findOnce()
        var num = 0
        if (uc) {
            num = strgetmid(uc.desc(), "评论", "，按钮")
            num = this.fixnum(num)
        }
        return num
    },
    get_xihuantap: function () {//执行当前界面 点赞操作  建议使用前 先调用get_biaoti函数
        var uc = descMatches("未选中，喜欢.+，按钮").boundsInside(1, 1, this.x - 1, this.y - 1).findOnce()
        if (uc) {
            return tapobjex(uc);
        }
        return false;
    },
    get_guanzhutap: function () {//执行当前界面 关注操作  建议使用前 先调用get_biaoti函数
        var uc = desc("关注").boundsInside(1, 1, this.x, this.y).findOnce()
        if (uc) {
            return tapobjex(uc);
        }
        return false;
    },
    getdyslip: function () {//执行当前界面 进度条百分比  建议使用前 先调用get_biaoti函数
        if (this.slip.ui == 0) {
            var uc = className("android.widget.ProgressBar").boundsInside(0, 1, this.x, this.y - 1).findOnce()
            if (uc) {
                var img = images.captureScreen();
                if (img) {
                    this.slip.y = uc.bounds().top
                    if (this.slip.y < 0 || this.slip.y > this.y) {
                        return 0;
                    }
                    this.slip.colo = images.pixel(img, 1, this.slip.y);
                    this.slip.ui = 1;
                } else {
                    return 0;
                }
            } else {
                return 0;
            }
        }
        if (this.slip.ui == 1) {
            this.slip.x = this.isbftime(this.slip.colo, this.slip.y, this.slip.x);
            if (this.slip.x == 0) {
                return 0;
            }
            return parseInt(this.slip.x / this.x * 100) + 1;
        }

    },
    isbftime: function (ysz, y, x) {
        var img = images.captureScreen();
        if (img == null) {
            return 0
        }
        var imgx = img.getWidth()
        var imgy = img.getHeight()
        if (imgy < y) {
            return 0
        }
        var lx = x
        while (1) {
            if (x >= imgx) {
                return 0;
            }
            if (images.detectsColor(img, ysz, x, y, 32, "diff")) {
                x = x + 1;
            } else {
                if (lx == x) {
                    x = 0
                }
                x = x > 0 ? x - 1 : 0
                return x
            }
        }
    },
}
/*------------------------------------------------------------定时函数------------------------------------------------------------*/
this.timer = {  //定时器对象
    key: {},
    time: {},
    get: function (key) { //获取指定key 的 是否超时
        try {
            return ostime(1) - this.key[key] > this.time[key];
        } catch (error) {
            log("getimer报错,错误:  " + error)
        }
    },
    set: function (key, times) {//设置指定key 的 超时时间  
        this.key[key] = ostime(1)
        this.time[key] = times
    }
}
/*------------------------------------------------------------设置函数------------------------------------------------------------*/
/** 方法说明
 * @method setdymode 只取当前屏幕控件
 * @param {boolean} type 逻辑型  真假 真只取当前屏幕 假 所有控件
 * @return {*}   无返回值
 */
function setdymode(type) {
    vars.modeis.current = type
}
/*------------------------------------------------------------字符函数------------------------------------------------------------*/
/** 方法说明
 * @method strgetmid 字符串取中间
 * @param {string} s 字符串型  要提取的字符串
 * @param {string} a 字符串型  提取的前面一部分
 * @param {string} b 字符串型  提取的后面一部分
 * @return {string}    字符串型 返回查找的字符串
 */
function strgetmid(s, a, b) {
    return s.substring(s.indexOf(a) + a.length, s.indexOf(b, s.indexOf(a)));
};
/*------------------------------------------------------------时间函数------------------------------------------------------------*/
/** 方法说明
 * @method ostime
 * @param {boolean} mode 逻辑型 非0或空 皆为真 返回13位系统时间戳 否则10位系统时间戳
 * @return {int}   返回10位或者13位时间戳
 */
function ostime(type) {
    if (type) {
        return new Date().getTime();
    } else {
        return Date.parse(new Date()) / 1000;
    };
};
/** 方法说明 
 * @method alltime
 * @return {string} 返回 年-月-日 时:分:秒
 */
function alltime() {
    var t = new Date()
    return t.getFullYear() + "-" + fix(t.getMonth() + 1) + "-" + fix(t.getDate()) + " " + fix(t.getHours()) + ":" + fix(t.getMinutes()) + ":" + fix(t.getSeconds())
};
function fix(n) {
    return n < 10 ? "0" + n : n;
};
/*------------------------------------------------------------app函数------------------------------------------------------------*/
function runapp(apps) {
    for (let i = 0; i < 10; i++) {
        app.launchPackage(apps)
        var uc = idContains(apps).findOne(10000)
        if (uc) {
            log("app----" + apps + "----开启成功")
            break;
        }
    }
}
/*------------------------------------------------------------字符函数------------------------------------------------------------*/
/** 方法说明  typeof 的加强模式 方便分辨Array对象和Object 和JavaObject对象
 * @return {string} 返回数据类型
 */
function typeofs(o) {
    var fh = Object.prototype.toString.call(o)
    fh = fh.replace("[object ", "")
    fh = fh.replace("]", "")
    return fh.toLocaleLowerCase()
}
/*------------------------------------------------------------线程函数------------------------------------------------------------*/
/** 方法说明
 * @method th_start
 * @param {Array,function} fun 数组函数名,或者单独的函数名 
 * @return {线程id}   返回的线程id
 */
function th_start(fun) {
    var id = threads.start(function () {
        var type = typeofs(fun)
        if (type == "function") {
            fun();
        } else {
            if (type == "array") {
                fun.forEach(funs => {
                    if (typeofs(funs) == "function") {
                        funs();
                    } else {
                        try {
                            log(funs, ": 不属于函数.请核对好信息")
                        } catch (error) {
                            log("th_start内部报错,错误原因 : ", error)
                        }
                    }
                });
            } else {
                log("参数" + fun + ": 不属于函数.请核对好信息")
            }

        }
    });
    return id;
};
/*------------------------------------------------------------函数操作------------------------------------------------------------*/
/** 方法说明
 * @method isfun
 * @param {string} fun 判断字符串是否可以作为函数被调用
 * @param {无类型}  call 为空时 如果字符串可以作为函数被调用,直接调用函数.其他值不调用
 * @return {Boolean} true时,表示脚本中含有此函数,false时,脚本中无此函数可调用
 */
function isfun(fun, call) {
    try {
        var funs = this[fun];
        if (typeofs(funs) == "function") {
            if (call == null) {
                funs();
            };
            return true;
        } else {
            return false;
        };
    } catch (error) {
        log("isfun,报错:", error);
    };
};
/*------------------------------------------------------------控件操作------------------------------------------------------------*/
/** 方法说明  判断txt文本是否全部存在,根据参数is 和参数mod 判断是点击和点击模式
 * @method uidata.get() 获取当前界面的控件信息.
 * @return {json} 返回界面数据的json 数据
 */
this.uidata = {
    get: function () {
        var uis = []
        uc = packageNameMatches(".+").find()
        for (let i = 0; i < uc.length; i++) {
            uis[i] = this.getdata(uc[i])
        }
        return JSON.stringify(uis);
    },
    getdata: function (uc) {
        return data = {
            id: uc.id(),
            text: uc.text(),
            desc: uc.desc(),
            bounds: uc.bounds().toString(),
            className: uc.className().toString(),
            clickable: uc.clickable().toString(),
        }
    }
}
/** 方法说明  判断txt文本是否全部存在,根据参数is 和参数mod 判断是点击和点击模式
 * @method findalltext
 * @param {str} text 需要判断text 例如: 设置|系统|返回
 * @param {*}  obj is 为空, 不点击 ;非空 点击 可以直接 点击 下标 或者 文本内容 
 * @param {*}  obj mod  控件范围随机点击 ; 非空 为空时控件点击
 * @times {int}} times 点击完 延迟时间  内置的随机时间
 * @return {Boolean} 成功 true 失败 false
 */
function findalltext(txt, is, mod, times) {
    if (txt.slice(-1) == "|") {
        txt = txt.substring(0, txt.length - 1);
    }
    if (txt.substring(0, 1) == "|") {
        txt = txt.slice(1);
    }
    var s = txt.split("|");
    var obj, arr = [];
    for (var str of s) {
        obj = vars.modeis.current ? text(str).boundsInside(0, 1, vars.modedev.x, vars.modedev.y - 1).findOnce() : text(str).findOnce();
        //obj = text(str).findOnce()
        if (obj != null) {
            arr[str] = obj;
        } else {
            return false;
        }
    }

    if (is != null) {
        if (parseInt(is) == is) {
            obj = arr[s[is]];
        } else {
            if (arr[is] = null) {
                obj = vars.modeis.current ? text(is).boundsInside(0, 0, vars.modedev.x, vars.modedev.y).findOnce() : text(is).findOnce();
                if (obj == null) {
                    return false;
                }
            }

        }
        if (mod != null) {
            tapobjex(obj);
        } else {
            tapobjexr(obj);
        }
        if (times != null) {
            sleepr(times);
        }
    }
    return true;
}
/** 方法说明  查找所有控件都符合条件返回所有内容
 * @method findobjall
 * @param {Object}} arr 要查找的控件特征
 * @return {null or Object} 返回值说明  控件存在则返回obj对象数组 不存在返回null 
 */
function findobjall(arr) {
    var uc, arr_uc = [], i = 0;
    if (typeofs(arr) == "array") {
        for (var obj of arr) {
            uc = vars.modeis.current ? obj.boundsInside(0, 0, vars.modedev.x, vars.modedev.y).findOnce() : obj.findOnce();
            if (uc == null) {
                return null;
            } else {
                arr_uc[i] = uc;
                i++;
            };
        };
    };
    return arr_uc;
};

/** 方法说明  查找对象集合有一个符合 即 返回对象内容 全部符合则返回null
 * @method findobjany
 * @param {Object}} arr 要查找的控件特征
 * @return {null or Object} 返回值说明  控件存在则返回obj对象数组 不存在返回null 
 */
function findobjany(arr) {
    var uc;
    if (typeofs(arr) == "array") {
        for (var i = 0; i < arr.length; i++) {
            uc = vars.modeis.current ? arr[i].boundsInside(0, 1, vars.modedev.x, vars.modedev.y).findOnce() : arr[i].findOnce();
            if (uc != null) {
                if (i != 0) {
                    arr.unshift(arr[i])  // 把识别到的控件 放在第一个
                    arr.splice(i + 1, 1) // 把原先的控件删除 
                }
                return uc;
            }
        }
    }
    return null;
};
/** 方法说明  点击特征对象,如果特征对象不可点击会自动遍历父节点
 * @method tapobj
 * @param {Object}} tz 要查找的控件特征
 * @param {int} ts 查找tz对象的时间
 * @times {int}} times 点击完 延迟时间  内置的随机时间
 * @return {null or Object} 返回值说明  控件存在则返回obj对象 不存在返回null 
 */
function tapobj(tz, times) {
    var obj, objs;
    obj = vars.modeis.current ? tz.boundsInside(0, 1, vars.modedev.x, vars.modedev.y).findOnce() : tz.findOnce();
    objs = obj;
    while (objs != null) {
        if (objs.clickable() == true) {
            objs.click();
            if (times != null) {
                sleepr(times);
            }
            vars.modeis.addkongjian = vars.modeis.addkongjian + 1
            break;
        } else {
            objs = objs.parent();
        }
    }
    return obj;
};
/** 方法说明  查找特征对象并点击控件范围内的随机坐标,如果不在屏幕内的坐标会自动遍历到在屏幕内的坐标点击
 * @method tapobj
 * @param {Object}} tz 要查找的控件特征
 * @times {int}} times 点击完 延迟时间  内置的随机时间
 * @param {int} ts 查找tz对象的时间
 * @return {Boolean} 返回值说明
 */
function tapobjr(tz, times) {
    var i = 0
    while (1) {
        obj = vars.modeis.current ? tz.boundsInside(0, 1, vars.modedev.x, vars.modedev.y).findOnce(i++) : tz.findOnce(i++);
        if (obj != null) {
            obj = obj.bounds()
            if (isbounds(obj)) {
                press(random(obj.left + 1, obj.right - 1), random(obj.top + 1, obj.bottom - 1), random(50, 150))
                if (times) {
                    sleepr(times)
                }
                vars.modeis.addkongjian = vars.modeis.addkongjian + 1
                return true
            }
        } else {
            return false
        }
    }
}
/** 方法说明  点击控件对象自动获取可以点击的父控件
* @method tapobjex
* @param {Object}} obj 要点击的对象
* @param {int}} times 点击完 延迟时间  内置的随机时间
* @return {Boolean} 返回值说明
*/
function tapobjex(obj, times) {
    while (obj != null) {
        if (obj.clickable() == true) {
            obj = obj.click();
            if (times != null) {
                sleepr(times);
            }
            vars.modeis.addkongjian = vars.modeis.addkongjian + 1
            return obj;
        } else {
            obj = obj.parent();
        }
    }
    return false;
};
/** 方法说明  点击特征对象控件范围内的随机坐标
 * @method tapobjexr
 * @param {Object}} obj: 要点击的对象
 * @param  {int} times: 点击完 延迟时间  内置的随机时间
 * @return {Boolean} 返回值说明
 */
function tapobjexr(obj, times) {
    if (obj != null) {
        try {
            obj = obj.bounds();
            if (isbounds(obj)) {
                press(random(obj.left + 1, obj.right - 1), random(obj.top + 1, obj.bottom - 1), random(50, 150));
                if (times != null) {
                    sleepr(times);
                }
                vars.modeis.addkongjian = vars.modeis.addkongjian + 1
                return true;
            } else {
                return false;
            }
        } catch (error) {
            log("点击控件范围随机坐标失败,报错信息:" + error);
            return false;
        }
    }
};
/** 方法说明   等待随机时间
 * @method isbounds
 * @param {object} bound 按钮控件对象
 * @return {Boolean} 返回值真假
 */
function isbounds(bound) {
    //left, top, bottom, right
    try {
        if (bound.left < 0 || bound.left > vars.modedev.x) {
            return false;
        }
        if (bound.right < 0 || bound.right > vars.modedev.x) {
            return false;
        }
        if (bound.top < 0 || bound.top > vars.modedev.y) {
            return false;
        }
        if (bound.bottom < 0 || bound.bottom > vars.modedev.y) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}
/*------------------------------------------------------------随机操作------------------------------------------------------------*/
/** 方法说明   等待随机时间
 * @method sleepr
 * @param {*} t  单位ms  等待时间为空默认2000
 * @param {*} ts 单位ms  波动时间,为空默认波动1s 上下500ms 如果延迟低于1000 则 上下波动 为延迟的实际数值 
 * @return {Boolean} 返回值说明
 */
function sleepr(t, ts) {
    if (ts != null) {
        ts = ts / 2;
        sleep(t + random(-ts, ts));
    } else {
        if (!(t != null)) {
            t = 2000;
        }
        var tx = t < 1000 ? t / 2 : 500;
        sleep(t + random(-tx, tx));
    }
};
/** 方法说明   贝塞尔坐标生成
 * @method bezier_curves
 * @param {int} ScreenPoint 
 * @param {int} Offset 
 * @return {obj} 返回x,y 对象
 */
function bezier_curves(ScreenPoint, Offset) {
    cx = 3.0 * (ScreenPoint[1].x - ScreenPoint[0].x);
    bx = 3.0 * (ScreenPoint[2].x - ScreenPoint[1].x) - cx;
    ax = ScreenPoint[3].x - ScreenPoint[0].x - cx - bx;
    cy = 3.0 * (ScreenPoint[1].y - ScreenPoint[0].y);
    by = 3.0 * (ScreenPoint[2].y - ScreenPoint[1].y) - cy;
    ay = ScreenPoint[3].y - ScreenPoint[0].y - cy - by;
    tSquared = Offset * Offset;
    tCubed = tSquared * Offset;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * Offset) + ScreenPoint[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * Offset) + ScreenPoint[0].y;
    return result;
};
/** 方法说明  贝塞尔曲线滑动(仿真人手势滑动)
 * @method swiper
 * @param {int} qx 开始X坐标
 * @param {int} qy 开始Y坐标
 * @param {int} zx 结束X坐标
 * @param {int} zy 结束Y坐标
 * @param {int} times 滑动时间
 * @return {*} 无返回值
 */
function swiper(qx, qy, zx, zy, times) {
    if (!times) {
        times = 300
    }
    var t = times < 501 ? -(times / 2) : -500
    times = times + random(t, 500)
    var xxy = [times];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };
    for (let i = 0; i < 1; i += 0.08) {
        let newPoint = bezier_curves(point, i);
        xxyy = [parseInt(newPoint.x), parseInt(newPoint.y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);
};
/** 方法说明  点固定坐标随机延迟80-140ms  
 * @method clicks
 * @param {int} x 
 * @param {int} y 
 * @return {Boolean} 真点击成功,假点击失败
 */
function clicks(x, y) {
    if (parseInt(x) != x && parseInt(y) != y) {
        log("函数报错--clicks--错误原因:传入的x,y坐标不合法");
        return false;
    };
    return press(x, y, random(80, 140))
};
/*------------------------------------------------------------判断是否查找到控件函数------------------------------------------------------------*/
function ispass() {
    var ret = vars.modeis.addkongjian != 0
    vars.modeis.addkongjian = 0
    return ret
}

function getAccessibility() {
    if (auto.service != null) {
        log("无障碍已打开");
        return;
    }
    importClass(android.content.Context);
    importClass(android.provider.Settings);
    var pack = context.getPackageName()
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        //log('当前已启用的辅助服务\n', enabledServices);
        var Services = enabledServices + ":" + pack + "/com.stardust.autojs.core.accessibility.AccessibilityService";
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
        toastLog("成功开启AutoJS的辅助服务");
        sleep(2000);
    } catch (error) {
        //授权方法：开启usb调试并使用adb工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
        log("\n请确保已给予 WRITE_SECURE_SETTINGS 权限\n\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
        log("adb shell pm grant " + pack + " android.permission.WRITE_SECURE_SETTINGS");
        setClip("adb shell pm grant " + pack + " android.permission.WRITE_SECURE_SETTINGS");
    }
};
module.exports = this