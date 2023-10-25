import isArray from '../type/isArray'
import Data from './Data'

let lifeId = 1

function getLifeId () {
  lifeId++
  return lifeId
}

export interface LifeDataType {
  id?: PropertyKey,
  data: (...args: any[]) => any,
  index?: number,
  replace?: boolean,
  immediate?: boolean,
  once?: boolean
}

class LifeData extends Data {
  name: string
  data: Map<PropertyKey, LifeDataType>
  constructor(name: string, data?: LifeDataType | LifeDataType[]) {
    super()
    this.name = name
    this.data = new Map()
    if (data) {
      this.push(data)
    }
  }
  /**
   * 创建生命周期回调
   * @param data 
   * @returns {PropertyKey | PropertyKey[]}
   */
  push(data?: LifeDataType | LifeDataType[]) {
    let resId: undefined | PropertyKey | (undefined | PropertyKey)[]
    if (data) {
      if (isArray(data)) {
        resId = []
        for (let n = 0; n < data.length; n++) {
          resId.push(this.$push(data[n]))
        }
      } else {
        resId = this.$push(data)
      }
    }
    return resId
  }
  protected $push(data: LifeDataType) {
    if (!data.id) {
      data.id = getLifeId()
    }
    if (this.data.has(data.id) && !data.replace) {
      this.$exportMsg(`存在当前回调:${String(data.id)}`)
    } else {
      if (data.index === undefined) {
        this.data.set(data.id, data)
      } else {
        const size = this.data.size
        if (data.index < size) {
          const list: LifeDataType[] = []
          this.data.forEach(function (item) {
            list.push(item)
          })
          this.data.clear()
          for (let n = 0; n < size; n++) {
            const item = list[n]
            if (data.index === n) {
              this.data.set(data.id, data)
            }
            this.data.set(item.id!, item)
          }
        } else {
          this.data.set(data.id, data)
        }
      }
      if (data.immediate) {
        this.emit(data.id!)
      }
      return data.id
    }
  }
  /**
   * 触发函数
   * @param  {...any} args 参数
   */
  trigger(...args: any[]) {
    for (const id of this.data.keys()) {
      this.emit(id, ...args)
    }
  }
  /**
   * 触发指定id的回调
   * @param {string} id id
   * @param  {...any} args 参数
   */
  emit(id: PropertyKey, ...args: any[]) {
    const data = this.data.get(id)
    if (data && data.data) {
      data.data(...args)
      if (data.once) {
        this.off(id)
      }
    } else {
      this.$exportMsg(`不存在当前值(${String(id)})`)
    }
  }
  /**
   * 删除指定id的生命周期
   * @param {string} id id
   * @returns {boolean}
   */
  off(id: PropertyKey) {
    return this.data.delete(id)
  }
  /**
   * 清除所有回调
   */
  clear() {
    this.data.clear()
  }
  /**
   * 重置
   */
  reset() {
    this.clear()
  }
  /**
   * 销毁
   */
  destroy() {
    this.reset()
  }
  $getName() {
    return `${super.$getName()}-NAME:${this.name}`
  }
}


export interface LifeInitOption {
  [prop: string]: LifeDataType | LifeDataType[]
}


class Life extends Data {
  static $name = 'Life'
  data: Map<string, LifeData>
  constructor (initOption: LifeInitOption = {}) {
    super()
    this.data = new Map()
    for (const n in initOption) {
      const item = initOption[n]
      this.on(n, item)
    }
  }
  /**
   * 创建对应的生命周期对象:存储
   * @param {string} name 生命周期名称
   * @param {boolean} [auto = true] 不存在时自动设置
   */
  protected build(name: string, auto = true) {
    if (!this.data.get(name) && auto) {
      this.data.set(name,  new LifeData(name))
    }
  }
  /**
   * 获取对应生命周期对象
   * @param {string} name 生命周期名称
   * @param {boolean} [auto = true] 不存在时自动设置
   * @returns {LifeData}
   */
  get(name: string, auto?: boolean) {
    this.build(name, auto)
    return this.data.get(name)
  }
  /**
   * 设置生命周期回调
   * @param {string} name 生命周期名称
   * @param {*} data LifeData参数
   * @returns {string | string} id/idList
   */
  on(name: string, ...args: Parameters<LifeData['push']>) {
    const lifeItem = this.get(name, true)!
    return lifeItem.push(...args)
  }
  /**
   * 触发生命周期指定id函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @param  {...any} args 参数
   */
  emit(name: string, ...args: Parameters<LifeData['emit']>) {
    const lifeItem = this.get(name, true)!
    lifeItem.emit(...args)
  }
  /**
   * 触发生命周期
   * @param {string} name 生命周期
   * @param  {...any} args 参数
   */
  trigger(name: string, ...args: Parameters<LifeData['trigger']>) {
    const lifeItem = this.get(name, true)!
    lifeItem.trigger(...args)
  }
  /**
   * 删除生命周期指定函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @returns {boolean}
   */
  off(name: string, ...args: Parameters<LifeData['off']>): boolean {
    const lifeItem = this.get(name, false)
    if (lifeItem) {
      return lifeItem.off(...args)
    } else {
      return false
    }
  }
  /**
   * 清除生命周期
   * @param {string} name 生命周期
   */
  clear(name: string) {
    const lifeItem = this.get(name, false)
    if (lifeItem) {
      lifeItem.clear()
    }
  }
  /**
   * 重置
   */
  reset() {
    for (const name in this.data) {
      this.clear(name)
    }
  }
  /**
   * 销毁
   */
  destroy() {
    this.reset()
    this.data.clear()
  }
}

export default Life
