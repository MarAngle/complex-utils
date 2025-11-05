import { observeProp, observeObject } from "./Observer"

const seenObjects: Set<number> = new Set()

/**
 * 循环读取经过observe的值
 * @param {*} val 需要读取的值
 */
function traverse(val: unknown) {
  _traverse(val, seenObjects)
  seenObjects.clear()
}

/**
 * 循环读取值
 * @param {*} val 需要读取的值
 * @param {*} seen 缓存
 */
function _traverse(val: unknown, seen: Set<number>) {
  if (typeof val !== 'object' || val === null) {
    return
  }
  if ((val as observeObject)[observeProp]) {
    const depId = (val as observeObject)[observeProp].dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  for (const n in (val as observeObject)) {
    _traverse((val as observeObject)[n], seen)
  }
}

export default traverse
