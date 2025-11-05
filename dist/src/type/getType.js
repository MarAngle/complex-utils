import isArray from './isArray';
/**
 * 获取value的数据类型
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"}
 */
function getType(value) {
    const type = typeof (value);
    if (type === 'object') {
        if (isArray(value)) {
            return 'array';
        }
        else if (value === null) {
            return 'null';
        }
    }
    return type;
}
export default getType;
