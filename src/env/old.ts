import $exportMsg from "../utils/$exportMsg"

type changeDataType = () => void
interface changeObjectType {
  data: changeDataType
  once?: boolean
  immediate?: boolean
}
type changeType = changeDataType | changeObjectType

type optionType = {
  env: {
    [prop: PropertyKey]: string | undefined
  },
  mode: {
    [prop: PropertyKey]: any
  },
  canUse: {
    [prop: PropertyKey]: boolean
  },
  change: changeObjectType[]
}

const option: optionType = {
  env: {
    data: process.env.NODE_ENV,
    real: process.env.NODE_ENV
  },
  mode: {
    data: '',
    real: ''
  },
  canUse: {
    Worker: false,
    Proxy: false,
    Symbol: false,
    MutationObserver: false
  },
  change: []
}

/**
 * 设置环境变量
 * @param {*} data 环境变量
 * @param {'data' | 'real'} prop 环境变量属性值,data为当前环境变量,real为当前真实的环境变量
 */
export function setEnv(data: string, prop = 'data', unTriggerChange?: boolean) {
  option.env[prop] = data
  if (!unTriggerChange) {
    triggerEnvChange()
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
    triggerEnvChange()
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

export function onEnvChange(change: changeType) {
  if (typeof change === 'function') {
    option.change.push({
      data: change
    })
  } else {
    if (change.immediate && change.once) {
      change.data()
      return
    } else if (change.immediate) {
      change.data()
    }
    option.change.push(change)
  }
}

export function triggerEnvChange() {
  for (let i = 0; i < option.change.length; i++) {
    const change = option.change[i]
    change.data()
    if (change.once) {
      option.change.splice(i, 1)
      i--
    }
  }
}

/**
 * 设置全局属性是否可用
 * @param {string} prop 属性
 * @param {boolean} data 可用
 */
export function setCanUse(prop: string, data: boolean) {
  option.canUse[prop] = data
}

/**
 * 判断prop是否可用
 * @param {string} prop
 * @returns {boolean}
 */
export function getCanUse(prop: string): boolean {
  return option.canUse[prop]
}

/**
 * 检查全局函数是否可用
 * @param {string} Name 全局函数名
 * @param {string} prop 需要挂载的属性
 * @param {boolean} [showError] 是否显示错误信息
 */
export function checkUseItem(Name: string, prop: string, showError?: boolean) {
  try {
    if ((window as any)[Name]) {
      setCanUse(prop || Name, true)
    }
  } catch (e) {
    if (showError) {
      console.error(e)
    }
  }
}

/**
 * 检查可用
 */
function checkUse() {
  const showError = false
  checkUseItem('Worker', 'Worker', showError)
  checkUseItem('Proxy', 'Proxy', showError)
  checkUseItem('Symbol', 'Symbol', showError)
  checkUseItem('MutationObserver', 'MutationObserver', showError)
}

checkUse()
