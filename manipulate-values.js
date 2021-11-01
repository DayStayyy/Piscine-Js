function filterValues(item,func) {
    let result ={}
    for (let value of Object.entries(item)){
        if(func(value[1])) { 
            result[value[0]] = value[1]
        }
    }
    return result
}

function mapValues(item,func) {
    let result ={}
    for (let value of Object.entries(item)){
            result[value[0]] = func(value[1])
    }
    return result
}

function reduceValues(item,func,start = 0) {
    let accumulator = start
    let turn = 1
    for (let value of Object.entries(item)){
        if(turn == 0) {
            accumulator = value[1]
        } else { 
            accumulator = func(accumulator,value[1])
        }
        turn++
    }    
    return accumulator
}