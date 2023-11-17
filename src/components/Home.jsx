import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useContext(MyContext);
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    axios.get("../../public/pizzas.json").then((res) => {
      setPizzas(res.data);
    });
  }, []);

  return (
    <div>
      {pizzas &&
        pizzas.map((pizza) => (
          <div className="containerPizza" key={pizza.id}>
            <div className="title">
              <h2>{pizza.name}</h2>
            </div>
            <div className="img">
              <img src={pizza.img} alt={pizza.name} />
            </div>
            <div className="ingredients">
            <li>{pizza.ingredients[0]}</li>
              <li>{pizza.ingredients[1]}</li>
              <li>{pizza.ingredients[2]}</li>
              <li>{pizza.ingredients[3]}</li>
            </div>
            <div className="price">
              <p>${pizza.price}</p>
            </div>
            <div className="button">
              <button onClick={() => addToCart(pizza)}>
                Agregar al Carrito
              </button>
              <button onClick={() => navigate("/pizza/" + pizza.id)}>
                Ver más
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
