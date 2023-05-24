import "./App.css";
import Converter from "./components/Converter";
import Footer from "./vistas/Footer";
import Title from "./vistas/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <Converter />
      <Footer />
    </div>
  );
}

export default App;
