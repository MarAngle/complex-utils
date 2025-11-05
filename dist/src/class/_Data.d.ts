import { consoleType } from '../utils/exportMsg';
export type formatConfigType = {
    name?: string;
    level: number;
    recommend: boolean;
    module?: boolean;
    [prop: string]: undefined | boolean | string | number;
};
declare class _Data {
    static $name: string;
    static $formatConfig: formatConfigType;
    static $format: (null | ((data: _Data, formatOption: formatConfigType) => _Data));
    constructor();
    /**
     * 获取类实例名称
     */
    protected _getConstructorName(): string;
    protected _getName(): string;
    /**
     * 创建输出信息
     */
    _createMsg(content: string): string;
    /**
     * 信息输出
     */
    $exportMsg(content: string, type?: consoleType): void;
    /**
     * toString方法改写
     * @returns {string}
     */
    toString(): string;
}
export default _Data;
