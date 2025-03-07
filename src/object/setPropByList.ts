import config from '../../config'

/**
 * 根据属性列表设置属性值
 * @param {object} data 对应对象
 * @param {string[]} propList 属性列表,父属性不存在时会创建对象
 * @param {*} value 属性值
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 */
function setPropByList(data: Record<PropertyKey, any>, propList: PropertyKey[], value: unknown, useSetData?: boolean) {
  let tempData = data
  try {
    for (let n = 0; n < propList.length; n++) {
      const prop = propList[n]
      if (n < propList.length - 1) {
        if (!tempData[prop]) {
          tempData[prop] = {} as Record<PropertyKey, any>
        }
        tempData = tempData[prop] as Record<PropertyKey, any>
      } else {
        if (!useSetData) {
          tempData[prop] = value
        } else {
          config.setData(tempData, prop, value)
        }
      }
    }
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export default setPropByList
