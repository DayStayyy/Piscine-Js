function dogYears(planet,age) {
    if(planet == "earth") {
        return Math.round(age/31557600*7*100)/100; 
    } else if(planet == "mercury")  {
        return Math.round(age/31557600/0.2408467*7*100)/100;
    } else if(planet == "venus")  {
        return Math.round(age/31557600/0.61519726*7*100)/100;
    }else if(planet == "mars")  {
        return Math.round(age/31557600/1.8808158*7*100)/100;
    }else if(planet == "jupiter")  {
        return Math.round(age/31557600/11.862615*7*100)/100;
    }else if(planet == "saturn")  {
        return Math.round(age/31557600/29.447498*7*100)/100;
    }else if(planet == "uranus")  {
        return Math.round(age/31557600/84.016846*7*100)/100;
    }else if(planet == "neptune")  {
        return Math.round(age/31557600/164.79132*7*100)/100;
    }
}
console.log(dogYears("earth",1000000000))