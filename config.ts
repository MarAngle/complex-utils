
export const hasOwnProperty = Object.prototype.hasOwnProperty

const config = {
  existList: [false, 0],
  setData(data: Record<PropertyKey, any>, prop: PropertyKey, value: any) {
    data[prop] = value
  },
  url: {
    protocolPort: {
      'http:': '80',
      'https:': '443',
      'ftp:': '21'
    }
  }
}

export default config
