import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");

    const { _id, name, userMail, productname, price } = order;

    useEffect(() => {
        fetch("https://fast-dawn-06225.herokuapp.com/create-payment-intent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess("");
        setProcessing(true);

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: userMail,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        } else {
            setCardError("");
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess("Payment Successful");

            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            };
            fetch(`https://fast-dawn-06225.herokuapp.com/orders/${_id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => {
                    setProcessing(false);
                    console.log(data);
                });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-active btn-sm mt-4"
                    type="submit"
                    disabled={!stripe || !clientSecret}
                >
                    Pay
                </button>
            </form>
            {cardError && (
                <div className="alert alert-warning shadow-lg mt-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6 "
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                        </svg>
                        <span>{cardError}</span>
                    </div>
                </div>
            )}
            {success && (
                <div className="text-green-500">
                    <div className="alert alert-success shadow-lg mt-2">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current flex-shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span className="text-sm">
                                {success}, Transaction ID:{" "}
                                <span className="font-bold ">
                                    "{transactionId}"
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutForm;
