import { LifeList } from "../class/LifeData";
import $exportMsg from "../utils/$exportMsg";
const option = {
    env: {
        data: '',
        real: ''
    },
    life: new LifeList('life')
};
/**
 * 设置环境变量
 * @param {*} data 环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function setEnv(prop, data, unTriggerChange) {
    option.env[prop] = data;
    if (!unTriggerChange) {
        option.life.trigger('env', prop, data);
    }
}
/**
 * 获取环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function getEnv(prop) {
    return option.env[prop];
}
/**
 * 真实环境为目标环境下数据变更函数
 */
export function resetEnvData(fn, info, type, env = 'development') {
    // 真实环境为目标环境时触发操作
    if (getEnv('real') === env) {
        $exportMsg(`[resetEnvData:触发目标真实环境为${env}的数据变更！][${info || '-'}]`, type);
        return fn();
    }
}
export function onEnvChange(...args) {
    return option.life.push(...args);
}
