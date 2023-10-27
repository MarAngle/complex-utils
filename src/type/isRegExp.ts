import getTag from './getTag'

/**
 * 是否是RegExp
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is RegExp
 */
function isRegExp(value: unknown): value is RegExp {
  return getTag(value) === '[object RegExp]'
}

export default isRegExp
