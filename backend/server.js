const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");

const db = new Database("database.sqlite");
console.log(
  db.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all()
);
const app = express();

//Permite que React se comunique con el backend//
app.use(cors());
//Express pueda leer datos JSON enviados en el cuerpo de una petición POST//
app.use(express.json());
app.use("/assets", express.static("../src/assets"));

const PORT = 3000;

//Prueba que funcione el backend//
app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

//Express.js envía la información de los productos al front end//
app.get("/api/products", (req, res) => {
  try {
  const products = db.prepare("SELECT * FROM products").all();

  const productsWithImages = products.map((product) => ({
    ...product,
    image: `http://localhost:3000/assets/${product.image}`
  }));

  res.json(productsWithImages);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    res.status(500).json({ message: "Error al obtener los productos" 
    });
  }
});
//Parámetro de rutas: devuelve productos según su ID//
app.get("/api/products/:id", (req, res) => {
  try {
  const id = Number(req.params.id);

  //const product = products.find((product) => product.id === id);//
  const product = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(id);

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  const sizes = db 
    .prepare(`
    SELECT size, stock
    FROM product_sizes
    WHERE product_id = ?
    ORDER BY size
    `)
    .all(id);

  res.json({
    ...product,
    image: `http://localhost:3000/assets/${product.image}`,
    sizes
  });
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
});
//Añadir nuevos productos//
app.post("/api/products", (req, res) => {
  //Añadir try catch para manejo de errores//
  try {
  const { id, name, price, category, image } = req.body;

  const insertProduct = db.prepare(`
    INSERT INTO products (id, name, price, category, image)
    VALUES (?, ?, ?, ?, ?)
  `);

  insertProduct.run(id, name, price, category, image);

    res.status(201).json({
    id,
    name,
    price,
    category,
    image
  });
  } catch (error) {
    console.error("Error al insertar el producto:", error);
    res.status(500).json({ 
      message: "Error al insertar el producto" });
  }

  //201 significa created//
});

//Añadir productos en postman con método PUT//
app.put("/api/products/:id", (req, res) => {
  try {
  const id = Number(req.params.id);

  const { name, price, category, image } = req.body;

  const updateProduct = db.prepare(`
    UPDATE products
    SET name = ?, price = ?, category = ?, image = ?
    WHERE id = ?
  `);

  const result = updateProduct.run(
    name,
    price,
    category,
    image,
    id
  );

  if (result.changes === 0) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }

  const updatedProduct = db
    .prepare("SELECT * FROM products WHERE id = ?")
    .get(id);
  
    res.json(updatedProduct);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      res.status(500).json({ message: "Error al actualizar el producto" });
    }
 
});
//Eliminar productos con DELETE//
app.delete("/api/products/:id", (req, res) => {
  try {
  const id = Number(req.params.id);

  const deleteProduct = db.prepare(`
    DELETE FROM products WHERE id = ?
  `);

  const result = deleteProduct.run(id);

  if (result.changes === 0) {
    return res.status(404).json({
      message: "Producto no encontrado"
    });
  }
  
  res.json({
    message: "Producto eliminado"
  });
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});