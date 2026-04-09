import getType, { type SimpleType } from './getType'
import getTag from './getTag'

export type ComplexType = SimpleType | "file" | "blob" | "regExp" | "date" | 'map' | 'set'

const complexTypeDict = {
  '[object File]' : 'file',
  '[object Blob]' : 'blob',
  '[object RegExp]' : 'regExp',
  '[object Date]' : 'date',
  '[object Symbol]' : 'symbol',
  '[object Map]' : 'map',
  '[object Set]' : 'set',
} as const

/**
 * 获取value的数据类型-额外判断file/blob/date/regExp，并准确判断symbol
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array" | "file" | "blob" | "regExp" | "date" | "map" | "set"} 返回value的数据类型  
 */
function getComplexType(value: unknown): ComplexType {
  const type = getType (value)
  if (type === 'object') {
    return complexTypeDict[getTag(value) as keyof typeof complexTypeDict] || type
  }
  return type
}

export default getComplexType
