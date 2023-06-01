import isPromise from '../type/isPromise'

export type promiseAllFinishedResType<D = any> = {
  status: 'success' | 'fail',
  data: D
}

/**
 * Promise.allFinished
 * @param {Promise[]} list Promise列表
 * @returns {Promise}
 */
function promiseAllFinished(list: Promise<any>[]): Promise<promiseAllFinishedResType[]> {
  return new Promise((resolve) => {
    let remainder: number
    const resList: promiseAllFinishedResType[] = []
    /**
     * next
     * @param {number} remainder
     * @param {*} resolve
     * @param {*[]} resList
     * @param {number} index
     * @param {*} res
     */
    function next(index: number, res: promiseAllFinishedResType) {
      resList[index] = res
      remainder--
      if (remainder == 0) {
        resolve(resList)
      }
    }
    if (list && list.length > 0) {
      const size = list.length
      remainder = size
      for (let n = 0; n < size; n++) {
        const item = list[n]
        if (isPromise(item)) {
          item.then(res => {
            next(n, { status: 'success', data: res })
          }, err => {
            next(n, { status: 'fail', data: err })
          })
        } else {
          next(n, { status: 'fail', data: undefined })
        }
      }
    } else {
      resolve(resList)
    }
  })
}

export default promiseAllFinished
