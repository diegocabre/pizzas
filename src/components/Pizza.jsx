import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { Card } from "react-bootstrap";
import "./Pizza.css";

export const Pizza = () => {
  const { pizzas } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();
  function agregarAlCarrito(pizza) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(pizza);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    navigate("/carrito");
  }

  function buscarPizza(id) {
    return pizzas.find((pizza) => pizza.id === id);
  }

  const pizza2 = buscarPizza(id);

  return (
    <div>
      <Card className="containerPizza2">
        <Card.Img className="imgPizza2" variant="top" src={pizza2.img} />
        <Card.Body className="bodyPizza">
          <Card.Title className="titlePizza2">{pizza2.name}</Card.Title>
          <Card.Text className="textPizza2">{pizza2.desc}</Card.Text>
          {pizza2.ingredients.map((ingredient) => (
            <Card.Text className="textPizza2" key={ingredient}>{ingredient}</Card.Text>
          ))}
          <Card.Text className="textPizza2">Precio: ${pizza2.price}</Card.Text>
          <button className="buttonAdd" onClick={() => agregarAlCarrito(pizza2)}>Añadir</button>
          <button className="buttonBack" onClick={() => navigate("/home")}>Volver</button>
        </Card.Body>
      </Card>
    </div>
  );
};
