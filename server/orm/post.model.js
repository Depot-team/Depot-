// Define and export the sequelize model that represents the table posts.

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("posts", {
      
    });
  
    return Post;
  };