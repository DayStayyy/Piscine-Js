import { places } from "./where-do-we-go.data.js"



export function explore(){
    const arrayPlaces = sort([...places])
    let lastN = 0
    for (let i = 0; i < arrayPlaces.length;i++) {
        console.log(arrayPlaces[i].coordinates)
        if(!arrayPlaces[i].coordinates.match(/[N]/)){
            lastN = i-1
            console.log(i)
            break
        }
    }
    let position = Math.round(scrollY / window.innerHeight)
    let item = arrayPlaces[position]
    let coord = document.createElement('a')
    coord.className = 'location'
    coord.textContent = item.name+"\n"+ item.coordinates
    coord.style.color = item.color
    coord.setAttribute("target",`_blank`)
    document.body.appendChild(coord)
    let direction = document.createElement('a')
    direction.className = "direction"
    if(position >= lastN) {
        direction.textContent = "S"

    } else {
        direction.textContent = "N"
    }
    document.body.appendChild(direction)

    arrayPlaces.forEach((item) => {
        let section = document.createElement("section");
        section.style.background = `url(./where-do-we-go_images/${item.name.split(",")[0].replace(/ /g, "-").toLowerCase()}.jpg)`
        section.style.backgroundRepeat = "no-repeat";
        section.style.backgroundSize = "cover";
        section.className = "section";
        document.body.append(section);
      });
    let prev = scrollY;
    document.addEventListener("scroll", (event) => {
        
        let coord = document.querySelector('.location')
        let position = Math.round(scrollY / window.innerHeight)
        let item = arrayPlaces[position]
        coord.textContent = item.name+"\n"+ item.coordinates
        coord.style.color = item.color
        coord.setAttribute("href",`https://google.com/maps/place/${item.coordinates}`)
        let location = document.querySelector('.direction')
        // if(position > lastN) {
        //     location.textContent = "S"

        // } else {
        //     location.textContent = "N"
        // }
        if (prev > scrollY) {
            location.textContent = "N";
          } else if (prev < scrollY) {
            location.textContent = "S";
          }
          prev = scrollY;   

    })



    
}

function sortByPosition() {
    let positionList = ["N","S"]
    let result = []
    for(let i=0;i<positionList.length;i++){
        places.map(item =>{ 
            if(item.coordinates.match(positionList[i])) {
                result.push(item)
            }
        })
        if(i==1) {
            lastN = positionList.length
        } 
    }
    return result
}


function getNorth(arg) {
    let coords = arg.coordinates.split(" ")[0].replace(/[Â°'."]/g, "");
    return coords.includes("N")
      ? (coords = Number(coords.slice(0, 5)))
      : Number(coords.slice(0, 5)) * -1;
  }
  
  function sort(arr) {
    let array = [...arr];
    array.sort((a, b) => {
      if (getNorth(a) > getNorth(b)) return -1;
      if (getNorth(a) < getNorth(b)) return 1;
      else return 0;
    });
    return array;
  }
