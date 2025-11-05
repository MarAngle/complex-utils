/**
 * 触发可能存在的函数
 * @param {*} func 函数
 * @param  {...any} args func参数
 * @returns 是否触发
 */
declare function triggerFunction<ARGS extends any[] = any[], RES = unknown>(func?: (...args: ARGS) => RES, ...args: ARGS): boolean;
export default triggerFunction;
