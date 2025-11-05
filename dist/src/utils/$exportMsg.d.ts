import { consoleType } from './exportMsg';
/**
 * complex-plugin错误信息输出函数
 * @param {string} msg 错误信息内容
 * @param {'error' | 'warn' | 'log'} [type = error] 信息提示类型
 */
declare function $exportMsg(msg: string, type?: consoleType): void;
export default $exportMsg;
