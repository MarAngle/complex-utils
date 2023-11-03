import Observer, { oberveProp, observeObject } from "./data/Observer"

/**
 * 双向绑定原理
 * 通过object.defineProperty，实现对属性get/set的定义
 * 属性在get时判断Dep.target存在则收集依赖，将对应属性的依赖对象push进watcher的依赖中，对应watcher也push进当前属性的依赖订阅数组中
 * set时通知更新，遍历当前属性的依赖的订阅数组，调用watcher的update方法通知更新
 * watcher通过get方法获取数据
 * 此时将Dep.target(全局唯一变量)设置为自身，然后获取对应的属性，触发get
 */

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * 将value设置为观察者数据
 * @param {*} value 需要设置的数据
 * @returns {Observer}
 */
function observe(value: unknown) {
  if (typeof value !== 'object' || value === null) {
    return
  }
  let ob: Observer
  if (hasOwnProperty.call(value, oberveProp) && (value as observeObject)[oberveProp] instanceof Observer) {
    ob = (value as observeObject)[oberveProp]
  } else {
    ob = new Observer(value as Record<PropertyKey, unknown>)
  }
  return ob
}

export default observe
