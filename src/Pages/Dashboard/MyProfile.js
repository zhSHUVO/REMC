import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const bg = user?.photoURL;

    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/users/${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCurrentUser(data));
    }, [user.email]);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-2/5">
                <div
                    className="hero min-h-screen "
                    style={{
                        backgroundImage: `url(${
                            bg ? bg : "https://api.lorem.space/image/fashion"
                        })`,
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl">
                                Hello there{" "}
                                <span className="text-5xl font-bold">
                                    {currentUser.email}
                                </span>{" "}
                            </h1>
                            <p>
                                Ordered by{" "}
                                <span className="font-bold">
                                    {user?.displayName}
                                </span>
                            </p>
                            <p>Email: {user?.email}</p>
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
