
function underlinetoCamel(str: string): string {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase()
  })
}

export default underlinetoCamel
