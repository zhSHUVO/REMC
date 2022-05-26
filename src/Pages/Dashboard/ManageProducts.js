import React from "react";
import useElectronics from "../../Hooks/useElectronics";

const ManageProducts = () => {
    const [electronics, setElectronics] = useElectronics();

    const deleteProduct = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            console.log("deleting ", id);
            const url = `https://fast-dawn-06225.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        const remaining = electronics.filter(
                            (data) => data._id !== id
                        );
                        setElectronics(remaining);
                    }
                });
        }
    };
    return (
        <div>
            <h1 className="text-center   text-3xl mb-5">
                Total Products : {electronics.length}
            </h1>
            <div className="flex justify-center">
                <div className="overflow-x-auto w-11/12">
                    <table className="table table-auto text-center w-full">
                        <thead>
                            <tr className="hover">
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {electronics.map((electronic) => (
                                <tr className="hover" key={electronic._id}>
                                    <td>
                                        <p>{electronic.name}</p>
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle  w-10 h-10">
                                                <img
                                                    src={electronic.img}
                                                    alt="productImg"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p title={electronic.description}>
                                            {electronic.description.slice(
                                                1,
                                                50
                                            )}
                                            ...
                                        </p>
                                    </td>
                                    <td>
                                        <p>{electronic.stock}</p>
                                    </td>
                                    <td>
                                        <p>${electronic.price}</p>
                                    </td>
                                    <th>
                                        <button
                                            onClick={() =>
                                                deleteProduct(electronic._id)
                                            }
                                            className="border-0"
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

export default ManageProducts;
