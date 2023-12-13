
/**
 * 触发可能存在的函数
 * @param {*} func 函数
 * @param  {...any} args func参数
 * @returns 是否触发
 */
function triggerFunction<ARGS extends unknown[] = unknown[], RES = unknown>(func?: (...args: ARGS) => RES, ...args: ARGS) {
  if (func && typeof func === 'function') {
    func(...args)
    return true
  } else {
    return false
  }
}

export default triggerFunction
