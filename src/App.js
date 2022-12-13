import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/pages/catalog";

function App() {
  return (
    <div className="App">
      {/* <img src={"/images/background.png"} alt=""></img> */}
      <NavBar />
      <div className="page-content">
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
