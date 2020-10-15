var TKB = require('/sdcard/tkb2.js')
var maxqlrs = '85' // maxqlrs群聊最大人数
var qunmz = '傻子群' //建群之后的群聊名字
var tpid = '1234' //图片名字
var mun = '0' //寻找二维码次数
var jietuid = 'jietuid' //截图的二维码图片
var lianjie = 'https://weixin.qq.com/g/A2zO4f9e4rWCmTLB' //二维码链接
var sum = 0 //sum朋友圈今日已赞个数
var fbwz = '测试' //fbwz 微信朋友圈发表文字
var pyqzfwz = '我的天啊！' //pyqzfwz 微信腾讯新闻转发文字
var wx_id = 'dhz1475968358',
    speak_str = '' //wx_id 指定微信ID speak_str 所有的发言
// runtime.loadDex('二维码识别.dex')
importPackage(com.google.zxing)
importPackage(com.google.zxing.common)
importPackage(com.google.zxing.client.j2se)
if (!requestScreenCapture()) {
    alert('请求截图权限失败！')
    exit()
}

function is_weixin() {
    try {
        if (currentActivity().search('com.tencent.mm') == -1) {
            launchApp('微信')
            // sleep(2000)
        }
        log('qqq')
    } catch (error) {}
}

function jietu() {
    TKB.xgsrizhi('截图')
    sleep(2000)
    var imm = captureScreen()
    images.save(imm, '/sdcard/' + jietuid + '.png') //data:image/png;base64,
    sleep(1000)
    var imgPath = '/sdcard/' + jietuid + '.png'
    var pixels = images.readPixels(imgPath)
    var w = pixels.width
    var h = pixels.height
    var binaryBitmap = new BinaryBitmap(new HybridBinarizer(new RGBLuminanceSource(w, h, pixels.data)))
    var qrCodeResult = new MultiFormatReader().decode(binaryBitmap)
    basc = qrCodeResult.getText()
    TKB.xgsrizhi('二维码链接' + basc)
}

//二维码生成图片
function shengchengtp() {
    TKB.xgsrizhi('生成图片')
    while (true) {
        var im = images.load('http://qr.liantu.com/api.php?&w=200&text=' + lianjie)
        if (im != null && im != '') {
            images.save(im, '/sdcard/' + tpid + '.png')
            TKB.xgsrizhi('保存图片到本地：' + tpid + '.png')
            break
        } else {
            TKB.xgsrizhi('图片下载失败')
            break
        }
    }
}

//获取微信账号,手机号
function huoquwxh() {
    TKB.xgsrizhi('打开微信')
    launchApp('微信')
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    aa = 0 //aa = 0 判断
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.tencent.mm')
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.tencent.mm')
            sleep(3000)
            launch('com.tencent.mm')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists()) {
                TKB.xgsrizhi('我')
                click('我')
                sleep(2000)
            }
            if (text('设置').exists() && text('支付').exists()) {
                TKB.xgsrizhi('设置')
                click('设置')
                sleep(2000)
            }
            if (aa == 0 && text('设置').exists() && text('切换帐号').exists()) {
                TKB.xgsrizhi('隐私')
                click('隐私')
                sleep(2000)
                if (text('隐私').exists() && text('加我为朋友时需要验证').exists() && text('向我推荐通讯录朋友').exists()) {
                    TKB.xgsrizhi('隐私设置')
                    var desc = text('加我为朋友时需要验证').findOnce().parent().parent().child(1)
                    var xz = desc.desc()
                    if (xz == '已开启') {
                        click(desc.bounds().centerX(), desc.bounds().centerY())
                        TKB.xgsrizhi('关闭')
                    }
                    back()
                    sleep(500)
                    aa = 1
                }
            }
            if (text('设置').exists() && text('切换帐号').exists() && aa == 1) {
                TKB.xgsrizhi('帐号与安全')
                click('帐号与安全')
                sleep(2000)
                if (text('帐号与安全').exists() && text('微信号').exists() && text('微信安全中心').exists()) {
                    TKB.xgsrizhi('获取微信手机号')
                    var wxh = id('android:id/summary').depth('16').findOnce().text()
                    var sjh = id('android:id/summary').depth('17').findOnce().text()
                    TKB.xgsrizhi('微信号：' + wxh + '手机号：' + sjh)
                    sleep(2000)
                    back()
                    sleep(500)
                    back()
                    sleep(500)
                    return {
                        account_number: wxh,
                        cell_phone: sjh
                    }
                }
            }

        } catch (error) {
            sleep(1000)
            TKB.xgsrizhi(error)
        }
    }
}

//微信建群
function weixinjq() {
    TKB.xgsrizhi('执行微信建群')
    launchApp('微信')
    TKB.xgsrizhi('打开微信')
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.tencent.mm')
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.tencent.mm')
            sleep(3000)
            launch('com.tencent.mm')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('com.tencent.mm:id/dkb').exists()) {
                TKB.xgsrizhi('点击微信')
                //10版本id
                id('com.tencent.mm:id/dkb').text('微信').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('com.tencent.mm:id/cl7').exists()) {
                TKB.xgsrizhi('点击微信')
                //13版本id
                id('com.tencent.mm:id/cl7').text('微信').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('android:id/text1').exists()) {
                TKB.xgsrizhi('点击+号')
                click(1000, 140)
                sleep(1000)
            }
            //遍历选择好友 
            if (text('发起群聊').exists() && text('添加朋友').exists()) {
                TKB.xgsrizhi('发起群聊')
                click('发起群聊')
                sleep(2000)
                var i = id('com.tencent.mm:id/f70').checked(false).find()
                TKB.xgsrizhi('好友人数：' + i.length)
                i.some(e => {
                    e.parent().parent().click()
                    sleep(2000)
                })
                textContains('确定(').findOnce().click()
                sleep(2000)
            }
            //群聊里面的语音+号ID
            if (id('com.tencent.mm:id/am9').exists() && id('com.tencent.mm:id/ajp').exists()) {
                click(470, 1970)
                TKB.xgsrizhi('在群聊发一句话')
                sleep(1000)
                setText(speak_str)
                sleep(500)
                click('发送')
                sleep(1000)
                click(1000, 190)
                text('群聊名称').waitFor()
            }
            if (text('群二维码').exists() && text('群聊名称')) {
                TKB.xgsrizhi('设置微信群名')
                var qlmz = text('群聊名称').findOnce().bounds()
                click(qlmz.centerX(), qlmz.centerY())
                sleep(2000)
                click(400, 370)
                setText(qunmz)
                text('保存').click()
                sleep(500)
            }
            while (1) {
                if (id('android:id/text1').exists() && id('com.tencent.mm:id/ezv').exists()) {
                    if (text('群二维码').exists()) {
                        var list = text('群二维码').findOnce().parent().parent().bounds()
                        click(list.centerX(), list.centerY())
                        className('android.widget.FrameLayout').depth(11).waitFor()
                        break
                    } else {
                        swipe(440, 1500, 440, random(700, 800), random(500, 1000))
                        continue
                    }
                }
            }
            if (id('android:id/text1').exists() && text('群二维码名片')) {
                var arr = id('com.tencent.mm:id/ek0').findOnce().text()
                var shixiao = arr.split('(')[1].split(')')[0]
                TKB.xgsrizhi('二维码有效期：' + shixiao)
                TKB.xgsrizhi('等待二维码出现')
                jietu()
                back()
                sleep(500)
                while (1) {
                    if (id('android:id/text1').exists() && id('com.tencent.mm:id/ezv').exists()) {
                        if (text('保存到通讯录').exists()) {
                            var xx = text('保存到通讯录').findOnce().parent().parent().child(1).desc()
                            if (xx == '已关闭') {
                                var list = text('保存到通讯录').findOnce().parent().parent().child(1).bounds()
                                click(list.centerX(), list.centerY())
                                var yy = text('保存到通讯录').findOnce().parent().parent().child(1).desc()
                                if (yy == '已关闭') {
                                    TKB.xgsrizhi('此群已保存到通讯录')
                                    continue
                                }
                                TKB.xgsrizhi('此群已保存到通讯录')
                            } else if (xx == '已开启') {
                                TKB.xgsrizhi('此群已保存到通讯录')
                            } else {
                                TKB.xgsrizhi('群聊保存失败')
                            }
                            break
                        } else {
                            swipe(440, 1500, 440, random(700, 800), random(500, 1000))
                            continue
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

//微信加群
function weixinjq() {
    TKB.xgsrizhi('执行微信建群')
    launchApp('微信')
    TKB.xgsrizhi('打开微信')
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.tencent.mm')
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.tencent.mm')
            sleep(3000)
            launch('com.tencent.mm')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('com.tencent.mm:id/dkb').exists()) {
                TKB.xgsrizhi('点击微信')
                // 10版本id
                id('com.tencent.mm:id/dkb').text('微信').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('com.tencent.mm:id/cl7').exists()) {
                TKB.xgsrizhi('点击微信')
                //13版本id
                id('com.tencent.mm:id/cl7').text('微信').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists() && text('我').exists() && id('android:id/text1').exists()) {
                TKB.xgsrizhi('点击+号')
                click(1000, 140)
                sleep(1000)
            }
            //遍历选择好友 
            if (text('发起群聊').exists() && text('添加朋友').exists()) {
                TKB.xgsrizhi('发起群聊')
                click('发起群聊')
                sleep(2000)
                //id('com.tencent.mm:id/a3j').checked(false).find()  13版本id
                var i = id('com.tencent.mm:id/a3j').checked(false).find()
                TKB.xgsrizhi('好友人数：' + i.length)
                i.some(e => {
                    e.parent().parent().click()
                    sleep(2000)
                })
                textContains('确定(').findOnce().click()
                sleep(2000)
            }
            //群聊里面的语音+号ID
            // if (id('com.tencent.mm:id/am9').exists() && id('com.tencent.mm:id/ajp').exists()) { //13版本
            if (id('com.tencent.mm:id/aqc').exists() && id('com.tencent.mm:id/aqk').exists()) {
                click(470, 1970)
                TKB.xgsrizhi('在群聊发一句话')
                sleep(1000)
                setText(speak_str)
                sleep(500)
                click('发送')
                sleep(1000)
                click(1000, 190)
                text('群聊名称').waitFor()
            }
            if (text('群二维码').exists() && text('群聊名称')) {
                TKB.xgsrizhi('设置微信群名')
                var qlmz = text('群聊名称').findOnce().bounds()
                click(qlmz.centerX(), qlmz.centerY())
                sleep(2000)
                click(400, 370)
                setText(qunmz)
                text('保存').click()
                sleep(500)
            }
            while (1) {
                //if (id('android:id/text1').exists() && id('com.tencent.mm:id/ezv').exists()) {  13版本
                if (id('android:id/text1').exists() && id('com.tencent.mm:id/ej5').exists()) {
                    if (text('群二维码').exists()) {
                        var list = text('群二维码').findOnce().parent().parent().bounds()
                        click(list.centerX(), list.centerY())
                        className('android.widget.FrameLayout').depth(11).waitFor()
                        break
                    } else {
                        swipe(440, 1500, 440, random(700, 800), random(500, 1000))
                        continue
                    }
                }
            }
            if (text('群二维码名片')) {
                // id('com.tencent.mm:id/ek0') 13版本
                var arr = id('com.tencent.mm:id/o7').findOnce().text()
                var shixiao = arr.split('(')[1].split(')')[0]
                TKB.xgsrizhi('二维码有效期：' + shixiao)
                TKB.xgsrizhi('等待二维码出现')
                jietu()
                back()
                sleep(500)
                while (1) {
                    //if (id('android:id/text1').exists() && id('com.tencent.mm:id/ezv').exists()) {  13版本
                    if (id('android:id/text1').exists() && id('com.tencent.mm:id/ej5').exists()) {
                        if (text('保存到通讯录').exists()) {
                            var xx = text('保存到通讯录').findOnce().parent().parent().child(1).desc()
                            if (xx == '已关闭') {
                                var list = text('保存到通讯录').findOnce().parent().parent().child(1).bounds()
                                click(list.centerX(), list.centerY())
                                var yy = text('保存到通讯录').findOnce().parent().parent().child(1).desc()
                                if (yy == '已关闭') {
                                    TKB.xgsrizhi('此群已保存到通讯录')
                                    continue
                                }
                                TKB.xgsrizhi('此群已保存到通讯录')
                            } else if (xx == '已开启') {
                                TKB.xgsrizhi('此群已保存到通讯录')
                            } else {
                                TKB.xgsrizhi('群聊保存失败')
                            }
                            break
                        } else {
                            swipe(440, 1500, 440, random(700, 800), random(500, 1000))
                            continue
                        }
                    }
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

// 朋友圈点赞
var i = 0
var sum = 0
function dianzan() {
    if (id('android:id/text1').exists() && text('朋友圈').exists() && desc('拍照分享').exists()) {
        TKB.xgsrizhi('朋友圈点赞')
        do {
            sleep(500)
            if (i > random(2, 4)) {
                break
            } else {
                comment = desc('评论').find()
                if (!comment.empty()) {
                    TKB.xgsrizhi('找到评论集合')
                    comment.forEach(item => {
                        TKB.xgsrizhi('找到一个评论框')
                        sj = random(0, 1, 2)
                        if (sj == 0) {
                            var b = item.click()
                            TKB.xgsrizhi(b ? '点击评论按钮成功' : '点击评论按钮失败')
                            sleep(1000)
                            if (id('com.tencent.mm:id/i9').text('赞').exists()) {
                                //13版本id
                                id('com.tencent.mm:id/i9').text('赞').findOnce().parent().click()
                                sleep(2000)
                                sum++
                            } else if (id('com.tencent.mm:id/i9').text('取消').exists()) {
                                item.click()
                            }
                            if (id('com.tencent.mm:id/eym').text('赞').exists()) {
                                //10版本id
                                id('com.tencent.mm:id/eym').text('赞').findOnce().parent().click()
                                sleep(1000)
                                sum++
                            } else if (id('com.tencent.mm:id/eym').text('取消').exists()) {
                                item.click()
                            }
                        } else {}
                    })
                    TKB.xgsrizhi('此页点赞完成')
                } else {
                    TKB.xgsrizhi('没找到评论集合')
                }
            }
            i++
            TKB.xgsrizhi('今天已赞个数：' + sum)
        } while (className('android.widget.ListView').findOnce().scrollForward())
        return true
    }
}

// 朋友圈浏览
function pyqliulan() {
    TKB.xgsrizhi('浏览朋友圈')
    launchApp('微信')
    TKB.xgsrizhi('打开微信')
    sleep(4000)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.tencent.mm')
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.tencent.mm')
            sleep(3000)
            launch('com.tencent.mm')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            //通过 数量判断是否有小红点等
            var s = bounds(540, 1889, 810, 2040).findOnce().child(0).child(0).childCount()
            // ss=2朋友圈有新消息去浏览
            // var s =2
            if (s == 2) {
                TKB.xgsrizhi('朋友圈有新信息')
                if (text('微信').exists() && id('android:id/text1').exists()&& id('com.tencent.mm:id/cl7').exists()) {
                    //13版本id
                    id('com.tencent.mm:id/cl7').text('发现').findOnce().parent().parent().click()
                    sleep(2000)
                }
                if (text('微信').exists() && id('android:id/text1').exists() && id('com.tencent.mm:id/dkb').exists()) {
                    TKB.xgsrizhi('发现')
                    //10版本id
                    id('com.tencent.mm:id/dkb').text('发现').findOnce().parent().parent().click()
                    sleep(2000)
                }
                if (text('发现').exists() && id('android:id/text1').exists() && text('朋友圈').exists()) {
                    TKB.xgsrizhi('点击朋友圈')
                    click('朋友圈')
                    sleep(3000)
                }
                if (id('com.tencent.mm:id/fjw').exists() && text('朋友圈').exists()) {
                    TKB.xgsrizhi('查看新信息')
                    id('com.tencent.mm:id/fjw').findOnce().click()
                    sleep(3000)
                }
                if (id('com.tencent.mm:id/b7a').exists() && text('消息').exists()) {
                    TKB.xgsrizhi('查看pyq信息')
                    back()
                    sleep(500)
                    dianzan()
                    break
                } else {
                    TKB.xgsrizhi('pyq无信息点赞')
                    dianzan()
                    break
                }
            } else if (s == 1) {
                TKB.xgsrizhi('朋友圈暂无新信息')
                return false
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

//发朋友圈
function fapyq() {
    while (1) {
        try {
            if (text('微信').exists() && id('android:id/text1').exists() && id('com.tencent.mm:id/dkb').exists()) {
                TKB.xgsrizhi('发现')
                //10版本id
                id('com.tencent.mm:id/dkb').text('发现').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('微信').exists() && id('android:id/text1').exists() && id('com.tencent.mm:id/cl7').exists()) {
                TKB.xgsrizhi('发现')
                //13版本id
                id('com.tencent.mm:id/cl7').text('发现').findOnce().parent().parent().click()
                sleep(2000)
            }
            if (text('发现').exists() && id('android:id/text1').exists()) {
                TKB.xgsrizhi('朋友圈')
                click('朋友圈')
                sleep(2000)
            }
            if (desc('拍照分享').exists() && id('android:id/text1').exists() && text('朋友圈').exists()) {
                TKB.xgsrizhi('点击发朋友圈')
                desc('拍照分享').findOnce().click()
                sleep(1000)
            }
            if (text('拍摄').exists() && text('从相册选择').exists()) {
                TKB.xgsrizhi('从相册选择')
                click('从相册选择')
                sleep(1000)
            }
            if (text('我知道了').exists()) {
                TKB.xgsrizhi('我知道了')
                click('我知道了')
                sleep(1000)
            }
            if (id('com.tencent.mm:id/djb').exists() && text('图片和视频').exists()) {
                //13版本id
                TKB.xgsrizhi('选择图片')
                id('com.tencent.mm:id/dj4').find().forEach(child => {
                    child.click()
                })
                sleep(1000)
                id('com.tencent.mm:id/ch').click()
                sleep(1000)

            }
            if (id('com.tencent.mm:id/cer').exists() && text('图片和视频').exists()) {
                //10版本id
                TKB.xgsrizhi('选择图片')
                id('com.tencent.mm:id/bws').find().forEach(child => {
                    child.click()
                })
                sleep(3000)
                id('com.tencent.mm:id/ln').click()
                sleep(1000)

            }
            if (text('所在位置').exists() && text('谁可以看').exists()) {
                setText(fbwz)
                sleep(2000)
                click('发表')
                sleep(5000)
                TKB.xgsrizhi('已经发表朋友圈')
                var ff = dianzan()
                if (ff = true) {
                    back()
                    sleep(500)
                    return true
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error)
        }
    }
}

//发腾讯新闻
function zhuanfatxxw() {
    try {
        if (text('微信').exists() && id('android:id/text1').exists() && id('com.tencent.mm:id/dkb').exists()) {
            TKB.xgsrizhi('点击微信')
            //10版本id
            id('com.tencent.mm:id/dkb').text('微信').findOnce().parent().parent().click()
            sleep(2000)
            TKB.xgsrizhi('点击搜索')
            click(850, 135)
            sleep(2000)
        }
        if (text('微信').exists() && id('android:id/text1').exists() && id('com.tencent.mm:id/cl7').exists()) {
            TKB.xgsrizhi('点击微信')
            //13版本id
            id('com.tencent.mm:id/cl7').text('微信').findOnce().parent().parent().click()
            sleep(2000)
            TKB.xgsrizhi('点击搜索')
            click(850, 135)
            sleep(2000)
        }

        if (text('取消').exists()) {
            TKB.xgsrizhi('搜索腾讯新闻')
            click(520, 150)
            sleep(500)
            setText('腾讯新闻')
            sleep(2000)
            click(540, 400)
            sleep(2000)
        }
        if (text('未启用').exists() && text('启用该功能').exists()) {
            TKB.xgsrizhi('启用腾讯新闻')
            id('com.tencent.mm:id/g1x').text('启用该功能').findOnce().parent().parent().click()
            sleep(2000)
            textContains('停用').waitFor()
            // text('停用').findOnce().waitFor()
            if (text('接收新闻提醒').exists() && text('清空此功能消息记录').exists()) {
                TKB.xgsrizhi('点击腾讯新闻')
                var css = id('android:id/title').text('腾讯新闻').findOnce().bounds()
                click(css.centerX(), css.centerY())
                sleep(2000)
                //通过图标来判断是否推送
                if (id('android:id/text1').exists() && id('com.tencent.mm:id/eo4').exists() && id('com.tencent.mm:id/eo5').exists()) {
                    TKB.xgsrizhi('未推送，请稍后转发腾讯新闻')
                    sleep(2000)
                    back()
                    sleep(500)
                    back()
                    sleep(500)
                    back()
                    sleep(1000)
                    var ii = 1
                    TKB.xgsrizhi('执行：' + ii)
                    fapyq()
                }
            }
        }
        while (1) {
            //13版本id
            if (id('com.tencent.mm:id/g74').exists() && id('com.tencent.mm:id/g9i').exists()) {
                if (bounds(38, 952, 1042, 1379).exists()) {
                    click(540, 1150)
                    click(random(130, 930), random(400, 700))
                } else if (bounds(38, 358, 1042, 785).exists()) {
                    click(random(130, 930), random(1000, 1300))
                }
                className('android.view.View').findOnce().waitFor()
                sleep(5000)
            } else if (id('com.tencent.mm:id/dd').exists() && id('com.tencent.mm:id/ari').exists()) {
                if (bounds(38, 952, 1042, 1379).exists()) {
                    click(540, 1150)
                    click(random(130, 930), random(400, 700))
                } else if (bounds(38, 358, 1042, 785).exists()) {
                    click(random(130, 930), random(1000, 1300))
                }
                // className('android.view.View').findOnce().waitFor()
                sleep(5000)
            }
            if (className('android.view.View') && text('腾讯新闻').exists()) {
                TKB.xgsrizhi('浏览腾讯新闻')
                swipe(540, 1800, 540, 800, random(2000, 3000))
                sleep(2000)
                click(1000, 140)
                sleep(2000)
                click('分享到朋友圈')
                sleep(3000)
            }
            if (text('所在位置').exists() && text('谁可以看').exists()) {
                setText(pyqzfwz)
                sleep(500)
                click('发表')
                sleep(5000)
                TKB.xgsrizhi('已经转发腾讯新闻')
                back()
                sleep(500)
                back()
                sleep(500)
                back()
                sleep(500)
                break
            }
            if (text('轻触屏幕重新加载').exists() && text('出错了').exists()) {
                TKB.xgsrizhi('腾讯新闻加载出错')
                click('轻触屏幕重新加载')
                sleep(1000)
                back()
                sleep(1000)
                continue
            }
        }
    } catch (error) {
        sleep(1001)
        TKB.xgsrizhi(error)
    }
}

//执行发微信发朋友圈或者转发腾讯新闻
function weixinpyq() {
    TKB.xgsrizhi('打开微信')
    launchApp('微信')
    sleep(4000)
    // var ii = 0
    // ii==0 发表朋友圈
    // ii==1 转发腾讯新闻
    var ii = random(0, 1)
    var RT = (new Date()).getTime()
    var stt = random(15, 25)
    var TSD = (new Date()).getTime()
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh('com.tencent.mm')
            break
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh('com.tencent.mm')
            sleep(3000)
            launch('com.tencent.mm')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (ii == 0) {
            TKB.xgsrizhi('执行：' + ii)
            var ff = fapyq()
            if (ff = true) {
                return true
            }
        } else if (ii == 1) {
            TKB.xgsrizhi('执行：' + ii)
            var ff = zhuanfatxxw()
            if (ff = true) {
                return true
            }
        }
    }
}

// 在聊天界面获取当前好友微信号
function getWxId() {
    try {
        if (id('com.tencent.mm:id/g7_').exists()) {
            var names = id('com.tencent.mm:id/g7_').findOnce().text()
            log('names_' + names)
            if ((!(/\(\d+\)$/.test(names))) && (id('com.tencent.mm:id/g2p').exists())) {
                log('ddd_ddd')
                if (desc(names + '头像').exists()) {
                    desc(names + '头像').findOnce().click()
                } else {
                    desc('聊天信息').findOnce().click()
                    sleep(random(1000, 2000))
                    if (!text('公众号').exists()) {
                        log('vvvv')
                        text(names).findOnce().parent().parent().click()
                    }
                }
                textContains('发消息').waitFor()
                var other_id = className('android.widget.LinearLayout').depth(14).findOnce().child(1).text().split('  ')[1]
                log(other_id)
                click('发消息')
                id('com.tencent.mm:id/g2p').waitFor()
                return other_id
            } else {
                return false
            }
        } else {
            return false
        }
    } catch (error) {
        log(error)
    }
}

// 查看消息的同时去请求服务器，查找有没有与自己相关的消息
function getNews() {
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log('获取聊天信息信息超时')
                return false
            }
            var res = http.post(url, {
                'this_wx_id': this_wx_id,
            })
            if (res.statusCode == 200) {
                res = JSON.parse(res)
                var ss = res.body.json()
                if (ss['msg'] == '获取成功') {
                    return true
                } else {
                    log('获取失败')
                    sleep(random(1000, 2000))
                    return false
                }
            }
        } catch (e) {
            log('出错' + e)
            sleep(3000)
        }
    }
}

// 查看消息
function chakan() {
    is_weixin()
    if (text('微信').exists() && text('通讯录').exists()) {
        click(random(1, 260), random(1910, 2020))
        sleep(random(200, 500))
        // click(random(1, 260), random(1910, 2020))
    }
    while (1) {
        try {
            if (text('微信').exists() && id('com.tencent.mm:id/cl7').exists()) {
                log('www')
                if (className('android.widget.TextView').text('微信').findOnce().parent().child(0).childCount() == 2) {
                    click(random(1, 260), random(1910, 2020))
                    sleep(random(50, 150))
                    click(random(1, 260), random(1910, 2020))
                    sleep(random(1000, 2000))
                    log('双击')
                }
                if (id('com.tencent.mm:id/g6k').exists()) {
                    log('找消息')
                    // 微信界面消息集合
                    var g6k = id('com.tencent.mm:id/g6k').findOnce().parent().parent()
                    if (g6k) {
                        log('vvv_vvv')
                        g6k.click()
                        // 使用坐标防止点好友消息时点错
                        sleep(random(1000, 2000))
                        if (id('com.tencent.mm:id/aju').exists() || id('com.tencent.mm:id/a28').exists() || id('com.tencent.mm:id/aku').exists() || id('com.tencent.mm:id/enq').exists()) {
                            log('ccc')
                            // 获取当前未读消息总数，查看未读消息
                            if (id('com.tencent.mm:id/aky').exists()) {
                                var news_num = id('com.tencent.mm:id/akz').findOnce().text().split('条')[0]
                                log('未读消息:' + news_num)
                                id('com.tencent.mm:id/aky').findOnce().click()
                                sleep(random(1000, 2000))
                                while (1) {
                                    if (scrollDown()) {
                                        sleep(random(50, 300))
                                    } else {
                                        log('停止')
                                        break
                                    }
                                }
                            }
                            // 根据好友的微信ID去回复消息
                            if (getWxId() === wx_id) {
                                id('com.tencent.mm:id/g2p').findOnce().click()
                                sleep(random(1000, 1500))
                                setText(speak_str)
                                sleep(random(500, 1000))
                                click('发送')
                                sleep(random(500, 1000))
                            }
                            console.log('tt')
                            back()
                            sleep(random(1000, 2000))
                        }
                    }
                } else {
                    log('暂无新消息')
                    break
                }
            }
        } catch (error) {
            toastLog(error)
            sleep(random(1000, 3000))
        }
    }
}

// 将所发的好友微信号和内容上传到服务器
function setNews(other_id, news_text) {
    var TS = (new Date()).getTime()
    var url = ''
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log('上传聊天信息失败')
                return false
            }
            var res = http.post(url, {
                'other_id': other_id,
                'news_text': news_text
            })
            if (res.statusCode == 200) {
                res = JSON.parse(res)
                var ss = res.body.json()
                if (ss['msg'] == '上传成功') {
                    return true
                    
                } else {
                    log('上传失败')
                    sleep(random(1000, 2000))
                    return false
                }
            }
        } catch (e) {
            log('出错' + e)
            sleep(3000)
        }
    }
}

// 给好友发消息
function txl_speak(name) {
    var txl_bx = className('android.widget.TextView').text('通讯录').findOnce().bounds()
    while (1) {
        try {
            bx = className('android.view.View').depth(17).text(name).findOnce().bounds()
            click(bx.centerX(), bx.centerY())
            sleep(700)
            var other_id = className('android.widget.LinearLayout').depth(14).findOnce().child(1).text().split('  ')[1]
            if (text('发消息').exists()) {
                click('发消息')
                sleep(700)
                id('com.tencent.mm:id/g2p').findOnce().click()
                sleep(700)
                // setText('hello')
                // sleep(700)
                // click('发送')
                // sleep(700)
                log('消息已发送')
                // setNews(other_id, 'hello')
                back()
                sleep(700)
                click(txl_bx.centerX(), txl_bx.centerY())
                sleep(700)
                break
            }
        } catch (error) {
            toast(error)
        }
    }
}

// 随机给三个好友发消息
function random_speak() {
    is_weixin()
    try {
        var txl_bx = className('android.widget.TextView').text('通讯录').findOnce().bounds()
        var this_wxname = id('com.tencent.mm:id/e0g').findOnce().text()
        var name_list = []
        click(txl_bx.centerX(), txl_bx.centerY())
        sleep(random(500, 1500))
        var nums = 0,
            is_speak_nums = 3
        while (1) {
            if (!id('com.tencent.mm:id/f4').findOnce().scrollUp()) {
                log('ddd_ddd')
                break
            }
        }
        while (1) {
            if (id('com.tencent.mm:id/f4').findOnce().scrollDown()) {
                sleep(random(50, 200))
                nums++
            } else {
                log('停止')
                log('nums_' + nums)
                break
            }
        }
        // 好友较多，随机找三个好友发消息
        if (nums > 2) {
            log('nums____')
            var random_list = []
            for (var i = 0; i < is_speak_nums; i++) {
                var fg = random(2, nums - 1)
                random_list.indexOf(fg) === -1 ? random_list.push(fg) : i--
            }
            log(random_list)
            while (1) {
                if (nums == random_list[0] || nums == random_list[1] || nums == random_list[2]) {
                    id('com.tencent.mm:id/dux').find().forEach(e => {
                        if (name_list.indexOf(e.text()) === -1 && e.text() != '微信团队' && e.text() != this_wxname) {
                            name_list.push(e.text())
                        }
                    })
                    var haoyous = random(1, 2),
                        ids = []
                    for (var i = 0; i < haoyous; i++) {
                        ids.push(name_list[Math.floor(Math.random() * name_list.length)])
                    }
                    ids.forEach(e => {
                        txl_speak(e)
                    })
                    is_speak_nums--
                    if (!is_speak_nums) {
                        log('消息已发送完成')
                        break
                    }
                }
                if (id('com.tencent.mm:id/f4').findOnce().scrollUp()) {
                    log('滑动')
                    sleep(random(50, 200))
                    nums--
                }
            }
        } else {
            // 好友较少，直接在好友界面找三个好友发消息
            log('else_else')
            var haoyous = random(1, 3)
            log('haoyous_' + haoyous)
            while (1) {
                id('com.tencent.mm:id/dux').find().forEach(e => {
                    if (name_list.indexOf(e.text()) === -1 && e.text() != '微信团队' && e.text() != this_wxname) {
                        name_list.push(e.text())
                    }
                })
                if (id('com.tencent.mm:id/f4').findOnce().scrollDown()) {} else {
                    break
                }
            }
            // 如果好友很少，不满足三个好友聊天条件
            if (name_list.length < 3) {
                log('name_list_length_' + name_list.length)
                log('好友太少，快去添加好友吧')
                return false
            }
            // name_list.forEach(e => {
            //     txl_speak(e)
            // })
            for (var i = 0; i < haoyous; i++) {
                txl_speak(name_list[Math.floor(Math.random() * name_list.length)])
            }
        }
        log('vvv_vvv')
    } catch (error) {
        toast(error)
    }
}

// 群聊
function groupChat() {
    while (1) {
        try {
            if (text('微信').exists() && text('通讯录').exists() && text('发现').exists()) {
                var txl_bx = className('android.widget.TextView').text('通讯录').findOnce().bounds()
                click(txl_bx.centerX(), txl_bx.centerY())
                sleep(random(1000, 2000))
            } else {
                launchApp('微信')
            }
            if (text('群聊').exists()) {
                text('群聊').findOnce().parent().parent().parent().click()
                sleep(random(1000, 2000))
                var groups = id('com.tencent.mm:id/f4').find().find(className('android.widget.LinearLayout').depth(10))
                groups.forEach(e => {
                    log('vvv_vvv')
                    if (random(0, 2) == 0) {
                        click(random(e.bounds().centerX() + 10, e.bounds().centerX() + 300), random(e.bounds().centerY() + 5, e.bounds().centerY() + 30))
                        sleep(2000)
                        log('进入群聊')
                        back()
                        sleep(2000)
                        text('群聊').findOnce().parent().parent().parent().click()
                    }
                    sleep(random(1000, 2000))
                })
                back()
                sleep(1000)
                break
            }
        } catch (error) {
            toast(error)
            log(error)
        }
    }
}

// 请求话术接口
function freeSpeak(msg) {
    var TS = (new Date()).getTime()
    var url = 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI(msg)
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                return false
            }
            var r = http.get(url)
            if (r.statusCode == 200) {
                res = r.body.json()
                if (res.result == 0) {
                    log(res.content)
                    return true
                } else {
                    log(res.content)
                    return false
                }
            }
        } catch (error) {
            toast(error)
            log(error)
        }
    }
}

// 加好友
function weixinss(wx_id) {
    if (text('微信').exists() && text('通讯录').exists()) {
        click(random(1, 260), random(1910, 2020))
        sleep(random(1000, 2000))
    }
    while (1) {
        try {
            // sleep(random(1000, 2000))
            if (text('微信').exists() || text('通讯录').exists() || text('发现').exists()) {
                click(random(930, 1080), random(80, 200))
                TKB.xgsrizhi('+++')
                sleep(1000)
                if (text('添加朋友').exists()) {
                    click('添加朋友')
                    sleep(1000)
                }
                if (text('扫一扫').exists() && text('雷达加朋友').exists()) {
                    TKB.xgsrizhi('添加朋友')
                    var n = text('微信号/手机号').findOnce().bounds()
                    click(n.centerX(), n.centerY())
                    sleep(1000)
                    setText(wx_id)
                    sleep(1000)
                    var n = textContains('搜索:').findOnce().bounds()
                    click(n.centerX(), n.centerY())
                    textContains('设置备注和标签').waitFor()
                    sleep(1000)
                    // sleep(3000)
                    if (text('添加到通讯录').exists()) {
                        TKB.xgsrizhi('添加到通信录')
                        click('添加到通讯录')
                        text('设置备注').waitFor()
                        // sleep(3000)
                        click('发送')
                        TKB.xgsrizhi('正在加好友')
                        // textContains('已发送').waitFor()
                        sleep(2000)
                        if (text('添加到通讯录').exists()) {
                            TKB.xgsrizhi('加好友请求已发送')
                            for (var i = 0; i < 3; i++) {
                                back()
                                sleep(800)
                            }
                            return true
                        } else {
                            TKB.xgsrizhi('加好友失败')
                            for (var i = 0; i < 3; i++) {
                                back()
                                sleep(800)
                            }
                            return false
                        }
                    }
                    if (text('发消息').exists()) {
                        TKB.xgsrizhi('该微信号已是你的好友')
                        for (var i = 0; i < 3; i++) {
                            back()
                            sleep(800)
                        }
                        exit()
                    }
                    // for (var i=0;i<3;i++){
                    //     back()
                    //     sleep(800)
                    // }
                }
            } else {
                back()
            }
        } catch (error) {
            toastLog(error)
            sleep(random(3000, 8000))
        }
    }
}

// 同意好友请求
function agree() {
    var TS = (new Date()).getTime()
    if (text('微信').exists() && text('通讯录').exists()) {
        click(random(275, 530), random(1910, 2020))
        sleep(random(500, 1000))
    }

    function get_text(e) {
        if (e.childCount() > 1) {
            var text_list = []
            e.forEach(x => {
                text_list.push(x.text())
            })
            return text_list
        } else {
            if (e.childCount()) {
                return e.child(0).text()
            } else {
                return ''
            }
        }
    }
    while (1) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                log('失败!')
                return false
            }
            if (id('com.tencent.mm:id/c29').exists()) {
                var nums_reat = id('com.tencent.mm:id/c29').findOnce().parent().bounds()
                click(nums_reat.centerX(), nums_reat.centerY())
                // sleep(random(1000, 2500))
                id('com.tencent.mm:id/c27').waitFor()
            }
            if (text('新的朋友').exists()) {
                click('新的朋友')
                // sleep(random(1000, 2500))
                textContains('添加手机联系人').waitFor()
                log('rrr')
            }
            var haoyou_list = id('com.tencent.mm:id/c27').find()
            log('length:' + haoyou_list.length)
            if (haoyou_list.length) {
                haoyou_list.forEach(e => {
                    log('w_' + get_text(e))
                    if (get_text(e) == '接受') {
                        log(e.bounds().centerX() + ':' + e.bounds().centerY())
                        click(e.bounds().centerX(), e.bounds().centerY())
                        // sleep(random(2000, 3000))
                        textContains('通过朋友验证').waitFor()
                        if (text('通过朋友验证').exists()) {
                            log('d')
                            click('完成')
                            // sleep(random(2000, 3000))
                            // if (text('音视频通话').exists() || text('发消息').exists()) {
                            //     log('已同意好友请求')
                            //     back()
                            //     sleep(random(1000, 2000))
                            // }
                            textContains('音视频通话').waitFor()
                            log('已同意好友请求')
                            back()
                            sleep(random(1000, 2000))
                        }
                    } else {
                        log('vvv')
                    }
                })
                back()
                break
            } else {
                back()
                break
            }
        } catch (error) {
            log('error_' + error)
        }
    }
}

// module.exports = {
//     'huoquwxh': huoquwxh, // 获取微信账号,手机号
//     'weixinjq': weixinjq, // 微信建群
//     'weixinjiaq': weixinjiaq, // 微信加群
//     'dianzan': dianzan, // 朋友圈点赞
//     'pyqliulan': pyqliulan, // 朋友圈浏览
//     'weixinpyq': weixinpyq, // 执行发微信发朋友圈或者转发腾讯新闻,
//     'getWxId': getWxId, // 在聊天界面获取当前好友微信号
//     'getNews': getNews, // 请求服务器，查找有没有与自己相关的消息
//     'chakan': chakan, // 查看消息
//     'setNews': setNews, // 将所发的好友微信号和内容上传到服务器
//     'txl_speak': txl_speak, // 给好友发消息
//     'random_speak': random_speak, // 随机给三个好友发消息
//     'groupChat': groupChat, // 群聊
//     'freeSpeak': freeSpeak, // 请求话术接口
//     'weixinss': weixinss, // 加好友
//     'agree': agree, // 同意好友请求
// }

weixinpyq()