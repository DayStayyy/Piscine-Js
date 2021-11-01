function multiply(a,b){
    let result = 0
    if(b<0) {
        for(let i = 0;i >b;i--){
            result -= a
        }
    } else {
        for(let i = 0;i <b;i++){
            result += a
        }
    }
    return result
}
function divide (a,b){
    if(b > a && a>0) {
        return 0
    }
    let result = 0
    if(a>0 && b<0) {
        for(;a>0;result--){
            a += b
        }
        if(a<0) {
            result += 1
        }
    }else if(a<0 && b>0) {
        for(;a<0;result--){
            a += b
        }
        if(a>0) {
            result += 1
        }
    }else if(a<0 && b<0){
        for(;a<b;result++){
            a -= b
        }
    }else {
        for(;a>b;result++){
            a -= b
        }
    }
    return result
}
function modulo (a,b){
    if(a<b && a>0 && b>0){
        return a
    }
    let result = 0
    if(a>0 && b<0) {
        for(;a>0;result--){
            a += b
        }
        a -= b
    }else if(a<0 && b>0) {
        for(;a<0;result--){
            a += b
        }
        a -= b

    }else if(a<0 && b<0){
        for(;a<b;result++){
            a -= b
        }
        
    }else {
        for(;a>0;result++){
            a -= b
        }
        a += b
    }

    return a 
}


