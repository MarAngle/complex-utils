
function BlobToFile(value: Blob, fileName?: string) {
  if (!fileName) {
    const suffix = value.type.split('/')[1]
    fileName = 'newFile.' + suffix
  }
  return new File([value], fileName, { type: value.type })
}

export default BlobToFile
