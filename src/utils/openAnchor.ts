
const isSupportDownload = 'download' in document.createElement('a')

/**
 * 基于a标签打开文件
 * @param {string} url
 * @param {string} [target] 窗口目标
 * @param {string} [download] 下载名称
 * @returns {boolean} 是否成功
 */
function openAnchor(url: string, download: string | true = true, target = '_blank') {
  let anchor: HTMLAnchorElement | null = document.createElement('a')
  anchor.href = url
  if (target) {
    anchor.target = target
  }
  if (isSupportDownload && download) {
    if (download === true) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      download = url.split('/').pop()!
    }
    anchor.setAttribute('download', download)
  }
  anchor.click()
  setTimeout(function() {
    anchor = null
  }, 0)
}

export default openAnchor
