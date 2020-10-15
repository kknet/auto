log("tKB")
sleep(2000)
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
var dqbaoming = "cn.kuwo.player"   //该项目包名
var xmxh = "14"               //项目序号 版本11.0.0
var packageName = "cn.kuwo.player";
var qqb_pk = 'com.tencent.mtt'
var browseTime = 60 * 60 * 1000;//观看时间

//所有的判断或者跳过
function allJudge () {
  if (text("同意").exists()) {
    text("同意").click();
    sleep(2000);
    TKB.xgsrizhi("确认条款点击同意")
  }
  if (text("权限申请").exists() && text("确定").exists()) {
    click("确定")
    sleep(2000);
    TKB.xgsrizhi("权限申请点击确定")
  }
  while (text("始终同意").exists()) {
    click("始终同意");
    sleep(2000);
    TKB.xgsrizhi("点击始终同意")
  }
  if (text("选择完成，马上开始").exists() && id("cn.kuwo.player:id/tab_line_layout").exists()) {
    var tablines = id("cn.kuwo.player:id/tab_line_layout").find();
    for (let i = 0; i < tablines.size(); i++) {
      for (let j = 0; j < tablines[i].children().size(); j++) {
        if (random(0, 5) == 5) {
          tablines[i].child(j).click();
          sleep(1000);
        }
      }
    }
    click("选择完成，马上开始");
    sleep(2000);
    TKB.xgsrizhi("点击选择完成，马上开始")
  }
  if (text("请稍后").exists()) {
    sleep(2000);
  }
  if (id("cn.kuwo.player:id/btnCancel").exists() && text("开通会员畅听完整版").exists()) {
    id("cn.kuwo.player:id/btnCancel").click();
    TKB.xgsrizhi("点击关闭")
    sleep(2000);
  }
  if (text("我知道了").exists()) {
    click("我知道了");
    TKB.xgsrizhi("点击我知道了")
    sleep(2000);
  }
  if (text("知道了").exists()) {
    click("知道了");
    TKB.xgsrizhi("点击知道了")
    sleep(2000);
  }
  if (text("开启免流量").exists()) {
    // click("开启免流量");
    back()
    sleep(2000);
    TKB.xgsrizhi("开启免流量");
  }
  if (text("以后再说").exists()) {
    click("以后再说");
    TKB.xgsrizhi("以后再说")
    sleep(2000);
  }
  if (id("cn.kuwo.player:id/iv_business_personal_dia_close").exists()) {
    id("cn.kuwo.player:id/iv_business_personal_dia_close").click();
    TKB.xgsrizhi("点击关闭")
    sleep(2000);
  }
  if (desc("支付宝支付").exists() || text("支付宝支付").exists()) {
    back();
    TKB.xgsrizhi("点击返回")
    sleep(2000);
  }
  if (text("免流量播放").exists() && text("总是允许").exists()) {
    click("总是允许");
    TKB.xgsrizhi("点击允许流量播放")
    sleep(2000);
  }
  if (textContains("欢迎使用手机管家").exists()) {
    click("继续");
    TKB.xgsrizhi("点击使用手机管家")
    sleep(2000);
  }
}

//酷我音乐登陆注册
function login () {
  var yzmGet = 0
  var is_send = false
  var zh;
  var yzm;
  launch(packageName);
  var loginFlag = false;
  TKB.xgsrizhi("启动酷我音乐")
  sleep(5000);
  var startTime = (new Date()).getTime()
  var sz = {
    "1": [170, 1233],
    "2": [534, 1222],
    "3": [899, 1222],
    "4": [189, 1442],
    "5": [550, 1400],
    "6": [907, 1432],
    "7": [285, 1613],
    "8": [606, 1632],
    "9": [900, 1634],
    "0": [550, 1821]
  }
  while (1) {
    allJudge();
    if (id('cn.kuwo.player:id/local_root_username').exists() && id('cn.kuwo.player:id/sdv_user_head').exists()) {
      TKB.xgsrizhi('已登录账号');
      return true
    }
    if ((new Date()).getTime() - startTime > 10 * 60 * 1000) {
      TKB.xgsrizhi("时间够了退出");
      TKB.qinglihh(packageName);
      break;
    }
    if (text('点击登录').exists()) {
      TKB.xgsrizhi('点击登录')
      click('点击登录')
      sleep(2000)
    }
    if (text("登录").exists()) {
      click("登录");
      TKB.xgsrizhi('点击登录');
      sleep(2000);
    }
    if (id('cn.kuwo.player:id/et_phone').exists()) {
      if (id('cn.kuwo.player:id/et_phone').findOnce().text() != '请输入手机号') {
        TKB.xgsrizhi('清空手机号码')
        id('cn.kuwo.player:id/et_phone').findOnce().setText('')
        sleep(2000)
      }
    }
    if (id('cn.kuwo.player:id/cb_protocol').exists()) {
      if (!id('cn.kuwo.player:id/cb_protocol').findOnce().checked()) {
        id('cn.kuwo.player:id/cb_protocol').findOnce().click();
        TKB.xgsrizhi('勾选登录即同意');
        sleep(2000);
      }
    }
    if (text('手机号登录').exists() || text('手机号一键登录').exists()) {
      sleep(2000)
      TKB.xgsrizhi('点击手机号登录')
      if (loginFlag == false) {
        if (id("cn.kuwo.player:id/iv_close").exists()) {
          id("cn.kuwo.player:id/iv_close").click();
          loginFlag = true;
        }
      } else {
        if (text('手机号登录').exists()) {
          click('手机号登录')
          sleep(2000)
        }
        if (text('手机号一键登录').exists()) {
          click('手机号一键登录')
          sleep(2000)
        }
      }
    }
    if (text('请输入手机号').exists() && text('下一步').exists()) {
      TKB.xgsrizhi('获取手机号')
      zh = TKB.benjitel()
      if (zh == false || zh == undefined) {
        TKB.xgsrizhi("没有获取到手机号")
        TKB.qinglihh(dqbaoming);
        sleep(5000);
        launch(dqbaoming);
        continue;
      }
      TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
      sleep(2000)
      click('请输入手机号')
      sleep(2000)
      setText(zh)
      sleep(2000)
      if (id('cn.kuwo.player:id/et_phone').findOnce().text() != '请输入手机号') {
        click('下一步')
        sleep(2000)
        is_send = true
      }
      sleep(2000)
    }
    //出现 重新获取验证码 而非重新获取时 系统提示验证码次数超过上限 可判定为登录失败
    if (text('重新获取验证码').exists()) {
      TKB.xgsrizhi("验证码次数上限")
      TKB.qinglihh(dqbaoming);
      sleep(5000);
      return false
    }
    if (text('请输入5位验证码').exists() && is_send == true) {
      yzm = TKB.huoquyzm("酷我音乐");
      yzmGet++
      sleep(2000)
      if (yzmGet >= 3) {
        TKB.xgsrizhi("没有获取到验证码")
        TKB.qinglihh(dqbaoming);
        sleep(5000);
        return false
      }
      if (yzm == false || yzm == undefined) {
        TKB.xgsrizhi("没有获取到验证码")
        TKB.qinglihh(dqbaoming);
        sleep(5000);
        launch(dqbaoming);
        continue;
      } else {
        TKB.xgsrizhi("输入验证码")
        sleep(2000);
        id('cn.kuwo.player:id/gpv_code').click()
        sleep(4000)
        for (var i = 0; i < 5; i++) {
          var x = yzm.substr(i, 1);
          TKB.xgsrizhi(x)
          click(sz[x][0], sz[x][1]);
          sleep(1500)
          TKB.xgsrizhi('第' + (i + 1) + '次')
        }
        sleep(2000)
        is_send = false
      }
    }
    if (text('重新获取').exists()) {
      click('重新获取')
      is_send = true;
      sleep(2000)
    }
    if (textStartsWith('重新获取(').exists()) {
      sleep(8000);
      toastLog("等待重新发送");
      TKB.xgsrizhi("等待重新发送")
    }
    if (text('请设置登录密码').exists()) {
      TKB.xgsrizhi('关闭登录密码设置')
      id('cn.kuwo.player:id/iv_close').click()
      sleep(2000)
    }
  }
}
//循环播放专辑音乐
function playMusic () {
  var startTime = (new Date()).getTime()
  var urlStart = (new Date()).getTime();
  var urlInterval = random(5, 10) * 60 * 1000;
  var xs = zhid(sbip, run_id)
  var album_url = xs['专辑链接']
  setClip(album_url)
  launch(qqb_pk)
  sleep(5000);
  while (1) {
    allJudge();
    if ((new Date()).getTime() - urlStart > urlInterval) {
      urlInterval = random(5, 10) * 60 * 1000;
      urlStart = (new Date()).getTime();
      var temp = zhid(sbip, run_id);
      if (temp['专辑链接'] != album_url && temp['专辑链接'] != undefined) {
        album_url = temp['专辑链接'];
        setClip(album_url);
        launch(qqb_pk);
        sleep(5000);
        TKB.xgsrizhi("专辑发生变化 重新打开浏览器");
      } else {
        TKB.xgsrizhi("专辑没变化");
      }
    }
    if ((new Date()).getTime() - startTime > browseTime) {
      TKB.xgsrizhi("时间够了退出");
      TKB.qinglihh(packageName);
      break;
    }
    if (album_url != undefined) {
      if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists()) && !text('酷我音乐').exists()) {
        if (text('搜索或输入网址').exists()) {
          text('搜索或输入网址').findOnce().parent().click()

        } else {
          id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
        }
        TKB.xgsrizhi("点击搜索栏");
        sleep(2000)
      }
      if (id('com.tencent.mtt:id/search_frame_input_bar').exists() && !text('酷我音乐').exists()) {
        id('com.tencent.mtt:id/search_frame_input_bar').longClick()
        TKB.xgsrizhi("长按搜索栏");
        sleep(2000)
      }
      if (text('粘贴').exists()) {
        text('粘贴').findOnce().parent().click()
        TKB.xgsrizhi("点击粘贴");
        sleep(2000)
      }
      if (text('进入').exists()) {
        text('进入').findOnce().click()
        TKB.xgsrizhi("点击搜索");
        sleep(5000);
      }
      if (text('全部播放').packageName(qqb_pk).exists()) {
        text('全部播放').findOnce().click()
        TKB.xgsrizhi("点击播放跳转");
        sleep(2000)
      }
      if (text('允许打开').exists()) {
        text('允许打开').findOnce().click()
        TKB.xgsrizhi("点击允许打开");
        sleep(5000);
      }
      if (textStartsWith("全部播放").packageName(packageName).exists()) {
        id("cn.kuwo.player:id/online_music_item_layout").findOnce(0).click();
        TKB.xgsrizhi("点击第一首");
        sleep(random(15, 20) * 1000);
        allJudge();
        while (1) {
          allJudge();
          if ((new Date()).getTime() - startTime > browseTime) {
            TKB.xgsrizhi("时间够了退出");
            TKB.qinglihh(packageName);
            break;
          }
          if (id("cn.kuwo.player:id/Main_BtnNext").exists()) {
            id("cn.kuwo.player:id/Main_BtnNext").click();
            TKB.xgsrizhi("点击下一首");
            sleep(2000);
          } else {
            break;
          }
          var sleepTime = random(15, 60);
          TKB.xgsrizhi("播放时间为" + sleepTime);
          sleep(sleepTime * 1000);
        }
      }
    } else {
      toast("未获取到专辑地址")
      TKB.xgsrizhi("未获取到专辑地址");
      sleep(5000);
    }
    if (!textStartsWith("全部播放").packageName(packageName).exists()
      && !(text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
      setClip(album_url);
      TKB.xgsrizhi("页面不在酷我音乐和浏览器 重新打开浏览器");
      launch(qqb_pk);
      sleep(5000);
    }
    sleep(2000);
  }
}
//获取网址
function zhid (sbip, run_id) {
  TKB.xgsrizhi("获取指定任务的参数")
  var TS = (new Date()).getTime()
  var url = "http://" + sbip + "/api.php/potal/meitu/getrunbyrunid?&run_id=" + run_id
  var urlStart = (new Date()).getTime()
  TKB.xgsrizhi(url)
  var gf = {}
  while (true) {
    try {
      if ((new Date()).getTime() - TS > 60 * 1000) {
        TKB.xgsrizhi("获取名字超时退出")
        return false
      }
      if ((new Date()).getTime() - urlStart > 5 * 1000) {
        res = http.get(url);
        if (res.statusCode == 200) {
          var ss = res.body.json();
          TKB.xgsrizhi(ss)
          if (ss["code"] == 0) {
            var ds = ss["data"]["more"]
            TKB.xgsrizhi("获取到的参数：" + ds)
            ds = JSON.parse(ds);
            for (i = 0; i < ds.length; i++) {
              gf[ds[i]["title"]] = ds[i]["val"]
            }
            TKB.xgsrizhi(gf)
            return gf
          } else {
            toastLog("未获取到任务状态信息");
          }
        }
        urlStart = (new Date()).getTime()
      }
      sleep(2000)
    } catch (e) {
      log("出错" + e)
      sleep(3000);
    }
  }
}

//******************************************************************酷我音乐项目*****************************************************************

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
          // var renwux = false;
          var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id)   //获取紧急任务
          if (!_THREADSSxx.isAlive()) {
            TKB.xgsrizhi("子线程运行结束！");
            aa = 1
            renwux = true
          }
          if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
            TKB.xgsrizhi("继续酷我音乐任务")
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

//主函数
function main () {
  try {
    toastLog("执行酷我音乐任务")
    bofangyy()
    _THREADSSxx = threads.start(function () {
      var app_list = [['酷我音乐', '9.3.2.2'], ['QQ浏览器', '10.5.1.7230']]
      app_list.forEach(element => {
        var install_num = 10
        while (install_num) {
          var baom = getPackageName(element[0])
          if (baom != null && TKB.getVerName(element[0]) != element[1]) {
            TKB.xiezai(dqbaoming)
            install_num--
          } else if (baom == null) {
            var bbd = TKB.wdjxiazai(element[0], element[1])
            if (bbd == false) {
              TKB.xgsrizhi(element[0] + "安装失败")
              _THREADSS.interrupt()
              TKB.cunqusj("jiaoben", "tingzhi")
              java.lang.System.exit(0);
            }
          } else {
            break;
          }
        }
      });
      device.keepScreenOn(240 * 60 * 60 * 1000)
      TKB.qinglihh();
      var ifLogin = login()
      if (ifLogin) {
        playMusic()
      } else {
        TKB.xgsrizhi("登录出错");
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
main();


