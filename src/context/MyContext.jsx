import React, { useState, useEffect, createContext } from "react";
import jsonData from "../../public/pizzas.json";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    setPizzas(jsonData);
  }, []);

  const agregarAlCarrito = (pizza) => {
    setCarrito((prevCarrito) => [...prevCarrito, pizza]);
  };

  const removerDelCarrito = (pizzaId) => {
    setCarrito((prevCarrito) =>
      prevCarrito.filter((pizza) => pizza.id !== pizzaId)
    );
  };

  return (
    <MyContext.Provider
      value={{ pizzas, carrito, agregarAlCarrito, removerDelCarrito }}
    >
      {children}
    </MyContext.Provider>
  );
};
