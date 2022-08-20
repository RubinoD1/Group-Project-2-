// import modelst
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const User = require('./User');
const Shopping = require('./Shopping');

// Products belongsTo Category

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Product, {
  foreignKey: 'user_id'
});

Shopping.belongsTo(Product, {
  foreignKey: 'product_id'
});

/*
Product.belongsTo(Shopping, {
  foreignKey: 'product_id'
});
/*
Shopping.hasMany(Product, {
  foreignKey: 'product_id'
});

Product.belongsTo(Shopping, {
  foreignKey: 'product_id's
});
*/
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

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
  User,
  Shopping,
};
