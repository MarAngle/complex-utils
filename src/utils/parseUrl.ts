/**
 * 使用标准 URL API 解析一个 URL 字符串。
 * @param {string} url - 需要解析的 URL。可以是绝对路径，也可以是相对路径。
 * @returns {URL} 返回一个 URL 实例。如果 URL 无效，则返回一个指向 'about:blank' 的 URL 实例。
 */
function parseUrl(url: string): URL {
  try {
    // 使用 window.location.href 作为 base URL，以正确解析相对路径。
    return new URL(url, window.location.href)
  } catch (e) {
    // 如果 new URL() 构造失败，返回一个表示无效状态的 URL 对象。
    return new URL('about:blank')
  }
}

export default parseUrl
