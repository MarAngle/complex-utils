import config from '../../config'

function $getLocalProp(name: string) {
  return config.local.prop + name
}

function $buildSetLocalData(storage: Storage) {
  return function(name: string, value?: unknown) {
    name = $getLocalProp(name)
    const localData = {
      value: value,
      time: Date.now()
    }
    try {
      storage.setItem(name, JSON.stringify(localData))
      return true
    } catch (err) {
      console.error(err)
      return false
    }
  }
}

function $buildGetLocalData(storage: Storage) {
  return function(name: string, time?: number, refresh?: boolean) {
    name = $getLocalProp(name)
    const localDataStr = storage.getItem(name)
    if (localDataStr) {
      try {
        const localData = JSON.parse(localDataStr)
        if (time && (Date.now() - localData.time) > time * 1000) {
          localData.value = undefined
        }
        if (refresh) {
          setLocalData(name, localData.value)
        }
        return localData.value
      } catch (err) {
        return undefined
      }
    } else {
      return undefined
    }
  }
}

function buildRemoveLocalData(storage: Storage) {
  return function(name: string) {
    name = $getLocalProp(name)
    storage.removeItem(name)
  }
}

export const setLocalData = $buildSetLocalData(localStorage)
export const setSessionLocalData = $buildSetLocalData(sessionStorage)

export const getLocalData = $buildGetLocalData(localStorage)
export const getSessionLocalData = $buildGetLocalData(sessionStorage)

export const removeLocalData = buildRemoveLocalData(localStorage)
export const removeSessionLocalData = buildRemoveLocalData(sessionStorage)
