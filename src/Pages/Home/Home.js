import React from "react";
import { Link } from "react-router-dom";
import assemble from "../../assests/images/assemble.jpg";
import checking from "../../assests/images/checking.jpg";
import gear from "../../assests/images/gear.jpg";
import quality from "../../assests/images/quality.jpg";
import useElectronics from "../../Hooks/useElectronics";
import SingleProduct from "../Products/SingleProduct";
import Review from "../Review/Review";
import BusinessSummery from "./BusinessSummery";

const Home = () => {
    const [electronics, setElectronics] = useElectronics();

    return (
        <div>
            <h1 className="text-center text-accent text-4xl mb-8">
                Root Electronics and Manufacturing Company
            </h1>

            {/* carousel */}
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={assemble} alt="carouselImg" className="w-full" />{" "}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={checking} alt="carouselImg" className="w-full" />{" "}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={gear} alt="carouselImg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={quality} alt="carouselImg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* Product Showcase */}
            <div className="mt-10 px-10">
                <h1 className="text-center text-3xl mb-5">Featured Products</h1>
                <div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 justify-items-center">
                        {electronics.slice(0, 6).map((electronic) => (
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
                <Link to="/allproducts">
                    <button className="btn">View All</button>
                </Link>
            </div>

            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;
