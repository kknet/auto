/*
 * @Author: haoaremesda
 * @Date: 2020-07-08 14:50:38
 * @LastEditors: haoaremesda
 * @LastEditTime: 2020-10-03 18:21:33
 * @Description: file content
 * @FilePath: \taskTest\模块.js
 */

var storage = storages.create("config"),
    modular_version = 106,
    host_ip = "app.zjmilu.com",
    wsUrl = 'ws://' + host_ip,
    mian_key = "main_time",
    guard_key = "guard_time",
    mian_filter_name = "com.mian.demo",
    guard_filter_name = "com.guard.demo",
    main_name = "鹿云",
    guard_name = "守护",
    modular_name = "模块",
    log_list = [],
    script_name = 'hello_world.js',
    exec_inter_name = 'inter_task.js',
    install_name = "new_apk.apk",
    measuring_pk = "com.feus.measuring",
    save_path = '/sdcard/Android/data/.haoareme'

/**
 * @description: 获取本地储存
 * @param {string} key
 * @return: 返回指定名称的本地存储
 */
function get_storage(key) {
    // key: mobile_number 手机编号
    // key: phone 手机号码
    // key: grade 日志等级
    try {
        if (typeof key != typeof "") {
            return false
        }
        if (storage.get(key) != undefined) {
            return storage.get(key)
        } else {
            return
        }
    } catch (error) {
        set_log("get_storage：" + error, 2)
    }
}

/**
 * @description: 将键值对保存
 * @param {string} name：名字
 * @param {string} value：值
 * @return: 
 */
function set_storage(name, value) {
    try {
        storage.put(name, value)
    } catch (error) {
        set_log("set_storage：" + error, 2)
    }
}

/**
 * @description: 强行停止运行应用
 * @param {string} packageName: 应用包名
 * @return: 
 */
function stop_run(packageName) {
    var keys = device.getIMEI(),
        times = 30
    var lock_suss = getLock(keys, times, 5)
    var start_time = (new Date()).getTime(),
        names = getAppName(packageName)
    app.openAppSetting(packageName)
    files.append("/sdcard/Android/data/.haoareme/update_log.txt", current_time() + ":" + packageName + "\n")
    sleep(1000)
    if (lock_suss == 1 || lock_suss == 3) {
        log("成功上锁")
        while (1) {
            try {
                if (!text(names).packageName("com.android.settings").exists()) {
                    app.openAppSetting(packageName)
                    sleep(500)
                } else if ((new Date()).getTime() - start_time > 35 * 1000) {
                    home()
                    unlock(keys)
                    return false
                } else {
                    if (text('强行停止').exists() && text('强行停止').findOnce().enabled() == true) {
                        click('强行停止')
                        sleep(1000)
                    }
                }
                if (text('要强行停止吗？').exists()) {
                    if (text('强行停止').exists() && text('取消').exists()) {
                        click('强行停止')
                    } else if (text('取消').exists() && text('确定').exists()) {
                        click('确定')
                    }
                } else if (text('强行停止').exists() && text('强行停止').findOnce().enabled() == false) {
                    home()
                    unlock(keys)
                    return true
                }
                sleep(2000)
            } catch (error) {
                set_log("stop_run_pk：" + error, 2)
            }
        }
    }
}

/**
 * @description: 清理运行中的应用
 * @param {type} params
 * @return: 
 */
function clear() {
    var start_time = (new Date()).getTime()
    while (1) {
        try {
            if (!id('com.android.systemui:id/progress_circle_view').exists() || !id('com.coloros.recents:id/clear_button').exists()) {
                home()
                sleep(1000)
                recents()
                sleep(1000)
            }
            // 金立手机一键清理按键
            if (id('com.android.systemui:id/progress_circle_view').exists()) {
                id('com.android.systemui:id/progress_circle_view').findOnce().click()
                sleep(1000)
                return true
            }
            // OPPO手机一键清理按键
            if (id('com.coloros.recents:id/clear_button').exists()) {
                id('com.coloros.recents:id/clear_button').findOnce().click()
                sleep(1000)
                return true
            }
            //小米手机一键清理按键
            if (id("com.android.systemui:id/clearAnimView").exists()) {
                id("com.android.systemui:id/clearAnimView").findOnce().click();
                log("小米4清理缓存");
                sleep(1000);
                return true;
            } else {
                if ((new Date()).getTime() - start_time > 30 * 1000) {
                    home()
                    return false
                }
            }
        } catch (error) {
            set_log("clear：" + error)
        }
        sleep(1000)
    }
}

/**
 * @description: 返回应用版本信息
 * @param {string} app_name: 应用名称
 * @return: 
 */
function getAppInfo(app_name) {
    try {
        var pm = context.getPackageManager();
        var pack_info = pm.getPackageInfo(getPackageName(app_name), 0)
        return {
            name: app_name,
            versionName: pack_info.versionName,
            versionCode: pack_info.versionCode
        }
    } catch (error) {
        log("getAppVersCode: " + error)
    }
}

/**
 * @description: 获取任务
 * @param {string} mobile_number: 手机编号
 * @return: 返回任务对象
 */
function get_task(mobile_number) {
    var info_list = [main_name, guard_name, modular_name],
        version_list = []
    for (var i = 0; i < info_list.length; i++) {
        var sversion_str = null
        if (info_list[i] != modular_name) {
            sversion_str = '&appName[' + i + ']=' + info_list[i] + '&appVersion[' + i + ']=' + getAppInfo(info_list[i])["versionCode"]
        } else {
            sversion_str = '&appName[' + i + ']=' + info_list[i] + '&appVersion[' + i + ']=' + modular_version
        }
        version_list.push(sversion_str)
    }
    var url = 'http://' + host_ip + '/yunkong/server/index?type=getTask&name=' + mobile_number + version_list.join('')
    try {
        var res = http.get(url)
        if (res.statusCode == 200) {
            return res.body.json()
        } else {
            set_log("获取任务失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("get_task：" + error, 2)
    }
}

/**
 * @description: 获取子任务
 * @param {string} mobile_number: 手机编号
 * @param {int} task_id: 交互性任务ID
 * @return: 返回任务对象
 */
function get_inter_task(mobile_number, task_id) {
    var url = 'http://' + host_ip + '/yunkong/server/index'
    try {
        var res = http.post(url, {
            "type": "getInter",
            "name": mobile_number,
            "taskId": task_id
        })
        if (res.statusCode == 200) {
            return res.body.json()
        } else {
            set_log("获取子功能失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("get_task：" + error, 2)
    }
}

/**
 * @description: 获取脚本
 * @param {string} params
 * @return: 
 */
function get_script(mobile_number, task_id) {
    var url = 'http://' + host_ip + '/yunkong/server/index?type=getScript&name=' + mobile_number + '&taskId=' + task_id
    try {
        var res = http.get(url)
        if (res.statusCode == 200) {
            var script_obj = res.body.json()
            return script_obj
        } else {
            set_log("获取脚本失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("get_script：" + error, 2)
    }
}

/**
 * @description: 返回任务反馈
 * @param {type} task_id: 任务ID
 * @return: 
 */
function set_state(mobile_number, task_id, buf, msg) {
    var set_state_url = 'http://' + host_ip + '/yunkong/server/index?type=taskEnd&name=' + mobile_number + '&taskId=' + task_id + '&buff=' + buf + '&msg=' + msg
    try {
        var res = http.get(set_state_url)
        if (res.statusCode == 200) {
            log(res.body.string())
            return true
        } else {
            set_log("反馈失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("set_state：" + error, 2)
    }
}

/**
 * @description: 子功能反馈
 * @param {type} task_id: 任务ID
 * @return: 
 */
function set_inter_state(mobile_number, task_id, inter_id, buf, msg) {
    var set_state_url = 'http://' + host_ip + '/yunkong/server/index'
    try {
        var res = http.post(set_state_url, {
            "name": mobile_number,
            "type": "interEnd",
            "taskId": task_id,
            "interId": inter_id,
            "buff": buf,
            "msg": msg
        })
        if (res.statusCode == 200) {
            set_log(res.body.string(), 2)
            return true
        } else {
            set_log("反馈失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("set_state：" + error, 2)
    }
}

/**
 * @description: 禁用设备反馈
 * @param {string} device_name: 设备ID
 * @return: 
 */
function device_feed_back(device_name) {
    var feed_back_url = 'http://' + host_ip + '/yunkong/server/index?type=deviceFeedBack&name=' + device_name
    try {
        var res = http.get(feed_back_url)
        if (res.statusCode == 200) {
            if (res.body.json()['code'] == 2) {
                set_log("禁用反馈成功", 1)
            }
        } else {
            set_log("禁用反馈失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("device_feed_back：" + error, 2)
    }
}

/**
 * @description: 提交日志
 * @param {string} name: 设备名称
 * @param {int} task_id: 任务ID
 * @param {list} list: {msg: 日志内容, date: 时间, level: 错误等级}
 * @return:  
 */
function send_log(device_name, task_id) {
    var url = 'http://' + host_ip + '/yunkong/server/index'
    try {
        var res = http.post(url, {
            "type": "log",
            "name": device_name,
            "taskId": task_id,
            "list": JSON.stringify(log_list)
        })
        if (res.statusCode == 200) {
            if (res.body.json()['code'] == 1) {
                log("日志上传成功")
                return true
            }
        } else {
            log("日志上传失败: " + res.statusCode + " " + res.statusMessage)
        }
    } catch (error) {
        set_log("send_log：" + error, 2)
    }
}

/**
 * @description: 提交交互任务就绪
 * @param {string} device_name: 设备名称
 * @param {int} task_id: 任务ID
 * @return:  
 */
function send_ready(device_name, task_id) {
    var url = 'http://' + host_ip + '/yunkong/server/index?type=in_live'
    try {
        var res = http.post(url, {
            "name": device_name,
            "taskId": task_id,
        })
        if (res.statusCode == 200) {
            set_log(res.body.string(), 2)
            return true
        } else {
            log("提交就绪失败: " + res.statusCode + " " + res.statusMessage)
        }
    } catch (error) {
        set_log("send_ready：" + error, 2)
    }
}

/**
 * @description: 获取用户信息
 * @param {string} device_name: 设备名称
 * @param {int} task_id: 任务ID
 * @return:  
 */
function get_user(word) {
    var url = 'http://' + host_ip + '/yunkong/server/getUserData'
    try {
        var res = http.post(url, {
            "keyword": word
        })
        if (res.statusCode == 200) {
            let data = res.body.json()
            set_log(data, 2)
            return data
        } else {
            log("查询用户信息失败: " + res.statusCode + " " + res.statusMessage)
        }
    } catch (error) {
        set_log("get_user：" + error, 2)
    }
}

/**
 * @description: 设备自动分配用户
 * @param {string} device_name: 设备名称
 * @param {int} user_id: 用户ID
 * @return:  
 */
function setup_user(device_name, user_id) {
    var url = 'http://' + host_ip + '/yunkong/server/index'
    try {
        var res = http.post(url, {
            "type": "deviceGroup",
            "name": device_name,
            "user_id": user_id
        })
        if (res.statusCode == 200) {
            let data = res.body.json()
            if (data['code'] === 1) {
                return true
            } else {
                set_log(data['msg'], 2)
            }
        } else {
            log("分配失败: " + res.statusCode + " " + res.statusMessage)
        }
    } catch (error) {
        set_log("setup_user：" + error, 2)
    }
}

function current_time() {
    Date.prototype.format = function (fmt) {
        var year = this.getFullYear()
        var month = this.getMonth() + 1
        fmt = fmt.replace("yyyy", year)
        fmt = fmt.replace("yy", year % 100)
        fmt = fmt.replace("MM", fix(month))
        fmt = fmt.replace("dd", fix(this.getDate()))
        fmt = fmt.replace("hh", fix(this.getHours()))
        fmt = fmt.replace("mm", fix(this.getMinutes()))
        fmt = fmt.replace("ss", fix(this.getSeconds()))
        return fmt

        function fix(n) {
            return n < 10 ? "0" + n : n
        }
    }
    var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    return times
}

/**
 * @description: 向主程序发送任务停止广播
 * @param {object} notice: 需要通知的内容 {notice_name: "stop", notice_content: [1, '成功']}
 * @return: 
 */
function send_message(notice) {
    events.broadcast.emit("hello", notice)
}

/**
 * @description: 获取指定关键字的验证码
 * @param {string}} key_word: 应用关键字
 * @return: 
 */
function get_key_sms(key_word) {
    var cr = context.getContentResolver(),
        sms_list = [],
        i = 0,
        SMS_INBOX = Uri.parse("content://sms/")
    var projection = [
        "_id",
        "address",
        "person",
        "body",
        "date",
        "type",
    ]
    while (1) {
        try {
            var cur = cr.query(SMS_INBOX, projection, null, null, "date desc")
            if (cur != undefined) {
                log("获取权限成功")
                break
            }
        } catch (error) {
            log("未获取到读取短信权限" + error)
            sleep(2000)
        }
    }
    if (null == cur) {
        log("************cur === null")
        return
    }
    while (cur.moveToNext()) {
        var cur_time = cur.getString(cur.getColumnIndex("date"))
        if ((new Date()).getTime() - cur_time < 10 * 60 * 1000) {
            sms_list[i] = {
                number: cur.getString(cur.getColumnIndex("address")),
                name: cur.getString(cur.getColumnIndex("person")),
                body: cur.getString(cur.getColumnIndex("body")),
                date: cur_time,
                date2: cur.getColumnIndex("date")
            }
        }
        i++
    }
    if (!sms_list.length) {
        set_log("未找到十分钟内最新的短信", 1)
        return
    } else {
        if (sms_list[0]['body'].indexOf(key_word) != -1) {
            var verify_str = sms_list[0]['body'].match('[0-9]{4,6}')
            set_log("验证码为：" + verify_str, 1)
            return verify_str
        } else {
            set_log("未匹配到指定关键字验证码", 1)
            return
        }
    }
}

function base64_encode(text) {
    try {
        return java.lang.String(android.util.Base64.encode(java.lang.String(text + "").getBytes(), 0)).replace('\n', '')
    } catch (error) {
        set_log("base64_encode：" + error, 2)
    }
}

function base64_decode(text) {
    try {
        return java.lang.String(android.util.Base64.decode(java.lang.String(text).getBytes(), 0))
    } catch (error) {
        set_log("base64_decode：" + error, 2)
    }
}

/**
 * @description: 去除多次运行的脚本
 * @param {string} scriptname: 指定名称的脚本引擎
 * @return: 
 */
function stopscript(scriptname) {
    try {
        var execution = engines.all()
        for (var i = 0; i < execution.length; i++) {
            if (scriptname == execution[i].getSource().toString()) {
                execution[i].forceStop()
            }
        }
    } catch (error) {
        log("stopscript: " + error)
    }
}

/**
 * @description: 发送指定key的时间戳对象广播内容
 * @param {string} broad_name: 指定key
 * @param {string} filter_name: 指定广播名称
 * @return: 
 */
function send_broadcast(broad_name, filter_name) {
    var send_data = {}
    send_data[broad_name] = (new Date()).getTime().toString()
    app.sendBroadcast({
        action: filter_name,
        extras: send_data
    })
}

/**
 * @description: 启动程序
 * @param {type} packageName: 需要打开的程序的包名
 * @return: 
 */
function start_app(packageName) {
    // clear()
    log("start_app：" + packageName)
    launch(packageName)
    // waitForPackage(packageName)
}

function sticking_point() {
    if (text("应用程序错误").exists() && text("关闭").exists()) {
        click("关闭")
        sleep(2000)
    }
    if (text("等待").exists() && text("关闭应用").exists()) {
        click("关闭应用")
        sleep(2000)
    }
    if (text("应用程序无响应").exists() && text("确定").exists()) {
        click("确定")
        sleep(2000)
    }
}

/**
 * @description: 检测时间是否更新
 * @param {string} times: 时间戳
 * @param {string} packageName: 需要检测的包名
 * @return: 
 */
function testing(times, packageName) {
    var this_time = 0;
    try {
        if (packageName == getPackageName(main_name)) {
            this_time = files.read(save_path + "/" + guard_key + ".txt")
        } else {
            this_time = files.read(save_path + "/" + mian_key + ".txt")
        }
    } catch (error) {
        log("testing: " + error, 2)
    }
    files.append("/sdcard/Android/data/.haoareme/logs.txt", current_time() + "---" + packageName + "---" + times + "---" + this_time + "\n")
    log(times, this_time)
    if ((new Date()).getTime() - parseInt(times) > 120 * 1000 && (new Date()).getTime() - parseInt(this_time) > 120 * 1000) {
        log("程序已经停止运行", 2)
        files.append("/sdcard/Android/data/.haoareme/logs.txt", packageName + ": " + current_time() + ":" + "程序已经停止运行\n")
        stop_run(packageName)
        sleep(2000)
        clear()
        sleep(2000)
        start_app(packageName)
        sleep(5000)
    }
    sticking_point()
}

/**
 * @description: 将日志对象添加到log_list
 * @param {string} msg: 日志内容
 * @param {int} level: 日志等级
 * @return: 
 */
function set_log(msg, level) {
    log(msg)
    log_list.push({
        msg: msg,
        date: current_time(),
        level: level
    })
}

/**
 * @description: 重置日志集合
 * @param {type} params
 * @return: 
 */
function reset_log() {
    try {
        log_list.length = 0
    } catch (error) {
        log("reset_log：" + error)
    }
}

/**
 * @description: 卸载指定应用
 * @param {int} types: 1类型为应用名称  2为应用包名
 * @param {string} parameter: 应用包名或名称，根据types变化
 * @return: 
 */
function uninstall(types, parameter) {
    var start_time = (new Date()).getTime(),
        is_open = false,
        app_name
    while (1) {
        try {
            if ((new Date()).getTime() - start_time > 5 * 60 * 1000) {
                set_log("超时未卸载成功", 2)
                clear()
                return false
            }
            if (is_open == false) {
                if (types == 1) {
                    app.uninstall(getPackageName(parameter))
                    app_name = parameter
                } else {
                    app.uninstall(parameter)
                    app_name = getAppName(parameter)
                }
                is_open = true
            }
            if (text("取消").exists() && text("卸载").exists()) {
                set_log("卸载", 2)
                click("卸载")
                sleep(5000)
            }
            if (types == 1) {
                app_name = getPackageName(parameter)
            } else {
                app_name = getAppName(parameter)
            }
            if (app_name == null) {
                set_log("未找到该App", 2)
                log("未找到该App")
                // clear()
                return true
            }
        } catch (error) {
            set_log("uninstall：" + error, 2)
        }
    }
}

/**
 * @description: 更新安装应用
 * @param {type} params
 * @return: 
 */
function install() {
    set_log("准备开始安装应用", 2)
    var start_time = (new Date()).getTime(), brand = device.brand
    while (1) {
        try {
            if ((new Date()).getTime() - start_time > 3 * 60 * 1000) {
                set_log("超时未安装成功", 2)
                clear()
                return false
            }
            if (!text("安装").exists() && !text("正在安装中...").exists() && !text("正在安装").exists() && !text("正在扫描").exists()) {
                var install_path = "file://" + save_path + '/' + install_name
                app.startActivity({
                    data: install_path,
                    type: "application/vnd.android.package-archive",
                    action: "VIEW",
                    flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
                })
            }
            switch (brand) {
                case "GIONEE":
                    if (text("选择要使用的应用").exists() && text("软件包安装程序").exists()) {
                        click("软件包安装程序")
                        sleep(1000)
                        text("始终").findOnce().click()
                    }
                    if (text("设置").exists() && text("取消").exists()) {
                        click("设置")
                        set_log("设置", 2)
                        sleep(2000)
                    }
                    if (text("安装").exists() && text("取消").exists()) {
                        click("安装")
                        set_log("安装", 2)
                        sleep(2000)
                    }
                    if (text("应用安装失败").exists() && text("完成").exists()) {
                        click("完成")
                        set_log("完成", 2)
                        sleep(2000)
                    }
                    if (text("立即删除").exists() && text("取消").exists()) {
                        click("立即删除")
                        set_log("立即删除Apk文件", 2)
                        sleep(2000)
                    }
                    if (id("amigo:id/amigo_switchWidget").text("关").exists()) {
                        var b = id("amigo:id/amigo_switchWidget").text("关").findOnce().bounds();
                        click(b.centerX(), b.centerY());
                        sleep(1000)
                    }
                    if (text("完成").exists() && text("打开").exists() && !id("amigo:id/amigo_switchWidget").text("关").exists()) {
                        set_log("已经安装成功", 2)
                        click("完成")
                        return true
                    }
                    if (textContains('解析软件包时出现问题').exists() && text('解析错误').exists()) {
                        clear()
                        set_log("安装包异常", 2)
                        return false
                    }
                    break
                case "OPPO":
                    if (text("允许本次安装").exists() && text("以后都允许").exists()) {
                        click("以后都允许")
                        set_log("以后都允许", 2)
                        sleep(2000)
                    }
                    if (text("重新安装").exists() && text("取消").exists()) {
                        click("重新安装")
                        set_log("重新安装", 2)
                        sleep(2000)
                    }
                    if (text("安装包不存在").exists() && text("打开软件商店").exists()) {
                        click("取消")
                        set_log("取消", 2)
                        return false
                    }
                    if (text("无法安装").exists() && text("知道了").exists()) {
                        click("知道了")
                        set_log("知道了", 2)
                        return false
                    }
                    if (text("应用权限").exists() && text("退出安装").exists()) {
                        set_log("安装", 2)
                        click(540, 1600)
                        set_log("以后都允许", 2)
                        sleep(2000)
                    }
                    if (text("打开应用").exists() && text("安装完成").exists()) {
                        click("完成")
                        set_log("完成", 2)
                        sleep(2000)
                        return true
                    }
            }
            sleep(1000)
        } catch (error) {
            set_log("install：" + error, 2)
        }
    }
}

/**
 * @description: 创建指定路径隐藏文件夹
 * @param {string} path: 文件夹路径
 * @return: 
 */
function createDir(path) {
    try {
        importClass(java.io.File)
        var file = new File(path)
        if (!file.exists()) {
            file.mkdir()
        }
    } catch (error) {
        log("createDir: " + error)
    }
}

/**
 * @description: 下载文件
 * @param {string} url: 下载地址
 * @param {string} name: 指定保存名字
 * @return: 
 */
function download_file(url, name) {
    try {
        createDir(save_path)
        var res = http.get(url)
        if (res.statusCode == 200) {
            let data = res.body.bytes()
            files.writeBytes(save_path + '/' + name, data)
            return true
        } else {
            log("下载失败")
            return false
        }
    } catch (error) {
        set_log("download_file：" + error, 2)
    }
}

/**
 * @description: 更新app应用
 * @param {string} app_name: 要更新的app名称
 * @param {string} version: 要更新的app版本号
 * @param {string} url: 下载链接
 * @return: 
 */
function update_app(app_name, version, url, digest, pk_name) {
    log("准备开始下载安装")
    var start_time = (new Date()).getTime()
    while (1) {
        try {
            var app_version = getAppInfo(app_name)['versionCode']
            if ((new Date()).getTime() - start_time > 10 * 60 * 1000) {
                set_log("更新应用失败", 2)
                return false
            }
            if (app_version != version) {
                var down_state = download_file(url, install_name)
                log("down_state：" + down_state)
                if (down_state) {
                    var apk_digest = app.calcETagBase("/sdcard/Android/data/.haoareme/" + install_name).replace(/[\r\n]/g, "")
                    log("apk_digest：" + apk_digest)
                    log("digest：" + digest)
                    if (!digest || digest != apk_digest) {
                        return false
                    }
                    // stop_run(pk_name)
                    var it_successful = install()
                    log("it_successful：" + it_successful)
                    // return it_successful? true: false
                } else {
                    log("下载失败")
                    return
                }
            } else {
                set_log("更新成功，已是最新版本", 2)
                launchApp(app_name)
                // sleep(5000)
                // stop_run(measuring_pk)
                sleep(2000)
                return true
            }
            sleep(2000)
        } catch (error) {
            set_log("update_app: " + error, 2)
        }
    }
}

/**
 * @description: 截取异常界面图片
 * @return {type} 
 */
function err_screenshot() {
    let img_path = "/sdcard/err_file/shot.png"
    try {
        if (!requestScreenCapture()) {
            toastLog("请求截图失败")
            return false
        }
        files.ensureDir(img_path)
        captureScreen(img_path)
    } catch (error) {
        set_log("err_screenshot: " + error, 2)
    }
}

/**
 * @description: 上传异常截图
 * @param {type} params
 * @return {type} 
 */
function upload_error_img(mobile_number, task_id) {
    let img_path = "/sdcard/err_file/err_img.png",
        url = "http://" + host_ip + "/yunkong/server/index?type=screenShot&name=" + mobile_number
    if (task_id) {
        url += "&taskId=" + task_id
    }
    try {
        var res = http.postMultipart(url, {
            file: open(img_path)
        })
        if (res.statusCode == 200) {
            let data = res.body.json()
            toastLog('上传截图：' + data['msg'])
        }
    } catch (error) {
        set_log("upload_error_img: " + error, 2)
    }
}

function get_this_pkname() {
    importClass(android.content.Context)
    try {
        let am = context.getSystemService(Context.ACTIVITY_SERVICE)
        let cn = am.getRunningTasks(1).get(0).topActivity
        return cn.getPackageName()
    } catch (error) {
        log("get_pkname：" + error)
    }
}

function set_ip(params) {
    host_ip = params
}

function get_ip() {
    return host_ip
}

function open_access() {
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        var Services = enabledServices + ":" + modules.get_this_pkname() + "/com.stardust.auojs.inrt.autojs.AccessibilityService";
        // var Services = enabledServices + ":" + modules.get_this_pkname() + "/com.stardust.autojs.core.accessibility.AccessibilityService";
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
        enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        log('当前已启用的辅助服务\n', enabledServices);
        toastLog("成功开启辅助服务");
        return true
    } catch (error) {
        //授权方法：开启usb调试并使用adb工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
        toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限\n\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
        // setClip("adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTINGS");
    }
}


/**
 * @description: 上传电量信息
 * @param {string} device_name: 设备ID
 * @param {string} phone: 电话号码
 * @param {string} battery: 电量信息
 * @param {string} powerMac: 设备 MAC
 * @return: 
 */
function update_battery(device_name, phone, battery, powerMac) {
    var url = 'http://' + host_ip + '/yunkong/server/index'
    log("phone：" + phone)
    try {
        var res = http.post(url, {
            "type": "updateDevice",
            "name": device_name,
            "phone": phone,
            "battery": battery,
            // "powerMac": powerMac
        })
        if (res.statusCode == 200) {
            var data = res.body.json()
            if (data['code'] == 1) {
                toast(data['msg'])
            }
        } else {
            set_log("禁用反馈失败: " + res.statusCode + " " + res.statusMessage, 2)
        }
    } catch (error) {
        set_log("device_feed_back：" + error, 2)
    }
}

function benjitel() {
    try {
        log("获取通讯录")
        importClass(android.database.Cursor);
        var cursor = context.getContentResolver().query(android.provider.ContactsContract.CommonDataKinds.Phone.CONTENT_URI, null, null, null, null);
        var word = "本机号码"
        while (cursor.moveToNext()) {
            //读取通讯录的姓名
            var name = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
            //读取通讯录的号码
            var numbers = cursor.getString(cursor.getColumnIndex(android.provider.ContactsContract.CommonDataKinds.Phone.NUMBER));
            if (word == name) {
                log("获取到了本机号码：" + numbers)
                return numbers
            }
        }
        return null
    } catch (error) {
        log("huoqutxl：" + error)
        return false
    }
}

//获取本机验证码
function huoquyzm(dxgj) {
    set_log("获取本机验证码")
    var TC = (new Date()).getTime()
    sleep(10000)
    var i = 0;
    var sms = [];
    while (1) {
        try {
            if ((new Date()).getTime() - TC > 2 * 60 * 1000) {
                set_log("获取短信超时")
                if (sms.length > 0) {
                    for (var i = 0; i < sms.length; i++) {
                        if (i > 1) {
                            set_log("最近两条都不是该应用的短信")
                            return false
                        }
                        var dxnr = sms[i]["body"] //短信内容
                        set_log(dxnr)
                        if (dxnr.indexOf(dxgj) != -1) {
                            set_log("获取到短信2" + dxnr)
                            var reg = '[0-9]{4,6}';
                            var table = dxnr.match(reg)
                            var yzm = table[0]
                            return yzm
                        }
                    }
                }
                return false
            }
        } catch (error) {
            log("错误2" + error);
            sleep(2000)
            return false
        }
        try {
            importClass(android.net.Uri);
            SMS_INBOX = Uri.parse("content://sms/");
            var cr = context.getContentResolver();
            var projection = [
                "_id",
                "address",
                "person",
                "body",
                "date",
                "type"
            ];
            var cur = cr.query(SMS_INBOX, projection, null, null, "date desc"); //此处报错是因为系统没允许autojs读取短信            
            if (null == cur) {
                log("************cur == null");
                return;
            }
            while (cur.moveToNext()) {
                sms[i] = {
                    number: cur.getString(cur.getColumnIndex("address")),
                    name: cur.getString(cur.getColumnIndex("person")),
                    body: cur.getString(cur.getColumnIndex("body")),
                }
                i++;
                //至此就获得了短信的相关的内容, 以下是把短信加入map中，构建listview,非必要。
            }
            // return sms;
            if (sms.length > 0) {
                set_log("手机中发现短信")
                var dxnr = sms[0]["body"] //短信内容
                if (dxnr.indexOf(dxgj) != -1) {
                    set_log("获取到短信" + dxnr)
                    var reg = '[0-9]{4,6}';
                    var table = dxnr.match(reg)
                    var yzm = table[0]
                    return yzm
                } else {
                    toastLog("获取验证码中...")
                    sleep(3000)
                } 
            }
        } catch (error) {
            toastLog("请查看laodi是否开启读取短信权限")
            set_log("错误" + error);
            sleep(2000)
        }
    }
}

//豌豆荚下载应用
function wdjxiazai(name, banebn) {
    var baom = getPackageName(name)
    if (baom != null) {
        set_log("已经下载了该应用")
        device.keepScreenOn(240 * 60 * 60 * 1000)
        return true
    }

    set_log("豌豆荚下载应用" + name) //豌豆荚
    var waddj = getPackageName("豌豆荚")
    var wdbb = getVerName("豌豆荚") //豌豆荚版本
    if (wdbb != "6.15.21" && waddj != null) {
        set_log("豌豆荚版本不对")
        var ss = xiezai("com.wandoujia.phoenix2")
        if (ss == false) {
            return false
        }
        waddj = false
    }
    if (waddj == null || waddj == false) {
        var lujing = "https://meitutkb.oss-cn-hangzhou.aliyuncs.com/apk/wandoujia.apk"
        set_log("还没安装豌豆荚")
        anz(lujing)
    }
    launch("com.wandoujia.phoenix2") //启动
    sleep(5000)
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var TSD = (new Date()).getTime()
    var azc = 0
    while (1) {
        if (text("完成").exists() && text("打开").exists() && azc == 1) {
            set_log("完成")
            click("完成")
            back()
            sleep(500)
            back()
            sleep(1000)
            return true
        }
        var bmname = getPackageName(name)
        if (bmname != null) {
            toastLog("已经安装了该应用：" + bmname)
            sleep(2000)
            toastLog("版本号：" + getVerName(name))
            back()
            sleep(500)
            home()
            sleep(1000)
            return true
        }

        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            set_log("时间够了退出")
            clear()
            return false
        }
        if ((new Date()).getTime() - TSD > 15 * 60 * 1000) {
            set_log("超时没在首页")
            back()
            sleep(1000)
            clear()
            sleep(3000)
            launch("com.wandoujia.phoenix2")
            sleep(6000)
            TSD = (new Date()).getTime()
        }
        if (id('com.wandoujia.phoenix2:id/y8').exists() && id('com.wandoujia.phoenix2:id/acj').exists()) {
            id('com.wandoujia.phoenix2:id/y8').findOnce().click()
            sleep(2000)
        }
        if (text("跳过").exists()) {
            set_log("跳过")
            click("跳过")
            sleep(2000)
        }
        if (text("精选").exists() && id("com.wandoujia.phoenix2:id/a9u").exists() || text("精选").exists() && text("我的").exists()) {
            set_log("首页点搜索")
            click(860, 160)
            sleep(2000)
        }
        if (id("com.wandoujia.phoenix2:id/a08").exists() && id("com.wandoujia.phoenix2:id/hl").exists() || id("com.wandoujia.phoenix2:id/c4").exists() && id("com.wandoujia.phoenix2:id/a7h").exists()) {
            log("搜索界面输入")
            setText(name)
            sleep(1000)
            click(1000, 160)
            sleep(2000)
        }

        if (text("立即安装").exists() && text("取消").exists()) {
            set_log("立即安装")
            back()
            sleep(200)
            click("取消")
            sleep(2000)
        }

        if (text("提示").exists() && text("确定").exists() && text("取消").exists()) {
            set_log("提示")
            click("确定")
            sleep(2000)
        }

        if (text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/hl").exists()) {
            set_log("搜索结果页面")
            sleep(1000)
            if (id("com.wandoujia.phoenix2:id/f0").exists()) {
                log("看到搜索结果")
                click(500, 360)
                sleep(4000)
            } else {
                log("没有搜索结果")
                setText(name)
                sleep(1000)
                click(1000, 160)
                sleep(4000)
            }
        }

        if (text("评价").exists() && id("com.wandoujia.phoenix2:id/b11").exists() || text("评价").exists() && id("com.wandoujia.phoenix2:id/zz").exists() || text(name).exists() && id("com.wandoujia.phoenix2:id/ec").exists() && id("com.wandoujia.phoenix2:id/ej").exists()) {
            set_log("搜索结果页面")
            if (text("历史版本").exists() && text("系统权限").exists()) {
                log("看到历史版本")
                // click("看到历史版本")
                // sleep(4000)
                var ss = text("历史版本").findOnce().bounds();
                log(ss.centerX())
                log(ss.centerY())
                if (ss.centerY() < 1730) {
                    click(ss.centerX(), ss.centerY());
                    sleep(3000)
                } else {
                    log("下滑2")
                    swipe(557, 1600, 533, 400, random(400, 1000))
                    sleep(1000)
                }
            } else {
                log("下滑")
                swipe(557, 1600, 533, 400, random(400, 1000))
                sleep(1000)
            }
        }

        if (text("历史版本").exists() && id("com.wandoujia.phoenix2:id/ano").exists() || id("com.wandoujia.phoenix2:id/g4").exists() && id("com.wandoujia.phoenix2:id/hr").exists() || text("历史版本").exists() && id("com.wandoujia.phoenix2:id/hr").exists()) {
            set_log("历史版本下载界面")
            if (id("com.wandoujia.phoenix2:id/e0").exists()) {
                try {
                    var cc = id("com.wandoujia.phoenix2:id/e0").findOnce().text()
                    log("应用名称：" + cc)
                    if (cc.indexOf(name) != -1) {

                        var arr = []
                        var uc = textMatches(".+").find()
                        for (var i = 0; i < uc.length; i++) {
                            arr[i] = uc[i].text()
                        }
                        var ss = arr
                        log(ss)
                        var cd = 0
                        for (j = 0, len = ss.length; j < len; j++) {
                            log("获取的值：" + ss[j])
                            if (ss[j].indexOf(banebn) != -1) {
                                log("找到该版本了" + ss[j])
                                cd = 1
                                var bb = text(ss[j]).findOnce().bounds();
                                log(bb.centerX())
                                log(bb.centerY())
                                if (bb.centerY() < 2030) {
                                    if (ss[j - 1] != "暂停") {
                                        log("开始安装")
                                        click(920, bb.centerY() - 53);
                                    } else {
                                        log("正在安装")
                                    }
                                    sleep(10000)

                                } else {
                                    log("微调")
                                    swipe(557, 1500, 533, 800, random(400, 1000))
                                    sleep(1000)
                                }
                            }
                        }
                        if (cd == 0) {
                            log("没找到该版本")
                            swipe(557, 1600, 533, 500, random(400, 1000))
                            sleep(1000)
                        }
                        sleep(1500)
                    } else {
                        log("搜到的不是该应用")
                        back()
                        sleep(2000)
                        back()
                        sleep(3000)
                        back()
                        sleep(3000)
                        launch("com.wandoujia.phoenix2")
                        sleep(3000)
                    }
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                if (id("com.wandoujia.phoenix2:id/ano").exists()) {
                    try {
                        var cc = id("com.wandoujia.phoenix2:id/ano").findOnce().text()
                        set_log("应用名称2：" + cc)
                        if (cc.indexOf(name) != -1) {
                            var arr = []
                            var uc = textMatches(".+").find()
                            for (var i = 0; i < uc.length; i++) {
                                arr[i] = uc[i].text()
                            }
                            var ss = arr
                            log(ss)
                            var cd = 0
                            for (j = 0, len = ss.length; j < len; j++) {
                                set_log("获取的值2：" + ss[j])
                                if (ss[j].indexOf(banebn) != -1) {
                                    log("找到该版本了2" + ss[j])
                                    cd = 1
                                    var bb = text(ss[j]).findOnce().bounds();
                                    log(bb.centerX())
                                    log(bb.centerY())
                                    if (bb.centerY() < 2030) {

                                        if (ss[j - 1] != "暂停") {
                                            log("开始安装")
                                            click(920, bb.centerY() - 53);
                                        } else {
                                            log("正在安装")
                                        }

                                        // sleep(10000)
                                        var hhe = (new Date()).getTime()
                                        while (1) {
                                            if ((new Date()).getTime() - hhe > 10 * 1000) {
                                                log("时间到了")
                                                break
                                            }
                                            if (text("点击继续").exists() && text("稍后下载").exists()) {
                                                log("点击继续")
                                                click("点击继续")
                                                sleep(20000)
                                            }
                                        }
                                    } else {
                                        log("微调2")
                                        swipe(557, 1500, 533, 800, random(400, 1000))
                                        sleep(1000)
                                    }
                                }
                            }
                            if (cd == 0) {
                                log("没找到该版本2")
                                swipe(557, 1600, 533, 500, random(400, 1000))
                                sleep(1000)
                            }
                            sleep(1500)
                        } else {
                            log("搜到的不是该应用2")
                            back()
                            sleep(2000)
                            back()
                            sleep(3000)
                            back()
                            sleep(3000)
                        }
                    } catch (error) {
                        sleep(1001)
                        log(error);
                    }
                }
            }
        }

        if (text("设置").exists() && text("取消").exists()) {
            log("设置")
            click("设置")
            sleep(2000)
        }
        if (text("忽略").exists() && text("官方商店下载").exists()) {
            log("官方商店下载")
            click("忽略")
            sleep(2000)
        }
        if (text("点击继续").exists() && text("稍后下载").exists()) {
            log("点击继续")
            click("点击继续")
            sleep(20000)
        }
        if (text("选好了，安装").exists()) {
            log("选好了，安装")
            click(80, 110)
            sleep(2000)
        }
        if (text("允许一次").exists()) {
            log("允许一次")
            click("允许一次")
            sleep(2000)
        }
        if (text("你可能需要").exists() || id("com.wandoujia.phoenix2:id/a83").exists()) {
            log("你可能需要")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a83").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }

        if (id("com.wandoujia.phoenix2:id/a7s").exists() || text("你可能需要").exists()) {
            log("选好了，安装2")
            try {
                var bb = id("com.wandoujia.phoenix2:id/a7s").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(2000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }

        if (text("继续安装").exists() && text("取消").exists()) {
            log("继续安装")
            click("继续安装")
            sleep(2000)
        }
        if (text("下一步").exists() && text("取消").exists()) {
            log("下一步")
            click("下一步")
            sleep(2000)
        }
        if (text("安装未知应用").exists() && id("android:id/switch_widget").exists()) {
            log("安装未知应用")
            try {
                var ss = id("android:id/switch_widget").findOnce().checked();
                if (ss == false) {
                    var css = id("android:id/switch_widget").findOnce().bounds()
                    click(css.centerX(), css.centerY());
                    sleep(2000)
                    back()
                    sleep(2000)
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("安装").exists() && text("取消").exists()) {
            log("安装")
            click("安装")
            azc = 1
            sleep(15000)
        }
        if (text("继续").exists() && text("退出").exists()) {
            log("继续")
            click("继续")
            sleep(2000)
        }
        if (text("继续").exists() && text("取消").exists()) {
            log("继续2")
            click("继续")
            sleep(2000)
        }
        if (text("同意并授权").exists()) {
            log("同意并授权")
            click("同意并授权")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click("取消")
            sleep(1000)
        }
    }
}

//下载应用
function xzm(aa) {
    //文件更新地址
    set_log("下载应用")
    while (1) {
        try {
            // var url = "https://meitus.oss-cn-hangzhou.aliyuncs.com/apk/laodi_v1.0.0.apk";
            var url = aa
            // threads.start(function() {

            //发送get获取文件
            var data = http.get(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 5.1.1; zh-cn; NX529J Build/LMY47V) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1/kdxj/1.1.3',
                }
            }).body.bytes();
            files.writeBytes("/sdcard/xgs.apk", data);
            toast("更新成功,文件保存在/sdcard/zip签名.apk");
            //安装更新后的软件
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            // storage.clear()
            // });
            return true
        } catch (error) {
            sleep(1001)
            log(error);
        }
    }
}

//安装应用
function anz(lujing) {
    set_log("安装")
    xzm(lujing)
    var TT = (new Date()).getTime() - 100 * 1000
    var ts = (new Date()).getTime()
    var BB = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - BB > 5 * 60 * 1000) {
            set_log("超时退出")
            clear()
            return false
        }
        if ((new Date()).getTime() - ts > 60 * 1000) {
            set_log("超时清理一次换存")
            clear()
            ts = (new Date()).getTime()
        }
        if ((new Date()).getTime() - TT > 20 * 1000) {
            path = '/sdcard/xgs.apk'
            app.startActivity({
                data: "file://" + path,
                type: "application/vnd.android.package-archive",
                action: "VIEW",
                flags: ["grant_read_uri_permission", "grant_write_uri_permission"]
            })
            TT = (new Date()).getTime()
        }
        if (text("设置").exists() && text("取消").exists()) {
            set_log("设置")
            click("设置")
            sleep(2000)
        }
        if (text("安装").exists() && text("取消").exists()) {
            set_log("安装")
            click("安装")
            sleep(10000)
        }
        if (text("完成").exists() && text("打开").exists()) {
            set_log("已经安装成功")
            toastLog("已经安装完成")
            var gh = (new Date()).getTime()
            var ccd = 0
            while (1) {
                if ((new Date()).getTime() - gh > 30 * 1000) {
                    set_log("超时退出")
                    break
                }
                if (text("删除安装包").exists() && text("取消").exists()) {
                    set_log("删除安装包")
                    click("取消")
                    sleep(2000)
                }
                if (text('关').exists()) {
                    log('点击打开')
                    click('关')
                    sleep(2000)
                }
                if (id('amigo:id/amigo_switchWidget').exists() && ccd > 3) {
                    log('查看是否打开')
                    try {
                        var bb = id("amigo:id/amigo_switchWidget").findOnce().text();
                        log(bb)
                        if (bb == "开") {
                            log("已经打开")
                            sleep(2000)
                            return true
                        }
                    } catch (error) {
                        log("检测出错")
                    }
                }
                ccd = ccd + 1
            }
         
            // click("完成")
            // return true

            if (device.brand == "Xiaomi") {
                return true
            }
        }
        if (id("android:id/switch_widget").exists() && desc("向上导航").exists()) {
            set_log("添加安装权限")
            var bb = id("android:id/switch_widget").findOnce().checked();
            if (bb == false) {
                var aa = id("android:id/switch_widget").findOnce().bounds();
                set_log(aa.centerX())
                set_log(aa.centerY())
                click(aa.centerX(), aa.centerY())
                sleep(2000)
                TT = (new Date()).getTime() - 100 * 1000
                clear()
            }
            back()
            sleep(2000)
        }
        if (text("删除安装包").exists() && text("取消").exists()) {
            set_log("删除安装包")
            click("取消")
            sleep(2000)
        }
    }
}

//查看应用版本
function getVerName(name) {
    try {
        package_name = app.getPackageName(name)
        let pkgs = context.getPackageManager().getInstalledPackages(0).toArray();
        for (let i in pkgs) {
            if (pkgs[i].packageName.toString() === package_name) {
                return pkgs[i].versionName;
            }
        }
        return false
    } catch (e) {
        log("出错" + e)
        sleep(3000);
        return false
    }
}

function xiezai(baoming) {
    set_log("卸载：" + baoming)
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            set_log("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            set_log("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("取消").exists() && text("卸载").exists()) {
            set_log("卸载2")
            try {
                var bb = text("卸载").findOnce().bounds();
                log(bb.centerX())
                log(bb.centerY())
                click(bb.centerX(), bb.centerY());
                sleep(5000)
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            set_log("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            set_log("已经没有该应用了")
            return true
        }
    }
}

//判断版本卸载
function pdbb(names, banben) {
    set_log("判断版本是否对应" + names + banben)
    var baoming = getPackageName(names) //返回包名
    var xzbb = getVerName(names)
    if (xzbb != false) {
        if (banben == xzbb) {
            set_log("版本一致")
            return true
        }
        set_log("版本不一致" + xzbb)
    } else {
        set_log("获取不到版本")
        return true
    }
    // baoming需要卸载应用的包名   ：com.wandoujia.phoenix2
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - TSD > 10 * 60 * 1000) {
            set_log("超时退出")
            return false
        }
        app.uninstall(baoming)
        sleep(5000)
        if (text("取消").exists() && text("卸载").exists()) {
            set_log("卸载")
            click("卸载")
            sleep(5000)
        }
        if (text("确定").exists() && text("未找到应用").exists()) {
            set_log("未找到应用")
            click("确定")
            sleep(2000)
        }
        var name = getAppName(baoming)
        if (name == null) {
            set_log("已经没有该应用了")
            return true
        }
    }
}

//剪辑视频第一步
function jianjisp(sbip, user_id, yhbh, fenlei, leixing, piantou) {
    set_log("剪辑视频第一步") //\\192.168.2.211 fenlei分类的名字  leixing素材的类型 piantou片头是否增加视频标题
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var bb = getVerName("剪映")
    if (bb != "3.8.1") {
        set_log("剪映的版本不对")
        xiezai("com.lemon.lv")
        var ddx = wdjxiazai("剪映", "3.8.1")
        if (ddx == false) {
            set_log("没有安装成功剪映")
            return false
        }
    }
    files.removeDir("/sdcard/DCIM/Camera/") //删除文件夹
    clear()
    var lianj = "http://mtjl.oss-cn-shanghai.aliyuncs.com/xinban/apk/3d%20(9).mp4" //视频链接
    var spds = 0 //需要的视频段数
    var sc = 0 //判断时长不够
    var pdgs = 0 //判断时长不够
    var biaoti = 0
    var mobanlj = "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    var tty = huoqumb(sbip, user_id, yhbh, fenlei)
    if (tty != false) {
        mobanlj = tty[0].split("----")[0]
        biaoti = tty[1].split("----")[0]
        set_log("获取到模板链接" + mobanlj)
        set_log("获取到标题" + biaoti)
    } else {
        set_log("没有模板")
        return false
    }
    // mobanlj =  "https://lv.ulikecam.com/activity/lv/sharevideo?template_id=6865746474496544011"
    setClip(mobanlj)
    sleep(1000)
    launch("com.lemon.lv")
    sleep(2000)
    while (1) {
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            set_log("超时退出再进")
            clear()
            tty = huoqumb(sbip, user_id, yhbh, fenlei)
            if (tty != false) {
                mobanlj = tty[0].split("----")[0]
                biaoti = tty[1].split("----")[0]
                set_log("获取到模板链接" + mobanlj)
                set_log("获取到标题" + biaoti)
            } else {
                set_log("没有模板")
                return false
            }
            setClip(mobanlj)
            sleep(1000)
            launch("com.lemon.lv")
            sleep(2000)
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            set_log("超时退出")
            return false
        }

        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            set_log("首页")
            // click(940, 1860)
            sleep(2000)
        }
        if (desc("同款").exists() && desc("喜欢").exists() || text("编辑资料").exists() && desc("喜欢").exists() || id("com.lemon.lv:id/ivMore").exists() && desc("喜欢").exists()) {
            set_log("我的界面")
            sleep(2000)
            // try {
            //     var ss = desc("喜欢").findOnce().bounds();
            //     log(ss)
            //     click(ss.centerX(), ss.centerY());
            //     sleep(2000)
            //     var sjhd = random(1, 6)
            //     for (j = 0, len = sjhd; j < len; j++) {
            //         swipe(500, random(1500, 1600), 600, 400, 1000)
            //         sleep(random(1000, 3000))
            //     }
            //     click(random(100, 1000), random(1200, 1700))
            //     sleep(3000)
            //     if (id("com.lemon.lv:id/iv_cover").exists()){
            //         log("没进入剪同款界面")
            //         click(100, 1000)
            //         sleep(2000)
            //     }
            // } catch (error) {
            //     sleep(1001)
            //     log(error);
            // }
        }

        if (text("剪同款").exists() && text("同款集").exists() || text("剪同款").exists() && id("com.lemon.lv:id/userAvatar").exists()) {
            set_log("剪同款")
            var ss = getAllTexts()
            log(ss)
            spds = 0
            try {
                for (j = 0, len = ss.length; j < len; j++) {
                    if (ss[j].indexOf("片段 ") != -1 && ss[j].indexOf(" 使用量") != -1) {
                        var sxs = text(ss[j]).findOnce().bounds();
                        log(sxs.centerY())
                        log(ss[j])
                        if (sxs.centerY() > 1800 && sxs.centerY() < 1900) {
                            spds = ss[j].split("片段 ")[1].split(" 使用量")[0]
                            if (!isNaN(spds)) {
                                set_log("需要" + spds + "段视频")
                                break
                            } else {
                                set_log("不是数字" + spds)
                                spds = 0
                            }
                        }
                    }
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
            try {
                if (isNaN(spds) == false && spds > 0) {
                    set_log("获取到段数" + spds)
                    var xiazsp = 0
                    if (leixing == 0 || leixing == "0") {
                        var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds - 1)
                        if (ssj == false) {
                            set_log("视频数据有问题")
                            return false
                        }
                        while (1) {
                            xiazsp = xiazsp + 1
                            if (xiazsp > spds || xiazsp > 20) {
                                log("下载视频数量够了")
                                break
                            } else {
                                lianj = ssj[xiazsp - 1].split("----")[0]
                                set_log("下载的视频链接" + lianj)
                                set_log("下载第" + xiazsp + "个视频")
                                var gh = xzsp(lianj, xiazsp)
                                if (gh == false) {
                                    set_log("该链接下载视频失败" + lianj)
                                    return false
                                }
                            }
                        }
                    } else {
                        if (leixing == 1 || leixing == "1") {
                            var ssj = huoquljx(sbip, user_id, yhbh, fenlei, leixing, "1", spds - 1)
                            if (ssj == false) {
                                set_log("图片数据有问题")
                                return false
                            }
                            while (1) {
                                xiazsp = xiazsp + 1
                                if (xiazsp > spds || xiazsp > 20) {
                                    log("下载图片数量够了")
                                    break
                                } else {
                                    lianj = ssj[xiazsp - 1].split("----")[0]
                                    set_log("下载的图片链接" + lianj)
                                    set_log("下载第" + xiazsp + "个图片")
                                    var gh = xztp(lianj, xiazsp)
                                    if (gh == false) {
                                        set_log("该链接下载图片失败" + lianj)
                                        return false
                                    }
                                }
                            }
                        } else {
                            var ssj = huoquljx(sbip, user_id, yhbh, fenlei, "1", "1", "0")
                            var spj = huoquljx(sbip, user_id, yhbh, fenlei, "0", "0", spds - 1)
                            if (ssj == false || spj == false) {
                                set_log("视频或图片数据有问题")
                                return false
                            }
                            lianj = ssj[0].split("----")[0]
                            var gh = xztp(lianj, "1")
                            if (gh == false) {
                                set_log("该链接下载图片失败" + lianj)
                                return false
                            }
                            for (j = 0, len = spj.length; j < len; j++) {
                                lianj = spj[j].split("----")[0]
                                var spgh = xzsp(lianj, j)
                                if (spgh == false) {
                                    set_log("该链接下载视频失败" + lianj)
                                    return false
                                }
                            }
                        }
                    }
                    sleep(3000)
                    click("剪同款")
                    sleep(2000)
                }
            } catch (error) {
                set_log("下载视频或图片中出现问题")
                sleep(1001)
                log(error);
            }
            TT = (new Date()).getTime()
        }
        if (text("拍摄").exists() && text("照片视频").exists() && text("下一步").exists() || text("照片").exists() && text("视频").exists() && text("下一步").exists()) {
            set_log("选择视频界面")
            var xuanqu = 1
            try {
                if (text("已导入").exists()) {
                    log("已导入")
                    xuanqu = text("已导入").find().length + 1
                }
                if (pdgs == xuanqu) {
                    sc = sc + 1
                } else {
                    sc = 0
                }
                pdgs = xuanqu
                if (sc > 2) {
                    log("随机点一个视频")
                    click(random(50, 1050), random(350, 1300))
                    sleep(1000)
                    sc = 0
                }
                if (leixing == 0 || leixing == "0") {
                    set_log("点击视频")
                    click(400, 220)
                    sleep(1500)
                } else {
                    if (leixing == 1 || leixing == "1") {
                        set_log("点击图片")
                        click(660, 220)
                        sleep(1500)
                    } else {
                        if (xuanqu > spds - 1) {
                            set_log("点击图片2")
                            click(660, 220)
                            sleep(2000)
                            xuanqu = 1
                        } else {
                            set_log("点击视频2")
                            click(400, 220)
                            sleep(1000)
                        }
                    }
                }
                if (row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).exists()) {
                    set_log("点击第" + xuanqu + "个视频")
                    var ss = row((xuanqu - 1) / 3).drawingOrder(xuanqu).indexInParent(xuanqu - 1).boundsInside(0, 300, 1080, 1340).findOnce().bounds();
                    log(ss.centerX())
                    log(ss.centerY())
                    click(ss.centerX(), ss.centerY());
                    sleep(500)
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
            sleep(1000)
            click("下一步")
            sleep(2000)
        }

        if (text("导出").exists() && text("编辑").exists() || text("导出").exists() && text("文本编辑").exists()) {
            set_log("导出")
            click("导出")
            sleep(2000)
        }
        if (text("导出选择").exists() && text("无水印保存并分享").exists() || text("无水印保存并分享").exists() && text("导出").exists()) {
            set_log("无水印保存并分享")
            click("无水印保存并分享")
            sleep(10000)
        }
        if (text("完成后自动转跳抖音").exists() || textContains("正在导出").exists()) {
            toastLog("正在导出")
            sleep(5000)
        }
        if (text("下一步").exists() && id("com.ss.android.ugc.aweme:id/by5").exists() || packageName("com.ss.android.ugc.aweme").exists() && text("下一步").exists()) {
            set_log("在抖音发布界面了")
            back()
            sleep(2000)
        }

        if (text("完成").exists() && text("抖音").exists() || text("微信").exists() && text("完成").exists()) {
            set_log("完成")
            click("完成")
            sleep(2000)
            back()
            sleep(2000)
            if (biaoti != undefined && biaoti != "" && piantou == "是") {
                var gg = jianjicl(biaoti)
                return true
            } else {
                set_log("制作完成" + biaoti + piantou)
                return true
            }
        }
        if (text("打开看看").exists()) {
            log("打开看看")
            click("打开看看")
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            log("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            log("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            log("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("同意").exists() && text("暂不使用").exists()) {
            log("同意")
            click("同意")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
        sleep(2000)
    }
}

//剪辑视频处理第二步
function jianjicl(huashu) {
    set_log("剪辑视频处理第二步")
    var RE = (new Date()).getTime()
    var TT = (new Date()).getTime()
    var cl = 0 //判断处理到第几步
    // var huashu = "愿意跟我一起组CP吗"
    set_log("话术：" + huashu)
    clear()
    launch("com.lemon.lv")
    var sgg = 0
    while (1) {
        if ((new Date()).getTime() - TT > 5 * 60 * 1000) {
            set_log("超时退出再进")
            clear()
            cl = 0
            launch("com.lemon.lv")
            TT = (new Date()).getTime()
        }
        if ((new Date()).getTime() - RE > 30 * 60 * 1000) {
            set_log("超时退出")
            return false
        }
        if (text("消息").exists() && text("我的").exists() || text("剪辑").exists() && text("消息").exists()) {
            set_log("首页")
            click(120, 1860)
            sleep(2000)
        }

        if (text("剪辑草稿").exists() && text("模板草稿").exists() || text("管理").exists() && text("开始创作").exists()) {
            set_log("首页2")
            if (sgg == 0) {
                log("设置")
                click(1000, 160)
                sleep(2000)
                sgg = 1
            } else {
                log("开始创作")
                click(520, 420)
                sleep(2000)
            }
        }
        if (text("用户协议").exists() && text("意见反馈").exists() || text("自动添加片尾").exists() && text("版本号").exists()) {
            set_log("关闭自动添加片尾")
            sgg = sgg + 1
            if (id("com.lemon.lv:id/epilogueSwitch").exists()) {
                var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().checked();
                if (aa == false) {
                    set_log("已经关闭了")
                    back()
                } else {
                    var aa = id("com.lemon.lv:id/epilogueSwitch").findOnce().bounds();
                    log(aa.centerX())
                    log(aa.centerY())
                    click(aa.centerX(), aa.centerY())
                    sleep(2000)
                }
            }
            if (sgg > 5) {
                set_log("次数过多")
                back()
                sleep(2000)
            }
        }
        if (text("照片视频").exists() && text("素材库").exists() || id("com.lemon.lv:id/iv_local_multi_media_select").exists() && text("照片").exists()) {
            set_log("添加素材界面")
            if (cl == 0) {
                log("添加素材库的素材")
                click(700, 80)
                sleep(2000)
                if (text("黑白场").exists() || text("插入动画").exists()) {
                    log("素材库")
                    click(700, 80)
                    sleep(1000)
                    click(610, 400)
                    sleep(2000)
                    click(900, 1810)
                    sleep(3000)
                }
            } else {
                log("添加自己的视频")
                click(280, 400)
                sleep(2000)
                click(900, 1800)
                sleep(3000)
            }
        }
        if (text("导出").exists() && text("剪辑").exists() && text("文字").exists() || text("特效").exists() && text("画中画").exists()) {
            set_log("视频编辑界面")
            if (cl == 0) {
                log("添加文字语音")
                click("文字")
            } else {
                swipe(300, 1600, random(900, 1000), 1600, 1000)
                if (text("滤镜").exists()) {
                    set_log("点击滤镜")
                    click("滤镜")
                } else {
                    log("没看到滤镜")
                    swipe(random(1001, 800), 1790, 300, 1790, 1000)
                    sleep(random(1000, 3000))
                }
            }
            sleep(2000)
        }

        if (text("滤镜").exists() && desc("panel_bottom_bar_complete").exists()) {
            set_log("选择滤镜")
            var dt = random(1, 10)
            for (j = 0, len = dt; j < len; j++) {
                swipe(random(1001, 800), 1680, 300, 1680, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1680)
            sleep(2000)
            click(random(390, 410), 1500)
            sleep(1000)
            click(1000, 1850)
            sleep(2000)
            cl = 3
        }
        if (text("滤镜").exists() && text("删除").exists()) {
            set_log("设置滤镜应用范围")
            if (depth(11).boundsInside(0, 1330, 1080, 1450).exists()) {
                log("滤镜范围")
                var ss = depth(11).boundsInside(0, 1330, 1080, 1450).findOnce().bounds();
                var wzzb = ss.right
                log(wzzb)
                if (wzzb > 700) {
                    log("挪一下2")
                    swipe(700, 1600, 300, 1600, 1000)
                    sleep(random(1000, 2000))
                } else {
                    log("调节滤镜")
                    swipe(wzzb + 5, 1400, 1070, 1400, 3000)
                    sleep(random(1000, 2000))
                    click("导出")
                    sleep(2000)
                }
            }
            sleep(2000)
        }
        if (text("新增滤镜").exists() && text("新增调节").exists()) {
            set_log("新增滤镜")
            if (depth(11).boundsInside(0, 1330, 1080, 1450).exists()) {
                log("已经有滤镜了")
                click(600, 1400)
            } else {
                log("没有滤镜")
                back()
            }
            sleep(2000)
        }
        if (text("新建文本").exists() && text("识别字幕").exists() || text("识别歌词").exists() && text("新建文本").exists()) {
            set_log("新建文本界面")
            if (cl == 0) {
                log("新建文本")
                click("新建文本")
                sleep(2000)
            } else {
                if (cl == 1) {
                    if (id("com.lemon.lv:id/ivTransition").exists()) {
                        log("点击转场")
                        try {
                            var ss = id("com.lemon.lv:id/ivTransition").findOnce().bounds();
                            log(ss)
                            click(ss.centerX(), ss.centerY());
                            sleep(2000)
                        } catch (error) {
                            sleep(1001)
                            log(error);
                        }
                    }
                } else {
                    log("返回上一层")
                    back()
                    sleep(2000)
                }
            }
        }
        if (text("转场").exists() && text("应用到全部").exists()) {
            set_log("设置转场")
            var dt = random(1, 5)
            click(random(100, 1000), 1210)
            sleep(1000)
            for (j = 0, len = dt; j < len; j++) {
                swipe(900, 1400, 300, 1400, 1000)
                sleep(random(1000, 3000))
            }
            click(random(150, 1000), 1400)
            sleep(1000)
            click(1000, 1850)
            sleep(2000)
            cl = 2
        }

        if (text("花字").exists() && text("动画").exists() || text("样式").exists() && text("气泡").exists()) {
            set_log("输入话术界面" + huashu)
            setText(huashu)
            sleep(2000)
            if (id("com.lemon.lv:id/btnOk").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/btnOk").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY());
                    sleep(2000)
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                log("直接点击勾勾")
                click(1000, 1000)
                sleep(2000)
            }
            cl = 1
        }
        if (text("文本朗读").exists() && text("复制").exists() || text("文本朗读").exists() && text("删除").exists()) {
            set_log("文本朗读")
            if (id("com.lemon.lv:id/audioLine").exists()) {
                try {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right //文字朗读的坐标的坐标
                    if (wzzb > 540) {
                        set_log("点击添加视频")
                        click(600, 1250)
                        sleep(2000)
                    } else {
                        set_log("点击文本朗读2")
                        click("文本朗读")
                    }
                } catch (error) {
                    sleep(1001)
                    log(error);
                }
            } else {
                log("点击文本朗读")
                click("文本朗读")
            }
            sleep(2000)
        }
        if (text("分割").exists() && text("动画").exists() || text("动画").exists() && text("删除").exists() && text("编辑").exists()) {
            set_log("调整声音跟画面匹配")
            try {
                if (id("com.lemon.lv:id/framesLayout").exists() && id("com.lemon.lv:id/audioLine").exists()) {
                    var ss = id("com.lemon.lv:id/audioLine").findOnce().bounds();
                    var wzzb = ss.right //文字朗读的坐标
                    ss = id("com.lemon.lv:id/framesLayout").findOnce().bounds();
                    var spzb = ss.right //视频的坐标
                    if (spzb > 950) {
                        set_log("坐标太大了挪一下")
                        swipe(700, 1600, 500, 1600, 1000)
                        sleep(random(1000, 2000))
                    } else {
                        set_log("能看到视频跟声音为位置了")
                        log(spzb)
                        log(wzzb)
                        if (spzb > wzzb || spzb == wzzb) {
                            if (spzb - wzzb > 30) {
                                set_log("视频的位置大于文字的位置")
                                swipe(spzb + 4, 1250, wzzb - 5, 1250, 1000)
                                sleep(random(1000, 2000))
                            } else {
                                log("位置合适了")
                                swipe(800, 1600, 300, 1600, 1000)
                                sleep(random(1000, 2000))
                                click(1020, 1240)
                                sleep(3000)
                            }
                        } else {
                            if (spzb < wzzb) {
                                if (wzzb - spzb > 30) {
                                    set_log("声音位置大于视频位置")
                                    swipe(spzb + 4, 1250, wzzb + 6, 1250, 1000)
                                    sleep(random(1000, 2000))
                                    click(1020, 1240)
                                    sleep(3000)
                                } else {
                                    set_log("位置合适了2")
                                    swipe(800, 1600, 300, 1600, 1000)
                                    sleep(random(1000, 2000))
                                    click(1020, 1240)
                                    sleep(3000)
                                }
                            }
                        }
                        sleep(2000)
                    }
                }
            } catch (error) {
                sleep(1001)
                log(error);
            }
        }
        if (text("导出").exists() && text("分辨率").exists() || text("导出").exists() && text("帧率").exists()) {
            set_log("制作完成导出")
            swipe(880, 979, 544, 979, 1000)
            sleep(1000)
            click("导出")
            sleep(10000)

        }
        if (text("完成").exists() && text("已保存到相册和草稿").exists() || text("完成").exists() && text("分享视频到").exists()) {
            set_log("完成")
            click("完成")
            sleep(2000)
            return true
        }

        if (text("音色选择").exists()) {
            set_log("音色选择")
            click(760, 1600)
            sleep(2000)
            click(990, 1840)
            sleep(3000)
        }

        if (id("com.lemon.lv:id/iv_preview_close").exists() && id("com.lemon.lv:id/tv_preview_select_index").exists()) {
            log("点到视频全屏-返回")
            back()
            sleep(2000)
        }
        if (text("我知道了").exists()) {
            log("我知道了")
            click("我知道了")
            sleep(2000)
        }
        if (text("残忍关闭").exists()) {
            log("残忍关闭")
            click("残忍关闭")
            sleep(2000)
        }
        if (text("知道了").exists()) {
            log("知道了")
            click("知道了")
            sleep(2000)
        }
        if (text("立即恢复").exists() && text("放弃").exists()) {
            log("放弃")
            click("放弃")
            sleep(2000)
        }
        if (text("更新").exists() && text("取消").exists()) {
            log("更新")
            click(350, 1185)
            sleep(500)
            click("取消")
            sleep(2000)
        }
    }
}

//下载视频
function xzsp(lj, name) {
    set_log("下载视频")
    toastLog("下载视频")
    var dirpath = "/sdcard/DY/";
    if (name == undefined) {
        log("名字为空")
        name = 1
    }
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/29.mp4';
    var imgurl = lj
    set_log("视频链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                set_log("下载不到视频头像")
                return false
            }
            var filePath = files.join(dirpath, name + '.mp4');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                set_log("下载视频完成")
                return true
            } else {
                set_log("没有视频");
                sleep(3000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

//下载图片
function xztp(lj, name) {
    set_log("下载图片")
    toastLog("下载图片")
    if (name == undefined) {
        log("名字为空")
        name = 1
    }
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
    // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/3.png';
    var imgurl = lj
    set_log("拿图片的链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                log("访问次数够了退出")
                return false
            }
            var filePath = files.join(dirpath, name + '.png');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                log("下载图片完成")
                return true
            } else {
                log("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

function getInsideString(str, strStart, strEnd) {
    if (str.indexOf(strStart) < 0) {
        return "";
    }
    if (str.indexOf(strEnd) < 0) {
        return "";
    }
    return str.substring(str.indexOf(strStart) + strStart.length, str.indexOf(strEnd));
}

//找色
function zhaose(aa) {
    var ss = aa.split(" and ")
    var start_time = (new Date()).getTime(),
        imgss
    while (1) {
        imgss = captureScreen()
        if (imgss) {
            break
        }
        if ((new Date()).getTime() - start_time > 10 * 1000) {
            return false
        }
        sleep(500)
    }
    // var imgss = kk
    for (var k in ss) {
        //log(ss[k])
        var xx = getInsideString(ss[k], "(", ",")
        var yy = getInsideString(ss[k], ",", ",0")
        var ys = getInsideString(ss[k], "0x", ",80)")
        //log(xx + ":" + yy)
        //log(ys)
        if (images.detectsColor(imgss, "#" + ys, xx, yy)) {

        } else {
            imgss.recycle()
            return false
        }
    }
    imgss.recycle()
    return true
}

//日期
function riqis(nn) {
    var tem = nn
    Date.prototype.format = function (fmt) {
        var year = this.getFullYear();
        var month = this.getMonth() + 1;
        var date = this.getDate();
        var hour = this.getHours();
        var minute = this.getMinutes();
        var second = this.getSeconds();
        fmt = fmt.replace("yyyy", year);
        fmt = fmt.replace("yy", year % 100);
        fmt = fmt.replace("MM", fix(month));
        fmt = fmt.replace("dd", fix(this.getDate()));
        fmt = fmt.replace("hh", fix(this.getHours()));
        fmt = fmt.replace("mm", fix(this.getMinutes()));
        fmt = fmt.replace("ss", fix(this.getSeconds()));
        return fmt;

        function fix(n) {
            return n < 10 ? "0" + n : n;
        }
    }
    var times = new Date().format("yyyy-MM-dd hh:mm:ss")
    var time = new Date().format("dd")
    if (tem == 1) {
        return time
    } else {
        return times
    }
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
        //set_log(defaultSetting)
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
                if (obj.hasOwnProperty(arr[i])) { } else {
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
        set_log(error);
        return 1
    }
}

function findeclick(kj, te, ys) {
    if (kj == "id") {
        var w = id(te).findOnce();
        if (w != null) {
            TKB.set_log("发现ID:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "text") {
        var w = text(te).findOnce();
        if (w != null) {
            TKB.set_log("发现text:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    } else if (kj == "desc") {
        var w = desc(te).findOnce();
        if (w != null) {
            TKB.set_log("发现desc:" + te)
            var zb = w.bounds()
            var xx = zb.left + random(10, zb.right - zb.left)
            var yy = zb.top + random(10, zb.bottom - zb.top)
            TKB.set_log(xx + "," + yy)
            click(xx, yy);
            sleep(ys)
            return true
        }
    }
    return false
}

/** 方法说明
 * @method ostime
 * @param {boolean} mode 逻辑型 非0或空 皆为真 返回13位系统时间戳 否则10位系统时间戳
 * @return {int}   返回10位或者13位时间戳
 */
function ostime(mode) {
    if (mode) {
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
/** 方法说明  typeofs 的加强模式 方便分辨Array对象和Object 和JavaObject对象
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

        obj = text(str).findOnce()
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
                obj = text(is).findOnce()
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
            uc = obj.findOnce();
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
            uc = arr[i].findOnce();
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
    obj = tz.findOnce();
    objs = obj;
    while (objs != null) {
        if (objs.clickable() == true) {
            objs.click();
            if (times != null) {
                sleepr(times);
            }
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
        obj = tz.findOnce(i++);
        if (obj != null) {
            obj = obj.bounds()
            if (obj.left > 0 && obj.right > 0 && obj.top > 0 && obj.bottom > 0) {
                press(random(obj.left + 1, obj.right - 1), random(obj.top + 1, obj.bottom - 1), random(50, 150))
                if (times) {
                    sleepr(times)
                }
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
            if (obj.left > 0 && obj.right > 0 && obj.top > 0 && obj.bottom > 0) {
                press(random(obj.left + 1, obj.right - 1), random(obj.top + 1, obj.bottom - 1), random(50, 150));
                if (times != null) {
                    sleepr(times);
                }
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
    var t = times < 500 ? -(times / 2) : -500
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


function data(action_args) {
    var gf = {}
    var data = action_args["param"]
    // var data = JSON.parse(data);
    for (i = 0; i < data.length; i++) {
        gf[data[i]["key"]] = data[i]["value"]
    }
    return gf
}

//重启手机
function chongq() {
    set_log("重启手机")
    var ssd = (new Date()).getTime()
    sleep(2000)
    while (1) {
        try {
            if ((new Date()).getTime() - ssd > 10 * 60 * 1000) {
                set_log("超时未重启")
                return false
            }
            powerDialog()
            sleep(2000)
            if (text("重启").exists()) {
                try {
                    var ss = text("重启").findOnce().bounds();
                    log(ss)
                    click(ss.centerX(), ss.centerY() - 200);
                    sleep(4000)
                } catch (error) {
                    sleep(1000)
                    log(error);
                    click(500, 340)
                    sleep(1001)
                }
            }
            sleep(5000)
            toastLog("重启手机中")
        } catch (error) {
            set_log("出错了")
            set_log(error)
            sleep(3000)
        }
    }
}

function getLock(keys, times, timeout) {
    while (times) {
        times -= 1
        timeout -= 1
        if (timeout < 0) {
            return 2
        }
        try {
            var lock_url = "http://app.zjmilu.com/yunkong/server/appSLock"
            var res = http.post(lock_url, {
                "name": keys,
                "timeout": timeout,
                "expire": times,
            })
            if (res.statusCode == 200) {
                var data = res.body.json()
                if (data['code'] == 1) {
                    return 1
                } else {
                    if (data['code'] == 1001) {
                        return 2
                    }

                }
            } else {
                toastLog(res.statusMessage)
            }
        } catch (error) {
            toastLog("getLock:" + error)
        }
        sleep(1000)
    }
    return 3
}

function unlock(keys) {
    try {
        var lock_url = "http://app.zjmilu.com/yunkong/server/appSunLock"
        var res = http.post(lock_url, {
            "name": keys,
        })
        if (res.statusCode == 200) {
            var data = res.body.json()
            if (data['code'] == 1) {
                return true
            } else {
                return false
            }
        } else {
            toastLog(res.statusMessage)
            return false
        }
    } catch (error) {
        toastLog("getLock:" + error)
        return false
    }
}


/**
 * 
 * @param {*} name 
 * @param {*} resource_type 1:高清组，0:普通
 */
function get_name(name, resource_type) {
    log("获取资料")
    //resource_type是list =>contacts_type[1,2,3]
    log('name:' + name + '--resource_type:' + resource_type)
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log("超时退出")
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            var r = http.postJson(url, {
                "type": "getDeviceResource",
                "name": name,
                "resource_type": resource_type,
            });
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj["code"] != 0) {
                    toastLog("获取资料成功")
                    return r_obj["data"]
                } else {
                    toastLog(r_obj["msg"])
                    return false
                }
            } else {
                log("访问失败")
                sleep(3000)
            }
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
        sleep(random(100, 10000))
    }
}

/**上传应用账号信息
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} username:账号
 * @param {string} user_pass:密码
 * @param {string} device:硬件信息
 */
function UpaccountInfo(name, appname, username) {
    log('上传应用账号信息')
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


/**提交应用账号固定数据,静态：比如头像、昵称，我们只要记录最新的就好了，不用做统计的那种
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} username:账号
 * @param {string} data:参数值
 * @param {string} datatype:硬件信息 1、数值型；2、文本型、3：链接（文件）
 * @param {string} title:参数中文标题
 */
function UpFixedData(name, appname, username, bianliang, data, datatype, title) {
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
            var body = {
                'type': 'setAccountData',
                'name': name,
                'appname': appname,
                'username': username,
                'data[variable]': data,
                'datatype[variable]': datatype,
                'title[variable]': title,
            }
            var str = JSON.stringify(body)
            body = JSON.parse(str.replace(/variable/g, bianliang))
            var r = http.post(url, body);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj['code'] != 0) {
                    toastLog('提交固定数据成功')
                    log('提交固定数据成功')
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



/**提交应用账号动态数据,动态，就是：每天（或者每小时）关注量、粉丝量的变化数据，用作统计数据表
 * @param {string} name:设备名
 * @param {string} appname:应用名
 * @param {string} paramete:name,photo,avatar
 * @param {string} username:账号
 * @param {string} data:参数值
 * @param {Number} datatype:硬件信息 1、数值型；2、文本型、3：链接（文件）
 * @param {string} title:参数中文标题
 */
function UpAliveData(name, appname, username, bianliang, data, datatype, title) {
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
            var body = {
                'type': 'setAccountData',
                'name': name,
                'appname': appname,
                'username': username,
                'data[variable]': data,
                'datatype[variable]': datatype,
                'title[variable]': title,
            }
            var str = JSON.stringify(body)
            body = JSON.parse(str.replace(/variable/g, bianliang))
            var r = http.post(url, body);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                if (r_obj['code'] != 0) {
                    toastLog('提交动态数据成功')
                    log('提交动态数据成功')
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

function matching(str) {
    var reg1 = '[\u4e00-\u9fa5a-zA-Z0-9]+'
    var res = str.match(reg1);
    return res
}

/**
 * @description: 设置音量为0
 * @param {int} volumenum：音量值
 * @return {type} 
 */
function setVolume(volumenum) {
    var objs
    volumenum = volumenum ? volumenum : 0
    while (1) {
        try {
            device.setAlarmVolume(volumenum)
            device.setMusicVolume(volumenum)
            device.setNotificationVolume(volumenum)
            return 0
        } catch (error) {
        }
        objs = id("amigo:id/amigo_switchWidget").text("关").findOnce()
        while (objs != null) {
            if (objs.clickable() == true) {
                objs.click();
                sleep(1000)
                back()
                break;
            } else {
                objs = objs.parent();
            }
        }
        sleep(1000)
    }
}


module.exports = this