/**
 * @desc 函数节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type immediate 表时间戳版，delay 表定时器版.时间戳版和定时器版的节流函数的区别就是，时间戳版的函数触发是在时间段内开始的时候，而定时器版的函数触发是在时间段内结束的时候。
 */
declare function throttle<T extends (...args: any[]) => any>(func: T, wait: number, type?: 'immediate' | 'delay'): (...args: Parameters<T>) => void;
export default throttle;
