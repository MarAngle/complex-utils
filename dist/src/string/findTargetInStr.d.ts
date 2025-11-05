type optionType = {
    limitNum?: number;
    case?: boolean;
};
/**
 * 查找target在目标字符串中的位置数组
 * @param {string} str 目标字符串
 * @param {string} target 需要查找的字符串
 * @param {object} [option] 设置项
 * @param {boolean} option.case 是否忽略大小写,默认不忽略
 * @param {number} option.limitNum 限制数量,0不限制
 * @returns {number[]}
 */
declare function findTargetInStr(str: string, target: string, option?: optionType): number[];
export default findTargetInStr;
