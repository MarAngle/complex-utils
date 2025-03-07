type optionType = {
  pathname?: boolean
}

/**
 * 获取当前URL
 * @param {object} [option] 设置项
 * @param {boolean} [option.pathname] 是否添加pathname
 * @returns {string}
 */
function getCurrentUrl(option: optionType = {}): string {
  const { protocol, host, pathname } = window.location
  let url = `${protocol}//${host}`
  if (option.pathname !== false) {
    url += pathname
  }
  return url
}

export default getCurrentUrl
