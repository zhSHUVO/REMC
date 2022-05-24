import React from "react";

const Loading = () => {
    return (
        <div>
            <div className="flex flex-row  justify-center items-center h-screen">
                <div className="animate-ping">Please Wait</div>
            </div>
        </div>
    );
};

export default Loading;
