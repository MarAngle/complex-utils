/**
 * 是否是Blob
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is Blob
 */
declare function isBlob(value: unknown): value is Blob;
export default isBlob;
