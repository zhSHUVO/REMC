import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ProductDetails = () => {
    const [user] = useAuthState(auth);

    const productId = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId.id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId.id]);

    const userInfo = {
        username: user?.displayName,
        email: user?.email,
    };

    console.log(userInfo);

    const { register, handleSubmit } = useForm({
        defaultValues: userInfo,
    });

    const onSubmit = (data) => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
                    <input
                        placeholder="Username"
                        className="mb-3 input input-bordered"
                        {...register("username")}
                    />
                    <input
                        placeholder="Email"
                        className="mb-3 input input-bordered"
                        type="email"
                        {...register("email")}
                    />
                    <input
                        value={product?.name}
                        placeholder="Product Name"
                        className="mb-3 input input-bordered"
                        {...register("product")}
                    />

                    <input
                        placeholder="Quantity"
                        min={product.minQuantity}
                        max={product.stock}
                        className="mb-3 input input-bordered"
                        type="number"
                        {...register("quantity")}
                    />
                    <select
                        className="mb-3 select select-bordered font-normal"
                        {...register("payment")}
                    >
                        <option value="">Payment Option</option>
                        <option>Online Payment</option>
                        <option>Cash on Delivary</option>
                    </select>

                    <input
                        value={"buy"}
                        className="mb-3 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;
