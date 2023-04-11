const express = require("express")
const app = express()
const port = 4000

/* --------------------------------------------------------- */

// Public register
app.use(express.static(__dirname + "/public"))

// Routes
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works", (req, res) => {
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/photogallery", (req, res) => {
    res.sendFile(__dirname + "/views/photogallery.html")
})

app.listen(port, () => {
    console.log(`Listening in port ${port}`)
})

// http://localhost:4000/