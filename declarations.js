const escapeStr = "\` \\ / \" \'"
const arr = [4,'2']
const obj = {
    str : "String",
    num : 2,
    bool : true,
    undef : undefined,
};

const nested = 
{
    arr : [4,undefined,'2'],
    obj : {
        str : "Test",
        num : 4,
        bool : true
    }
};

Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);


