import getComplexType from "./getComplexType";
/**
 * 是否是复杂对象
 * @param {*} type 需要判断的类型值
 * @returns {boolean} type is 复杂对象
 */
export function _isComplex(type) {
    return ['object', 'array', 'map', 'set'].includes(type);
}
/**
 * 通过getComplexType获取对应的类型并判断此类型是否是复杂对象
 * @param {*} value 需要进行判断的值
 * @returns {boolean} 是否是复杂对象
 */
function isComplex(value) {
    return _isComplex(getComplexType(value));
}
export default isComplex;
