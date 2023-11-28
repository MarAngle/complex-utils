/**
 * 指定对象/FormData添加属性
 * @param {object | FormData} data 需要添加属性的对象
 * @param {string} propName 属性名
 * @param {*} value 属性值
 * @param {'json' | 'form'} [type] 需要添加对象的对应类型,默认为json
 */
function appendProp(data: Record<string, unknown> | FormData, propName: string, value: unknown, type: 'json' | 'form' = 'json') {
  if (type === 'json') {
    (data as Record<string, unknown>)[propName] = value
  } else if (type === 'form') {
    (data as FormData).set(propName, value as string | Blob)
  }
}

export default appendProp
