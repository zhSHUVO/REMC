import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import assemble from "../../assests/images/assemble.jpg";
import checking from "../../assests/images/checking.jpg";
import gear from "../../assests/images/gear.jpg";
import quality from "../../assests/images/quality.jpg";
import useElectronics from "../../Hooks/useElectronics";
import SingleProduct from "../Products/SingleProduct";
import Review from "../Review/Review";
import BusinessSummery from "./BusinessSummery";
import Extra from "./Extra";

const Home = () => {
    const [electronics, setElectronics] = useElectronics();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {};

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
            <BusinessSummery></BusinessSummery>{" "}
            <h1 className="text-center text-3xl my-5">User Reviews</h1>
            <Review></Review>
            <Extra></Extra>
            <div>
                <h1 className="text-center text-3xl my-5">
                    How do we manage things?
                </h1>
                <div className="flex justify-center">
                    <ul className="steps steps-vertical lg:steps-horizontal">
                        <li className="step step-primary">Register</li>
                        <li className="step step-primary">Choose plan</li>
                        <li className="step">Purchase</li>
                        <li className="step">Receive Product</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl my-5">
                    Subscribe to our Newsletter
                </h1>
                <div className="flex justify-center items-center ">
                    <div className="form-control ">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Your Email Address"
                                className="input input-bordered"
                            />
                            <button className="btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl my-5">
                    Contact to Authority
                </h1>
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col lg:w-2/4 w-3/4 marker:shadow-2xl bg-base-100 rounded-xl p-5"
                    >
                        <div className="indicator w-full">
                            <input
                                placeholder="Your Name"
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
                                placeholder="Your Email Address"
                                className="mb-3 input input-bordered w-full"
                                type="email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                    },
                                })}
                            />
                            {errors.email && (
                                <span className="indicator-item badge">
                                    Required
                                </span>
                            )}
                        </div>
                        <div className="indicator w-full">
                            <textarea
                                placeholder="Your Message"
                                className="mb-3 input input-bordered w-full"
                                type="text-area"
                                {...register("message", {
                                    required: {
                                        value: true,
                                    },
                                })}
                            />
                            {errors.message && (
                                <span className="indicator-item badge">
                                    Required
                                </span>
                            )}
                        </div>

                        <input
                            value={"Ask"}
                            className="mb-3 btn btn-primary"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;
