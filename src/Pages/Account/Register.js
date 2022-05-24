import React, { useEffect } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

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

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.username });
    };

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [navigate, user]);

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
