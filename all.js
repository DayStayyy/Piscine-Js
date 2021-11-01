async function all(arg) {
    let result = {}
    for(let entries of Object.entries(arg)) {
        result[entries[0]] = await entries[1]
    }
    return result
}