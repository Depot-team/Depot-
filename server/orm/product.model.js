// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define("product", {
      id :{type:DataTypes.INTEGER, 
      primaryKey:true,
      autoIncrement:true,
      },
      name: {type: DataTypes.STRING},
      price: {type: DataTypes.INTEGER},
      image:{type:DataTypes.STRING},
      description: {type: DataTypes.STRING},
      category: {type: DataTypes.STRING},
      quantity: {type: DataTypes.INTEGER}, 
    });
  
    return product;
  };