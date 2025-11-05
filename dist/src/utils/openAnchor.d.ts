/**
 * 基于a标签打开文件
 * @param {string} url
 * @param {string} [target] 窗口目标
 * @param {string} [download] 下载名称
 */
declare function openAnchor(url: string, download?: string | true, target?: string): void;
export default openAnchor;
