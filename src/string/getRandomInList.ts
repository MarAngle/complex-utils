import getRandomNum from './../number/getRandomNum'

/**
 * 从列表中随机取值
 * @param {*} list
 * @returns {*}
 */
function getRandomInList<T>(list: T[]):T {
  return list[getRandomNum(0, list.length)]
}

export default getRandomInList
