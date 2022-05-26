import React from "react";
import { Link } from "react-router-dom";
import fabric from "../../assests/images/fabric.png";
import fps from "../../assests/images/fps.png";
import profileimage from "../../assests/images/profile.jpeg";
import t3 from "../../assests/images/t3.png";

const Portfolio = () => {
    return (
        <div className="bg-base-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={profileimage}
                        className="max-w-2xl rounded-2xl shadow-2xl"
                        alt="profile"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            I'M SHUVO. WEB DESIGN
                        </h1>
                        <p className="py-6">
                            My full name is Md. Zayed Hassan Bhuiyan. I live in
                            Dhaka. I'm a student of computer science at the
                            University of Daffodil.
                        </p>

                        <label for="my-modal-3" class="btn modal-button">
                            More About Me
                        </label>

                        <input
                            type="checkbox"
                            id="my-modal-3"
                            class="modal-toggle"
                        />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label
                                    for="my-modal-3"
                                    class="btn btn-sm btn-circle absolute right-2 top-2"
                                >
                                    ✕
                                </label>
                                <h3 class="text-lg font-bold">
                                    Congratulations random Interner user!
                                </h3>
                                <p class="py-4">
                                    You've been selected for a chance to get one
                                    year of subscription to use Wikipedia for
                                    free!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-5xl font-bold mb-5">
                    About Me
                </h1>
                <dir>
                    <div className="flex">
                        <div>
                            <h1>PERSONAL INFOS</h1>
                            <div className="flex">
                                <dir>
                                    <p>First Name: Steve</p>
                                    <p>Age: 27 Years</p>
                                    <p>Freelance: Available</p>
                                    <p>Phone: +21621184010</p>
                                    <p>Skype: steve.milner</p>
                                </dir>
                                <dir>
                                    <p>Last Name: Milner</p>
                                    <p>Nationality: Tunisian</p>
                                    <p>Address: Tunis</p>
                                    <p>Email: you@mail.com</p>
                                    <p>Langages: French, English</p>
                                </dir>
                            </div>
                            <button class="btn">
                                Download CV{" "}
                                <svg
                                    className="pl-3"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    stroke-width="0"
                                    viewBox="0 0 512 512"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div class="card  glass w-96 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card  glass w-96 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card  glass w-96 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card  glass w-96 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title">Card title!</h2>
                                    <p>
                                        If a dog chews shoes whose shoes does he
                                        choose?
                                    </p>
                                    <div class="card-actions justify-end">
                                        <button class="btn btn-primary">
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </dir>
            </div>
            <div>
                <h1 className="text-center text-5xl font-bold mb-5">
                    My Skill
                </h1>
                <div>
                    <div className="flex  items-center ">
                        <div>
                            <dir className="flex items-center justify-between">
                                <p>HTML</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>CSS</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>BOOTSTRAP</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>JAVASCRIPT</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                        </div>

                        <dir>
                            <dir className="flex items-center justify-between">
                                <p>REACT JS</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>NODE JS</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>FIREBASE</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                            <dir className="flex items-center justify-between">
                                <p>MONGODB</p>
                                <progress
                                    class="progress pl-5 w-56"
                                    value="50"
                                    max="100"
                                ></progress>
                            </dir>
                        </dir>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-center text-5xl font-bold mb-5">
                    Some of My Projects
                </h1>
                <div className="flex">
                    <div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={t3} alt="project" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">T3 PLUS</h2>
                                <p>
                                    Website dedicated to the beautiful Tin Hifi
                                    T3 Plus
                                </p>
                                <div class="card-actions justify-end">
                                    <Link
                                        to={{
                                            pathname: "//t3-plus.netlify.app/",
                                        }}
                                        target="_blank"
                                    >
                                        <button class="btn btn-primary">
                                            Visit
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={fabric} alt="project" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">Fabric House</h2>
                                <p>
                                    Dress warehouse for the celebrations like
                                    eid, weading
                                </p>
                                <div class="card-actions justify-end">
                                    <Link
                                        to={{
                                            pathname:
                                                "//fabric-house-99700.web.app/",
                                        }}
                                        target="_blank"
                                    >
                                        <button class="btn btn-primary">
                                            Visit
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure>
                                <img src={fps} alt="project" />
                            </figure>
                            <div class="card-body">
                                <h2 class="card-title">FPS Coach</h2>
                                <p>
                                    Get training from a professional fps player
                                    and a coach.
                                </p>
                                <div class="card-actions justify-end">
                                    <Link
                                        to={{
                                            pathname: "//fps-coach.web.app/",
                                        }}
                                        target="_blank"
                                    >
                                        <button class="btn btn-primary">
                                            Visit
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
