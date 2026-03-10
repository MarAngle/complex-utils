
/**
 * 解析数字，返回数组，第一位为整数，第二位为小数，数字格式
 * @param {*} value 需要解析的数据
 * @returns {[Number, Number]}
 */
function parseNum(value: unknown): [number, number] {
  const num = Number(value)
  if (!isFinite(num)) {
    return [0, 0]
  }
  // 将数字转换为字符串，避免浮点数精度问题
  const numStr = num.toString()
  const [integerStr, decimalStr] = numStr.split('.')
  const integer = parseInt(integerStr) || 0
  const decimal = decimalStr ? Number('0.' + decimalStr) : 0
  return [integer, num >= 0 ? decimal : -decimal]
}

export default parseNum
