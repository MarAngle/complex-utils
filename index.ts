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
}
