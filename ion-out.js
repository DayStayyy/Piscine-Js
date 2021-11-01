function ionOut(string){
    let result = []
    const letters = /[A-Za-z]/g;
    let born = 0
    let splitter = "ion"
    for(let i = 0;i<string.length;i++){
        if(string.slice(i,i+4) == "tion") {
            result.push(string.slice(born,i)+"t")
            born = i+4
        }
        if(!string[i].match(letters)) {
            born = i+1
        }
    }
    return result
}

