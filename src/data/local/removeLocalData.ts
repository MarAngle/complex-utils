import getLocalProp from './getLocalProp'

/**
 * 清除缓存
 * @param {string} name
 */
function removeLocalData(name: string) {
  name = getLocalProp(name)
  localStorage.removeItem(name)
}

export default removeLocalData
