
function camelToLine(str: string, line = '_'): string {
  return str.replace(/([A-Z])/g, line + '$1').toLowerCase()
}

export default camelToLine
