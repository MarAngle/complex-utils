import _Data from "./_Data"

let lifeId = 0
function getLifeId () {
  lifeId++
  return lifeId.toString()
}

type lifeFunction = (lifeItem: LifeValue, ...args: any[]) => any

export interface LifeValueInitOption {
  id?: string
  data: lifeFunction
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class LifeValue {
  id: string
  data: lifeFunction
  destroy: () => void
  constructor(initOption: LifeValueInitOption, life: LifeData) {
    this.id = initOption.id || getLifeId()
    this.data = initOption.data
    this.destroy = () => {
      life.off(this.id, this)
    }
  }
}

export interface LifeValueInitOptionWithExtra extends LifeValueInitOption {
  index?: number
  replace?: boolean
  immediate?: boolean
}

export abstract class LifeData extends _Data {
  static $name = 'LifeMap'
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  abstract push(data: LifeValueInitOptionWithExtra): undefined | string
  /**
   * 触发函数
   * @param  {...any} args 参数
   */
  abstract trigger(...args: any[]): void
  /**
   * 触发指定id的回调
   * @param {string} id id
   * @param  {...any} args 参数
   */
  abstract emit(id: string, ...args: any[]): void
  /**
   * 删除指定id的生命周期
   * @param {string} id id
   * @returns {boolean}
   */
  abstract off(id: string, value?: LifeValue): boolean
  /**
   * 清除所有回调
   */
  abstract clear(): void
  protected $emit(lifeValue: LifeValue, ...args: any[]) {
    lifeValue.data(lifeValue, ...args)
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
  _getName() {
    return `${super._getName()}-生命周期:${this.name}`
  }
}

export class LifeList extends LifeData {
  static $name = 'LifeList'
  list: LifeValue[]
  constructor(name: string, data?: LifeValueInitOptionWithExtra) {
    super(name)
    this.name = name
    this.list = []
    if (data) {
      this.push(data)
    }
  }
  get(id: string) {
    return this.list.find(value => value.id === id)
  }
  push(data: LifeValueInitOptionWithExtra) {
    if (data.id && this.get(data.id) && !data.replace) {
      this.$exportMsg(`存在当前回调:${data.id}`)
    } else {
      const lifeItem = new LifeValue(data, this)
      if (data.index == undefined) {
        this.list.push(lifeItem)
      } else {
        const size = this.list.length
        if (data.index < size) {
          this.list.splice(data.index, 0, lifeItem)
        } else {
          this.list.push(lifeItem)
        }
      }
      if (data.immediate) {
        this.emit(lifeItem.id)
      }
      return lifeItem.id
    }
  }
  /**
   * 触发函数
   * @param  {...any} args 参数
   */
  trigger(...args: any[]) {
    this.list.forEach(lifeValue => {
      this.$emit(lifeValue, ...args)
    })
  }
  /**
   * 触发指定id的回调
   * @param {string} id id
   * @param  {...any} args 参数
   */
  emit(id: string, ...args: any[]) {
    const lifeValue = this.get(id)
    if (lifeValue) {
      this.$emit(lifeValue, ...args)
    } else {
      this.$exportMsg(`不存在当前值(${id})`)
    }
  }
  /**
   * 删除指定id的生命周期
   * @param {string} id id
   * @returns {boolean}
   */
  off(id: string, value?: LifeValue) {
    const index = value ? this.list.indexOf(value) : this.list.findIndex(value => value.id === id)
    if (index > -1) {
      this.list.splice(index, 1)
      return true
    } else {
      return false
    }
  }
  /**
   * 清除所有回调
   */
  clear() {
    this.list = []
  }
}

export class LifeMap extends LifeData {
  static $name = 'LifeMap'
  data: Map<string, LifeValue>
  constructor(name: string, data?: LifeValueInitOptionWithExtra) {
    super(name)
    this.name = name
    this.data = new Map()
    if (data) {
      this.push(data)
    }
  }
  push(data: LifeValueInitOptionWithExtra) {
    if (data.id && this.data.has(data.id) && !data.replace) {
      this.$exportMsg(`存在当前回调:${data.id}`)
    } else {
      const lifeItem = new LifeValue(data, this)
      if (data.index == undefined) {
        this.data.set(lifeItem.id, lifeItem)
      } else {
        const size = this.data.size
        if (data.index < size) {
          const list: LifeValue[] = []
          this.data.forEach(function (item) {
            list.push(item)
          })
          this.data.clear()
          for (let n = 0; n < size; n++) {
            const item = list[n]
            if (data.index === n) {
              this.data.set(lifeItem.id, lifeItem)
            }
            this.data.set(item.id, item)
          }
        } else {
          this.data.set(lifeItem.id, lifeItem)
        }
      }
      if (data.immediate) {
        this.emit(lifeItem.id)
      }
      return lifeItem.id
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
  emit(id: string, ...args: any[]) {
    const lifeValue = this.data.get(id)
    if (lifeValue) {
      lifeValue.data(lifeValue, ...args)
    } else {
      this.$exportMsg(`不存在当前值(${id})`)
    }
  }
  /**
   * 删除指定id的生命周期
   * @param {string} id id
   * @returns {boolean}
   */
  off(id: string) {
    return this.data.delete(id)
  }
  /**
   * 清除所有回调
   */
  clear() {
    this.data.clear()
  }
}

