export type letterType = {
    small?: boolean;
    big?: boolean;
    number?: boolean;
};
/**
 * 获取随机字符
 * @param {object} [letter] 字符串库设置
 * @param {boolean} [letter.small=true] 字符串库设置,小写字母,默认为真
 * @param {boolean} [letter.big=true] 字符串库设置,大写字母,默认为真
 * @param {boolean} [letter.number=true] 字符串库设置,整数,默认为真
 * @returns {string}
 */
declare function getRandomLetter(letter?: letterType): string;
export default getRandomLetter;
