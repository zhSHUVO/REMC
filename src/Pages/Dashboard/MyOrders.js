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

    const deleteOrder = (id) => {
        console.log("deleting ", id);
        const url = `http://localhost:5000/orders/${id}`;

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
    };

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
                                <th>Address</th>
                                <th>Total Price</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order._id}>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox"
                                            />
                                        </label>
                                    </th>
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
                                    <td>{order.quantity}</td>
                                    <td>{order.address}</td>
                                    <td>
                                        <p className="flex items-center justify-center">
                                            ${order.price}
                                            <span className="badge badge-ghost ml-2 ">
                                                {order.delivery}
                                            </span>
                                        </p>
                                    </td>
                                    <td>{order.status}</td>
                                    <th>
                                        <label
                                            htmlFor="my-modal-3"
                                            className="btn btn-ghost modal-button"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokwidth="0"
                                                viewBox="0 0 1024 1024"
                                                height="1.5em"
                                                width="1.5em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                                            </svg>
                                        </label>

                                        <input
                                            type="checkbox"
                                            id="my-modal-3"
                                            className="modal-toggle"
                                        />
                                        <div className="modal">
                                            <div className="modal-box relative">
                                                <label
                                                    htmlFor="my-modal-3"
                                                    className="btn btn-sm btn-circle absolute right-2 top-2"
                                                >
                                                    ✕
                                                </label>
                                                <h1 className="text-lg font-bold">
                                                    Are you sure you want to
                                                    delete this order?
                                                </h1>
                                                <button
                                                    onClick={() =>
                                                        deleteOrder(order._id)
                                                    }
                                                    className="btn btn-ghost btn-circle"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokwidth="0"
                                                        viewBox="0 0 1024 1024"
                                                        height="2em"
                                                        width="2em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
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
