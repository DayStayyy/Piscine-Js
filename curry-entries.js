function defaultCurry(curry1) {
    return (curry2) => {
        if(Object.isFrozen(curry1)) {
            return curry2
        }
        if(curry2 == undefined ) {
            return curry1
        } 
        for (let entries of Object.entries(curry2)){
            curry1[entries[0]] = entries[1]
        }
        return curry1
    }
}

function mapCurry(func) {
    return (curry) => {
        let result ={}
        for (let value of Object.entries(curry)){
                let arrayResult = func(value)
                result[arrayResult[0]] = arrayResult[1]
        }
        return result
    }
}


function reduceCurry(func) {
    return (curry,start = undefined) => {
        let turn = 1
        if(start === undefined ) {
            turn = 0
        }
        let accumulator = start
        for (let value of Object.entries(curry)){
            if(turn == 0) {
                accumulator = value
            } else { 
                accumulator = func(accumulator,value)
            }
            turn++
        }    
        return accumulator
    }
}

function filterCurry(func) {
    return (curry) => {
        let result ={}
        for (let value of Object.entries(curry)){
            if(func(value)) { 
                result[value[0]] = value[1]
            }
        }
        return result
    }
}
function reduceScore(personnel,start) {
    let filter = filterCurry(([k, v]) => v.isForceUser === true)(personnel)
    return(reduceCurry((acc,[k, v]) => (acc+= v.pilotingScore+v.shootingScore))(filter,start) )
}
function filterForce(personnel) {
    let filter = filterCurry(([k, v]) => v.isForceUser === true)(personnel)
    return(filterCurry(([k, v]) => v.shootingScore >= 80)(filter))
}
function mapAverage(personnel) {
    for (let entries of Object.entries(personnel)){
        personnel[entries[0]]["averageScore"] = (entries[1].pilotingScore+ entries[1].shootingScore)/2
    }
    return personnel
}