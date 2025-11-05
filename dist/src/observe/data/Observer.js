import createReactive from './createReactive';
import Dep from './Dep';
import observe from '../observe';
export const observeProp = Symbol('observe');
/**
 * Define a property.
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
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
];
/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
    // cache original method
    const original = arrayProto[method];
    def(arrayMethods, method, function mutator(...args) {
        const result = original.apply(this, args);
        const ob = this[observeProp];
        let inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted) {
            ob.observeArray(inserted);
        }
        // notify change
        ob.dep.notify();
        return result;
    });
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function copyAugment(target, src, keys) {
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        Object.defineProperty(target, key, {
            value: src[key],
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);
class Observer {
    constructor(value) {
        // 每个Observer实例上都存在dep
        this.dep = new Dep();
        Object.defineProperty(value, observeProp, {
            value: this,
            enumerable: false,
            writable: true
        });
        if (Array.isArray(value)) {
            copyAugment(value, arrayMethods, arrayKeys);
            this.observeArray(value);
        }
        else {
            this.walk(value);
        }
    }
    observeArray(items) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i]);
        }
    }
    /**
     * 遍历
     * @param {*} value 需要遍历的值
     */
    walk(value) {
        for (const k in value) {
            createReactive(value, k);
        }
    }
}
export default Observer;
