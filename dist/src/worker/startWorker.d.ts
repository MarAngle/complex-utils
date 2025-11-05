export type funcType<A extends any[] = any[], R extends Promise<unknown> = Promise<unknown>> = (...args: A) => R;
export type optionType<A extends any[] = any[], R extends Promise<unknown> = Promise<unknown>> = {
    func: funcType<A, R>;
    args: A;
    option?: WorkerOptions;
    log?: boolean;
};
/**
 * 在 Web Worker 中异步执行一个函数。如果浏览器不支持 Worker，则在主线程中直接执行。
 *
 * @warning **重要限制**: 传入的 `func` 函数必须是**完全自包含的**。
 * 由于它通过 `toString()` 进行序列化，它无法访问其外部作用域中的任何变量（闭包），
 * 也无法访问任何导入的模块。所有逻辑必须在函数内部定义。
 *
 * @example
 * // ✅ 正确: 自包含的函数
 * startWorker({
 *   func: (a, b) => {
 *     // 复杂的计算...
 *     return Promise.resolve(a + b);
 *   },
 *   args: [10, 20]
 * }).then(result => console.log(result)); // 30
 *
 * // ❌ 错误: 依赖外部变量
 * const externalVar = 10;
 * startWorker({
 *   func: (a) => Promise.resolve(a + externalVar), // externalVar 在 worker 中是 undefined
 *   args: [5]
 * });
 *
 * @param {object} option 设置项
 * @param {function} option.func 需要在 Worker 中执行的函数。**必须是自包含的，且必须返回一个 Promise**。
 * @param {*[]} option.args 传递给函数的参数列表。
 * @param {object} [option.option] 标准的 Worker 构造函数选项。
 * @param {boolean} [option.log] 是否在控制台打印 Worker 的生命周期日志。
 * @returns {Promise<Awaited<R>>} 一个 Promise，它会 resolve 函数的 Promise 解析值，或 reject 错误。
 */
declare function startWorker<A extends any[], R extends Promise<unknown>>({ func, args, option, log }: optionType<A, R>): Promise<Awaited<R>>;
export default startWorker;
