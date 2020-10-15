var TKB = require("/sdcard/Android/data/.haoareme/模块.js")
//验证
function picture_verify(img_id) {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
            // toast("截屏已完成")
        var src = images.read(img)
        var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha'
        var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "zh",
            image: open(imgFile),
            type: 'file'
        });
        var html = res.body.json()
        return html['code']
    } catch (error) {
        log(error)
        sleep(1100)
    }
}

//所有判断和弹窗
function zonghe() {
    if (text('重新登录').exists() && text('去登录').exists()) {
        TKB.set_log('账号过期重新登录')
        click('去登录')
        sleep(1500)
        zhdl()
        sleep(1000)
    }
    if (text('需要身份验证').exists() && id('com.zhihu.android:id/captcha_image').exists()) {
        log('验证码')
        var z = picture_verify('com.zhihu.android:id/captcha_image')
        toastLog('验证码:' + z)
        setText(z)
        sleep(1000)
        click(530, 790)
        sleep(5000)
    }
    if (text("向你申请如下权限：").exists()) {
        TKB.set_log("点击同意并进入")
        click("同意并进入")
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.set_log("点击始终同意")
    }
    if (text("位置权限申请").exists() || id("com.zhihu.android:id/txt_title").exists()) {
        TKB.set_log("点击确认")
        click("确认");
        sleep(2000)
    }
    if (text("重新加载").exists()) {
        TKB.set_log("重新加载")
        click("重新加载")
        sleep(2000)
    }
    if (text("立刻领取").exists()) {
        TKB.set_log("点击关闭")
        id("com.zhihu.android:id/cancel_btn").findOnce().click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.set_log("我知道了")
        click('我知道了')
        sleep(2000)
    }
    if (desc("我知道了").exists()) {
        TKB.set_log("我知道了")
        desc('我知道了').findOnce().click()
        sleep(2000)
    }
    if (id('com.zhihu.android:id/approve_tip').exists()) {
        TKB.set_log("双击快速赞同")
        sleep(4000)
    }
    if (text("立刻领取").exists() && id('com.zhihu.android:id/cancel_btn').exists()) {
        TKB.set_log("关闭成就")
        click(970, 580)
        sleep(2000)
    }
    if (id('com.zhihu.android:id/close').exists()) {
        TKB.set_log("关闭")
        id('com.zhihu.android:id/close').click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.set_log("点击我知道了")
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
    if (text("欢迎加入知乎内测").exists()) {
        click("取消");
        sleep(2000);
        TKB.set_log("点击取消");
    }
    // if (text("写回答").exists()) {
    //     id("com.zhihu.android:id/close").findOnce().click()
    //     TKB.set_log("点击关闭");
    //     sleep(3000)
    // }
}

//随机中文名字
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

//知乎登录
function zhdl() {
    TKB.set_log("知乎登录")
    launch('com.zhihu.android')
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    var zh = "18967726665"
    var yzm = "12346"
    var is_verify = 3
    var loginClick = 0
    var sex;
    var xs = action_args['param']
    if (xs["性别"] == 1 || xs["性别"] == '1') {
        sex = 1;
        TKB.set_log("获取到性别" + sex)
    } else {
        sex = 0;
        TKB.set_log("获取到性别" + sex)
    }
    var sz = {
        "1": [294, 1317],
        "2": [540, 1326],
        "3": [780, 1320],
        "4": [300, 1483],
        "5": [540, 1500],
        "6": [780, 1482],
        "7": [298, 1648],
        "8": [606, 1632],
        "9": [777, 1660],
        "0": [550, 1820]
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                TKB.set_log("时间够了退出")
                TKB.clear('com.zhihu.android')
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.set_log("超时没在首页")
                back()
                sleep(1000)
                TKB.clear('com.zhihu.android')
                sleep(3000)
                launch('com.zhihu.android')
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("未登录").exists()) {
                TKB.set_log("点击首页未登录")
                click("未登录")
                sleep(2000)
            }
            if (id("com.zhihu.android:id/phone_login_btn").exists()) {
                TKB.set_log("点击未登录页面的手机号登录")
                id("com.zhihu.android:id/phone_login_btn").findOnce().click()
                sleep(2000)
            }
            if (id("com.zhihu.android:id/phoneDoor").exists()) {
                TKB.set_log("点击手机号登录")
                id("com.zhihu.android:id/phoneDoor").findOnce().click()
                sleep(2000)
            }
            if (text("手机号登录").exists()) {
                TKB.set_log("点击手机号登录")
                click("手机号登录")
                sleep(2000)
            }
            if (text("注册/登录后继续操作").exists()) {
                TKB.set_log("点击一键登录")
                id("com.zhihu.android:id/tv_operator_login").findOnce().click()
                sleep(2000)
            }
            if (text("登录知乎，体验更多功能").exists() && text("本手机号：").exists()) {
                TKB.set_log("一键登录")
                id("com.zhihu.android:id/bt_operator_login_direct").findOnce().click()
                loginClick++
                sleep(2000)
            }
            if (text("欢迎来到知乎").exists()) {
                do {
                    var interest = id("com.zhihu.android:id/cl_item_container").find();
                    for (let i = 0; i < random(3, 5); i++) {
                        TKB.set_log("点击兴趣")
                        interest[random(0, interest.size() - 1)].parent().click();
                        sleep(2000)
                    }
                } while ((textEndsWith("标签试试").exists()))
                sleep(2000)
                if (text("下一步").exists()) {
                    TKB.set_log("点击下一步")
                    click("下一步")
                    sleep(2000)
                }
            }
            if (loginClick >= 3) {
                TKB.set_log("一键登录异常")
                return false
            }
            if (text("短信验证码登录").exists() && text("手机号").exists()) {
                TKB.set_log("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.set_log("没有获取到手机号")
                    TKB.clear('com.zhihu.android')
                    sleep(10000)
                    launch('com.zhihu.android')
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                }
                // 上传该应用注册的手机号
                // TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                text("手机号").findOnce().setText(zh)
                sleep(2000)
            }
            if (text('发送验证码').exists() && text('发送验证码').findOnce().enabled() == true) {
                TKB.set_log("发送验证码")
                id("com.zhihu.android:id/btn_func").findOnce().click()
                sleep(random(10000, 15000))
            }
            if (text('输入验证码').exists() && textStartsWith('短信已发送至').exists() || text('输入验证码').exists() && text('重发短信验证码').exists()) {
                if (text('输入验证码').exists() && text('重发短信验证码').exists()) {
                    click('重新获取验证码')
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("知乎")
                sleep(2000)
                if (yzm == false) {
                    TKB.set_log("没有获取到验证码")
                    TKB.clear('com.zhihu.android')
                    sleep(10000)
                    launch('com.zhihu.android')
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    TKB.set_log("请输入验证码" + yzm)
                    for (var i = 0; i < 6; i++) {
                        var x = yzm.substr(i, 1);
                        TKB.set_log(x)
                        click(sz[x][0], sz[x][1]);
                        sleep(1500)
                        TKB.set_log('第' + (i + 1) + '次')
                    }
                }
                sleep(2000)
            }
            if (is_verify <= 0) {
                TKB.set_log("获取验证码次数过多")
                TKB.clear('com.zhihu.android')
                return false
            }
            if (text("设置个人信息").exists()) {
                TKB.set_log("输入用户名")
                text('输入用户名').findOnce().setText(result_name());
                sleep(2000)
                TKB.set_log("点击进入")
                id("com.zhihu.android:id/btn_confirm").findOnce().click()
                sleep(2000)
            }
            //从中控获取性别
            if (text("请选择你的性别").exists()) {
                if (sex == 0) {
                    TKB.set_log("选择男生")
                    id("com.zhihu.android:id/img_male").findOnce().click()
                } else {
                    TKB.set_log("选择女生")
                    id("com.zhihu.android:id/img_male").findOnce().click()
                }
                sleep(2000)
            }
            if (text("完成").exists() && text("设置个人信息").exists()) {
                TKB.set_log("点击完成")
                id("com.zhihu.android:id/btn_confirm").findOnce().click()
                sleep(2000)
            }
            if (text("选择你喜欢的内容").exists()) {
                TKB.set_log("点击喜欢的内容")
                for (let i = 0; i < 6; i++) {
                    var interest = id("com.zhihu.android:id/cl_content").find();
                    TKB.set_log("点击兴趣")
                    interest[random(0, interest.size() - 1)].parent().click();
                    sleep(2000)
                }
                sleep(3000)
            }
            if (id("com.zhihu.android:id/img_next_page").exists()) {
                TKB.set_log("点击蓝色的钩")
                id("com.zhihu.android:id/img_next_page").findOnce().click()
                sleep(2000)
            }
            if (text("为你推荐的知友").exists() || text("为你推荐的优秀知友").exists()) {
                TKB.set_log("点击兴趣博主")
                for (var i = 0; i < 5; i++) {
                    click(random(150, 675), random(923, 1582))
                    sleep(1000)
                }
                sleep(2000)
                TKB.set_log("点击完成！进入首页")
                id("com.zhihu.android:id/txt_next_step").findOnce().click()
                sleep(4000)
            }
            if (text("位置权限申请").exists() || id("com.zhihu.android:id/txt_title").exists()) {
                TKB.set_log("点击确认")
                click("确认");
                sleep(2000)
            }
            if (text("我的").exists() && text("首页").exists()) {
                TKB.set_log("已成功登录账号")
                sleep(2000)
                return true
            }
            while (text("始终同意").exists()) {
                click("始终同意");
                sleep(2000);
                TKB.set_log("点击始终同意")
            }
            if (text("需要验证身份").exists()) {
                TKB.set_log("验证身份，需要人为操作")
                toast("等待人为操作")
                sleep(20 * 1000)
            }
        } catch (error) {
            TKB.set_log(error)
            sleep(random(3000, 8000))
        }
    }

}

_THREADSS = threads.start(function () {
    while (1) {
        zonghe()
    }
})
threads.start(function () {
    threads.start(function () {
        setInterval(() => {
            TKB.send_message({notice_name: "task_time_stamp", notice_content: (new Date()).getTime()})
        }, 15 * 1000)
    })
})
var dl = zhdl()
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
