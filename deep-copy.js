function deepCopy(obj) {
    if(Array.isArray(obj)) {
        let result = []
        obj.forEach(element => {
            if(typeof obj1 == "object" || Array.isArray(element)) {
                result.push(deepCopy(element))
            } else {
                result.push(element)
            }
        })
        return result
    } else {
        let result = {}
        for (let entries of Object.entries(obj)){
            result[entries[0]] = entries[1]
        }
        return result
    }
}