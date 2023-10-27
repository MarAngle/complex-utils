/* eslint-disable @typescript-eslint/no-explicit-any */
import Data from './Data'

export type LimitType = 'forbid' | 'allow'

export interface LimitInitOption {
  type?: LimitType,
  list?: any[]
}

// 限制数据格式
// 需要保证类实例传递到initOption中依然能生成一个Limit实例，保证数据的一致性
class Limit extends Data {
  static $name = 'Limit'
  type: LimitType
  list: any[]
  constructor (initOption: LimitInitOption = {}, autoType: LimitType = 'forbid') {
    super()
    this.type = initOption.type || autoType
    this.list = initOption.list || []
  }
  /**
   * 获取限制false不限制
   * @param {*} data 需要判断限制的值
   * @returns {boolean}
   */
  getLimit (data: any) {
    if (this.type == 'forbid') {
      // 存在则为限制
      return this.list.indexOf(data) > -1
    } else if (this.type == 'allow') {
      // 存在则为允许
      return this.list.indexOf(data) < 0
    } else {
      return false
    }
  }
}

export default Limit
