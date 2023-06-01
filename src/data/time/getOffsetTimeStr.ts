import config from '../../../config'
import fillString from '../string/fillString'
import getType from './../type/getType'
import getOffsetTime, { unitType, optionType, complexOptionType, dataType } from './getOffsetTime'


type formatFunctionType = (data: dataType) => any
export type formatObjectType = {
  startShow?: boolean,
  endShow?: boolean,
  middleShow?: boolean,
  fixed?: boolean,
  dict?: Record<PropertyKey, any>
}

export interface currentOptionType extends optionType {
  format?: formatFunctionType | formatObjectType
}

function offsetTimeFormat(offsetTime: dataType, start: number, end: number, option: formatObjectType = {}) {
  const startShow = option.startShow
  const endShow = option.endShow === undefined ? true : option.endShow
  const middleShow = option.middleShow === undefined ? true : option.middleShow
  const fixed = option.fixed
  const mainDict = option.dict
  let isStart = true
  let str = ''
  for (let i = end; i <= start; i++) {
    const prop = config.time.dict.list[i]
    let fg = false
    /**
     * 存在值则构建
     * 不存在值进行以下判断
     * 处于开始阶段且startShow时构建
     * startShow额外判断:当处于结束阶段且endShow时，此时全部为0，构建end
     * 处于非开始阶段且middleShow时构建
     */
    let data: number | string = offsetTime[prop] || 0
    if (data) {
      fg = true
      isStart = false
    } else if (isStart) {
      if (startShow || (i === start && endShow)) {
        fg = true
      }
    } else if (middleShow) {
      fg = true
    }
    if (fg) {
      let unit
      if (mainDict) {
        if (!fixed) {
          unit = mainDict[prop]
          data = data.toString()
        } else {
          unit = mainDict[prop].unit
          data = fillString(data, mainDict[prop].unit.fixed)
        }
      } else {
        const dict = (config.time.dict.data as any)[prop]
        unit = dict.name
        if (!fixed) {
          data = data.toString()
        } else {
          data = fillString(data, dict.code.length)
        }
      }
      const currentStr = data + unit
      str += currentStr
    }
  }
  return str
}

/**
 * 获取时间间隔字符串
 * @param {number} offset 时间间隔
 * @param {'sec' | 'min' | 'hour' | 'date'} [unit] 时间间隔单位
 * @param {object} [option] 设置项
 * @param {'sec' | 'min' | 'hour' | 'date'} [option.start] 最小单位，默认为unit
 * @param {'sec' | 'min' | 'hour' | 'date'} [option.end] 最大单位，默认为date
 * @param {function | object} [option.format] 格式化设置项或函数
 * @param {boolean} [option.format.startShow] 开始为空是否显示
 * @param {boolean} [option.format.endShow] 结束为空是否显示，默认为真
 * @param {boolean} [option.format.middleShow] 中间为空是否显示，默认为真
 * @param {boolean} [option.format.fixed] 前缀补0判断值，根据code长度或者dict中的unit.fixed补充
 * @param {object} [option.format.dict] 字典对象
 * @returns {string}
 */
function getOffsetTimeStr(offset: number, unit: unitType, option: currentOptionType = {}) {
  option.complex = true
  const offsetTime = getOffsetTime(offset, unit, (option as complexOptionType))
  const format = option.format
  const type = getType(format)
  if (type !== 'function') {
    return offsetTimeFormat(offsetTime.data, offsetTime.start, offsetTime.end, (format as formatObjectType))
  } else {
    return (format as formatFunctionType)(offsetTime.data)
  }
}

export default getOffsetTimeStr
