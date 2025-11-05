function appendProp(data, propName, value, type = 'json') {
    if (type === 'json') {
        data[propName] = value;
    }
    else if (type === 'form') {
        data.set(propName, value);
    }
}
export default appendProp;
