export function build(nb) {
    let counter = 1;
    let invervale = setInterval(() => {
        let brick = document.createElement("div")
        brick.setAttribute("id", "brick-"+counter.toString())
        brick.classList.add("brick")
        if ((counter-1) % 3 == 1){
            brick.dataset.foundation = true
        } 
        const currentDiv = document.getElementById("div1")
        document.body.insertBefore(brick, currentDiv)
        if(counter===nb) {
            clearInterval(invervale);
        }
        counter++
    },100 ) 
}
export function repair() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        const brick = document.getElementById(arguments[i].toString())
        if((parseInt(arguments[i])-1) % 3 == 1) {
            brick.dataset.repaired = "in progress"
        } else {
            brick.dataset.repaired = true    
        }
    }
    }

export function destroy() {
    let allBrick = document.getElementsByClassName("brick")
    allBrick[allBrick.length-1].remove()
}
