import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"


function Payment() {
    const [searchparams] = useSearchParams();
    const [price, setPrice] = useState();


    useEffect(() => {
        // eslint-disable-next-line
        setPrice(searchparams.get("price"));
        // eslint-disable-next-line
    }, [])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '17%' }}>
            <PayPalScriptProvider options={{ "client-id": "AbHRW8PLi8vzqcYWE5j-x394xImNUaP46qkL6zbanBpmHoHfFXHOg3kXRqCp8XZ_9Qajn-UZRwNXznk4" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: {price},
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div >
    )
}

export default Payment