import getComplexType from "../type/getComplexType"
import { _isComplex } from "../type/isComplex"

export type updateDataValueType = Record<PropertyKey, any> | unknown[]

function updateData<T extends updateDataValueType = updateDataValueType, O extends updateDataValueType = updateDataValueType>(targetData: T, originData?: O): T & O {
  if (originData !== undefined) {
    const targetDataType = getComplexType(targetData)
    const originDataType = getComplexType(originData)
    if(targetDataType !== originDataType) {
      // 目标数据与源数据类型不同时，直接赋值
      return originData as T & O
    } else if (_isComplex(targetDataType)) {
      // 目标数据与源数据类型相同时
      if (['array', 'object'].includes(targetDataType)) {
        for (const prop in originData) {
          const targetValue = targetData[prop]
          const originValue = originData[prop]
          if (targetValue === undefined) {
            // 目标数据不存在时直接使用源数据覆盖
            targetData[prop] = originValue
          } else if (targetValue !== originValue) {
            targetData[prop] = updateData(targetValue, originValue)
          }
        }
        return targetData as T & O
      } else if (targetDataType === 'map') {
        (originData as Map<any, any>).forEach((value, key) => {
          if (!(targetData as Map<any, any>).has(key)) {
            (targetData as Map<any, any>).set(key, value)
          } else {
            (targetData as Map<any, any>).set(key, updateData((targetData as Map<any, any>).get(key), value))
          }
        })
        return targetData as T & O
      } else if (targetDataType === 'set') {
        (originData as Set<any>).forEach(value => {
          if (!(targetData as Set<any>).has(value)) {
            (targetData as Set<any>).add(value)
          }
        })
        return targetData as T & O
      }
    } else {
      return originData as T & O
    }
  }
  return targetData as T & O
}

export default updateData
