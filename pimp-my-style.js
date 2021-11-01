export const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ]
  
const elementClassesArray = styles
  
export function pimp() {
    let element = document.getElementsByClassName("button")[0]
    const elementClasses = element.classList
    if (elementClasses.length < elementClassesArray.length+1 && !element.classList.contains("unpimp")) {
        element.classList.add(elementClassesArray[elementClasses.length-1])
        if(elementClasses.length == elementClassesArray.length+1){
            element.classList.add("unpimp") 
        }
    } else {
        if(elementClasses.length == 3) {
            element.classList.remove(elementClassesArray[elementClasses.length-3])
            element.classList.remove("unpimp")
            
        }
        element.classList.remove(elementClassesArray[elementClasses.length-3])
        
    }

    
}