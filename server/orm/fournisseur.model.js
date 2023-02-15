// Define and export the sequelize model that represents the table comments.

module.exports = (sequelize, DataTypes) => {
    const fournisseur = sequelize.define("fournisseur", {
      idF:{ type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true},
        CompanyName:{ type:DataTypes.STRING},
        manager:{ type:DataTypes.STRING},
        email:{ type:DataTypes.STRING},
        password:{ type:DataTypes.STRING},
        image:{ type:DataTypes.STRING},
        adress:{ type:DataTypes.STRING},
        phoneNumber:{ type:DataTypes.INTEGER},
        
       
    });
  
    return fournisseur;
  };