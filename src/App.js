import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/pages/catalog";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="page-content">
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
