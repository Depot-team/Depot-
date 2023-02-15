const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config.js');

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize(config.DATABASE, config.USER, config.PASSWORD, {
    HOST: 'localhost',
    dialect: 'mysql'
  });
  sequelize.authenticate()
  .then(()=>{console.log('Successfully authenticated')})
  .catch(err => {console.log(err)})



//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./users.model.js')(sequelize,DataTypes) //require the user model
db.Product = require('./product.model.js')(sequelize,DataTypes)//require the post model
db.Fournisseur = require('./fournisseur.model.js')(sequelize,DataTypes)//require the comment model

db.sequelize.sync({force:false})
.then(()=>{console.log('heki li ma na3rfouhech')})
.catch(err => {console.log('err')})
  

// 1 to many relationship  user product 

db.User.hasMany(db.Product, {
as :"products"})
db.User.belongsTo(db.Product,{
  foreignKey: "idU",
  as: "User",
  constraints: false,
})

// 1 to many relationship  product fournisseur
db.Fournisseur.hasMany(db.Product,{
  as :"products"})
  db.Fournisseur.belongsTo(db.Product,{
  foreignKey: "idF",
  as: "Fournisseur",
 
})



module.exports = db;
