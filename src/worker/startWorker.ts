import getType from '../type/getType'

const URL = window.URL || window.webkitURL

export type funcType<A extends any[] = any[], R extends Promise<unknown> = Promise<unknown>> = (...args: A) => R

export type optionType<A extends any[] = any[], R extends Promise<unknown> = Promise<unknown>> = {
  func: funcType<A, R>
  args: A
  option?: WorkerOptions
  log?: boolean
}

/**
 * 生成分支线程的代码。
 * 注意：此方法通过 func.toString() 序列化函数，因此函数必须是自包含的，不能依赖外部作用域（闭包）。
 * @param {function} func 函数体
 * @param {boolean} [log] 日志打印判断
 * @returns {string} 分支代码字符串
 */
function parseWorkerContent(func: (...args: any[]) => unknown, log?: boolean): string {
  return `
    onmessage = function (e) {
      ${log ? 'console.log("Worker Start")' : ''}
      var func = ${func.toString()}
      func.apply(null, e.data.args).then(res => {
        postMessage({ status: 'success', data: res })
        ${log ? 'console.log("Worker Success")' : ''}
      }).catch(err => {
        postMessage({ status: 'fail', data: err })
        ${log ? 'console.log("Worker Fail")' : ''}
      })
    }
  `
}

/**
 * 在 Web Worker 中异步执行一个函数。如果浏览器不支持 Worker，则在主线程中直接执行。
 *
 * @warning **重要限制**: 传入的 `func` 函数必须是**完全自包含的**。
 * 由于它通过 `toString()` 进行序列化，它无法访问其外部作用域中的任何变量（闭包），
 * 也无法访问任何导入的模块。所有逻辑必须在函数内部定义。
 *
 * @example
 * // ✅ 正确: 自包含的函数
 * startWorker({
 *   func: (a, b) => {
 *     // 复杂的计算...
 *     return Promise.resolve(a + b);
 *   },
 *   args: [10, 20]
 * }).then(result => console.log(result)); // 30
 *
 * // ❌ 错误: 依赖外部变量
 * const externalVar = 10;
 * startWorker({
 *   func: (a) => Promise.resolve(a + externalVar), // externalVar 在 worker 中是 undefined
 *   args: [5]
 * });
 *
 * @param {object} option 设置项
 * @param {function} option.func 需要在 Worker 中执行的函数。**必须是自包含的，且必须返回一个 Promise**。
 * @param {*[]} option.args 传递给函数的参数列表。
 * @param {object} [option.option] 标准的 Worker 构造函数选项。
 * @param {boolean} [option.log] 是否在控制台打印 Worker 的生命周期日志。
 * @returns {Promise<Awaited<R>>} 一个 Promise，它会 resolve 函数的 Promise 解析值，或 reject 错误。
 */
function startWorker<A extends any[], R extends Promise<unknown>>({ func, args, option, log }: optionType<A, R>): Promise<Awaited<R>> {
  const type = getType(func)
  if (type === 'function') {
    if (window.Worker) {
      return new Promise((resolve, reject) => {
        const content = parseWorkerContent(func, log)
        const blob = new Blob([content], { type: 'text/javascript' })
        const url = URL.createObjectURL(blob)
        const worker = new Worker(url, option)
        worker.onerror = function (e) {
          reject({ status: 'error', data: e })
          URL.revokeObjectURL(url)
        }
        worker.onmessage = function (event) {
          const res = event.data
          if (res.status === 'success') {
            resolve(res.data)
          } else {
            reject(res)
          }
          URL.revokeObjectURL(url)
        }
        worker.postMessage({
          args: args
        })
      })
    } else {
      // 异步函数Promise
      return new Promise((resolve, reject) => {
        func(...args).then(res => {
          resolve(res as Awaited<R>)
        }).catch(err => {
          reject({ status: 'fail', data: err })
        })
      })
    }
  } else {
    return Promise.reject({ status: 'error', type: type })
  }
}

export default startWorker
