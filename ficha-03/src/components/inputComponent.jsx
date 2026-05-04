import { useState } from "react";

function InputComponent() {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [datos, setDatos] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatos({
      nombre: nombre,
      edad: edad,
      titulo: titulo,
      descripcion: descripcion,
    });
  };
  if (datos) {
    return (
      <div>
        <h1>Formulario enviado:</h1>
        <p>Nombre: {datos.nombre}</p>
        <p>Edad: {datos.edad}</p>
        <p>Titulo: {datos.titulo}</p>
        <p>Descripcion: {datos.descripcion}</p>
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>¡Hola, {nombre}!</p>
        <label>Edad</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />

        <label>Titulo</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <label>Descripcion</label>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default InputComponent;
