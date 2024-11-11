
/**
 * 
 * @param value Base64字符串
 * @returns 
 */
function Base64ToBlob(value: any, options?: BlobPropertyBag) {
  const arr = value.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime,
    ...options
  })
}

export default Base64ToBlob
