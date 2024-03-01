import getType from "../type/getType"
import isComplex from "../type/isComplex"

export type updateDataValueType = Record<PropertyKey, unknown> | unknown[]

function updateData<T extends updateDataValueType = updateDataValueType, O extends updateDataValueType = updateDataValueType>(targetData: T, originData?: O): T & O {
  if (originData) {
    for (const prop in originData) {
      if (targetData[prop] === undefined) {
        // 目标数据不存在时直接使用源数据覆盖
        targetData[prop] = originData[prop]
      } else if (targetData[prop] !== originData[prop]) {
        // 目标数据全等于则进一步判断，否则不做操作
        const targetType = getType(targetData[prop])
        const originType = getType(originData[prop])
        if (targetType !== originType) {
          // 目标数据与源数据类型不同时，直接赋值
          targetData[prop] = originData[prop]
        } else {
          // 目标数据与源数据类型相同时
          if (isComplex(originType)) {
            // 同为复杂数据则通过updateData更新
            updateData(targetData[prop] as updateDataValueType, originData[prop] as updateDataValueType)
          } else {
            // 不为复杂数据则直接赋值
            targetData[prop] = originData[prop]
          }
        }
      }
    }
  }
  return targetData as T & O
}

export default updateData
