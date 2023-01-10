import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/pages/catalog";
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Cart from "./components/pages/cart";
import Test from "./components/pages/test";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <img src={"/images/background.png"} alt=""></img> */}
        <NavBar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/catalog" element={<Catalog />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/test" element={<Test />}></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
