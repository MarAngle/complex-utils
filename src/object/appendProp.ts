/**
 * 指定对象/FormData添加属性
 * @param {object | FormData} data 需要添加属性的对象
 * @param {string} propName 属性名
 * @param {*} propData 属性值
 * @param {'json' | 'form'} [type] 需要添加对象的对应类型,默认为json
 */
function appendProp(data: Record<string, any> | FormData, propName: string, propData: any, type: 'json' | 'form' = 'json') {
  if (type === 'json') {
    (<Record<string, any>>data)[propName] = propData
  } else if (type === 'form') {
    (<FormData>data).set(propName, propData)
  }
}

export default appendProp
