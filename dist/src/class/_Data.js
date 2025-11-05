import exportMsg from '../utils/exportMsg';
class _Data {
    constructor() {
        const $constructor = this.constructor;
        if ($constructor.$format) {
            return $constructor.$format(this, $constructor.$formatConfig);
        }
    }
    /**
     * 获取类实例名称
     */
    _getConstructorName() {
        return this.constructor.$name;
    }
    _getName() {
        return this._getConstructorName();
    }
    /**
     * 创建输出信息
     */
    _createMsg(content) {
        return `${this._getName()}:${content}`;
    }
    /**
     * 信息输出
     */
    $exportMsg(content, type = 'error') {
        exportMsg(this._createMsg(content), type);
    }
    /**
     * toString方法改写
     * @returns {string}
     */
    toString() {
        return this._getName();
    }
}
_Data.$name = '_Data';
_Data.$formatConfig = { level: 10, recommend: false }; // 不通过通用格式化函数格式化实例判断值
_Data.$format = null; // 格式化函数格式化实例,constructor指向最终的类，通过原型链逻辑匹配
export default _Data;
