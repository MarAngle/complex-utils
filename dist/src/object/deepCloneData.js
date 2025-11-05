import getComplexType from './../type/getComplexType';
import { hasOwnProperty } from '../../config';
/**
 * 基础版本的深拷贝
 * @param {*} data 深拷贝对象
 * @param {*} map 循环引用缓存
 * @returns
 */
function deepCloneData(data, map = new Map()) {
    const type = getComplexType(data);
    // 复杂对象进行递归
    if (type === 'object' || type === 'array') {
        let result = map.get(data);
        if (result) {
            return result;
        }
        else {
            result = type === 'object' ? {} : [];
            if (Object.getPrototypeOf(result) !== Object.getPrototypeOf(data)) {
                Object.setPrototypeOf(result, Object.getPrototypeOf(data));
            }
            map.set(data, result);
            for (const key in data) {
                if (hasOwnProperty.call(data, key)) {
                    result[key] = deepCloneData(data[key], map);
                }
            }
            return result;
        }
    }
    else if (type === 'map') {
        const result = new Map();
        map.set(data, result);
        data.forEach((value, key) => {
            result.set(key, deepCloneData(value, map));
        });
        return result;
    }
    else if (type === 'set') {
        const result = new Set();
        map.set(data, result);
        data.forEach((value) => {
            result.add(deepCloneData(value, map));
        });
        return result;
    }
    else {
        return data;
    }
}
export default deepCloneData;
