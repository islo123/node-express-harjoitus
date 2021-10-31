const express = require("express")
const app = express()
const tasks =  require("./routes/tasks.js")
const connectDB = require("./db/connection")
require("dotenv").config()






//middleWare
app.use(express.static("./public"))
app.use(express.json())


//Routes
app.use("/api/v1/tasks", tasks)

const port = 3000
const start = async function (){
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, function (){
        console.log(`App running port: ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()