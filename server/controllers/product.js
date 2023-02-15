const db= require('../orm/index.js');
const Product= db.Product
module.exports = {
    //method to fetch all product from  database
    getAllProduct:async (req, res)=> {
        let products = await Product.findAll({})
        res.status(200).send(products)
        },
// method to add a product to the product table
    addProduct:async (req, res)=> {
        let schema = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.body.image,
            category: req.body.category,
        }
        const product = await Product.create(schema)
        res.status(200).send(product)
    },
// method to update a product 
updateProduct:async (req, res)=> {
    let id=req.params.idP
    const product = await Product.update(req.body,{where:{id:id}})
    res.status(200).send(product)
},

// method to delete a product 
deleteProduct:async (req, res)=> {
    let id=req.params.idP
    const product = await Product.destroy({where:{id:id}})
    res.status(200).send('Product deleted')
}
}

