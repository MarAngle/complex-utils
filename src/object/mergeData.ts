import updateData, { updateDataValueType } from "./updateData"

function mergeData<T extends updateDataValueType = updateDataValueType, O extends updateDataValueType = updateDataValueType>(targetData: T, ...originList: O[]): T & O {
  if (originList && originList.length > 0) {
    for (let i = 0; i < originList.length; i++) {
      const originData = originList[i]
      targetData = updateData(targetData, originData)
    }
  }
  return targetData as T & O
}

export default mergeData
