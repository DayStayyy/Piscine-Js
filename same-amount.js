function sameAmount(data,reg1,reg2){
    let nbReg1 = 0
    let nbReg2 = 0
    let reg1g = new RegExp(reg1,"g")
    let reg2g = new RegExp(reg2,"g")
    if(data.match(reg1)!=null){
        for(let i=0;i<data.match(reg1g).length;i++){
            nbReg1++
        }
    }
    if(data.match(reg2)!=null){
        for(let i=0;i<data.match(reg2g).length;i++){
            nbReg2++
        }
    }
    
    if(nbReg1==nbReg2){
        return true
    }
    return false
}
