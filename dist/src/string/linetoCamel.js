function linetoCamel(str, line = '_') {
    return str.replace(new RegExp(`\\${line}(\\w)`, 'g'), function (_all, letter) {
        return letter.toUpperCase();
    });
}
export default linetoCamel;
