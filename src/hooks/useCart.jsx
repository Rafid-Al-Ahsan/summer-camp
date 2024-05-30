import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {

    const [course, setCourse] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5001/carts/${user?.email}`)
        .then(response => response.json())
        .then(data => {
            setCourse(data); 
        })
    }, [course])

    return [course]
};

export default useCart;