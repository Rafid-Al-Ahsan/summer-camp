import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './provider/AuthProvider';

const PaymentHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const [payment, setPayment] = useState([]);

    // remember to set the dependency of useEffect or else after reload the  data won't display
    useEffect(() => {
        fetchPayment();
    }, [user]);

    const fetchPayment = async () => {
        const response = await fetch(`https://summer-camp-server-two-topaz.vercel.app/payments/${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('user-access-token')}`
            }
        });
        const data = await response.json();
        setPayment(data)
    };

    if (loading) return <div>Loading...</div>

    return (
        <div>
             <div>
            <p className='text-center my-5 text-xl font-bold'>Class Taken By: {user.displayName}</p>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Transaction ID</th>
                            <th>Total Price</th>
                            <th>Date</th>
                            <th>No of Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.map((course, index) => (
                            <tr key={course._id}>
                                <th>{index + 1}</th>
                                
                                <td>{course.transactionId}</td>
                                <td>{course.price}</td>
                                <td>${course.date}</td>
                                <td>{course.quantity}</td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default PaymentHistory;