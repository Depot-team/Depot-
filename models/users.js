// import the database connection


module.exports = {
    //a function which fetches all the users.
    getAll: function (callback) {
      const sql = 'SELECT * FROM `users`'
      conn.query(sql, function (error, results, fields) {
        callback(error, results);
      });
    },
      //a function that retrieves one user record based on the provided id.
      getOne: function() {
      
      },
      // a function that can be used to add a user to the users table.
      add: function () {
      
      } 
    };