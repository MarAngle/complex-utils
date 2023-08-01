import parseTime, { allOptionType } from './parseTime'
import showTime from './showTime'

/**
 * 将Date字符串根据格式转换为Date字符串
 * @param {string} data data
 * @param {string | object} [parseOption]
 * @param {string} [parseOption.format] Date字符串格式YYYY-MM-DD HH:ss:mm
 * @param {string} [parseOption.current] 未传递参数是否按照当前时间为基准
 * @param {string} [showFormat] Date字符串格式YYYY-MM-DD HH:ss:mm
 * @param {boolean} [complex] 是否复杂数据:复杂数据会先生成Date后再进行字符串化
 * @returns {string}
 */
function formatTime(data: string | number, parseOption?: allOptionType, showFormat?: string) {
  return showTime(parseTime(data as string, parseOption), showFormat)
}

export default formatTime
