function dayOfTheYear(date){
    let compteur = 0
    for(let i=0;i<date.getMonth();i++) {
        switch (i) {
            case 0:
                compteur += 31
                break
            case 1:
                if(isLeapYear(date)) {
                    compteur += 29
                } else {
                    compteur += 28
                }
                break
            case 2:
                compteur += 31
                break
            case 3:
                compteur += 30
                break
            case 4:
                compteur += 31
                break
            case 5:
                compteur += 30
                break
            case 6:
                compteur += 31
                break
            case 7:
                compteur += 31
                break
            case 8:
                compteur += 30
                break
            case 9:
                compteur += 31
                break
            case 10:
                compteur += 30
                break
            case 11:
                compteur += 31
                break
            default:
              compteur += 0
        }
    }
    return compteur+date.getDate()
    
}

function isLeapYear(date) {
    let annee = date.getFullYear()
    if ((annee%4==0) && ((annee%100!=0) || (annee%400==0))){
        return true
    }else {
        return false
    }
}
