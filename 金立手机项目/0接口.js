/**
 * 
27.获取视频  
返回设备对应的视频
http://47.114.99.72/api.php/potal/meitu/getshipin?user_id=9&der_id=1&type=小说


28.反馈视频上传是否成功
shipin_id:视频id
status：1发布成功，2发布失败
http://47.114.99.72/api.php/potal/meitu/gxshipinstatus?user_id=1&der_id=1&shipin_id=1&status=1

30.反馈昵称/头像/简介/是否上传成功
name_info： 昵称无法上传的描述    可选: 
img_info：头像无法上传的描述        可选
jianjie_info: 简介无法上传的描述       可选
status：1发布成功，2发布失败
http://47.114.99.72/api.php/potal/meitu/gxnamestatus?user_id=1&der_id=1&name_info=微信昵称不符合&jianjie_info=微信简介不符合&img_info=微信头像不符合&status=1
*/
/**
 * http://47.114.99.72/api.php/potal/meitu/gxrun?user_id=9&der_id=2&run_id=363046       更新任务状态
 * http://47.114.100.52/api.php/potal/Meitu/updatederyouxiao?user_id=1&der_id=2&yxtime=23
 * http://47.114.99.16/api.php/potal/meitu/get_tongxunlu?user_id=1&der_id=1&province=12&city=金华&num=2
 * http://47.114.99.72/api.php/potal/meitu/get_tongxunlu?user_id=9&der_id=1&num=3
 */
//获取视频
function get_video(sbip, user_id, yhbh, category) {
    xgsrizhi("获取视频")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + user_id + "----" + yhbh + "----" + category)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/getshipin?user_id=" + user_id + "&der_id=" + yhbh + "&type=" + category
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["code"] == "0") {
                    toastLog("获取视频成功")
                    var data = r_obj['data']
                    return data
                } else {
                    toastLog("失败:" + r_obj["msg"])
                    xgsrizhi("失败:" + r_obj["msg"])
                    return false
                }
            } else {
                xgsrizhi("获取失败")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("获取视频中...")
        sleep(random(100, 10000))
    }
}
var zz = get_video(sbip, user_id, yhbh, category)
var video = zz['text']
var shipin_id = zz['shipin_id']
log(shipin_id + video)
//反馈上传视频的结果
function upvideo_result(sbip, user_id, yhbh, shipin_id, status) {
    xgsrizhi("上传结果")
    var Tb = (new Date()).getTime()
    xgsrizhi(sbip + "----" + user_id + "----" + yhbh + "----" + shipin_id + "----" + status)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                xgsrizhi("超时退出")
                return false
            }
            var url = "http://" + sbip + "/api.php/potal/meitu/gxshipinstatus?user_id=" + user_id + "&der_id=" + yhbh + "&shipin_id=" + shipin_id + "&status=" + status
            xgsrizhi("链接：" + url)
            var r = http.get(url);
            if (r.statusCode == 200) {
                var r_obj = r.body.json();
                xgsrizhi(r_obj)
                if (r_obj["code"] == "0") {
                    toastLog("上传结果成功")
                    return true
                } else {
                    toastLog("失败:" + r_obj["msg"])
                    xgsrizhi("失败:" + r_obj["msg"])
                    return false
                }
            } else {
                xgsrizhi("上传结果失败")
                sleep(3000)
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传结果中...")
        sleep(random(100, 10000))
    }
}
upvideo_result(sbip, user_id, yhbh, shipin_id, status)

//上传info结果
function upinfo(sbip, user_id, yhbh, info, status) {
    TKB.xgsrizhi("上传info结果")
    var Tb = (new Date()).getTime()
    TKB.xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                TKB.xgsrizhi("超时退出")
                return false
            }
            if (info != '' && info != null) {
                var ss = info.split(",")
                var name_info = ss[0],
                    img_info = ss[1],
                    jianjie_info = ss[2]
                log(ss[0], ss[1], ss[2])
                if (name_info == '' && name_info == null) {
                    name_info = 0
                }
                if (img_info == '' && img_info == null) {
                    name_info = 0
                }
                if (jianjie_info == '' && jianjie_info == null) {
                    name_info = 0
                }
                var url = "http://" + sbip + "/api.php/potal/meitu/gxnamestatus?user_id=" + user_id + "&der_id=" + yhbh + "&name_info=" + name_info + "&img_info=" + img_info + "&jianjie_info=" + jianjie_info + "&status=" + status
                TKB.xgsrizhi("链接：" + url)
                var r = http.get(url);
                if (r.statusCode == 200) {
                    var r_obj = r.body.json();
                    TKB.xgsrizhi(r_obj)
                    if (r_obj["code"] == "0") {
                        toastLog("上传info结果成功")
                        return true
                    } else {
                        toastLog("失败:" + r_obj["msg"])
                        TKB.xgsrizhi("失败:" + r_obj["msg"])
                        return false
                    }
                } else {
                    TKB.xgsrizhi("上传失败")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("info数据赋值失败")
                toastLog("info数据赋值失败")
                sleep(3000)
                return false
            }
        } catch (error) {
            xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传info结果中...")
        sleep(random(100, 10000))
    }
}

//获取name
function get_name(sbip, user_id, yhbh) {
    TKB.xgsrizhi("获取名字头像简介")
    var TS = (new Date()).getTime()
    var url = 'http://' + sbip + '/api.php/potal/meitu/getname?user_id=' + user_id + '&der_id=' + yhbh
    TKB.xgsrizhi(url)
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                TKB.xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                TKB.xgsrizhi(ss)
                if (ss["code"] == 0) {
                    var data = ss['data']
                    return data
                } else {
                    var data = ss['msg']
                    TKB.xgsrizhi(ss['msg'])
                    return false
                }
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

//自己服务器万能英数
function get_verify(img_id) {
    try {
        sleep(5000)
        captureScreen("/sdcard/0234.png")
        toast("截屏已完成")
        var src = images.read("/sdcard/0234.png")
        var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://baye.vicp.cc:7775/api/'
        var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        images.save(clip, "/sdcard/clip.png")
        var res = http.postMultipart(url, {
            file: open("/sdcard/clip.png")
        })
        return res.body.string()
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

//滑块
function get_verify() {
    try {
        sleep(2000)
        //验证码截图
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
        // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        // 小红书的验证
        var clip = images.clip(src, 137, 620, 804, 416)
        // var clip = images.clip(src, 47, 257, 985, 574) 快手的验证
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        // mode: "xhs"小红书滑块
        // mode: "ks"快手滑块
        var res = http.postMultipart(url, {
            mode: "xhs",
            image: open(imgFile),
            type: "file"
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            log('成功')
            var centerY = html['result']['center']
            return centerY
            //返回缺口的中心的的坐标
        } else {
            sleep(1000)
            log('失败')
        }
    } catch (error) {
        log(error)
    }
}

//知乎验证
function picture_verify(img_id) {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        // toast("截屏已完成")
        var src = images.read(img)
        var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha'
        var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "zh",
            image: open(imgFile),
            type: 'file'
        });
        var html = res.body.json()
        return html['code']
    } catch (error) {
        log(error)
        sleep(1100)
    }
}

/*
http://47.114.99.72/api.php/potal/meitu/getrun?user_id=9&der_id=1
http://47.114.99.72/api.php/potal/meitu/getrunhot?user_id=9&der_id=1
http://47.114.99.72/api.php/potal/meitu/gxrun?user_id=9&der_id=1&run_id=472308
http://47.114.99.72/api.php/potal/meitu/getname?user_id=9&der_id=780
http://jyoff.pybycl.com:8805/
*/