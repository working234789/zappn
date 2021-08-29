var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log("zappn running on port " + port);
	


app.get("/ping", (req, res, next) => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "." + today.getMilliseconds();
    var dateTime = date + ' ' + time;
    var timestamp = today.valueOf();

    res.json(
            {
                "app": "zappn",
                "ping": "OK",
                "time": dateTime,
                "timestamp": timestamp
            }
        );
   });