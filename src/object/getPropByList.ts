
/**
 * 根据属性列表获取对象属性
 * @param {object} value 对应对象
 * @param {string[]} propList 属性列表
 * @param {boolean} [showError] 显示错误输出
 * @returns
 */
function getPropByList(value: Record<PropertyKey, unknown>, propList: string[] | number[], showError?: boolean): unknown {
  let data = value
  try {
    for (let n = 0; n < propList.length; n++) {
      const prop = propList[n]
      if (prop || prop === 0) {
        data = data[prop] as Record<PropertyKey, unknown>
      }
    }
    return data
  } catch (e) {
    if (showError) {
      console.error(e)
    }
    return undefined
  }
}

export default getPropByList
