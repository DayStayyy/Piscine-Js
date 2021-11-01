const pronounsArray = ["he","you","it","they","i","she","we"]
function pronoun(str) {
    let result = {} 
    let arr = str.split(/[\r\n\t\f\v, ]+/)
    arr = arr.map(word => word.toLowerCase())
    for(let i = 0; i < arr.length; i++) {
        if(pronounsArray.indexOf(arr[i]) != -1) {
            if(result[arr[i]] == undefined) {
                if(pronounsArray.indexOf(arr[i+1]) == -1 && arr[i+1] != undefined) {
                    result[arr[i]] = {word:[arr[i+1]], count:1} 
                } else {
                    result[arr[i]] = {word:[], count:1} 
                }
            } else { 
                if(pronounsArray.indexOf(arr[i+1]) == -1 && arr[i+1] != undefined) {
                    result[arr[i]].word.push(arr[i+1])
                }
                result[arr[i]].count += 1
            }
            
        }
    }
    return result
}
