import { useEffect, useState } from "react";

const useCart = () => {

    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/carts')
        .then(response => response.json())
        .then(data => {
            setCourse(data); 
        })
    }, [course])

    return [course]
};

export default useCart;