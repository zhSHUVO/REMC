import React from "react";

const BusinessSummery = () => {
    return (
        <div>
            <h1 className="text-center text-3xl mb-5">Our Progress</h1>

            <div className="flex justify-center">
                <div className="grid lg:grid-cols-6 grid-cols-2 max-w-max">
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">23 Countries</p>
                        </div>
                    </div>
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M128 96c26.5 0 48-21.5 48-48S154.5 0 128 0 80 21.5 80 48s21.5 48 48 48zm384 0c26.5 0 48-21.5 48-48S538.5 0 512 0s-48 21.5-48 48 21.5 48 48 48zm125.7 372.1l-44-110-41.1 46.4-2 18.2 27.7 69.2c5 12.5 17 20.1 29.7 20.1 4 0 8-.7 11.9-2.3 16.4-6.6 24.4-25.2 17.8-41.6zm-34.2-209.8L585 178.1c-4.6-20-18.6-36.8-37.5-44.9-18.5-8-39-6.7-56.1 3.3-22.7 13.4-39.7 34.5-48.1 59.4L432 229.8 416 240v-96c0-8.8-7.2-16-16-16H240c-8.8 0-16 7.2-16 16v96l-16.1-10.2-11.3-33.9c-8.3-25-25.4-46-48.1-59.4-17.2-10-37.6-11.3-56.1-3.3-18.9 8.1-32.9 24.9-37.5 44.9l-18.4 80.2c-4.6 20 .7 41.2 14.4 56.7l67.2 75.9 10.1 92.6C130 499.8 143.8 512 160 512c1.2 0 2.3-.1 3.5-.2 17.6-1.9 30.2-17.7 28.3-35.3l-10.1-92.8c-1.5-13-6.9-25.1-15.6-35l-43.3-49 17.6-70.3 6.8 20.4c4.1 12.5 11.9 23.4 24.5 32.6l51.1 32.5c4.6 2.9 12.1 4.6 17.2 5h160c5.1-.4 12.6-2.1 17.2-5l51.1-32.5c12.6-9.2 20.4-20 24.5-32.6l6.8-20.4 17.6 70.3-43.3 49c-8.7 9.9-14.1 22-15.6 35l-10.1 92.8c-1.9 17.6 10.8 33.4 28.3 35.3 1.2.1 2.3.2 3.5.2 16.1 0 30-12.1 31.8-28.5l10.1-92.6 67.2-75.9c13.6-15.5 19-36.7 14.4-56.7zM46.3 358.1l-44 110c-6.6 16.4 1.4 35 17.8 41.6 16.8 6.6 35.1-1.7 41.6-17.8l27.7-69.2-2-18.2-41.1-46.4z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">52 Companies</p>
                        </div>
                    </div>
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 16 16"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1 7.4l.7.7 6-6 6 6 .7-.7L8.1 1h-.7L1 7.4zm0 6l.7.7 6-6 6 6 .7-.7L8.1 7h-.7L1 13.4z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">15 Years</p>
                        </div>
                    </div>
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M384 64l.387 256H368l-96-128-16 128-96-128-16 128-96-128-16 128v160h448V64h-32v256h-32V64h-32zM64 352h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zM64 416h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">5 Factories</p>
                        </div>
                    </div>
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 512 512"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M349.1 334.7c-11.2-4-29.5-4.2-37.6-7.3-5.6-2.2-14.5-4.6-17.4-8.1-2.9-3.5-2.9-28.5-2.9-28.5s7-6.6 9.9-14c2.9-7.3 4.8-27.5 4.8-27.5s6.6 2.8 9.2-10.4c2.2-11.4 6.4-17.4 5.3-25.8-1.2-8.4-5.8-6.4-5.8-6.4s5.8-8.5 5.8-37.4c0-29.8-22.5-59.1-64.6-59.1-42 0-64.7 29.4-64.7 59.1 0 28.9 5.7 37.4 5.7 37.4s-4.7-2-5.8 6.4c-1.2 8.4 3 14.4 5.3 25.8 2.6 13.3 9.2 10.4 9.2 10.4s1.9 20.1 4.8 27.5c2.9 7.4 9.9 14 9.9 14s0 25-2.9 28.5-11.8 5.9-17.4 8c-8 3.1-26.3 3.5-37.6 7.5-11.2 4-45.8 22.2-45.8 67.2h278.3c.1-45.1-34.5-63.3-45.7-67.3z"></path>
                                    <path d="M140 286s23.9-.8 33.4-9.3c-15.5-23.5-7.1-50.9-10.3-76.5-3.2-25.5-17.7-40.8-46.7-40.8h-.4c-28 0-43.1 15.2-46.3 40.8-3.2 25.5 5.7 56-10.2 76.5C69 285.3 93 285 93 285s1 14.4-1 16.8c-2 2.4-7.9 4.7-12 5.5-8.8 1.9-18.1 4.5-25.9 7.2-7.8 2.7-22.6 17.2-22.6 37.2h80.3c2.2-8 17.3-22.3 32-29.8 9-4.6 17.9-4.3 24.7-5.2 0 0 3.8-6-8.7-8.3 0 0-17.2-4.3-19.2-6.7-1.9-2.2-.6-15.7-.6-15.7zM372 286s-23.9-.8-33.4-9.3c15.5-23.5 7.1-50.9 10.3-76.5 3.2-25.5 17.7-40.8 46.7-40.8h.4c28 0 43.1 15.2 46.3 40.8 3.2 25.5-5.7 56 10.2 76.5-9.5 8.6-33.5 8.3-33.5 8.3s-1 14.4 1 16.8c2 2.4 7.9 4.7 12 5.5 8.8 1.9 18.1 4.5 25.9 7.2 7.8 2.7 22.6 17.2 22.6 37.2h-80.3c-2.2-8-17.3-22.3-32-29.8-9-4.6-17.9-4.3-24.7-5.2 0 0-3.8-6 8.7-8.3 0 0 17.2-4.3 19.2-6.7 1.9-2.2.6-15.7.6-15.7z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">452677 Employees</p>
                        </div>
                    </div>
                    <div className="card w-52 ">
                        <div className="card-body flex items-center">
                            <h2 className="card-title">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="4em"
                                    width="4em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="none"
                                        d="M5.058 8.005L11.972 11.872 14.653 10.382 7.819 6.477zM18 10.825L18 14 16 15 16 11.944 13.002 13.622 13 19.301 20 15.411 20 9.706zM11 13.621L4 9.705 4 15.411 11 19.301zM16.697 9.247L18.941 8 12.02 4.153 9.867 5.344z"
                                    ></path>
                                    <path d="M21.993,7.95c-0.003-0.072-0.01-0.145-0.029-0.214c-0.007-0.025-0.021-0.049-0.03-0.074 c-0.021-0.057-0.04-0.113-0.07-0.165c-0.016-0.027-0.038-0.049-0.057-0.075c-0.032-0.045-0.063-0.091-0.102-0.13 c-0.023-0.022-0.053-0.04-0.078-0.061c-0.039-0.032-0.075-0.067-0.12-0.094c-0.004-0.003-0.009-0.003-0.014-0.006 c-0.003-0.002-0.005-0.004-0.008-0.006l-8.979-4.99c-0.301-0.168-0.667-0.167-0.97-0.001l-9.021,4.99 C2.512,7.127,2.509,7.131,2.504,7.134c-0.003,0.001-0.007,0.002-0.01,0.004C2.459,7.158,2.433,7.187,2.4,7.211 C2.364,7.238,2.326,7.262,2.294,7.293C2.264,7.324,2.241,7.36,2.215,7.395C2.188,7.43,2.158,7.461,2.136,7.499 C2.11,7.542,2.096,7.591,2.077,7.638c-0.014,0.033-0.032,0.064-0.041,0.1c-0.019,0.067-0.025,0.139-0.029,0.21 C2.006,7.965,2,7.98,2,7.998v0.001V8v8c0,0.363,0.197,0.698,0.515,0.874l8.978,4.987l0.001,0.001c0.001,0,0.001,0,0.002,0.001 l0.02,0.011c0.043,0.024,0.09,0.037,0.135,0.054c0.032,0.013,0.063,0.03,0.097,0.039C11.829,21.988,11.915,22,12,22 s0.171-0.012,0.254-0.033c0.033-0.009,0.064-0.026,0.097-0.039c0.045-0.017,0.092-0.029,0.135-0.054l0.02-0.011 c0.001-0.001,0.001-0.001,0.002-0.001l0.001-0.001l8.978-4.987C21.803,16.698,22,16.363,22,16V8V7.999V7.998 C22,7.981,21.994,7.967,21.993,7.95z M11.972,11.872L5.058,8.005l2.762-1.528l6.834,3.905L11.972,11.872z M12.02,4.153L18.941,8 l-2.244,1.247l-6.83-3.903L12.02,4.153z M4,9.705l7,3.916v5.68l-7-3.89V9.705z M13,19.301l0.002-5.679L16,11.944V15l2-1v-3.175 l2-1.119v5.705L13,19.301z"></path>
                                </svg>
                            </h2>
                            <p className="font-bold">10189300 Products</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* stats */}
            <div className="w-11/12  lg:w-auto">
                <div className="flex justify-center">
                    <div className="stats stats-vertical lg:stats-horizontal shadow ">
                        <div className="stat">
                            <div className="stat-figure ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="2em"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-6H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z"></path>
                                    </g>
                                </svg>
                            </div>
                            <div className="stat-title">Top Buyer</div>
                            <div className="stat-value ">1.6 million</div>
                            <div className="stat-desc">9% more than others</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure ">
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 640 512"
                                    height="2em"
                                    width="2em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
                                </svg>
                            </div>
                            <div className="stat-title">With us for</div>
                            <div className="stat-value ">7 years</div>
                            <div className="stat-desc">
                                12% more than others
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure ">
                                <div className="avatar ">
                                    <div className="w-16 rounded-full">
                                        <img
                                            src="https://api.lorem.space/image/house?w=128&h=128"
                                            alt="companyImg"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">92%</div>
                            <div className="stat-title">Positive Review</div>
                            <div className="stat-desc ">7 upcoming orders</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;
