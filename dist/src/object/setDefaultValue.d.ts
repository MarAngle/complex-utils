type existType = {
    existList?: any[];
    unExistList?: any[];
};
/**
 * 当data[prop]不存在时设置默认值defaultValue，存在时不做操作，注意判断条件是存在属性而不是属性值为真
 * @param {object} value 对应值
 * @param {string} prop 属性
 * @param {*} defaultValue 默认值
 * @param {object | array} exist 存在判断值
 */
declare function setDefaultValue(data: Record<PropertyKey, any>, prop: PropertyKey, defaultValue: any, exist?: existType): void;
export default setDefaultValue;
