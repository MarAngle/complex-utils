import { observeProp } from "./Observer";
const seenObjects = new Set();
/**
 * 循环读取经过observe的值
 * @param {*} val 需要读取的值
 */
function traverse(val) {
    _traverse(val, seenObjects);
    seenObjects.clear();
}
/**
 * 循环读取值
 * @param {*} val 需要读取的值
 * @param {*} seen 缓存
 */
function _traverse(val, seen) {
    if (typeof val !== 'object' || val === null) {
        return;
    }
    if (val[observeProp]) {
        const depId = val[observeProp].dep.id;
        if (seen.has(depId)) {
            return;
        }
        seen.add(depId);
    }
    for (const n in val) {
        _traverse(val[n], seen);
    }
}
export default traverse;
