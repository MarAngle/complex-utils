import getLocalProp from './getLocalProp'

/**
 * 设置缓存
 * @param {string} name
 * @param {*} value
 */
function setLocalData(name: string, value: any) {
  name = getLocalProp(name)
  const localData = {
    value: value,
    time: Date.now()
  }
  try {
    localStorage.setItem(name, JSON.stringify(localData))
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

export default setLocalData
