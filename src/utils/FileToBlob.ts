/**
 * 将File对象转换为Blob对象
 * @param {File} value File对象
 * @returns {Blob} Blob对象
 */
function FileToBlob(value: File): Blob {
  return new Blob([value], { type: value.type })
}

export default FileToBlob
