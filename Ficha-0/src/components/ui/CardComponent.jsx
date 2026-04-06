function CardComponent(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <a href={props.link}>Click acá!</a>
      <img
        src="https://img.freepik.com/vector-gratis/meme-cuadrado-gato-vibrante-simple_742173-4493.jpg?semt=ais_hybrid&w=740&q=80"
        alt="usuario"
      />
    </>
  );
}

export default CardComponent;
