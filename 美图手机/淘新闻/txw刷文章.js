var TKB = require('/sdcard/tkb2.js')
function gbgg() {
    if (id('com.coohua.xinwenzhuan:id/tt_splash_skip_btn').exists()) {
        log('跳过广告')
        id('com.coohua.xinwenzhuan:id/tt_splash_skip_btn').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').exists()) {
        log('关闭奖励')
        id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/tt_splash_skip_btn').exists()) {
        log('关闭宝箱奖励')
        id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
        sleep(2000)
    }
    if (text('隐藏奖励').exists() && text('残忍退出').exists()) {
        log('退出隐藏奖励')
        id('com.coohua.xinwenzhuan:id/gold_ad_iv_close').click()
        sleep(2000)
    }
    if (text('忽略').exists() && text('查看').exists()) {
        log('忽略')
        click('忽略')
        sleep(2000)
    }
    if (id(' com.coohua.xinwenzhuan:id/close').exists() ) {
        log('忽略')
        id('com.coohua.xinwenzhuan:id/close').click()
        sleep(2000)
    }
    if (text('跳过').exists() ) {
        log('跳过')
        click('跳过')
        sleep(2000)
    }
    if (text('领取并继续抽奖').exists() && text('关闭自动抽奖').exists()) {
        log('关闭自动抽奖')
        click('关闭自动抽奖')
        sleep(2000)
    }
    if (id('com.coohua.xinwenzhuan:id/overlay_first_read_task_gold_ad_container').exists() && text('恭喜获得').exists()) {
        log('获得奖励')
        id('com.coohua.xinwenzhuan:id/overlay_first_read_task_gold_ad_iv_close').click()
        sleep(2000)
    }

}
function txwswz() {
    var i =0
    while (1) {
        try {
            if (text('新闻').exists() && text('视频').exists() && text('任务大厅').exists() && text('我的钱包').exists()) {
                TKB.xgsrizhi('浏览新闻')
                click('新闻')
                sleep(3000)
            }
            if (id("com.coohua.xinwenzhuan:id/mini_video_detail_thumb_up").exists() && id("com.coohua.xinwenzhuan:id/mini_video_detail_comment").exists()) {
                click('新闻')
                sleep(2000)
            }
            gbgg()
            if (text('推荐').exists() && text('热文').exists() && text('小剧场').exists()) {
                sleep(1000)
                if (id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').depth('18').className('android.widget.ImageView').exists()||id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').depth('17').className('android.widget.ImageView').exists()) {
                    swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(500, 2000))
                    sleep(random(500, 2000))
                    TKB.xgsrizhi('此页有广告')
                    i++
                } else {
                    var am = className('android.widget.RelativeLayout').depth('16').find()
                    am.forEach(child => {
                        var like = child.findOne(id('com.coohua.xinwenzhuan:id/tab_feed_item_img_multi_ad_right').className('android.widget.ImageView'));
                        //如果找到了就是有广告，为空是没有广告
                        if(like == null){
                            like.click()
                            sleep(4000)
                            if (className('android.view.View').depth('15').text('查看全部').exists() && id('com.coohua.xinwenzhuan:id/comment_edit').exists()) {
                                TKB.xgsrizhi('观看视频(35-40S)')
                                sleep(random(35000, 40000))
                                gbgg()
                                back()
                                TKB.xgsrizhi('返回主页')
                                sleep(2000)
                            } else if (className('android.view.View').depth('14').exists() && id('com.coohua.xinwenzhuan:id/xlxl_actionbar_more').exists()) {
                                TKB.xgsrizhi('浏览文章')
                                for (var ii = 0; ii < random(10, 15); ii++) {
                                    swipe(random(400, 500), random(1600, 1700), random(400, 500), random(550, 650), random(2000, 4000))
                                    sleep(random(2000, 3000))
                                    gbgg()
                                    if (desc('展开全文 ').exists()) {
                                        TKB.xgsrizhi('展开全文')
                                        desc('展开全文 ').click()
                                        sleep(1000)
                                    }
                                    if (desc('展开全文').exists()) {
                                        TKB.xgsrizhi('展开全文')
                                        desc('展开全文').click()
                                        sleep(1000)
                                    }
                                }
                                back()
                                TKB.xgsrizhi('返回主页')
                                sleep(2000)
                            }
                            sleep(2000)
                            i++
                        }else{
                            swipe(random(400, 600), random(1750, 1850), random(400, 600), random(400, 600), random(500, 2000))
                            sleep(random(500, 2000))
                            TKB.xgsrizhi('此页有广告')
                            i++
                        }
                    })
                }
                if (text('上次您看到这里  点击刷新').exists()) {
                    TKB.xgsrizhi('点击刷新')
                    i = 0
                    click('上次您看到这里  点击刷新')
                    sleep(3000)
                }
                gbgg()
                if (i > random(5, 8)) {
                    i = 0
                    TKB.xgsrizhi('点击新闻刷新')
                    click('新闻')
                    sleep(random(100, 300))
                    click('新闻')
                    sleep(3000)
                }
            }
        } catch (error) {
            sleep(1001)
            TKB.xgsrizhi(error);
        }
    }
}

if (text('忽略').exists() && text('查看').exists()) {
    TKB.xgsrizhi('忽略')
    click('忽略')
    sleep(2000)
}