import { ComplexType } from "./getComplexType";
/**
 * 是否是复杂对象
 * @param {*} type 需要判断的类型值
 * @returns {boolean} type is 复杂对象
 */
export declare function _isComplex(type: ComplexType): boolean;
/**
 * 通过getComplexType获取对应的类型并判断此类型是否是复杂对象
 * @param {*} value 需要进行判断的值
 * @returns {boolean} 是否是复杂对象
 */
declare function isComplex(value: unknown): value is object | Array<unknown>;
export default isComplex;
