import exportMsg, { consoleType } from '../utils/exportMsg'

export type formatConfigType = {
  name?: string // 模块名称
  level: number // 响应式等级
  recommend: boolean // 是否推荐响应式
  module?: boolean // 是否为模块
  [prop: string]: undefined | boolean | string | number
}

class _Data {
  static $name = '_Data'
  static $formatConfig: formatConfigType = { level: 10, recommend: false } // 不通过通用格式化函数格式化实例判断值
  static $format: (null | ((data: _Data, formatOption: formatConfigType) => _Data)) = null // 格式化函数格式化实例,constructor指向最终的类，通过原型链逻辑匹配
  constructor() {
    const $constructor = (this.constructor as typeof _Data)
    if ($constructor.$format) {
      return $constructor.$format(this, $constructor.$formatConfig)
    }
  }
  /**
   * 获取类实例名称
   */
  protected _getConstructorName(): string {
    return (this.constructor as typeof _Data).$name
  }
  protected _getName() {
    return this._getConstructorName()
  }
  /**
   * 创建输出信息
   */
  _createMsg (content: string) {
    return `${this._getName()}:${content}`
  }
  /**
   * 信息输出
   */
  $exportMsg(content: string, type: consoleType = 'error') {
    exportMsg(this._createMsg(content), type)
  }
  /**
   * toString方法改写
   * @returns {string}
   */
  toString() {
    return this._getName()
  }
}

export default _Data
