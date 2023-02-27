// type加载
import checkComplex from './src/data/type/checkComplex'
import getTag from './src/data/type/getTag'
import getType from './src/data/type/getType'
import isArray from './src/data/type/isArray'
import isBlob from './src/data/type/isBlob'
import isComplex from './src/data/type/isComplex'
import isDate from './src/data/type/isDate'
import isEmpty from './src/data/type/isEmpty'
import isEmptyArray from './src/data/type/isEmptyArray'
import isEmptyObject from './src/data/type/isEmptyObject'
import isError from './src/data/type/isError'
import isExist from './src/data/type/isExist'
import isFile from './src/data/type/isFile'
import isPromise from './src/data/type/isPromise'
import isRegExp from './src/data/type/isRegExp'
import isSymbol from './src/data/type/isSymbol'
import isSame from './src/data/type/isSame'
// type加载完成
// number加载
import formatNum from './src/data/number/formatNum'
import getDecimal from './src/data/number/getDecimal'
import getInteger from './src/data/number/getInteger'
import getNum from './src/data/number/getNum'
import getRandomNum from './src/data/number/getRandomNum'
import parseNum from './src/data/number/parseNum'
// number加载完成
// string加载
import fillString from './src/data/string/fillString'
import findTargetInStr from './src/data/string/findTargetInStr'
import getRandomData from './src/data/string/getRandomData'
import getRandomInList from './src/data/string/getRandomInList'
import getRandomLetter from './src/data/string/getRandomLetter'
import strCodeNum from './src/data/string/strCodeNum'
// string加载完成
// object加载
import appendProp from './src/data/object/appendProp'
import arrayClearOther from './src/data/object/arrayClearOther'
import choiceProp from './src/data/object/choiceProp'
import clearArray from './src/data/object/clearArray'
import deepClone from './src/data/object/deepClone'
import deepCloneData from './src/data/object/deepCloneData'
import deepCloneDataWithOption from './src/data/object/deepCloneDataWithOption'
import defineProperty from './src/data/object/defineProperty'
import formatDataByType from './src/data/object/formatDataByType'
import formatList from './src/data/object/formatList'
import formatTree from './src/data/object/formatTree'
import getDefaultData from './src/data/object/getDefaultData'
import getProp from './src/data/object/getProp'
import getPropByList from './src/data/object/getPropByList'
import hasProp from './src/data/object/hasProp'
import jsonToForm from './src/data/object/jsonToForm'
import mergeData from './src/data/object/mergeData'
import orderArrayByProp from './src/data/object/orderArrayByProp'
import setDataByDefault from './src/data/object/setDataByDefault'
import setDefaultData from './src/data/object/setDefaultData'
import setProp from './src/data/object/setProp'
import setPropByList from './src/data/object/setPropByList'
import setPropByType from './src/data/object/setPropByType'
import showArrayProp from './src/data/object/showArrayProp'
import updateData from './src/data/object/updateData'
import updateDataWidthOption from './src/data/object/updateDataWidthOption'
import updateList from './src/data/object/updateList'
// object加载完成
// reactive加载
import defineReactive from './src/data/reactive/defineReactive'
import defineWatch from './src/data/reactive/defineWatch'
// reactive加载
// observe加载
import observe from './src/data/observe/observe'
import Watcher from './src/data/observe/Watcher'
// observe加载
// function加载
import runFunction from './src/data/function/runFunction'
import triggerFunction from './src/data/function/triggerFunction'
import triggerPromise from './src/data/function/triggerPromise'
import debounce from './src/data/function/debounce'
import throttle from './src/data/function/throttle'
// function加载
// utils加载
import downloadBlob from './src/data/utils/downloadBlob'
import downloadFile from './src/data/utils/downloadFile'
import downloadFileByAnchor from './src/data/utils/downloadFileByAnchor'
import localEncodeURIComponent from './src/data/utils/localEncodeURIComponent'
import formatQueryUrl from './src/data/utils/formatQueryUrl'
import getCurrentUrl from './src/data/utils/getCurrentUrl'
import getLimitData from './src/data/utils/getLimitData'
import getQueryData from './src/data/utils/getQueryData'
import getQueryUrl from './src/data/utils/getQueryUrl'
import isOriginUrl from './src/data/utils/isOriginUrl'
import loadContents from './src/data/utils/loadContents'
import openAnchor from './src/data/utils/openAnchor'
import openWindow from './src/data/utils/openWindow'
import $exportMsg from './src/data/utils/$exportMsg'
import exportMsg from './src/data/utils/exportMsg'
import parseUrl from './src/data/utils/parseUrl'
import promiseAllFinished from './src/data/utils/promiseAllFinished'
import showJson from './src/data/utils/showJson'
import transformFile from './src/data/utils/transformFile'
import trimData from './src/data/utils/trimData'
// utils加载完成
// local加载
import getLocalData from './src/data/local/getLocalData'
import removeLocalData from './src/data/local/removeLocalData'
import setLocalData from './src/data/local/setLocalData'
import setLocalProp from './src/data/local/setLocalProp'
// local加载完成
// time加载
import formatTime from './src/data/time/formatTime'
import getOffsetTime from './src/data/time/getOffsetTime'
import getOffsetTimeStr from './src/data/time/getOffsetTimeStr'
import parseTime from './src/data/time/parseTime'
import showTime from './src/data/time/showTime'
// time加载完成
// environment加载
import {
  checkUseItem,
  getCanUse,
  getEnv,
  getEnvMode,
  setCanUse,
  setEnv,
  setEnvMode,
  resetEnvData
} from './src/data/environment/index'
// environment加载完成
// worker加载
import runWorker from './src/data/worker/runWorker'
// worker加载完成




export {
  // type
  checkComplex,
  getTag,
  getType,
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
  // number
  formatNum,
  getDecimal,
  getInteger,
  getNum,
  getRandomNum,
  parseNum,
  // string
  fillString,
  findTargetInStr,
  getRandomData,
  getRandomInList,
  getRandomLetter,
  strCodeNum,
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
  // reactive
  defineReactive,
  defineWatch,
  // reactive
  // observe
  observe,
  Watcher,
  // observe
  // function
  runFunction,
  triggerFunction,
  triggerPromise,
  debounce,
  throttle,
  // utils
  downloadBlob,
  downloadFile,
  downloadFileByAnchor,
  localEncodeURIComponent,
  formatQueryUrl,
  getCurrentUrl,
  getLimitData,
  getQueryData,
  getQueryUrl,
  isOriginUrl,
  loadContents,
  openAnchor,
  openWindow,
  $exportMsg,
  exportMsg,
  parseUrl,
  promiseAllFinished,
  showJson,
  transformFile,
  trimData,
  // local
  getLocalData,
  removeLocalData,
  setLocalData,
  setLocalProp,
  // time
  formatTime,
  getOffsetTime,
  getOffsetTimeStr,
  parseTime,
  showTime,
  // environment
  checkUseItem,
  getCanUse,
  getEnv,
  getEnvMode,
  setCanUse,
  setEnv,
  setEnvMode,
  resetEnvData,
  // worker
  runWorker
}
