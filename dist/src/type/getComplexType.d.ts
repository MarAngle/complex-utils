import { SimpleType } from './getType';
export type ComplexType = SimpleType | "file" | "blob" | "regExp" | "date" | 'map' | 'set';
/**
 * 获取value的数据类型-额外判断file/blob/date/regExp，并准确判断symbol
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array" | "file" | "blob" | "regExp" | "date" | "map" | "set"} 返回value的数据类型
 */
declare function getComplexType(value: unknown): ComplexType;
export default getComplexType;
