const {user} = require('../routes/Data')


const getAllUser = (req,res)=>{
    console.log(user)   
    res.json(user)
}

const getUser = (req,res)=>{
    console.log(typeof user)
    const foundUser = user.filter((elem, i) =>{
        return i == req.params.id 
    })

    if(foundUser.length > 0){
    res.send(foundUser[0])
    return
    }
    res.status(404).send("user not found")
}

const addNewUser = (req,res)=>{
    const addedUser = {
        id: req.body.id,
        jobtitle: req.body.jobtitle,
        firstname: req.body.firstname,
    }

    user.push(addedUser)

    res.status(201).send(addedUser);
}

const updateUser = (req,res)=>{
    const userId = req.query.id
    user.forEach((elem,i)=>{
        if(i == userId){
            elem.FirstName = req.body.firstname;
            elem.Id= req.body.id;
            elem.JobTitle = req.body.JobTitle;
        }
    })
}

module.exports = {getAllUser,getUser,updateUser,addNewUser}