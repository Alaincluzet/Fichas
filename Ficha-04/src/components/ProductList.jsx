import ProductCard from "./ProductCard";
function ProductList({ productos, agregarAlCarrito }) {
  return (
    <>
      <div className="container">
        {productos.map((producto) => (
          <ProductCard
            key={producto.id}
            producto={producto}
            agregarAlCarrito={agregarAlCarrito}
          ></ProductCard>
        ))}
      </div>
    </>
  );
}
export default ProductList;
