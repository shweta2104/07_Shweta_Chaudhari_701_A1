const express = require("express")
const app = express()

app.use(express.static('static'));
app.get("/getHello", (req, res) => {
    res.send("Hello NodeJS")
})
app.listen(8000)