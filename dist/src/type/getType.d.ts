export type SimpleType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null";
/**
 * 获取value的数据类型
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"}
 */
declare function getType(value: unknown): SimpleType;
export default getType;
