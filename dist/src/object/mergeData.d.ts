import { updateDataValueType } from "./updateData";
declare function mergeData<T extends updateDataValueType = updateDataValueType, O extends updateDataValueType = updateDataValueType>(targetData: T, ...originList: O[]): T & O;
export default mergeData;
