import exportMsg from "../utils/exportMsg";
let lifeId = 0;
function getLifeId() {
    lifeId++;
    return lifeId.toString();
}
export class LifeValue {
    constructor(initOption, life) {
        this.id = initOption.id || getLifeId();
        this.handler = initOption.handler;
        this.destroy = () => {
            life.off(this.id, this);
        };
    }
}
export class LifeData {
    constructor(prop) {
        this.prop = prop;
    }
    $emit(lifeValue, ...args) {
        lifeValue.handler(lifeValue, ...args);
    }
    /**
     * 触发指定id的回调
     * @param {string} id id
     * @param  {...any} args 参数
     */
    emit(id, ...args) {
        const lifeValue = this.get(id);
        if (lifeValue) {
            lifeValue.handler(lifeValue, ...args);
        }
        else {
            this.$exportMsg(`不存在当前值(${id})`);
        }
    }
    /**
     * 重置
     */
    reset() {
        this.clear();
    }
    /**
     * 销毁
     */
    destroy() {
        this.reset();
    }
    $exportMsg(content, type = 'error') {
        return exportMsg(`生命周期:${this.prop}:${content}`, type);
    }
}
LifeData.$name = 'LifeData';
export class LifeList extends LifeData {
    constructor(prop, lifeValueInitOption) {
        super(prop);
        this.list = [];
        if (lifeValueInitOption) {
            this.push(lifeValueInitOption);
        }
    }
    get(id) {
        return this.list.find(value => value.id === id);
    }
    push(lifeValueInitOption) {
        if (lifeValueInitOption.id && this.get(lifeValueInitOption.id) && !lifeValueInitOption.replace) {
            this.$exportMsg(`存在当前回调:${lifeValueInitOption.id}`);
        }
        else {
            const lifeValue = new LifeValue(lifeValueInitOption, this);
            if (lifeValueInitOption.index == undefined) {
                this.list.push(lifeValue);
            }
            else {
                const size = this.list.length;
                if (lifeValueInitOption.index < size) {
                    this.list.splice(lifeValueInitOption.index, 0, lifeValue);
                }
                else {
                    this.list.push(lifeValue);
                }
            }
            if (lifeValueInitOption.immediate) {
                this.$emit(lifeValue);
            }
            return lifeValue.id;
        }
    }
    /**
     * 触发函数
     * @param  {...any} args 参数
     */
    trigger(...args) {
        this.list.forEach(lifeValue => {
            this.$emit(lifeValue, ...args);
        });
    }
    /**
     * 删除指定id的生命周期
     * @param {string} id id
     * @returns {boolean}
     */
    off(id, value) {
        const index = value ? this.list.indexOf(value) : this.list.findIndex(value => value.id === id);
        if (index > -1) {
            this.list.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * 清除所有回调
     */
    clear() {
        this.list = [];
    }
}
LifeList.$name = 'LifeList';
export class LifeMap extends LifeData {
    constructor(prop, lifeValueInitOption) {
        super(prop);
        this.map = new Map();
        if (lifeValueInitOption) {
            this.push(lifeValueInitOption);
        }
    }
    get(id) {
        return this.map.get(id);
    }
    push(lifeValueInitOption) {
        if (lifeValueInitOption.id && this.get(lifeValueInitOption.id) && !lifeValueInitOption.replace) {
            this.$exportMsg(`存在当前回调:${lifeValueInitOption.id}`);
        }
        else {
            const lifeValue = new LifeValue(lifeValueInitOption, this);
            if (lifeValueInitOption.index == undefined) {
                this.map.set(lifeValue.id, lifeValue);
            }
            else {
                const size = this.map.size;
                if (lifeValueInitOption.index < size) {
                    const list = [];
                    this.map.forEach(function (item) {
                        list.push(item);
                    });
                    this.map.clear();
                    for (let n = 0; n < size; n++) {
                        const item = list[n];
                        if (lifeValueInitOption.index === n) {
                            this.map.set(lifeValue.id, lifeValue);
                        }
                        this.map.set(item.id, item);
                    }
                }
                else {
                    this.map.set(lifeValue.id, lifeValue);
                }
            }
            if (lifeValueInitOption.immediate) {
                this.$emit(lifeValue);
            }
            return lifeValue.id;
        }
    }
    /**
     * 触发函数
     * @param  {...any} args 参数
     */
    trigger(...args) {
        for (const lifeValue of this.map.values()) {
            this.$emit(lifeValue, ...args);
        }
    }
    /**
     * 删除指定id的生命周期
     * @param {string} id id
     * @returns {boolean}
     */
    off(id) {
        return this.map.delete(id);
    }
    /**
     * 清除所有回调
     */
    clear() {
        this.map.clear();
    }
}
LifeMap.$name = 'LifeMap';
