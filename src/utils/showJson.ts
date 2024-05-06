
/**
 * 控制台展示json数据
 * @param {object} value 需要展示的json
 */
function showJson(value: Record<PropertyKey, any>) {
  console.log(JSON.stringify(value))
}

export default showJson
