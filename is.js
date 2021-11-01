const is = {}
is.num = function num(arg){
    return typeof(arg) == "number"
}
is.nan = function nan(arg){
    return Number.isNaN(arg)
}
is.str = function str(arg){
    return typeof(arg) == "string"
}
is.bool = function bool(arg){
    return typeof(arg) == "boolean"
}
is.undef = function undefined(arg){
    return typeof(arg) == "undefined"
}
is.def = function defined(arg){
    return typeof(arg) != "undefined"
}
is.arr = function array(arg){
    return Array.isArray(arg)
}
is.obj = function objects(arg){
    return (typeof arg == "object" && !Array.isArray(arg) && arg != null)
}
is.fun = function funct(arg){
    return typeof(arg) == "function"
}
is.truthy = function truthy(arg){
    return arg
}
is.falsy = function falsy(arg){
    return !arg
}
 