import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="tabs w-1/5 flex justify-evenly">
                    <Link to="/dashboard/myprofile" className="tab ">
                        My Profile
                    </Link>
                    <Link to="/dashboard" className="tab tab-active">
                        My Orders
                    </Link>
                    <Link to="/dashboard/myreviews" className="tab ">
                        My Reviews
                    </Link>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;
