
/**
 * 获取从start开始, 最大值为end的随机数,概率平均
 * @param {*} start 开始值
 * @param {*} end 结束值
 * @returns {number}
 */
function getRandomNum(start = 0, end = 10) {
  return start + Math.floor(Math.random() * (end - start + 1))
}

export default getRandomNum
