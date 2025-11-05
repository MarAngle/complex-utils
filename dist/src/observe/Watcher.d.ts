import Dep from './data/Dep';
type handlerType = (val: unknown, oldVal: unknown) => void;
type optionTypeObject = {
    handler: handlerType;
    deep?: boolean;
};
export type optionType = handlerType | optionTypeObject;
declare class Watcher {
    id: number;
    deps: {
        current: {
            ids: Set<number>;
            list: Dep[];
        };
        newTmp: {
            ids: Set<number>;
            list: Dep[];
        };
    };
    active: boolean;
    target: unknown;
    getter: (obj: Record<PropertyKey, any>) => unknown;
    callback: handlerType;
    deep: boolean;
    value: unknown;
    constructor(target: Record<PropertyKey, any>, expression: string, option: optionType);
    /**
     * 触发更新
     */
    update(): void;
    /**
     * 添加依赖
     * @param {Dep} dep 依赖
     */
    addDep(dep: Dep): void;
    cleanupDeps(): void;
    /**
     * 获取数据
     * @returns {*}
     */
    get(): unknown;
    /**
     * 运行
     */
    run(): void;
    /**
     * 关闭watcher
     */
    stop(): void;
}
export default Watcher;
