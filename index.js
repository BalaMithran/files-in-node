const express = require('express')
const app = express()
var fs = require('fs')

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('view engine', 'ejs')

app.get('/', (req, res) => { res.render("index.ejs") })

app.post('/final', urlencodedParser, (req, res) => {
    res.render("received.ejs", { fname: req.body.fname, lname: req.body.lname, rno: req.body.rno, language1: req.body.language1, language2: req.body.language2, language3: req.body.language3 })
    const eol = "\n\n---------------------------------------------------------------"
    fs.appendFile('userdata.txt', "\n\nUSER DATA \n\n".concat(req.body.fname, "\t", req.body.lname, "\t", req.body.rno, "\t", req.body.language1, "\t", req.body.language2, "\t", req.body.language3, eol), (err) => {
        if (err) {
            console.log("error");
        }
        else {
            console.log("success");
        }
    })
})
app.listen(3000)
