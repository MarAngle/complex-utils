import { LifeList } from "../class/LifeData"
import $exportMsg from "../utils/$exportMsg"
import { consoleType } from "../utils/exportMsg"

const option = {
  env: {
    data: '',
    real: ''
  } as Record<PropertyKey, any>,
  life: new LifeList('life')
}

/**
 * 设置环境变量
 * @param {*} data 环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function setEnv(data: any, prop = 'data', unTriggerChange?: boolean) {
  option.env[prop] = data
  if (!unTriggerChange) {
    option.life.trigger('env')
  }
}

/**
 * 获取环境变量
 * @param {string} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function getEnv(prop = 'data') {
  return option.env[prop]
}

/**
 * 真实环境为目标环境下数据变更函数
 */
export function resetEnvData(fn: () => void, info?: string, type?: consoleType, env = 'development') {
  // 真实环境为目标环境时触发操作
  if (getEnv('real') === env) {
    $exportMsg(`[resetEnvData:触发目标真实环境为${env}的数据变更！][${info || '-'}]`, type)
    return fn()
  }
}

export function onEnvChange(...args: Parameters<LifeList['push']>) {
  return option.life.push(...args)
}
