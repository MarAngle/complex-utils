import downloadFile from './downloadFile';
const URL = window.URL || window.webkitURL;
/**
 * 下载blob文件
 * @param {BlobPart} blobValue Blob内容
 * @param {string} type Blob类型
 * @param {string} [name] 文件名称
 * @returns {boolean} 是否成功
 */
function downloadBlob(blobValue, type, name) {
    const blob = new Blob([blobValue], { type: type });
    const url = URL.createObjectURL(blob);
    downloadFile(url, name);
    URL.revokeObjectURL(url);
    return true;
}
export default downloadBlob;
