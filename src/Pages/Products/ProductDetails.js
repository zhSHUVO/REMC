import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import defaultBd from "../../assests/images/defaultBg.jpg";
import auth from "../../firebase.init";

const ProductDetails = () => {
    const [user] = useAuthState(auth);
    const userPic = user?.photoURL;

    const productId = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `https://remc-server.onrender.com/product/${productId.id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId.id]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const price = parseFloat(product.price * data.quantity).toFixed(2);

        const order = {
            name: data.name,
            userName: user.displayName,
            userMail: user.email,
            number: data.number,
            address: data.address,
            productname: product.name,
            img: product.img,
            quantity: data.quantity,
            price: price,
            status: "Pending...",
            delivery: data.payment,
        };

        console.log(order);

        fetch("https://remc-server.onrender.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Item added to cart.");
                console.log(data);
            });
    };

    return (
        <div>
            {/* details */}
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="lg:mr-10 mb-5 p-10 flex justify-center flex-col items-center">
                    <img
                        src={product.img}
                        alt="Album"
                        className="m-5 rounded-lg shadow-2xl w-52 "
                    />
                    <p>
                        Order for{" "}
                        <span className="font-bold">{product.name}</span>
                    </p>
                    <p>Currently available: {product.stock} pieces</p>
                    <p>Minimum order amount: {product.minQuantity} pieces</p>
                    <p>Price: ${product.price}</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-3/12 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
                >
                    <div className="indicator w-full">
                        <input
                            placeholder="Full Name"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.name && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Contact Number"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("number", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.number && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Address"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("address", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.address && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Quantity"
                            min={product.minQuantity}
                            max={product.stock}
                            className="mb-3 input input-bordered w-full"
                            type="number"
                            {...register("quantity", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.quantity && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <select
                            className="mb-3 select select-bordered font-normal w-full"
                            {...register("payment", {
                                required: {
                                    value: true,
                                },
                            })}
                        >
                            <option value="">Payment Option</option>
                            <option>Online Payment</option>
                            <option>Cash on Delivary</option>
                        </select>
                        {errors.payment && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    <input
                        value={"Add to Cart"}
                        className="mb-3 btn btn-primary"
                        type="submit"
                    />
                </form>
                <div className="lg:ml-10 mb-5 p-10 flex  justify-center flex-col items-center">
                    <div className="avatar">
                        <div className="m-5 lg:w-52 rounded-lg">
                            <img
                                src={userPic ? userPic : defaultBd}
                                alt="Album"
                            />
                        </div>
                    </div>

                    <p>
                        Ordered by{" "}
                        <span className="font-bold">{user?.displayName}</span>
                    </p>
                    <p>Email: {user?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
