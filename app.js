const express = require('express')
const logger = require('morgan')
const cors = require('cors')


const app = express()


app.use(logger('dev'))
app.use(express.json())
app.use(cors())



// //helper function for invalidDate
const invalidDate = (date) => date.toUTCString() === "Invalid Date"

app.use('/api/:date', (req, res)=>{
    let date = new Date(req.params.date)

    if(invalidDate(date)){
        date = new Date(req.params.date)
    }

    if(invalidDate(date)){
        res.json({message: "Invalid Date", error: error.message})
        return
    }

    res.json({
        unix: date.getTime(),
        utc: date.toUTCString()
    })

})

app.get('/api', (req, res)=>{
    res.json({
        unix: new Date().getTime(),
        utc: new Date().toUTCString()
    })
})

app.listen(3000, ()=>{
    console.log('CORS-enabled web server listening on port 3000')
    console.log("Server started")
})

module.exports = app