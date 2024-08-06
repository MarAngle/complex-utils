import _Data from "./_Data"
import exportMsg, { consoleType } from "../utils/exportMsg"

let lifeId = 0
function getLifeId () {
  lifeId++
  return lifeId.toString()
}

type lifeFunction = (lifeItem: LifeValue, ...args: any[]) => any

export interface LifeValueInitOption {
  id?: string
  handler: lifeFunction
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class LifeValue {
  id: string
  handler: lifeFunction
  destroy: () => void
  constructor(initOption: LifeValueInitOption, life: LifeData) {
    this.id = initOption.id || getLifeId()
    this.handler = initOption.handler
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

export abstract class LifeData {
  static $name = 'LifeData'
  prop: string
  constructor(prop: string) {
    this.prop = prop
  }
  abstract get(id: string): LifeValue | undefined
  abstract push(lifeValueInitOption: LifeValueInitOptionWithExtra): undefined | string
  /**
   * 触发函数
   * @param  {...any} args 参数
   */
  abstract trigger(...args: any[]): void
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
    lifeValue.handler(lifeValue, ...args)
  }
  /**
   * 触发指定id的回调
   * @param {string} id id
   * @param  {...any} args 参数
   */
  emit(id: string, ...args: any[]) {
    const lifeValue = this.get(id)
    if (lifeValue) {
      lifeValue.handler(lifeValue, ...args)
    } else {
      this.$exportMsg(`不存在当前值(${id})`)
    }
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
  $exportMsg(content: string, type: consoleType = 'error') {
    return exportMsg(`生命周期:${this.prop}:${content}`, type)
  }
}

export class LifeList extends LifeData {
  static $name = 'LifeList'
  list: LifeValue[]
  constructor(prop: string, lifeValueInitOption?: LifeValueInitOptionWithExtra) {
    super(prop)
    this.list = []
    if (lifeValueInitOption) {
      this.push(lifeValueInitOption)
    }
  }
  get(id: string) {
    return this.list.find(value => value.id === id)
  }
  push(lifeValueInitOption: LifeValueInitOptionWithExtra) {
    if (lifeValueInitOption.id && this.get(lifeValueInitOption.id) && !lifeValueInitOption.replace) {
      this.$exportMsg(`存在当前回调:${lifeValueInitOption.id}`)
    } else {
      const lifeValue = new LifeValue(lifeValueInitOption, this)
      if (lifeValueInitOption.index == undefined) {
        this.list.push(lifeValue)
      } else {
        const size = this.list.length
        if (lifeValueInitOption.index < size) {
          this.list.splice(lifeValueInitOption.index, 0, lifeValue)
        } else {
          this.list.push(lifeValue)
        }
      }
      if (lifeValueInitOption.immediate) {
        this.$emit(lifeValue)
      }
      return lifeValue.id
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
  map: Map<string, LifeValue>
  constructor(prop: string, lifeValueInitOption?: LifeValueInitOptionWithExtra) {
    super(prop)
    this.map = new Map()
    if (lifeValueInitOption) {
      this.push(lifeValueInitOption)
    }
  }
  get(id: string) {
    return this.map.get(id)
  }
  push(lifeValueInitOption: LifeValueInitOptionWithExtra) {
    if (lifeValueInitOption.id && this.get(lifeValueInitOption.id) && !lifeValueInitOption.replace) {
      this.$exportMsg(`存在当前回调:${lifeValueInitOption.id}`)
    } else {
      const lifeItem = new LifeValue(lifeValueInitOption, this)
      if (lifeValueInitOption.index == undefined) {
        this.map.set(lifeItem.id, lifeItem)
      } else {
        const size = this.map.size
        if (lifeValueInitOption.index < size) {
          const list: LifeValue[] = []
          this.map.forEach(function (item) {
            list.push(item)
          })
          this.map.clear()
          for (let n = 0; n < size; n++) {
            const item = list[n]
            if (lifeValueInitOption.index === n) {
              this.map.set(lifeItem.id, lifeItem)
            }
            this.map.set(item.id, item)
          }
        } else {
          this.map.set(lifeItem.id, lifeItem)
        }
      }
      if (lifeValueInitOption.immediate) {
        this.$emit(lifeItem)
      }
      return lifeItem.id
    }
  }
  /**
   * 触发函数
   * @param  {...any} args 参数
   */
  trigger(...args: any[]) {
    for (const lifeValue of this.map.values()) {
      this.$emit(lifeValue, ...args)
    }
  }
  /**
   * 删除指定id的生命周期
   * @param {string} id id
   * @returns {boolean}
   */
  off(id: string) {
    return this.map.delete(id)
  }
  /**
   * 清除所有回调
   */
  clear() {
    this.map.clear()
  }
}

