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
    <div className="home">
      {pizzasData.map((pizzasData) => (
        <div key={pizzasData.id}>
      <Card className="containerPizza">
        <Card.Img className="imgPizza" variant="top" src={pizzasData.img} />
        <Card.Body className="bodyPizza">
          <Card.Title className="titlePizza">{pizzasData.name}</Card.Title>
         {pizzasData.ingredients.map((ingredient) => (
           <Card.Text className="textPizza" key={ingredient}>{ingredient}</Card.Text>
         ))}
          <button className="buttonAdd" onClick={() => agregarAlCarrito(pizzasData)}>Añadir</button>
          <button className="buttonBack" onClick={() => navigate(`/pizza/${pizzasData.id}`)}>Ver Más</button>
        </Card.Body>
      </Card>
      </div>
      ))}
    </div>
  );
};

export default Home;
