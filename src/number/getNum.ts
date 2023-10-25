import formatNum from './formatNum'

/**
 * 格式化数字
 * @param {string | number} originNum 数据
 * @param {'origin' | 'round' | 'floor' | 'ceil'} type 格式化类型
 * @param {number} radix 保留小数点位数
 * @param {boolean} NANZERO NAN是否格式化为0
 * @returns {number}
 */

export type mathType = 'round' | 'floor' | 'ceil'

function getNum(originNum: any, type: 'origin' | mathType = 'round', radix = 2, NANZERO = false) {
  let value = formatNum(originNum)
  if (isNaN(value) && NANZERO) {
    console.log('NAN is change to zero')
    value = 0
  } else if (type != 'origin' && Math.round(value) !== value) { // 如果是小数
    const rate = Math.pow(10, radix)
    value = Math[type](value * rate) / rate
  }
  return value
}

export default getNum
