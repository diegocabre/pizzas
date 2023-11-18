import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import "./Home.css";
import { Card } from "react-bootstrap";

const Home = () => {
  const { pizzas, agregarAlCarrito } = useContext(MyContext);
  const navigate = useNavigate();
  const [pizzasData, setPizzasData] = useState([]);

  useEffect(() => {
    setPizzasData(pizzas);
  }, [ pizzas ]);

  return (
    <div>
      {pizzasData.map((pizzasData) => (
        <div key={pizzasData.id}>
      <Card>
        <Card.Img variant="top" src={pizzasData.img} />
        <Card.Body>
          <Card.Title>{pizzasData.name}</Card.Title>
          <Card.Text>{pizzasData.ingredients[0]}</Card.Text>
          <Card.Text>{pizzasData.ingredients[1]}</Card.Text>
          <Card.Text>{pizzasData.ingredients[2]}</Card.Text>
          <Card.Text>{pizzasData.ingredients[3]}</Card.Text>
          <button>Añadir</button>
          <button onClick={() => navigate(`/pizza/${pizzasData.id}`)}>Ver Más</button>
        </Card.Body>
      </Card>
      </div>
      ))}
    </div>
  );
};

export default Home;
