type optionType = {
    pathname?: boolean;
};
/**
 * 获取当前URL
 * @param {object} [option] 设置项
 * @param {boolean} [option.pathname] 是否添加pathname
 * @returns {string}
 */
declare function getCurrentUrl(option?: optionType): string;
export default getCurrentUrl;
