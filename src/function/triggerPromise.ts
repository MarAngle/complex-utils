import $exportMsg from '../utils/$exportMsg'
import isPromise from './../type/isPromise'
import triggerFunction from './triggerFunction'

type callback = (data?: any) => any

export type optionType = {
  error?: callback,
  start?: callback,
  success?: callback,
  fail?: callback,
  finish?: callback,
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
function triggerPromise(promise: Promise<unknown>, {
  error,
  start,
  success,
  fail,
  finish
}: optionType = {}) {
  if (isPromise(promise)) {
    triggerFunction(start)
    promise!.then(res => {
      triggerFunction(success, res)
      triggerFunction(finish, res)
    }, err => {
      triggerFunction(fail, err)
      triggerFunction(finish, err)
    })
  } else {
    triggerFunction(error, 'notPromise')
    $exportMsg(`triggerPromise函数运行错误，未正确传递Promise`)
  }
}

export default triggerPromise
