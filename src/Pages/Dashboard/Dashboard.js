import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
            <div className="flex justify-center">
                <div className="tabs w-2/4 mb-7 flex justify-evenly">
                    <Link to="/dashboard" className="tab">
                        My Profile
                    </Link>
                    {admin && (
                        <Link to="/dashboard/myorders" className="tab">
                            My Orders
                        </Link>
                    )}
                    {admin && (
                        <Link to="/dashboard/myreviews" className="tab">
                            My Reviews
                        </Link>
                    )}
                    {admin && (
                        <Link to="/dashboard/addproduct" className="tab">
                            Add Product
                        </Link>
                    )}
                    {admin && (
                        <Link to="/dashboard/manageproducts" className="tab">
                            Manage Products
                        </Link>
                    )}
                    {admin && (
                        <Link to="/dashboard/manageorders" className="tab">
                            Manage Orders
                        </Link>
                    )}
                    {admin && (
                        <Link to="/dashboard/manageusers" className="tab">
                            Manage Users
                        </Link>
                    )}
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
