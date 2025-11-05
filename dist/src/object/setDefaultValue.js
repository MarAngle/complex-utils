/* eslint-disable @typescript-eslint/no-explicit-any */
import isExist from '../type/isExist';
import hasProp from './hasProp';
/**
 * 当data[prop]不存在时设置默认值defaultValue，存在时不做操作，注意判断条件是存在属性而不是属性值为真
 * @param {object} value 对应值
 * @param {string} prop 属性
 * @param {*} defaultValue 默认值
 * @param {object | array} exist 存在判断值
 */
function setDefaultValue(data, prop, defaultValue, exist) {
    let next = false;
    if (exist) {
        if (!isExist(data[prop], exist.existList, exist.unExistList)) {
            next = true;
        }
    }
    else if (!hasProp(data, prop)) {
        next = true;
    }
    if (next) {
        data[prop] = defaultValue;
    }
}
export default setDefaultValue;
