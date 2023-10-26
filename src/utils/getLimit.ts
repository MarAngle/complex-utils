import Limit, { LimitInitOption, LimitType } from '../class/Limit'

/**
 * 获取限制对象
 * @param {'forbid' | 'allow'} [option.type] limit生成参数-type
 * @param {string[]} [option.list] limit生成参数-list
 * @param {'forbid' | 'allow'} autoType option.type不存在时的默认值
 * @returns {Limit}
 */
function getLimit(option?: LimitInitOption, autoType?: LimitType) {
  return new Limit(option, autoType)
}

export default getLimit
