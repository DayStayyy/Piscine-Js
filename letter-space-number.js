function letterSpaceNumber(str){
    const number = new RegExp('[0-9]')
    const letters = /[A-Za-z]/g;
    let arr = []
    for(let i=0;i<str.length;i++) {
        if(str[i].match(number)){
            if(i>1){
                if(str[i-1]==" "){
                    if(str[i-2].match(letters)){
                        if(i==str.length-1) {
                            arr.push(str.slice(i-2,i+1))
                        } else if(!str[i+1].match(letters) && !str[i+1].match(number))
                        arr.push(str.slice(i-2,i+1))
                    }
                }
            }
        }
    }
    return arr

}
