
/**
 * 
 * @param value Base64字符串
 * @param filename 名称
 * @returns 
 */
function Base64ToFile(value: any, fileName: string, options?: FilePropertyBag) {
  const arr = value.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
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
