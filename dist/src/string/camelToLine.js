function camelToLine(str, line = '_') {
    return str.replace(/([A-Z])/g, line + '$1').toLowerCase();
}
export default camelToLine;
