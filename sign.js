function sign(nb){
    if (nb > 0){
        return 1
    } else if(nb < 0) {
        return -1
    }
    return 0
}

function sameSign(nb1,nb2) {
    if (sign(nb1) == sign(nb2)){
        return true
    }
    return false
}