import "./App.css";
import Cards from "./components/Cards/Cards";
import Converter from "./components/Converter/Converter";

import Footer from "./vistas/Footer";
import Title from "./vistas/Title";

function App() {
  return (
    <div align="center">
      <Title />
    <div className="App">
      <Converter />
      <h2>saved</h2>
      <Cards />
      <Footer />
    </div>
    </div>
  );
}

export default App;
