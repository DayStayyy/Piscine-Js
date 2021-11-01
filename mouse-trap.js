export function createCircle(mouse){
    if(mouse == undefined) {
        return
    }
    let box = document.querySelector('box');
    let width = box.offsetWidth;
    let height = box.offsetHeight;

    let x = mouse.pageX
    let y = mouse.pageY
    let divClick = document.createElement("div")
    divClick.className = 'circle'
    divClick.style.left = `${x-25}px`
    divClick.style.top = `${y-25}px`
    if(x >= window.innerWidth/2-width/2+25+1 && y >= window.innerHeight/2-height/2+25+1 && x <= window.innerWidth/2+width/2-25-1 && y <= window.innerHeight/2+height/2-25-1) {
        divClick.style.background = "var(--purple)"
    } else { 
        divClick.style.background = "white" 
    }
    document.body.appendChild(divClick)
}

export function moveCircle(mouse){
    if(mouse == undefined) {
        return
    }
    let circleMoveArray = document.getElementsByClassName("circle")
    if(circleMoveArray.length == 0) {
        return
    }
    let circleMove = circleMoveArray[circleMoveArray.length-1]
    let x = mouse.pageX
    let y = mouse.pageY

    let box = document.querySelector('box');
    let width = box.offsetWidth;
    let height = box.offsetHeight;
    // console.log("================================")
    // console.log(`X : ${x}, Y : ${y}`)
    // console.log(`X : ${(window.innerWidth/2-width/2)+25+1}, Y : ${window.innerWidth/2+width/2-50-1}`)
    // console.log(`X : ${(window.innerWidth/2-width/2)+25+1}, Y : ${window.innerWidth/2+width/2-50-1}`)
    if(x >= (window.innerWidth/2-width/2+25+1)  && y >= window.innerHeight/2-height/2+25+1 && x <= window.innerWidth/2+width/2-25-1 && y <= window.innerHeight/2+height/2-25-1) {
        console.log("hrtgf")
        circleMove.style.background = "var(--purple)"
    }
    if(circleMove.style.background === "var(--purple)") {
        if(x < (window.innerWidth/2-width/2)+25+1 ) {
            circleMove.style.left = `${window.innerWidth/2-width/2+1}px`
        } else if (x > window.innerWidth/2+width/2-25-1){
            circleMove.style.left = `${window.innerWidth/2+width/2-50-1}px`
        } else {
            circleMove.style.left = `${x-25}px`
        }
        if(y < window.innerHeight/2-height/2+25+1) {
            circleMove.style.top = `${window.innerHeight/2-height/2+1}px`
        } else if(y > window.innerHeight/2+height/2-25-1) {
            circleMove.style.top = `${window.innerHeight/2+height/2-50-1}px`
        } else {
            circleMove.style.top = `${y-25}px`
        }
    } else {
        circleMove.style.left = `${x-25}px`
        circleMove.style.top = `${y-25}px`
    }
}
export function setBox(){
    let box = document.createElement("box")
    box.className = 'box'
    box.style.left = `${window.innerWidth/2}px`
    box.style.top = `${window.innerHeight/2}px`
    document.body.appendChild(box)
}

document.addEventListener('mousedown', createCircle)
document.addEventListener('mousemove', moveCircle)