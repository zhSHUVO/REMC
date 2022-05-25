import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Universal/Loading";

const Purchase = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;

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
        <div className="flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                    <img
                        className="rounded-lg"
                        src={order?.img}
                        alt="order item pic"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Hello, {order.name}</h2>
                    <p>
                        You are about to pay for{" "}
                        <span className="font-bold">{order.productname}</span>.
                        Ordered{" "}
                        <span className="font-bold">{order.quantity}</span>{" "}
                        pieces for total price.{" "}
                        <span className="font-bold">${order.price}</span>.
                    </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Please Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
