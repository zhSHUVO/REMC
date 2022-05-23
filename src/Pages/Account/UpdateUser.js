import { getAuth, updateProfile } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdateUser = () => {
    const auth = getAuth();
    const [user] = useAuthState(auth);

    console.log(user?.email);
    console.log(user?.displayName);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        updateProfile(auth.currentUser, {
            displayName: data.username,
        })
            .then(() => {
                console.log("Profile updated!");
            })
            .catch((error) => {
                console.log("error!");
            });
        navigate("/");
    };

    return (
        <div>
            <div className="pt-20">
                <h1 className="text-center text-3xl mb-5">Update Username</h1>
                <div className="flex justify-center items-center ">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col lg:w-1/4 w-3/4	shadow-2xl bg-base-100 rounded-xl p-5"
                    >
                        <div className="indicator w-full">
                            <input
                                placeholder="Username"
                                className="my-1 input input-bordered w-full "
                                type="text"
                                {...register("username", {
                                    required: {
                                        value: true,
                                        message: "Name is Required",
                                    },
                                })}
                            />
                            {errors.username && (
                                <span className="indicator-item badge">
                                    Update
                                </span>
                            )}
                        </div>

                        <input
                            value={"Register"}
                            className="my-1 btn btn-primary"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
