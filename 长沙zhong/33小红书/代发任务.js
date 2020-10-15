var imageLinks;
var title;
var comments

//下载链接的图片
function downLoadImage(lj, num) {
    TKB.xgsrizhi("下载图片" + num);
    var dirpath = "/sdcard/XHSImage/";
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
//从指定任务参数值获取链接
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

//代发任务
function dispatchTask() {
    TKB.xgsrizhi("小红书代发")
    launch('com.xingin.xhs')
    sleep(8000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var ifClick = true
        // var xs = TKB.TKB.zhid(sbip, run_id)
    if (xs["话术"] == 0 || xs["话术"] == "0") {
        TKB.xgsrizhi("未获取到话术");
    } else {
        comments = xs["话术"];
        TKB.xgsrizhi("获取到话术为" + comments);
    }
    if (xs["标题"] == 0 || xs["标题"] == "0") {
        TKB.xgsrizhi("未获取到标题");
    } else {
        title = xs["标题"];
        TKB.xgsrizhi("获取到标题为" + title);
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
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh()
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            TKB.qinglihh()
            sleep(3000)
            launch('com.xingin.xhs')
            sleep(2000)
            TSD = (new Date()).getTime()
            RT = (new Date()).getTime()
            ifClick = true
        }
        popUp()
        if (id("com.xingin.xhs:id/as5").exists() && ifClick == true) {
            id("com.xingin.xhs:id/as5").findOnce().click()
            TKB.xgsrizhi("点击发布任务按钮");
            ifClick = false
            sleep(5000);
        }
        if (text("全部").exists()) {
            click("全部");
            TKB.xgsrizhi("点击选择相册");
            sleep(5000);
        }
        if (text("XHSImage").exists()) {
            click("XHSImage");
            TKB.xgsrizhi("点击选择相册XHSImage");
            sleep(5000);
        }
        if (id("com.xingin.xhs:id/cjd").exists()) {
            var images = id("com.xingin.xhs:id/cjd").find();
            TKB.xgsrizhi("选择" + imageLinks.length + "张照片");
            for (let i = 0; i < imageLinks.length; i++) {
                images[i].click();
                TKB.xgsrizhi("选择第" + i + "张照片");
                sleep(4000);
            }
        }
        if (id("com.xingin.xhs:id/ahn").exists()) {
            id("com.xingin.xhs:id/ahn").findOnce().click();
            TKB.xgsrizhi("点击下一步");
            sleep(4000);
        }
        if (id("com.xingin.xhs:id/a0u").exists()) {
            id("com.xingin.xhs:id/a0u").findOnce().click();
            TKB.xgsrizhi("点击下一步");
            sleep(4000);
        }
        if (text("发布笔记").exists()) {
            setText(0, title);
            sleep(4000);
            setText(1, comments);
            sleep(4000);
            click("发布笔记");
            sleep(60 * 1000);
        }
        if (text("取消").exists()) {
            click("取消");
            sleep(2000);
            // TKB.upkfrenw(sbip, user_id, yhbh, run_id)
            sleep(3000)
            TKB.xgsrizhi("发布成功")
            toast("发布成功")
            TKB.qinglihh()
            return true
        }
    }

}


dispatchTask()