import isExist from './../type/isExist'

/**
 * 获取value[prop]，当value[prop]不存在时获取默认值defaultValue，注意判断条件是isExist
 * @param {*} value 值
 * @param {string} prop 属性
 * @param {*} defaultValue 默认值
 * @param {*[]} [existList] 存在列表
 * @param {*[]} [unExistList] 不存在列表
 * @returns {*}
 */
function getDefaultValue(data: undefined | null | Record<PropertyKey, unknown>, prop: PropertyKey, defaultValue?: unknown, existList?: unknown[], unExistList?: unknown[]) {
  if (data && isExist(data[prop], existList, unExistList)) {
    return data[prop]
  } else {
    return defaultValue
  }
}

export default getDefaultValue
