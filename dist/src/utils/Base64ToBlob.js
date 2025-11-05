/**
 * 将Base64字符串转换为Blob对象
 * @param {string} value Base64字符串
 * @param {BlobPropertyBag} [options] Blob属性配置
 * @returns {Blob}
 */
function Base64ToBlob(value, options) {
    const arr = value.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
        throw new Error('Invalid Base64 string');
    }
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], Object.assign({ type: mime }, options));
}
export default Base64ToBlob;
