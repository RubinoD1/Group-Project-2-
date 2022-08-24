// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const List = require('./List');
const ListTag = require('./ListTag');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Product, {
  foreignKey: 'user_id',
});

// Categories have many Products

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

User.hasMany(List, {
  foreignKey: 'user_id',
});

List.belongsTo(User, {
  foreignKey: 'user_id',
});

List.belongsToMany(Product, {
  through: ListTag,
  foreignKey: 'list_id',
});

Product.belongsToMany(List, {
  through: ListTag,
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
  List,
  ListTag,
};
