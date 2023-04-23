function isCompleteUrl (url: string) {
  if (url.indexOf('http://') === 0 || url.indexOf('https://') === 0 || url.indexOf('ftp://') === 0) {
    return true
  } else {
    return false
  }
}

export default isCompleteUrl
