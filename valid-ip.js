function findIP(){
    let array = []
    let result = []
    array = data.split(/[ \n]/)
    for(let i=0;i<array.length;i++){

      if(array[i].length >4){
        while(array[i].slice(0,4)!="http" && array[i].length >8){
          array[i] = array[i].substring(1)
        }
        if(isValidHttpUrl(array[i])) {
          result.push(array[i])
        }
      }
      
    }
    return result
}