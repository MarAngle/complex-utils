
function FileToBlob(value: File) {
  return new Blob([value], { type: value.type })
}

export default FileToBlob
