/**
 * 基础版本的深拷贝
 * @param {*} data 深拷贝对象
 * @param {*} map 循环引用缓存
 * @returns
 */
declare function deepCloneData<T>(data: T, map?: Map<any, any>): T;
export default deepCloneData;
