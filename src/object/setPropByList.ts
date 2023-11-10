import config from '../../config'

/**
 * 根据属性列表设置属性值
 * @param {object} targetData 对应对象
 * @param {string[]} propList 属性列表,父属性不存在时会创建对象
 * @param {*} value 属性值
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 */
function setPropByList(targetData: Record<PropertyKey, unknown>, propList: string[], value: unknown, useSetData?: boolean) {
  let data = targetData
  for (let n = 0; n < propList.length; n++) {
    if (n < propList.length - 1) {
      if (!data[propList[n]]) {
        data[propList[n]] = {} as Record<PropertyKey, unknown>
      }
      data = data[propList[n]] as Record<PropertyKey, unknown>
    } else {
      if (!useSetData) {
        data[propList[n]] = value
      } else {
        config.object.setData(data, propList[n], value)
      }
    }
  }
}

export default setPropByList
