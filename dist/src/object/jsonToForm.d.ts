/**
 * 将对象转换为FormData格式
 * @param {object} jsonData 对象
 * @returns {FormData}
 */
declare function jsonToForm(jsonData: Record<PropertyKey, any>): FormData;
export default jsonToForm;
