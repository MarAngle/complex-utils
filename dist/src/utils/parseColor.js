import exportMsg from "./exportMsg";
const rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
const rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*([0-9.]+)\)$/;
function parseColor(color) {
    // 去除颜色值前后的空白字符
    color = color.trim();
    // 处理十六进制颜色值
    if (color.startsWith("#")) {
        // 去掉井号
        color = color.slice(1);
        // 如果是缩写形式（如 #abc），展开为 #aabbcc
        if (color.length === 3) {
            color = color.split("").map((c) => c + c).join("");
        }
        // 检查颜色值长度是否为6（即 #RRGGBB）
        if (color.length === 6) {
            // 将十六进制颜色值转换为 RGBA 对象
            const r = parseInt(color.slice(0, 2), 16);
            const g = parseInt(color.slice(2, 4), 16);
            const b = parseInt(color.slice(4, 6), 16);
            return { r, g, b, a: 1 };
        }
    }
    else {
        // 处理 rgb 和 rgba 颜色值
        const rgbMatch = color.match(rgbRegex);
        if (rgbMatch) {
            const r = parseInt(rgbMatch[1], 10);
            const g = parseInt(rgbMatch[2], 10);
            const b = parseInt(rgbMatch[3], 10);
            return { r, g, b, a: 1 };
        }
        else {
            const rgbaMatch = color.match(rgbaRegex);
            if (rgbaMatch) {
                const r = parseInt(rgbaMatch[1], 10);
                const g = parseInt(rgbaMatch[2], 10);
                const b = parseInt(rgbaMatch[3], 10);
                const a = parseFloat(rgbaMatch[4]);
                return { r, g, b, a };
            }
        }
        exportMsg('颜色格式无效');
    }
}
export default parseColor;
