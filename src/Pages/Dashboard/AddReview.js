import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const AddReview = () => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const { name } = location.state;
    const star = "⭐";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userReview = {
            username: user.displayName,
            image: user.photoURL,
            name,
            rating: star.repeat(data.rating),
            review: data.review,
            suggestion: data.suggestion,
        };
        fetch("http://localhost:5000/review/", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userReview),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("New Review Added");
                console.log("success", data);
            });

        console.log(userReview);
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:w-3/12 w-3/4 marker:shadow-2xl bg-base-100 rounded-xl p-5"
            >
                <div className="indicator w-full">
                    <input
                        placeholder="Product Rating Out of 5"
                        min={1}
                        max={5}
                        className="mb-3 input input-bordered w-full"
                        type="number"
                        {...register("rating", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.rating && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <div className="indicator w-full">
                    <input
                        placeholder="How was the product?"
                        className="mb-3 input input-bordered w-full"
                        type="text"
                        {...register("review", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.review && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>
                <div className="indicator w-full">
                    <input
                        placeholder="How can we improve this product?"
                        className="mb-3 input input-bordered w-full"
                        type="text"
                        {...register("suggestion", {
                            required: {
                                value: true,
                            },
                        })}
                    />
                    {errors.suggestion && (
                        <span className="indicator-item badge">Required</span>
                    )}
                </div>

                <input
                    value={"Submit Review"}
                    className="mb-3 btn btn-primary"
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddReview;
