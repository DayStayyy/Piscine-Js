function vowelDots(str) {
    for(let i=0;i<str.length;i++){
        if(str[i].match(vowels)){
            str = str.slice(0,i+1)+"."+str.slice(i+1)
        }
    }
    return(str)
}
const vowels = new RegExp(/^[aeiou]$/i)