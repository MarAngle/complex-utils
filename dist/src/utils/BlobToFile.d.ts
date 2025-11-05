/**
 * 将Blob对象转换为File对象
 * @param {Blob} value Blob对象
 * @param {string} [fileName] 文件名称
 * @returns {File}
 */
declare function BlobToFile(value: Blob, fileName?: string): File;
export default BlobToFile;
