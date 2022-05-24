import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => setOrder(data));
        }
    }, [user]);

    return (
        <div>
            <h1 className="text-center   text-3xl mb-5">
                Total Orders : {orders.length}
            </h1>
            <div className="flex justify-center">
                <div className="overflow-x-auto w-11/12">
                    <table className="table text-center w-full">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <th>Product</th>
                                <th>Order Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex justify-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={order.img}
                                                        alt="productImg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {order.product}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{order.quantity}</td>
                                    <td>
                                        {order.price}
                                        <span className="badge badge-ghost badge-sm">
                                            {order.payment}
                                        </span>
                                    </td>
                                    <td>{order.status}</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
                                            details
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
