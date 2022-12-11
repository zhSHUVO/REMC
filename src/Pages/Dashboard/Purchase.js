import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Universal/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L3QuNDnAKpDGcq3YH9X6tfcV7ihX1sFlymTBm6pxet5xEyne30xNZC1f9Rpkd7JdmgdgtDXm3vSRqO9G4L3W1mF00HoMBW1Et"
);

const Purchase = () => {
    const { id } = useParams();
    const url = `https://remc-server.onrender.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(["orders", id], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={order?.img} alt="order item pic" />
                </figure>
                <div className="card-body flex justify-center ">
                    <div className="flex flex-col text-center items-center ">
                        <h2 className="card-title">Hello, {order.userName}</h2>
                        <p>
                            You are about to pay for{" "}
                            <span className="font-bold">
                                {order.productname}
                            </span>{" "}
                            on behalf of{" "}
                            <span className="font-bold">{order.name}</span>.
                            Ordered{" "}
                            <span className="font-bold">{order.quantity} </span>
                            pieces for total price of{" "}
                            <span className="font-bold">${order.price}</span>
                        </p>
                    </div>
                    <div className="mt-2">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
