/**
 * 将Base64字符串转换为File对象
 * @param {string} value Base64字符串
 * @param {string} fileName 文件名称
 * @param {FilePropertyBag} [options] 文件属性配置
 * @returns {File}
 */
function Base64ToFile(value: string, fileName: string, options?: FilePropertyBag): File {
  const arr = value.split(',')
  const mimeMatch = arr[0].match(/:(.*?);/)
  if (!mimeMatch) {
    throw new Error('Invalid Base64 string')
  }
  const mime = mimeMatch[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], fileName, {
    type: mime,
    ...options
  })
}

export default Base64ToFile