var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
var dqbaoming = "com.xingin.xhs" //该项目包名
//滑块
function get_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
            // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
            // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        var clip = images.clip(src, 137, 620, 804, 416)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "xhs",
            image: open(imgFile),
            type: 'File'
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
        }
    } catch (error) {
        TKB.set_log(error)
    }
}

//QQ浏览器小红书滑块
function qqbget_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        var url = 'http://122.228.155.197:8803/captcha_slide'
        var clip = images.clip(src, 108, 729, 864, 446)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "xhs",
            image: open(imgFile),
            type: "file"
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.set_log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.set_log('失败')
        }
    } catch (error) {
        TKB.set_log(error)
    }
}

//所有判断和弹窗
function popUp() {
    if (text('温馨提示').exists() && text('欢迎来到小红书！').exists()) {
        TKB.set_log("用户协议")
        click("同意")
        sleep(2000)
    }
    if (text("好久不见，欢迎回来").exists()) {
        TKB.set_log("点击跳过")
        click("跳过")
        sleep(2000)
    }
    if (text('隐私协议提示').exists()) {
        TKB.set_log("隐私协议提示")
        click("同意并继续")
        sleep(2000)
    }
    if (text("开启设备权限").exists()) {
        TKB.set_log("点击暂时不用")
        click("暂时不用")
        sleep(2000)
    }
    if (text("退出直播").exists()) {
        click("退出直播");
        sleep(2000);
        TKB.set_log("退出直播");
    }
    if (text("暂时不了").exists() && text("立刻开启").exists()) {
        click("暂时不了");
        sleep(2000);
        TKB.set_log("暂时不了");
    }
    if (text("退出").exists() && text("关注并退出").exists()) {
        click("退出");
        sleep(2000);
        TKB.set_log("点击退出");
    }
    if (id("com.xingin.xhs:id/a64").exists && text("立即更新").exists()) {
        id("com.xingin.xhs:id/a64").click();
        sleep(2000);
        TKB.set_log("取消立即更新")
    }
    if (textStartsWith("您对小红书的评分").exists()) {
        back();
        sleep(2000);
        TKB.set_log("取消评分");
    }
    if (id("com.xingin.xhs:id/b_a").exists()) {
        id("com.xingin.xhs:id/b_a").click();
        sleep(2000);
        refreshClick--;
        TKB.set_log("点击刷新")
        if (refreshClick < 0) {
            TKB.clear(dqbaoming);
            sleep(2000);
            launch(dqbaoming);
            sleep(12000);
        }
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.set_log("点击我知道了")
        sleep(2000);
    }
    if (text("以后再说").exists() && text("立即更新").exists()) {
        click("以后再说");
        TKB.set_log("以后再说")
        sleep(2000);
    }
    if (text("新版发布").exists()) {
        click(300, 1350);
        TKB.set_log("点击坐标以后再说")
        sleep(2000);
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.set_log("点击以后再说")
        sleep(2000);
    }
    if (text("知道了").exists()) {
        click("知道了");
        TKB.set_log("点击知道了")
        sleep(2000);
    }
    if (text("开启位置信息开关").exists()) {
        click("取消");
        sleep(2000);
        TKB.set_log("点击取消位置信息开启");
    }
    if (text("发现").exists()) {
        if (!text("发现").findOnce().selected()) {
            click("发现");
            TKB.set_log("不在首页点击发现")
        }
    }
    if (textContains("欢迎使用手机管家").exists()) {
        click("继续");
        TKB.set_log("点击使用手机管家")
        sleep(2000);
    }
    if (textStartsWith("你有未完成的笔记").exists() && text("放弃").exists()) {
        click("放弃");
        TKB.set_log("点击放弃未完成的笔记")
        sleep(2000);
    }
    if (desc("立即打开").exists()) {
        click(546, 1735)
        TKB.set_log("点击坐标关闭")
        sleep(2000);
    }
    if (id("android:id/content").packageName(qqb_pk).exists()) {
        TKB.set_log("遇到弹窗");
        sleep(5000);
    }
    if (text("忽略").exists()) {
        click("忽略");
        TKB.set_log("点击忽略");
        sleep(2000);
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.set_log("点击始终同意")
    }
    if (id("com.xingin.xhs:id/av5").exists()) {
        id("com.xingin.xhs:id/av3").findOnce().click()
        sleep(3000)
        TKB.set_log("点击关闭商城弹窗")
    }
    //qq浏览器小红书滑块验证码
    if (text("向右滑动滑块填充拼图").exists() && text('我要反馈').exists()) {
        TKB.set_log("游览器小红书滑块验证码")
        var zz = qqbget_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            log('xxx' + x)
            swipe(190, 1257, x + 130, 1257, random(1200, 1500))
            sleep(1000)
            TKB.set_log("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.set_log("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    if (text('请确认你不是机器人').exists()) {
        TKB.set_log("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        var x = zz[0]
        swipe(190, 1100, x - 10, 1100, random(1200, 1500))
        sleep(1000)
        TKB.set_log("滑块验证码成功")
        toastLog("滑块验证码成功")
    }
}

//小红书登录
function xhsdl() {
    TKB.set_log("小红书登录")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var zh = "18955553686"
    var yzm = "123456"
    var is_verify = 3
    var loginClick = 0
    var loginClickFlag = false;
    var sex;
    var xs = action_args['param']
    if (xs["性别"] == 1 || xs["性别"] == '1') {
        sex = 1;
        TKB.set_log("获取到性别" + sex)
    } else {
        sex = 0;
        TKB.set_log("获取到性别" + sex)
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.set_log("时间够了退出")
                TKB.clear(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.set_log("超时没在首页")
                back()
                sleep(1000)
                TKB.clear(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (is_verify <= 0) {
                TKB.set_log("获取验证码次数过多")
                alert("获取验证码次数过多，请稍后重试");
                TKB.clear();
                launch(dqbaoming);
                sleep(12000);
                is_verify = 3;
            }
            if (text("本机号码可一键登录") && text("其他号码登录").exists()) {
                TKB.set_log("一键登录")
                var clickOneKey = text("本机号码可一键登录").findOnce().bounds()
                click(clickOneKey.centerX(), clickOneKey.centerY())
                sleep(2000)
            }
            if (text('微信登录').exists() && text('手机号登录').exists()) {
                TKB.set_log("点击手机号登录")
                var clickPhonenum = text('手机号登录').findOnce().bounds()
                click(clickPhonenum.centerX(), clickPhonenum.centerY())
                sleep(2000)
            }
            if (text("其他号码登录").exists() && text("同意协议并登录").exists()) {
                TKB.set_log("点击同意协议并登录")
                var clickAgreement = text("同意协议并登录").findOnce().bounds()
                click(clickAgreement.centerX(), clickAgreement.centerY())
                sleep(2000)
            }
            if (text("请输入手机号码").exists() && text("请输入验证码").exists()) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.set_log("没有获取到手机号")
                    TKB.clear(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                }
                // 上传该应用注册的手机号
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                text("请输入手机号码").findOnce().setText(zh)
                sleep(2000)
            }
            if (id("com.xingin.xhs:id/wx").exists()) {
                if (id("com.xingin.xhs:id/wx").findOnce().enabled() == true) {
                    TKB.set_log("获取验证码")
                    var clickYzm = id("com.xingin.xhs:id/wx").findOnce().bounds()
                    click(clickYzm.centerX(), clickYzm.centerY())
                    TKB.set_log("点击验证码按钮")
                    sleep(random(10000, 15000))
                    yzm = TKB.huoquyzm("小红书")
                        // yzm="123456";
                    sleep(2000)
                    if (yzm == false) {
                        TKB.set_log("没有获取到验证码")
                        TKB.clear(dqbaoming)
                        launch(dqbaoming)
                        sleep(8000)
                        is_verify--
                        TKB.set_log("剩余次数" + is_verify);
                        TSD = (new Date()).getTime()
                        continue
                    } else {
                        TKB.set_log("请输入验证码" + yzm)
                        setText(1, yzm)
                        sleep(2000)
                        loginClickFlag = true;
                    }
                }
            }
            if (textStartsWith('重新发送(').exists()) {
                TKB.set_log("正在等待重新发送")
                sleep(5000)
            }
            if (id('com.xingin.xhs:id/bbv').exists() && loginClickFlag) {
                if (id('com.xingin.xhs:id/bbv').findOnce().enabled() == true) {
                    TKB.set_log("点击同意协议并登录")
                    loginClick++
                    click("同意协议并登录")
                    sleep(2000);
                    loginClickFlag = false;
                    if (loginClick >= 3) {
                        TKB.set_log("无法点击同意协议并登录")
                        alert("无法点击同意协议并登录，请稍后重试");
                        TKB.clear();
                        launch(dqbaoming);
                        sleep(12000);
                        loginClick = 0;
                    }
                }

            }
            //从中控获取性别
            if (id("com.xingin.xhs:id/b9t").exists() && id("com.xingin.xhs:id/bby").exists()) {
                if (sex == 0) {
                    TKB.set_log("选择男生")
                    var boy = id("com.xingin.xhs:id/bby").findOnce().bounds()
                    click(boy.centerX(), boy.centerY());
                } else {
                    TKB.set_log("选择女生")
                    var girl = id("com.xingin.xhs:id/b9t").findOnce().bounds()
                    click(girl.centerX(), girl.centerY());
                }
                sleep(2000)
            }
            if (text('选择你的生日').exists()) {
                TKB.set_log("滑动选择生日")
                if (id("com.xingin.xhs:id/dhj").exists()) {
                    TKB.set_log("滑动选择年份")
                    for (let i = 0; i < random(1, 3); i++) {
                        swipe(220, 1400, 193, 1835, 1000)
                        sleep(2000)
                    }
                }
                sleep(1000)
                if (id("com.xingin.xhs:id/bnp").exists()) {
                    TKB.set_log("滑动选择月份")
                    for (let i = 0; i < random(1, 3); i++) {
                        if (random(0, 1) == 0) {
                            swipe(553, random(1887, 1700), 564, random(1363, 1500), 1000)
                        } else {
                            swipe(564, random(1363, 1500), 553, random(1887, 1700), 1000)
                        }
                    }
                }
                sleep(1000)
                if (id("com.xingin.xhs:id/a4r").exists()) {
                    TKB.set_log("滑动选择日期")
                    for (let i = 0; i < random(1, 3); i++) {
                        if (random(0, 1) == 0) {
                            swipe(910, random(1887, 1700), 920, random(1363, 1500), 1000)
                        } else {
                            swipe(920, random(1363, 1500), 910, random(1887, 1700), 1000)
                        }
                    }
                }
                sleep(2000)
                if (text("确认").exists() && text("确认").findOnce().enabled() == true) {
                    TKB.set_log("点击确认")
                    click("确认")
                    sleep(2000)
                }
            }
            if (text("下一步").exists()) {
                TKB.set_log("点击下一步")
                click("下一步")
                sleep(2000)
            }
            if (text("选择感兴趣的内容").exists()) {
                do {
                    var interest = id("com.xingin.xhs:id/b9y").find();
                    for (let i = 0; i < random(2, 3); i++) {
                        interest[random(0, interest.size() - 1)].parent().click();
                        sleep(2000)
                    }
                    swipe(500, 1500, 500, 500, 1000);
                } while ((textStartsWith("至少关注").exists()))
                if (text("下一步").exists()) {
                    TKB.set_log("点击下一步")
                    click("下一步")
                    sleep(2000)
                }
            }
            while (text("始终同意").exists()) {
                click("始终同意");
                sleep(2000);
                TKB.set_log("点击始终同意")
            }
            if (text("在小红书上的好友").exists()) {
                TKB.set_log("好友中点击下一步")
                click("下一步")
                sleep(2000)
            }
            if (text("让大家更好地认识你").exists()) {
                TKB.set_log("输入名字")
                    // text('名字').findOnce().setText(getRandomName(random(3, 6)));
                text('名字').findOnce().setText(result_name());
                sleep(2000)
            }
            if (text("完成").exists() && text("完成").findOnce().enabled() == true) {
                TKB.set_log("点击完成")
                click("完成")
                sleep(2000)
            }
            if (text("上传一张头像吧").exists()) {
                TKB.set_log("点击跳过")
                click("跳过")
                sleep(2000)
            }
            if (text("发现").exists() && text("关注").exists()) {
                TKB.set_log("登录成功")
                sleep(2000)
                return true
            }
        } catch (error) {
            TKB.set_log(error)
            sleep(random(3000, 8000))
        }
    }
}


//随机产生名字
function result_name() {
    xing = ['赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许',
        '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章',
        '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳',
        '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常',
        '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹',
        '姚', '邵', '堪', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞',
        '熊', '纪', '舒', '屈', '项', '祝', '董', '梁'
    ]
    ming = ['的', '一', '是', '了', '我', '不', '人', '在', '他', '有', '这', '个', '上', '们', '来', '到', '时', '大', '地',
        '为', '子', '中', '你', '说', '生', '国', '年', '着', '就', '那', '和', '要', '她', '出', '也', '得', '里', '后', '自',
        '以', '会', '家', '可', '下', '而', '过', '天', '去', '能', '对', '小', '多', '然', '于', '心', '学', '么', '之', '都',
        '好', '看', '起', '发', '当', '没', '成', '只', '如', '事', '把', '还', '用', '第', '样', '道', '想', '作', '种', '开',
        '美', '总', '从', '无', '情', '己', '面', '最', '女', '但', '现', '前', '些', '所', '同', '日', '手', '又', '行', '意',
        '动', '方', '期', '它', '头', '经', '长', '儿', '回', '位', '分', '爱', '老', '因', '很', '给', '名', '法', '间', '斯',
        '知', '世', '什', '两', '次', '使', '身', '者', '被', '高', '已', '亲', '其', '进', '此', '话', '常', '与', '活', '正',
        '感', '见', '明', '问', '力', '理', '尔', '点', '文', '几', '定', '本', '公', '特', '做', '外', '孩', '相', '西', '果',
        '走', '将', '月', '十', '实', '向', '声', '车', '全', '信', '重', '三', '机', '工', '物', '气', '每', '并', '别', '真',
        '打', '太', '新', '比', '才', '便', '夫', '再', '书', '部', '水', '像', '眼', '等', '体', '却', '加', '电', '主', '界',
        '门', '利', '海', '受', '听', '表', '德', '少', '克', '代', '员', '许', '稜', '先', '口', '由', '死', '安', '写', '性',
        '马', '光', '白', '或', '住', '难', '望', '教', '命', '花', '结', '乐', '色', '更', '拉', '东', '神', '记', '处', '让',
        '母', '父', '应', '直', '字', '场', '平', '报', '友', '关', '放', '至', '张', '认', '接', '告', '入', '笑', '内', '英',
        '军', '候', '民', '岁', '往', '何', '度', '山', '觉', '路', '带', '万', '男', '边', '风', '解', '叫', '任', '金', '快',
        '原', '吃', '妈', '变', '通', '师', '立', '象', '数', '四', '失', '满', '战', '远', '格', '士', '音', '轻', '目', '条',
        '呢', '病', '始', '达', '深', '完', '今', '提', '求', '清', '王', '化', '空', '业', '思', '切', '怎', '非', '找', '片',
        '罗', '钱', '紶', '吗', '语', '元', '喜', '曾', '离', '飞', '科', '言', '干', '流', '欢', '约', '各', '即', '指', '合',
        '反', '题', '必', '该', '论', '交', '终', '林', '请', '医', '晚', '制', '球', '决', '窢', '传', '画', '保', '读', '运',
        '及', '则', '房', '早', '院', '量', '苦', '火', '布', '品', '近', '坐', '产', '答', '星', '精', '视', '五', '连', '司',
        '巴', '奇', '管', '类', '未', '朋', '且', '婚', '台', '夜', '青', '北', '队', '久', '乎', '越', '观', '落', '尽', '形',
        '影', '红', '爸', '百', '令', '周', '吧', '识', '步', '希', '亚', '术', '留', '市', '半', '热', '送', '兴', '造', '谈',
        '容', '极', '随', '演', '收', '首', '根', '讲', '整', '式', '取', '照', '办', '强', '石', '古', '华', '諣', '拿', '计',
        '您', '装', '似', '足', '双', '妻', '尼', '转', '诉', '米', '称', '丽', '客', '南', '领', '节', '衣', '站', '黑', '刻',
        '统', '断', '福', '城', '故', '历', '惊', '脸', '选', '包', '紧', '争', '另', '建', '维', '绝', '树', '系', '伤', '示',
        '愿', '持', '千', '史', '谁', '准', '联', '妇', '纪', '基', '买', '志', '静', '阿', '诗', '独', '复', '痛', '消', '社',
        '算', '义', '竟', '确', '酒', '需', '单', '治', '卡', '幸', '兰', '念', '举', '仅', '钟', '怕', '共', '毛', '句', '息',
        '功', '官', '待', '究', '跟', '穿', '室', '易', '游', '程', '号', '居', '考', '突', '皮', '哪', '费', '倒', '价', '图',
        '具', '刚', '脑', '永', '歌', '响', '商', '礼', '细', '专', '黄', '块', '脚', '味', '灵', '改', '据', '般', '破', '引',
        '食', '仍', '存', '众', '注', '笔', '甚', '某', '沉', '血', '备', '习', '校', '默', '务', '土', '微', '娘', '须', '试',
        '怀', '料', '调', '广', '蜖', '苏', '显', '赛', '查', '密', '议', '底', '列', '富', '梦', '错', '座', '参', '八', '除',
        '跑', '亮', '假', '印', '设', '线', '温', '虽', '掉', '京', '初', '养', '香', '停', '际', '致', '阳', '纸', '李', '纳',
        '验', '助', '激', '够', '严', '证', '帝', '饭', '忘', '趣', '支', '春', '集', '丈', '木', '研', '班', '普', '导', '顿',
        '睡', '展', '跳', '获', '艺', '六', '波', '察', '群', '皇', '段', '急', '庭', '创', '区', '奥', '器', '谢', '弟', '店',
        '否', '害', '草', '排', '背', '止', '组', '州', '朝', '封', '睛', '板', '角', '况', '曲', '馆', '育', '忙', '质', '河',
        '续', '哥', '呼', '若', '推', '境', '遇', '雨', '标', '姐', '充', '围', '案', '伦', '护', '冷', '警', '贝', '著', '雪',
        '索', '剧', '啊', '船', '险', '烟', '依', '斗', '值', '帮', '汉', '慢', '佛', '肯', '闻', '唱', '沙', '局', '伯', '族',
        '低', '玩', '资', '屋', '击', '速', '顾', '泪', '洲', '团', '圣', '旁', '堂', '兵', '七', '露', '园', '牛', '哭', '旅',
        '街', '劳', '型', '烈', '姑', '陈', '莫', '鱼', '异', '抱', '宝', '权', '鲁', '简', '态', '级', '票', '怪', '寻', '杀',
        '律', '胜', '份', '汽', '右', '洋', '范', '床', '舞', '秘', '午', '登', '楼', '贵', '吸', '责', '例', '追', '较', '职',
        '属', '渐', '左', '录', '丝', '牙', '党', '继', '托', '赶', '章', '智', '冲', '叶', '胡', '吉', '卖', '坚', '喝', '肉',
        '遗', '救', '修', '松', '临', '藏', '担', '戏', '善', '卫', '药', '悲', '敢', '靠', '伊', '村', '戴', '词', '森', '耳',
        '差', '短', '祖', '云', '规', '窗', '散', '迷', '油', '旧', '适', '乡', '架', '恩', '投', '弹', '铁', '博', '雷', '府',
        '压', '超', '负', '勒', '杂', '醒', '洗', '采', '毫', '嘴', '毕', '九', '冰', '既', '状', '乱', '景', '席', '珍', '童',
        '顶', '派', '素', '脱', '农', '疑', '练', '野', '按', '犯', '拍', '征', '坏', '骨', '余', '承', '置', '臓', '彩', '灯',
        '巨', '琴', '免', '环', '姆', '暗', '换', '技', '翻', '束', '增', '忍', '餐', '洛', '塞', '缺', '忆', '判', '欧', '层',
        '付', '阵', '玛', '批', '岛', '项', '狗', '休', '懂', '武', '革', '良', '恶', '恋', '委', '拥', '娜', '妙', '探', '呀',
        '营', '退', '摇', '弄', '桌', '熟', '诺', '宣', '银', '势', '奖', '宫', '忽', '套', '康', '供', '优', '课', '鸟', '喊',
        '降', '夏', '困', '刘', '罪', '亡', '鞋', '健', '模', '败', '伴', '守', '挥', '鲜', '财', '孤', '枪', '禁', '恐', '伙',
        '杰', '迹', '妹', '藸', '遍', '盖', '副', '坦', '牌', '江', '顺', '秋', '萨', '菜', '划', '授', '归', '浪', '听', '凡',
        '预', '奶', '雄', '升', '碃', '编', '典', '袋', '莱', '含', '盛', '济', '蒙', '棋', '端', '腿', '招', '释', '介', '烧', '误', '乾', '坤'
    ]
    var name = xing[Math.floor(Math.random() * xing.length)] + ming[Math.floor(Math.random() * ming.length)] + ming[Math.floor(Math.random() * ming.length)] + ming[Math.floor(Math.random() * ming.length)] + ming[Math.floor(Math.random() * ming.length)]
    return name
}

_THREADSS = threads.start(function () {
    while (1) {
        popUp()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
var dl = xhsdl()
if (dl == true) {
    var msg_num = 1
    var msg = '成功'
    var notice_name = 'after_script'
} else {
    var msg_num = 0
    var msg = '失败'
    var notice_name = 'stop'
}
TKB.send_message({notice_name: notice_name,notice_content: [msg_num, msg]})
