
type setDataType = (name: string, value?: unknown) => boolean
type getDataType = (name: string, option?: true | number, refresh?: boolean) => any
type removeDataType = (name: string) => void

type storageValueType = {
  value: any
  time: number
}

const storage = {
  prop: 'complex-utils-storage-',
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
        value: value,
        time: time || Date.now()
      } as storageValueType
      try {
        targetStorage.setItem(name, JSON.stringify(storageValue))
        return true
      } catch (err) {
        console.error(err)
        return false
      }
    }
  },
  _buildGetData(targetStorage: Storage, setProp: 'setData' | 'setSessionData') {
    return function(name: string, option?: true | number, refresh?: boolean) {
      name = storage.getProp(name)
      const storageValueStr = targetStorage.getItem(name)
      if (storageValueStr) {
        try {
          const storageValue = JSON.parse(storageValueStr) as storageValueType
          if (option && option !== true && (Date.now() - storageValue.time) > option * 1000) {
            storageValue.value = undefined
          }
          if (refresh) {
            storage[setProp](name, storageValue.value)
          }
          if (option !== true) {
            return storageValue.value
          } else {
            return storageValue
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
  setData: null as unknown as setDataType,
  setSessionData: null as unknown as setDataType,
  getData: null as unknown as getDataType,
  getSessionData: null as unknown as getDataType,
  removeData: null as unknown as removeDataType,
  removeSessionData: null as unknown as removeDataType,
}

storage.setData = storage._buildSetData(localStorage)
storage.setSessionData = storage._buildSetData(sessionStorage)
storage.getData = storage._buildGetData(localStorage, 'setData')
storage.getSessionData = storage._buildGetData(sessionStorage, 'setSessionData')
storage.removeData = storage._buildRemoveData(localStorage)
storage.removeSessionData = storage._buildRemoveData(sessionStorage)

export default storage

