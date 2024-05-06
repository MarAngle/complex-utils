
/**
 * 文件属性转换
 * @param {'Base64' | 'File' | 'Blob'} from
 * @param {'Base64' | 'File' | 'Blob'} to
 * @param {string | File | Blob} data
 * @param {string} [filename]
 * @returns {Promise<string | File | Blob>}
 */
function transformFile(from: 'Base64' | 'File' | 'Blob', to: 'Base64' | 'File' | 'Blob', data: any, filename?: string) {
  return new Promise((resolve) => {
    if (from == 'Base64') {
      const arr = data.split(',')
      const mime = arr[0].match(/:(.*?);/)[1]
      const bstr = atob(arr[1])
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      if (to == 'Blob') {
        resolve({ data: new Blob([u8arr], { type: mime }) })
      } else if (to == 'File') {
        console.log('this is never use, func this name')
        resolve({ data: new File([u8arr], '', { type: mime }) })
      }
    } else if (from == 'File') {
      if (to == 'Base64') {
        const reader = new FileReader()
        reader.readAsDataURL(data)
        reader.onload = function(e) {
          resolve({ data: e.target!.result })
        }
      } else if (to == 'Blob') {
        resolve({ data: new Blob([data], { type: data.type }) })
      }
    } else if (from == 'Blob') {
      if (to == 'Base64') {
        const reader = new FileReader()
        reader.readAsDataURL(data)
        reader.onload = function(e) {
          resolve({ data: e.target!.result })
        }
      } else if (to == 'File') {
        if (!filename) {
          const suffix = data.type.split('/')[1]
          filename = 'newfile.' + suffix
        }
        resolve({ data: new File([data], filename, { type: data.type }) })
      }
    }
  })
}

export default transformFile
