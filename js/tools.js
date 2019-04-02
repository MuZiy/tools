// 常用过的工具函数

/**
 *节流函数
 *
 * @param {*} callback 回调函数
 * @param {*} duration 间隔时间
 * @returns
 */
function throttle(callback, duration) {
    let prevTime = new Date();
    return function () {
        var context = this,
            currentTime = new Date()
        if (currentTime - prevTime > duration) {
            callback.apply(context)
            prevTime = currentTime
        }
    }
}

/**
 *节流函数
 *
 * @param {*} callback 回调函数
 * @param {*} duration 间隔时间
 * @returns
 */
function throttle2(callback, duration) {
    let runningFlag = false
    return function () {
        if (runningFlag) return false
        runningFlag = true;
        setTimeout(function () {
            callback()
        }, duration)
    }
}

/**
 *防抖函数
 *
 * @param {*} callback 回调函数
 * @param {*} duration 间隔时间
 * @returns
 */
function debounce(callback, duration) {
    let timer = null;
    return function () {
        var context = this,
            args = arguments;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(function () {
            callback.apply(context)
        }, duration)
    }
}