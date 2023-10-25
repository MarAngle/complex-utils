
const config = {
  local: {
    prop: 'simple-utils-'
  },
  type: {
    emptyCheckList: ['object', 'array']
  },
  object: {
    existList: [false, 0],
    setData(data: Record<PropertyKey, any>, prop: PropertyKey, value: any) {
      data[prop] = value
    }
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
