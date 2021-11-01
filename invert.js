function invert(obj) {
    let result = {}
    for (let value of Object.entries(obj)) {
        result[value[1]] = value[0]
    }
    return result
}