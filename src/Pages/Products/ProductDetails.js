import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const ProductDetails = () => {
    const [user] = useAuthState(auth);

    const addressRef = useRef("");
    const quantityRef = useRef("");

    const productId = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productId.id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId.id]);

    const [delivery, setDelivery] = useState("");

    const buyProduct = (event) => {
        event.preventDefault();

        const name = user.displayName;
        const userMail = user.email;
        const address = addressRef.current.value;
        const productname = product.name;
        const img = product.img;
        const quantity = quantityRef.current.value;
        const price = product.price * quantity;
        const status = "pending";

        const data = {
            name,
            userMail,
            address,
            productname,
            img,
            quantity,
            price,
            status,
            delivery,
        };

        console.log(data);

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
                <form className="w-full max-w-sm">
                    <div className=" mb-6">
                        <div className="w-full">
                            <input
                                readOnly
                                className="input input-bordered w-full "
                                id="inline-full-name"
                                type="text"
                                value={user?.displayName || ""}
                            />
                        </div>
                    </div>
                    <div className=" mb-6">
                        <div className="w-full">
                            <input
                                readOnly
                                className="input input-bordered w-full"
                                id="inline-full-name"
                                type="text"
                                value={user?.email || ""}
                            />
                        </div>
                    </div>
                    <div className=" mb-6">
                        <div className="w-full">
                            <input
                                ref={addressRef}
                                placeholder="Your Address"
                                className="input input-bordered w-full "
                                id="inline-full-name"
                                type="text"
                            />
                        </div>
                    </div>

                    <div className=" mb-6">
                        <div className="w-full">
                            <input
                                ref={quantityRef}
                                placeholder="Quantity"
                                className="input input-bordered w-full  "
                                id="inline-full-name"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className=" mb-6">
                        <div className="w-full">
                            <select
                                name="delivery"
                                className="select select-bordered w-full "
                                onChange={(e) => {
                                    const selectedDelivery = e.target.value;
                                    setDelivery(selectedDelivery);
                                }}
                            >
                                <option value="">Select Delivery Method</option>
                                <option value="Online Payment">
                                    Online Payment
                                </option>
                                <option value="Cash on Delivery">
                                    Cash on Delivery
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button onClick={buyProduct} className="btn">
                            Buy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;
