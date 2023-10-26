import isExist from '../type/isExist'

type formatType = (originItem: Record<PropertyKey, any>) => Record<PropertyKey, any>

export type optionType = {
  id?: string,
  parentId?: string,
  children?: string,
  format?: formatType
}

export class MapItemData {
  data: null | Record<PropertyKey, any>
  children: MapItemData[]
  constructor(data?: Record<PropertyKey, any>) {
    this.data = data || null
    this.children = []
  }
  assign(originData: Record<PropertyKey, any>, format?: formatType) {
    if (format) {
      this.data = format(originData)
    } else {
      this.data = originData
    }
  }
  append(child: MapItemData) {
    this.children.push(child)
  }
}

export class MapData {
  data: Map<PropertyKey, MapItemData>
  children: string
  constructor(children: string) {
    this.children = children
    this.data = new Map()
  }
  getItem(id: PropertyKey) {
    let data = this.data.get(id)
    if (!data) {
      data = new MapItemData()
      this.data.set(id, data)
    }
    return data
  }
  parse() {
    const list: Record<PropertyKey, any>[] = []
    
  }
}

function formatTree(originList: Record<PropertyKey, any>[], option: optionType = {}) {
  // 配置参数获取
  const format = option.format
  const idProp = option.id || 'id'
  const parentIdProp = option.parentId || 'parentId'
  const mapData = new MapData(option.children || 'children')

  for (let n = 0; n < originList.length; n++) {
    const originData = originList[n]
    const id = originData[idProp]
    let parentId = originData[parentIdProp]
    const mapItem = mapData.getItem(id)
    mapItem.assign(originData, format)
    if (isExist(parentId)) {
      const parentItem = mapData.getItem(parentId)
      parentItem.append(mapItem)
    }
  }
  return mapData
}

export default formatTree
