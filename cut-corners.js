function round(nb){
    let nbVirgul = nb%1
    if(Math.abs(nbVirgul) > 0.5) {
        if (nb - nb%1 > 0) {
            return nb - nb%1 + 1 
        }
        return nb - nb%1 - 1
    }
    return nb - nb%1
}



function ceil(nb){
     if(nb > 0){
        return nb - nb%1 + 1
    } else {
        return nb - nb%1
    }
}


function floor(nb){
    if(nb >= 0){
        return nb - nb%1
    } else {
        return nb - nb%1 -1
    }
}
function trunc(nb){
    if(nb >= 0){
        return nb - nb%1
    } else {
        return nb - nb%1
    }
}

console.log(ceil(Math.PI))
console.log(ceil(-Math.PI))
console.log(ceil(Math.E))
console.log(ceil(-Math.E))
console.log(ceil(0))
