import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "./Home.css";
import { Card } from "react-bootstrap";

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
      <Card className="containerPizza" style={{ width: "18rem" }}>
        <Card.Img className="imgPizza" variant="top" src={pizza2.img} />
        <Card.Body className="bodyPizza">
          <Card.Title className="titlePizza">{pizza2.name}</Card.Title>
          <Card.Text className="textPizza">{pizza2.desc}</Card.Text>
          {pizza2.ingredients.map((ingredient) => (
            <Card.Text className="textPizza" key={ingredient}>{ingredient}</Card.Text>
          ))}
          <button className="buttonAdd" onClick={() => agregarAlCarrito(pizza2)}>Añadir</button>
          <button className="buttonBack" onClick={() => navigate("/home")}>Volver</button>
        </Card.Body>
      </Card>
    </div>
  );
};
