import { LifeData } from "../class/Life"
import $exportMsg from "../utils/$exportMsg"

declare const process: {
  env?: {
    NODE_ENV?: string
  }
}

const option = {
  env: {
    data: '',
    real: ''
  } as Record<PropertyKey, string | undefined>,
  mode: {
    data: '',
    real: ''
  } as Record<PropertyKey, any>,
  change: new LifeData('change')
}

if (process && process.env && process.env.NODE_ENV) {
  option.env.data = process.env.NODE_ENV
  option.env.real = process.env.NODE_ENV
}

/**
 * 设置环境变量
 * @param {*} data 环境变量
 * @param {'data' | 'real'} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function setEnv(data: string, prop = 'data', unTriggerChange?: boolean) {
  option.env[prop] = data
  if (!unTriggerChange) {
    option.change.trigger('env')
  }
}

/**
 * 获取环境变量
 * @param {'data' | 'real'} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function getEnv(prop = 'data') {
  return option.env[prop]
}

/**
 * 设置环境数据
 * @param {*} data 环境数据
 * @param {'data' | 'real'} prop 环境数据属性值,data为当前环境数据,real为当前真实的环境数据
 */
export function setEnvMode(data: any, prop = 'data', unTriggerChange?: boolean) {
  option.mode[prop] = data
  if (!unTriggerChange) {
    option.change.trigger('mode')
  }
}

/**
 * 获取环境数据
 * @param {'data' | 'real'} prop 环境数据属性值,data为当前环境数据,real为当前真实的环境数据
 */
export function getEnvMode(prop = 'data') {
  return option.mode[prop]
}

/**
 * 真实环境为目标环境下数据变更函数
 */
export function resetEnvData(fn: (...args:any[]) => any, { env, info, args }: { env?: string,  info?: string, args?: any[] } = {}) {
  // 真实环境为目标环境时触发操作
  if (!env) {
    env = 'development'
  }
  if (getEnv('real') === env) {
    $exportMsg(`resetEnvData:当前真实环境为${getEnv('real')}，触发目标环境为${env}的函数！`)
    if (info) {
      $exportMsg(info)
    }
    if (fn) {
      if (args) {
        return fn(...args)
      } else {
        return fn()
      }
    }
  }
}

export function onEnvChange(...args: Parameters<LifeData['push']>) {
  option.change.push(...args)
}
