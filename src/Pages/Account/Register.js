import React, { useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.username });
    };

    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate("/dashboard/myprofile");
        }
    }, [navigate, user]);

    if (loading || updating) {
        return <Loading></Loading>;
    }

    let regError;
    if (error || updateError) {
        regError = (
            <div className="alert alert-warning my-2">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                    </svg>
                    <span>
                        Warning: {error?.message || updateError?.message}
                    </span>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20">
            <h1 className="text-center text-3xl mb-5">Register</h1>
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
                            <span className="indicator-item badge">Update</span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Email"
                            className="my-1 input input-bordered w-full"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Provide a valid Email",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Password"
                            className="my-1 input input-bordered w-full"
                            type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer",
                                },
                            })}
                        />
                        {errors.password && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    <div className="indicator w-full">
                        <input
                            placeholder="Confirn Password"
                            className="my-1 input input-bordered w-full"
                            type="password"
                            {...register("confirmpass", {
                                required: {
                                    value: true,
                                    message: "Confirm Password is Required",
                                },

                                validate: (val: string) => {
                                    if (watch("password") !== val) {
                                        return "Your passwords do no match";
                                    }
                                },
                            })}
                        />
                        {errors.confirmpass && (
                            <span className="indicator-item badge">
                                Required
                            </span>
                        )}
                    </div>

                    {regError}

                    <input
                        value={"Register"}
                        className="my-1 btn btn-primary"
                        type="submit"
                    />
                </form>
            </div>
            <p className="text-center pt-10 ">
                Already have an account?{" "}
                <Link to="/login" className="ml-3 btn btn-primary ">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;
