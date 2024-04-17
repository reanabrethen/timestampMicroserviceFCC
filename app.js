// const express = require('express')
// const logger = require('morgan')
// const cors = require('cors')


// const app = express()


// app.use(logger('dev'))
// app.use(express.json())
// app.use(cors())



// // //helper function for invalidDate
// const invalidDate = (date) => date.toUTCString() === "Invalid Date"

// app.use('/api/:date', (req, res)=>{
//     let date = new Date(req.params.date)

//     if(invalidDate(date)){
//         date = new Date(req.params.date)
//     }

//     if(invalidDate(date)){
//         res.json({message: "Invalid Date", error: error.message})
//         return
//     }

//     res.json({
//         unix: date.getTime(),
//         utc: date.toUTCString()
//     })

// })

// app.get('/api', (req, res)=>{
//     res.json({
//         unix: new Date().getTime(),
//         utc: new Date().toUTCString()
//     })
// })

// app.listen(3000, ()=>{
//     console.log('CORS-enabled web server listening on port 3000')
//     console.log("Server started")
// })

// module.exports = app// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get('/api/:date?', (req, res)=>{
  const {date} = req.params
  let dateToUse
  if(!date){
    dateToUse = new Date()
  }else{
    const unixCheck = date * 1
    if(isNaN(unixCheck)){
      dateToUse = new Date(date)
    }else{
      dateToUse = new Date(unixCheck)
    }
  }
  if(dateToUse == "Invalid Date"){
    res.json({error: "Invalid Date"})
  }else{
    const unix = dateToUse.getTime()
    const utc = dateToUse.toUTCString()
    res.json({unix, utc})
  }
})


// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});