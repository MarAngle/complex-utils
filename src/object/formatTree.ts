
type formatType = (originItem: Record<PropertyKey, any>) => Record<PropertyKey, any>

export type optionType = {
  id?: string,
  parentId?: string,
  children?: string,
  format?: formatType
}

class MapItemData {
  load: boolean
  data: Record<PropertyKey, any>
  constructor(data?: Record<PropertyKey, any>) {
    this.data = data || {}
    this.load = data ? true : false
  }
  assign(originData: Record<PropertyKey, any>, children: string) {
    for (const prop in originData) {
      if (children != prop) {
        this.data[prop] = originData[prop]
      }
    }
    this.load = true
  }
  append(children: string, childData: Record<PropertyKey, any>) {
    if (!this.data[children]) {
      this.data[children] = []
    }
    this.data[children].push(childData)
  }
}

export class MapData {
  children: string
  format?: formatType
  data: Map<PropertyKey, MapItemData>
  constructor(children: string, format?: formatType) {
    this.children = children
    this.format = format
    this.data = new Map()
  }
  $assignItem(id: string, originData: Record<PropertyKey, any>) {
    const finalData = this.format ? this.format(originData) : originData
    let targetItem = this.data.get(id)
    if (!targetItem) {
      targetItem = new MapItemData(finalData)
      this.data.set(id, targetItem)
    } else {
      targetItem.assign(finalData, this.children)
    }
    return targetItem
  }
  $appendItem(targetItem: MapItemData, parentId: string) {
    let parentItem = this.data.get(parentId)
    if (!parentItem) {
      parentItem = new MapItemData()
      this.data.set(parentId, parentItem)
    }
    parentItem.append(this.children, targetItem.data)
  }
  assignItem(id: string, parentId: string, originData: Record<PropertyKey, any>) {
    const targetItem = this.$assignItem(id, originData)
    this.$appendItem(targetItem, parentId)
  }
  parse() {
    let list: Record<PropertyKey, any>[] = []
    this.data.forEach(item => {
      if (!item.load) {
        list = list.concat(item.data[this.children])
      }
    })
    return list
  }
}

function formatTree(originList: Record<PropertyKey, any>[], option: optionType = {}) {
  // 配置参数获取
  const idProp = option.id || 'id'
  const parentIdProp = option.parentId || 'parentId'
  const mapData = new MapData(option.children || 'children', option.format)

  for (let n = 0; n < originList.length; n++) {
    const originData = originList[n]
    const id = originData[idProp]
    const parentId = originData[parentIdProp]
    mapData.assignItem(id, parentId, originData)
  }
  return mapData
}

export default formatTree
