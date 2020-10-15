log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
  alert("请求截图权限失败！");
  exit();
}

var TKB = require('/sdcard/tkb2.js')

var sbxx = files.read("/sdcard/meituconfig.txt")   //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3]        //服务器ip
var yhname = sbxx_table[1]    //服务器用户名
var yhbh = sbxx_table[2]      //手机编号  weixinflag
var user_id = sbxx_table[4]    //跟服务器对接用到的
var run_id = sbxx_table[5]     //任务对应的服务器上的id
var run_time = sbxx_table[6]    //该任务运行的时间
var fun = sbxx_table[7]         //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.kuaishou.nebula"   //该项目包名
var xmxh = "25"               //项目序号 版本11.0.0
var i = 0

//******************************************************************快手项目*****************************************************************

//快手登录上传信息
function kszc () {
  TKB.xgsrizhi("快手极速版注册")
  TKB.killapp("快手极速版") // 先结束进程
  launch("com.kuaishou.nebula") // 重新打开快手
  sleep(5000)
  var TSD = (new Date()).getTime()
  var RT = (new Date()).getTime()
  var zh = '1';
  var yzm = '0000';
  var bb = 0;
  var tem = 0;
  var cc = 0
  var checked = 0
  var y = 1
  var z = 1
  var x = 1
  let login = 0
  let count = 0
  popup();
  while (1) {

    // 判断用户有没有登录
    if (id("com.kuaishou.nebula:id/login_text").exists() && id('com.kuaishou.nebula:id/action_bar_left_logo').exists() && z == 1) {
      id("com.kuaishou.nebula:id/login_text").findOnce().click()
      toastLog('开始登录')
      sleep(3500)
      z = 0
    }


    // 用户没有登录开始用手机号码登录
    if (text('手机号登录').exists() && id('com.kuaishou.nebula:id/full_screen_login_logo') && login == 0) {
      toastLog('开始手机登录');
      text('手机号登录').findOnce().parent().click();
      sleep(4500);
      login = 1
    }

    // 勾选同意按钮
    if (id('com.kuaishou.nebula:id/protocol_checkbox').exists() && x == 1) {
      id('com.kuaishou.nebula:id/protocol_checkbox').findOnce().click();
      sleep(3000);
      x = 0
    }

    // 直接本机登录
    if (text('本机一键登录').exists() || text('其他登录方式').exists()) {
      toastLog('本机一键登录')
      click('本机一键登录');
      sleep(3000)
    }

    if (text('其他登录方式').exists()) {
      click('其他登录方式');
      toast('其他登录方式');
      sleep(1500)
    }

    if (text('未注册的手机号登录成功后将自动注册').exists() && text('+86').exists() && text('密码登录') && cc == 0) {
      TKB.xgsrizhi("去获取号码")
      toast('获取手机号');
      zh = TKB.benjitel()
      tem = 1;
      sleep(2500)
      cc = 1
    }

    // 获取手机号码 并输入  只执行一次
    if (id('com.kuaishou.nebula:id/phone_et').exists() && bb == 0) {
      TKB.xgsrizhi("输入账号" + zh)
      const ipt = id('com.kuaishou.nebula:id/phone_et').findOne()
      ipt.setText('');
      sleep(1000)
      text('请输入手机号').setText(zh)
      sleep(3000)
      TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
      bb = 1
    }

    // 点击获取验证码按钮
    if (text('获取验证码').exists() && count !== 2) {
      text('获取验证码').findOne().click();
      count++
      do {
        sleep(1000)
      } while (textContains('重新发送').exists() == false)
    }


    if (text('重新发送').exists() && count !== 2) {
      text('重新发送').findOne().click();
      count++
      do {
        sleep(1000)
      } while (textContains('重新发送').exists() == false)
    }

    // 输入验证码
    if (textContains('重新发送').exists()) {
      sleep(5000)
      TKB.xgsrizhi("输入验证码界面")
      yzm = TKB.huoquyzm("快手科技")
      const btn = id('com.kuaishou.nebula:id/captcha_code_et').findOne();
      if (yzm == false) {
        toast('获取验证码失败')
      } else {
        btn.setText('')
        sleep(2000)
        btn.setText(yzm)
        sleep(2500)
        y++
        toastLog('第' + y + '次尝试验证码输入')
        // 判断登录是有没有转圈圈
        zhuanquan()
      }

      // 加入验证码输入错误，重新在来获取验证码输入
      if (text('验证码错误').exists()) {
        TKB.xgsrizhi("输入验证码界面")
        toastLog('开始重新获取验证码')
        yzm = TKB.huoquyzm("快手科技")
        y++
        toastLog('第' + y + '次尝试验证码输入')
        btn.setText('')
        sleep(2000)
        btn.setText(yzm)
        sleep(2500)
        // 判断登录是有没有转圈圈
        zhuanquan()
      }

      // 登录的延迟
      if (text('请检查下网络连接是否正常').exists()) {
        toastLog('请检查下网络连接是否正常');
        sleep(3000)
      }
    }

    // 判断登录成功没
    if (id("com.kuaishou.nebula:id/login_text").exists() == false) {
      var img2 = captureScreen();
      var color3 = colors.toString(images.pixel(img2, 590, 188))
      var color4 = colors.toString(images.pixel(img2, 62, 117))
      if (color3 == '#ffffffff' && color4 == '#ffff5000') {
        TKB.xgsrizhi("登录成功")
        toastLog('登录成功')
        sleep(1500)
        return true;
      }
    }

    // 获取6次验证码错误后重新执行快手任务
    if (y === 15) {
      toastLog('没有获取到正确的验证码重新执行快手任务');
      sleep(5000)
      kszc();
    }
    // 弹窗
    popup();
  }
}

// 开始刷
function Refresh () {
  var newtime = Date.parse(new Date()) / 1000
  do {
    popup()
    var endtime = Date.parse(new Date()) / 1000
    i++
    let ran = randomNum(20, 30);

    if (i == 5) {
      const money = jindan()
      sleep(3000)
      back();
      toastLog(money)
      log('i=5上传金额')
      TKB.upjine(sbip, user_id, yhbh, app_id, money)
      sleep(3000)
    }
    // 每隔n次点一个赞
    let good = randomNum(10, 15)
    if ((i % good) === 0) {
      click(1000, 1340);
      sleep(1000)
    }

    // 等待 ran时间刷新
    let ranx1 = randomNum(300, 650)
    let ranx2 = randomNum(300, 650)
    let rany1 = randomNum(1500, 1700)
    let rany2 = randomNum(300, 400)
    let randomtime = randomNum(600, 1000)
    // 随机下拉
    toastLog('当前需要观看' + ran + '秒')
    sleep(ran * 1000);
    gesture(randomtime, [ranx1, rany1], [ranx2, rany2]);

  }
  while ((endtime - newtime) < 7200) {
    return
  }
}



// 弹窗
function popup () {
  if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
    click('同意并继续')
    sleep(2000)
  }

  if (text('禁止').exists() && text('始终允许').exists()) {
    click('始终允许')
    sleep(2000)
  }

  if (text('阅读完整版《隐私权保护政策》').exists() && text('用户隐私政策').exists()) {
    click('同意并继续')
    sleep(2000)
  }

  if (text('恭喜收到现金红包').exists() && text('当天可提现').exists()) {
    id('com.kuaishou.nebula:id/close').findOnce().click()
    sleep(2000)
  }

  var img = captureScreen();
  var color = colors.toString(images.pixel(img, 200, 500))
  var color2 = colors.toString(images.pixel(img, 200, 1400))
  var color3 = colors.toString(images.pixel(img, 800, 500))
  var color4 = colors.toString(images.pixel(img, 800, 1400))
  if (color == '#fff2473f' && color2 == '#ffe61729' && color3 == '#ffe62629' && color4 == '#ffda0b1a') {
    toastLog('找到红包')
    click(120, 400);
    sleep(2500)
  }

  if (text('温馨提示').exists() && text('不同意').exists() && text('同意并继续').exists()) {
    click('同意并继续')
    sleep(2000)
  }

  if (text('完善资料').exists() && text('填写个人资料更容易获得关注').exists() && text('跳过').exists()) {
    click('跳过')
    sleep(1500)
  }
  if (text('通讯录').exists() && text('跳过').exists() && text('看看通讯录中谁在玩快手').exists()) {
    click('跳过')
    sleep(1500)
  }


  if (id('com.kuaishou.nebula:id/comment_header').exists() || id('com.kuaishou.nebula:id/panel_background').exists() || id('com.kuaishou.nebula:id/menu_layout_container').exists()) {
    click(980, 350)
    sleep(1000)
  }

  if (id('com.kuaishou.nebula:id/close').exists()) {
    console.log(id('com.kuaishou.nebula:id/close').findOne());
    id('com.kuaishou.nebula:id/close').findOne().click()
    sleep(1000)
  }

  // 弹窗
  if (text('我知道了').exists()) {
    text('我知道了').findOne().click()
  }

  if (text('网络连接失败，请稍后重试').exists()) {
    click('点击重试')
    toastLog('检查网络')
    sleep(3000)
  }
  // // 一不小心点开了金丹
  // if (text('活动规则').exists() || text('现金收益').exists() || text('金币收益').exists()) {
  //   back();
  //   sleep(1000)
  // }

  if (text('拖动滑块').exists() && desc('向右拖动滑块填充拼图').exists()) {
    for (let i = 1; i < 1000000; i++) {
      if (text('拖动滑块').exists() == false && desc('向右拖动滑块填充拼图').exists() == false) {
        i = 100000000
      }
      toastLog("等待人为操作")
      sleep(3500)
    }
    sleep(2000)
  }

  if (text('设置青少年模式').exists() && text('为呵护未成年人健康成长，快手特别推出青少年模式，该模式下部分功能无法正常使用。请监护人主动选择，并设置监护密码。').exists() && text('我知道了').exists()) {
    text('我知道了').findOnce().click()
    sleep(4000)
  }

  if (text('现在就开始拍摄').exists() && text('开启以下权限，记录和分享美好生活').exists() && text('开启相机').exists() && text('开启录音').exists()) {
    back();
    sleep(4000)
  }

  if (desc('微信').exists() && desc('面对面邀请').exists() && desc('QQ') && desc("复制链接").exists()) {
    back();
    sleep(1500)
  }


  if (desc('166签到可领').exists() && desc('3662天').exists() && desc('6666天').exists()) {
    click(140, 340);
    sleep(1000);
  }

  if (text("稍后").exists() && text("去打开").exists()) {
    TKB.xgsrizhi("稍后")
    click("稍后")
    sleep(2000)
  }
  if (text("个人信息保护指引").exists() && text("好的").exists()) {
    TKB.xgsrizhi("个人信息保护指引")
    click("好的")
    sleep(2000)
  }
  if (text("始终同意").exists() && text("拒绝").exists()) {
    TKB.xgsrizhi("始终同意")
    click("始终同意")
    sleep(2000)
  }
  if (text("五星好评").exists() && text("取消").exists()) {
    log("五星好评")
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

  if (textContains("同步到今日头条").exists()) {
    click(543, 1542);
    TKB.xgsrizhi("同步到今日头条");
    sleep(1200)
  }

  if (textContains("没有响应").exists()) {
    click("等待");
    TKB.xgsrizhi("等待");
    sleep(1200)
  }
  if (text("五星好评").exists()) {
    click("取消");
    TKB.xgsrizhi("取消");
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
  if (text("继续播放").exists()) {
    TKB.xgsrizhi("继续播放")
    try {
      node = text("继续播放").findOnce().bounds();
      click(node.centerX(), node.centerY());
      sleep(1200)
    } catch (error) {
      sleep(1001)
      TKB.xgsrizhi(error);
    }
  }
  if (text("立即赠送").exists()) {
    TKB.xgsrizhi("立即赠送")
    back()
    sleep(1000)
  }
  if (text("允许").exists()) {
    click("允许");
    TKB.xgsrizhi("允许");
    sleep(1200)
  }
  if (text("滑动查看更多").exists()) {
    TKB.xgsrizhi("滑动查看更多")
    swipe(500, 1600, 600, 400, 1200);
    sleep(2000)
  }
  if (text("上滑查看更多视频").exists()) {
    TKB.xgsrizhi("上滑查看更多视频")
    swipe(500, 1600, 600, 400, 1200);
    sleep(2000)
  }
  if (id("com.ss.android.ugc.aweme:id/xd").exists() && text("好友推荐").exists()) {
    TKB.xgsrizhi("好友推荐")
    click(910, 430)
    sleep(1200)
  }
  toast('结束popup')
}


// 金蛋的金额
function jindan () {
  sleep(5000)
  const redbao = id('com.kuaishou.nebula:id/circular_progress_bar').findOne().bounds()
  click(redbao.centerX(), redbao.centerY());
  sleep(2500)
  while (1) {
    if (text('请检查网络连接是否正常').exists()) {
      click('重试');
      sleep(3000);
      toastLog('加载网络')
    }
    if (text('重试').exists()) {
      click('重试')
    }
    if (desc('哎呀，页面出错啦~').exists()) {
      // click('重试');
      click(500, 700)
      sleep(3000);
      toastLog('加载网络')
    }

    if (desc('面对面邀请').exists() && desc('QQ') && desc("复制链接").exists()) {
      // popup();
      if (desc('现金收益').exists() && desc('金币收益').exists()) {
        money = desc('现金收益').findOnce().parent().child(0).desc();
        return money
        // log(desc('金币收益').findOnce().parent().child(0).desc())
      }
    }
  }
}



//封装的随机数
function randomNum (minNum, maxNum) {
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

// 判断登录按钮有没有转圈圈
function zhuanquan () {
  if (id('com.kuaishou.nebula:id/confirm_progress_bar').exists()) {
    for (let a = 0; a < 1000; a++) {
      if (id('com.kuaishou.nebula:id/confirm_progress_bar').exists()) {
        // log('我出来了')
        toastLog('登录加载中');
        break;
      }
      sleep(3500)
    }
  }

}

//*******************************************************对接服务器*****************************************************************

function bofangyy () {
  _THREADSS = threads.start(function () {
    TKB.xgsrizhi("去播放音乐")
    var sstt = 0
    var ssee = (new Date()).getTime() - 50 * 1000
    var TJH = (new Date()).getTime()
    var yunxing = (new Date()).getTime()    //运行的时间
    TKB.cunqusj("jiaoben", "1")
    var aa = 1
    while (1) {
      try {
        if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
          log("激活设备")
          TKB.xjihuoxt(sbip, user_id, yhbh)
          TJH = (new Date()).getTime()
        }
        if ((new Date()).getTime() - ssee > 60 * 1000) {
          aa = aa + 1
          TKB.cunqusj("jiaoben", aa)
          var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id)   //获取紧急任务
          if (!_THREADSSxx.isAlive()) {
            TKB.xgsrizhi("子线程运行结束！");
            aa = 1
            renwux = true
          }
          if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
            TKB.xgsrizhi("继续快手任务")
          } else {
            TKB.xgsrizhi("运行时间到了或者有紧急任务了")
            TKB.qinglihh()
            sleep(2000)
            // java.lang.System.exit(0);
            _THREADSSxx.interrupt()

            if (renwux == false || aa == 1) {
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
          if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
            sleep(5000)
          }
          ssee = (new Date()).getTime()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.01);
        TKB.xgsrizhi("我还在播放音乐")
        sleep(media.getMusicDuration());
      } catch (error) {
        toastLog(error);
        sleep(random(3000, 8000))
      }
    }
  });
}

//*******************************************************新服务器*********************************************************************

//执行快手极速版项目

function dyzhixing () {
  try {
    toastLog("执行快手任务")
    bofangyy()
    _THREADSSxx = threads.start(function () {
      var baom = getPackageName("快手极速版")
      if (baom == null) {
        var bbd = TKB.wdjxiazai("快手极速版", "2.4.1.283")
        if (bbd == false) {
          TKB.xgsrizhi("没安装成功快手极速版")
          _THREADSS.interrupt()
          TKB.cunqusj("jiaoben", "tingzhi")
          java.lang.System.exit(0);
        }
      }
      device.keepScreenOn(240 * 60 * 60 * 1000)
      TKB.qinglihh()

      var dl = kszc()
      toast(dl)
      sleep(2000)
      if (dl == true) {
        toast('开始刷')
        Refresh()
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
    log(error);
    TKB.cunqusj("jiaoben", "tingzhi")
    //files.write("/sdcard/jiaoben.txt", "tingzhi");
    java.lang.System.exit(0);
    sleep(random(1000, 2000))
  }
}



dyzhixing()






