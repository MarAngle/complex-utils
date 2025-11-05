/**
 * 将Base64字符串转换为File对象
 * @param {string} value Base64字符串
 * @param {string} fileName 文件名称
 * @param {FilePropertyBag} [options] 文件属性配置
 * @returns {File}
 */
declare function Base64ToFile(value: string, fileName: string, options?: FilePropertyBag): File;
export default Base64ToFile;
