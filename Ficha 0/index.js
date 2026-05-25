const express = require("express");
const app = express();

const productos = [
  { id: 1, nombre: "Remera" },
  { id: 2, nombre: "tuviejaentanga" },
  { id: 3, nombre: "Pantalón" },
];

function listarProductos() {
  console.log(productos);
}

function agregarProducto(nombre) {
  productos.push({ id: productos.length + 1, nombre: nombre });
}
function buscarProducto(id) {
  const productoEncontrado = productos.find((producto) => producto.id === id);
  return productoEncontrado;
}
function modificarProducto(id, nuevoNombre) {
  const productoEncontrado = productos.find((producto) => producto.id === id);
  if (productoEncontrado) {
    productoEncontrado.nombre = nuevoNombre;
  }
}
app.get("/productos", (req, res) => {
  res.json(productos);
});

app.get("/", (req, res) => {
  res.send("Bienvenidos a mi backend");
});

app.get("/productos/:id", (req, res) => {
  res.json(buscarProducto(Number(req.params.id)));
});
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
