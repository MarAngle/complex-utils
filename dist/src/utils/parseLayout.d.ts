/**
 * 判断当前索引是否是布局的边界处
 * @param index 元素索引
 * @param size 布局行元素数
 * @param type 边界类型，left表示左边界，right表示右边界
 * @returns
 */
export declare const isLayoutBoundary: (index: number, size: number, type?: "left" | "right") => boolean;
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
declare function parseLayout(contentWidth: number, minWidth: number, offset: number, maxWidth?: number): {
    width: number;
    offset: number;
    size: number;
};
export default parseLayout;
