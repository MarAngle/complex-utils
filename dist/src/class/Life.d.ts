import _Data from "./_Data";
import { LifeData, LifeValueInitOptionWithExtra } from "./LifeData";
export interface DataWithLife {
    $life: Life;
    onLife: Life['on'];
    emitLife: Life['emit'];
    offLife: Life['off'];
    triggerLife: Life['trigger'];
    clearLife: Life['clear'];
    resetLife?: () => void;
    destroyLife?: () => void;
}
export interface LifeInitOption {
    [prop: string]: undefined | {
        type?: 'map' | 'list';
        data?: LifeValueInitOptionWithExtra;
    };
}
declare class Life extends _Data {
    static $name: string;
    data: Record<string, LifeData>;
    constructor(initOption?: LifeInitOption);
    /**
     * 获取对应生命周期对象
     * @param {string} prop 生命周期名称
     * @param {string} [build] 不存在时自动设置
     * @returns {Life}
     */
    get(prop: string): undefined | LifeData;
    get(prop: string, build: undefined): undefined | LifeData;
    get(prop: string, build: 'map' | 'list'): LifeData;
    /**
     * 设置生命周期回调
     * @param {string} prop 生命周期名称
     * @param {*} data Life参数
     * @returns {string | string} id/idList
     */
    on(prop: string, ...args: Parameters<LifeData['push']>): string | undefined;
    /**
     * 触发生命周期指定id函数
     * @param {string} prop 生命周期
     * @param {string} id 指定ID
     * @param  {...any} args 参数
     */
    emit(prop: string, ...args: Parameters<LifeData['emit']>): void;
    /**
     * 触发生命周期
     * @param {string} prop 生命周期
     * @param  {...any} args 参数
     */
    trigger(prop: string, ...args: Parameters<LifeData['trigger']>): void;
    /**
     * 删除生命周期指定函数
     * @param {string} prop 生命周期
     * @param {string} id 指定ID
     * @returns {boolean}
     */
    off(prop: string, ...args: Parameters<LifeData['off']>): boolean;
    /**
     * 清除生命周期
     * @param {string} prop 生命周期
     */
    clear(prop: string): void;
    /**
     * 重置
     */
    reset(): void;
    /**
     * 销毁
     */
    destroy(): void;
}
export default Life;
