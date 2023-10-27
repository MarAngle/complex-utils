import downloadFile from './downloadFile'

const URL = window.URL || window.webkitURL

/**
 * 下载blob文件
 * @param {*} blobValue
 * @param {string} type
 * @param {string} [name]
 * @returns {boolean} 是否成功
 */
function downloadBlob(blobValue: BlobPart, type: string, name?: string) {
  const blob = new Blob([blobValue], { type: type })
  const url = URL.createObjectURL(blob)
  downloadFile(url, name)
  URL.revokeObjectURL(url)
  return true
}

export default downloadBlob
