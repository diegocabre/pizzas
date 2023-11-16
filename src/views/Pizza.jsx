import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
export const Pizza = () => {
    const [selectpizzas, setSelectPizzas] = useState(null);
    const { pizzas } = useContext(MyContext);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setSelectPizzas(pizzas);
    }, [pizzas]);

    return (
        <div>
            <div className="grid container d-flex justify-content-center mt-5 mb-5 p-5 bg-light rounded shadow w-75 mx-auto">
                {selectpizzas?.map((pizza) => (
                    <div className="col" key={pizza.id}>
                        <div className="card h-100">
                            <img
                                src={pizza.img}
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h3 className="card-title">{pizza.name}</h3>
                                <li className="card-text">{pizza.ingredients[0]}</li>
                                <li className="card-text">{pizza.ingredients[1]}</li>
                                <li className="card-text">{pizza.ingredients[2]}</li>
                                <li className="card-text">{pizza.ingredients[3]}</li>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <small className="text-muted">{pizza.price}$</small>
                                </div>
                                <Button
                                    onClick={() => navigate(`/carrito/${pizza.id}`)}
                                    className="btn btn-primary"
                                >
                                    Añadir
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}