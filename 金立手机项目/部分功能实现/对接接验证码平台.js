// 登录平台平台
function xmfdenglu() {
    var TS = (new Date()).getTime()
    var url = "http://117.24.12.128:2019/WebAPI/Login?uname=wx588518&upwd=wx588518";
    log("登录平台平台")
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log("超时没获取到token退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                ss = res.body.string()
                var ss = ss.split("|")
                log(ss[0])
                if (ss[0] == "1") {
                    log("获取到token：" + ss[1])
                    return ss[1]
                } else {
                    log("登录失败")
                    toast("登录失败")
                    sleep(4000);
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("登录平台平台")
            sleep(3000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

// 获取平台号码
function xmfhaoma() {
    log("授权任务")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS >  60 * 1000) {
                log("超时没获取到号码退出")
                return false
            }
            var r = http.get("http://122.114.5.43/wechat/api/sendxiaobai.php?userName=user&passWord=123&taskId=1&url=https://open.weixin.qq.com/connect/confirm?uuid=0211ezzIzr9z7wnv");
            if (r.statusCode == 200) {
                var ss = r.body.json()
                log('aa'+ss)
                if (ss['code'] == '0' || ss['code'] == 0) {
                    log("授权成功" + ss['msg'])
                    return [ss['msg'],oderid]
                } else {
                    log("授权失败")
                    toast("授权失败")
                    sleep(4000);
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("授权任务中")
            sleep(3000)
        } catch (error) {
            print(error);
            sleep(3000)
        }
    }
}

// 获取平台验证码
function xmfyzm(phon, token) {
    log("获取平台验证码")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 60 * 1000) {
                log("超时没获取到验证码退出")
                return false
            }
            var r = http.get("http://117.24.12.128:2019/WebAPI/GetMessage?ukey=" + token + "&bid=7230&phone=" + phon + "&kfz=");
            if (r.statusCode == 200) {
                var ss = r.body.string() //1|验证码数字|完整短信内容
                log(ss);
                if (ss[0] == "1") {
                    log("获取到验证码：" + ss[1])
                    var yzm = ss[1].replace(/[^0-9]/ig, "");
                    return yzm
                } else {
                    log("获取验证码失败")
                    toast("获取验证码失败")
                    sleep(4000);
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("获取平台验证码中...")
            sleep(3000)
        } catch (error) {
            print(error);
            sleep(3000)
        }
    }
}

// 拉黑平台号码
function lhxmf(token, phone) {
    log("拉黑平台号码")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 15 * 1000) {
                log("超时拉黑失败退出退出")
                return false
            }

            var r = http.get("http://117.24.12.128:2019/WebAPI/AddBlacklist?&ukey=" + token + "&bid=7230&phone=" + phone);
            if (r.statusCode == 200) {
                var ss = r.body.string() //1|验证码数字|完整短信内容
                var ss = ss.split("|")
                if (ss[0] == "1") {
                    toastLog("拉黑成功")
                    return true
                } else {
                    log("获取验证码失败")
                    toast("获取验证码失败")
                    sleep(4000);
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("拉黑平台号码")
            sleep(3000)
        } catch (error) {
            print(error);
            sleep(3000)
        }
    }
}

// 释放平台号码
function shifangxmf(token, phone) {
    log("释放平台号码")
    var TS = (new Date()).getTime()
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 20 * 1000) {
                log("超时释放失败")
                return false
            }
            var r = http.get("http://117.24.12.128:2019/WebAPI/CancelRecv?&ukey=" + token + "&bid=7230&phone=" + phone)
            if (r.statusCode == 200) {
                var ss = r.body.string()
                var ss = ss.split("|")
                if (ss[0] == "1") {
                    toastLog("释放成功")
                    return true
                } else {
                    log("获取验证码失败")
                    toast("获取验证码失败")
                    sleep(4000);
                }
            } else {
                toastLog("没网")
                sleep(3000)
            }
            toastLog("释放平台号码")
            sleep(3000)
        } catch (error) {
            print(error);
            sleep(3000)
        }
    }
}

function getdapenghaoma() {
    var TS = (new Date()).getTime()
    var url = "http://106.54.66.160:6009/getphone&project=momo&user=huashao&pwd=huashao&token=YsQjEt8kMpZw3hfJ";
    log("获取小号平台号码")
    while (1) {
        try {
            var res = http.get(url);
            // if (res.statusCode == 200) {
                ss = res.body.string()
                log(res)
                log(ss)
                if (ss[0] == "暂无号码") {
                    log("没有号码")
                    toast("没有号码")
                    sleep(2000)
                } else {
                    var shortName = ss.substring(0, 2);
                    if (shortName == "14" || shortName == "16" || shortName == "17" || shortName == "19") {
                        toast("号码不能用")
                        sleep(2000)
                    } else {
                        log(ss)
                        toast(ss)
                        phone = ss
                        return phone
                    }

                }
            // }
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}
var url = "http://106.54.66.160:6009/getphone&project=momo&user=huashao&pwd=huashao&token=YsQjEt8kMpZw3hfJ";
var r = http.get(url);
log("code = " + r.statusCode);
log("html = " + r.body.string());
// log(getdapenghaoma())