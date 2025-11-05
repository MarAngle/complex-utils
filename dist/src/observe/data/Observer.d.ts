import Dep from './Dep';
export declare const observeProp: unique symbol;
export type observeObject = {
    [observeProp]: Observer;
    [prop: PropertyKey]: any;
};
declare class Observer {
    dep: Dep;
    [observeProp]: Observer;
    constructor(value: Record<PropertyKey, any>);
    observeArray(items: unknown[]): void;
    /**
     * 遍历
     * @param {*} value 需要遍历的值
     */
    walk(value: Record<PropertyKey, any>): void;
}
export default Observer;
