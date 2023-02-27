import triggerFunc from '../function/triggerFunction'


type fnType = (mod: Record<PropertyKey, any>, path:string, index: number) => void

/**
 * 加载require contents
 * @param {*} contents
 * @param {function} fn
 */
function loadContents(contents: any, fn: fnType) {
  const contentList = contents.keys()
  contentList.forEach((path: string, index: number) => {
    triggerFunc(fn, contents(path), path, index)
  })
}

export default loadContents
