for (var i = 1; i < 1; i++) {
  // 读取图片
  // toastLog('第'+i+'张')
  var imgPath = '/sdcard/'+i+'.png'
  var img = images.read(imgPath)
  // 配置文件, 如果要使用以下代码, 请更改username和password
  var config = {
    baseUrl: 'https://v2-api.jsdama.com/upload',
    headers: {
      "Host": 'v2-api.jsdama.com',
      "Connection": 'keep-alive',
      "Accept": 'application/json, text/javascript, */*; q=0.01',
      "Content-Type": 'text/json',
      "User-Agent": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5 Quark/2.4.2.986"
    },
    softwareSecret: '2ageyZqzZvlQepglpNYrkHqO4ddSMaULIw4TlGfb',
    softwareId: '20482',
    username: 'xiaodengzi',
    password: 'lwjTEAMO123#',
    captchaData: images.toBase64(img, format = "png"),
    captchaType: '1008',
    captchaMinLength: '6',
    captchaMaxLength: '6'
  }
  // 配置参数中有三个参数需要注意一下:
  // captchaMinLength:验证码最小长度captchaMaxLength:验证码最大长度
  // 识别图片
  var url = config.baseUrl
  var data = {
    softwareSecret: config.softwareSecret,
    softwareId: config.softwareId,
    username: config.username,
    password: config.password,
    captchaData: config.captchaData,
    captchaType: config.captchaType,
    captchaMinLength: config.captchaMinLength,
    captchaMaxLength: config.captchaMaxLength,
  }
  var options = {
    headers: config.headers
  }
  try {
    http.__okhttp__.setTimeout(3e4);
    var res = http.postJson(url, data, options);
    var html = res.body.json();
    log(html)
    if (html.code === 0 || html.code === '0') {
      log('联众识别结果=', html.data.recognition)
      var zz = files.rename(imgPath, i+'_'+html.data.recognition+'.png')
      // var zz = html.data.captchaId
      // log(zz)
      // return html.data.recognition
    } else {
      log("识别图片出现错误,请检查账号信息是否正确")
    }
  } catch (e) {
    log(e)
  }
}


  //联众报错
  // var zz = html.data.captchaId
  // log(zz)
  // var config = {
  //   baseUrl: 'https://v2-api.jsdama.com/report-error',
  //   headers: {
  //     "Host": 'v2-api.jsdama.com',
  //     "Connection": 'keep-alive',
  //     "Accept": 'application/json, text/javascript, */*; q=0.01',
  //     "Content-Type": 'text/json',
  //     "User-Agent": "Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5 Quark/2.4.2.986"
  //   },
  //   softwareSecret: '2ageyZqzZvlQepglpNYrkHqO4ddSMaULIw4TlGfb',
  //   softwareId: '20482',
  //   username: 'xiaodengzi',
  //   password: 'lwjTEAMO123#',
  //   captchaId: zz,
  // }
  // var url = config.baseUrl
  // var data = {
  //   softwareSecret: config.softwareSecret,
  //   softwareId: config.softwareId,
  //   username: config.username,
  //   password: config.password,
  //   captchaId: config.captchaId,
  // }
  // var options = {
  //   headers: config.headers
  // }
  // http.__okhttp__.setTimeout(3e4);
  // var res = http.postJson(url, data, options);
  // var html = res.body.json();
  // log(html)