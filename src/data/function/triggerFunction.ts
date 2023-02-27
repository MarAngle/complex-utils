/**
 * 触发可能存在的函数
 * @param {*} func 函数
 * @param  {...any} args func参数
 * @returns 是否触发
 */
function triggerFunction(func?: (...args:any[]) => any, ...args: any[]) {
  if (func && typeof func === 'function') {
    func(...args)
    return true
  } else {
    return false
  }
}

export default triggerFunction
