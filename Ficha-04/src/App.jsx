import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Carrito from "./components/Carrito";
import ProductCard from "./components/ProductCard";
function App() {
  const productos = [
    { id: 1, nombre: "Remera", precio: 1200 },
    { id: 2, nombre: "Pantalón", precio: 1500 },
    { id: 3, nombre: "Campera", precio: 2000 },
    { id: 4, nombre: "Musculosa", precio: 2500 },
  ];
  const [carrito, setCarrito] = useState([]);
  const agregaralCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };
  return (
    <div className="container">
      <h1>Tienducha - Ficha-04</h1>
      <ProductList productos={productos} agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} />
    </div>
  );
}

export default App;
