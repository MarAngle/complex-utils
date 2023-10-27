import isError from '../type/isError'

export type consoleType = 'error' | 'warn' | 'log'

/**
 * 错误信息输出函数
 * @param {string | Error} msg 错误信息内容
 * @param {'error' | 'warn' | 'log'} [type = error] 信息提示类型
 * @param {object} [option = {}] 额外信息设置项
 * @param {string} [option.data] 额外信息内容
 * @param {'error' | 'warn' | 'log'} [option.type] 额外信息提示类型
 */
function exportMsg(msg: string | Error | Record<PropertyKey, unknown>, type: consoleType = 'error') {
  if (type == 'error') {
    if (isError(msg) || typeof msg === 'object') {
      console[type](msg)
    } else {
      console[type](new Error(msg))
    }
  } else {
    console[type](msg)
  }
}

export default exportMsg
