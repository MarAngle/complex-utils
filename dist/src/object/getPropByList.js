/**
 * 根据属性列表获取对象属性
 * @param {object} data 对应对象
 * @param {string[]} propList 属性列表
 * @param {boolean} [showError] 显示错误输出
 * @returns
 */
function getPropByList(data, propList, showError) {
    let tempData = data;
    try {
        for (let n = 0; n < propList.length; n++) {
            const prop = propList[n];
            if (prop || prop === 0) {
                tempData = tempData[prop];
            }
        }
        return tempData;
    }
    catch (e) {
        if (showError) {
            console.error(e);
        }
        return undefined;
    }
}
export default getPropByList;
