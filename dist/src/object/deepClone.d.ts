/**
 * 深拷贝对象。
 * 默认使用 `JSON.parse(JSON.stringify(data))`，性能较高，但有以下限制：
 * - 无法拷贝 `undefined`, `Symbol`, 函数。
 * - 无法处理循环引用。
 * - `Date` 对象会转为字符串。
 *
 * @param data 需要进行深拷贝的对象。
 * @param {boolean} [useComplex=false] - 设置为 `true` 来使用更强大但稍慢的拷贝方法，该方法支持循环引用、Map、Set、原型链等复杂情况。
 * @returns
 */
declare function deepClone<T>(data: T, useComplex?: boolean): T;
export default deepClone;
