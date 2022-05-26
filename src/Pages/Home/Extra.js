import React from "react";
import award from "../../assests/images/award.jpg";
import employee from "../../assests/images/emnployee.jpg";
import photo from "../../assests/images/photo.jpg";

const Extra = () => {
    return (
        <div>
            <h1 className="text-center text-3xl my-5">Activities</h1>
            <div className="flex flex-col items-center lg:flex-row justify-evenly">
                <div className="mb-5">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure>
                            <img src={photo} alt="extra" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Photo Gallary</h2>
                            <p>
                                Explore our factories virtually with our huge
                                photo gallary.
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn ">View All</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure>
                            <img src={employee} alt="extra" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Employee of the Month
                            </h2>
                            <p>
                                Let's congratulate our employee of the month.{" "}
                            </p>
                            <div className="card-actions justify-end">
                                <button className="btn ">Let's go</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure>
                            <img src={award} alt="extra" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Awards</h2>
                            <p>Our 15 years of achievements.</p>
                            <div className="card-actions justify-end">
                                <button className="btn ">View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra;
