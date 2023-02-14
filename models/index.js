const db = {};

db.users = require('./users')
db.posts = require('./posts')
db.comments = require('./comments')

module.exports = db;