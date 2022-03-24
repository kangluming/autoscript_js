let times = rawInput("请输入要自动刷的视频次数：", "96")  //用户设置刷视频的个数，默认100
var appName = rawInput("快手极速版");
lauchApp(appName);
console.show()  //显示悬浮窗（需要先打开悬浮窗权限）
sleep(5000)    //等待应用打开
console.log("准备就绪！")

videos()
dytimes(1000, 3000)

/**-------------------------调用方法-------------------------------- */

//welfare()
dytimes(1000, 3000)
liveds()
dytimes(1000, 3000)

console.hide()



function videos() {
    for (var i = 0; i < times; ++i) {
        nextVideo(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
        u = i + 1
        console.log("总任务量：" + times + ";已完成：" + u)
        /*随机回看 */
        j = random(1, 20)
        if (j == 3) {
            lookBack()
        }
        if (j == 20) {
            nextTwo()
        }
        if(i==times){
            break;
        }
    }
}
function nextVideo(x1, y1, x2, y2, duration) {
    swipe(x1, y1, x2, y2, duration)
    delayTime = random(8000, 12000)
    sleep(delayTime)    //在视频停留8-12秒
}
/*随机往回滑动 */
function lookBack() {
    let back = random(1, 20)
    if (back == 1) {
        console.log("开始往回看一个视频")
        swipe(device.width / 2, device.height * (1 / 4), device.width / 2, device.height * (8 / 9), 150)
        sleep(random(10000, 15000))
    }
}
/*向下滑动两个 在向回滑动之后执行 */
function nextTwo() {
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    swipe(device.width / 2, device.height * (8 / 9), device.width / 2, device.height * (1 / 4), 150)
    sleep(random(10000, 15000))
}

function dytimes(time1, time2) {
    delayTime = random(time1, time2)
    sleep(delayTime)    //在视频停留8-12秒
}