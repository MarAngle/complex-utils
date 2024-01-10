
function linetoCamel(str: string, line = '_'): string {
  return str.replace(new RegExp(`\\${line}(\\w)`, 'g'), function (all, letter) {
    return letter.toUpperCase()
  })
}

export default linetoCamel
