/**
 * 判断对象是否存在对应属性
 * @param {object} data 对象
 * @param {string} prop 属性
 * @returns data has prop
 */
function hasProp(data, prop) {
    return prop in data;
}
export default hasProp;
