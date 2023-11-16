import NavBar from "./components/NavBar";
import { Navigate, Routes, Route } from "react-router-dom";
import { Pizza } from "./views/Pizza";
import { Carrito } from "./views/Carrito";
import { Home } from "./views/Home";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza:id" element={<Pizza />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
