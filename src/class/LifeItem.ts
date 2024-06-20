import _Data from "./_Data"

let lifeId = 0
function getLifeId () {
  lifeId++
  return lifeId.toString()
}

type lifeFunction = (lifeItem: LifeData, ...args: any[]) => any

export interface LifeDataInitOption {
  id?: string
  data: lifeFunction
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class LifeData {
  id: string
  data: lifeFunction
  destroy: () => void
  constructor(initOption: LifeDataInitOption, life: LifeItem) {
    this.id = initOption.id || getLifeId()
    this.data = initOption.data
    this.destroy = () => {
      life.off(this.id)
    }
  }
}

export interface LifeDataInitOptionWithExtra extends LifeDataInitOption {
  index?: number
  replace?: boolean
  immediate?: boolean
}

export class LifeItem extends _Data {
  static $name = 'LifeItem'
  name: string
  data: Map<string, LifeData>
  constructor(name: string, data?: LifeDataInitOptionWithExtra) {
    super()
    this.name = name
    this.data = new Map()
    if (data) {
      this.push(data)
    }
  }
  push(data: LifeDataInitOptionWithExtra) {
    if (data.id && this.data.has(data.id) && !data.replace) {
      this.$exportMsg(`存在当前回调:${data.id}`)
    } else {
      const lifeItem = new LifeData(data, this)
      if (data.index == undefined) {
        this.data.set(lifeItem.id, lifeItem)
      } else {
        const size = this.data.size
        if (data.index < size) {
          const list: LifeData[] = []
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
  _getName() {
    return `${super._getName()}-生命周期:${this.name}`
  }
}

export default LifeItem
