import $exportMsg from '../utils/$exportMsg'

export type defineReactiveOptionType = {
  descriptor?: PropertyDescriptor
  get?: (value: unknown) => unknown
  set?: (val: unknown, oldVal: unknown) => unknown
}

/**
 * 创建响应式数据
 * @param {object} obj 目标对象
 * @param {string} prop 属性
 * @param {object} option 设置项
 * @param {Function} [option.get] 属性获取拦截器
 * @param {Function} [option.set] 属性设置拦截器
 * @param {object} [option.descriptor] 属性描述设置项
 * @param {boolean} [option.descriptor.configurable] 默认为真,指定对象的属性描述可配置(改变/删除)
 * @param {boolean} [option.descriptor.enumerable] 默认为真,指定对象的属性可枚举
 * @param {*} [val] 属性值
 * @returns {boolean} 是否设置成功
 */
function defineReactive(obj: Record<PropertyKey, unknown>, prop: string, option: defineReactiveOptionType, val?: unknown) {
  if (typeof obj != 'object') {
    $exportMsg('defineReactive函数错误，obj需要对象格式')
    return false
  }
  if (typeof option != 'object') {
    $exportMsg('defineReactive函数错误，option需要对象格式')
    return false
  }
  const currentDescriptor = Object.getOwnPropertyDescriptor(obj, prop)
  const getter = currentDescriptor && currentDescriptor.get
  const setter = currentDescriptor && currentDescriptor.set
  const descriptor = option.descriptor || {}
  if (descriptor.configurable === undefined) {
    descriptor.configurable = true
  }
  if (descriptor.enumerable === undefined) {
    descriptor.enumerable = true
  }
  if (getter && setter) {
    // 判断val是否传递，传递则进行赋值操作，此时不进行触发set回调
    if (arguments.length === 4) {
      setter.call(obj, val)
    }
    // getter/setter存在时
    descriptor.get = function() {
      const value = getter.call(obj)
      if (option.get) {
        option.get(value)
      }
      return value
    }
    descriptor.set = function(newVal) {
      const value = getter.call(obj)
      if (newVal !== value) {
        setter.call(obj, newVal)
        if (option.set) {
          option.set(newVal, value)
        }
      }
    }
  } else if (!getter && !setter) {
    // 判断val是否传递，为传递则取当前值作为缓存
    if (arguments.length === 3) {
      val = obj[prop]
    }
    descriptor.get = function() {
      if (option.get) {
        option.get(val)
      }
      return val
    }
    descriptor.set = function(newVal) {
      if (newVal !== val) {
        const oldVal = val
        val = newVal
        if (option.set) {
          option.set(val, oldVal)
        }
      }
    }
  } else {
    $exportMsg('defineReactive函数运行错误，obj的原descriptor配置中getter和setter未能同时配置，无法实现响应式')
    return false
  }
  return Object.defineProperty(obj, prop, descriptor)
}

export default defineReactive
