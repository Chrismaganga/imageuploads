const express = require('express')
const server = express()
const response = require('./src/utils//responses')
const db = require('./src/database/config/db.config')
const port = process.env.APP_PORT

server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.all('*', (req, res, next)=>{
    response(res, 404, 'Page not found.')
})

db.authenticate()
.then(()=>{
    server.listen(port, ()=>{
        console.log('DB connected')
        console.log(`Server is running on ${process.env.BASE_URL}\n`)
    })
}).catch((error)=>{
    console.log(error.message)
})