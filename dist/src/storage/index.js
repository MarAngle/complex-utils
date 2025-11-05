const storage = {
    prop: '$CS',
    timeProp: '$CST',
    setProp(prop) {
        this.prop = prop;
        this.timeProp = prop + 'T';
    },
    getProp(name) {
        return this.prop + ':' + name;
    },
    getTimeProp(name) {
        return this.timeProp + ':' + name;
    },
    _buildSetData(targetStorage) {
        return function (name, value, time) {
            const prop = storage.getProp(name);
            const timeProp = storage.getTimeProp(name);
            const storageValue = {
                v: value
            };
            try {
                targetStorage.setItem(timeProp, String(Math.floor((time || Date.now()) / 1000)));
                targetStorage.setItem(prop, JSON.stringify(storageValue));
                return true;
            }
            catch (err) {
                console.error(err);
                return false;
            }
        };
    },
    _buildGetData(targetStorage) {
        return function (name, option, refresh) {
            const prop = storage.getProp(name);
            const timeProp = storage.getTimeProp(name);
            if (option && option !== true) {
                const storageTime = Number(targetStorage.getItem(timeProp));
                if ((Math.floor(Date.now() / 1000) - storageTime) > option) {
                    // 超时，此时option不会为true，直接返回undefined
                    return undefined;
                }
            }
            const storageStr = targetStorage.getItem(prop);
            if (storageStr) {
                try {
                    const storageValue = JSON.parse(storageStr);
                    if (refresh) {
                        targetStorage.setItem(timeProp, String(Math.floor(Date.now() / 1000)));
                    }
                    if (option !== true) {
                        return storageValue.v;
                    }
                    else {
                        return {
                            v: storageValue.v,
                            t: Number(targetStorage.getItem(timeProp))
                        };
                    }
                }
                catch (err) {
                    console.error(err);
                    return undefined;
                }
            }
            else {
                return undefined;
            }
        };
    },
    _buildRemoveData(targetStorage) {
        return function (name) {
            const prop = storage.getProp(name);
            const timeProp = storage.getTimeProp(name);
            targetStorage.removeItem(prop);
            targetStorage.removeItem(timeProp);
        };
    },
    _buildClearData(targetStorage) {
        return function () {
            targetStorage.clear();
        };
    },
    setData: null,
    setSessionData: null,
    getData: null,
    getSessionData: null,
    removeData: null,
    removeSessionData: null,
    clearData: null,
    clearSessionData: null,
};
storage.setData = storage._buildSetData(localStorage);
storage.setSessionData = storage._buildSetData(sessionStorage);
storage.getData = storage._buildGetData(localStorage);
storage.getSessionData = storage._buildGetData(sessionStorage);
storage.removeData = storage._buildRemoveData(localStorage);
storage.removeSessionData = storage._buildRemoveData(sessionStorage);
storage.clearData = storage._buildClearData(localStorage);
storage.clearSessionData = storage._buildClearData(sessionStorage);
export default storage;
