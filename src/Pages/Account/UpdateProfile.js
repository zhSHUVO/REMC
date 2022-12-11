import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { usermail } = useParams();

    const onSubmit = (data) => {
        const name = data.name;
        const image = data.img;
        const education = data.education;
        const location = data.location;
        const number = data.number;

        const userInfo = {
            name,
            image,
            education,
            location,
            number,
        };

        console.log("data", data);
        const email = usermail;

        fetch(`https://remc-server.onrender.com/update/users/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:w-1/4 w-3/4 marker:shadow-2xl bg-base-100 rounded-xl p-5"
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
                            placeholder="Your Image Url"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("img", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.img && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="You Study in"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("education.", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.education && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Your From"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("location.", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.location && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>
                    <div className="indicator w-full">
                        <input
                            placeholder="Your Contact Number"
                            className="mb-3 input input-bordered w-full"
                            type="text"
                            {...register("number.", {
                                required: {
                                    value: true,
                                },
                            })}
                        />
                        {errors.number && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    <input
                        value={"Update"}
                        className="mb-3 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
