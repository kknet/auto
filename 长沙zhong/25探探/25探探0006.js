auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var dqbaoming = "com.p1.mobile.putong" //该项目包名
var xmxh = "25" //项目序号 版本11.0.0
let nameflag, imgflag, jianjieflag, name, jianjie;

//******************************************************************抖音项目*****************************************************************

function zonghe() {
    if (text('用户隐私政策').exists() && text('同意并继续').exists() && text('不同意').exists()) {
        text('同意并继续').findOnce().parent().click();
        TKB.xgsrizhi("同意隐私政策")
        sleep(1500)
    }
    if (text('取消').exists() && text('下载APK').exists()) {
        click('取消');
        TKB.xgsrizhi("选择头像");
        sleep(1500);
    }

    if (text('头像未通过审核').exists() && text('更换头像').exists()) {
        toastLog("头像未通过审核");
        TKB.xgsrizhi("头像未通过审核");
        sleep(1500);
    }
    if (text('立刻闪聊').exists() && text('不用了').exists()) {
        click("不用了")
        TKB.xgsrizhi("不用了");
        sleep(1500);
    }
    if (text('媒体').exists() && text('上传真实头像照片才可获得匹配').exists()) {
        click(180, 400);
        TKB.xgsrizhi("选择头像");
        sleep(1500);
    }

    if (text('完成').exists() && desc('转到上一层级').exists()) {
        click('完成');
        TKB.xgsrizhi("头像选择完毕");
        sleep(1500);
    }
    // if (id('com.p1.mobile.putong:id/').exists()) {
    //     id('com.p1.mobile.putong:id/').findOnce().click();
    //     TKB.xgsrizhi("关闭寻找爱情");
    //     sleep(1500);
    // }
    if (text('隐私设置').exists() && text('探探需要通讯录权限来屏蔽联系人：你的手机通讯录中的联系人将不会看到你，你也看不到他们！').exists()) {
        var x = text('开始滑动！').findOnce().bounds().centerX();
        var y = text('开始滑动！').findOnce().bounds().centerY();
        click(x, y);
        TKB.xgsrizhi("开始滑动");
    }

    if (id('com.p1.mobile.putong:id/name').exists() && text('举报').exists() && text('关注')) {
        back();
        sleep(2000)
    }

    if (text('关注主播，不错过精彩内容').exists() && text('直接退出').exists() && text('关注并退出').exists()) {
        var x = text('关注并退出').findOnce().bounds().centerX();
        var y = text('关注并退出').findOnce().bounds().centerY();
        click(x, y);
        sleep(1500);
    }

    if (text('获取通讯录权限').exists() && text('我知道了').exists() && text('探探需要获取你的通讯录权限，这样你就可以对你的好友发送匿名暗恋表白。放心！对方将不会知道短信是由谁发出的。').exists()) {
        var x = textEndsWith('我知道了').findOnce().bounds().centerX();
        var y = textEndsWith('我知道了').findOnce().bounds().centerY();
        click(x, y);
        sleep(1500);
        TKB.xgsrizhi("获取通讯录权限");
    }

    if (desc('遇见即是缘分，交个朋友吧').exists() && text('首充任意金额赠送')) {
        back();
        sleep(2000);
        TKB.xgsrizhi("直播间充值");
    }

    if (text('精彩推荐').exists()) {
        back();
        sleep(2000);
        TKB.xgsrizhi("主播以下播弹出的推荐");
    }

    if (text('回车键发送消息').exists() && text('立即开启').exists() && text('暂不').exists()) {
        var x = text('暂不').findOnce().bounds().centerX();
        var y = text('暂不').findOnce().bounds().centerY();
        click(x, y);
        sleep(1500);
    }

    if (text('新功能：真实头像认证').exists() && text('立即认证').exists() && text('稍后再说').exists()) {
        var x = text('稍后再说').findOnce().bounds().centerX();
        var y = text('稍后再说').findOnce().bounds().centerY();
        click(x, y);
        TKB.xgsrizhi("新功能：真实头像认证");
        sleep(1500);
    }

    if (text('直播结束').exists()) {
        var x = text('直播结束').findOnce().bounds().centerX();
        var y = text('直播结束').findOnce().bounds().centerY();
        click(x, y);
        TKB.xgsrizhi("直播结束");
        sleep(1500);
    }

    if (text('立即认证，让TA看到我').exists() && text('稍后再说').exists()) {
        var x = text('稍后再说').findOnce().bounds().centerX();
        var y = text('稍后再说').findOnce().bounds().centerY();
        click(x, y);
        TKB.xgsrizhi("真实头像认证");
        sleep(1500);
    }

    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (text("立即登录").exists() && text("取消").exists()) {
        TKB.xgsrizhi("立即登录")
        click("取消")
        sleep(2000)
    }
    if (text("确认").exists() && text("取消").exists()) {
        TKB.xgsrizhi("取消未编辑的视频")
        click("取消")
        sleep(2000)
    }
    if (text("个人信息保护指引").exists() && text("好的").exists()) {
        TKB.xgsrizhi("个人信息保护指引")
        click("好的")
        sleep(2000)
    }

    if (text("五星好评").exists() && text("取消").exists()) {
        TKB.xgsrizhi("五星好评")
        click("取消")
        sleep(1000)
    }
    if (text("长按屏幕使用更多功能").exists()) {
        back()
        TKB.xgsrizhi("长按屏幕使用更多功能");
        sleep(1200)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("知道了").exists()) {
        TKB.xgsrizhi("知道了")
        click("知道了")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }

    if (textContains("是否用流量观看").exists()) {
        click("确认");
        TKB.xgsrizhi("确认");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
}

/*从指定任务参数值获取链接
 * image_urls  {object}  图片的链接地址
 */
function getImageLinks(xs) {
    var image_urls = [];
    for (let num = 1; num <= 7; num++) {
        if (xs['图片链接' + num] == 0 || xs['图片链接' + num] == '0') {
            TKB.xgsrizhi("未获取到图片链接" + num);
        } else {
            TKB.xgsrizhi("获取到链接" + "," + xs['图片链接' + num])
            image_urls.push(xs['图片链接' + num]);
        }
    }
    TKB.xgsrizhi("一共有" + image_urls.length + "个图片链接")
    return image_urls;
}


//下载链接的图片
function downLoadImage(lj, num) {
    TKB.xgsrizhi("下载图片" + num);
    var dirpath = "/sdcard/momoImage/";
    files.ensureDir(dirpath);
    var tem = 0
    var imgurl = lj
    confirmEnding(imgurl, "mp4");

    function confirmEnding(str, target) {
        var start = str.length - target.length;
        var arr = str.substr(start, target.length);
        if (arr == target) {
            TKB.xgsrizhi("视频链接" + imgurl)
            while (1) {
                try {
                    if (tem > 10) {
                        TKB.xgsrizhi("下载不到视频头像")
                        return false
                    }
                    var filePath = files.join(dirpath, '1.mp4');
                    let res = http.get(imgurl);
                    if (res.statusCode == 200) {
                        files.writeBytes(filePath, res.body.bytes());
                        media.scanFile(filePath);
                        TKB.xgsrizhi("下载视频完成")
                        return true
                    } else {
                        TKB.xgsrizhi("没有视频");
                        sleep(3000)
                        tem = tem + 1
                    };
                } catch (error) {
                    TKB.xgsrizhi(error);
                    sleep(random(3000, 8000))
                }
            }
        } else {
            TKB.xgsrizhi("拿图片的链接" + imgurl)
            while (1) {
                try {
                    if (tem > 10) {
                        TKB.xgsrizhi("访问次数够了退出")
                        return false
                    }
                    var filePath = files.join(dirpath, num + '.png');
                    let res = http.get(imgurl);
                    if (res.statusCode == 200) {
                        files.writeBytes(filePath, res.body.bytes());
                        media.scanFile(filePath);
                        TKB.xgsrizhi("下载图片完成")
                        return true
                    } else {
                        TKB.xgsrizhi("没有图片了 ");
                        sleep(2000)
                        tem = tem + 1
                    };
                } catch (error) {
                    TKB.xgsrizhi(error);
                    sleep(random(3000, 8000))
                }
            }
        }
    }

}

//探探注册
function ttzc() {
    TKB.xgsrizhi("探探注册");
    launch(dqbaoming);
    var TSD = (new Date()).getTime();
    var RT = (new Date()).getTime();
    var zh = "18958983040";
    var yzm = "8476";
    var tem = 0;
    var name = 0;
    var year = 0;
    var yes_year = 0;
    var sex = 0;
    var yes_sex = 0;
    var pass = 0;
    var arr = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '周', '刘', '严'];
    var arr2 = ['朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '华', '寒'];
    var verify_num = 2,
        is_verify = false
    var sz = {
        "1": [323, 1340],
        "2": [540, 1340],
        "3": [790, 1340],
        "4": [323, 1499],
        "5": [541, 1502],
        "6": [800, 1522],
        "7": [323, 1650],
        "8": [542, 1661],
        "9": [810, 1672],
        "0": [540, 1835]
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }

            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没注册成功")
                swipe(500, 1600, 600, 400, 1200);
                sleep(500)
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                sleep(2000)
                fs = 0
                TSD = (new Date()).getTime()
            }

            if (verify_num <= 0) {
                TKB.xgsrizhi("验证次数失败过多")
                TKB.qinglihh(dqbaoming)
                return false
            }
            // 选择手机号码登录
            if (text('手机号登录').exists()) {
                click('手机号登录');
                TKB.xgsrizhi("手机号登录")
                sleep(1500)
            }
            // // 一键登录
            if (textEndsWith('一键登录').exists()) {
                textEndsWith('一键登录').findOnce().click();
                TKB.xgsrizhi('一键登录')
                sleep(1500);
            }
            if (text('使用其他手机号').exists()) {
                click('使用其他手机号');
                TKB.xgsrizhi('使用其他手机号')
                sleep(1500);

            }
            // 手机号码登录
            if (text('手机号码').exists() && text('+86').exists()) {
                if (tem == 0) {
                    TKB.xgsrizhi("去获取号码")
                    zh = TKB.benjitel()
                    if (zh == false) {
                        TKB.xgsrizhi("没有获取到手机号")
                        TKB.qinglihh(dqbaoming)
                        sleep(10000)
                        launch(dqbaoming)
                        TSD = (new Date()).getTime()
                        name = 0
                        year = 0
                        sex = 0
                        pass = 0
                        yes_year = 0
                        continue
                    }
                    tem = 1
                }
                var zh_btn = id('com.p1.mobile.putong:id/').editable(true).longClickable(true).findOnce();
                zh_btn.click();
                sleep(1500)
                zh_btn.setText(zh);
                TKB.xgsrizhi("输入手机号_" + zh)
            }
            // 输入手机号码继续
            if (text('继续').exists() && text(zh).exists()) {
                click('继续');
                TKB.xgsrizhi("输入手机号码继续")
                sleep(1500)
            }
            // 获取验证码
            if (text('验证码短信已经发送至：').exists() && is_verify == false) {
                TKB.xgsrizhi("输入验证码界面")
                sleep(15000)
                yzm = TKB.huoquyzm("探探")
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    TSD = (new Date()).getTime()
                    verify_num--
                    name = 0
                    year = 0
                    sex = 0
                    pass = 0
                    yes_year = 0
                    continue
                }
                toastLog('输入验证码')
                for (var i = 0; i < 4; i++) {
                    var x = yzm.substr(i, 1);
                    TKB.xgsrizhi(x)
                    click(sz[x][0], sz[x][1]);
                    sleep(1500)
                    TKB.xgsrizhi('第' + (i + 1) + '次')
                }
                is_verify = true
                sleep(5000)
            }

            if (text('验证码短信已经发送至：').exists() && is_verify == true) {
                TKB.qinglihh(dqbaoming)
                sleep(10000)
                launch(dqbaoming)
                TSD = (new Date()).getTime()
                verify_num--
                is_verify = false
                name = 0
                year = 0
                sex = 0
                pass = 0
                yes_year = 0
                continue
            }

            // 注册新用户
            // 1.输入昵称
            if (text('注册新用户').exists() && text('注册').exists() && name == 0) {
                var name_str = TKB.hqnicheng().replace(/[^\u4E00-\u9FA5a-zA-Z]/g, '')
                if (name_str == '' || name_str == undefined) {
                    var a = randomNum(0, 10);
                    var b = randomNum(0, 10);
                    name_str = arr[a] + arr2[b]
                }
                text('昵称').findOnce().click();
                sleep(1500);
                text('昵称').findOnce().setText(name_str);
                // text('昵称').findOnce().setText(arr[a] + arr2[b]);
                sleep(2000);
                TKB.xgsrizhi("输入昵称");
                name = 1
            }

            // 2.输入出生年月日
            if (text('注册新用户').exists() && text('注册').exists() && year == 0) {
                var x = bounds(48, 662, 1032, 838).findOnce().bounds().centerX()
                var y = bounds(48, 662, 1032, 838).findOnce().bounds().centerY()
                click(x, y);
                sleep(1500)
                TKB.xgsrizhi("出生年月日")
                year = 1
            }

            if (text('取消').exists() && text('确认').exists() && yes_year == 0) {
                var c = randomNum(8, 13)
                for (var i = 0; i < c; i++) {
                    swipe(200, 800, 200, 1200, 500);
                    sleep(1500)
                    swipe(520, 800, 520, 1200, 500);
                    sleep(1500)
                    swipe(840, 800, 840, 1200, 500);
                    sleep(1500)
                }
                text('确认').findOnce().parent().click();
                yes_year = 1;
                sleep(1500)
            }

            //3.点击性别
            if (text('注册新用户').exists() && text('注册').exists() && sex == 0) {
                TKB.xgsrizhi("选择性别");
                if (yes_sex == 0) {
                    click(950, 980);
                }
                sleep(1500);
                sex = 1
            }

            if (text('注册成功后，性别不可以再修改').exists() && text('确定')) {
                click('确定');
                TKB.xgsrizhi("选择性别确定")
                sleep(2000);
            }

            // 5.设置密码
            if (text('注册新用户').exists() && text('注册').exists() && pass == 0) {
                // var password = randomNum(100000000, 99999999)
                var ps_list = ['223514', '223515']
                var password = ps_list[random(0, 1)]
                bounds(48, 1154, 1032, 1372).findOnce().setText(password);
                sleep(1500);
                TKB.xgsrizhi("设置密码_" + password)
                pass = 1
            }

            // 注册
            if (name == 1 && year == 1 && sex == 1 && pass == 1 && yes_year == 1 && text('注册').exists()) {
                text('注册').click();
                TKB.xgsrizhi("开始注册");
                sleep(1500);
            }

            // 添加本人照片真实照片
            if (text('上传本人真实照片').exists() && text('添加本人照片').exists()) {
                click('添加本人照片');
                TKB.xgsrizhi("添加本人照片");
                sleep(1500);
            }

            if (text("始终同意").exists() && text("拒绝").exists()) {
                TKB.xgsrizhi("始终同意")
                click("始终同意")
                sleep(2000)
            }

            // 选择照片、
            if (text('媒体').exists() && text('上传真实头像照片才可获得匹配').exists()) {
                click(180, 400);
                TKB.xgsrizhi("选择一张图片来当头像");
                sleep(1500);
            }

            // 裁切图片  点击完成
            if (text('完成').exists() && desc('转到上一层级').exists()) {
                click('完成');
                TKB.xgsrizhi("裁切图片点击完成");
                sleep(5000);
            }

            // 检测出不是人脸；
            if (text('请上传带有清晰脸部的照片').exists() && text('继续').exists()) {
                toastLog('请上传带有清晰脸部的照片')
                var x = text('继续').findOnce().bounds().centerX()
                var y = text('继续').findOnce().bounds().centerY();
                TKB.xgsrizhi(x, y)
                click(x, y);
                var x = 0
                sleep(1500)
            }

            if (text('开始探探').exists()) {
                click('开始探探');
                TKB.xgsrizhi("打开了一扇神奇的大门");
                sleep(1500);
                return true
            }

            if (text('隐私设置').exists() && text('探探需要通讯录权限来屏蔽联系人：你的手机通讯录中的联系人将不会看到你，你也看不到他们！').exists()) {
                text('开始滑动！').findOnce().parent().click();
                TKB.xgsrizhi("开始滑动");
                sleep(1500);
            }

            if (text('探探').exists() && text('直播').exists() && text('消息').exists()) {
                TKB.xgsrizhi('登录成功')
                TKB.xgsrizhi("登录成功");
                return true
            }

            sleep(500)
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

function getIndexes(count) {
    let indexes = new Array();
    for (let i = 0; i < count; i++) {
        let index = random(0, 8);
        if (indexes.indexOf(index) == -1) {
            indexes.push(index);
        } else {
            i--;
        }
    }
    return indexes;
}
//选择兴趣
function chooseHobbies() {
    let amount = 0;
    for (let i = 0; i < 2; i++) {
        let hobbies = className("android.widget.LinearLayout").depth(12).find();
        let count = random(1, 9);
        let isContinue = random(1, 3);
        let indexes = getIndexes(count);
        for (let j = 0; j < indexes.length; j++) {
            if (amount == 10) {
                break;
            }
            hobbies[indexes[j]].click();
            sleep(3000);
            amount++;
        }
        if (isContinue == 1 || amount == 10) {
            break;
        } else {
            swipe(740, 1660, 740, 300, 1000);
            sleep(3000);
        }
    }
    sleep(3000);
    text("好").exists() ? click("好") : '';
    sleep(3000);
}

function z_split(xx) {
    var zz = xx
    if (zz.length > 1) {
        zx = zz[1]
    } else {
        zx = zz[0]
    }
    return zx
}
//改资料
function gaizl() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    sleep(5000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0 //判断编辑资料界面该干啥
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    let imgClick = false;
    var xb = 0
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        //用分隔符隔开，获取后面的社交数据
        name = z_split(zz['nickname'].split('|||'))
        TKB.xgsrizhi(name)
        var img = z_split(zz['img'].split('|||'))
        TKB.xgsrizhi(img)
        jianjie = z_split(zz['jianjie'].split('|||'))
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
            return false
        }
    }

    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if (text("探探").find().size() == 2) {
            TKB.xgsrizhi("首页")
            click(980, 1850)
            sleep(2000)
            if (id("com.p1.mobile.putong:id/name").exists()) {
                TKB.xgsrizhi("编辑资料")
                let rect = id("com.p1.mobile.putong:id/name").findOnce().bounds();
                click(rect.centerX(), rect.centerY());
                sleep(3000)
                if (className("l.ıі").depth(7).exists()) {
                    let editWidget = className("l.ıі").depth(7).findOnce().bounds();
                    click(editWidget.centerX(), editWidget.centerY());
                }
                sleep(3000)
            }
        }
        if (tep == 0) {
            if (xs['是否修改名字'] == '是') {
                textStartsWith("点击编辑个人信息").findOnce().parent().parent().click();
                sleep(3000);
                if (text("个人信息").exists() && text("性别").exists() && text("昵称").exists() && text("生日").exists()) {
                    TKB.xgsrizhi("修改名字")
                    if (className("android.widget.LinearLayout").depth(9).findOnce(1).child(1).text() == name) {
                        TKB.xgsrizhi("已经是该名字了")
                        sleep(1000)
                        back()
                    } else {
                        className("android.widget.LinearLayout").depth(9).findOnce(1).click();
                        sleep(2000);
                        setText(name)
                        click("好")
                        sleep(1000)
                        back();
                    }
                    sleep(3000);
                }
                if (id("com.p1.mobile.putong:id/name").findOnce().text() != name) {
                    TKB.xgsrizhi("探探昵称不符合");
                    nameflag = '探探昵称不符合';
                } else {
                    TKB.xgsrizhi("探探昵称符合");
                    nameflag = '探探昵称符合';
                }
                tep = 1
            } else {
                tep = 1;
                TKB.xgsrizhi("探探昵称不修改");
                nameflag = '探探昵称不修改';
            }
        }
        if (tep == 1) {
            if (xs['是否修改头像'] == '是') {
                TKB.xgsrizhi("修改头像");
                click(362, 602)
                sleep(3000);
                if (text("相册").exists() && text("图片").exists() && text("视频").exists()) {
                    TKB.xgsrizhi("相册选择");
                    click(text("图片").findOnce().parent());
                    sleep(3000);
                    if (className("androidx.recyclerview.widget.RecyclerView").depth(10).find().size() == 2) {
                        TKB.xgsrizhi("选择照片");
                        className("androidx.recyclerview.widget.RecyclerView").depth(10).findOnce().child(1).click(); //选择第一张
                        imgClick = true;
                        sleep(3000);
                        if (text("完成").exists()) {
                            click("完成");
                            sleep(3000);
                        }
                    }
                }
                if (imgClick) {
                    TKB.xgsrizhi("探探头像符合");
                    imgflag = '探探头像符合';
                } else {
                    TKB.xgsrizhi("探探头像不符合");
                    imgflag = '探探头像不符合';
                }
            } else {
                TKB.xgsrizhi("探探头像不修改");
                imgflag = '探探头像不修改';
            }
            swipe(device.width / 2, 1700, device.width / 2, 600, 1000);
            sleep(3000);
            tep = 2;
        }
        if (tep == 2) {
            if (xs['是否修改简介'] == '是') {
                if (text("个人签名").exists()) {
                    TKB.xgsrizhi("修改简介")
                    if (text("个人签名").findOnce().parent().child(1).child(1).text() == jianjie) {
                        TKB.xgsrizhi("已经是该简介了")
                        sleep(3000)
                    } else {
                        let editWidget = text("个人签名").findOnce().parent().child(1).child(1).bounds();
                        click(editWidget.centerX(), editWidget.centerY());
                        sleep(3000);
                        setText(jianjie)
                        sleep(3000)
                        let confirmWidget = text("好").findOnce().bounds();
                        click(confirmWidget.centerX(), confirmWidget.centerY());
                        sleep(3000)
                    }
                }
                if (text("个人签名").findOnce().parent().child(1).child(1).text() != jianjie) {
                    TKB.xgsrizhi("探探简介不符合");
                    jianjieflag = "探探简介不符合";
                } else {
                    TKB.xgsrizhi("探探简介符合");
                    jianjieflag = "探探简介符合";
                }
            } else {
                TKB.xgsrizhi("探探简介不修改");
                jianjieflag = "探探简介不修改";
            }
            swipe(device.width / 2, 1820, device.width / 2, 600, 1000);
            sleep(3000);
            swipe(device.width / 2, 1820, device.width / 2, 600, 1000);
            sleep(3000);
            tep = 3
        }
        if (tep == 3) {
            if (text("我的兴趣").exists()) {
                //添加我喜欢的运动
                if (text("+  我喜欢的运动").exists()) {
                    text("+  我喜欢的运动").findOnce().click();
                    chooseHobbies();
                }
                //添加我喜欢的音乐
                if (text("+  我喜欢的音乐").exists()) {
                    text("+  我喜欢的音乐").findOnce().click();
                    chooseHobbies();
                }
                //添加我喜欢的食物
                if (text("+  我喜欢的食物").exists()) {
                    text("+  我喜欢的食物").findOnce().click();
                    chooseHobbies();
                }
                //添加我喜欢的电影
                if (text("+  我喜欢的电影").exists()) {
                    text("+  我喜欢的电影").findOnce().click();
                    chooseHobbies();
                }
                //添加我喜欢的书和动漫
                if (text("+  我喜欢的书和动漫").exists()) {
                    text("+  我喜欢的书和动漫").findOnce().click();
                    chooseHobbies();
                }
                //添加我的旅行足迹
                if (text("+  我的旅行足迹").exists()) {
                    text("+  我的旅行足迹").findOnce().click();
                    chooseHobbies();
                }
            }
            tep = 4;
        }
        if (tep == 4) {
            back();
            sleep(2000);
            if (nameflag == '探探昵称符合' && imgflag == '探探头像符合' && jianjieflag == '探探简介符合') {
                status = 1
            } else {
                status = 2
            }
            var info = nameflag + ',' + imgflag + ',' + jianjieflag
            TKB.upinfo(sbip, user_id, yhbh, info, status)
            TKB.xgsrizhi("执行完了退出")
            TKB.qinglihh();
            return true
        }
        zonghe()
    }
}

//发圈养号
function release_dynamic() {
    zonghe()
    TKB.xgsrizhi("发布动态")
    var xs = TKB.zhid(sbip, run_id)
    let comments, imageLinks;
    if (xs["话术"] == 0 || xs["话术"] == "0") {
        TKB.xgsrizhi("未获取到话术");
    } else {
        comments = xs["话术"];
        TKB.xgsrizhi("获取到话术为" + comments);
    }
    imageLinks = getImageLinks(xs);

    if (imageLinks.length > 0) {
        for (let i = 0; i < imageLinks.length; i++) {
            downLoadImage(imageLinks[i], i);
            sleep(1000);
        }
    } else {
        return false;
    }

    if (text("发布动态").exists()) {
        text("发布动态").findOnce().parent().click();
        sleep(3000);
        //写动态
        if (className("android.widget.EditText").exists()) {
            setText(comments);
            sleep(3000);
        }
        //添加图片或视频
        if (imageLinks.length == 1 && imageLinks[0].substr(imageLinks[0].lastIndexOf(".") + 1, imageLinks[0].length) == "mp4") {
            //如果是视频
            if (className("androidx.recyclerview.widget.RecyclerView").depth(7).findOnce(1).childCount() > 0) {
                let video = className("androidx.recyclerview.widget.RecyclerView").depth(7).findOnce(1).child(0);
                video.click();
                sleep(3000);
                if (text("裁剪视频").exists() && text("下一步").exists()) {
                    text("下一步").findOnce().click();
                    sleep(3000);
                }
                if (text("下一步").exists() && text("剪音乐").exists() && text("音量").exists() && text("音乐").exists()) {
                    text("下一步").findOnce().click();
                    sleep(5000);
                }
            }
        } else {
            //如果是图片
            for (let i = 0; i < imageLinks.length; i++) {
                className("android.view.View").clickable(true).findOnce(i).click();
                TKB.xgsrizhi("选择第" + (i + 1) + "张照片");
                sleep(3000);
            }

        }
        text("  发布  ").waitFor();
        text("  发布  ").findOnce().click();
        sleep(3000);
        TKB.xgsrizhi("发布动态成功");
    }

}

//封装的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
        default:
            return 0;
            break;
    }
}

//******************************************************************探探项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续抖音任务")
                    } else {
                        TKB.xgsrizhi("运行时间到了或者有紧急任务了")
                        TKB.qinglihh()
                        sleep(2000)
                            // java.lang.System.exit(0);
                        _THREADSSxx.interrupt()
                        if (renwux == false || aa == 1) {
                            TKB.renwuzt(sbip, user_id, yhbh, run_id)
                            renwux = TKB.huoqurw(sbip, user_id, yhbh)
                        }
                        TKB.xgsrizhi("获取到的任务3" + renwux)
                        TKB.xgsrizhi("执行任务3" + renwux[0])
                        var config_temp = renwux[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwux[1] + "-" + renwux[2] + "-" + renwux[3] + "-0-0-0-0"
                        files.write("/sdcard/meituconfig.txt", config_temp);
                        TKB.gxjiaoben(renwux[0])
                        TKB.cunqusj("jiaoben", "jiance")
                        engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwux[0] + ".js")
                        _THREADSS.interrupt()
                    }
                    ssee = (new Date()).getTime()
                }
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************


//执行探探项目
function main() {
    try {
        toastLog("执行探探任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var bb = TKB.getVerName("探探")
            if (bb != "4.0.4.2" && bb != false) {
                TKB.xgsrizhi("探探的版本不对")
                TKB.xiezai(dqbaoming)
            }
            var baom = getPackageName("探探")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("探探", "4.0.4.2")
                if (bbd == false) {
                    TKB.xgsrizhi("没安装成功探探")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()

            var dl = ttzc()
            if (dl == true) {
                if (fun == "改资料") {
                    gaizl()
                } else if (fun == "发圈养号") {
                    release_dynamic()
                }
            }
            TKB.xgsrizhi("执行完存停止数据")
            TKB.renwuzt(sbip, user_id, yhbh, run_id)
            _THREADSS.interrupt()
            sleep(1000)
                // java.lang.System.exit(0);
            var renwus = TKB.huoqurw(sbip, user_id, yhbh)
            TKB.xgsrizhi("获取到的任务2" + renwus)
            TKB.xgsrizhi("执行任务2" + renwus[0])
            var config_temp = renwus[0] + "-" + yhname + "-" + yhbh + "-" + sbip + "-" + user_id + "-" + renwus[1] + "-" + renwus[2] + "-" + renwus[3] + "-0-0-0-0"
            files.write("/sdcard/meituconfig.txt", config_temp);
            TKB.gxjiaoben(renwus[0])
            TKB.cunqusj("jiaoben", "jiance")
            engines.execScriptFile("/sdcard/Android/data/com.xiaomi.xmsf/files/perf/meitu" + renwus[0] + ".js")
            _THREADSSxx.interrupt()
        });
    } catch (error) {
        TKB.xgsrizhi(error);
        TKB.cunqusj("jiaoben", "tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}


main()