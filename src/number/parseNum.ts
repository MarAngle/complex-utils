
/**
 * 解析数字，返回数组，第一位为整数，第二位为小数，数字格式
 * @param {*} value 需要解析的数据
 * @returns {[Number, Number]}
 */
function parseNum(value: unknown): [number, number] {
  if (value) {
    const valueStr = typeof value === 'string' ? value : value.toString()
    const valueStrList = valueStr.split('.')
    const integerStr = valueStrList.shift()
    const decimalStr = valueStrList.join('')
    return [integerStr ? Number(integerStr) : 0, decimalStr ? Number('0.' + decimalStr) : 0]
  } else {
    return [0, 0]
  }
}

export default parseNum
