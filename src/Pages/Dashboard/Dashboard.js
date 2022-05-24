import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="tabs w-2/4	 flex justify-evenly">
                    <Link to="/dashboard/myprofile" className="tab">
                        My Profile
                    </Link>
                    <Link to="/dashboard" className="tab">
                        My Orders
                    </Link>
                    <Link to="/dashboard/myreviews" className="tab">
                        My Reviews
                    </Link>
                    <Link to="/dashboard/manageorders" className="tab">
                        Manage Orders
                    </Link>
                    <Link to="/dashboard/addproduct" className="tab">
                        Add Product
                    </Link>
                    <Link to="/dashboard/manageproducts" className="tab">
                        Manage Products
                    </Link>
                    <Link to="/dashboard/manageusers" className="tab">
                        Manage Users
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
