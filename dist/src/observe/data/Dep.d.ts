import Watcher from '../Watcher';
declare class Dep {
    static target?: null | Watcher;
    id: number;
    subs: Watcher[];
    constructor();
    /**
     * 添加订阅Watcher
     * @param {Watcher} sub Watcher实例
     */
    addSub(sub: Watcher): void;
    /**
     * 删除订阅Watcher
     * @param {Watcher} sub Watcher实例
     */
    removeSub(sub: Watcher): void;
    /**
     * 添加依赖
     */
    depend(): void;
    /**
     * 通知更新
     */
    notify(): void;
}
export default Dep;
