import getLocalProp from './getLocalProp'
import setLocalData from './setLocalData'

/**
 * 获取缓存
 * @param {string} name
 * @param {number} [time] 获取的时间间隔限制,按秒进行
 * @param {boolean} [refresh] 重置缓存时间戳
 * @returns {*}
 */
function getLocalData(name: string, time?: number, refresh?: boolean) {
  name = getLocalProp(name)
  const localDataStr = localStorage.getItem(name)
  if (localDataStr) {
    try {
      const localData = JSON.parse(localDataStr)
      if (time) {
        const currentTime = Date.now()
        time = time * 1000
        if ((currentTime - localData.time) > time) {
          localData.value = null
        }
      }
      if (refresh) {
        setLocalData(name, localData.value)
      }
      return localData.value
    } catch (e) {
      return undefined
    }
  } else {
    return undefined
  }
}

export default getLocalData
