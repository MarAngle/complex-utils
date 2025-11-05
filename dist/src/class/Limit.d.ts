export type LimitType = 'forbid' | 'allow';
export interface LimitInitOption {
    type?: LimitType;
    list?: any[];
}
declare class Limit {
    type: LimitType;
    list: any[];
    constructor(initOption?: LimitInitOption, autoType?: LimitType);
    /**
     * 获取限制false不限制
     * @param {*} data 需要判断限制的值
     * @returns {boolean}
     */
    getLimit(data: any): boolean;
}
export default Limit;
