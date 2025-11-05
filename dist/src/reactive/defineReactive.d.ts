export type defineReactiveOptionType = {
    descriptor?: PropertyDescriptor;
    get?: (value: unknown) => unknown;
    set?: (val: unknown, oldVal: unknown) => unknown;
};
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
declare function defineReactive(obj: Record<PropertyKey, any>, prop: PropertyKey, option: defineReactiveOptionType, val?: unknown): false | Record<PropertyKey, any>;
export default defineReactive;
