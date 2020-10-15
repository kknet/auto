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
    log('name:' + name + '--resource_type:' + resource_type)
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
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log('超时退出')
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            var r = http.postJson(url, {
                'type': 'setAccountData',
                'name': name,
                'appname': appname,
                'username': username,
                'data['参数名']': data,
                'datatype[参数名]': datatype,
                'title[参数名]': title,
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
 * @param {string} username:账号
 * @param {string} data:参数值
 * @param {string} datatype:硬件信息 1、数值型；2、文本型、3：链接（文件）
 * @param {string} title:参数中文标题
 */
function UpAliveData(name, appname, username, data, datatype, title) {
    log('提交应用账号动态数据')
    //resource_type是list =>contacts_type[1,2,3]
    var Tb = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                log('超时退出')
                return false
            }
            var url = 'http://yk.pybycl.com/yunkong/server/index'
            var r = http.postJson(url, {
                'type': 'setAccountValue',
                'name': name,
                'appname': appname,
                'username': username,
                'data['参数名']': data,
                'datatype[参数名]': datatype,
                'title[参数名]': title,
            });
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