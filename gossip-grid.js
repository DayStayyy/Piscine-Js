export function grid() {
    let divRange = document.createElement("div")
    divRange.className = 'ranges'
    let rangeWidth = document.createElement("input")
    rangeWidth.type = 'range'
    rangeWidth.id = 'width'
    rangeWidth.className = 'range'
    rangeWidth.min = '200'
    rangeWidth.max = '800'
    let rangeFontSize = document.createElement("input")
    rangeFontSize.type = 'range'
    rangeFontSize.id = 'fontSize'
    rangeFontSize.className = 'range'
    rangeFontSize.min = '20'
    rangeFontSize.max = '40'
    let rangeBackground = document.createElement("input")
    rangeBackground.type = 'range'
    rangeBackground.id = 'background'
    rangeBackground.className = 'range'
    rangeBackground.min = '20'
    rangeBackground.max = '75'

    rangeWidth.addEventListener('input', e => {
        let allGossip = Array.from(document.querySelectorAll('.gossip'))
        allGossip.forEach((div) => {
            div.style.width = e.target.value + 'px'
        })
    })
    rangeFontSize.addEventListener('input', e => {
        let allGossip = Array.from(document.querySelectorAll('.gossip'))
        allGossip.forEach((div) => {
            div.style.fontSize = e.target.value + 'px'
        })
    })
    rangeBackground.addEventListener('input', e => {
        let allGossip = Array.from(document.querySelectorAll('.gossip'))
        allGossip.forEach((div) => {
            div.style.background = `hsl(20  0, 50%, ${e.target.value}%)`
        })
    })
    divRange.appendChild(rangeWidth)
    divRange.appendChild(rangeFontSize)
    divRange.appendChild(rangeBackground)
    document.body.appendChild(divRange)
    createFirstGossip()
    // let gossipF = document.createElement("form")
    // gossipF.className = "gossip"
    // let input = document.createElement('textarea')
    // let button = document.createElement('button')
    // button.textContent  = "Share gossip!"
    createGossip()

}

function createGossip() {
    for(let i = 0; i < gossips.length;i++) {
        let gossip = document.createElement("div")
        gossip.classList.add("gossip")
        gossip.textContent = gossips[i]
        document.body.appendChild(gossip)
    }
}

function createFirstGossip() {
    let firstGossip = document.createElement('from')
    firstGossip.className = 'gossip'
    let textArea = document.createElement('textarea')
    let button = document.createElement('button')
    button.textContent = "Share gossip!"
    firstGossip.appendChild(textArea)
    firstGossip.appendChild(button)
    document.body.appendChild(firstGossip)

    button.onclick = function() {
        let allTextArea = Array.from(document.getElementsByTagName("textarea"))
        gossips.unshift(allTextArea[0].value)
        let allGossip = Array.from(document.querySelectorAll('.gossip'))
        allGossip.forEach((div) => {
            div.remove()
        })
        createFirstGossip()
        createGossip()

    }
}
export const gossips = [
    `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
    `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
    `WE PAY FOR JUICY INFO!`,
    `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
    `Ed Sheeran comes out of music retirement to write brand new song`,
    `Kylie Jenner & Travis Scott’s breakup timeline`,
    `Quiet on the set: temper tantrums stars hope you forget`,
    `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
    `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
    `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
    `No bite in the big apple? Celine Dion looks scary skinny in New York`,
    `Jennifer Aniston and Brad Pitt relationship timeline`,
    `They shouldn’t have said that: 10 celebrity rants heard around the world`,
    `The most intense celebrity fights on set`,
    `The 18 most bitter real housewives feuds`,
    `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
    `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
  ]
  