import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ electronic }) => {
    const { name, description, img, stock, minQuantity, price } = electronic;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="productImg"
                    className="mt-5 lg:m-0 lg:ml-7"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>
                    <span>Available:</span> {stock} pieces
                </p>
                <p>
                    <span>Minimum order quantity:</span> {minQuantity} pieces
                </p>
                <p>
                    <span>Price:</span> $ {price}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
