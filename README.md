#TimestampMicroserviceFCC


You should provide your own project, not the example URL.

Waiting:A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)


Waiting:A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT


Waiting:A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }


Waiting:Your project can handle dates that can be successfully parsed by new Date(date_string)


Waiting:If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }


Waiting:An empty date parameter should return the current time in a JSON object with a unix key


Waiting:An empty date parameter should return the current time in a JSON object with a utc key
