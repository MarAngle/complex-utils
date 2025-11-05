export type updateDataValueType = Record<PropertyKey, any> | unknown[];
declare function updateData<T extends updateDataValueType = updateDataValueType, O extends updateDataValueType = updateDataValueType>(targetData: T, originData?: O): T & O;
export default updateData;
