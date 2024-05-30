import config from '../../config'
/**
 * 根据字符串设置属性
 * @param {*} targetData 对应对象
 * @param {string} prop 属性字符串
 * @param {*} value 属性值
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 * @returns {boolean} 设置是否成功
 */
function setProp(targetData: Record<PropertyKey, any>, prop: string, value: unknown, useSetData?: boolean) {
  if (!useSetData) {
    targetData[prop] = value
  } else {
    config.setData(targetData, prop, value)
  }
}

export default setProp
