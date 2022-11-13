import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
    const [user] = useAuthState(auth);
    const userPic = user?.photoURL;
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken");
    };

    return (
        <div className="navbar bg-base-100 justify-between	lg:px-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>

                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <div className="dropdown dropdown-end">
                                {user ? (
                                    <button onClick={logout}>Logout</button>
                                ) : (
                                    <div>
                                        <Link to="/login">Login</Link>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    REMC
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>

                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>

                <div className="dropdown dropdown-end">
                    {user ? (
                        <div>
                            <label
                                tabIndex="0"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="avatar">
                                    <div className="w-fit	 rounded-full">
                                        <img
                                            src={
                                                userPic
                                                    ? userPic
                                                    : "https://api.lorem.space/image/face?hash=33791"
                                            }
                                            alt="Album"
                                        />
                                    </div>
                                </div>
                            </label>
                            <ul
                                tabIndex="0"
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <p>{user.displayName}</p>
                                </li>
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className="justify-between"
                                    >
                                        Profile
                                    </Link>
                                </li>

                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn btn-ghost"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <Link
                                to="/login"
                                className="btn btn-ghost normal-case text-xl"
                            >
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1.5em"
                                    width="1.5em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g>
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M14 14.252V22H4a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.418 4h3.586v2h-3.586l1.829 1.828-1.414 1.415L15.59 18l4.243-4.243 1.414 1.415L19.418 17z"></path>
                                    </g>
                                </svg>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
