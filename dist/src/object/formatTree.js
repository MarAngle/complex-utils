/* eslint-disable @typescript-eslint/no-explicit-any */
class MapItem {
    constructor(children, data, childrenBuild) {
        this.childrenProp = children;
        this.data = data || {};
        this.load = data ? true : false;
        if (childrenBuild) {
            this.data[children] = [];
        }
    }
    assign(originData) {
        for (const prop in originData) {
            if (this.childrenProp != prop) {
                this.data[prop] = originData[prop];
            }
        }
        this.load = true;
    }
    append(childData) {
        if (!this.data[this.childrenProp]) {
            this.data[this.childrenProp] = [];
        }
        this.data[this.childrenProp].push(childData);
    }
}
export class MapData {
    constructor(list, option = {}) {
        const idProp = option.id || 'id';
        const parentIdProp = option.parentId || 'parentId';
        this.childrenProp = option.children || 'children';
        this.childrenBuild = option.childrenBuild;
        this.format = option.format;
        this.data = new Map();
        for (const originData of list) {
            const id = originData[idProp];
            const parentId = originData[parentIdProp];
            this.assignItem(id, parentId, originData);
        }
    }
    assignItem(id, parentId, originData) {
        const targetItem = this.$assignItem(id, originData);
        this.$appendItem(targetItem, parentId);
    }
    $assignItem(id, originData) {
        const finalData = this.format ? this.format(originData) : originData;
        let targetItem = this.data.get(id);
        if (!targetItem) {
            targetItem = new MapItem(this.childrenProp, finalData, this.childrenBuild);
            this.data.set(id, targetItem);
        }
        else {
            // 理论上在构建时已经生成children字段，赋值时无需单独处理
            targetItem.assign(finalData);
        }
        return targetItem;
    }
    $appendItem(targetItem, parentId) {
        let parentItem = this.data.get(parentId);
        if (!parentItem) {
            parentItem = new MapItem(this.childrenProp);
            this.data.set(parentId, parentItem);
        }
        parentItem.append(targetItem.data);
    }
    parse() {
        const list = [];
        this.data.forEach(item => {
            // 一个节点是根节点，如果它作为父节点被创建（load=false），但从未被加载过真实数据。
            // 同时检查它是否真的有子节点，以兼容为空的可能。
            if (!item.load && item.data[this.childrenProp]) {
                // 使用 push 和扩展运算符替换 concat，可以避免重复创建新数组，性能更好。
                list.push(...item.data[this.childrenProp]);
            }
        });
        return list;
    }
}
function formatTree(list, option = {}) {
    return new MapData(list, option);
}
export default formatTree;
