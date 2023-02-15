//Controller related to users ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db =require('../orm/index.js');
const User = db.User ;  

module.exports = {
    //method to add  a new user
    addUser:async (req, res)=> {
        let schema = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber,
        }
        const user = await User.create(schema)
        res.status(200).send(user)
    },
    // update User information in database
    updateUser:async (req, res)=> {
        let schema = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            adress: req.body.adress,
            phoneNumber: req.body.phoneNumber,
        }
        const user = await User.update(schema, {
            where: {
                id: req.params.idU
            }
        })
        res.status(200).send(user)
    },
    // delete User information in database
    deleteUser:async (req, res)=> {
        const user = await User.destroy({
            where: {
                id: req.params.idU
            }
        })
        res.status(200).send("user deleted successfully")
    }
   
}