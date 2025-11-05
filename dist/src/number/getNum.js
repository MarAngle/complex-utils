import formatNum from './formatNum';
function getNum(originNum, type = 'round', radix = 2, NANZERO = false) {
    let value = formatNum(originNum);
    if (isNaN(value) && NANZERO) {
        console.log('NAN is change to 0!');
        value = 0;
    }
    else if (type != 'origin' && Math.round(value) !== value) { // 如果是小数
        const rate = Math.pow(10, radix);
        value = Math[type](value * rate) / rate;
    }
    return value;
}
export default getNum;
