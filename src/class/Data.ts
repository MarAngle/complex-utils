import exportMsg, { consoleType, exportOption } from '../utils/exportMsg'

class Data {
  static $name = 'Data'
  /**
   * 获取类实例名称
   * @returns {string}
   */
  $getConstructorName(): string {
    return (this.constructor as any).$name
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
  $exportMsg(content: string, type: consoleType = 'error', option?: exportOption) {
    exportMsg(this.$createMsg(content), type, option)
  }
  /**
   * toString方法改写
   * @returns {string}
   */
  toString() {
    return this.$getName()
  }
}

export default Data
