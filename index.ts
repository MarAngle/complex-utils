// type加载
import checkComplex from './src/type/checkComplex'
import getTag from './src/type/getTag'
import getType from './src/type/getType'
import getComplexType from './src/type/getComplexType'
import isArray from './src/type/isArray'
import isBlob from './src/type/isBlob'
import isComplex from './src/type/isComplex'
import isDate from './src/type/isDate'
import isEmpty from './src/type/isEmpty'
import isEmptyArray from './src/type/isEmptyArray'
import isEmptyObject from './src/type/isEmptyObject'
import isError from './src/type/isError'
import isExist from './src/type/isExist'
import isFile from './src/type/isFile'
import isPromise from './src/type/isPromise'
import isRegExp from './src/type/isRegExp'
import isSymbol from './src/type/isSymbol'
import isSame from './src/type/isSame'

// function加载
import triggerFunction from './src/function/triggerFunction'
import triggerPromise from './src/function/triggerPromise'
import debounce from './src/function/debounce'
import throttle from './src/function/throttle'

// local加载
import { setLocalData, getLocalData, removeLocalData, setSessionLocalData, getSessionLocalData, removeSessionLocalData } from './src/local/index'

// number加载
import formatNum from './src/number/formatNum'
import getDecimal from './src/number/getDecimal'
import getInteger from './src/number/getInteger'
import getNum from './src/number/getNum'
import getRandomNum from './src/number/getRandomNum'
import parseNum from './src/number/parseNum'

// object加载
import appendProp from './src/object/appendProp'
import arrayClearOther from './src/object/arrayClearOther'
import choiceProp from './src/object/choiceProp'
import clearArray from './src/object/clearArray'
import deepClone from './src/object/deepClone'
import deepCloneData from './src/object/deepCloneData'
import deepCloneDataWithOption from './src/object/deepCloneDataWithOption'
import defineProperty from './src/object/defineProperty'
import formatDataByType from './src/object/formatDataByType'
import formatList from './src/object/formatList'
import formatTree from './src/object/formatTree'
import getDefaultData from './src/object/getDefaultData'
import getProp from './src/object/getProp'
import getPropByList from './src/object/getPropByList'
import hasProp from './src/object/hasProp'
import jsonToForm from './src/object/jsonToForm'
import mergeData from './src/object/mergeData'
import orderArrayByProp from './src/object/orderArrayByProp'
import setDataByDefault from './src/object/setDataByDefault'
import setDefaultData from './src/object/setDefaultData'
import setProp from './src/object/setProp'
import setPropByList from './src/object/setPropByList'
import setPropByType from './src/object/setPropByType'
import showArrayProp from './src/object/showArrayProp'
import updateData from './src/object/updateData'
import updateDataWidthOption from './src/object/updateDataWidthOption'
import updateList from './src/object/updateList'

export {
  // type
  checkComplex,
  getTag,
  getType,
  getComplexType,
  isArray,
  isBlob,
  isComplex,
  isDate,
  isEmpty,
  isEmptyArray,
  isEmptyObject,
  isError,
  isExist,
  isFile,
  isPromise,
  isRegExp,
  isSymbol,
  isSame,
  // function
  triggerFunction,
  triggerPromise,
  debounce,
  throttle,
  // local
  setLocalData,
  getLocalData,
  removeLocalData,
  setSessionLocalData,
  getSessionLocalData,
  removeSessionLocalData,
  // number
  formatNum,
  getDecimal,
  getInteger,
  getNum,
  getRandomNum,
  parseNum,

  // object
  appendProp,
  arrayClearOther,
  choiceProp,
  clearArray,
  deepClone,
  deepCloneData,
  deepCloneDataWithOption,
  defineProperty,
  formatDataByType,
  formatList,
  formatTree,
  getDefaultData,
  getProp,
  getPropByList,
  hasProp,
  jsonToForm,
  mergeData,
  orderArrayByProp,
  setDataByDefault,
  setDefaultData,
  setProp,
  setPropByList,
  setPropByType,
  showArrayProp,
  updateData,
  updateDataWidthOption,
  updateList,
}
