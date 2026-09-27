const Database = require("better-sqlite3");
const products = require("./data/products");

const db = new Database("database.sqlite");

const insertProduct = db.prepare(`
  INSERT INTO products (id, name, price, category, image)
  VALUES (?, ?, ?, ?, ?)
`);

for (const product of products) {
  insertProduct.run(
    product.id,
    product.name,
    product.price,
    product.category,
    product.image
  );
}

console.log("Productos migrados correctamente");

db.close();