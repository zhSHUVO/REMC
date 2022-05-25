import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        if (user) {
            fetch("http://localhost:5000/allorders")
                .then((res) => res.json())
                .then((data) => setAllOrders(data));
        }
    }, [user]);

    const deleteOrder = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            console.log("deleting ", id);
            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = allOrders.filter(
                            (dress) => dress._id !== id
                        );
                        setAllOrders(remaining);
                    }
                });
        }
    };
    return (
        <div>
            <h1 className="text-center   text-3xl mb-5">
                Total Orders : {allOrders.length}
            </h1>
            <div className="flex justify-center">
                <div className="overflow-x-auto w-11/12">
                    <table className="table  text-center w-full">
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th className="whitespace-nowrap w-px">Contact Number</th>
                                <th>Address</th>
                                <th>Product</th>
                                <th className="whitespace-nowrap w-px">Order Quantity</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allOrders.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <p className="flex flex-col items-center justify-center">
                                            {order.name}
                                            <span className="badge badge-ghost">
                                                {order.userMail}
                                            </span>
                                        </p>
                                    </td>
                                    <td>
                                        <p>{order.number}</p>
                                    </td>
                                    <td>
                                        <p>{order.address}</p>
                                    </td>
                                    <td>
                                        <div className="flex justify-center items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle  w-10 h-10">
                                                    <img
                                                        src={order.img}
                                                        alt="productImg"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {order.productname}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{order.quantity}</p>
                                    </td>
                                    <td>
                                        <p className="flex items-center flex-col justify-center">
                                            ${order.price}
                                            <span className="badge badge-ghost ml-2 ">
                                                {order.delivery}
                                            </span>
                                        </p>
                                    </td>
                                    <td>
                                        <p>{order.status}</p>
                                    </td>
                                    <th>
                                        {order.status === "Paid" ? (
                                            <div
                                                className="tooltip"
                                                data-tip="Payment Done"
                                            >
                                                <p>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        version="1.2"
                                                        baseProfile="tiny"
                                                        viewBox="0 0 24 24"
                                                        height="1.5em"
                                                        width="1.5em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path>
                                                    </svg>
                                                </p>
                                            </div>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    deleteOrder(order._id)
                                                }
                                                className="border-0 "
                                            >
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 24 24"
                                                    height="1.5em"
                                                    width="1.5em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path>
                                                </svg>
                                            </button>
                                        )}
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

export default ManageOrders;
