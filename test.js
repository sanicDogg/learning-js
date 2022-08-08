function myNew(constructor, ...params) {
    let obj = {};

    Object.setPrototypeOf(obj, constructor.prototype);

    return constructor.apply(obj, params) || obj
}