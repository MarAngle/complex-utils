import getType from './getType'
import isEmptyArray from './isEmptyArray'
import isEmptyObject from './isEmptyObject'

type emptyCheckList = 'object' | 'array'

const dict = {
  object: isEmptyObject,
  array: isEmptyArray
}

/**
 * 是否为空
 * @param {*} value 需要判断的值
 * @param {string[]} [checkList] 需要深入判断的数据类型，对象和数组可选
 * @returns {boolean} value is Empty
 */
function isEmpty(value: unknown, checkList?: emptyCheckList[]) {
  if (!value) {
    // undefined null '' 0 false
    return true
  } else {
    if (!checkList) {
      checkList = ['object', 'array']
    }
    const type = getType(value)
    if (checkList.indexOf(type as emptyCheckList) > -1 && dict[type as emptyCheckList]) {
      return dict[type as emptyCheckList](value, type)
    } else {
      return false
    }
  }
}

export default isEmpty
