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
  if (id("cn.kuwo.player:id/btnCancel").exists() && (text("开通会员畅听完整版").exists() || text("开通免流量").exists())) {
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
  if (text("开启位置信息开关").exists()) {
    click("取消");
    sleep(2000);
    TKB.xgsrizhi("点击取消位置信息开启");
  }
  if (text("添加").exists() && desc('关闭').exists()) {
    desc("关闭").findOnce().click();
    sleep(2000);
    TKB.xgsrizhi("点击关闭添加");
  }
  if (desc("返回").exists() && desc("立即开通").exists()) {
    desc("返回").findOnce().click();
    sleep(2000);
    TKB.xgsrizhi("点击关闭立即开通");
  }
  if (textStartsWith("开通会员").exists() && text("关闭").exists()) {
    click("关闭");
    sleep(2000);
    TKB.xgsrizhi("点击关闭");
  }
  if (id("android:id/content").packageName(qqb_pk).exists()) {
    TKB.xgsrizhi("遇到弹窗");
    sleep(5000);
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
    try {
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
    } catch (error) {
      TKB.xgsrizhi(error)
    }

  }
}
//从后台获取专辑
function getAlbum (xs) {
  var album_urls = [];
  for (let num = 1; num <= 4; num++) {
    if (xs['专辑链接' + num] == 0 || xs['专辑链接' + num] == '0') {
      TKB.xgsrizhi("未获取到专辑链接" + num);
    } else {
      if (xs['播放歌数' + num] == 0 || xs['播放歌数' + num] == '0') {
        TKB.xgsrizhi("未获取到播放歌数" + num);
        album_urls.push([xs['专辑链接' + num], random(10, 20)])
      } else {
        TKB.xgsrizhi("获取到链接和播放歌数" + "," + xs['专辑链接' + num] + "," + xs['播放歌数' + num])
        album_urls.push([xs['专辑链接' + num], Number(xs['播放歌数' + num])])
      }
    }
  }
  return album_urls;
}
//循环播放专辑音乐
function playMusic () {
  var urlStart = (new Date()).getTime(); //获取url的时间
  var urlInterval = random(30, 40) * 60 * 1000;//获取url的间隔
  var albumFlag = true;//判断在播专辑是否改变
  var urlFlag = false;//判断专辑列表是否改变
  xs = zhid(sbip, run_id)
  var albums = getAlbum(xs);
  for (let i = 0; i < albums.length; i++) {
    log(albums[i][1] + "," + albums[i][0]);
  }
  var playTime;
  //获取单首播放时间
  if (xs['单首歌曲播放时间'] == '0' || xs['单首歌曲播放时间'] == 0) {
    TKB.xgsrizhi("未获取歌曲播放时间");
    playTime = random(10, 60);
  } else {
    TKB.xgsrizhi("获取歌曲播放时间" + xs['单首歌曲播放时间']);
    playTime = xs['单首歌曲播放时间'];
  }
  while (true) {
    var i;
    for (i = 0; i < albums.length; i++) {
      if (urlFlag) {
        TKB.xgsrizhi("专辑发生了变化")
        urlFlag = false;
        break;
      }

      var album_url = albums[i][0];//专辑地址
      var songCount = albums[i][1];//剩余歌曲数量
      TKB.xgsrizhi("开始播放第" + i + "张专辑")
      TKB.xgsrizhi("获取专辑为" + album_url + "," + "获取歌曲播放数" + songCount);
      setClip(album_url)
      launch(qqb_pk)
      sleep(20000);
      albumFlag = true;
      while (songCount > 0) {
        try {
          //从后台获取专辑 看是否有变化
          if ((new Date()).getTime() - urlStart > urlInterval) {
            urlInterval = random(30, 40) * 60 * 1000;
            urlStart = (new Date()).getTime();
            var xs = zhid(sbip, run_id);
            var temp = getAlbum(xs);
            for (let i = 0; i < albums.length; i++) {
              log(albums[i][1] + "," + albums[i][0]);
            }
            if (xs['单首歌曲播放时间'] == '0' || xs['单首歌曲播放时间'] == 0) {
              TKB.xgsrizhi("未获取歌曲播放时间");
              playTime = random(10, 60);
            } else {
              TKB.xgsrizhi("获取歌曲播放时间" + xs['单首歌曲播放时间']);
              playTime = xs['单首歌曲播放时间'];
            }
            if (temp.toString() != albums.toString() && temp != undefined) {
              albums = temp;
              urlFlag = true;
              albumFlag = true;
              break;
            } else {
              TKB.xgsrizhi("专辑没变化");
            }
          }
          if (album_url != undefined) {
            //根据链接在浏览器中进行跳转
            if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
              if (text('搜索或输入网址').exists()) {
                text('搜索或输入网址').findOnce().parent().click()
              } else {
                id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
              }
              TKB.xgsrizhi("点击搜索栏");
              sleep(3000)
            }
            allJudge()
            if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
              id('com.tencent.mtt:id/search_frame_input_bar').findOnce().longClick()
              TKB.xgsrizhi("长按搜索栏");
              sleep(3000)
            }
            if (text('粘贴').exists()) {
              text('粘贴').findOnce().parent().click()
              TKB.xgsrizhi("点击粘贴");
              sleep(3000)
            }
            if (text('进入').exists()) {
              text('进入').findOnce().click()
              TKB.xgsrizhi("点击进入");
              sleep(8000);
              let waitTime = 0;
              while (text('' + album_url).exists() && waitTime < 5) {
                sleep(5000);
                toast("等待网页结果显示")
                TKB.xgsrizhi("等待网页结果显示");
                waitTime++;
              }
              if (id("android:id/content").exists()) {
                sleep(5000);
              }
              if (text("全部播放").packageName(qqb_pk).exists()) {
                sleep(2000);
                let bounds = text("全部播放").packageName(qqb_pk).find().filter(function (w) {
                  return w.bounds().left > 0 && w.bounds().right > 0 && w.bounds().left < w.bounds().right
                })
                if (bounds.length > 0) {
                  click(bounds[0].bounds().centerX(), bounds[0].bounds().centerY())
                  TKB.xgsrizhi("点击立即播放 跳转酷我音乐");
                  sleep(3000);
                }
              }
              if (text('立即打开').exists()) {
                if (!text('立即打开').findOnce().click()) {
                  click("立即打开");
                }
                TKB.xgsrizhi("点击立即打开 跳转酷我音乐");
                sleep(3000)
              } else {
                click(900, 350);
                TKB.xgsrizhi("点击坐标 跳转酷我音乐");
                sleep(3000)
              }
            }
            if (text('允许打开').exists()) {
              click("允许打开")
              TKB.xgsrizhi("点击允许打开");
              sleep(5000);
            }
            if (text("暂无内容或结果").exists()) {
              TKB.xgsrizhi("网络异常，重新启动流程");
              launch(qqb_pk);
              sleep(8000);
            }
            //在酷我音乐页面播放音乐
            if (textStartsWith("全部播放").packageName(packageName).exists()) {
              if (id("cn.kuwo.player:id/online_music_item_layout").exists() && albumFlag) {
                id("cn.kuwo.player:id/online_music_item_layout").findOnce(0).click();
                TKB.xgsrizhi("点击第一首");
                albumFlag = false;
                TKB.xgsrizhi("播放时间为" + (playTime + 10));
                sleep((playTime + 10) * 1000);
                songCount--;
                TKB.xgsrizhi("专辑" + i + "还需播放" + songCount + "首歌曲");
              }
              allJudge();
              if (id("cn.kuwo.player:id/Main_BtnNext").exists()) {
                id("cn.kuwo.player:id/Main_BtnNext").click();
                TKB.xgsrizhi("点击下一首");
                sleep(2000);
                TKB.xgsrizhi("播放时间为" + playTime);
                sleep(playTime * 1000);
                songCount--;
                TKB.xgsrizhi("专辑" + i + "还需播放" + songCount + "首歌曲");
              }
            }
          } else {
            toast("未获取到专辑地址")
            TKB.xgsrizhi("未获取到专辑地址");
            sleep(5000);
          }
        } catch (error) {
          TKB.xgsrizhi(error)
        }

      }
    }
    //播放完所有的专辑 结束
    if (i == albums.length) {
      break;
    }
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
            toast("未获取到任务状态信息");
            TKB.xgsrizhi("未获取到任务状态信息")
          }
        } else {
          toast("请求失败");
          TKB.xgsrizhi("请求失败")
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
        if ((new Date()).getTime() - ssee > 30 * 1000) {
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
