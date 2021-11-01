function arrToSet (array) {
    let set = new Set();
    for(var i= 0; i < array.length; i++)
    {
        set.add(array[i]);
    }
    return set
}

function arrToStr (array) {
    return array.join("")
}
function setToArr (Set ) {
    let array = []
    Set.forEach(element => {
        array.push(element)
    });
    return array
}

function setToStr (Set ) {
    let string = ""
    Set.forEach(element => {
        string = string + element
    });
    return string
}
function strToArr (String ) {
    return String.split("")
}
function strToSet (String ) {
    let set = new Set();
    for(var i= 0; i < String.length; i++)
    {
        set.add(String[i]);
    }
    return set
}
function mapToObj (Map ) {
    let object = {}
    for (const [key, value] of Map.entries()) {
        object[key] = value
    }
    return object
}
function objToArr (object ) {
    let array = []
    for (const property in object) {
        array.push(object[property])
    }
    return array
}
function objToMap (object ) {
    let map = new Map();
    for (const property in object) {
        map.set(property,object[property]);
    }
    return map
      
}
function arrToObj (array) {
    let object = {};
    for(var i= 0; i < array.length; i++)
    {
        object[i] = array[i]
    }
    return object
}

function strToObj (String ) {
    let object = {};
    for(var i= 0; i < String.length; i++)
    {
        object[i] = String[i]
    }
    return object
}

function superTypeOf(arg) {
    if (arg instanceof Set) {
        return 'Set'
    } else if (arg instanceof Map) {
        return 'Map'
    } else if (typeof(arg) == "number"){
        return "Number"
    } else if (typeof(arg) == "string"){
        return "String"
    } else if (typeof(arg) == "boolean") {
        return "boolean"
    } else if (typeof(arg) == "Nan") {
        return "Number"
    } else if (typeof(arg) == "undefined") {
        return "undefined"
    } else if (Array.isArray(arg)){
        return "Array"
    } else if (typeof arg == "object" && !Array.isArray(arg) && arg != null){
        return "Object"
    } else if (typeof(arg) == "function"){
        return "Function"
    } else {
        return "null"
    }
}