type formatType = (originItem: Record<PropertyKey, any>) => Record<PropertyKey, any>;
export type optionType = {
    id?: string;
    parentId?: string;
    children?: string;
    childrenBuild?: boolean;
    format?: formatType;
};
declare class MapItem {
    load: boolean;
    childrenProp: string;
    data: Record<PropertyKey, any>;
    constructor(children: string, data?: Record<PropertyKey, any>, childrenBuild?: boolean);
    assign(originData: Record<PropertyKey, any>): void;
    append(childData: Record<PropertyKey, any>): void;
}
export declare class MapData {
    childrenProp: string;
    childrenBuild?: boolean;
    format?: formatType;
    data: Map<PropertyKey, MapItem>;
    constructor(list: Record<PropertyKey, any>[], option?: optionType);
    assignItem(id: PropertyKey, parentId: PropertyKey, originData: Record<PropertyKey, any>): void;
    $assignItem(id: PropertyKey, originData: Record<PropertyKey, any>): MapItem;
    $appendItem(targetItem: MapItem, parentId: PropertyKey): void;
    parse(): Record<PropertyKey, any>[];
}
declare function formatTree(list: Record<PropertyKey, any>[], option?: optionType): MapData;
export default formatTree;
