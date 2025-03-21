
/**
 * 判断当前索引是否是布局的边界处
 * @param index 元素索引
 * @param size 布局行元素数
 * @param type 边界类型，left表示左边界，right表示右边界
 * @returns 
 */
export const isLayoutBoundary = (index: number, size: number, type: 'left' | 'right' = 'right') => {
  return (index + (type === 'right' ? 1 : 0)) % size === 0
}

/**
 * 根据给定的布局参数计算布局的宽度和数量
 * 此函数主要用于计算在给定内容宽度下，按照最小宽度和偏移量进行布局时，单个元素的宽度和能够容纳的元素数量
 * 如果指定了最大宽度，则确保单个元素的宽度不会超过这个值，并相应调整偏移量
 * @param contentWidth 内容的总宽度，即容器的宽度
 * @param minWidth 单个元素的最小宽度
 * @param offset 单个元素之间的偏移量
 * @param maxWidth 单个元素的最大宽度（可选）
 * @returns 返回一个对象，包含单个元素的宽度（width）、每个元素的间隙（offset）和能够容纳的元素数量（size）
 */
function parseLayout(contentWidth: number, minWidth: number, offset: number, maxWidth?: number): {
  width: number
  offset: number
  size: number
} {
  if (contentWidth <= minWidth) {
    // size小于0时的判断
    return {
      width: minWidth,
      offset: 0,
      size: 1
    }
  }
  // 计算基于最小宽度和偏移量的元素数量，向下取整
  const size = Math.floor((contentWidth + offset) / (minWidth + offset))
  // 初步计算单个元素的宽度
  let width = (contentWidth + offset) / size - offset
  // 如果指定了最大宽度，且计算出的宽度大于最大宽度，则调整宽度和偏移量
  if (maxWidth && width > maxWidth) {
    width = maxWidth
    // 重新计算偏移量，以均匀分布额外的空间
    offset = size > 1 ? (contentWidth - width * size) / (size - 1) : 0
  }
  // 返回计算出的宽度和数量
  return {
    width,
    offset,
    size
  }
}

export default parseLayout
