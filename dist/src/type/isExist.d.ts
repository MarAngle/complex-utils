/**
 * 值是否存在
 * @param {*} value 需要判断的数据
 * @param {*[]} [existList] 为否但是需要判断为存在的值数组，默认为[false, 0]
 * @param {*[]} [unExistList] 为真但是需要判断为不存在的值数组，默认为[]
 * @returns {boolean}
 */
declare function isExist(value: any, existList?: any[], unExistList?: any[]): boolean;
export default isExist;
