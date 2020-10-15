//知乎修改资料
function zhxgzl() {
    TKB.xgsrizhi("知乎修改资料")
    launch('com.zhihu.android')
    sleep(5000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var a = 0
    var name_result = false
    var img_result = false
    var jj_result = false
    var name_return = '知乎昵称不符合'
    var img_return = '知乎头像不符合'
    var jj_return = '知乎简介不符合'
    var status = 0
    var xs = action_args['param']
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
    var xz = 0
    var name = nickname
        //居住地
    var jzd_list = ['北京', '广东', '山东', '浙江', '江苏', '上海', '辽宁', '四川', '河南', '湖北', '福建', '湖南', '河北', '重庆', '山西', '江西', '陕西', '安徽', '黑龙江', '广西', '吉林', '云南', '天津', '内蒙古', '新疆', '甘肃', '贵州', '海南', '宁夏', '青海', '西藏', '香港']
    var jzd = jzd_list[random(0, jzd_list.length - 1)]
        //职历
    var zl_list = ['高新科技', '信息传媒', '金融', '服务业', '教育', '医疗服务', '艺术娱乐', '制造加工', '地产建筑', '贸易零售', '公共服务', '开采冶金', '交通仓储', '农林牧渔']
    var zl = zl_list[random(0, zl_list.length - 1)]
    while (1) {
        if ((new Date()).getTime() - RT > 30 * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            if (fb != 0) {
                return true
            }
            TKB.qinglihh()
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch('com.zhihu.android')
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            zonghe()
            if (text('首页').exists() && text('消息').exists() && text('我的').exists()) {
                TKB.xgsrizhi('首页')
                click(978, 1837)
                sleep(2000)
            }
            if (text('个人主页').exists() && text('关注').exists() && text('最近浏览').exists()) {
                TKB.xgsrizhi('个人主页')
                click('个人主页')
                sleep(2000)
            }
            if (id('com.zhihu.android:id/stack_medals').exists()) {
                TKB.xgsrizhi('领取徽章')
                click(940, 1130)
                sleep(2000)
            }
            if (desc('徽章规则').exists() && desc('可领取').exists()) {
                TKB.xgsrizhi('点击领取')
                var er = desc('可领取').findOnce().bounds()
                click(er.centerX(), er.centerY())
                sleep(2000)
            }
            if (desc('立即领取').exists()) {
                TKB.xgsrizhi('立即领取')
                desc('立即领取').findOnce().click()
                sleep(5000)
                back()
                sleep(1000)
            }
            if (text('添加形象关键词').exists() && text('完善我的知乎形象，获取更多关注').exists()) {
                TKB.xgsrizhi('添加形象关键词')
                click('添加形象关键词')
                sleep(2000)
            }
            if (text('添加形象关键词').exists() && text('保存').exists()) {
                TKB.xgsrizhi('选择形象关键词')
                while (1) {
                    var zz = id('com.zhihu.android:id/rest_num').findOnce().text()
                    if (Number(zz) < 25) {
                        break
                    } else {
                        click('换一换')
                        sleep(3000)
                        var uc = id('com.zhihu.android:id/label_text').find();
                        for (var i = 0; i < uc.length; i++) {
                            var tv = uc[i]
                            if (tv.text() != "") {
                                if (random(0, 10) == 5) {
                                    var z = tv.text()
                                    click(z)
                                    sleep(500)
                                }
                            }
                        }
                    }
                }
                click('保存')
                sleep(2000)
            }
            if (text('编辑资料').exists() && id('com.zhihu.android:id/avatar').exists() && id('com.zhihu.android:id/name').exists()) {
                TKB.xgsrizhi('编辑资料')
                click('编辑资料')
                sleep(5000)
            }
            if (text('编辑个人资料').exists() && text('保存').exists()) {
                TKB.xgsrizhi('编辑个人资料界面')
                sleep(1000)
            }
            if (a == 0) {
                // TKB.xgsrizhi('修改头像')
                if (xs['是否修改头像'] == '是') {
                    if (id('com.zhihu.android:id/avatar_camera').exists()) {
                        TKB.xgsrizhi('点击头像')
                        id('com.zhihu.android:id/avatar_camera').findOnce().click()
                        sleep(2000)
                    }
                    if (text('拍照').exists() && text('相册').exists()) {
                        TKB.xgsrizhi('选择相册')
                        click('相册')
                        sleep(3000)
                    }
                    if (text('全部').exists() && text('使用').exists()) {
                        TKB.xgsrizhi('选择第一张')
                        click(280, 340)
                        sleep(3000)
                    }
                    if (text('全部').exists() && text('使用(1)').exists()) {
                        TKB.xgsrizhi('使用(1)')
                        click('使用(1)')
                        sleep(3000)
                        a = 1
                        img_result = true
                        img_return = '知乎头像符合'
                    }
                } else {
                    a = 1
                    TKB.xgsrizhi("头像不修改")
                    img_return = '知乎头像不修改'
                }
            }
            if (a == 1) {
                if (xs['是否修改名字'] == '是') {
                    // TKB.xgsrizhi('修改昵称')
                    if (id('com.zhihu.android:id/username').findOnce().text() == name) {
                        TKB.xgsrizhi("已经是该昵称了,昵称修改完成")
                        toastLog("昵称修改完成")
                        a = 2
                        name_result = true
                        name_return = '知乎昵称符合'
                    } else if (id('com.zhihu.android:id/username').exists() && text('基本资料').exists()) {
                        TKB.xgsrizhi('输入昵称')
                        id('com.zhihu.android:id/username').findOnce().setText(name)
                        sleep(2000)
                    }
                } else {
                    a = 2
                    TKB.xgsrizhi("昵称不修改")
                    name_return = '知乎昵称不修改'
                }
            }
            if (a == 2) {
                if (xs['是否修改性别'] == '是') {
                    id('com.zhihu.android:id/epitaph').findOnce().setText(jianjie)
                        // TKB.xgsrizhi('修改性别')
                    if (text('性别').exists() && text('用户名').exists()) {
                        if (id('com.zhihu.android:id/value').findOnce().text() == xs['性别']) {
                            TKB.xgsrizhi('性别选择完成')
                            toastLog("性别选择完成")
                            a = 3
                            sleep(2000)
                        } else if (text('性别').exists() && text('用户名').exists()) {
                            TKB.xgsrizhi('点击性别')
                            var er = text('性别').findOnce().bounds()
                            click(er.centerX() + 300, er.centerY())
                            sleep(2000)
                        }
                    }
                    if (text('选择性别').exists()) {
                        TKB.xgsrizhi('选择性别:' + xs['性别'])
                        click(xs['性别'])
                        sleep(2000)
                    }
                } else {
                    a = 3
                    TKB.xgsrizhi("性别不修改")
                }
            }
            if (a == 3) {
                if (xs['是否修改简介'] == '是') {
                    // TKB.xgsrizhi('修改简介')
                    if (id('com.zhihu.android:id/epitaph').findOnce().text() == jianjie) {
                        TKB.xgsrizhi("已经是该简介了,简介修改完成")
                        toastLog("简介修改完成")
                        a = 4
                        jj_result = true
                        jj_return = '知乎简介符合'
                    } else if (id('com.zhihu.android:id/username').exists() && text('基本资料').exists()) {
                        TKB.xgsrizhi('输入简介')
                        id('com.zhihu.android:id/epitaph').findOnce().setText(jianjie)
                        sleep(2000)
                    }
                } else {
                    a = 4
                    TKB.xgsrizhi("简介不修改")
                    jj_return = '知乎简介不修改'
                }
            }
            if (a == 4) {
                // TKB.xgsrizhi('修改生日')
                if (text('生日').exists() && !text('请填写生日').exists()) {
                    TKB.xgsrizhi('生日填写完成')
                    toastLog("生日填写完成")
                    a = 5
                    sleep(2000)
                } else if (text('生日').exists() && text('请填写生日').exists()) {
                    TKB.xgsrizhi('填写生日')
                    click('请填写生日')
                    sleep(2000)
                }
                if (text('选择生日').exists() && text('确定').exists()) {
                    TKB.xgsrizhi('选择生日')
                    var y = random(0, 1)
                    TKB.xgsrizhi('年')
                    for (var i = 0; i < random(0, 12); i++) {
                        if (y == 0) {
                            swipe(290, 1150, 290, 970, random(500, 800))
                            sleep(500)
                        } else {
                            swipe(290, 800, 290, 990, random(500, 800))
                            sleep(500)
                        }
                    }
                    TKB.xgsrizhi('月')
                    for (var x = 0; x < random(1, 12); x++) {
                        swipe(550, 1100, 550, 950, random(500, 800))
                        sleep(500)
                    }
                    TKB.xgsrizhi('日')
                    for (var z = 0; z < random(1, 31); z++) {
                        swipe(790, 1100, 790, 950, random(500, 800))
                        sleep(500)
                    }
                    sleep(1000)
                    click('确定')
                    sleep(1000)
                }
            }
            if (a == 5) {
                // TKB.xgsrizhi('修改所在地')
                if (text('居住地').exists() && !text('请填写居住地').exists()) {
                    TKB.xgsrizhi('居住地填写完成')
                    toastLog("居住地填写完成")
                    a = 6
                    sleep(2000)
                } else if (text('居住地').exists() && text('请填写居住地').exists()) {
                    TKB.xgsrizhi('填写居住地')
                    click('填写居住地')
                    sleep(2000)
                }
                if (text('添加居住地').exists() && text('完成').exists()) {
                    TKB.xgsrizhi('添加居住地')
                    setText(jzd)
                    sleep(1000)
                    click(jzd)
                    sleep(1000)
                    click('完成')
                    sleep(2000)
                }
            }
            if (a == 6) {
                // TKB.xgsrizhi('修改行业')
                if (text('编辑个人资料').exists() && text('保存').exists()) {
                    if (text('所在行业').exists() && !text('请选择行业').exists()) {
                        TKB.xgsrizhi('行业填写完成')
                        toastLog("行业填写完成")
                        a = 7
                        sleep(2000)
                    } else if (text('所在行业').exists() && text('请选择行业').exists()) {
                        TKB.xgsrizhi('填写行业')
                        click('请选择行业')
                        sleep(5000)
                    }
                }
                if (text('添加职业经历').exists() && text('完成').exists() && text('教育').exists()) {
                    TKB.xgsrizhi('选择行业')
                    if (text(zl).exists() && text('添加职业经历').exists()) {
                        TKB.xgsrizhi('选着职历:' + zl)
                        click(zl)
                        sleep(2000)
                        xz = 1
                    } else if (!text(zl).exists() && text('添加职业经历').exists()) {
                        swipe(500, 1750, 600, 800, 800)
                        sleep(1000)
                    }
                    //遍历职历下面的行业
                    if (xz == 1) {
                        var hy_list = []
                        var uc = id('com.zhihu.android:id/label_text').find();
                        for (var i = 0; i < uc.length; i++) {
                            var tv = uc[i]
                            if (tv.text() != "") {
                                // log(tv.text())
                                hy_list.push(tv.text())
                            }
                        }
                        // log(hy_list)
                        var hy = hy_list[random(0, hy_list.length - 1)]
                            // log(hy)
                        click(hy)
                        sleep(4000)
                        click('完成')
                        sleep(2000)
                    }
                }
            }
            if (a == 7) {
                if (name_result == true && img_result == true && jj_result == true) {
                    status = 1
                } else {
                    status = 2
                }
                info = name_return + ',' + img_return + ',' + jj_return
                TKB.xgsrizhi(info)
                    // TKB.upinfo(sbip, user_id, yhbh, info, status)
                click('保存')
                sleep(1000)
                toastLog('修改成功')
                return true
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

zhxgzl()