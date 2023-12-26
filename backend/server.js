const express = require('express')
const connectdb = require('./config/connectdb')
const contactRouter = require('./routes/contactRoute')
const cors = require('cors')

const app = express()

const port = 5000

app.use(express.json())

connectdb()

app.use(cors())
app.use('/contact',contactRouter)


app.listen(port,err=>{
    err?console.log(err):console.log(` go to ${port}`)
})