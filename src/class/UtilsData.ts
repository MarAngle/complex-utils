import exportMsg, { consoleType } from '../utils/exportMsg'

class UtilsData {
  static $name = 'UtilsData'
  static $formatConfig: unknown = undefined // 不通过通用格式化函数格式化实例判断值
  static $format: (null | ((data: UtilsData, formatOption: unknown) => UtilsData)) = null // 格式化函数格式化实例,constructor指向最终的类，通过原型链逻辑匹配
  constructor() {
    const $constructor = (this.constructor as typeof UtilsData)
    if ($constructor.$format) {
      return $constructor.$format(this, $constructor.$formatConfig)
    }
  }
  /**
   * 获取类实例名称
   * @returns {string}
   */
  $getConstructorName(): string {
    return (this.constructor as typeof UtilsData).$name
  }
  $getName() {
    return this.$getConstructorName()
  }
  /**
   * 创建输出信息
   * @param {string} content 需要输出的信息
   * @returns {string}
   */
  $createMsg (content: string) {
    return `${this.$getName()}:${content}`
  }
  /**
   * 信息输出
   * @param {string} content 信息
   * @param {string} type 类型
   * @param {object} [option] 额外信息
   */
  $exportMsg(content: string, type: consoleType = 'error') {
    exportMsg(this.$createMsg(content), type)
  }
  /**
   * toString方法改写
   * @returns {string}
   */
  toString() {
    return this.$getName()
  }
}

export default UtilsData
