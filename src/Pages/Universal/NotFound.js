import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found text-center mt-52">
            <div>
                <h1 className="m-5">Oops!</h1>
                <h3>404 - PAGE NOT FOUND</h3>
                <p>
                    The page you're looking for isn't available or might have
                    been removed.
                </p>
            </div>
            <div className="text-center">
                <Link to="/">
                <button class="btn btn-outline mt-5">Got to home</button>

                </Link>
            </div>
        </div>
    );
};

export default NotFound;
