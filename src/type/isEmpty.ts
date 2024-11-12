import getType from './getType'
import isEmptyArray from './isEmptyArray'
import isEmptyObject from './isEmptyObject'

/**
 * 是否为空
 * @param {*} value 需要判断的值
 * @param {string[]} [checkList] 需要深入判断的数据类型，对象和数组可选
 * @returns {boolean} value is Empty
 */
function isEmpty(value: unknown) {
  if (!value) {
    // undefined null '' 0 false
    return true
  } else {
    const type = getType(value)
    if (type === 'object') {
      return isEmptyObject(value, type)
    } else if (type === 'array') {
      return isEmptyArray(value, type)
    }
    return false
  }
}

export default isEmpty
