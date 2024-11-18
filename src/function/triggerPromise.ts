import $exportMsg from '../utils/$exportMsg'
import isPromise from './../type/isPromise'
import triggerFunction from './triggerFunction'

type UnpackPromise<T> = T extends Promise<infer R> ? R : T

type callback<D = any> = (data?: D) => unknown

export type optionType<D> = {
  error?: callback<string>
  start?: callback<undefined>
  success?: callback<D>
  fail?: callback<D>
  finish?: callback<undefined>
}

/**
 * 
 * @param promise Promise对象
 * @param option 
 * @param {function} [option.error] 错误回调=>不触发完成
 * @param {function} [option.start] 开始回调
 * @param {function} [option.success] 成功回调
 * @param {function} [option.fail] 失败回调
 * @param {function} [option.finish] 完成回调
 */
function triggerPromise<P extends Promise<any> = Promise<any>>(promise: P, {
  error,
  start,
  success,
  fail,
  finish
}: optionType<UnpackPromise<P>> = {}) {
  if (isPromise(promise)) { 
    triggerFunction(start)
    promise.then(res => {
      triggerFunction(success, res)
    }, err => {
      triggerFunction(fail, err)
    }).finally(() => {
      triggerFunction(finish)
    })
  } else {
    triggerFunction(error, 'notPromise')
    $exportMsg(`triggerPromise函数运行错误，未正确传递Promise`)
  }
}

export default triggerPromise
