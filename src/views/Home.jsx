import { useContext, useState, useEffect} from "react";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";

export const Home = () => {
  const { pizzas } = useContext(MyContext);
  const navigate = useNavigate();
  const [selectpizzas, setSelectPizzas] = useState(null);

  useEffect(() => {
    setSelectPizzas(pizzas);
  }, [pizzas]);
  const getPizzas = async () => {
    if (!pizzas) return;
    navigate(`/pizza/${pizzas[0].name}`);
  };

  return (
    <div className="container d-flex justify-content-center mt-5 mb-5 p-5 bg-light rounded shadow w-75 mx-auto">
        {selectpizzas?.map((pizza) => (
        <Card className="d-flex flex-column align-items-center"  key={pizza.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pizza.img} />
            <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>
                <li>{pizza.ingredients[0]}</li>
            </Card.Text>
            <Card.Text>
            <li>{pizza.ingredients[1]}</li>
            </Card.Text>
            <Card.Text>
            <li>{pizza.ingredients[2]}</li>
            </Card.Text>
            <Card.Text>
            <li>{pizza.ingredients[3]}</li>
            </Card.Text>
            <Card.Text>
                <p>Precio: ${pizza.price}</p>
            </Card.Text>
            <Button variant="primary" onClick={() => getPizzas()}>
                Ver más
            </Button>
            <Button variant="primary" onClick={() => navigate(`/carrito/${pizza.name}`)}>
                Agregar al carrito
            </Button>
            </Card.Body>
        </Card>
        ))}
    </div>
  );
}