const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/itemlist', (req, res) => {
    res.send([
        {id: 1, name: "xxx", price: 233}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
        , {id: 2, name: "yyy", price: 433}
    ])
})

let server = app.listen(3031, () => {
    let host = server.address().address
    let port = server.address().port

    console.log("instance is http://%s:%s", host, port)
})