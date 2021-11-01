function addWeek(date){
    let listeDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    const day = 86400000
    const firstDay = new Date('0001-01-01') 
    return listeDays[(date - firstDay)/day %14]
}


function timeTravel({date,hour,minute, second }){
    date.setHours(hour, minute,second )
    return date
}

