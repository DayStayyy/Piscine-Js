function matchCron(cron,date) {
    let cronArray = cron.split(" ")
    for(let i=0;i<cronArray.length;i++){
        if(cronArray[i] != "*"){
            switch (i) {
                case 0:
                    if(date.getMinutes() != cronArray[i]) {
                        return false
                    }
                    break
                case 1:
                    if(date.getHours() != cronArray[i]) {
                        return false
                    }
                    break
                case 2:
                    if(date.getDate() != cronArray[i]) {
                        return false
                    }
                    break
                case 3:
                    if(date.getMonth() != cronArray[i]-1) {
                        return false
                    }
                    break
                case 4:
                    if(date.getDay() != cronArray[i]) {
                        return false
                    }
            }
        }
    }
    return true
}
