/*
 * @Author: 白酒煮饭
 * @Date: 2020-02-09 21:27:05
 * @LastEditors: 白酒煮饭
 * @LastEditTime: 2020-05-31 17:09:20
 */
http.__okhttp__.setTimeout(30 * 1000);//HTTP请求超时
function Easy(url) {
    this.msg = { "1": "成功!", "-1": "网络链接失败", "-2": "请填写程序密钥", "-3": "数据异常", "-4": "数据异常", "-5": "错误的参数,请检查参数是否正确.", "-6": "还未登录", "-7": "私人服务器,没有权限进行登录.", "-8": "账户余额不足.", "-9": "注册用户达到上限.", "-10": "非Vip无法使用此接口", "-11": "开启自动状态检测失败,还未登陆!", "-12": "开启自动状态检测失败!", "-13": "动态算法只支持独立服务器调用.", "-14": "错误的调用.", "-15": "频繁调用,请等待10分钟后再做尝试.", "-16": "接口未开启.", "-17": "错误的调用方式,请确认后台接口的调用方式.", "-18": "服务器内部错误,请联系管理员解决.", "-19": "接口调用失败,调用次数不足.", "-20": "变量数据不存在.", "-21": "机器码一样,无需转绑.", "-23": "此接口开启了强制算法,但是没使用.", "-101": "用户名填写错误,必须以字母开头6-16位字母或数字!", "-102": "用户不存在.", "-103": "请先登陆再调用此方法.", "-104": "密码填写错误,请输入6-16位密码！.", "-105": "邮箱填写错误,请正确输入邮箱,最大长度 32！.", "-106": "用户名重复.", "-107": "邮箱重复.", "-108": "新密码输入错误.", "-109": "用户名或密码错误", "-110": "用户使用时间已到期", "-111": "用户未在绑定的电脑上登陆.", "-112": "用户在别的地方登陆.(主要原因是后台检测不到用户的状态码 后台->用户管理->在线用户 里面不存在这个状态码就会提示这个错误)", "-113": "过期时间有误.", "-114": "登录数据不存在", "-115": "用户已被禁用.", "-116": "密码修改申请过于频繁.", "-117": "未输入机器码.", "-118": "重绑次数超过限制.", "-119": "使用天数不足,重绑失败.", "-120": "注册失败,注册次数超过限制.", "-121": "用户机器码不能超过32位.", "-122": "用户已经被删除", "-123": "用户密码输入错误", "-124": "用户登录数达到最大", "-125": "错误的用户操作类别", "-126": "过期时间变更记录创建失败", "-127": "用户充值失败", "-128": "用户数据超过最大限制", "-129": "用户被开发者禁止使用,请咨询开发者是否被拉到黑名单", "-131": "用户使用次数不足", "-132": "用户使用点数不足", "-133": "用户状态码错误", "-134": "用户状态码不存在", "-201": "程序不存在", "-202": "程序密钥输入错误", "-203": "程序版本号错误", "-204": "程序版本不存在", "-205": "用户未申请使用程序", "-206": "程序版本需要更新", "-207": "程序版本已停用", "-208": "程序未开启后台接口功能.(可在“程序”的“修改”界面开启后台接口功能)", "-209": "程序接口密码错误", "-210": "程序停止新用户注册", "-211": "程序不允许用户机器码转绑", "-301": "卡密输入错误", "-302": "卡密不存在", "-303": "卡密已经使用", "-304": "卡密已经过期", "-305": "卡密已经冻结", "-306": "卡密已经退换", "-308": "卡密已经换卡", "-401": "单码卡密错误", "-402": "单码卡密机器码错误", "-403": "单码卡密IP错误", "-404": "单码卡密类型错误", "-405": "单码卡密被禁用", "-406": "单码卡密不存在", "-407": "单码卡密未激活", "-408": "单码卡密已经使用", "-409": "单码充值卡密错误", "-410": "单码卡密过期", "-420": "单码卡密在别的电脑上登录", "-421": "单码卡密超过最大登录数,如果确定已经下线,请等60分钟后重试", "-422": "单码IP一样,无需转绑", "-501": "单码管理信息错误", "-502": "单码机器码转绑次数超过限制", "-503": "单码机器码转绑后将过期", "-504": "单码IP转绑次数超过限制", "-505": "单码IP转绑后将过期", "-506": "单码未开启机器码验证,无需转绑.", "-507": "单码未开启IP地址验证,无需转绑", "101": "充值成功!", "102": "充值成功!填写推荐人获赠时间失败", "103": "充值成功!添加推荐信息失败", "104": "充值成功!推荐人获赠时间失败", "105": "充值成功!充值的卡密类别不支持推荐人功能", "106": "充值成功!充值的卡密类别推荐功能已关闭" };
    this.baseUrl = url;
    this.UserRegin_key = "792e9804ee1d773a";//用户注册
    this.UserLogin_key = "dcc4b764e0b9f312";//用户登录
    this.SingleLogin_key = "96f2e2df25336463";//单码用户登录
    this.MacChangeBind_key = "4fcf380b80e6cad3";//单码解绑   1
    this.CheckUserStatus_key = "37345769884335e7";//检测用户状态  
    this.GetExpired_key = "37db8e432bf79d8c";//获取用户的到期时间
    this.GetBulletin_key = "02efdd617bb6dec2";//获取程序公告
    this.Check_updates_key = "820a7a911f98d4f7";//获取程序版本数据 可以存放更新JSON信息
    this.CheckAppVersion_key = "3e438a26b4a60bdb"; //检测版本是否是最新版
}
Easy.prototype.makeRequest = function (url, json) {
    try {
        url = this.baseUrl + url;
        let body = http.post(url, json).body.string();
        return this.msg[body] ? { "code": body, "msg": this.msg[body] } : { "code": 200, "msg": body };
    } catch (exception) {
        return {
            "code": 0,
            "msg": exception
        };
    }
}
/**
 * 用户注册
 * @param UserName    用户名.
 * @param UserPwd     用户密码.
 * @param Email       邮箱地址,邮箱可以找回密码.
 * @param Mac         机器码.
 * @return:           登录成功返回用户状态码,失败返回错误代码.
 */
Easy.prototype.User_Regin = function (UserName, UserPwd, Email, Mac) {
    return this.makeRequest(this.UserRegin_key, {
        "UserName": UserName,
        "UserPwd": UserPwd,
        "Email": Email,
        "Mac": Mac
    });
}
/**
 * 用户登录
 * @param UserName    用户名.
 * @param UserPwd     用户密码.
 * @param Version     版本号.
 * @param Mac         机器码.
 * @param MacTwo      第二个机器码.
 * @return:           登录成功返回用户状态码,失败返回错误代码.
 */
Easy.prototype.UserLogin = function (UserName, UserPwd, Version, Mac, MacTwo) {
    return this.makeRequest(this.UserLogin_key, {
        "UserName": UserName,
        "UserPwd": UserPwd,
        "Version": Version,
        "Mac": Mac,
        "MacTwo": MacTwo
    });
}
/**
 * 单码用户登录
 * @param SingleCode    单码卡密.
 * @param Ver           程序版本号.
 * @param Mac           机器码.
 * @return:             登录成功返回用户状态码,失败返回错误代码.
 */

Easy.prototype.User_Login = function (SingleCode, Ver, Mac) {
    return this.makeRequest(this.SingleLogin_key, {
        "SingleCode": SingleCode,
        "Ver": Ver,
        "Mac": Mac
    });
}
/**
 * 单码用户解绑
 * @param UserName      单码卡密.
 * @return:             登录成功返回用户状态码,失败返回错误代码.
 */
Easy.prototype.MacChangeBind = function (UserName) {
    return this.makeRequest(this.MacChangeBind_key, {
        "UserName": UserName,
    });
}
/**
 * 检测用户状态
 * @param SingleCode    登录接口返回的状态码.
 * @param UserName      用户名或者单码.
 * @return:             登录成功返回用户状态码,失败返回错误代码.
*/
Easy.prototype.CheckUserStatus = function (StatusCode, UserName) {
    return this.makeRequest(this.CheckUserStatus_key, {
        "StatusCode": StatusCode,
        "UserName": UserName
    });
}
/**
 * 获取用户的到期时间
 * @param StatusCode    单码卡密或者用户名.
 * @return:             成功返回用户到期时间,失败返回错误代码.
*/
Easy.prototype.GetExpired = function (StatusCode) {
    return this.makeRequest(this.GetExpired_key, {
        "UserName": StatusCode
    });
}
/**
 * 获取程序公告
 * @return:             成功返回公告,失败返回错误代码.
*/
Easy.prototype.GetBulletin = function () {
    return this.makeRequest(this.GetBulletin_key, {});
}
/**
 * 获取程序版本     可以存放更新数据json信息
 * @param SingleCode    登录成功后返回的状态码..
 * @param UserName      用户名或者单码卡密..
 * @param Version       版本号.
 * @return:             成功返回版本数据,失败返回错误代码.
*/
Easy.prototype.Check_updates = function (StatusCode, UserName, Version) {
    return this.makeRequest(this.Check_updates_key, {
        "StatusCode": StatusCode,
        "UserName": UserName,
        "Version": Version
    });
}
/**
 * 检测版本是否是最新版
 * @param Ver           程序版本号.
 * @return:             返回 1 最新版,0 不是最新版.
*/
Easy.prototype.CheckAppVersion = function (ver) {
    return this.makeRequest(this.CheckAppVersion_key, {
        "ver": ver
    })
}

module.exports = Easy;