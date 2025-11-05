import getNum from './../number/getNum';
function formatDataByType(value, type) {
    if (type === 'boolean') {
        return !!value;
    }
    else if (type === 'number') {
        return getNum(value, 'origin');
    }
    else {
        return value;
    }
}
export default formatDataByType;
