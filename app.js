// pull in Express for web server functionality
const express = require('express');
// create an instance of Express 
const app = express();

app.get("/api/timestamp/:date", (req, res) => {
    const date = new Date(req.params.date);
    const timestampObj = {'unix': date.getTime(), 'utc': date.toUTCString()};
    return res.status(200).json(timestampObj);
});

// Export the express instance.
module.exports = app;
