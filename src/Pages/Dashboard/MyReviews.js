import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyReviews = () => {
    const [user] = useAuthState(auth);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews?email=${user.email}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            })
                .then((res) => {
                    if (res.status === 401 && res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate("/");
                    }
                    return res.json();
                })
                .then((data) => {
                    setReviews(data);
                });
        }
    }, [navigate, user]);
    return (
        <div>
            <h1 className="text-center   text-3xl mb-5">My Reviews</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center content-evenly">
                {reviews.map((review) => (
                    <div
                        key={review._id}
                        className="card w-96 bg-neutral text-neutral-content"
                    >
                        <div className="card-body items-center text-center">
                            <div className="flex justify-center">
                                <img
                                    className="w-1/5 mr-5 rounded-full"
                                    src={
                                        review.image
                                            ? review.image
                                            : "https://api.lorem.space/image/face?hash=34396"
                                    }
                                    alt="profileimage"
                                />

                                <h2 className="card-title">
                                    {review.username}
                                </h2>
                            </div>

                            <p>{review.name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Review: {review.review}</p>
                            <p> Suggestion: {review.suggestion} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
