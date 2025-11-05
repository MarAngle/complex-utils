import { ComplexType } from '../type/getComplexType';
/**
 * 根据类型格式化对象,暂时只对number和boolean进行格式化
 * @param {*} value 需要格式化的值
 * @param {*} type 格式化的类型
 * @returns value
 */
declare function formatDataByType(value: unknown, type: 'boolean'): boolean;
declare function formatDataByType(value: unknown, type: 'number'): number;
declare function formatDataByType(value: unknown, type?: Exclude<ComplexType, 'boolean' | 'number'>): unknown;
export default formatDataByType;
