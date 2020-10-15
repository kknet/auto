log("脚本启动")
sleep(3000)
var TKB = require('/sdcard/mytkb.js')
TKB.wzaandhome()

auto.waitFor()
sleep(2000)
threads.start(function () {
    while (1) {
        //修改
        clickable().text('允许').id('android:id/button1').findOnce() ? clickable().text('允许').id('android:id/button1').findOnce().click() : ''
        sleep(200)
        text('温馨提示').exists() && text('欢迎来到小红书！').exists() ? (click("同意"), log("用户协议")) : ''
        sleep(200)
        text('好久不见，欢迎回来').exists() ? (click("跳过"), log("点击跳过")) : ''
        sleep(200)
        text('隐私协议提示').exists() ? (click("同意并继续"), log("隐私协议提示")) : ''
        sleep(200)
        text('开启设备权限').exists() ? (click("暂时不用"), log("点击暂时不用")) : ''
        sleep(200)
        text('退出直播').exists() ? (click("退出直播"), log("退出直播")) : ''
        sleep(200)
        text('暂时不了').exists() && text("立刻开启").exists() ? (click("暂时不了"), log("暂时不了")) : ''
        sleep(200)
        text('退出').exists() && text("关注并退出").exists() ? (click("退出"), log("点击退出")) : ''
        sleep(200)
        id("com.xingin.xhs:id/a64").exists && text("立即更新").exists() ? (id("com.xingin.xhs:id/a64").findOnce().click(), log("取消立即更新")) : ''
        sleep(200)
        textStartsWith("您对小红书的评分").exists() ? (back(), log("取消评分")) : ''
        sleep(200)
        id("com.xingin.xhs:id/b_a").exists() ? (id("com.xingin.xhs:id/b_a").click(), refreshClick--, log("点击刷新"), refreshClick < 0 ? (TKB.qinglihh(), sleep(2000), launch()) : '') : ''
        sleep(200)
        text('我知道了').exists() ? (click("我知道了"), log("点击我知道了")) : ''
        sleep(200)
        text("以后再说").exists() ? (click("以后再说"), log("以后再说")) : ''
        sleep(200)
        text('新版发布').exists() ? (click(300, 1350), log("点击坐标以后再说")) : ''
        sleep(200)
        text('知道了').exists() ? (click("知道了"), log("点击知道了")) : ''
        sleep(200)
        textContains("欢迎使用手机管家").exists() ? (click("继续"), log("点击使用手机管家")) : ''
        sleep(200)
        text('开启位置信息开关').exists() ? (click("取消"), log("点击取消位置信息开启")) : ''
        sleep(200)
        textStartsWith("你有未完成的笔记").exists() && text("放弃").exists() ? (click("继续"), log("点击使用手机管家")) : ''
        sleep(200)
        desc("立即打开").exists() ? (click(546, 1735), log("点击坐标关闭")) : ''
        sleep(200)
        text('忽略').exists() ? (click("忽略"), log("点击忽略")) : ''
        sleep(200)
        text('始终同意').exists() ? (click("始终同意"), log("始终同意")) : ''
        sleep(200)
        id("com.xingin.xhs:id/av5").exists() ? (id("com.xingin.xhs:id/av3").findOnce().click(), log("点击关闭商城弹窗")) : ''
        sleep(200)
        text("发现").exists() ? !text("发现").findOnce().selected() ? (click("发现"), log("不在首页点击发现")) : '' : ''
        sleep(200)
        text('请确认你不是机器人').exists() ? (TKB.xgsrizhi("滑块验证码"), zz = get_verify(), x = zz[0], swipe(190, 1100, x +138, 1100, random(1200, 1500)), log("滑块验证码成功")) : ''
        sleep(200)
        text("向右滑动滑块填充拼图").exists() && text('我要反馈').exists() ? (TKB.xgsrizhi("游览器小红书滑块验证码"), zz = qqbget_verify(), x = zz[0], swipe(190, 1257, x + 130, 1257, random(1200, 1500)), log("滑块验证码成功")) : ''
        sleep(200)
    }
})
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


if (!requestScreenCapture()) {
    alert("请求截图权限失败！");
    exit();
}
var dqbaoming = "com.xingin.xhs" //该项目包名
var likeMin = 500;
var likePercent = 10;
var collectPercent = 0;
var tabList = ['影视综艺', '运动健身', '摄影']
var taskList = ['看商城', '搜索关键词任务', '看直播']
var keyword;
var key_word;
var refreshClick = 3;
var zz;
var x;
//修改
var repeat = 0;
var taskId = files.read('/storage/emulated/0/taskId.txt');
var deviceId = files.read('/storage/emulated/0/deviceId.txt');
var url = 'http://121.196.126.46:9090/mqttcontrol/api/js/queryTask';

//*******************************************************小红书项目 *****************************************************************
//滑块
function get_verify() {
    try {
        sleep(2000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
        var url = 'http://122.228.155.197:8803/captcha_slide'
        var clip = images.clip(src, 137, 610, 804, 416)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "xhs",
            image: open(imgFile),
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            log('失败')
        }
    } catch (error) {
        log(error)
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
            log('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            log('失败')
        }
    } catch (error) {
        log(error)
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

//小红书登录
/**
 * xz_*都是中控获取的数据
 * xz_sex {number} 0男1女
 * xs_interest {string} 获取到的兴趣
 * xs_Likenumber {nunber} 获取到的数量，满足则浏览
 * xs_Likepercentage {nunber} 点赞百分比
 * xs_Word {string} 关键词
 * 
 */
function xhsdl() {
    log("小红书登录")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var zh = ""
    var yzm = ""
    var xz_sex = random(0, 1) //xz_sex 性别
    var is_verify = 3
    var loginClick = 0
    var loginClickFlag = false;
    var interestName;
    var xs_interest = '' //中控获取到的兴趣
    var xs_Likenumber = '' //中控获取到的数量，满足则浏览
    var xs_Likepercentage = '' //点赞百分比
    var xs_Word = '' //关键词
    try {

        /*interestName
         *{string} 中文
         */
        //修改  添加undefined
        if (xs_interest == 0 || xs_interest == '0' || xs_interest == '' || xs_interest == undefined) {
            interestName = xs_interest;
            log("未获取到兴趣")
        } else {
            interestName = xs_interest.split('|');
            tabList = [];
            for (let i = 0; i < interestName.length - 1; i++) {
                if (random(0, 2) <= 1) {
                    tabList.push(interestName[i]);
                    log("获取到兴趣" + tabList[tabList.length - 1])
                }
            }
        }
        /*点赞数量、点赞百分比
         *likeMin {number} 在养号中点赞多少次
         *likePercent {number} 点赞的比例
         */
        if (xs_Likenumber == '0' || xs_Likenumber == 0 || xs_Likenumber == '' || xs_Likenumber == undefined) {
            likeMin = 1000;
            log("未获取到点赞数量")
        } else {
            likeMin = xs_Likenumber;
            log("获取到点赞数量" + likeMin)
        }
        if (xs_Likepercentage == 0 || xs_Likepercentage == '0' || xs_Likepercentage == '' || xs_Likepercentage == undefined) {
            likePercent = 10;
            log("未获取到点赞百分比")
        } else {
            likePercent = xs_Likepercentage;
            log("获取到点赞百分比" + likePercent)
        }
        /*关键词
         *keyword {string} 关键词
         */
        if (xs_Word == 0 || xs_Word == '0' || xs_Word == undefined || xs_Word == '') {
            log("未获取关键词")
            taskList.splice(1, 1);
        } else {
            key_word = xs_Word.split('|')
            keyword = key_word[random(0, key_word.length - 1)]
            log("获取到的关键词为" + keyword);
        }

    } catch (error) {
        log(error);
    }
    while (1) {
        try {
            if ((new Date()).getTime() - RT > stt * 60 * 1000) {
                log("时间够了退出")
                TKB.qinglihh(dqbaoming)
                return false
            }
            if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
                log("超时没在首页")
                back()
                sleep(1000)
                TKB.qinglihh(dqbaoming)
                sleep(3000)
                launch(dqbaoming)
                sleep(2000)
                TSD = (new Date()).getTime()
            }
            if (is_verify <= 0) {
                log("获取验证码次数过多")
                alert("获取验证码次数过多，请稍后重试");
                TKB.qinglihh();
                launch(dqbaoming);
                sleep(12000);
                is_verify = 3;
            }
            if (text("本机号码可一键登录") && text("其他号码登录").exists()) {
                log("一键登录")
                var clickOneKey = text("本机号码可一键登录").findOnce().bounds()
                click(clickOneKey.centerX(), clickOneKey.centerY())
                sleep(2000)
            }
            if (text('微信登录').exists() && text('手机号登录').exists()) {
                log("点击手机号登录")
                var clickPhonenum = text('手机号登录').findOnce().bounds()
                click(clickPhonenum.centerX(), clickPhonenum.centerY())
                sleep(2000)
            }
            if (text("其他号码登录").exists() && text("同意协议并登录").exists()) {
                log("点击同意协议并登录")
                var clickAgreement = text("同意协议并登录").findOnce().bounds()
                click(clickAgreement.centerX(), clickAgreement.centerY())
                sleep(2000)
            }
            if (text("请输入手机号码").exists() && text("请输入验证码").exists()) {
                log("去获取号码")


                zh = TKB.benjitel()
                if (zh == false) {
                    log("没有获取到手机号")
                    TKB.qinglihh(dqbaoming)
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
                    log("获取验证码")
                    var clickYzm = id("com.xingin.xhs:id/wx").findOnce().bounds()
                    click(clickYzm.centerX(), clickYzm.centerY())
                    log("点击验证码按钮")
                    sleep(random(10000, 15000))
                    yzm = TKB.huoquyzm("小红书")
                    // yzm="123456";
                    sleep(2000)
                    if (yzm == false) {
                        log("没有获取到验证码")
                        TKB.qinglihh(dqbaoming)
                        launch(dqbaoming)
                        sleep(8000)
                        is_verify--
                        log("剩余次数" + is_verify);
                        TSD = (new Date()).getTime()
                        continue
                    } else {
                        log("请输入验证码" + yzm)
                        setText(1, yzm)
                        sleep(2000)
                        loginClickFlag = true;
                    }
                }
            }
            if (textStartsWith('重新发送(').exists()) {
                log("正在等待重新发送")
                sleep(5000)
            }
            if (id('com.xingin.xhs:id/bbv').exists() && loginClickFlag) {
                if (id('com.xingin.xhs:id/bbv').findOnce().enabled() == true) {
                    log("点击同意协议并登录")
                    loginClick++
                    click("同意协议并登录")
                    sleep(2000);
                    loginClickFlag = false;
                    if (loginClick >= 3) {
                        log("无法点击同意协议并登录")
                        alert("无法点击同意协议并登录，请稍后重试");
                        TKB.qinglihh();
                        launch(dqbaoming);
                        sleep(12000);
                        loginClick = 0;
                    }
                }
            }
            //从中控获取性别
            if (id("com.xingin.xhs:id/b9t").exists() && id("com.xingin.xhs:id/bby").exists()) {
                if (xz_sex == 0) {
                    log("选择男生")
                    var boy = id("com.xingin.xhs:id/bby").findOnce().bounds()
                    click(boy.centerX(), boy.centerY());
                } else {
                    log("选择女生")
                    var girl = id("com.xingin.xhs:id/b9t").findOnce().bounds()
                    click(girl.centerX(), girl.centerY());
                }
                sleep(2000)
            }
            if (text('选择你的生日').exists()) {
                log("滑动选择生日")
                if (id("com.xingin.xhs:id/dhj").exists()) {
                    log("滑动选择年份")
                    for (let i = 0; i < random(1, 3); i++) {
                        swipe(220, 1400, 193, 1835, 1000)
                        sleep(2000)
                    }
                }
                sleep(1000)
                if (id("com.xingin.xhs:id/bnp").exists()) {
                    log("滑动选择月份")
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
                    log("滑动选择日期")
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
                    log("点击确认")
                    click("确认")
                    sleep(2000)
                }
            }
            if (text("下一步").exists()) {
                log("点击下一步")
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
                    log("点击下一步")
                    click("下一步")
                    sleep(2000)
                }
            }
            while (text("始终同意").exists()) {
                click("始终同意");
                sleep(2000);
                log("点击始终同意")
            }
            if (text("在小红书上的好友").exists()) {
                log("好友中点击下一步")
                click("下一步")
                sleep(2000)
            }
            if (text("让大家更好地认识你").exists()) {
                log("输入名字")
                // text('名字').findOnce().setText(getRandomName(random(3, 6)));
                text('名字').findOnce().setText(result_name());
                sleep(2000)
            }
            if (text("完成").exists() && text("完成").findOnce().enabled() == true) {
                log("点击完成")
                click("完成")
                sleep(2000)
            }
            if (text("上传一张头像吧").exists()) {
                log("点击跳过")
                click("跳过")
                sleep(2000)
            }
            if (text("发现").exists() && text("关注").exists()) {
                log("登录成功")
                sleep(2000)
                return true
            }
        } catch (error) {
            log(error)
            sleep(random(3000, 8000))
        }
    }
}

//推荐任务
function browseRecommend() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var taskInterVal = random(5, 10);
    var tabInterval = random(5, 10);
    var taskStart = (new Date()).getTime();
    var browseTime = random(20, 40) * 60 * 1000;
    var tabTime = random(10, 20) * 60 * 1000;
    var ifClick = true;
    var tabName = "推荐"
    var ifRecommend = true;
    log("任务间隔为" + taskInterVal + "分钟");
    log("类目任务间隔为" + tabInterval + "分钟");
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > browseTime && ifRecommend) {
                log("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            if ((new Date()).getTime() - startTime > tabTime && !ifRecommend) {
                log("时间够了退出类目词任务")
                back();
                ifClick = true;
                tabName = "推荐";
                ifRecommend = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime();
                back();
                sleep(2000);
                returnToHome();
            }
            //插入任务
            if ((new Date()).getTime() - taskStart > taskInterVal * 60 * 1000 && taskList.length > 0 && ifRecommend) {
                browseTime -= ((new Date()).getTime() - startTime)
                var taski = random(0, taskList.length - 1);
                log("执行" + taskList[taski] + "任务");
                switch (taskList[taski]) {
                    case '看商城':
                        browseMall();
                        break;
                    case '搜索关键词任务':
                        searchItem();
                        break;
                    case '看直播':
                        browseLiveStream();
                        break;
                    default:
                        break;
                }
                taskList.splice(taski, 1);
                taskStart = (new Date()).getTime();
                taskInterVal = random(5, 10);
                ifClick = true;
                notInHome = 0;
                swipeCount = 0;
                startTime = (new Date()).getTime()
                continue;
            }
            //刷类目词任务
            if ((new Date()).getTime() - startTime > tabInterval * 60 * 1000 &&
                ifRecommend && tabList.length) {
                tabInterval = random(5, 10);
                browseTime -= ((new Date()).getTime() - startTime)
                startTime = (new Date()).getTime();
                log("类目词发生变化");
                ifClick = true;
                ifRecommend = false;
                var tabi = random(0, tabList.length - 1);
                tabName = tabList[tabi];
                log("类目词为" + tabName);
                tabList.splice(tabi, 1);
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(5000);
                    log("点击首页")
                }
                if (!ifRecommend) {
                    clickTabTitle(tabName)
                }
                ifClick = false;
                swipeCount = 0;
            }
            for (let i = 0; i < random(2, 3); i++) {
                swipe(random(500, 700), 1700, random(500, 700), 500, 1500);
                sleep(1500);
            }
            swipeCount++;
            var contents = id("com.xingin.xhs:id/v7").find().filter(function (w) {
                return w.bounds().left < w.bounds().right
            })
            if (contents.length > 0) {
                for (let index = 0; index < contents.length; index += random(2, 3)) {
                    var contentsText = contents[index].findOne(id("com.xingin.xhs:id/d66"));
                    if (contentsText) {
                        var contentsLike = contentsText.text();
                        if (contentsLike.indexOf('万') != -1) {
                            contentsLike = contentsLike.split("万");
                            contentsLike = Number(contentsLike[0]) * 10000;
                            log("点赞数量为" + contentsLike);
                        }
                        if (contentsLike <= likeMin) {
                            log("点赞有点低")
                            sleep(2000)
                            continue
                        }
                    }
                    contents[index].click();
                    log("点击图文");
                    sleep(6000)
                    sliding()
                    log("返回到首页")
                    back()
                    sleep(5000)
                }

            } else {
                log("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(6000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                log("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(15000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            log(error)
            sleep(random(3000, 8000))
        }
    }
}
/*刷图文和视频
 * counts  {number} 随机滑的视频数量
 * ifComment {Boolean} 
 */
function sliding(counts) {
    if (id("com.xingin.xhs:id/nickNameTV").exists()) {
        log("图文笔记")
        swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
        sleep(2000);
        if (id("com.xingin.xhs:id/aqq").exists()) {
            var pageContent = id("com.xingin.xhs:id/aqq").findOnce().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum - 1; i++) {
                log("滑动图片")
                swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(10, 15)
        var pageStart = (new Date()).getTime()
        while (true) {
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                log("图文内容滑动")
                swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                sleep(2000)
            } else {
                break
            }
        }
        if (random(1, 100) <= likePercent) {
            if (id("com.xingin.xhs:id/bvs").exists()) {
                var bounds = id("com.xingin.xhs:id/bvs").findOnce().bounds();
                click(bounds.centerX(), bounds.centerY())
                log("点赞")
                TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                sleep(2000);
            }
        }
        if (random(1, 100) <= collectPercent) {
            if (id("com.xingin.xhs:id/but").exists()) {
                id("com.xingin.xhs:id/but").findOnce().click();
                log("点收藏")
                sleep(2000);
            }
        }
    }
    if (id("com.xingin.xhs:id/dc9").exists()) {
        if (counts == undefined) {
            counts = random(3, 6);
        }
        for (let i = 0; i < counts; i++) {
            log("刷第" + i + "个视频");
            var videoStart = (new Date()).getTime();
            var seekBar = id("com.xingin.xhs:id/dc9").find().filter(function (w) {
                return w.bounds().bottom < 1800 && w.bounds().bottom > 0;
            })[0];
            if (seekBar == undefined) {
                swipe(500, 1700, 500, 200, 700);
                sleep(2000);
                log("进度条不存在 下滑看新视频");
                continue;
            } else {
                click(seekBar.bounds().centerX(), seekBar.bounds().centerY())
                sleep(2000);
            }
            if (id("com.xingin.xhs:id/mediaPlayerTime").exists()) {
                var mediaText = id("com.xingin.xhs:id/mediaPlayerTime").findOnce().text().split(":");
                var mediaTime = Number(mediaText[mediaText.length - 1])
                log("视频时间为" + mediaTime);
                click(500, 500);
                sleep(2000)
            }
            if (id("com.xingin.xhs:id/likeLayout").exists() && id("com.xingin.xhs:id/likeTextView").exists()) {
                var likeCountsText = id("com.xingin.xhs:id/likeTextView").find().filter(function (w) {
                    return w.bounds().bottom > 0 && w.bounds().bottom < 1900;
                })[0];
                var likeCounts = likeCountsText.text();
                if (likeCounts.indexOf('万') != -1) {
                    likeCounts = likeCounts.split("万");
                    likeCounts = Number(likeCounts[0]) * 10000;
                }
                log("点赞数量为" + likeCounts);
                if (likeCounts < likeMin) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(1000);
                    continue;
                }
                if (random(1, 100) <= likePercent) {
                    var bounds = likeCountsText.bounds();
                    click(bounds.centerX(), bounds.centerY())
                    TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                    sleep(2000);
                    log("点赞");
                }
            }
            if (id("com.xingin.xhs:id/collectLayout").exists()) {
                if (random(1, 100) <= collectPercent) {
                    id("com.xingin.xhs:id/collectLayout").findOnce().click();
                    log("点收藏")
                    sleep(2000);
                }
            }
            var sleepTime = random(10, 40);
            log("随机时间为" + sleepTime);
            if (mediaTime != undefined) {
                sleepTime = sleepTime > mediaTime ? mediaTime : sleepTime;
            }
            log("观看时间为" + sleepTime);
            sleep(1000);
            while (true) {
                if ((new Date()).getTime() - videoStart > sleepTime * 1000) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    log("下滑看新视频");
                    break;
                } else {
                    sleep(2000);
                }
            }
            sleep(2000);
        }
    }
}
//商城
function browseMall() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    log("商城任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > random(30, 90) * 1000) {
                log("时间够了退出")
                // if (text("首页").exists()) {
                //   click("首页");
                // }
                return true
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as7").exists()) {
                    id("com.xingin.xhs:id/as7").click();
                    sleep(2000);
                    log("点击商城")
                    swipe(random(500, 600), 1600, random(500, 600), 500, 1000)
                    sleep(2000)
                }
                if (id("com.xingin.xhs:id/dhc").exists()) {
                    var tabViews = id("com.xingin.xhs:id/dhc").findOnce().child(0).children();
                    tabViews[random(0, tabViews.size() - 1)].click();
                    log("随机点击商品分类")
                    sleep(4000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            var contents = id("com.xingin.xhs:id/v7").find().filter(function (w) {
                return w.bounds().left < w.bounds().right
            })
            if (contents.length > 0) {
                // for (let index = 0; index < contents.length; index += random(1, 2)) {
                //   contents[index].click();
                //  log("点击商品")
                //   sleep(4000);
                //  log("图文笔记")
                //   if (textStartsWith("1/").exists()) {
                //     var pageNum = textStartsWith("1/").findOnce().text().split("/")[1]
                //     pageNum = pageNum > 5 ? random(3, 5) : pageNum;
                //   }
                //   pageNum = pageNum ? pageNum : random(1, 2)
                //   for (let i = 1; i < pageNum; i++) {
                //    log("滑动商品图片")
                //     swipe(random(1000, 900), 820, random(300, 200), 750, 1000)
                //     sleep(2000)
                //   }
                //   var pageTime = random(10, 15)
                //   var pageStart = (new Date()).getTime()
                //   while (true) {
                //     if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                //      log("图文内容滑动")
                //       swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                //       sleep(2000)
                //     } else {
                //       break
                //     }
                //   }
                //  log("返回到商城页")
                //   back()
                //   sleep(5000)
                // }
                for (let i = 0; i < random(2, 3); i++) {
                    swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                    sleep(1500);
                }
            } else {
                log("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                log("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            log(error)
        }

    }
}
//搜索关键词
function searchItem() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    log("搜索关键词任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > random(10, 20) * 60 * 1000) {
                log("时间够了退出")
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    log("点击首页")
                }
                if (id("com.xingin.xhs:id/ao7").exists()) {
                    log("点击搜索栏")
                    id("com.xingin.xhs:id/ao7").findOnce().click()
                    sleep(5000)
                    log("输入关键词")
                    setText(0, keyword)
                    sleep(5000)
                    log("点击搜索")
                    click("搜索")
                    sleep(5000)
                }
                ifClick = false;
                swipeCount = 0;
            }
            if (id("com.xingin.xhs:id/bh3").exists) {
                var contents = id("com.xingin.xhs:id/bh3").findOnce().children();
                if (contents.size() > 0) {
                    for (let index = 1; index < contents.size(); index += random(2, 3)) {
                        if (contents[index].className() != "android.widget.RelativeLayout") {
                            continue;
                        }
                        var contentsLike = contents[index].findOne(id("com.xingin.xhs:id/bfa")).text()
                        if (contentsLike.indexOf('万') != -1) {
                            contentsLike = contentsLike.split("万");
                            contentsLike = Number(contentsLike[0]) * 10000;
                        }
                        if (contentsLike <= likeMin) {
                            log("点赞有点低")
                            sleep(2000)
                            continue
                        }
                        contents[index].click();
                        log("点击文章")
                        sleep(6000)
                        sliding()
                        log("返回到搜索页")
                        back()
                        sleep(5000)
                    }
                    for (let i = 0; i < random(2, 3); i++) {
                        swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                        sleep(1500);
                    }
                    swipeCount++;
                }
            } else {
                log("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }

            if (notInHome >= 3) {
                log("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            log(error);
        }

    }
    back()
    sleep(2000);
    if (id("com.xingin.xhs:id/bhe").exists()) {
        id("com.xingin.xhs:id/bhe").click();
        sleep(2000);
        log("返回主页")
    }
}
//直播
function browseLiveStream() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    log("直播任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > 10 * 60 * 1000) {
                log("时间够了退出")
                back();
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    log("点击首页")
                }
                returnToHome()
                click("直播");
                ifClick = false;
                swipeCount = 0;
            }
            var liveStreams = id("com.xingin.xhs:id/c8d").find();
            if (liveStreams.size() > 0) {
                liveStreams[random(0, liveStreams.size() - 1)].click();
                sleep(2000);
                if (text("直播已结束").exists()) {
                    back()
                    sleep(2000);
                    log("直播已结束 退出直播间");
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    continue;
                }
                var liveStart = (new Date()).getTime();
                var sleepTime = random(10, 20);
                log("观看直播时间为" + sleepTime);
                while (true) {
                    if ((new Date()).getTime() - liveStart > sleepTime * 1000) {
                        back();
                        sleep(2000);
                        log("退出直播间");
                        break;
                    }
                }
                for (let i = 0; i < random(1, 2); i++) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                }
                sleep(2000);
            } else {
                log("找不到直播间第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                log("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }

        } catch (error) {
            log(error)
            sleep(random(3000, 8000))
        }
    }
    return true

}
/*点击类目
 * name  {string} 养号是需要更换刷的类目词
 */
function clickTabTitle(name) {
    var lastView;
    sleep(3000);
    var startTime = (new Date()).getTime();
    while (!text(name).exists()) {
        try {
            if ((new Date()).getTime() - startTime > 60 * 1000) {
                log("找不到类目词,重启")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            swipe(900, 386, 100, 386, 2000);
            log("向右滑动寻找类目词" + name)
            sleep(2000);
            var tabViews = id("com.xingin.xhs:id/bii").find();
            if (lastView == undefined || lastView.text() != tabViews[tabViews.length - 1].text()) {
                lastView = tabViews[tabViews.length - 1]
            } else {
                break;
            }
        } catch (error) {
            log(error)
        }
    }
    if (text(name).exists()) {
        click(name)
        log("点击" + name);
        sleep(2000);
    }

}
//类目词回到主页
function returnToHome() {
    back()
    sleep(3000);
    var startTime = (new Date()).getTime();
    while (!text("直播").exists()) {
        try {
            if ((new Date()).getTime() - startTime > 60 * 1000) {
                log("类目词回不到推荐")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            swipe(100, 386, 900, 386, 1000);
            sleep(2000);
            log("向左滑回到推荐")
        } catch (error) {
            log(error)
        }
    }
}

//点消息
function clickMessage() {
    if (id("com.xingin.xhs:id/as4").exists()) {
        var message = id("com.xingin.xhs:id/as4");
        if (message.findOnce().child(0).child(0).children().size() > 0) {
            log("有消息要点击")
            message.click();
            sleep(2000);
            log("点击消息");
            if (id("com.xingin.xhs:id/l2").exists()) {
                var messagelist = id("com.xingin.xhs:id/l2").find();
                var length = messagelist.size();
                for (let i = 0; i < length; i++) {
                    click(messagelist[i].bounds().centerX(), messagelist[i].bounds().centerY())
                    log("点击第" + i + "个消息");
                    sleep(3000);
                    back()
                    sleep(3000);
                    log("返回消息页面");
                }
            }
            if (id("com.xingin.xhs:id/b13").exists()) {
                click("赞和收藏")
                log("点击赞和收藏");
                sleep(10000);
                back();
                sleep(2000);
            }
            return true;
        } else {
            log("没有消息需要点击");
            return false;
        }
    }
}


//*******************************************************对接服务器*****************************************************************


//*******************************************************对接服务器*****************************************************************

//执行小红书
function zxxhs() {
    try {
        toastLog("执行小红书任务")
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['小红书', '6.52.0'],
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
                            log(element[0] + "安装失败")
                        }
                    } else {
                        break;
                    }
                }
            });

            _THREADSSxx.interrupt()
        });
        //修改
        var dl = xhsdl()
        if (dl == true) {
            clickMessage();
            browseRecommend();
        }
        TKB.qinglihh()
    } catch (error) {
        log(error);
        sleep(random(1000, 2000))
    }
}


function main() {
    try {
        device.keepScreenOn(240 * 60 * 60 * 1000)
        var res = getTaskInfo(taskId, url)
        log(res)
        zxxhs();
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
}

main();