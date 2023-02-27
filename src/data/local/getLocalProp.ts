import config from '../../../config'

/**
 * 获取本地缓存name全称
 * @param {string} name
 * @returns {string}
 */
function getLocalProp(name: string) {
  return config.local.prop + name
}

export default getLocalProp
