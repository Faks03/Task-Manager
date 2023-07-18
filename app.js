const express = require('express')
const app = express()
const path = require('path')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
const errorHandle = require('./middleware/error-handle')

require('dotenv').config()

//middleware
app.use(express.json());

app.use(express.static('./public'));

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandle)

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, ()=>{
            console.log('Listening on port 5000');
        })
    } catch (error){
        console.log(error)  
    }
}

start()


