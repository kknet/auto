log("tKB")
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
var dqbaoming = "com.xingin.xhs" //该项目包名
var qqb_pk = 'com.tencent.mtt'
var xmxh = "33" //项目序号
var browseTime = 30 * 60 * 1000;
var likeMin = 500;
var likePercent = 10;
var collectPercent = 0;
var tabList = ['影视综艺', '运动健身', '摄影']
var taskList = ['看商城', '搜索关键词任务', '看直播']
var keyword;
var focusonUrl;
var refreshClick = 3;
var clickOther;
var clickFocuson;
var workLink;
var comments;
var imageLinks;
var title;
var name;
var jianjie;
var nameflag
var imgflag
var explainflag

//*******************************************************微博项目 *****************************************************************
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
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.xgsrizhi('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.xgsrizhi('失败')
        }
    } catch (error) {
        TKB.xgsrizhi(error)
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
            TKB.xgsrizhi('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.xgsrizhi('失败')
        }
    } catch (error) {
        TKB.xgsrizhi(error)
    }
}

//所有判断和弹窗
function popUp() {
    if (text('温馨提示').exists() && text('欢迎来到小红书！').exists()) {
        TKB.xgsrizhi("用户协议")
        click("同意")
        sleep(2000)
    }
    if (text("好久不见，欢迎回来").exists()) {
        TKB.xgsrizhi("点击跳过")
        click("跳过")
        sleep(2000)
    }
    if (text('隐私协议提示').exists()) {
        TKB.xgsrizhi("隐私协议提示")
        click("同意并继续")
        sleep(2000)
    }
    if (text("开启设备权限").exists()) {
        TKB.xgsrizhi("点击暂时不用")
        click("暂时不用")
        sleep(2000)
    }
    if (text("退出直播").exists()) {
        click("退出直播");
        sleep(2000);
        TKB.xgsrizhi("退出直播");
    }
    if (text("暂时不了").exists() && text("立刻开启").exists()) {
        click("暂时不了");
        sleep(2000);
        TKB.xgsrizhi("暂时不了");
    }
    if (text("退出").exists() && text("关注并退出").exists()) {
        click("退出");
        sleep(2000);
        TKB.xgsrizhi("点击退出");
    }
    if (id("com.xingin.xhs:id/a64").exists && text("立即更新").exists()) {
        id("com.xingin.xhs:id/a64").click();
        sleep(2000);
        TKB.xgsrizhi("取消立即更新")
    }
    if (textStartsWith("您对小红书的评分").exists()) {
        back();
        sleep(2000);
        TKB.xgsrizhi("取消评分");
    }
    if (id("com.xingin.xhs:id/b_a").exists()) {
        id("com.xingin.xhs:id/b_a").click();
        sleep(2000);
        refreshClick--;
        TKB.xgsrizhi("点击刷新")
        if (refreshClick < 0) {
            TKB.qinglihh(dqbaoming);
            sleep(2000);
            launch(dqbaoming);
            sleep(12000);
        }
    }
    if (text("我知道了").exists()) {
        click("我知道了");
        TKB.xgsrizhi("点击我知道了")
        sleep(2000);
    }
    if (text("以后再说").exists() && text("立即更新").exists()) {
        click("以后再说");
        TKB.xgsrizhi("以后再说")
        sleep(2000);
    }
    if (text("新版发布").exists()) {
        click(300, 1350);
        TKB.xgsrizhi("点击坐标以后再说")
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
    if (text("发现").exists()) {
        if (!text("发现").findOnce().selected()) {
            click("发现");
            TKB.xgsrizhi("不在首页点击发现")
        }
    }
    if (textContains("欢迎使用手机管家").exists()) {
        click("继续");
        TKB.xgsrizhi("点击使用手机管家")
        sleep(2000);
    }
    if (textStartsWith("你有未完成的笔记").exists() && text("放弃").exists()) {
        click("放弃");
        TKB.xgsrizhi("点击放弃未完成的笔记")
        sleep(2000);
    }
    if (desc("立即打开").exists()) {
        click(546, 1735)
        TKB.xgsrizhi("点击坐标关闭")
        sleep(2000);
    }
    if (id("android:id/content").packageName(qqb_pk).exists()) {
        TKB.xgsrizhi("遇到弹窗");
        sleep(5000);
    }
    if (text("忽略").exists()) {
        click("忽略");
        TKB.xgsrizhi("点击忽略");
        sleep(2000);
    }
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (id("com.xingin.xhs:id/av5").exists()) {
        id("com.xingin.xhs:id/av3").findOnce().click()
        sleep(3000)
        TKB.xgsrizhi("点击关闭商城弹窗")
    }
    //qq浏览器小红书滑块验证码
    if (text("向右滑动滑块填充拼图").exists() && text('我要反馈').exists()) {
        TKB.xgsrizhi("游览器小红书滑块验证码")
        var zz = qqbget_verify()
        log(zz)
        sleep(2000)
        if (zz != undefined || zz != 'undefined') {
            var x = zz[0]
            log('xxx'+x)
            swipe(190, 1257, x+130, 1257, random(1200, 1500))
            sleep(1000)
            TKB.xgsrizhi("滑块验证码成功")
            toastLog("滑块验证码成功")
        } else {
            TKB.xgsrizhi("滑块验证码失败")
            toastLog("滑块验证码失败")
        }
    }
    if (text('请确认你不是机器人').exists()) {
        TKB.xgsrizhi("滑块验证码")
        var zz = get_verify()
        log(zz)
        sleep(2000)
        var x = zz[0]
        swipe(190, 1100, x - 10, 1100, random(1200, 1500))
        sleep(1000)
        TKB.xgsrizhi("滑块验证码成功")
        toastLog("滑块验证码成功")
    }
}
//滑块
function get_verify() {
    try {
        // sleep(3000)
        // click(890, 621)
        sleep(5000)
        img = "/sdcard/0234.jpg"
        captureScreen(img)
        toast("截屏已完成")
        var src = images.read(img)
            // var verify_bounds = id(img_id).findOnce().bounds()
        var url = 'http://122.228.155.197:8803/captcha_slide'
            // var clip = images.clip(src, verify_bounds.left, verify_bounds.top, verify_bounds.width(), verify_bounds.height())
        var clip = images.clip(src, 47, 257, 985, 574)
        imgFile = "/sdcard/clip.png"
        images.save(clip, imgFile)
        var res = http.postMultipart(url, {
            mode: "ks",
            image: open(imgFile),
            type: imgFile
        });
        var html = res.body.json()
        if (html["result"] != 'no find') {
            TKB.xgsrizhi('成功')
            var centerY = html['result']['center']
            return centerY
        } else {
            sleep(1000)
            TKB.xgsrizhi('失败')
            return '失败'
        }
    } catch (error) {
        TKB.xgsrizhi(error)
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
//下载链接的图片
function downLoadImage(lj, num) {
    TKB.xgsrizhi("下载图片" + num);
    var dirpath = "/sdcard/XHSImage/";
    files.ensureDir(dirpath);
    var tem = 0
    var imgurl = lj
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
            log(error);
            sleep(random(3000, 8000))
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
//小红书登录
function xhsdl() {
    TKB.xgsrizhi("小红书登录")
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
            if (xs['点赞数量'] == '0' || xs['点赞数量'] == 0) {
                likeMin = 1000;
                TKB.xgsrizhi("未获取到点赞数量")
            } else {
                likeMin = xs['点赞数量'];
                TKB.xgsrizhi("获取到点赞数量" + likeMin)
            }
            if (xs['点赞百分比'] == 0 || xs['点赞百分比'] == '0') {
                likePercent = 10;
                TKB.xgsrizhi("未获取到点赞百分比")
            } else {
                likePercent = xs['点赞百分比'];
                TKB.xgsrizhi("获取到点赞百分比" + likePercent)
            }
            if (xs['关键词'] == 0 || xs['关键词'] == '0' || xs['关键词'] == undefined) {
                TKB.xgsrizhi("未获取关键词")
                taskList.splice(1, 1);
            } else {
                keyword = xs['关键词'];
                TKB.xgsrizhi("获取到的关键词为" + keyword);
            }
        } else if (fun == "关注") {
            var xs = zhid(sbip, run_id)
            clickFocuson = xs["关注方式"];
            TKB.xgsrizhi("获取到第" + clickFocuson + "种")
            clickOther = xs["关注人数"];
            TKB.xgsrizhi("获取到关注人数" + clickOther)
            if (xs["关注链接"] == 0 || xs["关注链接"] == '0') {
                TKB.xgsrizhi("未获取到关注链接")
            } else {
                focusonUrl = xs['关注链接']
                focusonFlag = true;
                TKB.xgsrizhi("获取到关注链接为" + focusonUrl)
            }
        } else if (fun == "点赞") {
            var xs = zhid(sbip, run_id)
            if (xs["作品链接"] == 0 || xs["作品链接"] == '0') {
                TKB.xgsrizhi("未获取到作品链接");
            } else {
                workLink = xs["作品链接"];
                TKB.xgsrizhi("获取到作品链接为" + workLink);
            }
        } else if (fun == "评论") {
            var xs = zhid(sbip, run_id)
            if (xs["作品链接"] == 0 || xs["作品链接"] == '0') {
                TKB.xgsrizhi("未获取到作品链接");
            } else {
                workLink = xs["作品链接"];
                TKB.xgsrizhi("获取到作品链接为" + workLink);
            }
            if (xs["话术"] == 0 || xs["话术"] == "0") {
                TKB.xgsrizhi("未获取到话术");
            } else {
                comments = xs["话术"];
                TKB.xgsrizhi("获取到话术为" + comments);
            }
        } else if (fun == "代发任务") {
            var xs = zhid(sbip, run_id)
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

        }
    } catch (error) {
        TKB.xgsrizhi(error);
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
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                alert("获取验证码次数过多，请稍后重试");
                TKB.qinglihh();
                launch(dqbaoming);
                sleep(12000);
                is_verify = 3;
            }
            if (text("本机号码可一键登录") && text("其他号码登录").exists()) {
                TKB.xgsrizhi("一键登录")
                var clickOneKey = text("本机号码可一键登录").findOnce().bounds()
                click(clickOneKey.centerX(), clickOneKey.centerY())
                sleep(2000)
            }
            if (text('微信登录').exists() && text('手机号登录').exists()) {
                TKB.xgsrizhi("点击手机号登录")
                var clickPhonenum = text('手机号登录').findOnce().bounds()
                click(clickPhonenum.centerX(), clickPhonenum.centerY())
                sleep(2000)
            }
            if (text("其他号码登录").exists() && text("同意协议并登录").exists()) {
                TKB.xgsrizhi("点击同意协议并登录")
                var clickAgreement = text("同意协议并登录").findOnce().bounds()
                click(clickAgreement.centerX(), clickAgreement.centerY())
                sleep(2000)
            }
            if (text("请输入手机号码").exists() && text("请输入验证码").exists()) {
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
                text("请输入手机号码").findOnce().setText(zh)
                sleep(2000)
            }
            if (id("com.xingin.xhs:id/wx").exists()) {
                if (id("com.xingin.xhs:id/wx").findOnce().enabled() == true) {
                    TKB.xgsrizhi("获取验证码")
                    var clickYzm = id("com.xingin.xhs:id/wx").findOnce().bounds()
                    click(clickYzm.centerX(), clickYzm.centerY())
                    TKB.xgsrizhi("点击验证码按钮")
                    sleep(random(10000, 15000))
                    yzm = TKB.huoquyzm("小红书")
                        // yzm="123456";
                    sleep(2000)
                    if (yzm == false) {
                        TKB.xgsrizhi("没有获取到验证码")
                        TKB.qinglihh(dqbaoming)
                        launch(dqbaoming)
                        sleep(8000)
                        is_verify--
                        TKB.xgsrizhi("剩余次数" + is_verify);
                        TSD = (new Date()).getTime()
                        continue
                    } else {
                        TKB.xgsrizhi("请输入验证码" + yzm)
                        setText(1, yzm)
                        sleep(2000)
                        loginClickFlag = true;
                    }
                }
            }
            if (textStartsWith('重新发送(').exists()) {
                TKB.xgsrizhi("正在等待重新发送")
                sleep(5000)
            }
            if (id('com.xingin.xhs:id/bbv').exists() && loginClickFlag) {
                if (id('com.xingin.xhs:id/bbv').findOnce().enabled() == true) {
                    TKB.xgsrizhi("点击同意协议并登录")
                    loginClick++
                    click("同意协议并登录")
                    sleep(2000);
                    loginClickFlag = false;
                    if (loginClick >= 3) {
                        TKB.xgsrizhi("无法点击同意协议并登录")
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
                if (sex == 0) {
                    TKB.xgsrizhi("选择男生")
                    var boy = id("com.xingin.xhs:id/bby").findOnce().bounds()
                    click(boy.centerX(), boy.centerY());
                } else {
                    TKB.xgsrizhi("选择女生")
                    var girl = id("com.xingin.xhs:id/b9t").findOnce().bounds()
                    click(girl.centerX(), girl.centerY());
                }
                sleep(2000)
            }
            if (text('选择你的生日').exists()) {
                TKB.xgsrizhi("滑动选择生日")
                if (id("com.xingin.xhs:id/dhj").exists()) {
                    TKB.xgsrizhi("滑动选择年份")
                    for (let i = 0; i < random(1, 3); i++) {
                        swipe(220, 1400, 193, 1835, 1000)
                        sleep(2000)
                    }
                }
                sleep(1000)
                if (id("com.xingin.xhs:id/bnp").exists()) {
                    TKB.xgsrizhi("滑动选择月份")
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
                    TKB.xgsrizhi("滑动选择日期")
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
                    TKB.xgsrizhi("点击确认")
                    click("确认")
                    sleep(2000)
                }
            }
            if (text("下一步").exists()) {
                TKB.xgsrizhi("点击下一步")
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
                    TKB.xgsrizhi("点击下一步")
                    click("下一步")
                    sleep(2000)
                }
            }
            while (text("始终同意").exists()) {
                click("始终同意");
                sleep(2000);
                TKB.xgsrizhi("点击始终同意")
            }
            if (text("在小红书上的好友").exists()) {
                TKB.xgsrizhi("好友中点击下一步")
                click("下一步")
                sleep(2000)
            }
            if (text("让大家更好地认识你").exists()) {
                TKB.xgsrizhi("输入名字")
                    // text('名字').findOnce().setText(getRandomName(random(3, 6)));
                text('名字').findOnce().setText(result_name());
                sleep(2000)
            }
            if (text("完成").exists() && text("完成").findOnce().enabled() == true) {
                TKB.xgsrizhi("点击完成")
                click("完成")
                sleep(2000)
            }
            if (text("上传一张头像吧").exists()) {
                TKB.xgsrizhi("点击跳过")
                click("跳过")
                sleep(2000)
            }
            if (text("发现").exists() && text("关注").exists()) {
                TKB.xgsrizhi("登录成功")
                sleep(2000)
                return true
            }
            popUp()
        } catch (error) {
            TKB.xgsrizhi(error)
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
    TKB.xgsrizhi("任务间隔为" + taskInterVal + "分钟");
    TKB.xgsrizhi("类目任务间隔为" + tabInterval + "分钟");
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > browseTime && ifRecommend) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            if ((new Date()).getTime() - startTime > tabTime && !ifRecommend) {
                TKB.xgsrizhi("时间够了退出类目词任务")
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
            if ((new Date()).getTime() - taskStart > taskInterVal * 60 * 1000 &&
                taskList.length > 0 && ifRecommend) {
                browseTime -= ((new Date()).getTime() - startTime)
                var taski = random(0, taskList.length - 1);
                TKB.xgsrizhi("执行" + taskList[taski] + "任务");
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
                TKB.xgsrizhi("类目词发生变化");
                ifClick = true;
                ifRecommend = false;
                var tabi = random(0, tabList.length - 1);
                tabName = tabList[tabi];
                TKB.xgsrizhi("类目词为" + tabName);
                tabList.splice(tabi, 1);
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(5000);
                    TKB.xgsrizhi("点击首页")
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
            var contents = id("com.xingin.xhs:id/v7").find().filter(function(w) {
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
                            TKB.xgsrizhi("点赞数量为" + contentsLike);
                        }
                        if (contentsLike <= likeMin) {
                            TKB.xgsrizhi("点赞有点低")
                            sleep(2000)
                            continue
                        }
                    }
                    contents[index].click();
                    TKB.xgsrizhi("点击图文");
                    sleep(6000)
                    sliding()
                    TKB.xgsrizhi("返回到首页")
                    back()
                    sleep(5000)
                }

            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(6000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(15000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//刷图文和视频
function sliding(counts, ifComment) {
    if (ifComment == undefined) {
        ifComment == false;
    }
    if (id("com.xingin.xhs:id/nickNameTV").exists()) {
        popUp()
        TKB.xgsrizhi("图文笔记")
        swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
        sleep(2000);
        if (id("com.xingin.xhs:id/aqq").exists()) {
            var pageContent = id("com.xingin.xhs:id/aqq").findOnce().text().split("/")
            var pageNum = pageContent[pageContent.length - 1]
            pageNum = pageNum > 5 ? random(3, 5) : pageNum
            for (let i = 1; i < pageNum - 1; i++) {
                TKB.xgsrizhi("滑动图片")
                swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                sleep(2000)
            }
        }
        var pageTime = random(10, 15)
        var pageStart = (new Date()).getTime()
        while (true) {
            if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                TKB.xgsrizhi("图文内容滑动")
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
                TKB.xgsrizhi("点赞")
                sleep(2000);
            }
        }
        if (random(1, 100) <= collectPercent) {
            if (id("com.xingin.xhs:id/but").exists()) {
                id("com.xingin.xhs:id/but").findOnce().click();
                TKB.xgsrizhi("点收藏")
                sleep(2000);
            }
        }
        if (ifComment) {
            if (id("com.xingin.xhs:id/buy").exists()) {
                id("com.xingin.xhs:id/buy").findOnce().click();
                TKB.xgsrizhi("评论")
                sleep(2000);
                setText(0, comments)
                sleep(3000);
                if (text("发送").exists()) {
                    click("发送");
                    TKB.xgsrizhi("点击发送按钮")
                } else {
                    click(970, 890);
                    TKB.xgsrizhi("点击发送坐标")
                }
                sleep(2000);
            }
        }
    }
    if (id("com.xingin.xhs:id/dc9").exists()) {
        popUp()
        if (counts == undefined) {
            counts = random(3, 6);
        }
        for (let i = 0; i < counts; i++) {
            TKB.xgsrizhi("刷第" + i + "个视频");
            var videoStart = (new Date()).getTime();
            var seekBar = id("com.xingin.xhs:id/dc9").find().filter(function(w) {
                return w.bounds().bottom < 1800 && w.bounds().bottom > 0;
            })[0];
            if (seekBar == undefined) {
                swipe(500, 1700, 500, 200, 700);
                sleep(2000);
                TKB.xgsrizhi("进度条不存在 下滑看新视频");
                continue;
            } else {
                click(seekBar.bounds().centerX(), seekBar.bounds().centerY())
                sleep(2000);
            }
            if (id("com.xingin.xhs:id/mediaPlayerTime").exists()) {
                var mediaText = id("com.xingin.xhs:id/mediaPlayerTime").findOnce().text().split(":");
                var mediaTime = Number(mediaText[mediaText.length - 1])
                TKB.xgsrizhi("视频时间为" + mediaTime);
                click(500, 500);
                sleep(2000)
            }
            if (id("com.xingin.xhs:id/likeLayout").exists() && id("com.xingin.xhs:id/likeTextView").exists()) {
                var likeCountsText = id("com.xingin.xhs:id/likeTextView").find().filter(function(w) {
                    return w.bounds().bottom > 0 && w.bounds().bottom < 1900;
                })[0];
                var likeCounts = likeCountsText.text();
                if (likeCounts.indexOf('万') != -1) {
                    likeCounts = likeCounts.split("万");
                    likeCounts = Number(likeCounts[0]) * 10000;
                }
                TKB.xgsrizhi("点赞数量为" + likeCounts);
                if (likeCounts < likeMin) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(1000);
                    continue;
                }
                if (random(1, 100) <= likePercent) {
                    var bounds = likeCountsText.bounds();
                    click(bounds.centerX(), bounds.centerY())
                    sleep(2000);
                    TKB.xgsrizhi("点赞");
                }
            }
            if (id("com.xingin.xhs:id/collectLayout").exists()) {
                if (random(1, 100) <= collectPercent) {
                    id("com.xingin.xhs:id/collectLayout").findOnce().click();
                    TKB.xgsrizhi("点收藏")
                    sleep(2000);
                }
            }
            if (ifComment) {
                if (id("com.xingin.xhs:id/commentLayout").exists()) {
                    id("com.xingin.xhs:id/commentLayout").findOnce().click()
                    TKB.xgsrizhi("写评论")
                    sleep(2000);
                    if (className("android.widget.EditText").exists()) {
                        className("android.widget.EditText").findOnce().click()
                        sleep(5000);
                    }
                    setText(0, "复古啊");
                    sleep(5000);
                    if (text("发送").exists()) {
                        click("发送");
                        TKB.xgsrizhi("点击发送按钮")
                    } else {
                        click(970, 890);
                        TKB.xgsrizhi("点击发送坐标")
                    }
                    sleep(5000);
                }
            }
            var sleepTime = random(10, 40);
            TKB.xgsrizhi("随机时间为" + sleepTime);
            if (mediaTime != undefined) {
                sleepTime = sleepTime > mediaTime ? mediaTime : sleepTime;
            }
            TKB.xgsrizhi("观看时间为" + sleepTime);
            sleep(1000);
            while (true) {
                if ((new Date()).getTime() - videoStart > sleepTime * 1000) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    TKB.xgsrizhi("下滑看新视频");
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
    TKB.xgsrizhi("商城任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(30, 90) * 1000) {
                TKB.xgsrizhi("时间够了退出")
                    // if (text("首页").exists()) {
                    //   click("首页");
                    // }
                return true
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as7").exists()) {
                    id("com.xingin.xhs:id/as7").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击商城")
                    swipe(random(500, 600), 1600, random(500, 600), 500, 1000)
                    sleep(2000)
                }
                if (id("com.xingin.xhs:id/dhc").exists()) {
                    var tabViews = id("com.xingin.xhs:id/dhc").findOnce().child(0).children();
                    tabViews[random(0, tabViews.size() - 1)].click();
                    TKB.xgsrizhi("随机点击商品分类")
                    sleep(4000);
                }
                ifClick = false;
                swipeCount = 0;
            }
            var contents = id("com.xingin.xhs:id/v7").find().filter(function(w) {
                return w.bounds().left < w.bounds().right
            })
            if (contents.length > 0) {
                // for (let index = 0; index < contents.length; index += random(1, 2)) {
                //   contents[index].click();
                //   TKB.xgsrizhi("点击商品")
                //   sleep(4000);
                //   TKB.xgsrizhi("图文笔记")
                //   if (textStartsWith("1/").exists()) {
                //     var pageNum = textStartsWith("1/").findOnce().text().split("/")[1]
                //     pageNum = pageNum > 5 ? random(3, 5) : pageNum;
                //   }
                //   pageNum = pageNum ? pageNum : random(1, 2)
                //   for (let i = 1; i < pageNum; i++) {
                //     TKB.xgsrizhi("滑动商品图片")
                //     swipe(random(1000, 900), 820, random(300, 200), 750, 1000)
                //     sleep(2000)
                //   }
                //   var pageTime = random(10, 15)
                //   var pageStart = (new Date()).getTime()
                //   while (true) {
                //     if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                //       TKB.xgsrizhi("图文内容滑动")
                //       swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                //       sleep(2000)
                //     } else {
                //       break
                //     }
                //   }
                //   TKB.xgsrizhi("返回到商城页")
                //   back()
                //   sleep(5000)
                // }
                for (let i = 0; i < random(2, 3); i++) {
                    swipe(random(500, 700), 1500, random(500, 700), 500, 1500);
                    sleep(1500);
                }
            } else {
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }

    }
}
//搜索关键词
function searchItem() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("搜索关键词任务开始")
    while (true) {
        try {
            popUp()
            if ((new Date()).getTime() - startTime > random(10, 20) * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击首页")
                }
                if (id("com.xingin.xhs:id/ao7").exists()) {
                    TKB.xgsrizhi("点击搜索栏")
                    id("com.xingin.xhs:id/ao7").findOnce().click()
                    sleep(5000)
                    TKB.xgsrizhi("输入关键词")
                    setText(0, keyword)
                    sleep(5000)
                    TKB.xgsrizhi("点击搜索")
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
                            TKB.xgsrizhi("点赞有点低")
                            sleep(2000)
                            continue
                        }
                        contents[index].click();
                        TKB.xgsrizhi("点击文章")
                        sleep(6000)
                        sliding()
                        TKB.xgsrizhi("返回到搜索页")
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
                TKB.xgsrizhi("找不到图文第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }

            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }
        } catch (error) {
            TKB.xgsrizhi(error);
        }

    }
    back()
    sleep(2000);
    if (id("com.xingin.xhs:id/bhe").exists()) {
        id("com.xingin.xhs:id/bhe").click();
        sleep(2000);
        TKB.xgsrizhi("返回主页")
    }
}
//直播
function browseLiveStream() {
    var startTime = (new Date()).getTime();
    var swipeCount = 0;
    var notInHome = 0;
    var ifClick = true;
    TKB.xgsrizhi("直播任务开始")
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > 10 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                back();
                break;
            }
            if (swipeCount > 80 || ifClick) {
                if (id("com.xingin.xhs:id/as2").exists()) {
                    id("com.xingin.xhs:id/as2").click();
                    sleep(2000);
                    TKB.xgsrizhi("点击首页")
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
                    TKB.xgsrizhi("直播已结束 退出直播间");
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                    continue;
                }
                var liveStart = (new Date()).getTime();
                var sleepTime = random(10, 20);
                TKB.xgsrizhi("观看直播时间为" + sleepTime);
                while (true) {
                    if ((new Date()).getTime() - liveStart > sleepTime * 1000) {
                        back();
                        sleep(2000);
                        popUp();
                        TKB.xgsrizhi("退出直播间");
                        break;
                    }
                }
                for (let i = 0; i < random(1, 2); i++) {
                    swipe(500, 1700, 500, 200, 700);
                    sleep(2000);
                }
                sleep(2000);
            } else {
                TKB.xgsrizhi("找不到直播间第" + notInHome + "次");
                notInHome++;
                back();
                sleep(2000);
                ifClick = true;
            }
            if (notInHome >= 3) {
                TKB.xgsrizhi("不在小红书页面3次 重新启动");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
                ifClick = true;
                notInHome = 0;
            }

        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
    return true

}
//点击类目
function clickTabTitle(name) {
    var lastView;
    sleep(3000);
    var startTime = (new Date()).getTime();
    while (!text(name).exists()) {
        try {
            if ((new Date()).getTime() - startTime > 60 * 1000) {
                TKB.xgsrizhi("找不到类目词,重启")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            swipe(900, 386, 100, 386, 2000);
            TKB.xgsrizhi("向右滑动寻找类目词" + name)
            popUp()
            sleep(2000);
            var tabViews = id("com.xingin.xhs:id/bii").find();
            if (lastView == undefined || lastView.text() != tabViews[tabViews.length - 1].text()) {
                lastView = tabViews[tabViews.length - 1]
            } else {
                break;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
    if (text(name).exists()) {
        click(name)
        TKB.xgsrizhi("点击" + name);
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
                TKB.xgsrizhi("类目词回不到推荐")
                TKB.qinglihh(dqbaoming);
                sleep(5000);
                launch(dqbaoming)
                sleep(12000)
                break;
            }
            popUp()
            swipe(100, 386, 900, 386, 1000);
            sleep(2000);
            TKB.xgsrizhi("向左滑回到推荐")
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

//点消息
function clickMessage() {
    if (id("com.xingin.xhs:id/as4").exists()) {
        popUp()
        var message = id("com.xingin.xhs:id/as4");
        if (message.findOnce().child(0).child(0).children().size() > 0) {
            TKB.xgsrizhi("有消息要点击")
            popUp()
            message.click();
            sleep(2000);
            TKB.xgsrizhi("点击消息");
            if (id("com.xingin.xhs:id/l2").exists()) {
                var messagelist = id("com.xingin.xhs:id/l2").find();
                var length = messagelist.size();
                for (let i = 0; i < length; i++) {
                    click(messagelist[i].bounds().centerX(), messagelist[i].bounds().centerY())
                    TKB.xgsrizhi("点击第" + i + "个消息");
                    sleep(3000);
                    back()
                    sleep(3000);
                    TKB.xgsrizhi("返回消息页面");
                }
            }
            if (id("com.xingin.xhs:id/b13").exists()) {
                click("赞和收藏")
                TKB.xgsrizhi("点击赞和收藏");
                sleep(10000);
                back();
                sleep(2000);
            }
            return true;
        } else {
            TKB.xgsrizhi("没有消息需要点击");
            return false;
        }
    }
}

//关注用户
function focusOn() {
    var statrtTime = (new Date()).getTime()
    var RT = (new Date()).getTime()
    setClip(focusonUrl)
    launch(qqb_pk)
    var lpp = 0
    TKB.xgsrizhi("打开浏览器");
    sleep(20000);
    while (1) {
        try {
            sleep(5000);
            popUp();
            if (text("以后再说").exists() && text("立即更新").exists()) {
                click("以后再说");
                TKB.xgsrizhi("以后再说")
                sleep(2000);
            }
            if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh()
                break
            }
            if ((new Date()).getTime() - statrtTime > 5 * 60 * 1000) {
                TKB.xgsrizhi("超时跳出");
                TKB.qinglihh()
                sleep(2000)
                setClip(focusonUrl)
                launch(qqb_pk)
                sleep(1000)
                statrtTime = (new Date()).getTime()
            }
            if (text('其他方式（有拦截风险）').exists() || text('腾讯应用宝下载（防拦截）').exists()) {
                TKB.xgsrizhi("腾讯应用宝下载");
                TKB.qinglihh()
                setClip(focusonUrl)
                sleep(3000)
                launch(qqb_pk)
                statrtTime = (new Date()).getTime()
            }
            if (focusonUrl != undefined) {
                if ((text('搜索或输入网址').exists() || id('com.tencent.mtt:id/search_bar_tv_hotword').exists())) {
                    if (text('搜索或输入网址').exists()) {
                        click("搜索或输入网址");
                    } else {
                        id('com.tencent.mtt:id/search_bar_tv_hotword').findOnce().click()
                    }
                    TKB.xgsrizhi("点击搜索栏");
                    sleep(3000)
                }
                if (text("以后再说").exists() && text("立即更新").exists()) {
                    click("以后再说");
                    TKB.xgsrizhi("以后再说")
                    sleep(2000);
                }
                popUp();
                if (id('com.tencent.mtt:id/search_frame_input_bar').exists()) {
                    sleep(5000)
                    popUp();
                    sleep(2000)
                    id('com.tencent.mtt:id/search_frame_input_bar').findOnce().longClick()
                    TKB.xgsrizhi("长按搜索栏");
                    sleep(3000)
                }
                if (text('粘贴').exists()) {
                    click("粘贴");
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
                }
                if (id("android:id/content").exists()) {
                    sleep(5000);
                }
                if (!text('打开App').exists()) {
                    TKB.xgsrizhi("点击坐标");
                    click(550, 1525)
                    sleep(3000)
                } else {
                    click("打开App");
                    TKB.xgsrizhi("点击立即打开 跳转小红书");
                    sleep(3000)
                }
                if (text("小红书.apk").exists()) {
                    TKB.xgsrizhi("有弹窗按一下返回");
                    sleep(3000)
                    back()
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
                if (textStartsWith("向右滑动滑块").exists() || text('我要反馈').exists()) {
                    TKB.xgsrizhi("滑块验证码")
                    var zz = get_verify()
                    log(zz)
                    sleep(2000)
                    var x = zz[0]
                    swipe(190, 1257, x - 10, 1257, random(1200, 1500))
                    sleep(1000)
                        // TKB.xgsrizhi("滑块验证码成功")
                        // toastLog("滑块验证码成功")
                }
                //进入到了用户页面
                if (id("com.xingin.xhs:id/c53").exists() && id("com.xingin.xhs:id/k5").exists()) {
                    if (clickFocuson == 0) {
                        if (id("com.xingin.xhs:id/v7").exists()) {
                            id("com.xingin.xhs:id/v7").findOnce().click()
                            TKB.xgsrizhi("点击被关注用户的第一条笔记");
                            sleep(5000)
                        } else {
                            if (id("com.xingin.xhs:id/d9v").exists()) {
                                id("com.xingin.xhs:id/d9v").findOnce().click()
                                TKB.xgsrizhi("没有笔记 点击关注按钮");
                                sleep(5000);
                            }
                        }
                        if (id("com.xingin.xhs:id/nickNameTV").exists()) {
                            popUp()
                            TKB.xgsrizhi("图文笔记")
                            swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                            if (id("com.xingin.xhs:id/aqq").exists()) {
                                var pageContent = id("com.xingin.xhs:id/aqq").findOnce().text().split("/")
                                var pageNum = pageContent[pageContent.length - 1]
                                pageNum = pageNum > 5 ? random(3, 5) : pageNum
                                for (let i = 1; i < pageNum - 1; i++) {
                                    TKB.xgsrizhi("滑动图片")
                                    swipe(random(1000, 900), 400, random(300, 200), 400, 1000)
                                    sleep(2000)
                                }
                            }
                            var pageTime = random(10, 15)
                            var pageStart = (new Date()).getTime()
                            while (true) {
                                if ((new Date()).getTime() - pageStart < pageTime * 1000) {
                                    TKB.xgsrizhi("图文内容滑动")
                                    swipe(random(700, 800), 1600, random(700, 800), 500, 1000)
                                    sleep(2000)
                                } else {
                                    break
                                }
                            }
                            if (text("关注").exists()) {
                                TKB.xgsrizhi("点击关注");
                                click("关注")
                                lpp = 1
                                sleep(2000)
                            }
                        }
                        if (id("com.xingin.xhs:id/dc9").exists()) {
                            popUp()
                            TKB.xgsrizhi("视频")
                            sleep(12000)
                            if (id("com.xingin.xhs:id/matrixFollowView").exists()) {
                                TKB.xgsrizhi("点击关注");
                                id("com.xingin.xhs:id/matrixFollowView").findOnce().click()
                                sleep(2000)
                                lpp = 1
                            }
                        }
                    } else {
                        if (id("com.xingin.xhs:id/ja").exists()) {
                            TKB.xgsrizhi("点击该用户的关注");
                            id("com.xingin.xhs:id/ja").findOnce().click()
                            sleep(3000)
                            if (text("她的关注").exists() || text("他的关注").exists()) {
                                var focusOnClick = id("com.xingin.xhs:id/d5o").find()
                                TKB.xgsrizhi("点击第三个关注");
                                focusOnClick[clickOther].click()
                                lpp = 1
                            }
                            sleep(2000)
                        }
                    }
                    if (lpp == 1) {
                        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                        lpp = 0
                    }
                    TKB.qinglihh(dqbaoming)
                    sleep(2000)
                    return true
                }
            } else {
                toast("未获取到关注链接")
                TKB.xgsrizhi("未获取到关注链接");
                sleep(5000);
            }
        } catch (error) {
            TKB.xgsrizhi("发现错误");
            TKB.xgsrizhi(error);
        }
    }
}
//点赞
function workLike() {
    var statrtTime = (new Date()).getTime();
    var RT = (new Date()).getTime()
    var failTime = 0;
    if (workLink != undefined) {
        while (1) {
            try {
                if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                    TKB.xgsrizhi("时间够了退出")
                    TKB.qinglihh()
                    break
                }
                if ((new Date()).getTime() - statrtTime > 5 * 60 * 1000) {
                    TKB.xgsrizhi("超时跳出");
                    TKB.qinglihh()
                    sleep(2000)
                }
                TKB.qinglihh();
                sleep(2000);
                setClip(workLink);
                launch(dqbaoming);
                TKB.xgsrizhi("打开小红书")
                sleep(12000);
                popUp()
                sleep(3000)
                if (text("立即查看").exists()) {
                    sleep(3000)
                    click("立即查看")
                    TKB.xgsrizhi("点击立即查看")
                    sleep(10000);
                    for (let i = 0; i < 3; i++) {
                        swipe(random(500, 700), 1600, random(500, 700), 400, 2000)
                        sleep(2000);
                        swipe(random(500, 700), 400, random(500, 700), 1600, 2000)
                        sleep(2000);
                    }
                    likePercent = 100;
                    likeMin = 0;
                    TKB.xgsrizhi("向下滑动评论")
                    sliding(1);
                    TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                    break
                } else {
                    TKB.xgsrizhi("失败")
                    failTime++;
                    if (failTime >= 3) {
                        KB.xgsrizhi("失败次数3次 退出")
                        break;
                    }
                }
            } catch (error) {
                TKB.xgsrizhi(error);
            }

        }
        if (failTime >= 3) {
            TKB.qinglihh();
            sleep(2000);
            TKB.xgsrizhi("网络异常", "点赞任务失败")
        }
    }
}
//评论
function workComment() {
    var failTime = 0;
    var statrtTime = (new Date()).getTime();
    if (workLink != undefined && comments != undefined) {
        while (1) {
            try {
                if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
                    TKB.xgsrizhi("时间够了退出")
                    TKB.qinglihh()
                    break
                }
                if ((new Date()).getTime() - statrtTime > 5 * 60 * 1000) {
                    TKB.xgsrizhi("超时跳出");
                    TKB.qinglihh()
                    sleep(2000)
                }
                TKB.qinglihh();
                sleep(2000);
                setClip(workLink);
                launch(dqbaoming);
                TKB.xgsrizhi("打开小红书")
                sleep(12000);
                popUp()
                sleep(3000)
                likePercent = 0;
                if (text("立即查看").exists()) {
                    sleep(3000);
                    click("立即查看")
                    sleep(10000)
                    TKB.xgsrizhi("点击立即查看")
                    for (let i = 0; i < 3; i++) {
                        swipe(random(500, 700), 1600, random(500, 700), 400, 2000)
                        sleep(2000);
                        swipe(random(500, 700), 400, random(500, 700), 1600, 2000)
                        sleep(2000);
                    }
                    likePercent = 0;
                    sleep(2000);
                    TKB.xgsrizhi("向下滑动评论")
                    sliding(1, true);
                    TKB.upkfrenw(sbip, user_id, yhbh, run_id)
                    break;
                } else {
                    TKB.xgsrizhi("失败")
                    failTime++;
                    if (failTime >= 3) {
                        KB.xgsrizhi("失败次数3次 退出")
                        break;
                    }
                }
            } catch (error) {
                TKB.xgsrizhi(error)
            }

        }
        if (failTime >= 3) {
            TKB.qinglihh();
            sleep(2000);
            TKB.xgsrizhi("网络异常", "点赞任务失败")
        }
    }
}
//代发任务
function dispatchTask() {
    if (imageLinks.length > 0) {
        for (let i = 0; i < imageLinks.length; i++) {
            downLoadImage(imageLinks[i], i);
            sleep(1000);
        }
    } else {
        return false;
    }
    // var startTime = (new Date()).getTime();
    // var failTime = 0;
    // while (true) {
    sleep(2000);
    // if ((new Date()).getTime() - startTime > 5 * 60 * 1000) {
    //   TKB.xgsrizhi("超时退出发布任务");
    //   break;
    // }
    popUp()
    if (id("com.xingin.xhs:id/as5").exists()) {
        id("com.xingin.xhs:id/as5").findOnce().click()
        TKB.xgsrizhi("点击发布任务按钮");
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
        TKB.xgsrizhi("选择第" + i + "照片");
        sleep(4000);
    }
    if (id("com.xingin.xhs:id/a0u").exists()) {
        id("com.xingin.xhs:id/a0u").findOnce().click();
        sleep(4000);
    }
    if (text("发布笔记").exists()) {
        setText(0, title);
        sleep(4000);
        setText(1, comments);
        sleep(4000);
        click("发布笔记");
        sleep(60 * 1000);
        if (text("取消").exists()) {
            click("取消");
            sleep(2000);
            // break;
        }
        TKB.upkfrenw(sbip, user_id, yhbh, run_id)
    }
    // else {
    //   failTime++;
    //   TKB.xgsrizhi("失败");
    //   if (failTime >= 3) {
    //     TKB.xgsrizhi("失败次数3次");
    //     break;
    //   }
    // }
    // }
    // if (failTime >= 3) {
    //   TKB.xgsrizhi("失败次数过多");
    //   alert("网络异常", "代发任务操作失败")
    // }
}


//下载图片
function xztp(lj) {
    xgsrizhi("下载图片")
    var dirpath = "/sdcard/DY/";
    files.ensureDir(dirpath);
    var tem = 0
        // let imgurl = 'https://abcxgs.oss-cn-hangzhou.aliyuncs.com/ceshi/3.png';
    var imgurl = lj
    xgsrizhi("拿图片的链接" + imgurl)
    while (1) {
        try {
            if (tem > 10) {
                xgsrizhi("访问次数够了退出")
                return false
            }
            var filePath = files.join(dirpath, '1.png');
            let res = http.get(imgurl);
            if (res.statusCode == 200) {
                files.writeBytes(filePath, res.body.bytes());
                media.scanFile(filePath);
                xgsrizhi("下载图片完成")
                return true
            } else {
                xgsrizhi("没有图片了 ");
                sleep(2000)
                tem = tem + 1
            };
        } catch (error) {
            log(error);
            sleep(random(3000, 8000))
        }
    }
}

//修改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0 //判断编辑资料界面该干啥
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    if (zz == false) {
        alert('素材获取错误')
        return false
    } else {
        name = zz['nickname']
        TKB.xgsrizhi(name)
        var img = zz['img']
        TKB.xgsrizhi(img)
        jianjie = zz['jianjie']
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
            launch(dqbaoming)
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
                TKB.upinfo(sbip, user_id, yhbh, info, status)
                sleep(2000)
                TKB.xgsrizhi("执行完了退出")
                TKB.qinglihh();
                return true
            }
        }
    }
}



//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        while (1) {
            try {
                if ((new Date()).getTime() - TJH > 3 * 55 * 1000) {
                    log("激活设备")
                    TKB.xjihuoxt(sbip, user_id, yhbh)
                    TJH = (new Date()).getTime()
                }
                if ((new Date()).getTime() - ssee > 60 * 1000) {
                    aa = aa + 1
                    TKB.cunqusj("jiaoben", aa)
                    var renwux = TKB.huoqujjrw(sbip, user_id, yhbh, run_id) //获取紧急任务
                    if (!_THREADSSxx.isAlive()) {
                        TKB.xgsrizhi("子线程运行结束！");
                        aa = 1
                        renwux = true
                    }
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续小红书任务")
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
                    if (files.exists("/sdcard/观沧海.mp3") == false) {
                        TKB.xgsrizhi("没有音乐文件去下载")
                        TKB.dowmp3()
                        sleep(5000)
                    }
                    ssee = (new Date()).getTime()
                }
                media.playMusic("/sdcard/观沧海.mp3", 0.01);
                TKB.xgsrizhi("我还在播放音乐")
                sleep(media.getMusicDuration());
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************对接服务器*****************************************************************

//执行小红书
function zxxhs() {
    try {
        toastLog("执行小红书任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
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
            var dl = xhsdl()
            if (dl == true) {
                clickMessage();
                if (fun == "养号") {
                    browseRecommend()
                } else if (fun == "关注") {
                    focusOn()
                } else if (fun == "点赞") {
                    workLike();
                } else if (fun == "评论") {
                    workComment();
                } else if (fun == "代发任务") {
                    dispatchTask()
                } else if (fun == "修改资料") {
                    changeInfo()
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

zxxhs();
// clickMessage()
// browseRecommend()