import createReactive from './createReactive'
import Dep from './Dep'
import observe from '../observe'

export const oberveProp = Symbol('oberve')

export type observeObject = {
  [oberveProp]: Observer
  [prop: PropertyKey]: unknown
}

/**
 * Define a property.
 */
 function def (obj: Record<PropertyKey, unknown>, key: string, val: unknown, enumerable?: boolean) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
] as const 

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method];
  def(arrayMethods, method, function mutator (this: Observer) {
    const args = []
    let len = arguments.length;
    while (len--) {
      // eslint-disable-next-line prefer-rest-params
      args[ len ] = arguments[ len ]
    }
    const result = original.apply(this, args);
    const ob = this[oberveProp];
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  })
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function copyAugment (target: unknown[], src: any, keys: string[]) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    Object.defineProperty(target, key, {
      value: src[key],
      enumerable: false,
      writable: true,
      configurable: true
    })
  }
}

const arrayKeys = Object.getOwnPropertyNames(arrayMethods);

class Observer {
  dep: Dep
  [oberveProp]!: Observer
  constructor(value: Record<PropertyKey, unknown>) {
    // 每个Observer实例上都存在dep
    this.dep = new Dep()
    Object.defineProperty(value, oberveProp, {
      value: this,
      enumerable: false,
      writable: true
    })
    if (Array.isArray(value)) {
      copyAugment(value, arrayMethods, arrayKeys)
      this.observeArray(value)
    } else {
      this.walk(value)
    }
  }
  observeArray(items: unknown[]) {
    for (let i = 0, l = items.length; i < l; i++) {
      observe(items[i]);
    }
  }
  /**
   * 遍历
   * @param {*} value 需要遍历的值
   */
  walk(value: Record<PropertyKey, unknown>) {
    for (const k in value) {
      createReactive(value, k)
    }
  }
}

export default Observer
