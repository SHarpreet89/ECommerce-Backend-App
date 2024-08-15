const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define one-to-many relationship between Category and Product
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Define many-to-many relationship between Product and Tag through ProductTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'
});

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag
};