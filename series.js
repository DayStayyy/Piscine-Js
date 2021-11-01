async function series(array) {
    let result = []
    array.forEach(element => { 
        console.log(element)
        let add = all(element)
        result.push(add)
    }) 
    return result
}

async function all(arg) {
    return await arg
}