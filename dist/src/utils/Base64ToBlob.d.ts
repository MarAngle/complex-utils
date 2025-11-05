/**
 * 将Base64字符串转换为Blob对象
 * @param {string} value Base64字符串
 * @param {BlobPropertyBag} [options] Blob属性配置
 * @returns {Blob}
 */
declare function Base64ToBlob(value: string, options?: BlobPropertyBag): Blob;
export default Base64ToBlob;
