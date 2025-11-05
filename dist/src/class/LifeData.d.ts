import { consoleType } from "../utils/exportMsg";
type lifeFunction = (lifeValue: LifeValue, ...args: any[]) => any;
export interface LifeValueInitOption {
    id?: string;
    handler: lifeFunction;
    index?: number;
    replace?: boolean;
    immediate?: boolean;
}
export declare class LifeValue {
    id: string;
    handler: lifeFunction;
    destroy: () => void;
    constructor(initOption: LifeValueInitOption, life: LifeData);
}
export interface LifeValueInitOptionWithExtra extends LifeValueInitOption {
    index?: number;
    replace?: boolean;
    immediate?: boolean;
}
export declare abstract class LifeData {
    static $name: string;
    prop: string;
    constructor(prop: string);
    abstract get(id: string): LifeValue | undefined;
    abstract push(lifeValueInitOption: LifeValueInitOptionWithExtra): undefined | string;
    /**
     * 触发函数
     * @param  {...any} args 参数
     */
    abstract trigger(...args: any[]): void;
    /**
     * 删除指定id的生命周期
     * @param {string} id id
     * @returns {boolean}
     */
    abstract off(id: string, value?: LifeValue): boolean;
    /**
     * 清除所有回调
     */
    abstract clear(): void;
    protected $emit(lifeValue: LifeValue, ...args: any[]): void;
    /**
     * 触发指定id的回调
     * @param {string} id id
     * @param  {...any} args 参数
     */
    emit(id: string, ...args: any[]): void;
    /**
     * 重置
     */
    reset(): void;
    /**
     * 销毁
     */
    destroy(): void;
    $exportMsg(content: string, type?: consoleType): void;
}
export declare class LifeList extends LifeData {
    static $name: string;
    list: LifeValue[];
    constructor(prop: string, lifeValueInitOption?: LifeValueInitOptionWithExtra);
    get(id: string): LifeValue | undefined;
    push(lifeValueInitOption: LifeValueInitOptionWithExtra): string | undefined;
    /**
     * 触发函数
     * @param  {...any} args 参数
     */
    trigger(...args: any[]): void;
    /**
     * 删除指定id的生命周期
     * @param {string} id id
     * @returns {boolean}
     */
    off(id: string, value?: LifeValue): boolean;
    /**
     * 清除所有回调
     */
    clear(): void;
}
export declare class LifeMap extends LifeData {
    static $name: string;
    map: Map<string, LifeValue>;
    constructor(prop: string, lifeValueInitOption?: LifeValueInitOptionWithExtra);
    get(id: string): LifeValue | undefined;
    push(lifeValueInitOption: LifeValueInitOptionWithExtra): string | undefined;
    /**
     * 触发函数
     * @param  {...any} args 参数
     */
    trigger(...args: any[]): void;
    /**
     * 删除指定id的生命周期
     * @param {string} id id
     * @returns {boolean}
     */
    off(id: string): boolean;
    /**
     * 清除所有回调
     */
    clear(): void;
}
export {};
