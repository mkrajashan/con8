const express = require('express');

const app = express(); // express Js instance... express js application created // Creating a new web server

/// Call the listen with the port..

// Request Handler... 
app.use("/test", (req, res) => {
    res.send("Hello from server here okies.. again  !!");
});

app.listen(3000, () => {
    console.log(" Successfully listeing on 3000 port");
});






