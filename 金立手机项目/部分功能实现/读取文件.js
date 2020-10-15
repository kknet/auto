// var z = files.read("/sdcard/outputs/1.json",encoding = "UTF-8")
// var z = {}
for(var x=1;x<597;x++){
    var vj = '/sdcard/123/111/'+x+'.json'
    open(vj)
    var z = files.read(vj,encoding = "UTF-8")
    // '\\\\192.168.8.61\\e\\小红书图片缺口标注\\图片\\小红书滑块\\雷强\\1.png'
    var i =0
    while(1){
        if (i == 0){
            var zz = z.replace('\\','')
            i = 1
        }
        if (zz.indexOf("\\") != -1){
            var zz = zz.replace('\\','')
        }else{
            break
        }
    }
    var zz = zz.replace('192.168.8.61','').replace('小红书图片缺口标注','').replace('Desktop-r8nonfte','').replace('e','').replace('图片','').replace('小红书滑块','').replace('雷强','D:\\Desktop\\xhs\\').replace('李阅','D:\\Desktop\\xhs\\').replace('向佳华','D:\\Desktop\\xhs\\')
    var lj = '/sdcard/123/chuli/'+x+'.json'
    files.write(lj, zz)
}


