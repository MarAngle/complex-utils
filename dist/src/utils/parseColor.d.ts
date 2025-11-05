declare function parseColor(color: string): {
    r: number;
    g: number;
    b: number;
    a: number;
} | undefined;
export default parseColor;
