function flow(array) {
    return (b) => {
        console.log(b)
        let result = array[0](b)
        console.log("result ",result)
        console.log("calcule ",array[0](b))
        for(let i = 1; i <array.length;i++){
            result += array[i](result)
            console.log("result ",result)
            console.log("calcule ",array[i](result))
        }
        console.log("result ",result)
        return result
    }
}