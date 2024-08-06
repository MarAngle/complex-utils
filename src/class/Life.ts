import _Data from "./_Data"
import { LifeData, LifeValueInitOptionWithExtra } from "./LifeData"

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
  [prop: string]: LifeValueInitOptionWithExtra
}

class Life extends _Data {
  static $name = 'Life'
  data: Record<string, LifeData>
  constructor (initOption: LifeInitOption = {}) {
    super()
    this.data = {}
    for (const n in initOption) {
      const item = initOption[n]
      this.on(n, item)
    }
  }
  /**
   * 获取对应生命周期对象
   * @param {string} name 生命周期名称
   * @param {boolean} [build = true] 不存在时自动设置
   * @returns {Life}
   */
  get(name: string): undefined | LifeData
  get(name: string, build: false | undefined): undefined | LifeData
  get(name: string, build: true): LifeData
  get(name: string, build?: boolean) {
    let lifeItem = this.data.get(name)
    if (!lifeItem && build) {
      lifeItem = new LifeData(name)
      this.data.set(name, lifeItem)
    }
    return lifeItem
  }
  /**
   * 设置生命周期回调
   * @param {string} name 生命周期名称
   * @param {*} data Life参数
   * @returns {string | string} id/idList
   */
  on(name: string, ...args: Parameters<LifeData['push']>) {
    return this.get(name, true).push(...args)
  }
  /**
   * 触发生命周期指定id函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @param  {...any} args 参数
   */
  emit(name: string, ...args: Parameters<LifeData['emit']>) {
    return this.get(name, true).emit(...args)
  }
  /**
   * 触发生命周期
   * @param {string} name 生命周期
   * @param  {...any} args 参数
   */
  trigger(name: string, ...args: Parameters<LifeData['trigger']>) {
    return this.get(name, true).trigger(...args)
  }
  /**
   * 删除生命周期指定函数
   * @param {string} name 生命周期
   * @param {string} id 指定ID
   * @returns {boolean}
   */
  off(name: string, ...args: Parameters<LifeData['off']>): boolean {
    const life = this.get(name, false)
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
    const life = this.get(name, false)
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

export default Life