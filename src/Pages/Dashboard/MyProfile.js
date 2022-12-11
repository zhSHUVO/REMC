import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        const url = `https://remc-server.onrender.com/users/${user.email}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCurrentUser(data));
    }, [user.email]);

    // const firebaseBg = user?.photoURL;
    const userBg = currentUser?.image;

    const firebaseName = user?.displayName;
    const userName = currentUser?.name;

    const usermail = currentUser?.email;
    const updateUser = (usermail) => {
        navigate(`/dashboard/${usermail}`);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-2/5">
                <div
                    className="hero min-h-screen "
                    style={{
                        backgroundImage: `url(${
                            userBg
                                ? userBg
                                : "https://api.lorem.space/image/fashion"
                        })`,
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-2xl">
                                Hello there{" "}
                                <span className="text-5xl font-bold">
                                    {userName ? userName : firebaseName}
                                </span>{" "}
                            </h1>
                            <p>
                                Your name is{" "}
                                <span className="font-bold">
                                    {currentUser?.name}
                                </span>
                            </p>
                            <p>
                                Your email is{" "}
                                <span className="font-bold">{usermail}</span>
                            </p>
                            <p>
                                Your study in{" "}
                                <span className="font-bold">
                                    {currentUser?.education}
                                </span>
                            </p>
                            <p>
                                Your from{" "}
                                <span className="font-bold">
                                    {currentUser?.location}
                                </span>
                            </p>
                            <p>
                                Your contact number is{" "}
                                <span className="font-bold">
                                    {currentUser?.number}
                                </span>
                            </p>

                            <button
                                onClick={() => updateUser(currentUser?.email)}
                                className="btn btn-primary mt-3"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
