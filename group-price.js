function groupPrice(sentence){
    let result = []
    const pricer = new RegExp('[0-9]\$./')
    if(sentence.match(/USD/)==null && sentence.match(/$/)==null) {
        return result
    } 
    let boolDollars = true
    let indexBool = 0
    while(boolDollars) {    
        let dollarIndex = sentence.indexOf("$",indexBool)
        if(dollarIndex != -1) {
            indexBool = dollarIndex+1
            let price = ""
            for(let i=dollarIndex;i<sentence.length;i++){
                if(sentence[i].match(/\$/) || sentence[i].match(/[0-9]/) || sentence[i].match(/\./)){
                    price += sentence[i]
                } else {
                    break
                }
            }
            if(price[price.length-1]=="."){
                price = price.slice(0,price.length-1)
            }
            result.push([price,price.slice(1,price.indexOf(".")),price.slice(price.indexOf(".")+1)])
        } else {
            boolDollars = false
        }
    }

    let USDIndex = sentence.indexOf("USD")
    if(USDIndex != -1) {
        let price = "USD"
        for(let i=USDIndex+3;i<sentence.length;i++){
            if(sentence[i].match(/\$/) || sentence[i].match(/[0-9]/) || sentence[i].match(/\./)){
                price += sentence[i]
            } else {
                break
            }
        }
        if(price[price.length-1]=="."){
            price = price.slice(0,price.length-1)
        }
        result.push([price,price.slice(3,price.indexOf(".")),price.slice(price.indexOf(".")+1)])
        
    }



    return result
}
