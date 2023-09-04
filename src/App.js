import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Modall from "./components/Modall";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
function App() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal=() =>{
    setIsOpen(true);
  }
  const closeModal=() =>{
    setIsOpen(false);
  }
  return (
    <div>
      <Navbar openModal={openModal}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product />}/>
      </Routes>
      <Modall openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen}/>
      <Footer/>
    </div>
  );
}

export default App;
