function interpolation(obj) {
    let xAvance = (obj.end-obj.start)/obj.step
    let yAvance = obj.duration/obj.step
    let nbStep = 0
    let timerId = setInterval(function() {
        obj.callback([obj.start+(xAvance*nbStep), yAvance+(yAvance*nbStep)])
        if(nbStep == obj.step-1) {
            clearInterval(timerId)
        }
        nbStep++
    },yAvance)
}
