﻿log("tKB")
sleep(3000)
auto.waitFor()
sleep(2000)
if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}

var TKB = require('/sdcard/tkb2.js')
var sbxx = files.read("/sdcard/meituconfig.txt") //读取设备信息
var sbxx_table = sbxx.split("-")
var sbip = sbxx_table[3] //服务器ip
var yhname = sbxx_table[1] //服务器用户名
var yhbh = sbxx_table[2] //手机编号  weixinflag
var user_id = sbxx_table[4] //跟服务器对接用到的
var run_id = sbxx_table[5] //任务对应的服务器上的id
var run_time = sbxx_table[6] //该任务运行的时间
var fun = sbxx_table[7] //需要做的子任务
var app_id = sbxx_table[8]
var dqbaoming = "com.zhihu.android" //该项目包名
var qqb_pk = 'com.tencent.mtt'
var xmxh = "34" //项目序号
var browseTime = 30 * 60 * 1000;
var focusonUrl;
var clickFocuson;
var clickOther;
var comment_url;
var comment_sentence, comments, word
var likeclick_url;
//*******************************************************知乎项目 *****************************************************************

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
        TKB.xgsrizhi('账号过期重新登录')
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
        TKB.xgsrizhi("点击同意并进入")
        click("同意并进入")
        sleep(2000)
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (text("位置权限申请").exists() || id("com.zhihu.android:id/txt_title").exists()) {
        TKB.xgsrizhi("点击确认")
        click("确认");
        sleep(2000)
    }
    if (text("重新加载").exists()) {
        TKB.xgsrizhi("重新加载")
        click("重新加载")
        sleep(2000)
    }
    if (text("立刻领取").exists()) {
        TKB.xgsrizhi("点击关闭")
        id("com.zhihu.android:id/cancel_btn").findOnce().click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click('我知道了')
        sleep(2000)
    }
    if (desc("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        desc('我知道了').findOnce().click()
        sleep(2000)
    }
    if (id('com.zhihu.android:id/approve_tip').exists()) {
        TKB.xgsrizhi("双击快速赞同")
        sleep(4000)
    }
    if (text("立刻领取").exists() && id('com.zhihu.android:id/cancel_btn').exists()) {
        TKB.xgsrizhi("关闭成就")
        click(970, 580)
        sleep(2000)
    }
    if (id('com.zhihu.android:id/close').exists()) {
        TKB.xgsrizhi("关闭")
        id('com.zhihu.android:id/close').click()
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.xgsrizhi("点击我知道了")
        sleep(2000);
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("点击以后再说")
        sleep(2000);
    }
    if (text("知道了").exists()) {
        click("知道了");
        TKB.xgsrizhi("点击知道了")
        sleep(2000);
    }
    if (text("开启位置信息开关").exists()) {
        click("取消");
        sleep(2000);
        TKB.xgsrizhi("点击取消位置信息开启");
    }
    if (text("欢迎加入知乎内测").exists()) {
        click("取消");
        sleep(2000);
        TKB.xgsrizhi("点击取消");
    }
    if (text("写回答").exists()) {
        id("com.zhihu.android:id/close").findOnce().click()
        TKB.xgsrizhi("点击关闭");
        sleep(3000)
    }
}

//获取网址
function zhid(sbip, run_id) {
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
    TKB.xgsrizhi("知乎登录")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(20, 30)
    // var zh = "18967726665"
    // var yzm = "12346"
    var is_verify = 3
    var loginClick = 0
    var sex;
    var interestName;
    try {
        if (fun == "养号") {
            var xs = zhid(sbip, run_id)
            if (xs['兴趣'] == 0 || xs['兴趣'] == '0') {
                interestName = ['推荐'];
                TKB.xgsrizhi("未获取到兴趣")
            } else {
                interestName = xs['兴趣'].split('|');
                tabList = [];
                for (let i = 0; i < interestName.length - 1; i++) {
                    if (random(0, 2) <= 1) {
                        tabList.push(interestName[i]);
                        TKB.xgsrizhi("获取到兴趣" + tabList[tabList.length - 1])
                    }
                }
            }
            if (xs["性别"] == 1 || xs["性别"] == '1') {
                sex = 1;
                TKB.xgsrizhi("获取到性别" + sex)
            } else {
                sex = 0;
                TKB.xgsrizhi("获取到性别" + sex)
            }
        } else if (fun == "关注") {
            var xs = zhid(sbip, run_id)
            clickFocuson = xs["关注方式"];
            TKB.xgsrizhi("获取到第" + clickFocuson + "种")
            clickOther = xs["关注人数"]
            TKB.xgsrizhi("获取到关注人数" + clickOther)
            focusonUrl = xs['关注链接']
            TKB.xgsrizhi("获取到关注链接" + focusonUrl)
        }
    } catch (error) {
        TKB.xgsrizhi(error);
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
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (text("未登录").exists()) {
                TKB.xgsrizhi("点击首页未登录")
                click("未登录")
                sleep(2000)
            }
            if (id("com.zhihu.android:id/phone_login_btn").exists()) {
                TKB.xgsrizhi("点击未登录页面的手机号登录")
                id("com.zhihu.android:id/phone_login_btn").findOnce().click()
                sleep(2000)
            }
            if (id("com.zhihu.android:id/phoneDoor").exists()) {
                TKB.xgsrizhi("点击手机号登录")
                id("com.zhihu.android:id/phoneDoor").findOnce().click()
                sleep(2000)
            }
            if (text("手机号登录").exists()) {
                TKB.xgsrizhi("点击手机号登录")
                click("手机号登录")
                sleep(2000)
            }
            if (text("注册/登录后继续操作").exists()) {
                TKB.xgsrizhi("点击一键登录")
                id("com.zhihu.android:id/tv_operator_login").findOnce().click()
                sleep(2000)
            }
            if (text("登录知乎，体验更多功能").exists() && text("本手机号：").exists()) {
                TKB.xgsrizhi("一键登录")
                id("com.zhihu.android:id/bt_operator_login_direct").findOnce().click()
                loginClick++
                sleep(2000)
            }
            if (text("欢迎来到知乎").exists()) {
                do {
                    var interest = id("com.zhihu.android:id/cl_item_container").find();
                    for (let i = 0; i < random(3, 5); i++) {
                        TKB.xgsrizhi("点击兴趣")
                        interest[random(0, interest.size() - 1)].parent().click();
                        sleep(2000)
                    }
                } while ((textEndsWith("标签试试").exists()))
                sleep(2000)
                if (text("下一步").exists()) {
                    TKB.xgsrizhi("点击下一步")
                    click("下一步")
                    sleep(2000)
                }
            }
            if (loginClick >= 3) {
                TKB.xgsrizhi("一键登录异常")
                return false
            }
            if (text("短信验证码登录").exists() && text("手机号").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                text("手机号").findOnce().setText(zh)
                sleep(2000)
            }
            if (text('发送验证码').exists() && text('发送验证码').findOnce().enabled() == true) {
                TKB.xgsrizhi("发送验证码")
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
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh(dqbaoming)
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                    continue
                } else {
                    TKB.xgsrizhi("请输入验证码" + yzm)
                    for (var i = 0; i < 6; i++) {
                        var x = yzm.substr(i, 1);
                        TKB.xgsrizhi(x)
                        click(sz[x][0], sz[x][1]);
                        sleep(1500)
                        TKB.xgsrizhi('第' + (i + 1) + '次')
                    }
                }
                sleep(2000)
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if (text("设置个人信息").exists()) {
                TKB.xgsrizhi("输入用户名")
                text('输入用户名').findOnce().setText(result_name());
                sleep(2000)
                TKB.xgsrizhi("点击进入")
                id("com.zhihu.android:id/btn_confirm").findOnce().click()
                sleep(2000)
            }
            //从中控获取性别
            if (text("请选择你的性别").exists()) {
                if (sex == 0) {
                    TKB.xgsrizhi("选择男生")
                    id("com.zhihu.android:id/img_male").findOnce().click()
                } else {
                    TKB.xgsrizhi("选择女生")
                    id("com.zhihu.android:id/img_male").findOnce().click()
                }
                sleep(2000)
            }
            if (text("完成").exists() && text("设置个人信息").exists()) {
                TKB.xgsrizhi("点击完成")
                id("com.zhihu.android:id/btn_confirm").findOnce().click()
                sleep(2000)
            }
            if (text("选择你喜欢的内容").exists()) {
                TKB.xgsrizhi("点击喜欢的内容")
                for (let i = 0; i < 6; i++) {
                    var interest = id("com.zhihu.android:id/cl_content").find();
                    TKB.xgsrizhi("点击兴趣")
                    interest[random(0, interest.size() - 1)].parent().click();
                    sleep(2000)
                }
                sleep(3000)
            }
            if (id("com.zhihu.android:id/img_next_page").exists()) {
                TKB.xgsrizhi("点击蓝色的钩")
                id("com.zhihu.android:id/img_next_page").findOnce().click()
                sleep(2000)
            }
            if (text("为你推荐的知友").exists() || text("为你推荐的优秀知友").exists()) {
                TKB.xgsrizhi("点击兴趣博主")
                for (var i = 0; i < 5; i++) {
                    click(random(150, 675), random(923, 1582))
                    sleep(1000)
                }
                sleep(2000)
                TKB.xgsrizhi("点击完成！进入首页")
                id("com.zhihu.android:id/txt_next_step").findOnce().click()
                sleep(4000)
            }
            if (text("位置权限申请").exists() || id("com.zhihu.android:id/txt_title").exists()) {
                TKB.xgsrizhi("点击确认")
                click("确认");
                sleep(2000)
            }
            if (text("我的").exists() && text("首页").exists()) {
                TKB.xgsrizhi("已成功登录账号")
                sleep(2000)
                return true
            }
            while (text("始终同意").exists()) {
                click("始终同意");
                sleep(2000);
                TKB.xgsrizhi("点击始终同意")
            }
            if (text("需要验证身份").exists()) {
                TKB.xgsrizhi("验证身份，需要人为操作")
                toast("等待人为操作")
                sleep(20 * 1000)
            }
            zonghe()
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }

}

//知乎养号
function zhyh() {
    TKB.xgsrizhi('知乎养号')
    launch(dqbaoming)
    sleep(5000)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(90, 150)
    var TSD = (new Date()).getTime()
    // var zt_percentage = 30// 赞同百分比
    // var pl_percentage = 10
    // var xh_percentage = 5// 喜欢百分比
    // var sc_percentage = 1// 收藏百分比
    // var zt_numx = 200 // 赞同数量
    var a = 0
    var tem = 0
    var tj_time = random(30, 40)
    var temx = 0
    var rb_time = random(10, 30)
    var xs = zhid(sbip, run_id)
    var xh = xs['喜欢百分比']
    var zt = xs['赞同百分比']
    var zt_num = xs['赞同数量']
    if (xh == 0 || xh == '0') {
        xh_percentage = 10
        TKB.xgsrizhi('喜欢百分比' + xh_percentage)
        toastLog('喜欢百分比' + xh_percentage)
    } else {
        xh_percentage = xh
        TKB.xgsrizhi('喜欢百分比' + xh_percentage)
        toastLog('喜欢百分比' + xh_percentage)
    }
    if (zt == 0 || zt == '0') {
        zt_percentage = 30
        TKB.xgsrizhi('赞同百分比' + zt_percentage)
        toastLog('赞同百分比' + zt_percentage)
    } else {
        zt_percentage = zt
        TKB.xgsrizhi('赞同百分比' + zt_percentage)
        toastLog('赞同百分比' + zt_percentage)
    }
    if (zt_num == 0 || zt_num == '0') {
        zt_numx = 200
        TKB.xgsrizhi('赞同数量' + zt_numx)
        toastLog('赞同数量' + zt_numx)
    } else {
        zt_numx = zt_num
        TKB.xgsrizhi('赞同数量' + zt_numx)
        toastLog('赞同数量' + zt_numx)
    }
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi('超时没在首页')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
        }
        if (a == 0) {
            var tj = (new Date()).getTime()
            while (1) {
                if ((new Date()).getTime() - tj > tj_time * 60 * 1000) {
                    TKB.xgsrizhi('去看热榜')
                    if (text('热榜').exists() && text('推荐').exists()) {
                        a = 1
                        break
                    } else {
                        back()
                        sleep(500)
                    }
                }
                if (tem == 0) {
                    click('推荐')
                    TKB.xgsrizhi('点击推荐')
                    sleep(3000)
                    tem = 1
                }
                zonghe()
                if (desc('关注').exists() && desc('推荐').exists() && text('热榜').exists()) {
                    TKB.xgsrizhi("新闻界面")
                    try {
                        var ss = TKB.getAllTexts()
                        for (j = 0, len = ss.length; j < len; j++) {
                            if (ss[j].indexOf("赞同") != -1) {
                                if (ss[j].indexOf("万赞同") != -1) {
                                    var aa = text(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                        TKB.xgsrizhi('点赞量大于1万:' + ss[j])
                                        click(300, aa.centerY())
                                        sleep(3000)
                                    }
                                } else {
                                    var st = ss[j].split("赞")
                                    if (Number(st[0]) > zt_numx) {
                                        var aa = text(ss[j]).findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                            TKB.xgsrizhi('点赞量大于' + zt_numx + ':' + ss[j])
                                            click(300, aa.centerY())
                                            sleep(3000)
                                        }
                                    }
                                }
                            }
                        }
                    } catch (error) {
                        log(error);
                        sleep(2000)
                    }
                } else if (text("我的").exists() && text("首页").exists()) {
                    TKB.xgsrizhi("首页")
                    click('首页')
                    sleep(2000)
                }
                if (id('com.zhihu.android:id/barrage_switch').exists() && id('com.zhihu.android:id/barrage_expression_left').exists() && id('com.zhihu.android:id/barrage_expression_right').exists()) {
                    TKB.xgsrizhi("视频界面")
                    sleep(3000)
                    var sp_time = random(40, 60)
                    var spRT = (new Date()).getTime()
                    while (1) {
                        if ((new Date()).getTime() - spRT < sp_time * 1000) {
                            TKB.xgsrizhi("观看视频中")
                            toastLog("观看视频中")
                            sleep(4000)
                        } else {
                            TKB.xgsrizhi("视频观看完成...")
                            break
                        }
                    }
                    back()
                    sleep(1000)
                }
                if (desc('返回').exists() && id('com.zhihu.android:id/search').exists() && id('com.zhihu.android:id/more').exists()) {
                    TKB.xgsrizhi("文章界面")
                    var dj = random(1, 100)
                    try {
                        sleep(8000)
                        for (var i = 0; i < random(4, 8); i++) {
                            TKB.xgsrizhi("浏览文章")
                            swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                            sleep(random(8000, 13000))
                            if (text("添加评论...").exists()) {
                                var aa = text("添加评论...").findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                    TKB.xgsrizhi('到底了')
                                    sleep(1000)
                                    break
                                }
                            }
                        }
                        if (dj < zt_percentage) {
                            TKB.xgsrizhi("赞同")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf(" 赞同 ") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.xgsrizhi('赞同')
                                        click(300, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        if (dj < xh_percentage) {
                            TKB.xgsrizhi("喜欢")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("喜欢") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.xgsrizhi('喜欢')
                                        click(680, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        if (dj < sc_percentage) {
                            TKB.xgsrizhi("收藏")
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("收藏") != -1) {
                                    var aa = desc(ss[j]).findOnce().bounds()
                                    if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                        TKB.xgsrizhi('收藏')
                                        click(830, aa.centerY())
                                        sleep(3000)
                                    }
                                }
                            }
                        }
                        back()
                        sleep(1000)
                    } catch (error) {

                    }
                }
                swipe(random(400, 600), 1700, random(400, 600), 300, random(1200, 2000))
                sleep(3000)
            }
        }
        if (a == 1) {
            var rb = (new Date()).getTime()
            while (1) {
                try {
                    zonghe()
                    if ((new Date()).getTime() - rb > rb_time * 60 * 1000) {
                        TKB.xgsrizhi('看完了')
                        a = 1
                        break
                    }
                    if (temx == 0) {
                        if (text('热榜').exists() && text('推荐').exists()) {
                            click('热榜')
                            sleep(2000)
                        }
                        if (id('com.zhihu.android:id/sort_view').exists()) {
                            var aa = id('com.zhihu.android:id/sort_view').findOnce().bounds()
                            click(aa.centerX(), aa.centerY())
                            sleep(2000)
                        }
                        if (text('全部榜单').exists() && text('我的榜单').exists()) {
                            while (1) {
                                if (id('com.zhihu.android:id/tab_add_bg').exists()) {
                                    var zz = id('com.zhihu.android:id/tab_add_bg').findOnce().bounds()
                                    click(zz.centerX(), zz.centerY())
                                    sleep(1000)
                                } else if (text('更多领域榜单敬请期待').exists()) {
                                    break
                                }
                            }
                            var bd = ['全站', '科学', '数码', '体育', '时尚', '校园', '汽车', '时事', '数码', '国际']
                            var cy = bd[random(1, bd.length)]
                            TKB.xgsrizhi('点击' + cy)
                            click(cy)
                            sleep(4000)
                            temx = 1
                        }
                    }
                    if (id('com.zhihu.android:id/ranking_no').exists && text('推荐').exists() || id('com.zhihu.android:id/ranking_no_img').exists() && text('推荐').exists()) {
                        TKB.xgsrizhi("热榜界面")
                        for (var i = 0; i < random(0, 8); i++) {
                            swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                            sleep(random(800, 1300))
                            if (text('没有更多内容').exists()) {
                                var aa = text('没有更多内容').findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1750) {
                                    sleep(1000)
                                    break
                                }
                            }
                            if (text('没有更多了，去领域榜单看看吧').exists()) {
                                var aa = text('没有更多了，去领域榜单看看吧').findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1750) {
                                    sleep(1000)
                                    break
                                }
                            }
                        }
                        click(random(150, 600), random(550, 1650))
                        sleep(3000)
                    }
                    if (id('com.zhihu.android:id/search').exists && id('com.zhihu.android:id/more').exists() && text('默认').exists()) {
                        try {
                            var ss = TKB.getAllTexts()
                            for (j = 0, len = ss.length; j < len; j++) {
                                if (ss[j].indexOf("赞同") != -1) {
                                    if (ss[j].indexOf("万") != -1) {
                                        var aa = text(ss[j]).findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                            TKB.xgsrizhi('点赞量大于1万:' + ss[j])
                                            click(300, aa.centerY())
                                            sleep(3000)
                                        }
                                    } else {
                                        var st = ss[j].split("赞")
                                        if (Number(st[0]) > zt_numx) {
                                            var aa = text(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1700) {
                                                // (aa.centerX(), aa.centerY())
                                                TKB.xgsrizhi('点赞量大于' + zt_numx + ':' + ss[j])
                                                click(300, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                            }
                        } catch (error) {
                            log(error);
                            sleep(2000)
                        }
                        if (id('com.zhihu.android:id/barrage_switch').exists() && id('com.zhihu.android:id/barrage_expression_left').exists() && id('com.zhihu.android:id/barrage_expression_right').exists()) {
                            TKB.xgsrizhi("视频界面")
                            sleep(3000)
                            var sp_time = random(40, 60)
                            var spRT = (new Date()).getTime()
                            while (1) {
                                zonghe()
                                if ((new Date()).getTime() - spRT < sp_time * 1000) {
                                    TKB.xgsrizhi("观看视频中")
                                    toastLog("观看视频中")
                                    sleep(4000)
                                } else {
                                    TKB.xgsrizhi("视频观看完成...")
                                    break
                                }
                            }
                            back()
                            sleep(1000)
                        }
                        if (desc('返回').exists() && id('com.zhihu.android:id/search').exists() && id('com.zhihu.android:id/more').exists()) {
                            TKB.xgsrizhi("文章界面")
                            var dj = random(1, 100)
                            try {
                                sleep(8000)
                                for (var i = 0; i < random(4, 8); i++) {
                                    TKB.xgsrizhi("浏览文章")
                                    swipe(random(400, 600), 1700, random(400, 600), random(300, 500), random(800, 2000))
                                    sleep(random(8000, 13000))
                                    if (text("添加评论...").exists()) {
                                        var aa = text("添加评论...").findOnce().bounds()
                                        if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                            TKB.xgsrizhi('到底了')
                                            sleep(1000)
                                            break
                                        }
                                    }
                                }
                                if (dj < zt_percentage) {
                                    TKB.xgsrizhi("赞同")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf(" 赞同 ") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.xgsrizhi('赞同')
                                                click(300, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                if (dj < xh_percentage) {
                                    TKB.xgsrizhi("喜欢")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf("喜欢") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.xgsrizhi('喜欢')
                                                click(680, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                if (dj < sc_percentage) {
                                    TKB.xgsrizhi("收藏")
                                    var ss = TKB.getAllTexts()
                                    for (j = 0, len = ss.length; j < len; j++) {
                                        if (ss[j].indexOf("收藏") != -1) {
                                            var aa = desc(ss[j]).findOnce().bounds()
                                            if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                                TKB.xgsrizhi('收藏')
                                                click(830, aa.centerY())
                                                sleep(3000)
                                            }
                                        }
                                    }
                                }
                                back()
                                sleep(1000)
                            } catch (error) {

                            }
                        }
                        swipe(random(400, 600), 1700, random(400, 600), 300, random(1200, 2000))
                        sleep(3000)
                    }
                } catch (error) {
                    log(error);
                    sleep(2000)
                }
            }
        }
    }
}

//知乎修改资料
function zhxgzl() {
    TKB.xgsrizhi("知乎修改资料")
    launch(dqbaoming)
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
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
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
            launch(dqbaoming)
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
                TKB.upinfo(sbip, user_id, yhbh, info, status)
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

//知乎评论
function comment() {
    var startTime = (new Date()).getTime()
    var TSD = (new Date()).getTime()
    var xs = zhid(sbip, run_id)
    comment_url = xs['作品链接']
    TKB.xgsrizhi("获取到的作品链接" + comment_url)
    comment_sentence = xs['话术']
    comments = comment_sentence.split("|")
    word = comments[random(0, comments.length - 1)]
    TKB.xgsrizhi("获取到的话术为" + word);
    setClip(comment_url)
    launch(qqb_pk)
    sleep(8000);
    while (1) {
        try {
            zonghe()
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时跳出");
                TKB.qinglihh()
                sleep(2000)
                setClip(comment_url)
                launch(qqb_pk)
                sleep(1000)
                TSD = (new Date()).getTime()
            }
            if (comment_url != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                    TKB.xgsrizhi("腾讯应用宝下载");
                    TKB.qinglihh()
                    setClip(comment_url)
                    sleep(3000)
                    launch(qqb_pk)
                    startTime = (new Date()).getTime()
                    TSD = (new Date()).getTime()
                }
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
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
                }
                //问答
                if (text("是否打开知乎 App 阅读全文").exists()) {
                    TKB.xgsrizhi("点击打开知乎作品链接");
                    click("确认")
                    sleep(5000)
                }
                //文章或者视频
                if (text("App 内打开").exists()) {
                    click("App 内打开")
                    TKB.xgsrizhi("点击App 内打开");
                    sleep(5000)
                }
                if (textEndsWith("内打开").exists()) {
                    click(537, 1620)
                    TKB.xgsrizhi("点击app内打开坐标打开知乎作品链接");
                    sleep(5000)
                }
                //想法
                if (text("打开 App 为他鼓掌").exists()) {
                    click(556, 1670)
                    TKB.xgsrizhi("点击写一条想法打开app")
                    sleep(3000)
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(10000);
                }
                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch(qqb_pk);
                    sleep(8000);
                }
                //进入到了作品链接
                if (id("com.zhihu.android:id/search_btn").exists() || id("com.zhihu.android:id/system_bar").exists()) {
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            if (desc("评论").exists()) {
                                var aa = desc("评论").findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                    TKB.xgsrizhi('到底了')
                                    sleep(1000)
                                    break
                                }
                            }
                            TKB.xgsrizhi("作品内容滑动")
                            swipe(random(500, 600), 1200, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    sleep(3000)
                    if (textStartsWith("评论").exists() || descStartsWith("评论").exists()) {
                        click(992, 1834)
                        TKB.xgsrizhi("点击评论")
                        sleep(6000)
                        TKB.xgsrizhi("点击请输入评论")
                        if (id("com.zhihu.android:id/comment_status_layout_view").exists()) {
                            id("com.zhihu.android:id/comment_status_layout_view").findOnce().click()
                            TKB.xgsrizhi("点击请输入评论")
                            sleep(5000)
                        }
                        setText(0, word)
                        TKB.xgsrizhi("输入评论")
                        sleep(5000)
                        if (text("发布").exists()) {
                            click("发布")
                            TKB.xgsrizhi("点击发布")
                            sleep(3000)
                        }
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        toast("评论成功")
                        sleep(3000)
                    }
                    TKB.qinglihh(dqbaoming)
                    sleep(2000)
                    return true
                }
                //视频链接
                if (id("com.zhihu.android:id/video_progress_bottom").exists()) {
                    toast("正在观看视频")
                    setClip(word)
                    var videoDuration = id("com.zhihu.android:id/video_player_duration").findOnce().text().split(":");
                    var videoTime = Number(videoDuration[0]) * 60 + Number(videoDuration[1]);
                    if (videoTime > 60) {
                        TKB.xgsrizhi("观看视频，时长为：" + videoTime / random(2, 4))
                        sleep(videoTime / random(2, 4) * 1000)
                    } else {
                        TKB.xgsrizhi("观看视频，时长为：" + videoTime / 2)
                        sleep(videoTime / 2 * 1000)
                    }
                    if (textStartsWith("评论").exists() || descStartsWith("评论").exists()) {
                        descStartsWith("评论").findOnce().click()
                        TKB.xgsrizhi("点击评论")
                        sleep(6000)
                        if (id("com.zhihu.android:id/comment_status_layout_view").exists()) {
                            id("com.zhihu.android:id/comment_status_layout_view").findOnce().click()
                            TKB.xgsrizhi("点击请输入评论")
                            sleep(5000)
                        }
                        setText(word)
                        TKB.xgsrizhi("输入评论")
                        sleep(5000)
                        if (text("发布").exists()) {
                            click("发布")
                            TKB.xgsrizhi("点击发布")
                            sleep(3000)
                        }
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        toast("评论成功")
                        sleep(3000)
                        TKB.qinglihh(dqbaoming)
                        sleep(2000)
                        return true
                    }
                }
            } else {
                toast("未获取到评论链接")
                TKB.xgsrizhi("未获取到评论链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
}

//知乎赞同
function likeclick() {
    var startTime = (new Date()).getTime()
    var TSD = (new Date()).getTime()
    var xs = zhid(sbip, run_id)
    likeclick_url = xs['作品链接']
    TKB.xgsrizhi("获取到的作品链接" + likeclick_url)
    setClip(likeclick_url)
    launch(qqb_pk)
    sleep(8000);
    while (1) {
        try {
            zonghe();
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                TKB.qinglihh()
                sleep(3000)
                setClip(likeclick_url)
                launch(qqb_pk)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (likeclick_url != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                    TKB.xgsrizhi("腾讯应用宝下载");
                    TKB.qinglihh()
                    setClip(likeclick_url)
                    sleep(3000)
                    launch(qqb_pk)
                    startTime = (new Date()).getTime()
                    TSD = (new Date()).getTime()
                }
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
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
                }
                if (text("是否打开知乎 App 阅读全文").exists()) {
                    TKB.xgsrizhi("点击打开知乎作品链接");
                    click("确认")
                    sleep(5000)
                }
                if (text("App 内打开").exists()) {
                    click("App 内打开")
                    TKB.xgsrizhi("点击App 内打开");
                    sleep(5000)
                }
                if (textEndsWith("内打开").exists()) {
                    click(537, 1620)
                    TKB.xgsrizhi("点击app内打开坐标打开知乎作品链接");
                    sleep(5000)
                }
                if (text('允许打开').exists()) {
                    click("允许打开")
                    TKB.xgsrizhi("点击允许打开");
                    sleep(12000);
                }
                if (text("暂无内容或结果").exists()) {
                    TKB.xgsrizhi("网络异常，重新启动流程");
                    launch(qqb_pk);
                    sleep(8000);
                }
                //进入到了点赞链接
                if (id("com.zhihu.android:id/search_btn").exists() || id("com.zhihu.android:id/system_bar").exists()) {
                    var pageTime = random(10, 15)
                    var pageStart = (new Date()).getTime()
                    while (true) {
                        if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                            if (desc("评论").exists()) {
                                var aa = desc("评论").findOnce().bounds()
                                if (aa.centerY() > 300 && aa.centerY() < 1900) {
                                    TKB.xgsrizhi('到底了')
                                    sleep(1000)
                                    break
                                }
                            }
                            TKB.xgsrizhi("作品内容滑动")
                            toast("作品内容滑动")
                            swipe(random(500, 600), 1200, random(500, 600), 500, 1000)
                            sleep(2000)
                        } else {
                            break
                        }
                    }
                    // if (textStartsWith("喜欢").exists() || descStartsWith("评论")) {
                    //     TKB.xgsrizhi("点击喜欢")
                    //     click(695, 1840)
                    //     sleep(3000)
                    // }
                    if (descContains("赞同").exists()) {
                        descContains('赞同').findOnce().click()
                        TKB.xgsrizhi("点击赞同")
                        toast("点赞成功")
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        sleep(5000)
                        TKB.qinglihh(dqbaoming)
                        return true
                    }
                }
                //视频链接点赞
                if (id("com.zhihu.android:id/video_progress_bottom").exists()) {
                    toast("正在观看视频")
                    var videoDuration = id("com.zhihu.android:id/video_player_duration").findOnce().text().split(":");
                    var videoTime = Number(videoDuration[0]) * 60 + Number(videoDuration[1]);
                    if (videoTime > 60) {
                        TKB.xgsrizhi("观看视频，时长为：" + videoTime / random(2, 4))
                        sleep(videoTime / random(2, 4) * 1000)
                    } else {
                        TKB.xgsrizhi("观看视频，时长为：" + videoTime / 2)
                        sleep(videoTime / 2 * 1000)
                    }
                    if (descContains("赞同").exists()) {
                        descContains('赞同').findOnce().click()
                        TKB.xgsrizhi("点击赞同")
                        toast("点赞成功")
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        sleep(5000)
                        TKB.qinglihh(dqbaoming)
                        return true
                    }
                }
            } else {
                toast("未获取到点赞链接")
                TKB.xgsrizhi("未获取到点赞链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
}

//知乎关注
function focusOn() {
    var startTime = (new Date()).getTime();
    var TSD = (new Date()).getTime()
    var lpp = 0
    setClip(focusonUrl)
    launch(qqb_pk)
    sleep(5000);
    while (1) {
        try {
            zonghe();
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.xgsrizhi("时间够了退出");
                TKB.qinglihh(packageName);
                break;
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时没在首页")
                TKB.qinglihh()
                sleep(3000)
                setClip(likeclick_url)
                launch(qqb_pk)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (focusonUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        text('搜索或输入网址').findOnce().parent().click()
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                    TKB.xgsrizhi("腾讯应用宝下载");
                    TKB.qinglihh()
                    setClip(focusonUrl)
                    sleep(3000)
                    launch(qqb_pk)
                    startTime = (new Date()).getTime()
                    TSD = (new Date()).getTime()
                }
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    id('com.tencent.mtt:id/search_frame_input_bar').longClick()
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
                    // let waitTime = 0;
                    // while (text('' + focusonUrl).exists() && waitTime < 5) {
                    //     sleep(5000);
                    //     toast("等待网页结果显示")
                    //     TKB.xgsrizhi("等待网页结果显示");
                    //     waitTime++;
                    // }
                    TKB.xgsrizhi("点击坐标打开知乎用户主页");
                    click(526, 1065)
                    log(1);
                    sleep(5000)
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
                //进入到了用户页面
                if (id("com.zhihu.android:id/avatar").exists() && id("com.zhihu.android:id/name").exists()) {
                    if (clickFocuson == 0) {
                        var pageTime = random(7, 10)
                        var pageStart = (new Date()).getTime()
                        while (true) {
                            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                                TKB.xgsrizhi("内容滑动")
                                swipe(random(700, 800), 1700, random(700, 800), 500, 1000)
                                sleep(2000)
                            } else {
                                break
                            }
                        }
                        if (id("com.zhihu.android:id/menu_follow_shell").exists()) {
                            id("com.zhihu.android:id/menu_follow").findOnce().click()
                            if (lpp == 0) {
                                TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                                lpp = 1
                            }
                            TKB.xgsrizhi("点击关注")
                            toast("点击关注")
                            sleep(3000)
                        }
                    } else {
                        if (id("com.zhihu.android:id/following_list").exists()) {
                            TKB.xgsrizhi("点击他关注的人")
                            id("com.zhihu.android:id/following_list").findOnce().click()
                            sleep(3000)
                            if (textEndsWith("Ta关注的人").exists()) {
                                var focusOnClick = id("com.zhihu.android:id/btn_follow").find()
                                focusOnClick[clickOther].click()
                                if (lpp == 0) {
                                    TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                                    lpp = 1
                                }
                                TKB.xgsrizhi("点击关注");
                                toast("点击关注")
                                sleep(3000)
                            }
                        }
                    }
                    TKB.qinglihh(dqbaoming)
                    return true
                }
            } else {
                toast("未获取到关注链接")
                TKB.xgsrizhi("未获取到关注链接");
                sleep(5000);
            }
            sleep(5000);
        } catch (error) {
            TKB.xgsrizhi(error);
        }
    }
}
//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 10 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 30 * 1000) {
                        TKB.xgsrizhi("继续知乎任务")
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
                    ssee = (new Date()).getTime()
                }
                TKB.xgsrizhi("我还在播放音乐")
                sleep(5000);
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************对接服务器*****************************************************************

//执行知乎
function zxzh() {
    try {
        toastLog("执行知乎任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['知乎', '6.47.0'],
                ['QQ浏览器', '10.5.1.7230']
            ]
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
            TKB.qinglihh()
            var dl = zhdl()
            if (dl == true) {
                if (fun == "养号") {
                    zhyh()
                } else if (fun == "关注") {
                    focusOn()
                } else if (fun == "评论") {
                    comment()
                } else if (fun == "点赞") {
                    likeclick()
                } else if (fun == "修改资料") {
                    zhxgzl()
                }
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

zxzh()