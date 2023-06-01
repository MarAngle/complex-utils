import $exportMsg from '../utils/$exportMsg'
import isPromise from './../type/isPromise'
import triggerFunction from './triggerFunction'

type cbFunction = (data?: any) => any

export type optionType = {
  func: (...args:any[]) => any,
  args?: any[],
  promise: undefined,
  error?: cbFunction,
  start?: cbFunction,
  success?: cbFunction,
  fail?: cbFunction,
  finish?: cbFunction,
} | {
  func: undefined,
  args: undefined,
  promise: Promise<any>,
  error?: cbFunction,
  start?: cbFunction,
  success?: cbFunction,
  fail?: cbFunction,
  finish?: cbFunction,
}

/**
 * 触发Promise函数:接收func必须返回Promise或者promise为Promise对象
 * @param {object} option 设置项
 * @param {function} [option.func] 返回Promise的函数
 * @param {any[]} [option.args] 函数参数
 * @param {Promise} [option.promise] Promise对象,不存在时则会通过func(..args)返回
 * @param {function} [option.error] 错误回调=>不触发完成
 * @param {function} [option.start] 开始回调
 * @param {function} [option.success] 成功回调
 * @param {function} [option.fail] 失败回调
 * @param {function} [option.finish] 完成回调
 */
function triggerPromise({
  func,
  args,
  promise,
  error,
  start,
  success,
  fail,
  finish
}: optionType) {
  let next = true
  let code = ''
  if (!promise) {
    if (!func) {
      next = false
      code = 'argsError'
    } else {
      if (!args) {
        args = []
      }
      promise = func(...args)
    }
  }
  if (next) {
    if (!isPromise(promise)) {
      next = false
      code = 'notPromise'
    }
  }
  if (next) {
    triggerFunction(start)
    promise!.then(res => {
      triggerFunction(success, res)
      triggerFunction(finish, res)
    }, err => {
      triggerFunction(fail, err)
      triggerFunction(finish, err)
    })
  } else {
    if (!triggerFunction(error, code)) {
      $exportMsg(`triggerPromise函数运行错误，code: ${code}`)
    }
  }
}

export default triggerPromise
