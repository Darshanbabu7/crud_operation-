const express = require('express')

const {addUsers,
        getUsers,
        getSingleUser,
        updateUser,
        deleteUser,
        validateUser
        } = require("../controller/user.controller")


let router = express.Router()

router.post("/adduser",addUsers)
router.get("/getusers",getUsers)
router.get("/getuser/:id",getSingleUser)
router.put("/updateuser/:id",updateUser)
router.delete("/deleteuser/:id",deleteUser)
router.post("/validateuser",validateUser)


module.exports=router