/*
 * @Author: Tsing Yi
 * @QQ: 376287142@qq.com
 * @Date: 2020-05-08 14:47:50
 * @Version: Auto.Js Pro
 */
var code = '37db8e432bf79d8c'
var code1 = '792e9804ee1d773a'
var code2 = '96f2e2df25336463'
var code3 = '7301b33a6df86149'
var code4 = 'cab4210dc0055495'
const Eyou = (function() {
    function Eyou(code,code1,code2,code3,code4) {
        this.url = "http://w.eydata.net/"
        this.Expired =code //时间key
        this.Regin =code1 //注册key
        this.Sing = code2 //登录key
        this.UserData =code3 //获取设备信息key
        this.SUserData = code4//设置验证信息key
        this.Err_msg = eval('(' + "{'1': '成功!','-1': '网络链接失败','-2': '请填写程序密钥','-3': '数据异常','-4': '数据异常','-5': '错误的参数,请检查参数是否正确.','-6': '还未登录','-7': '私人服务器,没有权限进行登录.','-8': '账户余额不足.','-9': '注册用户达到上限.','-10': '非Vip无法使用此接口','-11': '开启自动状态检测失败,还未登陆!','-12': '开启自动状态检测失败!','-13': '动态算法只支持独立服务器调用.','-14': '错误的调用.','-15': '频繁调用,请等待10分钟后再做尝试.','-16': '接口未开启.','-17': '错误的调用方式,请确认后台接口的调用方式.','-18': '服务器内部错误,请联系管理员解决.','-19': '接口调用失败,调用次数不足.','-20': '变量数据不存在.','-21': '机器码一样,无需转绑.','-23': '此接口开启了强制算法,但是没使用.','-101': '用户名填写错误,必须以字母开头6-16位字母或数字!','-102': '用户不存在.','-103': '请先登陆再调用此方法.','-104': '密码填写错误,请输入6-16位密码！.','-105': '邮箱填写错误,请正确输入邮箱,最大长度 32！.','-106': '用户名重复.','-107': '邮箱重复.','-108': '新密码输入错误.','-109': '用户名或密码错误','-110': '用户使用时间已到期','-111': '用户未在绑定的电脑上登陆.','-112': '其他设备登陆','-113': '过期时间有误.','-114': '登录数据不存在','-115': '用户已被禁用.','-116': '密码修改申请过于频繁.','-117': '未输入机器码.','-118': '重绑次数超过限制.','-119': '使用天数不足,重绑失败.','-120': '注册失败,注册次数超过限制.','-121': '用户机器码不能超过32位.','-122': '用户已经被删除','-123': '用户密码输入错误','-124': '用户登录数达到最大','-125': '错误的用户操作类别','-126': '过期时间变更记录创建失败','-127': '用户充值失败','-128': '用户数据超过最大限制','-129': '用户被开发者禁止使用,请咨询开发者是否被拉到黑名单','-131': '用户使用次数不足','-132': '用户使用点数不足','-133': '用户状态码错误','-134': '用户状态码不存在','-201': '程序不存在','-202': '程序密钥输入错误','-203': '程序版本号错误','-204': '程序版本不存在','-205': '用户未申请使用程序','-206': '程序版本需要更新','-207': '程序版本已停用','-208': '程序未开启后台接口功能.(可在“程序”的“修改”界面开启后台接口功能)','-209': '程序接口密码错误','-210': '程序停止新用户注册','-211': '程序不允许用户机器码转绑','-401': '卡密错误','-402': '卡密机器码错误','-403': '卡密IP错误','-404': '卡密类型错误','-405': '卡密被禁用','-406': '卡密不存在','-407': '卡密未激活','-408': '卡密已经使用','-409': '充值卡密错误','-410': '卡密过期','-420': '卡密在别的电脑上登录','-421': '卡密超过最大登录数,如果确定已经下线,请等60分钟后重试','-422': 'IP一样,无需转绑','-501': '管理信息错误','-502': '机器码转绑次数超过限制','-503': '机器码转绑后将过期','-504': 'IP转绑次数超过限制','-505': 'IP转绑后将过期','-506': '未开启机器码验证,无需转绑.','-507': '未开启IP地址验证,无需转绑',}" + ')');
    }
    Eyou.prototype.makeRequest = function(key, json, callback) {
        url = this.url + key;
        return http.post(url, json, callback);
    }

    Eyou.prototype.getError = function(data) {
        data = data.statusCode == 200 ? data.body.string() : -1;
        return (data.length > 5 ? data : this.Err_msg[data]);
    }

    /*易游注册*key：链接,*code：卡密,*code1：账号,*code2密码,*code3：邮箱*/
    Eyou.prototype.CardRegin = function(code, code1, code2, code3) {
        return this.getError(this.makeRequest(this.Regin, {
            Card: code,
            UserName: code1,
            UserPwd: code2,
            Email: code3,
            Mac: device.getIMEI()
        }))
    }
    /*易游登录*key：链接,*code：账号,*code1：密码*/
    Eyou.prototype.GetSign = function(code, code1) {
        return this.getError(this.makeRequest(this.Sing, {
            UserName: code,
            UserPwd: code1,
            Version: "1.0",
            Mac: device.getIMEI(),
            MacTwo: device.getIMEI()
        }))
    }
    /*易游获取设备信息*key：链接,*code：状态码，*code1：账号*/
    Eyou.prototype.GetUserData = function(code, code1) {
        return this.getError(this.makeRequest(this.UserData, {
            StatusCode: code,
            UserName: code1
        }))
    }
    /*易游设置设备信息*key：链接,*code：状态码，*code1：账号*/
    Eyou.prototype.SetUserData = function(code, code1) {
        return this.getError(this.makeRequest(this.SUserData, {
            StatusCode: code,
            UserName: code1,
            UserData: device.getIMEI()
        }))
    }
    /*获取到期时间*key：链接,*账号*/
    Eyou.prototype.GetExpired = function(code) {
        return this.getError(this.makeRequest(this.Expired, {
            UserName: code
        }))
    }
    return Eyou;
})();

log(Eyou(code,code1,code2,code3,code4))