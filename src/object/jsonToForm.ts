import getComplexType from './../type/getComplexType'

/**
 * 将对象转换为FormData格式
 * @param {object} jsonData 对象
 * @returns {FormData}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function jsonToForm(jsonData: Record<PropertyKey, any>): FormData {
  const formData = new FormData()
  for (const prop in jsonData) {
    const type = getComplexType(jsonData[prop])
    if (type === 'object') {
      formData.append(prop, JSON.stringify(jsonData[prop]))
    } else {
      formData.append(prop, jsonData[prop])
    }
  }
  return formData
}

export default jsonToForm
