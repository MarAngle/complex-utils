import openAnchor from './openAnchor'

/**
 * 下载文件
 * @param {string | object} data
 * @returns {boolean} 是否成功
 */
function downloadFile(url: string, name?: string) {
  return openAnchor(url, name)
}

export default downloadFile
