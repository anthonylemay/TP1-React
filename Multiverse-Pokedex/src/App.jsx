import Card from "./components/card/card";

function App() {
  return (
    <section className="app">
      <Card
      ImgSrc="./images/staryu.svg"
      ImgAlt="Illustration du pokémon"
      loading="lazy"
      width="30px"
      height="30px"
      title="test"
      ability="abilité 1"
      />
    </section>
  );
}

export default App;
