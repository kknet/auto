//auto.setMode("fast")
 function ostime(mode) {
    if (mode) {
        return new Date().getTime();
    } else {
        return Date.parse(new Date()) / 1000;
    };
};
function findobjany(arr) {
    var uc;
    if (typeof (arr) == "object") {
        for (var obj of arr) {
            uc = obj.findOnce();
            if (uc != null) {
                return uc;
            }
        }
    }
    return null;
};
var t=ostime(1)
var a = [text("dawda"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq"), text("dawda"), id("sadadwq")]
log(a.length)
log(findobjany(a))
