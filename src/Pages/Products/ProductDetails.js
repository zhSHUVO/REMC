import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const productId = useParams();

    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId.id}`;

        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId.id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>
            {/* details */}
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <img
                    src={product.img}
                    alt="Album"
                    className="m-10 max-w-sm rounded-lg shadow-2xl w-96 "
                />
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
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
                        placeholder="Product's Name"
                        className="mb-3 input input-bordered"
                        {...register("product")}
                    />
                    <input
                        placeholder="Available Products"
                        className="mb-3 input input-bordered"
                        type="number"
                        {...register("available")}
                    />
                    <input
                        placeholder="Minimum Order Amount"
                        className="mb-3 input input-bordered"
                        type="number"
                        {...register("order")}
                    />
                    <input
                        placeholder="Price"
                        className="mb-3 input input-bordered"
                        type="number"
                        {...register("price")}
                    />
                    <select
                        className="mb-3 select select-bordered text-[#9ca3af] font-normal"
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
