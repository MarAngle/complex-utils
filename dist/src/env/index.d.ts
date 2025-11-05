import { LifeList } from "../class/LifeData";
import { consoleType } from "../utils/exportMsg";
/**
 * 设置环境变量
 * @param {*} data 环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export declare function setEnv(prop: string, data: any, unTriggerChange?: boolean): void;
/**
 * 获取环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export declare function getEnv(prop: string): any;
/**
 * 真实环境为目标环境下数据变更函数
 */
export declare function resetEnvData(fn: () => void, info?: string, type?: consoleType, env?: string): void;
export declare function onEnvChange(...args: Parameters<LifeList['push']>): string | undefined;
