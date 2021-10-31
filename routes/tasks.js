const express = require("express")
const router = express.Router()
const {getAllTasks, getTask, deleteTask, updateTask, createTask, editTask} = require("../controllers/tasks.js")


router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask)// put ja patch ero on että kun patchin kirjoitetan name : "Nimi" se laita kaiken muun niin kuin oli ja put näyttää vain nimen.




module.exports = router;