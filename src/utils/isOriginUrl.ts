import parseUrl, { simpleLocation } from './parseUrl'

const location = window.location

const propList: Array<keyof simpleLocation> = ['protocol', 'hostname', 'port']

/**
 * 判断2个URL是否同源
 * @param {string} url
 * @param {string} [otherUrl] 不存在时取当前url对应的location
 * @returns {boolean}
 */
function isOriginUrl(url: string, otherUrl?: string): boolean {
  const urlLocation = parseUrl(url)
  const otherUrlLocation: simpleLocation = otherUrl ? parseUrl(otherUrl) : location

  for (const prop of propList) {
    if (urlLocation[prop] !== otherUrlLocation[prop]) {
      return false
    }
  }
  return true
}

export default isOriginUrl
