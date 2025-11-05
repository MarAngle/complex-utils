
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
  const integerPart = Math.trunc(num)
  const decimalPart = Number((num - integerPart).toPrecision(15))
  return [integerPart, decimalPart]
}

export default parseNum
