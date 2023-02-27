import { getCanUse } from '../environment/index'
import getType from '../type/getType'
import getWorkerContent from './getWorkerContent'

const URL = window.URL || window.webkitURL


export type optionType = {
  func: (...args:any[]) => any,
  args: any[],
  option?: any,
  sync?: boolean,
  log?: boolean
}

/**
 * 进行worker调用,不可用时直接进行调用
 * @param {object} option 设置项
 * @param {function} option.func 函数体
 * @param {*[]} option.args 函数参数列表
 * @param {object} [option.option] Worker设置项
 * @param {boolean} [option.sync] 是否同步函数
 * @param {boolean} [option.log] 日志打印判断
 * @returns {Promise} 分支运行的Promise
 */
function runWorker({ func, args, option, sync, log }: optionType) {
  const type = getType(func)
  if (type == 'function') {
    if (getCanUse('Worker')) {
      return new Promise((resolve, reject) => {
        const content = getWorkerContent(func, sync, log)
        const blob = new Blob([content], { type: 'text/javascript' })
        const url = URL.createObjectURL(blob)
        const dofunc = new Worker(url, option || {})
        dofunc.onerror = function (e) {
          reject({ status: 'fail', code: 'error', data: e })
          URL.revokeObjectURL(url)
        }
        dofunc.onmessage = function (event) {
          const res = event.data
          if (res.status == 'success') {
            resolve(res.data)
          } else {
            reject(res.data)
          }
          URL.revokeObjectURL(url)
        }
        dofunc.postMessage({
          args: args
        })
      })
    } else {
      if (sync) {
        // 同步函数直接运行
        const data = func(...args)
        return Promise.resolve(data)
      } else {
        // 异步函数Promise
        return func(...args)
      }
    }
  } else {
    return Promise.reject({ status: 'fail', code: 'func-error', type: type })
  }
}

export default runWorker
