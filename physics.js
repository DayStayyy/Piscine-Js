function getAcceleration(object) {
    if(num2(object.m) && object.m > 0 && num2(object.f)) {
        return object.f/object.m
    } else if(num2(object.Δt) && object.Δt > 0 && num2(object.Δv)) {
        return object.Δv/object.Δt
    } else if(num2(object.t) && object.t > 0 && num2(object.d)) {
        return object.d*2/(object.t*object.t)
    } else {
        return "impossible"
    }
}

function num2(arg){
    return typeof(arg) == "number"
}

console.log(getAcceleration({ d: 10, t: 2, Δv: 100 }))
