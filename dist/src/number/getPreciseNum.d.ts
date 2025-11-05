import { mathType } from './getNum';
/**
 * 格式化高精度数字
 * @param {string | number} originNum 数据
 * @param {'origin' | 'round' | 'floor' | 'ceil'} type 格式化类型
 * @param {number} radix 保留小数点位数
 * @param {boolean} NANZERO NAN是否格式化为0
 * @returns {number}
 */
declare function getPreciseNum(originNum: unknown, type?: mathType, radix?: number, NANZERO?: boolean): number;
export default getPreciseNum;
