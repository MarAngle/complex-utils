/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * 更改list列表中选择的prop属性为指定值target,存在item则item更改为itemTarget
 * @param {object[]} list
 * @param {PropertyKey} prop 属性
 * @param {*} [target] 目标值
 * @param {object} [item] 特殊对象
 * @param {*} [itemTarget] 特殊对象值
 */
function choiceProp(list: Record<PropertyKey, any>[], prop: PropertyKey, target: any = false, item: Record<PropertyKey, any>, itemTarget: any = true) {
  for (const n in list) {
    list[n][prop] = target
  }
  if (item) {
    item[prop] = itemTarget
  }
}

export default choiceProp
