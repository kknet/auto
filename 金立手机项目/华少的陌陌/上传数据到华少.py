from multiprocessing import Pool
import requests
import json
import urllib
import time

def runlog(nr):
    print(nr)
    file = 'log.txt'
    with open(file, 'a+') as f:
        f.write(nr+'\n')   #加\n换行显示

class douyin:
    def __init__(self):
        #self.url = 'http://120.79.199.143/douyinUID/xiaoshuai/upzhanghao.php?zh='
        self.req = requests.session()
    def upup(self,zz):
        urll = 'http://119.23.250.50/momo/upmgapi.php?url='+zz
        print(urll);
        try:
            while (1):
                body = self.req.get(url=urll, verify=False, timeout=5)
                body.encoding = 'utf-8'
                if body.status_code == 200:
                    print("上传成功"+str(body.text))
                    break;
                else:
                    time.sleep( 3 )
                    runlog("网络异常")
        except Exception as e:
            runlog('error_' + str(e))                    
if __name__ == '__main__':  

    douyin_class = douyin()
    file = open("mg.txt") 
    for line in file.readlines():
        line=line.strip('\n')
        douyin_class.upup(line)