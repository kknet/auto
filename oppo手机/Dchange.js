log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
var lock = threads.lock();
threads.start(function () {
  //线程中需要谨慎,以免线程死了
  log("子线程1");
  while (true) {
    lock.lock();
    sleep(200)
    id('com.android.packageinstaller:id/permission_allow_button').findOnce() ? id('com.android.packageinstaller:id/permission_allow_button').findOnce().click() : ''
    sleep(200)
    clickable().id('android:id/button1').findOnce() ? clickable().id('android:id/button1').findOnce().click() : ''
    sleep(200)
    text('每次切换时提醒').findOnce() ? clickable().text('不再提醒').findOnce().click() : ''
    sleep(200)
    text('保持禁止').findOnce() ? text('保持禁止').findOnce().click() : ''
    sleep(200)
    // clickable().id('com.wandoujia.phoenix2:id/y8').findOnce() ? clickable().id('com.wandoujia.phoenix2:id/y8').findOnce().click() : ''
    sleep(200)
    textContains('允许访问你的"位置"').exists() ? text('允许').findOnce().click() : ''
    sleep(200)
    text('声明与条款').findOnce() ? clickable().text('同意并继续').findOnce().click() : ''
    sleep(200)
    clickable().text('点击继续').findOnce() ? clickable().text('点击继续').findOnce().click() : ''
    sleep(200)
    clickable().text('以后都允许').findOnce() ? clickable().text('以后都允许').findOnce().click() : ''
    sleep(200)
    text('个人信息保护指引').findOnce() ? clickable().text('好的').findOnce().click() : ''
    sleep(200)
    text('我知道了').findOnce() ? clickable().text('我知道了').findOnce().click() : ''
    sleep(200)
    text('发现通讯录好友').findOnce() ? clickable().text('取消').findOnce().click() : ''
    sleep(200)
    text('检查新版本').findOnce() ? clickable().text('取消').findOnce().click() : ''
    sleep(200)
    text('温馨提醒').findOnce() ? clickable().text('允许').findOnce().click() : ''
    sleep(200)
    textContains('检测到更新').findOnce() ? clickable().text('以后再说').findOnce().click() : ''
    sleep(200)
    text('欢迎来到豌豆荚').exists() ? clickable().text('同意并授权').findOnce().click() : ''
    sleep(200)
    var arr = ['好友推荐']
    for (let i = 0; i < arr.length; i++) {
      if (text(arr[i]).findOnce()) {
        log('有弹窗')
        back()
        sleep(2000)
      }
    }
    lock.unlock();
  }

  // 普通处理 
  //   TryCloseGG();

});
if (!requestScreenCapture()) {
  alert("请求截图权限失败！");
  exit();
}

// ----------常量----------
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';
var repeat = 0


//----------特有弹窗判断----------------


//-------------通用函数封装--------------
// 获取任务信息
function getTaskInfo(taskId, url) {
  toastLog('获取任务参数值开始')
  let res = http.postJson(url, {
    "taskId": taskId
  });
  if (res.statusCode == 200) {
    let resdata = res.body.string();
    let taskres = JSON.parse(resdata).data
    // log("全部任务信息" + taskres)

    let TotaskParam = parseJSON(taskres)
    //执行动作、任务值
    var needExecuteActions = TotaskParam.needAction.split(',');
    var paramMap = {};


    TotaskParam.paramvalue.forEach((paramObj, j) => {
      paramMap[paramObj.paramId] = paramObj.paramValue;
    });

    // log('动作action', needExecuteActions)
    // log("详细参数paramMap", paramMap);

    var taskInfo = {}
    taskInfo.action = needExecuteActions;
    taskInfo.param = paramMap;
    return taskInfo;
  }
  toastLog('获取任务参数值结束')
}

//数据转化为对应类型
function parseJSON(data) {
  let datejson = '';
  if (typeof data === "string") {
    try {
      datejson = JSON.parse(data);
    } catch (e) {
      datejson = new Function("return " + data)();
    }
  } else {
    datejson = data;
  }
  return datejson;
};


/* 杀进程操作
package  程序名
time 间隔时间
type  操作类型
config  手机配置文件
*/
function closeandopen(package, time, type, config) {
  if (type == 'single') {
    launch(package);
    sleep(time * 1000)
    let packageName = package;
    app.openAppSetting(packageName);
    text(app.getAppName(packageName)).waitFor();
    let is_sure = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
    if (is_sure.enabled()) {
      textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click();
      id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOne() ? id('android:id/button1').textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*|.*确.*|.*定.*)/).findOnce().click() : log('按钮点击不到');
      log(app.getAppName(packageName) + "应用已被关闭");
      sleep(1000);
      back();
    } else {
      log(app.getAppName(packageName) + "应用不能被正常关闭或不在后台运行");
      back();
    }
    sleep(time * 1000)
    launch(package);
  } else {
    launch(package);
    sleep(time * 1000)
    home()
    sleep(2000)
    recents()
    sleep(1000)
    log('点击清除后台任务按钮')
    id('clearAnimView').findOne(2000).click()
    sleep(time * 1000)
    launch(package);

  }

}


/* 图片下载
 */
function modify(url) {
  toastLog('准备下载头像');
  let isSave = false,
    isError = false;
  http.get(url, {}, function (res, err) {
    if (err) {
      log('errr=>>');
      toastLog('下载失败');
      isError = true;
      return;
    }
    toastLog('下载成功');
    let bytesContent = res.body.bytes();
    log("code = " + res);

    let path = files.getSdcardPath() + '/DCIM/vmDY_Temp.jpg';

    files.createWithDirs(path);
    log("code = " + path);
    files.writeBytes(path, bytesContent);
    sleep(10000);
    log("存入文件");

    toast('保存成功');
    app.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, android.net.Uri.fromFile(java.io.File(f))));
    isSave = true;
  })
}

/*保存图片方法2
 */
function saveimg(url) {
  var logo = images.load(url);
  let path = files.getSdcardPath() + "/DCIM/Camera/1.jpg";

  images.save(logo, path)
  //刷新相册
  app.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, android.net.Uri.fromFile(java.io.File(path))));
}


function downjsrun() {
  toastLog("下载js")
  var TTR = (new Date()).getTime()
  while (1) {
    try {

      if ((new Date()).getTime() - TTR > 3 * 60 * 1000) {
        break;
      }
      let jsurl = 'https://mlziliao.oss-cn-hangzhou.aliyuncs.com/js/keeplight.js';
      let res = http.get(jsurl);
      if (res.statusCode == 200) {
        files.writeBytes("/sdcard/keeplight.js", res.body.bytes());
        toastLog("下载完成")
        break;
      } else {
        toastLog("没有js");
        sleep(2000)
      };
    } catch (error) {
      toastLog(error);
      sleep(random(3000, 8000))
    }
  }

  engines.execScriptFile("/sdcard/keeplight.js")
}

//-------------实际运行模块---------------
function changePerMes(package, parameter) {
  closeandopen(package, 10, 'single')
  var neirong = parameter.param['name'];
  var jianjie = parameter.param['signature'];
  var avatar = parameter.param['avatar'];
  // var neirong = '2333';
  // var jianjie = '肚子饿l';
  // var avatar = 'https://mlziliao.oss-cn-hangzhou.aliyuncs.com/js/2.jpg'
  var changeAvatar = ["点击更换头像", 'oa']
  sleep(10000)
  text('我').findOnce() ? text('我').findOnce().parent().parent().parent().click() : ''
  toastLog('开始头像下载')
  if (avatar) {
    // modify(avatar);
    saveimg(avatar)
  }
  sleep(10000)
  toastLog('头像下载完成')
  // confirms()
  var MeBounds = text("我").findOnce().bounds();
  click(MeBounds.centerX(), MeBounds.centerY());
  sleep(3000);
  //更换头像
  editit();
  if (avatar) {
    if (desc(changeAvatar[0]).findOnce()) {
      var changeTXBounds = desc(changeAvatar[0]).findOnce().bounds();
      click(changeTXBounds.centerX(), changeTXBounds.centerY());
    } else if (id(changeAvatar[1]).findOnce()) {
      var cameras = id(changeAvatar[1]).findOnce().bounds();
      click(cameras.centerX(), cameras.centerY());
    }
    sleep(3000);
    text('从相册选择').findOnce() ? text('从相册选择').findOne(2000).click() : clickable().id('com.ss.android.ugc.aweme:id/fkm').findOnce().click();
    sleep(3000);
    textContains('始终允许').findOnce() ? text('始终允许').findOnce().click() : ''
    sleep(3000)
    className('android.view.View').find()[0].click();
    sleep(3000);
    if (textContains('图片太小').findOnce()) {
      log('图片太小了');
      back();
      sleep(3000);
      back();
      sleep(3000);
      toastLog('更换头像失败~');
    } else {
      var confirmBtn = text('确认').findOnce();
      log('点击确认', click(confirmBtn.bounds().centerX(), confirmBtn.bounds().centerY()));
      sleep(3000);
      // confirms()
      var finishBtn = text('完成').findOnce();
      sleep(3000)
      log('点击完成', click(finishBtn.bounds().centerX(), finishBtn.bounds().centerY()));
      sleep(3000);
      // confirms()
    }
  }
  //更改名字
  editit();
  changeMes(neirong, '名字', 'com.ss.android.ugc.aweme:id/apj');
  //更改简介
  editit();
  changeMes(jianjie, '简介', 'com.ss.android.ugc.aweme:id/aps');
  back()
  sleep(2000)
  back()
  sleep(2000)
  home()
  /* 进入编辑资料页面 */
  function editit() {
    if (textContains('编辑资料').findOnce()) {
      log('点击编辑资料');
      textContains('编辑资料').findOnce().click()
      sleep(3000);
      // confirms()
    }
  }

  function changeMes(ctext, index, ID) {
    toastLog('开始找' + index);
    var cname = text(index).findOne(1000).bounds()
    click(cname.centerX(), cname.centerY());
    sleep(3000);
    // confirms()
    log(className('EditText').findOnce().text())
    if (className('EditText').findOnce().text().trim() != ctext.trim()) {
      log()
      setText(ctext);
      sleep(3000);
      text('保存').findOnce().click();
      sleep(3000);
      toastLog('动作执行完毕！');
    } else {
      toastLog('内容相同，不修改');
      sleep(5000);
      back();
      sleep(3000);
      back();
      return
    }
  }

}


//------------------------------------------main函数--------------------------------------------------------------
function main() {
  try {
    device.keepScreenOn(240 * 60 * 60 * 1000)
    var res = getTaskInfo(taskId, url)
    log(res)
    changePerMes('com.ss.android.ugc.aweme', res);

  } catch (error) {
    toastLog('执行遇到错误' + error);
    repeat++
    if (repeat < 3) {
      main()
    } else {
      TKB.wzaandhome()
    }
  }

  sleep(3000)
  threads.shutDownAll();
  downjsrun()
}

main();