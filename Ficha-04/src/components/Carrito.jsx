function Carrito({ carrito }) {
  const total = carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio,
    0,
  );
  return (
    <div className="cart">
      <h2>Carrito</h2>

      {carrito.length === 0 ? (
        <p>No se encuentran artículos en su carrito actualmente</p>
      ) : (
        <div>
          {carrito.map((producto, index) => (
            <p key={index}>
              {producto.nombre} - ${producto.precio}
            </p>
          ))}

          <h3>Total: ${total}</h3>
        </div>
      )}
    </div>
  );
}
export default Carrito;
