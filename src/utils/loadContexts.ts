import triggerFunc from '../function/triggerFunction'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type fnType = (mod: any, path:string, index: number) => void

/**
 * 加载require Context
 * @param {__WebpackModuleApi.RequireContext} Context
 * @param {function} fn
 */
function loadContexts(contents: __WebpackModuleApi.RequireContext, fn: fnType) {
  const contentList = contents.keys()
  contentList.forEach((path: string, index: number) => {
    triggerFunc(fn, contents(path), path, index)
  })
}

export default loadContexts
