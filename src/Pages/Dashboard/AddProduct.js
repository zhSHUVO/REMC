import React, { useRef } from "react";

const AddProduct = () => {
    const nameRef = useRef("");
    const desdescriptionRef = useRef("");
    const imgRef = useRef("");
    const minQuantityRef = useRef("");
    const stockRef = useRef("");
    const priceRef = useRef("");

    const add = (event) => {
        event.preventDefault();

        const name = nameRef.current.value;
        const description = desdescriptionRef.current.value;
        const img = imgRef.current.value;
        const minQuantity = minQuantityRef.current.value;
        const stock = stockRef.current.value;
        const price = priceRef.current.value;

        const product = {
            name,
            description,
            img,
            minQuantity,
            stock,
            price,
        };

        fetch("https://remc-server.onrender.com/product/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("New Product Added");
                console.log("success", data);
            });

        event.target.reset();
    };
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <form className="w-full max-w-sm">
                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={nameRef}
                            placeholder="Product's Name"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="text"
                            required
                        />
                    </div>
                </div>

                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={desdescriptionRef}
                            placeholder="Product's Description"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="text"
                        />
                    </div>
                </div>

                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={imgRef}
                            placeholder="Product's Image Link"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="text"
                        />
                    </div>
                </div>

                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={minQuantityRef}
                            placeholder="Minimum Order Quantity"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="number"
                        />
                    </div>
                </div>

                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={stockRef}
                            placeholder="Available Products"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="number"
                        />
                    </div>
                </div>

                <div className=" mb-6">
                    <div className="w-full">
                        <input
                            ref={priceRef}
                            placeholder="Product's Price"
                            className="input input-bordered w-full "
                            id="inline-full-name"
                            type="number"
                        />
                    </div>
                </div>

                <div className="flex justify-center">
                    <button onClick={add} className="btn">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
