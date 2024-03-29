import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import { Pizza } from "./components/Pizza";
import { Cart } from "./components/Cart";
import { NavBar } from "./components/NavBar";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}
