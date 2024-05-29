import getComplexProp from '../../object/getComplexProp'

/**
 * 返回读取指定属性的函数
 * @param {string} prop 属性
 * @returns {function}
 */
function parsePath(prop: string) {
  return (obj: Record<PropertyKey, any>) => {
    return getComplexProp(obj, prop)
  }
}

export default parsePath
