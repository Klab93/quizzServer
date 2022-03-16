const express = require('express')
const app = express()
const fs = require('fs')

fs.writeFile('email.txt', 'List of email address\n ============', (err) => {
    if (err) return console.log(err)
    console.log("email.txt created")
})

app.use(express.json())

app.post('/', (req, res) => {

    fs.appendFile('email.txt', `\n${req.body.email}`, (err) => {
        if (err) return console.log(err)
        console.log("done")
    })
    res.send("register email address!")
})

app.listen(3000)
