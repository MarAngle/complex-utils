import getComplexProp from './getComplexProp';
/**
 * 数组属性快速输出到控制台
 * @param {object[]} list 目标数组
 * @param {string} prop 属性字符串,.类型
 */
function showArrayProp(list, prop) {
    const propList = [];
    for (let i = 0; i < list.length; i++) {
        propList.push(getComplexProp(list[i], prop));
    }
    console.log(JSON.stringify(propList));
}
export default showArrayProp;
