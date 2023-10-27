const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 判断对象是否存在对应属性
 * @param {object} value 对象
 * @param {string} prop 属性
 * @returns value has prop
 */
function hasProp(value: Record<PropertyKey, unknown>, prop: string): boolean {
  if (value[prop] === undefined) {
    if (!hasOwnProperty.call(value, prop)) {
      for (const n in value) {
        if (n == prop) {
          return true
        }
      }
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}

export default hasProp
