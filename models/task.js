const mongoose = require("mongoose")


const TaskSchema = new mongoose.Schema({
    name: {
        type: String, // Sanotan konelle että name on String eli sitä luetan niin kuin kirjoitaisin "" välissä
        required: [true, "Must be required"], // required true, vaati sen että name pitä täyttää toinen value on msg
        trim: true, // Trim true poista kaikki välilyönit ja valkoinen tila
        maxlength: [20, "Name canot be more than 20 characters long"], // maxLength 20 tarkoittaa että maksimi pitus on 20 kirjainta ja seurava value on msg

        },
    completed: {
        type: Boolean,
        default: false, // Ei ole completed normalisti, eli pitä itse aseta true
    }
})


module.exports = mongoose.model("Task", TaskSchema)