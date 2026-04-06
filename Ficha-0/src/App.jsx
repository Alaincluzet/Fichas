import "./App.css";
import CardComponent from "./components/ui/CardComponent";
function App() {
  return (
    <>
      <CardComponent
        name="Usuario Random"
        description="Esta es una descripción"
        link="https://img.freepik.com/vector-gratis/meme-cuadrado-gato-vibrante-simple_742173-4493.jpg?semt=ais_hybrid&w=740&q=80"
      />
      <CardComponent
        name="Usuario Random2"
        description="Esta es otra descripción"
        link="https://media.tenor.com/u6002ayqdi4AAAAM/good-morning.gif"
      />
      <CardComponent
        name="Usuario Random3"
        description="This is another descripción"
        link="https://media.tenor.com/tYn9xUGeBqEAAAAe/tuvieja.png"
      />
      <CardComponent
        name="Usuario Random4"
        description="Esta es otra wey"
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkVwtTOnyaMldW3MEI0DyaghEtagFEBwfuA&s"
      />
    </>
  );
}

export default App;
