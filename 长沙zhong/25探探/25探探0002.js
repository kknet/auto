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
var xmxh = "1" //项目序号 版本11.0.0

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
  if (id('com.p1.mobile.putong:id/').exists()) {
    id('com.p1.mobile.putong:id/').findOnce().click();
    TKB.xgsrizhi("关闭寻找爱情");
    sleep(1500);
  }

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
        if (random(0, 1) == 0) {
          click(720, 980);
        } else {
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

//探探养号
function ttyh() {
  TKB.xgsrizhi("探探养号")
  TKB.qinglihh()
  sleep(2000)
  launch(dqbaoming)
  var bq = ["微笑", "大笑", "哈欠", "震惊", "送心", "困", "what", "泣不成声", "小鼓掌", "大金牙", "偷笑", "石化", "思考", "吐血", "可怜", "嘘", "撇嘴", "黑线", "笑哭", "雾霾", "奸笑", "得意", "坏笑", "抓狂", "泪奔", "钱", "吻", "恐惧", "笑", "快哭了", "翻白眼", "互粉", "赞", "鼓掌", "祈祷", "kiss", "去污粉", "666", "玫瑰", "胡瓜", "啤酒", "我想静静", "委屈", "舔屏", "飞吻", "再见", "紫薇别走", "听歌", "求抱抱", "绝望的凝视", "不失礼貌的微笑", "吐舌", "呆无辜", "看", "白眼", "熊吉", "骷髅", "黑脸", "吃瓜群众", "绿帽子", "汗", "摸头", "皱眉", "擦汗", "红脸", "尬笑", "做鬼脸", "强", "如花"]

  var RT = (new Date()).getTime()
  var ssd = (new Date()).getTime() //看直播的时间
  var stt = random(60, 120)
  var TTguank = (new Date()).getTime()
  var dinz = random(30, 60)
  var dj = random(1, 100)
  var ll = 0 //直播
  var tem = 0;
  while (1) {
    if ((new Date()).getTime() - RT > stt * 60 * 1000) {
      TKB.xgsrizhi("时间够了退出")
      TKB.qinglihh()
      break
    }

    zonghe()
    sleep(1500)
    // 首页
    if (text('探探').exists() && id('com.p1.mobile.putong:id/name').exists() || text('真实头像').exists()) {
      TKB.xgsrizhi("在首页");
      var i = 0;
      var cishu = randomNum(7, 12)
      while (1) {
        i++
        if (i === cishu) {
          break;
        }

        if (text('头像未通过审核').exists() && text('更换头像').exists()) {
          zonghe();
          toastLog('第' + i + '次滑动')
          sleep(1500);
          // continue;
          break;
        }

        var suiji = randomNum(0, 1);

        if (text('关注').exists() && text('我的信息').exists()) {
          sleep(1500)
          click(500, 600);
        }
        if (suiji == 0) {
          sleep(4000)
          gesture(1000, [randomNum(500, 550), randomNum(690, 730)], [randomNum(700, 750), randomNum(730, 780)], [randomNum(830, 860), randomNum(900, 950)], [randomNum(880, 920), randomNum(980, 1020)], [randomNum(980, 1020), randomNum(1050, 1200)]);
        }
        if (suiji == 1) {
          sleep(4000)
          gesture(1000, [randomNum(500, 550), randomNum(660, 730)], [randomNum(330, 350), randomNum(700, 800)], [randomNum(200, 250), randomNum(800, 850)], [randomNum(50, 150), randomNum(850, 910)], [randomNum(10, 50), randomNum(930, 980)]);
        }

        if (text('发送消息').exists() && text('继续探索').exists()) {
          click('继续探索');
          TKB.xgsrizhi('继续探索');
          sleep(1500);
        }

        if (text('展现更多一面').exists() && text('加照片，添简介，增加配对').exists()) {
          click('继续探索');
          TKB.xgsrizhi('继续探索');
          sleep(1500);
        }

        if (text('微信支付').exists() && text('获取特权').exists()) {
          back();
          sleep(1500);
          break;
        }
      }
      zonghe();
      sleep(1500);
      // 打开直播
      while (1) {
        if (text('发现').exists() && text('我').exists() && text('探探').exists() && text('直播').exists() && text('发现').exists()) {
          var x = text('直播').findOnce().bounds().centerX();
          var y = text('直播').findOnce().bounds().centerY();
          click(x, y);
          TKB.xgsrizhi("打开直播");
          sleep(1500);
          break;
        }
        sleep(1500)
      }
    }


    // 主播
    if (text('推荐').exists() && text('附近').exists() && text('开播').exists()) {

      while (1) {
        var par = className('androidx.recyclerview.widget.RecyclerView').findOnce().children();
        sleep(1500);
        TKB.xgsrizhi("进入直播页面")

        if (par) {
          TKB.xgsrizhi("par")
          break;
        }
      }

      var len = randomNum(3, 4)
      var date = randomNum(2, 5)
      for (var i = 0; i < len; i++) {
        var TSD = (new Date()).getTime()
        if (par[i].className() === 'android.widget.FrameLayout') {
          var x = par[i].bounds().centerX();
          var y = par[i].bounds().centerY();
          click(x, y);
          TKB.xgsrizhi("开始看直播")
          while (1) {
            if ((new Date()).getTime() - TSD > date * 6 * 1000) {
              break;
            }
            if (text('直播结束').exists()) {
              i++;
              back();
              TKB.xgsrizhi("直播结束");
              sleep(1500);

            }
            zonghe();
          }
          back();
          zonghe();
          sleep(5000);
        }
        zonghe()
      }
      zonghe()
      TKB.xgsrizhi("直播");
      sleep(1500);
      while (1) {
        if (text('发现').exists() && text('我').exists() && text('探探').exists() && text('直播').exists() && text('发现').exists()) {
          var x = text('消息').findOnce().bounds().centerX();
          var y = text('消息').findOnce().bounds().centerY();
          click(x, y);
          TKB.xgsrizhi("打开消息");
          sleep(1500);
          break;
        }
        sleep(1500)
      }

      // 打开消息

    }

    /// 消息
    if (text('我的探探').exists() && text('所有配对').exists() && text('聊天').exists()) {
      TKB.xgsrizhi("消息");
      toastLog('进入消息页面')
      sleep(1500);
      var par = className('android.view.ViewGroup').depth(13).findOnce().children()[0].children();
      TKB.xgsrizhi('找到父级控件')
      sleep(5000)
      toastLog(par.size())
      TKB.xgsrizhi(par.size())
      zonghe();
      sleep(1500)
      var newdate = new Date().getTime()
      for (var i = 2; i < par.size() - 1; i++) {

        TKB.xgsrizhi('开始遍历')

        var xx = randomNum(0, 68)
        par[i].click();
        TKB.xgsrizhi('打开详情页');
        sleep(1500);
        while (1) {
          if (className('android.widget.EditText').bounds(312, 1802, 888, 1895).exists()) {
            className('android.widget.EditText').bounds(312, 1802, 888, 1895).findOnce().setText(bq[xx]);
            sleep(1500)
          }
          if (text('发送').exists()) {
            click('发送');
            sleep(1500)
          }

          if (text('回车键发送消息').exists() && text('立即开启').exists() && text('暂不').exists()) {
            var x = text('暂不').findOnce().bounds().centerX();
            var y = text('暂不').findOnce().bounds().centerY();
            click(x, y);
            sleep(1500);
          }

          if (text(bq[xx]).exists()) {
            back();
            sleep(1500);
            break
          }

          if (new Date().getTime() - newdate > 1 * 60 * 1000) {
            break;
            sleep(1500)
          }
          zonghe();
        }
        zonghe();
      }
      // 打开消息


      while (1) {
        if (text('发现').exists() && text('我').exists() && text('探探').exists() && text('直播').exists() && text('发现').exists()) {
          var x = text('发现').findOnce().bounds().centerX();
          var y = text('发现').findOnce().bounds().centerY();
          click(x, y);
          TKB.xgsrizhi("打开发现");
          sleep(1500);
          break;
        }
        sleep(1500)
      }

    }

    // 发现
    if (text('关注').exists() && text('附近').exists()) {
      // TKB.xgsrizhi("发现");
      var i = 0;
      var cishu = randomNum(3, 5);
      while (1) {
        i++;
        zonghe()
        var xiahua = randomNum(3, 5)
        for (var j = 0; j < xiahua; j++) {
          swipe(500, 1300, 500, 222, 500)
          sleep(3000)

          var par_par = className('android.view.ViewGroup').bounds(0, 240, 1080, 1771).findOnce();
          par_par.children().forEach((item) => {
            if (item.className() === 'androidx.recyclerview.widget.RecyclerView') {
              return par = item.children();
            }
          })
          if (par) {
            var children = par[3].children();
          }
          if (children) {
            TKB.xgsrizhi(children[0].className())
            if (children[0].className() == 'android.view.View') {
              var children_1 = false; // ?
            } else {
              var children_1 = children[0].children();
            }
          }

          if (children_1) {
            if (children_1[0].className() == 'android.widget.RelativeLayout') {
              var children_2 = false //////////
            } else {
              var children_2 = children_1[0].children(); //////////
            }
          }
          if (children_2) {
            var children_3 = children_2[1].children();
          }

          if (children_3) {

            var children_4_1 = children_3[0]; // 点赞

            var children_4_2 = children_3[1]; // 评论
          }


          if (children_4_1) {
            if (!text('直播中').exists()) {
              children_4_1.click();
              sleep(2000)
            }
          }
        }
        if (i === cishu) {
          break;
        }
      }

      sleep(1500);

      // 打开我的


      while (1) {
        if (text('发现').exists() && text('我').exists() && text('探探').exists() && text('直播').exists() && text('发现').exists()) {
          var x = text('我').findOnce().bounds().centerX();
          var y = text('我').findOnce().bounds().centerY();
          click(x, y);
          sleep(50)
          click(x, y);
          TKB.xgsrizhi("打开我");
          sleep(1500);
          break;
        }
        sleep(1500)
      }

    }


    // 我的
    if (text('相册').exists() && text('粉丝').exists() && text('粉丝').exists()) {
      var arr = ['钱包', '设置', '匿名暗恋表白']
      for (var i = 0; i < arr.length; i++) {
        zonghe()
        sleep(1500)
        zonghe()
        swipe(500, 1500, 500, 200, 500);
        sleep(2000);
        var x = textEndsWith(arr[i]).findOnce().bounds().centerX();
        var y = textEndsWith(arr[i]).findOnce().bounds().centerY();
        click(x, y);
        sleep(1500)
        zonghe()
        back();
        sleep(2000)


      }
      TKB.xgsrizhi("我");
      sleep(1500);
      // return true;
      // while (1) {
      //     if (text('发现').exists() && text('我').exists() && text('探探').exists() && text('直播').exists() && text('发现').exists()) {
      //         var x = text('探探').findOnce().bounds().centerX();
      //         var y = text('探探').findOnce().bounds().centerY();
      //         click(x, y);
      //         TKB.xgsrizhi("探探");
      //         sleep(1500);
      //         break;
      //     }
      //     sleep(1500)
      // }

      while (1) {
        toastLog('养号结束')
        sleep(4000)
      }


    }
    zonghe();
  }
}

//改资料
function gaizl() {
  TKB.xgsrizhi("改资料")
  launch(dqbaoming)
  var TSD = (new Date()).getTime()
  var RT = (new Date()).getTime()
  var stt = random(10, 20)
  var tep = 0 //判断编辑资料界面该干啥
  var name = "小七"
  var jianjie = "你们在干嘛呢"
  var xb = 0
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
    if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.p1.mobile.putong:id/e9r").exists() && text("推荐").exists() || (id("com.p1.mobile.putong:id/e9r").exists() && id("com.p1.mobile.putong:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
      TKB.xgsrizhi("首页")
      click(980, 1850)
      sleep(2000)
      if (text("编辑资料").exists()) {
        TKB.xgsrizhi("编辑资料")
        click("编辑资料")
        sleep(2000)
      }
    }
    if (text("编辑个人资料").exists() && text("抖音号").exists() || text("编辑个人资料").exists() && text("名字").exists()) {
      TKB.xgsrizhi("编辑资料界面")
      if (tep == 0) {
        TKB.xgsrizhi("修改名字")
        click("名字")
        sleep(1500)
      } else {
        if (tep == 1) {
          TKB.xgsrizhi("修改简介")
          click("简介")
          sleep(1500)
        } else {
          if (tep == 2) {
            TKB.xgsrizhi("修改性别")
            click("性别")
            sleep(1500)
          } else {
            if (tep == 3) {
              TKB.xgsrizhi("更改头像")
              click(540, 440)
              sleep(1500)
            } else {
              TKB.xgsrizhi("执行完了退出")
              back()
              sleep(2000)
              return true
            }
          }
        }
      }
    }
    if (text("修改名字").exists() && text("我的名字").exists() || text("修改名字").exists() && text("保存").exists()) {
      TKB.xgsrizhi("修改名字")
      if (id(name).exists()) {
        TKB.xgsrizhi("已经是该名字了")
        click("保存")
        sleep(500)
        back()
        sleep(2000)
      } else {
        setText(name)
        click("保存")
        sleep(1000)
      }
      tep = 1
    }
    if (text("修改简介").exists() && text("个人简介").exists() || text("修改简介").exists() && text("保存").exists()) {
      TKB.xgsrizhi("修改名字")
      if (id(jianjie).exists()) {
        TKB.xgsrizhi("已经是该简介了")
        click("保存")
        sleep(500)
        back()
        sleep(2000)
      } else {
        setText(jianjie)
        click("保存")
        sleep(1000)
      }
      tep = 2
    }
    if (text("男").exists() && text("女").exists()) {
      TKB.xgsrizhi("修改性别")
      if (xb == 0) {
        click("男")
        sleep(1000)
      } else {
        click("女")
        sleep(1000)
      }
      tep = 3
    }
    if (text("相册选择").exists() && text("取消").exists() || text("拍一张").exists() && text("相册选择").exists()) {
      TKB.xgsrizhi("相册选择")
      click("相册选择")
      sleep(1000)
    }
    if (text("全部").exists() && text("预览").exists() || text("确定").exists() && id("com.p1.mobile.putong:id/e9r").exists()) {
      TKB.xgsrizhi("选择照片")
      click(270, 320) //选择第一张
      sleep(1000)
      click(950, 1820) //确定
      sleep(2000)
    }
    if (text("完成").exists() && text("裁剪").exists() || text("裁剪").exists() && text("取消").exists()) {
      TKB.xgsrizhi("裁剪")
      click(960, 1710) //确定
      sleep(400)
      click("完成")
      sleep(1000)
      tep = 4
    }


    zonghe()
  }
}

//发布视频
function fabusp() {
  TKB.xgsrizhi("发布视频")
  launch(dqbaoming)
  var TSD = (new Date()).getTime()
  var RT = (new Date()).getTime()
  var stt = random(10, 20)
  var biaoti = "在干嘛呢" //视频标题
  var zpsl = 0 //现在的作品数量
  var ylsl = 0 //原来的作品数量
  var fb = 0 //判断发布成功
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
    if (text("关注").exists() && text("消息").exists() && text("我").exists() || id("com.p1.mobile.putong:id/e9r").exists() && text("推荐").exists() || (id("com.p1.mobile.putong:id/e9r").exists() && id("com.p1.mobile.putong:id/a7m").exists()) || (text("同城").exists() && text("消息").exists() && text("我").exists()) || (text("首页").exists() && text("消息").exists() && text("我").exists())) {
      TKB.xgsrizhi("首页")
      click(980, 1850)
      sleep(2000)
      if (text("编辑资料").exists()) {
        TKB.xgsrizhi("编辑资料")
        var ss = TKB.getAllTexts()
        try {
          for (j = 0, len = ss.length; j < len; j++) {
            if (ss[j].indexOf("作品 ") != -1) {
              TKB.xgsrizhi(ss[j])
              var st = ss[j].split("品 ")
              zpsl = st[1]
              TKB.xgsrizhi("作品数量：" + zpsl)
              if (fb == 0) {
                ylsl = zpsl
                click(541, 1830) //点击加号
                sleep(2000)
              }
              if (zpsl > ylsl) {
                TKB.xgsrizhi("现在的作品数量大于原来的")
                return true
              }
            }
          }
        } catch (error) {
          sleep(1001)
          TKB.xgsrizhi(error);
        }
      }
    }
    if (text("上传").exists() && text("选择音乐").exists() || text("上传").exists() && text("滤镜").exists()) {
      TKB.xgsrizhi("上传视频界面")
      click("上传")
      sleep(2000)
    }
    if (text("视频").exists() && text("下一步").exists() || text("视频").exists() && id("com.p1.mobile.putong:id/jl").exists() || text("多段视频").exists() && text("视频").exists()) {
      TKB.xgsrizhi("上传视频界面")
      try {
        node = text("视频").findOnce().bounds();
        click(node.centerX(), node.centerY());
        sleep(1200)
      } catch (error) {
        sleep(1001)
        TKB.xgsrizhi(error);
      }
      if (id("com.p1.mobile.putong:id/but").exists() || id("com.p1.mobile.putong:id/d3g").exists()) {

      } else {
        toastLog("没有视频")
      }
      click(220, 420) //点击第一个视频
      sleep(1000)
      click(910, 1820) //点击第一个视频
      sleep(100)
      click("下一步")
      sleep(3000)
    } else {
      if (text("下一步").exists()) {
        TKB.xgsrizhi("下一步")
        click("下一步")
        sleep(3000)
      }
    }
    if (text("发布").exists() && text("返回编辑").exists() || text("发布").exists() && text("草稿").exists()) {
      TKB.xgsrizhi("发布")
      setText(biaoti)
      sleep(500)
      click("发布")
      sleep(3000)
      fb = 1
    }
    if (text("同步到今日头条").exists()) {
      TKB.xgsrizhi("同步到今日头条")
      if (fb != 0) {
        TKB.xgsrizhi("发布成功")
        click(530, 1530)
        sleep(3000)
        return true
      } else {
        TKB.xgsrizhi("还没发布")
        click(530, 1530)
        sleep(3000)
      }
    }

    if (id("com.p1.mobile.putong:id/a91").exists() && fb != 0) {
      TKB.xgsrizhi("对比标题")
      try {
        var dd = id("com.p1.mobile.putong:id/a91").findOnce().text()
        if (dd == biaoti) {
          TKB.xgsrizhi("看到我发布视频的标题了")
          return true
        }
      } catch (error) {
        sleep(1001)
        TKB.xgsrizhi(error);
      }
    }
    if (text("本地草稿箱").exists() && text("选择").exists()) {
      TKB.xgsrizhi("本地草稿箱")
      click("选择")
      sleep(1000)
    }
    if (id("com.p1.mobile.putong:id/a1c").exists() && text("取消").exists()) {
      TKB.xgsrizhi("删除本地草稿箱")
      try {
        var ss = id("com.p1.mobile.putong:id/a1c").findOnce().checked();
        if (ss == false) {
          var node = id("com.p1.mobile.putong:id/a1c").findOnce().bounds();
          click(node.centerX(), node.centerY());
          sleep(1200)
          click(500, 1840)
          sleep(2000)
        }
      } catch (error) {
        sleep(1001)
        TKB.xgsrizhi(error);
      }
      sleep(3000)
    }
    if (text("删除").exists() && text("取消").exists()) {
      TKB.xgsrizhi("删除")
      click("删除")
      sleep(2000)
    }
    zonghe()
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


//******************************************************************抖音项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
  _THREADSS = threads.start(function () {
    TKB.xgsrizhi("去播放音乐")
    var sstt = 0
    var ssee = (new Date()).getTime() - 50 * 1000
    var TJH = (new Date()).getTime()
    var yunxing = (new Date()).getTime() //运行的时间
    TKB.cunqusj("jiaoben", "1")
    var aa = 1
    while (1) {
      try {
        if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
          TKB.xgsrizhi("激活设备")
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
            TKB.xgsrizhi("继续探探任务")
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


//执行美图项目
function dyzhixing() {
  try {
    toastLog("执行探探任务")
    bofangyy()
    _THREADSSxx = threads.start(function () {
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
        // TKB.xgsrizhi(1);
        // ttyh()
      }
      // dyyh()
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



dyzhixing()



//fabusp()