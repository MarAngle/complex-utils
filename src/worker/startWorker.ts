import getType from '../type/getType'
import parseWorkerContent, { funcType } from './parseWorkerContent'

const URL = window.URL || window.webkitURL

export type optionType<A extends unknown[] = unknown[], R extends Promise<unknown> = Promise<unknown>> = {
  func: funcType<A, R>,
  args: A,
  option?: WorkerOptions,
  log?: boolean
}

/**
 * 进行worker调用,不可用时直接进行调用
 * @param {object} option 设置项
 * @param {function} option.func 函数体
 * @param {*[]} option.args 函数参数列表
 * @param {object} [option.option] Worker设置项
 * @param {boolean} [option.log] 日志打印判断
 * @returns {Promise} 分支运行的Promise
 */
function startWorker({ func, args, option, log }: optionType) {
  const type = getType(func)
  if (type == 'function') {
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
          if (res.status == 'success') {
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
          resolve(res)
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
