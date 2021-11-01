function fusion(obj1,obj2) {
    const setTest = new Set([1, 2, 3])
    if(Array.isArray(obj1) && Array.isArray(obj2)) {
        return obj1.concat(obj2)
    } else if(typeof(obj1) == "number" && typeof(obj2) == "number") { 
        return obj1 + obj2
    } else if(typeof(obj1) == "string" && typeof(obj2) == "string") { 
        return obj1 + " " + obj2
    } else if(obj1.constructor == RegExp && obj2.constructor == RegExp) {
        return obj2
    } else if(obj1.constructor == setTest.constructor) {
        return obj2
    } else if ((typeof obj1 == "object" && !Array.isArray(obj1) && obj1 != null) && (typeof obj2 == "object" && !Array.isArray(obj2) && obj2 != null)) {
        let result = {}
        for (let value of Object.entries(obj1)) {
            if (typeof value[1] == typeof obj2[value[0]]) {
                result[value[0]] = fusion(value[1],obj2[value[0]])
            } else if (obj2[value[0]] == undefined) {
                result[value[0]] = value[1]
            } else {
                result[value[0]] = obj2[value[0]]
            }
        }
        for (let value of Object.entries(obj2)) {
            if (obj1[value[0]] == undefined) {
                result[value[0]] = value[1]
            }
        }
        return result
    } 
}
