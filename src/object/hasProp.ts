import { hasOwnProperty } from "../../config"

/**
 * 判断对象是否存在对应属性
 * @param {object} data 对象
 * @param {string} prop 属性
 * @returns data has prop
 */
function hasProp(data: Record<PropertyKey, any>, prop: PropertyKey): boolean {
  if (data[prop] === undefined) {
    if (!hasOwnProperty.call(data, prop)) {
      for (const n in data) {
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
