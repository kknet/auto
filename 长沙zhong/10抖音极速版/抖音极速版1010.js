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
var dqbaoming = "com.ss.android.ugc.aweme.lite" //该项目包名
var xmxh = "10" //项目序号
var browseTime = 180 * 60 * 1000;
var likeMin = 500;
var likePercent = 10;
var name;
var jianjie;
var nameflag
var imgflag

//*******************************************************微博项目 *****************************************************************
//弹窗
function popUp() {
    while (text("始终同意").exists()) {
        click("始终同意");
        sleep(2000);
        TKB.xgsrizhi("点击始终同意")
    }
    if (textStartsWith("个人信息").exists() && text("好的").exists()) {
        click("好的");
        TKB.xgsrizhi("点击好的");
        sleep(2000);
    }
    // if (id("com.ss.android.ugc.aweme.lite:idy").exists()) {
    //     id("com.ss.android.ugc.aweme.lite:idy").findOnce().click();
    //     TKB.xgsrizhi("关闭红包广告");
    //     sleep(2000);
    // }
    if (text("上滑查看更多视频").exists()) {
        swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
        sleep(2000)
        TKB.xgsrizhi("上滑查看更多视频")
    }
    if (textEndsWith("一个现金红包").exists()) {
        TKB.xgsrizhi("关闭红包广告");
        click(950, 400)
        sleep(2000);
    }
    if (id("com.ss.android.ugc.aweme.lite:id/bdx").exists()) {
        if (!id("com.ss.android.ugc.aweme.lite:id/bdx").findOnce().checked()) {
            id('com.ss.android.ugc.aweme.lite:id/bdx').findOnce().click();
            TKB.xgsrizhi('勾选用户协议和隐私政策');
            sleep(2000);
        }
    }
    if (text("关闭视频").exists()) {
        click("关闭视频");
        TKB.xgsrizhi("关闭广告视频")
        sleep(2000);
    }
    if (text("以后再说").exists()) {
        click("以后再说");
        sleep(2000);
        TKB.xgsrizhi("点击以后再说");
    }
    if (descStartsWith("点击选中两个").exists()) {
        TKB.xgsrizhi("等待人为验证")
        toast("等待人为验证")
        sleep(10000);
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

//获取资料
function get_name(sbip, user_id, yhbh) {
    TKB.xgsrizhi("获取名字头像简介")
    var TS = (new Date()).getTime()
    var url = 'http://' + sbip + '/api.php/potal/meitu/getname?user_id=' + user_id + '&der_id=' + yhbh
    // var url = 'http://47.114.99.72/api.php/potal/meitu/getname?user_id=9&der_id=628'
    TKB.xgsrizhi(url)
    while (true) {
        try {
            if ((new Date()).getTime() - TS > 5 * 60 * 1000) {
                TKB.xgsrizhi("获取名字超时退出")
                return false
            }
            res = http.get(url);
            if (res.statusCode == 200) {
                var ss = res.body.json();
                TKB.xgsrizhi(ss)
                if (ss["code"] == 0) {
                    var data = ss['data']
                    return data
                } else {
                    var data = ss['msg']
                    TKB.xgsrizhi(ss['msg'])
                    return false
                }
            }
            sleep(2000)
        } catch (e) {
            log("出错" + e)
            sleep(3000);
        }
    }
}

//抖音极速版改资料
function changeInfo() {
    TKB.xgsrizhi("改资料")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(5, 10)
    var sex = random(0, 1)
    var tep = 0 //判断编辑资料界面该干啥
    var zz = get_name(sbip, user_id, yhbh)
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
        popUp()
        if (text("首页").exists() && text("消息").exists() && text("我").exists()) {
            TKB.xgsrizhi("点击我")
            click("我")
            sleep(3000)
        }
        if (text("编辑资料").exists() && text("我").exists()) {
            TKB.xgsrizhi("点击编辑资料")
            click("编辑资料")
            sleep(3000)
        }
        if (text("编辑资料").exists() && text("点击更换头像").exists() && text("名字").exists()) {
            TKB.xgsrizhi("编辑资料界面")
            if (tep == 0) {
                TKB.xgsrizhi("修改头像")
                if (text("编辑资料").exists() && text("点击更换头像").exists()) {
                    TKB.xgsrizhi("点击头像")
                    id("com.ss.android.ugc.aweme.lite:id/aqc").findOnce().click()
                    sleep(3000)
                }
                if (text("从相册选择").exists() && text("取消").exists()) {
                    TKB.xgsrizhi("点击从相册选择")
                    click("从相册选择")
                    sleep(3000)
                }
                if (text('全部').exists()) {
                    TKB.xgsrizhi("点击全部，选择相册")
                    // id("com.xingin.xhs:id/cxc").findOnce().click();
                    click("全部")
                    sleep(2000);
                    if (text("DY").exists()) {
                        TKB.xgsrizhi("点击DY相册")
                        click("DY")
                        sleep(2000);
                    }
                    if (id("com.ss.android.ugc.aweme.lite:id/tk").exists()) {
                        TKB.xgsrizhi("选择照片")
                        id("com.ss.android.ugc.aweme.lite:id/tk").findOnce().click()
                        sleep(3000)
                    }
                    if (text("图片太小").exists() && text("知道了").exists()) {
                        TKB.xgsrizhi("抖音极速版头像不符合")
                        imgflag = '抖音极速版头像不符合'
                        TKB.xgsrizhi("点击知道了")
                        click("知道了")
                        sleep(3000)
                        back()
                        sleep(3000)
                    } else {
                        click("确认")
                        TKB.xgsrizhi("抖音极速版头像符合")
                        imgflag = '抖音极速版头像符合'
                    }
                    if (text("裁剪").exists() && text("完成").exists() && text("取消").exists()) {
                        TKB.xgsrizhi("点击完成")
                        click("完成")
                        sleep(3000)
                    }
                }
                tep = 1
                sleep(3000)
            }
            if (tep == 1) {
                TKB.xgsrizhi("修改名字")
                if (text("编辑资料").exists() && text("名字").exists()) {
                    TKB.xgsrizhi("点击名字")
                    id("com.ss.android.ugc.aweme.lite:id/bw3").findOnce().click()
                    sleep(3000)
                }
                if (text("修改名字").exists() && text("我的名字").exists()) {
                    TKB.xgsrizhi("清空原来的名字")
                    id("com.ss.android.ugc.aweme.lite:id/abs").findOnce().setText('')
                    sleep(3000)
                    TKB.xgsrizhi("添加名字")
                    setText(0, name)
                    sleep(3000)
                    click("保存")
                    sleep(3000)
                }
                if (text("修改名字").exists() && text("保存").exists()) {
                    TKB.xgsrizhi("抖音极速版昵称不符合")
                    nameflag = '抖音极速版昵称不符合'
                    back()
                    sleep(3000)
                } else {
                    TKB.xgsrizhi("抖音极速版昵称符合")
                    nameflag = '抖音极速版昵称符合'
                }
                tep = 2
                sleep(3000)
            }
            if (tep == 2) {
                TKB.xgsrizhi("修改简介")
                if (text("编辑资料").exists() && text("简介").exists()) {
                    TKB.xgsrizhi("点击简介")
                    id("com.ss.android.ugc.aweme.lite:id/cyi").findOnce().click()
                    sleep(3000)
                }
                if (text("修改简介").exists() && text("个人简介").exists()) {
                    if (text(jianjie).exists()) {
                        TKB.xgsrizhi("已经是该简介了")
                        back()
                        sleep(2000)
                    } else {
                        TKB.xgsrizhi("填写简介")
                        setText(jianjie)
                        sleep(2000)
                        click("保存")
                        TKB.xgsrizhi("点击保存")
                        sleep(3000)
                    }
                }
                tep = 3
                sleep(3000)
            }
            if (tep == 3) {
                TKB.xgsrizhi("修改性别")
                if (text("编辑资料").exists() && text("性别").exists()) {
                    TKB.xgsrizhi("点击性别")
                    id("com.ss.android.ugc.aweme.lite:id/al0").findOnce().click()
                    sleep(3000)
                }
                if (text("男").exists() && text("女").exists()) {
                    if (sex == 0) {
                        click("女")
                        sleep(3000)
                    } else {
                        click("男")
                        sleep(3000)
                    }
                }
            }
            if (nameflag == '小红书昵称符合' && imgflag == '小红书头像符合') {
                status = 1
            } else {
                status = 2
            }
            var info = nameflag + ',' + imgflag + ',' + 0
            upinfo(sbip, user_id, yhbh, info, status)
            TKB.xgsrizhi("执行完了退出")
            TKB.qinglihh();
            return true
        }
    }
}

//登录注册
function login() {
    var zh;
    TKB.xgsrizhi("抖音极速版登录")
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 15)
    var zh = "18958858647"
    var yzm = "8487"
    var is_verify = 3
    var is_send = true;
    var protocolClick = true;
    var loginClick = true;
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
            popUp();
            if (text("我").exists()) {
                click("我");
                TKB.xgsrizhi("点击我");
                sleep(2000);
                if (textStartsWith("抖音号").exists()) {
                    TKB.xgsrizhi("登陆成功");
                    return true
                }
            }
            if (text("本机号码一键登录").exists()) {
                if (id("com.ss.android.ugc.aweme.lite:id/ccd").exists()) {
                    id("com.ss.android.ugc.aweme.lite:id/ccd").findOnce().click();
                    sleep(2000);
                    TKB.xgsrizhi("点击同意协议")
                }
                click("本机号码一键登录");
                TKB.xgsrizhi('点击本机号码一键登录');
                sleep(2000);
            }
            if (text("获取短信验证码").exists()) {
                if (text("获取短信验证码").findOnce().parent().parent().enabled()) {
                    click("获取短信验证码");
                    is_send = true;
                    TKB.xgsrizhi("点击获取短信验证码");
                    sleep(random(10000, 15000))
                } else {
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
                    setText(0, zh)
                    sleep(2000);
                }
            }
            if (textStartsWith("访问太频繁").exists() || textStartsWith("验证码发送太频繁").exists()) {
                alert("点击访问次数过多请稍后重试");
                TKB.qinglihh(dqbaoming);
                sleep(2000);
                launch(dqbaoming);
                sleep(10000);
            }
            if (text("请输入验证码").exists() && is_send) {
                TKB.xgsrizhi("获取验证码")
                yzm = TKB.huoquyzm("抖音")
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
                    setText(0, yzm)
                    sleep(2000)
                    is_send = false;
                    loginClick = true
                }
            }
            if (text("重新发送").exists() && is_send == false) {
                click("重新发送");
                TKB.xgsrizhi("点击重新发送");
                sleep(2000);
                is_send = true;
            }
            if (text("登录").exists() && loginClick) {
                if (text("登录").findOnce().parent().parent().enabled()) {
                    if (id("com.ss.android.ugc.aweme.lite:id/ccd").exists() && protocolClick) {
                        id("com.ss.android.ugc.aweme.lite:id/ccd").findOnce().click();
                        sleep(2000);
                        protocolClick = false;
                        TKB.xgsrizhi("点击同意协议")
                    }
                    click("登录");
                    TKB.xgsrizhi("点击登录")
                    loginClick = false;
                }
            }
            if (textStartsWith("错误次数").exists()) {
                back();
                sleep(2000);
                TKB.xgsrizhi("错误次数太多，返回")
            }

            if (text("点击输入昵称").exists()) {
                setText(0, result_name());
                TKB.xgsrizhi('输入随机名称');
                sleep(2000);
            }

            if (text("点击设置出生日期").exists()) {
                click("点击设置出生日期");
                sleep(2000);
            }
            if (id("com.ss.android.ugc.aweme.lite:id/ehb").exists()) {
                TKB.xgsrizhi("选择年份")
                for (let i = 0; i < random(1, 5); i++) {
                    swipe(225, 1500, 225, 1750, 1000);
                }
                sleep(2000)
            }
            if (id("com.ss.android.ugc.aweme.lite:id/bsg").exists()) {
                TKB.xgsrizhi("选择月份")
                if (random(0, 1) == 0) {
                    for (let i = 0; i < random(1, 5); i++) {
                        swipe(510, 1500, 510, 1750, 1000);
                    }
                } else {
                    for (let i = 0; i < random(1, 5); i++) {
                        swipe(510, 1750, 510, 1500, 1000);
                    }
                }
                sleep(2000)
            }
            if (id("com.ss.android.ugc.aweme.lite:id/a2s").exists()) {
                TKB.xgsrizhi("选择日期")
                if (random(0, 1) == 0) {
                    for (let i = 0; i < random(1, 5); i++) {
                        swipe(800, 1500, 800, 1750, 1000);
                    }
                } else {
                    for (let i = 0; i < random(1, 5); i++) {
                        swipe(800, 1750, 800, 1500, 1000);
                    }
                }
                sleep(2000)
            }
            if (id("com.ss.android.ugc.aweme.lite:id/e67").exists()) {
                TKB.xgsrizhi("点击性别")
                id("com.ss.android.ugc.aweme.lite:id/e67").findOnce().click();
                sleep(2000);
                if (id("com.ss.android.ugc.aweme.lite:id/bw9").exists()) {
                    TKB.xgsrizhi("选择性别")
                    if (random(0, 1) == 1) {
                        swipe(540, 1750, 540, 1650, 1000);
                        sleep(2000);
                    }
                    back();
                    sleep(2000);
                }
            }
            if (desc("进入抖音").exists()) {
                click("进入抖音");
                TKB.xgsrizhi("点击进入抖音")
                sleep(2000);
                TKB.xgsrizhi("登录成功")
                return true;
            }
        } catch (error) {
            TKB.xgsrizhi(error)
            sleep(random(3000, 8000))
        }
    }
}

//养号
function browseRecommend() {
    TKB.xgsrizhi("抖音极速版养号")
    launch(dqbaoming)
    sleep(6000)
    var startTime = (new Date()).getTime()
    if (text("首页").exists()) {
        click("首页");
        sleep(2000);
        TKB.xgsrizhi("点击首页")
    }
    while (true) {
        try {
            if ((new Date()).getTime() - startTime > browseTime) {
                TKB.xgsrizhi("时间够了退出")
                TKB.qinglihh(dqbaoming)
                break;
            }
            popUp()
            if (id("com.ss.android.ugc.aweme.lite:id/a5g").exists()) {
                var totalLikes = id("com.ss.android.ugc.aweme.lite:id/a5g").findOnce().text();
                // log(totalLikes);
                if (totalLikes.indexOf('w') != -1) {
                    totalLikes = totalLikes.split("w");
                    totalLikes = Number(totalLikes[0]) * 10000;
                }
                TKB.xgsrizhi("点赞数量为" + totalLikes);
                sleep(2000)
                if (totalLikes < likeMin) {
                    swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
                    sleep(2000);
                }
            }
            if (random(1, 100) < likePercent) {
                if (id("com.ss.android.ugc.aweme.lite:id/a5f").exists()) {
                    id("com.ss.android.ugc.aweme.lite:id/a5f").findOnce().click();
                    sleep(2000)
                    TKB.xgsrizhi("点赞")
                }
            }
            sleep(random(10, 20) * 1000);
            swipe(random(400, 600), 1600, random(400, 600), 300, 1500)
        } catch (error) {
            TKB.xgsrizhi(error)
        }
    }
}

function clickMessage() {
    TKB.xgsrizhi("开始看消息")
    if (text("消息").exists()) {
        click("消息")
        TKB.xgsrizhi("点击消息")
        sleep(2000);
    }
    var messages = className("android.widget.TextView").depth(18).find().filter(function (w) {
        return w.text() != "";
    })
    for (let i = 0; i < messages.length; i++) {
        messages[i].parent().parent().click();
        sleep(5000);
        back();
        sleep(5000);
    }

    if (text("首页").exists()) {
        click("首页");
        TKB.xgsrizhi("点击首页")
        sleep(5000);
    }
}

function clickMoney() {
    if (id("com.ss.android.ugc.aweme.lite:id/bs8").exists()) {
        TKB.xgsrizhi("点击去赚钱")
        id("com.ss.android.ugc.aweme.lite:id/bs8").findOnce().click()
        sleep(10000)
    }
    if (desc("输入邀请码").exists()) {
        TKB.xgsrizhi("点击关闭输入邀请码")
        click(546, 1418)
        sleep(2000)
    }
    if (desc("去领钱").exists()) {
        desc("去领钱").findOnce().click()
        sleep(2000)
        TKB.xgsrizhi("点击去领钱")
    }
    if (desc("去领取").exists()) {
        desc("去领取").findOnce().click()
        sleep(2000)
        TKB.xgsrizhi("去领取")
    }
    if (desc("签到").exists()) {
        TKB.xgsrizhi("点击签到")
        click("签到")
        sleep(2000)
    }
    if (descStartsWith("签到成功").exists()) {
        TKB.xgsrizhi("点击关闭签到成功")
        click(547, 1610)
        sleep(2000)
    }
    back()
    sleep(5000)
}

//上传info结果
function upinfo(sbip, user_id, yhbh, info, status) {
    TKB.xgsrizhi("上传info结果")
    var Tb = (new Date()).getTime()
    TKB.xgsrizhi(sbip + "----" + user_id + "----" + yhbh)
    while (1) {
        try {
            if ((new Date()).getTime() - Tb > 30 * 1000) {
                TKB.xgsrizhi("超时退出")
                return false
            }
            if (info != '' || info != null) {
                var ss = info.split(",")
                var name_info = ss[0],
                    img_info = ss[1],
                    jianjie_info = ss[2]
                var url = "http://" + sbip + "/api.php/potal/meitu/gxnamestatus?user_id=" + user_id + "&der_id=" + yhbh + "&name_info=" + name_info + "&img_info=" + img_info + "&jianjie_info=" + jianjie_info + "&status=" + status
                TKB.xgsrizhi("链接：" + url)
                var r = http.get(url);
                if (r.statusCode == 200) {
                    var r_obj = r.body.json();
                    TKB.xgsrizhi(r_obj)
                    if (r_obj["code"] == "0") {
                        toastLog("上传info结果成功")
                        return true
                    }
                } else {
                    TKB.xgsrizhi("没网")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("info数据上传失败")
                sleep(3000)
            }
        } catch (error) {
            TKB.xgsrizhi(error);
            sleep(random(3000, 8000))
        }
        toastLog("上传info结果中...")
        sleep(random(100, 10000))
    }
}

//*******************************************************对接服务器*****************************************************************

function bofangyy() {
    _THREADSS = threads.start(function () {
        TKB.xgsrizhi("去播放音乐")
        var sstt = 0
        var ssee = (new Date()).getTime() - 50 * 1000
        var TJH = (new Date()).getTime()
        var timex = (new Date()).getTime()
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
                    if (renwux == false && (new Date()).getTime() - yunxing < run_time * 60 * 1000) {
                        TKB.xgsrizhi("继续抖音极速版任务")
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

//执行抖音极速版
function main() {
    try {
        toastLog("执行抖音极速版任务")
        bofangyy()
        _THREADSSxx = threads.start(function () {
            var app_list = [
                ['抖音极速版', '10.8.0'],
                // ['QQ浏览器', '10.5.1.7230']
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
            var dl = login()
            if (dl == true) {
                if (fun == "修改资料") {
                    changeInfo()
                } else if (fun == "养号") {
                    clickMessage()
                    clickMoney()
                    browseRecommend()
                }
            } else {
                TKB.qinglihh()
                TKB.xgsrizhi("获取验证码次数过多")
                alert("点击次数过多，请稍后重试");
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

main()
// browseRecommend()




// changeInfo()