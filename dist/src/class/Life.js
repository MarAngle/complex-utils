import _Data from "./_Data";
import { LifeList, LifeMap } from "./LifeData";
class Life extends _Data {
    constructor(initOption = {}) {
        super();
        this.data = {};
        for (const prop in initOption) {
            const item = initOption[prop];
            if (!item) {
                this.data[prop] = new LifeList(prop);
            }
            else {
                if (item.type !== 'map') {
                    this.data[prop] = new LifeList(prop, item.data);
                }
                else {
                    this.data[prop] = new LifeMap(prop, item.data);
                }
            }
        }
    }
    get(prop, build) {
        let lifeData = this.data[prop];
        if (!lifeData && build) {
            lifeData = build !== 'map' ? new LifeList(prop) : new LifeMap(prop);
            this.data[prop] = lifeData;
        }
        return lifeData;
    }
    /**
     * 设置生命周期回调
     * @param {string} prop 生命周期名称
     * @param {*} data Life参数
     * @returns {string | string} id/idList
     */
    on(prop, ...args) {
        return this.get(prop, 'list').push(...args);
    }
    /**
     * 触发生命周期指定id函数
     * @param {string} prop 生命周期
     * @param {string} id 指定ID
     * @param  {...any} args 参数
     */
    emit(prop, ...args) {
        return this.get(prop, 'list').emit(...args);
    }
    /**
     * 触发生命周期
     * @param {string} prop 生命周期
     * @param  {...any} args 参数
     */
    trigger(prop, ...args) {
        return this.get(prop, 'list').trigger(...args);
    }
    /**
     * 删除生命周期指定函数
     * @param {string} prop 生命周期
     * @param {string} id 指定ID
     * @returns {boolean}
     */
    off(prop, ...args) {
        const life = this.get(prop);
        if (life) {
            return life.off(...args);
        }
        else {
            return false;
        }
    }
    /**
     * 清除生命周期
     * @param {string} prop 生命周期
     */
    clear(prop) {
        const life = this.get(prop);
        if (life) {
            life.clear();
        }
    }
    /**
     * 重置
     */
    reset() {
        for (const prop in this.data) {
            this.clear(prop);
        }
    }
    /**
     * 销毁
     */
    destroy() {
        this.reset();
        this.data = {};
    }
}
Life.$name = 'Life';
export default Life;
