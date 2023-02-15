//Controller related to comments ressource.
//Complete the request handlers with models interaction after importing them from the database folder
const db= require('../orm/index.js');
const Fournisseur= db.Fournisseur
module.exports = {

// method to add a new fournisseur
    addFournisseur:async (req, res)=> {
        let schema = {
            CompanyName: req.body.CompanyName,
            manager: req.body.manager,
            email: req.body.email,
            password: req.body.password,
            image: req.body.image,
            adress: req.body.adress,
        }
        const product = await Fournisseur.create(schema)
        res.status(200).send(product)
    },
// method to update fournisseur information in the database
updateFournisseur:async (req, res)=> {
    let id=req.params.idF
    const product = await Fournisseur.update(req.body,{where:{id:id}})
    res.status(200).send(product)
},

// method to delete a fournisseur account 
deleteFournisseur:async (req, res)=> {
    let id=req.params.idF
    const product = await Fournisseur.destroy({where:{id:id}})
    res.status(200).send('account deleted')
}



}

