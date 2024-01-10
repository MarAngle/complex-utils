// class加载
import UtilsData from './src/class/UtilsData'
import Life from './src/class/Life'
import Limit from './src/class/Limit'

// env加载
import { getEnv, setEnv, getEnvMode, setEnvMode, resetEnvData, onEnvChange } from './src/env/index'

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
import formatDataByType from './src/object/formatDataByType'
import formatTree from './src/object/formatTree'
import getDefaultValue from './src/object/getDefaultValue'
import getProp from './src/object/getProp'
import getComplexProp from './src/object/getComplexProp'
import getPropByList from './src/object/getPropByList'
import hasProp from './src/object/hasProp'
import jsonToForm from './src/object/jsonToForm'
import mergeData from './src/object/mergeData'
import orderArrayByProp from './src/object/orderArrayByProp'
import setDefaultValue from './src/object/setDefaultValue'
import setProp from './src/object/setProp'
import setComplexProp from './src/object/setComplexProp'
import setPropByList from './src/object/setPropByList'
import setPropByType from './src/object/setPropByType'
import showArrayProp from './src/object/showArrayProp'
import updateData from './src/object/updateData'

// observe加载
import observe from './src/observe/observe'
import Watcher from './src/observe/Watcher'

// reactive加载
import defineReactive from './src/reactive/defineReactive'

// string加载
import camelToLine from './src/string/camelToLine'
import fillString from './src/string/fillString'
import findTargetInStr from './src/string/findTargetInStr'
import getRandomData from './src/string/getRandomData'
import getRandomInList from './src/string/getRandomInList'
import getRandomLetter from './src/string/getRandomLetter'
import linetoCamel from './src/string/linetoCamel'
import upperCaseFirstChar from './src/string/upperCaseFirstChar'

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

// utils加载
import downloadBlob from './src/utils/downloadBlob'
import downloadFile from './src/utils/downloadFile'
import localEncodeURIComponent from './src/utils/localEncodeURIComponent'
import formatQueryUrl from './src/utils/formatQueryUrl'
import getCurrentUrl from './src/utils/getCurrentUrl'
import getLimit from './src/utils/getLimit'
import getQueryData from './src/utils/getQueryData'
import getQueryUrl from './src/utils/getQueryUrl'
import isCompleteUrl from './src/utils/isCompleteUrl'
import isOriginUrl from './src/utils/isOriginUrl'
import loadContexts from './src/utils/loadContexts'
import openAnchor from './src/utils/openAnchor'
import openWindow from './src/utils/openWindow'
import $exportMsg from './src/utils/$exportMsg'
import exportMsg from './src/utils/exportMsg'
import parseUrl from './src/utils/parseUrl'
import showJson from './src/utils/showJson'
import transformFile from './src/utils/transformFile'
import trimData from './src/utils/trimData'

// worker加载
import startWorker from './src/worker/startWorker'

export {
  // class
  UtilsData,
  Limit,
  Life,

  // env
  getEnv,
  setEnv,
  getEnvMode,
  setEnvMode,
  resetEnvData,
  onEnvChange,

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
  formatDataByType,
  formatTree,
  getDefaultValue,
  getProp,
  getComplexProp,
  getPropByList,
  hasProp,
  jsonToForm,
  mergeData,
  orderArrayByProp,
  setDefaultValue,
  setProp,
  setComplexProp,
  setPropByList,
  setPropByType,
  showArrayProp,
  updateData,
  
  // observe
  observe,
  Watcher,
  
  // reactive
  defineReactive,
  
  // string
  camelToLine,
  fillString,
  findTargetInStr,
  getRandomData,
  getRandomInList,
  getRandomLetter,
  linetoCamel,
  upperCaseFirstChar,

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

  // utils
  downloadBlob,
  downloadFile,
  localEncodeURIComponent,
  formatQueryUrl,
  getCurrentUrl,
  getLimit,
  getQueryData,
  getQueryUrl,
  isCompleteUrl,
  isOriginUrl,
  loadContexts,
  openAnchor,
  openWindow,
  $exportMsg,
  exportMsg,
  parseUrl,
  showJson,
  transformFile,
  trimData,
  
  // worker
  startWorker,
}
