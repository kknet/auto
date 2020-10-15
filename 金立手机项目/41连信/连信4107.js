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
var dqbaoming = 'com.zenmen.palmchat' //该项目包名
var xmxh = "41" //项目序号 版本11.0.0
let nameflag, imgflag, jianjieflag;
var name;
var jianjie;

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
    log(name)
    return name
}

function zonghe() {
    if (text('同意并继续').exists()) {
        click('同意并继续')
        TKB.xgsrizhi('同意并继续')
        sleep(1200)
    }
    if (text("详细资料").exists() && text("通过验证").exists()) {
        TKB.xgsrizhi('通过验证')
        click(540, 1640)
        sleep(5000)
        back()
        sleep(1000)
    }
    if (id('com.zenmen.palmchat:id/btn_cancel').exists() && text('你可能认识的人').exists()) {
        TKB.xgsrizhi('你可能认识的人')
        id('com.zenmen.palmchat:id/btn_cancel').findOnce().click()
        sleep(2000)
    }
    if (text('立即安装').exists() && text('取消').exists()) {
        TKB.xgsrizhi('取消更新')
        click('取消')
        sleep(2000)
    }
    if (text('发现更多好友').exists() && text('是').exists()) {
        TKB.xgsrizhi('发现更多好友')
        click('是')
        sleep(2000)
    }
    if (text('确定').exists()) {
        TKB.xgsrizhi('确定')
        click('确定')
        sleep(2000)
    }
    if (text('提示').exists() && text('是').exists()) {
        TKB.xgsrizhi('是')
        click('是')
        sleep(2000)
    }
    if (text('补充个人信息').exists() && text('下一步').exists()) {
        TKB.xgsrizhi('补充个人信息')
        back()
        sleep(2000)
    }
    if (text('退出').exists() && text('去看看').exists()) {
        TKB.xgsrizhi('退出')
        click('退出')
        sleep(2000)
    }
    if (textContains("好友申请").exists() && text("放弃").exists()) {
        TKB.xgsrizhi('放弃好友申请')
        click('放弃')
        sleep(1000)
    }
    if (text("详细资料").exists() && text("通过验证").exists()) {
        TKB.xgsrizhi('通过验证')
        click(540, 1640)
        sleep(5000)
        back()
        sleep(1000)
    }
    if (textContains("打招呼").exists() && text("接受").exists()) {
        TKB.xgsrizhi('接受打招呼')
        click('接受')
        sleep(1000)
    }
    if (text('未完成注册，是否退出?').exists() && text('我再看看').exists()) {
        TKB.xgsrizhi('我再看看')
        click('我再看看')
        sleep(1000)
    }
    if (text('退出').exists() && text('去看看').exists()) {
        TKB.xgsrizhi('退出')
        click('退出')
        sleep(1000)
    }
    if (desc("继续填写").exists() && desc("退出").exists()) {
        TKB.xgsrizhi("继续填写")
        click(750, 1130)
        sleep(2000)
    }
    if (text('手机联系人').exists() && id('com.zenmen.palmchat:id/title').exists() && id('com.zenmen.palmchat:id/searchIcon').exists()) {
        TKB.xgsrizhi('手机联系人')
        back()
        sleep(1000)
    }
    if (id('com.zenmen.palmchat:id/moment_guide_text').exists() && id('com.zenmen.palmchat:id/moment_guide_camera_btn').exists()) {
        TKB.xgsrizhi('返回')
        back()
        sleep(1000)
    }
    if (text("消息").exists() && text("找朋友").exists() && text("好友圈").exists() && text("我的").exists()) {
        TKB.xgsrizhi("首页")
        click(890, 1840)
        sleep(2000)
    }
    if (text('用户协议和隐私政策').exists() && text('同意并继续').exists()) {
        TKB.xgsrizhi('用户协议和隐私政策')
        click('同意并继续')
        sleep(2000)
    }
    if (text('跳过').exists()) {
        click('跳过')
        TKB.xgsrizhi('跳过')
        sleep(1200)
    }
    if (text('取消').exists()) {
        TKB.xgsrizhi('取消')
        click('取消')
        sleep(1000)
    }
    if (text('始终同意').exists() && text('拒绝').exists()) {
        TKB.xgsrizhi('始终同意')
        click('始终同意')
        sleep(2000)
    }
    if (text('允许').exists() && text('拒绝').exists()) {
        TKB.xgsrizhi('允许拒绝')
        click('允许')
        sleep(2000)
    }
    if (text('我知道了').exists()) {
        TKB.xgsrizhi('我知道了')
        click('我知道了')
        sleep(2000)
    }
    if (text('网络连接错误').exists()) {
        click('重试')
        TKB.xgsrizhi('网络连接错误')
        sleep(1200)
    }
    if (text('以后再说').exists()) {
        click('以后再说')
        TKB.xgsrizhi('以后再说')
        sleep(1200)
    }
}

function lxzc() {
    TKB.xgsrizhi('连信注册')
    launch(dqbaoming)
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
        // var zh = '18958773634'
        // var zh = '18958926041'
    var aa = 0
    var is_verify = 3
    var nc = phone_name() //昵称
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
            TKB.qinglihh()
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
        }
        try {
            zonghe()
            if (text("来连信结识更多朋友").exists() && text("快捷登录").exists()) {
                TKB.xgsrizhi("快捷登录")
                id('com.zenmen.palmchat:id/btn_auth').click()
                sleep(5000)
            }
            if (text("输入您的手机号").exists() && text("86").exists()) {
                TKB.xgsrizhi("去获取号码")
                zh = TKB.benjitel()
                if (zh == false) {
                    TKB.xgsrizhi("没有获取到手机号")
                    TKB.qinglihh()
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                        // continue
                }
                // 上传该应用注册的手机号
                TKB.upzczh(sbip, user_id, yhbh, app_id, zh)
                setText(1, zh)
                sleep(2000)
                click('下一步')
                sleep(random(10000,15000))
            }
            if (text('输入短信验证码').exists() && textStartsWith('重发验证码').exists()) {
                if (text('重发验证码').exists()) {
                    click('重发验证码')
                    sleep(random(10000, 15000))
                }
                yzm = TKB.huoquyzm("连信")
                sleep(2000)
                if (yzm == false) {
                    TKB.xgsrizhi("没有获取到验证码")
                    TKB.qinglihh()
                    sleep(10000)
                    launch(dqbaoming)
                    is_verify--
                    TSD = (new Date()).getTime()
                        // continue
                } else {
                    TKB.xgsrizhi("请输入验证码" + yzm)
                    setText(yzm)
                }
                sleep(2000)
            }
            if (is_verify <= 0) {
                TKB.xgsrizhi("获取验证码次数过多")
                TKB.qinglihh()
                return false
            }
            if (text("完善资料").exists() && (textEndsWith("昵称").exists() || text("你的昵称").exists())) {
                TKB.xgsrizhi("完善资料")
                setText(nc)
                sleep(2000)
                click('下一步')
                sleep(2000)
            }
            if (text("完善资料").exists() && text("结识新朋友").exists() && aa == 0) {
                TKB.xgsrizhi("添加头像")
                click(540, 770)
                sleep(2000)
            }
            if (text("图片").exists() && text("所有图片").exists()) {
                TKB.xgsrizhi("选择头像")
                if (bounds(362, 216, 718, 572).exists()) {
                    TKB.xgsrizhi("找到图片")
                    click(540, 400)
                    sleep(2000)
                }
            }
            if (text("图片").exists() && text("使用").exists() && id('com.zenmen.palmchat:id/action_button').exists()) {
                TKB.xgsrizhi("使用头像")
                var aa = 1
                click('使用')
                sleep(2000)
            }
            if (text("完善资料").exists() && text("结识新朋友").exists() && aa == 1) {
                TKB.xgsrizhi("认识新朋友")
                click('结识新朋友')
                sleep(2000)
            }
            if (text("消息").exists() && text("找朋友").exists() && text("好友圈").exists() && text("我的").exists()) {
                TKB.xgsrizhi("首页")
                click(890, 1840)
                sleep(2000)
            }
            if (id('com.zenmen.palmchat:id/portrait_imageview').exists() && text('钱包').exists()) {
                TKB.xgsrizhi('登录成功')
                return true
            } else if (text("消息").exists() && text("找朋友").exists() && text("好友圈").exists() && text("我的").exists()) {
                TKB.xgsrizhi("首页")
                click(890, 1840)
                sleep(2000)
            }

        } catch (error) {
            sleep(1001)
            toastLog(error)
        }

    }
}

//下载链接的图片
function downLoadImage(lj, num) {
    TKB.xgsrizhi("下载图片" + num);
    var dirpath = "/sdcard/lianxinImage/";
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

//连信发圈
function releaseNews() {
    TKB.xgsrizhi("连信发圈养号")
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
        if (text("消息").exists() && text("好友圈").exists()) {
            id('com.zenmen.palmchat:id/tab_moments').findOnce().click()
            TKB.xgsrizhi("点击朋友圈");
            sleep(5000);
        }
        if (text("好友圈").exists() && id("com.zenmen.palmchat:id/btn_photo").exists()) {
            id("com.zenmen.palmchat:id/btn_photo").findOnce().click()
            TKB.xgsrizhi("点击发布动态");
            sleep(5000);
        }
        if (text("图片").exists() && text("完成").exists() && text("预览")) {
            id("com.zenmen.palmchat:id/media_folder_pick_area").findOnce().click()
            TKB.xgsrizhi("点击图片和视频");
            sleep(3000)
            if (text("lianxinImage").exists()) {
                click("lianxinImage");
                TKB.xgsrizhi("点击选择相册lianxinImage");
                sleep(3000);
            }
            var view = id("com.zenmen.palmchat:id/media_grid_view").findOnce().children()
            if (view[0].findOne(id("com.zenmen.palmchat:id/video_duration"))) {
                TKB.xgsrizhi("发布视频")
                click(198, 418)
                TKB.xgsrizhi("点第一个视频")
                sleep(3000)
                if (text("完成").exists() && text("编辑").exists()) {
                    click("完成")
                    TKB.xgsrizhi("点击完成")
                    sleep(3000)
                }
            } else {
                TKB.xgsrizhi("发布图片")
                if (id("com.zenmen.palmchat:id/check_image_area").exists()) {
                    var images = id("com.zenmen.palmchat:id/check_image_area").find().filter((w) => {
                        return w.bounds().left !== 0
                    });
                    TKB.xgsrizhi("选择" + imageLinks.length + "张照片");
                    for (let i = 0; i < imageLinks.length; i++) {
                        images[i].click();
                        TKB.xgsrizhi("选择第" + i + "张照片");
                        sleep(4000);
                    }
                }
                if (text("完成").exists() && text("图片").exists()) {
                    id("com.zenmen.palmchat:id/action_button").findOnce().click();
                    TKB.xgsrizhi("点击完成");
                    sleep(4000);
                }
            }
            if (text("发送").exists()) {
                setText(comments);
                sleep(4000);
                click("发送");
                sleep(30000);
                TKB.xgsrizhi("发布完成")
                TKB.qinglihh(dqbaoming)
                return true
            }
        }
    }
}

//连信改资料
function modify_data() {
    TKB.xgsrizhi("改资料");
    launch(dqbaoming);
    sleep(5000);
    var TSD = (new Date()).getTime()
    var RT = (new Date()).getTime()
    var stt = random(10, 20)
    var tep = 0 //判断编辑资料界面该干啥
    var xs = TKB.zhid(sbip, run_id)
    var zz = TKB.get_name(sbip, user_id, yhbh)
    var imgClick = false;
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
            swipe(500, 1600, 600, 400, 1200);
            sleep(500)
            back()
            sleep(1000)
            TKB.qinglihh()
            sleep(3000)
            launch(dqbaoming)
            sleep(2000)
            TSD = (new Date()).getTime()
            tem = 0
            ll = 0
        }
        if (className("android.widget.RelativeLayout").depth(10).findOnce().childCount() == 3) {
            log("首页");
        }
        if (className("android.widget.RelativeLayout").depth(10).findOnce(3).childCount() != 3) {
            className("android.widget.RelativeLayout").depth(10).findOnce(3).click();
            sleep(3000);
        }
        text("编辑资料").exists() ? (click("编辑资料"), sleep(3000)) : '';
        if (tep == 0) {
            if (xs['是否修改昵称'] == '是') {
                let current_name = id("com.zenmen.palmchat:id/nickname_textview").findOnce().text();
                if (name == current_name) {
                    log("已经是该名字了");
                } else {
                    click(current_name);
                    sleep(2000);
                    setText(name);
                    sleep(4000);
                    // className("android.widget.ImageButton").findOnce().click();
                    text("保存").exists() ? click("保存") : '';
                    sleep(5000);
                }
                if (id("com.zenmen.palmchat:id/nickname_textview").findOnce().text() != name) {
                    TKB.xgsrizhi("连信昵称不符合");
                    nameflag = '连信昵称不符合';
                } else {
                    TKB.xgsrizhi("连信昵称符合");
                    nameflag = '伊连信称符合';
                }
            } else {
                TKB.xgsrizhi("连信昵称不修改");
                nameflag = '连信昵称不修改';
            }
            tep = 1;
        }
        if (tep == 1) {
            if (xs['是否修改头像'] == '是') {
                TKB.xgsrizhi("修改头像");
                let avatar = className("android.widget.ImageView").depth(9).clickable(false).findOnce().bounds();
                click(avatar.centerX(), avatar.centerY());
                sleep(3000);
                if (text("所有图片").exists()) {
                    text("所有图片").findOnce().parent().click();
                    sleep(3000);
                    if (text("DY").exists()) {
                        text("DY").findOnce().parent().parent().click();
                        sleep(3000);
                        className("android.widget.RelativeLayout").depth(7).findOnce().click();
                        sleep(3000);
                        text("使用").exists() ? (text("使用").findOnce().click(), sleep(3000), imgClick = true) : '';
                    }
                }
                if (imgClick) {
                    TKB.xgsrizhi("探探头像符合");
                    imgflag = '探探头像符合';
                } else {
                    TKB.xgsrizhi("探探头像不符合");
                    imgflag = '探探头像不符合';
                }
            } else {
                TKB.xgsrizhi("探探头像不修改");
                imgflag = '探探头像不修改';
            }
            tep = 2;
        }
        if (tep == 2) {
            if (xs['是否修改简介'] == '是') {
                if (text("个性签名").exists()) {
                    TKB.xgsrizhi("修改简介");
                    let signature = text("个性签名").findOnce().parent().child(1);
                    if (signature.text() == jianjie) {
                        TKB.xgsrizhi("已经是该简介了");
                    } else {
                        click(signature.bounds().centerX(), signature.bounds().centerY());
                        sleep(3000);
                        setText(jianjie);
                        sleep(3000);
                        text("保存").exists() ? (click("保存"), sleep(5000)) : '';
                    }
                }
                if (text("个性签名").findOnce().parent().child(1).text() != jianjie) {
                    TKB.xgsrizhi("连信简介不符合");
                    jianjieflag = "连信简介不符合";
                } else {
                    TKB.xgsrizhi("连信简介符合");
                    jianjieflag = "连信简介符合";
                }
            } else {
                TKB.xgsrizhi("连信简介不修改");
                jianjieflag = "连信简介不修改";
            }
            tep = 3
        }
        if (tep == 3) {
            //设置兴趣爱好
            if (text("兴趣爱好").exists() && text("兴趣爱好").findOnce().parent().child(1).text() == "未填写") {
                TKB.xgsrizhi("设置兴趣爱好");
                let interests = ["篮球", "足球", "乒乓球", "羽毛球", "排球", "橄榄球", "曲棍球", "保龄球", "棒球", "冰球"];
                let index = random(1, 10);
                text("兴趣爱好").findOnce().parent().click();
                sleep(3000);
                setText(interests[index]);
                sleep(2000);
                text("保存").exists() ? (click("保存"), sleep(3000)) : '';
            }
            tep = 4;
        }
        if (tep == 4) {
            back();
            sleep(2000);
            if (nameflag == '连信昵称符合' && imgflag == '连信头像符合' && jianjieflag == '连信简介符合') {
                status = 1
            } else {
                status = 2
            }
            var info = nameflag + ',' + imgflag + ',' + jianjieflag
            TKB.upinfo(sbip, user_id, yhbh, info, status)
            TKB.xgsrizhi("执行完了退出")
            TKB.qinglihh();
            return true
        }
    }
}

//********************************************************连信项目*****************************************************************

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
            dowmp3()
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
                        TKB.xgsrizhi("继续抖音任务")
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
                sleep(5000)
            } catch (error) {
                toastLog(error);
                sleep(random(3000, 8000))
            }
        }
    });
}

//*******************************************************新服务器*********************************************************************

function lxzhixing() {
    try {
        toastLog("执行连信任务")
        bofangyy()
        _THREADSSxx = threads.start(function() {
            var app_list = [
                ['连信', '4.2.16']
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
            var dl = lxzc()
            if (dl == true) {
                if (fun == "发圈养号") {
                    releaseNews()
                } else if (fun == "修改资料") {
                    modify_data()
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
lxzhixing()