

function isFriday(date) {
    if(date.getDay() == 5) {
        return true
    } 
    return false
}
function isWeekend(date) {
    if(date.getDay() == 7 || date.getDay()==6 ) {
        return true
    } 
    return false
}
function isLeapYear(date) {
    let annee = date.getFullYear()
    if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))){
        return true
    }else {
        return false
    }
}
function isLastDayOfMonth(date) {
    switch (date.getMonth()) {
        case 0:
            return (date.getDate()==31)
        case 1:
            return ((date.getDate()==29 && isLeapYear(date)) || (date.getDate()==28 && !isLeapYear(date)))
        case 2:
            return (date.getDate()==31)
        case 3:
            return (date.getDate()==30)
        case 4:
            return (date.getDate()==31)
        case 5:
            return (date.getDate()==30)
        case 6:
            return (date.getDate()==31)
        case 7:
            return (date.getDate()==31)
        case 8:
            return (date.getDate()==30)
        case 9:
            return (date.getDate()==31)
        case 10:
            return (date.getDate()==30)
        case 11:
            return (date.getDate()==31)
        default:
          return false
      }
}