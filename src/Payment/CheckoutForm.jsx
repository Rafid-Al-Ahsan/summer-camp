import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure"
import useAuth from "../hooks/useAuth";


const CheckoutForm = ({ price }) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    useEffect( () => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    } ,[])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
            console.log('payment method', paymentMethod);
        }

        const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                  card: card,
                  billing_details: {
                     email: user?.email || 'unknown',
                     name: user?.displayName || 'anonymous'
                  },
                },
            },
        );

        if(confirmError){
            console.log(confirmError);
        }
        console.log(cardError);
        
    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-primary1 bt-sm mt-4" type="submit" >
                    Pay
                </button>
            </form>
            
        </>
    );
};

export default CheckoutForm;


