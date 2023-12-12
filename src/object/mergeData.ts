import updateData, { updateDataValueType } from "./updateData"

function mergeData<R extends updateDataValueType = updateDataValueType>(targetData: R, ...originList: (updateDataValueType | undefined)[]): R {
  if (originList && originList.length > 0) {
    for (let i = 0; i < originList.length; i++) {
      const originData = originList[i]
      targetData = updateData(targetData, originData)
    }
  }
  return targetData
}

export default mergeData
