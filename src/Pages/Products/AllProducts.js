import React from "react";
import useElectronics from "../../Hooks/useElectronics";
import SingleProduct from "./SingleProduct";

const AllProducts = () => {
    const [electronics, setElectronics] = useElectronics();
    return (
        <div>
            <div className="mt-10 px-10">
               <h1 className="text-center text-3xl mb-5">Featured Products</h1>
                <div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 justify-items-center">
                        {electronics.map((electronic) => (
                            <div key={electronic._id}>
                                <SingleProduct
                                    electronic={electronic}
                                ></SingleProduct>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center m-5">
                <button className="btn">View All</button>
            </div>
        </div>
    );
};

export default AllProducts;
