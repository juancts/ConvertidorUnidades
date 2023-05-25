import "./App.css";
import Cards from "./components/Cards/Cards";
import Converter from "./components/Converter/Converter";

import Footer from "./vistas/Footer";
import Title from "./vistas/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Converter />
      <h2>saved</h2>
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
