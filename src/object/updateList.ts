import $exportMsg from '../utils/$exportMsg'
import getType from './../type/getType'
import updateData from './updateData'
import { optionType as updateOptionType } from './updateDataWidthOption'


type checkObject = {
  prop: string,
  equal?: boolean
}
type checkFunction = (tItem: Record<PropertyKey, any>, oItem: Record<PropertyKey, any>) => boolean

type updateFunction = (targetItem: Record<PropertyKey, any>, originItem: Record<PropertyKey, any>) => any

type destroyFunction = (targetItem: Record<PropertyKey, any>) => any

type formatFunction = (originItem: Record<PropertyKey, any>) => boolean

export type optionType = {
  check: string | checkFunction | checkObject,
  update?: updateOptionType | updateFunction,
  destroy?: boolean | destroyFunction,
  format?: boolean | formatFunction
}

/**
 * 基于originlist更新targetlist列表数据
 * @param {*} targetlist 目标列表:需要进行更新的列表
 * @param {*} originlist 源数据列表:最新数据，以此为基准对目标列表数据进行更新
 * @param {object} option 设置项
 * @param {string | object | function} option.check 相同项检查,必传,object模式下取prop值进行对比,function时通过(targetItem, originItem)返回值对比,string时作为prop取值对比
 * @param {string} [option.check.prop] prop取值对比
 * @param {boolean} [option.check.equal] 取值对比全等于判断
 * @param {object | function} [option.update] 更新数据的设置值,默认空对象,object模式下调用updateData进行更新,此为设置项,function模式下(targetItem, originItem)进行更新
 * @param {boolean | function} [option.destroy] 销毁函数,默认为真,targetlist中需要删除的数据会调用此方法，为否则不进行删除判断
 * @param {boolean | function} [option.format] 格式化函数,默认为真,targetlist中需要push的数据会调用此方法，format仅对对象数据做格式化，返回值为是否添加到数组中,为否不进行push判断
 * @returns
 */
function updateList(targetlist: Record<PropertyKey, any>[], originlist: Record<PropertyKey, any>[], option: optionType) {
  // 生成check函数
  if (!option.check) {
    $exportMsg('请传递check函数判断相同对象')
    return
  } else {
    const type = getType(option.check)
    if (type !== 'function') {
      const checkOption = type === 'string' ? { prop: option.check } : option.check
      if (!(checkOption as checkObject).equal) {
        option.check = function(tItem, oItem) {
          return tItem[(checkOption as checkObject).prop] == oItem[(checkOption as checkObject).prop]
        }
      } else {
        option.check = function(tItem, oItem) {
          return tItem[(checkOption as checkObject).prop] === oItem[(checkOption as checkObject).prop]
        }
      }
    }
  }
  // 销毁和push的函数判断
  let destroyIsFunc, formatIsFunc
  if (option.destroy || option.destroy === undefined) {
    destroyIsFunc = getType(option.destroy) === 'function'
  }
  if (option.format || option.destroy === undefined) {
    formatIsFunc = getType(option.format) === 'function'
  }
  // 更新操作设置
  let updateType = 'option'
  if (!option.update) {
    option.update = {}
  } else if (getType(option.update) === 'function') {
    updateType = 'function'
  }
  // 复制数组数据避免对原数据的修改=>仅限于数组层面
  const cacheOriginList = originlist.slice()
  const cacheTargetPropList = []
  // 相同元素修改
  for (let index = 0; index < targetlist.length; index++) {
    const targetItem = targetlist[index]
    let isFind = false
    for (let i = 0; i < cacheOriginList.length; i++) {
      const originItem = cacheOriginList[i]
      if ((option.check as checkFunction)(targetItem, originItem)) {
        if (updateType == 'function') {
          (option.update as updateFunction)(targetItem, originItem)
        } else {
          updateData(targetItem, originItem, option.update as updateOptionType)
        }
        cacheOriginList.splice(i, 1)
        isFind = true
        break
      }
    }
    if (!isFind) {
      cacheTargetPropList.push(index)
    }
  }
  // 旧元素删除判断 => 当存在未命中的index且type为total时，更新整个数据，删除未命中的数据
  if (cacheTargetPropList.length > 0 && option.destroy) {
    for (let n = cacheTargetPropList.length - 1; n >= 0; n--) {
      const index = cacheTargetPropList[n]
      const delList = targetlist.splice(index, 1)
      if (destroyIsFunc) {
        (option.destroy as destroyFunction)(delList[0])
      }
    }
  }
  // 新元素加入
  if (option.format && cacheOriginList.length > 0) {
    for (let k = 0; k < cacheOriginList.length; k++) {
      const originItem = cacheOriginList[k]
      let push = true
      if (formatIsFunc) {
        push = (option.format as formatFunction)(originItem)
      }
      if (push) {
        targetlist.push(originItem)
      }
    }
  }
}

export default updateList
