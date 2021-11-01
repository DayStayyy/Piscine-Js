function firstDayWeek(week,year){
    let listeDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    let yearComplete = new Date(year,0,1)
    console.log(yearComplete)
    let day = listeDays[yearComplete.getDay()]
    console.log(day)
    if(week == 1 && day!="Monday") {
        return "01-01-"+year
    } else {
        let decalage = 0
        if(day == "Sunday") {
            decalage = 7
        } else {
            decalage = listeDays.indexOf(day) - listeDays.indexOf("Monday")-1
        }
        if(week < 24) {
            yearComplete = new Date(year,0,week*7-decalage-6)
        } else {
            yearComplete = new Date(year,0,week*7-decalage-7)
        }
        if(yearComplete.getMonth()+1 < 10 && yearComplete.getDate()<10) {
            return "0"+yearComplete.getDate() +"-0"+ (yearComplete.getMonth()+1) +"-"+ year
        } else if(yearComplete.getMonth()+1 < 10){
            return yearComplete.getDate() +"-0"+ (yearComplete.getMonth()+1) +"-"+ year
        } else if(yearComplete.getDate()<10) {
            return "0"+yearComplete.getDate() +"-"+ (yearComplete.getMonth()+1) +"-"+ year
        }
        return yearComplete.getDate() +"-"+ (yearComplete.getMonth()+1) +"-"+ year
    }
}

console.log(firstDayWeek(52, '1000'), '22-12-1000')