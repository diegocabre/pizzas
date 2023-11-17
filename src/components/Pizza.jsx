import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

export const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!id) return;
    const getPizza = async () => {
      const response = await axios.get("../../public/pizzas.json");
      setPizza(response.data);
    };
    getPizza();
  }, [id]);

  return (
    <div>
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img   variant="top" src={pizza?.img} />
        <Card.Body>
          <Card.Title>{pizza?.name}</Card.Title>
          <Card.Text>{pizza?.description}</Card.Text>
          <Card.Text>${pizza?.price}</Card.Text>
          <button onClick={goBack}>Volver</button>
          <button>Comprar</button>
        </Card.Body>
      </Card>
    </div>
  );
};
