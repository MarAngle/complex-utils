import deepCloneData from './deepCloneData'

/**
 * 深拷贝
 * @param {*} origindata 需要进行深拷贝的对象
 * @param {boolean | object} [option] 用户设置的设置项,根据此项调用不同方法
 * @returns
 */
function deepClone<T>(origindata:T, option?: boolean): T {
  if (!option) {
    return JSON.parse(JSON.stringify(origindata))
  } else {
    return deepCloneData(origindata)
  }
}

export default deepClone
