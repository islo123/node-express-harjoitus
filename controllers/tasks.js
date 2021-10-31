const Task = require("../models/task.js")

const getAllTasks =async function (req, res){
    try{
        // Query
        const tasks = await Task.find({}) // tasks nimi on taulu ja se pitä olla sama backendissa ja front-endissa
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg: error})
    }
}

const createTask = async function (req,res){
    try{
        const task = await Task.create(req.body) // POST eli tee Task bodyssa eli uusi task
        res.status(201).json({task}) // jos status 201 näyttää json  task
    }catch(error){
        res.status(500).json({msg: error})
    }

}

const getTask = async function (req,res){
    try{
        const {id: taskID}= req.params
        const task = await Task.findOne({_id: taskID})//_id tule mongodb:n tekemästä id:stä
        
        if(!task){
            return res.status(404).json({msg: `no Task with id ${taskID}`})//viesti tule vain jos id:ssä on yhtä paljon characters kuin mongoDB teke ja jos on väärin kirjaimet. 
        }
        res.status(200).json({task})
    }catch (error){
        res.status(500).json({msg: error})//Jos on vähemän kirjaimija erroriksi tule mongoosen tekemä error.
    }
}

const deleteTask = async function (req,res){
    try{
        const {id: taskID} = req.params
        const task= await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `no Task with id ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg: error})
    }
}
const updateTask = async function (req,res){
    try{
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{
            new: true,
            runValidators: true
        }) // Find id ja uptdate body. new return new item. runValidators make validatoring work esim. required
        if(!task){
            return res.status(404).json({msg: `no task with id ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg: error})
    }
}


/* seurava funktio käytetän patch funktion tilalla 
const editTask = async function (req,res){
    try{
        const {id: taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{
            new: true,
            runValidators: true,
            overwrite: true // Tämä on jotain jotta ei ole patchissa
        })
        if(!task){
            return res.status(404).json({msg: `no task with id ${taskID}`})
        }
        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg: error})
    }
}*/
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    
}