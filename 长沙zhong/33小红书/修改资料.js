var name;
var jianjie;
var nameflag
var imgflag
var explainflag

//修改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch('com.xingin.xhs')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0 //判断编辑资料界面该干啥
        // var xs = TKB.TKB.zhid(sbip, run_id)
        // var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname'].split('|||')[0]
        TKB.xgsrizhi(name)
        var img = zz['img'].split('|||')[0]
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie'].split('|||')[0]
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
            TKB.qinglihh()
            sleep(3000)
            launch('com.xingin.xhs')
            sleep(2000)
            TSD = (new Date()).getTime()
            RT = (new Date()).getTime()
        }
        popUp()
        if (text("我").exists()) {
            TKB.xgsrizhi("点击我")
                // text("我").findOnce().click();
            id("com.xingin.xhs:id/as3").findOnce().click()
                // click("我")
            sleep(2000);
        }
        if (text("编辑资料").exists() && text("我").exists()) {
            TKB.xgsrizhi("点击编辑资料")
            click("编辑资料")
            sleep(2000)
        }
        if (text("编辑资料").exists() && text("修改头像").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                if  (xs['是否修改名字']  ==  '是') {
                    TKB.xgsrizhi("修改名字")
                    if (text("编辑资料").exists() && text("名字").exists()) {
                        TKB.xgsrizhi("前往修改名字")
                        click("名字")
                        sleep(3000)
                        if (text("修改名字").exists() && text("完成").exists()) {
                            TKB.xgsrizhi("清空原有的名字")
                            id("com.xingin.xhs:id/bse").findOnce().setText("")
                            sleep(3000)
                            TKB.xgsrizhi("添加新的名字")
                                // id("com.xingin.xhs:id/bse").findOnce().setText(getRandomName(random(3, 6)));
                            setText(0, name);
                            sleep(3000)
                            TKB.xgsrizhi("点击完成")
                            click("完成")
                            sleep(3000)
                            if (text("修改名字").exists() && text("完成").exists()) {
                                TKB.xgsrizhi("7天之内只能修改一次名字")
                                back()
                                sleep(3000)
                            }
                        }
                    }
                    if (id("com.xingin.xhs:id/a8s").findOnce().text() !== name) {
                        TKB.xgsrizhi("小红书昵称不符合")
                        nameflag = '小红书昵称不符合'
                    } else {
                        TKB.xgsrizhi("小红书昵称符合")
                        nameflag = '小红书昵称符合'
                    }
                    tep = 1
                    sleep(3000)
                } else {
                    tep = 1
                    TKB.xgsrizhi("小红书昵称不修改") 
                    nameflag  =  '小红书昵称不修改'
                }
            }
            //简介
            if (tep == 1) {
                if  (xs['是否修改简介']  ==  '是') {
                    TKB.xgsrizhi("修改简介")
                    if (text("个人简介").exists() && text("编辑资料").exists()) {
                        click("个人简介")
                        TKB.xgsrizhi("点击个人简介")
                        sleep(2000)
                        if (text("个人简介").exists()) {
                            if (text(jianjie).exists()) {
                                TKB.xgsrizhi("已经是该简介了")
                                sleep(3000)
                                explainflag = '小红书简介符合'
                                back()
                                sleep(3000)
                                tep = 2
                                sleep(3000)
                            } else {
                                TKB.xgsrizhi("填写简介")
                                setText(jianjie)
                                sleep(2000)
                                click("完成")
                                TKB.xgsrizhi("点击完成")
                                sleep(6000)
                                if (text("个人简介").exists() && text("完成").exists()) {
                                    TKB.xgsrizhi("7天之内只能修改三次")
                                    back()
                                    sleep(3000)
                                    explainflag = '小红书简介不符合'
                                } else {
                                    explainflag = '小红书简介符合'
                                }
                                tep = 2
                                sleep(3000)
                            }
                        }
                    }
                } else {
                    tep = 2
                    TKB.xgsrizhi("简介不做修改") 
                    explainflag =  '小红书简介不修改'
                    sleep(3000)
                }
            }
            //头像
            if (tep == 2) {
                if  (xs['是否修改头像']  ==  '是') {
                    TKB.xgsrizhi("修改头像")
                    if (text("编辑资料").exists() && text("修改头像").exists()) {
                        TKB.xgsrizhi("点击修改头像")
                        text("修改头像").findOnce().parent().click()
                        sleep(3000)
                        while (text("始终同意").exists()) {
                            click("始终同意");
                            sleep(2000);
                            TKB.xgsrizhi("点击始终同意")
                        }
                        sleep(6000)
                        if (text('全部').exists()) {
                            TKB.xgsrizhi("点击全部，选择相册")
                                // id("com.xingin.xhs:id/cxc").findOnce().click();
                            click("全部")
                            sleep(3000);
                            if (text("DY").exists()) {
                                TKB.xgsrizhi("点击DY相册")
                                click("DY")
                                sleep(3000);
                            }
                            click(100, 300);
                            sleep(3000)
                            if (text('取消').exists() && text('确定').exists()) {
                                TKB.xgsrizhi("点击确定")
                                click('确定')
                                sleep(3000)
                            }
                            if (text('下一步').exists() && text('取消').exists()) {
                                TKB.xgsrizhi("点击下一步")
                                click("下一步")
                                sleep(3000)
                            }
                            if (text("编辑资料").exists() && text("修改头像").exists()) {
                                TKB.xgsrizhi("小红书头像符合")
                                imgflag = '小红书头像符合'
                            } else {
                                TKB.xgsrizhi("小红书头像不符合")
                                imgflag = '小红书头像不符合'
                            }
                            tep = 3
                            sleep(3000)
                        }
                    }
                } else {
                    TKB.xgsrizhi("头像不修改") 
                    imgflag =  '小红书头像不修改'
                    tep = 3
                    sleep(3000)
                }
            }
            //性别
            if (tep == 3) {
                if  (xs['是否修改性别']  ==  '是') {
                    if (text("编辑资料").exists() && text("性别").exists()) {
                        TKB.xgsrizhi("修改性别")
                        if (xs['性别']  ==  '男') {
                            TKB.xgsrizhi("修改性别为男生")
                            click("性别")
                            TKB.xgsrizhi("点击性别")
                            sleep(3000)
                            if (text("请选择你的性别")) {
                                click("男")
                                TKB.xgsrizhi("点击男")
                                sleep(3000)
                                click("确定")
                                TKB.xgsrizhi("点击确定")
                                tep = 4
                                sleep(3000)
                            }
                        } else if (xs['性别']  ==  '女') {
                            TKB.xgsrizhi("修改性别为女生")
                            click("性别")
                            TKB.xgsrizhi("点击性别")
                            sleep(3000)
                            if (text("请选择你的性别")) {
                                click("女")
                                TKB.xgsrizhi("点击女")
                                sleep(3000)
                                click("确定")
                                TKB.xgsrizhi("点击确定")
                                tep = 4
                                sleep(3000)
                            }
                        }
                    }
                } else {
                    TKB.xgsrizhi("性别不做修改") 
                    tep = 4
                    sleep(3000)
                }
            }
            //地区
            if (tep == 4) {
                if (text("编辑资料").exists() && text("常住地").exists()) {
                    click("常住地")
                    TKB.xgsrizhi("点击常住地")
                    sleep(3000)
                    var y = random(0, 1)
                    while (1) {
                        try {
                            if (text('地区').exists()) {
                                if (y == 0) {
                                    swipe(500, 1800, 500, 500, 800)
                                    sleep(3000)
                                } else {
                                    swipe(500, 1800, 500, 500, 800)
                                    sleep(3000)
                                    swipe(500, 1800, 500, 500, 800)
                                    sleep(3000)
                                }
                                var z = id('com.xingin.xhs:id/d3').find()
                                var i = random(0, z.size())
                                click(z[i].text())
                                x = z[i].text()
                            }
                            if (text('编辑资料').exists() && text('常住地').exists()) {
                                var xx = TKB.getAllTexts()
                                if (xx.indexOf(x) != -1 || textContains(x).findOnce()) {
                                    toastLog('地区设置成功')
                                    TKB.xgsrizhi('地区设置成功')
                                    tep = 6
                                    break
                                } else {
                                    TKB.xgsrizhi('点击地区')
                                    click('常住地')
                                    sleep(2000)
                                }
                            }
                        } catch (error) {
                            toastLog('error')
                            sleep(1000)
                        }
                    }
                    tep = 5
                    sleep(3000)
                }
            }
            //上传
            if (tep == 5) {
                if (nameflag == '小红书昵称符合' && imgflag == '小红书头像符合' && explainflag == '小红书简介符合') {
                    status = 1
                } else {
                    status = 2
                }
                var info = nameflag + ',' + imgflag + ',' + explainflag
                    // TKB.upinfo(sbip, user_id, yhbh, info, status)
                sleep(2000)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh();
                return true
            }
        }
    }
}


changeInfo()