

export function generateClasses() {
    let style = document.createElement("style");
        colors.forEach((color) => {
        style.textContent += `.${color}{background: ${color};}\n`
    });
    document.head.appendChild(style);
}


export function generateColdShades() {
    console.log(colors.length)
    for(let i = 0; i <colors.length;i++){
        for(let j = 0; j < colorCold.length;j++){
            if(colors[i].indexOf(colorCold[j]) != -1){
                let divColors = document.createElement("div")
                divColors.textContent = colors[i]
                divColors.classList.add(colors[i])
                document.body.appendChild(divColors)
                break
            } 
        }
    }
}
export function choseShade(shade) {
    // for(let i = 0; i <colors.length;i++){
    //     let elementArray = document.getElementsByClassName(colors[i])
    //     if(colors[i] != shade) {
    //         for(let j = 0; j < elementArray.length;j++) {
    //             elementArray[j].textContent = shade
    //             elementArray[j].classList.replace(colors[i],shade)
    //         }
    //     }    
    // }
    let allCards = Array.from(document.getElementsByTagName("div"));
    allCards.forEach((div) => {
        div.classList.remove(div.classList[div.classList.length - 1]);
        div.classList.add(shade);
    });

}

const colorCold = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]

export const colors = [
    'indianred',
    'lightcoral',
    'salmon',
    'darksalmon',
    'lightsalmon',
    'crimson',
    'red',
    'firebrick',
    'darkred',
    'pink',
    'lightpink',
    'hotpink',
    'deeppink',
    'mediumvioletred',
    'palevioletred',
    'orange',
    'coral',
    'tomato',
    'orangered',
    'darkorange',
    'yellow',
    'gold',
    'lightyellow',
    'lemonchiffon',
    'lightgoldenrodyellow',
    'papayawhip',
    'moccasin',
    'peachpuff',
    'palegoldenrod',
    'khaki',
    'darkkhaki',
    'lavender',
    'thistle',
    'plum',
    'violet',
    'orchid',
    'fuchsia',
    'magenta',
    'mediumorchid',
    'mediumpurple',
    'rebeccapurple',
    'blueviolet',
    'darkviolet',
    'darkorchid',
    'darkmagenta',
    'purple',
    'indigo',
    'slateblue',
    'darkslateblue',
    'green',
    'greenyellow',
    'chartreuse',
    'lawngreen',
    'lime',
    'limegreen',
    'palegreen',
    'lightgreen',
    'mediumspringgreen',
    'springgreen',
    'mediumseagreen',
    'seagreen',
    'forestgreen',
    'darkgreen',
    'yellowgreen',
    'olivedrab',
    'olive',
    'darkolivegreen',
    'mediumaquamarine',
    'darkseagreen',
    'lightseagreen',
    'darkcyan',
    'teal',
    'aqua',
    'cyan',
    'lightcyan',
    'paleturquoise',
    'aquamarine',
    'turquoise',
    'mediumturquoise',
    'darkturquoise',
    'cadetblue',
    'steelblue',
    'lightsteelblue',
    'powderblue',
    'lightblue',
    'skyblue',
    'lightskyblue',
    'deepskyblue',
    'dodgerblue',
    'cornflowerblue',
    'mediumslateblue',
    'royalblue',
    'blue',
    'mediumblue',
    'darkblue',
    'navy',
    'midnightblue',
    'brown',
    'cornsilk',
    'blanchedalmond',
    'bisque',
    'navajowhite',
    'wheat',
    'burlywood',
    'tan',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'peru',
    'chocolate',
    'saddlebrown',
    'sienna',
    'maroon',
    'white',
    'snow',
    'honeydew',
    'mintcream',
    'azure',
    'aliceblue',
    'ghostwhite',
    'whitesmoke',
    'seashell',
    'beige',
    'oldlace',
    'floralwhite',
    'ivory',
    'antiquewhite',
    'linen',
    'lavenderblush',
    'mistyrose',
    'gainsboro',
    'lightgray',
    'silver',
    'darkgray',
    'gray',
    'dimgray',
    'lightslategray',
    'slategray',
    'darkslategray',
    'black',
  ]
  