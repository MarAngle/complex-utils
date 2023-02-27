import getType from '../type/getType'
import $exportMsg from '../utils/$exportMsg'




function setObject(targetData: Record<PropertyKey, any>, defaultData: Record<PropertyKey, any>, map = new Map()) {
  if (getType(targetData) !== 'object') {
    targetData = {}
  }
  for (const n in defaultData) {
    const type = getType(defaultData[n])
    if (type === 'object') {
      targetData[n] = setObject(targetData[n], defaultData[n], map)
    } else if (type === 'array') {
      targetData[n] = setArray(targetData[n], defaultData[n], map)
    } else if (targetData[n] === undefined) {
      targetData[n] = defaultData[n]
    }
  }
  return targetData
}

function setArray(targetData: any[], defaultData: any[], map = new Map()) {
  if (getType(targetData) !== 'array') {
    targetData = []
  }
  for (const n in defaultData) {
    const type = getType(defaultData[n])
    if (type === 'object') {
      targetData[n] = setObject(targetData[n], defaultData[n], map)
    } else if (type === 'array') {
      targetData[n] = setArray(targetData[n], defaultData[n], map)
    } else if (targetData[n] === undefined) {
      targetData[n] = defaultData[n]
    }
  }
  return targetData
}

/**
 * 根据defaultData默认值设置targetData
 * @param {object} targetData 目标值
 * @param {object} defaultData 默认值
 * @returns {object}
 */
function setDataByDefault(targetData: Record<PropertyKey, any> | any[], defaultData: Record<PropertyKey, any> | any[] = {}) {
  const type = getType(defaultData)
  if (type === 'object') {
    return setObject(targetData, defaultData)
  } else if (type === 'array') {
    return setArray((targetData as any[]), (defaultData as any[]))
  } else {
    $exportMsg('setDataByDefault函数运行错误，defaultData参数仅可接收对象和数组格式！')
    return targetData
  }
}

export default setDataByDefault
