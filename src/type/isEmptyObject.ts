import getType from './getType'

/**
 * 判断值是否是空对象
 * @param {*} value 需要判断的值
 * @param {string} type 类型
 * @returns {boolean} value is EmptyObject
 */
function isEmptyObject(value: any, type?: string): value is Record<string, never> {
  if (!type) {
    type = getType(value)
  }
  if (type === 'object') {
    for (const n in value) {
      return false
    }
    return true
  } else {
    return false
  }
}

export default isEmptyObject
