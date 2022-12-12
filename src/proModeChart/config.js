// assuming that we are getting quantity un 1st arg, unitSize in 2nd arg

const getGraphData = (data)=>{
    // console.log(data.map(()=>{return data.x}))
    return data.map(()=>{
        return [data.x,data.y]
        // returns data in format of [xAxisValue, yAxisValue]
    })
}

export {getGraphData}