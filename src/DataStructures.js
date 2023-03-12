// function for creating a data structure
function makeStruct(paramStr) {
    if (!paramStr) return null;
    const params = paramStr.split(', ');
    const count = params.length;

    /** @constructor */
    function constructor() {
        for (let i = 0; i < count; i++) this[k[i]] = arguments[i];
    }
    return constructor;
}