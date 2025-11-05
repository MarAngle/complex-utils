import getTag from './getTag';
/**
 * 是否是Array
 * @param {*} value 需要判断的值
 * @returns {boolean} value is Array
 */
const isArray = Array.isArray ? function (value) { return Array.isArray(value); } : function (value) { return getTag(value) === '[object Array]'; };
export default isArray;
