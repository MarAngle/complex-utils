
type setDataType = (name: string, value?: unknown) => boolean
type getDataType = (name: string, option?: true | number, refresh?: boolean) => any
type removeDataType = (name: string) => void
type clearDataType = () => void

type storageValueType<V = any> = {
  v: V
}
const timeSuffix = '-$time'
const storage = {
  prop: 'complex-storage-',
  setProp(prop: string) {
    this.prop = prop
  },
  getProp(name: string) {
    return this.prop + name
  },
  _buildSetData(targetStorage: Storage) {
    return function(name: string, value?: unknown, time?: number) {
      name = storage.getProp(name)
      const storageValue = {
        v: value
      } as storageValueType
      try {
        targetStorage.setItem(name + timeSuffix, String(Math.floor((time || Date.now()) / 1000)))
        targetStorage.setItem(name, JSON.stringify(storageValue))
        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  },
  _buildGetData(targetStorage: Storage) {
    return function(name: string, option?: true | number, refresh?: boolean) {
      name = storage.getProp(name)
      if (option && option !== true) {
        const storageTime = Number(targetStorage.getItem(name + timeSuffix))
        if ((Date.now() - storageTime) > option) {
          // 超时，此时option不会为true，直接返回undefined
          return undefined
        }
      }
      const storageValueStr = targetStorage.getItem(name)
      if (storageValueStr) {
        try {
          const storageValue = JSON.parse(storageValueStr) as storageValueType
          if (refresh) {
            targetStorage.setItem(name + timeSuffix, String(Math.floor(Date.now() / 1000)))
          }
          if (option !== true) {
            return storageValue.v
          } else {
            return {
              v: storageValue.v,
              t: Number(targetStorage.getItem(name + timeSuffix))
            }
          }
        } catch (err) {
          return undefined
        }
      } else {
        return undefined
      }
    }
  },
  _buildRemoveData(targetStorage: Storage) {
    return function(name: string) {
      name = storage.getProp(name)
      targetStorage.removeItem(name)
    }
  },
  _buildClearData(targetStorage: Storage) {
    return function() {
      targetStorage.clear()
    }
  },
  setData: null as unknown as setDataType,
  setSessionData: null as unknown as setDataType,
  getData: null as unknown as getDataType,
  getSessionData: null as unknown as getDataType,
  removeData: null as unknown as removeDataType,
  removeSessionData: null as unknown as removeDataType,
  clearData: null as unknown as clearDataType,
  clearSessionData: null as unknown as clearDataType,
}

storage.setData = storage._buildSetData(localStorage)
storage.setSessionData = storage._buildSetData(sessionStorage)
storage.getData = storage._buildGetData(localStorage)
storage.getSessionData = storage._buildGetData(sessionStorage)
storage.removeData = storage._buildRemoveData(localStorage)
storage.removeSessionData = storage._buildRemoveData(sessionStorage)
storage.clearData = storage._buildClearData(localStorage)
storage.clearSessionData = storage._buildClearData(sessionStorage)

export default storage

