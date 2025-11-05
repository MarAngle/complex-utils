import getComplexType from "../type/getComplexType";
import { _isComplex } from "../type/isComplex";
function updateData(targetData, originData) {
    if (originData !== undefined) {
        const targetDataType = getComplexType(targetData);
        const originDataType = getComplexType(originData);
        if (targetDataType !== originDataType) {
            // 目标数据与源数据类型不同时，直接赋值
            return originData;
        }
        else if (_isComplex(targetDataType)) {
            // 目标数据与源数据类型相同时
            if (['array', 'object'].includes(targetDataType)) {
                for (const prop in originData) {
                    const targetValue = targetData[prop];
                    const originValue = originData[prop];
                    if (targetValue === undefined) {
                        // 目标数据不存在时直接使用源数据覆盖
                        targetData[prop] = originValue;
                    }
                    else if (targetValue !== originValue) {
                        targetData[prop] = updateData(targetValue, originValue);
                    }
                }
                return targetData;
            }
            else if (targetDataType === 'map') {
                originData.forEach((value, key) => {
                    if (!targetData.has(key)) {
                        targetData.set(key, value);
                    }
                    else {
                        targetData.set(key, updateData(targetData.get(key), value));
                    }
                });
                return targetData;
            }
            else if (targetDataType === 'set') {
                originData.forEach(value => {
                    if (!targetData.has(value)) {
                        targetData.add(value);
                    }
                });
                return targetData;
            }
        }
        else {
            return originData;
        }
    }
    return targetData;
}
export default updateData;
