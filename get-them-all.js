import { people } from './get-them-all.data.js'
  

export function getArchitects() {
    let arrayArchi = []
    let arrayNoArchi = []
    const architect = document.getElementsByTagName("a")
    const noArchitect = document.getElementsByTagName("span")
    for (let i=0;i<architect.length;i++) {
        arrayArchi.push(architect[i])
    }
    for (let i=0;i<noArchitect.length;i++) {
        arrayNoArchi.push(noArchitect[i])
    }
    return [arrayArchi, arrayNoArchi]
}

export function getClassical() {
    const arrayClassical = [...document.querySelectorAll('.classical')]
    const arrayNoClassical = [...document.querySelectorAll('.modern,.baroque')]
    console.log(arrayClassical)
    console.log(arrayNoClassical)
    return [arrayClassical, arrayNoClassical]

}

export function getActive() {
    const active = [...document.querySelectorAll('.classical.active')]
    const noActive = [...document.querySelectorAll('.classical:not(.classical.active)')]
    console.log(active)
    console.log(noActive)
    return [active, noActive]
}

export function getBonannoPisano() {
    let arrayRemain = []
    const active = [...document.querySelectorAll('.classical.active')]

    for (let i=0;i<active.length;i++) {
        if(active[i].id!="BonannoPisano"){
            arrayRemain.push(active[i])
        }
    }
    return [document.getElementById("BonannoPisano"), arrayRemain]

}
