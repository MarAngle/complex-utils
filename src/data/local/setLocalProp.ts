import config from '../../../config'

/**
 * 设置本地缓存的名称前缀
 * @param {string} prop
 */
function setLocalProp(prop: string) {
  config.local.prop = prop
}

export default setLocalProp
