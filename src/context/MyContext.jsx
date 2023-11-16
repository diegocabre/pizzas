import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const getPizzas = async () => {
        const res = await axios.get("./pizzas.json");
        setPizzas(res.data);
    };

    useEffect(() => {
        getPizzas();    
    }, []);

    return (
        <MyContext.Provider value={{ pizzas }}>
            {children}
        </MyContext.Provider>
    )
}
