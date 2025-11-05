/**
 * 将Blob对象转换为File对象
 * @param {Blob} value Blob对象
 * @param {string} [fileName] 文件名称
 * @returns {File}
 */
function BlobToFile(value, fileName) {
    if (!fileName) {
        const suffix = value.type.split('/')[1];
        fileName = 'newFile.' + suffix;
    }
    return new File([value], fileName, { type: value.type });
}
export default BlobToFile;
