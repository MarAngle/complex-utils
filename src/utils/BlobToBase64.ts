/**
 * 将Blob对象转换为Base64字符串
 * @param {Blob} value Blob对象
 * @returns {Promise<{ data: string }>} 包含Base64字符串的Promise
 */
function BlobToBase64(value: Blob): Promise<{ data: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(value)
    reader.onload = function() {
      resolve({ data: reader.result as string })
    }
    reader.onerror = function(e) {
      reject(e)
    }
  })
}

export default BlobToBase64