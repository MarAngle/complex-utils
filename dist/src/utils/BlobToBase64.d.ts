/**
 * 将Blob对象转换为Base64字符串
 * @param {Blob} value Blob对象
 * @returns {Promise<{ data: string }>} 包含Base64字符串的Promise
 */
declare function BlobToBase64(value: Blob): Promise<{
    data: string;
}>;
export default BlobToBase64;
