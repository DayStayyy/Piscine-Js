function findExpression(number){
    let progress = 1
    let string="1"
    var str = "mul2, add4";

    if(number<0) {
        return undefined
    }
    while(progress<number){
        if(progress+4==number){
            console.log("+4 : 1")
            progress+=4
            string += " +4"
        }else if(progress*2<=number && (progress*2+4<=number || progress*2*2<=number) ){
            console.log("*2")
            progress*=2
            string += " *2"
        } else {
            console.log("+4 : 2")
            progress+=4
            string += " +4"
        }
        console.log("progress :", progress)
    }
    console.log("progress final:", progress)
    if(progress > number) {
        return undefined
    }
    return string
}


console.log(findExpression(14))