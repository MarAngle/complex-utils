/**
 * 下载blob文件
 * @param {BlobPart} blobValue Blob内容
 * @param {string} type Blob类型
 * @param {string} [name] 文件名称
 * @returns {boolean} 是否成功
 */
declare function downloadBlob(blobValue: BlobPart, type: string, name?: string): boolean;
export default downloadBlob;
