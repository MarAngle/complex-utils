/**
 * 指定对象/FormData添加属性
 * @param {object | FormData} data 需要添加属性的对象
 * @param {string} propName 属性名
 * @param {*} value 属性值
 * @param {'json' | 'form'} [type] 需要添加对象的对应类型,默认为json
 */
declare function appendProp(data: Record<string, any>, propName: string, value: unknown, type?: 'json'): void;
declare function appendProp(data: FormData, propName: string, value: unknown, type?: 'form'): void;
export default appendProp;
