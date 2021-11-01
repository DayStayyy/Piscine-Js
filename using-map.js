function citiesOnly(array) {
    return array.map(item => item.city)
}

function upperCasingStates(array) {
    return array.map(item =>{
        let wordDivise = item.split(" ")
        item = ""
        for(let i=0;i<wordDivise.length;i++) {
            item += wordDivise[i][0].toUpperCase() + wordDivise[i].slice(1) + " "
        }
        return item.substring(0, item.length - 1)
    })
} 

function fahrenheitToCelsius(array) {
    return array.map(item =>Math.floor((parseInt(item)-32)/1.8) +"°C")
}

function trimTemp(array){
    return array.map(item =>{ item.temperature = item.temperature.replace(/\s+/g,"")
        return item
    })
} 

function tempForecasts(array) {
    return array.map(item =>{
        let wordDivise = item.state.split(" ")
        item.state = ""
        for(let i=0;i<wordDivise.length;i++) {
            item.state += wordDivise[i][0].toUpperCase() + wordDivise[i].slice(1) + " "
        }
        return Math.floor((parseInt(item.temperature)-32)/1.8) +"°Celsius"+ " in " + item.city+ ", " + item.state.substring(0, item.state.length - 1)
        
    })
}