import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(
                `https://fast-dawn-06225.herokuapp.com/orders?email=${user.email}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                }
            )
                .then((res) => {
                    if (res.status === 401 && res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    setOrder(data);
                });
        }
    }, [navigate, user]);

    const deleteOrder = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            console.log("deleting ", id);
            const url = `https://fast-dawn-06225.herokuapp.com/orders/${id}`;

            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(
                            (dress) => dress._id !== id
                        );
                        setOrder(remaining);
                    }
                });
        }
    };

    return (
        <div>
            <h1 className="text-center   text-3xl mb-5">
                Total Orders : {orders.length}
            </h1>
            <div className="flex justify-center">
                <div className="overflow-x-auto w-11/12">
                    <table className="table table-auto text-center w-full">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th className="whitespace-nowrap w-px">
                                    Order Quantity
                                </th>
                                <th className="whitespace-nowrap w-px">
                                    Address
                                </th>
                                <th className="whitespace-nowrap w-px">
                                    Total Price
                                </th>
                                <th className="whitespace-nowrap w-px">
                                    Status
                                </th>
                                <th className="whitespace-nowrap w-px">Pay</th>
                                <th className="whitespace-nowrap w-px">
                                    Review
                                </th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <td>
                                        <div className="flex justify-center items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle  w-12 h-12">
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
                                        <p>{order.address}</p>
                                    </td>
                                    <td>
                                        <p className="flex flex-col items-center">
                                            ${order.price}
                                            <span className="badge badge-ghost ml-2 ">
                                                {order.delivery}
                                            </span>
                                        </p>
                                    </td>
                                    <td>
                                        {order.status === "Pending..." ? (
                                            <p className="flex flex-col items-center">
                                                {order.status}
                                            </p>
                                        ) : (
                                            <p className="flex flex-col items-center">
                                                {order.status}
                                                <span
                                                    className="tooltip  badge badge-ghost text-xs"
                                                    data-tip="Transaction Id"
                                                >
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                        )}
                                    </td>
                                    <td>
                                        {order.delivery === "Online Payment" &&
                                        order.status !== "Paid" ? (
                                            <div
                                                className="tooltip"
                                                data-tip="Go to Payment Gateway"
                                            >
                                                <Link
                                                    to={`/dashboard/purchase/${order._id}`}
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
                                                        <path
                                                            fill="none"
                                                            stroke="#000"
                                                            strokeWidth="2"
                                                            d="M1,5.00087166 C1,4.4481055 1.43945834,4 2.00246167,4 L21.9975383,4 C22.5511826,4 23,4.44463086 23,5.00087166 L23,18.9991283 C23,19.5518945 22.5605417,20 21.9975383,20 L2.00246167,20 C1.44881738,20 1,19.5553691 1,18.9991283 L1,5.00087166 Z M1,8 L23,8 L23,10 L1,10 L1,8 Z M5,15 L7,15 L7,15.5 L5,15.5 L5,15 Z M10,15 L16,15 L16,15.5 L10,15.5 L10,15 Z"
                                                        ></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        ) : (
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
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to="/dashboard/addreview"
                                            state={{ name: order.productname }}
                                        >
                                            Give Review
                                        </Link>
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
                                                    height="2em"
                                                    width="2em"
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

export default MyOrders;
