import getTag from './getTag'
import getType from './getType'

/**
 * 是否是Promise对象
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is Promise对象
 */
function isPromise(value: unknown): value is Promise<unknown> {
  if (getTag(value) === '[object Promise]') {
    return true
  }
  const type = getType(value)
  if (type === 'object' || type === 'function') {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return typeof (value as any).then === 'function'
  }
  return false
}

export default isPromise
