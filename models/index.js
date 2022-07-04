const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Blog, { foreignKey: 'user_id', onDelete: 'cascade' });
//Comment.belongsTo(Blog, { foreignKey: 'blog_id' });
Blog.hasMany(Comment, { foreignKey: 'blog_id', onDelete: 'cascade' });
//Comment.belongsTo(User, { foreignKey: 'id' });


module.exports = { User, Blog , Comment };
