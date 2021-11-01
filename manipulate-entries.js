
function filterEntries(item,func) {
    let result ={}
    for (let value of Object.entries(item)){
        if(func(value)) { 
            result[value[0]] = value[1]
        }
    }
    return result
}

function mapEntries(item,func) {
    let result ={}
    for (let value of Object.entries(item)){
            let arrayResult = func(value)
            result[arrayResult[0]] = arrayResult[1]
    }
    return result
}

function reduceEntries(item,func,start = undefined) {
    let turn = 1
    if(start === undefined ) {
        turn = 0
    }
    let accumulator = start
    for (let value of Object.entries(item)){
        if(turn == 0) {
            accumulator = value
        } else { 
            accumulator = func(accumulator,value)
        }
        turn++
    }    
    return accumulator
}

function totalCalories(item) {
    console.log(item)
    let result = 0
    for (let value of Object.entries(item)){
        result += (value[1]*nutritionDB[value[0]]["calories"]/100)
    }
    return Math.round(result*100)/100
}
function lowCarbs(item) {
    let result = {}
    for (let value of Object.entries(item)){
        if((value[1]*nutritionDB[value[0]]["carbs"]/100) < 50) { 
            result[value[0]] = value[1]
        }
    }
    return result
}
function cartTotal(item) {
    let result = {}
    for (let value of Object.entries(item)){
        result[value[0]] = {}
        for (let nutrition of Object.entries(nutritionDB[value[0]])){
            result[value[0]][nutrition[0]] = Math.round((nutrition[1]*value[1]/100)*1000)/1000
        }
    }
    return result
}