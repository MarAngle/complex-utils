import isArray from './isArray'

export type SimpleType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"

/**
 * 获取value的数据类型
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"}
 */
function getType(value: any): SimpleType {
  const type = typeof (value)
  if (type === 'object') {
    if (isArray(value)) {
      return 'array'
    } else if (value === null) {
      return 'null'
    }
  }
  return type
}

export default getType
