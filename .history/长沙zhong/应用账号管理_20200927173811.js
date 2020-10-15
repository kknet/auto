// var TKB = require("/sdcard/Android/data/.haoareme/模块.js")

// function findeclick(kj, te, ys) {
//     if (kj == "id") {
//         var w = id(te).findOnce();
//         if (w != null) {
//             log("发现ID:" + te)
//             var zb = w.bounds()
//             var xx = zb.left + random(10, zb.right - zb.left)
//             var yy = zb.top + random(10, zb.bottom - zb.top)
//             log(xx + "," + yy)
//             click(xx, yy);
//             sleep(ys)
//             return true
//         }
//     } else if (kj == "text") {
//         var w = text(te).findOnce();
//         if (w != null) {
//             log("发现text:" + te)
//             var zb = w.bounds()
//             var xx = zb.left + random(10, zb.right - zb.left)
//             var yy = zb.top + random(10, zb.bottom - zb.top)
//             log(xx + "," + yy)
//             click(xx, yy);
//             sleep(ys)
//             return true
//         }
//     }
//     return false
// }


// function zonghe() {
//     findeclick("text", "稍后", 800)
//     findeclick("text", "刷新", 800)
//     findeclick("text", "好的", 800)
//     findeclick("text", "始终同意", 800)
//     findeclick("text", "以后再说", 800)
//     findeclick("text", "我知道了", 800)
//     findeclick("text", "知道了", 800)
//     findeclick("text", "下次再说", 800)
//     findeclick("text", "重试", 800)
//     findeclick("text", "跳过", 800)
//     findeclick("text", "确认", 800)
//     findeclick("id", "com.ss.android.ugc.aweme:id/bn0", 800)
//     if (text("添加头像").exists() && text("点击设置头像").exists()) {
//         log("添加头像")
//         back()
//         sleep(1000)
//     }
//     if (text("立即登录").exists() && text("取消").exists()) {
//         log("立即登录")
//         click("取消")
//         sleep(2000)
//     }
//     if (text("退出").exists() && text("发现更多主播").exists()) {
//         log("发现更多主播")
//         click("退出")
//         sleep(2000)
//     }
//     if (text("确认更换").exists() || desc("确认更换").exists()) {
//         log("发现更多主播")
//         click(940, 502)
//         sleep(1000)
//         back()
//         sleep(3000)
//     }
//     if (text("确认").exists() && text("取消").exists()) {
//         log("取消未编辑的视频")
//         click("取消")
//         sleep(2000)
//     }
//     if (text("五星好评").exists() && text("取消").exists()) {
//         log("五星好评")
//         click("取消")
//         sleep(1000)
//     }
//     if (text("长按屏幕使用更多功能").exists()) {
//         back()
//         log("长按屏幕使用更多功能");
//         sleep(1200)
//     }
//     if (text("允许").exists() && text("拒绝").exists()) {
//         log("允许拒绝")
//         click("允许")
//         sleep(2000)
//     }
//     if (textContains("同步到今日头条").exists()) {
//         click(543, 1542);
//         log("同步到今日头条");
//         sleep(1200)
//     }
//     if (text("发现通讯录好友").exists()) {
//         log("发现通讯录")
//         click("取消")
//         sleep(1200)
//     }
//     if (textContains("没有响应").exists()) {
//         click("等待");
//         log("等待");
//         sleep(1200)
//     }
//     if (text("五星好评").exists()) {
//         click("取消");
//         log("取消");
//         sleep(1200)
//     }
//     if (text("以后再说").exists() || text("立即升级").exists()) {
//         click(300, 1370)
//         sleep(500)
//         click("以后再说");
//         log("以后再说");
//         sleep(1200)
//     }
//     if (text("以后再说").exists()) {
//         log("以后再说2");
//         try {
//             var ss = text("以后再说").findOnce().bounds();
//             log(ss)
//             click(ss.centerX(), ss.centerY());
//             sleep(2000)
//         } catch (error) {
//             sleep(1001)
//             log(error);
//         }
//     }
//     if (desc("以后再说").exists()) {
//         log("以后再说3");
//         try {
//             var ss = desc("以后再说").findOnce().bounds();
//             log(ss)
//             click(ss.centerX(), ss.centerY());
//             sleep(2000)
//         } catch (error) {
//             sleep(1001)
//             log(error);
//         }
//     }
//     if (text("继续观看").exists()) {
//         log("继续观看");
//         try {
//             var ss = text("继续观看").findOnce().bounds();
//             log(ss)
//             click(ss.centerX(), ss.centerY());
//             sleep(2000)
//         } catch (error) {
//             sleep(1001)
//             log(error);
//         }
//     }
//     if (desc("继续观看").exists()) {
//         log("继续观看2");
//         try {
//             var ss = desc("继续观看").findOnce().bounds();
//             log(ss)
//             click(ss.centerX(), ss.centerY());
//             sleep(2000)
//         } catch (error) {
//             sleep(1001)
//             log(error);
//         }
//     }
//     if (text("继续播放").exists()) {
//         log("继续播放")
//         try {
//             node = text("继续播放").findOnce().bounds();
//             click(node.centerX(), node.centerY());
//             sleep(1200)
//         } catch (error) {
//             sleep(1001)
//             log(error);
//         }
//     }
//     if (text("立即赠送").exists()) {
//         log("立即赠送")
//         back()
//         sleep(1000)
//     }
//     if (text("升级到最新版").exists() || text("立即更新").exists()) {
//         click(939, 523);
//         log("立即更新");
//         sleep(200)
//         back()
//         sleep(3000)
//     }
//     if (text("允许").exists()) {
//         click("允许");
//         log("允许");
//         sleep(1200)
//     }
//     if (text("滑动查看更多").exists()) {
//         log("滑动查看更多")
//         swipe(500, 1600, 600, 400, 1200);
//         sleep(2000)
//     }
//     if (text("上滑查看更多视频").exists()) {
//         log("上滑查看更多视频")
//         swipe(500, 1600, 600, 400, 1200);
//         sleep(2000)
//     }
//     if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
//         log("好友推荐")
//         click(910, 430)
//         sleep(1200)
//     }
// }
// //获取该页面文字
// function getAllTexts(setting) {
//     try {
//         var setting = setting || {}
//         var defaultSetting = {
//             getText: true,
//             getDesc: true,
//             getId: false,
//             removeRepetitiveElements: true
//         }
//         Object.assign(defaultSetting, setting);
//         //xgsrizhi(defaultSetting)
//         var allStr = []
//         var getDescAndTextAndIdOfNode = function (node) {
//             if (node) {
//                 if (defaultSetting.getText) {
//                     var text = node.text()
//                     if (!!text) {
//                         allStr.push(text)
//                     }
//                 }
//                 if (defaultSetting.getDesc) {
//                     var desc = node.desc()
//                     if (!!desc) {
//                         allStr.push(desc)
//                     }
//                 }
//                 if (defaultSetting.getId) {
//                     var id = node.id()
//                     if (!!id) {
//                         allStr.push(id)
//                     }
//                 }
//             }
//             for (let i = 0; i < node.childCount(); i++) {
//                 getDescAndTextAndIdOfNode(node.child(i));
//             }
//         }
//         var getFrameLayoutNode = function () {
//             return className('FrameLayout').findOne(2000)
//         }
//         getDescAndTextAndIdOfNode(getFrameLayoutNode())

//         function removeRepetitiveElements(arr) {
//             var obj = {}
//             for (let i = 0; i < arr.length; i++) {
//                 if (obj.hasOwnProperty(arr[i])) {} else {
//                     obj[arr[i]] = true
//                 }
//             }
//             return Object.keys(obj)
//         }
//         if (defaultSetting.removeRepetitiveElements) {
//             allStr = removeRepetitiveElements(allStr)
//         }
//         return allStr
//     } catch (error) {
//         sleep(1001)
//         xgsrizhi(error);
//         return 1
//     }
// }
// //抖音登录上传信息
// function dydl() {
//     log("抖音登录")
//     launch("com.ss.android.ugc.aweme")
//     var TSD = (new Date()).getTime()
//     var RT = (new Date()).getTime()
//     var dyzh = "0" //抖音账号
//     var djsl = "0" //点赞数量
//     var dygz = "0" //关注数量
//     var dyfs = "0" //粉丝数量
//     var dyqm = "0" //抖音签名
//     var dybf = "0" //播放数量
//     var dync = "0" //抖音昵称
//     var dyxb = "0" //抖音性别
//     var dyhy = "0" //好友数量
//     var dyhz = "0" //抖音获赞
//     var zpsl = "0" //作品数量
//     while (1) {
//         if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
//             log("时间够了退出")
//             TKB.clear()
//             return false
//         }
//         if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
//             log("超时没登录成功")
//             swipe(500, 1600, 600, 400, 1200);
//             sleep(500)
//             back()
//             sleep(1000)
//             TKB.clear()
//             sleep(3000)
//             launch("com.ss.android.ugc.aweme")
//             sleep(2000)
//             TSD = (new Date()).getTime()
//         }
//         if (text("一键登录").exists() || text("本机号码一键登录").exists() || text("密码登录").exists() && text("其他登录方式").exists() || text("获取短信验证码").exists()) {
//             log("还未登录账号--先去登录")
//             return false
//         }
//         if (text("绑定手机号").exists()) {
//             log("绑定手机号")
//             back()
//             sleep(2000)
//         }
//         if (desc("分享主页").exists() && text("获赞").exists() || textContains("分享主页").exists() && text("获赞").exists() || textContains("编辑资料").exists() && text("获赞").exists() || text("编辑资料").exists() && text("获赞").exists() && desc("更多").exists() || desc("作者头像").exists() && desc("发现好友").exists()) {
//             log("编辑资料界面")
//             click(1020, 1950)
//             sleep(2000)
//             // TKB.xgzhzt(sbip, user_id, yhbh, app_id, "", "1")
//             var ss = getAllTexts()
//             var io = 0
//             log(ss)
//             try {
//                 for (j = 0, len = ss.length; j < len; j++) {
//                     if (ss[j].indexOf("喜欢 ") != -1) {
//                         log(ss[j])
//                         var st = ss[j].split("欢 ")
//                         djsl = st[1]
//                         log("点赞数量：" + djsl)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "xihuan", djsl)
//                     }
//                     if (ss[j].indexOf("男") != -1) {
//                         log("性别男")
//                         dyxb = "1"
//                     }
//                     if (ss[j].indexOf("女") != -1) {
//                         log("性别女")
//                         dyxb = "2"
//                     }
//                     if (ss[j].indexOf("作品 ") != -1) {
//                         log(ss[j])
//                         var st = ss[j].split("品 ")
//                         zpsl = st[1]
//                         log("作品数量：" + zpsl)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipin", zpsl)
//                     }
//                     if (ss[j].indexOf("播放数") != -1 && io < 3) {
//                         log(ss[j])
//                         var st = ss[j].split("播放数")
//                         var bfss = st[1]
//                         log("点赞数量：" + bfss)
//                         dybf = Number(dybf) + Number(bfss)
//                         io = io + 1
//                     }
//                 }
//                 if (dybf != 0) {
//                     // TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
//                 }
//                 if (id("com.ss.android.ugc.aweme:id/e_f").exists()) {
//                     var dd = id("com.ss.android.ugc.aweme:id/e_f").findOnce().text()
//                     if (dd.indexOf("抖音号: ") != -1) {
//                         log(dd)
//                         var st = dd.split(": ")
//                         dyzh = st[1]
//                         log("抖音账号：" + dyzh)
//                     }
//                 }
//                 var ssr = true
//                 if (ssr == true) {
//                     if (id("com.ss.android.ugc.aweme:id/b_0").exists()) {
//                         dygz = id("com.ss.android.ugc.aweme:id/b_0").findOnce().text()
//                         log("关注数量：" + dygz)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "guanzhu", dygz)
//                     }
//                     if (id("com.ss.android.ugc.aweme:id/b9v").exists()) {
//                         dyfs = id("com.ss.android.ugc.aweme:id/b9v").findOnce().text()
//                         log("粉丝数量：" + dyfs)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
//                     }
//                     if (id("com.ss.android.ugc.aweme:id/glp").exists()) {
//                         dyqm = id("com.ss.android.ugc.aweme:id/glp").findOnce().text()
//                         log("签名：" + dyqm)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "fensi", dyfs)
//                     }
//                     if (id("com.ss.android.ugc.aweme:id/dbt").exists()) {
//                         dync = id("com.ss.android.ugc.aweme:id/dbt").findOnce().text()
//                         log("抖音昵称：" + dync)
//                     }
//                     if (id("com.ss.android.ugc.aweme:id/bar").exists()) {
//                         dyhy = id("com.ss.android.ugc.aweme:id/bar").findOnce().text()
//                         log("好友数量：" + dyhy)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "haoyou", dyhy)
//                     }
//                     if (id("com.ss.android.ugc.aweme:id/an4").exists()) {
//                         dyhz = id("com.ss.android.ugc.aweme:id/an4").findOnce().text()
//                         log("获赞数量：" + dyhz)
//                         // TKB.updyshuju(sbip, user_id, yhbh, app_id, "getzan", dyhz)
//                     }
//                     // swipe(500, 1800, 500, 900, 500)
//                     // sleep(1000)
//                     // if (id("com.ss.android.ugc.aweme:id/g8z").exists()) {
//                     //     dybf = id("com.ss.android.ugc.aweme:id/g8z").findOnce().text()
//                     //     log("播放数量：" + dybf)
//                     //     if (dybf.indexOf("w") != -1) {
//                     //         var st = dybf.split("w")
//                     //         dybf = Number(st[0]) * 10000
//                     //         log("实际播放数量：" + dybf)
//                     //     }
//                     //     TKB.updyshuju(sbip, user_id, yhbh, app_id, "shipinbofang", dybf)
//                     // }
//                 }
//                 toastLog("账号：" + dyzh + "--关注：" + dygz + "--粉丝：" + dyfs + "--签名：" + dyqm + "--点赞：" + djsl + "--播放数量：" + dybf)
//             } catch (error) {
//                 sleep(1001)
//                 log(error);
//             }
//             // TKB.clear()
//             return true

//         } else {
//             if (text("消息").exists() && text("我").exists() || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
//                 log("首页")
//                 click(1020, 1890)
//                 sleep(2000)
//             }
//         }
//         if (text("下线提醒").exists() && text("好").exists()) {
//             log("下线提醒")
//             click("好")
//             sleep(2000)
//         }
//         if (text("确认").exists() && text("取消").exists()) {
//             log("取消未编辑的视频")
//             click("取消")
//             sleep(2000)
//         }
//         if (text("该帐号已被封禁").exists() || text("此账号已经被封禁").exists() || text("查看").exists() && text("取消").exists()) {
//             log("此账号已经被封禁")
//             var TYP = (new Date()).getTime()
//             // TKB.xgzhzt(sbip, user_id, yhbh, app_id, "封了", "2")
//             while (1) {
//                 if ((new Date()).getTime() - TYP > 5 * 60 * 1000) {
//                     log("时间到")
//                     return false
//                 } else {
//                     toastLog("此账号已经被封禁")
//                     sleep(3000)
//                 }
//                 sleep(2000)
//             }
//         }
//     }
// }


// _THREADSS = threads.start(function () {
//     while (1) {
//         zonghe()
//     }
// })
// threads.start(function () {
//     threads.start(function () {
//         setInterval(() => {
//             TKB.send_message({
//                 notice_name: "task_time_stamp",
//                 notice_content: (new Date()).getTime()
//             })
//         }, 15 * 1000)
//     })
// })
// var z = dydl()
// if (z == true) {
//     var msg_num = 1
//     var msg = '成功'
//     var notice_name = 'after_script'
// } else {
//     var msg_num = 0
//     var msg = '失败'
//     var notice_name = 'stop'
// }
// TKB.send_message({
//     notice_name: notice_name,
//     notice_content: [msg_num, msg]
// })




/**上传应用账号信息
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} username:账号
 * @param {string} user_pass:密码
 * @param {string} device:硬件信息
 */
function UpaccountInfo(name, appname, username) {
    log('上传应用账号信息')
    //resource_type是list =>contacts_type[1,2,3]
    // log('name:' + name + '--resource_type:' + resource_type)
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log('超时退出')
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            var r = http.postJson(url, {
                'type': 'addapp',
                'name': name,
                'appname': appname,
                'username': username,
                // 'user_pass': username,
                // 'device': device,
            });
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj['code'] != 0) {
                    toastLog('上传应用账号信息成功')
                    log('上传应用账号信息成功')
                    return r_obj['data']
                } else {
                    toastLog(r_obj['msg'])
                    return false
                }
            } else {
                log('访问失败')
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 10000))
    }
}


/**提交应用账号固定数据
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} username:账号
 * @param {string} data:参数值
 * @param {string} datatype:硬件信息 1、数值型；2、文本型、3：链接（文件）
 * @param {string} title:参数中文标题
 */
function UpFixedData(name, appname, username, data, datatype, title) {
    log('提交应用账号固定数据')
    //resource_type是list =>contacts_type[1,2,3]
    log(name, appname, username, data, datatype, title)
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log('超时退出')
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            var r = http.post(url, {
                'type': 'setAccountData',
                'name': name,
                'appname': appname,
                'username': username,
                'data[name]': data,
                'datatype[name]': datatype,
                'title[name]': title,
            });
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj['code'] != 0) {
                    toastLog('提交应用账号固定数据成功')
                    log('提交应用账号固定数据成功')
                    return r_obj['data']
                } else {
                    toastLog(r_obj['msg'])
                    return false
                }
            } else {
                log('访问失败')
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 10000))
    }
}



/**提交应用账号动态数据
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} username:name,photo,
 * @param {string} username:账号
 * @param {string} data:参数值
 * @param {Number} datatype:硬件信息 1、数值型；2、文本型、3：链接（文件）
 * @param {string} title:参数中文标题
 */
function UpAliveData(name, appname, username, paramete, data, datatype, title) {
    log('提交应用账号动态数据')
    //resource_type是list =>contacts_type[1,2,3]
    log(name, appname, username, data, datatype, title)
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log('超时退出')
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            if (paramete == 'name'){
                var r = http.postJson(url, {
                    'type': 'setAccountData',
                    'name': name,
                    'appname': appname,
                    'username': username,
                    'data[name]': data,
                    'datatype[name]': datatype,
                    'title[name]': title,
                });
            }else if (paramete == 'photo'){
                var r = http.postJson(url, {
                    'type': 'setAccountData',
                    'name': name,
                    'appname': appname,
                    'username': username,
                    'data[photo]': data,
                    'datatype[photo]': datatype,
                    'title[photo]': title,
                });
            }else if (paramete == 'name'){
                var r = http.postJson(url, {
                    'type': 'setAccountData',
                    'name': name,
                    'appname': appname,
                    'username': username,
                    'data[name]': data,
                    'datatype[name]': datatype,
                    'title[name]': title,
                });
            }
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj['code'] != 0) {
                    toastLog('提交应用账号动态数据成功')
                    log('提交应用账号动态数据成功')
                    return r_obj['data']
                } else {
                    toastLog(r_obj['msg'])
                    return false
                }
            } else {
                log('访问失败')
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 10000))
    }
}

var name = '861065032044357'
var appname = '抖音短视频'
var username = '861065'
var data = 'jianjie3'
var datatype = '1'
var title = '简介2'
var paramete = '简介'
// log(UpaccountInfo(name, appname, username))
// log(UpFixedData(name, appname, username, data, datatype, title))
log(UpAliveDataz(name, appname, username, paramete, data, datatype, title))
