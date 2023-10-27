import isArray from './isArray'

/**
 * 判断值是否是空数组
 * @param {*} value 需要判断的值
 * @param {string} type 类型
 * @returns {boolean} value is EmptyArray
 */
function isEmptyArray(value: unknown, type?: string): value is [] {
  if (type === 'array' || isArray(value)) {
    return (value as unknown[]).length === 0
  } else {
    return false
  }
}

export default isEmptyArray
