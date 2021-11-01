function bloodySunday (date){
    let listeDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const day = 86400000
    const firstDay = new Date('0001-01-01') 
    return listeDays[(date - firstDay)/day %6]
}
