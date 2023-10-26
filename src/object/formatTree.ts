
type formatType = (originItem: Record<PropertyKey, any>) => Record<PropertyKey, any>

export type optionType = {
  id?: string
  parentId?: string
  children?: string
  childrenBuild?: boolean
  format?: formatType
}

class MapItemData {
  load: boolean
  childrenProp: string
  data: Record<PropertyKey, any>
  constructor(children: string, data?: Record<PropertyKey, any>, childrenBuild?: boolean) {
    this.childrenProp = children
    this.data = data || {}
    this.load = data ? true : false
    if (childrenBuild) {
      this.data[children] = []
    }
  }
  assign(originData: Record<PropertyKey, any>) {
    for (const prop in originData) {
      if (this.childrenProp != prop) {
        this.data[prop] = originData[prop]
      }
    }
    this.load = true
  }
  append(childData: Record<PropertyKey, any>) {
    if (!this.data[this.childrenProp]) {
      this.data[this.childrenProp] = []
    }
    this.data[this.childrenProp].push(childData)
  }
}

export class MapData {
  childrenProp: string
  childrenBuild?: boolean
  format?: formatType
  data: Map<PropertyKey, MapItemData>
  constructor(originList: Record<PropertyKey, any>[], option: optionType = {}) {
    const idProp = option.id || 'id'
    const parentIdProp = option.parentId || 'parentId'
    this.childrenProp = option.children || 'children'
    this.childrenBuild = option.childrenBuild
    this.format = option.format
    this.data = new Map()
    for (let n = 0; n < originList.length; n++) {
      const originData = originList[n]
      const id = originData[idProp]
      const parentId = originData[parentIdProp]
      this.assignItem(id, parentId, originData)
    }
  }
  assignItem(id: PropertyKey, parentId: any, originData: Record<PropertyKey, any>) {
    const targetItem = this.$assignItem(id, originData)
    this.$appendItem(targetItem, parentId)
  }
  $assignItem(id: PropertyKey, originData: Record<PropertyKey, any>) {
    const finalData = this.format ? this.format(originData) : originData
    let targetItem = this.data.get(id)
    if (!targetItem) {
      targetItem = new MapItemData(this.childrenProp, finalData, this.childrenBuild)
      this.data.set(id, targetItem)
    } else {
      // 理论上在构建时已经生成children字段，赋值时无需单独处理
      targetItem.assign(finalData)
    }
    return targetItem
  }
  $appendItem(targetItem: MapItemData, parentId: PropertyKey) {
    let parentItem = this.data.get(parentId)
    if (!parentItem) {
      parentItem = new MapItemData(this.childrenProp)
      this.data.set(parentId, parentItem)
    }
    parentItem.append(targetItem.data)
  }
  parse() {
    let list: Record<PropertyKey, any>[] = []
    this.data.forEach(item => {
      if (!item.load) {
        list = list.concat(item.data[this.childrenProp])
      }
    })
    return list
  }
}

function formatTree(originList: Record<PropertyKey, any>[], option: optionType = {}) {
  return new MapData(originList, option)
}

export default formatTree
