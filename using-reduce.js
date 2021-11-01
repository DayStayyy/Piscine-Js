function adder(array,start){
    return array.reduce(((accumulator, currentValue) => accumulator + currentValue),(start ||0))
}

function sumOrMul(array,start){
    return array.reduce(((accumulator, currentValue) => (currentValue%2 == 0) ? accumulator * currentValue : accumulator + currentValue),(start ||0))
}

function funcExec(array,start){
    return array.reduce(((accumulator, currentValue) => currentValue(accumulator)),(start ||0))
}