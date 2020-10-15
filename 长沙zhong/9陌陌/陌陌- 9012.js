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
var dqbaoming = "com.immomo.momo" //该项目包名
var xmxh = "9" //项目序号 版本11.0.0
var name;
var jianjie;
var nameflag
var imgflag
var explainflag
var imageLinks;


//******************************************************************momo项目*****************************************************************
function z_split(xx){
    var zz = xx
    if (zz.length > 1) {
        zx = zz[1]
    } else {
        zx = zz[0]
    }
    return zx
}
function zonghe() {
    if (text("稍后").exists() && text("去打开").exists()) {
        TKB.xgsrizhi("稍后")
        click("稍后")
        sleep(2000)
    }
    if (id('com.immomo.momo:id/iv_close').exists() && !text('确认退出').exists()) {
        TKB.xgsrizhi("close")
        id('com.immomo.momo:id/iv_close').click()
        sleep(1000)
    }
    if (text("忽略").exists()) {
        click("忽略");
        TKB.xgsrizhi("忽略");
        sleep(1200)
    }
    if (text("你的性别是？").exists() && id('com.immomo.momo:id/iv_close').exists()) {
        TKB.xgsrizhi("你的性别是？")
        id('com.immomo.momo:id/iv_close').click()
        sleep(2000)
    }
    if (text('执行失败').exists() && text('点击重新加载').exists()) {
        TKB.xgsrizhi("点击重新加载")
        click(540, 940)
        sleep(1000)
    }
    if (text('关注房间').exists() && id('com.immomo.momo:id/btn_follow').exists()) {
        TKB.xgsrizhi("关注房间")
        back()
        sleep(1000)
    }
    if (id('com.immomo.momo:id/popup_phone_live_gesture_guide_tv').exists()) {
        TKB.xgsrizhi("上下滑动")
        click(700, 1500)
        sleep(1000)
    }
    if (text('@TA').exists() && text('关注').exists()) {
        TKB.xgsrizhi("个人页面")
        back()
        sleep(1000)
    }
    if (text('“悬浮窗”权限申请').exists() && text('开启').exists()) {
        TKB.xgsrizhi("“悬浮窗”权限申请")
        click('取消')
        sleep(1000)
    }
    if (text('要退出房间吗？').exists() && text('确认退出').exists()) {
        TKB.xgsrizhi("退出房间")
        click('确认退出')
        sleep(1000)
    }
    if (text('和他聊').exists() && text('拒绝').exists()) {
        TKB.xgsrizhi("正在配对交友");
        click('拒绝')
        sleep(1000)
    }
    if (text('真人头像认证').exists()) {
        TKB.xgsrizhi("真人头像认证");
        back()
        sleep(1000)
    }
    if (desc('陌陌直播').exists()) {
        click(870, 530)
    }
    if (id('com.immomo.momo:id/title').exists() && id('com.immomo.momo:id/toolbar_back').exists() && id('com.immomo.momo:id/next_img').exists()) {
        TKB.xgsrizhi("选择你的个人特质")
        id('com.immomo.momo:id/toolbar_back').click()
        sleep(1000)
    }
    if (text("去开启").exists() && text("权限申请").exists()) {
        TKB.xgsrizhi("权限申请")
        click("去开启")
        sleep(2000)
    }
    if (text("开启定位").exists() && text("取消").exists()) {
        TKB.xgsrizhi("定位")
        click("开启定位")
        sleep(2000)
    }
    if (text('直播结束').exists() && text('关注').exists() && id('com.immomo.momo:id/live_stop_iv_close').exists()) {
        TKB.xgsrizhi('直播结束')
        id('com.immomo.momo:id/live_stop_iv_close').click()
        sleep(2000)
    }
    if (text('屏蔽').exists() && text('跳过').exists()) {
        TKB.xgsrizhi('屏蔽')
        click('屏蔽')
        sleep(2000)
    }
    if (text('屏蔽手机联系人').exists() && text('取消').exists() && text('确认').exists()) {
        TKB.xgsrizhi('屏蔽手机联系人')
        click('确认')
        sleep(2000)
    }
    if (desc('进入青少年模式').exists() && desc('知道了').exists()) {
        TKB.xgsrizhi('青少年模式')
        desc('知道了').click()
        sleep(2000)
    }
    if (text("允许").exists() && text("拒绝").exists()) {
        TKB.xgsrizhi("允许拒绝")
        click("允许")
        sleep(2000)
    }
    if (text("我知道了").exists()) {
        TKB.xgsrizhi("我知道了")
        click("我知道了")
        sleep(2000)
    }
    if (text("下一步").exists()) {
        TKB.xgsrizhi("下一步")
        click("下一步")
        sleep(2000)
    }
    if (text("网络连接错误").exists()) {
        click("重试");
        TKB.xgsrizhi("网络连接错误");
        sleep(1200)
    }
    if (text("发现通讯录好友").exists()) {
        TKB.xgsrizhi("发现通讯录")
        click("取消")
        sleep(1200)
    }
    if (textContains("没有响应").exists()) {
        click("等待");
        TKB.xgsrizhi("等待");
        sleep(1200)
    }
    if (text("五星好评").exists()) {
        click("取消");
        TKB.xgsrizhi("取消");
        sleep(1200)
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        TKB.xgsrizhi("以后再说");
        sleep(1200)
    }
    if (text("跳过").exists()) {
        click("跳过");
        TKB.xgsrizhi("跳过");
        sleep(1200)
    }
    if (text("立即赠送").exists()) {
        TKB.xgsrizhi("立即赠送")
        back()
        sleep(1000)
    }
    if (text("先去逛逛").exists()) {
        TKB.xgsrizhi("立即赠送")
        click('先去逛逛')
        sleep(1000)
    }
    if (text("允许").exists()) {
        click("允许");
        TKB.xgsrizhi("允许");
        sleep(1200)
    }
    if (text("滑动查看更多").exists()) {
        TKB.xgsrizhi("滑动查看更多")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }

    if (text("上滑查看更多视频").exists()) {
        TKB.xgsrizhi("上滑查看更多视频")
        swipe(500, 1600, 600, 400, 1200);
        sleep(2000)
    }
    if (text("点击领钱").exists()) {
        click("点击领钱");
        TKB.xgsrizhi("点击领钱");
        sleep(1200)
    }
    if (text("去她的房间").exists() || text("去他的房间").exists()) {
        click(933, 491);
        TKB.xgsrizhi("点击关闭");
        sleep(1200)
    }
    if (id('com.immomo.momo:id/mk_dialog_close_button').exists()) {
        TKB.xgsrizhi("关闭守护主播")
        id('com.immomo.momo:id/mk_dialog_close_button').findOnce().click()
        sleep(1000)
    }
}

function phone_name() {
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
    var name = xing[Math.floor(Math.random() * xing.length)] + ming[Math.floor(Math.random() * ming.length)] + ming[Math.floor(Math.random() * ming.length)]
    TKB.xgsrizhi(name)
    return name
}

function mmzc() {
    TKB.xgsrizhi('MOMO陌陌注册')
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
        // var zh = '18072074995'
        // var yzm = '1234'
    var nc = phone_name()
    var xb = 0
    var yzmcs = 0
    var cs = 0
    var bb = 0
    var tem = 0
    while (1) {
        if ((new Date()).getTime() - RT > 20 * 60 * 1000) {
            TKB.xgsrizhi('时间够了退出')
            TKB.qinglihh(dqbaoming)
            return false
        }
        if ((new Date()).getTime() - TSD > 5 * 60 * 1000) {
            TKB.xgsrizhi('超时没注册成功')
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (bb == 1 && tem == 0) {
            TKB.xgsrizhi("去获取号码")
            zh = TKB.benjitel()
            if (zh == false) {
                TKB.xgsrizhi("获取不到号码")
                return false
            }
            TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
            tem = 1
        }
        if (text("同意").exists() && text('欢迎使用MOMO陌陌APP').exists()) {
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(2000)
        }
        if (text("手机号登录注册").exists() && text('欢迎使用MOMO陌陌APP').exists()) {
            TKB.xgsrizhi("同意")
            click("同意")
            sleep(2000)
        }
        if (text('首页').exists() && text('直播').exists() && text('消息').exists() && text('关注').exists() && text('更多').exists()) {
            TKB.xgsrizhi('首页')
            click(970, 1840)
            sleep(2000)
        }
        if ((text("手机号登录注册").exists() && id("com.immomo.momo:id/img_wx").exists()) || (text("手机号登录注册").exists() && text("获取验证码").exists())) {
            TKB.xgsrizhi("还未登录账号--先去登录")
            if (bb == 0) {
                TKB.xgsrizhi("先去获取号码")
                bb = 1
            } else {
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    return false
                }
                TKB.xgsrizhi("输入账号" + zh)
                setText(1, zh)
                sleep(3000)
                if (text('获取验证码').exists()) {
                    TKB.xgsrizhi("点击获取验证码")
                    click('获取验证码')
                    sleep(5000)
                }
            }
        }
        while (1) {
            if (id('com.jifen.dandan:id/iv_code').exists() && id('com.jifen.dandan:id/tv_title').exists()) {
                if (yzmcs > 5) {
                    TKB.xgsrizhi("获取图片验证码次数过多")
                    return false
                }
                if (text('短信发送过于频繁,请稍后再试').exists()) {
                    TKB.xgsrizhi("短信发送过于频繁,请稍后再试")
                    return false
                }
                TKB.xgsrizhi("刷新")
                id('com.jifen.dandan:id/rl_refresh').click()
                sleep(3000)
                var verify_str = get_verify('com.jifen.dandan:id/iv_code')
                id('com.jifen.dandan:id/inputView').click()
                jpshuru(verify_str)
                yzmcs++
                sleep(2000)
            } else {
                break
            }
        }
        if (text("输入6位验证码").exists() && bb == 1) {
            TKB.xgsrizhi("输入6位验证码")
            yzm = TKB.huoquyzm("陌陌")
            if (cs > 2) {
                TKB.xgsrizhi("不继续注册了")
                return false
            }
            if (text('重新获取').exists() && text('获取语音验证码').exists()) {
                TKB.xgsrizhi("重新获取")
                click('重新获取')
                sleep(1000)
            }
            if (yzm == false) {
                back()
                sleep(100)
                back()
                sleep(2000)
            } else {
                TKB.xgsrizhi("输入验证码" + yzm)
                setText(yzm)
                sleep(1000)
                click('登录')
                sleep(5000)
            }
            cs = cs + 1
        }
        zonghe()
        if (id('com.immomo.momo:id/rg_rootLayout').exists() && id('com.immomo.momo:id/et_name').exists() && id('com.immomo.momo:id/rl_birth').exists()) {
            if (text('填写昵称').exists()) {
                TKB.xgsrizhi('填写昵称')
                setText(0, nc)
                sleep(2000)
            }
            if (text('选择生日').exists()) {
                id('com.immomo.momo:id/rl_birth').click()
                for (var i = 0; i < random(1, 11); i++) {
                    TKB.xgsrizhi('年')
                    swipe(300, 1050, 300, 900, random(500, 800))
                    sleep(500)
                }
                for (var x = 0; x < random(1, 12); x++) {
                    TKB.xgsrizhi('月')
                    swipe(550, 1050, 550, 900, random(500, 800))
                    sleep(500)
                }
                for (var z = 0; z < random(1, 31); z++) {
                    TKB.xgsrizhi('日')
                    swipe(790, 1050, 790, 900, random(500, 800))
                    sleep(500)
                }
                sleep(1000)
                click(800, 1320)
                sleep(1000)
            }
            if (xb == 0) {
                click('女生')
                sleep(2000)
            } else {
                click('男生')
                sleep(2000)
            }
            TKB.xgsrizhi(xb)
            click('下一步')
            sleep(2000)
        }
        if (text('上传本人真实照片').exists() && id('com.immomo.momo:id/img_photo').exists() && !id('com.immomo.momo:id/img_has_photo').exists()) {
            TKB.xgsrizhi('上传本人真实照片')
            id('com.immomo.momo:id/img_photo').click()
            sleep(2000)
        }
        if (text('相册').exists() && id('com.immomo.momo:id/tab_title').exists() && text('完成').exists()) {
            TKB.xgsrizhi('选择第一张')
            click(530, 430)
            sleep(1000)
        }
        if (text('裁切图片').exists() && id('com.immomo.momo:id/imagefactory_btn2').exists()) {
            TKB.xgsrizhi('裁切图片')
            id('com.immomo.momo:id/imagefactory_btn2').click()
            sleep(2000)
        }
        if (text('重选').exists() && text('完成').exists() && id('com.immomo.momo:id/edit_panel').exists()) {
            TKB.xgsrizhi('确定选择')
            click('完成')
            sleep(2000)
        }
        if (text('上传本人真实照片').exists() && id('com.immomo.momo:id/img_photo').exists() && id('com.immomo.momo:id/img_has_photo').exists()) {
            TKB.xgsrizhi('头像设置完成')
            click('完成进入')
            sleep(2000)
        }
        if (id('com.immomo.momo:id/simple_user_name').exists() && id('com.immomo.momo:id/simple_user_avatar').exists() && text('好友').exists() && text('关注').exists()) {
            TKB.xgsrizhi('登录成功')
            return true
        } else {
            if (text('首页').exists() && text('直播').exists() && text('消息').exists() && text('关注').exists() && text('更多').exists()) {
                TKB.xgsrizhi('首页')
                click(970, 1840)
                sleep(2000)
            }
        }
        sleep(500)
    }
}

function mmyh() {
    TKB.xgsrizhi("陌陌养号")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var num = 0 //浏览次数
    var gkcs = random(20, 30)
    var dinz = random(30, 60)
    var zbguank = (new Date()).getTime()
    var x = 0
    while (1) {
        if ((new Date()).getTime() - RT > stt * 60 * 1000) {
            TKB.xgsrizhi("时间够了退出")
            TKB.qinglihh(dqbaoming)
            break
        }
        if ((new Date()).getTime() - TSD > 3 * 60 * 1000) {
            TKB.xgsrizhi("超时没在首页")
            back()
            sleep(1000)
            TKB.qinglihh(dqbaoming)
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        if (x == 0) {
            if (text('首页').exists() && text('直播').exists() && text('消息').exists() && text('关注').exists() && text('更多').exists()) {
                TKB.xgsrizhi('首页')
                click(100, 1840)
                sleep(2000)
            }
            if (text('附近动态').exists() && text('附近的人').exists() && text('同城').exists() && id('com.immomo.momo:id/nearby_filter').exists()) {
                TKB.xgsrizhi("附近的人")
                while (1) {
                    zonghe()
                    comment = id('com.immomo.momo:id/user_layout_root').find()
                    if (!comment.empty()) {
                        comment.forEach(item => {
                            var sj = random(0, 1, 2)
                            if (sj == 0) {
                                var b = item.click()
                                sleep(3000)
                                zonghe()
                                if (id("com.immomo.momo:id/profile_tv_name").exists()) {
                                    TKB.xgsrizhi("个人名片")
                                    num++
                                    for (var i = 0; i < random(2, 4); i++) {
                                        if (text('尚未发布动态').exists()) {
                                            TKB.xgsrizhi("尚未发布动态")
                                            sleep(1000)
                                            break
                                        }
                                        if (text('已加载全部内容').exists()) {
                                            TKB.xgsrizhi("已加载全部内容")
                                            sleep(1000)
                                            break
                                        }
                                        swipe(557, 1550, 533, 400, random(1000, 1500))
                                        sleep(2000)
                                    }
                                    back()
                                    sleep(1000)
                                }
                                if (id("com.immomo.momo:id/start_info_view").exists() && id('com.immomo.momo:id/phone_live_layout_bottom').exists()) {
                                    TKB.xgsrizhi("直播")
                                    sleep(1000)
                                    back()
                                    sleep(1000)
                                }
                                if (id("com.immomo.momo:id/card_right_btn").exists() && id('com.immomo.momo:id/card_left_btn').exists()) {
                                    TKB.xgsrizhi("点点")
                                    sleep(1000)
                                    back()
                                    sleep(1000)
                                }
                                if (text('真人头像认证').exists()) {
                                    TKB.xgsrizhi("真人头像认证");
                                    back()
                                    sleep(1000)
                                }
                                if (text('要退出房间吗？').exists() && text('确认退出').exists()) {
                                    TKB.xgsrizhi("退出房间")
                                    click('确认退出')
                                    sleep(1000)
                                }
                                if (text('聊天室').exists() && text('创建房间').exists()) {
                                    TKB.xgsrizhi("聊天室")
                                    sleep(1000)
                                    back()
                                    sleep(1000)
                                }
                                if (text('温州同城聊天室').exists() && text('关注房间').exists()) {
                                    TKB.xgsrizhi("房间")
                                    sleep(1000)
                                    back()
                                    sleep(1000)
                                }
                                if (text('温州同城聊天室').exists() && id('com.immomo.momo:id/iv_close').exists()) {
                                    TKB.xgsrizhi("温州同城聊天室")
                                    id('com.immomo.momo:id/iv_close').click()
                                    sleep(1000)
                                }
                            }
                        })

                    }
                    if (num > gkcs) {
                        TKB.xgsrizhi("去看直播")
                        x = 1
                        break
                    }
                    swipe(557, 1650, 533, 300, random(400, 1000))
                    TKB.xgsrizhi("滑动")
                }
            } else if (text('附近动态').exists() && text('同城').exists() && id('com.immomo.momo:id/feed_publish').exists() || text('附近动态').exists() && text('同城').exists() && id('com.immomo.momo:id/feed_publish').exists()) {
                TKB.xgsrizhi("附近的人")
                click('附近的人')
            }
        } else if (x == 1) {
            zonghe()
            if (text('首页').exists() && text('直播').exists() && text('消息').exists() && text('关注').exists() && text('更多').exists()) {
                TKB.xgsrizhi("直播")
                click('直播')
                sleep(2000)
            }
            if (text('附近').exists() && !id('com.immomo.momo:id/live_video_view').exists()) {
                TKB.xgsrizhi("推荐")
                click(90, 180)
                sleep(2000)
            }
            if (id('com.immomo.momo:id/live_center_layout').exists()) {
                TKB.xgsrizhi("点击直播")
                id('com.immomo.momo:id/live_center_layout').click()
                sleep(5000)
            }
            if (id("com.immomo.momo:id/start_info_view").exists() && id('com.immomo.momo:id/phone_live_layout_bottom').exists()) {
                TKB.xgsrizhi("直播")
                var TTguank = (new Date()).getTime()
                while (1) {
                    if ((new Date()).getTime() - zbguank > random(30 - 40) * 60 * 1000) {
                        TKB.xgsrizhi("观看直播完成")
                        back()
                        sleep(500)
                        break
                    }
                    if (text('直播结束').exists() && text('关注').exists() && id('com.immomo.momo:id/live_stop_iv_close').exists()) {
                        TKB.xgsrizhi('直播结束')
                        id('com.immomo.momo:id/live_stop_iv_close').click()
                        sleep(2000)
                        swipe(550, 1750, 550, 300, 1500)
                        sleep(random(3, 5) * 1000)
                        var TTguank = (new Date()).getTime()
                        dinz = random(30, 60)
                    }
                    if ((new Date()).getTime() - TTguank > dinz * 1000) {
                        toastLog(dinz + '秒，滑动')
                        var name = id('com.immomo.momo:id/live_tv_star_name').findOnce().text()
                        swipe(550, 1750, 550, 300, 1500)
                        sleep(random(5, 6) * 1000)
                        var namex = id('com.immomo.momo:id/live_tv_star_name').findOnce().text()
                        if (name === namex) {
                            TKB.xgsrizhi("下滑没有直播了")
                            back()
                            sleep(500)
                            return false
                        }
                        dinz = random(30, 60)
                        TTguank = (new Date()).getTime()
                    } else {
                        toastLog('观看直播')
                        sleep(3000)
                    }
                }
            }
        }
        zonghe()
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
    } else {
        name = z_split(zz['nickname'].split('|||'))
        TKB.xgsrizhi(name)
        var img = z_split(zz['img'].split('|||'))
        TKB.xgsrizhi(img)
        jianjie = z_split(zz['jianjie'].split('|||'))
        TKB.xgsrizhi(jianjie)
        var sp = TKB.xztp(img)
        if (sp == false) {
            TKB.xgsrizhi("下载图片失败")
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
        zonghe()
        if (text("首页").exists() && text("更多").exists()) {
            TKB.xgsrizhi("点击更多")
            id("com.immomo.momo:id/maintab_layout_profile").findOnce().click()
            sleep(2000);
        }
        if (text("查看或编辑个人资料").exists() && text("更多").exists()) {
            TKB.xgsrizhi("点击个人资料")
            id("com.immomo.momo:id/simple_user_layout").findOnce().click()
            sleep(2000)
        }
        if (text("发布动态").exists() && desc("修改资料").exists()) {
            TKB.xgsrizhi("点击修改资料")
            id("com.immomo.momo:id/menu_edit").findOnce().click()
                // desc("修改资料").findOnce().click()
                // click(1004, 169)
            sleep(2000)
        }
        if (text("编辑资料").exists() && text("保存").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                if  (xs['是否修改名字']  ==  '是') {
                    TKB.xgsrizhi("修改名字")
                    if (text("编辑资料").exists() && text("昵称").exists()) {
                        TKB.xgsrizhi("前往修改名字")
                        id("com.immomo.momo:id/layout_name").findOnce().click()
                        sleep(3000)
                        if (text("昵称").exists() && desc("提交").exists()) {
                            TKB.xgsrizhi("清空原有的名字")
                            id("android:id/edit").findOnce().setText("")
                            sleep(3000)
                            TKB.xgsrizhi("添加新的名字")
                                // id("com.xingin.xhs:id/bse").findOnce().setText(getRandomName(random(3, 6)));
                            setText(name);
                            sleep(3000)
                            TKB.xgsrizhi("点击完成")
                            desc("提交").findOnce().click()
                            sleep(3000)
                        }
                        if (id("com.immomo.momo:id/profile_tv_name").findOnce().text() !== name) {
                            TKB.xgsrizhi("陌陌昵称不符合")
                            nameflag = '陌陌昵称不符合'
                        } else {
                            TKB.xgsrizhi("陌陌昵称符合")
                            nameflag = '陌陌昵称符合'
                        }
                        tep = 1
                        sleep(3000)
                    }
                } else {
                    tep = 1
                    TKB.xgsrizhi("陌陌昵称不修改") 
                    nameflag  =  '陌陌昵称不修改'
                }
            }
            //头像
            if (tep == 1) {
                if  (xs['是否修改头像']  ==  '是') {
                    TKB.xgsrizhi("修改头像")
                    if (text("编辑资料").exists() && text("保存").exists()) {
                        TKB.xgsrizhi("点击修改头像")
                        var avatar = id("com.immomo.momo:id/avatar_imageview").findOnce().bounds()
                        click(avatar.centerX(), avatar.centerY())
                        sleep(3000)
                        while (text("始终同意").exists()) {
                            click("始终同意");
                            sleep(2000);
                            TKB.xgsrizhi("点击始终同意")
                        }
                        sleep(6000)
                        if (text('编辑或替换').exists()) {
                            TKB.xgsrizhi("点击全部，选择相册")
                                // id("com.xingin.xhs:id/cxc").findOnce().click();
                            click("相册")
                            sleep(3000);
                            if (text("相册").exists()) {
                                TKB.xgsrizhi("点击相册")
                                click("相册")
                                sleep(3000);
                            }
                            if (text("DY").exists()) {
                                TKB.xgsrizhi("点击DY相册")
                                click("DY")
                                sleep(3000);
                            }
                            click(100, 300);
                            sleep(3000)
                            if (text('取消').exists() && text('确认').exists()) {
                                TKB.xgsrizhi("点击确认")
                                click('确认')
                                sleep(3000)
                            }
                            if (text('重选').exists() && text('完成').exists()) {
                                TKB.xgsrizhi("点击完成")
                                click("完成")
                                sleep(3000)
                            }
                            if (text("编辑资料").exists() && text("保存").exists()) {
                                TKB.xgsrizhi("陌陌头像符合")
                                imgflag = '陌陌头像符合'
                            } else {
                                TKB.xgsrizhi("陌陌头像不符合")
                                imgflag = '陌陌头像不符合'
                            }
                            swipe(500, 1700, 193, 400, 1000)
                            sleep(2000)
                            tep = 2
                            sleep(3000)
                        }
                    }
                } else {
                    TKB.xgsrizhi("头像不修改") 
                    imgflag =  '陌陌头像不修改'
                    swipe(500, 1700, 193, 400, 1000)
                    sleep(2000)
                    tep = 2
                    sleep(3000)
                }
            }
            //简介
            if (tep == 2) {
                if  (xs['是否修改简介']  ==  '是') {
                    TKB.xgsrizhi("修改简介")
                    if (text("个人签名").exists() && text("编辑资料").exists()) {
                        click("个人签名")
                        TKB.xgsrizhi("点击个人签名")
                        sleep(2000)
                        if (text("个人签名").exists()) {
                            if (text(jianjie).exists()) {
                                TKB.xgsrizhi("已经是该简介了")
                                sleep(3000)
                                explainflag = '陌陌简介符合'
                                back()
                                sleep(3000)
                                tep = 3
                                sleep(3000)
                            } else {
                                TKB.xgsrizhi("填写简介")
                                setText(jianjie)
                                sleep(2000)
                                desc("提交").findOnce().click()
                                TKB.xgsrizhi("点击提交")
                                sleep(6000)
                                if (text("个人签名").exists() && desc("提交").exists()) {
                                    TKB.xgsrizhi("7天之内只能修改三次")
                                    back()
                                    sleep(3000)
                                    explainflag = '陌陌简介不符合'
                                } else {
                                    explainflag = '陌陌简介符合'
                                }
                                tep = 3
                                sleep(3000)
                            }
                        }
                    }
                } else {
                    tep = 3
                    TKB.xgsrizhi("简介不做修改") 
                    explainflag =  '小红书简介不修改'
                    sleep(3000)
                }
            }
            //地区
            if (tep == 3) {
                if (text("编辑资料").exists() && text("家乡").exists()) {
                    click("家乡")
                    TKB.xgsrizhi("点击家乡")
                    sleep(3000)
                    if (text('选择家乡').exists()) {
                        TKB.xgsrizhi("滑动选择家乡")
                        if (id("com.immomo.momo:id/wvv_province").exists()) {
                            TKB.xgsrizhi("滑动选择省份")
                            for (let i = 0; i < random(1, 3); i++) {
                                swipe(277, 1118, 270, 831, 1000)
                                sleep(2000)
                            }
                        }
                        sleep(1000)
                        if (id("com.immomo.momo:id/wvv_city").exists()) {
                            TKB.xgsrizhi("滑动选择城市")
                            for (let i = 0; i < random(1, 3); i++) {
                                if (random(0, 1) == 0) {
                                    swipe(553, random(1118, 990), 564, random(990, 1118), 1000)
                                } else {
                                    swipe(564, random(990, 1118), 553, random(1118, 990), 1000)
                                }
                            }
                        }
                        sleep(1000)
                        if (id("com.immomo.momo:id/wvv_county").exists()) {
                            TKB.xgsrizhi("滑动选择区域")
                            for (let i = 0; i < random(1, 3); i++) {
                                if (random(0, 1) == 0) {
                                    swipe(910, random(1118, 990), 920, random(990, 1118), 1000)
                                } else {
                                    swipe(920, random(990, 1118), 910, random(1118, 990), 1000)
                                }
                            }
                        }
                        sleep(2000)
                        if (text("确认").exists() && text("取消").exists()) {
                            TKB.xgsrizhi("点击确认")
                            click("确认")
                            sleep(2000)
                        }
                    }
                    tep = 4
                    sleep(3000)
                }
            }
            //职业
            if (tep == 4) {
                if (text("编辑资料").exists() && text("职业").exists()) {
                    click("职业")
                    TKB.xgsrizhi("点击职业")
                    sleep(3000)
                    if (text('选择你从事的行业').exists()) {
                        var tabviews = id("com.immomo.momo:id/lv_menu").findOnce().children()
                        var tabview = random(0, tabviews.size())
                        click(tabviews[tabview].bounds().centerX(), tabviews[tabview].bounds().centerY())
                        sleep(3000)
                        var subjects = id("com.immomo.momo:id/lv_subject").findOnce().children()
                        var subject = random(0, subjects.size())
                        click(subjects[subject].bounds().centerX(), subjects[subject].bounds().centerY())
                        sleep(3000)
                        if (text("填写你的职业").exists()) {
                            desc("保存").findOnce().click()
                            TKB.xgsrizhi("点击保存")
                            sleep(3000)
                            tep = 5
                        }
                    }
                }
            }
            //上传
            if (tep == 5) {
                if (nameflag == '陌陌昵称符合' && imgflag == '陌陌头像符合' && explainflag == '陌陌简介符合') {
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
//下载链接的图片
function downLoadImage(lj, num) {
    TKB.xgsrizhi("下载图片" + num);
    var dirpath = "/sdcard/momoImage/";
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
        if (xs['链接地址' + num] == 0 || xs['链接地址' + num] == '0') {
            TKB.xgsrizhi("未获取到图片链接" + num);
        } else {
            TKB.xgsrizhi("获取到链接" + "," + xs['链接地址' + num])
            image_urls.push(xs['链接地址' + num]);
        }
    }
    TKB.xgsrizhi("一共有" + image_urls.length + "个链接地址")
    return image_urls;
}

//陌陌发圈
function releaseNews() {
    TKB.xgsrizhi("陌陌养号")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(30, 40)
    var xs = TKB.zhid(sbip, run_id)
    if (xs["话术"] == 0 || xs["话术"] == "0") {
        TKB.xgsrizhi("未获取到话术");
    } else {
        comments = xs["话术"];
        TKB.xgsrizhi("获取到话术为" + comments);
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
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            RT = (new Date()).getTime()
        }
        zonghe()
        if (text("首页").exists() && text("更多").exists()) {
            id("com.immomo.momo:id/maintab_layout_nearby").findOnce().click()
            TKB.xgsrizhi("点击首页");
            sleep(5000);
        }
        if (text("附近动态").exists() && text("发动态").exists()) {
            id("com.immomo.momo:id/feed_publish").findOnce().click()
            TKB.xgsrizhi("点击发布动态");
            sleep(5000);
        }
        if (text("发布动态").exists() && text("取消").exists() && text("发布")) {
            id("com.immomo.momo:id/iv_live_photo").findOnce().click()
            TKB.xgsrizhi("点击影集");
            sleep(3000)
            if (text("影集").exists() && text("相册").exists() && text("视频").exists()) {
                click("相册");
                TKB.xgsrizhi("点击相册");
                sleep(3000);
                click("相册");
                TKB.xgsrizhi("点击相册");
                sleep(3000);
            }
            if (text("momoImage").exists()) {
                click("momoImage");
                TKB.xgsrizhi("点击选择相册momoImage");
                sleep(3000);
            }
            var view = id("com.immomo.momo:id/item_layout").find().filter((w) => {
                return w.bounds().left !== 0
            })
            if (view[0].findOne(id("com.immomo.momo:id/tv_item_duration"))) {
                TKB.xgsrizhi("发布视频")
                click(212, 401)
                TKB.xgsrizhi("点第一个视频")
                sleep(3000)
                if (text("完成").exists() && text("重拍").exists()) {
                    click("完成")
                    TKB.xgsrizhi("点击完成")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("发布图片")
                if (id("com.immomo.momo:id/iv_item_select").exists()) {
                    var images = id("com.immomo.momo:id/iv_item_select").find().filter((w) => {
                        return w.bounds().left !== 0
                    });
                    TKB.xgsrizhi("选择" + imageLinks.length + "张照片");
                    for (let i = 0; i < imageLinks.length; i++) {
                        images[i].click();
                        TKB.xgsrizhi("选择第" + i + "张照片");
                        sleep(4000);
                    }
                }
                if (id("com.immomo.momo:id/finish").exists()) {
                    id("com.immomo.momo:id/finish").findOnce().click();
                    TKB.xgsrizhi("点击完成");
                    sleep(4000);
                }
            }
            if (text("发布动态").exists()) {
                setText(comments);
                sleep(4000);
                id("com.immomo.momo:id/publish_btn").findOnce().click();
                sleep(30000);
                TKB.xgsrizhi("发布完成")
                TKB.qinglihh(dqbaoming)
                return true
            }
        }
    }
}

//******************************************************************momo项目*****************************************************************

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function() {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var timex = (new Date()).getTime()
        var yunxing = (new Date()).getTime() //运行的时间
        TKB.cunqusj("jiaoben", "1")
        var aa = 1
        if (files.exists("/sdcard/观沧海.mp3") == false) {
            TKB.xgsrizhi("没有音乐文件去下载")
            TKB.dowmp3()
        }
        media.playMusic("/sdcard/观沧海.mp3", 0.1, true);
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
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续陌陌任务")
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

//*******************************************************新服务器*********************************************************************

function mmzhixing() {
    try {
        toastLog("执行MOMO陌陌任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var baom = getPackageName("MOMO陌陌")
            if (baom == null) {
                var bbd = TKB.wdjxiazai("MOMO陌陌", "v8.24.3")
                if (bbd == false) {
                    TKB.xgsrizhi("MOMO陌陌安装失败")
                    _THREADSS.interrupt()
                    TKB.cunqusj("jiaoben", "tingzhi")
                    java.lang.System.exit(0);
                }
            }
            device.keepScreenOn(240 * 60 * 60 * 1000)
            TKB.qinglihh()
            var dl = mmzc()
            if (dl == true) {
                if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "发圈养号") {
                    releaseNews()
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
        log(error);;
        TKB.cunqusj("jiaoben", "tingzhi")
            //files.write("/sdcard/jiaoben.txt", "tingzhi");
        java.lang.System.exit(0);
        sleep(random(1000, 2000))
    }
}
mmzhixing()