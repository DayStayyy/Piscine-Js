function isPositive(nb) {
    if (nb > 0){
        return true
    }
    return false
}

function abs(nb) {
    if(isPositive(nb)) {
        return nb
    } else if(nb == 0) {
        return nb
    }
    return nb*-1
}