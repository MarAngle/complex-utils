import downloadFile from './downloadFile'

const URL = window.URL || window.webkitURL

/**
 * 下载blob文件
 * @param {*} blobValue
 * @param {string} type
 * @param {string} [name]
 * @returns {boolean} 是否成功
 */
function downloadBlob(blobValue: any, type: string, name?: string) {
  let blob
  if (typeof window.Blob == 'function') {
    blob = new Blob([blobValue], { type: type })
  } else {
    const BlobBuilder = (window as any).MSBlobBuilder
    const blobData = new BlobBuilder()
    blobData.append(blobValue)
    blob = blobData.getBlob(type)
  }
  const url = URL.createObjectURL(blob)
  downloadFile(url, name)
  URL.revokeObjectURL(url)
  return true
}

export default downloadBlob
