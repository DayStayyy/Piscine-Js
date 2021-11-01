function neuron(array) {
    let result = {}
    array.forEach(element =>{
        let elementSplit = element.split(/[:?!-]/)
        let question = elementSplit[1].substring(1).toLowerCase()
        question = question.replace(/ /g,"_")
        if(question[question.length-1] == "_") {
            question = question.substring(0, question.length - 1)
        }
        if(result[elementSplit[0].toLowerCase()] === undefined) {
            result[elementSplit[0].toLowerCase()] = {}
        }
        if(result[elementSplit[0].toLowerCase()][question] === undefined) {
            result[elementSplit[0].toLowerCase()][question] = {}
            result[elementSplit[0].toLowerCase()][question][elementSplit[0].toLowerCase().slice(0,elementSplit[0].length-1)] = element.slice(element.indexOf(":")+2,element.indexOf("-")-1) 
            result[elementSplit[0].toLowerCase()][question]["responses"] = [element.slice(element.indexOf(":",element.indexOf(":")+1)+2,element.length)] 
        } else {
            result[elementSplit[0].toLowerCase()][question]["responses"].push(element.slice(element.indexOf(":",element.indexOf(":")+1)+2,element.length))
        }
    })
    return result
}