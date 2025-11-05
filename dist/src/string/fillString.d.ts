/**
 * 将目标字符串中指定未知填充指定字符串到指定长度
 * @param {string} str 目标字符串
 * @param {number} [targetLength] 目标长度,默认为2
 * @param {string} [padString] 填充字符串,默认为'0'
 * @param {'start' | 'end'} [to] 填充位置,默认为start
 * @param {true} [unDivision] 是否分割填充字符串,默认分割
 * @returns {string}
 */
declare function fillString(str: string | number, targetLength?: number, padString?: string, to?: 'start' | 'end', unDivision?: true): string;
export default fillString;
