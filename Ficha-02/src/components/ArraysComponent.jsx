import { useState } from "react";

function TarjetaPersona({ nombre, rol }) {
  return (
    <article className="tarjeta-persona">
      <h2>{nombre}</h2>
      <p>{rol}</p>
    </article>
  );
}

function ArraysComponent() {
  const [mostrarNombres, setMostrarNombres] = useState(true);

  const juegos = [
    { id: "Activision", nombre: "Assassin's creed" },
    { id: "Riot Games", nombre: "League of Legends" },
    { id: "2k Games", nombre: "Borderlands" },
    { id: "Supergiant Games", nombre: "Hades" },
    { id: "Blizzard", nombre: "Diablo" },
  ];

  const personas = [
    { nombre: "Ana", rol: "Frontend" },
    { nombre: "Juan", rol: "Backend" },
    { nombre: "Lucia", rol: "UX" },
  ];

  const nombres = ["Sofia", "Mateo", "Valentina", "Thiago", "Martina"];

  return (
    <section className="personas-section">
      <h1>Juegos</h1>
      <ul className="juegos-lista">
        {juegos.map((juego) => (
          <li key={juego.id}>{juego.nombre}</li>
        ))}
      </ul>

      <h1>Equipo</h1>
      <div className="personas-grid">
        {personas.map((persona) => (
          <TarjetaPersona
            key={persona.nombre}
            nombre={persona.nombre}
            rol={persona.rol}
          />
        ))}
      </div>

      <h1>Lista de nombres</h1>
      <button
        className="toggle-lista"
        onClick={() => setMostrarNombres(!mostrarNombres)}
      >
        {mostrarNombres ? "Ocultar lista" : "Mostrar lista"}
      </button>

      {mostrarNombres && (
        <ul className="nombres-lista">
          {nombres.map((nombre) => (
            <li key={nombre}>{nombre}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ArraysComponent;
