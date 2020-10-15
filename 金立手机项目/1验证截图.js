//拼多多验证
var a = 1
var ii = 1014
if (a == 1) {
    if (files.isDir("/sdcard/123/jietu/") == false) {
        log('1')
        files.createWithDirs("/sdcard/123/jietu/")
    }
    if (files.isDir("/sdcard/123/chuli/") == false) {
        log('2')
        files.createWithDirs("/sdcard/123/chuli/")
    }
    while (1) {
        // var img_id = 'z'
        if (text('前往验证').exists()) {
            TKB.xgsrizhi('前往验证')
            click('前往验证')
            sleep(2000)
        }
        if (text('安全验证').exists() && text('点击下方“安全验证”按钮，完成拼多多官方验证').exists()) {
            TKB.xgsrizhi('安全验证')
            click('安全验证')
            sleep(2000)
        }
        if (text('拼多多安全验证').exists() && text('').exists()) {
            // var i = 1
            ii++
            var z = TKB.getAllTexts()
            for (var i = 0; i < z.length; i++) {
                if (z[i].indexOf("请") != -1) {
                    var zz = z[i]
                }
            }
            var img = "/sdcard/123/jietu/" + ii + ".png"
            captureScreen(img)
            var src = images.read(img);
            log('截屏已完成第' + ii + '张')
            if (bounds(177, 600, 903, 963).exists()) {
                var verify_bounds = bounds(177, 600, 903, 963).findOnce().bounds()
                var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
            } else {
                var clip = images.clip(src, 177, 600, 726, 360)
            }
            // desc('获取语音验证码').click()
            var clipx = clip
            images.save(clipx, "/sdcard/123/chuli/" + zz + " (" + ii + ")" + ".png");
            log('第' + ii + '张' + zz)
            toast('第' + ii + '张')
            log('第' + ii + '张')
            if (text('').exists()) {
                var z = text('').findOnce().bounds()
                click(z.centerX(), z.centerY())
            } else {
                click(850, 870)
            }
            sleep(5000)
        }

    }
}


//pdd验证
if (a == 1) {
    if (files.isDir("/sdcard/123/jietu/") == false) {
        log('1')
        files.createWithDirs("/sdcard/123/jietu/")
    }
    if (files.isDir("/sdcard/123/chuli/") == false) {
        log('2')
        files.createWithDirs("/sdcard/123/chuli/")
    }
    while (1) {
        // var img_id = 'z'
        if (text('前往验证').exists()) {
            TKB.xgsrizhi('前往验证')
            click('前往验证')
            sleep(2000)
        }
        if (text('安全验证').exists() && text('点击下方“安全验证”按钮，完成拼多多官方验证').exists()) {
            TKB.xgsrizhi('安全验证')
            click('安全验证')
            sleep(2000)
        }
        if (text('拼多多安全验证').exists() && text('').exists()) {
            // var i = 1
            ii++
            var z = TKB.getAllTexts()
            for (var i = 0; i < z.length; i++) {
                if (z[i].indexOf("请") != -1) {
                    var zz = z[i]
                }
            }
            var img = "/sdcard/123/jietu/" + ii + ".png"
            captureScreen(img)
            var src = images.read(img);
            log('截屏已完成第' + ii + '张')
            if (bounds(177, 600, 903, 963).exists()) {
                var verify_bounds = bounds(177, 600, 903, 963).findOnce().bounds()
                var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
            } else {
                var clip = images.clip(src, 177, 600, 726, 360)
            }
            // desc('获取语音验证码').click()
            var clipx = clip
            images.save(clipx, "/sdcard/123/chuli/" + zz + " (" + ii + ")" + ".png");
            log('第' + ii + '张' + zz)
            toast('第' + ii + '张')
            log('第' + ii + '张')
            if (text('').exists()) {
                var z = text('').findOnce().bounds()
                click(z.centerX(), z.centerY())
            } else {
                click(850, 870)
            }
            sleep(5000)
        }
    }
}

var dir = "/sdcard/chuli/";
var jsFiles = files.listDir(dir, function (name) {
    return name.endsWith(".png") && files.isFile(files.join(dir, name));
});
for (var zz = 0; zz < jsFiles.length; zz++) {
    if (jsFiles[zz].indexOf("(") != -1) {
        var z = jsFiles[zz].split("(")
        var num = z[1].replace(/[^0-9]/ig, "");
        var new_name = '(' + num + ')' + z[0] + '.png'
        files.rename("/sdcard/chuli/"+jsFiles[zz], new_name)
    }
}
//读取文件夹下面的文件目录并更改里面的内容
var jsFiles = []
var dir = "/sdcard/outputs/";
jsFiles = files.listDir(dir, function (name) {
    return name.endsWith(".json") && files.isFile(files.join(dir, name));
});
log(jsFiles)
for (var ii = 0; ii < jsFiles.length; ii++) {
    var x = jsFiles[ii]
    var vj = '/sdcard/outputs/' + x
    open(vj)
    var z = files.read(vj, encoding = "UTF-8")
    // 192.168.8.61\\e\\小红书图片缺口标注\\图片\\小红书滑块\\雷强\\1.png'
    var i = 0
    while (1) {
        if (i == 0) {
            var zz = z.replace('\\', '')
            i = 1
        }
        if (zz.indexOf("\\") != -1) {
            var zz = zz.replace('\\', '')
        } else {
            break
        }
    }
    var zz = zz.replace('11拼多多', 'D:\\11拼多多\\').replace('C:', 'D:\\11拼多多\\').replace('Y:', '').replace('192.168.2.211', '').replace('jian-home', '').replace('图片', '').replace('新建文件夹', '').replace('钱磊(1)', '').replace('Desktop', '').replace('Administrator', '').replace('Users', '').replace('向佳华', '').replace('李阅', '').replace('张宇杰', '').replace('钱磊', '').replace('46809', '').replace('刘叙', '')
    // log(zz)
    var lj = '/sdcard/outputs/' + x
    files.write(lj, zz)
    log(ii)
}