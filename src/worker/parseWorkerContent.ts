
export type funcType<A extends unknown[] = unknown[], R extends Promise<unknown> = Promise<unknown>> = (...args: A) => R

/**
 * 生成分支线程的代码
 * @param {function} func 函数体
 * @param {boolean} [log] 日志打印判断
 * @returns {string} 分支代码字符串
 */
function parseWorkerContent(func: (...args: unknown[]) => unknown, log?: boolean) {
  return `
    onmessage = function (e) {
      ${log ? 'console.log("Worker Start")' : '' }
      var func = ${func.toString()}
      func.apply(null, e.data.args).then(res => {
        postMessage({ status: 'success', data: res })
        ${log ? 'console.log("Worker Success")' : '' }
      }).catch(err => {
        postMessage({ status: 'fail', data: err })
        ${log ? 'console.log("Worker Fail")' : '' }
      })
    }
  `
}

export default parseWorkerContent
