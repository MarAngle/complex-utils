import openAnchor from './openAnchor';
/**
 * 下载文件
 * @param {string | object} data
 */
function downloadFile(url, name) {
    return openAnchor(url, name);
}
export default downloadFile;
