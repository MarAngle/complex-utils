
/**
 * 
 * @param value Blob
 * @returns 
 */
function BlobToBase64(value: Blob): Promise<{ data: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(value)
    reader.onload = function(e) {
      resolve({ data: e.target!.result as string })
    }
    reader.onerror = function(e) {
      reject(e)
    }
  })
}

export default BlobToBase64
