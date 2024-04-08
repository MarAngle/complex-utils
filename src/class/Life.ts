import Data from "./Data"

let lifeId = 1
function getLifeId () {
  lifeId++
  return lifeId.toString()
}

type lifeFunction = (lifeItem: LifeItem, ...args: any[]) => any

export interface LifeItemInitOption {
  id?: string
  data: lifeFunction
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class LifeItem extends null {
  id: string
  data: lifeFunction
  destroy: () => void
  constructor(initOption: LifeItemInitOption, life: Life) {
    this.id = initOption.id || getLifeId()
    this.data = initOption.data
    this.destroy = () => {
      life.off(this.id)
    }
  }
}

export interface LifeInitOption extends LifeItemInitOption {
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class Life extends Data {
  static $name = 'Life'
  name: string
  data: Map<string, LifeItem>
  constructor(name: string, data?: LifeInitOption) {
    super()
    this.name = name
    this.data = new Map()
    if (data) {
      this.push(data)
    }
  }
  push(data: LifeInitOption) {
    if (data.id && this.data.has(data.id) && !data.replace) {
      this.$exportMsg(`存在当前回调:${data.id}`)
    } else {
      const lifeItem = new LifeItem(data, this)
      if (data.index === undefined) {
        this.data.set(lifeItem.id, lifeItem)
      } else {
        const size = this.data.size
        if (data.index < size) {
          const list: LifeItem[] = []
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
    const lifeItem = this.data.get(id)
    if (lifeItem) {
      lifeItem.data(lifeItem, ...args)
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
    return `${super._getName()}-NAME:${this.name}`
  }
}

export interface LifeDataInitOption {
  [prop: string]: LifeInitOption
}

class LifeData extends Data {
  static $name = 'LifeData'
  data: Map<string, Life>
  constructor (initOption: LifeDataInitOption = {}) {
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
  protected _build(name: string, auto = true) {
    if (!this.data.get(name) && auto) {
      this.data.set(name,  new Life(name))
    }
  }
  /**
   * 获取对应生命周期对象
   * @param {string} name 生命周期名称
   * @param {boolean} [auto = true] 不存在时自动设置
   * @returns {LifeData}
   */
  _get(name: string, auto?: boolean) {
    this._build(name, auto)
    return this.data.get(name)
  }
  /**
   * 设置生命周期回调
   * @param {string} name 生命周期名称
   * @param {*} data LifeData参数
   * @returns {string | string} id/idList
   */
  on(name: string, ...args: Parameters<Life['push']>) {
    const life = this._get(name, true)!
    return life.push(...args)
  }
  /**
   * 触发生命周期指定id函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @param  {...any} args 参数
   */
  emit(name: string, ...args: Parameters<Life['emit']>) {
    const life = this._get(name, true)!
    life.emit(...args)
  }
  /**
   * 触发生命周期
   * @param {string} name 生命周期
   * @param  {...any} args 参数
   */
  trigger(name: string, ...args: Parameters<Life['trigger']>) {
    const life = this._get(name, true)!
    life.trigger(...args)
  }
  /**
   * 删除生命周期指定函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @returns {boolean}
   */
  off(name: string, ...args: Parameters<Life['off']>): boolean {
    const life = this._get(name, false)
    if (life) {
      return life.off(...args)
    } else {
      return false
    }
  }
  /**
   * 清除生命周期
   * @param {string} name 生命周期
   */
  clear(name: string) {
    const life = this._get(name, false)
    if (life) {
      life.clear()
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

export default LifeData