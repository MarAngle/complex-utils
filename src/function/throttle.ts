/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * @desc 函数节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type immediate 表时间戳版，delay 表定时器版.时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。
 */
function throttle(func: (...args:any[]) => any, wait: number, type: 'immediate' | 'delay' = 'immediate') {
  if (type === 'immediate') {
    let previous = 0
    return function(this: any, ...args: any[]) {
      const context = this
      const now = Date.now()
      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    }
  } else {
    let timeout: any
    return function(this: any, ...args: any[]) {
      const context = this
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = undefined
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

export default throttle
