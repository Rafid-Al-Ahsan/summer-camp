import { useContext} from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {

    const {user} = useContext(AuthContext);

    // Method1: Using useEffect
    // const [course, setCourse] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5001/carts/${user?.email}`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setCourse(data); 
    //     })
    // }, [course])

    // return [course]

    // Method2: Using tanstack query
    // Used in 3 component MyCart, PopularClass, ClassesPage
    const { refetch, data: cart= [], } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5001/carts/${user?.email}`)
            return response.json();
        },
      })
    
      return [cart, refetch]
};

export default useCart;