import updateData from "./updateData";
function mergeData(targetData, ...originList) {
    if (originList && originList.length > 0) {
        for (let i = 0; i < originList.length; i++) {
            targetData = updateData(targetData, originList[i]);
        }
    }
    return targetData;
}
export default mergeData;
