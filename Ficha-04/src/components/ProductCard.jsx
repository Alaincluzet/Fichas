function ProductCard ({producto, agregarAlCarrito}) {
    return (
        <div className="card-content">
<h2>{producto.nombre}</h2>
<p>${producto.precio}</p>
<button onClick={() => agregarAlCarrito(producto)}>Agregar al tocarri</button>
        </div>
    )
}
export default ProductCard