import _Data from "./_Data"
import { LifeData, LifeList, LifeMap, LifeValueInitOptionWithExtra } from "./LifeData"

export interface DataWithLife {
  $life: Life
  onLife: Life['on']
  emitLife: Life['emit']
  offLife: Life['off']
  triggerLife: Life['trigger']
  clearLife: Life['clear']
  resetLife?: () => void
  destroyLife?: () => void
}

export interface LifeInitOption {
  [prop: string]: undefined | {
    type?: 'map' | 'list'
    data?: LifeValueInitOptionWithExtra
  }
}

class Life extends _Data {
  static $name = 'Life'
  data: Record<string, LifeData>
  constructor (initOption: LifeInitOption = {}) {
    super()
    this.data = {}
    for (const prop in initOption) {
      const item = initOption[prop]
      if (!item) {
        this.data[prop] = new LifeList(prop)
      } else {
        if (item.type !== 'map') {
          this.data[prop] = new LifeList(prop, item.data)
        } else {
          this.data[prop] = new LifeMap(prop, item.data)
        }
      }
    }
  }
  /**
   * 获取对应生命周期对象
   * @param {string} prop 生命周期名称
   * @param {string} [build] 不存在时自动设置
   * @returns {Life}
   */
  get(prop: string): undefined | LifeData
  get(prop: string, build: undefined): undefined | LifeData
  get(prop: string, build: 'map' | 'list'): LifeData
  get(prop: string, build?: 'map' | 'list') {
    let lifeItem = this.data[prop]
    if (!lifeItem && build) {
      lifeItem = build !== 'map' ? new LifeList(prop) : new LifeMap(prop)
      this.data[prop] = lifeItem
    }
    return lifeItem
  }
  /**
   * 设置生命周期回调
   * @param {string} prop 生命周期名称
   * @param {*} data Life参数
   * @returns {string | string} id/idList
   */
  on(prop: string, ...args: Parameters<LifeData['push']>) {
    return this.get(prop, 'list').push(...args)
  }
  /**
   * 触发生命周期指定id函数
   * @param {string} prop 生命周期
   * @param {string} id 指定ID
   * @param  {...any} args 参数
   */
  emit(prop: string, ...args: Parameters<LifeData['emit']>) {
    return this.get(prop, 'list').emit(...args)
  }
  /**
   * 触发生命周期
   * @param {string} prop 生命周期
   * @param  {...any} args 参数
   */
  trigger(prop: string, ...args: Parameters<LifeData['trigger']>) {
    return this.get(prop, 'list').trigger(...args)
  }
  /**
   * 删除生命周期指定函数
   * @param {string} prop 生命周期
   * @param {string} id 指定ID
   * @returns {boolean}
   */
  off(prop: string, ...args: Parameters<LifeData['off']>): boolean {
    const life = this.get(prop)
    if (life) {
      return life.off(...args)
    } else {
      return false
    }
  }
  /**
   * 清除生命周期
   * @param {string} prop 生命周期
   */
  clear(prop: string) {
    const life = this.get(prop)
    if (life) {
      life.clear()
    }
  }
  /**
   * 重置
   */
  reset() {
    for (const prop in this.data) {
      this.clear(prop)
    }
  }
  /**
   * 销毁
   */
  destroy() {
    this.reset()
    this.data = {}
  }
}

export default Life