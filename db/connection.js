const mongoose = require("mongoose")




const connectDB = function (url){

return mongoose.connect(url,{
    // Seuravat boolean values ovat sitä varten että konsolin ei näy varoituksia
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true

})
}

module.exports = connectDB;